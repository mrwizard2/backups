<%@ include file="/apps/searspartsdirect/global.jsp" %>
<div class="innerHeader ie_innerHeader ">
	<div class="body_shadow_left"></div>
	<div class="body_shadow_right"></div>
	<cq:include path="homeLogo" resourceType="/apps/searspartsdirect/components/base/homeLogo" />
	<c:set var="skipLoginModal" scope="request" value="true"/>
	<c:set var="skipRegisterModal" scope="request" value="true"/>
	<div id="headerNavigation">
		<div class="trigger"></div>
		<cq:include path="loginNav" resourceType="/apps/searspartsdirect/components/base/loginNav" />
		<div class="clear"></div>
		<cq:include path="cartNav" resourceType="/apps/searspartsdirect/components/base/cartNav" />
	</div>
	<cq:include path="searchPanel" resourceType="/apps/searspartsdirect/components/base/searchPanel" />
	<cq:include path="headerPromo" resourceType="/apps/searspartsdirect/components/base/headerPromo" />
</div>