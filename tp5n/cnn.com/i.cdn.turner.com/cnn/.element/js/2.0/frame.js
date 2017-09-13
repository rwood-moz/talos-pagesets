function CNN_extractHost(url) {
	var returnArry = /^(?:[^:\/?#]+):\/\/([^\/?#]+)(?::\d+)?(?:[^?#]*)\//i.exec(url);
	if(returnArry && typeof returnArry === "object") {
		return returnArry[1];
	} else {
		return "";
	}
}

function CNN_bustFrame(){
   var blacklist = ['digg.com'];
   if (top.location!=window.location) {
      var topURL = CNN_extractHost(document.referrer);
      if (topURL) {
         for (var i=0; i < blacklist.length; i++) {
            if (topURL.indexOf( blacklist[i] ) != -1) { 
		top.location.replace(window.location);
            	return;
            }
         }
      }
   }
}

CNN_bustFrame();
