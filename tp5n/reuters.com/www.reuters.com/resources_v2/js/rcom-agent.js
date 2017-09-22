var agt        = navigator.userAgent.toLowerCase();
var is_major   = parseInt(navigator.appVersion);
var is_minor   = parseFloat(navigator.appVersion);
var is_nav     = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
					    && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
					    && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));
var is_nav2    = (is_nav && (is_major == 2));
var is_nav3    = (is_nav && (is_major == 3));
var is_nav4    = (is_nav && (is_major == 4));
var is_nav4up  = (is_nav && (is_major >= 4));
var is_navonly = (is_nav && ((agt.indexOf(";nav") != -1) || (agt.indexOf("; nav") != -1)) );
var is_nav6    = (is_nav && (is_major == 5));
var is_nav6up  = (is_nav && (is_major >= 5));
var is_gecko   = (agt.indexOf('gecko') != -1);

var is_ie      = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
var is_ie3     = (is_ie && (is_major < 4));
var is_ie4     = (is_ie && (is_major == 4) && (agt.indexOf("msie 4")!=-1) );
var is_ie4up   = (is_ie && (is_major >= 4));
var is_ie5     = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) );
var is_ie5_5   = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.5") !=-1));
var is_ie5up   = (is_ie && !is_ie3 && !is_ie4);
var is_ie5_5up =(is_ie && !is_ie3 && !is_ie4 && !is_ie5);
var is_ie6     = (is_ie && (is_major == 4) && (agt.indexOf("msie 6.")!=-1) );
var is_ie6up   = (is_ie && !is_ie3 && !is_ie4 && !is_ie5 && !is_ie5_5);

var is_ipad    = (agt.indexOf("ipad") != -1);
var is_iphone  = (agt.indexOf("iphone") != -1);

if (is_ipad) {
	Reuters.utils.loaddisabledStylesheet("ipadCSS", "/resources_v2/css/rcom-ipad.css");
	void('<scr' + 'ipt language="javascript" src="/resources_v2/js/rcom-ipad.js"></scr' + 'ipt>');
}