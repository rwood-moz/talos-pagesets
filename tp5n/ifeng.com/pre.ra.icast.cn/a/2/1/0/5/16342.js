(function() {
	var a = document.cookie.split("; ");
	function gc(s,n) {
		for (var i=0; i < s.length; i++) {
			var b = s[i].split("=");
			if ( n == b[0] && typeof(b[1])!='undefined') {
				return unescape(b[1]);
			}
		}
		return '';
	}
	var cookie=gc(a,'preViewCookie');
	var r=document.referrer+'';
	var p = gc(cookie.split('&'),'p');
	var h = 'http://pre.ra.icast.cn/preview.htm'.toLowerCase();
	var h1 = '';
	try{h1 = top.location.href.toLowerCase()}catch(e){}
	var pflag = '$$$'.toLowerCase();
	if ((cookie>''|| r.substr(0,h.length).toLowerCase()==h) || h1.substr(h1.length-pflag.length)==pflag ) {
		void('<script language="JavaScript" src="httpdisabled://cast.ra.icast.cn/a/?aid=16342&pid=2105"></scr'+'ipt>');
	} else {
void('<iframe style=\'position:absolute;left:0px;top:0px\' src=\'http://track2.ra.icast.cn/2.htm\' frameborder=0 scrolling=no width=1 height=1></iframe>');var _iCast_pv_img=new Image(); setTimeout(function(){_iCast_pv_img.src='../icast.html';},0);if(typeof(track_pool)=="undefined")window.track_pool=[];
//(track_pool[track_pool.length]=new Image()).src = 'http://kw.ra.icast.cn/?pid=2105&aid=16342&cid=9165&keyword=$run:keyword1$&weight=$run:weight$&cd=1&'+Math.random();
window._iCast_Controller_init={'ad_apc':2,'ad_interval':0,'ad_life':24,'downloaddisabled_path':'http://img.ifeng.com/tres/recommend/cpro/icast/cr/2011/04/16342/9165/','m_name':'1.swf','m_w':750,'m_h':400,'m_rftype':14,'m_rfarea':2,'m_rfselfarea':2,'m_rfobj':'','m_xpos':0,'m_ypos':40,'m_clicktrack':'','m_volumn':0,'m_wmode':'transparent','m_zindex':2147483647,'m_closebehavior':'close','f_name':'2.swf','f_w':25,'f_h':190,'f_rftype':14,'f_rfarea':9,'f_rfselfarea':9,'f_rfobj':'','f_xpos':0,'f_ypos':-310,'f_clicktrack':'','f_clickurl':'http://sc.ifeng.com/event.ng/Type=click&FlightID=73632&AdID=70933&TargetID=209&Segments=169,1&Targets=209&Values=232,292,297,204&RawValues=&Redirect=http://mediacontact.allyes.com/main/adfclick?db=mediacontact&bid=25416,12707,54&cid=970,303,1&sid=25418&show=ignore&url=http://www.volvocars.com/zh-CN/campaigns/s60launch/Pages/default.aspx','f_wmode':'transparent','f_zindex':2147483646,'m_startcmd':'','m_endcmd':'','ad_startcmd':'','ad_endcmd':'','ad_showbtn':0,'top_gap':0,'c_name':'','c_x':0,'c_y':0,'set_replay_track':1,'f_l_name':'','f_l_w':0,'f_l_h':0,'f_l_rftype':14,'f_l_rfarea':7,'f_l_rfselfarea':7,'f_l_rfobj':'','f_l_xpos':0,'f_l_ypos':0,'f_l_clickurl':'','f_l_clicktrack':'','ad_volctrl':0,'m_timelimit':0,'ad_id':'16342','creative_id':'9165','pos_id':'2105','um_act':'','clk_url':'http://sc.ifeng.com/event.ng/Type=click&FlightID=73632&AdID=70933&TargetID=209&Segments=169,1&Targets=209&Values=232,292,297,204&RawValues=&Redirect=http://mediacontact.allyes.com/main/adfclick?db=mediacontact&bid=25416,12707,54&cid=970,303,1&sid=25418&show=ignore&url=http://www.volvocars.com/zh-CN/campaigns/s60launch/Pages/default.aspx','um_imp':'','um_clk':'','track_url':'http://track.ra.icast.cn/icast/?keyword=&cid=9165&r=[rnd]&','sm_imp':'http://post.ra.icast.cn/t/?c=9165&a=16342&t=imp&p=2105&imp=1&r=[rnd]','sm_clk':'http://post.ra.icast.cn/t/?c=9165&a=16342&t=clk&p=2105&clk=1&r=[rnd]','sm_act':''};
_iCast_Controller_init["m_endcmd"]=_iCast_Controller_init["ad_endcmd"]='IFENGDODGE.controller.play("floatlayer");';
window.iCast_Start_Enabled_2105 = false;
window.iCast_Play_2105=function(){
iCast_Start_Enabled_2105 = true;
}
if(typeof(ifeng_Sc_SmartCount)!="undefined"&&ifeng_Sc_SmartCount!="")
{
_iCast_Controller_init["sm_imp"] += "\r\n" + ifeng_Sc_SmartCount;
}
if(typeof(Ifeng_Sc_FloatMedia_Sleep)=="number"&&Ifeng_Sc_FloatMedia_Sleep>0)
{
setTimeout("iCast_Start_Enabled_2105 = true;", Ifeng_Sc_FloatMedia_Sleep*1000);
}else{
 IFENGDODGE.set_stock('floatlayer', {"timer":"8","func":iCast_Play_2105,"level":1});
}
void('<script src="httpdisabled://img.ifeng.com/tres/recommend/cpro/icast/cr/2011/04/16342/9165/icast.js"></scr'+'ipt>');
	}
})(); 
