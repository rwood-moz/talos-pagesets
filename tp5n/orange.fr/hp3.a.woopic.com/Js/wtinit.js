function DcsInit(){
this.dcsid="dcsl8l479854f3emawx840q4m_3u3k";
this.domain="sdc.francetelecom.com";
this.enabled=true;
this.exre=(function(){
if (window.RegExp){
return(new RegExp("dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)","i"));
}
else{
return("");
}
})();
this.fpc="WT_FPC";
this.fpcdom="orange.fr";
this.onsitedomains=this.fpcdom;
this.i18n=false;
this.images=[];
this.index=0;
this.qp=[];
this.re=(function(){
if (window.RegExp){
return(this.i18n?{"%25":/\%/g}:{"%09":/\t/g,"%20":/ /g,"%23":/\#/g,"%26":/\&/g,"%2B":/\+/g,"%3F":/\?/g,"%5C":/\\/g,"%22":/\"/g,"%7F":/\x7F/g,"%A0":/\xA0/g});
}
else{
return("");
}
})();
this.timezone=0;
this.trackevents=false;
var t=this;
(function(){
if (t.enabled&&(document.cookie.indexOf(t.fpc+"=")==-1)&&(document.cookie.indexOf("WTLOPTOUT=")==-1)){
void("<scr"+"ipt type='text/javascript' src='"+"httpdisabled"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+t.domain+"/"+t.dcsid+"/wtid.js"+"'><\/scr"+"ipt>");
}
})();
}
var DCS={};
var WT={};
var DCSext={};
var dcsInit=new DcsInit();
