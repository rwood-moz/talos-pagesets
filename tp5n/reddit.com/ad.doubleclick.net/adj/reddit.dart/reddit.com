void('<!-- Copyright 2008 DoubleClick, a division of Google Inc. All rights reserved. -->\r\r\n<!-- Code auto-generated on Thu Mar 24 15:32:34 EDT 2011 -->\r\r\n<script src=\"httpdisabled://s0.2mdn.net/879366/void_1_2.js\"><\/script>');void('\r\r\n');

function DCFlash(id,pVM){
var swf = "httpdisabled://s0.2mdn.net/2022670/hanna_300x250_standard_0324_1229pm.swf";
var gif = "httpdisabled://s0.2mdn.net/2022670/8-Hanna_Banners_300x250_April.jpg";
var minV = 9;
var FWH = ' width="300" height="250" ';
var url = escape("httpdisabled://ad.doubleclick.net/click%3Bh%3Dv8/3ae3/3/0/%2a/e%3B238628437%3B0-0%3B0%3B61868128%3B4307-300/250%3B41323360/41341147/1%3B%3B%7Eaopt%3D0/ff/86/ff%3B%7Efdr%3D238892391%3B0-0%3B0%3B41567363%3B4307-300/250%3B41285486/41303273/1%3B%3B%7Eaopt%3D2/1/86/0%3B%7Esscs%3D%3fhttp://www.hannathemovie.com");
var fscUrl = url;
var fscUrlClickTagFound = false;
var wmode = "opaque";
var bg = "";
var dcallowscriptaccess = "never";

voidWindow = "false";
var winW = 0;
var winH = 0;
var winL = 0;
var winT = 0;

var moviePath=swf.substring(0,swf.lastIndexOf("/"));
var sm=new Array();


var defaultCtVal = escape("httpdisabled://ad.doubleclick.net/click%3Bh%3Dv8/3ae3/3/0/%2a/e%3B238628437%3B0-0%3B0%3B61868128%3B4307-300/250%3B41323360/41341147/1%3B%3B%7Eaopt%3D0/ff/86/ff%3B%7Efdr%3D238892391%3B0-0%3B0%3B41567363%3B4307-300/250%3B41285486/41303273/1%3B%3B%7Eaopt%3D2/1/86/0%3B%7Esscs%3D%3fhttp://www.hannathemovie.com");
var ctp=new Array();
var ctv=new Array();
ctp[0] = "clickTag";
ctv[0] = "httpdisabled://www.hannathemovie.com";


var fv='"moviePath='+moviePath+'/'+'&moviepath='+moviePath+'/';
for(i=1;i<sm.length;i++){if(sm[i]!=""){fv+="&submovie"+i+"="+escape(sm[i]);}}
for(var ctIndex = 0; ctIndex < ctp.length; ctIndex++) {
  var ctParam = ctp[ctIndex];
  var ctVal = ctv[ctIndex];
  if(ctVal != null && typeof(ctVal) == 'string') {
    if(ctVal == "") {
      ctVal = defaultCtVal;
    }
    else {
      ctVal = escape("httpdisabled://ad.doubleclick.net/click%3Bh%3Dv8/3ae3/3/0/%2a/e%3B238628437%3B0-0%3B0%3B61868128%3B4307-300/250%3B41323360/41341147/1%3B%3B%7Eaopt%3D0/ff/86/ff%3B%7Efdr%3D238892391%3B0-0%3B0%3B41567363%3B4307-300/250%3B41285486/41303273/1%3B%3B%7Eaopt%3D2/1/86/0%3B%7Esscs%3D%3f" + ctVal);
    }
    if(ctParam.toLowerCase() == "clicktag") {
      fscUrl = ctVal;
      fscUrlClickTagFound = true;
    }
    else if(!fscUrlClickTagFound) {
      fscUrl = ctVal;
    }
    fv += "&" + ctParam + "=" + ctVal;
  }
}
fv+='"';
var bgo=(bg=="")?"":'<param name="bgcolor" value="#'+bg+'">';
var bge=(bg=="")?"":' bgcolor="#'+bg+'"';
function FSWin(){if(voidWindow=="false")&&(id=="DCF0"))alert(voidWindow is wrong.');
var dcw = 800;
var dch = 600;
// IE
if(!window.innerWidth)
{
  // strict mode
  if(!(document.documentElement.clientWidth == 0))
  {
    dcw = document.documentElement.clientWidth;
    dch = document.documentElement.clientHeight;
  }
  // quirks mode
  else if(document.body)
  {
    dcw = document.body.clientWidth;
    dch = document.body.clientHeight;
  }
}
// w3c
else
{
  dcw = window.innerWidth;
  dch = window.innerHeight;
}
voidWindow=="center"){winL=Math.floor((dcw-winW)/2);winT=Math.floor((dch-winH)/2);}void(unescape(fscUrl),id,"width="+winW+",height="+winH+",top="+winT+",left="+winL+",status=no,toolbar=no,menubar=no,location=no");}this.FSWin = FSWin;
ua=navigator.userAgent;
if(minV<=pVM&&voidWindow=="false"||(ua.indexOf("Mac")<0&&ua.indexOf("Opera")<0))){
	var adcode='<objectdisabled classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+id+'"'+FWH+'>'+
		'<param name="movie" value="'+swf+'"><param name="flashvars" value='+fv+'><param name="quality" value="high"><param name="wmode" value="'+wmode+'"><param name="base" value="'+swf.substring(0,swf.lastIndexOf("/"))+'"><PARAM NAME="AllowScriptAccess" VALUE="'+dcallowscriptaccess+'">'+bgo+
		'<embeddisabled src="'+swf+'" flashvars='+fv+bge+FWH+' type="application/x-shockwave-flash" quality="high" swliveconnect="true" wmode="'+wmode+'" name="'+id+'" base="'+swf.substring(0,swf.lastIndexOf("/"))+'" AllowScriptAccess="'+dcallowscriptaccess+'"></embed></object>';
  if(('j'!="j")&&(typeof dclkFlashWrite!="undefined")){dclkFlashWrite(adcode);}else{void(adcode);}
}else{
	void('<a target="_blank" href="'+unescape(url)+'"><img src="'+gif+'"'+FWH+'border="0" alt="Advertisement" galleryimg="no"></a>');
}}
var pVM=0;var DCid=(isNaN("238628437"))?"DCF2":"DCF238628437";
if(navigator.plugins && navigator.mimeTypes.length){
  var x=navigator.plugins["Shockwave Flash"];if(x && x.description){var pVF=x.description;var y=pVF.indexOf("Flash ")+6;pVM=pVF.substring(y,pVF.indexOf(".",y));}}
else if (window.ActiveXObject && window.execScript){
  window.execScript('on error resume next\npVM=2\ndo\npVM=pVM+1\nset swControl = CreateObject("ShockwaveFlash.ShockwaveFlash."&pVM)\nloop while Err = 0\nOn Error Resume Next\npVM=pVM-1\nSub '+DCid+'_FSCommand(ByVal command, ByVal args)\nCall '+DCid+'_DoFSCommand(command, args)\nEnd Sub\n',"VBScript");}
eval("function "+DCid+"_DoFSCommand(c,a){if(c==voidWindow')o"+DCid+".FSWin();}o"+DCid+"=new DCFlash('"+DCid+"',pVM);");
//-->

void('\r\r\n<noscript><a target=\"_blank\" href=\"httpdisabled://ad.doubleclick.net/click%3Bh%3Dv8/3ae3/3/0/%2a/e%3B238628437%3B0-0%3B0%3B61868128%3B4307-300/250%3B41323360/41341147/1%3B%3B%7Eaopt%3D0/ff/86/ff%3B%7Efdr%3D238892391%3B0-0%3B0%3B41567363%3B4307-300/250%3B41285486/41303273/1%3B%3B%7Eaopt%3D2/1/86/0%3B%7Esscs%3D%3fhttp://www.hannathemovie.com\"><img src=\"httpdisabled://s0.2mdn.net/2022670/8-Hanna_Banners_300x250_April.jpg\" width=\"300\" height=\"250\" border=\"0\" alt=\"Advertisement\" galleryimg=\"no\"></a></noscript>\r\r\n');
