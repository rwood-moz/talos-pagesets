function send_panel() {
	var OAS_server = 'http://kantarmedia.guardian.co.uk';
	if (! (OAS_rn)) {
		var OAS_rn = new String (Math.random());
		var OAS_rns = OAS_rn.substring (2, 11);
	}
	document.getElementById("Panel_Content").innerHTML = '<iframe width="0" height="0" src="http://panel.kantarmedia.com/0/KantarMedia-Panel/panel/set_panel.html?'+OAS_rns+'__!__'+OAS_server+'__!__'+OAS_taxonomy+'"></iframe>';
	return true;
}
if (document.cookie.indexOf('member_type=') === -1) {
	send_panel();
}