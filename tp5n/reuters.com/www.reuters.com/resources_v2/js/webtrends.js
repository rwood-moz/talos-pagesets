// WebTrends SmartSource Data Collector Tag
// Version: 8.6.0     
// Tag Builder Version: 2.1.0
// Created: 2/9/2009 17:21:12

function WebTrends(){
	var that=this;
	// begin: user modifiable
	this.dcsid="dcsncwimc10000kzgoor3wv9x_3f2v";
	this.domain="statse.webtrendslive.com";
	this.timezone=0;
	this.fpcdom="";
	//this.evi={cookie:"autorefresh",qp:"DCSext.AutoRefresh",crumb:"",sep:""};
	this.evi=[{cookie:"autorefresh",qp:"DCSext.AutoRefresh",crumb:"",sep:""}, {cookie:"geoRedirector",qp:"DCSext.GeoRedirectUrl",crumb:"origurl",sep:"&"}, {cookie:"geoRedirector",qp:"DCSext.GeoRedirectEnabled",crumb:"enabled",sep:"&"}];
	this.enabled=true;
	this.i18n=false;
	this.fpc="WT_FPC";
	// end: user modifiable
	this.DCS={};
	this.WT={};
	this.DCSext={};
	this.images=[];
	this.index=0;
	this.exre=(function(){return(window.RegExp?new RegExp("dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)","i"):"");})();
	this.re=(function(){return(window.RegExp?(that.i18n?{"%25":/\%/g}:{"%09":/\t/g,"%20":/ /g,"%23":/\#/g,"%26":/\&/g,"%2B":/\+/g,"%3F":/\?/g,"%5C":/\\/g,"%22":/\"/g,"%7F":/\x7F/g,"%A0":/\xA0/g}):"");})();
}
WebTrends.prototype.dcsGetId=function(){
	if (this.enabled&&(document.cookie.indexOf(this.fpc+"=")==-1)&&(document.cookie.indexOf("WTLOPTOUT=")==-1)){
		void("<scr"+"ipt type='text/javascript' src='"+"httpdisabled"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+this.domain+"/"+this.dcsid+"/wtid.js"+"'><\/scr"+"ipt>");
	}
}
WebTrends.prototype.dcsGetCookie=function(name){
	var cookies=document.cookie.split("; ");
	var cmatch=[];
	var idx=0;
	var i=0;
	var namelen=name.length;
	var clen=cookies.length;
	for (i=0;i<clen;i++){
		var c=cookies[i];
		if ((c.substring(0,namelen+1))==(name+"=")){
			cmatch[idx++]=c;
		}
	}
	var cmatchCount=cmatch.length;
	if (cmatchCount>0){
		idx=0;
		if ((cmatchCount>1)&&(name==this.fpc)){
			var dLatest=new Date(0);
			for (i=0;i<cmatchCount;i++){
				var lv=parseInt(this.dcsGetCrumb(cmatch[i],"lv"));
				var dLst=new Date(lv);
				if (dLst>dLatest){
					dLatest.setTime(dLst.getTime());
					idx=i;
				}
			}
		}
		return unescape(cmatch[idx].substring(namelen+1));
	}
	else{
		return null;
	}
}
WebTrends.prototype.dcsGetCrumb=function(cval,crumb,sep){
	var aCookie=cval.split(sep||":");
	for (var i=0;i<aCookie.length;i++){
		var aCrumb=aCookie[i].split("=");
		if (crumb==aCrumb[0]){
			return aCrumb[1];
		}
	}
	return null;
}
WebTrends.prototype.dcsGetIdCrumb=function(cval,crumb){
	var id=cval.substring(0,cval.indexOf(":lv="));
	var aCrumb=id.split("=");
	for (var i=0;i<aCrumb.length;i++){
		if (crumb==aCrumb[0]){
			return aCrumb[1];
		}
	}
	return null;
}
WebTrends.prototype.dcsIsFpcSet=function(name,id,lv,ss){
	var c=this.dcsGetCookie(name);
	if (c){
		return ((id==this.dcsGetIdCrumb(c,"id"))&&(lv==this.dcsGetCrumb(c,"lv"))&&(ss==this.dcsGetCrumb(c,"ss")))?0:3;
	}
	return 2;
}
WebTrends.prototype.dcsFPC=function(){
	if (document.cookie.indexOf("WTLOPTOUT=")!=-1){
		return;
	}
	var WT=this.WT;
	var name=this.fpc;
	var dCur=new Date();
	var adj=(dCur.getTimezoneOffset()*60000)+(this.timezone*3600000);
	dCur.setTime(dCur.getTime()+adj);
	var dExp=new Date(dCur.getTime()+315360000000);
	var dSes=new Date(dCur.getTime());
	WT.co_f=WT.vtid=WT.vtvs=WT.vt_f=WT.vt_f_a=WT.vt_f_s=WT.vt_f_d=WT.vt_f_tlh=WT.vt_f_tlv="";
	if (document.cookie.indexOf(name+"=")==-1){
		if ((typeof(gWtId)!="undefined")&&(gWtId!="")){
			WT.co_f=gWtId;
		}
		else if ((typeof(gTempWtId)!="undefined")&&(gTempWtId!="")){
			WT.co_f=gTempWtId;
			WT.vt_f="1";
		}
		else{
			WT.co_f="2";
			var curt=dCur.getTime().toString();
			for (var i=2;i<=(32-curt.length);i++){
				WT.co_f+=Math.floor(Math.random()*16.0).toString(16);
			}
			WT.co_f+=curt;
			WT.vt_f="1";
		}
		if (typeof(gWtAccountRollup)=="undefined"){
			WT.vt_f_a="1";
		}
		WT.vt_f_s=WT.vt_f_d="1";
		WT.vt_f_tlh=WT.vt_f_tlv="0";
	}
	else{
		var c=this.dcsGetCookie(name);
		var id=this.dcsGetIdCrumb(c,"id");
		var lv=parseInt(this.dcsGetCrumb(c,"lv"));
		var ss=parseInt(this.dcsGetCrumb(c,"ss"));
		if ((id==null)||(id=="null")||isNaN(lv)||isNaN(ss)){
			return;
		}
		WT.co_f=id;
		var dLst=new Date(lv);
		WT.vt_f_tlh=Math.floor((dLst.getTime()-adj)/1000);
		dSes.setTime(ss);
		if ((dCur.getTime()>(dLst.getTime()+1800000))||(dCur.getTime()>(dSes.getTime()+28800000))){
			WT.vt_f_tlv=Math.floor((dSes.getTime()-adj)/1000);
			dSes.setTime(dCur.getTime());
			WT.vt_f_s="1";
		}
		if ((dCur.getDay()!=dLst.getDay())||(dCur.getMonth()!=dLst.getMonth())||(dCur.getYear()!=dLst.getYear())){
			WT.vt_f_d="1";
		}
	}
	WT.co_f=escape(WT.co_f);
	WT.vtid=(typeof(this.vtid)=="undefined")?WT.co_f:(this.vtid||"");
	WT.vtvs=(dSes.getTime()-adj).toString();
	var expiry="; expires="+dExp.toGMTString();
	var cur=dCur.getTime().toString();
	var ses=dSes.getTime().toString();
	document.cookie=name+"="+"id="+WT.co_f+":lv="+cur+":ss="+ses+expiry+"; path=/"+(((this.fpcdom!=""))?("; domain="+this.fpcdom):(""));
	var rc=this.dcsIsFpcSet(name,WT.co_f,cur,ses);
	if (rc!=0){
		WT.co_f=WT.vtvs=WT.vt_f_s=WT.vt_f_d=WT.vt_f_tlh=WT.vt_f_tlv="";
		if (typeof(this.vtid)=="undefined"){
			WT.vtid="";
		}
		WT.vt_f=WT.vt_f_a=rc;
    }
}
WebTrends.prototype.dcsMultiTrack=function(){
	var args=dcsMultiTrack.arguments?dcsMultiTrack.arguments:arguments;
	if (args.length%2==0){
		this.dcsSetProps(args);
		var dCurrent=new Date();
		this.DCS.dcsdat=dCurrent.getTime();
		this.dcsFPC();
		this.dcsTag();
	}
}
WebTrends.prototype.dcsCleanUp=function(){
	this.DCS={};
	this.WT={};
	this.DCSext={};
	if (arguments.length%2==0){
		this.dcsSetProps(arguments);
	}
}
WebTrends.prototype.dcsSetProps=function(args){
	for (var i=0;i<args.length;i+=2){
		if (args[i].indexOf('WT.')==0){
			this.WT[args[i].substring(3)]=args[i+1];
		}
		else if (args[i].indexOf('DCS.')==0){
			this.DCS[args[i].substring(4)]=args[i+1];
		}
		else if (args[i].indexOf('DCSext.')==0){
			this.DCSext[args[i].substring(7)]=args[i+1];
		}
	}
}
// Code section for Assign cookie to query paraemter.
WebTrends.prototype.dcsEvi=function(){
	var t=this;
	var evis=t.evi;
	for(var i=0;i<evis.length;i++) {
		var evi=evis[i];
		var qp=evi.qp;
		var c=t.dcsGetCookie(evi.cookie);
		if (c){
			if ((evi.crumb.length>0)&&(evi.sep.length>0)){
				c=t.dcsGetCrumb(c,evi.crumb,evi.sep);
			}
			if (c){
				if (qp.indexOf("WT.")==0){
					t.WT[qp.substring(3)]=c;
				}
				else if (qp.indexOf("DCS.")==0){
					t.DCS[qp.substring(4)]=c;
				}
				else if (qp.indexOf("DCSext.")==0){
					t.DCSext[qp.substring(7)]=c;
				}
				else{
					t.DCSext[qp]=c;
				}
			}
		}
	}
}
WebTrends.prototype.dcsAdv=function(){
	this.dcsFPC();
	this.dcsEvi();
}
WebTrends.prototype.dcsVar=function(){
	var dCurrent=new Date();
	var WT=this.WT;
	var DCS=this.DCS;
	WT.tz=parseInt(dCurrent.getTimezoneOffset()/60*-1)||"0";
	WT.bh=dCurrent.getHours()||"0";
	WT.ul=navigator.appName=="Netscape"?navigator.language:navigator.userLanguage;
	if (typeof(screen)=="object"){
		WT.cd=navigator.appName=="Netscape"?screen.pixelDepth:screen.colorDepth;
		WT.sr=screen.width+"x"+screen.height;
	}
	if (typeof(navigator.javaEnabled())=="boolean"){
		WT.jo=navigator.javaEnabled()?"Yes":"No";
	}
	if (document.title){
		if (window.RegExp){
			var tire=new RegExp("^"+window.location.protocol+"//"+window.location.hostname+"\\s-\\s");
			WT.ti=document.title.replace(tire,"");
		}
		else{
			WT.ti=document.title;
		}
	}
	WT.js="Yes";
	WT.jv=(function(){
		var agt=navigator.userAgent.toLowerCase();
		var major=parseInt(navigator.appVersion);
		var mac=(agt.indexOf("mac")!=-1);
		var ff=(agt.indexOf("firefox")!=-1);
		var ff0=(agt.indexOf("firefox/0.")!=-1);
		var ff10=(agt.indexOf("firefox/1.0")!=-1);
		var ff15=(agt.indexOf("firefox/1.5")!=-1);
		var ff20=(agt.indexOf("firefox/2.0")!=-1);
		var ff3up=(ff&&!ff0&&!ff10&!ff15&!ff20);
		var nn=(!ff&&(agt.indexOf("mozilla")!=-1)&&(agt.indexOf("compatible")==-1));
		var nn4=(nn&&(major==4));
		var nn6up=(nn&&(major>=5));
		var ie=((agt.indexOf("msie")!=-1)&&(agt.indexOf("opera")==-1));
		var ie4=(ie&&(major==4)&&(agt.indexOf("msie 4")!=-1));
		var ie5up=(ie&&!ie4);
		var op=(agt.indexOf("opera")!=-1);
		var op5=(agt.indexOf("opera 5")!=-1||agt.indexOf("opera/5")!=-1);
		var op6=(agt.indexOf("opera 6")!=-1||agt.indexOf("opera/6")!=-1);
		var op7up=(op&&!op5&&!op6);
		var jv="1.1";
		if (ff3up){
			jv="1.8";
		}
		else if (ff20){
			jv="1.7";
		}
		else if (ff15){
			jv="1.6";
		}
		else if (ff0||ff10||nn6up||op7up){
			jv="1.5";
		}
		else if ((mac&&ie5up)||op6){
			jv="1.4";
		}
		else if (ie5up||nn4||op5){
			jv="1.3";
		}
		else if (ie4){
			jv="1.2";
		}
		return jv;
	})();
	WT.ct="unknown";
	if (document.body&&document.body.addBehavior){
		try{
			document.body.addBehavior("#default#clientCaps");
			WT.ct=document.body.connectionType||"unknown";
			document.body.addBehavior("#default#homePage");
			WT.hp=document.body.isHomePage(location.href)?"1":"0";
		}
		catch(e){
		}
	}
	if (document.all){
		WT.bs=document.body?document.body.offsetWidth+"x"+document.body.offsetHeight:"unknown";
	}
	else{
		WT.bs=window.innerWidth+"x"+window.innerHeight;
	}
	WT.fv=(function(){
		var i,flash;
		if (window.ActiveXObject){
			for(i=10;i>0;i--){
				try{
					flash=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);
					return i+".0";
				}
				catch(e){
				}
			}
		}
		else if (navigator.plugins&&navigator.plugins.length){
			for (i=0;i<navigator.plugins.length;i++){
				if (navigator.plugins[i].name.indexOf('Shockwave Flash')!=-1){
					return navigator.plugins[i].description.split(" ")[2];
				}
			}
		}
		return "Not enabled";
	})();
	WT.slv=(function(){
		var slv="Not enabled";
		try{     
			if (navigator.userAgent.indexOf('MSIE')!=-1){
				var sli = new ActiveXObject('AgControl.AgControl');
				if (sli){
					slv="Unknown";
				}
			}
			else if (navigator.plugins["Silverlight Plug-In"]){
				slv="Unknown";
			}
		}
		catch(e){
		}
		if (slv!="Not enabled"){
			var i,j,v;
			if ((typeof(Silverlight)=="object")&&(typeof(Silverlight.isInstalled)=="function")){
				for (j=9;j>=0;j--){
					for(i=3;i>0;i--){
						v=i+"."+j;
						if (Silverlight.isInstalled(v)){
							slv=v;
							break;
						}
					}
					if (slv==v){
						break;
					}
				}
			}
		}
		return slv;
	})();
	if (this.i18n){
		if (typeof(document.defaultCharset)=="string"){
			WT.le=document.defaultCharset;
		} 
		else if (typeof(document.characterSet)=="string"){
			WT.le=document.characterSet;
		}
		else{
			WT.le="unknown";
		}
	}
	WT.tv="8.6.0";
//	WT.sp="@@SPLITVALUE@@";
	WT.dl="0";
	WT.ssl=(window.location.protocol.indexOf('https:')==0)?"1":"0";
	DCS.dcsdat=dCurrent.getTime();
	DCS.dcssip=window.location.hostname;
	DCS.dcsuri=window.location.pathname;
	WT.es=DCS.dcssip+DCS.dcsuri;
	if (window.location.search){
		DCS.dcsqry=window.location.search;
	}
	if ((window.document.referrer!="")&&(window.document.referrer!="-")){
		if (!(navigator.appName=="Microsoft Internet Explorer"&&parseInt(navigator.appVersion)<4)){
			DCS.dcsref=window.document.referrer;
		}
	}
}
WebTrends.prototype.dcsEscape=function(S, REL){
	if (REL!=""){
		S=S.toString();
		for (var R in REL){
 			if (REL[R] instanceof RegExp){
				S=S.replace(REL[R],R);
 			}
		}
		return S;
	}
	else{
		return escape(S);
	}
}
WebTrends.prototype.dcsA=function(N,V){
	if (this.i18n&&(this.exre!="")&&!this.exre.test(N)){
		if (N=="dcsqry"){
			var newV="";
			var params=V.substring(1).split("&");
			for (var i=0;i<params.length;i++){
				var pair=params[i];
				var pos=pair.indexOf("=");
				if (pos!=-1){
					var key=pair.substring(0,pos);
					var val=pair.substring(pos+1);
					if (i!=0){
						newV+="&";
					}
					newV+=key+"="+this.dcsEncode(val);
				}
			}
			V=V.substring(0,1)+newV;
		}
		else{
			V=this.dcsEncode(V);
		}
	}
	return "&"+N+"="+this.dcsEscape(V, this.re);
}
WebTrends.prototype.dcsEncode=function(S){
	return (typeof(encodeURIComponent)=="function")?encodeURIComponent(S):escape(S);
}
WebTrends.prototype.dcsCreateImage=function(dcsSrc){
	if (document.images){
		this.images[this.index]=new Image();
		this.images[this.index].src=dcsSrc;
		this.index++;
	}
	else{
		void('<IMG ALT="" BORDER="0" NAME="DCSIMG" WIDTH="1" HEIGHT="1" SRC="'+dcsSrc+'">');
	}
}
WebTrends.prototype.dcsMeta=function(){
	var elems;
	if (document.all){
		elems=document.all.tags("meta");
	}
	else if (document.documentElement){
		elems=document.getElementsByTagName("meta");
	}
	if (typeof(elems)!="undefined"){
		var length=elems.length;
		for (var i=0;i<length;i++){
			var name=elems.item(i).name;
			var content=elems.item(i).content;
			var equiv=elems.item(i).httpEquiv;
			if (name.length>0){
				if (name.toUpperCase().indexOf("WT.")==0){
					this.WT[name.substring(3)]=content;
				}
				else if (name.toUpperCase().indexOf("DCSEXT.")==0){
					this.DCSext[name.substring(7)]=content;
				}
				else if (name.toUpperCase().indexOf("DCS.")==0){
					this.DCS[name.substring(4)]=content;
				}
			}
		}
	}
}
WebTrends.prototype.dcsTag=function(){
	if (document.cookie.indexOf("WTLOPTOUT=")!=-1){
		return;
	}
	var WT=this.WT;
	var DCS=this.DCS;
	var DCSext=this.DCSext;
	var i18n=this.i18n;
	var P="httpdisabled"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+this.domain+(this.dcsid==""?'':'/'+this.dcsid)+"/dcs.gif?";
	if (i18n){
		WT.dep="";
	}
	for (var N in DCS){
 		if (DCS[N]&&(typeof DCS[N]!="function")){
			P+=this.dcsA(N,DCS[N]);
		}
	}
	var keys=["co_f","vtid","vtvs","vt_f_tlv"];
	for (var i=0;i<keys.length;i++){
		var key=keys[i];
		if (WT[key]){
			P+=this.dcsA("WT."+key,WT[key]);
			delete WT[key];
		}
	}
	for (N in WT){
		if (WT[N]&&(typeof WT[N]!="function")){
			P+=this.dcsA("WT."+N,WT[N]);
		}
	}
	for (N in DCSext){
		if (DCSext[N]&&(typeof DCSext[N]!="function")){
			if (i18n){
				WT.dep=(WT.dep.length==0)?N:(WT.dep+";"+N);
			}
			P+=this.dcsA(N,DCSext[N]);
		}
	}
	if (i18n&&(WT.dep.length>0)){
		P+=this.dcsA("WT.dep",WT.dep);
	}
	if (P.length>2048&&navigator.userAgent.indexOf('MSIE')>=0){
		P=P.substring(0,2040)+"&WT.tu=1";
	}
	this.dcsCreateImage(P);
	this.WT.ad="";
}
WebTrends.prototype.dcsDebug=function(){
	var t=this;
	var i=t.images[0].src;
	var q=i.indexOf("?");
	var r=i.substring(0,q).split("/");
	var m="<b>Protocol</b><br><code>"+r[0]+"<br></code>";
	m+="<b>Domain</b><br><code>"+r[2]+"<br></code>";
	m+="<b>Path</b><br><code>/"+r[3]+"/"+r[4]+"<br></code>";
	m+="<b>Query Params</b><code>"+i.substring(q+1).replace(/\&/g,"<br>")+"</code>";
	m+="<br><b>Cookies</b><br><code>"+document.cookie.replace(/\;/g,"<br>")+"</code>";
	if (t.w&&!t.w.closed){
		t.w.close();
	}
	t.w=void("","dcsDebug","width=500,height=650,scrollbars=yes,resizable=yes");
	t.w.void(m);
	t.w.focus();
}
WebTrends.prototype.dcsCollect=function(){
    if (this.enabled){
        this.dcsVar();
        this.dcsMeta();
        this.dcsAdv();
        this.dcsTag();

//clear the AutoRefresh cookie - custom
	if (typeof clearRefreshCookie == 'function') {
		clearRefreshCookie();
	}
	
	nielsenEventBeacon(); //Fire Nielsen Beacon only when WebTrends fires

    }
}

function clearRefreshCookie() {
	if (typeof Reuters.refresh != "undefined") {
		Reuters.refresh.clearRefreshCookie();
	}
}

function dcsMultiTrack(){
	if (typeof(_tag)!="undefined"){
		return(_tag.dcsMultiTrack());
	}
}

function dcsDebug(){
	if (typeof(_tag)!="undefined"){
		return(_tag.dcsDebug());
	}
}

Function.prototype.wtbind = function(obj){
	var method=this;
	var temp=function(){
		return method.apply(obj,arguments);
	};
	return temp;
}


// START of Dynamic Search code - convert.js 
function _f2void() { return; }

function _f2sleep(ms)
{
	var start = new Date();
	var now = new Date();
	while(now.getTime() - start.getTime() < ms)
	{
		now = new Date();
	}
}

function f2convert(cid, pids)
{
    try
    {   
        var img = new Image(1,1);
	var src = "//rd.clickshift.com/convert.gif?cid=" + escape(cid);
	try {
	  if (location.protocol == 'file:') {
		src = "httpdisabled:" + src;
	  }
	} catch (ex) { }
	
	src += "&pids=" + escape(pids);

        // conversion_id is optional third parameter
        if (f2convert.arguments.length > 2) {
            var conversion_id = f2convert.arguments[2];
            src += "&conversion_id=" + (conversion_id ? escape(conversion_id) : '');
        }
        if (f2convert.arguments.length > 3) {
            if (f2convert.arguments[3]) {
                src += "&pof=1";
            }
        }
        if (f2convert.arguments.length > 4) {
	    var cs_data = f2convert.arguments[4];
            src += "&cshift_ck=" + (cs_data ? escape(cs_data) : '');
        }
        if (f2convert.arguments.length > 5) {
	    var attribution = f2convert.arguments[5];
            src += "&attribution=" + (attribution ? escape(attribution) : '');
        }

	img.onloaddisabled = function () { _f2void(); }
	img.src = src;
    } catch (ex) {}

    try 
    {
        // activate custom code. Right now for ShopNBC only
        // possibly not supporting this anymore
        if (cid == 1000 || cid == 5031){
            java_script = '<script language="javascript">var f2Params = new Array(); f2Params["pids"]="' + pids + '";';
            if (f2convert.arguments.length > 2)
                java_script = java_script + 'f2Params["conversion_id"]="' + f2convert.arguments[2] + '";';
            if (f2convert.arguments.length > 3)
                java_script = java_script + 'f2Params["pof"]="' + f2convert.arguments[3] + '";';
            if (f2convert.arguments.length > 4)
                java_script = java_script + 'f2Params["cshift_ck"]="' + f2convert.arguments[4] + '";';
            if (f2convert.arguments.length > 5)
                java_script = java_script + 'f2Params["attribution"]="' + f2convert.arguments[5] + '";';
	    var base_url = '//rd.clickshift.com/js/';
	    try {
	      if (location.protocol == 'file:') {
	          base_url = "httpdisabled:" + base_url;
	      }
	    } catch (ex) { }
	    java_script = java_script + '</script><script language="javascript" src="' + base_url + cid + '_custom_convert.js"></script>';
	    void(java_script);
        }
    } catch(ex){}

    return true;
}

function f2_onclick_convert(cid, pids)
{
        var img = new Image(1,1);
	var src = "//rd.clickshift.com/convert.gif?cid=" + escape(cid);
	try {
	  if (location.protocol == 'file:') {
		src = "httpdisabled:" + src;
	  }
	} catch (ex) { }
	src += "&pids=" + escape(pids);

        // conversion_id is optional third parameter
        if (f2_onclick_convert.arguments.length > 2) {
            var conversion_id = f2_onclick_convert.arguments[2];
            src += "&conversion_id=" + (conversion_id ? escape(conversion_id) : '');
        }
        if (f2_onclick_convert.arguments.length > 3) {
            if (f2_onclick_convert.arguments[3]) {
                src += "&pof=1";
            }
        }
        if (f2_onclick_convert.arguments.length > 4) {
	    var cs_data = f2_onclick_convert.arguments[4];
            src += "&cshift_ck=" + (cs_data ? escape(cs_data) : '');
        }
        if (f2_onclick_convert.arguments.length > 5) {
	    var attribution = f2_onclick_convert.arguments[5];
            src += "&attribution=" + (attribution ? escape(attribution) : '');
        }
	src += "&rnd=" + escape(Math.round(1E10*Math.random()));

	img.onloaddisabled = function () { _f2void(); }
	img.src = src;

    try
    {   
	if(navigator.appName != "Microsoft Internet Explorer")
	{
		// Firefox will abort image loaddisableds if a navigation
		// event occurs, so we'll need to slow things down
		// a bit.
		_f2sleep(500);
	}

    } catch (ex) {}
    return true;
}

//END of Dynamic Search code - convert.js

//START of Dynamic Search code - DSFPC_NC.js (modified)
// This code is modified from the default non-commerce implementation -
// it is designed to automatically populate the DS conversion string with
// the value of WT.cg_n (along with arbitrary value of 2 and quantity of 1).
// The actual conversion call is included as well - it fires off whenever the 
// DSFPC is present.

// First party cookie implementation for use on a site using WebTrends Analytics JS Tag, but 
// without commerce parameters.
// Apply this javascript to all page on the site (will work on just landing pages).
// Change @@CUSTID@@ in the last line to reflect the correct account number.

// updated 090308 to change WT_DSAI cookie to session expiration - eag/wt

function DcsDynamicSearch(cid){
	// private members
	var cname="WT_DSAI";
	var wt=(typeof(WT)=="object")?WT:{};

	// private methods
	function setAdInfo(){
		var value=getQueryParam("cshift_ck");
		if (value.length>0){
			var cur=new Date();
			var exp=new Date(cur.getTime()+86400000);
			document.cookie=cname+"="+value+"; path=/";
		}
	}
	function getQueryParam(key){
		var qry=window.location.search.substring(1);
		if (qry.length>0){
			var params=qry.split("&");
			var count=params.length;
			for (var i=0;i<count;i++){
				var p=params[i].split("=");
				if (p[0]==key){
					return p[1];
				}
			}
		}
		return "";
	}

	// privileged methods
	this.getClientId=function(){
		return cid;
	};


	this.getProductInfo=function(){
		var info="";
		try{
			// HACK: create new WebTrends just to get wt meta tag for product information
			var stuff = new WebTrends();   
			stuff.dcsMeta();
			wt = stuff.WT;

			cg=wt.cg_n.replace(/\s/g,"_"); //replace spaces with underscores
			var id=cg.split(";");
			for (var i=0;i<id.length;i++){
				info+=(i?",":"")+id[i]+"#2*1"; // change the '2' to adjust the value per conversion in cents (currently $.02)
			}
		}
		catch(e){
		}
		return info;
	};

	this.getAdInfo=function(){
    // HACK: create new WebTrends just to get cookie
    var stuff = new WebTrends();
		return stuff.dcsGetCookie(cname)||"";
	};
	this.getIsNew=function(){
		return 1;
	};
	// read query parameter, set cookie
	setAdInfo();
}

var dcsDS=new DcsDynamicSearch(5358);
if (dcsDS.getAdInfo()) {
 f2convert(dcsDS.getClientId(),dcsDS.getProductInfo(),'',dcsDS.getIsNew(),dcsDS.getAdInfo());
}


//Start Nielsen Beacon
function nielsenEventBeacon() {
    var d = new Image(1, 1);
    d.onerror = d.onloaddisabled = function () {
      d.onerror = d.onloaddisabled = null;
    };
    d.src = '../imr.gif';
  }

//End Nielsen Beacon


// Start Quantcast Beacon
function dscQuantcast(wtTag)
{

	var nv = "";
  /*
	if (typeof(DCSext)=="undefined" || typeof(WT)=="undefined"){
	  return "";
	}
  */
  if (wtTag) {
	  nv+=(typeof(wtTag.DCSext.VBC)=="string" && wtTag.DCSext.VBC.length > 0) ? escape(wtTag.DCSext.VBC) + ",":"";
	  nv+=(typeof(wtTag.DCSext.rCountry)=="string" && wtTag.DCSext.rCountry.length > 0) ? escape(wtTag.DCSext.rCountry):"";
	  nv+=(typeof(wtTag.DCSext.rChannel)=="string" && wtTag.DCSext.rChannel.length > 0) ? "." + escape(wtTag.DCSext.rChannel):"";
	  nv+=(typeof(wtTag.WT.cg_n)=="string" && wtTag.WT.cg_n.length > 0) ? "." + escape(wtTag.WT.cg_n):"";
	  nv+=(typeof(wtTag.WT.cg_s)=="string" && wtTag.WT.cg_s.length > 0) ? "." + escape(wtTag.WT.cg_s):"";
  }

  //Do not fire on secure pages
//  if (window.location.protocol.indexOf('https:')!=0){
//  	_qoptions={
//  	qacct:"p-de1vtwp0SwFFs",
//  	labels:nv
//  	};

//  	var script = document.createElement('script');
//  	script.type = 'text/javascript';
//  	script.src = 'http://edge.quantserve.com/quant.js';
//  	document.getElementsByTagName('head')[0].appendChild(script);
//  }
}
// End Quantcast Beacon=======
