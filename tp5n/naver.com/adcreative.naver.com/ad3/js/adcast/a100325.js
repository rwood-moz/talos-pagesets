/**
 * @author nhn
 */
function AdCast() {
	function r() {
		var a = new Agent();		
		var r = 1;
		if (a.isIE5) r = -2;
		else if (a.isOP && a.isMac) r = -1;
		return r;			
	}		
	this.runMode = r();
	this.isLoadFlash = false;
}
AdCast.prototype.loaddisablededFlash = function(bCtrl) {
	this.isCtrl = bCtrl;
	this.isLoadFlash = true;
}
AdCast.prototype.initUI = function() {
	var d = Da.$$("da_top");
	if (d != null) {
		for(var c=d.firstChild; c; c = c.nextSibling) {
			if(c.style) c.style.cssText = "width:0px;height:0px;";
			d.removeChild(c);
		}
	}	
}
AdCast.prototype.bindButton = function(sId, fn) {
	var d = Da.$(sId);
	if (d != null) Da.AE(d, "click", fn);
}
AdCast.prototype.unbindButton = function(sId, fn) {
	var d = Da.$(sId);
	if (d != null) Da.DE(d, "click", fn);
}
AdCast.prototype.takeoffUI = function(){
	Da.AE(parent.document,"click", AdCastEvent.closeLayes);
	Da.AE(document,"click", AdCastEvent.closeLayes);
	this.bindCastHelp();
	this.bindOffHelp();	
}
AdCast.prototype.bindCastHelp = function(sHtml) {	
	Da.AE(Da.$("ac_help1_tgl_a"), "click", AdCastEvent.toggleHelpLayer1);
	var d = Da.$$("da_casthelp");
	if (sHtml==null) sHtml = "<div id=\"ac_help1_layer\" style=\"display:none;position:absolute;left:0;top:25px;z-index:3;width:290px;height:75px;background:url(http://adcreative.naver.com/ad3/system/adcast/img/bg_help_ad_v2.gif) no-repeat 0 0;line-height:14px;color:#848689;\"><dl style=\"margin:0;padding:14px 0 0 10px;\"><dt style=\"overflow:hidden;position:absolute;left:0;top:-5000px;\">AD캐스트 도움말</dt><dd style=\"position:absolute;right:6px;top:11px;margin:0;padding:0;\"><a id=\"ac_help1_close_a\" href=\"ac_help1_close_h\" onclick=\"return false;\"  style=\"float:right;padding:3px;background-color:#fff;\"><img src=\"httpdisabled://wstatic.naver.com/w9/btn_close6.gif\" alt=\"닫기\" width=\"10\" height=\"9\" style=\"border:0 none;vertical-align:top;\" /></a></dd><dd style=\"margin:0;padding:0;font:11px/14px '돋움',Dotum,'굴림',Gulim,AppleGothic,Sans-serif;letter-spacing:-1px;\"><p style=\"margin:0 0 6px;padding:0;\">AD캐스트는 우측에 노출되는 광고를 이용자가 직접 <br />찾아 보거나 다시 볼 수 있는 컨트롤 기능을 제공합니다.</p><p style=\"margin:0;padding:0;\"><a href=\"httpdisabled://inside.naver.com/newnaver_7\" style=\"position:relative;color:#2f3743;text-decoration:underline;\">AD캐스트 이용안내</a></p></dd></dl></div>";
	if (d != null) {
		d.style.cssText = "position:relative;margin:0px auto;width:880px;height:0px;font-size:0px;line-height:0;z-index:11;left:0px;top:166px;display:block;text-align:left";
		Da.SH(d, sHtml);
		Da.AE(d, "click", AdCastEvent.clickLayerPad);
		Da.AE(Da.$$("ac_help1_close_a"), "click", AdCastEvent.clickCloseHelp);
	}
}
AdCast.prototype.bindOffHelp = function() {	
	Da.AE(Da.$("ac_ctrl_off_a"), "click", AdCastEvent.toggleHelpLayer2);
	Da.AE(Da.$("ac_help2_layer"),"click", AdCastEvent.clickLayerPad);
	Da.AE(Da.$("ac_help2_close_a"), "click", AdCastEvent.clickCloseHelp);
}

var AdCastAction = {
	displayButton : function(sId, aId) {
		var d = Da.$(sId);
		if (d != null) {
			for (var i = 0, n = aId.length; i < n; i++) {
				var o = Da.$(aId[i]);
				if ( o!= null ) o.style.display = "none";
			}		
			d.style.display = "inline";
		}
	},
	goCast : function(sUrl) {
		sUrl += "&dummy="+Math.random();
		document.location.replace(sUrl);
	},
	nimp : function(sUrl) {
        if (sUrl.indexOf("?") > 0) {
			sUrl += "&dummy=";
			sUrl += Math.random();
		} else {
			sUrl += "?dummy=";
			sUrl += Math.random();
		}
        var o = new Image();
		o.src = sUrl;		
	}
}
var AdCastEvent = {
	toggleHelpLayer1 : function(e) {
		var d = Da.$$("ac_help1_layer");
		if (d != null) {
			d.style.display = (d.style.display == "none") ? "block" : "none";
			parent.CommonFn.closeAllHelpLayer("ac_help1_layer"); 
		}
		Da.SE(e);
		return false;
	},
	toggleHelpLayer2 : function() {
		var d = Da.$("ac_help2_layer");		
		if (d != null ) d.style.display = (d.style.display == "none")?"block":"none";		
	},	
	closeLayes : function(e) {
		var el = e.target || e.srcElement;
		if (el != null && new RegExp(/^ac_ctrl_|ac_help\d_tgl_a|^ac_banner|ac_help\d_close_a|^fuit/).test(el.id)) {
			Da.SE(e);
		} else {
			AdCastEvent.closeHelp();
		}
	},
	clickLayerPad : function(e) {
		var el = e.target || e.srcElement;		
		if (el == null || !new RegExp(/IMG|A/).test(el.tagName)) Da.SE(e);
	},
	clickCloseHelp : function(e) {
		AdCastEvent.closeHelp();
		Da.SE(e);
		return false;
	},
	closeHelp : function() {
		var d1 = Da.$$("ac_help1_layer");
		if (d1 != null && d1.style.display == "block") d1.style.display = "none";	
		var d2 = Da.$("ac_help2_layer");
		if (d2 != null && d2.style.display == "block") d2.style.display = "none";			
	}
}