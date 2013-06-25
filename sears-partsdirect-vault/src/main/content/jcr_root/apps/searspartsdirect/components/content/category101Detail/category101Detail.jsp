<%@ include file="/apps/searspartsdirect/global.jsp"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<spd:tagsByPage tagType="parent_categories" />
<spd:getMultifieldCategories />

<c:if test="${not empty categories}">
	<h2>
		<c:choose>
			<c:when test="${fn:length(parent_categoriesList[0].title) lt 38 }">
				<cq:text property="header" placeholder="${parent_categoriesList[0].title} 101" />
			</c:when>
			<c:otherwise>
				<cq:text property="header" placeholder="${fn:substring(parent_categoriesList[0].title,0,37)} 101" />
			</c:otherwise>
		</c:choose>
	</h2>

	<c:forEach var="category" items="${categories}" varStatus="currentItem">

		<c:choose>
			<c:when test="${currentItem.count % 2 eq 1}">
				<div class="row-fluid">
			</c:when>
		</c:choose>
		<div class="span6">
			<spd:LinkResolver value="${category.url}" />
			<c:if test="${not empty category.imagePath}">
				<a href="${url}" ><spd:displayImage path="${category.imagePath}" decorated="false" /></a>
			</c:if>
			<h4>
				<a href="${url}">${category.title}</a>
			</h4>
			<p>${category.description}</p>
		</div>
		<c:choose>
			<c:when test="${currentItem.count % 2 eq 0 or currentItem.last}">
				</div>
			</c:when>
		</c:choose>
	</c:forEach>
	<p>
		<c:set var="viewAllLink"><cq:text property='viewAllLink'/></c:set>
		<spd:LinkResolver value="${viewAllLink}" />
		<a class="new-btn-small" href="${url}">View All Categories</a>
	</p>
</c:if>