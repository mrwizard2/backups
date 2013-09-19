<%@ include file="/apps/searspartsdirect/global.jsp" %>
<%@ page import="com.day.cq.commons.jcr.JcrConstants" %>
<spd:uniqueID />

<div class="accordion" id="parent_${uniqueId}1">
	<div class="accordion-group">
		<div class="accordion-heading cafHeadingOpen">
			<a class="accordion-toggle" id="toggle_${uniqueId}1" data-toggle="false" data-status="incomplete" data-parent="#parent_${uniqueId}1" data-href="#${uniqueId}1">
				1 &nbsp; Select Water Filter and Reorder Frequency
				<span class="hidden"><i class="icon-pencil"></i> EDIT</span>
			</a>
		</div>
		<div id="${uniqueId}1" class="accordion-body in">
			<div class="accordion-inner">
				<form id="cafSelectFilterFrequencyForm" method="post" action="">
					<div class="row-fluid">
						<div class="span10 offset1 hidden">
							<div class="alert alert-error hidden" id="alert_${uniqueId}1">&nbsp;</div>
						</div>
					</div>
					<fieldset>
						<div class="row-fluid">
							<div class="span10 offset1">
								<p>Search by fridge model number or water filter part number</p>
								<div class="radioOptions">
									<input type="radio" name="numberType" id="ntModel" value="model" />
									<label for="ntModel">Fridge Model #</label>
									<input type="radio" name="numberType" id="ntPart" value="part" />
									<label for="ntPart">Filter Part #</label>
								</div>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span7 offset1">
								<input class="cafSpacedInput cafText" name="partNumber" value="Enter your part or model number" data-inputhelp="Enter your part or model number" />
								<p><a href="#findMyModel" class="searchPanelFinder_js">Can't locate the model number? Use our finder</a></p>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span8 offset1">
								<p>Select water filter automatic reorder frequency</p>
								<div class="radioOptions">
									<input type="radio" class="filFreq" name="frequency" id="frequency3" value="3" />
									<label for="frequency3">Every 3 months</label>
									<input type="radio" class="filFreq" name="frequency" id="frequency6" value="6" />
									<label for="frequency6">Every 6 months</label>
									<input type="radio" class="filFreq" name="frequency" id="frequency12" value="12" />
									<label for="frequency12">Every 12 months</label>
								</div>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span7 offset1">
								<p>Starting from</p>
								<select name="startMonth" id="startMonth" data-toggle="responsive-dropdown" data-buttonclass="new-btn-dropdown" data-buttoncontent="Select" data-navigate="true">
									<option value="1">January</option>
									<option value="2">February</option>
									<option value="3">March</option>
									<option value="4">April</option>
									<option value="5">May</option>
									<option value="6">June</option>
									<option value="7">July</option>
									<option value="8">August</option>
									<option value="9">September</option>
									<option value="10">October</option>
									<option value="11">November</option>
									<option value="12">December</option>
								</select>
								<select name="startDay" id="startDay" data-toggle="responsive-dropdown" data-buttonclass="new-btn-dropdown" data-buttoncontent="Select" data-navigate="true">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
									<option value="11">11</option>
									<option value="12">12</option>
								</select>
								<select name="startYear" id="startYear" data-toggle="responsive-dropdown" data-buttonclass="new-btn-dropdown" data-buttoncontent="Select" data-navigate="true">
									<option value="2013">2013</option>
									<option value="2014">2014</option>
									<option value="2015">2015</option>
									<option value="2016">2016</option>
								</select>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span1 offset1">
								<label for="waterFilterQuantity">Qty</label>
								<input class="cafText" name="quantity" id="waterFilterQuantity" />
							</div>
						</div>
					</fieldset>
					<div class="row-fluid">
						<div class="span2 offset1">
							<button type="button" class="new-btn new-btn-search cafSubmit" data-submit="true" data-form-number="1" data-alert-id="alert_${uniqueId}1" data-this-toggle-id="toggle_${uniqueId}1">Continue</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<div class="accordion" id="parent_${uniqueId}2">
	<div class="accordion-group">
		<div class="accordion-heading">
			<a class="accordion-toggle" id="toggle_${uniqueId}2" data-toggle="false" data-status="unavailable" data-parent="#parent_${uniqueId}2" data-href="#${uniqueId}2">
				2 &nbsp; Enter Shipping Address
				<span class="hidden"><i class="icon-pencil"></i> EDIT</span>
			</a>
		</div>
		<div id="${uniqueId}2" class="accordion-body collapse">
			<div class="accordion-inner">
				<form id="cafShippingAddressForm" method="post" action="">
					<div class="row-fluid">
						<div class="span10 offset1 hidden">
							<div class="alert alert-error hidden" id="alert_${uniqueId}2">&nbsp;</div>
						</div>
					</div>
					<fieldset>
						<div class="row-fluid">
							<div class="span5 offset1">
								<label for="shippingFirst">First Name <span>Required</span></label>
								<input class="cafText" name="fname" id="shippingFirst" />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span5 offset1">
								<label for="shippingLast">Last Name <span>Required</span></label>
								<input class="cafText" name="lname" id="shippingLast" />
							</div>
						</div>
						<div class="row-fluid cafCheckboxField">
							<div class="span10 offset1">
								<input type="checkbox" name="po" id="shippingPO" />
								<label for="shippingPO">This is a P.O. Box or Military Address. <a href="#modalShipping" data-toggle="modal">View shipping restrictions</a></label>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span5 offset1">
								<label for="shippingAddress">Street Address <span>Required</span></label>
								<input class="cafText" name="address" id="shippingAddress" />
							</div>
							<div class="span3">
								<label for="shippingApt">Apt. # <span>Optional</span></label>
								<input class="cafText" name="apt" id="shippingApt" />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span5 offset1">
								<label for="shippingCity">City <span>Required</span></label>
								<input class="cafText" name="city" id="shippingCity" />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span3 offset1">
								<label for="shippingState">State <span>Required</span></label>
								<select name="state" id="shippingState" data-toggle="responsive-dropdown" data-buttonclass="new-btn-dropdown" data-buttoncontent="Select" data-navigate="true">
									<option value="AA">AA</option>
									<option value="AE">AE</option>
									<option value="AL">AK</option>
									<option value="AP">AP</option>
								</select>
							</div>
							<div class="span3">
								<label for="shippingZip">ZIP Code <span>Required</span></label>
								<input class="cafText" name="zip" id="shippingZip" data-mask="99999" data-placeholder=" " />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span4 offset1">
								<label for="shippingPhone">Phone Number <span>Required</span></label>
								<input class="cafText" name="phone" id="shippingPhone" data-mask="999-999-9999" data-placeholder=" " />
							</div>
							<div class="span3">
								<label for="shippingExt">Ext. # <span>Optional</span></label>
								<input class="cafText" name="ext" id="shippingExt" />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span5 offset1">
								<label for="shippingEmail">Email Address <span>Required</span></label>
								<input class="cafText" name="email" id="shippingEmail" />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span5 offset1">
								<label for="shippingConfirm">Confirm Email Address <span>Required</span></label>
								<input class="cafText" name="confirm" id="shippingConfirm" />
							</div>
						</div>
						<div class="row-fluid cafCheckboxField">
							<div class="span10 offset1">
								<input type="checkbox" name="same" id="shippingSame" />
								<label for="shippingSame">Billing address same as shipping address</label>
							</div>
						</div>
					</fieldset>
					<div class="row-fluid">
						<div class="span2 offset1">
							<button type="button" class="new-btn new-btn-search cafSubmit" id="shippingSubmit" data-submit="true" data-form-number="2" data-alert-id="alert_${uniqueId}2" data-this-toggle-id="toggle_${uniqueId}2">Continue</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<div class="accordion" id="parent_${uniqueId}3">
	<div class="accordion-group">
		<div class="accordion-heading">
			<a class="accordion-toggle billingToggle" id="toggle_${uniqueId}3" data-toggle="false" data-status="unavailable" data-parent="#parent_${uniqueId}3" data-href="#${uniqueId}3">
				3 &nbsp; Enter Billing Address
				<span class="hidden"><i class="icon-pencil"></i> EDIT</span>
			</a>
		</div>
		<div id="${uniqueId}3" class="accordion-body collapse">
			<div class="accordion-inner">
				<form id="cafBillingAddressForm" method="post" action="">
					<div class="row-fluid">
						<div class="span10 offset1 hidden">
							<div class="alert alert-error hidden" id="alert_${uniqueId}3">&nbsp;</div>
						</div>
					</div>
					<fieldset>
						<div class="row-fluid">
							<div class="span5 offset1">
								<label for="billingFirst">First Name <span>Required</span></label>
								<input class="cafText" name="fname" id="billingFirst" />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span5 offset1">
								<label for="billingLast">Last Name <span>Required</span></label>
								<input class="cafText" name="fname" id="billingLast" />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span5 offset1">
								<label for="billingAddress">Street Address <span>Required</span></label>
								<input class="cafText" name="address" id="billingAddress" />
							</div>
							<div class="span3">
								<label for="billingApt">Apt. # <span>Optional</span></label>
								<input class="cafText" name="apt" id="billingApt" />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span5 offset1">
								<label for="billingCity">City <span>Required</span></label>
								<input class="cafText" name="city" id="billingCity" />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span3 offset1">
								<label for="billingState">State <span>Required</span></label>
								<select name="state" id="billingState" data-toggle="responsive-dropdown" data-buttonclass="new-btn-dropdown" data-buttoncontent="Select" data-navigate="true">
									<option value="AA">AA</option>
									<option value="AE">AE</option>
									<option value="AL">AK</option>
									<option value="AP">AP</option>
								</select>
							</div>
							<div class="span3">
								<label for="billingZip">ZIP Code <span>Required</span></label>
								<input class="cafText" name="zip" id="billingZip" data-mask="99999" data-placeholder=" " />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span4 offset1">
								<label for="billingPhone">Phone Number <span>Required</span></label>
								<input class="cafText" name="phone" id="billingPhone" data-mask="999-999-9999" data-placeholder=" " />
							</div>
							<div class="span3">
								<label for="billingExt">Ext. # <span>Optional</span></label>
								<input class="cafText" name="ext" id="billingExt" />
							</div>
						</div>
						<div class="row-fluid cafCheckboxField">
							<div class="span10 offset1">
								<input type="checkbox" name="same" id="billingSame" />
								<label for="billingSame">Use Shipping Address instead</label>
							</div>
						</div>
					</fieldset>
					<div class="row-fluid">
						<div class="span2 offset1">
							<button type="button" class="new-btn new-btn-search cafSubmit" data-submit="true" data-form-number="3" data-alert-id="alert_${uniqueId}3" data-this-toggle-id="toggle_${uniqueId}3">Continue</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<div class="accordion" id="parent_${uniqueId}4">
	<div class="accordion-group">
		<div class="accordion-heading">
			<a class="accordion-toggle" id="toggle_${uniqueId}4" data-toggle="false" data-status="unavailable" data-parent="#parent_${uniqueId}4" data-href="#${uniqueId}4">
				4 &nbsp; Enter Payment Information
				<span class="hidden"><i class="icon-pencil"></i> EDIT</span>
			</a>
		</div>
		<div id="${uniqueId}4" class="accordion-body collapse">
			<div class="accordion-inner">
				<form id="cafPaymentForm" method="post" action="">
					<div class="row-fluid">
						<div class="span10 offset1 hidden">
							<div class="alert alert-error hidden" id="alert_${uniqueId}4">&nbsp;</div>
						</div>
					</div>
					<div class="row-fluid">
						<div class="span10 offset1">
							<ul class="creditCards">
								<li class="iconSearsIcon"></li>
								<li class="iconSearsMasterCard creditCardIcon"></li>
								<li class="iconSearsCard creditCardIcon"></li>
							</ul>
							<ul class="creditCards">
								<li class="iconVisaCard creditCardIcon"></li>
								<li class="iconMasterCard creditCardIcon"></li>
								<li class="iconExpress creditCardIcon"></li>
								<li class="iconDiscover creditCardIcon"></li>
							</ul>
						</div>
					</div>
					<fieldset>
						<div class="row-fluid">
							<div class="span5 offset1">
								<label for="payNumber">Card Number <span>Required</span></label>
								<input class="cafText" name="cardNumber" id="payNumber" maxlength="16" />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span4 offset1">
								<label for="payCode">Security Code <span>Required</span></label>
								<input class="cafText" name="code" id="payCode" maxlength="4" />
								<a href="#modalCode" data-toggle="modal">What's this?</a>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span5 offset1">
								<label for="payMonth">Expiration Date <span>Required</span></label>
								<select name="month" id="payMonth" data-toggle="responsive-dropdown" data-buttonclass="new-btn-dropdown" data-buttoncontent="Select" data-navigate="true">
									<option value="1">January</option>
									<option value="2">February</option>
									<option value="3">March</option>
									<option value="4">April</option>
									<option value="5">May</option>
									<option value="6">June</option>
									<option value="7">July</option>
									<option value="8">August</option>
									<option value="9">September</option>
									<option value="10">October</option>
									<option value="11">November</option>
									<option value="12">December</option>
								</select>
								<select name="year" id="payYear" data-toggle="responsive-dropdown" data-buttonclass="new-btn-dropdown" data-buttoncontent="Select" data-navigate="true">
									<option value="2013">2013</option>
									<option value="2014">2014</option>
									<option value="2015">2015</option>
									<option value="2016">2016</option>
								</select>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span5 offset1">
								<label for="payName">Name On Card <span>Required</span></label>
								<input class="cafText" name="name" id="payName" />
							</div>
						</div>
					</fieldset>
					<div class="row-fluid">
						<div class="span5 offset1">
							<button type="button" class="new-btn new-btn-search cafSubmit" data-submit="true" data-form-number="4" data-alert-id="alert_${uniqueId}4" data-this-toggle-id="toggle_${uniqueId}4">Continue</button>
							<p class="noteText">PLEASE NOTE: The credit card will not be charged at this time. The first charge will appear prior to the first water filter(s) in the subscription are shipped.</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<div class="accordion" id="parent_${uniqueId}5">
	<div class="accordion-group">
		<div class="accordion-heading">
			<a class="accordion-toggle" id="toggle_${uniqueId}5" data-toggle="false" data-status="unavailable" data-parent="#parent_${uniqueId}5" data-href="#${uniqueId}5">
				5 &nbsp; Review Subscription
			</a>
		</div>
		<div id="${uniqueId}5" class="accordion-body collapse">
			<div class="accordion-inner">
				<div class="row-fluid">
					<div class="span10 offset1">
						<div class="row-fluid darkRow pseudoTableRow">
							<div class="span2">
								<p>Product</p>
							</div>
							<div class="span8">
								<p>
									<a href="#" id="filterLink">Product description</a>
								</p>
							</div>
						</div>
						<div class="row-fluid pseudoTableRow">
							<div class="span2">
								<p>Price</p>
							</div>
							<div class="span8">
								<p id="cafFilterPrice">$34.23</p>
								<p>First charge will appear around <span id="purchaseDate">[date]</span>.</p>
							</div>
						</div>
						<div class="row-fluid darkRow pseudoTableRow">
							<div class="span2">
								<p>Order Qty</p>
							</div>
							<div class="span8">
								<p id="subQty">1</p>
							</div>
						</div>
						<div class="row-fluid pseudoTableRow">
							<div class="span2">
								<p>Reorder Frequency</p>
							</div>
							<div class="span8">
								<p>Every <span id="freqSel">[freq]</span> months, starting from <span id="startDate">[date]</span>.</p>
							</div>
						</div>
						<div class="row-fluid darkRow pseudoTableRow">
							<div class="span2">
								<p>Shipping Method</p>
							</div>
							<div class="span8">
								<p>Standard Shipping <span class="alert-ship">(FREE)</span></p>
							</div>
						</div>
						<div class="row-fluid pseudoTableRow">
							<div class="span2">
								<p>Estimated Delivery Date</p>
							</div>
							<div class="span8">
								<p>Approximately 2-4 business days after credit card is charged</p>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span4">
								<button type="button" class="new-btn new-btn-search">Start subscription</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="modalShipping" class="modal hide fade in" style="display: none; ">
	<h3>Shipping Restrictions</h3>
	<h4>Can I ship an order to a P.O. Box?</h4>
	<p>The U.S. Postal Service delivers all packages addressed to P.O. boxes within the Continental U.S. We can't deliver to P.O. boxes outside of the Continental U.S.</p>
	<p><strong>Please note:</strong> Some items can't be shipped to a P.O. box and require a physical address for delivery.</p>
	<h4>Can orders be shipped to a military address?</h4>
	<p>The U.S. Postal Service delivers all orders to military APO/FPO addresses. Please allow an additional 4-6 weeks for the military postal service to deliver your package to its final overseas destination.</p>
	<a href="#" class="btn" data-dismiss="modal">Close</a>
</div>
<div id="modalCode" class="modal hide fade in" style="display: none; ">
	<h3>How to find your security code</h3>
	<p>The security code can be found on either the front or back of your credit card.</p>
	<div class="row-fluid">
		<div class="span7">
			<div class="cardSears creditCard"></div>
		</div>
		<div class="span5">
			<p>The security code is on the back of Sears Card and Sears Premier Card. <strong>If you have a 13-digit Sears Card, the security code is not required.</strong></p>
		</div>
	</div>
	<div class="row-fluid">
		<div class="span7">
			<div class="cardOther creditCard"></div>
		</div>
		<div class="span5">
			<p>The security code is on the back of MasterCard, Sears Gold MasterCard VISA, and Discover cards.</p>
		</div>
	</div>
	<div class="row-fluid">
		<div class="span7">
			<div class="cardExpress creditCard"></div>
		</div>
		<div class="span5">
			<p>The security code is on the front of American Express cards.</p>
		</div>
	</div>
	<a href="#" class="btn" data-dismiss="modal">Close</a>
</div>