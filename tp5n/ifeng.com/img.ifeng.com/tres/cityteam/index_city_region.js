
if(regionOrientProv == ''||regionOrientProv == 'undefined' || typeof(regionOrientProv) == 'undefined') {
	regionOrientProv = getRegionCookie('prov');
}
if (regionOrientCity == ''||regionOrientCity == 'undefined'||typeof(regionOrientCity) == 'undefined') {
	regionOrientCity = getRegionCookie('city');
}
		
if(regionOrientProv == "cn022") {
	document.getElementById("check_a").href = "httpdisabled://biz.ifeng.com/city/tj/special/jiefangbeilu/index.shtml";
	document.getElementById("check_a").innerHTML = "寻找老金融街的前世今生";
}
		