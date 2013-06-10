<%@ include file="/apps/searspartsdirect/global.jsp" %>

<spd:getRelation single="true" assetType="productCategory"/>
<spd:getRelation single="true" assetType="brand"/>
<spd:tagsByPage tagType="subcategories"/>

<h3> <c:if test="${brandRelation != null}">${brandRelation.title}&nbsp;</c:if>
	 <c:if test="${productCategoryRelation != null}">${productCategoryRelation.title}&nbsp;</c:if>
	 <c:if test="${fn:length(subcategoriesList) eq 1}">
	 		${subcategoriesList[0].title} 
	 		<c:set var="subCatUrl" value="${subcategoriesList[0].tagID}"/>
	 </c:if>
	 <cq:text property="errorCodeText" placeholder=""/>
</h3>
<cq:text property="errorCodeDesc" placeholder=""/>

<spd:ErrorCodeTable/>
<table border="1">
	<tr>
		<th>Error Code</th>
		<th>condition</th>
		<th>check/repair</th>
		<th>shop parts</th>
	</tr>
	<c:forEach var="item" items="${errorCodeTableData}">
		<tr><td colspan="4"><b>${item.key}</b></td></tr>
		<c:forEach var="model" items="${item.value}">
			<tr>
				<td>${model.code}</td>
			 	<td>${model.condition}</td>
			 	<c:choose>
			 		<c:when test='${fn:contains(model.repairPath, "/")}'>
			 			<td><a href="${model.repairPath}.html">Repair or Installation guide link</a></td>
			 		</c:when>	
			 		<c:otherwise>
			 			<td>${model.repairPath}</a></td>
			 		</c:otherwise>
			 	</c:choose>
			 	<td>no parts</td>
			 </tr>
		</c:forEach>
	</c:forEach>
</table>
