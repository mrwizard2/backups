<%@ include file="/apps/searspartsdirect/global.jsp" %>
<c:set var="maintJumpFirstItem" scope="request"><cq:text property="maintenanceJumpMenuFirstItem" placeholder="Select Topic" /></c:set>
<c:if test="${isEditMode}">
	${maintJumpFirstItem}
</c:if>