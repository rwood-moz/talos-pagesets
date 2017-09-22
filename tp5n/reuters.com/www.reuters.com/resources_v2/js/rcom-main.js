if (typeof(Reuters) == 'undefined' || Reuters == null) {
  Reuters = new Object();
}

Reuters.namespace = function() {
    var a=arguments, o=null, i, j, d;
    for (i=0; i<a.length; i=i+1) {
        d=(""+a[i]).split(".");
        o=Reuters;

        // YAHOO is implied, so it is ignored if it is included
        for (j=(d[0] == "Reuters") ? 1 : 0; j<d.length; j=j+1) {
            o[d[j]]=o[d[j]] || {};
            o=o[d[j]];
        }
    }
    return o;
};


Reuters.namespace("utils");

/* addLoadEvent - replaces window.onloaddisabled */

Reuters.utils.addLoadEvent = function(func, obj) {
  if (typeof func != 'function') {
    try {console.debug("function called addLoadEvent with a non-function param"); } catch (e) { }
    return;
  }
	var oldonloaddisabled = window.onloaddisabled;
	if (typeof window.onloaddisabled != 'function') {
    if (obj !== undefined) {
      window.onloaddisabled = function() {
        func.call(obj);
      }
    } else {
  		window.onloaddisabled = func;
    }
	} else {
		window.onloaddisabled = function() {
			oldonloaddisabled();
      if (obj !== undefined) {
  			func.call(obj);
      } else {
        func();
      }
		}
	}
}

Reuters.utils.enableSearchBox = function(sSearchId, sResetText, fnSearchSubmit) {
	var searchbox = document.getElementById(sSearchId);
	var selectedItem = "";
	var typedSearch = "";
	if (searchbox) {
		if (searchbox.value == sResetText) {
			searchbox.style.cssText = 'color: #999;';
		}
		searchbox.onfocus = function() {
			if (searchbox.value == sResetText) {
				searchbox.value = "";
				searchbox.style.cssText = 'color: #000;';
			}
		}
		searchbox.onblur = function() {
			if (searchbox.value == "") {
				searchbox.value = sResetText;
				searchbox.style.cssText = 'color: #999;';
			}
			setTimeout(function() {if (document.getElementById("suggestedSearch")) document.getElementById("suggestedSearch").innerHTML = "";},500)
		}
		searchbox.onkeyup = function(e) {
			if (sSearchId == "searchfield"){
				if (!e) var e = window.event;
				if (e && (e.keyCode === 40 || e.keyCode == 38)) {
					var moveItem = (e.keyCode === 40)? 1 : -1;
					if (document.getElementById("suggestedSearchResults")) {
						if (selectedItem == "") {
							selectedItem = "sugg0";
							nextItem = selectedItem;
						} else {
							selectedItem = YAHOO.util.Dom.getElementsByClassName("selected","","suggestedSearchResults")[0].id;
							nextItem = "sugg" + (parseInt(selectedItem.substr(4)) + moveItem);
						}
						YAHOO.util.Dom.removeClass(selectedItem,"selected")
						if (document.getElementById(nextItem)){
							YAHOO.util.Dom.addClass(nextItem, "selected");
							searchbox.value = document.getElementById(nextItem).getAttribute("suggSearch");
							selectedItem = nextItem;
						}else{
							selectedItem = "";
							searchbox.value = typedSearch;
						}
					}
		        } else if (searchbox.value != "") {
					if ((Reuters.info === null) || (typeof Reuters.info === 'undefined')) {
						var thisEdition = "us";
					} else {
						var thisEdition = (Reuters.info.edition.search(/betaus/i) == -1 ? Reuters.info.edition.toLowerCase() : "us");
					}
					var resultsJSON = "httpdisabled://search." + thisEdition + ".reuters.com/query/suggestion.do?q=" + encodeURIComponent(searchbox.value) + "&site=" + thisEdition + "&resultsPerPage=5&callback=Reuters.utils.storeSuggestedSearchNewsResults";
					// disable for UK and IN
					if (thisEdition == 'us') {
						Reuters.utils.loaddisabledScript("suggestedSearchJSON", resultsJSON);
					}
					typedSearch = searchbox.value;
				} else {
					if (document.getElementById("suggestedSearch")) document.getElementById("suggestedSearch").innerHTML = "";
					selectedItem = "";
				}
			}
		}

		if(fnSearchSubmit) {
			searchbox.onkeypress = function(e) {
				if (!e) var e = window.event;
				if(e) {
		          if(e.keyCode === 13 || e.which === 13 || e.charCode === 13) {
					if(typeof(fnSearchSubmit) != 'undefined' ) {
						fnSearchSubmit();
					}
		            return false;
		          }
	        	}
			}
		}
	}
}

Reuters.utils.storeSuggestedSearchNewsResults = function(o) {
	Reuters.utils.suggestedSearchResults = o;
  var edition = (o.edition == 'US') ? 'www' : o.edition.toLowerCase();
	var searchUrl = (o.edition == 'UK') ? '/business/quotes' : '/finance/stocks';
	var searchStr = o.queryString;
	var dotIdx = searchStr.indexOf('.');
	searchStr = (dotIdx > 0) ? searchStr.substring(0, dotIdx) : searchStr
	var resultsJSON = "httpdisabled://" + edition + ".reuters.com" + searchUrl + "/jsonCompanySearch?searchType=symbol&search=" + encodeURIComponent(searchStr) + "&callback=Reuters.utils.storeSuggestedSearchSymbolResults";
	Reuters.utils.loaddisabledScript("suggestedSearchSymbolJSON", resultsJSON);
}

Reuters.utils.storeSuggestedSearchSymbolResults = function(o) {
  Reuters.utils.suggestedSearchResults.quoteSearchResult = o;
	var searchbox = document.getElementById('searchfield');
	var searchStr = searchbox.value;
	// call name search if we don't have any symbol results
	if (Reuters.utils.suggestedSearchResults.quoteSearchResult.length <= 0) {
		if ((Reuters.info === null) || (typeof Reuters.info === 'undefined')) {
			var thisEdition = "www";
		} else {
			var thisEdition = (Reuters.info.edition.search(/betaus/i) == -1 ? Reuters.info.edition.toLowerCase() : "www");
		}
		var searchUrl = (thisEdition == 'uk') ? '/business/quotes' : '/finance/stocks';
		var resultsJSON = "httpdisabled://"+thisEdition+".reuters.com" + searchUrl + "/jsonCompanySearch?searchType=name&search=" + encodeURIComponent(searchStr) + "&callback=Reuters.utils.storeSuggestedSearchNameResults";
		Reuters.utils.loaddisabledScript("suggestedSearchNameJSON", resultsJSON);
	} else {
		// hackfest to strip out rics that don't match on the client
		var cleanedResults = [];
		for (var i = 0; i < Reuters.utils.suggestedSearchResults.quoteSearchResult.length; i++) {
			if (Reuters.utils.suggestedSearchResults.quoteSearchResult[i].ric.toLowerCase().startsWith(searchStr.toLowerCase())) {
				cleanedResults.push(Reuters.utils.suggestedSearchResults.quoteSearchResult[i]);
			}
		}
		Reuters.utils.suggestedSearchResults.quoteSearchResult = cleanedResults;
		Reuters.utils.loaddisabledSuggestedSearch(Reuters.utils.suggestedSearchResults);
	}
}

Reuters.utils.storeSuggestedSearchNameResults = function(o) {
  Reuters.utils.suggestedSearchResults.quoteSearchResult = o;
	Reuters.utils.loaddisabledSuggestedSearch(Reuters.utils.suggestedSearchResults);
}

Reuters.utils.loaddisabledSuggestedSearch = function(o){
	//function called from sugg search json, draws and populates sugg search
	function drawSuggSearch(){
		var s = document.getElementById("header");
		var r = document.createElement('div'); r.id="suggestedSearch";
		var t = document.createElement('div'); t.id="suggestedSearchResults";
		r.appendChild(t);
		s.appendChild(r);
	}
	function createDiv(theId, title){
		var theDiv = document.createElement('div');
		theDiv.id=theId;
		if (title) {
			var header = document.createElement('h5');
			header.innerHTML = title;
			theDiv.appendChild(header);
		}
		return theDiv;
	}
	function spannedString(matchString){
		var displayedString;
		var re = new RegExp(o.queryString,"i");
		var start = matchString.search(re);
		var finish = start + o.queryString.length;
		displayedString = (start == -1)? matchString : matchString.substr(0,start) + "<span class='query'>" + matchString.substr(start,o.queryString.length) + "</span>" + matchString.substr(finish);
		return displayedString;
	}
	function populateResults() {
		var cTemp = document.createElement('div');
		var sugg = 0;
		if (document.getElementById("suggestedSearchResults")){
			var c = document.getElementById("suggestedSearchResults");
		}else{
			var c = document.createElement('div');
			c.id="suggestedSearchResults";
			document.getElementById("suggestedSearch").appendChild(c);
		}

		if ((Reuters.info === null) || (typeof Reuters.info === 'undefined')) {
			var thisEdition = "www";
		} else {
			if ((Reuters.info.edition === null) || (typeof Reuters.info.edition === 'undefined')) {
				var thisEdition = "www";
			} else {
				var thisEdition = (Reuters.info.edition.search(/betaus/i) == -1 ? Reuters.info.edition.toLowerCase() : "www");
			}
		}
		var host = "httpdisabled://" + thisEdition + ".reuters.com";
		if (o.newsSearchResult.length >= 1) {
			var newsDiv = createDiv("newsResults", "News");
			var resultList = document.createElement("ul"); resultList.id ="newsResultsList";
			newsDiv.appendChild(resultList);
			for (i=0; i<o.newsSearchResult.length; i++) {
				result = o.newsSearchResult[i];
				li = document.createElement("li");
				li.id= "sugg" + sugg;
				li.setAttribute("suggSearch",result.queryString);
				var re = new RegExp(o.queryString,"i");
				li.innerHTML = '<a href="' +host+ '/search?blob=' + result.queryString + '">' + spannedString(result.queryString) + '</a>';
				resultList.appendChild(li);
				sugg++
			}
			cTemp.appendChild(newsDiv);
		}
		if (o.quoteSearchResult.length >= 1) {
			var companyDiv = createDiv("companyResults", "Stocks");
			var resultList = document.createElement("table"); resultList.id ="companyResultsList";
			companyDiv.appendChild(resultList);
			// only display 5 reuslts
			for (i=0; i<o.quoteSearchResult.length && i<5; i++) {
				result = o.quoteSearchResult[i];
				tr = document.createElement("tr");
				tr.id = "sugg" + sugg;
				tr.setAttribute("suggSearch",result.ric);
				var re = new RegExp(o.queryString,"i");
				td1 = document.createElement("td"); td1.innerHTML= '<span class="ric"><a href="' + host + '/finance/stocks/overview?symbol=' + result.ric + '">' + spannedString(result.ric) + '</a></span>';
				td2 = document.createElement("td"); td2.innerHTML= '<span class="companyName">' + result.name + '</span>';
				//td2 = document.createElement("td"); td2.innerHTML= '<span class="companyName">' + result.companyName + '</span>';
				td3 = document.createElement("td"); td3.innerHTML= '<span class="exchange">' + result.exchange + '</span>';
				tr.appendChild(td1); tr.appendChild(td2); tr.appendChild(td3);
				resultList.appendChild(tr);
				sugg++;
			}
			stockLink = document.createElement("p"); stockLink.id = "stockLink";
			stockLink.innerHTML = "<a href=\"" +host+ "/finance/stocks/lookup?searchType=name&search=" + o.orignalqueryString.replace(/ /g, "+") + "\">&#187; More Stocks Results</a>";
			companyDiv.appendChild(stockLink);
			cTemp.appendChild(companyDiv);
		}
		if ((o.newsSearchResult.length == 0)&&(o.quoteSearchResult.length == 0)){
			var noResultsDiv = createDiv("noResults");
			noResultsDiv.innerHTML = "<p>No results found.</p>";
			cTemp.appendChild(noResultsDiv);
		}
		c.innerHTML = cTemp.innerHTML;
	}
	if (!document.getElementById("suggestedSearch")) {
		drawSuggSearch();
	}
	populateResults();
}

Reuters.utils.loaddisabledScript = function(scriptName, scriptUrl) {
	var scriptNode = document.getElementById(scriptName);
	var head = document.getElementsByTagName("head")[0];
	if ((scriptNode != null) && (head.removeChild)) {
		head.removeChild(scriptNode);
	}
	if (document.createElement) {
		scriptNode = document.createElement('script');
		scriptNode.id = scriptName;
		scriptNode.setAttribute('type', 'text/javascript');
		scriptNode.setAttribute('src', scriptUrl);
		scriptNode.setAttribute('charset', 'UTF-8');
	}
	head.appendChild(scriptNode);
}

Reuters.utils.loaddisabledStylesheet = function(cssName, cssUrl) {
	var cssNode = document.getElementById(cssName);
	var head = document.getElementsByTagName("head")[0];
	if ((cssNode != null) && (head.removeChild)) {
		head.removeChild(cssNode);
	}
	if (document.createElement) {
		cssNode = document.createElement('link');
		cssNode.id = cssName;
		cssNode.setAttribute('rel', 'stylesheet');
		cssNode.setAttribute('href', cssUrl);
	}
	head.appendChild(cssNode);
}

/* replaceContent - AJAX */

Reuters.utils.replaceContent = function(elementId, url, interval, reloaddisabledCallbackFunc){
	var replacer = new Reuters.utils._contentReplacer(elementId, url, interval, reloaddisabledCallbackFunc);
	replacer.update();
}

Reuters.utils._contentReplacer = function(elementId, url, interval, reloaddisabledCallbackFunc){
	this.elementId = elementId;
	this.url = url;
	this.reloaddisabledCallbackFunc = reloaddisabledCallbackFunc;
	if (interval) {
		this.interval = interval;
	} else {
		this.interval = null;
	}
	this.success = function(o){
		if ((o.responseText !== undefined) && (o.responseText != null) && (o.responseText.indexOf("No Data")<0)) {
			var result = o.responseText;
			var el = document.getElementById(elementId);
			var newEL = document.createElement(el.tagName);
			newEL.innerHTML = result;
			// compare to see if new contents are different than current contents
			if (el.innerHTML != newEL.innerHTML) {
				//el.innerHTML = result;
				el.parentNode.replaceChild(newEL, el);
				newEL.id = elementId;
				if (this.reloaddisabledCallbackFunc && typeof this.reloaddisabledCallbackFunc == "function") {
					this.reloaddisabledCallbackFunc();
				}
			}
		}
		if(this.interval != null){
			try {
				setTimeout(this.update.bind(this), this.interval);
      } catch (e) { trace("Somebody tell Mike about this: " + e) }
    }
  }
  this.failure = function(o) {}
  this.update = function(){
    YAHOO.util.Connect.asyncRequest("GET", this.url, this);
  }
}

/* showGrid - display layout grid */

Reuters.utils.showGrid = function() {
  if (location.href.search("grid=true") != -1) {
    var allDivs = document.getElementsByTagName("div");
    for (i=0; i<allDivs.length; i++) {
      if (allDivs[i].className.search("section") != -1) {
        allDivs[i].style.cssText += ' background: url("httpdisabled://design.reuters.com/prototypes/redesign/bg_grid.gif") top left';
      }
    }
  }
}

/* popup window */
Reuters.utils.popup = function(url, width, height, toolsInd, wname, _articleId)
{
  var options = "width=" + width + ",height=" + height + ",top=" + ((screen.height - height) / 4).toString() + ",left=" + ((screen.width - width) / 2).toString();
  switch (toolsInd){
    case 1:
      options += ",toolbar=no,status=no,resizable=no,scrollbars=no";
      break;
    case 2:
      options += ",menubar=yes,toolbar=yes,status=yes,resizable=yes,location=yes,scrollbars=yes";
      break;
    case 3:
      options += ",toolbar=no,status=no,resizable=no,scrollbars=yes";
      break;
    default:
      //do nothing
      break;
  }
  if (!wname){
    wname = "reutersPopup";
  }

  if( _articleId == null ) {
	  _articleId = (typeof(Reuters.info) == 'undefined' || Reuters.info == null)? "" : Reuters.info.articleId ;
	}

  switch(wname) {
  	case "emailArticle":
	  	dcsMultiTrack('WT.cg_n', 'Event - Share', 'DCSext.ContentID_Shared', _articleId, 'DCSext.VBC', '', 'DCSext.ContentType', 'Share', 'DCSext.DartZone', '', 'DCSext.ModID', '', 'DCSext.ModImp', '', 'DCSext.rChannel', 'Event', 'dcsuri', '/share');
	  	break;
  	case "shareArticle":
	  	dcsMultiTrack('WT.cg_n', 'Event - Share', 'DCSext.ContentID_Shared', _articleId, 'DCSext.VBC', '', 'DCSext.ContentType', 'Share', 'DCSext.DartZone', '', 'DCSext.ModID', '', 'DCSext.ModImp', '', 'DCSext.rChannel', 'Event', 'dcsuri', '/share');
	  	break;
  }
  popupWindow = void(url, wname, options);
  if (popupWindow){
    popupWindow.focus();
  }
}

/* Just do things */

Reuters.utils.addLoadEvent(Reuters.utils.showGrid);
Reuters.utils.addLoadEvent(function() { Reuters.utils.enableSearchBox('searchfield', 'Search News & Quotes') });

Reuters.namespace("lang");

Reuters.lang.isEmpty = function(o) {
  return (o === null) || (typeof o === 'undefined') ||
    ((typeof o == 'string') && (o.length <= 0));
}

Reuters.lang.isNotEmpty = function(o) {
  return !Reuters.lang.isEmpty(o);
}

Reuters.namespace("lang.Arrays");

Reuters.lang.Arrays.remove = function(ar, obj) {
  if (Reuters.lang.isNotEmpty(ar) && Reuters.lang.isNotEmpty(obj)) {
    for (var i = 0; i < ar.length; i++) {
	    if (ar[i] == obj) {
        ar.splice(i, 1);
        return i;
      }
    }
  }
}

trace = function() {
	try {
		console.debug.apply(console, arguments);
	} catch(e) {}
}

Reuters.utils.isLoggedIn = function() {
var domain = 1;
if((window.location.host.indexOf("us") > -1) || (window.location.host.indexOf("www") > -1)){
       domain=1;
  }else if(window.location.host.indexOf("uk") > -1){
        domain=2;
  }else if(window.location.host.indexOf("jp") > -1){
        domain=4;
  }else if(window.location.host.indexOf("in") > -1){
        domain=9;
  }else if(window.location.host.indexOf("cn") > -1){
        domain=10;
  }
        if (typeof(YAHOO) != "undefined") {
          var userId = YAHOO.util.Cookie.get("customerId");
          var edition = YAHOO.util.Cookie.get('edition');
          loggedIn = ((userId != null) && (userId != "@") && (domain == edition));
        } else {
                loggedIn = false;
        }
  return loggedIn;

}

Reuters.utils.hasScreenName = function() {
	if (Reuters.utils.isLoggedIn()) {
        var userInfo = Reuters.tns.CURRENT_USER.getUserInfo();
        if (typeof(userInfo.screenName) != "undefined" && userInfo.screenName != "" ) {
            return true;
        }
	}
	return false;
}

Reuters.utils.login = function() {
	if ((Reuters.info === null) || (typeof Reuters.info === 'undefined')) {
		var thisEdition = "us";
	} else {
		var thisEdition = (Reuters.info.edition.search(/betaus/i) == -1 ? Reuters.info.edition.toLowerCase() : "us");
	}
	if (Reuters.utils.isLoggedIn() == false) {
		var overlayBox;
		if (thisEdition == 'us') {
			overlayBox = Reuters.utils.showOverlayCurtain(500, 560, 100);
			overlayBox.innerHTML = '<div id="modalLoginFlow"><div class="closer" onclick="Reuters.utils.closeLogin()"></div><iframe id="loginFrame" src="httpdisabledsdisabled://commerce.'+thisEdition+'.reuters.com/login/pages/login/loginEmbedded.do?go=' + encodeURIComponent(location.href) + '&success=http://' + location.hostname + '/assets/loginSuccessful" width="490" height="550" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe></div>';
		} else {
			overlayBox = Reuters.utils.showOverlayCurtain(910, 410, 100);
			overlayBox.innerHTML = '<div id="modalLoginFlow"><div class="closer" onclick="Reuters.utils.closeLogin()"></div><iframe id="loginFrame" src="httpdisabledsdisabled://commerce.'+thisEdition+'.reuters.com/login/pages/login/loginEmbedded.do?go=' + encodeURIComponent(location.href) + '&success=http://' + location.hostname + '/assets/loginSuccessful" width="900" height="400" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe></div>';
		}
		// document.getElementById("overlayMask").onclick = Reuters.utils.closeLogin;
	}
}

Reuters.utils.logout = function() {
	if ((Reuters.info === null) || (typeof Reuters.info === 'undefined')) {
		location.href = 'https://commerce.us.reuters.com/login/pages/login/logout.do?go=' + encodeURIComponent(location.href);
	} else {
		var thisEdition = (Reuters.info.edition.search(/betaus/i) == -1 ? Reuters.info.edition.toLowerCase() : "us");
		location.href = 'https://commerce.'+ thisEdition +'.reuters.com/login/pages/login/logout.do?go=' + encodeURIComponent(location.href);
	}

}

Reuters.utils.loaddisabledHeaderLinks = function() {
	if ((Reuters.info === null) || (typeof Reuters.info === 'undefined')) {
		var thisEdition = "us";
	} else {
		if ((Reuters.info.edition === null) || (typeof Reuters.info.edition === 'undefined')) {
			var thisEdition = "us";
		} else {
			var thisEdition = (Reuters.info.edition.search(/betaus/i) == -1 ? Reuters.info.edition.toLowerCase() : "us");
		}
	}
	if (document.getElementById("utilities")) {
		var utilityHTML = '<ul>';
		if (Reuters.utils.isLoggedIn() == false) {
			utilityHTML += '<li class="last"><a href="httpdisabledsdisabled://commerce.'+thisEdition+'.reuters.com/registration/pages/registration/begin.do?go=' + encodeURIComponent(location.href) + '">Register</a></li>';
			if (thisEdition == 'us') {
				utilityHTML += '<li id="signin-control" onmouseover="Reuters.utils.showLoginOptions()" onmouseout="Reuters.utils.hideLoginOptionsSoon();"><a href="httpdisabledsdisabled://commerce.'+thisEdition+'.reuters.com/login/pages/login/portfolioLogin.do?go=' + encodeURIComponent(location.href) + '">Sign In</a><div id="signin-social" onclick="Reuters.utils.showLoginOptions();"></div></li>';
				if (typeof document.forms["gigyaForm"] == "undefined") {
					utilityHTML += '<div id="gigya-controller"><form action="httpdisabledsdisabled://commerce.'+thisEdition+'.reuters.com/login/pages/login/portfolioLogin.do?go=' + encodeURIComponent(location.href) + '" method="post" name="gigyaForm"><input type="hidden"	value="827" name="__MOID__" /><input type="hidden"	value="CheckGigyaResponseForm" name="__FH__" /><input type="hidden" name="uid"/><input type="hidden" name="signature"/><input type="hidden" name="timestamp"/><input type="hidden" name="email"/><input type="hidden" name="backUrl"/><input type="hidden" name="backParameterEncoded"/><input type="hidden" name="source"/><input type="hidden" name="loginProvider"/><input type="hidden" name="providers"/></form><div id="gigyalogin"></div></div>';
				} else {
					utilityHTML += '<div id="gigya-controller"><div id="gigyalogin"></div></div>';
				}
			} else {
				utilityHTML += '<li class="last"><a href="httpdisabledsdisabled://commerce.'+thisEdition+'.reuters.com/login/pages/login/portfolioLogin.do?go=' + encodeURIComponent(location.href) + '">Sign In</a></li>';
			}
		} else {
			utilityHTML += '<li><a href="httpdisabledsdisabled://commerce.'+thisEdition+'.reuters.com/profile">Profile</a></li>';
			if (Reuters.info.edition != 'IN') {
				utilityHTML += '<li><a href="httpdisabledsdisabled://commerce.' + thisEdition + '.reuters.com/purchase/mycart.do">My Cart</a></li>';
			}
			utilityHTML += '<li><a href="httpdisabledsdisabled://commerce.'+thisEdition+'.reuters.com/login/pages/login/portfolioLogin.do?go=http://portfolio.'+thisEdition+'.reuters.com/'+thisEdition.toUpperCase()+'/overview.asp&go_withoutlogin=http://portfolio.'+thisEdition+'.reuters.com/'+thisEdition.toUpperCase()+'/public/index.asp">Portfolio</a></li>';
			utilityHTML += '<li class="last"><a href="javascript:Reuters.utils.logout();">Logout</a></li>';
		}
		utilityHTML += '</ul>';
		document.getElementById("utilities").innerHTML = utilityHTML;
	}
}
Reuters.utils.addLoadEvent(Reuters.utils.loaddisabledHeaderLinks);

Reuters.utils.showLoginOptions = function() {
	if (document.getElementById("header") || document.getElementById("reutersHeader")) {
		if (document.getElementById("signin-social").offsetHeight != 0) {
			if (document.getElementById("login-social-flyout")) {
				document.getElementById("login-social-flyout").className = "";
				Reuters.utils.dontHideLoginOptions();
			} else {
				var d = document.createElement("div");
				d.id = "login-social-flyout";
				Reuters.utils.loaddisabledScript("gigyaservices", "httpdisabledsdisabled://cdns.gigya.com/JS/gigya.js?services=socialize");
				var optionalHost = '';
				if (typeof Reuters.nav.isCommerce != "undefined") {
					if (Reuters.nav.isCommerce == false) {
						optionalHost = 'http://static.reuters.com';
					}
				}
				Reuters.utils.loaddisabledScript("gigyacreds", optionalHost + "/resources_v2/js/rcom-login-gigya.js");
				var h = '<div id="loaddisabledScreen"><img src="' + optionalHost + '/resources_v2/images/icon_social_loading.gif" border="0" alt="Loading..." /></div>';
				d.innerHTML = h;
				d.onmouseover = Reuters.utils.dontHideLoginOptions;
				d.onmouseout = Reuters.utils.hideLoginOptionsSoon;
				if (document.getElementById("header")) {
					document.getElementById("header").appendChild(d);
				} else if (document.getElementById("reutersHeader")) {
					document.getElementById("reutersHeader").appendChild(d);
				}
			}
		}
	}
}

Reuters.utils.showLoginOptionsViaGigya = function() {
	if (document.getElementById("login-social-flyout")) {
		if ((Reuters.info === null) || (typeof Reuters.info === 'undefined')) {
			var thisEdition = "us";
		} else {
			var thisEdition = (Reuters.info.edition.search(/betaus/i) == -1 ? Reuters.info.edition.toLowerCase() : "us");
		}
		var h = '';
		h = '<div class="biglabel">Sign in with <a href="httpdisabledsdisabled://commerce.'+thisEdition+'.reuters.com/login/pages/login/portfolioLogin.do?go=' + encodeURIComponent(location.href) + '">Reuters</a>...</div>'
		h += '<div id="login-social-options">';
		h += '<div class="label">Or, sign in using:</div>';
		h += '<div class="gigyaAction" id="rgaAol" onclick="gigya.services.socialize.plugins.login.providerClick(\'gigyalogin\',\'aol\')" title="AOL"><span class="hrefClone">AOL</span></div>';
		h += '<div class="gigyaAction" id="rgaFacebook" onclick="gigya.services.socialize.plugins.login.providerClick(\'gigyalogin\',\'facebook\')" title="Facebook"><span class="hrefClone">Facebook</span></div>';
		h += '<div class="gigyaAction" id="rgaGoogle" onclick="gigya.services.socialize.plugins.login.providerClick(\'gigyalogin\',\'google\')" title="Google"><span class="hrefClone">Google</span></div>';
		h += '<div class="gigyaAction" id="rgaLinkedin" onclick="gigya.services.socialize.plugins.login.providerClick(\'gigyalogin\',\'linkedin\')" title="LinkedIn"><span class="hrefClone">LinkedIn</span></div>';
		h += '<div class="gigyaAction" id="rgaMyspace" onclick="gigya.services.socialize.plugins.login.providerClick(\'gigyalogin\',\'myspace\')" title="MySpace"><span class="hrefClone">MySpace</span></div>';
		h += '<div class="gigyaAction" id="rgaTwitter" onclick="gigya.services.socialize.plugins.login.providerClick(\'gigyalogin\',\'twitter\')" title="Twitter"><span class="hrefClone">Twitter</span></div>';
		h += '<div class="gigyaAction" id="rgaYahoo" onclick="gigya.services.socialize.plugins.login.providerClick(\'gigyalogin\',\'yahoo\')" title="Yahoo"><span class="hrefClone">Yahoo</span></div>';
		h += '</div>';
		document.getElementById("login-social-flyout").innerHTML = h;
	}
}

Reuters.utils.dontHideLoginOptions = function() {
	clearTimeout(Reuters.utils.hideLoginTimer);
}

Reuters.utils.hideLoginOptionsSoon = function() {
	Reuters.utils.hideLoginTimer = setTimeout(Reuters.utils.hideLoginOptions, 100);
}

Reuters.utils.hideLoginOptions = function() {
	if (document.getElementById("login-social-flyout")) {
		document.getElementById("login-social-flyout").className = "hidden";
	}
}

Reuters.utils.getQueryStringParameter = function(url, name) {
	var arrUrlParts= url.split("?");
	var sQueryString = "";
	var sReturnValue = "";
	if ( arrUrlParts.length > 1 ) {
		sQueryString = arrUrlParts[1];
		var arrQueryStringParts = sQueryString.split("&");
		for (var iPart = 0; iPart < arrQueryStringParts.length; iPart++) {
			var arrParamParts = arrQueryStringParts[iPart].split("=");
			if ( arrParamParts[0] == name) {
				sReturnValue = arrParamParts[1];
			}
		}
	}
	return sReturnValue;
}

Reuters.utils.replaceQueryStringParam = function(url, name, value) {
	var arrUrlParts= url.split("?");
	var sUrlPrefix = "";
	var sQueryString = "";
	var sReturnQueryString = "";
	sReturnQueryString = url;
	if ( arrUrlParts.length > 1 ) {
		sUrlPrefix = arrUrlParts[0];
		sQueryString = arrUrlParts[1];
		sReturnQueryString = sUrlPrefix;
		var arrQueryStringParts = sQueryString.split("&");
		var existedInQS = false;
		for (var iPart = 0; iPart < arrQueryStringParts.length; iPart++) {
			var arrParamParts = arrQueryStringParts[iPart].split("=");
			if ( arrParamParts[0] == name) {
				arrParamParts[1]=value;
				existedInQS = true;
			}
			if (iPart==0) {
				sReturnQueryString+= "?";
			} else {
				sReturnQueryString+= "&";
			}
			sReturnQueryString+= arrParamParts[0] + "=" + arrParamParts[1];
		}
		if(!existedInQS){ //There was a Query String but it did not contain the requested name/val so tack it on
			sReturnQueryString+="&"+name+"="+value;
		}
	} else {
		sUrlPrefix = arrUrlParts[0];
		sReturnQueryString = sUrlPrefix + "?" + name + "=" + value;
	}
	return sReturnQueryString;
}


Reuters.utils.closeLogin = function() {
	Reuters.utils.hideOverlayCurtain();
	if (Reuters.utils.isLoggedIn() == true) {
		Reuters.tns.reloaddisabledLoginStatus();
		Reuters.utils.loaddisabledHeaderLinks();
		setTimeout(Reuters.utils.doCommerceSurveyCheck,2000);
	}
}

Reuters.utils.tryStartRefresh = function() {
	if (typeof Reuters.refresh != "undefined") {
		Reuters.refresh.startRefresh();
	}
}
Reuters.utils.tryStopRefresh = function() {
	if (typeof Reuters.refresh != "undefined") {
		Reuters.refresh.stopRefresh();
	}
}

Reuters.utils.showOverlayCurtain = function(width, height, top) {
	if (document.getElementById("overlayMask")) {
		document.getElementById("overlayMask").className = '';
		document.getElementById("overlayContents").className = '';
	} else {
		var curtain = document.createElement("div");
		curtain.id = "overlayMask";
		if(document.getElementById("header3P")){
			document.body.insertBefore(curtain, document.getElementById("header3P"));
		}else if(document.getElementById("header")){
			document.body.insertBefore(curtain, document.getElementById("header"));
		}

		var curtainContainer = document.createElement("div");
		curtainContainer.id = "overlayContents";
		document.body.insertBefore(curtainContainer, document.getElementById("overlayMask"));
	}
	top += Reuters.utils.getScrollXY().y;
	var headerOffsetHeight = 0;
	if (document.getElementById("header3P")){
		headerOffsetHeight = document.getElementById("header3P").offsetHeight;
	}else if (document.getElementById("header")){
		headerOffsetHeight = document.getElementById("header").offsetHeight;
	}
	var documentHeight = headerOffsetHeight + document.getElementById("content").offsetHeight + 25;
	document.getElementById("overlayMask").style.cssText = "height: " + documentHeight + "px;";
	document.getElementById("overlayContents").style.cssText = "top: " + top + "px; width: " + width + "px; height: " + height + "px; left: " + Math.round((document.getElementById("content").offsetWidth - width)/2) + "px;";
	Reuters.utils.tryStopRefresh();
	return document.getElementById("overlayContents");
}

Reuters.utils.hideOverlayCurtain = function() {
	if (document.getElementById("overlayMask")) {
		document.getElementById("overlayMask").className = "hidden";
		document.getElementById("overlayMask").style.cssText = '';
		document.getElementById("overlayContents").className = 'hidden';
		document.getElementById("overlayContents").style.cssText = '';
		Reuters.utils.tryStartRefresh();
	}
}

Reuters.utils.getInnerXY = function() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  return { width: myWidth, height: myHeight };
}

Reuters.utils.getScrollXY = function() {
  var scrOfX = 0, scrOfY = 0;
  if( typeof( window.pageYOffset ) == 'number' ) {
    //Netscape compliant
    scrOfY = window.pageYOffset;
    scrOfX = window.pageXOffset;
  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
    scrOfX = document.body.scrollLeft;
  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
    scrOfX = document.documentElement.scrollLeft;
  }
  return { x: scrOfX, y: scrOfY };
}

Reuters.utils.getIframeObj = function(sIframeId) {
	//returns browser independent reference to an iframe document object
	try {
		if (document.frames) {
			return document.frames(sIframeId).document;
		}
		else {
			return document.getElementById(sIframeId).contentDocument;
		}
	} catch (err) {return null;}
}

Reuters.utils.printStackTrace = function() {
  var callstack = [];
  var isCallstackPopulated = false;
  try {
    i.dont.exist+=0; //doesn't exist- that's the point
  } catch(e) {
    if (e.stack) { //Firefox
      var lines = e.stack.split("\n");
      for (var i=0, len=lines.length; i<len; i++) {
        if (lines[i].match(/^\s*[A-Za-z0-9\-_\$]+\(/)) {
          callstack.push(lines[i]);
        }
      }
      //Remove call to printStackTrace()
      callstack.shift();
      isCallstackPopulated = true;
    }
    else if (window.opera && e.message) { //Opera
      var lines = e.message.split("\n");
      for (var i=0, len=lines.length; i<len; i++) {
        if (lines[i].match(/^\s*[A-Za-z0-9\-_\$]+\(/)) {
          var entry = lines[i];
          //Append next line also since it has the file info
          if (lines[i+1]) {
            entry += " at " + lines[i+1];
            i++;
          }
          callstack.push(entry);
        }
      }
      //Remove call to printStackTrace()
      callstack.shift();
      isCallstackPopulated = true;
    }
  }
  if (!isCallstackPopulated) { //IE and Safari
    var currentFunction = arguments.callee.caller;
    while (currentFunction) {
      var fn = currentFunction.toString();
      var fname = fn.substring(fn.indexOf("function") + 8, fn.indexOf("(")) || "anonymous";
      callstack.push(fname);
      currentFunction = currentFunction.caller;
    }
  }
  try { console.debug("stacktrace: %o", callstack.join('nn')); } catch (e) { }
}

Reuters.utils.submitSearch = function() {
	var searchText = document.getElementById('searchfield');
	var searchTextValue = searchText.value;
	if (searchTextValue == '' || searchTextValue == 'Search News & Quotes') {
		return false;
	}
	else {
		return true;
	}
}

Reuters.utils.submitSearchNews = function() {
	var searchTextNews = document.getElementById('newsSearchField');
	var searchTextValueNews = searchTextNews.value;
	if (searchTextValueNews  == '' || searchTextValueNews == 'Keyword') {
		return false;
	}
	else {
		return true;
	}
}

Reuters.utils.submitSearchStocks = function() {
	var searchTextStock = document.getElementById('stockSearchField');
	var searchTextValueStock = searchTextStock.value;
	if (searchTextValueStock  == '' || searchTextValueStock == 'Symbol') {
		return false;
	}
	else {
		return true;
	}
}

Reuters.utils.submitSearchMedia = function() {
	var searchTextMedia = document.getElementById('multimediaSearchfield');
	var searchTextValueMedia = searchTextMedia.value;
	if (searchTextValueMedia  == '' || searchTextValueMedia == 'Search Multimedia') {
		return false;
	}
	else {
		return true;
	}
}
Reuters.utils.handleCommerceSurveyCheckResult = function(commerceSurveyCheckResult){
	try{
	if ((commerceSurveyCheckResult!== undefined) && (commerceSurveyCheckResult.checkResult !== undefined) && commerceSurveyCheckResult.checkResult.indexOf("NEED_SURVEY")>-1){
        var surveyUrl = commerceSurveyCheckResult.surveyUrl;
            if ((surveyUrl!== undefined) && (surveyUrl != '')){
                    sucessAssetsUrl = location.protocol + "//" + location.host + "/assets/loyaltysurveysuccess";
                    failedAssetsUrl = location.protocol + "//" + location.host + "/assets/loyaltysurveyfailed";
cancelAssetsUrl = location.protocol + "//" + location.host + "/assets/loyaltysurveycancel";
                surveyUrl = surveyUrl+'&success=' + encodeURIComponent(sucessAssetsUrl) + '&failed=' + encodeURIComponent(failedAssetsUrl) + '&cancel=' + encodeURIComponent(cancelAssetsUrl);
                var overlayBox = Reuters.utils.showOverlayCurtain(500, 510, 100);
                    overlayBox.innerHTML = '<div class="closer" onclick="Reuters.utils.closeLogin()"></div><iframe id="loginFrame" src="' + surveyUrl + '" width="490" height="500" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe>';
            }
    }
	}catch(e){
		YAHOO.util.Cookie.remove('commerceLastSurvey');
		trace("handle commerce survey check result error:"+e);
	}
}
Reuters.utils.doCommerceSurveyCheck = function(){
if (Reuters.utils.isLoggedIn() == true){
        if (typeof(YAHOO) != "undefined") {
          var commerceLastSurvey = YAHOO.util.Cookie.get("commerceLastSurvey");
          if (commerceLastSurvey != null){
                return;
          }
        }
        // do ajax call to commerce survey check
        if ((Reuters.info === null) || (typeof Reuters.info === 'undefined')) {
                var thisEdition = "us";
        } else {
                var thisEdition = (Reuters.info.edition.search(/betaus/i) == -1 ? Reuters.info.edition.toLowerCase() : "us");
        }
        try{
                var commerceSurveyCheckUrl = 'https://commerce.'+thisEdition+'.reuters.com/services/surveycheck?key='+encodeURIComponent(YAHOO.util.Cookie.get("customerId"))+'&callback=Reuters.utils.handleCommerceSurveyCheckResult';
                Reuters.utils.loaddisabledScript("commerceSurveyModal", commerceSurveyCheckUrl);
        }catch(e){trace("commerce survey check error:"+e)}
}
}

if (_tr_commerce_loyalty_survey_checking_flag == null || _tr_commerce_loyalty_survey_checking_flag == 'undefined'){
	var _tr_commerce_loyalty_survey_checking_flag = false;
}
if (location.pathname.indexOf('/assets/') != 0 && _tr_commerce_loyalty_survey_checking_flag != true) {
		Reuters.utils.addLoadEvent(Reuters.utils.doCommerceSurveyCheck);
		_tr_commerce_loyalty_survey_checking_flag = true;
}


