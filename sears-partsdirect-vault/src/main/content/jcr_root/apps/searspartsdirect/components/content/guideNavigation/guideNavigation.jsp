<%@ include file="/apps/searspartsdirect/global.jsp" %>
<c:if test="${isEditMode or isDesignMode}"><spd:setupGuideNavigationDefaults /></c:if>
<spd:guideNavigation />
<div class="sticky-wrapper">
	<nav id="sticky">
		<c:choose>
			<c:when test="${empty sections}">
				No sections found
			</c:when>
			<c:otherwise>
				<ul>
					<c:forEach items="${sections}" var="current" varStatus="item">
						<li><a class="scroll-to scroll-to-child-${item.index}" href="#${current[1]}">${current[0]}</a></li>
					</c:forEach>
				</ul>
				<select>
					<option value="" selected="selected">${jumpToString}</option>
					<c:forEach items="${sections}" var="current" varStatus="item">
						<option value="#${current[1]}">${current[0]}</option>
					</c:forEach>
				</select>
			</c:otherwise>
		</c:choose>
	</nav>
</div>
