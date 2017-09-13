var play_record={page:'page',getMethod:function(){return(this.page=='play')?'getList':'both';},loginHtml:function(){return usr.gIsLogin()?'':'<span class="log">想永久保存观看记录？请<a href="javascript:play_record.tryLogin();">登陆</a></span>';},sHtml:function(){return'<div class="title" style="cursor: pointer;" onmousedown="play_record.initList();">\
                    <div class="starus"><a href="javascript:;" class="o_exp">0</a></div>\
                    <h2>您的观看记录</h2>\
                </div>\
                <div class="content">\
                    <p class="non" id="no_record" style="display:none;">暂无观看记录</p>\
                    <ul class="list" id="rList" onmousedown="setStat(\'voidlist\');"></ul>\
                    <p class="opt">'
+this.loginHtml()+
'<a href="javascript:play_record.delAll();">清空记录</a><!--<a href="#">更多记录</a>-->\
                    </p>\
                </div>';},sysConfig:{tips:1,isSave:1,showNum:5},userConfig:{},getConfig:function(){var conf=_.getCookie('play_rec_conf');if(conf){conf=eval('('+conf+')');}else{conf=this.sysConfig;this.setConfig(conf.tips,conf.isSave,conf.showNum);}
var uc=this.userConfig;uc.tips=conf.tips;uc.isSave=conf.isSave;uc.showNum=conf.showNum;},setConfig:function(tips,isSave,showNum){_.setCookie('play_rec_conf','{"tips":"'+tips+'","isSave":"'+isSave+'","showNum":"'+showNum+'"}',8760,'56.com');},isInitList:false,initList:function(){if(this.userConfig.isSave==1&&this.isInitList===false){var do_method=this.getMethod();var api='http://msg.ua.56.com/api/player.php?do='+do_method+'&callback=parent.play_record.callBack';window.add_favorite.location=api;setStat('voidbox');}else{this.callBack();}},showList:function(){var rec=_.e("record");if(rec.className=='sbox record_data box_close'){var rList=_.e('rList');var data=this.listData;if(data[0]==undefined){_.e('no_record').style.display='';rList.style.display='none';}else if(rList.innerHTML==''){var showNum=5;var listHtml='';var play_rec=_.getCookie('play_rec');var _st='';if(play_rec){play_rec=eval('('+play_rec+')');if(data[0]==undefined||parseInt(play_rec.id)!=data[0].id){var percent=0;if(play_rec.playtime==play_rec.totaltime){percent=100;}else{percent=Math.floor(play_rec.playtime*100000/play_rec.totaltime);}
percent=percent<1?1:percent;var _title=unescape(play_rec.Subject);_st=this.timeToStr(play_rec.playtime,false);var zh_st=this.timeToStr(play_rec.playtime,true);listHtml+='<li id="rcli_ck">\
                                        <h3><a href="'+play_rec.go_url+'#'+_st+'" title="'+_title+'">'+_title+'</a></h3>\
                                        <p class="i">'+
(percent>90?('已看完<a href="'+play_rec.go_url+'">从头观看</a>'+(play_rec.next_url?'<a href="'+play_rec.next_url+'">下一集</a>':'')):'观看至'+zh_st+'<a href="'+play_rec.go_url+'#'+_st+'" title="已观看'+percent+'%">继续观看</a>')+
'</p>\
                                        <a href="javascript:play_record.delCookieRecord('+play_rec.id+');" class="close">x</a>\
                                    </li>';showNum=4;}}
for(var i in data){if(data.hasOwnProperty(i)&&data[i]){if(i>=showNum){break;}
_st=this.timeToStr(data[i].playtime,true);listHtml+='<li id="rcli_'+i+'">\
                                        <h3><a href="'+data[i].go_url+'" title="'+data[i].Subject+'">'+data[i].Subject+'</a></h3>\
                                        <p class="i">'+
(data[i].finished==1?('已看完<a href="'+data[i].go_url+'">从头观看</a>'+(data[i].next_url?'<a href="'+data[i].next_url+'">下一集</a>':'')):'观看至'+_st+'<a href="'+data[i].go_url+'" title="已观看'+data[i].percent+'%">继续观看</a>')+
'</p>\
                                        <a href="javascript:play_record.delRecord('+i+');" class="close">x</a>\
                                    </li>';}}
rList.innerHTML=listHtml;}
rec.className="sbox record_data void";}else{rec.className='sbox record_data box_close';}},callBack:function(record){this.isInitList=true;if(record&&record.data){this.listData=record.data;}
this.showList();},listData:{},delCookieRecord:function(id){_.setCookie('play_rec','',8760,'56.com');var api='http://msg.ua.56.com/api/player.php?do=Del&id='+id;jLoader(api,false,'','utf-8');_.e('rcli_ck').style.display='none';},delRecord:function(i){var data=this.listData;if(data[i].id){var api='http://msg.ua.56.com/api/player.php?do=Del&id='+data[i].id;jLoader(api,false,'','utf-8');_.e('rcli_'+i).style.display='none';}},delAll:function(){var r=confirm("您真的要清空自己的“观看记录”吗？")
if(r==true){_.setCookie('play_rec','',8760,'56.com');var api='http://msg.ua.56.com/api/player.php?do=Del&del_all=1';jLoader(api,false,'','utf-8');_.e('rList').innerHTML='';this.listData={};setStat('ua_clear');}},init:function(){this.getConfig();},timeToStr:function(t,zh){zh=zh||true;var str='',h=i=s=0;if(t<60){s=t;}else if(t<3600){i=Math.floor(t/60);s=t%60;}else{h=Math.floor(t/3600);i=Math.floor((t-h*3600)/60);s=t%60;}
if(zh){str=h?(h+'时'+i+'分'+s+'秒'):(i?(i+'分'+s+'秒'):(s+'秒'));}else{h=(h>0&&h<10)?'0'+h:'';i=i<10?'0'+i:i;s=s<10?'0'+s:s;str=h?(h+':'+i+':'+s):(i+':'+s);}
return str;},tryLogin:function(){try{login_box();}catch(e){login();}}};maybelike={rows:6,mainID:"maybelike",sHtml:function(){var s='<div class="title2">\
						<span class="side"><a title="更多您可能喜欢的视频" href="javascript:maybelike.loaddisabled(1);">更多</a></span>\
						<div class="starus" onmousedown="maybelike.tog();"><a class="o_exp" href="javascript:;">0</a></div>\
						<h2 onmousedown="maybelike.tog();">您可能喜欢的</h2>\
					</div>\
					<div class="content" id="mbl_content">\
						<ul class="v_list">\
							<{loop}>\
								<li class="<{mbl_li_class}>">\
									<a onmousedown="setStat(\'ua_like\',1000)" target="_blank" title="<{mbl_title}>" class="img" href="<{mbl_url}>"><img alt="<{mbl_title}>" src="<{mbl_img}>" onerror="src=\'http://www.56.com/img/flv_no_photo.gif\'"><{mbl_title_limit}></a>\
									<span class="ply"><s title="播放"></s><{mbl_views}></span>\
								</li>\
							<{/loop}>\
						</ul>\
					</div>';return s;},loaddisabled:function(more){more=more||0;var api='http://msg.ua.56.com/api/maybelike.php?more='+more+'&callback=maybelike.loaddisabledCallback';if(_.e(this.mainID)){try{if(1||_.getCookie("uaid")){jLoader(api);}}catch(e){}
}else{}},loaddisabledCallback:function(o){if(o&&o.data&&o.data.length>0){var tpl=this.sHtml();var li_class="",n=1,mc="",loop,d=o.data;loop=tpl.match(/<\{loop\}>(.*?)<\{\/loop\}>/);for(var i in d){if(d.hasOwnProperty(i)&&d[i]){if(n>this.rows){break;}
if(n%3==0){li_class="last"}else{li_class=""};d[i]["Subject_limit"]=_.substr(d[i]["Subject"],11);mc+=loop[1].replace("<{mbl_li_class}>",li_class).replace("<{mbl_title_limit}>",d[i]["Subject_limit"]).replace(/<\{mbl_url\}>/g,d[i]["url"]).replace(/<\{mbl_img\}>/g,d[i]["img"]).replace(/<\{mbl_title\}>/g,d[i]["Subject"]).replace(/<\{mbl_views\}>/g,d[i]["times"])+"\n";n++;}}
tpl=tpl.replace(loop[0],mc);if(_.e(this.mainID)){_.e(this.mainID).innerHTML=tpl;_.e(this.mainID).className="may_like void";_.e(this.mainID).style.display="";}
if(o.uv_stat==1){setStat("ua_like_show");}}else{if(_.e(this.mainID)){_.e(this.mainID).style.display="none";}}},tog:function(){if(_.e(this.mainID).className=="may_like void"){_.e(this.mainID).className="may_like box_close";}else{_.e(this.mainID).className="may_like void";}}};