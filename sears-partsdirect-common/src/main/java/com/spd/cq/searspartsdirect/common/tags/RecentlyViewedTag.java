package com.spd.cq.searspartsdirect.common.tags;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class RecentlyViewedTag extends CQBaseTag {
	
	private static final long serialVersionUID = 1L;
	protected static Logger log = LoggerFactory.getLogger(RecentlyViewedTag.class);
	
	
	@Override
	public int doStartTag() throws JspException {
	 boolean recentlyViewed = false;	
		try {
			JspWriter out = pageContext.getOut();
			
			//Make the API call to get the recently viewed model and parts 
			 if (recentlyViewed) {
				 out.print("Show the recenytly viewed model and parts here");
			 } else {
				 out.print("do not show any items if none are viewed yet");
			 }

		} catch (IOException e) {
			log.error("Error in getting recently viewed API call" + e.getStackTrace());
		}
		return SKIP_BODY;
	}
	

	@Override
    public int doEndTag() throws JspException {
        return EVAL_PAGE;
    }

}
