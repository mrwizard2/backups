<%@ include file="/apps/searspartsdirect/global.jsp" %><%
%><%@ page import="com.day.cq.commons.jcr.JcrConstants" %><%
%><spd:uniqueID /><%
%><div class="accordion" id="parent_${uniqueId}">
	<div class="accordion-group">
		<div class="accordion-heading">
			<a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#parent_${uniqueId}" href="#${uniqueId}"><i class="icon-chevron-down">&nbsp;</i><i class="icon-chevron-up">&nbsp;</i> <cq:text property="accordionHeader" placeholder="Accordion header goes here"/></a>
		</div>
		<div id="${uniqueId}" class="accordion-body collapse">
			<div class="accordion-inner">
				<cq:include path="instructionsParsys" resourceType="foundation/components/parsys" />
			</div>
		</div>
	</div>
</div>