var tgmNum = Math.floor (Math.random()*1000000);
tgmSite = typeof(tgmSite) == "undefined" ? "" : tgmSite;
tgmZone = typeof(tgmZone) == "undefined" ? "" : tgmZone;
site = typeof(site) == "undefined" ? "" : site;
zone = typeof(zone) == "undefined" ? "" : zone;
var tagman_po="atomo";
d=document;
pv=9,po=false,nv=navigator,nm=nv.mimeTypes,ug=nv.userAgent,pg=(nm&&nm["application/x-shockwave-flash"])?nm["application/x-shockwave-flash"].enabledPlugin:0;
if(pg){w=nv.plugins["Shockwave Flash"].description.split(" ");
 for(i=0;i<w.length;++i){if(isNaN(parseInt(w[i])))continue;pv2=w[i];}po=pv2>=pv;}
else if(ug&&ug.indexOf("MSIE")>=0&&(nv.appVersion.indexOf("Win")!=-1)){
 void('<SCR'+'IPT LANGUAGE=VBScript\>on error resume next \n'+'po=(IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash."&pv)))\n'+'</SCR'+'IPT\>\n');
}
var tgd=document;
var tgH;
if ((tgd.location.protocol != "httpdisabled") && (tgd.location.protocol != "httpdisabledsdisabled"))
	tgH="httpdisabled://";
else
	tgH=tgd.location.protocol+"//";

switch(tgGetLocal()){
case'ar':tgH+='p2.trrsf.com/tagmanfe/';break;
case'br':tgH+='p2.trrsf.com.br/tagmanfe/';break;
case'cl':tgH+='p2.trrsf.com/tagmanfe/';break;
case'co':tgH+='p2.trrsf.com/tagmanfe/';break;
case'pe':tgH+='p2.trrsf.com/tagmanfe/';break;
case've':tgH+='p2.trrsf.com/tagmanfe/';break;
case'ec':tgH+='p2.trrsf.com/tagmanfe/';break;
case'mx':tgH+='p2.trrsf.com/tagmanfe/';break;
case'uy':tgH+='p2.trrsf.com/tagmanfe/';break;
default:tgH+='p2.trrsf.com/tagmanfe/'}
function cTgm(){this.ShowArea=cShowArea;this.ShowPage=cShowPage;}
function cShowArea(){
	var tgparams='key='+tgmKey+'.'+cShowArea.arguments[0];
	for(i=1;i<cShowArea.arguments.length;i++){
	    tgparams+='&'+cShowArea.arguments[i];}
	void(tgH+'ShowArea.aspx?'+tgparams);}
function cShowPage(){
	var params='key='+tgmKey;
	for(i=1;i<cShowPage.arguments.length;i++){
	    params+='&'+cShowPage.arguments[i]; }
	void(tgH+'ShowPage.aspx?'+params);}
function tgGetLocal(){
	var tgparts=tgmKey.split(".")
	return tgparts[0];}
function void(tgp){void('<SCR'+'IPT language="javascript" src="'+tgp+'"></SCR'+'IPT>');}
var tgm=new cTgm();