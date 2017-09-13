// geo-IP redirector 
//    - GEO-IP functionality handled by DART
//    - this object maintains state and does the redirect
function geoRedirector(id, days, hours, minutes, duration) {
    this.id = id;
    this.intDays = days;
    this.intHours = hours;
    this.intMinutes = minutes;
    this.duration = duration;
    this.intMStoExpire = (days * 86400000) + (hours * 3600000) + (minutes * 60000);
    this.cookieName = 'geoRedirector';
    this.cookieNameTmpDisable = 'geoRedirectorIgnore';
    var d = new Date();
    d.setTime(d.getTime()+(30*24*60*60*1000));
    this.cookieExpires = d;
    this.cookieExpiresTmpDisable = 0;
    this.cookieValCountDelim = '~';
    this.intCurrentTime = new Date().getTime();
    this.messagingHandler = null;
    this.timer = null;
    this.enabled = this.isEnabled();
    if(this.enabled) {
    	this.attachDisablerToMenu();
    }
    var state = this.readState();
    this.lastRun = state.lastRun;
    this.runCount = state.runCount;
	this.ignoreEdition;
}
// ensure user is on correct domain
// called by dart like:
//ensureDomain("uk.reuters.com", false, 'uk');
//ensureDomain("www.reuters.com", false, 'in');

geoRedirector.prototype.ensureDomain = function(correctDomain, trackingOnly, ipLocation) {
    var tmpDisable =  YAHOO.util.Cookie.get(this.cookieNameTmpDisable);
    if ( tmpDisable != null ) {
        return;
    }
    var loca = window.location;
    var needRedirect = loca.hostname.indexOf(correctDomain) < 0;
    
    if ( this.isValidDomain(loca.hostname) && this.enabled && needRedirect ) {
    	var correctDomainParts=correctDomain.split('.');
    	var hostnameParts=loca.hostname.split('.');
    	if(correctDomainParts.length != hostnameParts.length) {
    		//there must be a prefix
    		var prefix=hostnameParts[0];
    		correctDomain=prefix+'.'+correctDomain;
    	}
    	
        var newUrl = loca.protocol + '//' + correctDomain;
        newUrl += (loca.port != null && loca.port != 80) ? ':'+loca.port : '';
        newUrl += loca.pathname + loca.search;
        newUrl += (loca.hash != null) ? loca.hash : '';
        if ( trackingOnly != null && trackingOnly == true ) {
            YAHOO.util.Cookie.setSub(this.cookieName, 'origurl', loca.href, {domain: '.reuters.com', expires: this.cookieExpires, path: '/' });
            YAHOO.util.Cookie.setSub(this.cookieName, 'enabled', 'tracked', {domain: '.reuters.com', expires: this.cookieExpires, path: '/' });
        } else {
            YAHOO.util.Cookie.setSub(this.cookieName, 'origurl', loca.href, {domain: '.reuters.com', expires: this.cookieExpires, path: '/' });
            YAHOO.util.Cookie.setSub(this.cookieName, 'enabled', 'true', {domain: '.reuters.com', expires: this.cookieExpires, path: '/' });
            window.location.href = newUrl;
        }
    }
}
//wrap original window.onloaddisabled if exists
function wrapDelegate(originalDelegate, newDelegate) {
    return function() {
        if (originalDelegate)
        	originalDelegate();
        if (newDelegate)
        	newDelegate();
    }
}
//attach onlick disabler to manual edition switch
geoRedirector.prototype.attachDisablerToMenu = function() {
	window.onloaddisabled = wrapDelegate(window.onloaddisabled, function() {
		var divs = YAHOO.util.Dom.getElementsByClassName("editionListContainer");
		for(i=0; i< divs.length; i++) {
			divs[i].onclick = function() {
				if(typeof(GEO_REDIRECTOR) == 'undefined') {
					GEO_REDIRECTOR = new geoRedirector('geo');
				}
				GEO_REDIRECTOR.disableRedirect();
				return true;
			};
		}
	});
}
// IP addresses are not considered valid
geoRedirector.prototype.isValidDomain = function(hostname) {
    return (hostname.indexOf('.com') > -1);
}
// disable redirects for this user
geoRedirector.prototype.disableRedirect = function() {
    this.enabled = false;
    YAHOO.util.Cookie.setSub(this.cookieName, 'enabled', 'false', { domain: '.reuters.com', expires: this.cookieExpires, path: '/' });
}
// temp disable of redirect - used when user navigates to another edition via ed selector
geoRedirector.prototype.temporarilyDisableRedirect = function() {
    YAHOO.util.Cookie.set(this.cookieNameTmpDisable, 'enabled', { domain: '.reuters.com', expires: this.cookieExpiresTmpDisable, path: '/' });
}
// read the enabled state
geoRedirector.prototype.isEnabled = function() {
    var cook = YAHOO.util.Cookie.getSub(this.cookieName, 'enabled');
    return (cook != null && cook == 'false') ? false : true;
}
// get the originally requested url
geoRedirector.prototype.getOriginalUrl = function() {
    return YAHOO.util.Cookie.getSub(this.cookieName, 'origurl');
}
// save state into the cookie
geoRedirector.prototype.saveState = function(time, count) {
    YAHOO.util.Cookie.setSub(this.cookieName, 'lastrun', time + this.cookieValCountDelim + count, { domain: '.reuters.com', expires: this.cookieExpires, path: '/' });
}
// read state of runcount/lastrun
geoRedirector.prototype.readState = function() {
  var last = null;
  var runcnt = 0;
  var cookval = YAHOO.util.Cookie.getSub(this.cookieName, 'lastrun');
  if (cookval != null) {
    var vals = cookval.split(this.cookieValCountDelim);
    if ( vals != null && vals.length > 0 ) {
      last = vals[0];
      if ( vals.length > 1 ) {
        runcnt = parseInt(vals[1], 10);
      }
    }
  }
  return { lastRun: last, runCount: runcnt };
}
// is the redirected messaging needed ?
geoRedirector.prototype.isMessageNeeded = function() {
  if (this.enabled && this.getOriginalUrl() != null) {
      if (null != this.lastRun) {
          if ( (this.intCurrentTime - this.lastRun) > this.intMStoExpire ) {
              return true;
          } else if (this.runCount < this.maxReruns) {
              return true;
          }
      } else {
          return true;
      }
  }
  return false;
}
// create the message HTML
geoRedirector.prototype.drawPushdown = function () {
	var geoIPedition = 'UK';
        if (Reuters && Reuters.info && Reuters.info.edition) {
          geoIPedition = Reuters.info.edition.replace("BETA","");
        }
	
	var geoDiv = document.createElement('div');
	geoDiv.setAttribute('id', 'geoDiv');
	
	var colLeft = document.createElement('div');
	YAHOO.util.Dom.addClass(colLeft, 'columnLeft'); 
	
	var geoPContent = document.createElement('p');
	YAHOO.util.Dom.addClass(geoPContent, 'message'); 
	geoPContent.innerHTML = "You\'re now viewing the " + geoIPedition + " edition. ";
	
	var geoCloseLink = document.createElement('a'); 
	geoCloseLink.innerHTML = "No thanks.";
	var realMe = this;
	YAHOO.util.Event.addListener(geoCloseLink, "click", function() {
        	clearTimeout(realMe.timer);
		realMe.hidePushdown();
        	realMe.disableRedirect();
        	window.location.href = realMe.getOriginalUrl();
	});	
	
	var colRight = document.createElement('div');
	YAHOO.util.Dom.addClass(colRight, 'columnRight'); 
	
	var geoPClose = document.createElement('p');
	YAHOO.util.Dom.addClass(geoPClose, 'close'); 
	
	var geoPCloseLink2 = document.createElement('a');
	geoPCloseLink2.innerHTML = "Close";
	YAHOO.util.Event.addListener(geoPCloseLink2, "click", this.hidePushdown);	
	
	geoPClose.appendChild(geoPCloseLink2);
	geoPContent.appendChild(geoCloseLink);
	colLeft.appendChild(geoPContent);
	colRight.appendChild(geoPClose);
	geoDiv.appendChild(colLeft);
	geoDiv.appendChild(colRight);	
	
	document.body.insertBefore(geoDiv,document.getElementById("header"));

	this.showPushdown();
}
// animate the message in
geoRedirector.prototype.showPushdown = function() {
	voidPushdown = new YAHOO.util.Anim('geoDiv', {'margin-top': {to: 0, unit: 'px'} }, 1, YAHOO.util.Easing.easeOut);
voidPushdown.animate();
        this.timer = window.setTimeout(this.hidePushdown, this.duration);
}
// animate the message out
geoRedirector.prototype.hidePushdown = function() {
	var closePushdown = new YAHOO.util.Anim('geoDiv', {'margin-top': {to: -50, unit: 'px'} }, 1, YAHOO.util.Easing.easeOut);
	closePushdown.animate();
}
// check if we need to display message
geoRedirector.prototype.checkGeoIP = function() {
	if ( this.isMessageNeeded() ) {
		var newCount = this.runCount+1;
		if (this.maxReruns > 1 && newCount > this.maxReruns ) {
			newCount = 0;
		}
		this.saveState(this.intCurrentTime, newCount);
		this.drawPushdown();
	}
}

// add a click event to an edition in the dropdown in header and footer
geoRedirector.prototype.disableEdition = function(ed) {
	this.ignoreEdition = ed;
	var editionContainer = document.getElementById("submenu_editions");
	var elements = YAHOO.util.Dom.getElementsByClassName('editionListContainer', 'div', editionContainer);
	for(i=0; i<elements.length; i++) {
		var editionAbbr = YAHOO.util.Dom.getElementsByClassName('editionAbbr', 'div', elements[i])[0].innerHTML;	
		if (editionAbbr == ed){
			YAHOO.util.Event.addListener(elements[i], "mousedown", this.temporarilyDisableRedirect, this, true);
		}
	}
	if(document.getElementById("editionChangeForm")){
		YAHOO.util.Event.addListener("editionChangeForm", "change", this.disableEditionFooter, this);
	}
}

geoRedirector.prototype.disableEditionFooter = function(e, obj) {
	var chosenoption = this.options[this.selectedIndex]; 
	if(chosenoption.id == obj.ignoreEdition) obj.temporarilyDisableRedirect();
}
