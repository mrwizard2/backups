<%@ include file="/apps/searspartsdirect/global.jsp" %><%
%><ul>
	<li id="loginNavStatus"><a data-toggle="modal" data-target="#loginModal">Login</a></li>
	<li id="loginNavProfile"><a data-toggle="modal" data-target="#registerModal">Register</a></li>
	<li><a href="${mainSitePath}/partsdirect/orderStatus.pd?pop=flush" title="Order status">Order lookup</a></li>
	<li><a href="#GetHelp" id="loginNavGetHelp">Get help</a></li>
	<li><a href="http://searshc.us2.qualtrics.com/SE/?SID=SV_5BkCXqmfocMN11W" onclick="window.open(this.href, 'GiveFeedback', 'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=yes,dependent=no, width=950,height=650,top=0,left=150'); return false;">Feedback</a></li>
</ul>