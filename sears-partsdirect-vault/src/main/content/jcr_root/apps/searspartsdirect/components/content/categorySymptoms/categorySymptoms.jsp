<%@ include file="/apps/searspartsdirect/global.jsp" %>
<spd:getRelation single="true" assetType="productCategory"/>
<c:choose>
	<c:when test="${productCategoryRelation != null}">
		<h2>
			<cq:text property="text1" placeholder=""/>&nbsp;
			${productCategoryRelation.title}
			&nbsp;<cq:text property="text2" placeholder=""/>
		</h2>
		<p><cq:text property="optionalDescription" placeholder=""/></p>

		<spd:getAssets assetType="symptom" productCategoryFilter="${productCategoryRelation.path}" />
		<c:forEach var="symptom" items="${symptomList}" varStatus="currentItem">
			<c:choose>
				<c:when test="${currentItem.count % 2 eq 1}">
					<div class="row-fluid">
				</c:when>
			</c:choose>
				<div class="span6">
					<c:set var="symptomUrl" value="/content/searspartsdirect/en/categories/${productCategoryRelation.trueName}-repair/symptom/${symptom.id}.html" />
						<a href="${symptomUrl}">${symptom.title}</a>
				</div>
			<c:choose>
				<c:when test="${currentItem.count % 2 eq 0 or currentItem.last}">
					</div>
				</c:when>
			</c:choose>
		</c:forEach>
	</c:when>
	<c:otherwise>
		<p>No items are available.</p>
	</c:otherwise>
</c:choose>