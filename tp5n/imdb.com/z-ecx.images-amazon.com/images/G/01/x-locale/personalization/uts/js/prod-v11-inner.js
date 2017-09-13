(function() {
amznUts.refPage = document.location.toString();
amznUts.refPage = encodeHTML(encodeURIComponent(amznUts.refPage));
amznUts.DomainId = encodeHTML(encodeURIComponent(amznUts.DomainId));
amznUts.EntityId = encodeHTML(encodeURIComponent(amznUts.EntityId));
amznUts.TransientId = encodeHTML(encodeURIComponent(amznUts.TransientId));
amznUts.DefinitiveId = encodeHTML(encodeURIComponent(amznUts.DefinitiveId));
amznUts.EventId = encodeHTML(encodeURIComponent(amznUts.EventId));
amznUts.PageId = encodeHTML(encodeURIComponent(amznUts.PageId));
amznUts.njh = encodeHTML(encodeURIComponent(amznUts.njh));
var cbuster = Math.random()*10000000000000000;
var varsToPass = "dmnId="+amznUts.DomainId
+"&tId="+amznUts.TransientId
+"&dId="+amznUts.DefinitiveId
+"&enId="+amznUts.EntityId
+"&eId="+amznUts.EventId
+"&pId="+amznUts.PageId
+"&rP="+amznUts.refPage
+"&njh="+amznUts.njh
+"&cB="+cbuster;
var svcHostname = "uts.amazon.com";
var protocol = "http";
if( document.location.toString().indexOf( 'https://' ) != -1 ) {
protocol = "https";
} 
var script = document.createElement('script');
script.type = "text/javascript";
script.src = "../../../IaR.html"; 
document.getElementsByTagName("head")[0].appendChild(script);
function encodeHTML(inputStr) {
if (!inputStr) return inputStr;
var myStr= inputStr;
myStr = (myStr.replace(/&/g, '&amp;')
.replace(/\"/g, '&quot;')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;'));
return myStr;
}
})();
