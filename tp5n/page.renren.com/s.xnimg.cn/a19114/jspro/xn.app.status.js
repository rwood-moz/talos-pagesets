XN.namespace("config.status");
XN.config.status.enableMedia=false;
XN.config.status.enableReplyAll=false;
XN.config.status.params="";
function getWWWRoot(_1){
if(XN.page&&XN.page.data&&XN.page.data.type==5){
return "lover.renren.com";
}else{
return _1?"org.renren.com":"page.renren.com";
}
}
XN.namespace("app.status");
XN.event.enableCustomEvent(XN.app.status);
XN.app.status.crossDomain=1;
(function(ns){
var _3=XN.ENV.staticRoot;
ns._errors={1:"\u8bf7\u4e0d\u8981\u4ece\u7ad9\u5916\u63d0\u4ea4",2:"\u8be5\u72b6\u6001\u4e0d\u5b58\u5728",6:"\u5bf9\u4e0d\u8d77\uff0c\u8bf7\u91cd\u8bd5\u3002",3:"\u62b1\u6b49\uff0c\u60a8\u4e0d\u80fd\u53d1\u5e03\u7a7a\u72b6\u6001",4:"\u53d1\u8868\u5931\u8d25\uff0c\u4fe1\u606f\u5305\u542b\u4e0d\u5408\u9002\u5185\u5bb9\uff0c\u8bf7\u68c0\u67e5",5:"\u4f60\u77ed\u65f6\u95f4\u5185\u53d1\u8868\u4e86\u592a\u591a\u76f8\u540c\u7684\u5185\u5bb9",9:"\u4f60\u8fd8\u4e0d\u662fTA\u7684\u597d\u53cb\uff0c\u4e0d\u80fd\u4f7f\u7528\u201c\u56de\u590d\u6240\u6709\u4eba\u201d",10:"\u8be5\u5206\u4eab\u4e0d\u5b58\u5728\u6216\u5df2\u5220\u9664",11:"\u8be5\u7528\u6237\u4e0d\u662f\u60a8\u7684\u597d\u53cb, \u4e0d\u80fd\u8f6c\u53d1\u5176\u72b6\u6001",12:"\u53c2\u6570\u4e0d\u5b8c\u6574, \u63d0\u4ea4\u5931\u8d25, \u8bf7\u8054\u7cfb\u5ba2\u670d",15:"\u8bf7\u6fc0\u6d3b\u8d26\u53f7",16:"\u62b1\u6b49\uff0c\u7531\u4e8e\u5bf9\u65b9\u7684\u9690\u79c1\u8bbe\u7f6e\uff0c\u4f60\u65e0\u6cd5\u8fdb\u884c\u8be5\u64cd\u4f5c",100:"\u672c\u516c\u5171\u4e3b\u9875\u7ba1\u7406\u5458\u5173\u95ed\u4e86\u8be5\u516c\u5171\u4e3b\u9875\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",101:"\u4f60\u73b0\u5728\u4e0d\u662f\u8be5\u516c\u5171\u4e3b\u9875\u7684\u7c89\u4e1d\uff0c\u6210\u4e3a\u7c89\u4e1d\u540e\u624d\u53ef\u56de\u590d",102:"\u6b64\u516c\u5171\u4e3b\u9875\u7684\u4e3b\u4eba\u5173\u95ed\u4e86\u56de\u590d\u529f\u80fd\uff0c\u76ee\u524d\u4e0d\u80fd\u56de\u590d",103:"\u68c0\u6d4b\u5230\u5f02\u5e38\u65e0\u6cd5\u53d1\u5e03\uff0c\u8bf7\u5c1d\u8bd5\u5237\u65b0\u9875\u9762\u6216\u91cd\u65b0\u767b\u5f55",105:"\u4f60\u73b0\u5728\u4e0d\u662f\u8be5\u60c5\u4fa3\u7a7a\u95f4\u7684\u5173\u6ce8\u8005\uff0c\u52a0\u5165\u540e\u624d\u53ef\u56de\u590d",106:"\u8be5\u62a5\u5230\u4e0d\u5b58\u5728",107:"\u56de\u590d\u5931\u8d25"};
ns.getError=function(_4){
return this._errors[_4]||false;
};
ns.getProfileRef=function(){
if(arguments.callee.ref){
return arguments.callee.ref;
}
var _5=window.location.href+"";
var _6="";
if(_5.indexOf("Home.do")!==-1){
_6="newsfeed";
}else{
_6="minifeed";
}
arguments.callee.ref=_6;
return _6;
};
})(XN.APP.status);
(function(ns){
var _8=XN.STRING;
var _9=false;
function log(_a){
if(_9){
XN.log(_a);
}
}
ns.updateAction=function(_b){
$extend(this,_b);
};
var _c="";
ns.fwdRef="";
ns.setForwardTrue=function(_d,_e,_f){
this.fwdid=_d||null;
this.fwdOwner=_e||null;
this.fwdRef="fwdRef="+_f;
_c="&fwdId="+this.fwdid+"&fwdOwner="+this.fwdOwner;
};
ns.getForwardParam=function(){
return _c;
};
ns.setForwardNull=function(){
_c="";
this.fwdRef="";
};
ns.updateAction.prototype={maxLength:140,requestURI:"httpdisabled://status."+XN.env.domain+"/doing/update.do",parseMediaURI:"httpdisabled://share."+XN.env.domain+"/share/GetUrlInfo.do",enableMedia:false,_tscCode:null,_postRequest:null,_getMediaRequest:null,addOnsParam:{},abort:function(){
try{
this._postRequest.abort();
}
catch(e){
}
try{
this._getMediaRequest.abort();
}
catch(e){
}
},update:function(_10){
var _11=this;
_10=_8.trim(_10);
if(_10===""){
this.fireEvent("postError","\u62b1\u6b49\uff0c\u60a8\u4e0d\u80fd\u53d1\u5e03\u7a7a\u72b6\u6001",_10);
return;
}
if(_10.length>this.maxLength){
this.fireEvent("postError","\u60a8\u6700\u591a\u80fd\u591f\u8f93\u5165"+this.maxLength+"\u4e2a\u5b57\u7b26",_10);
return;
}
var _12=/@\S+\(\d+\)$/;
if(_12.test(_10)){
_10+=" ";
}
this.fireEvent("beforePost");
if(this.enableMedia&&XN.config.status.enableMedia){
this._parseMedia(_10);
}else{
this._updateStatus(_10);
}
},_parseMedia:function(_13){
var _14=this;
var _15=/http:\/\/[A-Za-z0-9\%\-\:\+\#\.\?=&_~\/]+[^\:\(\s\u0391-\uFFE5]/i.exec(_13);
if(!_15){
this._updateStatus(_13);
return;
}
var _16=_15[0],_17;
var _18;
if(/(mp3|wma)$/i.test(_16)){
_17={type:2,link:_16};
_18=_13.replace(_16,"[audio]");
this._updateStatus(_13,_18,_17);
return;
}
new XN.NET.xmlhttp({url:_14.parseMediaURI+"?link="+encodeURIComponent(_16),method:"get",onSuccess:function(r){
try{
var m=XN.JSON.parse(r.responseText);
}
catch(e){
_14._updateStatus(_13);
return;
}
switch(m.type){
case 10:
_17={type:3,link:m.url};
_18=_13.replace(_16,"[video]");
break;
case 6:
_17={type:1,link:_16};
_18=_13.replace(_16,"[link]");
break;
}
_14._updateStatus(_13,_18,_17);
},onError:function(){
_14._updateStatus(_13);
}});
},_updateStatus:function(_1b,_1c,_1d){
var _1e=this;
var _1f={};
_1f["c"]=_1c||_1b;
if(_1d){
_1f["media"]=XN.json.build(_1d);
}
_1f["raw"]=_1b;
var _20=XN.array.toQueryString(_1f);
_20+="&"+XN.config.status.params;
_20+=_c;
for(var i in this.addOnsParam){
_20+="&"+i+"="+this.addOnsParam[i];
}
var _22=$("publisher_form_ticket");
if(_22){
_20+="&"+_22.id+"="+_22.value;
}
var url=this.requestURI+"?"+XN.app.status.fwdRef;
this._postRequest=new XN.NET.xmlhttp({url:url,data:_20,onComplete:function(){
_1e.fireEvent("postComplete");
},onSuccess:function(r){
try{
r=XN.JSON.parse(r.responseText);
if(r.code==0){
if(XN.STRING.isBlank(r.msg)){
r.msg="\u4f60\u53ef\u4ee5\u66f4\u65b0\u72b6\u6001\uff0c\u8ba9\u670b\u53cb\u4eec\u77e5\u9053\u4f60\u5728\u505a\u4ec0\u4e48...";
}
_1e.fireEvent("postSuccess",r.msg,_1b,r);
XN.app.status.fireEvent("postSuccess",r.msg,_1b,r);
XN.app.status.setForwardNull();
}else{
_1e.fireEvent("postError",XN.APP.status.getError(r.code),r.msg,r.code);
XN.app.status.fireEvent("postError",XN.APP.status.getError(r.code),r.msg,r.code);
}
}
catch(e){
_1e.fireEvent("postError");
}
},onError:function(){
_1e.fireEvent("postError");
}});
}};
XN.EVENT.enableCustomEvent(ns.updateAction.prototype);
})(XN.APP.status);
(function(ns){
ns.Publicer=function(_26){
$extend(this,_26);
this.init();
};
ns.Publicer.prototype={IDinput:"publicer_input",IDsubmit:"publicer_submit",TIPinputDefault:"\u4f60\u6b63\u5728\u5e72\u561b",maxLength:140,checkers:{isOK:true,list:[],msg:{}},init:function(){
this.checkers.list.push(this.emptyCheck);
this.checkers.list.push(this.wordNumCheck);
this.checkers.list.push(this.defaultTextCheck);
this.action=this.postAction||new XN.APP.status.updateAction();
this.getUIRef();
this.UIInit();
this.bindEvent();
},getUIRef:function(){
this.input=$(this.IDinput);
this.submitBtn=$(this.IDsubmit);
},UIInit:function(){
this._inputHelper=new XN.FORM.inputHelper(this.input);
this._inputHelper.setDefaultValue(this.TIPinputDefault);
},bindEvent:function(){
var _27=this;
this.submitBtn.addEvent("click",function(){
_27.update(_27.input.value);
});
this.action.addEvent("postError",function(msg){
_27.fireEvent("publicer_update_error",msg);
});
this.action.addEvent("postSuccess",function(msg,_2a,r){
_27.fireEvent("publicer_update_success",msg,_2a,r);
});
this.input.addEvent("keydown",function(e){
e=e||window.event;
if(e.keyCode==13){
if(_27.input.mention&&_27.input.mention.selectorShow&&!_27.input.mention.noMatch){
return;
}
_27.update(_27.input.value);
_27.input.blur();
}
});
Mention.init([{obj:this.input,ugcId:"",ugcType:"status",ownerId:XN.user.id}]);
},check:function(str){
var _2e={isOk:true,msg:"ok"};
var len=this.checkers.list.length;
for(var i=0;i<len;i++){
this.checkers.list[i].call(this,str,_2e);
if(!_2e.isOk){
return _2e;
}
}
return _2e;
},emptyCheck:function(str,_32){
if(!str){
_32.isOk=false;
_32.msg=ns._errors[3];
return;
}
},wordNumCheck:function(str,_34){
if(str&&(XN.string.trim(str).length>this.maxLength)){
_34.isOk=false;
_34.msg="\u62b1\u6b49,\u7559\u8a00\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7140\u5b57";
}
},defaultTextCheck:function(str,_36){
if(str==this.TIPinputDefault){
_36.isOk=false;
_36.msg=ns._errors[3];
}
},update:function(str){
var _38=this.check(str);
if(_38.isOk){
this.action.addOnsParam=this.addOnsParam;
this.fireEvent("publicer_before_post",str);
this.action.update(str);
this.fireEvent("publicer_after_post",str);
}else{
this.fireEvent("publicer_check_error",_38.msg);
}
}};
XN.event.enableCustomEvent(ns.Publicer.prototype);
})(XN.APP.status);
(function(ns){
var _3a=XN.STRING;
var _3b=XN.EVENT.addEvent;
var _3c;
var _3d=true;
function log(s){
if(_3d){
XN.log(s);
}
}
ns.editor=function(_3f){
$extend(this,_3f);
this.init();
};
ns.editor.prototype={IDsubmit:"publisher_statusSubmit",IDinput:"publisher_statusInput",IDcounter:"statusCount",IDinputContent:"statusContent",IDcurrentStatus:"currentStatus",IDoriginalStatus:"currentStatus_bak",IDupdateTime:"statusUpdateTime",IDemotion:"status_emotion",IDemoPan:"status_emotions",IDemoBtn:"status_emotion_legend",IDspecial:"commendStatus",IDtools:"publisher_tools",IDerr:"publisher_err",IDmsg:"publisher_msg",TIPinputDefault:"\u4f60\u53ef\u4ee5\u66f4\u65b0\u72b6\u6001\uff0c\u8ba9\u597d\u53cb\u4eec\u77e5\u9053\u4f60\u5728\u505a\u4ec0\u4e48...",TIPonPostError:"\u72b6\u6001\u66f4\u65b0\u5931\u8d25,\u8bf7\u5237\u65b0\u9875\u9762\u6216\u91cd\u65b0\u767b\u5f55",TIPupdateTime:"\u521a\u521a\u66f4\u65b0",TIPnewUser:"\u4f60\u53ef\u4ee5\u66f4\u65b0\u72b6\u6001\uff0c\u8ba9\u670b\u53cb\u4eec\u77e5\u9053\u4f60\u5728\u505a\u4ec0\u4e48...",CFGshowError:true,CFGmaxLength:140,CFGspCookieName:"sta1",CFGshowMax:true,action:null,_lastStatus:null,actionParam:null,_uiType:"home",getConfig:function(key){
return this["CFG"+key];
},getEl:function(id){
return $(this["ID"+id]);
},getTip:function(key){
return this["TIP"+key];
},init:function(){
var _43=this,ac;
this._patchForNewUser();
this.action=ac=new XN.APP.status.updateAction($extend({maxLength:this.getConfig("maxLength"),enableMedia:true},this.actionParam));
ac.addEvent("beforePost",function(){
_43._beforePost();
});
ac.addEvent("postSuccess",function(msg,_46,_47){
_43._onPostSuccess(msg);
_43.fireEvent("updateSuccess",msg,_46,_47);
});
ac.addEvent("postError",function(r,msg,_4a){
_43._onPostError(r,msg,_4a);
_43.fireEvent("updateError",r,msg,_4a);
});
this._disableSubmit();
var _4b=this.getEl("input");
_4b.addEvent("focus",function(e){
_43._onInputFocus(e);
_43.fireEvent("inputFocus",_4b.value);
},false);
_4b.addEvent("blur",function(e){
_43._onBlur();
_43.fireEvent("inputBlur",_4b.value);
});
this._inputHelper=new XN.FORM.inputHelper(this.getEl("input")).limit(this.getConfig("maxLength"),false).count(this.getEl("counter"),false).setDefaultValue(this.getTip("inputDefault"));
XN.EVENT.addEvent(this.getEl("input"),"keydown",function(e){
if(e.keyCode==13){
if(_43.getEl("input").mention&&_43.getEl("input").mention.selectorShow&&!_43.getEl("input").mention.noMatch){
return;
}
_43.fireEvent("beforeUpdate");
_43.getEl("input").blur();
_43.update(_43.getEl("input").value);
}
});
Mention.init([{obj:this.getEl("input"),ugcId:"",ugcType:"status",ownerId:XN.user.id}]);
this.getEl("emotion").addEvent("click",function(e){
_43._parseEmotionEvent(e);
XN.EVENT.stop(e||window.event);
}).addEvent("mouseover",function(e){
_43._overEmotion=true;
}).addEvent("mouseleave",function(){
_43._overEmotion=false;
}).addEvent("mousedown",function(e){
_43.getInputPos();
XN.event.stop(e||window.event);
});
if(this.getEl("special")){
this.getEl("special").addEvent("mousedown",function(){
_43.getInputPos();
});
}
if(this.getEl("emoBtn")){
this._uiType="other";
this.showEmotion=function(){
var p=this.getEl("emoPan");
var btn=this.getEl("emoBtn");
if(p){
p.show();
}
if(btn){
btn.hide();
}
};
this.hideEmotion=function(){
var p=this.getEl("emoPan");
var btn=this.getEl("emoBtn");
if(p){
p.hide();
}
if(btn){
btn.show();
}
};
this.getEl("emoBtn").onclick=function(e){
var pos=_43._inputHelper.cursorPosition();
_43._inputHelper.focus(pos.start);
_43.showEmotion();
XN.event.stop(e||window.event);
};
}else{
this.showEmotion=function(){
this.getEl("emotion").show();
};
this.hideEmotion=function(){
this.getEl("emotion").hide();
};
}
this._enableSubmit();
},showErr:function(msg){
if(this.IDerr){
var t=$(this.IDerr);
if(t){
t.innerHTML=msg;
t.show();
}
}
},hideErr:function(){
if(this.IDerr){
var t=$(this.IDerr);
if(t){
t.hide();
}
}
},showMsg:function(msg){
if(this.IDmsg){
var t=$(this.IDmsg);
if(t){
t.innerHTML=msg;
t.show();
}
}
},hideMsg:function(){
if(this.IDmsg){
var t=$(this.IDmsg);
if(t){
t.hide();
}
}
},addOnsParam:function(obj){
$extend(this.action.addOnsParam,obj);
},getInputPos:function(){
this._currentInputPos=$CursorPosition(this.getEl("input"));
},showEmotion:XN.func.empty,hideEmotion:XN.func.empty,_patchForNewUser:function(){
var _5f=this.getEl("currentStatus");
var _60=this.getEl("updateTime");
if(_5f&&_3a.isBlank(_5f.innerHTML)){
_5f.innerHTML=this.getTip("newUser");
if(_60){
_60.innerHTML="";
}
}
},_parseEmotionEvent:function(e){
var el=XN.EVENT.element(e);
if(el.tagName.toLowerCase()=="a"){
el=el.getElementsByTagName("img")[0];
}
if(el.tagName.toLowerCase()=="img"&&el.getAttribute("emotion")){
this.addEmotion(el.getAttribute("emotion"));
}
},_forSpecial:false,addEmotion:function(_63,sp){
if(sp){
XN.Cookie.set(this.getConfig("spCookieName"),"1",10000,"/","."+XN.env.domain+"");
this._forSpecial=true;
}
var _65=this;
if(this.forSpecial){
_63=this.forSpecial(_63);
}
var _66=this.getEl("input");
if(this.getTip("inputDefault")==_66.value){
_66.value="";
}
var pos=this._currentInputPos;
_66.value=_66.value.slice(0,pos.start)+_63+_66.value.slice(pos.end);
_66.blur();
setTimeout(function(){
_65._inputHelper.focus(pos.start+_63.length);
},10);
},update:function(_68){
var _69=XN.STRING.trim(_68);
if(this.getTip("inputDefault")==_69){
this.fireEvent("updateError","\u62b1\u6b49\uff0c\u60a8\u4e0d\u80fd\u53d1\u5e03\u7a7a\u72b6\u6001");
return;
}else{
if(_69==""){
this.getEl("input").value="";
this.fireEvent("updateError",XN.APP.status.getError(3));
return;
}
}
var _6a=this.getEl("currentStatus");
if(_6a){
this._lastStatus=XN.STRING.trim(_6a.innerHTML);
}
this.action.update(_68);
},_disableSubmit:function(){
this.getEl("submit").addClass("disabled");
this.getEl("submit").onclick=null;
this.getEl("input").disalbe=true;
},_enableSubmit:function(){
var _6b=this;
var _6c=this.getEl("submit");
setTimeout(function(){
_6b.getEl("submit").delClass("disabled");
},1000);
_6c.onclick=function(e){
XN.EVENT.stop(e||window.event);
_6b.fireEvent("beforeUpdate");
_6b.update(_6b.getEl("input").value);
};
this.getEl("input").disabled=false;
this.getEl("submit").disabled=false;
},_resetInput:function(){
var _6e=this.getEl("input");
_6e.value=this.getTip("inputDefault");
_6e.style.color="#888";
_6e.blur();
},advancedMode:function(){
if(this._modeTimer){
clearTimeout(this._modeTimer);
this._modeTimer=null;
}
if(this._uiType=="home"){
var _6f=this.getEl("inputContent");
var _70=this.getEl("submit");
var _71=this.getEl("counter");
var _72=this.getEl("special");
if(_6f){
_6f.addClass("inputactve");
}
if(_70){
_70.show();
}
if(_71){
_71.show();
}
if(_72){
_72.hide();
}
}
this.showEmotion();
this.getEl("input").style.color="#333";
var _73=$("statusEdit");
if(_73){
_73.style.backgroundPosition="0 0";
}
this.fireEvent("advancedMode");
this._patchForIE();
},simpleMode:function(){
var _74=this;
if(this._uiType=="home"){
var _75=this.getEl("inputContent");
var _76=this.getEl("counter");
var _77=this.getEl("special");
if(_75){
_75.delClass("inputactve");
}
if(this._uiType=="home"){
if(_76){
_76.hide();
}
}
if(_77&&(!this._forSpecial)){
_77.show();
}
}
var _78=$("statusEdit");
if(_78){
_78.style.backgroundPosition="0 -58px";
}
this.hideEmotion();
this.fireEvent("simpleMode");
},_resetInputCounter:function(_79){
var _7a=this.getEl("counter");
if(_7a){
var v=this.getEl("input").value;
if(_79){
_7a.innerHTML=0;
}
_7a.delClass("full");
if(this._uiType=="home"){
_7a.hide();
}
this.fireEvent("resetCounter");
}
},_onBlur:function(){
var _7c=this;
var _7d=this.getEl("input");
$(_7d).delClass("focus");
var v=_7d.value;
if(v!==""&&v!=this.getTip("inputDefault")){
return;
}
if(this._overEmotion){
return;
}
_7c.simpleMode();
},_patchForIE:function(){
if(XN.BROWSER.IE7){
document.body.style.zoom=1.1;
document.body.style.zoom="";
}
},_onInputFocus:function(){
var _7f=this.getEl("input");
if(_7f.value==this.getTip("inputDefault")){
_7f.value="";
}
this._resetInputCounter();
this.advancedMode();
$(_7f).addClass("focus");
this.fireEvent("inputFocus");
},_beforePost:function(){
this._disableSubmit();
if(this.getEl("currentStatus")){
this.getEl("currentStatus").innerHTML="<img class=\"loaddisableding-img\" src=\""+XN.ENV.staticRoot+"img/uploaddisabled_progress.gif\"/>\u66f4\u65b0\u4e2d\uff0c\u8bf7\u7a0d\u5019..";
}
},_onPostSuccess:function(r){
if(this._specialCode&&r.indexOf(this._specialCode)!==-1){
XN.COOKIE.set("sta1","1",10000);
}
this._enableSubmit();
this._resetInput();
this._resetInputCounter(true);
this.simpleMode();
var _81=this.getEl("updateTime");
if(_81){
_81.innerHTML=this.getTip("updateTime");
}
var _82=this.getEl("currentStatus");
if(_82){
_82.innerHTML=r;
_82.style.backgroundColor="rgb(255,255,150)";
setTimeout(function(){
XN.Effect.gradient(_82,255,255,150,function(){
_82.style.backgroundColor="transparent";
});
},50);
}
},_onPostError:function(r){
this._enableSubmit();
this.advancedMode();
if(this.getEl("currentStatus")){
this.getEl("currentStatus").innerHTML=this._lastStatus;
}
if(this.getEl("updateTime")){
this.getEl("updateTime").innerHTML="";
}
if(this.getConfig("showError")){
XN.DO.showError(r||this.getTip("onPostError"));
}
}};
XN.EVENT.enableCustomEvent(ns.editor.prototype);
})(XN.APP.status);
XN.dom.ready(function(){
var _84="(home|www|guide)\\."+XN.env.domain_reg;
if(!(window.asyncHTMLManager&&new RegExp("status."+XN.env.domain).test(window.asyncHTMLManager.location))&&new RegExp(_84).test(window.location.href+"")){
return;
}
if(!$("statusEdit")&&!$("publisher_statusInput")){
return;
}
var p={};
if(/status\.renren\.com/.test(window.location.href+"")){
XN.config.status.params="statusPage=1";
}
p.TIPinputDefault="\u4f60\u6b63\u5728\u5e72\u561b?";
var _86=new XN.APP.status.editor(p);
_86.forSpecial=function(_87){
return _87;
};
window.statusEditor=_86;
});
(function(ns){
var _89=XN.STRING;
var _8a=XN.EVENT.addEvent;
var _8b;
var _8c=true;
var lib;
function log(s){
if(_8c){
XN.log(s);
}
}
ns.forPublisher=function(_8f){
$extend(this,_8f);
this.init();
};
ns.forPublisher.prototype={IDsubmit:"publisher_submit",IDinput:"publisher_statusInput",IDinputContent:"statusContent",IDcurrentStatus:"currentStatus",IDupdateTime:"statusUpdateTime",IDspecial:"commendStatus",IDemotion:"publisher_emotion",IDcounter:"publisher_count",IDtools:"publisher_tools",IDemobtn:"publisher_emobtn",IDcontainer:"status-publisher",IDuploaddisabledForm:"publisher_uploaddisabled_form",TIPinputDefault:"\u4f60\u6b63\u5728\u5e72\u561b\uff1f",TIPinputPhoto:"\u8bf7\u6dfb\u52a0\u7167\u7247\u63cf\u8ff0...",TIPonPostError:"\u72b6\u6001\u66f4\u65b0\u5931\u8d25,\u8bf7\u5237\u65b0\u9875\u9762\u6216\u91cd\u65b0\u767b\u5f55",TIPupdateTime:"\u521a\u521a\u66f4\u65b0",TIPnewUser:"\u8ba9\u670b\u53cb\u4eec\u77e5\u9053\u4f60\u5728\u505a\u4ec0\u4e48...",TIPpublishing:"\u6b63\u5728\u53d1\u5e03, \u8bf7\u7a0d\u5019...",CFGshowError:true,CFGmaxLength:140,CFGspCookieName:"sta1",CFGinputMinHeight:28,CFGinputMaxHeight:50,CFGemoShow:true,_action:null,_lastStatus:null,getConfig:function(key){
return this["CFG"+key];
},getEl:function(id){
return $(this["ID"+id]);
},getTip:function(key){
return this["TIP"+key];
},init:function(){
var _93=this,ac;
this.sbt=this.getEl("submit");
this.ipt=this.getEl("statusInput");
this.tools=$(this.IDtools);
this.emobtn=$(this.IDemobtn);
this.curStatus=$(this.IDcurrentStatus);
if(window.asyncHTMLManager&&XN.browser.IE&&!XN.user.isGuide){
this.CFGinputMinHeight=20;
}
if(Sizzle("#publisher_frame .publisher-highlight").length!=0){
this.CFGinputMinHeight=34;
if(XN.browser.IE){
this.CFGinputMinHeight=26;
}
}
this._action=ac=new XN.APP.status.updateAction({maxLength:this.getConfig("maxLength"),enableMedia:true});
ac.addEvent("beforePost",function(){
_93._beforePost();
_93.fireEvent("beforeUpdate");
});
ac.addEvent("postSuccess",function(r,_96,_97){
_93._onPostSuccess(r,_97);
_93.fireEvent("updateSuccess");
});
ac.addEvent("postError",function(r){
_93._onPostError(r);
_93.fireEvent("updateError",r);
});
var _99=this.getEl("input");
_99.addEvent("focus",function(e){
_93._onInputFocus(e);
},false);
_99.addEvent("blur",function(e){
_93._onBlur();
},false);
var _9c=$element("div");
_9c.id="publisher_counter_wrap";
_9c.style.display="none";
_9c.className="counter-new";
_9c.innerHTML="<span id=\""+this.IDcounter+"\">0</span><span>/140</span>";
if($("publisher_uploaddisabled_form")){
$("publisher_uploaddisabled_form").appendChild(_9c);
}
this.counter=_9c;
this._inputHelper=new XN.FORM.inputHelper(this.getEl("input")).limit(this.getConfig("maxLength"),false).count(this.getEl("counter"),false).setDefaultValue(this.getTip("inputDefault"));
this._inputHelper.setDefaultValue(this.getTip("inputDefault"));
XN.EVENT.addEvent(this.getEl("input"),"keydown",function(e){
if(e.keyCode==13){
if(_93.getEl("input").mention&&_93.getEl("input").mention.selectorShow&&!_93.getEl("input").mention.noMatch){
return;
}
_93.getEl("input").blur();
if(_93.mode=="keep"){
return true;
}
_93.update(_93.getEl("input").value);
}
});
this._enableSubmit();
if(this.getEl("emotion")){
this.getEl("emotion").addEvent("click",function(e){
e=e||window.event;
XN.EVENT.stop(e);
_93._parseEmotionEvent(e);
}).addEvent("mouseover",function(e){
_93._overEmotion=true;
}).addEvent("mouseleave",function(){
_93._overEmotion=false;
}).addEvent("mousedown",function(e){
XN.EVENT.stop(e||window.event);
_93.getInputPos();
});
}
if(this.getEl("special")){
this.getEl("special").addEvent("mousedown",function(){
_93.getInputPos();
});
}
this.showEmotion=function(){
if(XN.widgets.publisher.currentTab){
return;
}
if(!this.getEl("emotion")){
return;
}
this.loaddisabledRealEmotion();
if(this.getConfig("emoShow")){
this.getEl("emotion").show();
}
};
this.loaddisabledRealEmotion=function(){
if(this.realEmoLoaded){
return;
}
var _a1=_93.getEl("emotion").getElementsByTagName("img");
XN.array.each(_a1,function(i,v){
v.setAttribute("src",v.getAttribute("rsrc"));
v.removeAttribute("rsrc");
});
this.realEmoLoaded=true;
};
this.hideEmotion=function(){
XN.log("hideEmotion");
if(this.getEl("emotion")){
this.getEl("emotion").hide();
}
};
this.emobtn.addEvent("mouseover",function(e){
_93._overEmotion=true;
});
this.emobtn.addEvent("mouseout",function(e){
_93._overEmotion=false;
});
this.emobtn.addEvent("click",function(e){
e=e||window.event;
XN.event.stop(e);
_93.showEmotion();
_93._inputHelper.focus();
if(_93.emobtn.hasClassName("pub-emtion-click")){
_93.emobtn.delClass("pub-emtion-click");
_93.hideEmotion();
}else{
_93.emobtn.addClass("pub-emtion-click");
}
});
this.emoReset=function(){
_93.hideEmotion();
_93.emobtn.delClass("pub-emtion-click");
};
},_patchForNewUser:function(){
if("profile"==document.body.id){
return;
}
if(_89.isBlank(this.getEl("currentStatus").innerHTML)){
this.getEl("currentStatus").innerHTML=this.getTip("newUser");
this.getEl("updateTime").innerHTML="";
}
},_parseEmotionEvent:function(e){
var el=XN.EVENT.element(e);
if(el.tagName.toLowerCase()=="a"){
el=el.getElementsByTagName("img")[0];
}
if(el.tagName.toLowerCase()=="img"){
this.addEmotion(el.getAttribute("emotion"));
}
},getInputPos:function(){
this._currentInputPos=$CursorPosition(this.getEl("input"));
},_forSpecial:false,addEmotion:function(_a9,sp){
var _ab=this;
if(sp){
XN.Cookie.set(this.getConfig("spCookieName"),"1",10000,"/","."+XN.env.domain+"");
this._forSpecial=true;
}
if(this.forSpecial){
_a9=this.forSpecial(_a9);
}
var _ac=this.getEl("input");
if(this.getTip("inputDefault")==_ac.value){
_ac.value="";
}
var pos=this._currentInputPos;
_ac.value=_ac.value.slice(0,pos.start)+_a9+_ac.value.slice(pos.end);
_ac.blur();
setTimeout(function(){
_ab._inputHelper.focus(pos.start+_a9.length);
},10);
},update:function(_ae){
if(this.getTip("inputDefault")==_ae){
return;
}
if(this.getEl("currentStatus")){
this._lastStatus=XN.string.trim(this.getEl("currentStatus").innerHTML);
}
this.hideEmotion();
if(this.emobtn){
this.emobtn.delClass("pub-emtion-click");
}
this.justStatus=XN.string.trim(_ae);
this._action.update(_ae);
},_disableSubmit:function(){
this.getEl("submit").onclick=null;
this.getEl("input").disalbe=true;
},_enableSubmit:function(){
var _af=this;
var _b0=this.getEl("submit");
_b0.onclick=function(e){
if(_af.mode=="keep"){
return true;
}
XN.EVENT.stop(e||window.event);
_af.update(_af.getEl("input").value);
};
this.getEl("input").disabled=false;
},_resetInput:function(){
var _b2=this.getEl("input");
_b2.value=this.getTip("inputDefault");
_b2.style.color="#888";
},_effect:function(d){
var _b4=this;
var _b5=this.getEl("input");
var mih=this.getConfig("inputMinHeight");
var mah=this.getConfig("inputMaxHeight");
if(this._aEffect){
this._aEffect.stop();
}
if(!this._aEffect){
this._aEffect=new XN.effect.Motion("easeOut",50);
}
if(d==void"){
this._aEffect.onTweening=function(){
_b5.style.height=this.equation(mih,mah)+"px";
};
this._aEffect.onComplete=function(){
_b4.showEmotion();
};
this._aEffect.start();
}else{
this._aEffect.onTweening=function(){
_b5.style.height=this.equation(mah,mih)+"px";
};
this._aEffect.onComplete=null;
this._aEffect.start();
}
this.fireEvent("effectEnd");
},mode:"simple",advancedMode:function(){
if(this.mode=="advance"||this.mode=="keep"){
return;
}
this.mode="advance";
this.getEl("input").addClass("focus");
this._effect(void");
if(this.getEl("special")){
this.getEl("special").hide();
}
this.fireEvent("advancedMode");
},simpleMode:function(){
var _b8=this;
if(this.mode=="simple"||this.mode=="keep"||this.mode=="keepMode"){
return;
}
this.isShow=false;
this.mode="simple";
this._effect("close");
this.getEl("input").delClass("focus");
this._overEmotion=false;
if(this.getEl("special")&&(!this._forSpecial)){
this.getEl("special").show();
}
if(this.emobtn){
this.emobtn.delClass("pub-emtion-click");
}
this.hideEmotion();
this.fireEvent("simpleMode");
},_resetInputCounter:function(){
var _b9=this.getEl("counter");
_b9.innerHTML=this.getEl("input").value.length+"/"+this.getConfig("maxLength");
_b9.delClass("full");
_b9.hide();
this.fireEvent("resetCounter");
},_onBlur:function(){
var _ba=this;
var v=this.getEl("input").value;
if(v!==""&&v!=this.getTip("inputDefault")){
return;
}
if(this._overEmotion){
return;
}
if(this._overShare){
return;
}
this.curStatus.show();
_ba.simpleMode();
},_patchForIE:function(){
if(XN.BROWSER.IE){
document.body.style.zoom=1.1;
document.body.style.zoom="";
}
},_onInputFocus:function(){
var _bc=this.getEl("input");
if(_bc.value==this.getTip("inputDefault")||_bc.value==this.getTip("inputPhoto")){
_bc.value="";
}
this.advancedMode();
this.curStatus.hide();
_bc.style.color="#333";
this.fireEvent("inputFocus");
},_beforePost:function(){
this._disableSubmit();
if(this.getEl("currentStatus")){
this.getEl("currentStatus").innerHTML="<img class=\"loaddisableding-img\" src=\""+XN.ENV.staticRoot+"img/uploaddisabled_progress.gif\"/>\u66f4\u65b0\u4e2d\uff0c\u8bf7\u7a0d\u5019 ";
}
},_onPostSuccess:function(r,_be){
this._enableSubmit();
this._resetInput();
var _bf=this;
setTimeout(function(){
_bf.mode="advance";
_bf.simpleMode();
_bf.getEl("input").blur();
},1000);
if(this.getEl("updateTime")){
this.getEl("updateTime").innerHTML=this.getTip("updateTime");
}
if(!this.getEl("currentStatus")){
return;
}
var _c0=this.getEl("currentStatus");
_c0.innerHTML="<a href=\"httpdisabled://status."+XN.env.domain+"/getdoing.do?id="+XN.user.id+"\">\u521a\u521a\u66f4\u65b0: "+r+"</a>";
_c0.title=this.justStatus;
_c0.style.backgroundColor="rgb(255,255,150)";
_c0.show();
this.tools.show();
setTimeout(function(){
XN.Effect.gradient(_c0,255,255,150,function(){
_c0.style.backgroundColor="transparent";
});
},50);
},noMoreThan:function(str,num){
if(str.length<=num){
return str;
}
return str.slice(0,num)+"...";
},_onPostError:function(r){
var _c4=this;
this._enableSubmit();
this.simpleMode();
this.getEl("currentStatus").innerHTML=this._lastStatus;
this.getEl("input").delClass("full");
if(this.getConfig("showError")){
XN.DO.showError(r||this.getTip("onPostError"));
setTimeout(function(){
_c4._inputHelper.focus();
},2100);
}else{
_c4._inputHelper.focus();
}
}};
XN.EVENT.enableCustomEvent(ns.forPublisher.prototype);
})(XN.app.status);
XN.namespace("widgets");
XN.widgets.publisher={IDtools:"publisher_tools",IDattach:"publisher_attach",IDshareVideo:"publisher_share_video",IDshareLink:"publisher_share_link",getID:function(id){
return "publisher_"+id;
},getEl:function(id){
return $(this.getID(id));
},hideEl:function(id){
this.getEl(id).style.display="none";
},inited:false,error:false,init:function(){
if(this.inited){
return;
}
this.inited=true;
this.attach=$(this.IDattach);
this.shareVideo=(this.IDshareVideo);
this.shareLink=(this.IDshareLink);
var _c8=this;
this.statusEditor=new XN.app.status.forPublisher({IDsubmit:this.getID("submit"),TIPinputDefault:XN.widgets.publisher.dDefaultValue||"\u4f60\u6b63\u5728\u5e72\u561b?"});
this.statusEditor.addEvent("advancedMode",function(){
void();
});
this.statusEditor.addEvent("simpleMode",function(){
_c8.close();
});
this.statusEditor.addEvent("updateSuccess",function(){
if(XN.jebe&&XN.jebe.refreshAd){
try{
XN.jebe.refreshAd(4);
}
catch(e){
}
}
if($(_c8.statusEditor.IDcounter)){
$(_c8.statusEditor.IDcounter).innerHTML=0;
}
_c8.attach&&_c8.attach.hide();
});
this.statusEditor.addEvent("updateError",function(r,msg,_cb){
if($(_c8.statusEditor.IDcounter)){
$(_c8.statusEditor.IDcounter).innerHTML=0;
}
});
if(Sizzle("#publisher_frame .publisher-highlight").length!=0){
$("publisher_statusInput").addEvent("focus",function(){
if(_c8.currentTab){
return;
}
$("publisher_counter_wrap").show();
}).addEvent("blur",function(){
if(XN.form.help($("publisher_statusInput")).getRealValue()==""){
$("publisher_counter_wrap").hide();
}
});
}
if(XN.browser.IE){
this.getEl("uploaddisabled_form").onsubmit=function(){
_c8.submit();
return false;
};
}
this.getEl("submit").removeAttribute("disabled");
function stopEvent(e){
e=e||window.event;
XN.event.stop(e);
}
function enableEvent(e){
if(_c8.currentTab){
return;
}
}
this._tab={"uploaddisableding":{name:"uploaddisableding",title:"\u4e0a\u4f20",className:"iPhoto",icon:"httpdisabled://s.xnimg.cn/a.gif",html:"<div class=\"publisher-loaddisableding\">\u6b63\u5728\u4e0a\u4f20\uff0c\u8bf7\u7a0d\u5019...</div>",isAttach:true,canSubmit:false},"attachPhoto":{name:"attachPhoto",title:"\u76f8\u518c",className:"iPhoto",icon:"httpdisabled://s.xnimg.cn/a.gif",html:"<div class=\"success\"><p>\u4e0a\u4f20\u6210\u529f\uff0c\u8bf7\u5b8c\u5584\u7167\u7247\u4fe1\u606f</p></div><div id=\"place_holder\"></div>",isAttach:false,canSubmit:"photo"},"uploaddisabledPhoto":{name:"uploaddisabledPhoto",title:"\u4e0a\u4f20",className:"iPhoto",icon:"httpdisabled://s.xnimg.cn/a.gif",url:"httpdisabled://status."+XN.env.domain+"/publisher/retrieveUploaddisabledPhoto.do",canSubmit:"uploaddisabled",cache:true},"uploaddisabledSuccess":{name:"uploaddisabledSuccess",title:"\u4e0a\u4f20",className:"iPhoto",icon:"httpdisabled://s.xnimg.cn/a.gif",url:"httpdisabled://status."+XN.env.domain+"/publisher/photofeed.do",isAttach:true,canSubmit:false,cache:false},"publishing":{name:"publishing",title:"\u6b63\u5728\u53d1\u5e03",className:"publishing",html:"<div class=\"publisher-loaddisableding\" style=\"text-align:center;\">\u6b63\u5728\u53d1\u5e03\uff0c\u8bf7\u7a0d\u5019...</div>",icon:"httpdisabled://s.xnimg.cn/a.gif",isAttach:true,canSubmit:false,cache:false},"shareLink":{name:"shareLink",title:"\u5206\u4eab",className:"iShare",icon:"httpdisabled://s.xnimg.cn/a.gif",url:"httpdisabled://status."+XN.env.domain+"/publisher/retrieveShareLink.do",canSubmit:"share",cache:true},"postShare":{name:"postShare",title:"\u5206\u4eab",className:"iShare",icon:"httpdisabled://s.xnimg.cn/a.gif",url:"httpdisabled://status."+XN.env.domain+"/publisher/save2share.do",canSubmit:false,cache:false},"emotion":{name:"emotion",title:"\u8868\u60c5",className:"",icon:"httpdisabled://s.xnimg.cn/imgpro/icons/statusface/1.gif",url:"httpdisabled://status."+XN.env.domain+"/publisher/showEmotion.do",canSubmit:"emotion",cache:true}};
XN.event.addEvent(this.getID("file"),"mousedown",stopEvent);
XN.event.addEvent(this.getID("file"),"mouseup",enableEvent);
var _ce=[this.getID("file"),this.IDshareVideo,this.IDshareLink];
XN.event.addEvent(_ce,"mouseover",function(){
_c8.statusEditor._overEmotion=true;
});
XN.event.addEvent(_ce,"mouseout",function(){
_c8.statusEditor._overEmotion=false;
});
XN.event.addEvent(this.getID("file"),"change",function(e){
var v=_c8.getEl("file").value;
if(!/\.(png|jpg|jpeg|gif|bmp)/i.test(v)){
XN.DO.showError("\u8bf7\u9009\u62e9\u4e00\u5f20\u56fe\u7247");
return;
}
voidTab(_c8._tab.uploaddisableding);
_c8.statusEditor.getEl("input").value;
_c8.statusEditor._inputHelper._defaultValue="";
_c8.statusEditor._inputHelper.element.value="";
_c8.getEl("uploaddisabled_form").submit();
});
var tip=XN.dom.getElementsByClassName("status-tips-cion",this.getID("frame"))[0];
if(tip){
XN.event.addEvent(tip,"mousedown",stopEvent);
XN.event.addEvent(tip,"mouseup",enableEvent);
}
var _d2=this.statusEditor.getEl("input");
var _d3=$(_c8.IDtools);
var _d4=$(_c8.statusEditor.IDcurrentStatus);
_d2.addEvent("focus",function(){
if(_d3&&(!_c8.currentTab)){
_d3.style.display="block";
}
});
_d4.addEvent("click",function(){
_c8.statusEditor._overEmotion=false;
});
if(_d4){
_d4.addEvent("mouseover",function(){
_c8.statusEditor._overEmotion=true;
});
_d4.addEvent("mouseout",function(){
_c8.statusEditor._overEmotion=false;
});
}
XN.event.addEvent(this.getID("share"),"mouseover",function(){
_c8.statusEditor._overShare=true;
});
XN.event.addEvent(this.getID("share"),"mouseout",function(){
_c8.statusEditor._overShare=false;
});
XN.event.addEvent([this.IDshareVideo,this.IDshareLink],"click",function(e){
_c8.statusEditor._inputHelper.focus();
if(!_c8._shareTip){
var _d6={bar:_c8.statusEditor.getEl("input"),alignType:"1-4",offsetY:-6,fireOn:"manual",msg:"\u73b0\u5728\u53ef\u4ee5\u76f4\u63a5\u5728\u8fd9\u91cc\u5206\u4eab\u5566\uff01"};
if(XN.browser.IE7){
}
_c8._shareTip=new XN.ui.tooltip(_d6);
}
_c8._shareTip.show();
_c8.statusEditor.CFGemoShow=false;
});
XN.event.addEvent(_d2,"blur",function(){
_c8.statusEditor.CFGemoShow=true;
try{
_c8._shareTip.hide();
}
catch(e){
}
});
XN.event.addEvent(this.getID("action_close"),"click",function(e){
e=e||window.event;
XN.event.stop(e);
_c8.closeTab();
});
XN.event.addEvent(this.getID("action_content"),"click",function(e){
_c8.parseEvent(e||window.event);
});
XN.event.addEvent(this.getID("submit"),"click",function(e){
XN.event.stop(e||window.event);
_c8.submit();
});
XN.event.addEvent(this.statusEditor.getEl("input"),"keydown",function(e){
e=e||window.event;
if(e.keyCode==13){
if(_c8.statusEditor.getEl("input").mention&&_c8.statusEditor.getEl("input").mention.selectorShow&&!_c8.statusEditor.getEl("input").mention.noMatch){
return;
}
_c8.submit();
}
});
Mention.init([{obj:this.statusEditor.getEl("input"),ugcId:"",ugcType:"status",ownerId:XN.user.id}]);
this.fireEvent("init");
XN.log("publisher:init over");
},submit:function(){
if(this.mode=="close"){
return;
}
if(this._submitDisabled){
return;
}
if(!this.currentTab){
return;
}
var cs=this.currentTab.canSubmit;
if(!cs){
return;
}
var _dc=this;
if(cs=="createAlbum"){
this.getEl("create_form").submit();
}else{
if(cs=="photoDesc"){
voidTab(this._tab.updateDesc,"description="+encodeURIComponent(this.getEl("photo_description").value)+"&photoId="+this.getEl("photo_id").value);
}else{
if(cs=="share"){
var _dd=this.getEl("share_title").value;
if(!/^http:\/\//i.test(_dd)){
_dd="httpdisabled://"+_dd;
}
var _de="weblink="+encodeURIComponent(_dd);
if(this.getEl("share_name")){
_de+="&title="+encodeURIComponent(this.getEl("share_name").value);
_de+="&fromname="+encodeURIComponent(this.getEl("share_fromname").value);
}else{
_de+="&fromname=";
}
var _df=this.statusEditor.getEl("input").value;
if(_df==this.statusEditor.getTip("inputDefault")){
_df="";
}
_de+="&status="+encodeURIComponent(_df);
_de+=XN.app.status.getForwardParam();
XN.app.status.setForwardNull();
voidTab(this._tab.postShare,_de);
this.statusEditor.getEl("input").value="";
}else{
if(cs=="photo"){
var _df=$("photo-description").value;
if(_df==this.statusEditor.getTip("inputPhoto")){
_df="";
}
var sel=$("album");
var p={id:this._photoId,status:_df,albumSelect:sel.value};
if(_df.length>200){
XN.DO.showError("\u7167\u7247\u63cf\u8ff0\u6700\u591a\u53ea\u80fd\u8f93\u5165200\u5b57");
setTimeout(function(){
_dc.statusEditor._inputHelper.focus();
},2000);
return;
}
var _e2=this;
XN.element.addClass("publisher_frame","publishing");
voidTab(_e2._tab.uploaddisabledSuccess,XN.array.toQueryString(p)+XN.app.status.getForwardParam());
XN.app.status.setForwardNull();
_e2.statusEditor.getEl("input").value="";
$("publisher_action_content").innerHTML="<div class=\"photo-uploaddisableding\">"+_dc.statusEditor.getTip("publishing")+"</div>";
}else{
if(cs=="emotion"){
this.statusEditor.update(this.statusEditor.getEl("input").value);
this.closeTab();
}
}
}
}
}
this.fireEvent("submit",this.currentTab);
},parseEvent:function(e){
}voidEffect:function(_e4,_e5,end,_e7){
_e4.style.display="block";
var _e8=this.getEl("patch_iframe");
var _e9=this.getEl("frame");
if(this._frameEffect){
this._frameEffect.stop();
}
if(!this._frameEffect){
this._frameEffect=new XN.effect.Motion("easeOut",50);
}
this._frameEffect.onTweening=function(){
_e4.style.height=this.equation(_e5,end)+"px";
if(_e8){
_e8.style.height=_e9.offsetHeight+"px";
}
};
this._frameEffect.onComplete=function(){
_e4.style.height="auto";
};
this._frameEffect.start();
},buttonEffect:function(_ea,end){
},_tabEffect:function(tab){
var _ed=this;
var _ee=this.getEl("action_title");
if(this._titleEffect){
this._titleEffect.stop();
}
if(!this._titleEffect){
this._titleEffect=new XN.effect.Motion("easeOut",50);
}
this._titleEffect.onTweening=function(){
_ee.style.left=this.equation(200,10)+"px";
};
this._titleEffect.start();
if(tab.name=="attachPhoto"){
this.buttonEffect(this.getEl("submit").offsetTop,this.getEl("action_rframe").offsetHeight-this.getEl("submit").offsetHeight);
}else{
if(!(tab.name==="uploaddisableding")){
setTimeout(function(){
var _ef=30+_ed.getEl("action_rframe").offsetHeight;
_ed.buttonEffect(_ed.getEl("submit").offsetTop,_ef);
},0);
}
}
voidEffect(this.getEl("action_frame"),this.getEl("action_frame").offsetHeight,this.getEl("action_rframe").offsetHeight+10);
},startLoading:function(){
this.getEl("action_content").addClass("loaddisableding");
this.getEl("action_content").clear();
this.isLoading=true;
},stopLoading:function(){
this.getEl("action_content").delClass("loaddisableding");
this.isLoading=false;
},disableSubmit:function(){
this._submitDisabled=true;
this.getEl("submit").addClass("disabled");
this.getEl("submit").setAttribute("disabled","disabled");
},enableSubmit:function(){
this._submitDisabled=false;
this.getEl("submit").delClass("disabled");
this.getEl("submit").removeAttribute("disabled");
},_startCheckSubmit:function(){
var _f0=this;
this._stopCheckSubmit();
var cs=_f0.currentTab.canSubmit;
if(!cs){
return;
}
var _f2=null;
if(cs=="share"){
_f2=function(){
var v=_f0.getEl("share_title").value;
if(XN.string.isBlank(v)){
return true;
}
if(v=="\u8bf7\u8f93\u5165\u7f51\u5740/\u89c6\u9891\u5730\u5740/\u97f3\u9891\u5730\u5740"){
return true;
}
if(v=="httpdisabled://"){
return true;
}
if(!/^[a-zA-Z]/.test(v)){
return true;
}
if(!/[a-zA-Z0-9]\.[a-zA-Z0-9]/.test(v)){
return true;
}
return false;
};
}else{
if(cs=="createAlbum"){
_f2=function(){
return XN.string.isBlank(_f0.getEl("album_title").value);
};
}else{
if(cs=="photoDesc"){
_f2=function(){
return XN.string.isBlank(_f0.getEl("photo_description").value);
};
}else{
if(cs=="photo"){
_f2=function(){
return false;
};
}else{
if(cs=="emotion"){
_f2=function(){
return false;
};
}
}
}
}
}
this._submitTimer=setInterval(function(){
if(_f2&&_f2()){
_f0.disableSubmit();
}else{
_f0.enableSubmit();
}
},200);
},_stopCheckSubmit:function(){
if(this._submitTimer){
clearInterval(this._submitTimer);
this._submitTimer=null;
}
},mode:void",canClose:true,closeTab:function(){
var tab=this.currentTab;
var _f5=this.getEl("statusInput");
this.fireEvent("beforeTabClose",{currentTab:tab,input:_f5});
var _f6=this;
if(tab&&(tab.name=="attachPhoto")){
if($("album").value||_f5.value&&_f5.value!=this.statusEditor.getTip("inputPhoto")){
XN.DO.confirm({message:"\u786e\u5b9a\u4e0d\u53d1\u5e03\u8be5\u7167\u7247\u5417\uff1f\u4f60\u7684\u597d\u53cb\u5c06\u4e0d\u4f1a\u6536\u5230\u8be5\u7167\u7247\u7684\u65b0\u9c9c\u4e8b\u3002",title:"\u63d0\u793a",submit:"\u4e0d\u53d1\u5e03",callBack:function(yes){
if(!yes){
}else{
_f6.getEl("statusInput").value="";
_f6._closeTab();
}
}});
return;
}else{
_f6._closeTab();
return;
}
}
this._closeTab();
},_closeTab:function(){
if(this.currentTab&&this.currentTab.pre){
voidTab(this._tab[this.currentTab.pre]);
return;
}
var _f8=this;
this.statusEditor.mode="advance";
this.getEl("submit").style.top="0";
this.getEl("submit").show();
this.getEl("tools").style.display="block";
this.hideEl("action_frame");
this.attach.hide();
this.statusEditor.getEl("input").show();
this.statusEditor.getEl("input").show();
this._stopCheckSubmit();
this.enableSubmit();
var val=this.getEl("statusInput").value;
this.getEl("uploaddisabled_form").reset();
this.getEl("statusInput").value=val;
if(this.currentTab&&this.currentTab.name=="attachPhoto"){
}else{
this.currentTab=null;
}
this.currentTab=null;
this.mode="close";
$("publisher_frame").className="publisher";
$("publisher_submit").show();
$("currentStatus").show();
if($(this.statusEditor.IDcounter)){
$(this.statusEditor.IDcounter).innerHTML=0;
}
this.statusEditor._inputHelper.setDefaultValue(this.statusEditor.getTip("inputDefault"));
$("publisher_uploaddisabled_form").delClass("no-spacing");
this.error=false;
setTimeout(function(){
var se=_f8.statusEditor;
se.simpleMode();
$("publisher_submit").style.top="0";
se._inputHelper._default=false;
se._inputHelper.setDefaultValue(se.TIPinputDefault);
_f8.fireEvent("afterTabClose");
},100);
}voidTab:function(tab,_fc){
var _fd=this;
if(this.foldTimer){
clearTimeout(this.foldTimer);
}
this.statusEditor.mode="keep";
this.statusEditor.hideEmotion();
this.currentTab=tab;
this.getEl("action_frame").show();
this.getEl("action_title").innerHTML=tab.title;
this.getEl("action_title_img").className=tab.className+" icon";
this.getEl("action_title_img").src=tab.icon;
this.getEl("tools").hide();
this.statusEditor.getEl("input").blur();
this.disableSubmit();
this._stopCheckSubmit();
if(tab.url){
this.loaddisabledAction(tab.url+(_fc?"?"+_fc:""));
this.startLoading();
}
if(tab.html){
this.renderTab(tab.html);
}
this._tabEffect(tab);
this.mode=void";
},renderTab:function(_fe){
var _ff=this;
_ff.getEl("action_content").innerHTML=_fe;
if(this.currentTab.isAttach){
this.getEl("action_close").style.visibility="hidden";
}else{
this.getEl("action_close").style.visibility="inherit";
}
if(_ff.currentTab.focus){
setTimeout(function(){
var _100=_ff.getEl(_ff.currentTab.focus);
_100.focus();
_100.select();
},0);
}
if(this.currentTab.title=="\u8868\u60c5"){
var el=this.getEl("action_content").getElementsByTagName("ul")[0];
XN.event.addEvent(el,"click",function(e){
_ff.statusEditor._parseEmotionEvent(e||window.event);
});
XN.event.addEvent(el,"mousedown",function(e){
XN.event.stop(e||window.event);
_ff.statusEditor.getInputPos();
});
}
if(this.currentTab.title=="\u4e0a\u4f20"){
var _tt=$("publisher_frame");
XN.element.addClass(_tt,"photo-uploaddisabled");
XN.element.addClass("publisher_uploaddisabled_form","no-spacing");
$("publisher_statusInput").hide();
_tt=$("publisher_action_rframe");
$("publisher_submit").hide();
if($("publisher_counter_wrap")){
$("publisher_counter_wrap").hide();
}
}
if(this.currentTab.name){
if(this.currentTab.name=="uploaddisabledSuccess"||this.currentTab.name=="postShare"){
this.foldTimer=setTimeout(function(){
_ff.closeTab();
$("publisher_statusInput").blur();
},2000);
XN.element.delClass("publisher_frame","attach-sus");
var s=$("h_status");
if(s&&!XN.string.isBlank(s.value)){
this.statusEditor.getEl("currentStatus").innerHTML="<a href=\"httpdisabled://status."+XN.env.domain+"/getdoing.do?id="+XN.user.id+"\">\u521a\u521a\u66f4\u65b0: "+XN.string.escapeHTML(s.value)+"</a>";
}
if(this.currentTab.name=="uploaddisabledSuccess"){
XN.element.addClass("publisher_frame","up-sus");
}
}
if(_ff.currentTab.name=="attachPhoto"){
_ff.statusEditor.getEl("input").show();
_ff.statusEditor.getEl("submit").show();
$("publisher_action_close").show();
$("publisher_statusInput").hide();
}
if(_ff.currentTab.name=="uploaddisableding"){
XN.debug.log("uploaddisableding");
}
if(_ff.currentTab.name=="shareLink"){
_tt=$("publisher_action_rframe");
$(_tt.getElementsByTagName("h4")[0]).show();
_tt=$("publisher_action_close").show();
XN.element.addClass("publisher_frame","shareLink");
}
XN.app.status.fireEvent("postSuccess","","",{allMsg:""});
}
if(!this.currentTab.name&&this.currentTab.name=="uploaddisableding"){
_ff.buttonEffect(_ff.getEl("submit").offsetTop,25+_ff.getEl("action_rframe").offsetHeight);
}
voidEffect(_ff.getEl("action_frame"),_ff.getEl("action_frame").offsetHeight,_ff.getEl("action_rframe").offsetHeight+10);
_ff._startCheckSubmit();
this.fireEvent("tabOpen",this.currentTab);
},loaddisabledAction:function(link){
if(this.isLoading){
return;
}
var This=this;
new XN.net.xmlhttp({url:link,useCache:this.currentTab.cache,onComplete:function(){
This.stopLoading();
},onSuccess:function(r){
This.renderTab(r.responseText);
},onError:function(){
err();
}});
function err(){
XN.DO.showError("\u7f51\u7edc\u51fa\u9519, \u8bf7\u91cd\u8bd5...");
setTimeout(function(){
This.closeTab(This.currentTab);
},2000);
This.error=true;
}
},extend:void:function(){
if(this.extend){
return;
}
this.extend=true;
this.getEl("frame").delClass("status-main");
this.getEl("frame").addClass("status-main-background");
this.attach.show();
},close:function(){
if(!this.extend){
return;
}
this.extend=false;
var This=this;
This.getEl("frame").delClass("status-main-background");
This.getEl("frame").addClass("status-main");
this.attach.hide();
},onBeforeUploaddisabled:function(){
this.getEl("uploaddisabled_iframe").hide();
var _10a=$element("div");
_10a.addClass("publisher-loaddisableding");
_10a.innerHTML="\u6b63\u5728\u4e0a\u4f20....";
this.getEl("action_content").appendChild(_10a);
},onUploaddisabledSuccess:function(code,url,msg,pid){
if(code!=0){
XN.DO.showError(msg);
this.error=true;
this.closeTab();
return;
}
this._photoId=pid;
var regx=/(<div id="place_holder">)(<\/div>)/;
var html=this._tab.attachPhoto.html;
var that=this;
new XN.net.xmlhttp({url:"httpdisabled://status."+XN.env.domain+"/publisher/getAlbumAjax.do",onSuccess:function(r){
that._tab.attachPhoto.html=html.replace(regx,"$1"+r.responseText+"$2");
voidTab(that._tab.attachPhoto);
},onError:function(){
XN.DO.showError("\u7f51\u7edc\u51fa\u9519, \u8bf7\u91cd\u8bd5...");
setTimeout(function(){
that.closeTab(that.currentTab);
},2000);
that.error=true;
}});
},showPhotoDesc:function(url,pid){
voidTab(this._tab.photoDesc,"url="+encodeURIComponent(url)+"&photoId="+pid);
}};
XN.event.enableCustomEvent(XN.widgets.publisher);
XN.dom.ready(function(){
var loc=window.location.href+"";
if(window.asyncHTMLManager){
loc=window.asyncHTMLManager.location.href;
}
var _116="(home|www|guide)\\."+XN.env.domain_reg;
if(!new RegExp(_116).test(loc)){
return;
}
if(!$("publisher_statusInput")){
return;
}
if(loc.indexOf("/status/")!=-1){
return;
}
XN.config.status.params="isAtHome=1";
XN.widgets.publisher.init();
XN.APP.status.replyEditor.prototype.slideUp=true;
});
(function(ns){
var isIE=XN.browser.IE;
function getPasteContent(p1,p2,s,l){
p1=p1.start;
p2=p2.start;
return l.substring(p1,p2);
}
ns.bindPaste=function(obj){
var args={before:XN.func.empty,after:XN.func.empty,callBack:XN.func.empty};
$extend(args,obj);
var _11f=$(obj.element);
var _120=_11f.value;
var _121={start:0};
XN.event.addEvent(_11f,"focus",function(){
var _122=XN.form.help(_11f);
_121=_122.cursorPosition();
if(_122&&!_122.getRealValue()){
_121.start=0;
_121.end=0;
}
});
var i=0;
var _124=setInterval(function(){
var v=_11f.value;
try{
if(v!==_120){
var cPos=XN.form.help(_11f).cursorPosition();
var _127=getPasteContent(_121,cPos,_120,v);
if(_127.length<6){
return;
}
XN.log("XN.event.bindPaste:\u7c98\u8d34\u4e86\u5185\u5bb9");
XN.log(_127);
XN.log(_121);
XN.log(cPos);
args.callBack.call(_11f,_127,_121,cPos,_120,v);
}
_120=v;
_121=XN.form.help(_11f).cursorPosition();
}
catch(e){
}
},200);
};
})(XN.event);
(function(_128){
var _129=function(_12a){
var This=this;
var pos=0;
var _12d=_12a.length;
this.image=function(){
return _12a[pos];
};
this.next=function(){
if(this.cn()){
pos++;
}
return This.image();
};
this.pre=function(){
if(this.cp()){
pos--;
}
return This.image();
};
this.cn=function(){
return pos<_12d-1;
};
this.cp=function(){
return pos>0;
};
this.pos=function(){
return pos+1;
};
this.length=function(){
return _12d;
};
};
_128.pasteParser={urls:[],isAdded:function(url){
return XN.array.include(this.urls,url);
},init:function(){
var This=this;
XN.event.bindPaste({element:_128.statusEditor.getEl("input"),callBack:function(_130){
This.parseShare(_130);
}});
},initShareTab:function(){
},parseShare:function(p){
var This=this;
if(!XN.string.isUrl(p)){
XN.log("\u7c98\u8d34\u7684\u5185\u5bb9\u4e0d\u662furl");
}else{
if(/renren\.com|kaixin\.com/.test(p)){
XN.log("\u4e0d\u652f\u6301\u7ad9\u5185\u5206\u4eab");
return;
}
if(_128.currentTab&&_128.currentTab.name!="shareLink"){
XN.log("\u5f53\u524d\u5df2\u7ecf\u6253\u5f00\u975e\u5206\u4eabtab\uff0c\u8fd4\u56de");
return;
}
_128.startLoading();
new XN.net.xmlhttp({url:"httpdisabled://share."+XN.env.domain+"/parse_share.do",data:"link="+encodeURIComponent(p),method:"get",onComplete:function(){
_128.stopLoading();
$("publisher_counter_wrap").hide();
},onSuccess:function(r){
This.renderTab(XN.json.parse(r.responseText));
}});
}
},renderTab:function(json){
if(json.code!==0){
_128.closeTab();
return;
}
$(_128.getEl("action_title").parentNode).show();
XN.log("publisher\u4e2d\u5206\u4eab\u89e3\u6790\u7ed3\u679c:");
XN.log(json);
json.description=json.description||"";
var tab={name:"fastShare",title:"\u5206\u4eab",className:"iShare",icon:"httpdisabled://s.xnimg.cn/a.gif",canSubmit:"fastShare"};
var html="";
if(json.type==11){
html=["<div class=\"share-publisher\">","<h5><input id=\"publisher_link_title\" onfocus=\"this.style.backgroundColor='#fff';this.style.border='1px solid #BDC7D8';\" onblur=\"this.style.backgroundColor='#FFFF99';this.style.border='1px solid #fff';\" type=\"text\" style=\"background-color:#FFFF99;font-weight:bold;color:#005EAC;border:1px solid #fff;\" onmouseover=\"this.focus();\" onmouseout=\"this.blur();\" value=\""+json.title+"\"/></h5>","<p><input id=\"publisher_fromname\" onfocus=\"this.style.border='1px solid #BDC7D8';\" onblur=\"this.style.border='1px solid #fff';\" type=\"text\" style=\"border:1px solid #fff;width:95%;\" onmouseover=\"this.focus();\" onmouseout=\"this.blur();\" value=\"\u672a\u77e5\u827a\u672f\u5bb6\"/></p>","<p class=\"description\">"+json.link+"</p>","</div>"].join("");
}else{
if(json.type==6){
json.images=json.images||[];
this.shareScroll=new _129(json.images);
html=["<div class=\"share-publisher\">","<div class=\"figure\">","<img width=\"100\" onerror=\"this.src='http://xnimg.cn/imgpro/bg/default-pic.png'\" id=\"publisher_share_thumb_img\" src=\""+(this.shareScroll.image()||"javascript:void(0);")+"\">","</div>","<div id=\"publisher_share_ar\" "+(this.shareScroll.length()==0?"style=\"margin-left:0px;\"":"")+"class=\"article\">","<h5><input id=\"publisher_link_title\" onfocus=\"this.style.backgroundColor='#fff';this.style.border='1px solid #BDC7D8';\" onblur=\"this.style.backgroundColor='#FFFF99';this.style.border='1px solid #fff';\" type=\"text\" style=\"background-color:#FFFF99;font-weight:bold;color:#005EAC;border:1px solid #fff;width:95%;\" onmouseover=\"this.focus();\" onmouseout=\"this.blur();\" value=\""+json.title+"\"/></h5>","<p class=\"description\">"+(json.description||json.link)+"</p>","<div "+((this.shareScroll.length()==0||/\.(jpg|jpeg|gif|png)$/i.test(json.link))?"style=\"display:none;\"":"")+" class=\"nav\">","<div id=\"publisher_share_inav\" class=\"fore-next no-fore "+(this.shareScroll.length()==1?"no-next":"")+"\">","<a class=\"fore\" onclick=\"var s=XN.widgets.publisher.pasteParser.shareScroll;var p = $(this.parentNode);if(s.cp()){$('publisher_share_thumb_img').src=$('publisher_share_thumb').value=s.pre();if(s.cp()){p.delClass('no-fore');}else{p.addClass('no-fore');}if(s.cn()){p.delClass('no-next');}else{p.addClass('no-next');}}$('publisher_share_thumb_num').innerHTML=s.pos();\"href=\"javascript:;\">\u4e0a\u4e00\u5f20</a>"," <a class=\"next\" href=\"javascript:;\" onclick=\"var s=XN.widgets.publisher.pasteParser.shareScroll;var p = $(this.parentNode);if(s.cn()){$('publisher_share_thumb_img').src=$('publisher_share_thumb').value=s.next();if(s.cp()){p.delClass('no-fore');}else{p.addClass('no-fore');}if(s.cn()){p.delClass('no-next');}else{p.addClass('no-next');}}$('publisher_share_thumb_num').innerHTML=s.pos();this.style.zoom=1.1;this.style.zoom=1;\">\u4e0b\u4e00\u5f20</a>","<p>&nbsp;<span id=\"publisher_share_thumb_num\">1</span>/"+this.shareScroll.length()+" <span class=\"description\">\u9009\u62e9\u4e00\u4e2a\u7f29\u7565\u56fe</span></p>","<input type=\"hidden\" id=\"publisher_share_thumb\" value=\""+this.shareScroll.image()+"\" />","</div>","<p><label><input onclick=\"var This = this;var nav = $('publisher_share_inav');var img = $('publisher_share_thumb_img');var ar =$('publisher_share_ar');setTimeout(function(){if(!This.checked){img.show();nav.show();ar.style.marginLeft='110px';}else{img.hide();nav.hide();ar.style.marginLeft='0px';}},0);\" id=\"publisher_share_nothumb\" name=\"noThumb\" value=\"true\" type=\"checkbox\"> \u4e0d\u52a0\u7f29\u7565\u56fe</label></p>","</div>","</div>","</div>"].join("");
}else{
if(json.type==10){
html=["<div class=\"share-publisher\">","<div class=\"figure\">","<img width=\"100px\" id=\"publisher_share_thumb_img\" src=\""+json.pic+"\">","</div>","<div class=\"article\" style=\"height:100px;\">","<h5><input id=\"publisher_link_title\" onfocus=\"this.style.backgroundColor='#fff';this.style.border='1px solid #BDC7D8';\" onblur=\"this.style.backgroundColor='#FFFF99';this.style.border='1px solid #fff';\" type=\"text\" style=\"background-color:#FFFF99;font-weight:bold;color:#005EAC;border:1px solid #fff;width:95%;\" onmouseover=\"this.focus();\" onmouseout=\"this.blur();\" value=\""+json.title+"\"/></h5>","<p class=\"description\">"+json.link+"</p>","</div>","</div>"].join("");
}
}
}
tab.html=html;
this.currentTab=tab;
this.postData=json;
voidTab(tab);
_128.getEl("action_close").show();
},submit:function(tab){
var This=this;
if(tab!==this.currentTab&&tab.canSubmit!="pasteShareURI"){
XN.log("\u4e0d\u662f\u7c98\u8d34\u5206\u4eabtab,\u4e0d\u6267\u884c\u5206\u4eab\u63d0\u4ea4");
return;
}
if(tab.canSubmit==="pasteShareURI"){
this.parseShare($("publisher_share_title").value);
return;
}
var data=$extend({albumid:"0",fromname:"",fromno:"0",fromuniv:"",largeurl:"",link:"",pic:"",title:"",summary:"",type:""},this.postData);
delete data.code;
data["title"]=$("publisher_link_title").value;
if(data.images){
delete data.images;
}
if($("publisher_share_thumb")&&!$("publisher_share_nothumb").checked){
data["pic"]=$("publisher_share_thumb").value;
}
if(data.type==11){
var _13a=$("publisher_fromname").value;
if(_13a!="\u672a\u77e5\u827a\u672f\u5bb6"){
data["fromname"]=_13a;
}
}
if(data.type==6){
data.summary=data.description;
delete data.description;
}
data["action"]="add";
data["auth"]="99";
var _13b=XN.string.trim(_128.statusEditor.getEl("input").value);
var regx=/@\S+\(\d+\)$/;
if(regx.test(_13b)){
_13b+=" ";
}
if(_13b==_128.statusEditor.getTip("inputDefault")){
_13b="";
}
if(_13b==data.link){
data["body"]="";
}else{
data["body"]=_13b;
}
_128.startLoading();
var _13d=$("publisher_form_ticket");
if(_13d){
this._tsc=_13d.value;
}
new XN.net.xmlhttp({url:"httpdisabled://share."+XN.env.domain+"/share/submit.do",data:"post="+encodeURIComponent(XN.json.build(data))+"&tsc="+this._tsc,onComplete:function(){
_128.stopLoading();
},onSuccess:function(r){
_128.statusEditor.getEl("input").value="";
setTimeout(function(){
_128.closeTab();
},2000);
var j=XN.json.parse(r.responseText);
if(j.status===0){
This.success("\u5206\u4eab\u6210\u529f!");
}else{
This.error(j.msg);
}
},onError:function(){
_128.closeTab();
}});
},success:function(msg){
voidTab({name:"fastShareLoading",title:"\u5206\u4eab",className:"iShare",icon:"httpdisabled://s.xnimg.cn/a.gif",html:"<div class=\"success\"><p>"+msg+"</p></div>",canSubmit:false});
},error:function(msg){
voidTab({name:"fastShareLoading",title:"\u5206\u4eab",className:"iShare",icon:"httpdisabled://s.xnimg.cn/a.gif",html:"<div class=\"fail\"><p>"+msg+"</p></div>",canSubmit:false});
},loaddisableding:function(msg){
msg=msg||"\u8bf7\u7a0d\u5019...";
voidTab({name:"fastShareLoading",title:"\u5206\u4eab",className:"iShare",icon:"httpdisabled://s.xnimg.cn/a.gif",html:"<div class=\"loaddisableding\"></div>",canSubmit:false});
}};
})(XN.widgets.publisher);
XN.widgets.publisher.addEvent("init",function(){
XN.log("publisher \u7c98\u8d34url\u89e3\u6790\u521d\u59cb\u5316\u5f00\u59cb");
this.pasteParser.init();
XN.log("publisher \u7c98\u8d34url\u89e3\u6790\u521d\u59cb\u5316\u7ed3\u675f");
});
XN.widgets.publisher.addEvent("submit",function(tab){
this.pasteParser.submit(tab);
});
(function(ns){
var ecd=function(str){
return encodeURIComponent(str);
};
var dcd=function(str){
return decodeURIComponent(str);
};
var $=xn_getEl;
var _14a={};
getReplyEditor=function(idx,_14c){
return _14a[_14c+idx];
};
delReplyEditor=function(idx,_14e){
delete _14a[_14e+idx];
};
var _ac=new XN.APP.status.updateAction();
ns.replyEditor=function(_150){
this.config=this.config||{};
this.ac=_ac;
$extend(this.config,{loaddisabledReplyURI:"/doing/getReply.do",sendReplyURI:"/doing/reply.do",delReplyURI:"/doing/deleteReply.do",maxlength:140,showMore:true,fwdThis:false});
$extend(this.config,_150);
_14a[this.getConfig("delFlag")+this.getConfig("idx")]=this;
this.xinit();
};
ns.replyEditor.prototype={_tips:{loaddisabledError:"\u52a0\u8f7d\u56de\u590d\u5931\u8d25",replyError:"\u56de\u590d\u5931\u8d25",deleteConfirm:"\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u6761\u56de\u590d?",deleteError:"\u5220\u9664\u56de\u590d\u5931\u8d25",inputTip:"\u6dfb\u52a0\u56de\u590d",sending:"\u6b63\u5728\u53d1\u9001..."},_tscCode:null,_replyData:null,_replyRequest:null,_replyCount:null,_showMore:false,_hasLoadAll:false,isProfile:function(){
return "profile"==document.body.id;
},xinit:function(){
},abortRequest:function(){
try{
this._replyRequest.abort();
}
catch(e){
}
},getTip:function(key){
return this._tips[key];
},getConfig:function(key){
if(key=="idx"){
return this.config["doingId"];
}
return this.config[String(key)];
},getEl:function(id){
if(id=="feedbody"){
return $(this.getID("feedbody"))||$(this.getID("replyfordoing"));
}
return $(this.getID(id));
},getID:function(id){
if(this.getConfig("delFlag")=="p"||/^album/.test(this.getConfig("delFlag"))){
return id+"_"+this.getConfig("delFlag")+"_"+this.getConfig("idx");
}
return id+this.getConfig("idx");
},canDel:function(){
return this._canDel;
},isHostId:function(id){
return this.getConfig("hostId")===String(id);
},replyMode:"none",replyTo:function(sid,uid,_158){
_158=dcd(_158);
this.clearReply();
this.replyMode="one";
this._replyData={sid:sid,uid:uid,uname:_158};
var _159=this.getEl("input");
var _15a=_159.value;
var role="";
if(XN.page&&XN.page.data&&XN.page.data.type==5&&XN.page.data.isAdmin&&XN.user&&XN.user.name){
role="\u3010"+XN.user.name+"\u3011";
_15a="";
}
this._replyPrefix=role+"\u56de\u590d"+XN.string.unescapeHTML(_158)+": ";
_159.value=this._replyPrefix+_15a;
this._inputHelper.focus();
this.saveInputPos();
},replyToAll:function(){
var _15c=this.getEl("input");
this.replyMode="all";
this.stripReply();
this._replyPrefix="\u56de\u590d\u5927\u5bb6: ";
_15c.value=this._replyPreifx+_15c.value;
this._inputHelper.focus();
this._replyData={toAll:true};
},stripReply:function(){
var _15d=this.getEl("input");
var v=_15d.value;
if(this._replyPrefix){
v=v.replace(this._replyPrefix,"");
}
_15d.value=v.replace(new RegExp("^\u6dfb\u52a0\u56de\u590d"),"");
},clearReply:function(){
this.replyMode="none";
this.stripReply();
this.getEl("replyall").checked=false;
this._replyData=null;
},updateReplyCounter:function(){
var c1=this.getEl("counter_m");
if(c1){
c1.innerHTML=this._replyCount;
}
var c2=this.getEl("replyCount");
if(c2){
c2.innerHTML=this._replyCount;
}
},sendReply:function(){
var This=this;
reply=this.getEl("input").value;
if(reply==this.getTip("inputTip")){
return;
}
if(XN.STRING.isBlank(reply)){
XN.DO.showError("\u8f93\u5165\u4e0d\u80fd\u4e3a\u7a7a");
return;
}
if(reply.length>this.getConfig("maxlength")){
XN.DO.showError("\u6700\u591a\u53ea\u80fd\u8f93\u5165"+this.getConfig("maxlength")+"\u4e2a\u5b57\u7b26");
return;
}
var _162={};
_162["source"]=this.getConfig("doingId");
_162["doingId"]=this.getConfig("shareId");
_162["owner"]=this.getConfig("ownerId");
_162["feedId"]=this.getConfig("feedId")||"";
if(this.getConfig("fromId")){
_162["fromId"]=this.getConfig("fromId");
}
if(this.getConfig("type")){
_162["t"]=this.getConfig("type");
}
if(this._replyData){
if(this._replyData.toAll){
_162["replayAllUser"]=1;
if(!new RegExp("^\u56de\u590d\u5927\u5bb6:").test(reply)&&reply.length+6<=this.getConfig("maxlength")){
reply="\u56de\u590d\u5927\u5bb6: "+reply;
}
}else{
_162["rpLayer"]="1";
_162["replyTo"]=this._replyData["uid"];
_162["replyName"]=this._replyData["uname"];
_162["secondaryReplyId"]=this._replyData["sid"];
}
}else{
_162["rpLayer"]="0";
}
_162["c"]=reply;
this.ajaxSendAction(_162);
},ajaxSendAction:function(_163){
var that=this;
var This=this;
this.preventDbclick();
this.fireEvent("beforePost",this._replyData,this);
this._replyRequest=new XN.NET.xmlhttp({url:this.getConfig("sendReplyURI"),data:XN.ARRAY.toQueryString(_163),onSuccess:function(r){
var str=r.responseText;
if(!str||str=="empty"){
return;
}
var rt=XN.JSON.parse(str);
if(rt.code==0){
that._onReplySuccess(rt);
}else{
if(rt.code==15){
that.resetInput();
that.simpleMode();
return;
}else{
var _169=that.getConfig("type")=="page";
if(_169){
var _16a=that.getConfig("commentType")=="blog";
var _16b=that.getConfig("commentType")=="album";
if(_16a||_16b){
that._onReplyError(rt.msg||(XN.APP.status.getError(rt.code)||"\u670d\u52a1\u5668\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01"));
return;
}
}
that._onReplyError(XN.APP.status.getError(rt.code)||rt.msg);
}
}
if(This.fwdThis){
This.fwdThisStatus(_163["c"]);
}
},onError:function(){
that._onReplyError(that.getTip("replyError"));
}});
},fwdThisStatus:function(_16c){
var This=this;
var _16e=this.getConfig("doingId");
var _16f=this.config["ownerid"]||this.getConfig("ownerId");
var type="status";
fwdmgr.fowardThis(_16e,_16f,type,function(r){
var rt=XN.json.parse(r.responseText);
var _173="\u8f6c\u81ea";
if(rt.fwdRootStatus===undefined){
_173+=rt.userName;
}else{
_173+=(rt.userName+": "+rt.statusContent);
}
_173=_16c+_173;
if(_173.length>140){
_173=_173.slice(0,137)+"...";
}
XN.APP.status.setForwardTrue(_16e,_16f,type);
setTimeout(function(){
This.ac.update(_173);
},3000);
});
},disableSubmit:function(){
var el=this.getEl("submit");
el.addClass("gray");
el.disabled=true;
},enableSubmit:function(){
var el=this.getEl("submit");
el.delClass("gray");
el.disabled=false;
},_onReplyError:function(msg){
this.resetInput();
this.simpleMode();
XN.DO.showError(msg);
},_onReplySuccess:function(v){
var This=this;
if(XN.jebe&&XN.jebe.refreshAd){
try{
XN.jebe.refreshAd(5);
}
catch(e){
}
}
this.clearReply();
this._replyCount++;
this.updateReplyCounter();
this.resetInput();
this.simpleMode();
this.getEl("input").blur();
this.getEl("input").value=this.getTip("inputTip");
this.getEl("input").style.color="#888";
var div=$element("div");
div.className="statuscmtitem";
div.id="status_reply_"+v.id;
var html=[];
html.push("<span class=\"share-n-hide float-right\"><a class=\"x-to-hide\" href=\"javascript:;\" onclick=\"getReplyEditor('"+This.getConfig("idx")+"','"+this.getConfig("delFlag")+"').del('"+v.replyerId+"','"+v.id+"');\"> </a></span>");
html.push("<a class=\"minfriendpic\" namecard=\""+v.replyerId+"\" style=\"background-image: url("+v.replyerHead+")\" href=\"httpdisabled://www."+XN.env.domain+"/profile.do?id="+v.replyerId+"\" target=\"_blank\"></a>");
html.push("<p class=\"replybody\">");
html.push("<a class=\"replyername\" namecard=\""+v.replyerId+"\" href=\"httpdisabled://www."+XN.env.domain+"/profile.do?id="+v.replyerId+"\" target=\"_blank\">"+v.replyerName+"</a><span class=\"time\">"+v.replyTime+"</span><br/>");
html.push("<span class=\"replycontent\">"+v.replyContent+"</span>");
html.push("</p>");
div.innerHTML=html.join("");
this.getEl("replyList").show();
this.getEl("replyList").appendChild(div);
this.showMore("s");
},del:function(uid,sid){
var This=this;
function request(){
var p={};
p["replyId"]=sid;
p["source"]=This.getConfig("doingId");
p["doingId"]=This.getConfig("doingId");
p["owner"]=This.getConfig("ownerId");
p["t"]=This.getConfig("type");
p["feedId"]=This.getConfig("feedId");
p["createId"]=uid;
var ban=$("banReply");
if(ban){
p["ban"]=ban.checked?1:0;
}
new XN.NET.xmlhttp({url:This.getConfig("delReplyURI"),data:XN.ARRAY.toQueryString(p),onSuccess:function(){
This._onDeleteSuccess(sid);
},onError:function(){
XN.DO.showError(This.getTip("deleteError"));
}});
}
var _180=this.getTip("deleteConfirm");
if(XN.page&&XN.page.data&&XN.page.data.type==1&&XN.page.data.isAdmin){
_180+="<label style=\"display:block;margin-top:5px;\"><input id=\"banReply\" type=\"checkbox\" value=\"1\"> \u540c\u65f6\u5c06\u8be5\u7528\u6237\u52a0\u5165\u9ed1\u540d\u5355</label>";
}
XN.DO.confirm({message:_180,callBack:function(r){
if(r){
request();
}
}});
},_onDeleteSuccess:function(id){
this._replyCount--;
this.updateReplyCounter();
$("status_reply_"+id).remove();
if(!this._showMore){
this.showMore();
}
},loaddisabled:function(more){
var This=this;
if(more&&this.getEl("show_more_link")){
this.getEl("show_more_link").innerHTML="\u52a0\u8f7d\u4e2d&nbsp;<img src=\""+XN.env.staticRoot+"imgpro/bg/indicator_blue_small.gif\" />";
this.getEl("show_more_link").show();
}
var _185={};
_185["doingId"]=this.getConfig("doingId");
_185["source"]=this.getConfig("doingId");
_185["owner"]=this.getConfig("ownerId");
if(this.getConfig("type")){
_185["t"]=this.getConfig("type");
}
new XN.NET.xmlhttp({data:XN.array.toQueryString(_185),url:this.getConfig("loaddisabledReplyURI"),onComplete:function(){
if(more&&This.getEl("show_more_link")){
This.getEl("show_more_link").hide();
}
},onSuccess:function(r){
try{
var rt=XN.JSON.parse(r.responseText);
if(rt.code!==0){
XN.DO.showError(XN.APP.status.getError(rt.code)||rt.msg||This.getTip("loaddisabledError"));
return;
}
}
catch(e){
XN.DO.showError(This.getTip("loaddisabledError"));
return;
}
if(!This._replyCount){
This._replyCount=rt.replyList.length;
}
This._canDel=This.isHostId(rt.ownerid);
if(XN.user&&XN.user.auth&&parseInt(XN.user.auth,0)>=15){
XN.log("\u4f60\u6709\u6743\u9650\u5220\u9664\u522b\u4eba\u7684\u72b6\u6001,\u8fd9\u4e0b\u725bx\u4e86");
This._canDel=true;
}
if(more){
This._hasLoadAll=true;
This.renderReplys(rt.replyList,null,rt);
This.showMore();
}else{
This._updateUIonLoadReply(rt.replyList,null,null,null,null,null,rt);
}
},onError:function(){
XN.DO.showError(This.getTip("loaddisabledError"));
}});
},loaddisabledMore:function(){
this.loaddisabled(true);
},loaddisabledJSON:function(json){
this.loaddisabledFromJSON=true;
this._replyCount=json.length;
this._canDel=this.isHostId(json.ownerid);
if(json.etype=="share_edm"){
this._canDel=false;
}
if(XN.user&&XN.user.isAdmin){
this._canDel=true;
}
this.config["ownerId"]=json.ownerid;
if(json.isOpenReply){
this._updateUIonLoadReply(json.replyList,parseInt(json.digged),parseInt(json.userDigged),json.type,json.ownerid,json.etype,json);
this.show("t");
}
},showMore:function(flag){
this._showMore=true;
if(!this.getEl("show_more_link")){
return;
}
this.getEl("show_more_link").hide();
if(this.loaddisabledFromJSON&&!this._hasLoadAll){
this.loaddisabledMore();
}
this.getEl("replyList").delClass("nomore");
this.getEl("replyList").addClass("blockmore");
this.fireEvent("replyListOpened");
},insertCloseTag:function(){
if(this._showed){
return;
}
var _18a=this.getEl("replyKey");
_18a.innerHTML="\u6536\u8d77\u56de\u590d";
var _t=$element("span");
_t.className="seperator";
_t.innerHTML="|";
XN.dom.insertAfter(_t,_18a);
this._showed=true;
},hideMore:function(){
this._showMore=false;
if(!this.getEl("show_more_link")){
return;
}
this.getEl("show_more_link").show();
this.getEl("replyList").addClass("nomore");
this.getEl("replyList").delClass("blockmore");
},_updateUIonLoadReply:function(obj,_18d,_18e,type,_190,_191,json){
var This=this;
var html=[],type=type||"";
html.push("<div class=\"min-cmtbox statustab\">");
html.push("<div class=\"mincmt-body\">");
var _191=_191||"normal";
var id=parseInt(this.getID("m").replace("m",""));
var _196=this.getConfig("ownerId");
XN.APP.status.fireEvent("ILikeInit",html,type,id,_196,_18d,_18e,_191);
html.push("<div class=\"statuscmtlist nomore\">");
html.push("<div style=\"display:none;\" id=\""+this.getID("replyList")+"\">");
html.push("</div>");
html.push("<div id=\""+this.getID("reply_editor")+"\" class=\"statuscmtitem reply-adding\">");
html.push("<div>");
if(!this.isProfile()){
html.push("<span id=\""+this.getID("user_head")+"\" style=\"display:none;background-image: url("+XN.user.tinyPic+");\" class=\"minfriendpic\"></span>");
}
html.push("<textarea id=\""+this.getID("input")+"\" stats=\"NF_Re\" class=\"input-text archive-inp\" type=\"text\" value=\"\" style=\"overflow-y:auto;height:16px;\" cols=\"30\" rows=\"1\"></textarea>");
html.push("</div>");
var _197="";
if(this.config["feedType"]&&this.emoListID[this.config["feedType"]]){
_197="<a href=\"#emotion\" onclick=\"return false;\" id=\""+this.getID("addEmoBtn")+"\" class=\"newsfeed-emo\">\u8868\u60c5</a>";
}
var _198="";
if(this.config["feedType"]&&(this.config["feedType"]=="status")){
_198=["<span class=\"fwdthisc\" id=\""+this.getID("fwdthisc")+"\" >","<input id=\""+this.getID("fwdthis")+"\" type=\"checkbox\" />","<label for=\""+this.getID("fwdthis")+"\">\u540c\u65f6\u8f6c\u53d1\u6b64\u72b6\u6001</label>","</span>"].join("");
}
html.push(["<div class=\"reply-nav clearfix\" style=\"display:none;\" id=\""+this.getID("buttons")+"\">","<span class=\"replyAll clearfix\">",_197,_198,"<input style=\"display:none;\" class=\"input-button\" id=\""+this.getID("submit")+"\" type=\"submit\" value=\"\u56de\u590d\" />&nbsp;","<span style=\"display:none;\" id=\""+this.getID("word_counter")+"\" class=\"mincmtcount\">0/70</span>","<span style=\"display:none;\" id=\""+this.getID("replyallc")+"\">","<input type=\"checkbox\" name=\""+this.getID("replyall")+"\" id=\""+this.getID("replyall")+"\"/>","<label for=\""+this.getID("replyall")+"\">\u56de\u590d\u6240\u6709\u4eba</label>","</span>","</span>","</div>"].join(""));
html.push("</div>");
html.push("</div>");
html.push("</div>");
html.push("</div>");
try{
this.getEl("feedbody").innerHTML=html.join("");
}
catch(e){
XN.log(e);
}
this.renderReplys(obj,true,json);
this.attachEvent(type);
if(this.getConfig("showMore")&&!this.loaddisabledFromJSON){
this.showMore();
}else{
this.hideMore();
}
this.show(this.getConfig("showMore")?"advance":"simple");
},renderReplys:function(obj,init,json){
try{
var This=this;
var _19d=obj.length;
var _19e=This.getConfig("type")=="page";
var html=[];
var _1a0=[];
function addSpeClass(i){
if(i>0&&i<_19d-1){
return "more";
}
return "";
}
XN.array.each(obj,function(i,v){
if(i==0&&This._replyCount>2){
var _1a4="\u663e\u793a\u5168\u90e8";
if(This._replyCount>=100){
if(This.getConfig("type")=="page"){
_1a4="\u663e\u793a"+This._replyCount+"\u6761\u4e2d\u7684\u6700\u65b0";
}else{
_1a4="\u663e\u793a\u6700\u65b0";
}
}
var tiao="<span id=\""+This.getID("counter_m")+"\">"+Math.min(This._replyCount,100)+"</span>\u6761";
if(This.getConfig("feedType")=="share_edm"&&This.replyCount<100){
tiao="";
}
_1a0.push("<div id=\""+This.getID("show_more_link")+"\" class=\"statuscmtitem showmorereply\">");
_1a0.push("<a href=\"javascript:;\" onclick=\"getReplyEditor('"+This.getConfig("idx")+"','"+This.getConfig("delFlag")+"').showMore();\">"+_1a4+tiao+"</a>");
_1a0.push("</div>");
if(json.order=="up"){
html.push(_1a0.join(""));
_1a0=[];
}
}
var _1a6="httpdisabled://admin.renren.com/admin/newuserreport.do?type=31&owner="+This.getConfig("ownerId")+"&contentId="+v.id+"&userId="+v.ubid+"&pid="+This.getConfig("doingId")+"&origURL="+location.href;
var _1a7="<span class=\"reply-report\"><a href=\""+_1a6+"\">\u4e3e\u62a5</a></span>";
if(!_19e){
_1a7="";
}
_1a7="";
html.push("<div id=\"status_reply_"+v.id+"\" class=\"statuscmtitem "+addSpeClass(i)+"\">");
if(json.canDel||This.isHostId(v.ubid)||This.canDel()){
html.push("<span class=\"share-n-hide float-right\"><a class=\"x-to-hide\" href=\"javascript:;\" onclick=\"getReplyEditor('"+This.getConfig("idx")+"','"+This.getConfig("delFlag")+"').del('"+v.ubid+"','"+v.id+"');\"> </a></span>");
}
if(init&&XN.string.startsWith(window.location.href+"","httpdisabled://home")){
html.push("<a style=\"float:left;\" target=\"_blank\" href=\"httpdisabled://www."+XN.env.domain+"/profile.do?id="+v.ubid+"&ref="+XN.app.status.getProfileRef()+"\"><img needclip=\"1\" width=\"30\" height=\"30\" src=\"httpdisabled://s.xnimg.cn/a.gif\" onloaddisabled=\"feed_img_delay_loaddisabled(this, 's');\" lala=\""+v.replyer_tinyurl+"\" /></a>");
}else{
html.push("<a class=\"minfriendpic\""+(_19e?"":" namecard=\""+v.ubid+"\"")+" target=\"_blank\" style=\"background-image: url("+v.replyer_tinyurl+")\" href=\"httpdisabled://www."+XN.env.domain+"/profile.do?id="+v.ubid+"&ref="+XN.app.status.getProfileRef()+"\"></a>");
}
html.push("<p class=\"replybody\">");
html.push("<a class=\"replyername\" "+(_19e?"":" namecard=\""+v.ubid+"\"")+"target=\"_blank\" href=\"httpdisabled://www."+XN.env.domain+"/profile.do?id="+v.ubid+"&ref="+XN.app.status.getProfileRef()+"\">"+v.ubname+"</a><span class=\"time\">"+v.replyTime+"</span>"+_1a7+"<br/>");
var _1a8="<a href=\"javascript:;\" onclick=\"getReplyEditor('"+This.getConfig("idx")+"','"+This.getConfig("delFlag")+"').replyTo( '"+v.id+"','"+v.ubid+"','"+ecd(v.ubname)+"');\">\u56de\u590d</a>";
html.push("<span class=\"replycontent\">"+v.replyContent+"</span>");
var _1a9=This.isHostId(v.ubid);
var _1aa=This.getConfig("type")=="page";
var _1ab=This.getConfig("type")=="love";
var _1ac=XN.page&&XN.page.data&&XN.page.data.isAdmin;
var _1ad=This.getConfig("feedType")=="edm";
if((!_1a9&&!_1ad&&!_1aa)||_1ab){
html.push(_1a8);
}
html.push("</p>");
html.push("</div>");
if(i==0&&This._replyCount>2){
html.push(_1a0.join(""));
}
});
if(obj.length){
this.getEl("replyList").show();
}
try{
this.getEl("replyList").show();
this.getEl("replyList").innerHTML=html.join("");
}
catch(e){
}
if(XN.browser.IE&&document.body.id=="profile"){
XN.ui.refreshAll();
}
}
catch(e){
}
},attachEvent:function(){
var This=this;
try{
This.getEl("input").addEvent("focus",function(){
if(!This.getEl("input").value||This.getEl("input").value==This.getTip("inputTip")){
This.resetInput();
}
This.editMode();
});
this.getEl("input").addEvent("blur",function(){
if(XN.page&&XN.page.data&&XN.page.data.isAdmin&&XN.user&&XN.user.name&&This.getEl("input").value==("\u3010"+XN.user.name+"\u3011\uff1a")){
This.getEl("input").value=This.getTip("inputTip");
This.getEl("input").style.color="#888888";
}
var v=This.getEl("input").value;
if(v!==""&&v!=This.getTip("inputTip")){
if(ns._emoFlyer){
This.hideEmoFlyer();
}
}else{
This.simpleMode();
}
});
this.getEl("submit").addEvent("click",function(){
var v=This.getEl("input").value;
if(v===""||v==This.getTip("inputTip")){
return;
}
This.sendReply();
});
this._inputHelper=new XN.form.help(this.getEl("input")).onEsc(function(){
This.hide();
if(ns._emoFlyer){
This.hideEmoFlyer();
}
}).countSize(this.getID("word_counter"),this.getConfig("maxlength")).setDefaultValue(this.getTip("inputTip"));
XN.EVENT.addEvent(this.getEl("input"),"keydown",function(e){
e=e||window.event;
if(e.keyCode==13){
var _1b2=This.getEl("input");
if(_1b2.mention&&_1b2.mention.selectorShow&&!_1b2.mention.noMatch){
return;
}
This.sendReply();
}
});
if(this.getConfig("feedType")=="blog"||this.getConfig("feedType")=="share"||this.getConfig("feedType")=="photo"||this.getConfig("feedType")=="album"||this.getConfig("feedType")=="status"){
Mention.init([{obj:this.getEl("input"),ugcId:this.getConfig("doingId"),ugcType:this.getConfig("feedType"),ownerId:this.getConfig("ownerid")}]);
}
XN.event.addEvent(this.getEl("input"),"keyup",function(e){
This.saveInputPos();
});
XN.event.addEvent(this.getEl("input"),"mouseup",function(e){
This.saveInputPos();
});
if(!XN.browser.WebKit){
XN.event.addEvent(this.getEl("input"),"focus",function(e){
This.saveInputPos();
});
}
XN.event.addEvent(this.getEl("replyall"),"click",function(e){
if(This.getEl("replyall").checked){
This.replyToAll();
}else{
This.clearReply();
}
});
if(this.getEl("fwdthis")){
XN.event.addEvent(this.getEl("fwdthis"),"click",function(e){
This._inputHelper.focus();
if(This.getEl("fwdthis").checked){
This.fwdThis=true;
}else{
This.fwdThis=false;
}
});
}
if(this.config["feedType"]&&this.emoListID[this.config["feedType"]]){
var This=this,_1b8=This.config["feedType"];
XN.event.addEvent(this.getEl("addEmoBtn"),"click",function(e){
if(_1b8=="status"||_1b8=="checkin"||_1b8=="app"||_1b8=="mini-status"){
This._inputHelper.focus();
if(This.config["feedType"]=="app"){
if(!XN.app.status.emoJsonForNewsFeedCommon){
This.getNewsFeedEmoJsonCommon(function(){
This.showEmoFlyer();
});
}else{
This.showEmoFlyer();
}
}else{
if(!XN.app.status.emoJsonForNewsFeedStatus){
This.getNewsFeedEmoJsonStatus(function(){
This.showEmoFlyer();
});
}else{
This.showEmoFlyer();
}
}
}else{
var pos=This._inputHelper.cursorPos;
This._inputHelper.focus(pos.start);
if(!This._emotions){
XN.loaddisabledFiles(["httpdisabled://s.xnimg.cn/jspro/xn.ui.emoticons.js","httpdisabled://s.xnimg.cn/csspro/module/minieditor.css"],function(){
This._emotions=XN.ui.emoticons({input:This.getEl("input"),onShowEmoPop:function(){
This._inputHelper.focus(this.pos.start);
},onEmoTabSwitch:function(){
This._inputHelper.focus(this.pos.start);
},onEmoNotVip:function(){
This._inputHelper.focus(this.pos.start);
},onEmoTabClick:function(){
This._inputHelper.focus(this.pos.start);
}});
$extend(This._emotions.pos,{start:pos.start,end:pos.end});
This._emotions.showEmoPop(e||window.event);
});
}else{
$extend(This._emotions.pos,{start:pos.start,end:pos.end});
This._emotions.showEmoPop(e||window.event);
}
}
});
}
}
catch(e){
}
},emoListID:{"status":1,"blog":100,"photo":100,"album":100,"share":100,"app":2,"checkin":1,"mini-status":1,"mini-blog":100,"mini-photo":100,"mini-album":100,"mini-share":100},getNewsFeedEmoJsonCommon:function(fn){
var This=this;
var url="httpdisabled://status."+XN.env.domain+"/getubblist.do?type=9";
new XN.net.xmlhttp({url:url,method:"GET",onSuccess:function(r){
XN.app.status.emoJsonForNewsFeedCommon=r.responseText;
if(fn){
fn.call(This);
}
},onError:XN.func.empty});
},getNewsFeedEmoJsonStatus:function(fn){
var This=this;
var url="httpdisabled://status."+XN.env.domain+"/getdoingubblist.do";
new XN.net.xmlhttp({url:url,method:"GET",onSuccess:function(r){
XN.app.status.emoJsonForNewsFeedStatus=r.responseText;
if(fn){
fn.call(This);
}
},onError:XN.func.empty});
},getEmoList:function(){
var _1c3="",type=this.config["feedType"];
if(this.emoListID[type]==1){
if($("status_emotions")){
_1c3="<ul class=\"emotion\">";
_1c3+=$("status_emotions").innerHTML;
_1c3+="</ul>";
}else{
if($("home")){
XN.widgets.publisher.statusEditor.loaddisabledRealEmotion();
_1c3=$("publisher_emotion").innerHTML;
}else{
if(!XN.app.status.emoJsonForNewsFeedStatus){
return false;
}
var _emo=XN.json.parse(XN.app.status.emoJsonForNewsFeedStatus).ubbList;
_1c3="<ul class=\"emotion\">";
for(var i=0;i<_emo.length;i++){
_1c3+="<li><a href=\"javascript:;\"><img src=\"httpdisabled://a.xnimg.cn"+_emo[i].src+"\" title=\""+_emo[i].alt+"\" title=\""+_emo[i].alt+"\" emotion=\""+_emo[i].ubb+"\"></a>";
}
_1c3+="</ul>";
}
}
}else{
if(this.emoListID[type]==2){
if(!XN.app.status.emoJsonForNewsFeedCommon){
return false;
}
var _emo=XN.json.parse(XN.app.status.emoJsonForNewsFeedCommon).ubbList;
_1c3="<ul class=\"emotion\">";
for(var i=0;i<_emo.length;i++){
if(_emo[i].types==0){
continue;
}
_1c3+="<li><a href=\"javascript:;\"><img src=\"httpdisabled://a.xnimg.cn"+_emo[i].src+"\" title=\""+_emo[i].alt+"\" title=\""+_emo[i].alt+"\" emotion=\""+_emo[i].ubb+"\"></a>";
}
_1c3+="</ul>";
}
}
return {"id":this.emoListID[type],"list":_1c3};
},showEmoFlyer:function(){
var _1c7=this.getEl("input"),This=this,type=this.config["feedType"];
this._inputHelper.focus();
if(!ns._emoFlyer){
ns._emoFlyer={};
}
var _1ca=this.getEmoList(type);
if(!_1ca){
XN.Do.showError("\u83b7\u53d6\u8868\u60c5\u5931\u8d25\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5","\u51fa\u9519\u4e86",3);
return;
}
if(!ns._emoFlyer[_1ca.id]){
ns._emoFlyer[_1ca.id]=new XN.ui.fixPositionElement({tagName:"div",alignType:"3-2",offsetY:-1});
ns._emoFlyer[_1ca.id].setContent(_1ca.list);
ns._emoFlyer[_1ca.id].container.className="newsfeed-reply-emotions";
XN.event.addEvent(ns._emoFlyer[_1ca.id].container,"click",function(e){
XN.event.stop(e||window.event);
});
}
ns._emoFlyer[_1ca.id].alignWith=_1c7;
ns._emoFlyer[_1ca.id].refresh();
ns._emoFlyer[_1ca.id].show();
this.clearEmoParseHook();
ns._parseEmoTmpFunc=function(e){
This._parseEmotion(e,This);
};
XN.event.addEvent(ns._emoFlyer[_1ca.id].container,"mousedown",ns._parseEmoTmpFunc);
},hideEmoFlyer:function(){
for(p in ns._emoFlyer){
try{
ns._emoFlyer[p].hide();
}
catch(e){
}
}
},clearEmoParseHook:function(){
if(!ns._emoFlyer||!ns._parseEmoTmpFunc){
return;
}
for(p in ns._emoFlyer){
try{
XN.event.delEvent(ns._emoFlyer[p].container,"mousedown",ns._parseEmoTmpFunc);
}
catch(e){
}
}
},_parseEmotion:function(e,This){
XN.event.stop(e||window.event);
var img=XN.event.element(e);
if(img.tagName.toLowerCase()=="li"||img.tagName.toLowerCase()=="a"){
img=img.getElementsByTagName("img")[0];
}
if(img&&img.tagName.toLowerCase()=="img"){
var pos=This._inputHelper.cursorPos,_1d1=This.getEl("input"),code=img.getAttribute("emotion");
_1d1.value=_1d1.value.slice(0,pos.start)+code+_1d1.value.slice(pos.end);
This.getEl("input").blur();
if(XN.browser.IE){
setTimeout(function(){
This._inputHelper.focus(pos.start+code.length);
This.saveInputPos();
},0);
}else{
This._inputHelper.focus(pos.start+code.length);
This.saveInputPos();
}
}
},resetInput:function(){
this.getEl("input").disabled=false;
if(XN.page&&XN.page.data&&XN.page.data.type==5&&XN.page.data.isAdmin&&XN.user&&XN.user.name){
var _1d3=this.getEl("input");
_1d3.value="\u3010"+XN.user.name+"\u3011\uff1a";
if(XN.browser.IE){
var r=_1d3.createTextRange();
r.collapse(false);
r.select();
}
}else{
this.getEl("input").value="";
}
this.resetInputCounter();
},saveInputPos:function(){
this._inputHelper.cursorPos=this._inputHelper.cursorPosition();
},resetInputCounter:function(){
var _1d5=this.getEl("word_counter");
_1d5.innerHTML=this.getEl("input").value.length+"/"+this.getConfig("maxlength");
_1d5.delClass("full");
},_modeTimer:null,_firstFocus:true,editMode:function(){
if(this._modeTimer){
clearTimeout(this._modeTimer);
this._modeTimer=null;
}
if(!this.isProfile()){
this.getEl("reply_editor").addClass("actived");
this.getEl("user_head").show();
}
this.getEl("input").disabled=false;
this.getEl("input").style.color="#333";
this.getEl("input").style.height="32px";
this.getEl("input").style.border="1px solid #5D74A2";
this.enableSubmit();
this.getEl("submit").value="\u56de\u590d";
this.getEl("submit").show();
this.getEl("word_counter").show();
if(this._replyCount&&!this.isProfile()&&XN.config.status.enableReplyAll){
this.getEl("replyallc").show();
}
this.resetInputCounter();
this.getEl("buttons").show();
},simpleMode:function(){
var This=this;
if(this._modeTimer){
clearTimeout(this._modeTimer);
this._modeTimer=null;
}
this._modeTimer=setTimeout(function(){
if(!This.getEl("input")){
return;
}
This.getEl("buttons").hide();
if(!This.isProfile()){
This.getEl("reply_editor").delClass("actived");
This.getEl("user_head").hide();
}
This.getEl("input").disabled=false;
This.getEl("input").style.height="16px";
This.getEl("submit").hide();
This.getEl("word_counter").hide();
This.getEl("input").style.border="1px solid #BDC7D8";
if(XN.config.status.enableReplyAll){
This.getEl("replyallc").hide();
}
},200);
if(ns._emoFlyer){
this.hideEmoFlyer();
}
},preventDbclick:function(){
this.disableSubmit();
this.getEl("submit").value=this.getTip("sending");
this.getEl("input").disabled=true;
},changeMode:function(){
if(this.view=="reply"){
this.hide();
}else{
this.show();
}
},show:function(mode){
try{
mode=mode||"advance";
this.view="reply";
this._replyData=null;
this.getEl("feedbody").show();
if(this.getEl("replyKey")){
this.getEl("replyKey").innerHTML="\u6536\u8d77\u56de\u590d";
}
if(mode=="advance"){
this.getEl("input").focus();
this.getEl("input").style.color="#333";
this.showMore();
this.saveInputPos();
}
}
catch(e){
}
},hide:function(){
var _1d8;
if(this._replyCount==0){
_1d8="";
}else{
if(this._replyCount>=100&&this.getConfig("type")!=="page"){
_1d8="100+";
}else{
_1d8=this._replyCount;
}
}
if(_1d8){
_1d8="("+_1d8+")";
}else{
_1d8="";
}
this.view="close";
this.resetInput();
this.getEl("feedbody").hide();
this.getEl("replyKey").innerHTML="<span id=\""+this.getID("replyCount")+"\"></span>\u56de\u590d"+_1d8;
this.clearReply();
}};
XN.EVENT.enableCustomEvent(ns.replyEditor.prototype);
})(XN.APP.status);
getReplyOfDoingFromJSON=function(json,_1da,_1db,_1dc,type,_1de,_1df,_1e0,_1e1,_1e2){
var func=XN.browser.IE6?XN.dom.ready:function(s){
s();
};
func(function(){
json.length=parseInt(_1dc,0);
if(isNaN(json.length)){
json.length=0;
}
var _1e5=json.type||"";
var _1e6={ownerid:json.ownerid,doingId:_1da,hostId:_1db,delFlag:_1df||"f",type:type,showMore:false,fromId:_1de,shareId:_1e2,feedType:_1e5,feedId:_1e1};
var fin=json.fin||"";
var _1e8=json.type||"";
if(XN.app.status.crossDomain){
$extend(_1e6,{loaddisabledReplyURI:"httpdisabled://status."+XN.env.domain+"/feedcommentretrieve.do",sendReplyURI:"httpdisabled://status."+XN.env.domain+"/feedcommentreply.do?fin="+fin+"&ft="+_1e8+"&ff_id="+json.ownerid,delReplyURI:"httpdisabled://status."+XN.env.domain+"/feedcommentdelete.do"});
}
json.isOpenReply=_1e0===false?false:true;
new XN.app.status.replyEditor(_1e6).loaddisabledJSON(json);
});
};
setCursor2Start=function(_1e9){
if(_1e9.setSelectionRange){
_1e9.setSelectionRange(0,0);
}else{
if(_1e9.createTextRange){
var _1ea=_1e9.createTextRange();
_1ea.collapse(true);
_1ea.moveEnd("character",0);
_1ea.moveStart("character",0);
_1ea.select();
}
}
try{
_1e9.focus();
}
catch(e){
}
};
forwardDoing=function(_1eb,_1ec,type){
fwdmgr.fowardDoing(_1eb,_1ec);
};
getReplyOfTheDoing=function(_1ee,_1ef,_1f0,_1f1,auto,type,_1f4,_1f5,_1f6){
var func=XN.browser.IE6?XN.dom.ready:function(s){
s();
};
func(function(){
try{
XN.app.status.notify.del(_1ee);
}
catch(e){
}
var ed=getReplyEditor(_1ee,_1f1);
if(ed){
try{
var ce=ed.getEl("input").value;
ed.changeMode();
return;
}
catch(e){
}
}
var _1fb=!(auto||false);
if(!_1f5){
_1f5="";
}
if($("pageStatus")){
_1f5="status";
}
XN.log("feedtype:"+_1f5);
var _1fc={doingId:_1ee,shareId:_1f6,hostId:_1f0,delFlag:_1f1,showMore:_1fb,ownerId:_1ef,type:type,fromId:_1f4,feedType:_1f5};
if(XN.app.status.crossDomain){
$extend(_1fc,{loaddisabledReplyURI:"httpdisabled://status."+XN.env.domain+"/feedcommentretrieve.do",sendReplyURI:"httpdisabled://status."+XN.env.domain+"/feedcommentreply.do",delReplyURI:"httpdisabled://status."+XN.env.domain+"/feedcommentdelete.do"});
}
new XN.app.status.replyEditor(_1fc).loaddisabled();
});
};
getReplyOfDoingFromJSON4Page=function(json,_1fe,_1ff,_200,_201,_202,_203){
json.length=parseInt(_200,0);
if(isNaN(json.length)){
json.length=0;
}
var _204={doingId:_1fe,hostId:_1ff,delFlag:"f",type:"page",showMore:false};
if((XN.page&&XN.page.data&&XN.page.data.type==5)||_202){
_204.type="love";
}
if(_202){
$extend(_204,{loaddisabledReplyURI:"httpdisabled://lover."+XN.env.domain+"/doing/replyList",sendReplyURI:"httpdisabled://lover."+XN.env.domain+"/doing/reply",delReplyURI:"httpdisabled://lover."+XN.env.domain+"/doing/delReply"});
}else{
$extend(_204,{loaddisabledReplyURI:"httpdisabled://"+getWWWRoot(_203)+"/doing/replyList",sendReplyURI:"httpdisabled://"+getWWWRoot(_203)+"/doing/reply",delReplyURI:"httpdisabled://"+getWWWRoot(_203)+"/doing/delReply"});
}
json.isOpenReply=_201===false?false:true;
new XN.app.status.replyEditor(_204).loaddisabledJSON(json);
};
getReplyOfDoingFromJSON4Page2=function(json,_206,_207,_208,_209,type){
var _20b=function(type){
switch(type){
case "blog":
return {loaddisabledReplyURI:"httpdisabled://page."+XN.env.domain+"/"+json.ownerid+"/note/replyList",sendReplyURI:"httpdisabled://page."+XN.env.domain+"/"+json.ownerid+"/note/reply",delReplyURI:"httpdisabled://page."+XN.env.domain+"/"+json.ownerid+"/note/replyDelete"};
case "album":
return {loaddisabledReplyURI:"httpdisabled://page."+XN.env.domain+"/"+json.ownerid+"/album/replyList",sendReplyURI:"httpdisabled://page."+XN.env.domain+"/"+json.ownerid+"/album/reply",delReplyURI:"httpdisabled://page."+XN.env.domain+"/"+json.ownerid+"/album/replyDelete"};
}
};
json.length=parseInt(_208,0);
if(isNaN(json.length)){
json.length=0;
}
var _20d={doingId:_206,hostId:_207,delFlag:"f",type:"page",commentType:type,feedType:"page",showMore:false};
$extend(_20d,_20b(type));
json.isOpenReply=_209===false?false:true;
new XN.app.status.replyEditor(_20d).loaddisabledJSON(json);
};
getReplyOfTheDoing4Page=function(_20e,_20f,_210,_211,auto,_213){
var ed=getReplyEditor(_20e,_211);
if(ed){
try{
ed.changeMode();
return;
}
catch(e){
}
}
var _215=!(auto||false);
var _216={doingId:_20e,hostId:_210,delFlag:_211,showMore:_215,type:"page",ownerId:_20f};
$extend(_216,{loaddisabledReplyURI:"httpdisabled://"+getWWWRoot(_213)+"/doing/replyList",sendReplyURI:"httpdisabled://"+getWWWRoot(_213)+"/doing/reply",delReplyURI:"httpdisabled://"+getWWWRoot(_213)+"/doing/delReply"});
new XN.app.status.replyEditor(_216).loaddisabled();
};
XN.app.status.replyEditor4Qun=function(_217){
XN.app.status.replyEditor.call(this,_217);
};
$extend(XN.app.status.replyEditor4Qun.prototype,XN.app.status.replyEditor.prototype);
$extend(XN.app.status.replyEditor4Qun.prototype,{loaddisabled:function(more){
var This=this;
if(more&&this.getEl("show_more_link")){
this.getEl("show_more_link").innerHTML="\u52a0\u8f7d\u4e2d&nbsp;<img src=\""+XN.env.staticRoot+"imgpro/bg/indicator_blue_small.gif\" />";
this.getEl("show_more_link").show();
}
var _21a={};
_21a["doingId"]=this.getConfig("doingId");
_21a["source"]=this.getConfig("doingId");
_21a["owner"]=this.getConfig("ownerId");
if(this.getConfig("type")){
_21a["t"]=this.getConfig("type");
}
new XN.NET.xmlhttp({data:XN.array.toQueryString(_21a),url:this.getConfig("loaddisabledReplyURI"),method:"GET",onComplete:function(){
if(more&&This.getEl("show_more_link")){
This.getEl("show_more_link").hide();
}
},onSuccess:function(r){
try{
var _rt=XN.JSON.parse(r.responseText);
if(_rt.code!==0){
XN.DO.showError(_rt.msg||This.getTip("loaddisabledError"));
return;
}
}
catch(e){
XN.DO.showError(This.getTip("loaddisabledError"));
return;
}
var rt=This.reformatListData(_rt);
if(!This._replyCount){
This._replyCount=rt.replyList.length;
}
if(XN.user&&XN.user.auth&&parseInt(XN.user.auth,0)>=15){
XN.log("\u4f60\u6709\u6743\u9650\u5220\u9664\u522b\u4eba\u7684\u72b6\u6001,\u8fd9\u4e0b\u725bx\u4e86");
This._canDel=true;
}
if(more){
This._hasLoadAll=true;
This.renderReplys(rt.replyList,null,rt);
This.showMore();
}else{
This._updateUIonLoadReply(rt.replyList,null,null,null,null,null,rt);
}
},onError:function(){
XN.DO.showError(This.getTip("loaddisabledError"));
}});
},ajaxSendAction:function(_21e){
var This=this,data={};
this.preventDbclick();
$extend(data,{content:_21e.c,ubbType:1,toid:_21e.replyTo||0});
this._replyRequest=new XN.NET.xmlhttp({url:this.getConfig("sendReplyURI"),data:XN.array.toQueryString(data),onSuccess:function(r){
var str=r.responseText;
if(!str||str=="empty"){
return;
}
var rt=XN.JSON.parse(str);
if(rt.code==0){
This._onReplySuccess(This.formatSingleData(rt));
}else{
This._onReplyError(rt.msg);
}
},onError:function(){
This._onReplyError(This.getTip("replyError"));
}});
},del:function(uid,sid){
var This=this;
function request(){
new XN.NET.xmlhttp({url:This.getConfig("delReplyURI").replace("{commentId}",sid),onSuccess:function(){
This._onDeleteSuccess(sid);
},onError:function(){
XN.DO.showError(This.getTip("deleteError"));
}});
}
var _227=this.getTip("deleteConfirm");
XN.DO.confirm({message:_227,callback:function(r){
if(r){
request();
}
}});
},reformatListData:function(rt){
var tRt={replyList:[]},_22b=rt.comments,This=this;
XN.array.each(_22b,function(i,v){
tRt.replyList.push(This.formatSingleData(v));
});
return tRt;
},formatSingleData:function(v){
return {"id":v.id,"replyer_tinyurl":v.headUrl,"replyerHead":v.headUrl,"replyContent":v.body,"type":0,"replyTime":v.time,"ubname":v.name,"replyerName":v.name,"reply_layer":0,"ubid":v.author};
}});
getReplyOfDoingFromJSON4Qun=function(json,_231,_232,_233,type,_235,_236,_237,_238){
var func=XN.browser.IE6?XN.dom.ready:function(s){
s();
};
func(function(){
json.length=parseInt(_233,0);
if(isNaN(json.length)){
json.length=0;
}
var _23b=json.type||"",_23c={ownerid:json.ownerid,doingId:_231,hostId:_232,delFlag:_236||"f",type:type,showMore:false,fromId:_235,shareId:undefined,feedType:_23b,feedId:""},fin=json.fin||"",_23e=json.type||"",_23f=_23e.replace("mini-",""),mid=_238;
var _241="?count=100&ubbType=1&isDesc=true&commentId=0";
if(XN.app.status.crossDomain){
$extend(_23c,{loaddisabledReplyURI:"httpdisabled://qun."+XN.env.domain+"/qun/ugc/"+mid+"/comment/"+_23f+"/"+_231+_241,sendReplyURI:"httpdisabled://qun."+XN.env.domain+"/qun/ugc/"+mid+"/comment/"+_23f+"/"+_231,delReplyURI:"httpdisabled://qun."+XN.env.domain+"/qun/ugc/"+mid+"/comment/"+_23f+"/"+_231+"/{commentId}/delete?ubbType=1"});
}
json.isOpenReply=_237===false?false:true;
new XN.app.status.replyEditor4Qun(_23c).loaddisabledJSON(json);
});
};
XN.app.status.replyEditor4Zhan=function(_242){
XN.app.status.replyEditor.call(this,_242);
};
$extend(XN.app.status.replyEditor4Zhan.prototype,XN.app.status.replyEditor.prototype);
$extend(XN.app.status.replyEditor4Zhan.prototype,{loaddisabled:function(more){
var This=this;
if(more&&this.getEl("show_more_link")){
this.getEl("show_more_link").innerHTML="\u52a0\u8f7d\u4e2d&nbsp;<img src=\""+XN.env.staticRoot+"imgpro/bg/indicator_blue_small.gif\" />";
this.getEl("show_more_link").show();
}
var _245={};
_245["doingId"]=this.getConfig("doingId");
_245["source"]=this.getConfig("doingId");
_245["owner"]=this.getConfig("ownerId");
if(this.getConfig("type")){
_245["t"]=this.getConfig("type");
}
new XN.NET.xmlhttp({data:XN.array.toQueryString(_245),url:this.getConfig("loaddisabledReplyURI"),method:"GET",onComplete:function(){
if(more&&This.getEl("show_more_link")){
This.getEl("show_more_link").hide();
}
},onSuccess:function(r){
var data=null;
try{
data=XN.JSON.parse(r.responseText);
if(data.code!==0){
XN.DO.showError(data.msg||This.getTip("loaddisabledError"));
return;
}
}
catch(e){
XN.DO.showError(This.getTip("loaddisabledError"));
return;
}
var rt=This.formatListData(data);
if(!This._replyCount){
This._replyCount=rt.replyList.length;
}
if(XN.user&&XN.user.auth&&parseInt(XN.user.auth,0)>=15){
This._canDel=true;
}
if(more){
This._hasLoadAll=true;
This.renderReplys(rt.replyList,null,rt);
This.showMore();
}else{
This._updateUIonLoadReply(rt.replyList,null,null,null,null,null,rt);
}
},onError:function(){
XN.DO.showError(This.getTip("loaddisabledError"));
}});
},ajaxSendAction:function(_249){
var This=this;
this.preventDbclick();
var data=$extend({},{content:_249.c,type:"nf",toId:_249.replyTo||0});
this._replyRequest=new XN.NET.xmlhttp({url:this.getConfig("sendReplyURI"),data:XN.array.toQueryString(data),onSuccess:function(r){
var str=r.responseText;
if(!str||str=="empty"){
return;
}
var rt=XN.JSON.parse(str);
if(rt.code==0){
This._onReplySuccess(This.formatSingleData(rt));
}else{
This._onReplyError(rt.msg);
}
},onError:function(){
This._onReplyError(This.getTip("replyError"));
}});
},del:function(uid,sid){
var This=this;
function request(){
new XN.NET.xmlhttp({url:This.getConfig("delReplyURI").replace("{commentId}",sid),onSuccess:function(){
This._onDeleteSuccess(sid);
},onError:function(){
XN.DO.showError(This.getTip("deleteError"));
}});
}
var _252=this.getTip("deleteConfirm");
XN.DO.confirm({message:_252,callback:function(r){
if(r){
request();
}
}});
},formatListData:function(data){
var _255={replyList:[]};
var that=this;
XN.array.each(data.replyList,function(i,v){
_255.replyList.push(that.formatSingleData(v));
});
return _255;
},formatSingleData:function(v){
return {"id":v.id,"replyer_tinyurl":v.replyerHead,"replyerHead":v.replyerHead,"replyContent":v.replyContent,"replyTime":v.replyTime,"ubid":v.replyerId,"ubname":v.replyerName,"replyerId":v.replyerId,"replyerName":v.replyerName,"type":0,"reply_layer":0};
}});
getReplyOfDoingFromJSON4Zhan=function(json,_25b,_25c,_25d,type,_25f,_260,_261,_262){
_262=_262||123;
var func=XN.browser.IE6?XN.dom.ready:function(s){
s();
};
func(function(){
json.length=parseInt(_25d,0);
if(isNaN(json.length)){
json.length=0;
}
var _265=json.type||"",_266={ownerid:json.ownerid,doingId:_25b,hostId:_25c,delFlag:_260||"f",type:type,showMore:false,fromId:_25f,shareId:undefined,feedType:_265,feedId:""};
$extend(_266,{loaddisabledReplyURI:"httpdisabled://zhan."+XN.env.domain+"/zhan/"+_262+"/"+_25b+"/comment/list/top?count=100",sendReplyURI:"httpdisabled://zhan."+XN.env.domain+"/zhan/"+_262+"/"+_25b+"/comment",delReplyURI:"httpdisabled://zhan."+XN.env.domain+"/zhan/"+_262+"/"+_25b+"/comment/{commentId}/delete"});
json.isOpenReply=_261;
new XN.app.status.replyEditor4Zhan(_266).loaddisabledJSON(json);
});
};
function replyDelete(ele){
var url,p={},tip;
var ars=arguments;
if(ars[2]){
url="httpdisabled://status."+XN.env.domain+"/doing/deleteReply.do";
p["replyId"]=ars[2];
p["doingId"]=ars[1];
tip="\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u6761\u56de\u590d\u5417?";
}else{
url="httpdisabled://status."+XN.env.domain+"/doing/deleteDoing.do";
p["id"]=ars[1];
if(ars[3]){
p["ownerid"]=ars[3];
}
tip="\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u6761\u72b6\u6001\u5417?";
}
function onSuccess(){
XN.Element.hide($(ele),"fade");
}
function del(){
new XN.NET.xmlhttp({url:url,data:XN.ARRAY.toQueryString(p),onComplete:onSuccess});
}
XN.DO.confirm({message:tip,callBack:function(r){
if(r){
del();
}
}});
}
function delMyDoing(obj,_26e){
replyDelete(obj,_26e);
}
function sudoDelDoing(obj,_270,_271){
replyDelete(obj,_270,null,_271);
}
delMyRpDoing=function(el,_273,rid){
replyDelete(el,_273,rid);
};
XN.APP.status.getVideoScale=function(url){
if(/tudou/i.test(url)){
return [400,300];
}else{
if(/youtube/i.test(url)){
return [425,355];
}else{
if(/youku/i.test(url)){
return [480,400];
}else{
if(/sina/i.test(url)){
return [480,370];
}else{
if(/qq/i.test(url)){
return [456,362];
}else{
if(/mofile/i.test(url)){
return [480,395];
}else{
if(/ku6/i.test(url)){
return [460,390];
}else{
if(voidv/i.test(url)){
return [500,460];
}
}
}
}
}
}
}
}
};
function playStatusVideo(sid,url,el){
url=decodeURIComponent(url);
var _279=XN.APP.status.getVideoScale(url);
var html=XN.Template.flash({width:_279[0],height:_279[1],filename:url});
var p=el.parentNode;
if(!$("media"+sid)||(p.id&&p.id=="currentStatus")||(p&&/currentStatus/.test(p.className))){
XN.DO.alert({title:"\u72b6\u6001",message:"<center style=\"padding:10px\">"+html+"</center>",width:_279[0]+80,button:"\u5173\u95ed",callBack:function(){
this.body.setContent("");
},noHeader:true});
}else{
if(/^\S*$/.test($("media"+sid).innerHTML)){
$("media"+sid).innerHTML="<div class=\"feedmediabox\">"+html+"</div>";
if(el){
$(el).addClass("expand");
}
}else{
$("media"+sid).innerHTML="";
if(el){
el.delClass("expand");
}
}
}
}
function playStatusAudio(sid,url,el){
var html;
if(/mp3$/i.test(url)){
html=XN.Template.flashPlayer({filename:url});
}else{
html=XN.Template.mediaPlayer({filename:url});
}
var p=el.parentNode;
if(!$("media"+sid)||(p.id&&p.id=="currentStatus")||(p&&/currentStatus/.test(p.className))){
XN.DO.alert({title:"\u72b6\u6001",message:"<center style=\"padding:10px\">"+html+"</center>",width:500,button:"\u5173\u95ed",callBack:function(){
this.body.setContent("");
},noHeader:true});
}else{
if(/^\S*$/.test($("media"+sid).innerHTML)){
$("media"+sid).innerHTML="<div class=\"feedmediabox\">"+html+"</div>";
if(el){
$(el).addClass("expand");
}
}else{
$("media"+sid).innerHTML="";
if(el){
el.delClass("expand");
}
}
}
}
function $CursorPosition(_281){
var _282=0,end=0;
if(typeof (_281.selectionStart)=="number"){
_282=_281.selectionStart;
end=_281.selectionEnd;
}else{
if(document.selection){
var _284=document.selection.createRange();
if(_284.parentElement()==_281){
var _285=document.body.createTextRange();
_285.moveToElementText(_281);
for(_282=0;_285.compareEndPoints("StartToStart",_284)<0;_282++){
_285.moveStart("character",1);
}
for(var i=0;i<=_282;i++){
if(_281.value.charAt(i)=="\n"){
_282++;
}
}
var _285=document.body.createTextRange();
_285.moveToElementText(_281);
for(end=0;_285.compareEndPoints("StartToEnd",_284)<0;end++){
_285.moveStart("character",1);
}
for(var i=0;i<=end;i++){
if(_281.value.charAt(i)=="\n"){
end++;
}
}
}
}
}
return {"start":_282,"end":end,"item":[_282,end]};
}
XN.dom.ready(function(){
if(!$("pageStatus")||!XN.BROWSER.IE){
return;
}
document.body.style.zoom=1.1;
document.body.style.zoom="";
});
(function(ns){
ns.miniFeed=function(_288){
if(!_288){
_288={};
}
if(!_288.IDframe){
_288={IDsubmit:"mini_submit",IDinput:"mini_statusInput",IDinputContent:"mini_statusInput",IDcurrentStatus:"mini_currentFeed",IDupdateTime:"mini_statusUpdateTime",IDspecial:"mini_commendStatus",IDemotion:"mini_emotion",IDcommentTo:"mini_comment_to",IDcommentToAuthor:"mini_comment_to_author",IDcommentToSpan:"mini_comment_to_span",IDcommentToAuthorSpan:"mini_comment_to_author_span",IDfwdRoot:"mini_fwd_root",IDfwdStatus:"mini_fwd_status",IDemoPan:"mini_emotions",IDemoBtn:"mini_emo_btn",IDframe:"mini_frame",IDcounter:"mini_statusCount",IDerr:"mini_err",IDmsg:"mini_msg",CFGshowMax:false,TIPinputDefault:"\u4f60\u6b63\u5728\u5e72\u561b?",CFGshowError:false};
this.params=_288;
}
$extend(this,_288);
};
ns.miniFeed.prototype={skin:"httpdisabled://s.xnimg.cn/csspro/module/status-pop.css",action:"httpdisabled://status."+XN.env.domain+"/publisher/minifeed.do",msg:{mfBuildFail:"\u62b1\u6b49\uff0c\u670d\u52a1\u51fa\u9519\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u540e\u518d\u8bd5\u3002"},block:[],init:function(fn){
var This=this;
if(!this.initialized){
this.initialized=true;
if(this.standAlong){
this.addEvent("skinLoaded",function(){
This._loaddisabledSkeleton();
});
this._loaddisabledSkin();
}else{
This._loaddisabledSkeleton();
}
This.addEvent("skeletonLoaded",function(){
$(this.params.IDemotion).delClass("emotions");
This.statusEditor=new XN.APP.status.editor(This.params);
This.getUIRef();
This.bindEvent();
This.fireEvent("miniInitOver");
});
}
},bindEvent:function(){
var This=this;
this.statusEditor._onInputFocus=function(){
var _28c=this.getEl("input");
_28c.style.color="#333";
if(_28c.value==this.getTip("inputDefault")){
_28c.value="";
}
this._resetInputCounter();
$(_28c).addClass("focus");
this.fireEvent("inputFocus");
};
this.statusEditor._onBlur=function(){
var This=this;
var _28e=this.getEl("input");
$(_28e).delClass("focus");
var v=_28e.value;
if(this._overEmotion){
return;
}
This.simpleMode();
};
if(this.statusEditor){
this.statusEditor.addEvent("beforeUpdate",function(){
This._beforeUpdate();
});
this.statusEditor.addEvent("updateSuccess",function(msg,send,_292){
This._updateSuccess(msg,send,_292);
This.fireEvent("miniUpdateSus",_292);
});
this.statusEditor.addEvent("updateError",function(r){
This._updateError();
This.fireEvent("miniUpdateError",r);
});
}
},_loaddisabledSkeleton:function(){
var This=this;
var p={useCache:true};
new XN.net.xmlhttp({url:this.action,data:XN.array.toQueryString(p),onSuccess:function(r){
var temp=$(This.IDframe);
if(!temp){
temp=$element("div");
temp.id=This.IDframe;
temp.className="publisher";
document.body.appendChild(temp);
}
var txt=r.responseText;
if(XN.string.isJSON(txt)){
txt="\u6211\u52d2\u4e2a\u53bb\uff0c\u52a0\u8f7d\u5931\u8d25\u4e86\u3002\u91cd\u8bd5\u4e00\u4e0b\u6216\u8005\u5237\u65b0\u9875\u9762\u770b\u770b\u884c\u4e0d^_^";
}
temp.innerHTML=txt;
This.initPopup();
This.fireEvent("skeletonLoaded");
}});
},_beforeUpdate:function(){
this._disable();
var p={commentTo:this.commentTo.checked,commentToAuthor:this.commentToAuthor.checked};
this.statusEditor.addOnsParam(p);
},_updateSuccess:function(msg,send,_29c){
this._reset();
var _29d=send.indexOf("\u8f6c\u81ea");
var _29e;
if(_29d!=-1){
_29e=send.slice(0,_29d);
}else{
_29e=send;
}
if(!_29e){
return;
}
if(this.commentTo.checked){
var p={c:_29e,source:this.fwd.statusId,t:3,owner:this.fwd.ownerId};
setTimeout(function(){
new XN.net.xmlhttp({url:"httpdisabled://status."+XN.env.domain+"/feedcommentreply.do?from=wp",data:XN.array.toQueryString(p)});
},2000);
}
if(this.commentToAuthor.checked){
var p2={c:_29e,source:this.fwd.fwdRootDoingId,t:3,owner:this.fwd.fwdRootId};
setTimeout(function(){
new XN.net.xmlhttp({url:"httpdisabled://status."+XN.env.domain+"/feedcommentreply.do?from=wp",data:XN.array.toQueryString(p2)});
},13000);
}
},_updateError:function(){
this._reset();
},_reset:function(){
var _2a1=$(this.IDsubmit);
_2a1.delClass("disabled");
},_disable:function(){
var _2a2=$(this.IDsubmit);
_2a2.addClass("disabled");
_2a2.disable=false;
var inpt=$(this.IDinput);
inpt.disable=false;
},initPopup:function(){
var This=this;
this.popInited=true;
var div=$element("div");
var _2a6=$element("div");
_2a6.id="mini_meta";
if(XN.browser.IE6){
_2a6.style.cssText="margin-top:-20px;padding-left:66px;";
}
_2a6.innerHTML=["<p><a target=\"_blank\" href=\"#\" id=\"mini_fwd_root\"></a> : <span id=\"mini_fwd_status\"></span></p>","<div id=\"mini_target\"><label><input id=\"mini_comment_to\" type=\"checkbox\"/>\u540c\u65f6\u8bc4\u8bba\u7ed9<span id=\"mini_comment_to_span\"></span></label></div>","<div id=\"mini_author\"><label><input id=\"mini_comment_to_author\" type=\"checkbox\"/>\u540c\u65f6\u8bc4\u8bba\u7ed9\u539f\u4f5c\u8005<span id=\"mini_comment_to_author_span\"></span></label></div>"].join("");
div.appendChild($(this.IDframe));
div.appendChild(_2a6);
XN.event.addEvent(document,"keydown",function(e){
e=e||window.event;
if(e.keyCode==27){
XN.APP.status.setForwardNull();
}
});
this.pan=XN.DO.alert({title:"\u53d1\u5e03\u72b6\u6001",width:600,height:100,message:div.innerHTML,params:{showCloseButton:true},callBack:function(){
XN.APP.status.setForwardNull();
}});
var p=this.pan;
p.footer.hide();
},getUIRef:function(){
this.commentTo=$(this.IDcommentTo);
this.commentToSpan=$(this.IDcommentToSpan);
this.commentToAuthor=$(this.IDcommentToAuthor);
this.commentToAuthorSpan=$(this.IDcommentToAuthorSpan);
this.fwdRoot=$(this.IDfwdRoot);
this.fwdStatus=$(this.IDfwdStatus);
this.authorDiv=$("mini_author");
this.targetDiv=$("mini_target");
},_skeleton:function(p){
},show:function(){
if(!this.popInited){
return;
}
XN.dom.disable();
this.pan.show();
if($(this.IDframe)){
$(this.IDframe).show();
}
if(this.statusEditor){
this.statusEditor.getEl("input").disabled=false;
this.statusEditor.hideErr();
this.statusEditor.hideMsg();
this.commentTo.checked=true;
this.commentToAuthor.checked=false;
var fwd=this.fwd;
if(!fwd.fwdRoot){
if(this.readonly){
this.targetDiv.hide();
this.authorDiv.hide();
}else{
this.targetDiv.show();
this.authorDiv.hide();
}
}else{
this.targetDiv.show();
if(this.readonly){
this.authorDiv.hide();
}else{
this.authorDiv.show();
}
}
this.commentToSpan.innerHTML=fwd.fwdTarget;
this.commentToAuthorSpan.innerHTML=fwd.fwdRoot||fwd.fwdTarget;
this.fwdRoot.innerHTML=fwd.fwdRoot||fwd.fwdTarget;
this.fwdRoot.href="httpdisabled://www."+XN.env.domain+"/profile.do?id="+(fwd.fwdRootId||fwd.fwdTargetId);
this.fwdStatus.innerHTML=fwd.fwdRootStatus||fwd.status;
}
},hide:function(){
if(this.pan){
this.pan.hide();
}
},setStatus:function(_2ab,rt){
var This=this;
this.readonly=rt.readonly;
this.fwd=$extend({},rt);
var _2ae=this.statusEditor.getEl("input");
_2ae.value=_2ab;
this.statusEditor._inputHelper.limitCheck();
var t=$(this.statusEditor.IDemoBtn);
if(t){
t.show();
}
setTimeout(function(){
setCursor2Start(This.statusEditor.getEl("input"));
},0);
},_loaddisabledSkin:function(){
var This=this;
XN.loaddisabledFile(this.skin,function(){
This.fireEvent("skinLoaded");
});
},_standAlong:function(fn){
var This=this;
}};
})(XN.widgets);
XN.event.enableCustomEvent(XN.widgets.miniFeed.prototype);
(function(ns){
ns.FowardManager={fowardThis:function(_2b4,_2b5,type,fn){
type=type||"status";
if(XN.string.isBlank(_2b4)&&XN.string.isBlank(_2b5)){
return;
}
var _2b8=[];
_2b8["id"]=_2b4;
_2b8["owner"]=_2b5;
_2b8["ref"]=type;
var self=arguments.callee;
try{
self.request.abort();
}
catch(e){
}
this.fireEvent("beforeFwd");
var This=this;
XN.dom.ready(function(){
self.request=new XN.net.xmlhttp({url:"httpdisabled://status."+XN.env.domain+"/doing/fwdinfo.do",data:XN.array.toQueryString(_2b8),method:"get",onSuccess:function(r){
if(fn){
fn.call(This,r);
}
},onError:function(){
XN.DO.showError("\u52a0\u8f7d\u5931\u8d25");
}});
});
},fowardDoing:function(_2bc,_2bd,type){
type=type||"status";
if(XN.string.isBlank(_2bc)&&XN.string.isBlank(_2bd)){
return;
}
var _2bf=[];
_2bf["id"]=_2bc;
_2bf["owner"]=_2bd;
_2bf["ref"]=type;
var self=arguments.callee;
try{
self.request.abort();
}
catch(e){
}
this.fireEvent("beforeFwd");
var This=this;
XN.dom.ready(function(){
self.request=new XN.net.xmlhttp({url:"httpdisabled://status."+XN.env.domain+"/doing/fwdinfo.do",data:XN.array.toQueryString(_2bf),method:"get",onSuccess:function(r){
var rt=XN.json.parse(r.responseText);
if(rt.code==0){
if(rt.userName==undefined){
XN.DO.showError("\u8f6c\u53d1\u5931\u8d25\uff0c\u8bf7\u7a0d\u5019\u91cd\u8bd5");
return;
}
var _2c4="\u8f6c\u81ea";
if(rt.fwdRootStatus===undefined){
_2c4+=rt.userName;
}else{
_2c4+=(rt.userName+": "+rt.statusContent);
}
if(_2c4.length>140){
_2c4=_2c4.slice(0,137)+"...";
}
XN.APP.status.setForwardTrue(_2bc,_2bd,type);
rt.ownerId=_2bd;
rt.statusId=_2bc;
This.fireEvent("fwdSus",_2c4,rt);
}else{
if(rt.code==10){
XN.DO.showError("\u4e0d\u80fd\u8f6c\u53d1\u81ea\u5df1\u7684\u72b6\u6001");
}else{
XN.DO.showError(rt.msg);
}
}
},onError:function(){
XN.DO.showError("\u52a0\u8f7d\u5931\u8d25");
}});
});
}};
})(XN.widgets);
XN.event.enableCustomEvent(XN.widgets.FowardManager);
XN.dom.ready(function(){
var regx=/http:\/\/status\.renren\.com/;
var href=document.location.href+"";
var _2c7=false;
if(regx.test(href)){
_2c7=true;
}
var _2c8=new XN.widgets.miniFeed();
if(!_2c7){
_2c8.standAlong=true;
}
window.fwdmgr=XN.widgets.FowardManager;
fwdmgr.addEvent("fwdSus",function(_2c9,rt){
if(!_2c8.initialized){
_2c8.addEvent("miniInitOver",function(){
_2c8.setStatus(_2c9,rt);
_2c8.show();
});
_2c8.init();
}else{
_2c8.setStatus(_2c9,rt);
_2c8.show();
}
});
_2c8.addEvent("miniUpdateSus",function(){
var me=_2c8.statusEditor;
me.showMsg("<span id=\"mini_msg_ok\" style=\"background:rgb(255,255,150);\">\u53d1\u5e03\u6210\u529f!</span>");
var m=$("mini_msg_ok");
setTimeout(function(){
XN.Effect.gradient(m,255,255,150,function(){
m.style.backgroundColor="transparent";
me.hideMsg();
setTimeout(function(){
_2c8.hide();
},500);
});
},500);
});
_2c8.addEvent("miniUpdateError",function(r){
var me=_2c8.statusEditor;
me.getEl("submit").addClass("disabled");
me.simpleMode();
me.showErr(r);
if(_2c8.readonly){
me.getEl("submit").delClass("disabled");
me.getEl("submit").disabled=false;
me.getEl("input").disabled=true;
setTimeout(function(){
me.hideErr();
},2000);
return;
}
setTimeout(function(){
me.getEl("submit").delClass("disabled");
me.getEl("submit").disabled=false;
me.getEl("input").disabled=false;
me._inputHelper.focus();
},2000);
});
window.a_fowardDoing=function(_2cf,_2d0){
fwdmgr.fowardDoing(_2cf,_2d0);
};
});
XN.namespace("ui.tooltip");
XN.ui.tooltip=function(_2d1){
if(_2d1){
$extend(this,_2d1);
}
this.init();
};
XN.ui.tooltip.ids=0;
XN.ui.tooltip.prototype={init:function(){
var that=this;
var div=$element("div");
div.id="tooltip_"+XN.ui.tooltip.ids++;
var ds=div.style;
ds.background="#fff9d7";
ds.border="solid 1px #d7b013";
ds.padding="3px 15px 3px 3px";
div.innerHTML=this.msg||"";
var a=$element("a");
var as=a.style;
a.className="x-to-hide";
as.position="absolute";
as.top="0";
as.right="0";
as.cursor="pointer";
if(this.cookie){
var c=this.cookie;
XN.event.addEvent(a,"click",function(e){
e=e||window.event;
XN.event.stop(e);
XN.cookie.set(c.key,c.value,c.expire||10000);
that.tip.hide();
});
}
var _2d9=$element("div");
var das=_2d9.style;
das.background="url(http://s.xnimg.cn/imgpro/arrow/tip-arrow-down.png?ver=2) no-repeat";
das.height="6px";
das.width="11px";
das.position="absolute";
das.bottom="-6px";
if(XN.browser.IE6){
das.bottom="-14px";
}
das.left="16px";
div.appendChild(_2d9);
div.appendChild(a);
this.menu=div;
this.tip=new XN.ui.menu(this);
},show:function(){
this.tip.show();
},hide:function(){
this.tip.hide();
}};
function renderStatusFeed(id,href){
return;
}
XN.widgets.publisher.addEvent("afterTabClose",function(){
});
