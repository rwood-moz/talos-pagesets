	/* showOfTime */
function showOfTime(get_str,star_date,end_date){
	var temp_date=new Date();
	if(temp_date>star_date&&temp_date<end_date){
		void(get_str);
	}
}
function hexunOutTimer(yr_n,mt_n,dt_n,hr_n,mn_n){
	var temp_date=new Date();
	if(yr_n!=null){temp_date.setYear(yr_n);}
	if(mt_n!=null){temp_date.setMonth(mt_n-1);}
	if(dt_n!=null){temp_date.setDate(dt_n);}
	if(hr_n!=null){temp_date.setHours(hr_n);}
	if(mn_n!=null){temp_date.setMinutes(mn_n);}
	return temp_date;
}
/* date */
	var temp_date=new Date();
/* fscommand */
	var InternetExplorer = navigator.appName.indexOf("Microsoft") != -1;
	function bigFloatMediaInner_DoFSCommand(command, args) {
		//var bigFloat_obj = InternetExplorer ? bigFloatMediaInner : document.bigFloatMediaInner;
                  //备：变量bigFloat_obj的返回方法修改过
                  var bigFloat_obj = InternetExplorer? document.bigFloatMediaInner : document.getElementById('bigFloatMediaInner');
		switch(command){
		case 'closeAD':
			if(document.getElementById('streamMediaBShell').style.display!='none'){
				publicMethod_obj.change('streamMediaBShell','streamMediaSShell');
				clearInterval(publicMethod_obj.streamClearMedia_obj);
                                     var fo=document.getElementById(bigFloatMediaInner);

                                     if(fo!=null){

                                               fo.SetVariable("goon",0);

                                     }  

			}
			break;
		case 'enable':
			bigFloat_obj.SetVariable("enabled_str","1");
			break;
		}
	}
	if (navigator.appName && navigator.appName.indexOf("Microsoft") != -1 && navigator.userAgent.indexOf("Windows") != -1 && navigator.userAgent.indexOf("Windows 3.1") == -1) {
		void('<script language=\"VBScript\"\>\n');
		void('On Error Resume Next\n');
		void('Sub bigFloatMediaInner_FSCommand(ByVal command, ByVal args)\n');
		void('	Call bigFloatMediaInner_DoFSCommand(command, args)\n');
		void('End Sub\n');
		void('</script\>\n');
	}
	var InternetExplorer = navigator.appName.indexOf("Microsoft") != -1;
	function fullScreeMediaInner_DoFSCommand(command, args) {
		var fullScree_obj = InternetExplorer ? fullScreeMediaInner : document.fullScreeMediaInner;
		switch(command){
		case 'closeAD':
			if(document.getElementById('fullScreeMedia').style.display!='none'){
				publicMethod_obj.change('fullScreeMedia');
				clearInterval(publicMethod_obj.fullClearMedia_obj);
			}
			break;
		case 'enable':
			fullScree_obj.SetVariable("enabled_str","1");
			break;
		}
	}
	if (navigator.appName && navigator.appName.indexOf("Microsoft") != -1 && navigator.userAgent.indexOf("Windows") != -1 && navigator.userAgent.indexOf("Windows 3.1") == -1) {
		void('<script language=\"VBScript\"\>\n');
		void('On Error Resume Next\n');
		void('Sub fullScreeMediaInner_FSCommand(ByVal command, ByVal args)\n');
		void('	Call fullScreeMediaInner_DoFSCommand(command, args)\n');
		void('End Sub\n');
		void('</script\>\n');
	}
/* public */
	var publicMethod_obj=new Object();
	publicMethod_obj.exchangeInner = function(){
		if(document.getElementById(this.id)){
			if(this.enabled){
			      document.getElementById(this.id).innerHTML=this.inner;
                                  if(this.paddingTop){
				     document.getElementById(this.id).style.paddingTop=this.paddingTop+'px';
			       }
			       if(this.paddingBottom){
			              document.getElementById(this.id).style.paddingBottom=this.paddingBottom+'px';
			       }
                                  if(this.paddingLeft){
			              document.getElementById(this.id).style.paddingLeft=this.paddingLeft+'px';
			       }
			}
		}
	}
	publicMethod_obj.onResize=function(){
		if(this.maxWidth!=null&&hexunPageMode_obj.clientWidth>this.maxWidth){
			var tempFrame=(hexunPageMode_obj.clientWidth-this.maxWidth)/2;
		}else{
			var tempFrame=0;
		}
		for(var loops in this.list_array){
			if(document.getElementById(this.list_array[loops])&&document.getElementById(this.list_array[loops]).style.display!='none'){
                                    var _scrollTop=window.pageYOffset?document.documentElement.scrollTop || window.pageYOffset:hexunPageMode_obj.scrollTop//2010.06.28修改
				switch(this.align){
					case 'left':
						document.getElementById(this.list_array[loops]).style.left=tempFrame+this.marginX+'px';
						break;
					case 'right':
						document.getElementById(this.list_array[loops]).style.left=hexunPageMode_obj.scrollLeft+hexunPageMode_obj.clientWidth-tempFrame-this.width-(this.marginX?this.marginX:0)+'px';
						break;
					case 'center':
						document.getElementById(this.list_array[loops]).style.left=(hexunPageMode_obj.clientWidth-this.width)/2+hexunPageMode_obj.scrollLeft+'px';
						break;
				}
				switch(this.valign){
					case 'top':
						document.getElementById(this.list_array[loops]).style.top=_scrollTop+(this.marginY?this.marginY:270)+'px';
						break;
					case 'bottom':
						document.getElementById(this.list_array[loops]).style.top=hexunPageMode_obj.clientHeight+_scrollTop-this.height-(this.marginY?this.marginY:0)+'px';
						break;
					case 'center':
						document.getElementById(this.list_array[loops]).style.top=(hexunPageMode_obj.clientHeight-this.height)/2+_scrollTop+'px';
						break;
					default :
						document.getElementById(this.list_array[loops]).style.top=this.marginY+'px';
						break;
				}
			}
		}
	}
	voidDiv=function(id1_str,id2_str,get_w,get_h,back_str,close_obj,replay_obj,static_bool){
		var temp_str='<div id="'+id1_str+'" style="display:block;';
		if(static_bool==null){
			temp_str+='position:absolute;';
		}
		temp_str+='width:'+get_w+'px;';
		if(back_str!=null){
			temp_str+='background:'+back_str+';';
		}
		temp_str+='"><div id="'+id2_str+'" style="';
		temp_str+='height:'+get_h+'px;" class="adcLoadingTip"><br />内容装载中...</div>';
		if(replay_obj!=null){
			temp_str+=publicMethod_obj.creatReplayBtn(replay_obj);
		}
		if(close_obj!=null){
			temp_str+=publicMethod_obj.creatCloseBtn(close_obj);
		}
		temp_str+='<div style="clear:both"></div></div>';
		return temp_str;
	}
	publicMethod_obj.creatReplayBtn=function(replay_obj){
		var temp_str='<div style="cursor:hand;width:'+replay_obj.width+'px;line-height:14px;height:14px;float:'+replay_obj.align+';text-align:center;margin:0px;padding:2px 0px;';
		if(replay_obj.backgroud!=null){
			temp_str+='background:'+replay_obj.backgroud+';';
		}
		temp_str+='"';
		temp_str+=' onclick="publicMethod_obj.replay(\''+replay_obj.instance+'\''
		if(replay_obj.closed!=null){
			temp_str+=',\''+replay_obj.closed+'\'';
		}
		if(replay_obj.flash!=null){
			temp_str+=',\''+replay_obj.flash+'\'';
		}
        if(replay_obj.maxTimer!=null){
			temp_str+=',\''+replay_obj.maxTimer+'\'';
		}
		temp_str+=')"';
		temp_str+='><a onclick="return false" href="#" style="color:'+replay_obj.color+';font-size:12px;font-weight:'+replay_obj.bold+';text-decoration:'+replay_obj.decoration+'">重播</a></div>';
		return temp_str;
	}
	publicMethod_obj.creatCloseBtn=function(close_obj){
		var temp_str='<div style="cursor:hand;width:'+close_obj.width+'px;line-height:14px;height:14px;float:'+close_obj.align+';text-align:center;margin:0px;padding:2px 0px;';
		if(close_obj.backgroud!=null){
			temp_str+='background:'+close_obj.backgroud+';';
		}
		temp_str+='"';
		temp_str+=' onclick="publicMethod_obj.change(\''+close_obj.instance+'\'';
		if(close_obj.next!=null){
			temp_str+=',\''+close_obj.next+'\'';
		}
		temp_str+=')"><a onclick="return false" href="#" style="color:'+close_obj.color+';font-size:12px;font-weight:'+close_obj.bold+';text-decoration:'+close_obj.decoration+'">关闭</a></div>'
		return temp_str;
	}
	publicMethod_obj.change=function(close_str,next_str){ 
		var _bool=true;
		if(close_str!=null){
			if(close_str=='streamMediaBShell'&&document.getElementById(close_str).style.display=='none'){
				_bool=false;				
			}			
			document.getElementById(close_str).style.display='none';
			if(close_str=='streamMediaBShell'){
			    if(publicMethod_obj.streamClearMedia_obj){clearInterval(publicMethod_obj.streamClearMedia_obj)};
			}
			//当关闭全屏时
			if(close_str=='fullScreeMedia'){
			    if(publicMethod_obj.fullClearMedia_obj){clearInterval(publicMethod_obj.fullClearMedia_obj)};
			    document.getElementById('topFullWidthBanner').style.display='block';
				      //如果对联广告存在，打开对联
				      if(document.getElementById('hexunCouplet01')){document.getElementById('hexunCouplet01').style.display="block"};
				      //如果翻卷广告存在，打开翻卷
				      if(document.getElementById('hexunFanJuan01')){
				        	       document.getElementById('hexunFanJuan01').style.display="block";
					                publicMethod_obj.change('scrollMediaSShell','scrollMediaBShell');
					                publicMethod_obj.gotoFrame('scrollMediaBInner',2);
		                     if(document.getElementById('scrollMediaInner')&&InternetExplorer){
		 	                              document.getElementById('scrollMediaInner').GotoFrame(6);	 
		                	              document.getElementById('scrollMediaInner').play();	 
		 	                    }
				      	};
				      	//如果左侧logo存在，打开左logo
				       if(document.getElementById('leftFloatLogoShell01')){document.getElementById('leftFloatLogoShell01').style.display="block"};
				       //如果右侧logo存在，打开右logo
               if(document.getElementById('rightFloatLogoShell01')){document.getElementById('rightFloatLogoShell01').style.display="block"};
               //如果流媒体广告存在
			       	if(document.getElementById('streamMediaBShell')&&document.getElementById('streamMediaSShell')){
			       		          if(document.getElementById('scrollMediaInner')&&InternetExplorer){
		 	                              document.getElementById('bigFloatMediaInner').GotoFrame(1);	 
		                	              document.getElementById('bigFloatMediaInner').play();	 
		 	                    }
					                publicMethod_obj.change('streamMediaSShell','streamMediaBShell');//关闭小logo,打开大logo					                
					               //播放时间结束后，关闭大logo，打开小logo
		                     publicMethod_obj.streamClearMedia_obj=setInterval(function(){
			                              clearInterval(publicMethod_obj.streamClearMedia_obj);
			                              publicMethod_obj.change('streamMediaBShell','streamMediaSShell');
		          },publicMethod_obj.streamClearMedia_maxTimer);
					}
			}
		}
		if(next_str!=null&&_bool){
			document.getElementById(next_str).style.display='block';
			   if(document.getElementById('streamMediaS')&&document.getElementById('streamMediaS').innerHTML=='空'){
				 document.getElementById('streamMediaSShell').style.display='none';
			}
		}
		return false;
	}
	publicMethod_obj.replay=function(get_str,close_str,flash_str,maxTimer){
		document.getElementById(get_str).style.display='block';
		//var bigFloat_obj = InternetExplorer ? bigFloatMediaInner : document.bigFloatMediaInner;
		//备：变量bigFloat_obj的返回方法修改过
		var bigFloat_obj = InternetExplorer? document.bigFloatMediaInner : document.getElementById('bigFloatMediaInner');
		if(close_str!=null){
			document.getElementById(close_str).style.display='none';
		}
		if(close_str=='fullScreeMediaSShell'){  //fullScreen+LOGO
		    document.documentElement.scrollTop='0px';
		    document.getElementById('topFullWidthBanner').style.display='none';
		    if(document.getElementById('hexunCouplet01')){document.getElementById('hexunCouplet01').style.display="none"};
		    if(document.getElementById('hexunFanJuan01')){document.getElementById('hexunFanJuan01').style.display="none"};
		    if(document.getElementById('leftFloatLogoShell01')){document.getElementById('leftFloatLogoShell01').style.display="none"};
		    if(document.getElementById('rightFloatLogoShell01')){document.getElementById('rightFloatLogoShell01').style.display="none"};
		}
		
		if(document.getElementById(flash_str)&&InternetExplorer){
			document.getElementById(flash_str).GotoFrame(1);
			document.getElementById(flash_str).Play();
			var fo=document.getElementById(flash_str);
			if(fo!=null){
			    fo.SetVariable("goon",1);
			    fo.SetVariable("firstPlay",0);
			 }
        }
		
         if(maxTimer&&close_str=='streamMediaSShell'){
             if(publicMethod_obj.streamClearMedia_obj){
                clearInterval(publicMethod_obj.streamClearMedia_obj);
            }
            publicMethod_obj.streamClearMedia_obj=setInterval(function(){
                clearInterval(publicMethod_obj.streamClearMedia_obj);
                publicMethod_obj.change(get_str,close_str);
            },maxTimer);
        }
        if(maxTimer&&close_str=='fullScreeMediaSShell'){
             if(publicMethod_obj.fullClearMedia_obj){
                clearInterval(publicMethod_obj.fullClearMedia_obj);
            }
            publicMethod_obj.fullClearMedia_obj=setInterval(function(){
                clearInterval(publicMethod_obj.fullClearMedia_obj);
                publicMethod_obj.change(get_str,close_str);
            },maxTimer);
        }
	}
	publicMethod_obj.creatMediaAD=function(flash_bool,id_str,src_str,w_num,h_num,wmode,url_str){
		if(flash_bool){
			var temp_str='<objectdisabled classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="httpdisabled://downloaddisabled.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" '
			+'width="'+w_num+'" height="'+h_num+'" id="'+id_str+'">'
			+'<param name="movie" value="'+src_str+'" />'
			+'<param name="quality" value="high" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" />';
			if(wmode){
				temp_str+='<param name="wmode" value="'+wmode+'">';
			}
			temp_str+='<embeddisabled allowscriptaccess="always" src="'+src_str+'" width="'+w_num+'" height="'+h_num+'" '
			+'quality="high" allowFullScreen="true" pluginspage="httpdisabled://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" ';
			if(wmode){
				temp_str+='wmode="'+wmode+'"';
			}
			temp_str+=' name="'+id_str+'" id="'+id_str+'"></embed></object>'
		}else{
			var temp_str='<a href="'+url_str+'" target="_blank">'
			+'<img src="'+src_str+'" width="'+w_num+'" height="'+h_num+'" border="0" /></a>';
		}
		return temp_str;
	}
	voidWindowBack=function() {
		var popUpWin2 =void("/backscreen.htm", "popUpWin2", "width=770,height=550,top=4000,left=3000");
                  self.focus()
	}
	publicMethod_obj.showOfTime=function(){
		for(var loops=0;loops<arguments.length;loops++){
			if(temp_date>arguments[loops].s_date&&temp_date<arguments[loops].e_date){
				return true;
			}
		}
		return false;
	}
	publicMethod_obj.gotoFrame=function(_flashObj,_frame){//20110120	GotoFrame(),play()方法比较原始，容易出错。采用flash内部定义方法控跳帧。
		if(document.getElementById(_flashObj))document.getElementById(_flashObj).GOTOTEST(_frame);			// GOTOTEST为flash内部自定义的供外部调用的函数。		
	}

	/* List */
	var pageMedia_array=new Array();
	var pageFloatMedia_array=new Array();
	var rightFloatYet=false;
	var quanPingShow=false;

if(publicMethod_obj.showOfTime(new Object({s_date:hexunOutTimer(2011,4,18,9,00),e_date:hexunOutTimer(2011,4,21,9,00)}),new Object({s_date:hexunOutTimer(2011,4,14,9,00),e_date:hexunOutTimer(2011,4,16,9,00)}))){
	var temp_obj=new Object({id:'topFullWidthBanner',enabled:true,paddingTop:0,paddingBottom:5});
	temp_obj.inner='<IFRAME WIDTH=956 HEIGHT=90 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=column&adsize=956x90&place=centertop&site=homeway"></IFRAME>';
	temp_obj.init=publicMethod_obj.exchangeInner;
	pageMedia_array.push(temp_obj);
}
//第一通栏
var temp_obj=new Object({id:'diYiTongLan',enabled:true,paddingTop:0,paddingBottom:0});
temp_obj.inner='<IFRAME WIDTH=600 HEIGHT=70 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=column&adsize=600x70&place=center01&site=homeway"></IFRAME>';
temp_obj.init=publicMethod_obj.exchangeInner;
pageMedia_array.push(temp_obj);

// 左一、左二按钮
var temp_obj=new Object({id:'button396x70',enabled:true,paddingTop:0,paddingBottom:0});
    temp_obj.button='是';
    if(temp_obj.button=="是"){
        temp_obj.inner='<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><IFRAME WIDTH=198 HEIGHT=70 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=198x70&place=left01&site=homeway"></IFRAME></td><td style="padding-left:3px"><IFRAME WIDTH=198 HEIGHT=70 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=198x70&place=left02&site=homeway"></IFRAME></td></tr></table>';
     }else{
            temp_obj.inner='<IFRAME WIDTH=396 HEIGHT=70 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=396x70&place=left01&site=homeway"></IFRAME>';
     }
    temp_obj.init=publicMethod_obj.exchangeInner;
    pageMedia_array.push(temp_obj);
//左三按钮
var temp_obj=new Object({id:'zuoSanAnNiu',enabled:true,paddingTop:0,paddingBottom:0});
temp_obj.inner='<IFRAME WIDTH=198 HEIGHT=70 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=198x70&place=left03&site=homeway"></IFRAME>';
temp_obj.init=publicMethod_obj.exchangeInner;
pageMedia_array.push(temp_obj);
//右侧按钮
var temp_obj=new Object({id:'rightAnNiu',enabled:true,paddingTop:0,paddingBottom:0});
temp_obj.button='是';
if(temp_obj.button=="是"){
temp_obj.inner='<IFRAME WIDTH=198 HEIGHT=70 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=198x70&place=right01&site=homeway"></IFRAME><div style="padding-top:5px"><IFRAME WIDTH=198 HEIGHT=70 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=198x70&place=right02&site=homeway"></IFRAME></div>';
}else{
temp_obj.inner='<img src="httpdisabled://photo19.hexun.com/p/2009/1214/375873/b_F05BFD3F6E19405E7E20309EF85BD90C.jpg" width="198" height="145" />';
}
temp_obj.init=publicMethod_obj.exchangeInner;
pageMedia_array.push(temp_obj);
if(publicMethod_obj.showOfTime(new Object({s_date:hexunOutTimer(2009,12,18,8,00),e_date:hexunOutTimer(2012,12,31,8,00)}),new Object({s_date:hexunOutTimer(2007,11,22,8,30),e_date:hexunOutTimer(2007,12,26,8,29)}))){
     //右长按钮
     var temp_obj=new Object({id:'button300x60',enabled:true,paddingTop:0,paddingBottom:9});
     temp_obj.inner='<IFRAME WIDTH=300 HEIGHT=60 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=300x60&place=right01&site=homeway"></IFRAME>';
     temp_obj.init=publicMethod_obj.exchangeInner;
     pageMedia_array.push(temp_obj);
}
    //旗帜一
    var temp_obj=new Object({id:'qizhi-300x100_01',enabled:true,paddingTop:0,paddingBottom:0});    
        temp_obj.inner='<IFRAME WIDTH=300 HEIGHT=100 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=300*100&place=right01&site=homeway"></IFRAME>'; 
        temp_obj.init=publicMethod_obj.exchangeInner;
        pageMedia_array.push(temp_obj);

    //旗帜二
    var temp_obj=new Object({id:'qizhi-300x100_02',enabled:true,paddingTop:0,paddingBottom:0});    
        temp_obj.inner='<IFRAME WIDTH=300 HEIGHT=100 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=300*100&place=rightbottom&site=homeway"></IFRAME>'; 
        temp_obj.init=publicMethod_obj.exchangeInner;
        pageMedia_array.push(temp_obj);

    //旗帜三
    var temp_obj=new Object({id:'qizhi-300x100_03',enabled:true,paddingTop:0,paddingBottom:10});    
        temp_obj.inner='<IFRAME WIDTH=300 HEIGHT=100 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=300*100&place=right04&site=homeway"></IFRAME>'; 
        temp_obj.init=publicMethod_obj.exchangeInner;
        pageMedia_array.push(temp_obj);

    //旗帜四
    var temp_obj=new Object({id:'qizhi-300x100_04',enabled:true,paddingTop:0,paddingBottom:10});    
        temp_obj.inner='<IFRAME WIDTH=300 HEIGHT=250 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=pip&adsize=300x250&place=righttop&site=homeway"></IFRAME>'; 
        temp_obj.init=publicMethod_obj.exchangeInner;
        pageMedia_array.push(temp_obj);

    //旗帜五
    var temp_obj=new Object({id:'qizhi-300x100_05',enabled:true,paddingTop:0,paddingBottom:10});    
        temp_obj.inner='<IFRAME WIDTH=300 HEIGHT=100 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=300*100&place=right05&site=homeway"></IFRAME>'; 
        temp_obj.init=publicMethod_obj.exchangeInner;
        pageMedia_array.push(temp_obj);

    //旗帜六
    var temp_obj=new Object({id:'qizhi-300x100_06',enabled:true,paddingTop:0,paddingBottom:10});    
        temp_obj.inner='<IFRAME WIDTH=300 HEIGHT=100 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=300*100&place=right07&site=homeway"></IFRAME>'; 
        temp_obj.init=publicMethod_obj.exchangeInner;
        pageMedia_array.push(temp_obj);

    //第二通栏
    var temp_obj=new Object({id:'tonglan-650x70_02',enabled:true,paddingTop:0,paddingBottom:0});    
        temp_obj.inner='<IFRAME WIDTH=650 HEIGHT=70 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=column&adsize=650x70&place=left07&site=homeway"></IFRAME>'; 
        temp_obj.init=publicMethod_obj.exchangeInner;
        pageMedia_array.push(temp_obj);

    //第三通栏
    var temp_obj=new Object({id:'tonglan-650x70_03',enabled:true,paddingTop:0,paddingBottom:10});    
        temp_obj.inner='<IFRAME WIDTH=650 HEIGHT=70 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=column&adsize=650x70&place=center02&site=homeway"></IFRAME>';   
        temp_obj.init=publicMethod_obj.exchangeInner;
        pageMedia_array.push(temp_obj);

    //第四通栏
    var temp_obj=new Object({id:'tonglan-650x70_04',enabled:true,paddingTop:10,paddingBottom:0});    
        temp_obj.inner='<IFRAME WIDTH=650 HEIGHT=70 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=column&adsize=650x70&place=center03&site=homeway"></IFRAME>';   
        temp_obj.init=publicMethod_obj.exchangeInner;
        pageMedia_array.push(temp_obj);


// left 80x80 01
if(publicMethod_obj.showOfTime(new Object({s_date:hexunOutTimer(2011,4,11,9,00),e_date:hexunOutTimer(2011,4,15,9,00)}))){
	var temp_obj=new Object({id:'leftFloatLogo01',enabled:true});
	temp_obj.inner='<IFRAME WIDTH=100 HEIGHT=100 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=skyscraper&adsize=100x100&site=homeway"></IFRAME>';
	temp_obj.init=publicMethod_obj.exchangeInner;
	temp_obj.width=temp_obj.height=100;
	temp_obj.align='left';
	temp_obj.valign='bottom';
	temp_obj.marginX=10;
	temp_obj.marginY=40;
	temp_obj.backgroud='#BFBFBF';
	temp_obj.list_array=new Array('leftFloatLogoShell01');
	temp_obj.onStage=publicMethod_obj.onResize;
	var closeBottom_obj=new Object({color:'#333333',backgroud:'#BFBFBF',bold:'bold',decoration:'none',width:50,align:'left',instance:'leftFloatLogoShell01'});
	pageMedia_array.push(temp_obj);
	pageFloatMedia_array.push(temp_obj);
	void(voidDiv('leftFloatLogoShell01','leftFloatLogo01',temp_obj.width,temp_obj.height,temp_obj.backgroud,closeBottom_obj));         
}
// right 80x80 01
if(publicMethod_obj.showOfTime(new Object({s_date:hexunOutTimer(2011,4,18,9,00),e_date:hexunOutTimer(2011,4,21,9,00)}))){
	var temp_obj=new Object({id:'rightFloatLogo01',enabled:true});
	temp_obj.inner='<IFRAME WIDTH=100 HEIGHT=100 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=floating&adsize=100x100&site=homeway"></IFRAME>';
         //temp_obj.inner=publicMethod_obj.creatMediaAD(true,'id_bank','http://itv.hexun.com/lbi-html/ly/2010/zhongguoyinlian/100_100.swf',100,100,null,null)
	temp_obj.init=publicMethod_obj.exchangeInner;
	temp_obj.width=temp_obj.height=100;
	temp_obj.align='right';
	temp_obj.valign='bottom';
	temp_obj.marginX=10;
	temp_obj.marginY=30;
	temp_obj.backgroud='#BFBFBF';
	temp_obj.list_array=new Array('rightFloatLogoShell01');
	temp_obj.onStage=publicMethod_obj.onResize;
	var closeBottom_obj=new Object({color:'#333333',backgroud:'#BFBFBF',bold:'bold',decoration:'none',width:40,align:'right',instance:'rightFloatLogoShell01'});
	pageMedia_array.push(temp_obj);
	pageFloatMedia_array.push(temp_obj);
	void(voidDiv('rightFloatLogoShell01','rightFloatLogo01',temp_obj.width,temp_obj.height,temp_obj.backgroud,closeBottom_obj));
	var rightFloatYet=true;        
         
}

// 对联
if(publicMethod_obj.showOfTime(new Object({s_date:hexunOutTimer(2011,4,8,8,30),e_date:hexunOutTimer(2011,4,9,8,30)}))){
	void('<div id="hexunCouplet01">');
	// left Couplet 01
	var temp_obj=new Object({id:'leftCouplet01',enabled:true});
	temp_obj.inner=publicMethod_obj.creatMediaAD(true,'gdb','http://itv.hexun.com/lbi-html/ly/2011/guangfabank/0408/100x300.swf',100,300,'transparent',null)
	temp_obj.init=publicMethod_obj.exchangeInner;
	temp_obj.width=100;
	temp_obj.height=300;
	//temp_obj.maxWidth=1160;
	temp_obj.marginX=10;
	temp_obj.marginY=123;
	temp_obj.backgroud='#';
	temp_obj.align='left';
	temp_obj.valign=null;
	temp_obj.onStage=publicMethod_obj.onResize;
	temp_obj.list_array=new Array('leftCoupletShell01');
	temp_obj.onStage=publicMethod_obj.onResize;
	var closeBottom_obj=new Object({color:'#333333',backgroud:'#EEEEEE',bold:'bold',decoration:'none',width:40,align:'left',instance:'hexunCouplet01'});
	pageMedia_array.push(temp_obj);
	pageFloatMedia_array.push(temp_obj);
	void(voidDiv('leftCoupletShell01','leftCouplet01',temp_obj.width,temp_obj.height,temp_obj.backgroud,closeBottom_obj));
	// right Couplet 01
	var temp_obj=new Object({id:'rightCouplet01',enabled:true});
	temp_obj.inner=publicMethod_obj.creatMediaAD(true,'gdb','http://itv.hexun.com/lbi-html/ly/2011/guangfabank/0408/100x300.swf',100,300,'transparent',null)
	temp_obj.init=publicMethod_obj.exchangeInner;
	temp_obj.width=100;
	temp_obj.height=300;
	//temp_obj.maxWidth=1160;
	temp_obj.marginX=10;
	temp_obj.marginY=123;
	temp_obj.backgroud='#';
	temp_obj.align='right';
	temp_obj.valign=null;
	temp_obj.onStage=publicMethod_obj.onResize;
	temp_obj.list_array=new Array('rightCoupletShell01');
	temp_obj.onStage=publicMethod_obj.onResize;
	var closeBottom_obj=new Object({color:'#333333',backgroud:'#EEEEEE',bold:'bold',decoration:'none',width:40,align:'right',instance:'hexunCouplet01'});
	pageMedia_array.push(temp_obj);
	pageFloatMedia_array.push(temp_obj);
	void(voidDiv('rightCoupletShell01','rightCouplet01',temp_obj.width,temp_obj.height,temp_obj.backgroud,closeBottom_obj));
	void('</div>');
}

// 流媒体
if(publicMethod_obj.showOfTime(new Object({s_date:hexunOutTimer(2011,4,18,9,00),e_date:hexunOutTimer(2011,4,19,9,00)}))){
      var temp_obj=new Object({id:'streamMediaB',enabled:true});
      temp_obj.maxTimer=10000;
           publicMethod_obj.streamClearMedia_maxTimer=temp_obj.maxTimer;
         //代码加载结束后初始化
	        temp_obj.init=function(){         	
		         //如果全屏广告显示
		         if(quanPingShow){
		         	   publicMethod_obj.change('streamMediaSShell',null);//关闭小logo
		         	   publicMethod_obj.change('streamMediaBShell',null);//关闭大logo 	 
		         	   
		         	}else{//如果全屏广告不显示
		         		publicMethod_obj.change('streamMediaSShell');//关闭小logo	         		 
		             //播放时间结束后，关闭大logo，打开小logo
		         		  publicMethod_obj.streamClearMedia_obj=setInterval(function(){
			                  clearInterval(publicMethod_obj.streamClearMedia_obj);
			                  publicMethod_obj.change('streamMediaBShell','streamMediaSShell');
		             },this.maxTimer);		             
		          }    
	         }
	temp_obj.width=350;
	temp_obj.height=300;
	temp_obj.align='center';
	temp_obj.valign='center';
	//temp_obj.backgroud='#BFBFBF';
	temp_obj.list_array=new Array('streamMediaBShell');
	temp_obj.onStage=publicMethod_obj.onResize;
	var closeBottom_obj=new Object({color:'#333333',backgroud:'#BFBFBF',bold:'bold',decoration:'none',width:40,align:'right',instance:'streamMediaBShell',next:'streamMediaSShell'});
	pageMedia_array.push(temp_obj);
	pageFloatMedia_array.push(temp_obj);
	void(voidDiv('streamMediaBShell','streamMediaB',temp_obj.width,temp_obj.height,temp_obj.backgroud,closeBottom_obj));
	var streamMedia_flash='是';
	if(streamMedia_flash=='HD'){
		document.getElementById(temp_obj.id).innerHTML=publicMethod_obj.creatMediaAD(true,'bigFloatMediaInner','http://itv.hexun.com/lbi-html/ly/adserver/flashAdLoader_hd.swf?src_str=http://itv.hexun.com/lbi-html/ly/2009/lenovo/k23/1201-3/gp350x300.swf&total_num=-1',temp_obj.width,temp_obj.height,null,'');
         }else if(streamMedia_flash=='是'){
		document.getElementById(temp_obj.id).innerHTML=publicMethod_obj.creatMediaAD(true,'bigFloatMediaInner','http://itv.hexun.com/lbi-html/ly/adserver/loaddisableder/flashAdLoader_z07.swf?src_str=http://itv.hexun.com/lbi-html/ly/2011/zhongyoufund/0414/hs-lmt-350x300.swf&src_frameRate=30',temp_obj.width,temp_obj.height,'transparent','');
	}else{
		document.getElementById(temp_obj.id).innerHTML=publicMethod_obj.creatMediaAD(false,'bigFloatMediaInner','http://itv.hexun.com/lbi-html/ly/2010/jiashifund/0726/0727lmt/350x300xnews.gif',temp_obj.width,temp_obj.height,null,'http://www.jsfund.cn/ad/10072201/index.html');
	}
       
         
	//小logo
	var temp_obj=new Object({id:'streamMediaS',enabled:true});
	temp_obj.inner='<IFRAME WIDTH=100 HEIGHT=100 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=media&adsize=100x100&site=homeway"></IFRAME>';
         	temp_obj.init=publicMethod_obj.exchangeInner;
	temp_obj.width=temp_obj.height=100;
	temp_obj.align='right';
	temp_obj.valign='bottom';
	temp_obj.marginX=10;
	temp_obj.marginY=30;
	if(rightFloatYet){
		temp_obj.marginY+=130;
	}
	temp_obj.backgroud='#EEEEEE';
	temp_obj.list_array=new Array('streamMediaSShell');
	temp_obj.onStage=publicMethod_obj.onResize;
	var closeBottom_obj=new Object({color:'#333333',backgroud:'#BFBFBF',bold:'bold',decoration:'none',width:50,align:'right',instance:'streamMediaSShell'});
	var replayBottom_obj=new Object({color:'#333333',backgroud:'#BFBFBF',bold:'bold',decoration:'none',width:50,align:'right',instance:'streamMediaBShell',closed:'streamMediaSShell',flash:'bigFloatMediaInner',maxTimer:publicMethod_obj.streamClearMedia_maxTimer});
	pageMedia_array.push(temp_obj);
	pageFloatMedia_array.push(temp_obj);
	void(voidDiv('streamMediaSShell','streamMediaS',temp_obj.width,temp_obj.height,temp_obj.backgroud,closeBottom_obj,replayBottom_obj));
}

/* 全屏 */
if(publicMethod_obj.showOfTime(new Object({s_date:hexunOutTimer(2011,4,11,9,00),e_date:hexunOutTimer(2011,4,12,9,00)}))){
	document.getElementById('topFullWidthBanner').style.display='none';
	var temp_obj=new Object({id:'fullScreeMedia',enabled:true,paddingTop:5,paddingBottom:0});
	temp_obj.maxTimer=8000;
	temp_obj.init=function(){
		publicMethod_obj.fullClearMedia_obj=setInterval(function(){
			clearInterval(publicMethod_obj.fullClearMedia_obj);
			publicMethod_obj.change('fullScreeMedia');
                           //if(document.getElementById('streamMediaBShell')!=null){
			   //publicMethod_obj.change('streamMediaSShell','streamMediaBShell');
                                // document.getElementById('streamMediaBShell').style.display="block"
		       // }
		},this.maxTimer);
		//if(document.getElementById('streamMediaBShell')!=null){
		//publicMethod_obj.change('streamMediaBShell');
		//}
	}
	temp_obj.width=950;
	temp_obj.height=480;
	var closeBottom_obj=new Object({color:'#333333',backgroud:'#BFBFBF',bold:'bold',decoration:'none',width:40,align:'right',instance:'fullScreeMedia'});
	var fullMedia_flash='否';
	pageMedia_array.push(temp_obj);
	if(fullMedia_flash=='是'){
		document.getElementById('fullScreeMedia').innerHTML=publicMethod_obj.creatMediaAD(true,'fullScreeMediaInner','http://itv.hexun.com/lbi-html/ly/adserver/flashAdLoader.swf?src_str=http://itv.hexun.com/lbi-html/ly/2010/minshengyinhang/1217/950x480.swf&total_num=8000',temp_obj.width,temp_obj.height,null,null)+publicMethod_obj.creatCloseBtn(closeBottom_obj);
	}else{
		document.getElementById('fullScreeMedia').innerHTML=publicMethod_obj.creatMediaAD(false,'fullScreeMediaInner','http://itv.hexun.com/lbi-html/ly/2011/guangfabank/0408/950x480.jpg',temp_obj.width,temp_obj.height,null,'http://bank.hexun.com/2011/gfyh2011/ ')+publicMethod_obj.creatCloseBtn(closeBottom_obj);
	}
	document.getElementById('fullScreeMedia').style.width=temp_obj.width+'px';
         document.getElementById('fullScreeMedia').style.height='495px';
         document.getElementById('fullScreeMedia').style.paddingTop='5px';
         quanPingShow=true;
}

// 栏目冠名01
if(publicMethod_obj.showOfTime(new Object({s_date:hexunOutTimer(2010,3,5,8,30),e_date:hexunOutTimer(2012,1,1,9,00)}))){
	/**/
	var _str='guanMingCaoPan';
	if(document.getElementById(_str)){
		var _obj=new Object();
		_obj.id=_str;
		_obj.ox=-150;
		_obj.oy=3;
		_obj.ow=150;
		_obj.oh=26;
		_obj.of='是';
		_obj.os='http://itv.hexun.com/lbi-html/ly/2011/dachengfund/0412/guanming.swf';
		_obj.url='http://vol.stock.hexun.com/';
		_obj.interval=new Object();
		document.getElementById(_str).style.position='relative';
		var inner_str=document.getElementById(_str).innerHTML;
		inner_str+='<div id="o'+_obj.id+'" style="position:absolute;top:'+_obj.oy+'px;left:'+_obj.ox+'px;width:'+_obj.ow+'px;height:'+_obj.oh+'px;">';
		if(_obj.of=='是'){
			inner_str+=publicMethod_obj.creatMediaAD(true,'titleOverInner',_obj.os,_obj.ow,_obj.oh,'transparent',null);
		}else{
			inner_str+=publicMethod_obj.creatMediaAD(false,'titleOverInner',_obj.os,_obj.ow,_obj.oh,null,_obj.url);
		}
		inner_str+='</div>';		
		document.getElementById(_str).innerHTML=inner_str;
		/**/
	}
	delete _str;
}

// 翻卷广告
if(publicMethod_obj.showOfTime(new Object({s_date:hexunOutTimer(2011,4,15,8,30),e_date:hexunOutTimer(2011,4,16,8,30)}))){
        	void('<div id="hexunFanJuan01">');
	var temp_obj=new Object({id:'scrollMediaB',enabled:true});
	temp_obj.init=function(){
		 publicMethod_obj.change('scrollMediaSShell','scrollMediaBShell');
	}
	temp_obj.width=300;
	temp_obj.height=250;
	temp_obj.align='right';
	temp_obj.valign=null;
	temp_obj.marginX=10;
	temp_obj.marginY=5;
	temp_obj.list_array=new Array('scrollMediaBShell');
	temp_obj.onStage=publicMethod_obj.onResize;
	pageMedia_array.push(temp_obj);
	pageFloatMedia_array.push(temp_obj);
	void(voidDiv('scrollMediaBShell','scrollMediaB',temp_obj.width,temp_obj.height,null,null));
	document.getElementById(temp_obj.id).innerHTML=publicMethod_obj.creatMediaAD(true,'scrollMediaBInner','http://itv.hexun.com/lbi-html/ly/adserver/loaddisableder/loaddisableder300x250_beta4.swf?src_str=http://itv.hexun.com/lbi-html/ly/2011/gongyinruixin/0412/fj300x250.swf&src_link='+encodeURI("空")+'&r='+Math.random(),temp_obj.width,temp_obj.height,'transparent','');
	
	var temp_obj=new Object({id:'scrollMediaS',enabled:true});
	temp_obj.inner=publicMethod_obj.creatMediaAD(true,'scrollMediaSInner','http://itv.hexun.com/lbi-html/ly/adserver/loaddisableder/loaddisableder100x100_beta2.swf?src_str=http://itv.hexun.com/lbi-html/ly/2011/gongyinruixin/0412/fj100x100.swf&src_href='+encodeURI("空")+'&r='+Math.random(),100,100,'transparent','');
	temp_obj.init=publicMethod_obj.exchangeInner;
	temp_obj.width=temp_obj.height=100;
	temp_obj.align='right';
	temp_obj.valign=null;
	temp_obj.marginX=10;
	temp_obj.marginY=5;	
	temp_obj.list_array=new Array('scrollMediaSShell');
	temp_obj.onStage=publicMethod_obj.onResize;
	pageMedia_array.push(temp_obj);
	pageFloatMedia_array.push(temp_obj);
	var closeBottom_obj=new Object({color:'#333333',backgroud:'#',bold:'bold',decoration:'none',width:26,align:'right',instance:'scrollMediaSShell'});
	void(voidDiv('scrollMediaSShell','scrollMediaS',temp_obj.width,temp_obj.height,null,closeBottom_obj,null));
         void('</div>');
}

// 栏目冠名01
if(publicMethod_obj.showOfTime(new Object({s_date:hexunOutTimer(2009,12,31,9,00),e_date:hexunOutTimer(2012,1,1,9,00)}))){
	/**/
	var _str='caiJingGuanming';
	if(document.getElementById(_str)){
		var _obj=new Object();
		_obj.id=_str;
		_obj.ox=169;
		_obj.oy=7;
		_obj.ow=164;
		_obj.oh=24;
		_obj.of='是';
		_obj.os='http://itv.hexun.com/lbi-html/ly/2011/huaxiafund/164x24.swf';
		_obj.url='http://as.kejet.com/afaclick?u/NThERTIxMzUwNjQ5RkY5/o/OTZERUVDN0FDQjlEQTY1/m/NzdCNjBCMEY0M0RBOEM3/l/OEJCQUJGMDAwNTNEQ0FD?http://www.chinaamc.com/portal/cn/index.html?rcc_id=3f829b3a47f0d77d2178e12f3e74368f';
		_obj.interval=new Object();
		document.getElementById(_str).style.position='relative';
		var inner_str=document.getElementById(_str).innerHTML;
		inner_str+='<div id="o'+_obj.id+'" style="position:absolute;top:'+_obj.oy+'px;left:'+_obj.ox+'px;width:'+_obj.ow+'px;height:'+_obj.oh+'px;">';
		if(_obj.of=='是'){
			inner_str+=publicMethod_obj.creatMediaAD(true,'titleOverInner',_obj.os,_obj.ow,_obj.oh,'transparent',null);
		}else{
			inner_str+=publicMethod_obj.creatMediaAD(false,'titleOverInner',_obj.os,_obj.ow,_obj.oh,null,_obj.url);
		}
		inner_str+='</div>';		
		document.getElementById(_str).innerHTML=inner_str;
		/**/
	}
	delete _str;
}

// 栏目冠名01
if(publicMethod_obj.showOfTime(new Object({s_date:hexunOutTimer(2010,6,1,9,00),e_date:hexunOutTimer(2012,1,1,9,00)}))){
	/**/
	var _str='yihuaGuanming';
	if(document.getElementById(_str)){
		var _obj=new Object();
		_obj.id=_str;
		_obj.ox=-177;
		_obj.oy=0;
		_obj.ow=181;
		_obj.oh=24;
		_obj.of='是';
		_obj.os='http://itv.hexun.com/lbi-html/ly/2011/yinhuafund/0413/183x24.swf';
		_obj.url='http://www.yhfund.com.cn/ ';
		_obj.interval=new Object();
		document.getElementById(_str).style.position='relative';
		var inner_str=document.getElementById(_str).innerHTML;
		inner_str+='<div id="o'+_obj.id+'" style="position:absolute;top:'+_obj.oy+'px;left:'+_obj.ox+'px;width:'+_obj.ow+'px;height:'+_obj.oh+'px;">';
		if(_obj.of=='是'){
			inner_str+=publicMethod_obj.creatMediaAD(true,'titleOverInner',_obj.os,_obj.ow,_obj.oh,'transparent',null);
		}else{
			inner_str+=publicMethod_obj.creatMediaAD(false,'titleOverInner',_obj.os,_obj.ow,_obj.oh,null,_obj.url);
		}
		inner_str+='</div>';		
		document.getElementById(_str).innerHTML=inner_str;
		/**/
	}
	delete _str;
}

//行情图包框广告 
if(publicMethod_obj.showOfTime(new Object({s_date:hexunOutTimer(2011,2,22,9,00),e_date:hexunOutTimer(2012,2,23,9,00)}),new Object({s_date:hexunOutTimer(2008,12,31,9,00),e_date:hexunOutTimer(2008,12,27,9,00)}))){
	var temp_obj=new Object({id:'baokuang_01',enabled:true,paddingTop:0,paddingBottom:0});
	temp_obj.inner='<IFRAME WIDTH=298 HEIGHT=37 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=298*37&place=right01&site=homeway"></IFRAME>';
	temp_obj.init=publicMethod_obj.exchangeInner;
	pageMedia_array.push(temp_obj);

	var temp_obj=new Object({id:'baokuang_02',enabled:true,paddingTop:0,paddingBottom:0});
	temp_obj.inner='<IFRAME WIDTH=298 HEIGHT=19 MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no BORDERCOLOR="#000000" SRC="httpdisabled://hx.hexun.com/html.ng/adform=button&adsize=298*19&place=right02&site=homeway"></IFRAME>';
	temp_obj.init=publicMethod_obj.exchangeInner;
	pageMedia_array.push(temp_obj);

}




/* page timeline */
	if(document.getElementById('hexunBodyBaseDiv')==null){
		void('<div id="hexunBodyBaseDiv" style="position:absolute; z-index:10; left:0px; top:0px; width:10px;"></div>');
	}
	document.getElementById('hexunBodyBaseDiv').style.height=2000+'px';
	window.scrollBy(0,1);
	//var hexunPageMode_obj=(document.documentElement.scrollTop>document.body.scrollTop?document.documentElement:document.body);
         var hexunPageMode_obj=document.documentElement;//2010.06.28修改
	window.scrollBy(0,-1);
	document.getElementById('hexunBodyBaseDiv').style.height=10+'px';
	function pageFloatMediaInit(){
		for(var loops=0;loops<pageFloatMedia_array.length;loops++){
			pageFloatMedia_array[loops].onStage();
		}
	}
	function hexunTimeline(){
		if(pageFloatMedia_array.length>0){
			pageFloatMediaInit();
			setInterval(function (){
				pageFloatMediaInit();
			},100);
		}
	}
/* Init */
	function pageMediaInit(){
		for(var loops=0;loops<pageMedia_array.length;loops++){
			pageMedia_array[loops].init();
			if(pageMedia_array[loops].id=='fullScreeMedia'){
                if(document.getElementById('hexunCouplet01')){document.getElementById('hexunCouplet01').style.display="none"};
                if(document.getElementById('hexunFanJuan01')){document.getElementById('hexunFanJuan01').style.display="none"};
                if(document.getElementById('leftFloatLogoShell01')){document.getElementById('leftFloatLogoShell01').style.display="none"};
                if(document.getElementById('rightFloatLogoShell01')){document.getElementById('rightFloatLogoShell01').style.display="none"}; 
			}
		}
	}
	var pageLoading;
	if(document.getElementById('pageTail')!=null){
		clearInterval(pageLoading);
		pageMediaInit();
		hexunTimeline();
	}else{
		pageLoading=setInterval(function(){
			if(document.getElementById('pageTail')!=null){
				clearInterval(pageLoading);
				pageMediaInit();
				hexunTimeline();
			}
		},100);
	}


