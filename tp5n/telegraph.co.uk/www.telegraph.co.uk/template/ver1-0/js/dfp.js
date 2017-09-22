// LATEST AMENDS
// 1.001 - moved the sz, tile to the end of the adturls as is recommended for best performance - http://www.google.com/support/dfp/bin/answer.py?hl=en&answer=165714
// 1.002 - only sz and kw can take comma delimited lists of values so I'm working on changing any situation which creates them
// 1.003 - changed the at (adtype) to sperate KVPs per adtype see 1.002
// 1.004 - I've changed the AudienceScience cookie parsing to add a new KVP pr Audience Science segment ID. see 1.002
// 1.005 - started incorporating different adttag responses eg; adj,adi,adx
// 1.006 - There is a 55 char limit on values of KVPs, amended thos that would exceed this.
// 1.007 - Added id tags to iframe, script and enclsoing div tags naming convention - tmgAd_adType_tilevalue
// 1.010 - Main UAT 20011-03
// 1.011 - 2011-04-04 - keyword removal, fix AS cookies
// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DETECT FLASH VERSION http://www.featureblend.com/flash_detect_1-0-4 - http://www.featureblend.com/license.txt
var FlashDetect=new function(){var self=this;self.installed=false;self.raw="";self.major=-1;self.minor=-1;self.revision=-1;self.revisionStr="";var activeXDetectRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7","version":function(obj){return getActiveXVersion(obj);}},{"name":"ShockwaveFlash.ShockwaveFlash.6","version":function(obj){var version="6,0,21";try{obj.AllowScriptAccess="always";version=getActiveXVersion(obj);}catch(err){}
return version;}},{"name":"ShockwaveFlash.ShockwaveFlash","version":function(obj){return getActiveXVersion(obj);}}];var getActiveXVersion=function(activeXObj){var version=-1;try{version=activeXObj.GetVariable("$version");}catch(err){}
return version;};var getActiveXObject=function(name){var obj=-1;try{obj=new ActiveXObject(name);}catch(err){obj={activeXError:true};}
return obj;};var parseActiveXVersion=function(str){var versionArray=str.split(",");return{"raw":str,"major":parseInt(versionArray[0].split(" ")[1],10),"minor":parseInt(versionArray[1],10),"revision":parseInt(versionArray[2],10),"revisionStr":versionArray[2]};};var parseStandardVersion=function(str){var descParts=str.split(/ +/);var majorMinor=descParts[2].split(/\./);var revisionStr=descParts[3];return{"raw":str,"major":parseInt(majorMinor[0],10),"minor":parseInt(majorMinor[1],10),"revisionStr":revisionStr,"revision":parseRevisionStrToInt(revisionStr)};};var parseRevisionStrToInt=function(str){return parseInt(str.replace(/[a-zA-Z]/g,""),10)||self.revision;};self.majorAtLeast=function(version){return self.major>=version;};self.minorAtLeast=function(version){return self.minor>=version;};self.revisionAtLeast=function(version){return self.revision>=version;};self.versionAtLeast=function(major){var properties=[self.major,self.minor,self.revision];var len=Math.min(properties.length,arguments.length);for(i=0;i<len;i++){if(properties[i]>=arguments[i]){if(i+1<len&&properties[i]==arguments[i]){continue;}else{return true;}}else{return false;}}};self.FlashDetect=function(){if(navigator.plugins&&navigator.plugins.length>0){var type='application/x-shockwave-flash';var mimeTypes=navigator.mimeTypes;if(mimeTypes&&mimeTypes[type]&&mimeTypes[type].enabledPlugin&&mimeTypes[type].enabledPlugin.description){var version=mimeTypes[type].enabledPlugin.description;var versionObj=parseStandardVersion(version);self.raw=versionObj.raw;self.major=versionObj.major;self.minor=versionObj.minor;self.revisionStr=versionObj.revisionStr;self.revision=versionObj.revision;self.installed=true;}}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){var version=-1;for(var i=0;i<activeXDetectRules.length&&version==-1;i++){var obj=getActiveXObject(activeXDetectRules[i].name);if(!obj.activeXError){self.installed=true;version=activeXDetectRules[i].version(obj);if(version!=-1){var versionObj=parseActiveXVersion(version);self.raw=versionObj.raw;self.major=versionObj.major;self.minor=versionObj.minor;self.revision=versionObj.revision;self.revisionStr=versionObj.revisionStr;}}}}}();};


////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
function tmgAdsInitAdsData(){
  this.tags     = new Array();
  this.protocol = window.location.protocol+"//";
  this.adserver = "ad-emea.doubleclick.net";
  this.sitename = "tmg.telegraph."+tmgAdsGetMetaTag("tmgads.channel");
  this.zonename = tmgAdsGetMetaTag("tmgads.zone");
  this.sitezone = this.sitename+"/"+this.zonename;
  // site/zone string can not exceed 64 chars, so truncate from the zone name if need be
  this.sitezone = this.sitezone.substr(0,64);
  this.section  = tmgAdsGetMetaTag("tmgads.section");
  this.pagetype = tmgAdsGetMetaTag("tmgads.pagetype");
  this.level    = tmgAdsGetMetaTag("tmgads.level");
  this.tile     = 0;
  if(document.all){
    this.biw = document.documentElement.offsetWidth;
    this.bih = document.documentElement.offsetHeight;
  } else {
    this.biw = window.innerWidth;
    this.bih = window.innerHeight;
  }
  if(FlashDetect.installed){
    this.flashversion = FlashDetect.major;     	
  }
  this.articleid   = tmgAdsGetMetaTag("tmgads.articleid");

  // KEYWORDS
  this.keywords = "";
  // GET SEARCH ENGINE KEYWORDS
  // GOOGLE, BING, ASK.COM - all use the 'q' purl param to pass search words
  //if(window.document.referrer.indexOf(".google.") != -1 || window.document.referrer.indexOf(".bing.")  != -1 || window.document.referrer.indexOf(".ask.")  != -1 || window.document.referrer.indexOf("alltheweb") != -1){
  //  this.keywords += tmgAdsGetURLParam("q",window.document.referrer).replace(/\+/g,",").replace(/\ /g,"+")+",";
  //}
  // YAHOO - uses the 'p' parameter, exclude alltheweb which uses yahoo.com domain but use 'q' query string
  //if(window.document.referrer.indexOf(".yahoo.") != -1 && window.document.referrer.indexOf("alltheweb") == -1 ){
  //  this.keywords += tmgAdsGetURLParam("p",window.document.referrer).replace(/\+/g,",").replace(/\ /g,"+")+",";
  //}
  // GET EDITORIAL KEYWORDS
  //this.keywords += tmgAdsGetMetaTag("keywords").replace(/\, /g,",").replace(/\ /g,"+");
  //this.keywords = this.keywords;
 

  // PARSE COOKIES
  // COOKIES - AudienceScience, remove E06560_ from start of each entry as not needed
  // shared elements are still passed in their entireity
  if(tmgAdsGetCookie("rsi_segs")){
    this.asCookies = "";
    var asCookiesArray = tmgAdsGetCookie("rsi_segs").replace(/E06560_/g,"").split("|");
    for(var i=0;i<=asCookiesArray.length-1;i++){
      if(i<=19){
		this.asCookies += ";as="+asCookiesArray[i];
	  } else {
        break;
	  }
    }
  }

  // COOKIES - all tmgAds*
  this.tmgCookies="";
  cookieArray = document.cookie.split("; "); 
  for(var i=0; i<cookieArray.length; i++){
    cookieKey=cookieArray[i].split('=')[0];
    cookieVal=cookieArray[i].split('=')[1];
    if(cookieKey.substr(0,7)=="tmgads_" && cookieKey.length>0){
      this.tmgCookies += ";ck_"+cookieKey.substr(7,cookieKey.length-7)+"="+cookieVal;
    }
  }
  // get adtest var pass in url if set
  if (tmgAdsGetURLParam("adtest",window.location.href) != null) {
    this.test = tmgAdsGetURLParam("adtest",window.location.href);
  } else {
    this.test = null;
  }
  // set ord cachebuster
  this.ord   = Number(new Date());
}

function tmgAdsGetMetaTag(tagname){
  var output = "null";
  if(document.getElementsByName(tagname)[0] != null){
    output = document.getElementsByName(tagname)[0].content;
  }
  return output.toLowerCase();
}

function tmgAdsGetURLParam(strParamName,URL){
  var strReturn = "";
  var strHref = URL;
  if ( strHref.indexOf("?") > -1 ){
    var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
    var aQueryString = strQueryString.split("&");
    for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
      if (aQueryString[iParam].indexOf(strParamName.toLowerCase() + "=") > -1 ){
        var aParam = aQueryString[iParam].split("=");
        strReturn = aParam[1];
        break;
      }
    }
  } else {
    strReturn = "";
  }
  return unescape(strReturn);
}

function tmgAdsGetCookie(c_name){
  var i,x,y,ARRcookies=document.cookie.split(";");
  for (i=0;i<ARRcookies.length;i++){
    x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
    y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
    x=x.replace(/^\s+|\s+$/g,"");
    if (x==c_name){
      return unescape(y);
    }
  }
}

function tmgAdsBuildAdTag(adType,adSize,adTagStyle,adExtraTags){
  
	++tmgAds.tile;
  // SET ADASERVER DOMAIN, SCRIPTTYPE, SITENAME & ZONENAME
  var output = tmgAds.protocol+tmgAds.adserver+"/"+adTagStyle+"/"+tmgAds.sitezone;
  // create new KVP per adunit
  var adTypes = adType.split(",");
  for(var i=0;i<=adTypes.length-1;i++){
    output += ";at="+adTypes[i];
  }
  output += ";pos="+tmgAds.tile;  
  output += ";sc="+tmgAds.section;
  output += ";pt="+tmgAds.pagetype;
  output += ";pg="+tmgAds.articleid;
  output += ";lvl="+tmgAds.level;
  output += ";biw="+tmgAds.biw;
  output += ";bih="+tmgAds.bih;
  output += ";fv="+tmgAds.flashversion;
  // ADD EXTRA ADTAGS - adExtraTags
  if(adExtraTags){
    output += adExtraTags;
  }
  // ADD COOKIES DATA TO URL
  if(tmgAds.asCookies){
    output += tmgAds.asCookies;
  }
  if(tmgAds.tmgCookies){
    output += tmgAds.tmgCookies;
  }
  // ADD KEYWORDS
  if(tmgAds.keywords){
    output += ";kw="+tmgAds.keywords;
  }
  // ADD ADTEST URL PARAM
  if(tmgAds.test) {
    output += ";test="+tmgAds.test;
  }
  // Best practice/performance to place these two values atend of url.
  output += ";sz="+adSize;
  output += ";tile="+tmgAds.tile;
  // FINALISE ADTAG URL ord and ? and add to the window.tmgAds.tags array
  output += ";ord="+tmgAds.ord+"?";
  // AdD THIS TAG TO AN ARRAY IN THE OBJECT window.tmgAds.tags
  tmgAds.tags[tmgAds.tile] = output;

  
  // RETURN THIS ADURL
  switch(adTagStyle){
    case "adi":
      // GET MAX SIZE OF SZ VALUES TO CREATE IVFRAME IF CALLED
      var tmgAdSizes = adSize.split(",");
      if(tmgAdSizes.length>=2){
        tmgAdHeight = 0;
        tmgAdWidth  = 0;
      } else {
        tmgAdWidth  = adSize.split("x")[0];
        tmgAdHeight = adSize.split("x")[1];
      }
      return "<div id=\"tmgAd_"+adType.replace(/\,/g,"")+"_"+tmgAds.tile+"\"><ifr"+"ame id=\"tmgAd_iframe_"+adType.replace(/\,/g,"")+"_"+tmgAds.tile+"\" src=\""+tmgAds.tags[tmgAds.tile]+"\" width=\""+tmgAdWidth+"\" height=\""+tmgAdHeight+"\" marginwidth=\"0\" marginheight=\"0\" hspace=\"0\" vspace=\"0\" frameborder=\"0\" scrolling=\"no\" bordercolor=\"#000000\"><\/ifr"+"ame></div>"; 
      break
    case "adj":
      return "<div id=\"tmgAd_"+adType.replace(/\,/g,"")+"_"+tmgAds.tile+"\"><scr"+"ipt type=\"text/javascript\" id=\"tmgAd_script_"+adType.replace(/\,/g,"")+"_"+tmgAds.tile+"\" src=\""+tmgAds.tags[tmgAds.tile]+"\"><\/scr"+"ipt></div>"; 
      break
    case "adx":
      return tmgAds.tags[tmgAds.tile]; 
    break
  }
 
}

////////////////////////////////////////////////////////////////////////////////////////////
// INITIALISE tmgAds object
var tmgAds = new tmgAdsInitAdsData();