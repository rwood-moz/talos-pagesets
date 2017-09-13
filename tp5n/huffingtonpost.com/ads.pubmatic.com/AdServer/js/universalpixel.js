var upixel_pubmaticbase="..";
function upixel_function_call_url() {
	var srclink= upixel_pubmaticbase +'/UPug?operId=2&pubId='+pubId;
	var ran = Math.random();
	var pageUrl=document.URL;
	pageUrl=pageUrl.split("?",1)[0];
	pageUrl=pageUrl.split("#",1)[0];
	srclink=srclink+'&pixId='+pixId;
	srclink=srclink+'&ran='+ran;
	srclink=srclink+'&pageURL='+pageUrl;
	document.write('<script type="text/javascript" src="'+srclink+'"> </script>');
}
var regUpixelFunction=new function() {
	if ((typeof(pubId)=='undefined') || (typeof(pixId)=='undefined')) {
		return;
	}
	upixel_function_call_url(pubId, pixId);
}

