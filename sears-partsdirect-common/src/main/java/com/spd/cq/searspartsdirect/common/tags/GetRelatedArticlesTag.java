package com.spd.cq.searspartsdirect.common.tags;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.jcr.Session;
import javax.servlet.jsp.JspException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.search.PredicateGroup;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.Hit;
import com.day.cq.wcm.api.Page;
import com.spd.cq.searspartsdirect.common.helpers.Constants;
import com.spd.cq.searspartsdirect.common.model.RelatedArticleModel;

public class GetRelatedArticlesTag extends CQBaseTag {
	private static final long serialVersionUID = 1L;
	protected static Logger log = LoggerFactory.getLogger(GetRelatedArticlesTag.class);
	protected String categoryPath;
	
	@Override
	public int doStartTag() throws JspException {
		
		ArrayList<RelatedArticleModel> articles = new ArrayList<RelatedArticleModel>();
		try {

			ArrayList<Page> result = new ArrayList<Page>();

			QueryBuilder qb = resourceResolver.adaptTo(QueryBuilder.class);
			HashMap<String, String> props = new HashMap<String, String>();
	        props.put("type", "cq:Page");
	        props.put("path", "/content/searspartsdirect/en/articles");
	        props.put("property", "jcr:content/pages");
	        props.put("property.value", "categoryPath");
	        
	        List<Hit> hits = qb.createQuery(PredicateGroup.create(props),resourceResolver.adaptTo(Session.class)).getResult().getHits();

	        for (Hit hit: hits) {
	        	result.add(pageManager.getPage(hit.getPath()));
	        }
	        
	        // populate only up to four elements of "guides" return ArrayList, as per specifications
	        // May need to update this code in order to accommodate Guide selection preference
	        if (result.size() <= 4){
		        for(Page page: result){
		        	articles.add(new RelatedArticleModel(page.getPath() + ".html", page.getPath() + Constants.ASSETS_IMAGE_PATH, page.getTitle(), page.getPath() + Constants.ASSETS_DESCRIPTION_PATH));
		        }	        	
	        }
	        else {
	        	for (int i=0; i < 4; i++){
	        		articles.add(new RelatedArticleModel(result.get(i).getPath() + ".html", result.get(i).getPath() + Constants.ASSETS_IMAGE_PATH, result.get(i).getTitle(), result.get(i).getPath() + Constants.ASSETS_DESCRIPTION_PATH));
	        	}
	        }

			 /* dummy data
				RelatedArticleModel article = new RelatedArticleModel("url", "imagePath", "title", "description");
				RelatedArticleModel article2 = new RelatedArticleModel("url2", "imagePath2", "title2", "description2");

				articles.add(article);
				articles.add(article2); */

				pageContext.setAttribute("articles", articles);
		}
		catch (Exception e) {
			
		}
        return SKIP_BODY;
	}
	
	@Override
    public int doEndTag() throws JspException {
        return EVAL_PAGE;
	}
	
	public void setCategoryPath(String categoryPath) {
		this.categoryPath = categoryPath;
	}
}
