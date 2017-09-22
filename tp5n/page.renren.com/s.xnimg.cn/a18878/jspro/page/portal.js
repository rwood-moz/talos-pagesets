function feed_img_delay_loaddisabled(_1){
if(_1._loaddisableded){
return;
}
_1._loaddisableded=true;
_1.setAttribute("src",_1.getAttribute("lala"));
_1.removeAttribute("lala");
_1.removeAttribute("onloaddisabled");
if(_1.getAttribute("needclip")){
clipImage(_1);
}
}
XN.dom.ready(function(){
var _2=jQuery("#spreadPages .figure-list");
jQuery("#spreadPages > .item-header > .flush > a").click(function(){
var _3=jQuery(this);
if(_3.is(".qyy")){
_2.prepend(XN.browser.Gecko?$("spreadPages").getElementsByClassName("hr")[$("spreadPages").getElementsByClassName("hr").length-1]:_2.find("li.hr:last"));
_2.prepend(_2.find("li:last"));
}else{
_2.append(XN.browser.Gecko?$("spreadPages").getElementsByClassName("hr")[0]:_2.find("li.hr:first"));
_2.append(_2.find("li:first"));
}
return false;
});
});
XN.dom.ready(function(){
var _4=document.forms["portalSearch"];
if(_4&&_4.q){
new XN.FORM.inputHelper(_4.q).setDefaultValue("\u641c\u7d22\u516c\u5171\u4e3b\u9875...");
_4.onsubmit=function(){
if(_4.q.value=="\u641c\u7d22\u516c\u5171\u4e3b\u9875..."){
_4.q.value="";
}
return true;
};
}
});
XN.dom.ready(function(){
var _5=jQuery("#feedPanel");
var _6={"follow":"","friend":"friendnewsfeed","behavior":"myminifeed"};
jQuery("#feedTabs > li").click(function(){
var _7=jQuery(this);
if(!_7.is(".c")){
ajaxRequest(_7,"html");
}
return false;
});
jQuery("#moreFeed").click(function(){
var _8=jQuery("#feedTabs > li.c");
var _9=_8.data("pageNum");
if(!_9||_9==0){
_8.data("pageNum",1);
}
ajaxRequest(jQuery("#feedTabs > li.c"),"append");
return false;
});
function ajaxRequest(_a,_b){
_a.addClass("c").siblings().removeClass("c").data("pageNum",0);
var _c=_a.data("pageNum")||0;
new XN.net.xmlhttp({url:"httpdisabled://page.renren.com/assemble/windows/myNewsfeeds/getData?feedtype="+_6[_a.attr("name")]+"&curpage="+_c,method:"get",onSuccess:function(r){
var _e=r.responseText;
if(jQuery.trim(_e)==""){
jQuery(".nomore-feed").show();
jQuery(".more-feed").hide();
jQuery("#nomore-feed").show();
jQuery("#more-feed").hide();
}else{
jQuery(".nomore-feed").hide();
jQuery(".more-feed").show();
jQuery("#nomore-feed").hide();
jQuery("#more-feed").show();
}
var _f="httpdisabled://www.renren.com/readNews.do";
if(_a.attr("name")=="behavior"){
_f="httpdisabled://www.renren.com/readMini.do";
}
_e="<div class=\"feed-module\" data-readmoreaction=\"httpdisabled://page.renren.com/feedretrieve2.do\" data-markreadaction=\""+_f+"\" data-hostid=\""+(_6[_a.attr("name")]==""?"mynews":_6[_a.attr("name")])+"\">"+"<div id=\"feedPanel\" class=\"feed-list\" >"+r.responseText+"</div>"+"<div class=\"feed-footer\">"+"\t<div class=\"feed-loaddisableding\" style=\"display:none\"><p>\u65b0\u9c9c\u4e8b\u8bfb\u53d6\u4e2d...</p></div>"+"\t<div class=\"nomore-feed\" style=\"display:none\"><p>\u6ca1\u6709\u66f4\u591a\u65b0\u9c9c\u4e8b\u4e86</p></div>"+"\t<div class=\"more-feed\"><a id=\"more-feed\" href=\"#\">\u66f4\u591a\u65b0\u9c9c\u4e8b</a></div>"+"</div>"+"</div>";
jQuery(".feed-module").remove();
var tmp=$(document.createElement("div"));
tmp.setHTML(_e);
jQuery(tmp.children[0]).insertAfter(".toolbar");
object.use("xn.feed.newsfeed",function(ns){
window.newsfeed=ns.xn.feed.newsfeed.listen();
});
jQuery(".feed-module").attr("data-hostid",(_6[_a.attr("name")]==""?"mynews":_6[_a.attr("name")]));
_a.data("pageNum",Number(_c)+1);
}});
}
});
XN.dom.ready(function(){
var _12=0;
var _13=jQuery("#latestUpdate");
jQuery("#moreLatestFeed").click(function(){
var _14=this;
jQuery.get("httpdisabled://page.renren.com/assemble/windows/latestUpdate/getData?curpage="+(++_12),function(_15,_16){
var _17=_15.getElementsByTagName("response")[0].firstChild.data;
if(jQuery.trim(_17)==""){
jQuery(_14).html("\u6ca1\u6709\u66f4\u591a\u65b0\u9c9c\u4e8b\u4e86").unbind("click").css({"backgroundImage":"none","cursor":"default"});
return;
}
_13.append(_15.getElementsByTagName("response")[0].firstChild.data);
});
return false;
});
});
XN.dom.ready(function(){
var _18=jQuery("#gallery");
var _19=jQuery("#pagesPanel");
_18.children(".left, .right").click(function(){
var len=$("pagesPanel").getElementsByTagName("li").length;
var obj=jQuery(this);
for(var i=0;len>8&&i<4;i++){
if(obj.is(".left")){
_19.append(_19.children(":first"));
}else{
_19.children(":last").insertBefore(_19.children(":first"));
}
}
return false;
});
jQuery("#commendPages > ul > li").click(function(){
var obj=jQuery(this).addClass("c").siblings().removeClass("c").end();
var _1e=obj.attr("typeId")||obj[0].getAttributeNS("","typeId");
new XN.net.xmlhttp({url:"httpdisabled://www."+XN.env.domain+"/ajaxfeedpage.do?ptid="+_1e,onSuccess:function(r){
_19.html(jQuery(r.responseText).find("#pagesPanel").html());
}});
return false;
});
});
XN.dom.ready(function(){
var _20=null;
function getOverlay(id,_22){
if(_20==null){
_20=jQuery("<div style=\"position: absolute; z-index:100;\" class=\"tips-box\"></div>").prependTo("#commendPages");
}
if(id&&_22){
_20.html(["<a class=\"name\" href=\"httpdisabled://page."+XN.env.domain+"/"+id+"\">"+_22+"</a>","<img height=\"16\" width=\"16\" src=\"httpdisabled://a.xnimg.cn/imgpro/icons/follow-add.gif\" />","<a href=\"httpdisabled://page."+XN.env.domain+"/pa/bf?pid="+id+"\">\u52a0\u4e3a\u597d\u53cb</a>","<p>"+((doingjson&&doingjson[id])||"...")+"</p>","<div class=\"tips-arrow\"></div>"].join(""));
}
return _20;
}
jQuery("#commendPages ul.page-figure li").mouseenter(function(){
var obj=jQuery(this);
var pos=obj.position();
var id=obj.attr("pid")||obj[0].getAttributeNS("","pid");
var _26=obj.find("a.name").html()||$(obj[0]).getElementsByClassName("name")[0].innerHTML;
getOverlay(id,_26).show().css({top:pos.top+80,left:pos.left});
});
jQuery("#commendPages").mouseleave(function(){
getOverlay().hide();
});
});
