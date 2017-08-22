/* _GlobalPrefix_ */
/* _Module_:emc */
try{
s_G("emc");
s_F("emc");s_H();
}catch(e){_DumpException(e)}
/* _Module_:emd */
try{
s_G("emd");
s_F("emd");s_H();
}catch(e){_DumpException(e)}
/* _Module_:eme */
try{
s_G("eme");
s_F("eme");s_H();
}catch(e){_DumpException(e)}
/* _Module_:emf */
try{
s_G("emf");
s_F("emf");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy1m */
try{
var s_fka,s_gka,s_9i,s_hka,s_$i,s_ika={};s_G("sy1m");var s_aj=function(a){s_P(this,a,0,2,null,null)};s_h(s_aj,s_O);s_aj.prototype.jh=function(){return s_Q(this,1)};var s_jka={};var s_bj=s_d,s_cj=s_3c(0),s_dj=s_3c(0),s_ej=s_3c(0),s_kka=function(a,b){window.scrollBy(a,b)},s_fj=function(a,b){window.scrollTo(a,b)},s_gj=s_4c,s_hj=s_4c,s_lka=s_d,s_mka=s_d,s_nka=s_d,s_ij=function(){if(document.body){var a=s_0d(document.body).top;s_ij=s_3c(a);return a}return 0},s_oka=s_eb.match(/ GSA\/([.\d]+)/),s_jj=s_oka?s_oka[1]:"";s_hka=(s_$i=!!s_oka)&&0<=s_Ha(s_jj,"4");s_9i=s_$i&&0<=s_Ha(s_jj,"5.2");s_gka=s_$i&&0<=s_Ha(s_jj,"5.7");s_fka=s_$i&&0<=s_Ha(s_jj,"4.3")&&!(0<=s_Ha(s_jj,"4.5"));

s_F("sy1m");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy21 */
try{
s_G("sy21");var s_kj={Woa:{},Xya:function(a,b,c){var d=c?1:0;if(!s_ja(0!=d?"velour.loadJsInterfaceWithFlags":"velour.loadJsInterface"))return s_tf("No Velour.");a in s_kj.Woa||(s_kj.Woa[a]={});c=s_kj.Woa[a];if(c[b])return c[b];var e=s_wf(),f=0!=d?window.velour.loadJsInterfaceWithFlags(a,b,d):window.velour.loadJsInterface(a,b),d="google.velourCb."+a+"."+b;s_sa(d,{onSuccess:function(){e.resolve(f.getResult())},onFailure:function(){e.reject(a+"."+b+" failed to load: "+f.getError().getMessage())}});f.setCallback(d);
return c[b]=e.$},call:function(a,b,c,d){for(var e=[a,b,!1],f=2;f<arguments.length;f++)e.push(arguments[f]);return s_kj.MTa.apply(s_kj,e)},MTa:function(a,b,c,d,e){for(var f=s_kj.Xya(a,b,c),g=[],k=4;k<arguments.length;k++)g.push(arguments[k]);return f.then(function(a){return a[d]?a[d].apply(a,g):s_tf(d+" not found")})}};

s_F("sy21");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syat */
try{
s_G("syat");var s_wbb,s_xbb=!1,s_zbb=function(){var a=s_ybb;s_pd(window,"beforeunload",function(){s_xbb||s_wbb.set("isn",a)})};if(s_$i){s_wbb=s_$g("s","isn");var s_ybb,s_Abb,s_Bbb,s_Cbb=s_Sh("isn").split(":");s_Bbb=s_Cbb[0];s_Abb=s_Cbb[1];(s_ybb=s_Bbb?s_ub(s_Abb,s_Bbb):null)&&s_zbb()};

s_F("syat");s_H();
}catch(e){_DumpException(e)}
/* _Module_:aa */
try{
s_G("aa");
s_F("aa");s_H();
}catch(e){_DumpException(e)}
/* _Module_:abd */
try{
s_G("abd");var s_7y=function(a){for(var b="",c=21,d=0;d<a.length;d++)3!=d%4&&(b+=String.fromCharCode(a[d]^c),c++);return b},s_34a=s_7y([97,119,115,111,107]),s_44a=s_7y([97,119,115,111,107,123]),s_54a=s_7y([118,115,121,107,108,124,104,119,68,127,114,105,114]),s_64a=s_7y([101,126,118,102,118,125,118,109,126]),s_74a=s_7y([116,116,115,108]),s_84a=s_7y([113,115,99,107]),s_94a=s_7y([113,115,117,107]),s_$4a=s_7y([58,127,122,103,121,126,127,98,104,51,109,124,118,123,15,76,81,90,13,95,67,76,64,118]),s_a5a=function(a){var b=
0,c;for(c in a)if(a[c].e)if(a[c].b)b++;else return!1;return 0<b},s_b5a=function(a){a=a||{};var b={};b[s_84a]={e:!!a[s_84a],b:!s_4ka(s_34a)};b[s_94a]={e:!!a[s_94a],b:!s_4ka(s_44a)};return b},s_c5a=function(a){var b=[],c;for(c in a)a[c].e&&b.push(c+":"+(a[c].b?"1":"0"));return b.join(",")},s_d5a=function(a,b){a=String(a);b&&(a+=","+b);google.log(s_64a,a)},s_e5a=function(a,b,c){c=null!=c?c:2;if(1>c)s_d5a(7,b);else{var d=new Image;d.onerror=s_f(s_e5a,a,b,c-1);d.src=a}}; s_nf("abd",{init:function(a){a=a||{};if(a[s_74a]&&s_4ka(s_54a)){a=s_b5a(a);var b=s_c5a(a);s_a5a(a)?s_d5a(1,"0,"+b):s_d5a(0,b);s_I.Cb(function(){s_e5a(s_$4a,"aa")})}}});

s_F("abd");s_H();
}catch(e){_DumpException(e)}
/* _Module_:aspn */
try{
s_G("aspn");var s_Fnb=function(a){var b=a.getAttribute("data-url");window.open(b,"_blank","menubar=no,left="+((window.screenLeft||window.screenX||0)+Math.max(0,((window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0)-445)/2))+",top="+((window.screenTop||window.screenY||0)+Math.max(0,((window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0)-665)/2))+",width=445,height=665");(a=a.getAttribute("data-ved"))&&google.log("","&ved="+a)}; s_nf("aspn",{init:function(){s_4h("aspn",{ota:s_Fnb},!0)},dispose:function(){s_6h("aspn",["ota"])}});


s_F("aspn");s_H();
}catch(e){_DumpException(e)}
/* _Module_:emk */
try{
var s_pra=function(a){var b,c=a.parentNode;if(c&&11!=c.nodeType)if(a.removeNode)a.removeNode(!1);else{for(;b=a.firstChild;)c.insertBefore(b,a);s_o(a)}};s_G("emk");
s_F("emk");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy3r */
try{
s_G("sy3r");
s_F("sy3r");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy3q */
try{
var s_wqa=function(a,b){return a.left<=b.left+b.width&&b.left<=a.left+a.width&&a.top<=b.top+b.height&&b.top<=a.top+a.height},s_xqa=function(a,b,c){var d=0;return function(e){s_b.clearTimeout(d);var f=arguments;d=s_b.setTimeout(function(){a.apply(c,f)},b)}};s_G("sy3q");
var s_fl=function(a){s_ud.call(this);this.headers=new s_Lf;this.uma=a||null;this.kv=!1;this.hma=this.Ke=null;this.Eha="";this.IK=0;this.FQ="";this.zQ=this.Xxa=this.Zga=this.Qoa=!1;this.x9=0;this.Ly=null;this.$R="";this.pDa=this.Bw=!1};s_h(s_fl,s_ud);s_fl.prototype.wc=null;var s_yqa=/^https?$/i,s_zqa=["POST","PUT"],s_Aqa=[],s_gl=function(a,b,c,d,e,f,g){var k=new s_fl;s_Aqa.push(k);b&&k.listen("complete",b);k.lj("ready",k.OSa);f&&k.sS(f);g&&(k.Bw=g);k.send(a,c,d,e);return k};
s_fl.prototype.OSa=function(){this.dispose();s_2a(s_Aqa,this)};s_fl.prototype.sS=function(a){this.x9=Math.max(0,a)};s_fl.prototype.OG=function(a){this.$R=a};
s_fl.prototype.send=function(a,b,c,d){if(this.Ke)throw Error("p`"+this.Eha+"`"+a);b=b?b.toUpperCase():"GET";this.Eha=a;this.FQ="";this.IK=0;this.Qoa=!1;this.kv=!0;this.Ke=this.koa();this.hma=this.uma?this.uma.ka():s_3f.ha();this.Ke.onreadystatechange=s_e(this.aMa,this);try{this.Xxa=!0,this.Ke.open(b,String(a),!0),this.Xxa=!1}catch(f){this.Ni(5,f);return}a=c||"";var e=this.headers.clone();d&&s_nea(d,function(a,b){e.set(b,a)});d=s_Xa(e.Pf(),s_Bqa);c=s_b.FormData&&a instanceof s_b.FormData;!s_Ya(s_zqa,
b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.Ke.setRequestHeader(b,a)},this);this.$R&&(this.Ke.responseType=this.$R);"withCredentials"in this.Ke&&this.Ke.withCredentials!==this.Bw&&(this.Ke.withCredentials=this.Bw);try{s_Cqa(this),0<this.x9&&((this.pDa=s_Dqa(this.Ke))?(this.Ke.timeout=this.x9,this.Ke.ontimeout=s_e(this.Ij,this)):this.Ly=s_7f(this.Ij,this.x9,this)),this.Zga=!0,this.Ke.send(a),this.Zga=!1}catch(f){this.Ni(5,f)}};
var s_Dqa=function(a){return s_Mb&&s_Xb(9)&&s_ia(a.timeout)&&s_c(a.ontimeout)},s_Bqa=function(a){return s_Mea("Content-Type",a)};s_fl.prototype.koa=function(){return this.uma?this.uma.$():s_3f()};s_fl.prototype.Ij=function(){"undefined"!=typeof s_iaa&&this.Ke&&(this.FQ="Timed out after "+this.x9+"ms, aborting",this.IK=8,this.dispatchEvent("timeout"),this.abort(8))};s_fl.prototype.Ni=function(a,b){this.kv=!1;this.Ke&&(this.zQ=!0,this.Ke.abort(),this.zQ=!1);this.FQ=b;this.IK=a;s_Eqa(this);s_Fqa(this)};
var s_Eqa=function(a){a.Qoa||(a.Qoa=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};s_fl.prototype.abort=function(a){this.Ke&&this.kv&&(this.kv=!1,this.zQ=!0,this.Ke.abort(),this.zQ=!1,this.IK=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),s_Fqa(this))};s_fl.prototype.Ha=function(){this.Ke&&(this.kv&&(this.kv=!1,this.zQ=!0,this.Ke.abort(),this.zQ=!1),s_Fqa(this,!0));s_fl.Ba.Ha.call(this)};
s_fl.prototype.aMa=function(){this.isDisposed()||(this.Xxa||this.Zga||this.zQ?s_Gqa(this):this.h_a())};s_fl.prototype.h_a=function(){s_Gqa(this)};
var s_Gqa=function(a){if(a.kv&&"undefined"!=typeof s_iaa&&(!a.hma[1]||4!=a.UJ()||2!=a.getStatus()))if(a.Zga&&4==a.UJ())s_7f(a.aMa,0,a);else if(a.dispatchEvent("readystatechange"),4==a.UJ()){a.kv=!1;try{s_hl(a)?(a.dispatchEvent("complete"),a.dispatchEvent("success")):(a.IK=6,a.FQ=a.Kta()+" ["+a.getStatus()+"]",s_Eqa(a))}finally{s_Fqa(a)}}},s_Fqa=function(a,b){if(a.Ke){s_Cqa(a);var c=a.Ke,d=a.hma[0]?s_d:null;a.Ke=null;a.hma=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},s_Cqa=
function(a){a.Ke&&a.pDa&&(a.Ke.ontimeout=null);s_ia(a.Ly)&&(s_8f(a.Ly),a.Ly=null)};s_fl.prototype.dd=function(){return!!this.Ke};var s_hl=function(a){var b=a.getStatus(),c;if(!(c=s_Bja(b))){if(b=0===b)a=s_Aja(String(a.Eha)),b=!s_yqa.test(a);c=b}return c};s_fl.prototype.UJ=function(){return this.Ke?this.Ke.readyState:0};s_fl.prototype.getStatus=function(){try{return 2<this.UJ()?this.Ke.status:-1}catch(a){return-1}};s_fl.prototype.Kta=function(){try{return 2<this.UJ()?this.Ke.statusText:""}catch(a){return""}};
s_fl.prototype.Hm=function(){try{return this.Ke?this.Ke.responseText:""}catch(a){return""}};var s_il=function(a,b){if(a.Ke)return a=a.Ke.responseText,b&&0==a.indexOf(b)&&(a=a.substring(b.length)),s_cf(a)};s_fl.prototype.getResponse=function(){try{if(!this.Ke)return null;if("response"in this.Ke)return this.Ke.response;switch(this.$R){case "":case "text":return this.Ke.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.Ke)return this.Ke.mozResponseArrayBuffer}return null}catch(a){return null}};
s_fl.prototype.getResponseHeader=function(a){if(this.Ke&&4==this.UJ())return a=this.Ke.getResponseHeader(a),null===a?void 0:a};s_fl.prototype.getAllResponseHeaders=function(){return this.Ke&&4==this.UJ()?this.Ke.getAllResponseHeaders():""};var s_jl=function(a){return s_ha(a.FQ)?a.FQ:String(a.FQ)};

s_F("sy3q");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy3p */
try{
var s_Hqa=function(){for(var a=new Map,b=s_1ka.getParams(!1),c=s_da(b.keys()),d=c.next();!d.done;d=c.next())d=d.value,s_eh(d)&&a.set(d,b.get(d)||"");return a},s_Iqa=function(a){return Object.keys(a).map(function(b){return encodeURIComponent(b)+"."+a[b]}).join(",")},s_Jqa=function(){var a=google.pmc;return a.async?a.async.slm:!1},s_Lqa=function(a,b,c,d,e){var f=new Map;if(b){var g=new s_Ve;s_mg(g,b);(b=s_Ye(g))&&f.set("vet",b)}d?f.set("ved",d):f.set("ei",c||google.kEI);e&&f.set("lei",e);var k=s_3j().getParams();
s_Kfa.forEach(function(a){var b=k.get(a);b&&f.set(a,b)});f=s_Kqa(f);f.set("yv","2");a.forEach(function(a,b){f.set(b,a)});return f},s_Nqa=function(a,b,c){if("POST"==a){a=new Map;(c=s_Mqa(c))&&a.set("async",b+","+c);var d=[];a.forEach(function(a,b){return d.push(b+"="+a)});return d.join("&")}},s_Kqa=function(a,b){a=void 0===a?new Map:a;b=void 0===b?!1:b;var c=s_Hqa(),d=new Set(s_Nfa);b||s_Ofa.forEach(function(a){d.add(a)});c.forEach(function(b,c){a&&d.has(c)&&a.set(c,b)});return a};s_G("sy3p");
var s_Oqa=function(a,b,c){a=Error.call(this,a);this.message=a.message;"stack"in a&&(this.stack=a.stack);this.details=c;this.details.t=b};s_a(s_Oqa,Error);
var s_Pqa=function(a,b,c,d){c=c.getStatus();d.s=c;a=new s_Oqa(c?a:"Async non-request error",b,d);0==c&&s_me(a,a.details,!0);return a},s_Qqa=function(a,b){var c={},c=(c.lec=b.IK,c.le=s_jl(b),c);return s_Pqa("Async request error",a,b,c)},s_Rqa=function(a,b){var c=void 0===b?{}:b;b=c.request;var d=c.EGa,c=c.response,e={};d&&(e.e=d);null!=c&&(e.r=c);return b?s_Pqa("Async response error",a,b,e):new s_Oqa("Async response error",a,e)};
var s_Sqa=function(){this.ka=this.$=0},s_Tqa=function(){var a=window.performance;return a&&a.now?a.now():s_g()};s_Sqa.prototype.start=function(){this.$=this.$||s_Tqa()};s_Sqa.prototype.pause=function(){this.ka=this.$?this.ka+s_Tqa()-this.$:this.ka;this.$=0};s_Sqa.prototype.reset=function(){this.ka=this.$=0};
var s_Uqa=function(a,b,c){a=void 0===a?"web":a;b=void 0===b?"csi":b;var d=google.kEI;c=s_Zh(new s_Yh(c),"ei",d);a=s_Zh(c,"s",a);s_Zh(a,"atyp",b);this.$=a;this.ka={};this.ha=new s_Sqa};s_Uqa.prototype.start=function(){this.ha.start();return this};var s_Vqa=function(a,b){var c=a.ha;c=Math.round(c.ka+(c.$?s_Tqa()-c.$:0));a.ka[b]=c};s_Uqa.prototype.log=function(){s_Zh(this.$,"rt",s_Iqa(this.ka)).log();return this};
var s_Wqa=function(){return""};var s_Mqa=function(a){var b=[];a=s_da(a);for(var c=a.next();!c.done;c=a.next()){var d=s_da(c.value),c=d.next().value,d=d.next().value;b.push(encodeURIComponent(String(c))+":"+encodeURIComponent(String(d)))}return b.join(",")};var s_Xqa=function(a,b){b.forEach(function(b,d){a.set(d,b)});b.clear()};s_=s_Xqa.prototype;s_.cQ=function(a){return"/"==a?null:"s"};s_.vna=function(a){return this.cQ(a)};s_.MDa=function(){};s_.qoa=function(){};s_.Csa=function(){return{tBa:[],Bxa:[]}};var s_Yqa={},s_Zqa=(s_Yqa[""]="/async",s_Yqa.search="/search",s_Yqa.s="/s",s_Yqa),s__qa=function(a,b,c,d,e,f,g,k){d=void 0===d?"":d;c=s_Lqa(c,void 0===e?"":e,void 0===f?"":f,void 0===g?"":g,void 0===k?"":k);e=s_Zqa[d];""==d?e+="/"+a:(c.set("asearch",a),"s"==d&&c.set("sns","1"));a=new s_gh(s_Wqa(c)+e,s_Xqa);s_uga(a,c,!0);a=s_hh(a);(b=s_Mqa(b))&&(a=a+"&async="+b);return a};
var s_0qa=function(a,b,c,d,e){var f=void 0===e?{}:e;e=void 0===f.method?"GET":f.method;var g=void 0===f.WY?"":f.WY,k=f.bq,l=f.aOa,m=f.Ri,n=f.dPa,ba=f.headers,f=void 0===f.withCredentials?!1:f.withCredentials,t=s_wf(),w=new s_fl;w.listen("complete",function(b){b=b.target;if(s_hl(b)){s_Vqa(d,"st");var c=b.Hm();d.ka.bs=c.length;s_Jqa()&&d.log();c||t.reject(s_Rqa(a,{request:b,response:c}));t.resolve(c)}else s_Vqa(d,"ft"),s_Jqa()&&d.log(),t.reject(s_Qqa(a,b))});var B=s_yf(t.$,function(a){if(a instanceof s_zf)w.abort();else throw a;});c=s__qa(a,"POST"==e?new Map:b,c,g,k,l,m,n);s_Vqa(d,"fr");w.Bw=f;w.send(c,e,s_Nqa(e,a,b),ba);return B};

s_F("sy3p");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy3s */
try{
var s_1qa=function(a){var b=s_mea(a);if("undefined"==typeof b)throw Error("Bd");var c=new s_xg(null,0,void 0);a=s_Uf(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];s_na(f)?s_mfa(c,e,f):c.add(e,f)}return c};s_G("sy3s");var s_2qa=function(a){var b=new s_Uqa("csi");s_Zh(b.$,"astyp",a);return b},s_3qa=!1,s_4qa=function(a){return!a||a instanceof Map?new Map(a):new Map(Object.entries(a))},s_kl=function(a,b,c,d,e,f,g,k,l,m){l=void 0===l?{}:l;var n=s_2qa(a);n.start();b=s_4qa(b);l=s_4qa(l);g&&l.set("dfsl","1");return s_5qa(a,b,l,n,c,"",f,d,m,e,k)},s_6qa=function(a,b,c,d,e,f,g,k){var l=s_2qa(a);l.start();b=s_4qa(b);d=s_4qa(d);return s_5qa(a,b,d,l,"jspb",k?"s":"search",c,e,void 0,f,g)},s_5qa=function(a,b,c,d,e,f,g,k,l,m,
n){b.set("_fmt",e);null!=g&&c.set("q",g);return s_0qa(a,b,c,d,{WY:f,bq:k,aOa:l,Ri:m,dPa:n,headers:void 0,withCredentials:s_3qa}).then(function(a){s_ua(a,")]}'\n")&&(a=a.substr(5));try{var b=JSON.parse(a)}catch(B){return s_tf(B)}if(s_qa(b)){a:{for(var c in b){b=b[c];break a}b=void 0}c=b.__err__;if(s_c(c))return s_tf(c)}return"jspb"!=e||b instanceof Array?s_E(b):s_tf(void 0)})};

s_F("sy3s");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy3t */
try{
s_G("sy3t");var s_7qa=!1,s_8qa=!1,s_ll={preload:"yp",filled:"yf",inlined:"yi"},s_9qa=s_sb(s_ll),s_$qa={loading:"yl",error:"ye"},s_ara=s_sb(s_$qa),s_bra={preload:"asyncReset",filled:"asyncFilled",loading:"asyncLoading",error:"asyncError"},s_cra=function(){};s_h(s_cra,Error);var s_ml=function(a){this.element=a;this.type=s_B(a,"asyncType")||"";if(!this.type)throw a=new s_cra,s_le(a),a;};s_ml.prototype.getState=function(){var a=s_re(this.element);return s_Xa(s_Ra(a,function(a){return s_9qa[a]}),s_7c)};
s_ml.prototype.setState=function(a){s_dra(this,a);"filled"==a&&s_i(this.element.querySelectorAll("."+s_ll.inlined),function(a){s_dra(new s_ml(a),"filled")})};
var s_nl=function(a,b){s_te(a.element,s_kb(s_$qa));if(""!=b){s_y(a.element,s_$qa[b]);var c=a.getState();s_Vh(a.element,s_bra[b],{state:c,Z7:b})}},s_dra=function(a,b){s_te(a.element,s_kb(s_ll));s_y(a.element,s_ll[b]);s_nl(a,"");s_Vh(a.element,s_bra[b],{state:b,Z7:""})},s_era=function(a){return(a=s_B(a.element,"asyncContextRequired"))?a.split(","):[]},s_gra=function(a,b,c,d,e){this.$=c||s_ol();s_Vqa(this.$,"uc");s_Zh(this.$.$,"astyp",a.type);this.target=a;this.trigger=d;b=s_fra(b);c=s_era(this.target);
c=new Set(c);for(d=this.trigger||this.target.element;d&&d.parentElement&&c.size;){var f=s_B(d,"asyncContext");if(f)for(var f=s_da(f.split(";")),g=f.next();!g.done;g=f.next()){var k=g.value,g=k.split(":");2==g.length?(k=s_Aa(g[0]),g=s_Aa(g[1]),c["delete"](k)&&!b.has(k)&&b.set(k,g)):s_me(Error("W"),{cxt:k})}d=d.parentElement}c=this.target.element;c.id!=this.target.type&&b.set("_id",c.id);(c=s_B(this.target.element,"asyncToken"))&&b.set("_xsrf",c);b.set("_pms",s_Ef(google.xjsu,"k").match(/xjs\.(\w+)\./)[1]);
this.context=b;this.ka=s_fra(e);this.Mr="stateful"==s_B(a.element,"asyncMethod")||s_B(a.element,"asyncToken")?"POST":"GET";this.WY="search"==s_B(a.element,"asyncRclass")?"search":""},s_hra=function(a){for(var b=new Set(s_era(a.target)),c=s_da([].concat(s_ea(a.context.keys()),s_ea(a.ka.keys()))),d=c.next();!d.done;d=c.next())b["delete"](d.value);return b.size?(b=Array.from(b).join(","),s_me(Error("U"),{type:a.target.type,cxt:b}),!1):!0};
s_gra.prototype.fetch=function(){var a=this;return s_hra(this)?s_xf(s_ira(this,this.$),function(){s_8qa&&a.$.log()}):s_tf(void 0)};
var s_ira=function(a,b){var c=new Map([].concat(s_ea(a.context))),d=new Map([].concat(s_ea(a.ka)));""!=a.WY&&(s_jra(c,d,"start"),s_jra(c,d,"q"));return s_0qa(a.target.type,c,d,b,{method:a.Mr,WY:a.WY,bq:s_Ue(a.target.element),aOa:google.getEI(a.target.element),Ri:a.trigger?s_Ue(a.trigger):void 0,dPa:a.trigger?google.getLEI(a.trigger):void 0,withCredentials:s_7qa}).then(function(b){var c="\n\n";s_Ca(b,c)||(c="\n");for(var d=s_Qa(b.split(c),s_7c),c=[],e=[],d=s_da(d),l=d.next();!l.done;l=d.next()){l=
l.value;try{var m=JSON.parse(l),n=m.__err__;if(s_c(n))return s_tf(s_Rqa(a.target.type,{EGa:n,response:b}));var ba=s_2la(m);ba&&e.push(ba)}catch(t){if(s_3j().getParams().get("deb"))c.push(t);else return s_tf(s_Rqa(a.target.type,{EGa:t.message,response:b}))}}return s_E(e)})},s_jra=function(a,b,c){a.has(c)&&(b.has(c)||b.set(c,String(a.get(c))),a["delete"](c))},s_fra=function(a){return!a||a instanceof Map?new Map(a):new Map(Object.entries(a))},s_ol=function(){return(new s_Uqa("async")).start()};

s_F("sy3t");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy3u */
try{
var s_kra=function(a){a=s_re(a.element);return s_Xa(s_Ra(a,function(a){return s_ara[a]}),s_7c)||""},s_pl=function(a){var b=s_B(a,"asyncTrigger");if(b){if(a=s_j(b))return new s_ml(a);a=new s_cra;s_le(a);throw a;}return new s_ml(a)},s_lra=function(){s_i(document.querySelectorAll("."+s_ll.inlined),function(a){s_dra(new s_ml(a),"filled")})},s_mra=function(a,b,c,d,e){var f=d;s_Rc(a)?(d=s_pl(a),s_B(a,"asyncTrigger")&&(f=a)):d=a;return new s_gra(d,c||{},b,f,e)};s_G("sy3u");
var s_ql=function(a,b){var c=s_ol(),d=s_pl(a);return"preload"!=d.getState()||"loading"==s_kra(d)?s_E(void 0):s_nra(a,c,b)},s_rl=function(a,b,c,d){var e=s_ol();return s_nra(a,e,b,c,d)},s_nra=function(a,b,c,d,e){var f=s_mra(a,b,c,d,e);s_nl(f.target,"loading");return s_yf(f.fetch().then(function(a){s_i(a,function(a){a.apply()});f.target.setState("filled")}),function(a){s_nl(f.target,"error");throw a;})},s_sl=function(a,b,c,d){var e=s_ol(),f=s_mra(a,e,b,c,d);s_nl(f.target,"loading");return s_yf(f.fetch().then(function(a){s_i(a,
function(a){(new s_hk(a.Pl,s_mk.Tq())).append(a)});f.target.setState("filled")}),function(a){s_nl(f.target,"error");throw a;})},s_tl=function(a,b,c,d){var e=s_ol();return s_mra(a,e,b,c,d).fetch()},s_ul=function(a){var b=s_ol();a=s_mra(a,b);s_Hc(a.target.element);s_Si(a.target.element.id);s_Ala.VP();a.target.setState("preload")};s_of("async",{init:function(a){a&&(s_8qa=a.slm);s_4h("async",{u:function(a){s_rl(a)},uo:function(a){s_ql(a)},r:s_ul});s_lra()}});

s_F("sy3u");s_H();
}catch(e){_DumpException(e)}
/* _Module_:async */
try{
s_G("async");


s_F("async");s_H();
}catch(e){_DumpException(e)}
/* _Module_:em5 */
try{
s_G("em5");
s_F("em5");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy8 */
try{
s_G("sy8");var s_$f=function(a,b,c,d){s_q.call(this);s_ee(this);this.ka=new s_6f(166);this.ka.bI=s_e(this.Ea,this);this.$(this.ka);this.ha=a;this.$(this.ha);this.Wa=b;this.ma=d;this.qa=c};s_h(s_$f,s_q);s_$f.prototype.start=function(){this.ka.start();this.ha.start(this.ka);this.Mb.start(this.Wa)};
s_$f.prototype.Ea=function(){var a=this.ha,b=this.ka;a.ka=s_g();a.ha=a.ka-a.ma-b.ka;a.ma=a.ka;a=this.ha;1E3<a.ka-a.qa&&66.4>a.ha?(this.ka.stop(),this.ma.call(),s_dd(this)):66.4<=this.ha.ha&&(this.ka.stop(),this.qa.call(),s_dd(this))};var s_ag=function(a){this.O_=a};s_$d(s_ag,s_$f);s_ag.prototype.start=function(a){s_ye(a,!0)};s_ce(s_ag.prototype.start);var s_Pea=function(){this.qa=this.ha=this.ma=this.ka=0};s_h(s_Pea,s_q);s_Pea.prototype.start=function(){this.qa=this.ma=this.ka=s_g()}; var s_Qea=function(a,b,c){(new s_$f(new s_Pea,a,b,c)).start()};

s_F("sy8");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sya */
try{
s_G("sya");var s_rfa=function(a,b,c){if(!b||!c&&!a)return 4;var d=window.agsa_ext;if(!s_c(d))return 1;if(c){if(!s_c(d.canLaunchApp))return 2;if(!d.canLaunchApp(b))return 3}else{if(!s_c(d.canUriBeHandledByPackage))return 2;if(!d.canUriBeHandledByPackage(a||"",b))return 3}return 0};

s_F("sya");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syw */
try{
s_G("syw");var s_Uha=function(a,b){var c=s_3f();if(s_Tha(b))c.open("GET",a,!1),c.send(),s_ze(b);else{var d=s_I.setTimeout(function(){c&&c.abort();s_ze(b)},2E3);c.onreadystatechange=function(){4==c.readyState&&(s_I.clearTimeout(d),s_ze(b))};c.open("GET",a,!0);c.send(null)}},s_7h=function(a,b,c,d,e,f,g){a="/gen_204?sa=X&ei="+google.getEI(a)+"&ved="+encodeURIComponent(b)+(e?"&lei="+encodeURIComponent(e):"")+(d?"&url="+encodeURIComponent(d):"")+(f?"&title="+encodeURIComponent(f):"");void 0!=g&&(a=a+"&ct=clpit&cad="+ encodeURIComponent(f+":"+(g?"1":"0")));s_Uha(a,c)},s_Tha=function(a){return s_Fb()&&s_Gf()&&!s_Ib("2.4")&&0!=a.indexOf("tel:")};s_sa("google.bct",s_Uha);s_sa("google.vbct",s_7h);

s_F("syw");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4i */
try{
var s_Vta=function(a){return s_Bc().matchMedia("(min-resolution: "+a+"dppx),(min--moz-device-pixel-ratio: "+a+"),(min-resolution: "+96*a+"dpi)").matches?a:0},s_Wta=function(a){a=a.style;a.position="relative";s_Mb&&!s_Xb("8")?(a.zoom="1",a.display="inline"):a.display="inline-block"},s_Tm=function(){var a=s_Bc();return s_c(a.devicePixelRatio)?a.devicePixelRatio:a.matchMedia?s_Vta(3)||s_Vta(2)||s_Vta(1.5)||s_Vta(1)||.75:1};s_G("sy4i");
var s_Xta,s_Yta,s_Um=function(){var a=s_Yi(0,!0),b=s_Yi(1,!0);return a<b},s_Zta=function(){this.$=!!(window.orientation%180)},s__ta=function(){var a=s_Sh("client"),b=s_Sh("source");return!(!/^mobilesearchapp/.test(a)&&!/^mobilesearchapp/.test(b))},s_Vm=[],s_0ta=!1,s_Wm=function(a){if(window.addEventListener){for(var b=0;b<s_Vm.length;b++)if(s_Vm[b]==a)return;s_Vm.push(a);s_0ta||(s_Xta=window.orientation,s_Yta=window.innerWidth,"orientation"in window&&!s__ta()&&window.addEventListener("orientationchange",
s_1ta,!1),window.addEventListener("resize",s__ta()?s_2ta:s_1ta,!1),s_0ta=!0)}},s_Xm=function(a){for(var b=0;b<s_Vm.length;b++)if(s_Vm[b]==a){s_Vm.splice(b,1);break}},s_1ta=function(){if(!("orientation"in window&&!s__ta()&&window.orientation==s_Xta||window.innerWidth==s_Yta)){var a=new s_Zta;s_Xta=window.orientation;s_Yta=window.innerWidth;for(var b=0;b<s_Vm.length;b++)s_rf(s_f(s_Vm[b],a))}},s_2ta=function(){window.setTimeout(s_1ta,10)};

s_F("sy4i");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7p */
try{
s_G("sy7p");
s_F("sy7p");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sybt */
try{
s_G("sybt");var s_MC,s_Feb=0,s_NC=function(a,b,c){this.ka=a;this.Qc=b;this.ma=c};s_NC.prototype.$=!1;s_NC.prototype.ha=0;s_NC.prototype.get=function(){if((!this.$||this.ha<s_Feb)&&s_MC&&this.ka+"-config"in s_MC){var a=s_MC[this.ka+"-config"][this.Qc],b=s_Feb;this.Jc=void 0!==a?a:this.ma;this.$=!0;this.ha=b}if(!this.$)throw Error("Qb");return this.Jc};

s_F("sybt");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sybv */
try{
s_G("sybv");var s_OC=function(a){s_P(this,a,0,-1,null,null)};s_h(s_OC,s_O);
s_F("sybv");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sybw */
try{
s_G("sybw");var s_Geb=function(a){this.$=a};
s_F("sybw");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sybx */
try{
s_G("sybx");var s_PC=function(a,b,c){this.ha=a;this.ka=b;this.ma=c||1;this.$={}},s_Heb=function(a){return new s_PC(a,function(a){navigator.sendBeacon&&navigator.sendBeacon(google.logUrl("",a),"")||google.log("",a)})},s_Ieb=function(){return new s_PC("",s_d)};s_PC.prototype.flush=function(){var a="udla="+this.ma+"&ei="+this.ha,b;for(b in this.$)a+="&"+b+"="+this.$[b];this.ka(a);this.$={}};var s_Jeb=function(a,b){a.$.res=b?"m":"a"};

var s_QC=function(){};s_h(s_QC,s_9d);s_QC.prototype.$=s_be();
s_F("sybx");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syc1 */
try{
var s_RC=function(){try{var a=window.localStorage}catch(b){return null}if(!a)return null;a=new s_Keb(a);if(!a.set("dummy",0))return null;a.remove("dummy");return a};s_G("syc1");var s_Keb=function(a){this.$=a};s_Keb.prototype.get=function(a){if(!s_b.navigator.cookieEnabled)return null;a=this.$.getItem("udla::"+a);if(!a)return null;try{return JSON.parse(a)}catch(b){return null}};s_Keb.prototype.remove=function(a){s_b.navigator.cookieEnabled&&this.$.removeItem("udla::"+a)};s_Keb.prototype.set=function(a,b){if(!s_b.navigator.cookieEnabled)return!1;try{return this.$.setItem("udla::"+a,JSON.stringify(b)),!0}catch(c){return!1}};

s_F("syc1");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syby */
try{
s_G("syby");
s_F("syby");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sybz */
try{
s_G("sybz");var s_Leb=function(a,b,c){this.Cza=a;this.Nh=b.name||null;this.$={};for(a=0;a<c.length;a++)b=c[a],this.$[b.ka]=b};s_Leb.prototype.getName=function(){return this.Nh};var s_Meb=function(a){a=s_kb(a.$);s_$a(a,function(a,c){return a.ka-c.ka});return a};var s_Neb=function(a,b,c){this.ka=b;this.Nh=c.name;this.Wa=!!c.Lr;this.Ea=!!c.required;this.$=c.mj;this.ha=c.type;this.qa=!1;switch(this.$){case 3:case 4:case 6:case 16:case 18:case 2:case 1:this.qa=!0}this.ma=c.defaultValue};s_Neb.prototype.getName=function(){return this.Nh};var s_Oeb=function(a){return 11==a.$||10==a.$};s_Neb.prototype.Zj=function(){return this.Wa};s_Neb.prototype.aAa=function(){return this.Ea};
var s_SC=function(){this.ka={};this.ha=this.getDescriptor().$;this.$=this.ma=null};s_=s_SC.prototype;s_.has=function(a){return s_TC(this,a.ka)};s_.get=function(a,b){return s_UC(this,a.ka,b)};s_.set=function(a,b){s_VC(this,a.ka,b)};s_.add=function(a,b){s_Peb(this,a.ka,b)};s_.clear=function(a){s_Qeb(this,a.ka)};
s_.equals=function(a){if(!a||this.constructor!=a.constructor)return!1;for(var b=s_Meb(this.getDescriptor()),c=0;c<b.length;c++){var d=b[c],e=d.ka;if(s_TC(this,e)!=s_TC(a,e))return!1;if(s_TC(this,e)){var f=s_Oeb(d),g=s_WC(this,e),e=s_WC(a,e);if(d.Zj()){if(g.length!=e.length)return!1;for(d=0;d<g.length;d++){var k=g[d],l=e[d];if(f?!k.equals(l):k!=l)return!1}}else if(f?!g.equals(e):g!=e)return!1}}return!0};
var s_Reb=function(a,b){for(var c=s_Meb(a.getDescriptor()),d=0;d<c.length;d++){var e=c[d],f=e.ka;if(s_TC(b,f)){a.$&&delete a.$[e.ka];var g=s_Oeb(e);if(e.Zj())for(var e=s_XC(b,f),k=0;k<e.length;k++)s_Peb(a,f,g?e[k].clone():e[k]);else e=s_WC(b,f),g?(g=s_WC(a,f))?s_Reb(g,e):s_VC(a,f,e.clone()):s_VC(a,f,e)}}};s_SC.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.ka={},a.$&&(a.$={}),s_Reb(a,this));return a};
var s_TC=function(a,b){return null!=a.ka[b]},s_WC=function(a,b){var c=a.ka[b];return null==c?null:a.ma?b in a.$?a.$[b]:(c=a.ma.$T(a.ha[b],c),a.$[b]=c):c},s_UC=function(a,b,c){var d=s_WC(a,b);return a.ha[b].Zj()?d[c||0]:d},s_XC=function(a,b){return s_WC(a,b)||[]},s_VC=function(a,b,c){a.ka[b]=c;a.$&&(a.$[b]=c)},s_Peb=function(a,b,c){a.ka[b]||(a.ka[b]=[]);a.ka[b].push(c);a.$&&delete a.$[b]},s_Qeb=function(a,b){delete a.ka[b];a.$&&delete a.$[b]},s_YC=function(a,b){var c=[],d=b[0],e;for(e in b)0!=e&&c.push(new s_Neb(0, e,b[e]));return new s_Leb(a,d,c)};

s_F("sybz");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syc0 */
try{
var s_ZC=function(a,b,c){a.$.e=b;c&&(a.$.d=c);a.flush()};s_G("syc0");var s_Teb=function(a,b,c){this.ha=a;this.ma=b;this.wc=new s_PC(c.ha,c.ka,3);this.Ca=this.Ea=0;this.ka=!1;this.qa=this.$=0;this.Wa=!1;this.Ga=null!=s_Q(this.ha.$,26)?Number(this.ma.get("ncp")):0;this.Da=s_Seb(this,this.DSa.bind(this),!0)};s_=s_Teb.prototype;s_.E6=function(a){this.Da.then(function(){a(this.$)}.bind(this))};s_.TX=function(a){null!=s_Q(this.ha.$,26)&&this.ma.set("ncp",this.Ga+1);this.Da.then(this.UTa.bind(this)).then(a)};
s_.H9=function(a){0!=this.$&&this.ka&&(null!=s_Q(this.ha.$,26)&&this.ma.remove("ncp"),a=a||s_g()-this.Ea,s_ZC(this.wc,1==this.$?6:8,a),this.$=2,this.ka=!1)};s_.G9=function(a,b){0!=this.$&&this.ka&&(this.ka=!1,b=b||s_g()-this.Ea,1!=a.code||500>b?this.ma.remove("ncp"):null!=s_Q(this.ha.$,26)&&(this.qa=1),this.Da=s_Seb(this,this.mXa.bind(this,a,b)))};s_.uK=function(){return 1==this.qa&&!this.ka};
s_.mXa=function(a,b,c){c=c.state||c.status;"prompt"==c?500>b?(this.qa=3,a=10):a=5:a="granted"==c?this.Wa&&1==a.code?5:1==a.code?11:1==this.$?6:8:3==this.$?9:7;s_ZC(this.wc,a,b);a:{switch(a){case 6:case 8:b=2;break a;case 5:case 7:case 10:case 11:case 9:b=3;break a}b=null}b&&(this.$=b);this.Wa=!1};
s_.DSa=function(a){var b=a.state||a.status;null!=s_Q(this.ha.$,26)&&"granted"==b&&this.Ga>=s_Q(this.ha.$,26)&&(b="denied");var c=s_g()-this.Ca;switch(b){case "granted":this.$=2;this.wc.$.pd=c;s_ZC(this.wc,2,void 0);break;case "denied":this.$=3;this.wc.$.pd=c;s_ZC(this.wc,3,void 0);break;case "prompt":this.$=1,this.wc.$.pd=c,s_ZC(this.wc,1,void 0)}a.addEventListener("change",s_Ueb(this,a))};s_.UTa=function(){this.qa=this.$;this.ka=!0;this.Ea=s_g()};
var s_Ueb=function(a,b){return function(){var a=b.state||b.status;"granted"==a&&this.ka&&(this.Wa=!0);if(!this.ka)switch(a){case "denied":this.$=3;break;case "granted":this.$=2;break;case "prompt":this.$=1}}.bind(a)},s_Seb=function(a,b,c){if(!navigator.permissions)return c&&s_ZC(a.wc,14,void 0),Promise.resolve(0);c&&(s_ZC(a.wc,12,void 0),a.Ca=s_g());return navigator.permissions.query({name:"geolocation"}).then(b,function(){if(c){var a=s_g()-this.Ca;this.wc.$.pd=a;s_ZC(this.wc,13,void 0)}return 0}.bind(a))};

s_F("syc0");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sybu */
try{
s_G("sybu");var s_Veb=new s_NC("devloc","geo_eha",!1);var s__C=!1,s_Web=!1,s_0C=new s_OC;
s_F("sybu");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syc2 */
try{
s_G("syc2");var s_Xeb={H9a:0,l3a:1,n3a:2,z7a:3,P9a:4,G4a:5,F4a:6,VIEWPORT:7,Y3a:8,k$a:-1},s_Yeb={G9a:0,U5a:1,s7a:2,h5a:3,m5a:42,d4a:4,S7a:5,K8a:6,D7a:41,y7a:44,r3a:12,J5a:11,W2a:17,p5a:51,c3a:54,v8a:7,S5a:8,g8a:13,o6a:14,z4a:34,p6a:15,i7a:16,d$a:18,Z9a:20,Z5a:21,x7a:22,N2a:23,l6a:24,B7a:25,C7a:59,a4a:26,V4a:27,X9:28,C8a:29,C5a:30,L5a:31,A5a:35,x4a:64,$2a:33,t8a:36,a7a:37,O2a:38,P2a:39,o3a:32,T9a:40,Z3a:43,N8a:45,q9a:46,E8a:47,D8a:48,R4a:49,S4a:50,W8a:52,Y5a:55,j$a:-1,M5a:9,D5a:10,H5a:19,l5a:53,t3a:56,e8a:57,
F8a:58,f4a:60,T2a:61,c4a:62,w4a:63,k3a:65},s_Zeb={J9a:0,c9a:1,m6a:2,F5a:3,a6a:4,I5a:5,y4a:6,m$a:7,o$a:8,K3a:101,F3a:102,G3a:103},s__eb={m8a:0,k8a:1,j8a:2,l8a:3,h8a:4,n8a:5,i8a:6},s_1C=function(){s_SC.call(this)};s_h(s_1C,s_SC);var s_0eb=null,s_2C=function(){s_SC.call(this)};s_h(s_2C,s_SC);var s_1eb=null,s_3C=function(){s_SC.call(this)};s_h(s_3C,s_SC);var s_2eb=null,s_4C=function(){s_SC.call(this)};s_h(s_4C,s_SC);var s_3eb=null,s_5C=function(){s_SC.call(this)};s_h(s_5C,s_SC);var s_4eb=null;
s_5C.prototype.getType=function(){return s_UC(this,1)};var s_5eb={g5a:0,P6a:1,T6a:2,R8a:3,UNKNOWN:4,$8a:5,L3a:6,WALKING:7,RUNNING:8,K6a:9,p9a:10,V3a:11,U6a:12,R6a:13,f5a:14,A8a:15,M3a:-1E3},s_6C=function(){s_SC.call(this)};s_h(s_6C,s_SC);var s_6eb=null,s_7eb={L2a:0,K2a:1,G2a:2,H2a:3,I2a:4},s_7C=function(){s_SC.call(this)};s_h(s_7C,s_SC);var s_8eb=null;s_7C.prototype.Ld=function(){return s_UC(this,1)};s_7C.prototype.zs=function(a){s_VC(this,5,a)};
var s_9eb={E9a:0,V5a:1,g6a:2,E4a:3},s_$eb={UNKNOWN:0,C4a:1,Q4a:2,Q2a:3},s_8C=function(){s_SC.call(this)};s_h(s_8C,s_SC);var s_afb=null,s_bfb={C6a:0,u7a:1E3},s_9C=function(){s_SC.call(this)};s_h(s_9C,s_SC);var s_cfb=null,s_$C=function(){s_SC.call(this)};s_h(s_$C,s_SC);var s_dfb=null,s_aD=function(){s_SC.call(this)};s_h(s_aD,s_SC);var s_efb=null;s_aD.prototype.getType=function(){return s_UC(this,1)};var s_ffb={UNKNOWN:0,t4a:1,X5a:2,X2a:3,X9a:4},s_bD=function(){s_SC.call(this)};s_h(s_bD,s_SC);
var s_gfb=null,s_cD=function(){s_SC.call(this)};s_h(s_cD,s_SC);var s_hfb=null;s_=s_cD.prototype;s_.clearRect=function(){s_Qeb(this,14)};s_.Ld=function(){return s_UC(this,10)};s_.qd=function(){return s_UC(this,16)};s_.Ug=function(){return s_TC(this,16)};s_.qI=function(){return s_UC(this,19)};s_1C.prototype.getDescriptor=function(){var a=s_0eb;a||(s_0eb=a=s_YC(s_1C,{0:{name:"LatLng",hh:"location.unified.LatLng"},1:{name:"latitude_e7",mj:15,type:Number},2:{name:"longitude_e7",mj:15,type:Number}}));return a};
s_1C.getDescriptor=s_1C.prototype.getDescriptor;s_2C.prototype.getDescriptor=function(){var a=s_1eb;a||(s_1eb=a=s_YC(s_2C,{0:{name:"LatLngRect",hh:"location.unified.LatLngRect"},1:{name:"lo",mj:11,type:s_1C},2:{name:"hi",mj:11,type:s_1C}}));return a};s_2C.getDescriptor=s_2C.prototype.getDescriptor;
s_3C.prototype.getDescriptor=function(){var a=s_2eb;a||(s_2eb=a=s_YC(s_3C,{0:{name:"FieldOfView",hh:"location.unified.FieldOfView"},1:{name:"field_of_view_x_degrees",mj:2,type:Number},2:{name:"field_of_view_y_degrees",mj:2,type:Number},3:{name:"screen_width_pixels",mj:5,type:Number}}));return a};s_3C.getDescriptor=s_3C.prototype.getDescriptor;
s_4C.prototype.getDescriptor=function(){var a=s_3eb;a||(s_3eb=a=s_YC(s_4C,{0:{name:"FeatureIdProto",hh:"location.unified.FeatureIdProto"},1:{name:"cell_id",mj:6,type:String},2:{name:"fprint",mj:6,type:String}}));return a};s_4C.getDescriptor=s_4C.prototype.getDescriptor;s_5C.prototype.getDescriptor=function(){var a=s_4eb;a||(s_4eb=a=s_YC(s_5C,{0:{name:"ActivityRecord",hh:"location.unified.ActivityRecord"},1:{name:"type",mj:14,defaultValue:0,type:s_5eb},2:{name:"confidence",mj:5,type:Number}}));return a};
s_5C.getDescriptor=s_5C.prototype.getDescriptor;
s_6C.prototype.getDescriptor=function(){var a=s_6eb;a||(s_6eb=a=s_YC(s_6C,{0:{name:"LocationAttributesProto",hh:"location.unified.LocationAttributesProto"},1:{name:"detected_activity",mj:14,defaultValue:0,type:s_7eb},2:{name:"heading_degrees",mj:5,type:Number},3:{name:"bearing_degrees",mj:5,type:Number},4:{name:"speed_kph",mj:5,type:Number},5:{name:"tilt_degrees",mj:5,type:Number},6:{name:"roll_degrees",mj:5,type:Number},7:{name:"altitude_meters_from_ground",mj:1,type:Number},8:{name:"field_of_view",
mj:11,type:s_3C},9:{name:"boarded_transit_vehicle_token",mj:9,type:String},10:{name:"device_location_ratio",mj:2,type:Number},11:{name:"activity_record",Lr:!0,mj:11,type:s_5C}}));return a};s_6C.getDescriptor=s_6C.prototype.getDescriptor;
s_7C.prototype.getDescriptor=function(){var a=s_8eb;a||(s_8eb=a=s_YC(s_7C,{0:{name:"SemanticPlace",hh:"location.unified.SemanticPlace"},1:{name:"feature_id",mj:11,type:s_4C},2:{name:"gconcept_instance",Lr:!0,mj:11,type:s_8C},3:{name:"score",mj:2,type:Number},4:{name:"confidence",mj:14,defaultValue:0,type:s_9eb},5:{name:"source",mj:14,defaultValue:0,type:s_$eb}}));return a};s_7C.getDescriptor=s_7C.prototype.getDescriptor;
s_8C.prototype.getDescriptor=function(){var a=s_afb;a||(s_afb=a=s_YC(s_8C,{0:{name:"GConceptInstanceProto",UFa:s_7C,hh:"location.unified.SemanticPlace.GConceptInstanceProto"},1:{name:"gconcept_id",mj:9,type:String},2:{name:"prominence",mj:14,defaultValue:0,type:s_bfb}}));return a};s_8C.getDescriptor=s_8C.prototype.getDescriptor;
s_9C.prototype.getDescriptor=function(){var a=s_cfb;a||(s_cfb=a=s_YC(s_9C,{0:{name:"VisibleNetwork",hh:"location.unified.VisibleNetwork"},1:{name:"wifi",mj:11,type:s_$C},2:{name:"cell",mj:11,type:s_aD},3:{name:"connected",mj:8,type:Boolean},4:{name:"timestamp_ms",mj:3,type:String}}));return a};s_9C.getDescriptor=s_9C.prototype.getDescriptor;
s_$C.prototype.getDescriptor=function(){var a=s_dfb;a||(s_dfb=a=s_YC(s_$C,{0:{name:"WiFi",UFa:s_9C,hh:"location.unified.VisibleNetwork.WiFi"},1:{name:"bssid",mj:9,type:String},2:{name:"level_dbm",mj:5,type:Number}}));return a};s_$C.getDescriptor=s_$C.prototype.getDescriptor;
s_aD.prototype.getDescriptor=function(){var a=s_efb;a||(s_efb=a=s_YC(s_aD,{0:{name:"Cell",UFa:s_9C,hh:"location.unified.VisibleNetwork.Cell"},1:{name:"type",mj:14,defaultValue:0,type:s_ffb},2:{name:"cell_id",mj:5,type:Number},3:{name:"location_area_code",mj:5,type:Number},4:{name:"mobile_country_code",mj:5,type:Number},5:{name:"mobile_network_code",mj:5,type:Number},6:{name:"primary_scrambling_code",mj:5,type:Number},7:{name:"physical_cell_id",mj:5,type:Number},8:{name:"tracking_area_code",mj:5,type:Number}}));
return a};s_aD.getDescriptor=s_aD.prototype.getDescriptor;s_bD.prototype.getDescriptor=function(){var a=s_gfb;a||(s_gfb=a=s_YC(s_bD,{0:{name:"PresenceInterval",hh:"location.unified.PresenceInterval"},1:{name:"start_offset_sec",mj:4,type:String},2:{name:"duration_sec",mj:4,type:String},3:{name:"confidence",mj:13,type:Number}}));return a};s_bD.getDescriptor=s_bD.prototype.getDescriptor;
s_cD.prototype.getDescriptor=function(){var a=s_hfb;a||(s_hfb=a=s_YC(s_cD,{0:{name:"LocationDescriptor",hh:"location.unified.LocationDescriptor"},1:{name:"role",mj:14,defaultValue:0,type:s_Xeb},2:{name:"producer",mj:14,defaultValue:0,type:s_Yeb},3:{name:"timestamp",mj:3,type:String},4:{name:"loc",mj:9,type:String},5:{name:"latlng",mj:11,type:s_1C},6:{name:"latlng_span",mj:11,type:s_1C},14:{name:"rect",mj:11,type:s_2C},7:{name:"radius",mj:2,type:Number},8:{name:"confidence",mj:5,defaultValue:100,type:Number},
10:{name:"feature_id",mj:11,type:s_4C},16:{name:"mid",mj:4,type:String},17:{name:"level_feature_id",mj:11,type:s_4C},18:{name:"level_number",mj:2,type:Number},11:{name:"language",mj:9,type:String},9:{name:"provenance",mj:14,defaultValue:0,type:s_Zeb},12:{name:"historical_role",mj:14,defaultValue:0,type:s_Xeb},13:{name:"historical_producer",mj:14,defaultValue:0,type:s_Yeb},15:{name:"historical_prominence",mj:5,type:Number},19:{name:"attributes",mj:11,type:s_6C},20:{name:"diagnostic_info",mj:9,type:String},
21:{name:"semantic",Lr:!0,mj:14,defaultValue:0,type:s__eb},22:{name:"semantic_place",Lr:!0,mj:11,type:s_7C},23:{name:"visible_network",Lr:!0,mj:11,type:s_9C},24:{name:"presence_interval",Lr:!0,mj:11,type:s_bD}}));return a};s_cD.getDescriptor=s_cD.prototype.getDescriptor;

s_F("syc2");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syc3 */
try{
var s_ifb=function(a,b,c,d,e,f){this.lat=a||null;this.Rg=b||null;this.Wi=c||null;this.ha=!!d;this.ka=e||null;this.$=f||null};s_ifb.prototype.toString=function(){return"{lat:"+this.lat+", lon:"+this.Rg+", acc:"+this.Wi+", isCached:"+this.ha+", ts:"+this.ka+", addr:"+this.$+"}"};s_G("syc3");
var s_jfb=new s_NC("devloc","cookie_secure",!0),s_kfb=new s_NC("devloc","cookie_timeout",86400),s_lfb=function(a){if(a&&a.lat&&a.Rg&&a.Wi){var b=new s_1C;s_VC(b,1,Math.round(1E7*Number(a.lat)));s_VC(b,2,Math.round(1E7*Number(a.Rg)));var c=String(1E3*Number(a.ka));a=620*Number(a.Wi);var d=["role:"];d.push(1);d.push("\nproducer:");d.push(12);d.push("\nprovenance:");d.push(6);d.push("\ntimestamp:");d.push(c);d.push("\nlatlng{\nlatitude_e7:");d.push(s_UC(b,1));d.push("\nlongitude_e7:");d.push(s_UC(b, 2));d.push("\n}\nradius:");d.push(a);b=d.join("");b=s_Ie(b).replace("+","-").replace("/","_");s_4g.set("UULE","a+"+b,s_kfb.get(),"/","",s_jfb.get())}};

s_F("syc3");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syc5 */
try{
s_G("syc5");var s_mfb=function(a){this.$=a;this.ka=Number(this.$.get("ltp"));this.ha=Number(this.$.get("sr"));this.ma=!!this.$.get("iks")},s_nfb=function(a){a.$.set("iks",0);a.$.set("sr",0);a.ha=0},s_ofb=function(a){a.ka||(a.ka=s_g(),a.$.set("ltp",a.ka));a.ka&&864E5<s_g()-a.ka&&(a.ha=0,a.$.set("sr",a.ha),a.ma=!0,a.$.set("iks",Number(a.ma)));return a.ma?-1>a.ha?3:1<a.ha?2:1:0},s_pfb=function(a,b,c){switch(c){case 0:a.ka=s_g();a.$.set("ltp",a.ka);break;case 1:b?a.ha++:a.ha--,a.$.set("sr",a.ha),a.ka=s_g(),a.$.set("ltp",
a.ka)}},s_qfb=function(a,b,c){this.qa=a;this.wc=c;this.$=b?new s_mfb(b):null;this.ma=this.ka=0;this.ha=!1};s_=s_qfb.prototype;s_.H9=function(){var a=s_g()-this.ma,b=this.ka;3==this.ka&&(b=0,this.$&&s_nfb(this.$));s_rfb(this,a,b);this.$&&s_pfb(this.$,!0,b);this.wc.$.succ="1";s_Jeb(this.wc,this.uK());this.wc.$.ps=this.ka;this.wc.$.d=a};
s_.G9=function(a){var b=s_g()-this.ma,c=!0;1==a.code&&(c=!1);var d=this.ka;if(2==this.ka&&!c||3==this.ka&&c)d=0,this.$&&s_nfb(this.$);s_rfb(this,b,d);this.$&&s_pfb(this.$,c,d);this.wc.$.err=a.code;s_Jeb(this.wc,this.uK());this.wc.$.ps=this.ka;this.wc.$.d=b};s_.uK=function(){return this.ha};s_.E6=function(a){a(this.$?s_ofb(this.$):0)};s_.TX=function(a){this.ka=this.$?s_ofb(this.$):0;this.ma=s_g();a()};var s_rfb=function(a,b,c){s_Q(a.qa.$,3)&&0!=c?1==c&&(a.ha=!0):500<b&&(a.ha=!0)};

s_F("syc5");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syc4 */
try{
var s_sfb=null,s_tfb=function(a){this.qa=a||navigator.geolocation;this.$=this.ha=this.ma=null;this.ka=0},s_wfb=function(){var a=s_sfb,b=s_ufb,c=s_vfb;a.$=null;a.ma=b;a.ha=c;b=s_e(a.Ea,a);c={enableHighAccuracy:s_Veb.get(),timeout:3E4,maximumAge:15E3};a.qa.getCurrentPosition(b,b,c)};
s_tfb.prototype.Ea=function(a){if(!a||"code"in a)this.$||this.ha(a),s_I.clearInterval(null);else{if(!this.$||this.$.coords.accuracy>a.coords.accuracy){this.$=a;this.ka=0;var b=!1}else this.ka++,10<=this.ka&&s_I.clearInterval(null),b=!0;b||(b=a.coords,this.ma(new s_ifb(b.latitude,b.longitude,a.coords.accuracy,!1,+a.timestamp)))}};
var s_xfb=function(){if(!s_sfb){if("geolocation"in navigator)var a=navigator.geolocation;s_sfb=new s_tfb(a)}},s_dD=null,s_eD=null,s_vfb=function(a){s_Web=!0;s_dD&&s_dD.G9(a);s_eD.error.call(s_eD,a)},s_ufb=function(a){s_Web=!0;s_dD&&s_dD.H9();s_eD.success.call(s_eD,a)},s_yfb=function(){s_xfb();s_I.clearInterval(null);s__C=!1},s_zfb=function(){if(!s__C){s_g();s_xfb();s__C=!0;var a=function(){s_wfb();s_I.setTimeout(function(){s_yfb()},6E4)},b=s_RC();s_R(s_0C,23,!1)&&b?(s_dD=new s_Teb(new s_Geb(s_0C), b,s_Heb(google.kEI)),s_dD.TX(a)):(s_dD=null,a())}};s_G("syc4");
var s_Afb=function(){};s_Afb.prototype.success=function(){};s_Afb.prototype.error=function(){};var s_Bfb={code:0},s_Cfb=function(a,b){this.Zd=a;this.$=b};s_Cfb.prototype.success=function(a){this.$.H9();this.Zd.success(a)};s_Cfb.prototype.error=function(a){this.$.G9(a||s_Bfb);this.Zd.error(a)};var s_Dfb=new s_NC("devloc","msg_err","Location unavailable"),s_Efb=new s_NC("devloc","uul_text",""),s_Ffb=new s_NC("devloc","msg_gps","Using GPS"),s_Gfb=new s_NC("devloc","msg_dsc",""),s_Hfb=new s_NC("devloc","msg_dvl",""),s_Ifb=new s_NC("devloc","msg_upd","update"),s_Jfb=new s_NC("devloc","msg_use","update"),s_Kfb=new s_NC("devloc","msg_unk","Unknown"),s_Lfb=new s_NC("devloc","mnr_crd","0"),s_Mfb=new s_NC("devloc","ftr_rdn",!1),s_Nfb=new s_NC("devloc","dl_tld_mismatch",!1),s_Ofb=new s_NC("devloc", "estd",!1);
var s_Pfb=new s_NC("devloc","rgc_md",2E3),s_Qfb=new s_NC("devloc","rgc_me",10),s_Rfb=new s_NC("devloc","rgc_to",12096E5),s_Sfb=new s_NC("devloc","rgc_url","/uul?uulo=4");var s_Tfb=function(a,b){this.ka=a;this.$=b||null};s_h(s_Tfb,s_Afb);s_Tfb.prototype.success=function(a){s_lfb(a);this.ka(a)};s_Tfb.prototype.error=function(a){this.$&&this.$(a)};var s_Ufb=new s_NC("devloc","driver_ui_type",0),s_Vfb=new s_NC("devloc","jsc"),s_Wfb=function(a,b){var c;s_yfb();a=new s_Tfb(a,b);if(b=!c)b=1==s_Q(s_0C,10);b&&(b=s_RC())&&(c=new s_qfb(new s_Geb(s_0C),b,s_Ieb()));c&&(a=new s_Cfb(a,c),c.TX(s_d));s_eD=a;s_zfb()};

s_F("syc4");s_H();
}catch(e){_DumpException(e)}
/* _Module_:dvl */
try{
var s_uOc=!1,s_vOc={},s_wY=[],s_wOc=function(){return s_vk("local","devloc")},s_xOc=function(){var a=s_wOc();if(a){var b=s_wY.length;a.set("web.rgc."+google.kHL+".count",b);try{for(var c=0;c<b;c++){var d="web.rgc."+google.kHL+"."+c+".";var e=s_wY[c];a.set(d+"lat",e.lat);a.set(d+"lon",e.Rg);a.set(d+"acc",e.Wi);a.set(d+"rgc",e.Yu);a.set(d+"last",e.Cy)}}catch(f){}}},s_yOc=function(){if(!s_uOc){var a=s_wOc();if(a){var b=Number(a.get("web.rgc."+google.kHL+".count"))||0;try{for(var c=0;c<b;c++){var d="web.rgc."+
google.kHL+"."+c+".";var e={};e.lat=a.get(d+"lat");e.Rg=a.get(d+"lon");e.Wi=a.get(d+"acc");e.Yu=a.get(d+"rgc");e.Cy=a.get(d+"last");s_wY.push(e);s_vOc[e.Yu]=1}}catch(f){}s_uOc=!0}}},s_zOc=function(a,b,c){this.address=a;this.$=b;this.timestamp=s_c(c)?c:s_g()},s_AOc=function(a,b){s_I.Cb(function(){if(b){s_yOc();s_wY.unshift({lat:a.lat,Rg:a.Rg,Wi:a.Wi,Yu:b,Cy:s_g()});s_vOc[b]=1;if(s_wY.length>s_Qfb.get()){for(var c=s_g()-s_Rfb.get(),d,e=0,f,g=s_wY.length-1;0<=g;g--)if(f=s_wY[g],f.Cy<c)d=g,e++;else{0==
e&&(d=g,e++);break}if(c=s_wOc())try{for(g=d;g<d+e;g++)delete s_vOc[s_wY[g].Yu],f="rgc:"+g+":",c.remove(f+"lat"),c.remove(f+"lon"),c.remove(f+"acc"),c.remove(f+"rgc"),c.remove(f+"last");s_wY.splice(d,e)}catch(k){}}s_xOc()}})},s_BOc=function(){var a=s_wOc();if(!a)return null;var b=a.get("swml.location"),c=a.get("swml.location.isdev"),a=a.get("swml.location.ts");return null==b||null==c||null==a?null:new s_zOc(String(b),!!Number(c),Number(a))},s_COc=function(a){var b=s_Cc("span");s_A(b,"known_loc",a);
s_A(b,"unknown_loc",!a);return b},s_DOc=function(a){this.Ke=a||s_3f()};s_DOc.prototype.get=function(a,b,c){if(!c&&(c=s_EOc(a))){b(c);return}c=s_Sfb.get();google.kHL&&(c=c+"&hl="+google.kHL);this.Ke.open("GET",c,!0);this.Ke.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var c=this.responseText;s_xa(s_Ga(c))||(s_AOc(a,c),b(c))}};this.Ke.send("")};
var s_EOc=function(a){if(!a||!a.lat||!a.Rg)return null;s_yOc();for(var b=s_Pfb.get(),c=null,d,e,f,g=0;g<s_wY.length;g++){f=s_wY[g];if(s_qa(a)&&s_qa(f)){var k=a.lat;var l=a.Rg;var m=f.lat;e=f.Rg}else k=a,l=f,e=m=void 0;k=k*Math.PI/180;m=m*Math.PI/180;e=12734E3*Math.asin(Math.min(1,Math.sqrt(Math.pow(Math.sin((m-k)/2),2)+Math.cos(k)*Math.cos(m)*Math.pow(Math.sin((e*Math.PI/180-l*Math.PI/180)/2),2))));e<b&&(b=e,c=f,d=g)}c&&(c.Cy=s_g(),s_wY.splice(d,1),s_wY.unshift(c),s_I.setTimeout(s_xOc,100));return c&&
c.Yu||null},s_FOc=function(a){a=new s_zOc(a||"",!0);var b=s_wOc();if(b&&a)try{b.set("swml.location",a.address),b.set("swml.location.isdev",a.$?"1":"0"),b.set("swml.location.ts",String(a.timestamp))}catch(c){}},s_xY=function(){this.$=""};s_h(s_xY,s_Afb);s_xY.prototype.error=function(){this.$=""};s_xY.prototype.success=function(a){a&&a.lat&&a.Rg&&(this.$=null!=s_Hfb?s_Hfb.get():"")};
s_xY.prototype.g5=function(){var a=this;if(s_Ofb.get()){var b=s_RC();b&&(b=new s_qfb(new s_Geb(s_0C),b,s_Ieb()),a=new s_Cfb(a,b),b.TX(s_d))}s_eD=a;s_zfb()};s_xY.prototype.rP=function(){this.g5()};
var s_HOc=function(a,b,c,d){if(s_Mfb.get())c=s_j("swml-loc"),d=b?b.$||s_Ffb.get():s_Kfb.get(),c.appendChild(s_Dc(d)),c=s_j("swml-upd"),d=s_GOc(a),s_y(d,"footer__redesign-link"),c.appendChild(d),b&&a.$&&s_j("swml-src").appendChild(s_Dc(a.$));else{d=s_COc(d);s_Hc(c);var e=b?b.$||s_Ffb.get():s_Kfb.get(),f=s_n("SPAN",{id:"swml_addr"});f.appendChild(s_Dc(e));s_Gc(c,d,f);b&&a.$&&(b=s_Cc("span"),b.appendChild(s_Dc(a.$)),s_Gc(c,s_Dc(" - "),b))}},s_IOc=function(){var a=s_BOc();return a&&a.$?s_g()-a.timestamp<=
Number(3E5):!1},s_JOc=function(a,b){var c=null,d=s_Efb.get();if(d)c=s_Gfb;else{var e=s_BOc();e&&(d=e.address,c=s_Hfb)}a.$=null!=c?c.get():"";s_HOc(a,d?new s_ifb(null,null,null,null,null,d):null,b,!1)},s_GOc=function(a){var b=s_n("A",{href:"#"});s_Fc(b,s_Dc(s_IOc()?s_Ifb.get():s_Jfb.get()));b.addEventListener("click",s_e(function(a){a.preventDefault();a.stopPropagation();this.rP()},a),!1);return b};
s_xY.prototype.pv=function(a,b){if(!s_Nfb.get()&&!s_Mfb.get()){var c=s_Dc(" - ");a.appendChild(c);a.appendChild(b);b.getClientRects&&1<b.getClientRects().length&&a.replaceChild(s_Cc("br"),c)}};var s_yY=function(a){this.$="";this.Ea=a||new s_DOc;this.ma=this.ha=!0;this.ka=null};s_h(s_yY,s_xY);var s_KOc=function(){var a=s_j("swml");if(a&&"1"===s_Lfb.get()){var b=a.getElementsByTagName("DIV");if(b&&b[0])return b[0]}return a};
s_yY.prototype.start=function(){s_Efb.get()&&(this.ma=!1);var a=s_KOc();a&&(s_JOc(this,a),this.g5());s_LOc(this)};var s_LOc=function(a){"1"===s_Lfb.get()&&s_Wm(s_e(a.qa,a))};s_=s_yY.prototype;s_.g5=function(){s__C&&this.ka?this.Ea.get(this.ka,s_e(this.PJa,this,this.ka),!0):(this.ha=!0,s_yY.Ba.g5.call(this))};s_.rP=function(){this.ma=!0;this.g5()};s_.success=function(a){s_yY.Ba.success.call(this,a);s_lfb(a);this.ha&&(s_FOc(null),this.Ea.get(a,s_e(this.PJa,this,a)),this.ka=a,this.ha=!1)};
s_.error=function(a){if(this.ha){var b=s_KOc();b&&(this.ma&&(s_Hc(b),b.appendChild(s_COc(!1)),b.appendChild(s_Dc(s_Dfb.get()))),a.code!=a.PERMISSION_DENIED?this.pv(b,s_GOc(this)):(s_MOc(),this.qa()))}};s_.PJa=function(a,b){a.$=b;var c=s_KOc();c&&(s_HOc(this,a,c,!0),this.pv(c,s_GOc(this)));s_FOc(b)};s_.pv=function(a,b){s_MOc();s_yY.Ba.pv.call(this,a,b);this.qa()};var s_MOc=function(){var a=s_j("swml");a&&(s_s(a,"visibility","visible"),s_s(a,"display",""))};
s_yY.prototype.qa=function(){if("1"===s_Lfb.get()){var a=s_j("swml_lmsep");if(a){var b=s_j("swml").offsetHeight-s_0d(s_j("swml")).top-s_0d(s_j("swml")).bottom,c=s_KOc().offsetHeight;a.textContent=b>c?"\u00a0\u00a0\u00a0":"\u00a0-\u00a0"}}};var s_NOc=function(a){s_yY.call(this,a)};s_h(s_NOc,s_yY);s_NOc.prototype.start=function(){var a=s_KOc();a&&(s_JOc(this,a),this.pv(a,s_GOc(this)));s_LOc(this)};s_G("dvl");
s_sa("google.devloc.boc",function(a,b,c,d,e){var f=a.getAttribute(b),g=a.onclick;a.onclick=null;a.style.opacity=.5;f&&(s_k(c).style.display="none",s_k(d).style.display="inline-block",s_k(e).style.display="none",s_Wfb(function(){s_7h(a,a.getAttribute("data-ved"),f)},function(b){b.code==b.PERMISSION_DENIED?(s_k(c).style.display="none",s_k(d).style.display="none",s_k(e).style.display="inline-block"):(s_k(c).style.display="inline-block",s_k(d).style.display="none",s_k(e).style.display="none",a.onclick=
g,a.style.opacity=1)}))});s_nf("dvl",{init:function(a){s_MC||(s_MC={});s_MC["devloc-config"]=a;s_Feb++;(a=s_Vfb.get())&&(s_0C=new s_OC(JSON.parse(a)));a=Number(s_Ufb.get());1==a?(new s_yY).start():2==a&&(new s_NOc).start()},dispose:function(){s_yfb()}});


s_F("dvl");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy3w */
try{
s_G("sy3w");var s_vl=null,s_qra=!0,s_wl=s_d;
s_F("sy3w");s_H();
}catch(e){_DumpException(e)}
/* _Module_:foot */
try{
var s_rra=function(){var a=s_j("fbar"),b=s_j("fuser")||s_j("fsr"),c=s_j("fsl");a&&b&&c&&(a=s_m("fbar",a),s_z(a,"fmulti"),32>a.clientWidth-c.offsetWidth-b.offsetWidth-30-34&&s_y(a,"fmulti"))},s_sra=!1,s_tra=!1,s_ura=0,s_vra=function(){var a=s_vl=s_vl||s_j("fbarcnt"),b=s_j("fbar");if(b&&a&&s_v(a)&&(s_sra||!s_tra||s_ura!=window.innerWidth)){s_ura=window.innerWidth;s_s(a,{height:"auto"});s_s(b,{bottom:"",position:""});s_rra();if(s_j("dbg_"))s_s(b,{position:"static"});else{var c=window.innerHeight||Math.max(document.documentElement.clientHeight, document.body.scrollHeight),d=s_Jd(a).y,c=c-d;c>b.offsetHeight&&(s_s(a,{height:c+"px"}),s_s(b,{bottom:"0",position:"absolute"}))}s_s(a,{visibility:"visible"})}},s_wra=!1;s_G("foot");
var s_xra=null,s_xl=null,s_yl=null,s_zra=function(){if(s_v(s_xl))s_yl.setAttribute("aria-expanded","false"),s_yra();else{s_yl.setAttribute("aria-expanded","true");var a=s_t(s_xl);var b=-20;if(s_Af()){var c=s_t(s_yl);0>s_Jd(s_yl).x+c.width-a.width-b&&(b=s_1d(s_yl),b=c.width-a.width+b.left+b.right);s_xl.style.right=b+"px"}else s_Jd(s_yl).x+a.width+b>s_wc().width&&(c=s_t(s_yl),b=s_1d(s_yl),b=c.width-a.width+b.left+b.right),s_xl.style.left=b+"px";s_u(s_xl,!0);s_je(document.body,"click",s_yra)}},s_yra=
function(a){a&&a.target==s_yl||s_u(s_xl,!1);s_ke(document.body,"click",s_yra)},s_Ara=function(a){s_xra&&s_u(s_xra,!a)};
s_nf("foot",{init:function(a){s_xl=s_j("fsett");s_yl=s_j("fsettl");s_xl&&s_yl&&s_4h("foot",{cst:s_zra});var b=s_j("fbar");b&&s_u(b,!0);s_xra=s_j("footcnt");s_Ara(!1);var b=a.po,c=a.qe,d=a.pf;s_vl=s_j("fbarcnt");s_sra=!!c;s_qra=null!=s_vl&&(void 0===d||d);s_tra=!!b;s_wl=s_qra?s_6ca(s_vra,!1):s_rra;s_wl();s_wra||(s_je(window,"resize",s_wl),s_oe(165,s_wl),s_wra=!0);void 0!==a.dv&&""!==a.dv&&s_4g.set("DV",a.dv,600)},dispose:function(){s_6h("foot",["cst"])}});s_oe(37,s_Ara);s_oe(155,s_f(s_Ara,!0));


s_F("foot");s_H();
}catch(e){_DumpException(e)}
/* _Module_:fpe */
try{
s_G("fpe");var s_3Hd,s_4Hd=!1,s_05=function(a){s_q.call(this);var b=a||!1;a=!!(s_pj()&&window.gbar&&gbar.elc&&gbar.elr);this.qa=b&&!a;this.ma=[];s_4Hd||(a&&gbar.elc(s_e(function(){b&&s_5Hd(gbar.elr().mo);s_w(71)},this)),s_4Hd=!0);this.qa&&(this.ka=s_6ca(s_e(this.Ea,this),!0),s_r(window,"resize",this.ka,!1,this),this.ka());(a=s_j("tbbcc"))&&this.ma.push(a);this.ha();s_r(window,"scroll",this.ha,!1,this)};s_h(s_05,s_q);
s_05.prototype.Ha=function(){this.ma=[];this.qa&&s_qd(window,"resize",this.ka,!1,this);s_qd(window,"scroll",this.ha,!1,this)};var s_5Hd=function(a){var b=s_j("cnt"),c=s_j("searchform");b&&(s_A(b,"big","lg"==a),s_A(b,"mdm","md"==a));c&&(s_A(c,"big","lg"==a),s_A(c,"mdm","md"==a))};s_05.prototype.Ea=function(){s_5Hd(1250<=document.body.offsetWidth?"lg":"sm")};s_05.prototype.ka=null;
s_05.prototype.ha=function(){var a=window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft,b=s_Af(),c=b?"marginRight":"marginLeft",d=b?"right":"left";b&&(a=Math.abs(a));for(var b=0,e;e=this.ma[b];b++)"fixed"==s_Ed(e)&&("tbbcc"==e.id?e.style[c]=-a+"px":e.style[d]=-a+"px")};s_nf("fpe",{init:function(a){s_3Hd=new s_05(a.js)},dispose:function(){s_3Hd&&(s_3Hd.dispose(),s_3Hd=null)}});

s_F("fpe");s_H();
}catch(e){_DumpException(e)}
/* _Module_:ipv6 */
try{
s_G("ipv6");var s_zl=null,s_Bra=function(a){s_sa("google.v6t",s_g());s_sa("google.v6s",0);s_zl=new Image;s_sa("google.v6",s_zl);s_zl.onload=s_zl.onerror=function(){s_sa("google.v6s",1)};s_zl.src=a+"&rndm="+Math.random()};s_of("ipv6",{init:function(a){a.url&&s_Bra(a.url)},dispose:function(){s_zl=null}});

s_F("ipv6");s_H();
}catch(e){_DumpException(e)}
/* _Module_:lu */
try{
s_G("lu");var s_S0c=["luibli","luibbri"],s_T0c={},s_j_=-1,s_U0c=null,s_V0c=function(a,b,c){a=a.cloneNode(!0);var d,e;b.hasAttribute("data-mh")&&(d=b.getAttribute("data-mh"));b.hasAttribute("data-mw")?e=b.getAttribute("data-mw"):e=88*c-16;var f;"IMG"==a.tagName?f=a:f=a.getElementsByTagName("IMG")[0];f.id="";f.width=e;void 0!==d&&(f.height=d);f.onload=function(){f.style.display="block";delete f.onload};f.style.display="none";c=f.src.split("&")[0]+"&w="+e;void 0!==d&&(c+="&h="+d);f.src=c;null!=f.parentNode&&(f.parentNode.style.width=
e+"px",void 0!==d&&(f.parentNode.style.height=d+"px"));b.appendChild(a)},s_W0c=function(a){if(!a)return null;var b=0;for(c in a){var c=Number(c);if(0<a[c].offsetHeight){var d=a[c];b=c;break}}if(!d)return null;if(!d.firstChild){for(c in a)if(c=Number(c),a[c].firstChild){var e=a[c];break}s_V0c(e.firstChild,d,b)}return{element:d,wFa:b}},s_Z0c=function(){for(var a=s_X0c(),b=!1,c=0;c<s_S0c.length;c++)for(var d=s_l(s_S0c[c]),e=0;e<d.length;e++)s_Y0c(d[e])&&(b=!0);return a||b},s_X0c=function(){var a=s_j("rhs_block");
if(!a||0==a.offsetHeight)return!1;a:{for(var b={},c=3;5>=c;c++)if(b[c]=a.querySelector(".rhsmap"+c+"col"),b[c])b[c].column_count=c;else{a=null;break a}a=b}b=s_W0c(a);if(!b)return!1;a=b.wFa;if(s_j_==a&&s_T0c[s_j_])return!0;b=b.element.getElementsByTagName("IMG")[0];b.id||(s_j("lu_map").id="",b.id="lu_map");s_T0c[a]||(s_T0c[a]=!0);s_j_=a;return!0},s_Y0c=function(a){for(var b,c=[],d,e=s_B(a,"action"),f=3;5>=f;f++){var g=a.querySelector(".luib-"+f);if(!g)return!1;g=g.querySelector(".thumb");if(!g)return!1;
c.push(g);0<g.offsetHeight&&(d=g)}if(!d)return!1;var k=parseInt(d.style.width,10),g=parseInt(d.style.height,10);if((f=d.querySelector("img"))&&f.src)return!0;for(var l,f=0;f<c.length;f++){var m=c[f].querySelector("img");if(m&&m.src){l=s_n("DIV");l.innerHTML=c[f].innerHTML;"CONTAIN"==e&&(l.style.backgroundColor=c[f].style.backgroundColor);b=m;break}}if(!b)return!1;c=l.querySelector("img");"NONE"==e&&(c.width=k,c.height=g,b=s_Ag(b.src),b.$("w",parseInt(k,10)),b.$("h",parseInt(g,10)),c.src=b.toString());
d.innerHTML=l.innerHTML;"CROP"==e&&(c=d.querySelector("img"),b=(k-c.width)/2+"px",s_Xd(a)?c.style.right=b:c.style.left=b,c.style.top=(g-c.height)/2+"px");"CONTAIN"==e&&(c=d.querySelector("img"),d.style.backgroundColor=l.style.backgroundColor,l=Math.min(d.offsetHeight/c.height,d.offsetWidth/c.width),e=c.width*l,l*=c.height,c.width=e,c.height=l,c.style.top=(d.offsetHeight-l)/2+"px",b=(d.offsetWidth-e)/2+"px",s_Xd(a)?c.style.right=b:c.style.left=b);return!0}; s_nf("lu",{init:function(){"webhp"!=google.sn&&s_j("lu_map")&&(s_Z0c()?(s_U0c=s_6ca(s_Z0c,!0),s_oe(60,s_U0c)):(s_j_=3,s_T0c[s_j_]=!0))},dispose:function(){s_U0c&&(s_qe(60,s_U0c),s_U0c=null);s_T0c={};s_j_=-1}});

s_F("lu");s_H();
}catch(e){_DumpException(e)}
/* _Module_:m */
try{
var s_aId={};s_G("m");var s_35=null;var s_bId,s_cId,s_dId,s_eId,s_fId,s_45,s_gId={},s_55=null,s_65=null,s_75=[],s_iId=function(){s_35.ab.on&&(s_oe(41,s_hId),s_oe(37,function(a){a&&(a=s_j("appbar"))&&(a.style.visibility="hidden")}),s_j("pocs"))},s_jId=function(){return s_j("sftab")||s_j("lst-ib")},s_kId=function(){var a=s_jId();a&&s_y(a,"lst-d-f")},s_lId=function(){var a=s_jId();a&&s_z(a,"lst-d-f")},s_mId=function(a){this.element=a;this.$=[];this.ka=null;"ab_opt"==this.element.id&&0==this.element.childNodes.length&&gbar.aomc(this.element);
a=s_l("ab_dropdownitem",this.element);for(var b=0,c;c=a[b];b++)s_x(c,"disabled")||this.$.push(c)},s_oId=function(a){var b=s_55;s_nId(b,null==b.ka?a?0:b.$.length-1:(b.ka+(a?1:b.$.length-1))%b.$.length)},s_nId=function(a,b){var c=a.$[b];c&&(s_pId(a),s_y(c,"selected"),c.setAttribute("aria-selected","true"),c=c.querySelector("a, .action-menu-button")||c,c.setAttribute("tabindex","0"),c.focus(),a.ka=b)},s_pId=function(a){if(null!=a.ka){var b=a.$[a.ka];b&&(s_z(b,"selected"),b.setAttribute("aria-selected",
"false"),(b.querySelector("a, .action-menu-button")||b).setAttribute("tabindex","-1"),a.element.focus(),a.ka=null)}};s_mId.prototype.kd=function(a){for(var b=0,c;c=this.$[b];b++)if(a==c){b!=this.ka&&s_nId(this,b);break}};
var s_rId=function(a){var b=(a=s__c(a,"ab_button"))&&s_65!=a;s_55&&s_85();a&&b&&s_qId(a)},s_sId=function(a){google.ac&&google.ac.cc&&google.ac.cc();s_ze(a.href);return!0},s_tId=function(a,b,c){32==c.keyCode&&s_ze(a.href)},s_uId=function(a){s_u(s_j("ufp"),"block");s_rId(a)},s_qId=function(a,b){var c=s_ra(a);if(void 0==s_gId[c]){var d=s__c(a,"ab_ctl");var e=null;d&&(d=s_m("ab_dropdown",d))&&(e=new s_mId(d));s_gId[c]=e}if(c=s_gId[c])s_y(a,"selected"),a.setAttribute("aria-expanded","true"),s_65=a,c.element.style.visibility=
"inherit",s_55=c,c=a.id.indexOf("am-b"),a.id&&-1!=c&&(c=s_Sc(a))&&s_x(c,"action-menu")&&(c=s_m("action-menu-panel",c))&&s_C(a,[c],[],"","&id="+a.id),s_je(document.body,"click",s_85),s_je(document.body,"keydown",s_vId),b&&s_oId(!0)},s_85=function(a){s_55&&((a=a||window.event)&&"click"==a.type&&s__c(s__e(a),"ab_button")&&(s_0e(a),a.preventDefault?a.preventDefault():a.returnValue=!1),s_ke(document.body,"click",s_85),s_ke(document.body,"keydown",s_vId),s_pId(s_55),s_55.element.style.visibility="hidden",
s_55=null);s_65&&(s_z(s_65,"selected"),s_65.setAttribute("aria-expanded","false"),s_65=null)},s_vId=function(a){27==a.keyCode&&s_85()},s_wId=function(a,b,c){if(9==c.keyCode)s_85();else if(27==c.keyCode){if(s_55)return s_85(),s_95(c)}else{if(38==c.keyCode||40==c.keyCode)return s_55?s_oId(40==c.keyCode):s_qId(a,!0),s_95(c);if(37==c.keyCode||39==c.keyCode)return s_95(c)}return!0},s_xId=function(a,b,c){s_55&&((a=s__c(s__e(c),"ab_dropdownitem"))?s_55.kd(a):s_pId(s_55))},s_yId=function(){s_55&&s_pId(s_55)},
s_zId=function(a,b,c){if(s_55)if(9==c.keyCode)s_85();else{if(27==c.keyCode)return a=s_65,s_85(),a.focus(),s_95(c);if(38==c.keyCode)return s_oId(!1),s_95(c);if(40==c.keyCode)return s_oId(!0),s_95(c);if(32==c.keyCode||37==c.keyCode||39==c.keyCode)return s_95(c)}return!0},s_95=function(a){s_0e(a);a.preventDefault&&a.preventDefault();return a.returnValue=!1},s_AId=function(a){return s_yb()?(37!=a.keyCode&&38!=a.keyCode&&39!=a.keyCode&&40!=a.keyCode||s_95(a),!1):!0},s_hId=function(a){var b=s_j("rcnt"),
c=s_qj();if(c&&b){var d=parseInt(s_Cd(c,"top"),10),e=s_jId(),e=e?e.offsetHeight:c.offsetHeight,b=s_Nd(b);if(a!=s_bId||d!=s_cId||e!=s_dId||b!=s_eId){s_bId=a;s_cId=d;s_dId=e;s_eId=b;var d=0,f;if(f=a)f=!s_aId.isch;f&&(c=s_Nd(c)+e,d=Math.max(0,a+7-b+c));s_fId=d}(a=s_j("center_col"))&&a.style.paddingTop!=s_fId+"px"&&(a.style.paddingTop=s_fId+"px")}return!1},s_BId=function(){var a=s_j("bbar");a&&s_u(a,!1)},s_CId=function(){var a=s_j("mbbar");a&&s_u(a,!1)},s_DId=function(a){s_45&&s_45.remove("bbh");s_ze(a.href)}, s_EId=function(a){s_s(a,"visibility","hidden");s_u(a,!0);var b=s_t(a);s_s(a,"margin-left",-Math.floor(b.width/2)+"px");s_s(a,"visibility","visible")};
var s_FId=!1;
s_nf("m",{init:function(a){s_35=a;s_FId||s_iId();s_FId=!0;s_jId()&&(a=s_j("lst-ib"),s_je(a,"focus",s_kId),s_je(a,"blur",s_lId),a==s_0c(document)&&s_kId());s_45=s_vk("local","abar");s_75=[];(a=s_j("abar_ps_on"))&&s_75.push(new s_25(a,s_x(a,"disabled")?s_35.msgs.sPersD:s_35.msgs.sPers));(a=s_j("abar_ps_off"))&&s_75.push(new s_25(a,s_x(a,"disabled")?s_35.msgs.hPersD:s_35.msgs.hPers));var b,c;s_45?c=s_45.get("bbh"):c="";a=document.getElementById("safesearch");"1"==c||a&&!a.getAttribute("data-safesearch-on")||!(b=
document.getElementById("bbar"))||(s_EId(b),s_45&&s_45.set("bbh",1));b&&"visible"==s_Bd(b,"visibility")||(b=document.getElementById("mbbar"))&&s_EId(b);s_4h("m",{cc:s_sId,hbke:s_wId,hdke:s_zId,hdhne:s_xId,hdhue:s_yId,go:s_tId,mskpe:s_AId,tdd:s_rId,tei:s_uId,hbb:s_BId,hmbb:s_CId,cbbl:s_DId},!0)},dispose:function(){if(s_jId()){var a=s_j("lst-ib");s_ke(a,"focus",s_kId);s_ke(a,"blur",s_lId)}s_55&&s_85();s_gId={};for(a=0;a<s_75.length;a++)s_75[a].destroy();s_75=[];s_6h("ab","cc hbke hdke hdhne hdhue go mskpe tdd tei tne".split(" "))}});


s_F("m");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sf */
try{
s_G("sf");s_nf("sf",{init:function(){s_4h("sf",{chk:function(a){a.checked=!0},lck:function(a){a.form.q.value?a.checked=!0:s_he().href="/doodles/"},tia:function(a,b){a=s_n("SCRIPT",{src:b.js});s_3d(a)}})}});

s_F("sf");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy47 */
try{
s_G("sy47");var s_Tra=function(a){this.Aa=a;this.Aa._wect=this;this.ka={};this.$={};this.ha={}};s_Tra.prototype.wc=null;var s_Ura=function(a){a._wect||new s_Tra(a);return a._wect};s_Tra.prototype.ma=function(a,b){void 0==this.ka[a]&&(this.ka[a]=0);this.ka[a]++;for(var c=this.$[a],d=c.length,e,f=0;f<d;f++)try{c[f](b)}catch(g){e=e||g}this.ka[a]--;if(e)throw e;};
var s_Vra=function(a,b){a.ha[b]||(a.ha[b]=s_e(a.ma,a,b));return a.ha[b]},s_Wra=function(a,b){return a+":"+(b?"capture":"bubble")},s_Xra=function(a,b,c,d){d=!!d;var e=s_Wra(b,d);a.$[e]||(a.$[e]=[],a.Aa.addEventListener(b,s_Vra(a,e),d));a.$[e].push(c)},s_Yra=function(a,b,c,d){d=!!d;var e=s_Wra(b,d);a.$[e]&&(a.ka[e]&&(a.$[e]=a.$[e].slice(0)),c=a.$[e].indexOf(c),-1!=c&&a.$[e].splice(c,1),0==a.$[e].length&&(a.$[e]=void 0,a.Aa.removeEventListener(b,s_Vra(a,e),d)))};
var s_Zl=function(a,b,c,d){s_Yra(s_Ura(a),b,c,d)},s__l=function(a,b,c,d,e){var f=s_Ura(a);s_Xra(f,b,c,d);e&&s_Zra(a,function(){s_Xra(f,b,c,d)},function(){s_Yra(f,b,c,d)})},s_Zra=function(a,b,c){a.addEventListener("DOMFocusIn",function(a){a.target&&"TEXTAREA"==a.target.tagName&&b()},!1);a.addEventListener("DOMFocusOut",function(a){a.target&&"TEXTAREA"==a.target.tagName&&c()},!1)};
var s__ra=/iPhone|iPod|iPad/,s_0l=function(){return s_Ca(navigator.userAgent,"Android")},s_0ra=/Mac OS X.+Silk\//;var s_1l=s__ra.test(navigator.userAgent)||s_0l()||s_0ra.test(navigator.userAgent),s_2l=window.navigator.msPointerEnabled,s_3l=s_1l?"touchstart":s_2l?"MSPointerDown":"mousedown",s_1ra=s_1l?"touchmove":s_2l?"MSPointerMove":"mousemove",s_4l=s_1l?"touchend":s_2l?"MSPointerUp":"mouseup",s_2ra=s_2l?"MSPointerCancel":"touchcancel",s_6l=function(a,b,c,d,e,f,g){s_1l||s_2l||(b=s_5l(b),c=s_5l(c),d=s_5l(d));f=!!f;s__l(a,s_3l,b,f,g);s__l(a,s_1ra,c,f,g);s__l(a,s_4l,d,f,g);s__l(a,s_2ra,e,f,g)},s_5l=function(a){return function(b){b.touches= [];b.targetTouches=[];b.changedTouches=[];b.type!=s_4l&&(b.touches[0]=b,b.targetTouches[0]=b);b.changedTouches[0]=b;a(b)}},s_7l=function(a){return a.touches||[a]},s_8l=function(a){return(s_2l?[a]:a.changedTouches)||[]};

s_F("sy47");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4d */
try{
s_G("sy4d");var s_lsa=function(a){return new RegExp("(?:^| +)"+a+"(?:$| +)")},s_am=function(a,b,c,d){var e=s_lsa(c),f=d||"",g=s_lsa(f);if(b!=e.test(a.className)||d&&b==g.test(a.className))d=a.className.replace(e," ").replace(g," "),a.className=d+" "+(b?c:f)};
s_F("sy4d");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4e */
try{
s_G("sy4e");var s_bm=function(a,b,c,d){this.kDa=!!c;this.FMa=!!d;this.kDa&&(this.qD=Math.max(800,this.qD));this.element=a;this.onclick=b;s_1l?a.ontouchstart=s_e(this.iAa,this):a.onmousedown=s_e(this.N2,this);s_2l&&(a.style.msTouchAction="none");a.onclick=s_e(this.JR,this)},s_msa=[],s_nsa=function(a){s_msa.push(a);window.setTimeout(function(){var b=s_msa.indexOf(a);-1!=b&&s_msa.splice(b,1)},2500)};s_=s_bm.prototype;s_.oy=100;s_.qD=500;
s_.dispose=function(){s_1l?this.element.ontouchstart=null:this.element.onmousedown=null;this.element.onclick=null};
s_.iAa=function(a){this.x_&&!this.x_(a)||1<s_7l(a).length||(this.FMa||a.stopPropagation(),this.Ge=!0,this.kDa||(this.element.ontouchend=s_e(this.JR,this),document.body.addEventListener("touchend",s_osa(this),!1)),document.body.addEventListener("touchmove",s_psa(this),!1),document.body.addEventListener("touchcancel",s_osa(this),!1),s_qsa(this),a=a.touches[0],this.xT=new s_hc(a.clientX,a.clientY),this.oy?this.bYa=window.setTimeout(s_e(this.hS,this,!0),this.oy):this.hS(!0),this.kDa||s_nsa(this.xT))};
s_.N2=function(a){if(!this.x_||this.x_(a))this.FMa||a.stopPropagation(),this.Ge=!0,s_qsa(this),this.hS(!0)};s_.JR=function(a){if(this.x_&&!this.x_(a))return this.xs(),!0;if(a){if("touchend"==a.type&&!this.Ge)return!1;a.stopPropagation()}this.hS(!0);window.setTimeout(s_e(function(){this.xs();if(s_rsa(this))this.onclick(a)},this),0);return!1};s_.L2=function(a){1<s_7l(a).length?this.xs():(a=s_7l(a)[0],a=new s_hc(a.clientX,a.clientY),this.xT&&12<s_jc(this.xT,a)&&this.xs())};
var s_psa=function(a){a.HFa||(a.HFa=s_e(a.L2,a));return a.HFa};s_bm.prototype.xs=function(){window.clearTimeout(this.bYa);window.clearTimeout(this.kza);this.hS(!1);this.Ge=!1;document.body.removeEventListener&&(document.body.removeEventListener("touchmove",s_psa(this),!1),document.body.removeEventListener("touchend",s_osa(this),!1),document.body.removeEventListener("touchcancel",s_osa(this),!1))};var s_osa=function(a){a.JFa||(a.JFa=s_e(a.xs,a));return a.JFa};
s_bm.prototype.hS=function(a){this.e7&&(a&&!s_rsa(this)||s_am(this.element,a,this.e7))};var s_rsa=function(a){if(!document.elementFromPoint||!a.xT||!s_c(a.xT.x))return!0;for(var b=document.elementFromPoint(a.xT.x,a.xT.y);b;){if(b==a.element)return!0;b=b.parentNode}return!1},s_qsa=function(a){a.vAa&&(a.kza=window.setTimeout(s_e(function(){this.Ge=!1;this.vAa()},a),a.qD))};

s_F("sy4e");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syjq */
try{
var s_S_=function(a){var b={mod:a,prop:"shop"};return function(a,d){if(d){var c=d.getAttribute("href")||null;c&&setTimeout(function(){return s_ze(c,!1)},150)}google.ml(a,!1,b)}},s_T_=function(){if(!s_G5c){var a=s_ja("google.sh.sg");if(!a)return new s_H5c;s_G5c=new s_H5c(a)}return s_G5c};s_G("syjq");
var s_H5c=function(a){s_P(this,a,0,-1,null,null)};s_h(s_H5c,s_O);var s_J5c=function(){var a=s_T_();return s_T(a,s_I5c,1)},s_U_=function(a){return s_T(a,s_K5c,2)},s_I5c=function(a){s_P(this,a,0,-1,null,null)};s_h(s_I5c,s_O);var s_K5c=function(a){s_P(this,a,0,-1,null,null)};s_h(s_K5c,s_O);
var s_V_=function(a){s_P(this,a,0,-1,null,null)};s_h(s_V_,s_O);s_V_.prototype.getUrl=function(){return s_Q(this,1)};s_V_.prototype.getTitle=function(){return s_Q(this,10)};s_V_.prototype.setTitle=function(a){s_S(this,10,a)};var s_M5c=function(a){s_P(this,a,0,-1,s_L5c,null)};s_h(s_M5c,s_O);var s_L5c=[2];s_M5c.prototype.setMap=function(a){s_Fi(this,1,a)};var s_O5c=function(a){s_P(this,a,0,-1,s_N5c,null)};s_h(s_O5c,s_O);var s_N5c=[1];s_O5c.prototype.kl=function(){return s_Q(this,3)};var s_P5c=function(a){s_P(this,a,0,-1,null,null)};s_h(s_P5c,s_O);var s_W_=function(a){s_P(this,a,0,-1,null,null)};s_h(s_W_,s_O);s_W_.prototype.getTitle=function(){return s_Q(this,1)};s_W_.prototype.setTitle=function(a){s_S(this,1,a)};var s_X_=function(a){return s_T(a,s_M5c,25)};s_W_.prototype.Vf=function(){return s_Q(this,4)};s_W_.prototype.Fh=function(a){s_S(this,4,a)};s_W_.prototype.nz=function(){return s_Q(this,14)};
var s_G5c=null,s_Q5c=null,s_R5c=function(a,b){this.Bc=b||document.body;this.$=a},s_Y_=function(a,b){var c=parseFloat(s_Cd(a,"font-size"));a=s_Cd(a,"line-height");"normal"==a&&(a="1.2");c=0<a.indexOf("px")?Math.floor(parseFloat(a)):Math.floor(parseFloat(a)*c);return b*c+c/2},s_Z_=function(){return s_U_(s_T_())},s_S5c=function(){var a=s_J5c();return s_c(a)&&!!s_Q(a,4)},s_T5c=function(a){var b=s_Cc("DIV");b.innerHTML=a;return b.firstElementChild},s___=function(a,b){var c=s_S_(a);return function(a){for(var d=
[],f=0;f<arguments.length;++f)d[f-0]=arguments[f];try{b.apply(null,[].concat(s_ea(d)))}catch(g){c(g)}}},s_U5c=function(a,b){var c=a.offsetHeight;if(!c||0>=b)return!1;if(c<=b)return!0;for(var d=a.cloneNode(!0),e=0,f=a.childNodes,g=f.length,k=[],l,m,n,ba,t=0;t<g;t++)if(l=a.childNodes[t],m=l.childNodes.length,l=(n=(n=s_Rc(l))&&l.hasChildNodes())?l.childNodes[0]:l,ba=s_Wc(l),ba=ba.length,e+=ba,k.push(e),n&&(null===l.nodeValue||1<m))return!1;l=m=0;for(n=g-1;m<=e||c>b;){t=m+Math.floor((e-m)/2);for(c=t-
3;l<=n;l++)s_p(f[l],s_Wc(d.childNodes[l]));l=t;for(var w=ba=0,B=0;B<d.childNodes.length;B++){var G=s_Wc(d.childNodes[B]).length;if(w+G>l&&w<=l){ba=B;break}w+=G}l=ba;ba=0==l?0:k[l-1];c=s_Wc(f[l]).substring(0,c-ba);s_xa(c)&&0<l&&(l--,c=s_Wc(f[l]));s_p(f[l],c+"...");for(c=l+1;c<g;c++)s_p(f[c],"");c=a.offsetHeight;c>b?(e=t-1,n=n>l?l:n):m=t+1}for(a=g-1;0<=a;a--)if(s_xa(s_Wc(f[a])))s_o(f[a]);else break;return!0};

s_F("syjq");s_H();
}catch(e){_DumpException(e)}
/* _Module_:tl */
try{
var s_oMd=function(a,b){if(b.translated){var c=b.full;a=s_k(c);b=s_j(b.snippet);var d=s_k(c+"-transdiv"),e=s_k(c+"-origLink"),c=s_k(c+"-transLink"),f=s_v(e);s_u(c,f);s_u(d,!f);s_u(e,!f);b?(s_u(a,!1),s_u(b,f)):s_u(a,f)}else s_nMd(a,b)},s_nMd=function(a,b){google.log("","&ved="+b.ved,void 0,void 0);var c={};c.key=s_pMd;c.source=b.source.substring(0,2);c.target=b.target.substring(0,2);c.format="html";var d=s_k(b.full);c.q=d.innerHTML;s_qMd(c,function(c){if(c.error)throw Error("dg`"+c.error);var d=c.data.translations[0].translatedText,
e=b.keepSnippet,k=b.snippitClassPrefix;c=b.full;var l=s_k(c),m=s_j(b.snippet);m&&(e?s_u(m,!1):s_o(m));s_u(l,!1);m=s_Cc("div");m.id=c+"-transdiv";s_u(m,!0);m.innerHTML=d;s_Sc(l).appendChild(m);e||(d=s_m(k+"__translate-span",l),s_o(d));k=s_m(k+"__translate-span",m);s_o(k);k=s_k(c+"-transLink");s_u(k,!1);c=s_k(c+"-origLink");s_u(c,!0);s_Re(a,"translated","true")})};s_G("tl");
var s_rMd=function(){};s_h(s_rMd,s_9d);s_rMd.prototype.$=s_ce();var s_sMd=function(){s_ee(this)},s_qMd=function(a,b){var c=(new s_sMd).Mb.$();c?c.send(a,b):s_gl("https://www.googleapis.com/language/translate/v2",function(a){a=a.target;s_hl(a)?(a=s_cf(a.getResponse()).data,b({data:a})):b({error:s_jl(a)})},"POST",s_6e(a),{"X-HTTP-Method-Override":"GET"},5E3,!0)};s_$d(s_rMd,s_sMd);
var s_pMd="";s_nf("tl",{init:s___("tl",function(a){s_c(a.key)&&(s_pMd=a.key);s_5h("tl",{tr:s_oMd},s_S_("tl"))})});

s_F("tl");s_H();
}catch(e){_DumpException(e)}
/* _Module_:em12 */
try{
s_G("em12");
s_F("em12");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy23 */
try{
s_G("sy23");var s_Pj=function(a){s_q.call(this);this.Qc=1;this.ma=[];this.qa=0;this.ka=[];this.ha={};this.Ea=!!a};s_h(s_Pj,s_q);s_Pj.prototype.subscribe=function(a,b,c){var d=this.ha[a];d||(d=this.ha[a]=[]);var e=this.Qc;this.ka[e]=a;this.ka[e+1]=b;this.ka[e+2]=c;this.Qc=e+3;d.push(e);return e};s_Pj.prototype.Pv=function(a){var b=this.ka[a];if(b){var c=this.ha[b];0!=this.qa?(this.ma.push(a),this.ka[a+1]=s_d):(c&&s_2a(c,a),delete this.ka[a],delete this.ka[a+1],delete this.ka[a+2])}return!!b};
s_Pj.prototype.publish=function(a,b){var c=this.ha[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.Ea)for(e=0;e<c.length;e++){var g=c[e];s_Pka(this.ka[g+1],this.ka[g+2],d)}else{this.qa++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.ka[g+1].apply(this.ka[g+2],d)}finally{if(this.qa--,0<this.ma.length&&0==this.qa)for(;g=this.ma.pop();)this.Pv(g)}}return 0!=e}return!1};var s_Pka=function(a,b,c){s_rf(function(){a.apply(b,c)})};
s_Pj.prototype.clear=function(a){if(a){var b=this.ha[a];b&&(s_i(b,this.Pv,this),delete this.ha[a])}else this.ka.length=0,this.ha={}};s_Pj.prototype.ze=function(a){if(a){var b=this.ha[a];return b?b.length:0}a=0;for(b in this.ha)a+=this.ze(b);return a};s_Pj.prototype.Ha=function(){s_Pj.Ba.Ha.call(this);this.clear();this.ma.length=0};

s_F("sy23");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy24 */
try{
var s_Qka=function(a){var b,c=arguments.length;if(!c)return null;if(1==c)return arguments[0];var d=[],e=Infinity;for(b=0;b<c;b++){for(var f=[],g=arguments[b];g;)f.unshift(g),g=g.parentNode;d.push(f);e=Math.min(e,f.length)}f=null;for(b=0;b<e;b++){for(var g=d[0][b],k=1;k<c;k++)if(g!=d[k][b])return f;f=g}return f};s_G("sy24");
var s_Qj=new s_Pj,s_Rj=function(a){s_Qj.publish("r",a)},s_Rka=function(){s_Qj.publish("ra")},s_Sj=function(a,b,c){var d;null===c?d=b:d=function(a){a&&a==s__c(c,"xpdbox")&&b(a)};return s_Qj.subscribe(a,d)},s_Tj=function(a,b){return s_Sj("es",a,b||null)},s_Uj=function(a,b){return s_Sj("ef",a,b||null)},s_Vj=function(a,b){return s_Sj("cs",a,b||null)},s_Ska=function(a,b){return s_Sj("cf",a,b||null)},s_Wj=function(a){return s_Qj.Pv(a)},s_Xj=function(a){s_Qj.publish("es",a)},s_Yj=function(a){s_Qj.publish("ef", a)},s_Zj=function(a){s_Qj.publish("cs",a)},s__j=function(a){s_Qj.publish("cf",a)};

s_F("sy24");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy5s */
try{
s_G("sy5s");var s_Zxa=function(a,b){for(b=new RegExp("(?:^|\\s)"+b+"(?:$|\\s)");a;){if(b.test(a.className))return a;a=a.parentElement}return null};var s__xa=function(a){return a?4<=a?4:3<=a?3:2<=a?2:1:1},s_0xa=function(a,b,c,d){a=a.split("?")[0];d=s__xa(d);b=b?b:0;c=c?c:0;var e=b*d,f=c*d,e=Math.min(1,2048/(e?e:1),2048/(f?f:1));b=Math.floor(b*e);c=Math.floor(c*e);return a+"?scale="+d+(c?"&h="+c:"")+(b?"&w="+b:"")};
var s_1xa=function(a,b,c){var d=s__xa(s_b.devicePixelRatio),e=s_0xa(a.getAttribute("data-bsrc"),b,c,d);a.setAttribute("data-bsrc",e);var f=function(){a.removeEventListener("load",f,!1);a.style.display="";a.removeAttribute("height");a.removeAttribute("width");var e=0!=s_b.SCALE_MAP;1!=d&&e&&(c||(c=a.height/d),b||(b=a.width/d));c&&a.setAttribute("height",c);b&&a.setAttribute("width",b);(e=s_Pc(a))&&s_u(e,!0)};a.addEventListener("load",f,!1)},s_2xa=function(a){var b={};if(!a.hasAttribute("data-vs"))return null; a.getAttribute("data-vs").split(",").forEach(function(a){a=a.split(":");b[a[0]]=a[1]});return b};
var s_3xa=[],s_4xa=[],s_5xa=[],s_6xa=s_d,s_7xa=function(){var a=s_l("lu_vs");a.length&&s_Jp(a)},s_Jp=function(a){a?(s_Wm(s_8xa),s_i(a,s_9xa)):s_7xa()},s_$xa=function(a){var b=s_2xa(a);if(!b)return null;var c=s__c(a,b.r);if(!c)return null;if(0==c.offsetWidth&&0==c.offsetHeight)return-1==s_4xa.indexOf(a)&&(s_4xa.push(a),s_5xa.push(s_Uj(s_e(s_9xa,null,a))),s_5xa.push(s_Ska(s_e(s_9xa,null,a)))),null;if(s_c(b.lukp)&&b.lukp){a=s_Zxa(c,"kno-mrg");var d=s_Zxa(c,"kno-mrg-m");d&&(d.style.width="auto",d.style.height=
"auto");if(a){var d=a.getElementsByClassName("img-kc-m")[0],e=a.getElementsByClassName("bi-io")[0],f=d&&!e&&s_sfa(a,d)&&0<d.offsetHeight&&0<d.offsetWidth,e=0;f&&(e=d.offsetHeight);a=a.offsetWidth-(f?d.offsetWidth:0);0<a&&0<e?(c.style.width=a+"px",c.style.height=e+"px"):0<a&&(c.style.width=a+"px")}}a=0;s_c(b.w)&&(a=Math.floor(c.offsetWidth*parseFloat(b.w)));d=0;s_c(b.h)&&(d=Math.floor(c.offsetHeight*parseFloat(b.h)));a&&d&&s_c(b.mhwr)&&(d=Math.max(d,a*parseFloat(b.mhwr)));return new s_lc(a,d)},s_9xa=
function(a){a.setAttribute("data-bsrc",a.getAttribute("data-bsrc").split("&")[0]);var b=s_$xa(a);if(b){var c=s_2xa(a);c&&"1"==c.o&&-1==s_3xa.indexOf(a)&&s_3xa.push(a);s_1xa(a,b.width,b.height);a.getAttribute("data-bsrc")!=a.getAttribute("src")&&(s_6xa(a),a.setAttribute("src",a.getAttribute("data-bsrc")))}},s_8xa=function(){s_i(s_3xa,s_9xa)};s_nf("vs",{init:s_7xa,dispose:function(){s_Xm(s_8xa);s_3xa=[];s_4xa=[];s_i(s_5xa,s_Wj);s_5xa=[]}});

s_F("sy5s");s_H();
}catch(e){_DumpException(e)}
/* _Module_:vs */
try{
s_G("vs");
s_F("vs");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy82 */
try{
s_G("sy82");
s_F("sy82");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sydj */
try{
s_G("sydj");var s_IG=function(){var a=this;this.ma=this.$="";this.ha=!1;this.ka="";this.qa=!1;s_xa(s_Sh("duf3"))||(this.qa=!0);s_Mh("duf3",function(b){a:{var c=s_GG(a.$),d=s_GG(b);if(s_Svb(c,d)&&!(0<=b.indexOf("d3sbx")))if(a.$=b,d.ZO)a.ha?(s_3h("duf3.cd"),s_3h("duf3.ty"),a.ha=!1):(s_3h("duf3.hide"),a.ka&&(s_ze(a.ka),a.ka=""));else if(d.V0){if(c.V0&&((b=!c.ZO&&!d.ZO&&c.aF==d.aF&&c.VEa==d.VEa&&c.widget!=d.widget)&&d.widget?d.CPa&&s_3h("duf3.rp",d.CPa):(s_3h("duf3.cd"),a.ha&&(s_3h("duf3.ty"),a.ha=!1)),b))break a;
a.ma=d.widget||"";b=new Map;b.set("entry_point",d.aF);s_rl(d.V0,b,d.sSa||void 0)}else s_HG("")}})},s_HG=function(a,b){var c=s_IG.Sa();if(c.ma)(a=document.querySelector("[data-dtype="+c.ma+"]"))&&s_I.Cb(s_f(s_3h,"duf3.rp",a)),c.ma="";else{var d=s_GG(c.$),e=s_GG(a);s_Svb(d,e)&&(c.$=a,c=s_Sh("fpstate"),s_Hf()||!(""!=e.widget&&void 0!=e.widget||""!=c&&s_ua(c,"d3"))?s_Ph("duf3",a,!!b):(c={},c.duf3=a,c.fpstate=e.widget||"",s_Oh(c,!!b)))}},s_GG=function(a){if(""==a)return{ZO:!0};var b=a.split(",");if(2>
b.length)return{ZO:!1,V0:null};a=b[0];var c=b[1],d="";2<b.length&&(d=b[2]);var b=s_j(c),e=document.querySelector("[data-duffy-target='"+c+"']")||void 0,f=null;b&&d&&(f=b.querySelector("[data-dtype="+d+"]"));return{ZO:!1,aF:a,VEa:c,widget:d,V0:b,sSa:e,CPa:f}},s_Svb=function(a,b){return a.ZO!=b.ZO||a.aF!=b.aF||a.VEa!=b.VEa||a.widget!=b.widget};s_ka(s_IG);

s_F("sydj");s_H();
}catch(e){_DumpException(e)}
/* _Module_:d3l */
try{
s_G("d3l");var s_Uwb=function(){s_IG.Sa()};s_V(function(a){s_M(a,"t-aTz9-_sUcEc",s_Uwb,null,null,function(a){s_Uwb.call(a)})});


s_F("d3l");s_H();
}catch(e){_DumpException(e)}
/* _Module_:emg */
try{
s_G("emg");
s_F("emg");s_H();
}catch(e){_DumpException(e)}
/* _Module_:emh */
try{
s_G("emh");
s_F("emh");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy3y */
try{
s_G("sy3y");var s_Lra=function(a,b,c){this.target=a;this.type=b;this.Kk=c},s_Mra=new s_Lf,s_Nra=0,s_Ol=function(a,b,c,d){s_je(a,b,c,d||!1);return new s_Lra(a,b,c)},s_Pl=function(a,b){var c="gt"+s_Nra++;s_Mra.set(c,b);"_GTL_"in a||(a._GTL_=[]);a._GTL_.push(c);return c};
var s_Ql=function(a,b,c){this.type=a;this.$=b;this.target=c},s_Ora=function(a,b,c,d){s_Ql.call(this,1,a,b);this.x=c;this.y=d};s_h(s_Ora,s_Ql);var s_Rl=function(a,b,c,d,e,f,g,k,l,m){s_Ql.call(this,3,a,b);this.direction=c;this.ma=0==c?c:c%2?1:2;this.touches=d;this.ka=e;this.ha=f;this.x=g;this.y=k;this.velocityX=l;this.velocityY=m};s_h(s_Rl,s_Ql);var s_Sl=function(a,b,c,d,e,f,g){s_Ql.call(this,4,a,b);this.scale=c;this.rotation=d;this.x=f;this.y=g};s_h(s_Sl,s_Ql); var s_Tl=function(a,b,c,d,e,f){s_Ql.call(this,a,b,c);this.touches=d;this.x=e;this.y=f};s_h(s_Tl,s_Ql);
var s_Ul=function(a,b,c,d){this.$=a;this.ka=b;this.x1=c;this.y1=d};s_Ul.prototype.clone=function(){return new s_Ul(this.$,this.ka,this.x1,this.y1)};s_Ul.prototype.equals=function(a){return this.$==a.$&&this.ka==a.ka&&this.x1==a.x1&&this.y1==a.y1};var s_Pra=function(a){var b=a.x1-a.$;a=a.y1-a.ka;return b*b+a*a},s_Vl=function(a){return new s_hc(s_fc(a.$,a.x1,.5),s_fc(a.ka,a.y1,.5))};
var s_Wl=function(){};s_h(s_Wl,s_9d);var s_Qra=function(){return"DEFAULT_ID"};s_Wl.prototype.ma=s_ce(s_Qra);s_Wl.prototype.ha=s_ce(s_Qra);s_Wl.prototype.$=s_ce(s_Qra);s_Wl.prototype.qa=s_ce(s_Qra);
var s_Rra=function(a){return!a||0==a.x&&0==a.y?0:Math.abs(a.x)>Math.abs(a.y)?0<a.x?6:4:0<a.y?5:3},s_Xl=function(a,b){return 0==b||2>=b&&a%2==b%2?!0:a==b},s_Yl=function(a,b,c,d){a=180*Math.atan2(d-b,c-a)/Math.PI;0>a&&(a=360+a);return a},s_Sra=function(a,b,c,d,e,f,g,k){a=Math.sqrt(s_Pra(new s_Ul(e,f,g,k)))/Math.sqrt(s_Pra(new s_Ul(a,b,c,d)));return isNaN(a)?1:isFinite(a)?a:10};

s_F("sy3y");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy48 */
try{
var s_3ra=/Chrome\/([0-9.]+)/,s_4ra=function(){return s_Ca(navigator.userAgent,"Chrome/")},s_5ra=/OS (\d+)_(\d+)(?:_(\d+))?/,s_6ra=function(a,b,c,d){return a<<21|b<<14|c<<7|d},s_7ra=function(){var a=s_5ra.exec(navigator.userAgent)||[];a.shift();return s_6ra.apply(null,a)},s_8ra=function(a){var b;if(b=s_0l()&&s_4ra())b=s_3ra.exec(navigator.userAgent),b=18==+(b?b[1]:"").split(".")[0];return b?new s_hc(a.clientX,a.pageY-window.scrollY):new s_hc(a.clientX,a.clientY)};s_G("sy48");
var s_9l,s_9ra,s_$ra,s_asa,s_bsa=function(a){if(!(2500<s_g()-s_9ra)){var b=s_8ra(a);if(!(1>b.x&&1>b.y)){for(var c=0;c<s_9l.length;c+=2)if(25>Math.abs(b.x-s_9l[c])&&25>Math.abs(b.y-s_9l[c+1])){s_9l.splice(c,c+2);return}a.stopPropagation();a.preventDefault();(a=s_$ra)&&a()}}},s_csa=function(a){var b=s_8ra(s_7l(a)[0]);s_9l.push(b.x,b.y);window.setTimeout(function(){for(var a=b.x,d=b.y,e=0;e<s_9l.length;e+=2)if(s_9l[e]==a&&s_9l[e+1]==d){s_9l.splice(e,e+2);break}s_$ra=void 0},2500)},s_dsa=function(){s_c(s_asa)||
(s_asa=s_7ra()>=s_6ra(6)||!0);return s_asa},s_$l=function(a,b,c){s_$ra=c;s_9l||(document.addEventListener("click",s_bsa,!0),c=s_csa,s_1l||s_2l||(c=s_5l(c)),s__l(document,s_3l,c,!0,!0),s_9l=[]);s_9ra=s_g();for(c=0;c<s_9l.length;c+=2)if(25>Math.abs(a-s_9l[c])&&25>Math.abs(b-s_9l[c+1])){s_9l.splice(c,c+2);break}};

s_F("sy48");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy49 */
try{
s_G("sy49");var s_esa=function(){this.ka=[];this.$=[]},s_fsa=function(a,b,c,d){a.ka.length=a.$.length=0;a.ka.push(b,d);a.$.push(c,d)},s_isa=function(a,b,c,d){var e=a.ka[a.ka.length-2]-b,f=a.$[a.$.length-2]-c,g=a.ka,k=a.ha;k&&e&&2<g.length&&0<k^0<e&&g.splice(0,g.length-2);g=a.$;(k=a.ma)&&f&&2<g.length&&0<k^0<f&&g.splice(0,g.length-2);s_gsa(a.ka,d);s_gsa(a.$,d);a.ka.push(b,d);a.$.push(c,d);a.ha=e;a.ma=f;return s_hsa(a,b,c,d)},s_gsa=function(a,b){for(;a.length&&250<b-a[1]||10<a.length;)a.splice(0,2)},s_jsa=function(a,
b,c,d){if(s_c(b)&&s_c(c)&&d)return s_gsa(a.ka,d),s_gsa(a.$,d),s_hsa(a,b,c,d)},s_hsa=function(a,b,c,d){b=a.ka.length?(b-a.ka[0])/(d-a.ka[1]):0;c=a.$.length?(c-a.$[0])/(d-a.$[1]):0;b=s_ksa(a,b);c=s_ksa(a,c);return new s_hc(b,c)},s_ksa=function(a,b){var c=Math.abs(b);5<c&&(c=6>a.$.length?1:5);return c*(0>b?-1:1)};

s_F("sy49");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4g */
try{
s_G("sy4g");
var s_fm=function(){};s_h(s_fm,s_Wl);s_ae(s_fm,s_Wl);s_fm.prototype.ma=function(a,b,c,d){c=[s_Ol(a,"click",function(c){d&&c.stopPropagation();b(new s_Ora(c,a,c.screenX,c.screenY))}),s_Ol(a,"keydown",function(c){var d=c.which||c.keyCode||c.key,e=a.tagName.toUpperCase();"TEXTAREA"==e||"BUTTON"==e||"INPUT"==e||a.isContentEditable||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey||13!=d&&32!=d&&3!=d||(32==d&&c.preventDefault(),b(c))})];return s_Pl(a,c)};
s_fm.prototype.ha=function(a,b,c,d,e,f,g){var k=e||0,l,m,n,ba,t,w=new s_esa,B=!1;e=function(a){B=a};var G=function(c){if(B){n=c.screenX;ba=c.screenY;var d=s_isa(w,n,ba,c.timeStamp);t=s_Rra(d);s_Xl(t,k)&&b(new s_Rl(c,a,t,1,l,m,n,ba,d.x,d.y))}};var I=function(b){if(s_Xl(t,k)){s_ke(a,"mousemove",G);s_ke(a,"mouseup",I);s_ke(a,"mouseout",I);var c=s_jsa(w,n,ba,b.timeStamp);d&&d(new s_Rl(b,a,t,1,l,m,b.screenX,b.screenY,c.x,c.y));g||s_$l(l,m)}};e=[s_Ol(a,"mousedown",function(b){l=n=b.screenX;m=ba=b.screenY;
s_fsa(w,l,m,b.timeStamp);c&&c(new s_Rl(b,a,0,1,l,m,n,ba,0,0));s_je(a,"mousemove",G);s_je(a,"mouseup",I);s_je(a,"mouseout",I)}),s_Ol(document.body,"mousedown",s_f(e,!0)),s_Ol(document.body,"mouseup",s_f(e,!1))];return s_Pl(a,e)};
s_fm.prototype.$=function(a,b,c,d,e){var f=!1,g=function(a){f=a},k=!1,l,m,n,ba,t,w=function(b){n=b.screenX;ba=b.screenY;t=s_Yl(l,m,n,ba);var d=s_Vl(new s_Ul(l,m,n,ba));c&&c(new s_Sl(b,a,1,0,0,d.x,d.y))},B=function(c){if(f){var d=c.screenX,e=c.screenY,g=s_Vl(new s_Ul(l,m,d,e));b(new s_Sl(c,a,s_Sra(l,m,n,ba,l,m,d,e),s_Yl(l,m,d,e)-t,0,g.x,g.y))}};var G=function(b){k=!1;s_ke(a,"mousedown",w);s_ke(a,"mousemove",B);s_ke(a,"mouseup",G);s_ke(a,"mouseout",G);if(d){var c=b.screenX,f=b.screenY,g=s_Vl(new s_Ul(l,
m,c,f));d(new s_Sl(b,a,s_Sra(l,m,n,ba,l,m,c,f),s_Yl(l,m,c,f)-t,0,g.x,g.y))}e||s_$l(l,m)};g=[s_Ol(a,"click",function(b){l=b.screenX;m=b.screenY;k||(s_je(a,"mousedown",w),s_je(a,"mousemove",B),s_je(a,"mouseup",G),s_je(a,"mouseout",G),k=!0)}),s_Ol(document.body,"mousedown",s_f(g,!0)),s_Ol(document.body,"mouseup",s_f(g,!1))];return s_Pl(a,g)};
s_fm.prototype.qa=function(a,b,c,d,e,f){var g,k,l=!1;e=function(a){l=a};var m=function(c){l&&b&&b(new s_Tl(6,c,a,1,c.screenX,c.screenY))};var n=function(b){s_ke(a,"mousemove",m);s_ke(a,"mouseup",n);s_ke(a,"mouseout",n);d&&d(new s_Tl(7,b,a,1,b.screenX,b.screenY));f||s_$l(g,k)};e=[s_Ol(a,"mousedown",function(b){g=b.screenX;k=b.screenY;c&&c(new s_Tl(5,b,a,1,g,k));s_je(a,"mousemove",m);s_je(a,"mouseup",n);s_je(a,"mouseout",n)}),s_Ol(document.body,"mousedown",s_f(e,!0)),s_Ol(document.body,"mouseup",s_f(e, !1))];return s_Pl(a,e)};

s_F("sy4g");s_H();
}catch(e){_DumpException(e)}
/* _Module_:emi */
try{
s_G("emi");

s_F("emi");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy3z */
try{
var s_usa=function(a,b){b=void 0===b?!1:b;var c=s_Mra.get(a);if(c&&c.length){for(var d,e=null,f=0;f<c.length;f++)d=c[f],d instanceof s_Lra?(s_ke(d.target,d.type,d.Kk,b),e=d.target):d();s_Mra.remove(a);e&&"_GTL_"in e&&s_2a(e._GTL_,a)}};s_G("sy3z");var s_gm=function(){s_ee(this)};s_$d(s_Wl,s_gm);s_ka(s_gm);var s_vsa=function(a,b){return s_gm.Sa().Mb.ma(a,b,void 0,void 0)},s_hm=function(a,b,c,d,e,f,g){return s_gm.Sa().Mb.ha(a,b,c,d,e,f,g)},s_wsa=function(a,b,c,d,e){return s_gm.Sa().Mb.qa(a,b,c,d,1,!0,e)},s_im=function(a){s_usa(a,!1)};

s_F("sy3z");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy42 */
try{
s_G("sy42");
s_F("sy42");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy44 */
try{
s_G("sy44");var s_mm=function(a,b,c){this.x=s_c(a)?a:0;this.y=s_c(b)?b:0;this.z=s_c(c)?c:0};s_mm.prototype.clone=function(){return new s_mm(this.x,this.y,this.z)};s_mm.prototype.Oa=function(){return[this.x,this.y,this.z]};
s_F("sy44");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy45 */
try{
var s_zsa=function(a){a:{var b=s_Ja("transform");if(void 0===a.style[b]&&(b=s_ad()+s_La(b),void 0!==a.style[b])){b=s_bd()+"-transform";break a}b="transform"}return s_Dd(a,b)||s_Dd(a,"transform")};s_G("sy45");var s_nm=function(a){return(a=a.exec(s_eb))?a[1]:""},s_Asa=function(){if(s_Tca)return s_nm(/Firefox\/([0-9.]+)/);if(s_Mb||s_Nb||s_Lb)return s_Wb;if(s_Fe)return s_Hb()?s_nm(/CriOS\/([0-9.]+)/):s_nm(/Chrome\/([0-9.]+)/);if(s_Vca&&!s_Hb())return s_nm(/Version\/([0-9.]+)/);if(s_De||s_Ee){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(s_eb);if(a)return a[1]+"."+a[2]}else if(s_Uca)return(a=s_nm(/Android\s+([0-9.]+)/))?a:s_nm(/Version\/([0-9.]+)/);return""}();
var s_Bsa=s_$c(function(){return!s_Mb||0<=s_Ha(s_Asa,9)}),s_Csa=s_$c(function(){return s_Qb||s_Nb||s_Pb&&0<=s_Ha(s_Asa,10)||s_Mb&&0<=s_Ha(s_Asa,10)}),s_om=function(a){a=s_zsa(a);var b=s_Dsa();return a&&b?(a=new b(a),new s_hc(a.m41,a.m42)):new s_hc(0,0)},s_pm=function(a,b,c){s_Bsa()&&(b=s_Csa()?"translate3d("+b+"px,"+c+"px,0px)":"translate("+b+"px,"+c+"px)",s_s(a,s_Esa(),b))},s_Fsa=function(a){a=s_zsa(a);var b=s_Dsa();return a&&b?(a=new b(a),new s_mm(a.m11,a.m22,a.m33)):new s_mm(0,0,0)},s_Esa=s_$c(function(){return s_Mb&& 9==s_0aa?"-ms-transform":"transform"}),s_Dsa=s_$c(function(){return s_c(s_b.WebKitCSSMatrix)?s_b.WebKitCSSMatrix:s_c(s_b.MSCSSMatrix)?s_b.MSCSSMatrix:s_c(s_b.CSSMatrix)?s_b.CSSMatrix:null});

s_F("sy45");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy46 */
try{
var s_Hsa=0,s_qm=function(a){return s_2l?a.pointerId:a.identifier},s_rm=function(a,b,c,d){var e=document.createEvent("HTMLEvents");e.initEvent(b,!0,!0);e.sender=c;e.Ig=d;a.dispatchEvent(e)},s_sm=function(a){return a+"_"+s_Hsa++};s_G("sy46");var s_tm=function(a,b,c){this.Db=a;this.rb=b;this.ha=c;this.ka=[];this.Ea=[];this.Da=[];this.Ga=[];this.qa=[];this.Wa=[]};s_tm.prototype.$=0;var s_Isa=function(a,b){b=s_8l(b);for(var c=b.length,d=0;d<a.$;d++){a.Ea[d]=void 0;for(var e=0;e<c;e++)if(a.ka[d]==s_qm(b[e])){a.Ea[d]=b[e];var f=!0;break}}return f};s_tm.prototype.reset=function(){this.$=0;this.Ca=this.ma=!1};s_tm.prototype.suspend=function(){this.Ca=!0}; var s_Jsa=function(a,b){b=b||0;var c=a.Ea[b];return c?c.clientX:a.Db[a.ka[b||0]]},s_Ksa=function(a,b){b=b||0;var c=a.Ea[b];return c?c.clientY:a.rb[a.ka[b||0]]};
var s_um=function(a,b,c){s_tm.call(this,b,c,1);this.Na=a;this.Ia=new s_esa};s_h(s_um,s_tm);s_um.prototype.nb=function(a){s_fsa(this.Ia,this.qa[0],this.Wa[0],a.timeStamp);this.Lb=this.qa[0];this.Za=this.Wa[0]};s_um.prototype.Zb=function(a){return this.Na.Za(a)};s_um.prototype.Ma=function(a){this.Lb=this.qa[0];this.Za=this.Wa[0];s_isa(this.Ia,s_Jsa(this),s_Ksa(this),a.timeStamp);this.Na.Pb(a);a.preventDefault()};
s_um.prototype.Ja=function(a){a&&(this.Xa=s_jsa(this.Ia,this.Db[this.ka[0]],this.rb[this.ka[0]],a.timeStamp)||void 0,a.preventDefault());this.Na.Kb(a);var b=this.qa[0],c=this.Wa[0];a&&s_dsa()?a.preventDefault():s_$l(b,c,void 0)};var s_Lsa=function(a){return s_Jsa(a)-a.Lb},s_Msa=function(a){return Math.abs(s_Ksa(a)-a.Za)>Math.abs(s_Lsa(a))};
var s_vm=function(a,b,c){s_tm.call(this,b,c,2);this.Ia=a};s_h(s_vm,s_tm);s_vm.prototype.nb=s_d;s_vm.prototype.Zb=function(a){return this.Ia.ha(a)};s_vm.prototype.Ma=function(a){this.Ia.ka(a);a.preventDefault()};s_vm.prototype.Ja=function(a){this.Ia.$(a);a&&a.preventDefault()};
var s_wm=function(a){this.ma=a;this.Aa=this.ma.va();this.ka={};this.ha={};this.$=[]},s_Nsa=[s_um,s_vm],s_Osa=function(a,b){var c=a.$[0];if(c)return c;c=new s_Nsa[0](b,a.ka,a.ha);return a.$[0]=c};
s_wm.prototype.Wa=function(a){var b=s_7l(a);var c=b.length;for(f in this.ka){for(var d=0;d<c;d++)if(f==s_qm(b[d])){var e=!0;break}e||s_Psa(this,+f)}e=s_8l(a);b=e.length;for(d=0;d<b;d++)c=s_qm(e[d]),s_c(this.ka[c])&&s_Psa(this,+c);c=!0;d=this.$.length;for(e=0;e<d;e++)if((b=this.$[e])&&b.$!=b.ha){c=!1;break}if(!c&&this.ma.Rb(a)){b=s_8l(a);c=b.length;for(e=0;e<c;e++){var f=b[e];var g=s_qm(f);this.ka[g]=f.clientX;this.ha[g]=f.clientY}for(e=0;e<d;e++)if(b=this.$[e])if(c=a,!b.Ca&&b.$!=b.ha){f=s_8l(c);for(var g=
Math.min(f.length,b.ha-b.$),k=0;k<g;k++){var l=f[k];b.ka[b.$]=s_qm(l);b.qa[b.$]=l.clientX;b.Wa[b.$]=l.clientY;b.$++}s_Isa(b,c);if(b.$==b.ha)for(k=0;k<b.ha;k++)b.Da[k]=b.Ga[k]=0;b.nb(c)}}};
s_wm.prototype.qa=function(a){for(var b,c=!0,d=this.$.length,e=0;e<d;e++)if((b=this.$[e])&&0<b.$){c=!1;break}if(!c){for(e=0;e<d;e++)if(b=this.$[e]){var c=void 0,f=b,g=a;if(!f.Ca&&f.$==f.ha&&s_Isa(f,g))if(f.ma)f.Ma(g);else{for(var k=0;k<f.ha;k++){var l=f.Ea[k];if(l){b=f.ka[k];var m=f.rb[b]-l.clientY;f.Da[k]+=Math.abs(f.Db[b]-l.clientX);f.Ga[k]+=Math.abs(m);c=c||2<f.Da[k]||2<f.Ga[k]}}if(c){for(k=0;k<f.ha;k++)f.qa[k]=s_Jsa(f,k),f.Wa[k]=s_Ksa(f,k);f.ma=f.Zb(g);f.ma?f.Ma(g):f.reset()}}}a=s_8l(a);d=a.length;
for(e=0;e<d;e++)c=a[e],b=s_qm(c),s_c(this.ka[b])&&(this.ka[b]=c.clientX,this.ha[b]=c.clientY)}};s_wm.prototype.Ea=function(a){for(var b,c=s_8l(a),d=c.length,e,f=0;f<d;f++)b=c[f],b=s_qm(b),s_c(this.ka[b])&&(this.ma.Xa(a),e=!0);if(e){e=this.$.length;for(f=0;f<e;f++)if(b=this.$[f]){var g=a;if(!b.Ca&&0<b.$&&s_Isa(b,g)){b.ma&&b.Ja(g);for(var g=b.$,k=0,l=0;l<g;l++)if(b.Ea[l]){var m=b;m.ka.splice(l-k,1);m.$--;m.ma=!1;k++}}}for(f=0;f<d;f++)b=c[f],b=s_qm(b),s_c(this.ka[b])&&(delete this.ka[b],delete this.ha[b])}};
var s_Psa=function(a,b){a.ma.Xa(null);for(var c=a.$.length,d=0;d<c;d++){var e=a.$[d];if(e){var f=void 0;if(!e.Ca&&0<e.$){for(var g=0;g<e.$;g++)if(e.ka[g]==b){f=g;break}s_c(f)&&(e.ma&&e.Ja(null),e.ka.splice(f,1),e.$--,e.ma=!1)}}}delete a.ka[b];delete a.ha[b]};s_wm.prototype.enable=function(a,b){var c=s_e(this.Ea,this);s_6l(this.Aa,s_e(this.Wa,this),s_e(this.qa,this),c,c,a,b)}; s_wm.prototype.reset=function(){for(var a in this.ka)delete this.ka[Number(a)],delete this.ha[Number(a)];for(a=0;a<this.$.length;a++){var b=this.$[a];b&&b.reset()}};

s_F("sy46");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4a */
try{
s_G("sy4a");var s_Qsa=s_Mb?"-ms-":s_Pb?"-moz-":s_Lb?0>s_Ha(s_Wb,"15.0")?"-o-":"-webkit-":"-webkit-",s_Rsa=s_Mb?"ms":s_Pb?"Moz":s_Lb?0>s_Ha(s_Wb,"15.0")?"O":"webkit":"webkit",s_xm=s_Qsa+"transform",s_ym=s_Rsa+"Transform",s_Ssa=s_Rsa+"Transition",s_zm=function(a){a=document.defaultView.getComputedStyle(a,null)[s_ym];return"undefined"!=typeof WebKitCSSMatrix?new WebKitCSSMatrix(a):"undefined"!=typeof MSCSSMatrix?new MSCSSMatrix(a):"undefined"!=typeof CSSMatrix?new CSSMatrix(a):{}};

s_F("sy4a");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4b */
try{
s_G("sy4b");var s_Tsa="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix(""),s_Usa=s_Qb?"webkitTransitionEnd":"transitionend",s_Vsa=function(a,b,c,d){a.style[s_Ssa]=(c||s_xm)+" "+b+"ms "+(d||"ease-in-out")},s_Bm=function(a,b,c){a.style[s_ym]=s_Am(b,c)},s_Am=function(a,b){a=s_ia(a)?a+"px":a||"0";b=s_ia(b)?b+"px":b||"0";return s_Tsa?"translate3d("+a+","+b+",0)":"translate("+a+","+b+")"};

s_F("sy4b");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4c */
try{
var s_Wsa=function(a,b,c){a.style.left=b+"px";a.style.top=c+"px"},s_Xsa=function(a,b,c,d,e,f,g,k){b="translate3d("+b+"px,"+c+"px,"+(d||0)+"px)";e&&(b+=" rotate("+e+"deg)");s_c(f)&&(b+=" scale3d("+f+","+f+",1)");a.style[s_ym]=b;g&&(a.style[s_ym+"OriginX"]=g+"px");k&&(a.style[s_ym+"OriginY"]=k+"px")};s_G("sy4c");
var s_Ysa=function(){this.Ia=s_e(this.Na,this);this.qa=this.Ea=0},s_Zsa=7/60,s__sa=7/60,s_0sa=1E3/60,s_1sa=.25*s_0sa,s_Cm=.01*s_0sa;s_=s_Ysa.prototype;s_.WB=function(){return 0};
s_.start=function(a,b,c,d){this.Ca=b;this.Wa=c;this.$=d.clone();this.ma=d.clone();b=s_2sa(a.x,this.$.x,this.Ca.x,this.Wa.x);if(0>b*a.x||!a.x&&b)this.qa=2;c=s_2sa(a.y,this.$.y,this.Ca.y,this.Wa.y);if(0>c*a.y||!a.y&&c)this.Ea=2;this.ka=new s_hc(b,c);if(Math.abs(this.ka.y)>=s_1sa||Math.abs(this.ka.x)>=s_1sa||this.qa||this.Ea){a=[];for(b=s_g();;){do this.$.y+=this.ka.y,this.$.x+=this.ka.x,this.Ga=Math.round(this.$.y),this.Da=Math.round(this.$.x),s_3sa(this,this.$.x,this.Ca.x,this.Wa.x,this.ka.x,this.qa,
!1),s_3sa(this,this.$.y,this.Ca.y,this.Wa.y,this.ka.y,this.Ea,!0),b+=s_0sa;while(this.Ga==this.ma.y&&this.Da==this.ma.x&&(Math.abs(this.ka.y)>=s_Cm||Math.abs(this.ka.x)>=s_Cm));if(0==this.qa&&0==this.Ea&&this.Ga==this.ma.y&&this.Da==this.ma.x)break;a.push(b,this.Da,this.Ga);this.ma.y=this.Ga;this.ma.x=this.Da}this.ha=a;if(this.ha.length)return this.Ja=window.setTimeout(this.Ia,this.ha[0]-s_g()),this.Ma=!0}};s_.CP=s_d;s_.stop=function(){this.Ma=!1;this.ha=[];window.clearTimeout(this.Ja);s_4sa(this.Mb)};
s_.dA=function(){return this.Ma};s_.pO=function(a){this.Mb=a};var s_2sa=function(a,b,c,d){a=a*s_0sa*1.25;Math.abs(a)<s_1sa&&(b<c?(a=(c-b)*s__sa,a=Math.max(a,s_Cm)):b>d&&(a=(b-d)*s__sa,a=-Math.max(a,s_Cm)));return a},s_3sa=function(a,b,c,d,e,f,g){var k;e&&(e*=.97,b<c?k=c-b:b>d&&(k=d-b),k?0>k*e?(f=2==f?0:1,e+=k*s_Zsa):(f=2,e=0<k?Math.max(k*s__sa,s_Cm):Math.min(k*s__sa,-s_Cm)):f=0,g?(a.ka.y=e,a.Ea=f):(a.ka.x=e,a.qa=f))}; s_Ysa.prototype.Na=function(){if(this.ha.length){var a=this.ha.splice(0,3);this.Mb.xc(a[1],a[2]);this.ha.length?(a=this.ha[0]-s_g(),this.Ja=window.setTimeout(this.Ia,a)):this.stop()}};
var s_5sa=1/3,s_6sa=2/3,s_7sa=[s_5sa,s_6sa,s_6sa,1],s_8sa=function(a,b,c,d){if(s_gc(b,0))return s_7sa;s_gc(a,b)?a=[0,0]:(b=(d-c*b)/(a-b),a=[b,b*a]);a=[a[0]/c,a[1]/d];c=a[0]*s_6sa;d=a[1]*s_6sa;return[c,d,c+s_5sa,d+s_5sa]};var s_Dm=function(){this.$=[]};s_Dm.prototype.ka=-5E-4;s_Dm.prototype.WB=function(){return 1};
s_Dm.prototype.start=function(a,b,c,d){var e=Math.abs(a.y)>=Math.abs(a.x);var f=e?a.y:a.x;a=e?b.y:b.x;var g=e?c.y:c.x,k=e?d.y:d.x;b=s_ec(e?d.x:d.y,e?b.x:b.y,e?c.x:c.y);if(k<a||k>g)a=k<a?a:g,this.$.push(e?b:a,e?a:b,500,"ease-out");else if(.25<=Math.abs(f)){d=(c=0>f)?-this.ka:this.ka;var l=c?a-k:g-k,m=f;if(l){var m=f*f,n=2*d,ba=-m/n;Math.abs(ba)<Math.abs(l)?(l=ba,m=0):(m=Math.sqrt(m+n*l),m*=0>f?-1:1);this.Ea=m;this.ha=(m-f)/d;this.qa=l;f="cubic-bezier("+s_8sa(f,this.Ea,this.ha,this.qa).join(",")+")";
k+=this.qa;this.$.push(e?b:k,e?k:b,this.ha,f);m=this.Ea}0!=m&&(a=c?a:g,k=50*m,g=a+k,this.ha=2*k/(m+0),f="cubic-bezier("+s_8sa(m,0,this.ha,k).join(",")+")",this.$.push(e?b:g,e?g:b,this.ha,f),this.$.push(e?b:a,e?a:b,500,"ease-out"))}if(this.$.length)return this.ma=!0,s_9sa(this),!0};var s_9sa=function(a){var b=a.$,c=b.shift(),d=b.shift(),e=b.shift(),b=b.shift();a.Mb.xc(c,d,e,b)};s_Dm.prototype.CP=function(){this.ma&&(this.$.length?s_9sa(this):(this.ma=!1,s_4sa(this.Mb)))}; s_Dm.prototype.stop=function(){this.ma=!1;this.$=[];s_4sa(this.Mb)};s_Dm.prototype.dA=function(){return this.ma};s_Dm.prototype.pO=function(a){this.Mb=a};
var s_$sa=function(){},s_ata=new s_$sa;s_$sa.prototype.$=1;var s_bta=function(a){this.Bd=a;this.$=[];this.ha=s_e(this.T2,this)};s_=s_bta.prototype;s_.initialize=function(){var a=this.Bd.va();this.ma=a;s__l(a,s_cta,s_e(this.DP,this));1==this.Bd.ha.WB()&&(s__l(a,s_dta,s_e(this.U2,this)),s__l(a,s_Em,s_e(this.RF,this)))};s_.addListener=function(a){this.$.push(a)};s_.U2=function(){window.clearInterval(this.ka);this.ka=window.setInterval(this.ha,30)};
s_.DP=function(){if(1!=this.Bd.ha.WB()||!this.Bd.ha.dA())for(var a=this.Bd.$.x,b=this.Bd.$.y,c=0;c<this.$.length;c++)this.$[c].ka(a,b,void 0)};s_.RF=function(){window.clearInterval(this.ka);this.DP()};s_.T2=function(){for(var a=s_zm(this.ma),b=a.m41,a=a.m42,c=0;c<this.$.length;c++)this.$[c].ka(b,a,!0)};
var s_Gm=function(a,b,c,d,e,f,g,k){this.Aa=a;this.Zb=a.parentNode;this.Aa.addEventListener(s_Usa,s_e(this.De,this),!1);this.Ub=new s_wm(this);this.Ub.enable(f);this.Wa=s_Osa(this.Ub,this);switch(s_ata.$){case 0:var l=new s_Ysa;break;case 1:l=new s_Dm}l.pO(this);this.ha=l;this.Ea=null;this.rb=!!b;this.Cc=!!c;this.Yd=d;this.Da=e||1;this.ka=s_Fm.clone();this.Ga=s_Fm.clone();this.Na=s_Fm.clone();this.$=s_Fm.clone();this.Db=1==this.Da?s_Xsa:s_Wsa;a=s_c(k)?k:this.ka.y;this.$.x=s_c(g)?g:this.ka.x;this.$.y=
a;this.Da=g=this.Da;this.Db=1==g?s_Xsa:s_Wsa;1!=g&&(this.Aa.style[s_Ssa]="",this.Aa.style[s_ym]="");2!=g&&s_Wsa(this.Aa,0,0);this.Db(this.Aa,this.$.x,this.$.y);this.Cd=[]},s_eta=s_sm("scroller:scroll_start"),s_Em=s_sm("scroller:scroll_end"),s_fta=s_sm("scroller:drag_end"),s_cta=s_sm("scroller:content_moved"),s_dta=s_sm("scroller:decel_start"),s_Fm=new s_hc(0,0);s_Gm.prototype.wc=null;s_Gm.prototype.Ja=!0;
s_Gm.prototype.reset=function(){this.stop();this.Wa.reset();s_Hm(this,this.Aa,0);this.Ca();s_Im(this,s_Xd(document.body)?this.ma.x:this.ka.x,this.ka.y)};
s_Gm.prototype.Ca=function(){this.qa=new s_lc(this.Zb.offsetWidth,this.Zb.offsetHeight);this.nb=new s_lc(this.fD||this.Aa.scrollWidth,this.Ed||this.Aa.scrollHeight);var a=new s_lc(Math.max(this.qa.width,this.nb.width),Math.max(this.qa.height,this.nb.height)),b=s_Xd(document.body);if(b){var c=a.width-this.qa.width;c=this.Ga.x?Math.min(c,this.Ga.x):c}else c=s_Fm.x-this.Ga.x;this.ka=new s_hc(c,s_Fm.y-this.Ga.y);this.ma=new s_hc(b?this.Na.x:Math.min(this.qa.width-a.width+this.Na.x,this.ka.x),Math.min(this.qa.height-
a.height+this.Na.y,this.ka.y));s_gta(this)};var s_gta=function(a){var b=s_ec(a.$.x,a.ma.x,a.ka.x),c=s_ec(a.$.y,a.ma.y,a.ka.y);a.$.x==b&&a.$.y==c||s_Im(a,b,c)},s_Im=function(a,b,c){a.$.x=b;a.$.y=c;a.Db(a.Aa,b,c);s_rm(a.Aa,s_cta,a)};s_Gm.prototype.mi=function(a,b,c,d){s_c(c)&&1==this.Da&&s_Hm(this,this.Aa,c,s_xm,d);s_Im(this,a,b)};s_Gm.prototype.De=function(a){a.target==this.Aa&&(this.Ia=!1,this.ha.CP())};
s_Gm.prototype.stop=function(){if(this.ha.dA())if(2==this.Da)this.ha.stop();else{var a=s_zm(this.Aa);if(this.Ia){this.$.x=a.m41;this.$.y=a.m42;this.Ma=!0;var b=this;window.setTimeout(function(){var c=s_zm(b.Aa);s_Hm(b,b.Aa,0);window.setTimeout(function(){b.Ma=!1},0);var d=c.m41+2*(c.m41-a.m41),c=c.m42+2*(c.m42-a.m42),d=s_ec(d,b.ma.x,b.ka.x),c=s_ec(c,b.ma.y,b.ka.y);s_hta(b,d,c)},0)}else s_hta(this,a.m41,a.m42)}};var s_hta=function(a,b,c){a.ha.stop();s_Im(a,b,c)};
s_Gm.prototype.Rb=function(a){if(this.Wa.ma)return!0;this.Ca();this.ha.dA()?(a.preventDefault(),this.Yb||a.stopPropagation(),this.stop()):s_Hm(this,this.Aa,0);this.Rv=this.$.clone();s_gta(this);return!0};s_Gm.prototype.Xa=function(){};s_Gm.prototype.Za=function(a){var b=s_Msa(this.Wa);if(this.Vc&&!b||!this.rb&&(!s_ita(this)||b))return!1;for(var b=0,c;c=this.Cd[b];++b)if(!c.ka(this,a))return!1;for(b=0;c=this.Cd[b];++b)c.$(this,a);return!0};
s_Gm.prototype.Pb=function(a){this.Ja||a.stopPropagation();a=this.Wa;var b=s_Ksa(a)-a.Za;if(!this.Ma){var c=this.Rv;a=c.x+s_Lsa(this.Wa);a=s_ita(this)?s_jta(a,this.ma.x,this.ka.x):0;b=c.y+b;b=this.rb?s_jta(b,this.ma.y,this.ka.y):0;this.Lb||(this.Lb=!0,s_rm(this.Aa,s_eta,this));s_Im(this,a,b)}};var s_ita=function(a){return a.Cc&&a.qa.width<a.nb.width},s_jta=function(a,b,c){a<b?a-=(a-b)/2:a>c&&(a-=(a-c)/2);return a};
s_Gm.prototype.Kb=function(){var a=this.Wa.Xa;s_rm(this.Aa,s_fta,this);if(a&&this.Yd&&!this.Ia){s_ita(this)||(a.x=0);this.rb||(a.y=0);var b=this.ha.start(a,this.ma,this.ka,this.$)}b?s_rm(this.Aa,s_dta,this):(s_gta(this),s_rm(this.Aa,s_Em,this),this.Lb=!1)};var s_Hm=function(a,b,c,d,e){a.Ia=0<c;s_Vsa(b,c,d,e)};s_Gm.prototype.va=function(){return this.Aa};s_Gm.prototype.getFrame=function(){return this.Zb};s_Gm.prototype.xc=s_Gm.prototype.mi; var s_4sa=function(a){s_Hm(a,a.Aa,0);s_rm(a.Aa,s_Em,a);a.Lb=!1},s_kta=function(a,b){a.Ea||(a.Ea=new s_bta(a),a.Ea.initialize());a.Ea.addListener(b)};

s_F("sy4c");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy40 */
try{
var s_lta=function(a,b){b?(s_y(a,"checked"),a.setAttribute("aria-checked","true")):(s_z(a,"checked"),a.setAttribute("aria-checked","false"))},s_mta=function(a){if(s_B(a,"s"))var b=a.previousSibling;var c=null!==a&&s_x(a,"checked");s_lta(a,!c);b&&!c&&s_lta(b,!1);a.hasAttribute("url")&&(b=a.getAttribute("url")+"&ei="+google.getEI(a),(a=s_B(a,"ved"))&&(b+="&ved="+a),s_ze(b))},s_nta=function(){var a={cdr_min:"cd_min",cdr_max:"cd_max"},b=s_j("ctbs");if(b)for(var c in a){var d=s_Gsa(s_j(c).value),d=d.replace(/^\s+|\s+$/g, "");b.value=b.value.replace(new RegExp("("+a[c]+":)([^,]*)"),"$1"+d)}return!0};s_G("sy40");
var s_Km=function(a,b,c,d){this.jj=a;this.$=b;this.ma=!!c;this.Zd=d?d:null;this.ka=null;this.ha=s_vsa(this.jj,s_e(this.Ea,this));s_oe(93,s_e(this.hide,this));s_Jm.push(this);a=this.jj.querySelectorAll(".mn-hd-txt");0<a.length&&this.jj.setAttribute("aria-label",a[0].innerHTML)},s_Jm=[];s_Km.prototype.hide=function(){this.$.setAttribute("aria-expanded","false");s_z(this.$,"hdtb-mn-o");s_y(this.$,"hdtb-mn-c");this.ka&&s_ke(document.body,"click",this.ka)};
s_Km.prototype.Ea=function(a){var b=s_x(this.$,"hdtb-mn-c");this.ma&&s_C(this.$,[this.$],[b]);b?(s_w(93),this.$.setAttribute("aria-expanded","true"),s_0e(a.$||a),this.Zd&&this.Zd(this.jj,this.$),s_z(this.$,"hdtb-mn-c"),s_y(this.$,"hdtb-mn-o"),this.ka=s_e(this.qa,this),s_je(document.body,"click",this.ka),b=this.$.querySelectorAll(".hdtb-mitem .qs"),0<b.length&&("keydown"==a.type&&a.preventDefault(),b[0].focus()),b=this.$.querySelectorAll(".hdtbSel"),0<b.length&&("keydown"==a.type&&a.preventDefault(), b[0].focus())):this.hide()};s_Km.prototype.qa=function(a){s_Tc(this.$,s__e(a.$||a))||this.hide()};s_Km.prototype.dispose=function(){s_im(this.ha);this.ha="";this.ka&&(s_ke(document.body,"click",this.ka),this.ka=null)};
var s_sta=function(a,b,c){this.jj=a;this.$=b;this.ha=s_j("hdtb-rst");c&&(this.Zd=c);this.ka=s_j("appbar");this.ma=[];a=this.$.querySelectorAll(".hdtb-mn-hd");b=this.$.querySelectorAll("ul.hdtbU");c=a.length;for(var d=0;d<c;d++){var e=a[d],f=b[d];e&&f&&this.ma.push(new s_Km(e,f,!1,s_ota))}s_vsa(this.jj,s_e(this.Ea,this));this.ha&&s_vsa(this.ha,s_e(this.qa,this));s_pta(this);s_qta(this);s_rta(this,s_Lm(this))},s_ota=function(a,b){var c=document.body||document.documentElement,d=s_Xd(c),e=d?"right":"left",
f=s_Md(a),g=s_Gd(a).y,k=s_Md(s_m("hdtb-mn-cont"))-s_Md(s_j("hdtbMenus")),l=f-15-k;s_m("gsa-tools-card")&&(l-=s_Md(s_j("hdtbMenus")));a=s_t(a);d&&(l=s_t(c).width-f-a.width-15+k-20);c=a.height+g+"px";d=a.width+30+30+"px";b.style[e]=l+"px";s_s(b,{top:c,"min-width":d})},s_tta=function(a){for(var b=a.ma.length,c=0;c<b;++c)a.ma[c].hide()},s_uta=function(a){var b=s_m("gsa-tools-card");b&&s_u(b,!0);a.Zd&&a.Zd();a.$.setAttribute("aria-expanded","true");s_rta(a,!0);s_z(a.$,"hdtb-td-c");s_z(a.$,"hdtb-td-h");
s_I.Cb(s_e(function(){s_y(this.$,"hdtb-td-o");this.ka&&s_y(this.ka,"hdtb-ab-o");s_pta(this);s_qta(this)},a));a=a.$.querySelectorAll(".hdtb-mn-hd");0<a.length&&a[0].focus()},s_vta=function(a){s_rta(a,!1);s_tta(a);a.$.setAttribute("aria-expanded","false");s_I.Cb(s_e(function(){s_z(this.$,"hdtb-td-o");s_y(this.$,"hdtb-td-c");this.ka&&s_z(this.ka,"hdtb-ab-o");s_pta(this);s_qta(this)},a));a.jj.focus();(a=s_m("gsa-tools-card"))&&s_u(a,!1)};
s_sta.prototype.Ea=function(){var a=!s_Lm(this);s_C(this.jj,[this.$],[a]);var b=s_j("tndd");b&&(b.style.webkitTransform="translate3d(0,-"+s_B(b,"height")+"px,0)");var b=s_j("htnmenu"),c=s_j("htnoverlay");b&&c&&(b.style.webkitTransform="translate3d(0,0,0)",c.style.opacity=0,s_z(document.body,"fxd"));a?s_uta(this):s_vta(this);for(a=0;a<s_Jm.length;a++)s_Jm[a].hide()};s_sta.prototype.qa=function(){s_ze(this.ha.getAttribute("data-url"))};
var s_Lm=function(a){return"hdtb-td-o"==a.$.className},s_pta=function(a){var b=s_j("botabar");b&&s_v(b)&&(s_t(b),b.style.marginTop=s_Lm(a)?a.$.offsetHeight+"px":0);a.ka&&s_A(a.ka,"hdtb-ab-o",s_Lm(a))},s_qta=function(a){var b=s_j("epbar"),c=s_j("slim_appbar");c&&!s_v(c)&&b&&(b.style.marginTop=s_Lm(a)?10+a.$.offsetHeight+"px":"10px")},s_rta=function(a,b){s_A(a.jj,"hdtb-tl-sel",b)};
var s_wta=function(a){s_P(this,a,0,10,null,null)};s_h(s_wta,s_O);var s_Mm=function(a){this.Ga=this.Da=null;this.Ia=s_Q(a,2);this.ka=s_Q(a,9);this.Wa=s_Q(a,3);this.ha=s_Q(a,1);this.Za=!1;this.ma=s_j("hdtb-more");this.qa=s_j("hdtb-more-mn");this.Db=s_j("hdtb-tls");this.Ea=s_j("hdtbMenus");this.Ca=s_j("hdtb-sc");this.Ja=s_j("hdtb-s")||s_j("hdtb-msb");this.ma&&this.qa&&new s_Km(this.ma,this.qa,!0,s_e(this.Ma,this));this.Ia&&!this.ka&&this.Ja&&(this.Da=s_xta(this.Ja));this.ma&&this.qa&&this.ka&&this.ha&&s_je(window,"resize",s_e(this.Ma,this,this.ma,this.qa));this.Db&&
this.Ea&&new s_sta(this.Db,this.Ea,s_e(this.Xa,this));this.Wa&&null!==this.Ea&&s_x(this.Ea,"hdtb-td-o")&&s_yta(this);a=s_j("hdtb");null===a||s_je(a,"keydown",s_e(this.Na,this));s_4h("tnv",{cb:s_mta,scf:s_nta});this.Ia&&this.Ca&&s_4h("tnv",{msc:s_e(this.rb,this)})};s_h(s_Mm,s_q);s_Mm.prototype.Ha=function(){for(var a=0;a<s_Jm.length;a++)s_Jm[a].dispose();s_Jm=[];this.Ga=this.Da=null;this.ha=this.Wa=!1;a=s_j("hdtb");null===a||s_ke(a,"keydown",this.Na)};
s_Mm.prototype.Na=function(a){this.Za||9!=a.keyCode||(s_z(s_j("hdtb"),"notl"),this.Za=!0)};s_Mm.prototype.Ma=function(a,b){var c=s_Af(),d=this.ha!=c,c=d?"right":"left",e=Math.max(0,s_Md(a));this.ha&&!this.ka?e=0:d&&(d=s_t(document.body||document.documentElement).width,e=Math.max(0,d-e-s_t(a).width));b.style[c]=e+"px"};s_Mm.prototype.Xa=function(){!this.Ga&&this.Wa&&s_yta(this)};
var s_xta=function(a){var b=s_Bd(a,"transform")?s_om(a).x:null,c=new s_Gm(a,!1,!0,!0,1,!0);c.Ja=!0;c.Yb=!0;c.Ca();a=s_m("hdtb-msel",a)||s_m("hdtb-tsel",a);var d=0;null!=b?d=b:a&&(b=document.body||document.documentElement,d=s_Xd(b)?Math.min(s_Md(a)-s_Md(b),c.ka.x):Math.max(Math.min(c.ka.x,-s_Md(a)+15),c.ma.x));c.mi(d,0);s_je(document,"orientationChange",c.Ca);return c},s_yta=function(a){var b=s_l("hdtb-mn-cont")[0];b&&(a.Ga=s_xta(b))}; s_Mm.prototype.rb=function(a,b,c){s_Hb()&&!s_Ab()&&c.target&&"A"==c.target.nodeName&&s_s(this.Ca,"overflow-scrolling","auto");a=this.ka?s_jm(this.Ca):Math.abs(this.Da.$.x);(b=s_vk("session","tnv"))&&b.set("hdtb-pos",a)};

s_F("sy40");s_H();
}catch(e){_DumpException(e)}
/* _Module_:tnv */
try{
var s_zta=function(a){s_Mm.call(this,a.Ka.$(s_wta,"top_nav"))};s_h(s_zta,s_Mm);s_G("tnv");var s_Ata=function(a){this.Ka=a};s_V(function(a){s_M(a,"t-js5htJpaNsk",s_zta,s_Ata,null,function(a,c){s_zta.call(a,c)})});


s_F("tnv");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy1w */
try{
var s_Eka=function(a){if(!arguments.length)return[];for(var b=[],c=arguments[0].length,d=1;d<arguments.length;d++)arguments[d].length<c&&(c=arguments[d].length);for(d=0;d<c;d++){for(var e=[],f=0;f<arguments.length;f++)e.push(arguments[f][d]);b.push(e)}return b};s_G("sy1w");
var s_W=function(a){a=a.XM;var b=a.rootElement;b||(b=a.rootElement=s_m(a.uN));return b},s_Fka=function(a){for(;!a.Ja;)if(a=a.parentElement,!a)return null;return a.Ja},s_Jj=function(a){a=s_W(a);s_Ij(a)},s_Ij=function(a){(a=s_Fka(a))&&a.render()},s_Kj=function(a,b,c,d){s_Vh(s_W(a),b,c,d)},s_Gka=function(a){a=s_re(a);for(var b=0,c=a.length;b<c;b++){var d=a[b];if(s_ua(d,"r-"))return d.substring(2)}return null},s_Hka=function(a){a=s_Gka(a);s_Ria(a,!0)},s_Lj=function(a){if(a){var b=a.__ctx;return b?b.bP()||
null:(a=s_Gka(a))?s_Ria(a):null}return null},s_Ika=function(a){if(a.__ctx)return null;a=(a=s_Gka(a))?(a=s_Qi.$[a]||null)?a.dom:null:null;return a},s_X=function(a){var b=a.__ctx;if(b)return(a=b.bP())?s_E(a):s_tf(null);(a=s_Gka(a))?(a=s_Qi.$[a]||null)?(a.controller||s_Qia(a),a.qr||(a.qr=s_wf(),s_kia(a)),a=a.qr.$):a=s_tf(null):a=s_tf(null);return a};

s_F("sy1w");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy1x */
try{
s_G("sy1x");var s_Y=function(a){this.Ia=a;this.Da=a.XM.Yo||""};s_Y.prototype.Pa=function(){return s_W(this.Ia)};var s_Jka=function(a,b,c){b="."+a.Da+"-"+b;c&&(b+=",."+a.Da+"-"+c);return b},s_Z=function(a,b,c){return a.Pa().querySelector(s_Jka(a,b,c))},s_Mj=function(a,b,c){return a.Pa().querySelectorAll(s_Jka(a,b,c))},s__=function(a,b){return(a=s_Z(a,b,void 0))?s_X(a):s_tf(null)};s_Y.prototype.AY=function(a){return(a=s_Z(this,a,void 0))&&s_Lj(a)}; var s_Nj=function(a,b){var c=[];s_i(s_Mj(a,b,void 0),function(a){c.push(s_X(a))},a);return c};

s_F("sy1x");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy64 */
try{
var s_jza=function(a,b){for(var c=a.search(s_dda),d=0,e,f=[];0<=(e=s_cda(a,d,b,c));){d=a.indexOf("&",e);if(0>d||d>c)d=c;e+=b.length+1;f.push(s_Aa(a.substr(e,d-e)))}return f};s_G("sy64");var s_kza=[1,2],s_aq=function(){this.$={};this.ka=0;this.ma=null;this.ha="";this.Wa=null;this.qa=this.Ea=0};s_aq.prototype.hasListener=function(a){return!!this.$[s_ra(a)]};
s_aq.prototype.listen=function(a,b,c,d,e){c=c||s_kza;var f=s_ra(a);if(e)this.unlisten(a);else if(this.$[f])throw Error("xd");this.$[f]={element:a,p0:b,eventTypes:c,context:d};s_Ya(c,1)&&(0==this.ka&&(d&&s_pa(d.rha)&&d.rha()?this.Wa=s_r(window,"mousedown",this.Ca,!0,this):s_Xba?this.ha=s_wsa(window.document.documentElement,void 0,s_e(this.Ia,this),void 0,{passive:!1,capture:!0}):this.ma=s_r(window,"click",this.Ca,!0,this)),this.ka++);s_Ya(c,2)&&(0==this.Ea&&s_r(window,"keydown",this.Ga,!0,this),this.Ea++);
s_Ya(c,3)&&(0==this.qa&&s_r(window,"focus",this.Da,!0,this),this.qa++)};s_aq.prototype.unlisten=function(a){(a=this.$[s_ra(a)])&&s_lza(this,a)};var s_lza=function(a,b){s_Ya(b.eventTypes,1)&&(a.ka--,0==a.ka&&(a.Wa?a.Wa=null:a.ha?(s_im(a.ha),a.ha=""):a.ma&&(a.ma=null)));s_Ya(b.eventTypes,2)&&a.Ea--;s_Ya(b.eventTypes,3)&&a.qa--;delete a.$[s_ra(b.element)]};s_aq.prototype.yd=function(a){(a=this.$[s_ra(a)])&&s_mza(this,a,0)};
var s_mza=function(a,b,c,d){try{var e=b.p0.call(b.context,c,d)}catch(f){s_le(f)}(c=!1===e)||s_lza(a,b);return!c};s_aq.prototype.Ia=function(a){s_nza(this,new s_kd(a.$))&&(a.$.stopPropagation(),a.$.preventDefault())};s_aq.prototype.Ca=function(a){s_nza(this,a)};var s_nza=function(a,b){if("attention-ping"==b.target.id)return!1;var c=!1,d;for(d in a.$){var e=a.$[d];s_Ya(e.eventTypes,1)&&!s_Tc(e.element,b.target)&&s_mza(a,e,1,b.target)&&(c=!0)}return c};
s_aq.prototype.Ga=function(a){if(27==a.keyCode){for(var b in this.$){var c=this.$[b];s_Ya(c.eventTypes,2)&&s_mza(this,c,2)}a.stopPropagation();a.preventDefault()}};s_aq.prototype.Da=function(a){for(var b in this.$){var c=this.$[b];!s_Ya(c.eventTypes,3)||s_Hba(a.target)&&s_Tc(c.element,a.target)||s_mza(this,c,3,a.target)}};var s_bq=new s_aq,s_cq=s_e(s_bq.listen,s_bq),s_dq=s_e(s_bq.unlisten,s_bq),s_oza=s_e(s_bq.yd,s_bq),s_pza=s_e(s_bq.hasListener,s_bq);

s_F("sy64");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy8b */
try{
s_G("sy8b");var s_Wv=function(a,b,c,d,e,f,g,k,l){var m=s_3Ta(c),n=s_Ud(a),ba=s_Kd(a);if(ba){var t=s_kca(ba),ba=Math.max(n.left,t.left),w=Math.min(n.left+n.width,t.left+t.width);if(ba<=w){var B=Math.max(n.top,t.top),t=Math.min(n.top+n.height,t.top+t.height);B<=t&&(n.left=ba,n.top=B,n.width=w-ba,n.height=t-B)}}ba=s_pc(a);w=s_pc(c);if(ba.$!=w.$){ba=ba.$.body;w=s_1c(w);B=new s_hc(0,0);t=s_Bc(s_oc(ba));if(s_Qaa(t,"parent")){var G=ba;do{var I=t==w?s_Jd(G):s_tca(G);B.x+=I.x;B.y+=I.y}while(t&&t!=w&&t!=t.parent&&(G=t.frameElement)&&
(t=t.parent))}ba=s_kc(B,s_Jd(ba));n.left+=ba.x;n.top+=ba.y}a=s_4Ta(a,b);b=n.left;a&4?b+=n.width:a&2&&(b+=n.width/2);n=new s_hc(b,n.top+(a&1?n.height:0));n=s_kc(n,m);e&&(n.x+=(a&4?-1:1)*e.x,n.y+=(a&1?-1:1)*e.y);if(g)if(l)var N=l;else if(N=s_Kd(c))N.top-=m.y,N.right-=m.x,N.bottom-=m.y,N.left-=m.x;return s_Vv(n,c,d,f,N,g,k)},s_3Ta=function(a){if(a=a.offsetParent){var b="HTML"==a.tagName||"BODY"==a.tagName;if(!b||"static"!=s_Ed(a)){var c=s_Jd(a);b||(c=s_kc(c,new s_hc(s_jm(a),a.scrollTop)))}}return c||
new s_hc},s_Vv=function(a,b,c,d,e,f,g){a=a.clone();var k=s_4Ta(b,c);c=s_t(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var l=0;if(d||0!=k)k&4?a.x-=g.width+(d?d.right:0):k&2?a.x-=g.width/2:d&&(a.x+=d.left),k&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;k=g;l=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,l|=1);if(f&16){var m=d.x;d.x<e.left&&(d.x=e.left,l|=4);d.x+k.width>e.right&&(k.width=Math.min(e.right-
d.x,m+k.width-e.left),k.width=Math.max(k.width,0),l|=4)}d.x+k.width>e.right&&f&1&&(d.x=Math.max(e.right-k.width,e.left),l|=1);f&2&&(l|=(d.x<e.left?16:0)|(d.x+k.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,l|=2);f&32&&(m=d.y,d.y<e.top&&(d.y=e.top,l|=8),d.y+k.height>e.bottom&&(k.height=Math.min(e.bottom-d.y,m+k.height-e.top),k.height=Math.max(k.height,0),l|=8));d.y+k.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-k.height,e.top),l|=2);f&8&&(l|=(d.y<e.top?64:0)|(d.y+k.height>e.bottom?128:0));e=l}else e=
256;l=e}f=new s_zd(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;s_Fd(b,s_lca(f));g=s_xsa(f);s_mc(c,g)||(c=g,a=s_Rba(s_pc(s_oc(b))),!s_Mb||s_Xb("10")||a&&s_Xb("8")?(b=b.style,s_Pb?b.MozBoxSizing="border-box":s_Qb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+"px"):(g=b.style,a?(a=s_0d(b),b=s_Ld(b),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom- b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e},s_4Ta=function(a,b){return(b&8&&s_Xd(a)?b^4:b)&-9};

s_F("sy8b");s_H();
}catch(e){_DumpException(e)}
/* _Module_:mrn */
try{
var s_f5;s_G("mrn");var s_g5=function(a){s_q.call(this);s_f5||(s_f5=s_CAd);this.Wa=s_W(this);this.ka=a.Dd();this.jj=s_Z(a,"_UwgkgYBDrI");this.ha=null;this.ma=!1;this.Ea=this.qa=null;this.Ca=s_j("lb")};s_h(s_g5,s_q);var s_DAd=[2],s_EAd=function(){return!1};s_g5.prototype.Da=function(a){s_FAd(this,!1);2==a&&this.jj.focus();return!1};
var s_FAd=function(a,b,c){b!=("none"!=a.ka.style.display)&&(a.ka.parentNode!=a.Ca&&a.Ca.appendChild(a.ka),s_u(a.ka,b),b?(s_Wv(a.jj,9,a.ka,8),a.ka.focus(),s_cq(a.ka,a.Da,s_DAd,a,!0),a.qa=s_r(window,"click",a.Ga,!0,a),a.Ea=s_r(window,"keyup",a.Ia,!0,a)):(s_GAd(a,null),a.jj.focus(),s_dq(a.ka),s_rd(a.qa),a.qa=null,s_rd(a.Ea),a.Ea=null),s_C(c||a.ka,[a.ka],[b]))};
s_g5.prototype.Ga=function(a){if("attention-ping"!=a.target.id&&a.target!=this.jj){var b=void 0;if(s_Tc(this.ka,a.target)&&a.target!=this.ka)for(b=a.target;b.parentNode!=this.ka;)b=b.parentNode;s_FAd(this,!1,b)}};s_g5.prototype.Ia=function(a){13==(a.which||a.keyCode)&&s_FAd(this,!1,this.ha||void 0)};var s_GAd=function(a,b){b!=a.ha&&(a.ha&&s_z(a.ha,s_f5.Bz),b&&!s_x(b,s_f5.K_)?(s_y(b,s_f5.Bz),a.ha=b,b.focus()):a.ha=null)}; s_g5.prototype.Ha=function(){s_dq(this.ka);s_rd(this.qa);s_rd(this.Ea);s_Tc(this.Wa,this.ka)||this.Wa.appendChild(this.ka);s_g5.Ba.Ha.call(this)};
var s_HAd=function(a){s_Y.call(this,a)};s_h(s_HAd,s_Y);s_HAd.prototype.Dd=function(){return s_Z(this,"4ixgWLBslXg")};var s_CAd={Bz:"t6psHzYPBsD__highlighted",K_:"t6psHzYPBsD__separator"};
s_V(function(a){s_M(a,"t-Nfexb0d83t0",s_g5,null,s_HAd,function(a,c,d){s_g5.call(a,d)});s_N(a,"mSRaIWm1OeU",function(a){s_FAd(a,"none"==a.ka.style.display)});s_N(a,"1rILPBv56Z8",function(a,c){if(c=c.event()){var b=c.which||c.keyCode;switch(b){case 40:case 38:case 9:var b=40==b||9==b&&!c.shiftKey,e=a.ha;if(e)if(b){do e=e.nextElementSibling||a.ka.firstElementChild;while(s_x(e,s_f5.K_))}else{do e=e.previousElementSibling||a.ka.lastElementChild;while(s_x(e,s_f5.K_))}else if(b)for(e=a.ka.firstElementChild;null!=
e&&s_x(e,s_f5.K_);)e=e.nextElementSibling;else for(e=a.ka.lastElementChild;null!=e&&s_x(e,s_f5.K_);)e=e.previousElementSibling;s_GAd(a,e);a.ha.focus()}s_Fg(c);s_Gg(c)}});s_N(a,"GB-JqtwpQI4",function(a){a.ma||s_oe(94,s_EAd);a.ma=!0});s_N(a,"fmpHtAq2VGM",function(a){a.ma&&s_qe(94,s_EAd);a.ma=!1});s_N(a,"1-l5Y2Ws2-4",function(a,c){(c=c.node())&&s_GAd(a,c)})});


s_F("mrn");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy1l */
try{
s_G("sy1l");var s_nj=function(a){s_P(this,a,0,-1,null,null)};s_h(s_nj,s_O);var s_oj=function(a){return s_Q(a,220802553)};
s_F("sy1l");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4t */
try{
s_G("sy4t");
s_F("sy4t");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4v */
try{
var s_wn=function(a){s_Re(a,"logged","1")},s_xn=function(a){return s_Se(a,"logged")};s_G("sy4v");var s_yn=function(a,b,c){s_Kj(a,"ct_ia",{TF:!!b,Jt:c})},s_zn=function(a,b,c,d){s_Kj(a,"ct_ia",{TF:!!b,Gy:0!=c,uZa:d})};var s_An=function(){s_yn(this,!0)};s_An.prototype.Nl=s_d;s_An.prototype.Ut=s_d;s_An.prototype.hidden=s_d;
s_F("sy4v");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy54 */
try{
s_G("sy54");var s_Fn=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};s_Fn.prototype.clone=function(){return new s_Fn(this.start,this.end)};var s_Uua=function(a){return a.end-a.start};
s_F("sy54");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy59 */
try{
s_G("sy59");var s_Xua=function(a,b,c,d,e){this.Nb=a;this.Ca=b;this.Da=c;this.Ga=d;this.Wa=[];this.ma=this.$=this.Ea=null;this.ka=!1;this.qa=e||null;this.ha=[];s_Vua(this,this.Ca,"dragstart",function(a){a.preventDefault();return!1});s_Vua(this,this.Ca,"mousedown",s_e(function(a){s_0ba(a)&&!this.ka&&(this.$=s_Xd(this.Nb)?-a.screenX:a.screenX,this.ma=a.screenY,this.qa&&s_y(this.Ca,this.qa),this.Ea=s_r(document,"mousemove",this.Ia,!1,this))},this));s_Vua(this,document,"mouseup",s_e(function(){if(this.ka){var a=s_g();
s_pd(document,"click",function(b){100>s_g()-a&&(b.preventDefault(),b.stopPropagation())},!0)}s_Wua(this)},this));s_Vua(this,document,"mouseout",s_e(function(a){a.relatedTarget&&"HTML"!=a.relatedTarget.nodeName||s_Wua(this)},this))};
s_Xua.prototype.Ia=function(a){var b=s_Xd(this.Nb)?-a.screenX:a.screenX,c=a.screenY;if(this.ka){if(this.Da){var d=b-this.$;this.$=b;s_lm(this.Nb,s_jm(this.Nb)-d)}this.Ga&&(d=c-this.ma,this.$=c,this.Nb.scrollTop-=d)}else{if(this.Da){var e=b-this.$;d=Math.abs(e)-4;0<d&&(this.ka=!0,this.$=b,0>e&&(d*=-1),b=s_jm(this.Nb),s_lm(this.Nb,b-d))}this.Ga&&(b=c-this.ma,d=Math.abs(b)-4,0<d&&(this.ka=!0,this.ma=c,0>b&&(d*=-1),this.Nb.scrollTop-=d))}a.preventDefault()};
var s_Wua=function(a){null!=a.Ea&&s_rd(a.Ea);a.Ea=null;a.$=null;a.ma=null;a.ka=!1;a.qa&&s_z(a.Ca,a.qa);for(var b=0;b<a.ha.length;b++)a.ha[b]()},s_Vua=function(a,b,c,d){s_r(b,c,d);a.Wa.push(function(){s_qd(b,c,d)})};s_Xua.prototype.dispose=function(){for(var a=0;a<this.Wa.length;a++)this.Wa[a]();this.Wa=[]};

s_F("sy59");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy5a */
try{
s_G("sy5a");var s_Hn=function(a,b,c){this.Nb=a;this.Ca=b;this.Bd=null;this.Ea=s_Xd(a)?-1:1;this.ma=[];this.ha=[];this.Wa=this.Da=this.Ga=null;this.qa=!1;this.ka=null;this.Ia=!1;if(s_c(c)?c:s_Yua(this))s_s(a,{"overflow-x":"auto","overflow-scrolling":"touch"}),s_Zua(this,a),s_Hf()&&(this.ka=new s_Xua(a,b,!0,!1),this.ma.push(s_e(this.ka.dispose,this.ka)));else{c=s_jm(a);var d=s_Cd(a,"overflow-x");"scroll"!=d&&"auto"!=d||s_s(a,{"overflow-x":"inherit"});this.Bd=new s_Gm(b,!1,!0,!0,1,!1,-c*this.Ea);this.Bd.ha.ka=-.0055;
s_Gn(this,window,"resize",s_e(this.Bd.Ca,this.Bd))}};s_h(s_Hn,s_q);var s__ua=function(a,b){a.Bd?(s_Gn(a,a.Ca,s_Em,b),a.ha.push(b),a.ka&&a.ka.ha.push(b)):s_Gn(a,a.Nb,"scroll",b)},s_0ua=function(a){return Math.max(a.Ca.scrollWidth-a.Nb.offsetWidth,0)};s_Hn.prototype.In=function(){return this.Bd?-this.Bd.$.x*this.Ea:s_jm(this.Nb)};
s_Hn.prototype.Sy=function(a){if(this.Bd){a=Math.max(0,Math.min(s_0ua(this),a));var b=this.Bd;s_Im(b,-a*this.Ea,b.$.y);for(b=0;b<this.ha.length;b++)this.ha[b]()}else s_lm(this.Nb,a);s_1ua(this,a)};
s_Hn.prototype.mi=function(a,b,c){s_1ua(this,a);this.qa=!0;if(this.Bd){this.Bd.mi(-a*this.Ea,0,b);var d=this.ha;0<d.length&&window.setTimeout(function(){for(var a=0;a<d.length;a++)d[a]()},b)}else var e=this.Nb,f=s_jm(e),g=s_g(),k=g+b,l=c||function(a){return-Math.cos(a*Math.PI)/2+.5},m=window.setInterval(s_e(function(){var c=s_g(),d=l(c>k?1:(c-g)/b);s_lm(e,f+(a-f)*d);c>k&&(window.clearInterval(m),this.qa=!1)},this),15)};
var s_Yua=function(a){if(s_xb()&&!s_Cb("9.0"))return!0;var b=/(^|\d)(mobile|tablet)(\d|$)/,c=window.google&&window.google.kDEB;if(c&&b.test(c))return!1;if(s_Hf())return!0;if(s_Xd(a.Nb))return!1;a=s_Hb()&&s_Ib("5");b=s_Fb()&&s_zb()&&s_Cb("28");return a||b},s_Zua=function(a,b){!s_Gb()&&!s_fb("iPod")||s_Ib("8")||s_Gn(a,window,"scroll",function(){if(b.scrollHeight){var a=s_Ud(b),d=s_yc().y;s_s(b,"overflow-scrolling",d<a.top+a.height&&d>a.top-s_wc().height?"touch":"auto")}})},s_2ua=function(a,b,c,d){a.Ga=
b;a.Da=c;a.Wa=d;b=s_e(function(){s_1ua(this,this.In())},a);s_Gn(a,a.Nb,"scroll",b);s_Gn(a,window,"resize",b)},s_1ua=function(a,b){a.Wa&&!a.qa&&(s_A(a.Ga,a.Wa,0>=b),s_A(a.Da,a.Wa,b>=s_0ua(a)))},s_Gn=function(a,b,c,d){s_r(b,c,d);a.ma.push(function(){s_qd(b,c,d)})};s_Hn.prototype.Ha=function(){for(var a=0,b;b=this.ma[a++];)b();this.ma=[]};

s_F("sy5a");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy55 */
try{
s_G("sy55");var s_In=function(a,b){s_q.call(this);this.Nb=a;s_Pb||s_Ob?s_s(a,"overflow-x","hidden"):s_s(a,"overflow-x","auto");this.ma=b;this.ha=s_Xd(this.Nb);this.ka=!1};s_h(s_In,s_q);var s_3ua=function(a,b){return new s_In(a,b)};s_=s_In.prototype;s_.In=function(){return s_jm(this.Nb)};s_.Sy=function(a){s_lm(this.Nb,a)};s_.tfa=function(){};s_.eza=function(){return this.ka};
s_.mi=function(a,b,c){this.ka=!0;var d=this.In(),e=s_g(),f=e+b,g=window.setInterval(s_e(function(){var k=s_g(),l=(c||function(a){return-Math.cos(a*Math.PI)/2+.5})(k>f?1:(k-e)/b);this.Sy(d+(a-d)*l);k>f&&(window.clearInterval(g),this.ka=!1)},this),15)};s_.bQ=function(){return Math.max(this.ma.scrollWidth-this.Nb.offsetWidth,0)};s_.rfa=function(a){s_r(this.Nb,"scroll",a)};s_.fza=function(a){s_qd(this.Nb,"scroll",a)};s_.Uu=function(){var a=this.In(),a=this.ha?-a:a;return new s_Fn(a,a+this.Nb.offsetWidth)};
s_.Uw=function(a,b){var c=this.Uu();b=b||0;return a.offsetLeft+a.offsetWidth*b<=c.end&&a.offsetLeft+a.offsetWidth*(1-b)>=c.start};s_.Ua=function(){var a=s_zc(s_pc(this.Nb).$).scrollTop,b=a+s_wc().height,c=s_Ud(this.Nb);return c.top<b&&c.top+c.height>a};

var s_Jn=function(a,b){s_In.call(this,a,b);this.Bd=this.wna(a,b);this.$(this.Bd)};s_h(s_Jn,s_In);s_=s_Jn.prototype;s_.wna=function(a,b){b=new s_Hn(a,b,!0);(s_Pb||s_Mb)&&s_s(a,"overflow-x","hidden");return b};s_.In=function(){return this.Bd.In()};s_.Sy=function(a){this.Bd.Sy(a)};s_.tfa=function(a,b){s_2ua(this.Bd,a,b,"nb-disabled")};s_.mi=function(a,b,c){this.Bd.mi(a,b,c)};s_.eza=function(){return this.Bd.qa};s_.bQ=function(){return s_0ua(this.Bd)};s_.rfa=function(a){s__ua(this.Bd,a)}; s_.fza=function(a){var b=this.Bd;if(b.Bd){s_qd(b.Ca,s_Em,a);var c=b.ha.indexOf(a);-1<c&&b.ha.splice(c,1);b.ka&&(b=b.ka,a=b.ha.indexOf(a),-1<a&&b.ha.splice(a,1))}else s_qd(b.Nb,"scroll",a)};s_3ua=s_f(s_9c,s_Jn);

var s_4ua=function(a,b){s_Jn.call(this,a,b)};s_h(s_4ua,s_Jn);s_f(s_9c,s_4ua);
s_F("sy55");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy57 */
try{
s_G("sy57");var s_Kn=function(a,b,c){s_q.call(this);this.Tf=null!=c?s_e(a,c):a;this.ha=b;this.Zd=s_e(this.lVa,this);this.ka=[]};s_h(s_Kn,s_q);s_=s_Kn.prototype;s_.OW=!1;s_.P4=0;s_.Sq=null;s_.$V=function(a){this.ka=arguments;this.Sq||this.P4?this.OW=!0:s_6ua(this)};s_.stop=function(){this.Sq&&(s_8f(this.Sq),this.Sq=null,this.OW=!1,this.ka=[])};s_.pause=function(){this.P4++};s_.resume=function(){this.P4--;this.P4||!this.OW||this.Sq||(this.OW=!1,s_6ua(this))};s_.Ha=function(){s_Kn.Ba.Ha.call(this);this.stop()}; s_.lVa=function(){this.Sq=null;this.OW&&!this.P4&&(this.OW=!1,s_6ua(this))};var s_6ua=function(a){a.Sq=s_7f(a.Zd,a.ha);a.Tf.apply(null,a.ka)};

s_F("sy57");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy58 */
try{
var s_7ua=function(a,b){b=s_Wa(a,b,void 0);return 0<=b?(s_1a(a,b),!0):!1};s_G("sy58");var s_Ln=function(a,b){s_na(b)||(b=[b]);b=s_Ra(b,function(a){return s_ha(a)?a:a.Gf+" "+a.duration+"s "+a.timing+" "+a.Tc+"s"});s_8ua(a,b.join(","))},s_Mn=function(a){s_8ua(a,"")},s_Nn=s_$c(function(){if(s_Mb)return s_Xb("10.0");var a=s_Cc("DIV"),b=s_bd(),c={transition:"opacity 1s linear"};b&&(c[b+"-transition"]="opacity 1s linear");s_dc(a,s_xba("div",{style:c}));return""!=s_Bd(a.firstChild,"transition")}),s_8ua=function(a,b){s_s(a,"transition",b)};

s_F("sy58");s_H();
}catch(e){_DumpException(e)}
/* _Module_:ssc */
try{
s_G("ssc");var s_On=function(a,b){s_q.call(this);this.Fa=b;this.Nb=this.Fa.getContainer();this.ha=s_Xd(this.Nb);this.Da=s_Z(this.Fa,"nrHhR706PmE");this.Bd=s_3ua(this.Nb,this.Da);this.$(this.Bd);this.qa=s_Z(this.Fa,"9tocbtsvb20");this.Wa=s_Z(this.Fa,"98UL0CHUQk0");this.qa&&this.Wa&&(this.ha?this.Bd.tfa(this.Wa,this.qa):this.Bd.tfa(this.qa,this.Wa));this.Ca=!1;this.Ia=0;this.rb=null;this.ka=[];this.Ga=[];this.ma=new s_Gj(this);this.Ma=this.Na=!1;this.Za=s_Hb()&&s_Fe?!1:a.Ka.get("store_offset_in_history");this.Db=
new s_Kn(this.Yb,300,this);this.$(this.Db);var c=s_e(this.nb,this),d=s_e(this.w0,this);this.Ja=s_e(function(){s_I.Cb(s_e(function(){e()||(!this.Na&&!this.Ca&&50<=this.Bd.In()&&(this.Na=!0,s_Kj(this,"sc_fus"),s_Ue(this.Nb)&&s_D(this.Nb)),this.Ma||(s_Kj(this,"sc_fts"),this.Ma=!0),this.w0(),s_Kj(this,"sc_se"),this.Za&&this.Db.$V(),0<this.Ga.length&&s_9ua(this))},this))},this);this.Bd.rfa(this.Ja);var e=s_e(this.isDisposed,this);this.Ea=function(){s_I.Cb(function(){e()||(c(),d())})};s_Wm(this.Ea);this.ma.listen(window,
"scroll",this.Ea);this.ma.listen(this.Nb,"scroll",this.Ea);this.ma.listen(this.Nb,"touchstart",s_hd);s_oj(a.ie())&&this.ma.listen(this.Nb,"mousedown",s_hd);this.ha&&s_Rb&&(s_u(this.Nb,!1),s_I.Cb(s_e(function(){s_u(this.Nb,!0)},this)));s_Kj(this,"attn-swp-init")};s_h(s_On,s_q);s_=s_On.prototype;s_.Ha=function(){s_Kj(this,"attn-swp-dis");s_Xm(this.Ea);this.ma.removeAll();this.Bd.fza(this.Ja);s_On.Ba.Ha.call(this)};s_.In=function(){return this.Bd.In()};s_.Sy=function(a){this.Bd.Sy(a)};
s_.EL=function(a){a=a.event().target;a={controller:s_Lj(a),Wr:a,Th:!1};this.ka.push(a);this.Bd.Uw(a.Wr)&&this.Bd.Ua()&&a.controller.Nl();this.w0()};s_.fQ=function(){};s_.w0=function(){s_i(this.ka,function(a){var b=this.Bd.Uw(a.Wr)&&this.Bd.Ua();b&&!a.Th&&a.controller.Ut();!b&&a.Th&&a.controller.hidden();a.Th=b},this)};s_.AFa=function(){var a=s_$ua;this.Ia=850;this.rb=a||null};s_.hfa=function(){return this.Bd.eza()};var s_ava=function(a){!s_x(a,"nb-disabled")&&s_Ue(a)&&s_C(a)};
s_On.prototype.Y7=function(a,b,c){var d=s_bva(this,a);b&&(d-=this.Nb.offsetWidth/2-s_cva(this)-a.offsetWidth/2);c?this.Sy(d):s_dva(this,d)};
var s_dva=function(a,b){a.Ca=!0;s_eva(a,b);b=s_ec(b,0,a.Bd.bQ());var c=0==a.Ia?350:Math.floor(Math.abs(b-a.In())*a.Ia/a.Nb.offsetWidth);a.Bd.mi(b,c,a.rb);s_I.setTimeout(s_e(a.Xa,a),c)},s_eva=function(a,b){var c=a.ha?-b:b,d=c+a.Nb.offsetWidth;s_i(a.ka,function(a){var b=a.Wr;b.offsetLeft<=d&&b.offsetLeft+b.offsetWidth>=c&&a.controller.Nl()},a)},s_cva=function(a){var b=0,c=s_Nc(a.Da);c&&(b=s_km(c)-s_km(a.Da));return b};s_On.prototype.Xa=function(){this.Ca=!1;s_Kj(this,"sc_sae")};
s_On.prototype.nb=function(){s_i(this.ka,function(a){this.Bd.Ua()&&this.Bd.Uw(a.Wr)&&a.controller.Nl()},this)};s_On.prototype.Uw=function(a,b){return this.Bd.Uw(a,b)};var s_9ua=function(a){var b=s_Sc(a.ka[0].Wr),c=a.In(),d=a.Bd.bQ();s_Pa(a.Ga,function(a){var c=s_W(a);s_Kc(b,c,0);s_yn(a)},a);a.Sy(c+a.Bd.bQ()-d);s_fva(a);a.Ga=[]};
s_On.prototype.removeItem=function(a){var b=s_Xa(this.ka,function(b){return b.controller==a});if(b){var c=b.Wr;if(this.Uw(c))s_Ln(c,"width ease-out 0.2s, margin ease-out 0.2s, padding ease-out 0.2s, opacity ease-out 0.2s"),s_s(c,{width:"0",opacity:"0",margin:"0",padding:"0"}),s_pd(c,s_jd,s_e(function(){s_o(c);s_2a(this.ka,b);this.qa&&this.Sy(this.In())},this),!1);else{var d=this.In(),e=this.Bd.bQ();s_o(c);s_2a(this.ka,b);this.Sy(d+this.Bd.bQ()-e)}}};
var s_fva=function(a){(a=s_Z(a.Fa,"RRNSpSfPg0k"))&&s_A(a,"pFcgqG88mST__hidden",!0)},s_gva=function(a,b,c){var d=a.Nb.offsetWidth-s_cva(a);b=a.ka[b].Wr;var e=s_bva(a,b);return a.ha&&c||!a.ha&&!c?e-(d-b.offsetWidth):e},s_hva=function(a,b){return 0==b||b==a.ka.length-1?a.Uw(a.ka[b].Wr):a.Uw(a.ka[b].Wr)&&(!a.Uw(a.ka[b-1].Wr)||!a.Uw(a.ka[b+1].Wr))},s_bva=function(a,b){s_iva(a);return s_km(b)-s_km(a.ha?a.ka[a.ka.length-1].Wr:a.ka[0].Wr)},s_iva=function(a){s_$a(a.ka,function(a,c){return a.Wr.offsetLeft-
c.Wr.offsetLeft})};s_On.prototype.dMa=function(){return this.Bd.In()>=this.Bd.bQ()};s_On.prototype.Yb=function(){var a=s_Zg(s_Fh,"scso"),b=s_W(this).getAttribute("id"),c=RegExp(b+":\\d+"),b=b+":"+this.In(),a=a.match(c)?a.replace(c,b):a?a+(","+b):b;s_Ph("scso",a,!0)};
var s_jva=function(a){this.Ka=a};s_jva.prototype.ie=function(){return this.Ka.$(s_nj,"ux")};var s_kva=function(a){s_Y.call(this,a)};s_h(s_kva,s_Y);s_kva.prototype.getContainer=function(){return s_Z(this,"WI_562leVwQ")};
s_V(function(a){s_M(a,"t-PCLVNAFUh1w",s_On,s_jva,s_kva,function(a,c,d){s_On.call(a,c,d)});s_N(a,"hR-I1daEbkc",function(a,c){a.EL(c)});s_N(a,"QrM9g6D_Qj8",function(a,c){a.fQ(c)});s_N(a,"D6iwAeQcUTY",function(a){if(a.Za){var b=a.Fa.Pa().getAttribute("id");if(b){var d=s_Zg(s_Fh,"scso");(b=(b=RegExp(b+":(\\d+)").exec(d))?Number(b[1]):null)&&a.Sy(b)}}});s_N(a,"BhfbQUXwAFw",function(a){s_9ua(a);s_dva(a,0)});s_N(a,"Ou3vJLBYH-c",function(a){if(!a.hfa()){s_ava(a.qa);var b=a.Nb.offsetWidth-s_cva(a);if(0==a.ka.length)b=
a.In()+b*(a.ha?1:-1);else{a:{s_iva(a);for(b=0;b<a.ka.length;++b)if(s_hva(a,b)){var d=0<b&&a.Uw(a.ka[b].Wr,1)?b-1:b;break a}d=-1}b=s_gva(a,d,!1);b==a.Bd.In()&&(0<d?b=s_gva(a,--d,!1):0<b&&!a.ha?b=0:b<a.Bd.bQ()&&a.ha&&(b=a.Bd.bQ()))}s_dva(a,b)}});s_N(a,"U_cbV_uMIhg",function(a){if(!a.hfa()){s_ava(a.Wa);var b=a.Nb.offsetWidth-s_cva(a);if(0==a.ka.length)b=a.In()+b*(a.ha?-1:1);else{a:{s_iva(a);for(b=a.ka.length-1;0<=b;b--)if(s_hva(a,b)){var d=b+1<a.ka.length&&a.Uw(a.ka[b].Wr,1)?b+1:b;break a}d=-1}b=s_gva(a, d,!0);b==a.Bd.In()&&(d<a.ka.length-1?b=s_gva(a,++d,!0):0<b&&a.ha?b=0:b<a.Bd.bQ()&&!a.ha&&(b=a.Bd.bQ()))}s_dva(a,b)}})});


s_F("ssc");s_H();
}catch(e){_DumpException(e)}
/* _Module_:em0 */
try{
s_G("em0");
s_F("em0");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy13 */
try{
s_G("sy13");var s_Sea=function(){},s_Tea=function(){},s_Uea=function(){};var s_eg=function(){};s_h(s_eg,s_9d);s_eg.prototype.play=s_ce(function(){return s_E(null)});s_eg.prototype.finish=s_ce(function(){return null});
s_F("sy13");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy16 */
try{
s_G("sy16");var s_J=function(){this.Yb=s_wf();this.Da=null;this.Xa=-1;this.kP=this.Be=this.Ga=!1;this.wc=null};s_h(s_J,s_bg);s_J.prototype.getChildren=function(){return this.Da?[this.Da]:[]};s_J.prototype.play=function(){s_Vea(this);this.De();this.Kl();return this.Yb.$};s_J.prototype.finish=function(){this.Ga||(s_Vea(this),this.De(),this.Da.finish(),this.xc(),this.Yb.resolve(null))};var s_Vea=function(a){a.Da||a.Ga||(a.measure(),a.Da=a.wd())};s_J.prototype.De=function(){this.Be||this.Ga||(this.Be=!0,this.Fb())};
s_J.prototype.Kl=function(a){var b=this;this.kP||this.Ga||(this.kP=!0,s_Wea(this),this.Da.play().then(function(c){s_Xea(b);a||b.xc();b.Yb.resolve(c)}));return this.Yb.$};var s_Wea=function(a){var b=a.Nc();a.Xa=window.setTimeout(s_e(a.ai,a),b)};s_J.prototype.ai=function(){this.Xa=-1;this.Da.finish()};var s_Xea=function(a){-1!=a.Xa&&(window.clearTimeout(a.Xa),a.Xa=-1)};s_J.prototype.xc=function(){this.Ga||(this.Ga=!0,s_Xea(this),this.jd())};s_J.prototype.jd=s_d;
var s_Yea=function(){var a=window.GOOGLE_FEEDBACK_DESTROY_FUNCTION;a&&a()};
s_F("sy16");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy1o */
try{
var s_uka=function(a,b){a%=b;return 0>a*b?a+b:a},s_vka=function(a){return Array.prototype.concat.apply([],arguments)};s_G("sy1o");var s_wka;s_vb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
var s_rj=function(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")},s_sj=function(a){return a.getAttribute("role")||null},s_tj=function(a,b,c){s_na(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(s_wka||(s_wka={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=s_wka,b in c?a.setAttribute(d,c[b]): a.removeAttribute(d)):a.setAttribute(d,c)},s_uj=function(a,b){a.removeAttribute("aria-"+b)},s_vj=function(a,b){a=a.getAttribute("aria-"+b);return null==a||void 0==a?"":String(a)},s_xka=function(a,b){var c="";b&&(c=b.id);s_tj(a,"activedescendant",c)};

s_F("sy1o");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4k */
try{
s_G("sy4k");var s_3ta=s_Hb()&&!window.indexedDB,s_4ta=s_$g("s","scroll"),s_Ym=null,s_5ta=null,s_Zm=function(){s_4ta.set(s_Wg(s_Fh),s_yc())},s__m=function(){var a=s_4ta.get(s_Wg(s_Fh));a&&s_fj(a.x,a.y)},s_0m=function(a){if(a)if(s_3ta){var b=s_yc();s_6ta(b.x+0,b.y+a)}else s_kka(0,a)},s_1m=function(a,b){s_3ta?s_6ta(a,b):s_fj(a,b)},s_6ta=function(a,b){var c=document.documentElement,d=c.offsetHeight;a=Math.max(0,Math.min(c.offsetWidth-window.innerWidth,a));b=Math.max(0,Math.min(d-window.innerHeight,b));c.style.height=
d+"px";var e=document.body.style;e.position="fixed";e.width="100%";e.left=-a+"px";e.top=-b+"px";s_5ta&&window.clearTimeout(s_5ta);d=function(){window.scrollTo(a,b);s_5ta=null;e.position="";e.width="";e.left="";e.top="";c.style.height=""};window.requestAnimationFrame?window.requestAnimationFrame(d):s_5ta=window.setTimeout(d,10)};s_r(window,"popstate",function(){s_Ym=s_yc()});

s_F("sy4k");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4j */
try{
var s_2m=null,s_7ta=function(){s_2m&&(s_rd(s_2m),s_2m=null);document.body.style.overflow=""};s_G("sy4j");var s_3m={},s_8ta={};var s_9ta={SCRIPT:1,STYLE:1},s_$ta={abbl:1,abblt:1,gbbl:1,gbblt:1,lb:1,snbc:1,duf3c:1},s_aua=/#(?:.*&)?fpstate=([^&]*)/,s_bua=/^\/?([^\/]*)/,s_4m="&",s_5m="&",s_6m=null,s_7m=null,s_8m={},s_9m=null,s_$m=1,s_cua=0,s_an=null,s_dua=!1,s_bn=null,s_eua=function(){};s_eua.prototype.play=function(){s_bn=s_wf();return s_bn.$};s_eua.prototype.finish=function(){s_fua()};s_eua.prototype.Nc=function(){return 2E3};
var s_cn=function(a,b,c){s_Zm();b=b||{};b.fpstate=a;s_Oh(b,c)},s_gua=function(a,b){var c={};s_i(b||[],function(a){c[a]=""});c.fpstate="";s_Oh(c,a)},s_dn=function(a,b){s_cua++;window.getSelection&&window.getSelection().removeAllRanges();var c=!1;s_i(a,function(a){1==a?c=!0:(s_hua(a),s_s(a,{"margin-top":-s_dj()+"px","margin-bottom":-s_ej()+"px"}),a["fp-i"]=s_cua,s_z(a,"fp-h"),s_Wh(a,"fp_s"))});s_i(s_Mc(document.body),function(a){a.tagName in s_9ta||a.id in s_$ta||a["fp-i"]==s_cua||(s_z(a,"fp-f"),a&&
0<a["fp-i"]?(s_iua(a),s_jua(a)||s_y(a,"fp-h")):s_A(a,"fp-h",!c))});s_Vd(document.body,"");!1!==b&&(c&&!s_kua()?s_bj(1,0):s_bj(3,3))},s_kua=function(){var a=s_x(document.body,"qs-i"),b=s_x(document.body,"lrl-qs-i"),c=!!s_Sh("mie"),d=!!s_Sh("istate"),e=s_x(document.body,"trex");return a||b||c||e||d},s_lua={d5:function(){return s_E()},l6:0},s_mua=function(a){if(a==s_4m)return s_lua;var b=s_8m[s_4m+"\n"+a];return b?b:"&"==s_4m?s_lua:(b=s_8m["*\n"+a])?b:(b=s_8m[s_4m+"\n*"])?b:s_lua},s_nua=function(a){var b=
s_6m;b=1==b?b:b;if(1!=s_$m){var c=s_$m;c.style.top="";s_z(c,"fp-c")}s_dn([b],!1);(c=s_3m[s_4m])&&c.gV();if(c=1==b?null:b)s_y(document.body,"fp-i"),s_y(c,"fp-c"),s_z(c,"fp-f"),c.focus();if(s_7m&&c){var d=s_7m;s_1m(d.x,d.y+s_cj());d.x&&(c.style.left="");d.y&&(c.style.top="")}else 1!=s_9m&&s_1m(0,s_cj());s_7m=null;1!=b||s_kua()?s_9i||s_bj(3,3):s_bj(1,0);s_4m=a;s_$m=b;s_6m=null;s_an&&(s_rd(s_an),s_an=null);s_7ta();s_fua();(a=s_3m[a])&&a.bMa()},s_hua=function(a){var b=s_Sc(a);if(b!=document.body){var c=
a["fp-s"];c||(c=s_Cc("DIV"),a["fp-s"]=c);b?s_Jc(c,a):(b=s_Sc(c))&&b.removeChild(c);document.body.appendChild(a)}},s_jua=function(a){var b=a["fp-s"];b&&a&&0<a["fp-i"]&&(b.parentNode?(s_Jc(a,b),s_o(b)):s_o(a));return a.parentNode!=document.body},s_iua=function(a){s_s(a,{"margin-top":"","margin-bottom":""})},s_qua=function(a){if(""==a){s_Sh("istate")&&s_Ph("istate",s_Sh("istate"),!0);var b=s_Fh.$;"/search"!=b&&(b=(b=s_bua.exec(b))&&b[1]?s_Aa(b[1]):"")&&(b=s_8ta[b])&&(a=b.state)}a!=s_5m&&!s_dua&&(s_5m=
a,""==a||s_3m[a])&&(a=s_f(s_oua,a),"&"!=s_4m&&(s_Jh||s_pua()),s_I.now(a))},s_pua=function(){var a=s_Ym||s_yc();s_fj(a.x,a.y)},s_rua=function(a){return a&&(a=s_aua.exec(a))&&a[1]?s_Aa(a[1]):""},s_tua=function(a){a=a.Hd;var b=s_rua(a.newURL);b==s_5m&&(s_rua(a.oldURL)==b||s_sua()||s_pua())},s_oua=function(a){if("&"==s_4m&&""==a)s_4m=a;else if(s_I.zf(new s_eua),""==a)s_uua(a,1),s_Wh(document.body,"srp_uhd");else{""==s_4m&&s_Wh(document.body,"srp_hd");var b=s_3m[a];if(b&&(b=b.n_(s_4m))){s_Rc(b)?s_uua(a,
b):b.then(s_f(s_uua,a),s_vua);return}s_fua()}},s_uua=function(a,b){var c=s_mua(a),d=s_pa(c.l6)?c.l6(s_4m,a,c.d5):c.l6,e=1==b,f=1!=d||1==s_$m?null:s_$m,g=0!=d||1==b?null:b;s_6m=b;s_9m=d;f&&(d=s_Jh?s_yc():s_Ym||s_yc(),s_dn([f,b],!1),s_iua(f),s_y(f,"fp-f"),f.style.top=s_cj()-d.y+"px");g&&(s_dn([g,s_$m],!1),s_iua(g),s_y(g,"fp-f"));e&&s_z(document.body,"fp-i");!e&&s_9i&&s_bj(3,3);s_an||(s_an=s_r(document.documentElement,"touchstart",s_cg));s_2m||(s_2m=s_r(document.documentElement,"touchmove",s_cg));document.body.style.overflow=
"hidden";if(e=s_3m[a])try{e.qJa()}catch(l){s_vua(l);return}try{var k=c.d5(s_$m,b)}catch(l){}s_Jh||s_sua();k?(s_xf(k,s_f(s_nua,a)),g&&s_7m&&(a=s_7m,a.x&&(g.style.left=-a.x+"px"),a.y&&(g.style.top=-a.y+"px"))):s_nua(a)},s_fua=function(){s_bn&&(s_bn.resolve(),s_bn=null)},s_sua=function(){if(null!=s_9m){var a=1==s_9m;if(s_7m){if(a||1==s_6m)return a=s_7m,s_1m(a.x,a.y+s_cj()),!0}else if(a)return s_Jh||s__m(),!0}return!1},s_vua=function(a){s_9m=s_6m=null;s_dn([s_$m]);s_an&&(s_rd(s_an),s_an=null);s_7ta();
s_fua();throw a;};s_Mh("fpstate",s_qua);s_Jh&&s_r(window,"hashchange",s_tua);s_oe(65,function(){s_dua=!0;"&"!=s_4m&&"&"!=s_5m&&(""!=s_5m&&(s_z(document.body,"fp-i"),s_dn([1])),s_i(s_Mc(document.body),s_jua),s_5m=s_4m="&")});s_oe(142,function(){s_dua=!1;s_qua(s_Sh("fpstate"))});

s_F("sy4j");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4l */
try{
var s_wua=function(a,b,c){a=a+"\n"+b;s_8m[a]=c;return a},s_en=function(a,b){this.state=a;this.Ga=b;s_3m[a]=this;b&&(s_8ta[b]=this);s_q.call(this)};s_h(s_en,s_q);s_en.prototype.gV=s_d;s_en.prototype.qJa=s_d;s_en.prototype.bMa=s_d;s_en.prototype.Ha=function(){s_en.Ba.Ha.call(this);delete s_3m[this.state];this.Ga&&delete s_8ta[this.Ga]};s_G("sy4l");
var s_fn=function(a,b){this.Da=[];s_en.call(this,a,b);s_5m==a&&s_I.Cb(s_e(s_oua,null,a))};s_h(s_fn,s_en);var s_gn=function(a,b,c,d,e){a.Da.push(s_wua(b,c,{d5:s_e(d,a),l6:e||0}))};s_fn.prototype.Ha=function(){s_fn.Ba.Ha.call(this);for(var a=0;a<this.Da.length;a++)delete s_8m[this.Da[a]]};

s_F("sy4l");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4n */
try{
var s_xua=function(a,b){var c=b.Tc;b=b.zd;return{duration:a.duration,Tc:void 0===a.Tc?c:a.Tc,zd:void 0===a.zd?b:a.zd}},s_yua={Tc:0,zd:"linear"},s_zua=function(a){this.$=s_xua(a,s_yua);this.Wm=s_xua(a,s_yua)};s_=s_zua.prototype;s_.setOpacity=function(a){this.$=s_xua(a,this.$)};s_.setTransform=function(a){this.Wm=s_xua(a,this.Wm)};s_.getOpacity=function(){return this.$};s_.jZa=function(){return s_Aua(this.$)};s_.kZa=function(){return s_Aua(this.Wm)};
s_.hta=function(){return Math.max(this.$.duration+this.$.Tc,this.Wm.duration+this.Wm.Tc)};var s_Aua=function(a){return a.duration+"ms "+a.zd+" "+a.Tc+"ms"},s_Bua=function(){this.ma=null;this.ka="";this.ha=this.qa=this.$=null};s_=s_Bua.prototype;s_.xX=function(){return null!==this.$};s_.bY=function(){return null!==this.qa};s_.HLa=function(){return this.xX()||this.bY()||null!==this.ha};s_.wX=function(){return null!==this.ma};s_.setTranslate=function(a,b,c){this.$=[a,b,c]};
s_.setScale=function(a,b,c){this.qa=[a,b,c]};s_.setOpacity=function(a){this.ma=a||.001};s_.gu=function(a){this.ka=a};s_.Tza=function(){var a=[];this.xX()&&a.push("translate3d("+this.$[0]+"px,"+this.$[1]+"px,"+this.$[2]+"px)");this.bY()&&a.push("scale3d("+this.qa.join(",")+")");null!==this.ha&&a.push("rotateZ("+this.ha+"deg)");return a.join(" ")};s_.Sza=function(){return""+this.ma}; s_.pfa=function(){var a={};this.ka&&(a.transformOrigin=this.ka);this.HLa()&&(a.transform=this.Tza());this.wX()&&(a.opacity=this.Sza());return a};s_G("sy4n");
var s_2=function(a,b){s_ee(this);this.Aa=a;this.ka=new s_Bua;this.$=new s_Bua;this.ha=new s_zua(b)};s_a(s_2,s_bg);var s_hn=function(a,b){a.$.setOpacity(b);return a},s_in=function(a,b){a.ka.setOpacity(b);a.$.wX()||a.$.setOpacity(1);return a};s_2.prototype.opacity=function(a,b){return s_hn(s_in(this,a),b)};var s_jn=function(a,b,c,d){a.$.setTranslate(b,c,d);return a},s_kn=function(a,b,c,d){a.ka.setTranslate(b,c,d);a.$.xX()||a.$.setTranslate(0,0,0);return a};
s_2.prototype.translate=function(a,b,c,d,e,f){return s_jn(s_kn(this,a,b,c),d,e,f)};var s_ln=function(a,b,c,d){a.$.setScale(b,c,d);return a},s_mn=function(a,b,c,d){a.ka.setScale(b,c,d);a.$.bY()||a.$.setScale(1,1,1);return a};s_2.prototype.scale=function(a,b,c,d,e,f){return s_ln(s_mn(this,a,b,c),d,e,f)};s_2.prototype.origin=function(a){this.$.gu(a);return this};var s_Cua=function(a,b){a.ha.setOpacity(b);return a};s_2.prototype.init=function(a){this.Mb.init(this.Aa,this.ka,a)}; s_2.prototype.play=function(){return this.Mb.play(this.Aa,this.ka,this.$,this.ha)};s_2.prototype.finish=function(){return this.Mb.finish(this.Aa,this.$)};s_2.prototype.Nc=function(){return 2*this.ha.hta()};s_$d(s_Nm,s_2);

s_F("sy4n");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4p */
try{
s_G("sy4p");var s_nn=function(a,b){this.$=a;this.ka=void 0===b?100:b};s_a(s_nn,s_bg);s_nn.prototype.play=function(){return s_Dua(this)||s_E()};s_nn.prototype.finish=function(){s_Dua(this)};s_nn.prototype.Nc=function(){return this.ka};var s_Dua=function(a){var b;a.$&&(b=a.$());a.$=null;return b};
var s_on=function(a){this.$=a;this.He=[]};s_on.prototype.add=function(a){s_pa(a)?this.He.push(new s_nn(a)):a&&this.He.push(a);return this};s_on.prototype.Pc=function(){var a=s_Ra(this.He,function(a){return a instanceof s_on?a.Pc():a});return new this.$(a)};

s_F("sy4p");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4q */
try{
var s_pn=function(a,b){b=a.lK()>b.lK()?b.width/a.width:b.height/a.height;return a.scale(b)};s_G("sy4q");var s_qn=function(a){this.He=s_Qa(a,s_ma);this.$=Array(this.He.length)};s_a(s_qn,s_bg);var s_rn=function(){return new s_on(s_qn)};
s_qn.prototype.play=function(){for(var a=this,b=[],c=[],d=[],e=[],f=s_da(this.He),g=f.next();!g.done;g=f.next())g=g.value,g instanceof s_J?(s_Vea(g),d.push(s_e(g.De,g)),e.push(s_e(g.xc,g)),c.push(s_e(g.Kl,g,!0))):(g instanceof s_2&&b.push(s_e(g.init,g)),c.push(s_e(g.play,g)));d.forEach(function(a){a()});s_i(b,function(a,c){a(c==b.length-1)});c=s_Ra(c,function(b,c){return b().then(s_e(function(b){a.$[c]=!0;return b},a))},this);c=s_vf(c);c.then(function(){e.forEach(function(a){a()})});return c};
s_qn.prototype.finish=function(){var a=this;s_Ra(this.He,function(b,c){return a.$[c]?s_d:(b instanceof s_J&&s_Vea(b),s_e(b.finish,b))},this).forEach(function(a){a()})};s_qn.prototype.Nc=function(){for(var a=0,b=s_da(this.He),c=b.next();!c.done;c=b.next())c=c.value,c.Nc()>a&&(a=c.Nc());return a};s_qn.prototype.getChildren=function(){return this.He};

s_F("sy4q");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4r */
try{
s_G("sy4r");var s_sn=function(a){this.He=s_Qa(a,s_ma);this.$=-1;this.CB=!1};s_a(s_sn,s_bg);var s_tn=function(){return new s_on(s_sn)};s_=s_sn.prototype;s_.play=function(){var a=this,b=s_E(null);this.He.forEach(function(c,d){b=0==d?a.pMa(c)||b:b.then(s_e(a.pMa,a,c))},this);return b};s_.pMa=function(a){if(!this.CB)return this.$++,a.play()};s_.finish=function(){-1==this.$&&(this.$=0);for(var a=this.$;a<this.He.length;a++)this.He[a].finish();this.CB=!0}; s_.Nc=function(){return this.He.reduce(function(a,b){return a+b.Nc()},0)};s_.getChildren=function(){return this.He};

s_F("sy4r");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4s */
try{
s_G("sy4s");var s_un=function(a,b){return{duration:a,zd:"cubic-bezier(.4,0,.2,1)",Tc:b||0}},s_Eua=function(a,b){s_J.call(this);this.ma=b;this.ka=a;this.ha=s_n("DIV",{"class":"fp-f"});this.$=s_n("DIV",{"class":"fp-f"})};s_h(s_Eua,s_J);var s_Fua=s_un(333),s_Gua=s_un(166),s_Hua=s_un(333),s_Iua=s_un(166),s_Jua=s_un(166,167),s_Kua=function(a,b){return(new s_Eua(b,0)).play()},s_vn=function(a){return(new s_Eua(a,1)).play()};s_=s_Eua.prototype;s_.measure=s_d;
s_.Fb=function(){var a=0==this.ma;this.$.style.opacity=a?.001:.6;this.$.style.background="#000";this.$.style.pointerEvents="none";s_Ic(this.$,this.ka);this.ha.style.background="#fff";this.ha.style.pointerEvents="none";s_Ic(this.ha,this.ka);this.ka.style.opacity=a?.001:1};
s_.wd=function(){return 0==this.ma?new s_sn([new s_qn([(new s_2(this.$,s_Fua)).opacity(.001,.6),s_Cua(s_hn(new s_2(this.ha,s_Hua),1),s_Iua).scale(0,0,1,1,1,1)]),(new s_2(this.ka,s_Gua)).opacity(.001,1)]):new s_sn([(new s_2(this.ka,s_Gua)).opacity(1,.001),new s_qn([(new s_2(this.$,s_Fua)).opacity(.6,.001),s_Cua((new s_2(this.ha,s_Hua)).opacity(1,.001),s_Jua).scale(1,1,1,0,0,1)])])};s_.Nc=s_3c(1500);s_.jd=function(){this.ka.style.opacity="";s_o(this.ha);s_o(this.$)};

s_F("sy4s");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4x */
try{
s_G("sy4x");
s_F("sy4x");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy4y */
try{
s_G("sy4y");
s_F("sy4y");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy50 */
try{
s_G("sy50");var s_Pm=function(a,b,c,d,e,f,g,k){this.ka=a;this.ma=b;this.x1=c;this.y1=d;this.x2=e;this.y2=f;this.ha=g;this.qa=k};s_Pm.prototype.clone=function(){return new s_Pm(this.ka,this.ma,this.x1,this.y1,this.x2,this.y2,this.ha,this.qa)};s_Pm.prototype.equals=function(a){return this.ka==a.ka&&this.ma==a.ma&&this.x1==a.x1&&this.y1==a.y1&&this.x2==a.x2&&this.y2==a.y2&&this.ha==a.ha&&this.qa==a.qa};
var s_Lta=function(a,b){if(0==b)return a.ka;if(1==b)return a.ha;var c=s_fc(a.ka,a.x1,b),d=s_fc(a.x1,a.x2,b);a=s_fc(a.x2,a.ha,b);c=s_fc(c,d,b);d=s_fc(d,a,b);return s_fc(c,d,b)};s_Pm.prototype.$=function(a){if(0==a)return this.ma;if(1==a)return this.qa;var b=s_fc(this.ma,this.y1,a),c=s_fc(this.y1,this.y2,a),d=s_fc(this.y2,this.qa,a),b=s_fc(b,c,a),c=s_fc(c,d,a);return s_fc(b,c,a)};s_Pm.prototype.WA=function(a){return new s_hc(s_Lta(this,a),this.$(a))};
var s_Qm=function(a,b){var c=(b-a.ka)/(a.ha-a.ka);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,g=0;8>g;g++){var f=s_Lta(a,c),k=(s_Lta(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(k))break;else f<b?d=c:e=c,c-=(f-b)/k}for(g=0;1E-6<Math.abs(f-b)&&8>g;g++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=s_Lta(a,c);return c};

s_F("sy50");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy8i */
try{
s_G("sy8i");var s_uw=function(a,b){var c=Array.prototype.slice.call(arguments),d=c.shift();if("undefined"==typeof d)throw Error("Va");return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,function(a,b,d,k,l,m,n,ba){if("%"==m)return"%";var e=c.shift();if("undefined"==typeof e)throw Error("Wa");arguments[0]=e;return s_tw[m].apply(null,arguments)})},s_tw={s:function(a,b,c){return isNaN(c)||""==c||a.length>=Number(c)?a:a=-1<b.indexOf("-",0)?a+s_Fa(" ",Number(c)-a.length):s_Fa(" ",Number(c)-a.length)+a},f:function(a,
b,c,d,e){d=a.toString();isNaN(e)||""==e||(d=parseFloat(a).toFixed(e));var f=0>Number(a)?"-":0<=b.indexOf("+")?"+":0<=b.indexOf(" ")?" ":"";0<=Number(a)&&(d=f+d);if(isNaN(c)||d.length>=Number(c))return d;d=isNaN(e)?Math.abs(Number(a)).toString():Math.abs(Number(a)).toFixed(e);a=Number(c)-d.length-f.length;0<=b.indexOf("-",0)?d=f+d+s_Fa(" ",a):(b=0<=b.indexOf("0",0)?"0":" ",d=f+s_Fa(b,a)+d);return d},d:function(a,b,c,d,e,f,g,k){return s_tw.f(parseInt(a,10),b,c,d,0,f,g,k)}};s_tw.i=s_tw.d;s_tw.u=s_tw.d;

s_F("sy8i");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syd4 */
try{
var s_Esb=function(a){return s_Ra(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};s_G("syd4");var s_Fsb=function(){this.ka=-1};
s_F("syd4");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syhg */
try{
s_G("syhg");
s_F("syhg");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syhf */
try{
var s_d9b=/[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/,s_e9b=function(a){a=s_2e(a);return s_1e(a[1],null,a[3],a[4])};s_G("syhf");var s_f9b=function(a){s_P(this,a,0,-1,null,null)};s_h(s_f9b,s_O);var s_3R=function(a,b){this.ka=64;this.ma=s_b.Uint8Array?new Uint8Array(this.ka):Array(this.ka);this.qa=this.ha=0;this.$=[];this.Wa=a;this.Ea=b;this.Ca=s_b.Int32Array?new Int32Array(64):Array(64);s_c(s_g9b)||(s_b.Int32Array?s_g9b=new Int32Array(s_h9b):s_g9b=s_h9b);this.reset()},s_g9b;s_h(s_3R,s_Fsb);var s_i9b=s_3a(128,s_cb(0,63));s_3R.prototype.reset=function(){this.qa=this.ha=0;this.$=s_b.Int32Array?new Int32Array(this.Ea):s_4a(this.Ea)};
var s_j9b=function(a){for(var b,c,d=a.ma,e=a.Ca,f=0,g=0;g<d.length;)e[f++]=d[g]<<24|d[g+1]<<16|d[g+2]<<8|d[g+3],g=4*f;for(d=16;64>d;d++)f=e[d-15]|0,g=e[d-2]|0,g=(g>>>17|g<<15)^(g>>>19|g<<13)^g>>>10,c=(e[d-16]|0)+((f>>>7|f<<25)^(f>>>18|f<<14)^f>>>3)|0,b=(e[d-7]|0)+g|0,e[d]=c+b|0;var f=a.$[0]|0,g=a.$[1]|0,k=a.$[2]|0,l=a.$[3]|0,m=a.$[4]|0,n=a.$[5]|0,ba=a.$[6]|0;c=a.$[7]|0;for(d=0;64>d;d++){var t=((f>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10))+(f&g^f&k^g&k)|0;b=m&n^~m&ba;c=c+((m>>>6|m<<26)^(m>>>11|m<<21)^
(m>>>25|m<<7))|0;b=b+(s_g9b[d]|0)|0;b=c+(b+(e[d]|0)|0)|0;c=ba;ba=n;n=m;m=l+b|0;l=k;k=g;g=f;f=b+t|0}a.$[0]=a.$[0]+f|0;a.$[1]=a.$[1]+g|0;a.$[2]=a.$[2]+k|0;a.$[3]=a.$[3]+l|0;a.$[4]=a.$[4]+m|0;a.$[5]=a.$[5]+n|0;a.$[6]=a.$[6]+ba|0;a.$[7]=a.$[7]+c|0};
s_3R.prototype.update=function(a,b){s_c(b)||(b=a.length);var c=0,d=this.ha;if(s_ha(a))for(;c<b;)this.ma[d++]=a.charCodeAt(c++),d==this.ka&&(s_j9b(this),d=0);else if(s_oa(a))for(;c<b;){var e=a[c++];if(!("number"==typeof e&&0<=e&&255>=e&&e==(e|0)))throw Error("ee");this.ma[d++]=e;d==this.ka&&(s_j9b(this),d=0)}else throw Error("fe");this.ha=d;this.qa+=b};
s_3R.prototype.digest=function(){var a=[],b=8*this.qa;56>this.ha?this.update(s_i9b,56-this.ha):this.update(s_i9b,this.ka-(this.ha-56));for(var c=63;56<=c;c--)this.ma[c]=b&255,b/=256;s_j9b(this);for(c=b=0;c<this.Wa;c++)for(var d=24;0<=d;d-=8)a[b++]=this.$[c]>>d&255;return a};
var s_h9b=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804, 4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];
var s_l9b=function(){s_3R.call(this,8,s_k9b)};s_h(s_l9b,s_3R);var s_k9b=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];/*


 Copyright Mathias Bynens <http://mathiasbynens.be/>

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var s_m9b=/^xn--/,s_n9b=/[^ -~]/,s_o9b=/\x2E|\u3002|\uFF0E|\uFF61/g,s_p9b={Z6a:"Overflow: input needs wider integers to process",F6a:"Illegal input >= 0x80 (not a basic code point)",d5a:"Invalid input"},s_4R=function(a){throw RangeError(s_p9b[a]);},s_q9b=function(a,b){for(var c=a.length;c--;)a[c]=b(a[c]);return a},s_r9b=function(a,b){return s_q9b(a.split(s_o9b),b).join(".")},s_s9b=function(a){return s_q9b(a,function(a){var b="";65535<a&&(a-=65536,b+=(0,String.fromCharCode)(a>>>10&1023|55296),a=56320|
a&1023);return b+=(0,String.fromCharCode)(a)}).join("")},s_t9b=function(a,b,c){var d=0;a=c?(0,Math.floor)(a/700):a>>1;for(a+=(0,Math.floor)(a/b);455<a;d+=36)a=(0,Math.floor)(a/35);return(0,Math.floor)(d+36*a/(a+38))},s_u9b=function(a){return s_r9b(a,function(a){if(s_m9b.test(a)){a=a.slice(4).toLowerCase();var b=[],d=a.length,e=0,f=128,g=72,k,l;var m=a.lastIndexOf("-");0>m&&(m=0);for(k=0;k<m;++k)128<=a.charCodeAt(k)&&s_4R("Illegal input >= 0x80 (not a basic code point)"),b.push(a.charCodeAt(k));for(m=
0<m?m+1:0;m<d;){k=e;var n=1;for(l=36;;l+=36){m>=d&&s_4R("Invalid input");var ba=a.charCodeAt(m++);ba=10>ba-48?ba-22:26>ba-65?ba-65:26>ba-97?ba-97:36;(36<=ba||ba>(0,Math.floor)((2147483647-e)/n))&&s_4R("Overflow: input needs wider integers to process");e+=ba*n;var t=l<=g?1:l>=g+26?26:l-g;if(ba<t)break;ba=36-t;n>(0,Math.floor)(2147483647/ba)&&s_4R("Overflow: input needs wider integers to process");n*=ba}n=b.length+1;g=s_t9b(e-k,n,0==k);(0,Math.floor)(e/n)>2147483647-f&&s_4R("Overflow: input needs wider integers to process");
f+=(0,Math.floor)(e/n);e%=n;b.splice(e++,0,f)}a=s_s9b(b)}return a})},s_v9b=function(a){return s_r9b(a,function(a){if(s_n9b.test(a)){var b,d;var e=[];var f=[];var g=0;for(b=a.length;g<b;){var k=a.charCodeAt(g++);if(55296<=k&&56319>=k&&g<b){var l=a.charCodeAt(g++);56320==(l&64512)?f.push(((k&1023)<<10)+(l&1023)+65536):(f.push(k),g--)}else f.push(k)}var m=f.length;a=128;g=0;l=72;for(d=0;d<m;++d){var n=f[d];128>n&&e.push((0,String.fromCharCode)(n))}for((b=k=e.length)&&e.push("-");b<m;){var ba=2147483647;
for(d=0;d<m;++d)n=f[d],n>=a&&n<ba&&(ba=n);var t=b+1;ba-a>(0,Math.floor)((2147483647-g)/t)&&s_4R("Overflow: input needs wider integers to process");g+=(ba-a)*t;a=ba;for(d=0;d<m;++d)if(n=f[d],n<a&&2147483647<++g&&s_4R("Overflow: input needs wider integers to process"),n==a){var w=g;for(ba=36;;ba+=36){n=ba<=l?1:ba>=l+26?26:ba-l;if(w<n)break;var B=w-n;w=36-n;n+=B%w;e.push((0,String.fromCharCode)(n+22+75*(26>n)-0));w=(0,Math.floor)(B/w)}e.push((0,String.fromCharCode)(w+22+75*(26>w)-0));l=s_t9b(g,t,b== k);g=0;++b}++g;++a}e="xn--"+e.join("")}else e=a;return e})};
var s_w9b=function(a,b,c,d,e){this.$=null!=a?""==a?"":a:"cdn.ampproject.org";this.qa=null!=b?b:"0";this.ma=!!c;this.ka=d||"";this.ha=e||""},s_x9b={http:"/",https:"/s/"},s_B9b=function(a,b,c,d,e,f){var g=new s_pg(b),k=""==a.$?g.toString():s_y9b(a,g,"/c",f).toString();""==a.$?f=g.toString():(f=s_y9b(a,g,e?"/a":"/v",f),f.$("amp_js_v",a.qa),a.ka&&f.$("amp_rtv",a.ka),a.ha&&f.$("usqp",a.ha),f=f.toString());c&&s_ua(c,"/amp")?a=c:(c=(e?"/amp/a":"/amp")+(s_x9b[g.qa]||"/s/"),e=s_z9b(a,g.ka+g.ha),0<g.getQuery().length&&
(e+=s_z9b(a,"?"+g.getQuery())),0<g.Ea.length&&(e+=s_z9b(a,"#"+g.Ea)),a=c+e);return new s_A9b(b,k,f,a,d)},s_z9b=function(a,b){return b.replace(/[\%\?\#]/g,a.Ea)};s_w9b.prototype.Ea=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};
var s_y9b=function(a,b,c,d){if(a.ma&&!d){d=b.ka;var e=s_u9b(d),f;if(f=63>=d.length){if(f=s_iba.test(s_3b(e,void 0)))f=s_d9b.test(s_3b(e,void 0));f=!f}f&&-1!=d.indexOf(".")?(e=s_u9b(d),e=e.split("-").join("--"),e=e.split(".").join("-"),e=s_v9b(e)):e=s_C9b(d);63<e.length&&(e=s_C9b(d));a=e+"."+a.$}else a=a.$;c=new s_pg("https://"+a+c+(s_x9b[b.qa]||"/s/"));a=b.ka+b.ha;a=s_tg(new s_pg,a);b=b.getQuery();b=s_ug(a,b,!0);return c.resolve(b)},s_C9b=function(a){var b=new s_l9b;b.update(a,a.length);a=s_Esb(b.digest());
for(var c="ffffffffff"+a+"000000",d,e,b=!0,f=0,g=c.length;f<g;f++)if("0"!=c.charAt(f)){b=!1;break}if(b)b="a";else{f={};for(g=0;16>g;g++)f["0123456789abcdef".charAt(g)]=g;b=[];for(g=c.length-1;0<=g;g--){d=c.charAt(g);e=f[d];if("undefined"==typeof e)throw Error("Sa`"+c+"`0123456789abcdef`"+d);b.push(e)}c=[];for(f=b.length-1;0<=f;f--){for(var k=0,l=0,g=c.length;l<g;l++)e=c[l],e=16*e+k,32<=e?(d=e%32,k=(e-d)/32,e=d):k=0,c[l]=e;for(;k;)d=k%32,c.push(d),k=(k-d)/32;k=b[f];for(l=0;k;)l>=c.length&&c.push(0),
e=c[l],e+=k,32<=e?(d=e%32,k=(e-d)/32,e=d):k=0,c[l]=e,l++}b=[];for(f=c.length-1;0<=f;f--){g=c[f];if(32<=g||0>g)throw Error("Ta`"+c+"`"+g);b.push("abcdefghijklmnopqrstuvwxyz234567".charAt(g))}b=b.join("")}return b.substr(8,Math.ceil(4*a.length/5))},s_A9b=function(a,b,c,d,e){this.$=a;this.Ea=b;this.Ca=c;this.ka=d;this.Wa=s_b.location.origin+this.ka;this.ma=e||"";this.qa=s_e9b(this.JF());this.ha=s_e9b(this.$)};s_A9b.prototype.JF=function(){return this.ma||this.Ea};
var s_D9b=function(a,b,c,d,e,f,g,k){this.$=new s_w9b(a,b,c,f,k);this.ha=d?d:null;this.ka=e?e:null;this.ma=g||Infinity},s_F9b=function(){if(!s_E9b&&window.amp_ifc){var a=new s_f9b(window.amp_ifc);s_E9b=new s_D9b(s_Q(a,6),s_Q(a,2),s_Q(a,3),s_Q(a,4),s_Q(a,5),s_Q(a,7),s_Q(a,8),s_Q(a,9))}return s_E9b},s_E9b=null,s_I9b=function(a,b,c,d,e,f,g,k,l,m,n){b=s_B9b(a.$,b,c,a.ha,k,l);d=s_G9b(a,d);return new s_H9b(b,d,e,f,g,m,n)},s_G9b=function(a,b){a.ka&&(b=a.ka.replace("%1$s",b));return b},s_H9b=function(a,b,
c,d,e,f,g){this.Da=a;this.ma=b;this.Wa=null;this.ka=null!=c?c:null;this.Ea=null!=d?d:null;this.ha=null!=f?f:null;this.Ga=null!=g?g:null;this.qa=null!=e?e:!1;this.Ca=s_wf();this.$=s_wf()};s_H9b.prototype.tk=function(){return this.Da};s_H9b.prototype.wF=function(){return this.Wa||this.ma};s_H9b.prototype.Vf=function(){return this.Ca.$};s_H9b.prototype.Fh=function(a){this.Ca.resolve(a)};var s_J9b=function(a){this.$=[];this.ka=a;this.ha=s_wf()};s_J9b.prototype.Wg=function(a){this.$.push(a)}; s_J9b.prototype.jl=function(){return this.$};

s_F("syhf");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syhh */
try{
s_G("syhh");var s_5R=null,s_K9b=s_wf();
s_F("syhh");s_H();
}catch(e){_DumpException(e)}
/* _Module_:strm */
try{
s_G("strm");var s_Gee=function(a){this.Fa=a};s_h(s_Gee,s_q);
var s_Hee=function(a){a=s_l("si-cic",a);for(var b=[],c=0;c<a.length;c++)b.push(a[c].id);return b},s_Iee=function(a){var b=s_Z(a.Fa,"vCjx9U209go"),c=s_Z(a.Fa,"SDEENgHeaeM"),d=s_Zg(s_Fh,"q"),e=s_Hee(b),b=new Map;b.set("q",d);b.set("start","0");b.set("type","streamAsync");b.set("docids",String(e));d=s_Z(a.Fa,"Cx3-gHtIG7U");s_D(d);s_rl(c,b).then(function(){var b=s_l("si-cic",c),d=s_Z(a.Fa,"vCjx9U209go"),e=s_Z(a.Fa,"YvHySt-nuGs");d.removeChild(e);for(var l=0;l<b.length;l++)d.appendChild(b[l]);d.appendChild(e); s_ul(c)})};
var s_S$=function(a,b){this.ha=b.getContainer();this.ka=a.YP();s_yn(this)};s_h(s_S$,s_q);s_S$.prototype.Nl=function(){s_i(this.ha.querySelectorAll("img"),function(a){null===a||a.src||(a.src=s_B(a,"src"))})};s_S$.prototype.Ut=function(){this.Nl();this.ka||(s_C(null,[this.ha]),this.ka=!0)};s_S$.prototype.hidden=function(){};
var s_Jee=function(a){this.Fa=a};s_h(s_Jee,s_q);s_Jee.prototype.open=function(){var a=this;s__(this.Fa,"L0lWAYpld5E").then(function(b){b.open(void 0,s_Z(a.Fa,"emnMVzVCRIQ"))},null)};var s_Kee=function(a){s__(a.Fa,"L0lWAYpld5E").then(function(a){s_5R.QQ(a.ka)},null);s_w(182)};
var s_Lee=function(a){this.Fa=a;this.ka=!1;this.Ea=new s_Lf};s_h(s_Lee,s_q);
var s_Mee=new s_Pm(0,0,.4,0,.2,1,1,1),s_Pee=function(a,b){a.ka||(b=b.event().target,b=s_Nee(a,s_B(b,"title")),a.qa=s_yc().y,a.ha=Math.max(0,a.qa+s_Od(b).y-96),a.ka=!0,window.requestAnimationFrame(function(b){return s_Oee(a,b)}),a.Wa=s_wf())},s_Oee=function(a,b){s_ia(a.ma)||(a.ma=b);b-=a.ma;250>b&&0<a.ha?(s_1m(0,a.qa+(a.ha-a.qa)*s_Mee.$(s_Qm(s_Mee,b/250))),window.requestAnimationFrame(function(b){return s_Oee(a,b)})):(s_1m(0,a.ha),a.ka=!1,a.ma=void 0,a.Wa.resolve())},s_Nee=function(a,b){var c=a.Ea.get(b); if(null!=c)return c;c=s_Sc(a.Fa.Pa()).querySelectorAll("span");c=Array.prototype.slice.call(c);for(c=s_Xa(c,function(a){return a.innerText==b});"g-card"!=c.tagName.toLowerCase();)c=s_Sc(c);a.Ea.set(b,c);return c};
var s_T$=function(a,b){this.Fa=b;this.ma=this.Fa.getContainer();this.ha=a.YP();this.ka=null;s_yn(this)};s_h(s_T$,s_q);s_T$.prototype.Nl=function(){s_i(this.ma.querySelectorAll("img"),function(a){null===a||a.src||(a.src=s_B(a,"src"))})};s_T$.prototype.Ut=function(){this.Nl();s_Qee(this);this.ka&&s_I.Cb(s_e(this.ka.$,this.ka))};var s_Qee=function(a){a.ha||(s_C(null,[a.ma]),a.ha=!0)};s_T$.prototype.hidden=function(){this.ka&&s_I.Cb(s_e(this.ka.ka,this.ka))};
var s_Ree=function(a){s_Y.call(this,a)};s_h(s_Ree,s_Y);s_V(function(a){s_M(a,"t-AEfG6skZL4A",s_Gee,null,s_Ree,function(a,c,d){a.Fa=d});s_N(a,"S3fc8Qzr4A0",function(a){s_Iee(a)})});var s_See=function(a){s_Y.call(this,a)};s_h(s_See,s_Y);s_V(function(a){s_M(a,"t-BMCaf7BUQZY",s_Lee,null,s_See,function(a,c,d){s_Lee.call(a,d)});s_N(a,"6DPt_GWRp2E",function(a,c){s_Pee(a,c)})});var s_Tee=function(a){s_Y.call(this,a)};s_h(s_Tee,s_Y);s_V(function(a){s_M(a,"t-PAe0aWUayzk",s_Jee,null,s_Tee,function(a,c,d){a.Fa=d});s_N(a,"mYKWY-DZyGo",function(a){s_Kee(a)});s_N(a,"M9z5sLNCGng",function(){s_w(182)});s_N(a,"75eDUDENAoY",function(a,c){a.open(c)})});
var s_Uee=function(a){this.Ka=a};s_Uee.prototype.YP=function(){return this.Ka.get("initially_visible")};var s_Vee=function(a){s_Y.call(this,a)};s_h(s_Vee,s_Y);s_Vee.prototype.getContainer=function(){return this.Pa()};var s_Wee=function(a){this.Ka=a};s_Wee.prototype.YP=function(){return this.Ka.get("initially_visible")};var s_Xee=function(a){s_Y.call(this,a)};s_h(s_Xee,s_Y);s_Xee.prototype.getContainer=function(){return s_Z(this,"WI_562leVwQ")};
s_V(function(a){s_M(a,"t-iv-G9Zy7OcE",s_T$,s_Uee,s_Vee,function(a,c,d){s_T$.call(a,c,d)});s_N(a,"ylgYyqmnhLQ",function(a){s_D(a.ma)});s_N(a,"ogGM9mejrVc",function(a){s_Qee(a)});s_N(a,"UhhMDIdgfCk",function(a,c){c=c.event().target;a.ka=s_Lj(c);a.ka&&a.ha&&s_I.Cb(s_e(a.ka.$,a.ka))})});s_V(function(a){s_M(a,"t-2eXLx79a6ak",s_S$,s_Wee,s_Xee,function(a,c,d){s_S$.call(a,c,d)})});




s_F("strm");s_H();
}catch(e){_DumpException(e)}
/* _Module_:twt */
try{
s_G("twt");var s_r1=function(a){this.Fa=a;this.ka=this.Fa.getContainer();a=s_m("tw-res",this.ka);s_yn(this,!0,a)};s_h(s_r1,s_q);s_r1.prototype.Nl=function(){s_i(this.ka.querySelectorAll("img"),function(a){null===a||a.src||(a.src=s_B(a,"src"))})};s_r1.prototype.Ut=s_d;s_r1.prototype.hidden=s_d;
var s_lcd=function(a){s_Y.call(this,a)};s_h(s_lcd,s_Y);s_lcd.prototype.getContainer=function(){return this.Pa()};s_V(function(a){s_M(a,"t-_Q_gSb1oLyw",s_r1,null,s_lcd,function(a,c,d){s_r1.call(a,d)})});
s_F("twt");s_H();
}catch(e){_DumpException(e)}
/* _Module_:me */
try{
s_G("me");var s_15=function(a){a=a.Ka.$(s_6Hd,"ec");this.qa=s_Q(a,1)||!1;var b=s_Q(a,2)||!1;this.ha=this.qa&&b;b=s_Q(a,4);a=s_Q(a,5);this.Wa=null!=b?b:1068;this.Ca=null!=a?a:1156;s_e(this.ma,this);this.ha&&(this.ka=s_6ca(s_e(this.Ea,this),!0),s_r(window,"resize",this.ka,!1,this),this.ka())};s_h(s_15,s_q);s_15.prototype.Ha=function(){this.ha&&s_qd(window,"resize",this.ka,!1,this)};s_15.prototype.Ea=function(){s_7Hd(this,s_j("rhs_block"));s_7Hd(this,s_j("nyc"));s_w(60)};s_15.prototype.ka=null; s_15.prototype.ma=function(){if(!this.qa)return 0;var a=document.body.offsetWidth,b=this.Wa;return a>=this.Ca?5:a>=b?4:3};var s_7Hd=function(a,b){b&&(a=a.ma(),s_A(b,"rhstc3",4>a),s_A(b,"rhstc4",4==a),s_A(b,"rhstc5",4<a))};
var s_6Hd=function(a){s_P(this,a,0,-1,null,null)};s_h(s_6Hd,s_O);var s_8Hd=function(a){this.Ka=a};s_V(function(a){s_M(a,"t-5RRekjfu2Ys",s_15,s_8Hd,null,function(a,c){s_15.call(a,c)})});
s_F("me");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syfz */
try{
var s_qXb=function(a,b,c){var d=0,e=!1,f=[],g=function(){d=0;e&&(e=!1,k())},k=function(){d=s_b.setTimeout(g,b);a.apply(c,f)};return function(a){f=arguments;d?e=!0:k()}};s_G("syfz");
s_F("syfz");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syfx */
try{
s_G("syfx");var s_rXb=function(){};var s_sXb,s_tXb,s_fP=function(a,b){if(!s_tXb){s_tXb={};var c=document.getElementById("isr_param");if(c)for(var d=0;d<c.attributes.length;++d){var e=c.attributes[d];0==e.name.indexOf("data-")&&(s_tXb[e.name]=e.value)}}return s_tXb.hasOwnProperty(a)?parseFloat(s_tXb[a]):b},s_uXb=s_fP("data-ma",12),s_vXb=s_fP("data-mrw",80),s_gP=1+s_fP("data-isuf",0),s_wXb=function(a,b){if(void 0===s_sXb){var c=google.ua||window.navigator.userAgent;s_sXb=!(!c||-1==c.indexOf("WebKit")||0==c.indexOf("Opera"))}if(s_sXb)for(var d in b)c=
s_Ja(d),a.style[c]=b[d];else{c=[];for(d in b)c.push(d+":"+b[d]);a.setAttribute("style",c.join(";"))}},s_iP=function(a,b,c){var d={kfa:0,aX:0,q7:0,s7:0,oga:0,Jn:0,Wn:0,RL:0,G_:0,H_:0,z7:0,Y_:0};d.kfa=b;d.aX=c;d.Y_=c;d.Jn=a.width;d.Wn=a.height;if(a.width>b||a.height>c){var e=b/c,f=Math.min(s_xXb(a),Math.max(e,s_yXb(a)));s_hP(a)>f?(e=Math.min(a.height,b/f),d.Jn=e*s_hP(a),d.Wn=e):(e=Math.min(a.width,f>e?b:c*f),d.Jn=e,d.Wn=e/s_hP(a))}1<s_gP&&!a.qa&&((f=Math.min(b/d.Jn,s_gP),e=Math.min(c/d.Wn,s_gP),1<f)?
(e=Math.max(e,f),d.Jn*=e,d.Wn*=e):1<e&&(f=d.Jn*e,f>b||f*s_gP<b)&&(d.Wn*=e,d.Jn=f));d.Jn=Math.round(d.Jn);d.Wn=Math.round(d.Wn);d.Jn>b?(e=d.Jn-b,b=d.Jn-b,d.RL=-1*(0==a.ka&&0==a.Wa?Math.floor(b/2):Math.round(a.ka/(a.ka+a.Wa)*b)),d.G_=-e-d.RL):d.Jn<b&&(d.q7=(b-d.Jn)/2);d.Wn>c?(c=d.Wn-c,d.H_=-1*(0==a.ha&&0==a.Ea?Math.floor(.5*c):Math.round(a.ha/(a.ha+a.Ea)*c))):d.Wn<c&&(d.Y_=d.Wn,d.aX=d.Wn,c-=d.Wn,d.s7=Math.floor(c/2),d.oga=Math.ceil(c/2));d.z7=Math.min(d.Jn,d.kfa);s_zXb(a,d)},s_zXb=function(a,b){a=a.element;
var c=a.getElementsByClassName("rg_bx");a=0<c.length?c[0]:a;s_wXb(a,{width:b.kfa+"px",height:b.aX+"px","padding-top":b.s7+"px","padding-bottom":b.oga+"px"});c=a.getElementsByClassName("rg_ic");s_wXb(0<c.length?c[0]:a.getElementsByTagName("img")[0],{width:b.Jn+"px",height:b.Wn+"px","margin-left":b.RL+"px","margin-right":b.G_+"px","margin-top":b.H_+"px"});var c=b.kfa,d=b.Jn,e="",f="",g=!1;if(d<c){var k=a.getElementsByTagName("div");if(k&&k.length)for(var l=0,m;m=k[l];++l)if("rg_anbg"==m.className){d<
s_vXb&&(f=(c-s_vXb)/2+"px",g=!0);break}}g||(e=b.q7+"px");s_wXb(a.getElementsByTagName("a")[0],{width:b.z7+"px",height:b.Y_+"px",left:e,right:f})},s_jP=function(a,b){this.element=a;this.qa="1"==b.bc;this.ha=parseInt(b.ct,10)||0;this.Ea=parseInt(b.cb,10)||0;this.ka=parseInt(b.cl,10)||0;this.Wa=parseInt(b.cr,10)||0;this.Ga="1"==b.sc;this.width=b.tw;this.height=b.th;this.Ca=b.ow;this.Ia=b.oh;this.Ja=1==b.ps},s_AXb=s_fP("data-eca",.1),s_hP=function(a){return a.width/a.height},s_yXb=function(a){if(a.qa)return s_hP(a); var b=(a.ka+a.Wa)/100;a.Ga||(b=Math.min(1,b+s_AXb));return(a.width-a.width*b)/a.height},s_xXb=function(a){if(a.qa)return s_hP(a);var b=(a.ha+a.Ea)/100;a.Ga||(b=Math.min(1,b+s_AXb));return a.width/(a.height-a.height*b)};

s_F("syfx");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sygs */
try{
s_G("sygs");var s_TQ=function(a,b,c,d,e){s_q.call(this);this.Mb=b;this.ha=a;if(a=this.ha.querySelector(".img-brk")){this.ka=a;this.Rc=s_c2b(this.ka,"h",this.ka.clientHeight);this.Ea=s_c2b(this.ka,"m",2);this.Za=s_c2b(this.ka,"nr",1);if(this.ka){a=this.ka.querySelectorAll(".bili");b=[];for(var f=0,g;g=a[f];f++){var k=g.querySelector(".rg_meta");k&&(k=s_hda(k.innerText||k.innerHTML),g=new s_d2b(g,k),b.push(g))}a=b}else a=[];this.Da=a;this.Na=c?c:"";this.Ma=s_c(d)?d:100;this.Ja={};this.rb=!!e;this.Ca=this.Wa=!1;
this.ma=null}};s_h(s_TQ,s_q);s_TQ.prototype.start=function(){s_e2b(this);this.ma=s_e(this.Db,this);this.Mb.ma(this.ma);s_oe(165,this.ma);s_sa("google.isr.frs",this.ma)};var s_c2b=function(a,b,c){a=s_B(a,b);return null==a||(a=parseInt(a,10),isNaN(a))?c:a};s_TQ.prototype.qa=function(){var a=this.Ea,a=s_og(this.ha).width+a;return new s_lc(a,this.Rc)};s_TQ.prototype.Db=function(){this.Wa=!0;s_e2b(this)};
var s_e2b=function(a){s_f2b(a,"iuml_rcs");if(!a.Ca){a.Ca=!0;var b;for(b=a.ha;b&&s_v(b);)b=b.parentElement;if(b=b||s_x(document.body,"qs-i")?!1:!a.Ga()){for(var c=a.Mb.ka(a.Da),d=!1,e=[],f=[],g,k=0;g=a.Da[k];k++){var l=c[k],m=null!=l;s_v(g.$)!=m&&(s_Ue(g.$)?e.push(g.$):e.push(g.$.querySelector("a")),f.push(m));var m=a,n=!1;s_u(g.$,!!l);l&&(g.element.querySelector(".bia").style.margin="0",s_B(g.$,"ni")&&(s_Te(g.$,"ni"),g.$.querySelector("img").src=g.Ma),m.Mb.ha(g,l.width,l.height),g.$.style.width=g.element.style.width,
s_A(g.$,"bi-io",!!l.overlay),l.width>g.width&&(n=!0));d=n||d}e.length&&s_C(null,e,f);a.ka.style.height&&(a.ka.style.height="",a.ka.style.height=a.ka.offsetHeight+"px");d||!a.Ga()?s_g2b(a,{eg:d?1:0}):a.Wa&&a.rb||s_g2b(a,{lc:1})}a.ka&&(a.ka.style.visibility="inherit");b?s_f2b(a,"iuml_re"):s_f2b(a,"iuml_nre");a.Ca=!1}},s_f2b=function(a,b){!a.Wa&&google.timers&&google.timers.load&&google.timers.load.t&&google.tick("load",b)};s_TQ.prototype.jl=function(){return this.Da};
var s_g2b=function(a,b){if(!(0>=a.Ma)&&0==Math.floor(Math.random()*a.Ma)){var c=s_wc(),d=c.width;a.Ja[d]||(c={iw:d,ih:c.height,r:a.Wa?1:0,sh:screen.height,sw:screen.width,tmw:a.ha.clientWidth},b&&s_tb(c,b),a.Na&&(c.c=a.Na),s_c(window.orientation)&&(c.wo=window.orientation),a.ka&&(c.bw=a.ka.offsetWidth),b=new s_pg,b.$("emsg",s_h2b(c)),b.$("expid",google.kEXPI),google.log("kptm:il","&"+b.ma.toString()),a.Ja[d]=!0)}},s_h2b=function(a){var b=[];s_gb(a,function(a,d){b.push(d+":"+a)});return b.join(",")};
s_TQ.prototype.Ha=function(){null!=this.ma&&(this.Mb.qa(this.ma),s_qe(165,this.ma),s_sa("google.isr.frs",null))};var s_d2b=function(a,b){s_jP.call(this,a.querySelector(".bicc")||a,b);this.$=a;this.Ma=b.tu;this.Da=6==b.rt;this.ma=null;b.ml&&(a=b.ml,this.ma={},s_gb(a,function(a,b){this.ma[b]={height:a.bh,width:a.bw,overlay:!!a.o}},this))};s_h(s_d2b,s_jP); var s_i2b=function(a,b){var c=null;if(a.ma){var d=b+5,e=0;s_gb(a.ma,function(a,b){b=parseInt(b,10);b<=d&&b>e&&(c=a,e=b)})}return c},s_j2b=function(a){this.$=a};

s_F("sygs");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sygu */
try{
s_G("sygu");var s_m2b=null;
var s_VQ=function(a){this.$=a};s_h(s_VQ,s_j2b);s_VQ.prototype.ma=function(a){s_oe(60,a)};s_VQ.prototype.qa=function(a){s_qe(60,a)};s_VQ.prototype.ka=function(a){for(var b=this.$.ha.clientWidth,c=[],d,e=0;d=a[e];e++)d=s_i2b(d,b),c.push(d);return c};s_VQ.prototype.ha=function(a,b,c){s_iP(a,b,c)};s_m2b=s_f(s_9c,s_VQ);

s_F("sygu");s_H();
}catch(e){_DumpException(e)}
/* _Module_:kptm */
try{
s_G("kptm");var s_2td=function(a){s_P(this,a,0,-1,null,null)};s_h(s_2td,s_O);new s_Vf;var s_23=[{},{},{}];var s_33=function(a){s_TQ.call(this,a,s_m2b(this));a=s_e(this.Ia,this,!1);var b=s_e(this.Ia,this,!0);s_23[0].kptm=a;s_23[1].kptm=a;s_23[2].kptm=b};s_h(s_33,s_TQ);s_33.prototype.Ia=function(a){for(var b=this.ka,c=b.querySelectorAll(".krable"),d=0,e;e=c[d];d++)e.style.display=a?"block":"none";b.style.height&&(b.style.height="",b.style.height=b.offsetHeight+"px")};
s_33.prototype.Ga=function(){var a=this.jl();if(!this.ka)return!0;var b=a[0];if(1==a.length)var a=b.$,c=s_i2b(b,this.ha.clientWidth),a=(c?c.width:0)==a.offsetWidth;else{for(var a=this.Ea,c=this.ha.clientWidth+a,b=b.$,d=0,e=0,f,g=1;f=this.jl()[g];g++)f=f.$,s_v(f)&&(0==d&&(d+=b.offsetWidth+a),d+=f.offsetWidth+a,f=d-c,0<=f&&1>=f&&(e++,d=0));a=e==this.Za&&0==d}return a};s_33.prototype.Ha=function(){delete s_23[0].kptm;delete s_23[1].kptm;delete s_23[2].kptm;s_33.Ba.Ha.call(this)};
var s_3td=function(a){var b=s_W(this),c=s__c(b,"kp-blk");c&&c.querySelector(".kno-ibrg")&&(b=s__c(b,"tb_c"),(this.ka=a.Ka.get("use_resizer")||!s_Q(a.Ka.$(s_2td,"splitkp"),86365553)?new s_33(b?b:c):null)&&this.ka.start())};s_h(s_3td,s_q);s_3td.prototype.Ha=function(){this.ka&&this.ka.dispose();this.ka=null};
var s_4td=function(a){this.Ka=a};s_V(function(a){s_M(a,"t-5wh_xFBNHUk",s_3td,s_4td,null,function(a,c){s_3td.call(a,c)})});
s_F("kptm");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syfw */
try{
s_G("syfw");
s_F("syfw");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sygo */
try{
s_G("sygo");var s_lZb=function(a){var b=a.href;if(b){var c=s_Ag(a.href);null!=c.ka.match("google")&&"/imgres"==c.ha&&(a=s_Ue(a),c=new s_Ve,s_mg(c,a),b=b.replace(/&vet=[^&]*|$/,"&vet="+s_Ye(c)))}return b};
s_F("sygo");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sygv */
try{
s_G("sygv");var s__Q=function(){s_q.call(this)};s_h(s__Q,s_q);var s_Q2b=function(a){var b=a.event();if(!b||!b.target)return null;a=s_P2b(a);return s__c(a,"rg_el")},s_P2b=function(a){a=a.event();return a?(a=a.target)?s_Zc(a,"A"):null:null};
s_F("sygv");s_H();
}catch(e){_DumpException(e)}
/* _Module_:syh0 */
try{
s_G("syh0");
s_F("syh0");s_H();
}catch(e){_DumpException(e)}
/* _Module_:ilrp */
try{
s_G("ilrp");var s_CEd=function(){s_q.call(this)};s_h(s_CEd,s__Q);
s_CEd.prototype.ee=function(a){var b=s_Q2b(a),c=!1;if(null!==b){var d=s_m("rg_meta",b);if(d){if(d=s_Wc(d)){var d=JSON.parse(d),e={};e.tbnid=d.id;e.refUrl=d.ru;e.thumbnailUrl=d.tu;e.fullSizeUrl=d.ou;e.pageTitle=d.pt;e.width=+d.ow;e.height=+d.oh;e.prefetch=google.j.pf?"1":"0";d=e}else d=null;d&&(e=s_vk("session","images-ilrp"))&&e.set("meta",d)}if(b=s_m("irc_ilrp_rve",b))(b=(c=s_Ue(b))||"")&&(d=s_vk("session","images-ilrp"))&&d.set("ved",b),c=!!c}(a=s_P2b(a))&&a.href&&s_x(a,"bia")&&(s_uja(a),b=a.getAttribute("href", 2),d=s_j("irc_ilrp_pve"),c&&d&&(c=s_Ue(d))&&(b=s_2g("ved",b,c,!0)),c=s_2g("ei",b,google.kEI,!0),a.href=c,(b=s_lZb(a))&&s_ze(b))};
s_V(function(a){s_M(a,"t-bgv2_kKhb5U",s_CEd,null,null,function(a){s_q.call(a)});s_N(a,"vN7_abZGX9U",function(a,c){a.ee(c)})});
s_F("ilrp");s_H();
}catch(e){_DumpException(e)}
/* _Module_:iuci */
try{
s_G("iuci");var s_71b=function(a){s_P(this,a,0,-1,null,null)};s_h(s_71b,s_O);var s_91b=function(a,b){this.$=b.getItem();this.ka=a.Ka.get("visible");s_yn(this);(this.ha=!s_Q(a.Ka.$(s_71b,"images_universal_ui"),20718464))&&s_81b(this)};s_91b.prototype.Nl=function(){this.ha||s_81b(this)};var s_81b=function(a){if(a=a.$.querySelector("g-img"))a=a.querySelector("IMG"),s_B(a,"src")&&s_X(a).then(function(a){a.load()})};s_91b.prototype.Ut=function(){this.ka||(s_C(null,[this.$]),this.ka=!0)};s_91b.prototype.hidden=s_d;
var s_$1b=function(){var a=s_W(this).querySelectorAll("g-img");s_i(a,function(a){a=a.querySelector("IMG");s_B(a,"src")&&s_X(a).then(function(a){a.load()})})};var s_a2b=function(a){this.Ka=a},s_b2b=function(a){s_Y.call(this,a)};s_h(s_b2b,s_Y);s_b2b.prototype.getItem=function(){return this.Pa()};s_V(function(a){s_M(a,"t-nlhqGANbri4",s_$1b,null,null,function(a){s_$1b.call(a)})});s_V(function(a){s_M(a,"t-nY_sx4Ofin8",s_91b,s_a2b,s_b2b,function(a,c,d){s_91b.call(a,c,d)})});

s_F("iuci");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy1p */
try{
s_G("sy1p");var s_wj=function(a){this.ka=a;this.$=[]},s_xj=function(a){for(var b=a.ka;b&&b!=document.body;){var c=s_Sc(b);if(c){var d=s_Mc(c);s_i(d,function(a){a==b||s_vj(a,"hidden")||(s_tj(a,"hidden",!0),this.$.push(a))},a)}b=c}},s_yj=function(a){s_i(a.$,function(a){s_uj(a,"hidden")});a.$=[]};

s_F("sy1p");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy1q */
try{
s_G("sy1q");var s_Aj=function(a,b,c,d,e){this.ka=!!b;this.node=null;this.zB=0;this.Ja=!1;this.Ga=!c;a&&s_zj(this,a,d);this.ma=void 0!=e?e:this.zB||0;this.ka&&(this.ma*=-1)};s_h(s_Aj,s_ff);var s_zj=function(a,b,c,d){if(a.node=b)a.zB=s_ia(c)?c:1!=a.node.nodeType?0:a.ka?-1:1;s_ia(d)&&(a.ma=d)};s_=s_Aj.prototype;s_.YJ=function(a){this.node=a.node;this.zB=a.zB;this.ma=a.ma;this.ka=a.ka;this.Ga=a.Ga};s_.clone=function(){return new s_Aj(this.node,this.ka,!this.Ga,this.zB,this.ma)};
s_.next=function(){if(this.Ja){if(!this.node||this.Ga&&0==this.ma)throw s_ef;var a=this.node;var b=this.ka?-1:1;if(this.zB==b){var c=this.ka?a.lastChild:a.firstChild;c?s_zj(this,c):s_zj(this,a,-1*b)}else(c=this.ka?a.previousSibling:a.nextSibling)?s_zj(this,c):s_zj(this,a.parentNode,-1*b);this.ma+=this.zB*(this.ka?-1:1)}else this.Ja=!0;a=this.node;if(!this.node)throw s_ef;return a};s_.equals=function(a){return a.node==this.node&&(!this.node||a.zB==this.zB)};
s_.splice=function(a){var b=this.node,c=this.ka?1:-1;this.zB==c&&(this.zB=-1*c,this.ma+=this.zB*(this.ka?-1:1));this.ka=!this.ka;s_Aj.prototype.next.call(this);this.ka=!this.ka;for(var c=s_oa(arguments[0])?arguments[0]:arguments,d=c.length-1;0<=d;d--)s_Jc(c[d],b);s_o(b)};

s_F("sy1q");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy1r */
try{
s_G("sy1r");var s_Bj=function(a,b,c,d){s_Aj.call(this,a,b,c,null,d)};s_h(s_Bj,s_Aj);s_Bj.prototype.next=function(){do s_Bj.Ba.next.call(this);while(-1==this.zB);return this.node};
s_F("sy1r");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy65 */
try{
s_G("sy65");
s_F("sy65");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7k */
try{
s_G("sy7k");
s_F("sy7k");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy0 */
try{
s_G("sy0");var s_0t=new Map;s_0t.set("TSggue","web/SearchApiService/GetFeatureBy1ns");s_0t.set("IoX9Ib","web/SearchApiService/GetGeoEntity");s_0t.set("Jn4fke","web/SearchApiService/GetGeoResult");s_0t.set("C7WzOe","web/SearchApiService/GetGeoVerticalPage");s_0t.set("LLrS9e","web/SearchApiService/GetPartialGeoEntity");s_0t.set("uYKSof","retry/SearchApiService/GetShortenedKpSharingUrl");s_0t.set("CToa8e","retry/SearchApiService/GetTranslation");

s_F("sy0");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7l */
try{
s_G("sy7l");
s_F("sy7l");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7m */
try{
s_G("sy7m");
s_F("sy7m");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7n */
try{
s_G("sy7n");var s_hMa=function(a){s_P(this,a,0,-1,null,null)};s_h(s_hMa,s_O);
s_F("sy7n");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7o */
try{
s_G("sy7o");var s_1t=function(a){s_P(this,a,0,-1,null,null)};s_h(s_1t,s_O);s_1t.prototype.getMetadata=function(){return s_T(this,s_hMa,500)};s_1t.prototype.fN=function(a){s_Fi(this,500,a)};
s_F("sy7o");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7q */
try{
s_G("sy7q");
s_F("sy7q");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7s */
try{
s_G("sy7s");var s_2t=function(a){s_P(this,a,0,-1,null,null)};s_h(s_2t,s_O);s_2t.prototype.getYear=function(){return s_R(this,1,0)};s_2t.prototype.getMonth=function(){return s_R(this,2,0)};s_2t.prototype.getDay=function(){return s_R(this,3,0)};
s_F("sy7s");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7r */
try{
s_G("sy7r");
s_F("sy7r");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7t */
try{
s_G("sy7t");
s_F("sy7t");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7u */
try{
s_G("sy7u");
s_F("sy7u");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7v */
try{
s_G("sy7v");
s_F("sy7v");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7w */
try{
s_G("sy7w");
s_F("sy7w");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7x */
try{
s_G("sy7x");var s_kMa=function(a){var b=s_iMa;return s_jMa(a,b).then(function(a){var c=a.responseText;b&&b.bSa&&(a=b.bSa,s_ua(c,a)&&(c=c.substring(a.length)));return s_cf(c)})},s_jMa=function(a,b){return new s_sf(function(c,d){var e=b||{},f,g=e.mDa?e.mDa.$():s_3f();try{g.open("GET",a,!0)}catch(m){d(new s_3t("Error opening XHR: "+m.message,a,g))}g.onreadystatechange=function(){if(4==g.readyState){s_b.clearTimeout(f);var b;!(b=s_Bja(g.status))&&(b=0===g.status)&&(b=s_Aja(a),b=!("http"==b||"https"==b||""==b));b?
c(g):d(new s_lMa(g.status,a,g))}};g.onerror=function(){d(new s_3t("Network error",a,g))};if(e.headers)for(var k in e.headers){var l=e.headers[k];null!=l&&g.setRequestHeader(k,l)}e.withCredentials&&(g.withCredentials=e.withCredentials);e.responseType&&(g.responseType=e.responseType);e.mimeType&&g.overrideMimeType(e.mimeType);0<e.YCa&&(f=s_b.setTimeout(function(){g.onreadystatechange=s_d;g.abort();d(new s_mMa(a,g))},e.YCa));try{g.send(null)}catch(m){g.onreadystatechange=s_d,s_b.clearTimeout(f),d(new s_3t("Error sending XHR: "+
m.message,a,g))}})},s_3t=function(a,b,c){s_ta.call(this,a+", url="+b);this.url=b;this.Fv=c};s_h(s_3t,s_ta);s_3t.prototype.name="XhrError";var s_lMa=function(a,b,c){s_3t.call(this,"Request Failed, status="+a,b,c);this.status=a};s_h(s_lMa,s_3t);s_lMa.prototype.name="XhrHttpError";var s_mMa=function(a,b){s_3t.call(this,"Request timed out",a,b)};s_h(s_mMa,s_3t);s_mMa.prototype.name="XhrTimeoutError";
var s_iMa={bSa:")]}'\n\n"},s_nMa=function(a){var b=a.Dqa,c=b.toString();a=a.$;if(!s_0t.has(c))return b=Error("Gc"),b.details={id:c},s_le(b,b.details,!0),s_tf(b);c=s_0t.get(c);a=encodeURIComponent(a.yb());var d=b.ka;return s_kMa("/httpservice/"+c+"?reqpld="+a).then(function(a){return new d(a)})};

s_F("sy7x");s_H();
}catch(e){_DumpException(e)}
/* _Module_:shrb */
try{
var s_oMa=function(a){s_P(this,a,0,-1,null,null)};s_h(s_oMa,s_O);s_G("shrb");var s_pMa=null;var s_4t=function(a,b){this.$=s_Q(a.getData(),1);this.ka=s_Q(a.getData(),2);this.ma=s_Q(a.getData(),6);this.ha=b.Pa()},s_qMa=!!window.agsa_ext&&!!window.agsa_ext.share;s_4t.prototype.share=function(a){s_A(this.ha,"kno-shr-ld",!0);a&&s_D(a.node());if(s_qMa&&this.ka)return s_pMa(this.ka).then(this.Ea,this.qa,this);if(s_qMa&&this.$)return window.agsa_ext.share(this.$,null),s_rMa(this),s_E(this.$);s_le(Error("Od"),{shareText:this.$,shareUrl:this.ka});s_rMa(this);return s_tf("The AGSA share API is not available or share text and URL are null")};
var s_sMa=function(a,b){var c="";a.$&&(c=a.$+a.ma);c+=b+" ";window.agsa_ext.share(c,null);return c};s_4t.prototype.Ea=function(a){s_rMa(this);return a?s_sMa(this,a):s_sMa(this,this.ka)};s_4t.prototype.qa=function(){s_rMa(this);return s_sMa(this,this.ka)};var s_rMa=function(a){s_A(a.ha,"kno-shr-ld",!1)};
var s_tMa=function(a){this.$=a.Pa();a.Pa();this.ka=s_yf(s__(a,"YbcQq9Khf_8"),function(a){s_le(Error("Pd`"+a));return s_tf(a)})},s_uMa=function(a){a.ka.then(function(a){a.open(this.$)},null,a)};var s_vMa=function(a){this.Fa=a;this.Qv=s_Z(a,"tB4CkhL0Pws");this.$=s_yf(s__(this.Fa,"0078sLar460"),function(a){s_le(Error("Qd`"+a));return s_tf(a)});this.ka=s_yf(s__(this.Fa,"E8FAx9Irxvk"),function(a){s_le(Error("Rd`"+a));return s_tf(a)})};s_vMa.prototype.ha=function(){this.$.then(function(a){a.close()})};
s_vMa.prototype.open=function(a){this.ka.then(function(a){s_u(a.Ja,!1);s_u(a.Ma,!0);var b=s_wMa();s_u(a.Cd,b);s_u(a.xc,!b);a.ha||a.Za||s_pMa(a.ka).then(a.nb,a.Xa,a)},null,this);this.$.then(function(b){b.open();s_C(a,[this.Fa.Pa()])},null,this);s_4h("duf3",{before:s_e(this.ha,this)})};var s_xMa=function(a){a.$.then(function(a){a.close();s_D(this.Qv)},null,a)},s_yMa=function(a){s_C(null,[a.Fa.Pa()],[!1]);s_4h("duf3",{before:function(){}})};
var s_5t=function(a,b){this.Ca=s_Q(a.getData(),1);this.Ga=s_Q(a.getData(),7);this.Da=s_Q(a.getData(),9);this.Ia=s_Q(a.getData(),8);this.Wa=s_Q(a.getData(),6);this.ka=s_Q(a.getData(),2);this.Za=s_Q(a.getData(),10);this.Db=a.Ka.get("enabled_whatsapp_intent_url");this.Fa=b;this.El=s_Z(this.Fa,"eahz_wQSGl4");this.Cq=s_Z(this.Fa,"DCw8YHADtYY");this.ma=s_Z(this.Fa,"iNHwWuaWJ8I");this.Ea=s_Z(this.Fa,"KOsxpyPW0RE");this.Na=s_Z(this.Fa,"JtrpqFxwsX4");this.Ma=s_Z(this.Fa,"p2JHyniQDhM");this.Cd=s_Z(this.Fa,
"K9A5rUUabyY");this.xc=s_Z(this.Fa,"NBn6beZVvl0");this.Ja=s_Z(this.Fa,"L5eBHaSmL84");this.ha=null;this.qa=new s_Gj(this);this.ma&&(a=s_e(this.Yb,this),s_Hj(this.qa,this.ma,"click",a,!1,this));a=s_e(this.rb,this);s_Hj(this.qa,this.Ea,"click",a,!1,this);s_zMa(this,this.ka)};s_h(s_5t,s_q);
var s_BMa=function(a){s_AMa(a);a.El&&(a.El.select(),a.El.focus(),s_D(a.El))},s_AMa=function(a){if(s_wMa()){s_p(a.Na,a.ha||a.ka);var b=document.createRange();b.selectNodeContents(a.Na);window.getSelection().removeAllRanges();window.getSelection().addRange(b);try{document.execCommand("copy",!0,null)&&(s_u(a.Ma,!1),s_u(a.Ja,!0))}catch(c){}}};s_5t.prototype.nb=function(a){this.ha=a;s_zMa(this,a)};s_5t.prototype.Xa=function(){};s_5t.prototype.Yb=function(){s_Kj(this,"dg_close");this.ma&&s_D(this.ma)};
s_5t.prototype.rb=function(){s_Kj(this,"dg_close");s_D(this.Ea)};
var s_zMa=function(a,b){a.El&&(a.El.value=b);a.Cq&&(a.Cq.href=b,a.Cq.innerText=b);if(a.ma){var c=a.Ca+a.Wa+(a.ha||a.ka);a.ma.href=a.Db?"intent://send?text="+s_za(c)+"#Intent;scheme=whatsapp;package=com.whatsapp;end":s_CMa("whatsapp://send",{text:c})}c=a.Ga?a.Ga:a.Ca;a.Ea.href=a.Da?s_CMa("mailto:",{subject:a.Da,body:c+a.Wa+b}):s_CMa("mailto:",{body:c+a.Wa+b})},s_DMa=function(a,b,c,d){s_Kj(a,"dg_close");s_Sk(s_CMa(c,d),{target:"_blank"});s_D(b)},s_CMa=function(a,b){var c=new s_xg,d;for(d in b)c.add(d,
b[d]);a=new s_pg(a);s_ug(a,c);return a.toString()},s_wMa=function(){var a="getSelection"in window&&"queryCommandSupported"in document&&"execCommand"in document&&document.queryCommandSupported("copy");if(a)try{a=document.execCommand("copy",!0,null)}catch(b){a=!1}return a};s_5t.prototype.Ha=function(){this.qa&&(this.qa.dispose(),this.qa=null)};
var s_EMa=function(a){this.Ka=a};s_EMa.prototype.getData=function(){return this.Ka.$(s_oMa,"data")};var s_FMa=function(a){s_Y.call(this,a)};s_h(s_FMa,s_Y);var s_GMa=function(a){s_Y.call(this,a)};s_h(s_GMa,s_Y);var s_HMa=function(a){s_Y.call(this,a)};s_h(s_HMa,s_Y);var s_IMa=function(a){this.Ka=a};s_IMa.prototype.getData=function(){return this.Ka.$(s_oMa,"data")};var s_JMa=function(a){s_Y.call(this,a)};s_h(s_JMa,s_Y);
s_V(function(a){s_M(a,"t-Bde9b0M_4Ko",s_4t,s_EMa,s_FMa,function(a,c,d){s_4t.call(a,c,d)});s_N(a,"-xwA8DYU73o",function(a,c){a.share(c)})});s_V(function(a){s_M(a,"t-dhmk9MkDbvI",s_tMa,null,s_GMa,function(a,c,d){s_tMa.call(a,d)});s_N(a,"_HouY4r6utk",function(a){s_uMa(a)})});s_V(function(a){s_M(a,"t-7hzFN84w9_k",s_vMa,null,s_HMa,function(a,c,d){s_vMa.call(a,d)});s_N(a,"-FPnppROon0",function(a){s_yMa(a)});s_N(a,"giXQqEBMb3E",function(a){s_xMa(a)})});
s_V(function(a){s_M(a,"t-Af7qQQQTXaA",s_5t,s_IMa,s_JMa,function(a,c,d){s_5t.call(a,c,d)});s_N(a,"XXmUEmWYRuA",function(a){s_DMa(a,s_Z(a.Fa,"_p8dA32EcDY"),"https://www.facebook.com/sharer/sharer.php",{u:a.ha||a.ka})});s_N(a,"-HO1-M7TwUw",function(a){var b=a.Ia?a.Ia:a.Ca;s_DMa(a,s_Z(a.Fa,"OL1tvwLQG94"),"https://www.twitter.com/share",{url:a.ha||a.ka,text:b})});s_N(a,"pdpdgoM9Un0",function(a){s_DMa(a,s_Z(a.Fa,"59QMr6ft28U"),"https://plus.google.com/share",{url:a.ha||a.ka,authuser:google.authuser})}); s_N(a,"XzlMZmtTT1g",function(a){s_AMa(a);s_D(a.Cq)});s_N(a,"am4YolKywd8",function(a){s_BMa(a)});s_N(a,"am4YolKywd8",function(a){s_BMa(a)});s_N(a,"am4YolKywd8",function(a){s_BMa(a)});s_N(a,"XzlMZmtTT1g",function(a){s_AMa(a);s_D(a.Cq)})});



var s_MMa=function(a){s_P(this,a,0,-1,null,null)};s_h(s_MMa,s_O);var s_NMa=function(a){s_P(this,a,0,-1,null,null)};s_h(s_NMa,s_O);s_NMa.prototype.JBa=function(a){s_Fi(this,1,a)};var s_OMa=function(a){s_P(this,a,0,-1,null,null)};s_h(s_OMa,s_O);var s_PMa=function(a){s_P(this,a,0,-1,null,null)};s_h(s_PMa,s_O);s_PMa.prototype.getContext=function(){return s_T(this,s_OMa,2)};var s_QMa=function(a){s_P(this,a,0,-1,null,null)};s_h(s_QMa,s_O);var s_RMa=function(a){s_P(this,a,0,-1,null,null)};s_h(s_RMa,s_O);s_RMa.prototype.Io="xt0Ntc";var s_SMa=new s_7k("uYKSof",s_RMa);s_pMa=function(a){var b=new s_MMa;s_S(b,1,a);a=new s_NMa;a.JBa(b);b=new s_PMa;s_Fi(b,1,a);return s_nMa(s_SMa.Sa(b)).then(function(a){try{var b=s_R(s_T(s_T(a,s_QMa,1),s_MMa,1),1,"")}catch(e){}if(!b)throw b=Error("Nc"),b.details={res:a.yb()},s_le(b,b.details,!0),b;return b})};

s_F("shrb");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy7y */
try{
s_G("sy7y");var s_6t=function(a){s_P(this,a,0,-1,null,null)};s_h(s_6t,s_O);
s_F("sy7y");s_H();
}catch(e){_DumpException(e)}
/* _Module_:dgm */
try{
var s_42=function(a,b){this.ma=s_Gld;this.Db=!!s_oj(a.ie());this.nb=!(!s_Hld(a)||!s_Q(s_Hld(a),244399487));this.Kb=!(!s_Hld(a)||!s_Q(s_Hld(a),46740956))&&!this.nb;var c=s_Z(b,"oPwtUFSp9U8")||s_k(s_B(b.Pa(),"id")||"");this.ka=c;this.Ca=b.Pa();c.__owner=this.Ca;this.Rd=s_m(this.ma.hRa,c);this.Nb=s_m(this.ma.EQa,c);this.qa=s_m(this.ma.CONTENT,c);this.ha=null;this.Ea=[];this.Ma={};this.xc=a.Ka.get("enable_close_for_background")||!1;this.Ia=this.Db?document.documentElement:document.body;this.Na=null;this.rb=
new s_wj(this.qa);this.Cd=!1;this.Da=null;this.Yb=!1;this.Wa=null;this.Ga=a.Ka.get("initial_open");b=!s_x(this.ka,"dgd");1==this.Ga&&b||2==this.Ga?this.open():1!=this.Ga||b||(this.aza(0),s_z(this.ka,"dgd"));this.Pb=!!a.Ka.get("remain_in_lightbox_container");this.Ja=null};s_h(s_42,s_q);s_42.prototype.rha=function(){return this.Db};var s_Ild=function(){var a=s_Mb&&!s_Xb("10"),b=s_j("lb");return a?null:b};
s_42.prototype.open=function(){var a=s_Ild();a&&!s_Tc(a,this.ka)&&(a.appendChild(this.ka),s_u(a,!0),this.Ja=a.style.visibility,a.style.visibility="visible");s_x(this.Rd,this.ma.VISIBLE)||s_y(this.Rd,this.ma.VISIBLE);s_x(this.qa,this.ma.VISIBLE)||s_y(this.qa,this.ma.VISIBLE);s_x(this.Nb,this.ma.VISIBLE)||s_y(this.Nb,this.ma.VISIBLE);this.Na=document.activeElement;this.qa.focus();s_xj(this.rb);s_oe(94,this.Xa);this.Cd=s_gj();this.Yb=s_hj();s_bj(3,3);if(!this.nb){this.Wa&&s_rd(this.Wa);this.Wa=s_r(window,
"scroll",s_e(this.nKa,this),!0);if(this.Kb){var a=s_Ac(),b=s_0d(a).top;a.scrollTop<b&&(a.scrollTop=b)}this.Za=window.pageYOffset;this.Ia.style.top="-"+this.Za+"px";s_y(this.Ia,"nsc")}this.Da=null;s_cq(this.qa,this.aza,void 0,this);0<this.Ea.length&&(this.ha=this.Ea[0],this.Ea=[]);null!=this.ha&&s_Jld(this.ha,0!=this.Ea.length,null)};s_42.prototype.stopPropagation=function(a){a&&s_0e(a.event())};
var s_Kld=function(a,b){b=s_if(new s_Bj(a.qa,!b));return s_Xa(b,function(a){return s_Rc(a)&&s_v(a)&&s_Vc(a)})||a.qa};s_=s_42.prototype;s_.close=function(a){this.Da=a||null;s_oza(this.qa);(a=s_Ild())&&this.Ja&&(a.style.visibility=this.Ja,this.Ja=null)};
s_.aza=function(a){var b={};b.dgdt=a;var c=void 0;this.Da&&(c=this.Da,c=c.event()&&c.event().detail&&c.event().detail.W2||void 0,this.Da=null);null!=this.ha&&s_Lld(this.ha,null);if(this.xc||0==a)return s_z(this.Rd,this.ma.VISIBLE),s_z(this.qa,this.ma.VISIBLE),s_z(this.Nb,this.ma.VISIBLE),this.Pb||s_Sc(this.ka)==this.Ca||this.Ca.appendChild(this.ka),s_Mld(this),s_yj(this.rb),this.Na&&this.Na.focus(),s_bj(this.Cd?3:1,this.Yb?3:0),s_qe(94,this.Xa),s_Kj(this,"dg_dismissed",b,c),s_td(this.ka,"dg_dismissed",
b),!0;s_Kj(this,"dg_not_dismissed",b,c);s_td(this.ka,"dg_not_dismissed",b);return!1};s_.iPa=function(a){s_r(this.ka,"dg_dismissed",a)};s_.p0a=function(a){s_r(this.ka,"dg_not_dismissed",a)};s_.Ha=function(){s_pza(this.qa)&&s_oza(this.qa);s_dq(this.qa);this.Wa&&(s_rd(this.Wa),this.Wa=null);this.ka.__owner=null;s_Sc(this.ka)!=this.Ca&&this.Ca.appendChild(this.ka)};s_.nKa=function(a){var b=a.target;b&&!s_Tc(this.Nb,b)&&s_hd(a)};
var s_Mld=function(a){s_z(a.Ia,"nsc");a.Ia.style.top="";a.Za&&window.scrollTo(0,a.Za);var b=a.Wa;b&&s_qf(function(){s_rd(b)},a);a.Wa=null};s_42.prototype.Xa=function(){return!1};s_42.prototype.Qaa=function(a){if(0<this.Ea.length){s_Lld(this.ha,a);var b=this.Ea.pop(),c=0<this.Ea.length;this.ha=b;s_Jld(b,c,a)}};var s_52=function(a,b){this.Fa=b;this.ma=b.Pa();this.Ea=a.Ka.get("content_id");this.qa=!!a.Ka.get("default_content");this.ha=null;s_Kj(this,"dg_reg_content")};s_h(s_52,s_q);
s_52.prototype.Ha=function(){};s_52.prototype.getId=function(){return this.Ea};s_52.prototype.ka=function(){return this.qa};s_52.prototype.hide=function(){s_5d(this.ma,"display","none")};var s_Lld=function(a,b){a.hide();a=s_Z(a.Fa,"oQZWC8tnd88");s_Ue(a)&&s_C(b,[a],[!1])};
s_52.prototype.show=function(a){s_5d(this.ma,"display","block");var b=s_Z(this.Fa,"H3o3fybh_k4"),c=s_Z(this.Fa,"qh2PmyvLYlg");b&&c&&(a?(s_5d(b,"display","inline-block"),s_5d(c,"width","220px")):(s_5d(b,"display","none"),s_5d(c,"width","248px")))};var s_Jld=function(a,b,c){a.show(b);a=s_Z(a.Fa,"oQZWC8tnd88");s_Ue(a)&&s_C(c,[a],[!0])};s_52.prototype.Qaa=function(a){a=a.node();s_Lj(this.ha).Qaa(a)};s_G("dgm");
var s_Nld=function(a){this.Ka=a};s_Nld.prototype.ie=function(){return this.Ka.$(s_nj,"ux")};var s_Hld=function(a){return a.Ka.$(s_6t,"gsa")},s_Old=function(a){s_Y.call(this,a)};s_h(s_Old,s_Y);var s_Gld={s3a:"dgd",EQa:"fAwjXaCTMo5__container",CONTENT:"fAwjXaCTMo5__content",hRa:"fAwjXaCTMo5__overlay",VISIBLE:"fAwjXaCTMo5__visible",I6a:"nsc"},s_Pld=function(a){this.Ka=a},s_Qld=function(a){s_Y.call(this,a)};s_h(s_Qld,s_Y);
s_V(function(a){s_M(a,"t-cuCqGEujB5w",s_42,s_Nld,s_Old,function(a,c,d){s_42.call(a,c,d)});s_N(a,"J_j78ao4uyM",function(a,c){c=s_Lj(c.event().target);var b=!s_x(a.ka,"dgd");null==a.ha&&c.ka()?(a.ha=c,1==a.Ga&&b||2==a.Ga?s_Jld(c,0!=a.Ea.length,null):c.show(!1)):c.hide();b=c.getId();null!=b&&""!=b&&(a.Ma[b]=c);c.ha=a.Ca});s_N(a,"99yxp2ZuQP0",function(a,c){a.close(c)});s_N(a,"nUlQmbHCUts",function(a,c){a.stopPropagation(c)});s_N(a,"EvZFsYUH-g8",function(a){s_Kld(a,!1).focus()});s_N(a,"15lBFDEFpZ8",function(a){s_Kld(a,
!0).focus()})});s_V(function(a){s_M(a,"t-pmqcKq8OE5A",s_52,s_Pld,s_Qld,function(a,c,d){s_52.call(a,c,d)});s_N(a,"t8rWx2y0mME",function(a,c){var b=c.event().target;c=c.node();b=b.getAttribute("data-id");a=s_Lj(a.ha);a.Ma[b]&&(null!=a.ha&&(a.Ea.push(a.ha),a.ha.hide()),b=a.Ma[b],a.ha=b,s_Jld(b,!0,c))});s_N(a,"_-RKKJBt8RE",function(a,c){a.Qaa(c)})});


s_F("dgm");s_H();
}catch(e){_DumpException(e)}
/* _Module_:qtf */
try{
s_G("qtf");var s_Zod=function(a){this.Fa=a;this.$=s_Z(this.Fa,"q9KDB4SS7aE");this.ka=this.Fa.getLabel()?this.Fa.getLabel():null;this.ha=s_Z(this.Fa,"rOTfk6dPAdI");this.wc=null;s_r(this.$,"input",s_e(this.Axa,this));this.Axa()};s_=s_Zod.prototype;s_.focus=function(){this.$.focus()};s_.setValue=function(a){this.$.value=a;this.Axa()};s_.getValue=function(){return this.$.value};s_.tB=function(a){s_A(this.$,"hDC4CxNVA44__invalid",!a)};s_.Uc=function(){return this.$.checkValidity()&&!s_x(this.$,"hDC4CxNVA44__invalid")};
s_.Sp=function(a){this.$.checkValidity();this.$.disabled=a};s_.lA=function(){return this.$.disabled};s_.Axa=function(){s_A(this.$,"hDC4CxNVA44__dirty",0<this.$.value.length||!this.Uc())};var s__od=function(a){a.ka&&s_y(a.ka,"hDC4CxNVA44__focus");s_y(a.ha,"hDC4CxNVA44__focus");s_Kj(a,"focus")};
var s_0od=function(a){s_Y.call(this,a)};s_h(s_0od,s_Y);s_0od.prototype.getLabel=function(){return s_Z(this,"9VYlxlpwDfk")};s_V(function(a){s_M(a,"t-3mFqq0A9uuY",s_Zod,null,s_0od,function(a,c,d){s_Zod.call(a,d)});s_N(a,"1rHv3nuEdv0",function(a){s__od(a)});s_N(a,"0RGAbK8-DB8",function(a){a.ka&&s_z(a.ka,"hDC4CxNVA44__focus");s_z(a.ha,"hDC4CxNVA44__focus")});s_N(a,"18AL9I_wQN8",function(a){a.$.focus();s__od(a)})});

s_F("qtf");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy25 */
try{
s_G("sy25");var s_Tka=function(a){return null==a?void 0:a},s_Uka=function(a,b){a=a.replace(/\s*,\s*/g,",").replace(/\s+/g,",").split(",");b.push.apply(b,a)},s_Vka=function(a,b,c){for(var d=0,e=0;e<b.length;e++){for(var f=c,g=a.querySelectorAll("."+b[e]),k=g.length,l=0;l<k;l++)f.push(g[l]);d+=k}return d},s_0j=function(a){this.ma=null;this.ka=[];this.$=[];this.ha=null;a=a.split(";");for(var b=0;b<a.length;b++){var c=a[b].split(":");if(2==c.length){var d=c[0].trim(),c=c[1].trim();"ct"==d?this.ma=c:"d"==d?this.ha=
c:"s"==d?s_Uka(c,this.ka):"h"==d&&s_Uka(c,this.$)}}};s_0j.prototype.toString=function(){var a=[];null===this.ma||a.push("ct:"+this.ma);0<this.ka.length&&a.push("s:"+this.ka.join(","));0<this.$.length&&a.push("h:"+this.$.join(","));null===this.ha||a.push("d:"+this.ha);return a.join(";")};
s_0j.prototype.logVisibilityChange=function(a,b){var c=[],d=[],e=s_Vka(b,this.ka,c);b=s_Vka(b,this.$,c);s_5a(d,s_cb(!0,e));s_5a(d,s_cb(!1,b));0==this.ka.length&&0==this.$.length&&(d=c=null);s_C(a,c,d,s_Tka(this.ma),s_Tka(this.ha+(google.j&&google.j.pf?"&sqi=2":"")))};s_0j.prototype.Gy=function(a){s_D(a,s_Tka(this.ma),s_Tka(this.ha+(google.j&&google.j.pf?"&sqi=2":"")))};
var s_1j=function(){},s_2j=function(a,b){b=b.node();if(s_Se(b,"t")){a=s_W(a);for(var c=s_B(b,"t").replace(/\s*[,;]\s*/g,";").replace(/\s+/g,";").split(";"),d=0;d<c.length;d++)s_ve(a,c[d]);(c=s__c(a,"xpdbox"))&&s_Rj(c);s_Se(b,"lvc")&&(c=s_B(b,"lvc")||"",c=new s_0j(c),c.logVisibilityChange(b,a),a=c.ka,c.ka=c.$,c.$=a,s_Re(b,"lvc",c.toString()));s_Se(b,"li")&&(a=s_B(b,"li")||"",(new s_0j(a)).Gy(b))}};

s_F("sy25");s_H();
}catch(e){_DumpException(e)}
/* _Module_:tcc */
try{
s_G("tcc");var s_Wka=function(a){this.$=a.Ka.get("custom_event");this.ka=a.Ka.get("custom_event_data")};s_Wka.prototype.ee=function(){this.$&&s_Kj(this,this.$,{data:this.ka})};var s_Xka=function(a){this.Ka=a};s_V(function(a){s_M(a,"t-7zBfsh1iLdA",s_Wka,s_Xka,null,function(a,c){s_Wka.call(a,c)});s_N(a,"2Sfh4C9u12w",function(a,c){a.ee(c)})});s_V(function(a){s_M(a,"t-OXAqElN2cWI",s_1j,null,null,function(){});s_N(a,"Eddvt4h-GI8",function(a,c){s_2j(a,c)})});
s_V(function(a){s_M(a,"t-27gWe8jP1p0",s_1j,null,null,function(){});s_N(a,"Eddvt4h-GI8",function(a,c){s_2j(a,c)})});s_V(function(a){s_M(a,"t-T0VJ361LqbA",s_1j,null,null,function(){});s_N(a,"Eddvt4h-GI8",function(a,c){s_2j(a,c)})});s_V(function(a){s_M(a,"t-V8TcGe6wnmo",s_1j,null,null,function(){});s_N(a,"Eddvt4h-GI8",function(a,c){s_2j(a,c)})});s_V(function(a){s_M(a,"t-oF0h478wPRI",s_1j,null,null,function(){})});s_V(function(a){s_M(a,"t-JgTEvN6zUII",s_1j,null,null,function(){});s_N(a,"Eddvt4h-GI8",function(a,c){s_2j(a,c)})});s_V(function(a){s_M(a,"t-CIdVBizxsq8",s_1j,null,null,function(){});s_N(a,"Eddvt4h-GI8",function(a,c){s_2j(a,c)})});
s_V(function(a){s_M(a,"t-2Ko5CAD9HMI",s_1j,null,null,function(){});s_N(a,"Eddvt4h-GI8",function(a,c){s_2j(a,c)})});s_V(function(a){s_M(a,"t-c11rjXK6AtU",s_1j,null,null,function(){});s_N(a,"Eddvt4h-GI8",function(a,c){s_2j(a,c)})});s_V(function(a){s_M(a,"t-_J3cGMoz2p8$t-tdv9tYmF56g",s_1j,null,null,function(){});s_N(a,"Eddvt4h-GI8",function(a,c){s_2j(a,c)});s_N(a,"Eddvt4h-GI8",function(a,c){s_2j(a,c)})});s_V(function(a){s_M(a,"t-1tqLF-xg8Vc",s_1j,null,null,function(){});s_N(a,"Eddvt4h-GI8",function(a,c){s_2j(a,c)})});s_V(function(a){s_M(a,"t-bOmW6NJdi3Q",s_1j,null,null,function(){});s_N(a,"Eddvt4h-GI8",function(a,c){s_2j(a,c)})});
s_F("tcc");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy5e */
try{
var s_qva=function(a,b){a.ha(b)},s_rva=function(a){if(8192>=a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192)var d=s_6a(a,c,c+8192),b=b+String.fromCharCode.apply(null,d);return b};s_G("sy5e");var s_Qn=function(){this.ma=this.$=this.ha=this.ka=null},s_Rn=function(){this.Ga=this.Ea=this.ha=this.ka=this.ma=this.qa=this.Ia=this.Ca=this.Wa=this.Sc=this.Rc=this.ek=this.Af=this.$=this.Da=null},s_tva=function(a,b){b.um(1,a.ka);b.Et(2,null);b.Et(3,a.ha);b.J_(4,a.$,s_sva);b.um(5,a.ma)};s_Qn.prototype.getExtension=function(){return null};s_Qn.prototype.jn=function(){};var s_uva=function(a){return null==a.ka?0:a.ka};s_Qn.prototype.jh=function(){return""};
var s_vva=function(a){return null==a.ha?"":a.ha},s_Sn=function(a){return a.$?a.$.length:0},s_wva=function(a){var b=new s_Rn;a.$=a.$||[];a.$.push(b)},s_xva=function(a){a.ma=parseInt(1E4*Math.random(),10)};s_Rn.prototype.getExtension=function(){return null};s_Rn.prototype.jn=function(){};
var s_sva=function(a,b){b.GKa(1,a.Da);b.Sv(2,a.$);b.um(3,a.Af);b.um(4,a.ek);b.Cha(5,a.Rc);b.Cha(6,a.Sc);b.um(7,a.Wa);b.um(8,a.Ca);b.GKa(9,a.Ia);b.um(10,a.qa);b.Sv(11,a.ma);b.Cha(12,a.ka);b.A6(13,a.ha);b.Et(14,a.Ea);b.Et(15,a.Ga);b.Dw(16,null,s_qva)};s_=s_Rn.prototype;s_.getType=function(){return null==this.$?0:this.$};s_.ub=function(){return null==this.Rc?0:this.Rc};s_.$f=function(a){this.Rc=a};s_.Ab=function(){return null==this.Sc?0:this.Sc};s_.Od=function(a){this.Sc=a}; s_.Ze=function(){return null==this.ka?0:this.ka};s_.nz=function(){return null==this.Ea?"":this.Ea};

s_F("sy5e");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy5g */
try{
s_G("sy5g");
s_F("sy5g");s_H();
}catch(e){_DumpException(e)}
/* _Module_:sy5h */
try{
var s_yva={H4a:"istate",W3a:"fpstate",N6a:"mie",I8a:"sie",W4a:"imgrc",U3a:"flt",S2a:"aie",m7a:"pie",o9a:"trex"};s_G("sy5h");var s_Tn=function(){return s_Kaa(s_yva,function(a){var b=s_Sh(a);return""==b?!1:"istate"==a?"0"!=b:"imgrc"==a?"_"!=b:"flt"==a?-1!=b.indexOf(";e:1"):!!b})};
s_F("sy5h");s_H();
}catch(e){_DumpException(e)}
/* _Module_:atn */
try{
s_G("atn");var s_Un=function(a,b){s_q.call(this);this.ha=this.ka=null;this.qa=a;this.ma=b||"LH"};s_h(s_Un,s_q);var s_zva=function(a,b){a.ka&&a.ka[b]&&s_i(a.ka[b],function(a){var c=a.listener;a.ay&&(c=s_e(c,a.ay));c(new s_gd(b))})};s_Un.prototype.Ea=function(){switch(s_xd(s_2d())){case "unloaded":this.qa.unload&&s_zva(this,"attn-ivis");break;case "hidden":s_zva(this,"attn-ivis");break;case "visible":s_zva(this,"attn-vis")}};
s_Un.prototype.listen=function(a,b,c,d,e){var f=new s_3ba(c,a,b,!!d,e);switch(b){case "attn-ivis":case "attn-vis":a=s_2d();a.isSupported()&&(this.ka||(this.ka={},this.ha=s_r(a,"visibilitychange",this.Ea,!1,this)),this.ka[b]=this.ka[b]||[],this.ka[b].push(f));break;default:s_r(a,b,c,d,e)}return f};
s_Un.prototype.unlisten=function(a,b,c,d,e){switch(b){case "attn-ivis":case "attn-vis":var f=null;if(this.ka&&(f=this.ka[b]))for(b=0;b<f.length;b++)if(f[b].src===a&&f[b].listener===c&&f[b].capture==!!d&&f[b].ay===e){s_1a(f,b);break}break;default:s_qd(a,b,c,d,e)}};s_Un.prototype.Pu=function(a){this.unlisten(a.src,a.type,a.listener,a.capture,a.ay)};var s_Ava=function(a,b){return 0==b?(s_b.setTimeout(a,0),0):s_b.setTimeout(a,b)},s_Bva=function(a){a.ka&&a.ha&&(s_rd(a.ha),a.ha=null);a.ka=null}; s_Un.prototype.Ha=function(){s_Bva(this)};
var s_Vn=1,s_Wn="",s_Cva=function(){this.ha=3E4;this.qa=!1;this.ka=0;this.$="";this.ma=!1},s_Xn=new s_Cva;var s_Yn=function(a){s_q.call(this);this.ma=a;this.Ga=[];this.Na=[];this.Ia=[];this.Wa={}};s_h(s_Yn,s_q);s_Yn.prototype.addListener=function(a,b,c,d,e){a&&this.ma&&this.Ia.push(this.ma.listen(a,b,c,d,e))};var s_Zn=function(a,b,c){a.ma&&a.Na.push(s_Ava(b,c))};
s_Yn.prototype.Ha=function(){for(var a=(this.Ga||[]).length-1;0<=a;a--)s_b.clearInterval(this.Ga[a]);this.Ga=[];for(a=(this.Na||[]).length-1;0<=a;a--){var b=this.Na[a];b&&s_b.clearTimeout(b)}this.Na=[];for(a in this.Wa||{})(b=this.Wa[a])&&s_b.clearTimeout(b);this.Wa={};for(a=0;a<(this.Ia||[]).length;a++)this.Ia[a]&&this.ma.Pu(this.Ia[a]);this.Ia=[];this.ma=null;s_Yn.Ba.Ha.call(this)};
var s__n=function(){this.y=this.x=this.$=0},s_0n=function(){this.eventType="";this.ka=0};s_0n.prototype.Da=function(){return null};s_0n.prototype.Ea=function(){return!1};s_0n.prototype.ha=function(){return[]};s_0n.prototype.$=function(a){var b=new s_Rn,c=new s_Me;s_vi(this.ka-a.$);var d=s_Le;s_Oe(c,s_Ke);s_Oe(c,d);a.$=this.ka;a=s_rva(c.end());b.Da=a;return b};var s_Dva=function(a,b){var c=a.ka-b.$;b.$+=c;return c+","+a.ha().join(",")};
var s_1n=function(a){s_0n.call(this);a=new s_kd(a);this.ma=Math.round(a.clientX);this.qa=Math.round(a.clientY)};s_h(s_1n,s_0n);s_1n.prototype.$=function(a){a=s_1n.Ba.$.call(this,a);a.$=8;a.ek=this.ma;a.Af=this.qa;return a};s_1n.prototype.ha=function(){return["c",this.ma,this.qa]};
var s_2n=function(){s_ud.call(this)};s_h(s_2n,s_ud);s_=s_2n.prototype;s_.Kna=function(){return!1};s_.aaa=function(){};s_.eaa=function(){return null};s_.isEmpty=function(){return!0};s_.reset=function(){};s_.faa=function(){};var s_Eva=s_2n;var s_3n=function(a,b){s_0n.call(this);this.ma=a;this.ka=b||s_g()};s_h(s_3n,s_0n);s_3n.prototype.$=function(a){a=s_3n.Ba.$.call(this,a);a.$=6;switch(this.ma){case "C":a.ma=3;break;case "B":a.ma=4;break;case "H":a.ma=1;break;default:a.ma=2}return a};s_3n.prototype.ha=function(){return["e",this.ma]};
var s_4n=function(a){s_Yn.call(this,a)};s_h(s_4n,s_Yn);s_4n.prototype.log=function(){};var s_Fva=s_4n;var s_5n=function(a,b,c,d){s_Yn.call(this,b);this.appName=a;this.sender=d||new s_Fva(b);this.qa=c;this.nb=-1;this.Db=0};s_h(s_5n,s_Yn);s_5n.prototype.Yb=function(){};s_5n.prototype.Ha=function(){this.sender&&(this.sender.dispose(),this.sender=null);this.qa=null;s_5n.Ba.Ha.call(this)};var s_Gva=s_5n;
var s_7n=function(a,b,c,d){s_Yn.call(this,c);this.Ja=b;this.ka=new s_Eva(this.Ja);this.ha=new s_Gva(a,c,this.ka,d);this.Ea=!0;this.Ca=0;s_6n(this,document,"click",s_e(this.Ma,this));s_Xn.ha&&(a=s_e(this.qa,this,!1,!1),this.ma&&this.Ga.push(s_b.setInterval(a,s_Xn.ha)));s_Xn.ka&&s_Zn(this,s_e(this.qa,this,!1,!1),1E3*s_Xn.ka)};s_h(s_7n,s_Yn);s_7n.prototype.qa=function(a,b){this.ha&&(this.ha.Yb(a,b),14<=this.ha.Db&&s_Zn(this,s_e(this.dispose,this),0))};
s_7n.prototype.log=function(a,b,c){this.Ea&&(a=s_rb(a),a.ka||(a.ka=s_g()),s_Dva(a,new s__n),this.ka.Kna(a)&&!c&&this.qa(!1,b))};var s_6n=function(a,b,c,d){b&&a.addListener(b,c,d,void 0,void 0)},s_Hva=function(a){if(a){a=a.target||a.srcElement;for(var b=5;0<b--&&a&&"A"!=a.nodeName;)a=a.parentNode;return!!(0<=b&&a)}return!1};s_7n.prototype.Ma=function(a){s_Hva(a)&&(this.log(new s_1n(a),!1,!0),s_Zn(this,s_e(this.Da,this,"C"),0))};
s_7n.prototype.Da=function(a){if(this.ha){var b=s_g();this.Ca&&300>b-this.Ca||(this.Ca=b,(this.ka&&!this.ka.isEmpty()||300<s_g()-this.ha.nb)&&this.log(new s_3n(a),!0,!0),this.qa(!0,!0))}};s_7n.prototype.Ha=function(){this.ha&&this.ka&&this.Ea&&this.Da("D");this.ha&&(this.ha.dispose(),this.ha=null);this.ka&&(this.ka.dispose(),this.ka=null);this.Ea=!1;s_7n.Ba.Ha.call(this)};s_7n.prototype.reset=function(){this.Ea=!0;this.Ca=0;this.qa(!0,!0);this.ka?this.ka.reset():this.ka=new s_Eva(this.Ja)};
var s_8n=function(){s_ud.call(this);this.Ea=!0;this.Ca=s_g();this.ka=null;this.Da=this.qa=this.Wa=!1;this.clientHeight=0;this.ha=[];this.Ga={};this.Ia=0;this.ma={}};s_h(s_8n,s_ud);s_8n.prototype.Ha=function(){this.ka=null;this.ha=[];this.ma={};s_8n.Ba.Ha.call(this)};s_8n.prototype.reset=function(){this.Ea=!0;this.Ca=s_g();this.ka=null;this.qa=!1;this.ha=[];this.ma={}};
var s_9n=null,s_$n=null,s_Iva=null,s_ao=function(a,b){if(s_$n){var c=s_$n;b?c.Da(a):s_Zn(c,s_e(c.Da,c,a),0)}},s_Jva=function(){s_ao("Q");return!0},s_Kva=function(a){s_Wn=a.ei||google.getEI(document.body);var b=new s_Cva;b.ma=!!a.du;b.qa=!!a.oslg;var c=function(b,c){b=parseInt(a[b],10);return-1<b?b:c};b.ha=c("fi",b.ha);b.ka=c("d",b.ka);b.$=a.t||b.$;s_Xn=b};
var s_Pva=function(){s_Ce();var a=s_W(this),b=a&&s_1g(a)||{};b.ei=google.getEI(a);a=b.ei||google.getEI(document.body);s_Lva++;s_Mva?a!=s_Wn&&(s_Nva(),s_Ova(b,a)):b&&(s_Mva=!0,s_Ova(b,a))};s_h(s_Pva,s_q);
var s_Lva=0,s_Mva=!1,s_Qva={},s_bo={},s_Ova=function(a,b){s_Wn=b;s_Kva(a);s_Iva=new s_8n;s_9n=new s_Un({});b=s_$n=new s_7n("slh",1918,s_9n);s_6n(b,window,"attn-ivis",s_f(s_ao,"H",!0));s_6n(b,window,"pagehide",s_f(s_ao,"H",!0));s_6n(b,window,"blur",s_f(s_ao,"B",!0));s_Xn.ma||s_6n(b,window,"beforeunload",s_f(s_ao,"U",!0));s_oe(15,s_Jva);for(var c in s_bo)a[c]&&(s_bo[c].init(a),s_Qva[c]=s_bo[c])};s_Pva.prototype.Ha=function(){0<--s_Lva||!s_Mva||(s_Mva=!1,s_Nva(),s_Qva={})}; var s_Nva=function(){for(var a in s_Qva)s_Qva[a].dispose();s_$n&&s_$n.dispose();s_9n&&s_Bva(s_9n);s_Iva=s_$n=s_9n=null};
s_V(function(a){s_M(a,"t-xJZnhKySAM0",s_Pva,null,null,function(a){s_Pva.call(a)})});
var s_Rva={click:"c",mouseout:"o",mouseover:"i",mousedown:"d",mouseup:"u"};var s_co=function(a){s_0n.call(this);this.qa=a};s_h(s_co,s_0n);s_co.prototype.Ea=function(a){var b=s_Rva.mouseover,c=this.qa;if(!c||this.eventType!=b)return!1;for(var b=s_Rva.mouseout,d=a.length-1;0<=d&&!(2<this.ka-a[d].ka);d--)if(a[d].eventType==b&&a[d].Da()===c){for(c=d;c<a.length-1;c++)a[c]=a[c+1];a.pop();return!0}return!1};s_co.prototype.Da=function(){return this.qa};
var s_do=function(a,b,c,d){s_co.call(this,d);this.Wa=a;this.ma=b;this.eventType=c};s_h(s_do,s_co);s_do.prototype.$=function(a){a=s_do.Ba.$.call(this,a);a.$=15;a.qa=parseInt(this.Wa,10)||0;this.ma&&(a.ka=this.ma);a.Ga=this.eventType;return a};s_do.prototype.ha=function(){return["h",this.ma,this.Wa,this.eventType]};
var s_eo=function(a,b,c,d){s_Yn.call(this,c);this.ha=a;this.wc=b;this.ka=[];this.addListener(a,"attn-ve-chg",this.Ea,!1,this);d&&s_Sva(this)};s_h(s_eo,s_Yn);s_eo.prototype.Ea=function(){s_Tva(this);s_Sva(this)};var s_Tva=function(a){for(var b=0;b<a.ka.length;b++)a.ka[b]&&a.ma.Pu(a.ka[b]);a.ka=[]},s_Sva=function(a){if(a.ha.ha)for(var b=a.ha.ha,c=0;c<b.length;c++)for(var d=b[c].Aa,e=0;e<s_Uva.length;e++)a.ka.push(a.ma.listen(d,s_Uva[e],s_e(a.qa,a,b[c],s_Uva[e],d)))}; s_eo.prototype.qa=function(a,b,c){this.wc.log(new s_do(a.getId(),a.ha,s_Rva[b],c))};s_eo.prototype.Ha=function(){s_Tva(this);s_eo.Ba.Ha.call(this)};var s_Uva=["mouseover","mouseout"];
var s_fo={init:function(){var a=s_$n,b=s_9n,c=s_Iva;a&&b&&c&&(a.ka.aaa("H"),s_fo.cq=new s_eo(c,a,b,!0))},dispose:function(){s_fo.cq&&(s_fo.cq.dispose(),s_fo.cq=null)},cq:null};s_bo.lhe=s_fo;
var s_ho=function(a,b,c,d){s_5n.call(this,a,b,c,d);this.ha=s_Wn?"s-"+s_Wn:"s-"+s_g()+"-"+Math.round(1E10*Math.random());this.Za=(google.j?google.j.u:null)||"x";this.rk=null;a=google.j&&google.j.u?"local":"session";(c=s_vk(a,b.ma))||"local"!=a||(c=s_vk("session",b.ma));this.ka=c;this.Ma={};this.rb=!1;this.Ea=[];this.Da={};this.Ca={};this.Xa=0;this.Ja={};this.qa&&this.ka&&this.addListener(this.qa,"attn-bfr-e-add",this.Kb,!1,this);b=s_Vn-1;a=s_Vn-1;c=null;this.ka&&(c=s_Vva(this,this.ha,!0));c&&(b=c.$,
a=c.ka);s_Vn=a+1;this.rk=new s_Wva(this.ha,b,a,s_g(),this.Za);if(this.ka){b=this.rk;for(a=b.$+1;a<=b.ka;a++)c="tab-"+this.ha+"-dt-"+a,(d=s_go(this,c))&&(this.Da[c]=new s_Xva(c,this.ha,d,a));b=s_e(this.Cd,this);this.ma&&this.Ga.push(s_b.setInterval(b,500));s_Zn(this,s_e(this.xc,this),500)}};s_h(s_ho,s_5n);s_ho.prototype.Kb=function(){this.rb=!0};
s_ho.prototype.Yb=function(a,b){var c=!(s_Xn.qa&&b)||"x"==this.Za;if(this.ka){var d=a||b||!1||!c;if(this.rb||d){for(var e=this.rk,f=10;0<f--&&this.qa&&!this.qa.isEmpty();){var g=this.qa.eaa();if(!g||!g.$)break;var k=s_Vn,l="tab-"+this.ha+"-dt-"+k;this.Da[l]=new s_Xva(l,this.ha,g.$,k);if(g.ka||d)e.ka=k,k=this.rk,k.ha=s_g(),s_io(this,"tabs-md-"+this.ha,s_Yva(k)),k=s_go(this,"tabs")||{},k[this.ha]||(k[this.ha]=!0,s_io(this,"tabs",k)),100>e.ka-e.$&&s_Vn++,s_io(this,l,g.$),this.Db++,this.qa.faa(g.ha);
else break}this.rb=!1}if(c&&this.sender){c=[];for(m in this.Da){if(6<=c.length)break;d=this.Da[m];d.index>=s_Vn||this.Ma[m]||c.push(d)}for(m in this.Ca){if(6<=c.length)break;!this.Ma[m]&&this.Ca[m]&&c.push(this.Ca[m])}if(0<c.length)for(d=!0,e=s_g(),this.Ea=this.Ea||[],f=0;f<c.length&&6>f&&(d||a||b);f++){d=!1;this.nb=s_g();var m=c[f];this.sender.log(this.appName,m.message);m.$=e;this.Ea.push(m);this.Ma[m.sy]=!0}}}else c&&this.qa&&!this.qa.isEmpty()&&this.sender&&(m=this.qa.eaa())&&m.$&&(s_Vn++,this.qa.faa(m.ha),
this.Db++,this.sender.log(this.appName,m.$))};s_ho.prototype.xc=function(){s_Zva(this);s_Zn(this,s_e(function(){s__va(this);var a=!1;s_go(this,"tabs");var b={},c;for(c in this.Ja){a=!0;b[c]=!0;var d=this.Ja[c];if(d){for(var e=d.ka,d=d.$+1;d<=e;d++)s_0va(this,"tab-"+c+"-dt-"+d);s_0va(this,"tabs-md-"+c)}}if(a){a=s_go(this,"tabs")||{};for(c in b)delete a[c];s_io(this,"tabs",a)}this.Ja={}},this),1)};
s_ho.prototype.Ha=function(){this.ka&&(this.ka=null);this.Ea=[];this.Da={};this.Ca={};this.Ma={};this.Ja={};s_ho.Ba.Ha.call(this)};
var s__va=function(a){if(!(2E-4<Math.random())&&"x"!=a.Za){var b=s_gma(a.ma.ma);if(b){var c=/^tabs-md-/,d=/^tab-(.*?)-dt-[0-9]+$/,e=/^tabs-ld-.*$/,f=[],g,k={};s_hf(b.ii(!0),function(a){c.test(a)?f.push(a.replace(c,"")):null!=(g=d.exec(a))?k[a]=g[1]:e.test(a)?k[a]=a:"tabs-ad"==a&&(k[a]=a)});for(var b=s_go(a,"tabs")||{},l=0;l<f.length;l++)b[f[l]]=!0;s_io(a,"tabs",b);for(var m in k)k[m]in b||s_0va(a,m)}}},s_Zva=function(a){var b=s_go(a,"tabs")||{};var c=s_lb(b),d=c.length,e=Math.floor(Math.random()*
c.length);if(0!=e){for(var f={},g=0;g<d;g++,e++)e>=d&&(e%=d),f[c[e]]=b[c[e]];b=f}var c=15,k;for(k in b)if(k!=a.ha){if(0>=c--)break;s_Zn(a,s_e(a.Pb,a,k),1)}};
s_ho.prototype.Pb=function(a){if(!(40<=this.Xa)){var b=s_Vva(this,a);if(b)if(b.tabId==this.ha)var c=!1;else c=s_g()-864E5,c=b.ha&&b.ha>c&&b.$<b.ka?!1:!0;else c=!0;if(c)this.Ja[a]=b;else if(!b||b.userId==this.Za)for(c=b.$+1;c<=b.ka&&!(40<=this.Xa);c++){var d="tab-"+a+"-dt-"+c;if(!s_c(this.Ca[d])){this.Ca[d]=null;var e=s_go(this,d);e&&(this.Ca[d]=new s_Xva(d,a,e,c),this.Xa++)}}}};
var s_Vva=function(a,b,c){return c||b!=a.ha?(a=s_go(a,"tabs-md-"+b))?a.tabId?new s_Wva(a.tabId,a.lastSent,a.savedIndex,a.lastTS,a.uid):null:null:a.rk};s_ho.prototype.Cd=function(){if(this.Ea&&0!=this.Ea.length){for(var a={},b=s_g()-250;0<this.Ea.length&&!(this.Ea[0].$&&this.Ea[0].$>b);){var c=this.Ea.shift();a[c.tabId]=c.index;s_0va(this,c.sy);delete this.Da[c.sy];delete this.Ca[c.sy];delete this.Ma[c.sy]}for(var d in a)if(b=s_Vva(this,d))c=a[d],c>b.$&&(b.$=c,s_io(this,"tabs-md-"+d,s_Yva(b)))}};
var s_go=function(a,b){if(!a.ka)return null;try{return a.ka.get(b)}catch(c){a.ka.remove(b)}return null},s_io=function(a,b,c){if(a.ka)try{a.ka.set(b,c)}catch(d){}},s_0va=function(a,b){if(a.ka)try{a.ka.remove(b)}catch(c){}},s_Xva=function(a,b,c,d){this.sy=a;this.tabId=b;this.message=c;this.index=d;this.$=0},s_Wva=function(a,b,c,d,e){this.tabId=a;this.$=b||0;this.ka=c||0;this.ha=d||0;this.userId=e},s_Yva=function(a){var b={};if(!a||!a.tabId)return null;b.tabId=a.tabId;b.lastSent=a.$;b.savedIndex=a.ka; b.lastTS=a.ha;b.uid=a.userId;return b},s_Gva=s_ho;

var s_1va=function(a,b,c,d){this.$=a||"";this.ka=b;this.ha=c||0;this.ma=d},s_jo=function(a){s_0n.call(this);this.ka=a||s_g()};s_h(s_jo,s_0n);s_jo.prototype.$=function(a){a=s_jo.Ba.$.call(this,a);a.$=7;return a};s_jo.prototype.ha=function(){return["x"]};

var s_6va=function(a){s_Yn.call(this,a);this.ka=null!=window.navigator&&null!=navigator.sendBeacon};s_h(s_6va,s_4n);s_6va.prototype.log=function(a,b){var c=google.logUrl(a,b);c&&(this.ka&&navigator.sendBeacon(c,"")||google.log(a,b))};s_Fva=s_6va;
var s_lo=function(a){s_ud.call(this);this.Wa=a;this.Ca=""+Math.random();this.ma=1;this.ka=[];this.ka.push(new s_jo);this.Ea=0-this.ka.length;this.qa="";this.ha=null};s_h(s_lo,s_2n);s_lo.prototype.aaa=function(a){0>this.qa.indexOf(a)&&(this.qa+=a)};s_lo.prototype.eaa=function(){return this.ha};s_lo.prototype.isEmpty=function(){return 0==this.ka.length+this.Ea};
s_lo.prototype.Kna=function(a){var b=a.Ea(this.ka);if(!b){for(b=this.ka.length;0<b&&!(a.ka>=this.ka[b-1].ka);b--)this.ka[b]=this.ka[b-1];this.ka[b]=a;b=0==b||b<this.ka.length-1}(b=b||!this.ha||!this.ha.$)?this.ha=s_7va(this):this.ha.ka||(b=this.ha.$,b=b+":"+s_Dva(a,this.ha.ma),this.Wa&&b.length>this.Wa&&(this.ha.ka=!0),this.ha.ka&&0!=this.ha.$.length||(this.ha.$=b,this.ha.ha=this.ka.length));this.dispatchEvent("attn-bfr-e-add");return this.ha.ka};
var s_7va=function(a){var b="&me="+a.ma;var c="";s_Wn&&(c+="&ei="+s_Wn);1==a.ma&&(a.qa&&(c+="&m="+a.qa),s_Xn.$&&(c+="&t="+s_Xn.$));c=c+"&s="+s_Vn;c=c+"&v=2&pv="+a.Ca;for(var d=b.length+c.length,e=new s__n,f=!1,g=0;g<a.ka.length;g++){var k=":"+s_Dva(a.ka[g],e),d=d+k.length;if(d>a.Wa&&0<g){f=!0;break}b+=k}return new s_1va(c+b,f,g,e)};s_lo.prototype.faa=function(a){this.ma+=a;0<a&&this.ka.splice(0,a);this.Ea=0;this.ha=null;0<this.ka.length&&(this.ha=s_7va(this))}; s_lo.prototype.reset=function(){this.Ca=""+Math.random();this.ma=1;this.ka=[];this.ka.push(new s_jo);this.Ea=0-this.ka.length};s_Eva=s_lo;

var s_8va=function(a,b){if(null!=a.Wa[b]){var c=a.Wa[b];c&&s_b.clearTimeout(c);delete a.Wa[b]}},s_9va=function(a,b,c,d,e){if(a.Wa[d]){if(!e)return;(e=a.Wa[d])&&s_b.clearTimeout(e)}a.Wa[d]=s_Ava(b,c)},s_mo=function(a){s_0n.call(this);this.ma=a};s_h(s_mo,s_0n);s_mo.prototype.$=function(a){a=s_mo.Ba.$.call(this,a);a.$=12;this.ma&&(a.ha=this.ma);return a};s_mo.prototype.ha=function(){return["A",this.ma?1:0]};
var s_no=function(){s_0n.call(this)};s_h(s_no,s_0n);s_no.prototype.$=function(a){a=s_no.Ba.$.call(this,a);a.$=10;return a};s_no.prototype.ha=function(){return["T"]};var s_oo=function(a){s_0n.call(this);this.ma=a};s_h(s_oo,s_0n);s_oo.prototype.$=function(a){a=s_oo.Ba.$.call(this,a);a.$=4;this.ma&&(a.ha=this.ma);return a};s_oo.prototype.ha=function(){return["I",this.ma?1:0]};var s_po=function(a,b){s_0n.call(this);this.ma=b;this.ka=a};s_h(s_po,s_0n);s_po.prototype.$=function(a){a=s_po.Ba.$.call(this,a);a.$=2;var b=new s_Me;s_0ca(b,this.ma);b=s_rva(b.end());a.Ia=b;return a};s_po.prototype.ha=function(){return["U",this.ma]};var s_qo=function(a,b,c){s_0n.call(this);this.deltaX=b;this.deltaY=c;this.ka=a};s_h(s_qo,s_0n);s_qo.prototype.$=function(a){a=s_qo.Ba.$.call(this,a);a.$=3;0!=this.deltaX&&(a.Ca=this.deltaX);a.Wa=Math.abs(this.deltaY);0>this.deltaY&&(a.ha=!0);return a};s_qo.prototype.ha=function(){return 0==this.deltaX?["S",this.deltaY]:["S",this.deltaX,this.deltaY]};
var s_ro=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d;this.$=Math.round(c/50);this.ka=Math.round(d/50)};s_ro.prototype.clone=function(){return new s_ro(this.left,this.top,this.width,this.height)};
var s_$va=function(a,b){return!!b&&Math.abs(a.width-b.width)<=b.$&&Math.abs(a.height-b.height)<=b.ka},s_awa=function(a,b){return!!b&&Math.abs(a.left-b.left)<=b.$&&Math.abs(a.top-b.top)<=b.ka&&s_$va(a,b)},s_bwa=function(a,b){var c=!!b&&s_$va(a,b);c&&(a.width=b.width,a.height=b.height,a.$=b.$,a.ka=b.ka);return c},s_cwa=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);return Math.max(a.top,b.top)<Math.min(a.top+a.height,b.top+b.height)&&c<d};
var s_so=function(a,b,c,d){s_0n.call(this);this.Wa=a;this.Ca=b;this.qa=c;this.ma=d};s_h(s_so,s_0n);s_so.prototype.$=function(a){if(0>this.qa||0>this.ma)return null;a=s_so.Ba.$.call(this,a);a.$=0;0!=this.Wa&&(a.Ca=this.Wa);0!=this.Ca&&(a.Wa=this.Ca);0!=this.qa&&a.Od(this.qa);0!=this.ma&&a.$f(this.ma);return a};s_so.prototype.ha=function(){return["V",this.Wa,this.Ca,this.qa,this.ma]};
var s_to=function(a,b){this.ka=s_g();this.$=a?new s_ro(Math.round(window.pageXOffset),Math.round(window.pageYOffset),Math.round(window.innerWidth),Math.round(window.innerHeight)):b?b:new s_ro(0,0,0,0)},s_dwa=function(a){var b=new s_so(a.$.left,a.$.top,a.$.width,a.$.height);b.ka=a.ka;return b};
var s_uo=function(a,b,c){s_Yn.call(this,a);this.ha=b;this.ka=c};s_h(s_uo,s_Yn);s_uo.prototype.Ha=function(){this.ha=this.ka=null;s_uo.Ba.Ha.call(this)};s_uo.prototype.Ea=function(){var a=s_g();this.ka.Ea||(this.ha.log(new s_po(a,a-this.ka.Ca)),this.ka.Ea=!0,s_vo(this,new s_to(!0),!0),this.ka.dispatchEvent("attn-vs-chg"));this.ka.Ca=a};s_uo.prototype.Ja=function(){this.ka.Ea&&(this.ka.Ca=s_g(),s_vo(this,new s_to,!0),this.ka.dispatchEvent("attn-vs-chg"));this.ka.Ea=!1};
var s_vo=function(a,b,c){if(!a.ka.Ea&&!a.ka.Wa)return!1;var d=!1,e=a.ka.ka;if(!a.ka.Wa&&e&&s_bwa(b.$,e.$)){var f=b.$.left-e.$.left,e=b.$.top-e.$.top;if(0!=f||0!=e)a.ha.log(new s_qo(b.ka,f,e)),d=!0}else a.ha.log(s_dwa(b)),d=!0;a.ka.Wa=!1;a.ka.ka=b;c||a.ka.dispatchEvent("attn-vs-chg");return d};
var s_wo=function(a,b,c){s_uo.call(this,a,b,c);s_Mh("lh-im",s_e(this.Da,this));this.qa=s_e(this.Ca,this,!0);s_oe(182,this.qa)};s_h(s_wo,s_uo);s_wo.prototype.Da=function(){if(this.ka){var a=s_Tn(),b=s_ua(s_Fh.$,"/amp");if(a!=this.ka.qa||b!=this.ka.Da)a!=this.ka.qa&&(this.ka.qa=a,this.ha.log(new s_oo(a))),b!=this.ka.Da&&(this.ka.Da=b,this.ha.log(new s_mo(b)),this.ka.Wa=!0),s_9va(this,s_e(this.Ca,this,!1),1E3,"dcst",!0)}};
s_wo.prototype.Ca=function(a){if(this.ka.ka){var b=s_Tn();b!=this.ka.qa&&(this.ka.qa=b,this.ha.log(new s_oo(b)));b=s_g();this.ka.ka.ka=b;a&&this.ha.log(new s_no);this.ka.dispatchEvent("attn-dom-chg");s_8va(this,"dcst")}};s_wo.prototype.Ha=function(){s_Nh("lh-im");s_qe(182,this.qa);s_wo.Ba.Ha.call(this)};
var s_ewa=function(a,b,c){s_uo.call(this,a,b,c);this.addListener(window,"attn-ev-preload",s_e(this.qa,this));s_td(window,"attn-ev-ready",null)};s_h(s_ewa,s_uo);
s_ewa.prototype.qa=function(a){if(a&&a.length&&0!=a.length){this.ha.log(new s_jo(a[0][0]));for(var b=0;b<a.length;b++)if("v"==a[b][1]){var c=a[b],d=new s_to(!1,new s_ro(c[2][0],c[2][1],c[2][2],c[2][3]));d.ka=c[0];var e=this.ka.ka;e&&s_bwa(d.$,e.$)?(c=d.$.left-e.$.left,e=d.$.top-e.$.top,0==c&&0==e||this.ha.log(new s_qo(d.ka,c,e))):this.ha.log(s_dwa(d));this.ka.ka=d}else"e"==a[b][1]&&this.ha.log(new s_3n("B",a[b][0]))}};
var s_xo=function(a,b){s_0n.call(this);this.qa=a;this.ma=b};s_h(s_xo,s_0n);s_xo.prototype.$=function(a){a=s_xo.Ba.$.call(this,a);a.$=9;a.qa=parseInt(this.qa,10);a.ka=this.ma;return a};s_xo.prototype.ha=function(){return["f",this.ma,this.qa]};var s_yo=function(a,b,c){s_uo.call(this,a,b,c);this.Ca={};this.qa={};a=s_tc("g-scrolling-carousel");for(b=0;b<a.length;b++)s_fwa(this,a[b]);this.addListener(document.body,"_custom",s_e(this.Ma,this))};s_h(s_yo,s_uo);s_yo.prototype.Ma=function(a){a&&(a=a.o2&&a.Hd)&&a.detail&&a.target&&"attn-swp-init"==a.detail.type&&s_fwa(this,a.target)};
var s_fwa=function(a,b){for(var c=b;c!=document.body;){if(c.getAttribute("data-hveid")){var d=c.getAttribute("data-hveid");(a.qa[d]=a.qa[d]||[]).push([b,a.ma.listen(b,"_custom",s_e(a.Da,a,d,b,c))]);break}c=c.parentNode}};
s_yo.prototype.Da=function(a,b,c,d){if(d&&(d=d.o2&&d.Hd)&&d.detail)if(d=d.detail.type,"sc_se"==d){if(b=s_g(),!(this.Ca[a]+500>=b)){a:{d=this.ka;var e=c.getAttribute("data-hveid");if(e&&d.ma[e])for(var f=0;f<d.ma[e].length;f++)if(d.ma[e][f].Aa===c){c=d.ma[e][f];break a}c=null}c&&(this.Ca[a]=b,this.ha.log(new s_xo(c.getId(),c.ha)))}}else"attn-swp-dis"==d&&s_gwa(this,a,b)}; var s_gwa=function(a,b,c){b=a.qa[b]||[];for(var d=0;d<b.length;d++)!b[d]||2!=b[d].length||c&&b[d][0]!=c||(a.ma.Pu(b[d][1]),s_1a(b,d--))};s_yo.prototype.Ha=function(){for(var a in this.qa)s_gwa(this,a);this.qa={};s_yo.Ba.Ha.call(this)};
var s_zo=function(a){s_0n.call(this);this.ma=a};s_h(s_zo,s_0n);s_zo.prototype.$=function(a){if(0>=this.ma)return null;a=s_zo.Ba.$.call(this,a);a.$=13;a.$f(this.ma);return a};s_zo.prototype.ha=function(){return["B",this.ma]};var s_hwa=function(a,b,c){s_uo.call(this,a,b,c);this.qa=s_xc();this.ha.log(new s_zo(this.qa));this.ka.clientHeight=this.qa;this.addListener(this.ka,"attn-g-clk",this.Da,!1,this)};s_h(s_hwa,s_uo);s_hwa.prototype.Da=function(){s_9va(this,s_e(this.Ca,this),1E3,"vchc")};
s_hwa.prototype.Ca=function(){s_8va(this,"vchc");s_8va(this,"vchrc");if(!this.ka.qa){var a=s_xc();a!=this.qa?(this.qa=a,s_9va(this,s_e(this.Ca,this),100,"vchrc")):this.ka.clientHeight!=this.qa&&(this.ka.clientHeight=this.qa,this.ha.log(new s_zo(this.qa)),s_vo(this,new s_to(!0),!0),this.ka.ka&&(a=s_g(),this.ka.ka.ka=a,this.ka.dispatchEvent("attn-vs-chg")))}};
var s_Ao=function(a,b,c){s_uo.call(this,a,b,c);this.addListener(window,"resize",this.Ca,!1,this);this.addListener(window,"scroll",this.Ca,!1,this);this.Ea();this.qa()};s_h(s_Ao,s_uo);s_Ao.prototype.Ca=function(){this.Ea();s_9va(this,s_e(this.qa,this),500,"rptv")};s_Ao.prototype.qa=function(){s_vo(this,new s_to(!0));s_8va(this,"rptv")};
var s_Bo=function(a,b){s_0n.call(this);var c=new s_kd(b);b=c.clientX||0;var c=c.clientY||0,d=a.Aa.getBoundingClientRect();this.Wa=Math.round(b-d.left);this.Ca=Math.round(c-d.top);this.qa=a.getId();this.ma=a.ha};s_h(s_Bo,s_0n);s_Bo.prototype.$=function(a){a=s_Bo.Ba.$.call(this,a);a.$=5;a.qa=parseInt(this.qa,10);a.ek=this.Wa;a.Af=this.Ca;a.ka=this.ma;return a};s_Bo.prototype.ha=function(){return["G",this.ma,this.qa,this.Wa,this.Ca]};
var s_Co=function(a,b,c){s_0n.call(this);this.jj=b&&b.button;this.Ca=b&&b.which;this.ma=+c;this.Wa=a.getId();this.qa=a.ha};s_h(s_Co,s_0n);s_Co.prototype.$=function(a){a=s_Co.Ba.$.call(this,a);a.$=14;a.qa=parseInt(this.Wa,10);a.ka=this.qa;a.ha=!!this.ma;return a};s_Co.prototype.ha=function(){return["M",this.jj,this.Ca,this.ma,this.qa,this.Wa]};
var s_Do=function(a,b,c){s_uo.call(this,a,b,c);this.qa=[];this.Ca();this.addListener(c,"attn-ve-chg",this.Ca,!1,this)};s_h(s_Do,s_uo);s_Do.prototype.Ca=function(){s_iwa(this);for(var a=0;a<this.ka.ha.length;a++){var b=this.ka.ha[a],c=b.Aa;this.qa.push(this.ma.listen(c,"click",s_e(this.Ma,this,b),!0));this.qa.push(this.ma.listen(c,"mousedown",s_e(this.Da,this,b),!0))}};var s_iwa=function(a){for(var b=0;b<a.qa.length;b++)a.qa[b]&&a.ma.Pu(a.qa[b]);a.qa=[]};
s_Do.prototype.Ma=function(a,b){if(a&&a.Aa){var c=s_vo(this,new s_to(!0),!0),d=this.ka.ka.ka;s_jwa(a);null!=a.ka&&(!a.ka||s_awa(a.$,a.ka))||this.ha.log(s_kwa(a,d));this.ha.log(new s_Bo(a,b),!1,!0);this.ka.dispatchEvent("attn-g-clk");c&&s_Zn(this,s_e(this.ka.dispatchEvent,this.ka,"attn-vs-chg"),0)}};s_Do.prototype.Da=function(a,b){s_lwa(0,b)||b&&s_Hva(b)&&this.ha.log(new s_Co(a,b,s_lwa(2,b)))};s_Do.prototype.Ha=function(){s_iwa(this);s_Do.Ba.Ha.call(this)}; var s_lwa=function(a,b){return b?s_Uba?b.button==a:"click"==b.type?0==a:!!(b.button&s__ba[a]):!1};
var s_Eo=function(a,b,c){s_0n.call(this);this.cGa=a;this.index=b||0;this.ka=c||s_g()};s_h(s_Eo,s_0n);s_Eo.prototype.$=function(a){a=s_Eo.Ba.$.call(this,a);a.$=11;a.Ea=this.cGa;a.ka=this.index;return a};s_Eo.prototype.ha=function(){return["N",this.index,this.cGa]};
var s_Fo=function(a,b,c,d,e,f){s_0n.call(this);this.Ga=a;this.Ia=b;this.Wa=c;this.Ca=d;this.qa=e;this.ma=f};s_h(s_Fo,s_0n);s_Fo.prototype.$=function(a){if(0>this.qa||0>this.ma)return null;a=s_Fo.Ba.$.call(this,a);a.$=1;0!=this.Wa&&(a.Af=this.Wa);0!=this.Ca&&(a.ek=this.Ca);0!=this.qa&&a.Od(this.qa);0!=this.ma&&a.$f(this.ma);a.qa=parseInt(this.Ia,10);a.ka=this.Ga;return a};s_Fo.prototype.ha=function(){return["R",this.Ga,this.Ia,this.Wa,this.Ca,this.qa,this.ma]};
var s_mwa=function(a,b,c,d,e){this.$=this.ka=null;this.Aa=a;this.ma=b;this.qa=c;this.ha=d;e&&s_jwa(this)};s_mwa.prototype.getId=function(){return this.ma};
var s_nwa=function(a){if(a.getBoundingClientRect&&"visible"==(s_Cd(a,"visibility")||"visible"))try{var b=a.getBoundingClientRect();return new s_ro(Math.round(b.left+window.pageXOffset),Math.round(b.top+window.pageYOffset),Math.round(a.offsetWidth),Math.round(a.offsetHeight))}catch(c){}return new s_ro(0,0,0,0)},s_jwa=function(a){var b=s_nwa(a.Aa);a.$&&s_awa(b,a.$)||(a.$=b)};s_mwa.prototype.getEI=function(){return this.qa}; var s_kwa=function(a,b){a=new s_Fo(a.ha,a.ma,a.$.left,a.$.top,a.$.width,a.$.height);a.ka=b;return a};
var s_owa=function(a,b,c){s_uo.call(this,a,b,c);this.qa=[]};s_h(s_owa,s_uo);
var s_pwa=function(a,b){var c=b.getAttribute("data-hveid");if(c)for(var d=0;d<a.qa.length;d++){var e=a.qa[d];if(s_Tc(e.el,b)){b=new s_mwa(b,c,e.cGa,e.index);a.ka.ha.push(b);(d=a.ka.ma[c])||(d=a.ka.ma[c]=[]);d.push(b);break}}},s_qwa=function(a,b,c){if(c)c=window.google&&google.getEI&&google.getEI(b);else{c=b.getAttribute("data-ved");if(!c){var d=b.querySelector("[data-ved]");if(!d||!(c=d.getAttribute("data-ved")))return}if(!c||1>c.length||"0"!=c.charAt(0))d=null;else{c=c.substring(1);d=new s_Bh;try{s_Ch(d,
new s_yh(c))}catch(k){d=null}}if(d){c=new s_Me;for(var d=s_bha(d),e=0,f=s_5ga(s_Ah(d)),g=f.length-1;0<=g;g--)e=256*e+f.charCodeAt(g);g=e%1E6;e=(e-g)/1E6;f=s_6ga(s_Ah(d))-167772160;0>f&&(f=4294967296+f);d=s_7ga(s_Ah(d));s_qh(c,e);s_Ne(c,g);s_vi(f);s_ui(c);s_Ne(c,d);c=c.end();c=s_He(c,!0);for(g=c.length;"."==c.charAt(g-1);)g--;c=c.substring(0,g)}else c=null}c&&(d=a.ka,g=d.Ga[c],g||(g=d.Ga[c]=++d.Ia,a.ha.log(new s_Eo(c,g,d.ka?d.ka.ka:s_g()))),a.qa.push({el:b,cGa:c,index:g}))};
var s_Go=function(a,b,c){s_uo.call(this,a,b,c);this.rb=new s_owa(a,b,c);this.qa=!1;this.Da=null;this.Za=this.Ma=0;this.Db=this.ka.clientHeight;this.Ca=null;this.addListener(c,"attn-vs-chg",this.Xa,!1,this);this.addListener(c,"attn-dom-chg",this.nb,!1,this);this.ka.ka&&(s_rwa(this,this.ka.ka),this.Ca=this.ka.ka)};s_h(s_Go,s_uo);
var s_swa=function(a){for(var b=s_g(),c=a.ka.ha,d=0;d<c.length;d++)s_jwa(c[d]);c=s_g();a.Za=c;a.Ma=c-b},s_twa=function(a,b){for(var c=[],d=a.ka.ha,e=0;e<d.length;e++){var f=d[e],g=s_cwa(f.$,b.$);if(g&&(null==f.ka||f.ka&&!s_awa(f.$,f.ka))||!g&&f.ka&&s_cwa(f.ka,b.$))c.push(f),f.ka=f.$.clone()}if(c.length)for(b=b.ka,d=0;d<c.length;d++)a.ha.log(s_kwa(c[d],b))};s_Go.prototype.nb=function(){this.ka.ka&&(this.ka.ha=[],this.qa=!1,s_rwa(this,this.ka.ka))};
var s_rwa=function(a,b){if(a.qa){var c=a.Ma;if(a.Da){var d=a.Da.$;d=!s_awa(s_nwa(a.Da.Aa),d)}else d=!a.qa;var e=s_g()-a.Za;c=d?20<c&&1E3>=e:!(5>=c&&50<e)}else c=!1;if(!c)if(a.qa)s_swa(a);else{if(!a.qa){c=a.rb;d=document.body;c.qa=[];c.ka.ha=[];c.ka.ma={};var f=!0;if(d&&d.querySelectorAll){if(c.ka.qa){a:{d=document.querySelectorAll(".immersive-container");for(e=0;e<d.length;e++)if(f=d[e].getBoundingClientRect(),!(0>=f.width||0>=f.height||f.top>=window.innerHeight||0>=f.bottom||f.left>=window.innerWidth||
0>=f.right)){d=d[e];break a}d=document.body}f=!d.getAttribute("decode-data-ved")}for(var g=d.querySelectorAll("[decode-data-ved]"),e=g.length-1;0<=e;e--)s_qwa(c,g[e]);s_qwa(c,d,f);f=d.querySelectorAll("[data-hveid]");s_pwa(c,d);for(e=0;e<f.length;e++)s_pwa(c,f[e])}s_swa(a);c=null;for(d=0;d<a.ka.ha.length;d++)e=a.ka.ha[d],(f=!c)||(f=c.$,g=e.$,f=!!g&&(f.top<g.top||f.top==g.top&&f.left<g.left)),f&&(c=e);a.Da=c;a.qa=!0}a.ka.dispatchEvent("attn-ve-chg")}s_twa(a,b)};
s_Go.prototype.Xa=function(){this.ka.ka&&(this.Db==this.ka.clientHeight&&this.Ca&&s_bwa(this.Ca.$,this.ka.ka.$)?s_twa(this,this.ka.ka):s_rwa(this,this.ka.ka),this.Ca=this.ka.ka,this.Db=this.ka.clientHeight)};s_Go.prototype.Ha=function(){this.Ca=null;this.ka.ha=[];this.rb.dispose();s_Go.Ba.Ha.call(this)};
var s_Ho=function(a,b,c){s_uo.call(this,a,b,c);this.qa=!1;this.addListener(window,"attn-ivis",this.Ja,!1,this);this.addListener(window,"pagehide",this.Da,!1,this);this.addListener(window,"blur",this.Ja,!1,this);this.addListener(window,"attn-vis",this.Ea,!1,this);this.addListener(window,"focus",this.Ea,!1,this);this.addListener(window,"pageshow",this.Ca,!1,this)};s_h(s_Ho,s_uo);s_Ho.prototype.Da=function(){this.qa=!0;this.Ja()}; s_Ho.prototype.Ca=function(){this.ka&&this.ha&&(this.qa?(this.qa=!1,this.ka.reset(),this.ha.reset(),this.Ea(),s_vo(this,new s_to(!0),!0),this.ka.dispatchEvent("attn-dom-chg")):this.Ea())};
var s_uwa=function(a){this.ka=a||new s_8n;this.$=[]};s_uwa.prototype.start=function(a,b){this.$.push(new s_Ao(a,b,this.ka));this.$.push(new s_Ho(a,b,this.ka));this.$.push(new s_Go(a,b,this.ka));this.$.push(new s_Do(a,b,this.ka))};s_uwa.prototype.stop=function(){if(this.$)for(var a=0;a<this.$.length;a++)this.$[a].dispose();this.$=[]};
var s_Io={init:function(){var a=s_9n,b=s_$n,c=s_Iva;if("getBoundingClientRect"in document.body&&"pageXOffset"in window&&"innerWidth"in window&&a&&b&&c){b.ka.aaa("V");var d=s_Io.cq=new s_uwa(c),e=new s_ewa(a,b,c);d.$.push(e);e=new s_Ao(a,b,c);d.$.push(e);e=new s_Ho(a,b,c);d.$.push(e);e=new s_wo(a,b,c);d.$.push(e);e=new s_hwa(a,b,c);d.$.push(e);e=new s_Go(a,b,c);d.$.push(e);e=new s_Do(a,b,c);d.$.push(e);a=new s_yo(a,b,c);d.$.push(a)}},dispose:function(){s_Io.cq&&(s_Io.cq.stop(),s_Io.cq=null)},cq:null}; s_bo.lve=s_Io;

s_F("atn");s_H();
}catch(e){_DumpException(e)}
/* _GlobalSuffix_ */
// Google Inc.
