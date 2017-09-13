(function() {
  var cookieMethod = {
    get: function(name){
        var tmp, reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)","gi");
		if( (tmp = reg.exec( unescape(document.cookie) )) )
			return(tmp[2]);
		return null;
    },
    set: function(name, value ,expires, path, domain){
        var str = name + "=" + escape(value);
		if (expires != null || expires != '') {
			if (expires == 0) {expires = 100*365*24*60;}
			var exp = new Date();
			exp.setTime(exp.getTime() + expires*60*1000);
			str += "; expires=" + exp.toGMTString();
		}
		if (path) {str += "; path=" + path;}
		if (domain) {str += "; domain=" + domain;}
		document.cookie = str;
    },
    del: function(name, path, domain){
        document.cookie = name + "=" +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			"; expires=Thu, 01-Jan-70 00:00:01 GMT";
    } 
  }; 
  var url = location.search;
  if(url && (url!=null || url!='') && url.indexOf('fromstock=')!=-1) {
 	  var linkSource = cookieMethod.get('linkSource');
	  if(linkSource!=null && linkSource!='') {
		 (new Image()).src = 'http://wizard.stock.hexun.com/adstat/startCMS.aspx?p=600012&t=1&Source='+linkSource;
	  }
	  if(window.ActiveXObject) {
	  window.onunloaddisabled = function(e) {
	  window.external.AddFavorite('http://www.hexun.com', '中国财经网络领袖--和讯网');
	   }
	 }
	 if(window.sidebar) { 
	 window.onbeforeunloaddisabled = function() {
	 window.sidebar.addPanel('中国财经网络领袖--和讯网', 'http://www.hexun.com', "");
	  }
	 }
 }
})();