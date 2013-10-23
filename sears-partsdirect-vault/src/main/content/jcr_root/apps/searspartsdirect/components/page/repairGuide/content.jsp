<%@ include file="/apps/searspartsdirect/global.jsp"%>
<article id="content" data-templatename="RepairGuidepage"><div class="articleFix">
	<div class="row-fluid">
		<div class="span10 desktop-offset1">
			<%-- <cq:include path="/content/searspartsdirect/en/jcr:content/breadcrumbNavigation" resourceType="/apps/searspartsdirect/components/base/breadcrumbNavigation" /> --%>
			<cq:include path="/content/searspartsdirect/en/jcr:content/modelHeader" resourceType="/apps/searspartsdirect/components/content/modelHeader" />
			<div class="row-fluid">
				<div class="span12">
					<cq:include path="pageTitleHeader" resourceType="searspartsdirect/components/content/pageTitleHeader" />
					<cq:include path="authorDisplay" resourceType="searspartsdirect/components/content/article/authorDisplay" />
					<cq:include path="socialBar" resourceType="searspartsdirect/components/content/socialBar" />
				</div>
			</div>
			<div class="clearfix">&nbsp;</div>
			<cq:include path="guideNavigation" resourceType="searspartsdirect/components/content/guideNavigation" />
			<div class="clearfix">&nbsp;</div>
			<div class="row-fluid">
				<div class="span12">
					<cq:include path="guideDetails" resourceType="/apps/searspartsdirect/components/content/guideDetails" />
				</div>
			</div>
			<div class="row-fluid">
				<div class="desktopAdUnit adUnitContainer span2 offset1 pull-right">
					<cq:include path="adUnit" resourceType="searspartsdirect/components/content/adUnit" />
				</div>
				<div class="span9">
					<div class="row-fluid">
						<div class="span6">
							<a name="template_partsRequiredRepair"></a>
							<cq:include path="partsRequiredRepair" resourceType="searspartsdirect/components/content/partsRequiredRepair" />
						</div>
						<div class="span6">
							<a name="template_toolsRequiredRepair"></a>
							<cq:include path="toolsRequiredRepair" resourceType="searspartsdirect/components/content/toolsRequiredRepair" />
						</div>
					</div>
				</div>
				<div class="tabletAdUnit adUnitContainer">
					<cq:include path="adUnit" resourceType="searspartsdirect/components/content/adUnit728x90" />
				</div>
				<div class="mobileAdUnit adUnitContainer">
					<cq:include path="adUnit" resourceType="searspartsdirect/components/content/adUnit300x50" />
				</div>
				<div class="span9">
					<div class="row-fluid">
						<div class="span12">
							<a name="template_beforeYouBegin"></a>
							<cq:include path="beforeYouBegin" resourceType="searspartsdirect/components/content/text" />
							<a name="template_repairInstructions"></a>
							<cq:include path="repairInstructions" resourceType="searspartsdirect/components/content/repairInstructions" />
							<a name="template_relatedGuides"></a>
							<cq:include path="relatedGuides" resourceType="searspartsdirect/components/content/relatedGuides" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div></article>