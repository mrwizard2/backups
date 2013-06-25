package com.spd.cq.searspartsdirect.common.tags;


import java.util.List;

import javax.servlet.jsp.tagext.TagSupport;

import org.junit.Before;
import org.junit.Test;

import com.spd.cq.searspartsdirect.common.fixture.GetAssetsTagFixture;
import com.spd.cq.searspartsdirect.common.helpers.AssetType;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class GetAssetsTagTest extends MocksTag {

	private GetAssetsTagFixture fixture;
	private GetAssetsTag tag;
	
	@Before
	protected void setUp() throws Exception {
		super.setUp();
		fixture = new GetAssetsTagFixture(resourceResolver,pageManager);
		tag = new GetAssetsTag();
	}

	@Test
	public void testAllAssetTypesAllFilters() {
		try {
			for (AssetType type : AssetType.values()) {
				tag.setPageContext(pageContext);
				tag.setAssetType(type.toString());
				tag.setBrandFilter("Acme");
				tag.setProductCategoryFilter("Portable holes");
				tag.setTagFilter("Freeze");
				tag.setAuthorFilter("Staff");
				int startResult = tag.doStartTag();
				assertThat(startResult,is(TagSupport.SKIP_BODY));
				int endResult = tag.doEndTag();
				assertThat(endResult,is(TagSupport.EVAL_PAGE));
				@SuppressWarnings("unchecked")
				List<Object> result = (List<Object>)pageContext.getAttribute(type.toString()+"List");
				assertThat(result,isA(List.class));
				assertThat(result,hasSize(3));
			}
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	@Test
	public void testAllAssetTypesNoFilters() {
		try {
			for (AssetType type : AssetType.values()) {
				tag.setPageContext(pageContext);
				tag.setAssetType(type.toString());
				int startResult = tag.doStartTag();
				assertThat(startResult,is(TagSupport.SKIP_BODY));
				int endResult = tag.doEndTag();
				assertThat(endResult,is(TagSupport.EVAL_PAGE));
				@SuppressWarnings("unchecked")
				List<Object> result = (List<Object>)pageContext.getAttribute(type.toString()+"List");
				assertThat(result,isA(List.class));
				assertThat(result,hasSize(3));
			}
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
