<%@ include file="/apps/searspartsdirect/global.jsp"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<spd:getRelation single="true" assetType="productCategory" />
<spd:getRelatedGuides categoryPath="${productCategoryRelation.path}" />

<c:if test="${not empty guides}">
	<cq:text property="itemsHeader"/><br />
	
	<c:forEach var="guide" items="${guides}">
		<a href="${guide.url}"><spd:displayImage path="${guide.imagePath}"/></a>
		<a href="${guide.url}">${guide.title}</a>
		<br /><br />
	</c:forEach>
	
	<c:if test="${fn:length(guides) eq 4}">
		<a href="<cq:text property="viewAllItemsLink"/>.html"><cq:text property="viewAllItemsText"/></a>
	</c:if>
</c:if>
