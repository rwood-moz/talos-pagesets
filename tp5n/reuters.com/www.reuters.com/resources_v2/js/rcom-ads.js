_adCurrentTime = new Date();
var tmstmp = '' + _adCurrentTime.getYear() + _adCurrentTime.getMonth() + _adCurrentTime.getDate() + _adCurrentTime.getUTCHours() + _adCurrentTime.getUTCMinutes() + _adCurrentTime.getUTCSeconds() + _adCurrentTime.getUTCMilliseconds();

/***********************************************************
 *    base class for showing ads based on frequency 
 *      cookies used for tracking/persistence
 ***********************************************************/
function adDisplayManager (id, adType, duration, days, hours, minutes, redirectUrl) {
    if ( arguments.length > 0 ) {
        this.init(id, adType, duration, days, hours, minutes, redirectUrl);
    }
}
// init method - really the "contructor"
adDisplayManager.prototype.init = function (id, adType, duration, days, hours, minutes, redirectUrl) {
    // important behavioral properties
    this.id = id;
    this.adType = adType;
    this.duration = duration;
    this.intDays = days;
    this.intHours = hours;
    this.intMinutes = minutes;
    this.intMStoExpire = (days * 86400000) + (hours * 3600000) + (minutes * 60000);
    if(redirectUrl){
    	this.redirectUrl=redirectUrl;
    }
    this.maxReruns = 1;
    this.disabled = false;
    // timer housekeeping
    this.intCurrentTime = new Date().getTime();
    this.timer = null;
    // cookie props/constants
    this.cookieName = 'adDisplayManager';
    this.cookieKey = this.id + "";
    this.cookieDelim = '&';
    this.cookieValDelim = '=';
    this.cookieValCountDelim = '~';
    // cookie expires in 30 days
    var d = new Date();
    d.setTime(d.getTime()+(30*24*60*60*1000));
    this.cookieExpires = d;
    // ad types and div ids to suppress
    this.adTypesToSuppress = null;
    this.divIdsToHide = null;
    this.handlers = null;
    // default (non-freq capped) ad types and div ids to suppress
    this.defaultAdTypesToSuppress = null;
    this.defaultDivIdsToHide = null;
    this.defaultHandlers = null;
    // read state from cookie
    var state = this.readState();
    this.lastRun = state.lastRun;
    this.runCount = state.runCount;
}
// set suppressed ads/elements 
adDisplayManager.prototype.setItemsToSuppress = function(adTypes, divIds) {
    if ( adTypes != null && adTypes.length > 0 ) {
        this.adTypesToSuppress = adTypes;
    }
    if ( divIds != null && divIds.length > 0 ) {
        this.divIdsToHide = divIds;
    }
}
// set default (non-freq capped) suppressed ads/elements 
adDisplayManager.prototype.setDefaultItemsToSuppress = function(adTypes, divIds) {
    if ( adTypes != null && adTypes.length > 0 ) {
        this.defaultAdTypesToSuppress = adTypes;
    }
    if ( divIds != null && divIds.length > 0 ) {
        this.defaultDivIdsToHide = divIds;
    }
}
// set a display handler object
adDisplayManager.prototype.setHandler = function(handler) {
    if ( handler != null ) {
      if ( this.handlers == null ) {
          this.handlers = new Array();
      }
      this.handlers[this.handlers.length] = handler;
    }
}
// set a default (non-freq capped) display handler object
adDisplayManager.prototype.setDefaultHandler = function(handler) {
    if ( handler != null ) {
      if ( this.defaultHandlers == null ) {
          this.defaultHandlers = new Array();
      }
      this.defaultHandlers[this.defaultHandlers.length] = handler;
    }
}
// set global "adsrc" type (appended to all adsrc vars)
adDisplayManager.prototype.setGlobalAdSrcType = function(globAdSrc) {
  if (this.isAdNeeded()) {
    AD_TRACKER.globalAdSrcType = globAdSrc;
  }
}
// set  default (non-freq capped) global "adsrc" type
adDisplayManager.prototype.setDefaultGlobalAdSrcType = function(globAdSrc) {
  if (!this.isAdNeeded()) {
    AD_TRACKER.globalAdSrcType = globAdSrc;
  }
}
// run the ad logic
adDisplayManager.prototype.run = function() {
    if (this.isAdNeeded()) {
	// reset count to prevent windup
	var newCount = this.runCount+1;
        if ( this.maxReruns > 1 && newCount > this.maxReruns ) {
	    newCount = 0;
        }
        this.saveState(this.intCurrentTime, newCount);
	this.start();
    } else {
        // never to sure about this logic but it was there
        if(this.duration!=null && this.duration != '' && this.duration != -1) {
            this.finish();
        }
        // start the default or "rest of the time" mode
	this.startDefault();
    }
}
// determine whether or not to show ad
adDisplayManager.prototype.isAdNeeded = function() {
  if (!this.disabled) {
    if (typeof (hideAllAds) == 'undefined' || hideAllAds == false) {
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
  }
  return false;
}

adDisplayManager.prototype.isDefaultAdNeeded = function() {
  if (!this.disabled) {
    if (typeof (hideAllAds) == 'undefined' || hideAllAds == false) {
      return (!this.isAdNeeded() && Reuters.lang.isNotEmpty(AD_TRACKER.globalAdSrcType)) ;
    }
  }
  return false;
}
// save the ad state into the cookie
adDisplayManager.prototype.saveState = function(time, count) {
  if (!this.disabled) {
    this.setCookieValue(time + this.cookieValCountDelim + count);
  }
}
// save the ad state into the cookie
adDisplayManager.prototype.readState = function() {
  var last = null;
  var runcnt = 0;
  var cookval = this.readCookieValue();
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
// "start" or "show" the ad
//    - start is semantically associated with duration
//    - think of this method as "show" when no duration is specified)
adDisplayManager.prototype.start = function() {
    if(this.duration != null && this.duration != '' && this.duration != -1) {
        this.timer = window.setTimeout(this.id+'.finish()', this.duration);
    }
    // suppress ads that "conflict" with this managed ad
    if ( this.adTypesToSuppress != null ) {
        var adTypes = this.adTypesToSuppress.split(',');
        for ( var i=0; i<adTypes.length; i++ ) {
            AD_TRACKER.addToHidden(adTypes[i]);
        }
    }
    // suppress dom elems that "conflict" with this managed ad
    if ( this.divIdsToHide != null ) {
        var divIds = this.divIdsToHide.split(',');
        for ( var i=0; i<divIds.length; i++ ) {
            void('<style type=\"text/css\">div#' + divIds[i] + ' { display: none; }</style>');
        }
    }
    // run display handlers
    if ( this.handlers != null ) {
        for ( var i=0; i<this.handlers.length; i++ ) {
            if ( !this.handlers[i].makeRoom.call(this.handlers[i]) ) {
                AD_TRACKER.addDeferredHandler(this.handlers[i]);
            }
        }
    }
}
// "finish" or "hide" the ad
adDisplayManager.prototype.finish = function() {
    // if redirecting, do it
    if(this.redirectUrl){
    	window.location = this.redirectUrl;
    	return;
    }
    // hide self and clean up timer
    if ( document.getElementById(this.id) != null ) {
        document.getElementById(this.id).style.display = 'none';
    }
    if (this.timer) {
        window.clearTimeout(this.timer);
    }
    // ad is finished, show the hidden elems
    if ( this.divIdsToHide != null ) {
        var divIds = this.divIdsToHide.split(',');
        for ( var i=0; i<divIds.length; i++ ) {
	    if (document.getElementById(divIds[i]) != null) 
	        document.getElementById(divIds[i]).style.display = 'block';
        }
    }
    // ad is finished, revert the handlers
    if ( this.handlers != null ) {
        for ( var i=0; i<this.handlers.length; i++ ) {
            this.handlers[i].revert.call(this.handlers[i]);
        }
    }
}
// start/show the ad in "default" or "rest of the time" mode WRT frequency capped operation
adDisplayManager.prototype.startDefault = function() {
    if ( document.getElementById(this.id) != null && document.getElementById(this.id) != 'undefined' ) {
        document.getElementById(this.id).style.display = 'block';
    }
    // suppress ads that "conflict" with this managed ad
    if ( this.defaultAdTypesToSuppress != null ) {
        var adTypes = this.defaultAdTypesToSuppress.split(',');
        for ( var i=0; i<adTypes.length; i++ ) {
            AD_TRACKER.addToHidden(adTypes[i]);
        }
    }
    // suppress dom elems that "conflict" with this managed ad
    if ( this.defaultDivIdsToHide != null ) {
        var divIds = this.defaultDivIdsToHide.split(',');
        for ( var i=0; i<divIds.length; i++ ) {
            void('<style type=\"text/css\">div#' + divIds[i] + ' { display: none; }</style>');
        }
    }
    // run display handlers
    if ( this.defaultHandlers != null ) {
        for ( var i=0; i<this.defaultHandlers.length; i++ ) {
            if ( !this.defaultHandlers[i].makeRoom.call(this.defaultHandlers[i]) ) {
            	this.defaultHandlers[i].manager = this;
                AD_TRACKER.addDeferredHandler(this.defaultHandlers[i]);
            }
        }
    }
}
// set a value in the cookie
adDisplayManager.prototype.setCookieValue = function(newValue) {
    YAHOO.util.Cookie.setSub(this.cookieName, this.cookieKey, newValue, { expires: this.cookieExpires, path: '/' });
}
// read a value from the cookie
adDisplayManager.prototype.readCookieValue = function() {
  return YAHOO.util.Cookie.getSub(this.cookieName, this.cookieKey);
}


/***********************************************************
 * adDisplayManager that redirects instead of saving state
 ***********************************************************/
function adDisplayRedirector () { 
  adDisplayManager.prototype.init.apply(this, arguments);
}
adDisplayRedirector.prototype = new adDisplayManager();
adDisplayRedirector.superclass = adDisplayManager.prototype;
adDisplayRedirector.prototype.run = function() {
  if (this.isAdNeeded() && this.redirectUrl) {
  	window.location = this.redirectUrl;
    return;
  } else {
    adDisplayRedirector.superclass.run.call(this);
  }
}


/***********************************************************
 *    singleton/global ad tracking class - instance name 
 *    is AD_TRACKER - keeps global list of hidden adtypes 
 *    and ad display handlers
 ***********************************************************/
function adDisplayTracker () {
    this.hiddenAds = null;
    this.handlers = null;
    this.timer = null;
    this.interval = 250;
    this.maxRunCount = 40;
    this.globalAdSrcType = null;
    this.domLoadedForIE = false;
}
// static method to keep track of ads to hide
adDisplayTracker.prototype.addToHidden = function(adType) {
    if ( this.hiddenAds == null ) {
        this.hiddenAds = new Array();
    }
    this.hiddenAds[this.hiddenAds.length] = adType;
}
// static method to keep track of ads to hide
adDisplayTracker.prototype.isAdHidden = function(adType) {
    if ( this.hiddenAds != null ) {
        for( var i=0; i<this.hiddenAds.length; i++ ) {
            if ( this.hiddenAds[i] == adType ) {
                return true;
                break;
            }
        }
    }
    return false;
}
// add a handler to be run later
adDisplayTracker.prototype.addDeferredHandler = function(hand) {
    this.ensureSetup();
    this.handlers[this.handlers.length] = hand;
}
// ensure timers/arrays are initialized
adDisplayTracker.prototype.ensureSetup = function() {
    if ( this.timer == null ) {
        this.timer = setTimeout('AD_TRACKER.processHandlers()', this.interval);
    }
    if ( this.handlers == null ) {
        this.handlers = new Array();
    }
}
// set dom loaddisableded flag for IE that complete POS
adDisplayTracker.prototype.setDomLoaded = function() {
    this.domLoadedForIE = true;
}
// process all of our handlers, keep track of those that didn't complete for next run
adDisplayTracker.prototype.processHandlers = function() {
    if ( this.handlers == null || this.handlers.length == 0 ) {
        this.timer = null;
    } else {
        var newHandlers = new Array();
        for( var i=0; i<this.handlers.length; i++ ) {
            if ( !this.handlers[i].makeRoom.call(this.handlers[i]) && this.handlers[i].handlerRunCount < this.maxRunCount) {
                newHandlers[newHandlers.length] = this.handlers[i];
            }
        }
        if ( newHandlers.length > 0 ) {
            this.handlers = newHandlers;
            this.timer = setTimeout('AD_TRACKER.processHandlers()', this.interval);
        } else {
            this.timer = null;
            this.handlers = null;
        }
    }
}
adDisplayTracker.prototype.changeIframe = function(frameId, height, width, src) {
    var frm = document.getElementById(frameId);
    if ( frm != null ) {
        frm.style.width = width + 'px';
        frm.style.height = height + 'px';
        if ( src != null ) {
            if ( frm.getAttribute('src') != src) {
                frm.setAttribute('src', src);
            }
        }
    }
}
adDisplayTracker.prototype.processAdSrcType = function(adsrc) {
    var ret = adsrc;
    if (  Reuters.lang.isNotEmpty(this.globalAdSrcType) ) {
        if ( adsrc.indexOf('vbc=') > -1 ) {
            // remove vbc keyvalue
            var pos = adsrc.indexOf('vbc=');
            ret = adsrc.substring(0,pos) + adsrc.substring(adsrc.indexOf(';',pos));
        }
        ret = ret.replace('?', this.globalAdSrcType + '?');
    }
    return ret;
}
var AD_TRACKER = new adDisplayTracker();


/*****************************************************************************
 *    ad display handler abstract class
 *      display handlers encapsulate more complicated dom 
 *      manipulation (ie: more than hiding elems or suppressing ads by type
 *****************************************************************************/
function adDisplayHandler () {
    this.handlerRunCount = 0;
}
// make room for the ad
adDisplayHandler.prototype.makeRoom = function() {
    var res = this.makeRoomUI();
    this.handlerRunCount++;
    return res;
}
// revert the "make room" operation
adDisplayHandler.prototype.revert = function() {}
// utility to move a dom element from one place to another
adDisplayHandler.prototype.moveElement = function(srcElemId, destElemId) {
    var srcElem = document.getElementById(srcElemId);
    srcElem.parentNode.removeChild(srcElem);
    document.getElementById(destElemId).appendChild(srcElem);
}


/***********************************************************
 *   positions ads in the vertical span by applying
 *   a cieling and a floor - a schwinn ming joint
 ***********************************************************/
function adPositioner (id, interval, container, useAnimation, height,voidStyles) {
    if ( arguments.length > 0 ) {
        this.init(id, interval, container, useAnimation, height,voidStyles);
    }
}
// init method - really the "contructor"
adPositioner.prototype.init = function(id, interval, container, useAnimation, height,voidStyles) {
    this.moving = false;
    this.id = id;
    this.container = container;
    this.useAnimation = useAnimation;
    this.height = height;
    if (voidStyles == null ||voidStyles ) { 
        voidStyles()
    }
    POSITION_TRACKER.registerPositioner(this, interval);
}
// calc current ad position and move it
adPositioner.prototype.moveIt = function () {
    if ( !this.moving  ) {
        this.moving = true;
        try {
          var scrollPos = this.getScrollPos();
          var height = this.getHeight();
          var floor = this.getFloor();
          var ceiling = this.getCeiling();
          if (scrollPos < ceiling) {
              this.moveTo(0);
          } else if ( scrollPos > (floor - height) ) {
              this.moveTo(floor - height - ceiling);
          } else if ((scrollPos >= ceiling) && (scrollPos <= (floor - height))) {
              this.moveTo(scrollPos - ceiling);
          }
        } catch(ex) {
        }
        this.moving = false;
    }
}
// move the ad to a new position
adPositioner.prototype.moveTo = function (where, duration) {
    if ( duration == null ) duration = 1;
    if ( this.useAnimation ) {
        try { this.adScroller.stop(); } catch(e) {};
        this.adScroller = new YAHOO.util.Anim(this.id, { top: { to: where }  }, duration, YAHOO.util.Easing.easeOut);
        this.adScroller.animate();
    } else {
        document.getElementById(this.id).style.top = where + 'px';
    }
}
// calc the current ceiling position
adPositioner.prototype.getCeiling = function () {
    return document.getElementById(this.container).offsetTop;
}
// calc the current floor position
adPositioner.prototype.getFloor = function () {
    return (document.getElementById(this.container).offsetTop + document.getElementById(this.container).offsetHeight);
}
// calc the current ad height
adPositioner.prototype.getHeight = function () {
    if ( parseInt(this.height) ) {
        return this.height;
    } else {
        return document.getElementById(this.id).offsetHeight;
    }
}
// calc the current scroll position
adPositioner.prototype.getScrollPos = function () {
    var scrollY = 0;
    if (typeof(window.pageYOffset) == "number") {
        scrollY = window.pageYOffset;
    } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        scrollY = document.body.scrollTop;
    } else if (document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop )) {
        scrollY = document.documentElement.scrollTop;
    }
    return scrollY;
}
//void out supplementary styles
adPositioner.voidStyles = function () {
    var html = '<style type=\"text/css\">';
    html += '#' + this.container + ' { float: left; position: relative; }';
    var height = parseInt(this.height) ? ('height: ' + this.height + 'px; ') : '';
    html += '#' + this.container + ' #' + this.id + ' { float: left; position: relative; ' + height + '}';
    html += '</style>';
    void(html);
}

/***********************************************************
 *    singleton/global ad positioning class - instance name 
 *    is POSITION_TRACKER - tracks positioned ads
 ***********************************************************/
function adPositionTracker () {
    this.positioners = null;
    this.sheduled = false;
}
// schedule the move function
adPositionTracker.prototype.shedule = function(interval) {
    this.sheduled = true;
    window.setInterval('POSITION_TRACKER.moveIt()', interval);
}
// register ad positioners - first call sets global interval, supports multiple positioners
adPositionTracker.prototype.registerPositioner = function(positioner, interval) {
    if ( this.positioners == null ) {
        this.positioners = new Array();
    }
    this.positioners[this.positioners.length] = positioner;
    if ( !this.sheduled ) {
        window.setTimeout('POSITION_TRACKER.shedule(' + interval + ')', interval);
    }
}
// static method to keep track of ads to hide
adPositionTracker.prototype.moveIt = function() {
    if ( this.positioners == null || this.positioners.length == 0 ) {
        return;
    } else {
        for( var i=0; i<this.positioners.length; i++ ) {
            this.positioners[i].moveIt();
        }
    }
}
var POSITION_TRACKER = new adPositionTracker();


/****** poeOPAFixedPositionHandler - adDisplayHandler implementation - does the positioning of the ad ******/
function poeOPAFixedPositionHandler () {}
poeOPAFixedPositionHandler.prototype = new adDisplayHandler();
poeOPAFixedPositionHandler.superclass = adDisplayHandler.prototype;
poeOPAFixedPositionHandler.prototype.makeRoom = function() {
    var theAd = new adPositioner('opaFixedPanel', 100, 'articleContent', true, 850, false );
    return true;
}

/****** poeOPAFixedRightRailHandler handler - makes room in the right rail and resizes maincontent and left rail ******/
function poeOPAFixedRightRailHandler () {}
poeOPAFixedRightRailHandler.prototype = new adDisplayHandler();
poeOPAFixedRightRailHandler.superclass = adDisplayHandler.prototype;
poeOPAFixedRightRailHandler.prototype.makeRoom = function() {
    var html = '<style type=\"text/css\">';
    html += ' .column1.gridPanel.grid4 #theWholeStory, .column1.gridPanel.grid4 #mostPopularTab, .column1.gridPanel.grid4 #mostSharedTab, .column1.gridPanel.grid4 #searchInterceptResults, #moreFromReuters, .column1.gridPanel.grid4 .tabs, .column1.gridPanel.grid4 .linebreak {display:none} ';
    html += '</style>';
    void(html);
    return true;
}

/****** poeOPAFixedRightRailHandler handler - makes room in the right rail and resizes maincontent and left rail ******/
function poeHPStyleFixHandler () {}
poeHPStyleFixHandler.prototype = new adDisplayHandler();
poeHPStyleFixHandler.superclass = adDisplayHandler.prototype;
poeHPStyleFixHandler.prototype.makeRoom = function() {
    var html = '<style type=\"text/css\">';
    html += ' .homepageMPU { padding:0px; border:0px; } ';
    html += '</style>';
    void(html);
    return true;
}


/***********************************************************
 *    'broker center' or 'market place' ad manager 
 *    provides for simple child ad management and display
 ***********************************************************/
function adMarketPlace (id, doubleclickDomain, dartDomain, dartZone) {
    if ( arguments.length > 0 ) {
      this.init(id, doubleclickDomain, dartDomain, dartZone);
    }
}
adMarketPlace.prototype.init = function (id, doubleclickDomain, dartDomain, dartZone) {
    this.id = id;
    this.doubleclickDomain = doubleclickDomain;
    this.dartDomain = dartDomain;
    this.dartZone = dartZone;
    this.children = new Array();
    this.buttonSuffix = 'button';
    this.expanderSuffix = 'expander';
    this.buttonExpandCssClass = 'expando';
    this.buttonCollapseCssClass = 'closeo';
    this.buttonOverCssClass = 'overo';
    this.currentOpenChild = null;
}
adMarketPlace.prototype.addChild = function (name) {
    this.children[this.children.length] = { name: name, created: false };
}
adMarketPlace.prototype.expandChild = function (name) {
    var elem = document.getElementById(name + this.expanderSuffix);
    if ( elem != null ) {
      this.ensureChild(elem, name);
      elem.style.display = 'block';
      this.currentOpenChild = name;
      this.swapCssClass(document.getElementById(name + this.buttonSuffix), this.buttonExpandCssClass, this.buttonCollapseCssClass); 
    }
}
adMarketPlace.prototype.closeChild = function (name) {
    var elem = document.getElementById(name + this.expanderSuffix);
    if ( elem != null ) {
      elem.style.display = 'none';
      this.currentOpenChild = null;
      this.swapCssClass(document.getElementById(name + this.buttonSuffix), this.buttonCollapseCssClass, this.buttonExpandCssClass); 
    }
}
adMarketPlace.prototype.ensureChild = function (elem, name) {
    for( var i=0; i<this.children.length;i++ ) {
      if ( (this.children[i].name == name) && !this.children[i].created ) {
        this.createChild(elem, name);
        this.children[i].created = true;
      }
    }
}
adMarketPlace.prototype.createChild = function (elem, name) {i
    var adType = ';type=' + name + 'expander;sz=1x1;';
    var adsrc = this.dartDomain + this.dartZone + adType + 'dcmt=application/x-javascript;ord=' + (typeof(tmstmp)!='undefined'?tmstmp:12345) + '?';
    var scr = document.createElement('script');
    scr.setAttribute('type', 'text/javascript');
    scr.setAttribute('src', 'http://' + this.doubleclickDomain + '/adx/' + adsrc);
    elem.appendChild(scr);
}
adMarketPlace.prototype.buttonClick = function (name) {
    if ( this.currentOpenChild == name ) {
      this.closeChild(name);
    } else { 
      if ( this.currentOpenChild != null ) {
        this.closeChild(this.currentOpenChild);
      }
      this.expandChild(name);
    }
}
adMarketPlace.prototype.buttonOver = function (name) {
    this.swapCssClass(document.getElementById(name + this.buttonSuffix), '', this.buttonOverCssClass); 
    if ( this.currentOpenChild != null && this.currentOpenChild != name ) {
      this.closeChild(this.currentOpenChild);
      this.expandChild(name);
    }
}
adMarketPlace.prototype.buttonOut = function (name) {
    this.swapCssClass(document.getElementById(name + this.buttonSuffix), this.buttonOverCssClass, ''); 
}
adMarketPlace.prototype.swapCssClass = function (elem, srcClass, destClass) {
    var retClass = '';
    var classAttrib = elem.className;
    if ( classAttrib != null && classAttrib.length>0 ) {
      if ( srcClass != null && srcClass.length>0 && classAttrib.indexOf(srcClass) > -1 ) {
        retClass = classAttrib.replace( srcClass, destClass );
      } else {
        retClass = classAttrib  + ' ' + destClass;
      }
    } else {
      retClass = destClass;
    }
    elem.className = retClass;
}

// AudienceScience code for setting seg
function getSeg() {
  var rsi_segs = [];
  var segs_beg = document.cookie.indexOf('rsi_segs=');
  if (segs_beg >= 0) {
    segs_beg = document.cookie.indexOf('=',segs_beg)+1;
    if (segs_beg > 0){
      var segs_end = document.cookie.indexOf(';',segs_beg);
      if (segs_end == -1) segs_end=document.cookie.length;
        rsi_segs=document.cookie.substring(segs_beg,segs_end).split('|');
      }
    }
  var segLen = 20
  var segQS = "", segArr = new Array()
  if (rsi_segs.length < segLen){
    segLen = rsi_segs.length
  }
  var segs = new Array();
  for (var i = 0; i < segLen; i++){
    segArr = rsi_segs[i].split("_")
    if (segArr.length > 1) {
      segs[i] = segArr[1];
      segQS += ("seg1" + "=" + segArr[1] + ";")
    }
  }
  return segQS;
}
var seg = getSeg();
