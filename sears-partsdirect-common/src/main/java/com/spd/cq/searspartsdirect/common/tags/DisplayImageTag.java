package com.spd.cq.searspartsdirect.common.tags;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;

import org.apache.sling.api.resource.Resource;

import com.day.cq.commons.Doctype;
import com.day.cq.wcm.api.components.DropTarget;
import com.day.cq.wcm.foundation.Image;

/**
 * Custom Tag to display an Image, markup included. Markup is based on the nature of the image, so must be included in Java
 * Path attribute directs the Image to a particular node in the content, otherwise defaults to currentNode
 * @author Joseph
 *
 */
public class DisplayImageTag extends CQBaseTag {
	
	protected String path;
	protected boolean decorated = true;

	@Override
	public int doStartTag() throws JspException {
		JspWriter out = pageContext.getOut();
		Resource imgResource = resource;
		if (path.startsWith("/")) {
			imgResource = resourceResolver.resolve(path);
			path = null;
		}
		Image image = path == null ? new Image(imgResource) : new Image(imgResource,path);
		
	    //drop target css class = dd prefix + name of the drop target in the edit config
	    image.addCssClass(DropTarget.CSS_CLASS_PREFIX + "image");
	    image.loadStyleData(currentStyle);
	    image.setSelector(".img"); // use image script
	    image.setDoctype(Doctype.fromRequest(request));
	    // add design information if not default (i.e. for reference paras)
	    if (!currentDesign.equals(resourceDesign)) {
	        image.setSuffix(currentDesign.getId());
	    }
	    String divId = "cq-image-jsp-" + imgResource.getPath();
	    try {
	    	if (decorated) out.write("<div id=\"" + divId + "\">");
	    	image.draw(out);
	    	if (decorated) out.write("</div>");
	    }
	    catch (Exception e) {
	    }
        return SKIP_BODY;
	}
	
	@Override
    public int doEndTag() throws JspException {
        return EVAL_PAGE;
    }
	
	public void setPath(String path) {
		this.path = path;
	}
	
	public void setDecorated(boolean decorated) {
		this.decorated = decorated;
	}
}
