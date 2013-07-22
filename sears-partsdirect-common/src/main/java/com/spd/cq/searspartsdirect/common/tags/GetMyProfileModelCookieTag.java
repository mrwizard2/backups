package com.spd.cq.searspartsdirect.common.tags;

import javax.servlet.http.Cookie;
import javax.servlet.jsp.JspException;

import com.spd.cq.searspartsdirect.common.helpers.Constants;
import com.spd.cq.searspartsdirect.common.helpers.PartsDirectCookieHelper;

public class GetMyProfileModelCookieTag extends CQBaseTag {
	private static final long serialVersionUID = 1L;
	
	@Override
	public int doStartTag() throws JspException {
		Cookie[] cookies = request.getCookies();
		Cookie myProfileModelCookie = null;
		
		if (cookies != null) {
			myProfileModelCookie = PartsDirectCookieHelper.getCookieInfo(cookies,
					Constants.MY_MODEL_COOKIE);
			
			if (myProfileModelCookie != null) {
				pageContext.setAttribute("myProfileModelCookie", myProfileModelCookie.getValue());
			} else {
				pageContext.setAttribute("myProfileModelCookie", "");
			}
		}
		 return SKIP_BODY;
	}
	
	@Override
    public int doEndTag() throws JspException {
        return EVAL_PAGE;
    }

}
