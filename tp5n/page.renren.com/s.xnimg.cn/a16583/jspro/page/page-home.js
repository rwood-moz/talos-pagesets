XN.dom.ready(function(){
var $=jQuery;
$("#hotmenu li").mouseover(function(){
$("[class^=hot-main]").hide();
$("#hot"+$(this).attr("menutype")).show();
$("#hotmenu li a").removeClass("select");
$(this).children("a").addClass("select");
});
var _2=0;
$("#hotstatus .flip a").click(function(){
var _3=20;
var _4=$("#hotstatus .status-box ul");
_3=_4.children("li").size();
if($(this).attr("forward")=="pre"){
if(_2==0){
return;
}
var _5=_4.find("li:eq("+(_2-1)+")").height();
_4.animate({"marginTop":"+="+(parseInt(_5)+8)},600);
_2--;
}else{
if((_2+1)>=_3){
_4.animate({"marginTop":0},600);
_2=0;
return;
}
var _5=_4.find("li:eq("+_2+")").height();
_4.animate({"marginTop":"-="+(parseInt(_5)+8)},600);
_2++;
}
});
function TodayPop(){
this.type="pop";
this.popcategory=0;
this.fanscategory=0;
this.popTotal=$("#todaypop ul.popularity").size();
this.fansTotal=$("#todayfans ul.popularity").size();
this.init();
}
TodayPop.prototype={init:function(){
this.bindEvent();
},bindEvent:function(){
var _6=this;
$(".rank-list .head a").mouseover(function(){
_6.switchType($(this));
});
$(".category .flip a").click(function(){
var _7=$(this).attr("forward");
if(_7=="pre"){
_6.switchCategory("pre");
}else{
if(_7=="next"){
_6.switchCategory("next");
}
}
});
},switchCategory:function(_8){
if(this.type=="pop"){
if(_8=="pre"){
$("#today"+this.type+this.popcategory).hide();
if(this.popcategory==0){
this.popcategory=this.popTotal;
}
this.popcategory--;
$("#today"+this.type+this.popcategory).show();
}else{
$("#today"+this.type+this.popcategory).hide();
if(this.popcategory==(this.popTotal-1)){
this.popcategory=-1;
}
this.popcategory++;
$("#today"+this.type+this.popcategory).show();
}
}else{
if(_8=="pre"){
$("#today"+this.type+this.fanscategory).hide();
if(this.fanscategory==0){
this.fanscategory=this.fansTotal;
}
this.fanscategory--;
$("#today"+this.type+this.fanscategory).show();
}else{
$("#today"+this.type+this.fanscategory).hide();
if(this.fanscategory==(this.fansTotal-1)){
this.fanscategory=-1;
}
this.fanscategory++;
$("#today"+this.type+this.fanscategory).show();
}
}
},switchType:function(_9){
this.type=_9.attr("tabtype");
$(".rank-list .head a").removeClass("population");
_9.addClass("population");
$(".rank-list .body").hide();
$("#today"+this.type).show();
}};
new TodayPop();
function Slide(_a,_b){
this.init();
}
Slide.prototype={init:function(){
var _c=this;
this.bindEvent();
this.current=0;
_c.setTimer();
},bindEvent:function(){
var _d=this;
$(".thumbnail li").mouseover(function(){
_d.stopTimer();
_d.current=parseInt($(this).attr("index"));
_d.setSelectedBox(_d.current);
}).mouseleave(function(){
_d.setTimer();
});
$(".slide-pic").children("a").mouseover(function(){
_d.stopTimer();
}).mouseleave(function(){
_d.setTimer();
});
},setTimer:function(){
var _e=this;
this.timer=setInterval(function(){
if(_e.current>=2){
_e.current=0;
_e.setSelectedBox(_e.current);
}else{
_e.current++;
_e.setSelectedBox(_e.current);
}
},5000);
},stopTimer:function(){
clearInterval(this.timer);
},setSelectedBox:function(_f){
$(".thumbnail li a").attr("class","");
$(".thumbnail li:eq("+_f+") a").attr("class","select");
$(".slide-pic").children("a").hide();
$("#pic"+_f).show();
}};
new Slide();
});
XN.dom.ready(function(){
var _10={"blog":"httpdisabled://page.renren.com/adminpage/pop/editPopBlog/incClick","album":"httpdisabled://page.renren.com/adminpage/pop/editPopAlbum/incClick","hover":"httpdisabled://page.renren.com/adminpage/pop/editPopHover/incClick","status":"httpdisabled://page.renren.com/adminpage/pop/editPopDoing/incClick"};
$("slideContainer").onclick=function(_11){
var e=_11||window.event;
var _13=XN.event.element(e);
while(_13.tagName&&_13.tagName.toLowerCase()!=="a"){
_13=_13.parentNode;
}
if(_13.getAttribute&&_13.getAttribute("pv-data")){
var _14=_13.getAttribute("pv-data");
try{
_14=XN.JSON.parse(_14);
if(!_14){
return;
}
}
catch(e){
return;
}
ajaxRecord("id="+_14.id,_10[_14.type]);
}
};
function ajaxRecord(_15,_16){
new XN.net.xmlhttp({url:_16,data:_15,onSuccess:function(){
}});
}
});
