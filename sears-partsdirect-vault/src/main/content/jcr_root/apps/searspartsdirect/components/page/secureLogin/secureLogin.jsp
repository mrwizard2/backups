<!doctype html>
<%@ include file="/apps/searspartsdirect/global.jsp"%>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>Log In</title>
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,600" rel="stylesheet" type="text/css">
<cq:includeClientLib css="apps.searspartsdirect.login" />
</head>

<body>
    <div class="row-fluid" id="secureLoginModal">
        <div class="span6 offset3">
            <!-- Start Form -->
            <h1 id="loginModalLabel">Sign In<span class="pull-right">New Customer? <a data-toggle="modal" data-dismiss="modal" data-target="#registerModal">Register</a></span></h1>
            <form id="secureLoginFormModal" name="secureLoginFormModal" method="post" action="https://sso.shld.net/shccas/shcLogin" data-regulagroup="loginModal">
                <div class="alert alert-error hidden">&nbsp;</div>
                <fieldset>
                    <label>Email<span>Required</span></label>
                    <input type="text" name="loginId" data-constraints='@Required(message="Email is required.", groups=[loginModal]) @Required(message="A valid email address is required.", groups=[loginModal])' />
                    <label>Password<span>Required</span></label>
                    <input type="password" name="logonPassword" data-constraints='@Required(message="Please provide a password.", groups=[loginModal])' />
                    <input type="hidden" value="https://www.searspartdirect.com/partsdirect/j_acegi_cas_security_check" name="service" id="service">
                    <input type="hidden" value="true" name="renew" id="renew">
                    <br />
                    <a href="#">Forgot Password?</a>
                </fieldset>
                <div class="pull-right">
                    <button type="button" class="new-btn" data-dismiss="modal" data-cancel="true"aria-hidden="true">Cancel</button>
                    <button type="button" class="new-btn new-btn-search" data-submit="true">Sign In</button>
                </div>
            </form>
            <!-- End Form -->
        </div>
    </div>

	<cq:includeClientLib js="apps.searspartsdirect.login" />
</body>
</html>