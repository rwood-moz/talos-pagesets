function cnip_clickable(a) {
return(a.tagName=="SELECT"||a.tagName=="A"||a.tagName=="LINK"||a.tagName=="AREA"||a.tagName=="INPUT"&&(a.type=="submit"||a.type=="image"||(a.type=="button"&&a.onclick!=null)));
}
var pagestat_image=document.createElement("img");
pagestat_image.src = "httpdisabled://analytics.tool.hexun.com/receivePVServlet?pageId=81";
document.onclick = clickStat;
function clickStat(evt) {  
evt=evt || window.event;
 var image=document.createElement("img");
tempX = evt.clientX + document.documentElement.scrollLeft-(document.documentElement.scrollWidth-960)/2;
tempX=Math.round(tempX);
tempY = evt.clientY + document.documentElement.scrollTop;
if(cnip_clickable(evt.srcElement ? evt.srcElement : evt.target)){image.src = "httpdisabled://analytics.tool.hexun.com/receive?width=" + screen.width +"&height="+screen.height+ "&x=" + tempX + "&y=" + tempY+"&pageId=81";
}}
