<%@ include file="/apps/searspartsdirect/global.jsp" %>
<spd:errorCodeTable/>

<c:if test='${errorCodeTableData.errorCodeType != null}'>
	<div class="errorCodesTable-header">
		${errorCodeTableData.errorCodeType}
	</div>
</c:if>
	
<div class="table-wrapper">
	<table class="responsive-table">
		<thead>
			<tr>
				<th class="tbl-col-error-code">Error Code</th>
				<th class="tbl-col-condition">Condition</th>
				<th class="tbl-col-check-repair">Check/Repair</th>
				<th class="tbl-col-show-parts">Shop Parts</th>
			</tr>
		</thead>
		<tbody>
		<c:forEach var="model" items="${errorCodeTableData.errorCodes}">
			<tr>
				<td>${model.code}</td>
				<td>${model.condition}</td>
				<c:choose>
					<c:when test="${not empty model.repairPath}">
						<spd:linkResolver value="${model.repairPath}" />
						<td>
							<a href="${url}">Repair or Installation guide link</a>
						</td>
					</c:when>
					<c:otherwise>
						<td>${model.repairPathText}</td>
					</c:otherwise>
				</c:choose>
				<td>
					<c:if test="${not empty model.shopPartsLink}">
						<spd:linkResolver value="${model.shopPartsLink}" />
						<a href="${url}">Browse for Parts</a>
					</c:if>
				</td>
			</tr>
		</c:forEach>
		</tbody>
	</table>
</div>
