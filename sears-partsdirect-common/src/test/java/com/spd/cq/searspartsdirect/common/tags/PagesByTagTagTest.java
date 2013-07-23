package com.spd.cq.searspartsdirect.common.tags;


import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.isA;
import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.nullValue;
import static org.hamcrest.Matchers.hasSize;

import java.util.List;

import javax.servlet.jsp.tagext.TagSupport;

import org.junit.Before;
import org.junit.Test;

import com.day.cq.wcm.api.Page;
import com.spd.cq.searspartsdirect.common.fixture.PagesByTagTagFixture;

public class PagesByTagTagTest extends MocksTag {

	private PagesByTagTagFixture fixture;
	private PagesByTagTag tag; // tag
	
	@Before
	protected void setUp() throws Exception {
		super.setUp();
		fixture = new PagesByTagTagFixture(resourceResolver);
		tag = new PagesByTagTag();
	}

	@Test
	public void testTagUsage() {
		try {
			tag.setPageContext(pageContext);
			tag.setTag(fixture.getTestTag());
			int startResult = tag.doStartTag();
			assertThat(startResult,is(TagSupport.SKIP_BODY));
			int endResult = tag.doEndTag();
			assertThat(endResult,is(TagSupport.EVAL_PAGE));
			@SuppressWarnings("unchecked")
			List<Page> pages = (List<Page>)pageContext.getAttribute("taggedPages");
			assertThat(pages,not(nullValue()));
			assertThat(pages,isA(List.class));
			assertThat(pages,hasSize(2));
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	@Test
	public void testTagUsageBadTag() {
		try {
			tag.setPageContext(pageContext);
			tag.setTag(fixture.getTestTag());
			fixture.breakTestTag();
			int startResult = tag.doStartTag();
			assertThat(startResult,is(TagSupport.SKIP_BODY));
			int endResult = tag.doEndTag();
			assertThat(endResult,is(TagSupport.EVAL_PAGE));
			@SuppressWarnings("unchecked")
			List<Page> pages = (List<Page>)pageContext.getAttribute("taggedPages");
			assertThat(pages,nullValue()); // as it turns out, in this case we get null rather than empty
			//assertThat(pages,isA(List.class));
			//assertThat(pages,hasSize(0));
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
