
function get_nav_city_a_href(href) {
	var a_all = document.links;
	var len = a_all.length;
	for(var i = 0; i<len; i++) {
		if(a_all[i].href == href) {
			return a_all[i];
			break;
		}
	}
	return "undefined";
}
var nav_city_a = get_nav_city_a_href("httpdisabled://city.ifeng.com/");
if(nav_city_a == "undefined") {
} else {
	if(regionOrientProv == "cn022") {
		nav_city_a.href = "httpdisabled://tj.city.ifeng.com";
		nav_city_a.innerHTML = "天津";
	}
}
		