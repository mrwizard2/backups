package com.spd.cq.searspartsdirect.common.tags;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;

import javax.jcr.Node;
import javax.jcr.Session;
import javax.servlet.jsp.JspException;

import org.apache.sling.api.resource.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.search.PredicateGroup;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.Hit;
import com.day.cq.wcm.api.Page;
import com.spd.cq.searspartsdirect.common.helpers.Constants;
import com.spd.cq.searspartsdirect.common.helpers.PageImpressionsComparator;
import com.spd.cq.searspartsdirect.common.model.RelatedArticleModel;

public class GetCategoryArticleListTag extends CQBaseTag {
	private static final long serialVersionUID = 1L;
	protected static Logger log = LoggerFactory.getLogger(GetCategoryArticleListTag.class);
	protected String categoryPath;
	
	@Override
	public int doStartTag() throws JspException {
		
		List<RelatedArticleModel> articles = new ArrayList<RelatedArticleModel>();
		try {

			List<Page> result = new ArrayList<Page>();

			QueryBuilder qb = resourceResolver.adaptTo(QueryBuilder.class);
			Map<String, String> props = new HashMap<String, String>();
	        props.put("type", Constants.CQ_PAGE);
	        props.put("path", Constants.ARTICLES_ROOT);
	        props.put("property", Constants.ASSETS_PAGES_REL_PATH);
	        props.put("property.value", categoryPath);
	        
	        List<Hit> hits = qb.createQuery(
	        			PredicateGroup.create(props),resourceResolver.adaptTo(Session.class)
	        		).getResult().getHits();

	        for (Hit hit: hits) {
	        	result.add(pageManager.getPage(hit.getPath()));
	        }
	        
	        Collections.sort(result, Collections.reverseOrder(new PageImpressionsComparator(resourceResolver)));
	          
	        for(Page page: result){
	        	if (!page.equals(currentPage)) { // we exclude ourself from results
	        		// We need to resolve the image path, and hand out a blank for image if the image does not exist
	        		String imagePath = page.getPath() + Constants.ASSETS_IMAGE_PATH;
	        		Resource imageResource = resourceResolver.getResource(imagePath);
	        		if (imageResource == null) {
	        			// If we cannot resolve to an image, we return a blank string
	        			imagePath = Constants.EMPTY;
	        		} else {
	        			Node imageNode = imageResource.adaptTo(Node.class);
	        			if (!(imageNode.hasProperty("fileReference") || imageNode.hasNode("file"))) {
	        				// If the image is not set up one way or another, we return a blank string
	        				imagePath = Constants.EMPTY;
	        			}
	        		}
	        		
	        		articles.add(new RelatedArticleModel(
		        				page.getPath() + ".html", 
		        				imagePath, 
		        				page.getTitle(), 
		        				page.getProperties().get("abstracttext",Constants.EMPTY).toString())
	        				);
	        	}
	        }	        	

			
		}
		catch (Exception e) {
			log.error("Failure building article list, ",e);
		}
		pageContext.setAttribute("articles", articles);
        return SKIP_BODY;
	}
	
	public void setCategoryPath(String categoryPath) {
		this.categoryPath = categoryPath;
	}
}
