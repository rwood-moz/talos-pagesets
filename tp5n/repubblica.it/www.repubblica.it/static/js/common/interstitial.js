//JQUERY PLUGIN - Url encoder/decoder
$.extend({URLEncode:function(c){var o='';var x=0;c=c.toString();var r=/(^[a-zA-Z0-9_.]*)/;
  while(x<c.length){var m=r.exec(c.substr(x));
    if(m!=null && m.length>1 && m[1]!=''){o+=m[1];x+=m[1].length;
    }else{if(c[x]==' ')o+='+';else{var d=c.charCodeAt(x);var h=d.toString(16);
    o+='%'+(h.length<2?'0':'')+h.toUpperCase();}x++;}}return o;},
URLDecode:function(s){var o=s;var binVal,t;var r=/(%[^%]{2})/;
  while((m=r.exec(o))!=null && m.length>1 && m[1]!=''){b=parseInt(m[1].substr(1),16);
  t=String.fromCharCode(b);o=o.replace(m[1],t);}return o;}
});

var debug = false;
//var logger;

//MAIN
$(document).ready(function() {  
    zoneRef();
    interstitial();
    //logger  = new Logger();
});


function zoneRef() {
  if(typeof mappingZone != 'undefined') {
    $.each(mappingZone, function(key, zoneId) {
        $.each($(zoneId), function(i, element) {
            $("a",element).live("click",function() {
              var href = $(this).attr("href");
              if(isInternalHref(href) && isRefApplicable(href)) {
                var position=i+1;
                var ref = key+"-"+position;
                //logger.debug("href before", href);
                parameters = {};
                parameters["ref"] = ref;
                href = addParameters(href, parameters);
                //logger.debug("href after", href);
                if(debug) {
                    alert(href);
                    return false;
                }
                href = $(this).attr("href", href);
              }
            });
        });
    });
  }
}

function interstitial() {
     if(typeof mappingInterstitial != 'undefined') {
    	 $.each(mappingInterstitial, function(interstitialId, fileName) {
    		 $(interstitialId).live("click", function() {
	              var href = $(this).attr("href");
	              if(isInterstitiable(href)) {
	                  href = $.URLEncode(href);
	                  parameters = {};
	                  parameters["href"] = href;
	                  fileName = addParameters(fileName, parameters);
	                  if(debug) {
	                    alert("filename: " + fileName);                       
	                  } else {
	                     window.location.href = fileName;
	                  }
	              } else {
	            	  return true;
	              }
	              return false;
          	});
    	 });
    }
}

function isRefApplicable(href) {
	for (var i=0; i<blackListUrls.length; i++) {
		var url = blackListUrls[i];
		if(typeof url!='undefined' && href.indexOf(url)!=-1) {
			return false;
		}
	}
	return true;
}

function isInterstitiable(href) {
    return href.indexOf("void")==-1 && href.indexOf("javascript")!=0;
}

function isInternalHref(href) {
  return  href.indexOf("void")==-1 && href.indexOf("javascript")!=0;
}

function addParameters(url, parameters) {
    if(typeof url!='undefined' && typeof parameters!='undefined') {
        url = $.URLDecode(url);
        var anchor = getAnchorUrl(url);
        url = url.replace(anchor, "");
        var baseUrl = getBaseUrl(url);
        var map = getQueryStringMap(url);
        jQuery.each(parameters, function(key, val) {
            map[key] = val; 
        });
        return build(baseUrl, map, anchor); 
    }
    return url;
};

function getAnchorUrl(url) {
    if(url!=null && typeof url!='undefined') {
        if(url.indexOf("#")!=-1) {
            var sub = url.substring(url.indexOf("#"), url.length);
            if(sub.indexOf("?")!=-1)
                sub = sub.substring(0, sub.indexOf("?"));
            if(sub.indexOf("&")!=-1)
                sub = sub.substring(0, sub.indexOf("&"));
            return sub;
        }
    }
    return "";    
}

function addParameter(url, key, value) {
    url = $.URLDecode(url);
	var terminal = "&";
    var param = key+"="+value;
    if(url.indexOf("?")==-1) {
        terminal = "?";
    } else if(url.indexOf("?")==url.length-1) {
        terminal = "";
    }
    terminal = evaluateTerminalExceptionParameter(url, terminal);
    if(url.indexOf(param)==-1 && url.indexOf(key+"=")==-1)
      url += terminal+param;
    return url; 
}

function build(baseUrl, map, anchor) {
    if(typeof baseUrl!='undefined' && typeof map!='undefined') {
        rebuild =  baseUrl;
        jQuery.each(map, function(keymap, valmap){
            rebuild = addParameter(rebuild, keymap, valmap);
        });
        if(typeof anchor!='undefined' && rebuild.indexOf(anchor)==-1)
            rebuild+=anchor;
    }
    return rebuild;
};

function getBaseUrl(url) {
    if(url.indexOf("?")!=-1) {
        return url.substring(0,url.indexOf("?")+1);
    } else {
        return url;
    }
}

function getQueryStringMap(url) {
    var map = {};
    if(typeof url!='undefined') {
        if(url.indexOf("?")!=-1) {
            var queryString = url.substring(url.indexOf("?")+1, url.length);
            jQuery.each(queryString.split(/[&;]/), function(){
                var key = decodeURIComponent(this.split('=')[0] || "");
                var val = decodeURIComponent(this.split('=')[1] || "");
                //logger.debug(key, val);
                if (!key) return;
                map[key] = val;
              });
        }
    }
    return map;
}

function evaluteExceptionRef(url, terminal) {
	if(typeof url!= 'undefined') {
		if(url.indexOf("neodatagroup.com")!=-1 ) {
			return  true;
		}
	}
	return false;
}

function evaluateTerminalExceptionParameter(url, terminal) {
	if(typeof url!= 'undefined') {
		if(url.indexOf("httpdisabled://ilmiolibro.kataweb.it/")!=-1 && url.indexOf("dettaglioRecensioni")!=-1) {
			return "&";
		}
	}
	return terminal;
}