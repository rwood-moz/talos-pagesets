/* Creating DCSext meta tag to track users who are logged in */
if($.cookie("tmg_pid")) {
	$("head").append($("<meta />").attr("name","WT.dcsvid").attr("content",$.cookie("tmg_pid")));
}

//Track the navigation click on the delivery page (and not in the referrer page)
if($.cookie("tmg_navPos")) {
	$("head").append($("<meta />").attr("name","DCSext.navigation").attr("content",$.cookie("tmg_navPos")));
	$.cookie('tmg_navPos', "", { expires: -1, path: '/' });
}
