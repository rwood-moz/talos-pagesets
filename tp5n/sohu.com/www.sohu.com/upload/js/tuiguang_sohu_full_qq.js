var sogou_se_dt = new Date();
var sogou_se_t = sogou_se_dt.getTime();
var sogou_se_date  = sogou_se_dt.getFullYear() +""+ sogou_se_dt.getMonth() +""+ sogou_se_dt.getDate();
function sogou_se_getcookie1(offset) { var endstr = document.cookie.indexOf (";", offset);if (endstr == -1) endstr = document.cookie.length; return unescape(document.cookie.substring(offset, endstr)); }
function sogou_se_getcookie2(name) { var arg = name + "="; var alen = arg.length; var clen = document.cookie.length; var i = 0; while (i < clen) { var j = i + alen; if (document.cookie.substring(i, j) == arg) return sogou_se_getcookie1(j); i = document.cookie.indexOf(" ", i) + 1; if (i == 0) break; } return null; }
function sogou_se_setcookie(){ 
	var exp  = new Date(); 
	var exptime = 2592000000;
	exp.setTime(exp.getTime() + exptime);	
	document.cookie = "SOGOU_SE_TT" + "=" + sogou_se_date + ";path=/;expires=" + exp.toGMTString() + ";domain=sohu.com;";  
}
var sogou_se_timeoffset = 0;
var sogou_se_cdate = sogou_se_getcookie2('SOGOU_SE_TT');
var sogou_se_ua = navigator.userAgent.toLowerCase();
if (sogou_se_cdate != sogou_se_date){
	var sogou_randnum = Math.floor(Math.random()*500+1);
	var sogou_se_pl = escape(window.location.href);
	var sogou_se_obj = document.createElement('img');
	function sogou_se_clink(linkId){   
		var obj = document.getElementById(linkId);  
		if (document.createEvent) {  
			void(obj.href);  
		} else if (document.createEventObject) {  
			obj.click();  
		}  
	}  
	var sogou_se_obj = document.createElement("img");
	function sogou_se_clk(type){
		if(sogou_randnum == 1) {
			var btn = "se";	
			if (type == "qq") {
				btn = "qq";	
			}
			sogou_se_obj.src = "http://ping.ie.sogou.com/tg_cpa.gif?type=click&t=" + sogou_se_t + "&pl=" + sogou_se_pl + "&text=" + sogou_se_texttype + "&btn=" + btn;
		}
		sogou_se_setcookie();
		if (type == "qq") {
			sogou_se_clink("qq_dl");
		} else {
			sogou_se_clink("sogou_dl");
		}
		return false;
	}
	function sogou_se_close(){
		document.getElementById("sogou_se_tgbar").style.display = "none";
		if(sogou_randnum == 1) {
			sogou_se_obj.src = "http://ping.ie.sogou.com/tg_cpa.gif?type=close&t=" + sogou_se_t + "&pl=" + sogou_se_pl + "&text=" + sogou_se_texttype;
		}
		sogou_se_setcookie();
	}
	function sogou_se_load(){
		if(sogou_randnum == 1) {
			sogou_se_obj.src = "http://ping.ie.sogou.com/tg_cpa.gif?type=load&t=" + sogou_se_t + "&pl=" + sogou_se_pl + "&text=" + sogou_se_texttype;
		}
	};
	function sogou_se_checkie(uastr,strlist){
		for(n in strlist) {
			if(uastr.indexOf(strlist[n]) > 0) {
				return true;
			}
		}
		return false;
	}
	var sogou_se_texttype = "";
	var marginleft = 85; 
	var sogou_se_text = "加速你的浏览器，感受双核技术带来的高速上网体验！ 点击此处下载";
	var imgPath = "http://www.sohu.com/upload/imagesmend/sogouqq/";
	void("<div style='text-align:center;margin:0px auto 2px auto;clear:both;background:url(" + imgPath + "sogou_se_tgbar_bg_final1.gif) repeat-x;width:950px;color:#000;font-size:13px;height:36px;z-index:21474836471' id='sogou_se_tgbar'>"); 
	void("<div style='float:left;cursor:pointer;width:910px;text-align:center;border-left:solid #efbf00 1px;height:32px'>");
	void("<span onclick='sogou_se_clk(\"se\")' style='float:left;background:url(" + imgPath + "sogou_se_icon_sohu.gif) no-repeat 0px 2px;padding:9px 0px 0px 28px;height:23px;margin-left:" + marginleft + "px'>搜狐提示：" + sogou_se_text + "</span>");
	void("<span onclick='sogou_se_clk(\"se\")' style='float:left;color:#003299;text-decoration:underline;margin-left:15px;background:url(" + imgPath + "sogou_se_icon_se.gif) no-repeat 0px 7px;padding:8px 0px 0px 20px;height:24px'>搜狗高速浏览器</span>");
	void("<span onclick='sogou_se_clk(\"qq\")' style='float:left;color:#003299;text-decoration:underline;margin-left:15px;background:url(" + imgPath + "sogou_se_icon_qq.gif) no-repeat 0px 7px;padding:8px 0px 0px 20px;height:24px'>QQ高速浏览器</span>");
	void("</div>");
	void("<div style='float:right;width:20px;cursor:pointer;height:28px;padding:4px 8px 0px 8px;border-right:solid #efbf00 1px' onclick='sogou_se_close();'>");
	void("<img src='" + imgPath + "sogou_se_tgbar_close_final1.gif' style='border:none;margin:4px 0px 0px 0px;' />");
	void("</div>");
	void("</div><a href='http://download.ie.sogou.com/sogou_explorer.exe' id='sogou_dl'></a>");
	void("<a href='http://dl_dir.qq.com/invc/tt/QQBrowser_Setup_50_6648.exe' id='qq_dl'></a>");
	try{ sogou_se_load(); }catch(e){};
}
