function $_(ele){return document.getElementById(ele);}
function jLoader(source,autoRemove,id,charset){id=id||"";charset=charset||"gb2312";autoRemove=autoRemove||false;var b=document.getElementsByTagName("head")[0];var c=document.createElement("script");c.type="text/javascript";c.charset=charset;if(id){c.id=id;}
c.src=source;var remove=function(){c.onloaddisabled=null;var h=c.parentNode;h.removeChild(c);delete c;};var e=function(h){var j=(h?h:window.event).target?(h?h:window.event).target:(h?h:window.event).srcElement;if(j.readyState=="loaddisableded"||j.readyState=="complete"){j.onreadystatechange=null;if(autoRemove){remove();}}};if(navigator.product=="Gecko"&&autoRemove){c.onloaddisabled=remove;}else{c.onreadystatechange=e;}
b.appendChild(c);}
function setStat(s,t){var u="httpdisabled://stat3.corp.56.com/player.htm?s=";t=t||false;if(t==true){jLoader(u+s,true);}else{setTimeout(function(){jLoader(u+s,true);},1000);}}
var _={"map":function(vars,func){func(vars);},"rand":function(begin,end){if(typeof begin!='undefined'){end=end?end:2147483648;return Math.floor(Math.random()*(end-begin)+begin);}else{a=new Date();return a.getTime();}},"r":function(vars){eval(vars);},"mbox":function(){var url='http://msg.56.com/getnewmsgforadmin.php?user='+usr.gLoginUser()+'&callback=_h.mboxnum';jLoader(url);},"e":function(){var elements=[];for(var i=0;i<arguments.length;i++){var element=arguments[i];if(typeof element=='string')element=document.getElementById(element);if(arguments.length==1)return element;elements.push(element);}return elements;},"get":function(name){var get=location.search||location.hash;var start=get.indexOf(name+'=');if(start==-1)return'';var len=start+name.length+1;var end=get.indexOf('&',len);if(end==-1)end=get.length;return unescape(get.substring(len,end));},"setCookie":function(name,value,hours,domain){var options={};if(hours){options.expires=hours;}
if(domain){options.domain=domain;options.path="\/";}},getCookieVal:function(offset){var endstr=document.cookie.indexOf(";",offset);if(endstr==-1){endstr=document.cookie.length;}
return unescape(document.cookie.substring(offset,endstr));},getCookie:function(name){var arg=name+"=";var alen=arg.length;var clen=document.cookie.length;var i=0;while(i<clen){var j=i+alen;if(document.cookie.substring(i,j)==arg){return this.getCookieVal(j);}
i=document.cookie.indexOf(" ",i)+1;if(i==0)break;}
return"";},getUserid:function(){var user=this.getCookie("member_id");return user.substring(0,user.indexOf("@"));}};var usr={"gLoginId":(_.getCookie("member_id")),"user_nick":((decodeURIComponent&&_.getCookie("user_nickname_js").length)?decodeURIComponent(_.getCookie("user_nickname_js")):_.getUserid()),"gLoginPass":(_.getCookie("pass_hex")),"gLoginUser":function(){return(this.gLoginId.indexOf("@")==-1?this.gLoginId:this.gLoginId.substring(0,this.gLoginId.indexOf("@")));},"user_id":function(){return this.gLoginUser();},"photo":function(u,b){var a1=0,a2=0,i,rs;u=u||this.gLoginUser();for(i=0;i<u.length;i++){a1+=u.charCodeAt(i)*i;a2+=u.charCodeAt(i)*(i*2+1);}a1%=100;a2%=100;rs='http://uface.56.com/photo/'+a1+"/"+a2+"/";if(b){return rs+u+"_b_56.com_.jpg";}else{return rs+u+"_56.com_.jpg";}},"gIsLogin":function(){return(_.getCookie("member_id")!=""&&_.getCookie("pass_hex")!="")?true:false;},"gIsHomepage":function(){var gh=window.location.host;if(gh=='www.56.com'||gh=='56.com'){return true;}else{return false;}}};var _h={HeaderNav:function(id)
{var a=[(usr.gIsLogin()?'<li>您好, <a href="httpdisabled://'+usr.gLoginUser()+'.56.com/" target="_blank">'+(usr.user_nick.length>=12?usr.user_nick.substring(0,10)+'..':usr.user_nick)+'</a></li><li><a href="httpdisabled://www.56.com/admin/" onclick="setStat(\'i_nav_center\');" target="_blank">管理中心</a></li><li class="last"><a target="_self" href="httpdisabled://space.56.com/php/logout.php">退出</a></li>':'<li>你好, 请<a href="javascript:login();">登录</a></li><li class="last"><a href="httpdisabled://urs.56.com/Reg1.php" target="_blank">注册</a></li>')];$_(id).innerHTML=a;},mboxnum:function(data){if(data.total>0){var html='(<span class="red">'+data.total+'</span>)';$_("mboxid").innerHTML=html;}},csubstr:function(str,s,e){var r='';if(typeof(str)!='string'){return str;}
var l=str.length;if(e>l*2){return str;}
for(var i=0;i<l;i++){if(s>i)continue;if(str.charCodeAt(i)>255){if(e==1){return r;}
e=e-2;}else{e--;}
if(str.charAt(i)==undefined){return r;}
r=r+str.charAt(i);if(e<=0){return r;}}
return r;},checkselect:function(dio){for(i=0;i<dio.length;i++){if(dio[i].selected)
{return dio[i].value;}}
return false;},indexLogin:function(id){var logusername=usr.user_nick;var a=usr.gIsLogin()?['<div class="title">\
					<h2>欢迎登录56网！</h2>\
				</div>\
				<div class="content">\
					<dl class="u_info">\
						<dt><a href="httpdisabled://'+usr.gLoginUser()+'.56.com/"><img alt="" src="'+usr.photo()+'"></a></dt>\
						<dd>您好, <a target="_blank" href="httpdisabled://'+usr.gLoginUser()+'.56.com/" class="last">'+(logusername.length>=12?logusername.substring(0,10)+'..':logusername)+'</a><a class="last" target="_self" href="httpdisabled://space.56.com/php/logout.php">退出</a></dd>\
						<dd><a href="httpdisabled://w.56.com/my/index.php?action=Uploaddisabled" target="_blank" onclick="setStat(\'i_nav_uploaddisabled_2\');" class="first">上传视频</a><a target="_blank" onclick="setStat(\'i_nav_center\');" href="httpdisabled://www.56.com/admin/">管理中心</a><a class="last" href="httpdisabled://msg.56.com/">短消息<div id="mboxid"></div></a></dd>\
						</dl></div>']:['<div class="title"><span class="side"><a id="sethomepage" style="" href="javascript:_h.onhomepage();" class="last">把56设为首页</a></span>\
			   <h2>欢迎登录</h2>\
				   </div>\
				   <div class="content">\
				   <form target="add_favorite" id="urslogin" name="urslogin" method="post" action="httpdisabled://space.56.com/php/urs.php">\
				   <p class="tips"><span id="warning" class="warning"></span></p>\
				   <p><label for="username">用户名：</label>\
				   <input type="text" size="24" class="userpass" id="username" name="username"/>\
				   </p>\
				   <p>\
				   <label for="password">密　码：</label><input type="password" size="24" class="userpass" id="password" name="password" onKeyDown="if(event.keyCode==13){fCheck();}"/>\
				   <span class="remember"><input type="checkbox" checked="checked" id="RemenberMe" name="RemenberMe" /><label for="RemenberMe">记住我</label></span>\
				   <a name="forget" class="forget" target="_blank" href="httpdisabled://reg.56.com/newreg/register/index.php?action=forgetPass">忘记密码？</a>\
				   </p>\
				   <input type="hidden" value="httpdisabled://www.56.com/js/login/login_box_success.html" name="ourl"/>\
				   <input type="hidden" value="httpdisabled://www.56.com/js/login/login_box_error.html" name="errurl"/>\
				   <input type="hidden" value="true" name="autoLogin"/>\
				   <p class="btn"><input type="button" class="btn_login" onclick="fCheck()" value=" 登 录 "/>\
				   <a class="reg" onclick="setStat(\'i_nav_reg\');" target="_blank" href="httpdisabled://urs.56.com/Reg1.php">免费注册</a></p>\
				   </form></div>'];$_(id).innerHTML=a;},onhomepage:function(){var pageURL='http://www.56.com';if(document.documentElement.doScroll){document.body.style.behavior='url(#default#homepage)';document.body.setHomePage(pageURL);}
else{if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}
catch(e){alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项signed.applets.codebase_principal_support 值该为true");}}
var prefs=Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);prefs.setCharPref('browser.startup.homepage',pageURL);}},calllikemsg:false,show_likevideo:function(data){var tdata=data.data;var length=tdata.length;var html='';var cl='';if(tdata!=' '&&tdata!=undefined&&length>0){this.calllikemsg=true;html='<ul class="v_list">';for(var i in tdata){if(i==2||i==5)cl=' class="last"';html+='<li'+cl+'>\
					<a onmousedown="setStat(\'ua_like\',1000)" title="'+tdata[i].Subject+'" class="img" href="'+tdata[i].url+'" target="_blank"><img alt="'+tdata[i].Subject+'" src="'+tdata[i].img+'">'+_h.csubstr(tdata[i].Subject,0,14)+'</a>\
					<span class="ply"><s title="播放"></s>'+tdata[i].times+'</span>\
					</li>';cl='';if(i==5)break;}
html+='</ul>';$_("none_mylike").style.display="";$_("mylikecontent").innerHTML=html;}else{$_("none_mylike").style.display="none";}
$_("may_like_box").className='sbox may_like void';},showmorelikeList:function(){var url='http://msg.ua.56.com/api/maybelike.php?&more=1&callback=_h.show_likevideo';jLoader(url,'','','utf8');},showlikeList:function(){var likehtml='';if(usr.gIsLogin()||_.getCookie('uaid')){likehtml+='<div class="sbox may_like box_close" id="may_like_box">\
				<span class="side">\
				<a title="更多您可能喜欢的视频" href="javascript:_h.showmorelikeList();">更多</a>\
				</span>\
				<div onmousedown="_h.initlikeList(0);" class="title">\
				<div class="starus"><a class="o_exp" href="javascript:;">0</a></div>\
				<h2>您可能喜欢的</h2>\
				</div>\
				<div class="content" id="mylikecontent"></div>\
				</div>';$_("none_mylike").innerHTML=likehtml;this.initlikeList();}else{$_("none_mylike").style.display="none";}},initlikeList:function(t){if($_("may_like_box").className=='sbox may_like box_close'&&this.calllikemsg==false){var url=(t==0)?'http://msg.ua.56.com/api/maybelike.php?&num=34786455&callback=_h.show_likevideo':'http://msg.ua.56.com/api/maybelike.php?&more=1&callback=_h.show_likevideo';jLoader(url,'','','utf8');}else{if($_("may_like_box").className=='sbox may_like box_close'){$_("may_like_box").className='sbox may_like void';}else{$_("may_like_box").className='sbox may_like box_close';}}},show_video:function(vars,title,view,play){var splayer='<objectdisabled width="298" height="224" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000">\
			<param name="movie" value="httpdisabled://www.56.com/flashApp/v_player_site_index.10.07.05.c.swf">\
			<param value="opaque" name="wmode">\
			<param name="allowScriptAccess" value="always" />\
			<param name="FlashVars" value="'+vars+'">\
			<embeddisabled width="298" height="224" src="httpdisabled://www.56.com/flashApp/v_player_site_index.10.07.05.c.swf" FlashVars="'+vars+'" AllowFullScreen="true" allowScriptAccess="always" wmode="opaque" type="application/x-shockwave-flash" >\
			</embed>\
			</object>';$_("index_video").innerHTML=splayer;$_("index_vt").innerHTML=title;$_("index_cms").innerHTML=view;$_('index_ply').innerHTML=play;},isi:0,view_video:function(i){var str='videodata='+'_^_'+videodata[i].img+'_^_'+videodata[i].flvid+'&vid='+videodata[i].flvid;this.show_video(str,videotitle[i].title,'<s title="参与评论"></s>'+videoview[i].view,'<s title="播放"></s>'+videoview[i].play);if(i!=this.isi){$_("pn_"+this.isi).className='';}
$_("pn_"+i).className='active';this.isi=i;},showPlayRecord:function(){var showRecord=false;var recordHtml='';var rNum=Math.round(Math.random()*10);if(usr.gIsLogin()||_.getCookie('play_rec_conf')||rNum==1){showRecord=true;play_record.init();recordHtml=play_record.sHtml();}
if(showRecord){recordHtml='<div class="sbox record_data box_close" id="record">'+recordHtml+'</div>';document.getElementById('none_recoid').innerHTML=recordHtml;}else{document.getElementById('none_recoid').style.display='none';}},loaddisabledweather:function(){var url_3='homepage_ww_utf8_d.js';jLoader(url_3,"","",'utf8');},checkaccept:function(){var url='getaccept.php';jLoader(url,"","",'utf8');},showwapban:function(type){switch(type){case'wap':document.getElementById('wapbanner').style.display='';break;case'web':default:break;}},loopsearchkey:function(){var n=Math.floor(Math.random()*10+1);if(searchkeys[n]!=undefined){var title=decodeURIComponent(searchkeys[n]['title']);$('#Search_input').val(title);$('#Search_input_foot').val(title);var search=$_('Search_input');if(search.addEventListener){search.addEventListener('onclick',function(){(new RegExp(title,'ig').exec($_('Search_input').value))?$_('Search_input').value='':'';},false);$_('Search_input_foot').addEventListener('onclick',function(){(new RegExp(title,'ig').exec($_('Search_input_foot').value))?$_('Search_input_foot').value='':'';},false);}else if(search.attachEvent){search.attachEvent('onclick',function(){(new RegExp(title,'ig').exec($_('Search_input').value))?$_('Search_input').value='':'';},false);$_('Search_input_foot').attachEvent('onclick',function(){(new RegExp(title,'ig').exec($_('Search_input_foot').value))?$_('Search_input_foot').value='':'';},false);}}},set_logo_extra:function(){return false;var html='<objectdisabled classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="httpdisabled://fpdownloaddisabled.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="55" height="38" id="tileimage" align="middle">\
			<param name="allowScriptAccess" value="sameDomain" />\
		 <param name="menu" value="false" />\
		 <param name="quality" value="high" />\
		 <param name="movie" value="httpdisabled://s1.56img.com/style/globe/v2/img/earthlogo3.swf" />\
		 <!--[if !IE]><!-->\
		 <embeddisabled src="httpdisabled://s1.56img.com/style/globe/v2/img/earthlogo3.swf" menu="false" quality="high" width="55" height="38" name="tileimage" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="httpdisabled://www.macromedia.com/go/getflashplayer" />\
		 <!--<![endif]-->\
		</object>';$('#logo_extra').length>0?$('#logo_extra').html(html):'';},ready:function(id2,id3){this.set_logo_extra();if(usr.gIsLogin()){_.mbox();}
this.loopsearchkey();this.HeaderNav(id2);this.indexLogin(id3);this.checkaccept();this.showPlayRecord();this.attevent();},attevent:function(){var search=$_('Search_input');var btn=$_('Search_btn');btn.onclick='';var tab_24th_1=$_('tab_24th_1');var tab_24th_2=$_('tab_24th_2');var tab_24th_3=$_('tab_24th_3');var tab_cvideo_1=$_('tab_creationVideo_1');var tab_cvideo_2=$_('tab_creationVideo_2');var tab_cvideo_3=$_('tab_creationVideo_3');var tab_tv_1=$_('tab_tv_1');var tab_tv_2=$_('tab_tv_2');var total_24h=3;var total_cvideo=3;var delaytime=400;if(search.addEventListener){try{$_('header_serach').addEventListener('onsubmit',function(){setStat('i_search_c');},false);search.addEventListener('input',function(){jLoad.eHandle(addEventListener);},false);search.addEventListener('blur',function(){jLoad.jBlur();},false);tab_cvideo_1.addEventListener('mouseover',function(){c_over('tab_creationVideo_1','creationVideo1','1',total_cvideo);},false);tab_cvideo_2.addEventListener('mouseover',function(){c_over('tab_creationVideo_2','creationVideo2','2',total_cvideo);},false);tab_cvideo_3.addEventListener('mouseover',function(){c_over('tab_creationVideo_3','creationVideo3','3',total_cvideo);},false);tab_tv_1.addEventListener('mouseover',function(){setTimeout(function(){clickthis('tab_tv_1','con_tv_1','tab_tv_2','con_tv_2');},delaytime);},false);tab_tv_2.addEventListener('mouseover',function(){setTimeout(function(){clickthis('tab_tv_2','con_tv_2','tab_tv_1','con_tv_1');},delaytime);},false);tab_24th_1.addEventListener('mouseover',function(){setTimeout(function(){mouse_over('tab_24th_1','con_24th_1','1',total_24h);},delaytime);},false);tab_24th_2.addEventListener('mouseover',function(){setTimeout(function(){mouse_over('tab_24th_2','con_24th_2','2',total_24h);},delaytime);},false);tab_24th_3.addEventListener('mouseover',function(){setTimeout(function(){mouse_over('tab_24th_3','con_24th_3','3',total_24h);},delaytime);},false);}catch(e){}}else if(search.attachEvent){$_('header_serach').attachEvent('onsubmit',function(){setStat('i_search_c');},false);search.attachEvent('onkeyup',function(){jLoad.eHandle(event);});search.attachEvent('onblur',function(){jLoad.jBlur();});tab_24th_1.attachEvent('onmouseover',function(){setTimeout(function(){mouse_over('tab_24th_1','con_24th_1','1',total_24h);},delaytime);},false);tab_24th_2.attachEvent('onmouseover',function(){setTimeout(function(){mouse_over('tab_24th_2','con_24th_2','2',total_24h);},delaytime);},false);tab_24th_3.attachEvent('onmouseover',function(){setTimeout(function(){mouse_over('tab_24th_3','con_24th_3','3',total_24h);},delaytime);},false);tab_cvideo_1.attachEvent('onmouseover',function(){c_over('tab_creationVideo_1','creationVideo1','1',total_cvideo);},false);tab_cvideo_2.attachEvent('onmouseover',function(){c_over('tab_creationVideo_2','creationVideo2','2',total_cvideo);},false);tab_cvideo_3.attachEvent('onmouseover',function(){c_over('tab_creationVideo_3','creationVideo3','3',total_cvideo);},false);tab_tv_1.attachEvent('onmouseover',function(){setTimeout(function(){clickthis('tab_tv_1','con_tv_1','tab_tv_2','con_tv_2');},delaytime);});tab_tv_2.attachEvent('onmouseover',function(){setTimeout(function(){clickthis('tab_tv_2','con_tv_2','tab_tv_1','con_tv_1');},delaytime);});}}};function fCheck(){var warning=$_('warning');var o=$_('urslogin');if(o.username.value==''){warning.innerHTML='<b></b>请输入用户帐号！';o.username.focus();return false;}else if(o.password.value==''){warning.innerHTML='<b></b>请输入用户密码！';o.password.focus();return false;}
warning.innerHTML='';warning=null;setStat('i_nav_login');o.submit();return true;};function searchFoot(searchform){searchform=searchform||'search';document.charset='utf-8';if(document.forms[searchform].action.indexOf('tieba.56.com')>-1){document.getElementById('kw').value=document.getElementById('Search_input').value;document.getElementById('Search_footinput').value='';}
setStat('i_search_c');document.forms[searchform].submit();return true;}
function flashchangetitle(id){id=id-1;document.getElementById("videoshow_title").innerHTML=videotitle[id]['title'];document.getElementById("videoshow_info").innerHTML=videoinfo[id]['info'];}
function clickthis(m,l,hm,hl){document.getElementById(m).className='active';document.getElementById(l).style.display='block';document.getElementById(hm).className=' ';document.getElementById(hl).style.display='none';}
function mouse_over(){var i,c,numargs=arguments.length;var topshowprefix=arguments[0];var t_length=topshowprefix.length;var is_active=topshowprefix.substr(t_length-1,1);var tab_name=topshowprefix.substr(0,t_length-1);var listshowprefix=arguments[1];var b_length=listshowprefix.length;var con_name=listshowprefix.substr(0,b_length-1);var shownum=arguments[2];var totalnum=arguments[3];if(numargs<5){cname="active";}else{cname=arguments[4];}
for(var i=1;i<=totalnum;i++){if(is_active==i){document.getElementById(tab_name+i).className=cname;document.getElementById(con_name+i).style.display='block';}else{document.getElementById(tab_name+i).className='';document.getElementById(con_name+i).style.display='none';}}
return 0;}
function c_over(topshowprefix,listshowprefix,shownum,totalnum){document.getElementById('special_tile').innerHTML=cdata[shownum-1]['title'];document.getElementById('special_topic').innerHTML=shownum;mouse_over(topshowprefix,listshowprefix,shownum,totalnum,'current');}
function login(){var username=$_('username');username.style.borderBottom="#ffaa00 1px solid";username.style.borderTop="#ffaa00 1px solid";username.style.borderRight="#ffaa00 1px solid";username.style.borderLeft="#ffaa00 1px solid";username.focus();username=null;var password=$_('password');password.style.borderBottom="#ffaa00 1px solid";password.style.borderTop="#ffaa00 1px solid";password.style.borderRight="#ffaa00 1px solid";password.style.borderLeft="#ffaa00 1px solid";password=null;}
function login_box_success(){window.location.href=window.location.href.replace(/#/g,'');}
function login_box_error(){var warning=$_('warning');var o=$_('urslogin');warning.innerHTML='<b></b>输入的用户名或密码不对哦！';o.username.focus();}
function stop_scroll(){scroll_status=0;}
function run_scrioll(){scroll_status=1;}
function scroller(id){if(scroll_status==0){setTimeout(function(){scroller('scroller_ul');},4000);return;}
$('ul#scroller_ul li:first-child').animate({"margin-top":-76},"normal","linear",function(){var scrollhtml=$('ul#scroller_ul li:first-child').html();$('ul#scroller_ul li:first-child').remove();$('ul#scroller_ul').append('<li onmouseover="scroll_status = 0;" onmouseout="scroll_status = 1;">'+scrollhtml+'</li>');});setTimeout(function(){scroller('scroller_ul');},3000);}
(function($){$.fn.scroll=function(options){var opts=$.extend({},$.fn.scroll.deflunt,options);var obj=$(this);this.find("li:first").animate({"margin-top":-opts.scrollH},opts.speed,function(obj){});};$.fn.scroll.deflunt={status:'scroll_status',scrollH:54,speed:'normal',timer:3000};})(jQuery)
var ztscroll=0;window.onscroll=function(){if(ztscroll!=0||(document.documentElement.scrollTop+document.body.scrollTop)<500)return;scroller('scroller_ul');ztscroll=1;}