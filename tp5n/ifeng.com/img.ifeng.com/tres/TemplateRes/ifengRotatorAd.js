/*
RotatorAD
Author: chengds@ifeng.com
格式: new RotatorAD(商业广告数组, 垫底广告数组, 层id);商业广告数组[资源url,弹出链接url,排期开始时间,排期结束时间,轮播权值]
说明: 每次访问根据权值随机出现；自动过滤过期广告；无商业广告时，轮播垫底广告
*/
if(typeof(RotatorAD)!='function'){
var RotatorAD = function(rad,ifengAd,div_id){

var date = new Date();

var w = rad.width;//广告的宽度
var h = rad.height;//广告高度

var curIndex=0;

var ary = new Array();
//过滤过期广告
for(var i=0; i<rad.length; i++){
	var strStart = rad[i][2].replace('<startdate>','').replace('</startdate>','');
	var strEnd = rad[i][3].replace('<enddate>','').replace('</enddate>','');
	var start = strToDate(strStart);
	var end = strToDate(strEnd);
	if((date>start || strStart=="" ) && (date<end || strEnd=="" ) ){
		ary.push([rad[i][0], rad[i][1], rad[i][4]?rad[i][4]:1]);//([资源url,弹出链接url,轮播权值:默认为1)]
	}
}

//补垫底广告
if(ary.length==0)
{
	for(var i=0; i<ifengAd.length; i++){
		ary.push([ifengAd[i][0], ifengAd[i][1],1]);
	}
}

//根据权重计算得到广告索引号
//ary.sort(function(x,y){return x[2]<y[2];});//根据权重升序排序 IE FF 两者对此方法的排序算法不一致，弃用！

//冒泡排序
ary = BubbleSort(ary);

curIndex = GetAdIndexByRandomAndWeight(ary);//根据权重随机抽取要显示的广告索引号，权重越大抽取到的概率越大

//显示 AD
var type = ary[curIndex][0].substring(ary[curIndex][0].lastIndexOf (".")).toLowerCase();

var resUrl = ary[curIndex][0];
var linkUrl = ary[curIndex][1];

var od = document.getElementById(div_id);
if(od){
	if(type=='.swf'){
		od.innerHTML = getFlashString(resUrl,linkUrl);
	}else if(type=='.jpg' || type=='.gif'){
		od.innerHTML = '<a href="'+linkUrl+'" target="_blank"><img src="'+resUrl+'" border="0" width="'+w+'" height="'+h+'" /></a>';
	}else if(type=='.html' || type=='.tml'|| type=='.html'){
		od.innerHTML = '<iframe id="ifm_'+div_id+'" frameborder="0" scrolling="no" width="'+w+'" height="'+h+'"></iframe>';
		document.getElementById('ifm_'+div_id).src = resUrl;
	}else if(type=='.js'){ //js
		void('<script language="javascript" type="text/javascript" src="'+resUrl+'"></scr'+'ipt>');
	}else{ //textlink
		od.innerHTML =resUrl;
	}
}
else
{
	if(type=='.swf'){
		void(getFlashString(resUrl,linkUrl));
	}else if(type=='.jpg' || type=='.gif'){
		void('<a href="'+linkUrl+'" target="_blank"><img src="'+resUrl+'" border="0" width="'+w+'" height="'+h+'" /></a>');
	}else if(type=='.html' || type=='.tml'|| type=='.html'){
		void('<iframe id="ifm_'+div_id+'" frameborder="0" scrolling="no" width="'+w+'" height="'+h+'"></iframe>');
		document.getElementById('ifm_'+div_id).src = resUrl;
	}else if(type=='.js'){ //js
		void('<script language="javascript" type="text/javascript" src="'+resUrl+'"></scr'+'ipt>');
	}else{ //textlink
		void(resUrl);
	}

}

function getFlashString(resUrl,linkUrl)
{
	var dcswf_click = escape(linkUrl);
	var s='';
	
	s += "<objectdisabled classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'";
	s += " codebase='http://downloaddisabled.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0'";
	s += " ID=flashad WIDTH=" + w + " HEIGHT=" + h + ">";
	s += " <PARAM NAME=movie VALUE='" + resUrl + "?clickTag=" + dcswf_click + "'> "; 
	s += " <PARAM NAME=quality VALUE=autohigh> ";
	s += " <PARAM NAME=wmode VALUE=opaque> ";
	s += " <embeddisabled SRC='" + resUrl + "?clickTag=" + dcswf_click + "' QUALITY=autohigh "; 
	s += " NAME=flashad swLiveConnect=TRUE WIDTH=" + w + " HEIGHT=" + h + " wmode=opaque ";
	s += " TYPE='application/x-shockwave-flash' PLUGINSPAGE='http://www.macromedia.com/shockwave/downloaddisabled/index.cgi?P1_Prod_Version=ShockwaveFlash'>";
	s += "</EMBED>";
	s += "</OBJECT>";
	
	return s;

}

 function BubbleSort(arr) { //交换排序->冒泡排序
  var temp;
  var exchange;
  for(var i=0; i<arr.length; i++) {
   exchange = false;
   for(var j=arr.length-2; j>=i; j--) {
    if((arr[j+1][2]) < (arr[j][2])) {
     temp = arr[j+1];
     arr[j+1] = arr[j];
     arr[j] = temp;
     exchange = true;
    }
   }
   if(!exchange) break;
  }
  return arr;
 }

function strToDate(str,ext){
	var aryDate = new Array();
	var aryTime = new Array();
	
	var dt = new Array();
	dt = str.split(' ');
	aryDate = dt[0].split('-');
	if(dt.length>=2)
	{
		aryTime = dt[1].split(':');
	}
	var newDate = new Date(aryDate[0],aryDate[1]-1,aryDate[2],aryTime[3]?aryTime[3]:0,aryTime[4]?aryTime[4]:0,aryTime[5]?aryTime[5]:0);
	if(ext){
		newDate = new Date(newDate.getTime()+1000*60*60*24);//加一天
	}
	return newDate;
}

//根据权重随机抽取要显示的广告索引号，权重越大抽取到的概率越大
function GetAdIndexByRandomAndWeight(adArr)
{
	//计算权值总数
	var w =0;
	for(var i=0; i<adArr.length; i++){
		w+=parseInt(adArr[i][2]);
	}

	rd =Math.random()*w;
	var tmp=0;
	for(var i=0; i<adArr.length; i++){
		tmp += parseInt(adArr[i][2]);
		if(rd <= tmp) //adArr经过升序排序
		{
			return i;
		}
	}
	
	return 0;
	
}

}
}