
/**
 * This class contains client-specific parameters and also provides access 
 * to the config info
 */
function FDCPClient()
{
	this.cpHost = "cleanprint.net";
	this.divid="2008";
	this.refid="2361";
	this.rt = "i";
	this.cpstatus = false;
	this.ptstatus = "y";
	this.printSpecId = 0;
	this.fdDebug = false;
	this.cpc = null;
	this.blkwidth=0;
	this.xpathLib = "";
	this.shost = "formatdynamics.com";
	this.hosted = "customer";
	this.blockThreshold = 500;
	
	// moved from the printtracker FormatDynamicsPT object
	this.pthosts = "formatdynamics.com,cleanprint.net";
  	this.autoRefreshCSS = "true";
  	this.autoRefreshTime = "30000";
	
	// templatetest var to pull templates from a directory
	this.templateTest = false;
	
	// 's' for standalone and 'c' for combined.  A standalone install turns off registration for
	// PrintTracker events
	this.insType = "c";

	this.escCom = function(st) {
		st = new st.constructor(st);
		st = st.replace(/:/g, "::");
		st = st.replace(/,/g, ":,");
		return st;
	}

	this.getSegment=function () { 
		var sg1 = "Other";var sg2 = "Other";var sg3 = "Other";var sg4 = "Other";try{sg1 = window.location.host;}catch(e){}return sg1 + "," + sg2 + "," + sg3 + "," + sg4;
	}

	this.getPFF = function() { 
		var pf_flag ="0";try{if(document.title.search(/printer\sfriendly/i) >= 0){pf_flag = "1";}}catch(e){}return pf_flag;
	}

	this.getVR = function() { 
		return {};
	}

	this.onPrint = function() { 
		
	}
	
	this.getBlockThreshold = function() {
		return this.getCfg('blockThreshold', this.blockThreshold);
	}

	this.getCfg=function(ckey, cdef) {
		if(this.cpc != null && typeof this.cpc[ckey] != 'undefined')
			return this.cpc[ckey];
		return cdef;
	}

	this.getTHost=function() {
		if(this.shost.length > 0 && document.location.protocol == "httpdisabledsdisabled:")
			return this.shost;
		else
			return this.cpHost;
	}
	this.getcpStat=function() { return this.getCfg('cpStatus', this.cpstatus); }
	this.getptStat=function() { return this.getCfg('ptStatus', this.ptstatus); }
	this.getDiv=function() { return this.getCfg('divisionId', this.divid); }
	this.getTmpl=function() { return this.getCfg('templateId', null); }
	this.getRfmt = function() { return this.getCfg('templateId', this.refid); }  
	this.getTPath = function() { return this.getCfg('tPath', null); }
	this.getLPath = function() { return this.getCfg('lPath', null); }
	this.getTO = function() { return this.getCfg('timeout', 10000); }
	this.getTemplateTest = function() { return this.getCfg('templateTest', this.templateTest); }
	this.getXpathLib = function() { return this.getCfg('xpathLib', this.xpathLib); }
	
	this.getAutoRefreshCSS = function() { return this.getCfg('autoRefreshCSS', this.autoRefreshCSS); }
	this.getAutoRefreshTime = function() { return this.getCfg('autoRefreshTime', this.autoRefreshTime); }
	this.getPtHosts = function() { return this.getCfg('pthosts', this.pthosts); }
	this.getFDDebug = function() { return this.getCfg('fdDebug', this.fdDebug); }
	
	this.getRType= function() {
		return this.rt;
	}
	
	this.getIframeUrls=function(){
		
	}
	
	this.onCpLoad = function(){
		
	}
	
	this.cpServletPath=document.location.protocol + "//" + this.getTHost() + "/cp/psj";
}
function FormatDynamicsPT(client) {
  this.clnt = client;
  this.pcol = document.location.protocol + "//";
  this.cstr = client.getTHost() + "/pt/t/";
  this.dtstr = (new Date()).getTime();
  this.div = "d="+this.clnt.getDiv();
  this.ua = "&a=" + escape(navigator.appName + " " + navigator.userAgent);
  this.seg = "&s="+escape(this.clnt.getSegment());
  this.ustr = "&u="+escape(window.location.href);
  this.pf = "&p="+this.clnt.getPFF();
  this.version = "&q=1.1";
  this.rtype = "&rt="+this.clnt.getRType();
  this.qstr = this.div+this.ua+this.seg+this.ustr+this.pf+this.version;
  this.turl = this.pcol + this.cstr + this.dtstr + '?' + this.qstr;
  this.pthosts = this.clnt.getPtHosts();
  this.autoRefreshCSS = this.clnt.getAutoRefreshCSS();
  this.autoRefreshTime = this.clnt.getAutoRefreshTime();
  
  this.isPtCss=function(content) {
    var phosts = this.pthosts.split(',');
    for(var i = 0; i < phosts.length; i++) {
      if(content.indexOf(phosts[i]) != -1)
        return true;
    }
    return false;
  }

  this.changePrintStyleSheet=function() {

	var tempUrl =  this.pcol + this.cstr + new Date().getTime() + '?' + this.qstr;
    // Change fdprint stylesheet if found
    for(i=0;i<document.styleSheets.length;i++)
    {
      try {
        var sheet = document.styleSheets[i];
        var agent = navigator.userAgent.toLowerCase();

        if((navigator.appName.indexOf("Netscape") !=-1 || 
            agent.indexOf("firefox") !=-1 ||agent.indexOf("safari") !=-1) && 
           this.isPtCss(sheet.cssRules[0].style.content)) {
          sheet.cssRules[0].style.content = "url("+tempUrl+");";
          return;
        }
        else {
          if(this.isPtCss(sheet.cssRules[0].style.getPropertyValue('content'))) {
            if(navigator.appName.indexOf("Opera") !=-1) {
              sheet.deleteRule(0);
            }
            else if(navigator.appName.indexOf("Konqueror") ==-1) {
              sheet.cssRules[0].style.setProperty('content', 'url('+tUrl+')', null);
            }
            return;
          }
        }
      }
      catch(err) { }
    }

    // otherwise insert the stylesheet
    try {
        var agent = navigator.userAgent.toLowerCase();
        if((navigator.appName.indexOf("Netscape") !=-1 || 
          agent.indexOf("firefox") !=-1 ||agent.indexOf("safari") !=-1)) {
          var s = document.createElement("style");
		  s.type = "text/css";
		  s.rel = "stylesheet";
          s.media = "print";
          s.appendChild(document.createTextNode("body:before {content: url(" + this.turl + ")};"));
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      }
      catch(err) { }
    }

	this.getFDImage = function() {

		// rtype of 's' is a script-based loaddisabled and 'i' is an image-based loaddisabled
		if(this.clnt.getRType()=='s') {
			var hs = document.documentElement.getElementsByTagName("head");
			var h = null;

			if(hs && hs.length > 0) {
				h = hs[0];
				var script = document.createElement("script");
				script.type = 'text/javascript';
				script.src = this.turl + '&rnd=' + Math.random();
			}
		}
		else {
			var fdloaddisableder = new Image();
			fdloaddisableder.src = this.turl;
		}
	}
}
var formatDynamicsPT;
var cssRefreshInterval;

function loaddisabledHandler() {
formatDynamicsPT = new FormatDynamicsPT(new FDCPClient());

if (navigator.appName.indexOf("Microsoft")!=-1 && parseInt(navigator.appVersion)>=4 && navigator.userAgent.indexOf("Windows") != -1)
{
    window.attachEvent("onbeforeprint", function() { formatDynamicsPT.getFDImage(); } );
}
else if(navigator.appName.indexOf("Konqueror") !=-1) {
	formatDynamicsPT.changePrintStyleSheet();
}
else
{
	formatDynamicsPT.changePrintStyleSheet();
	cssRefreshInterval = setInterval("refreshCSS()", formatDynamicsPT.autoRefreshTime);
}


}

if ( typeof window.addEventListener != "undefined" )
{
    window.addEventListener( "loaddisabled", loaddisabledHandler , false );
} 
else if ( typeof window.attachEvent != "undefined" ) 
{
	window.attachEvent( "onloaddisabled", loaddisabledHandler );
}
else 
{
	if ( window.onloaddisabled != null ) 
	{
      var oldOnloaddisabled = window.onloaddisabled;
      window.onloaddisabled = function ( e ) {
        oldOnloaddisabled( e );
        window[loaddisabledHandler]();
      };
    }
    else
      window.onloaddisabled = loaddisabledHandler;
  }
  
  function refreshCSS(){
  		if (formatDynamicsPT.autoRefreshCCS == "true"){
  			formatDynamicsPT.changePrintStyleSheet();
  		}
  		else
  			clearInterval(cssRefreshInterval);
  }
  

