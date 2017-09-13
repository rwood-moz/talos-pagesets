function getCookieVar(varName) {
	return $.cookie(varName);
}

function checkLoginStatus() {
	var cookieValue = getCookieVar('tmg_p13n');
	var output;
	
	var registrationUrl=document.getElementById('topbar_login_base_url').value;
	var contactUs='http://www.telegraph.co.uk/topics/about-us/3489870/Contact-us.html';
	
	if (cookieValue != null) {
		cookieValue = cookieValue.replace(/\\/g, "");
		cookieValue = cookieValue.substring(1,cookieValue.length-1);
		
		var myJSONObject = eval('(' + cookieValue + ')');
		var firstName = myJSONObject.firstName;

		output = "Welcome, <a href=\""+registrationUrl+"myaccount.htm\" id=\"topBar_firstName\">"+firstName+"</a> | <a href=\""+registrationUrl+"logoff.htm?redirectTo="+document.location.href+"\">Log out</a> | <a href=\""+contactUs+"\">Help</a>";
	} else {
		output = "<a href=\""+registrationUrl+"login.htm?redirectTo="+document.location.href+"\">Log in</a> | <a href=\""+registrationUrl+"registration.htm?redirectTo="+document.location.href+"\">Register</a>";
	}

	document.getElementById('regDetails').innerHTML=output;
}

