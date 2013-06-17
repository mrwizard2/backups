package com.spd.cq.searspartsdirect.common.tags;

import java.util.LinkedList;

import javax.servlet.jsp.JspException;

import junit.framework.Assert;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import com.spd.cq.searspartsdirect.common.fixture.RecentlyViewedFixture;
import com.spd.cq.searspartsdirect.common.model.ModelCookieModel;
import com.spd.cq.searspartsdirect.common.model.PartCookieModel;

public class RecentlyViewedTagTest extends MocksTag {
	RecentlyViewedFixture recentlyViewedFixture;
	RecentlyViewedTag recentlyViewedTag;

	@Before
	protected void setUp()  throws Exception {
		super.setUp();
		recentlyViewedFixture = new RecentlyViewedFixture();
		recentlyViewedTag = new RecentlyViewedTag();
	}

	@Test
	public void testWithNoCookie() throws JspException {
		Mockito.when(pageContext.getRequest()).thenReturn(request);
		Mockito.when(request.getCookies()).thenReturn(null);

		recentlyViewedTag.setPageContext(pageContext);
		recentlyViewedTag.doStartTag();
	}
	
	@Test
	public void testWithNoMatchingCookie() throws JspException {
		Mockito.when(pageContext.getRequest()).thenReturn(request);
		Mockito.when(request.getCookies()).thenReturn(recentlyViewedFixture.getCookie());

		recentlyViewedTag.setPageContext(pageContext);
		recentlyViewedTag.doStartTag();
	}

	@SuppressWarnings("unchecked")
	@Test
	public void testWithMatchingCookies() throws JspException {
		LinkedList<ModelCookieModel> modelList = recentlyViewedFixture.getModelList();
		LinkedList<PartCookieModel> partList = recentlyViewedFixture.getPartList();

		Mockito.when(pageContext.getRequest()).thenReturn(request);
		Mockito.when(request.getCookies()).thenReturn(recentlyViewedFixture.getPartAndModelCookie());
		Mockito.when(pageContext.getAttribute("rvModelList")).thenReturn(modelList);
		Mockito.when(pageContext.getAttribute("rvPartList")).thenReturn(partList);

		recentlyViewedTag.setPageContext(pageContext);
		recentlyViewedTag.doStartTag();

		LinkedList<ModelCookieModel> actualModelList = (LinkedList<ModelCookieModel>) pageContext.getAttribute("rvModelList");
		Assert.assertNotNull(actualModelList);
		Assert.assertTrue(actualModelList.size() > 0);
		Assert.assertEquals("3333", actualModelList.get(0).getItemName());
		Assert.assertEquals("Some description", actualModelList.get(0).getItemDescription());
		Assert.assertEquals("http://www.SPD.com/ModelUrl",actualModelList.get(0).getItemURL());

		LinkedList<PartCookieModel> actualPartList = (LinkedList<PartCookieModel>) pageContext.getAttribute("rvPartList");
		Assert.assertNotNull(actualPartList);
		Assert.assertTrue(actualPartList.size() > 0);
		Assert.assertEquals("9010P", actualPartList.get(0).getItemName());
		Assert.assertEquals("water filter", actualPartList.get(0).getItemDescription());
		Assert.assertEquals("itemImageURL", actualPartList.get(0).getItemImageURL());
		Assert.assertEquals("partUrl", actualPartList.get(0).getItemURL());
	}
}