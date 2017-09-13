var bankCal = new HX.Class.create();
bankCal.prototype = {
	initialize:function(panel,onComplete) {
		  //装载容器
		  this.panel = HX.$(panel) || document.body;
		  //完成后执行的函数
		  this.onComplete = onComplete || function() {};
		  //记录年份值
		 /*
		  var today = new Date();
		  this.yy = today.getFullYear()||bankCal.yy;
		  this.mm = today.getMonth()+1||bankCal.mm;
		  this.dd = today.getDate()||bankCal.dd;
		  */
		  this.yy = bankCal.yy;
		  this.mm = bankCal.mm;
		  this.dd = bankCal.dd;
		  this.pageYearMark = this.yy;		  
		  //缓存DOM结构碎片
		  this.fragment = document.createDocumentFragment();
		  //绘制主体
		  this.drawMain();
		},
	//绘制主体
     drawMain:function() {
		  this.contrainer = HX.$E.create('div',this.fragment,'bank_cal_panel');
		  this.header = HX.$E.create('div',this.contrainer,'cal_head');
		  this.bodyer = HX.$E.create('div',this.contrainer,'cal_body');
		  this.headCon = HX.$E.create('div',this.header,'head_con');
		  this.yearTog = HX.$E.create('div',this.headCon,'toggle_');
		  this.monthTog = HX.$E.create('div',this.headCon,'toggle');
		  this.yearCon = HX.$E.create('div',this.headCon,'year_con');
		  this.monthCon = HX.$E.create('div',this.headCon,'month_con');
		  this.monthTog_ = HX.$E.create('div',this.headCon,'toggle1');
		  this.yearTog_ = HX.$E.create('div',this.headCon,'toggle1_');
		  this.monthAll = HX.$E.create('div',this.headCon,'month_all');
		  this.monthUl = HX.$E.create('ul',this.monthAll);
		  this.yearAll = HX.$E.create('div',this.headCon,'year_all');
		  this.yearUl = HX.$E.create('ul',this.yearAll);
		  this.yearOpt = HX.$E.create('ul',this.yearAll);
		  this.preYear = HX.$E.create('li',this.yearOpt,'pre');
		  this.nextYear = HX.$E.create('li',this.yearOpt,'next');
		  //初始值
		  this.yearCon.innerHTML = this.yy+"年";
		  this.monthCon.innerHTML = bankCal.monthName[this.mm-1];
		  //绘制月体
		  this.drawMonth();
		  //绑定事件
		  this.bindEvent();
		  //初始绘制
		  this.drawDatePanel(this.yy,this.mm,this.dd);
		 },
	   //绘制月选择面板
	   drawMonth:function() {
		  var _this = this;
		   for(var i=0;i<bankCal.monthName.length;i++) {
			var li = HX.$E.create('li',this.monthUl);
			li.innerHTML = bankCal.monthName[i];
			li.onmouseover = (function(li){return function(){
					bankCal.over(li);
					};})(li);
			li.onmouseout = (function(li){return function(){
				    bankCal.out(li);
					};})(li);
			li.onclick = (function(i){return function(){
			        _this.toMonth(i);
					_this.hidePanel();
					};})(i);
			}
		},		
	//绘制年选择面板
	drawYear:function(year) {
		this.yearUl.innerHTML = '';
		var _this = this;
		var begYear = year-5;
		var endYear = year+6;
		for(var i=begYear;i<=endYear;i++) {
			var li = HX.$E.create('li',this.yearUl);
			li.innerHTML = i;
			if(i==year) {
				li.className = 'on1';
				this.pageYearMark = i;
			}
			if(i<bankCal.minYear || i>bankCal.maxYear) li.className = 'none';
			else {
			li.onmouseover = (function(li){return function(){
				bankCal.over(li);
				};})(li);
			li.onmouseout = (function(li){return function(){
				bankCal.out(li);
				};})(li);
			li.onclick = (function(i){return function(){
				_this.toYear(i);
				_this.hidePanel();
				};})(i);
			  }
			}
		this.preYear.onclick = (function(){return function(){
		      var year = parseInt(_this.pageYearMark);
			  if(year-5<=bankCal.minYear) {HX.$V.cancelEventUp(); return;}
			  _this.drawYear(year-12);
			  HX.$V.cancelEventUp();
			};})();
		this.nextYear.onclick = (function(){return function(){
		      var year = parseInt(_this.pageYearMark);
			  if(year+6>=bankCal.maxYear) {HX.$V.cancelEventUp(); return;}
			  _this.drawYear(year+12);
			  HX.$V.cancelEventUp();
			};})();				
		},		
	//跳转到某月
	toMonth:function(month) {
		this.monthCon.innerHTML = bankCal.monthName[month];
		bankCal.getRemoteData(this.bodyer,parseInt(this.yearCon.innerHTML),month+1,this.dd)
		this.drawDatePanel(parseInt(this.yearCon.innerHTML),month+1,this.dd);
		},
	//跳转到某年
	toYear:function(year) {
		this.yearCon.innerHTML = year;
		this.drawDatePanel(year,HX.$A.indexOf(bankCal.monthName,this.monthCon.innerHTML)+1,this.dd);
		},		
      //绑定事件
	  bindEvent:function() {
		  var _this = this;
		  //整体
		  this.contrainer.onclick = function() {
			  if(_this.monthAll.style.display == 'block') _this.monthAll.style.display = 'none';
			  if(_this.yearAll.style.display == 'block') _this.yearAll.style.display = 'none';
			  };
		  //打开月面板
		  
		  this.monthTog.onclick = (function(){return function(){
		     var m = HX.$A.indexOf(bankCal.monthName,_this.monthCon.innerHTML);
			 if(m==0) {
				 m = 11;				 
			     _this.yearCon.innerHTML = parseInt(_this.yearCon.innerHTML)-1+"年";
			   }
			 else m-=1;
			 _this.toMonth(m);
			 HX.$V.cancelEventUp();
			};})();
		this.monthTog_.onclick = (function(){return function(){
		     var m = HX.$A.indexOf(bankCal.monthName,_this.monthCon.innerHTML);
			 if(m==11) {
				 m = 0;
			     _this.yearCon.innerHTML = parseInt(_this.yearCon.innerHTML)+1+"年";
			   }
			 else m+=1;	
			 _this.toMonth(m);  
			 HX.$V.cancelEventUp();
			};})();
		  
		  /*
		  this.monthTog.onmouseover = function() {
			  HX.$E.addClass(this,'tog_over');
			  };
		  this.monthTog.onmouseout = function() {
			  HX.$E.removeClass(this,'tog_over');
			  };		  
		  this.monthTog.onclick = function() {
			  if(_this.yearAll.style.display == 'block') _this.yearAll.style.display = 'none';
			  _this.monthAll.style.display = 'block';
			  HX.$V.cancelEventUp();
			  }	
			  */		  
		  //打开年面板
		  this.yearTog.onclick = (function(){return function(){
		      var year = parseInt(_this.yearCon.innerHTML);
			  var m = HX.$A.indexOf(bankCal.monthName,_this.monthCon.innerHTML);
			  if(year-1<=bankCal.minYear) {HX.$V.cancelEventUp(); return;}
			  _this.yearCon.innerHTML=(year-1)+"年";
			  _this.drawYear(year-1);
			  _this.toMonth(m);
			  HX.$V.cancelEventUp();
			};})();
			
			this.yearTog_.onclick = (function(){return function(){
		      var year = parseInt(_this.yearCon.innerHTML);
			  var m = HX.$A.indexOf(bankCal.monthName,_this.monthCon.innerHTML);
			  if(year+1<=bankCal.minYear) {HX.$V.cancelEventUp(); return;}
			  _this.yearCon.innerHTML=(year+1)+"年";
			  _this.drawYear(year+1);
			  _this.toMonth(m);
			  HX.$V.cancelEventUp();
			};})();
		  
		  /*
		  this.yearTog.onmouseover = function() {
			  HX.$E.addClass(this,'tog_over');
			  };
		  this.yearTog.onmouseout = function() {
			  HX.$E.removeClass(this,'tog_over');
			  };		  
		  this.yearTog.onclick = function() {
			  if(_this.monthAll.style.display == 'block') _this.monthAll.style.display = 'none';
		      _this.drawYear(parseInt(_this.yearCon.innerHTML));			  
			  _this.yearAll.style.display = 'block';
			  HX.$V.cancelEventUp();
			  };
		  this.yearAll.onclick = function() {
			    HX.$V.cancelEventUp();
			  };
			  */
		 },
	   //隐藏面板
	    hidePanel:function() {
		   HX.$E.hide(this.monthAll);
		   HX.$E.hide(this.yearAll);
		},
	  //绘制日期面板
	  drawDatePanel:function(yy,mm,dd) {
		   bankCal.drawDatePanel(this.bodyer,yy,mm,dd);
		},
	  //创建
	  create:function() {
		  this.panel.appendChild(this.fragment);
		  bankCal.showNow();
		  }	  
	};
//月容器查找字符串
bankCal.monthStr = '.bank_cal_panel .cal_head .month_con';
//年容器查找字符串
bankCal.yearStr = '.bank_cal_panel .cal_head .year_con';
//日容器查找字符串
bankCal.dayStr = '.bank_cal_panel .cal_body';
//月份值
bankCal.monthName = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
//年份最大值
bankCal.maxYear = '2020';
//年份最小值
bankCal.minYear = '2000';
//鼠标事件
bankCal.over = function(obj) {
	if(HX.$E.hasClass(obj,'on1')) return;
	HX.$E.addClass(obj,'over');
	HX.$("hintbox").style.display="none";
	};

var timer;
bankCal.overbox = function(obj,content) {
	clearTimeout(timer);
	var dArray=HX.$$('.cal_body div');
	if(HX.$E.hasClass(obj,'over1')) return;
	var n=dArray.length;
	for(var i=0;i<n;i++){HX.$E.removeClass(dArray[i],'over1')};
	HX.$E.addClass(obj,'over1');
	if(obj!=null){
			var pos=bankCal.getElementPos(obj);
			var con=content.split("|");
			var tmp="<ul>";
			for(var i=0;i<con.length;i++){
				tmp+="<li>"+con[i]+"</li>";	
			}
			tmp+="</ul>";
			var w_frame = document.createElement('iframe');
			w_frame.width = '100%';
			w_frame.height = '100%';
			w_frame.frameBorder = '0';
			w_frame.scrolling = 'no';
			HX.$("hintbox").innerHTML=tmp;
			HX.$("hintbox").appendChild(w_frame);
			var yy=parseInt(HX.$$('.year_con')[0].innerHTML);
			var mm=parseInt(HX.$$('.month_con')[0].innerHTML);
			var weekday=(new Date(yy,mm-1,obj.innerHTML)).getDay();
			var browser=navigator.appName
            var b_version=navigator.appVersion
            var version=b_version.split(";");
            var trim_Version=version[1].replace(/[ ]/g,""); 
			var x = pos.x;
			var y = pos.y+20;
			function IsMaxthon()
            {
            try{
                window.external.max_invoke("GetHotKey");
                return true;
            }catch(ex){
                return false;
            }
           }
           // alert(IsMaxthon()); 
		    
			var IEstrong = HX.$B.IE && navigator.userAgent.toLowerCase().indexOf('maxthon')==-1 && navigator.userAgent.toLowerCase().indexOf('se')==-1;
			if(IEstrong) {x=x-2;y=y-2;}
			//判断浏览器
			/*if(navigator.userAgent.indexOf("SE")>0||navigator.userAgent.indexOf("TencentTraveler")>0){
				x= x;
			}
			else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0"){	
			    if(IsMaxthon()){
				    try{
                            x = x-2;
				            y = y-2;
                   }catch(e){
				       y = y-2;
                       x = x-2;	
                   }				
			     }
			    else{
				    y = y-2;
				    x = x-2;
			    }
			}
			else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0"){
				if(IsMaxthon()){
				    try{
                        x = x-1;
                    }catch(e){
						alert(4);
				       y = y-2;
                       x = x-2;				 
                    }				
			    }
			    else{
				    x = x;
			    }
			}
			else{
				x = x;
			}*/
			//alert(navigator.userAgent);
			HX.$("hintbox").style.display="block";
			if(weekday == 5||weekday == 6){
				x = x-HX.$$('#hintbox ul')[0].offsetWidth+obj.offsetWidth;
			}
			HX.$("hintbox").style.top=y+'px';
			HX.$("hintbox").style.left=x+'px';
			HX.$("hintbox").style.height=HX.$$('#hintbox ul')[0].offsetHeight+'px';
		}
	};
bankCal.overhintbox = function() {
	clearTimeout(timer);
};
bankCal.outbox = function(obj) {
	timer=setTimeout(function(){var dArray=HX.$$('.cal_body div');var n=dArray.length;for(var i=0;i<n;i++){HX.$E.removeClass(dArray[i],'over1');};HX.$("hintbox").style.display='none'},20);
	};
bankCal.outhinbox = function(){
	timer=setTimeout(function(){var dArray=HX.$$('.cal_body div');var n=dArray.length;for(var i=0;i<n;i++){HX.$E.removeClass(dArray[i],'over1');};HX.$("hintbox").style.display='none'},20);
	};
bankCal.out = function(obj) {
	HX.$E.removeClass(obj,'over');	
	};
//闰年判定
bankCal.isLeapyear = function(year) {
	if((year%4==0)||((year%4==0)&&(year%100==0))) return true;
    return false;
	};
//计算当年当月天数
bankCal.coutDays = function(year,month) {
	if(month==1||month==3||month==5||month==7||month==8||month==10||month==12) return 31;
	if(month==4||month==6||month==9||month==11) return 30;
	if(month==2 && bankCal.isLeapyear(year)) return 29;
	return 28;
	};
//计算当天周几
bankCal.weekPos = function(year,month,day) {
	return (new Date(year,month-1,day)).getDay();
	};
//获取日
bankCal.getDate = function(obj,yy,mm,dd) {
	bankCal.setCss(obj);
	bankCal.nowDate.yy = yy;
	bankCal.nowDate.mm = mm;
	bankCal.nowDate.dd = dd;
	bankCal.init();
	if(HX.$E.hasClass(obj,'last')) {
		HX.$$(bankCal.monthStr)[0].innerHTML = bankCal.monthName[mm-1];
		HX.$$(bankCal.yearStr)[0].innerHTML = yy;
		bankCal.drawDatePanel(HX.$$(bankCal.dayStr)[0],yy,mm,dd);
		bankCal.showNow(yy,mm,dd);
	}
	
	//window.location.href=jumpURL+"?y="+HX.$$(bankCal.yearStr)[0].innerHTML+"&m="+mm+"&d="+dd;
	
	if(parseInt(mm) < 10) mm = "0" + mm;
	if(parseInt(dd) < 10) dd = "0" + dd;
	
	var postfix = HX.$$(bankCal.yearStr)[0].innerHTML.replace(/[\u4e00-\u9fa5]+/gi,"") + "-" + mm + "-" +dd;
	
	//window.location.href=jumpURL+"?date=" + postfix;
voidWUrl=jumpURL+"?date=" + postfix;
	voidvoidWUrl);
	
}

bankCal.yy = new Date().getFullYear();
bankCal.mm = new Date().getMonth()+1;
bankCal.dd = new Date().getDate();

//显示现在的日期
bankCal.showNow = function() {
	var yy = bankCal.yy;
	var mm = bankCal.mm;
	var dd = bankCal.dd;
	if(mm == (HX.$A.indexOf(bankCal.monthName,HX.$$(bankCal.monthStr)[0].innerHTML)+1) && yy == parseInt(HX.$$(bankCal.yearStr)[0].innerHTML)) {
		var list = HX.$$(bankCal.dayStr+' div');
		for(var i=0;i<list.length;i++) {
		   if( mm == new Date().getMonth()+1&& yy == new Date().getFullYear()&&new Date().getDate()==parseInt(list[i].innerHTML)){HX.$E.addClass(list[i],'now');}
		   if(dd==parseInt(list[i].innerHTML) && !HX.$E.hasClass(list[i],'last'))
				HX.$E.addClass(list[i],'on1');
			}
	}
}	

//获取当前选择日期样式
bankCal.setCss = function(obj) {
	var list = HX.$$(bankCal.dayStr+' div');
	for(var i=0;i<list.length;i++) {
		 HX.$E.removeClass(list[i],'on1');
		}
	HX.$E.removeClass(obj,'over');	
	HX.$E.addClass(obj,'on1');
	}


//记录现在的日期
bankCal.nowDate = {
	//初始值
	yy:(new Date()).getFullYear(),
	mm:(new Date()).getMonth()+1,
	dd:(new Date()).getDate()
	};

//绘制日期面板
bankCal.drawDatePanel = function(panel,yy,mm,dd) {
		var yy = parseInt(yy);
		var mm = parseInt(mm,10);
		var dd = parseInt(dd,10);
		var days = bankCal.coutDays(yy,mm);
		var weekbeg = bankCal.weekPos(yy,mm,1);
		var preyy = (mm==1)?(yy-1):yy;
		var premm = (mm==1)?12:(mm-1);
		var preDays = bankCal.coutDays(preyy,premm);
		var nextyy = (mm==12)?(yy+1):yy;
		var nextmm = (mm==12)?1:(mm+1);
		var nextDays = bankCal.coutDays(nextyy,nextmm);
		var str = '<table cellpadding="0" border=0 cellspacing="0" width="100%">';
		str+='<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>';
		//第一行
		str+='<tr>'
		for(var i=weekbeg;i>0;i--) {
			str+='<td><div class="last">'+(preDays-i+1)+'</div></td>';
			}
		for(var i=0;i<7-weekbeg;i++) {
			//alert(i+1);
			if(i==7-weekbeg-1) str+='<td class="rend">';
			else str+='<td>';
				var news=bankCal.isDays(i+1);
				if(news==null){
					if(yy==2011&&mm==2&&(i+1)>=2&&(i+1)<=5){
					str+='<div class=onred onmouseover="bankCal.over(this)" onmouseout="bankCal.out(this)" onclick="bankCal.getDate(this,'+yy+','+mm+','+(i+1)+')">'+(i+1)+'</div></td>';
					}else{
					str+='<div onmouseover="bankCal.over(this)" onmouseout="bankCal.out(this)" onclick="bankCal.getDate(this,'+yy+','+mm+','+(i+1)+')">'+(i+1)+'</div></td>';
					}
				}else{
					if(yy==2011&&mm==2&&(i+1)>=2&&(i+1)<=5){
					str+='<div class=onred onmouseover="bankCal.overbox(this,\''+news+'\')" onmouseout="bankCal.outbox(this)" onclick="bankCal.getDate(this,'+yy+','+mm+','+(i+1)+')">'+(i+1)+'</div></td>';
					}else{
					str+='<div class=pre onmouseover="bankCal.overbox(this,\''+news+'\')" onmouseout="bankCal.outbox(this)" onclick="bankCal.getDate(this,'+yy+','+mm+','+(i+1)+')">'+(i+1)+'</div></td>';
					}
					
				}
			}
		str+='</tr>';
		//中间三行
	    var remain = days-weekbeg;
		var m = 7-weekbeg;
		for(var row=0;row<3;row++) {
			str+='<tr>';
			   for(var i=m;i<7+m;i++) {
				   if(i==7+m-1) str+='<td class="rend">';
			       else str+='<td>';
			     
			     var news=bankCal.isDays(i+1);
						if(news==null){
							if(yy==2011&&mm==2&&(i+1)>=6&&(i+1)<=8){
								str+='<div class=onred onmouseover="bankCal.over(this)" onmouseout="bankCal.out(this)" onclick="bankCal.getDate(this,'+yy+','+mm+','+(i+1)+')">'+(i+1)+'</div></td>';
							}else{
								str+='<div onmouseover="bankCal.over(this)" onmouseout="bankCal.out(this)" onclick="bankCal.getDate(this,'+yy+','+mm+','+(i+1)+')">'+(i+1)+'</div></td>';
							}
						}else{
							if(yy==2011&&mm==2&&(i+1)>=6&&(i+1)<=8){
							str+='<div class=onred onmouseover="bankCal.overbox(this,\''+news+'\')" onmouseout="bankCal.outbox(this)" onclick="bankCal.getDate(this,'+yy+','+mm+','+(i+1)+')">'+(i+1)+'</div></td>';
							}else{
							str+='<div class=pre onmouseover="bankCal.overbox(this,\''+news+'\')" onmouseout="bankCal.outbox(this)" onclick="bankCal.getDate(this,'+yy+','+mm+','+(i+1)+')">'+(i+1)+'</div></td>';
							}
						}
				   }
			m+=7;
			str+='</tr>';
			}
		 //第五行
		 var f = days-(7-weekbeg)-21;
		 if(f<7) {
			 var s = (7-weekbeg)+21;
			 str+='<tr>';
			 for(var i=s;i<days;i++) {
			 		var news=bankCal.isDays(i+1);
						if(news==null){
							str+='<td><div onmouseover="bankCal.over(this)" onmouseout="bankCal.out(this)" onclick="bankCal.getDate(this,'+yy+','+mm+','+(i+1)+')">'+(i+1)+'</div></td>';
						}else{
							str+='<td><div class=pre onmouseover="bankCal.overbox(this,\''+news+'\')" onmouseout="bankCal.outbox(this)" onclick="bankCal.getDate(this,'+yy+','+mm+','+(i+1)+')">'+(i+1)+'</div></td>';
						}
				   }
			  for(var i=0;i<7-(days-s);i++) {
				   if(i==7-(days-s)-1) str+='<td class="rend">';
			       else str+='<td>';				  
				   str+='<div  class="last">'+(i+1)+'</div></td>';					  
				  }			
			 str+='</tr>';
			 //最后一行
			 str+='<tr>';
			 var last =7-(days-s);
			  for(var i=last;i<7+last;i++) {
				   if(i==7+last-1) str+='<td class="bend rend">';
			       else str+='<td class="bend">';				  
				   str+='<div  class="last">'+(i+1)+'</div></td>';					  
				  }
			   str+='</tr>';			 
			 }
		 else {
			 var s = (7-weekbeg)+21;
			 str+='<tr>';
			 for(var i=s;i<7+s;i++) {
				   if(i==7+s-1) str+='<td class="rend">';
			       else str+='<td>';	
			     var news=bankCal.isDays(i+1);
						if(news==null){
							str+='<div onmouseover="bankCal.over(this)" onmouseout="bankCal.out(this)" onclick="bankCal.getDate(this,'+yy+','+mm+','+(i+1)+')">'+(i+1)+'</div></td>';
						}else{
							str+='<div class=pre onmouseover="bankCal.overbox(this,\''+news+'\')" onmouseout="bankCal.outbox(this)" onclick="bankCal.getDate(this,'+yy+','+mm+','+(i+1)+')">'+(i+1)+'</div></td>';
						}			 
				   
				   }				 
			 str+='</tr>';
			 //最后一行
			 str+='<tr>';
			 var last = days-(s+7);
			 for(var i=s+7;i<days;i++) {
				   str+='<td class="bend"><div onmouseover="bankCal.over(this)" onmouseout="bankCal.out(this)" onclick="bankCal.getDate(this,'+yy+','+mm+','+(i+1)+')">'+(i+1)+'</div></td>';				 
				 }
			  for(var i=0;i<7-last;i++) {
				   if(i==7-last-1) str+='<td class="bend rend">';
			       else str+='<td class="bend">';				  
				   str+='<div class="last">'+(i+1)+'</div></td>';					  
				  }
			   str+='</tr>';
			 }
		str+='</table>';
		
		str+="<div class=overbox id=hintbox onmouseout='bankCal.outhinbox()' onmouseover='bankCal.overhintbox()'>";
		str+="xxxxxx";

		str+="</div>";
		if(yy==2011&&mm==2){
			str+="<p class=bank_holiday></p>";
		}else{
			str+="";	
		}
		panel.innerHTML = str;			
		var list = HX.$$(bankCal.dayStr+' div');
        if(yy==new Date().getFullYear()&&mm==new Date().getMonth()+1){
			for(var i=0;i<list.length;i++) {   
		   		if(parseInt(list[i].innerHTML)==new Date().getDate()){
			   		HX.$E.addClass(list[i],'now');
			   }
			}
		}
		
}

//判断是否存在该日期
bankCal.isDays=function(day){
		for(var i=0;i<bankCal.days.length;i++){
			if(day==bankCal.days[i]){
					if(bankCal.news[i]==null)	return null;			
					return bankCal.news[i].title;
			}	
		}
		return null;
}

//初值
bankCal.init = function() {
}

//取当前元素坐标
bankCal.getElementPos=function(elementId){
	var ua = navigator.userAgent.toLowerCase();
	var isOpera = (ua.indexOf('opera') != -1);
	var isIE = (ua.indexOf('msie') != -1 && !isOpera); // not opera spoof
	var el = HX.$(elementId);
	
	if(el.parentNode === null || el.style.display == 'none') {
		return false;
	}      
	 var parent = null;
	 var pos = [];     
	 var box;     
	 if(el.getBoundingClientRect){//IE
			box = el.getBoundingClientRect();
			var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
			var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
			return {x:box.left + scrollLeft, y:box.top + scrollTop};
	 }else if(document.getBoxObjectFor){// gecko    
			box = document.getBoxObjectFor(el); 
			var borderLeft = (el.style.borderLeftWidth)?parseInt(el.style.borderLeftWidth):0; 
			var borderTop = (el.style.borderTopWidth)?parseInt(el.style.borderTopWidth):0; 
			pos = [box.x - borderLeft, box.y - borderTop];
	 } else {// safari & opera    
		  pos = [el.offsetLeft, el.offsetTop];  
		  parent = el.offsetParent;     
		  if (parent != el) { 
		   while (parent) {  
					pos[0] += parent.offsetLeft; 
					pos[1] += parent.offsetTop; 
					parent = parent.offsetParent;
		   }  
		  }   
	
		  if (ua.indexOf('opera') != -1 || ( ua.indexOf('safari') != -1 && el.style.position == 'absolute' )) { 
		   pos[0] -= document.body.offsetLeft;
		   pos[1] -= document.body.offsetTop;         
		  }    
	 }              
	
	 if (el.parentNode) { 
	    parent = el.parentNode;
	 } else {
	    parent = null;
	 }
	
	 while (parent && parent.tagName != 'BODY' && parent.tagName != 'HTML') { // account for any scrolled ancestors
			pos[0] -= parent.scrollLeft;
			pos[1] -= parent.scrollTop;
			if (parent.parentNode) {
			 parent = parent.parentNode;
			} else {
			 parent = null;
			}
	 }
	 return {x:pos[0], y:pos[1]};
}
//动态加载JS
HX.loaddisabledScript = function(url,id,callback) {
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  if(id!='') script.id= id;
	  if(script.readyState) {
		  script.onreadystatechange = function() {
			   if(script.readyState == 'loaddisableded' || script.readyState == 'complete') {
				    callback();
				   }
			  }
		  }
	  else {
		  script.onloaddisabled = function() {callback();};
		  }
	  script.src = url;
	  document.getElementsByTagName('head')[0].appendChild(script);	    
}
//取当前元素坐标
bankCal.getRemoteData=function(the,year,month,dd)
{
     var months = (parseInt(month) < 10) ? "0" + month : month;
	var url=preURL+"?date=" + year + months + "&"+Math.random();
	//var url=preURL+"?date="+year+month+"&"+Math.random();
if(HX.$('financialCalendar_script_id') && HX.$('financialCalendar_script_id')!=null) {
	var script = HX.$('financialCalendar_script_id');
	HX.$E.remove(script);
}
HX.loaddisabledScript(url,'financialCalendar_script_id',function(){
var data = (typeof FinancialCalendarJsonData!='undefined')?FinancialCalendarJsonData:{day:'',news:[]};
		 		//初始化带新闻的数据
		 		bankCal.days=data.day.split("|");
				bankCal.news=data.news;
				bankCal.drawDatePanel(the,year,month,dd);
});
}
bankCal.GetParam = function(name)
{
    var reg = new RegExp("(^|&|[?])" + name + "=([^&]*)(&|$)","i");   
    
	var r = window.document.location.href.match(reg);   

	if(r != null) return unescape(r[2]);   

	return null;  
}