// search
function ch_w(str)
{
  if(str=="新闻"|| str=="博客")
  {
	document.hexun_search.wf.value="2";
  }

}
function prepare_It()
{
if(document.getElementById('rdinfo').checked==true){
	document.hexun_search.sw.value=document.hexun_search.tempsw.value; 
	document.hexun_search.action = "httpdisabled://news.search.hexun.com/forinfosearch.aspx";
}
if(document.getElementById('rdstock').checked==true||document.getElementById('rdfunds').checked==true){
	document.hexun_search.sw.value=document.hexun_search.tempsw.value;
	document.hexun_search.action = "httpdisabled://search.hexun.com/forwikiSearch.aspx";
}
if(document.getElementById('blog').checked==true){
	document.hexun_search.sw.value=document.hexun_search.tempsw.value;
	document.hexun_search.action = "httpdisabled://news.search.hexun.com/cgi-bin/search/blog_search.cgi";
}
}
function click_Search(){
    if(document.hexun_search.tempsw.value!=""){
	prepare_It();
    	document.hexun_search.submit();
    }else{
	alert("请输入检索关键词");
    }
}
function check_It(){
    if(document.hexun_search.tempsw.value!="")
    {
		prepare_It();

    }else{
		alert("请输入检索关键词");
		return false;
    }	
}
//财经要闻、时事要闻标签切换
function SwitchNewsTag(id,num,count)
{
	ClearTagClass(id,count);
	document.getElementById("tagname_" + id + num).className = "tagf";
	document.getElementById(id + num).style.display = "";
}
function ClearTagClass(id,count)
{
	for(i=1;i<=count;i++)
	{
		document.getElementById("tagname_" + id + i).className = "tagn";
		document.getElementById(id + i).style.display = "none";
	}
}
// 股吧搜索
function StockBar_Submit()
{
	var swValue = document.getElementById("search_word").value;		
	if(swValue == "" || swValue==null)
	{
		alert("请输入查询条件");
		return false;
	}		
	else
	{
		//var url = "httpdisabled://bar.hexun.com/PostSearch.aspx?sw=" + swValue + "&radiobutton=1";		
		var url = "httpdisabled://guba.hexun.com/search/ResultAll.aspx?sw=" + swValue + "&radiobutton=1";		
		void(url);
	}
}
//交友查询
function CheckSubmit()
{
	if( findfrm.zone.value == '')
	{
		alert("省份不能为空");
		return false;
	}
}
//工具下拉框
function OpenSelected(url)
{
	if(url != "" && url != null)
	{
		void(url);
	}
}
//财经百科搜索
function WikiSearchCheck()
{
	if(document.getElementById("wiki_search").value!="")
	{
		var url = "httpdisabled://wiki.hexun.com/wikisearch.aspx?sw=" + document.getElementById("wiki_search").value;
		void(url);
	}
	else
	{
		alert("请输入检索关键字");
		return false;
	}
}

/*-------------------------------------------------------------------------------------------
**********************************************************************************************
**********************************************************************************************
**********************************************************************************************
**********************************************************************************************
-----------------------------------09-30--------------------------------------------------***/

var defaultMessage=new Array('输入代码、名称或简写','输入股票代码或简称','输入新闻关键字','输入博文关键词或博主名字')
var radios_x=document.getElementsByName("whichDB")
function wrDefault(my_obj)
	{
		var messageObj=document.getElementById("textMessage")
		var change=false;
		for(var i=0; i<radios_x.length; i++)
			{
				if(messageObj.value==defaultMessage[i])
				{ change=true;break}
			}
		if(change==false && messageObj.value!="")
			{
				return;	
			}
		for(var i=0; i< radios_x.length; i++)
			{
				if(my_obj==radios_x[i]) {
				messageObj.value=defaultMessage[i];
				messageObj.style.color = '#858585';
				}
			}
	}

function clearDefault(my_obj)
	{
		var ret=false;
		for(var i=0;i<defaultMessage.length;i++)
		{
			if(my_obj.value==defaultMessage[i])
				ret=true;
		}
		if(ret)
			my_obj.value=""
	}

function submitForm_x()
	{
		var submit_info=document.getElementById("textMessage").value;
		if(radios_x[0].checked == true && hxSuggest.util.trim(submit_info)!='') submit_info = hxSuggest.submitValue;
 		var my_form=document.hexunsearch;
		var myNum=0;
		for(var i=0; i< radios_x.length; i++)
			{
				if(radios_x[i].checked)
				myNum=i;
			}
		changeAction( myNum,submit_info,my_form);
		checkSubmit ( myNum,submit_info,my_form);
	}
function isNumber(str)
	{
		if(''==str){
			return false;
		}
		var reg= /\D/;
		return str.match(reg)==null;
	}	
function changeAction(myNum,submit_info,my_form)
	{   
		if(myNum==0)
			{ 
				//my_form.action="httpdisabled://data.stock.hexun.com/search/default.aspx";
				my_form.action="httpdisabled://data.stock.hexun.com/search/default.aspx";
				document.getElementById("stockid").value=submit_info;
			}	
		if(myNum==1)
			{
				//my_form.action="httpdisabled://guba.hexun.com/PostSearchNew.aspx?sw="+submit_info+"&radiobutton=1";
				//my_form.action="httpdisabled://guba.hexun.com/search/ResultAll.aspx?sw="+submit_info+"&radiobutton=1";
				if(isNumber(submit_info)){
					my_form.action="httpdisabled://t.hexun.com/g/"+submit_info+"_1.html";
				}else{
					my_form.action="httpdisabled://t.hexun.com/k/topic.html?value="+submit_info;
				}
			}
		if(myNum==2)
			{
				my_form.action="httpdisabled://news.search.hexun.com/infosearch.aspx?sw="+submit_info+"&wf=2";
				my_form.action="httpdisabled://news.search.hexun.com/cgi-bin/search/info_search.cgi?key="+submit_info+"&f=0";
			}
		if(myNum==3)
			{
				my_form.action="httpdisabled://news.search.hexun.com/cgi-bin/search/blog_search.cgi?key="+submit_info;
			}
	}
function checkSubmit(myNum,submit_info,my_form)
	{
		if(submit_info=="")
			{alert('请填写查询信息');return false;}
		for(var i=0; i< defaultMessage.length;i++)
			{
				if(submit_info==defaultMessage[i])
				{ alert('请填写查询信息');return false;}
			}
		if(myNum==0 || myNum==1 || myNum==3)
			{
				my_form.submit();
			}
		else
			{	
				void(my_form.action);
			}
	}
function BlogSearchCheck(type,num)
{
	if(document.getElementById(type).value!="")
	{
		document.getElementById("sw").value=document.getElementById(type).value; 
		if(num == 1)
		{
			document.hexunsearch.submit();
		}
		else
		{
			var url = "httpdisabled://blog.search.hexun.com/forblogsearch.aspx?sw=" + document.getElementById(type).value + "&wf=2";
			void(url);
		}
	}
	else
	{
		alert("请输入博客关键字");
		return false;
	}	
}
//iPad浏览器判断100730,增加对android系统判断支持0830
function testiPad(sid,ieurl,ipadurl){
	var testAppleMobile = /\((iPhone|iPad|iPod)/i;
	var testAndroid = /(android)/i;
	var appleD=document.getElementById(sid);
	if(appleD!=null){
		if(testAppleMobile.test(navigator.userAgent)||testAndroid.test(navigator.userAgent))
		{
			appleD.src = ipadurl;
		}else{
			appleD.src = ieurl;	
		}
	}
}


//大于18号字时重新设置字号100813
function resetFontSize_Ipad(_obj)
{	
	var testAppleMobile = /\((iPhone|iPad|iPod)/i;
	if(testAppleMobile.test(navigator.userAgent))
	{
		var obj=document.getElementById(_obj);
		if(obj)obj.style.fontSize="17px";			
	}			
}


//
function submitForm_notIE(e) {
   var e = e?e:window.event;
   if(e.keyCode==13){submitForm_x();return false;}	
}


/*2010-02-28*/
var hxSuggest =  function(inputObj,url,options) {
   this.input = hxSuggest.util.$(inputObj);
   this.url = url;
   this.setDefault(options);
   this.gaper = this.options.gaper;
   this.maxRow = this.options.maxRow;
   this.scriptId = this.options.scriptId;
   this.contrainer = hxSuggest.util.$(this.options.contrainer);
   this.tempObj = hxSuggest.util.$(this.options.tempObj);
   this.common = this.options.common;   
   //检索计时器
   this.timer = null;
   //DOM缓存
   this.fragment = document.createDocumentFragment();
   //记录旧值
   this.oldValue = hxSuggest.util.trim(this.input.value).toUpperCase();
   //定义键盘事件步数
   this.step = 0;
   //初始化悬浮面板
   this.drawPanel();
   //提交的值
   this.temp = '';
}
//记录最终提交的值
hxSuggest.submitValue = '';

//原型类
hxSuggest.prototype = {
    //设定默认值
    setDefault:function(options){
	   this.options = {
	   //查找间隙
	   gaper:100,
	   //最大显示条数
	   maxRow:10,
	   //加载script的固定ID标示
	   scriptId:'hxSuggest_ids',
	   //加载容器
	   contrainer:document.body,
	   //通用
	   common:false,
	   tempObj:''
	   };
	  hxSuggest.util.Extend(this.options,options||{});
	},
	//绘制悬浮面板
	drawPanel:function(){
	  //存放内容
	  this.conPanel = document.createElement('div');
	  hxSuggest.util.css(this.conPanel,{
	     border:'1px solid #9A9B9D',
		 width:'202px',
		 background:'#FFF',
		 position:'absolute',
		 display:'none',
		 zIndex:'999'
	  });
	  //存放阴影
	  this.shadePanel = document.createElement('div');
	  hxSuggest.util.css(this.shadePanel,{
	     width:'204px',
		 background:'#8D8D8D',
		 position:'absolute',
		 opacity:'0.6',
		 display:'none',
		 zIndex:'998'
	  });
	  //存放iframe隔离层
	  this.framePanel = document.createElement('iframe');
	  hxSuggest.util.css(this.framePanel,{
	    width:'207px',
		position:'absolute',
		opacity:'0',
		display:'none',
		zIndex:'997'
	  });
	  this.fragment.appendChild(this.framePanel);
	  this.fragment.appendChild(this.shadePanel);
	  this.fragment.appendChild(this.conPanel);
	  this.contrainer.appendChild(this.fragment);
	  this.addEvent();
	},
	//绑定事件
	addEvent:function(){
	  var _this = this;
	  this.input.onfocus = (function() {
	     return function() {
		    var value = hxSuggest.util.trim(_this.input.value);
			for(var i=0;i<defaultMessage.length;i++) {
				if(value == defaultMessage[i]) {
					_this.input.value = '';
					_this.input.style.color = '#000';
				  }
				}
			if(_this.common) voidSearch();
			else if(radios_x[0].checked == true) voidSearch();			
		 }
	  })();
	  this.input.onblur = (function(){
	     return function() {
		    clearInterval(_this.timer);
			_this.oldValue = '';
			_this.step = 0;
			if(_this.temp!='' && hxSuggest.util.trim(_this.input.value)!='') {
				if((!_this.common && radios_x[0].checked==true)|| _this.common) _this.input.value = _this.temp;
				if(!_this.common) hxSuggest.submitValue = _this.temp;
				else _this.tempObj.value = _this.temp;
				}
			if(hxSuggest.util.trim(_this.input.value)=='' && radios_x[0].checked == true) {
				_this.input.value = defaultMessage[0];
				_this.input.style.color = '#858585';
				}
			_this.hide();
			if(hxSuggest.util.$(_this.scriptId) && hxSuggest.util.$(_this.scriptId)!=null) {
				hxSuggest.util.$(_this.scriptId).parentNode.removeChild(hxSuggest.util.$(_this.scriptId));
				}
		 }
	  })();	
	   //绑定键盘事件
	   hxSuggest.util.bind(this.input,'keydown',function(e){  
	   _this.keyEvent(e); 	   
	  });	    
	},
	//开启检索
voidSearch:function() {
     var _this = this;
     this.timer = setInterval(function(){								   
	   var value = hxSuggest.util.trim(_this.input.value).toUpperCase();
	   if((value.indexOf('"')!=-1 || value.indexOf("'")!=-1 || value.indexOf("[")!=-1 || value.indexOf("]")!=-1) && value!=_this.oldValue) {
		       _this.oldValue = value;
		       _this.setValue([]);
		   }
	   else if(value!='' && value!=_this.oldValue) {
	     _this.oldValue = value;
		 _this.returnValue(value);
	   }
	   else if(value=='') {
	   _this.oldValue = value;
	   _this.conPanel.innerHTML = '';
	   _this.hide();
	   }
	  },this.gaper);	
	},
	//隐藏面板
	hide:function() {
	  this.conPanel.style.display = 'none';
	  this.shadePanel.style.display = 'none';
	  this.framePanel.style.display = 'none';
	},
	//显示面板
	show:function() {
	  if(this.conPanel.style.display == 'none') { 
	  this.conPanel.style.display = '';
	  this.shadePanel.style.display = '';
	  this.framePanel.style.display = '';
	  }
	  var t = hxSuggest.util.top(this.input)+hxSuggest.util.height(this.input);
	  var l = hxSuggest.util.left(this.input);
	  var h = hxSuggest.util.height(this.conPanel);
	  hxSuggest.util.top(this.conPanel,t);	  
	  hxSuggest.util.left(this.conPanel,l);
	  
	  hxSuggest.util.top(this.shadePanel,t+2);	  
	  hxSuggest.util.left(this.shadePanel,l+2);
	  hxSuggest.util.height(this.shadePanel,h);
	  
	  hxSuggest.util.top(this.framePanel,t);	  
	  hxSuggest.util.left(this.framePanel,l);
	  hxSuggest.util.height(this.framePanel,h);  	  	  
	},
	//获取值
	returnValue:function(value) {
	  if(hxSuggest.util.$(this.scriptId) && hxSuggest.util.$(this.scriptId)!=null) {
	     var obj = hxSuggest.util.$(this.scriptId);
	     obj.parentNode.removeChild(obj);
	  }
	  //包装url
	  var _this = this;
	  var url = this.url+"?key="+value;
	  hxSuggest.util.loaddisabledScript(url,this.scriptId,function(){
		if(hxSuggest_JsonData && hxSuggest.util.isArray(hxSuggest_JsonData)) {
		   _this.conPanel.innerHTML = '';
		   _this.setValue(hxSuggest_JsonData);
		}
		else {
		   _this.hide();
		} 
	  });
	},
	//加载内容
	setValue:function(d) {
	  var str = '<table cellpadding="0" cellspacing="0" width="100%" style="font-size:12px;font-family:宋体; cursor:default; line-height:normal;">';
	  if(d.length==0) { 
	  str += '<tr><td style="padding:5px 0 5px 8px;">没有可匹配的股票名称或代码</td></tr>';
	  this.temp = '';
	  if(!this.common) hxSuggest.submitValue = this.temp;
	  else this.tempObj.value = this.temp;
	  }
	  else {
	  var len = Math.min(d.length,this.maxRow);
	  for(var i=0;i<len;i++) {
		if(i==0) str+='<tr style="background:#ECECEC">';
		else str+='<tr style="background:">';
		str+='<td style="padding:5px 0 5px 8px;">'+this.redDeal(d[i].code)+'</td>';
		if(d[i].name.length>5) str+='<td><span title="'+d[i].name+'">'+this.redDeal(d[i].name.substr(0,4)+'..')+'</span></td>';
		else str+='<td>'+this.redDeal(d[i].name)+'</td>';
		if(d[i].short.length>9) str+='<td><span title="'+d[i].short+'">'+this.redDeal(d[i].short.substr(0,9))+'</span></td>';
		else str+='<td>'+this.redDeal(d[i].short)+'</td>';
		str+='<td style="color:#858585;">'+d[i].type+'</td>';
		str+='</tr>';
	  }
	  }
	  str+='</table>';
	  this.conPanel.innerHTML = str;
	  //绑定鼠标over事件
	  if(d.length>0) {
	   var trlist = this.conPanel.getElementsByTagName('tr');
	   this.step = 0;
	   this.temp = hxSuggest.util.text(trlist[0].getElementsByTagName('td')[0]);
	   if(!this.common) hxSuggest.submitValue = this.temp;
	   else this.tempObj.value = this.temp;
	   var len = trlist.length;
	   var _this = this;
	   for(var i=0;i<len;i++) {
	     trlist[i].onmouseover = (function(i){
		   return function() {
               _this.selectRow(i);
			  }
		 })(i);
	   }
	  }
	  this.show();
	},
	//选中数据行
	selectRow:function(i){
	  var trlist = this.conPanel.getElementsByTagName('tr');
	  var len = trlist.length;
	  for(var j=0;j<len;j++) {
		 if(i==j) {
			trlist[j].style.background = '#ECECEC';
			this.step = j;
			this.temp = hxSuggest.util.text(trlist[i].getElementsByTagName('td')[0]);
			if(!this.common) hxSuggest.submitValue = this.temp;
			else this.tempObj.value = this.temp;
			}
		 else {
			trlist[j].style.background='';
		 }	
	   }  
	},
	//键盘事件
	keyEvent:function(e) {
	  var e = e?e:window.event;
	  if(typeof this.conPanel =='undefined' &&  this.conPanel.display == 'none') return;
	  if(e.keyCode == 38) {
	   //向上
	   var len = this.conPanel.getElementsByTagName('tr').length;
	   if(len>1) {
	   this.step = (this.step==0)?(len-1):(this.step-1);
	   this.selectRow(this.step);
	   }
	 }
	 if(e.keyCode == 40) {
	   //向下
	   var len = this.conPanel.getElementsByTagName('tr').length;
	   if(len>1) {
	   this.step = (this.step==len-1)?0:(this.step+1);
	   this.selectRow(this.step);
	   }
	 }
	},	
	//标红处理
	redDeal:function(str) {
	var key = hxSuggest.util.trim(this.input.value).toUpperCase();
	str = str.replace(key,'<span style="color:#FF0000">'+key+'</span>');
	return str;
	}
};
//工具类
hxSuggest.util = {
   //取元素
   $:function(element) {
	var el;
	if(typeof element == 'string') el = document.getElementById(element);
	else el = element;
	if(!el) return null;
	else return el;
   },   
   //扩展
   Extend:function(destination,source) {
    	for (var property in source) {
		destination[property] = source[property];
	}
   },
   //去除空白字符
   trim:function(str){
	 return str.replace(/^\s+|\s+$/g,'');
    },
	//转为驼峰型
	camelCase:function(str){
		return str.replace(/-\D/g, function(match){
				return match.charAt(1).toUpperCase();
			});
	},
	//判断一个对象是否为数组
	isArray:function(value) {
		return Object.prototype.toString.apply(value) === '[object Array]';
	},		   
   //定位
	pos:function(el) {
		if(el.parentNode === null || el.style.display == 'none') return false;
		var parent = null,pos = [],box;
		if (el.getBoundingClientRect) {
			box = el.getBoundingClientRect();
			var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
			var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
			return {
				x: box.left + scrollLeft,
				y: box.top + scrollTop
			};
		}
		else 
			if (document.getBoxObjectFor) {
				box = document.getBoxObjectFor(el);
				var borderLeft = (el.style.borderLeftWidth) ? parseInt(el.style.borderLeftWidth) : 0;
				var borderTop = (el.style.borderTopWidth) ? parseInt(el.style.borderTopWidth) : 0;
				pos = [box.x - borderLeft, box.y - borderTop];
			}
			else {
				pos = [el.offsetLeft, el.offsetTop];
				parent = el.offsetParent;
				if (parent != el) {
					while (parent) {
						pos[0] += parent.offsetLeft;
						pos[1] += parent.offsetTop;
						parent = parent.offsetParent;
					}
				}
				if(!window.opera || (navigator.userAgent.indexOf('Safari') < 0 && e.style.position == 'absolute')) {
			         pos[0]-= document.body.offsetLeft;
			         pos[1]-= document.body.offsetTop;
		         } 
			if(el.parentNode) {
				parent = el.parentNode;
			} 
			else {
				parent = null;
			}
			while(parent && parent.tagName.toUpperCase() != 'BODY' && parentName.toUpperCase() !='HTML'){
				pos[0]-=parent.scrollLeft;
				pos[1]-=parent.scrollTop;
				if(parent.parentNode) {
					parent = parent.parentNode;
				}
				else parent = null;
			}
		}
		return {x:pos[0],y:pos[1]};
	},
	//设置、获取元素宽
	width:function(el,value) {
		if(typeof value == 'undefined') {
			return el.offsetWidth;
		}
		else return this.css(el,'width',value+'px');
	},
	//设置、获取元素高
	height:function(el,value) {
		if(typeof value == 'undefined') {
			return el.offsetHeight;		
		}
		else return this.css(el,'height',value+'px');
	},
	//设置、获取元素左边距
	left:function(el,value) {
		if(typeof value == 'undefined') {
			return this.pos(el).x;		
		}
		else return this.css(el,'left',value+'px');
	},
	//设置、获取元素上边距
	top:function(el,value) {
		if(typeof value == 'undefined') {
			return this.pos(el).y;		
		}
		else return this.css(el,'top',value+'px');
	},  	
  //CSS添加及获取
  css:function(ele,name,value) {
      if(typeof name == 'undefined' && typeof value == 'undefined') {
			return ele.style.cssText;
		}
		else if(typeof name == 'string' && typeof value == 'undefined') {
			if(name=='float') name = (window.ActiveXObject)?'styleFloat':'cssFloat';
			if (name == 'opacity' && window.ActiveXObject && ele.style.filter) 
				return parseFloat(ele.style.filter.replace(/alpha\(opacity=/, '').replace(/\)/, '')) / 100;
			else {
				name = this.camelCase(name);
				return ele.style[name];
			}
		}
		else if (typeof name == 'object' && typeof value == 'undefined') {
				var params = name;
				for (var n in params) {
					var param;
					if(n=='float') n = (window.ActiveXObject)?'styleFloat':'cssFloat';
					if (n == 'opacity' && window.ActiveXObject) {
						ele.style.filter = 'alpha(opacity=' + parseInt(parseFloat(params[n]) * 100) + ')';
					}
					else {
						param = this.camelCase(n);
						ele.style[param] = params[n];
					}
				}
		}		
		else 
			if (typeof name == 'string' && typeof value != 'undefined') {
				if(name=='float') name = (window.ActiveXObject)?'styleFloat':'cssFloat';
				if (name == 'opacity' && window.ActiveXObject) 
					ele.style.filter = 'alpha(opacity=' + parseInt(parseFloat(value) * 100) + ')';
				else {
					name = this.camelCase(name);
					ele.style[name] = value;
				}
			}				      
  },	
	//动态加载script
	loaddisabledScript:function(url,id,callback) {
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
	},
 //事件绑定
 bind:function(ele,name,fn) {
    if(ele.attachEvent) {
    ele['e'+name+fn] = fn;
	ele[name+fn] = function() {
	  ele['e'+name+fn](window.event);
	  }
	ele.attachEvent('on'+name,ele[name+fn]);
    }
    else ele.addEventListener(name,fn,false);
  },
  //事件解绑
  unbind:function(ele,name,fn){
     if(ele.detachEvent) {
     ele.detachEvent('on'+name,ele[name+fn]);
     ele[name+fn] = null;
      }
     else ele.removeEventListener(name,fn,false);
  },
  //属性添加
  prop:function(ele,name, value) {
		if (typeof(value) == 'undefined' && ele[name]) {
			return ele[name];
		} else {
				ele[name] = value;
		}
   },  
   //文本节点赋值
   text:function(ele,value) {
         return this.prop(ele,typeof ele.innerText != 'undefined' ? 'innerText' : 'textContent', value);
   } 	 
};

function submitCommon(form,tempId) {
	var value = document.getElementById(tempId).value;
	if(value=='') alert('请填写查询信息');
	else {
		form.action="httpdisabled://data.stock.hexun.com/search/default.aspx";
		//void(form.action);
		form.submit();
	}
}