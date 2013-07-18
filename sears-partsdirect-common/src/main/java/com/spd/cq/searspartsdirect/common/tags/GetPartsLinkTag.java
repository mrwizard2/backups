package com.spd.cq.searspartsdirect.common.tags;

import javax.servlet.jsp.JspException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.spd.cq.searspartsdirect.common.helpers.ModelSubcomponentAPIHelper;
import com.spd.cq.searspartsdirect.common.model.PDModelSubcomponentModel;
import com.spd.cq.searspartsdirect.common.model.PDTab;

public class GetPartsLinkTag extends CQBaseTag {
	
	private static final long serialVersionUID = 1L;
	protected final static Logger log = LoggerFactory.getLogger(GetPartsLinkTag.class);
	private String brandName;
	private String categoryName;
	private String modelNumber;
	
	@Override
	public int doStartTag() throws JspException {
		try {
			ModelSubcomponentAPIHelper apiHelper = new ModelSubcomponentAPIHelper(brandName, categoryName, modelNumber);
			PDModelSubcomponentModel subcomponents = apiHelper.getModelSubcomponents(slingRequest);
			PDTab[] apiTabs = subcomponents.getTabsArr();
			for (PDTab tab : apiTabs) {
				if (tab.getTabsName().equals("Parts")) {
					pageContext.setAttribute("findPartUrl", tab.getTabsLink());
					break;
				}
			}
		} catch (Exception e) {
			log.error("Reading parts tab url from API, ",e.fillInStackTrace());
		}
		return SKIP_BODY;
	}

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getModelNumber() {
		return modelNumber;
	}

	public void setModelNumber(String modelNumber) {
		this.modelNumber = modelNumber;
	}
}
