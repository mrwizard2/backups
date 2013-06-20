<%@ include file="/apps/searspartsdirect/global.jsp" %>
<ul class="cartNavItems">
	<div class="cartNavShadow"></div>
	<li class="cartNavItem">
		<div class="btn-group">
			<a data-toggle="dropdown" href="#">Recently Viewed <i class="icon-caret-down">&nbsp;</i></a>
			<ul class="dropdown-menu">
				<li>Dummy item one</li>
				<li>Dummy item two</li>
				<spd:getRecentlyViewed />
				<!-- Model List -->
				<c:forEach var="model" items="${rvModelList}">
					<li>Model <a href="${model.itemURL}">${model.itemName}</a><br />
					<a href="${model.itemURL}">${model.itemDescription}</a></li>
				</c:forEach>
				<!-- Part List -->
				<c:forEach var="part" items="${rvPartList}">
					<li>
						<a href="${part.itemURL}">
						<c:choose>
							<c:when test='${part.itemImageURL != null && part.itemImageURL != "null"}'>
								<img src="${part.itemImageURL}" alt="${part.itemDescription}" />
							</c:when>
							<c:otherwise>
								<img src="/assets/img/images/no_part_100x100.gif" alt="No part image available" />
							</c:otherwise>
						</c:choose>
						${part.itemName}<br /> ${part.itemDescription}</a>
					</li>
				</c:forEach>
			</ul>
		</div>
	</li>
	<li class="cartNavItem">
		<div class="btn-group">
			<a data-toggle="dropdown" href="#">My Models 
			<c:choose>
				<c:when test="${fn:length(myProfileModels) gt 0}">
					(${fn:length(myProfileModels)})
				</c:when>
				<c:otherwise>
						(0)
				</c:otherwise>
			</c:choose>
				<i class="icon-caret-down">&nbsp;</i></a>
			<ul class="dropdown-menu">
				<c:choose>
					<c:when test="${fn:length(myProfileModels) gt 0}">
						<c:forEach var="model" items="${myProfileModels}">
								<li><a href="${mainSitePath}${model.url}">${model.brand} ${model.category} model #${model.modelNumber}</a></li>
						</c:forEach>
					</c:when>
					<c:otherwise>
							<li>You can find parts to your models faster by adding models you own to this list.</li>
					</c:otherwise>
				</c:choose>
			</ul>
		</div>
	</li>
	<li class="cartNavItem">
		<div class="btn-group">
			
			<a data-toggle="dropdown" href="#"><i class="icon-shopping-cart">&nbsp;</i> Cart 
			<c:choose>
				<c:when test="${fn:length(shoppingCart) gt 0}">
					${fn:length(shoppingCart)}
				</c:when>
				<c:otherwise>
						0
				</c:otherwise>
			</c:choose><i class="icon-caret-down">&nbsp;</i></a>
			<ul class="dropdown-menu">
				<h3>Your shopping Cart</h3>
				
				<li>Parts  -- Quantity</li>
				<c:choose>
					<c:when test="${fn:length(shoppingCart) gt 0}">
						<p><a href="${mainSitePath}/partsdirect/showCart.pd?blt=04">checkout Now</</a></p>
						<c:forEach var="cartLine" items="${shoppingCart}">
								<li><a href="${mainSitePath}/partsdirect/part-number/${cartLine.part.partNumber}/${cartLine.part.productGroupId}/${cartLine.part.supplierId}">${cartLine.part.partNumber} --  ${cartLine.quantity}</a></li>
							</c:forEach>
						<p><b>Total items: ${fn:length(shoppingCart)}</b></p>	
						<p><a href="${mainSitePath}/partsdirect/showCart.pd?blt=04">View Entire Cart</</a></p>	
					</c:when>
					<c:otherwise>
							<li>Your shopping cart is empty</li>
							<p><b>Total items: ${fn:length(shoppingCart)}</b></p>
					</c:otherwise>
				</c:choose>
			</ul>
		</div>
	</li>
</ul>