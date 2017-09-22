var uts = {
protocol: "",
imageHostname:"../../../z-ecx.images-amazon.com",
queue: [
"/images/G/01/x-locale/personalization/uts/js/prod-v11-inner.js",
],
loadFromQueue:function(){
if( document.location.toString().indexOf( 'https://' ) != -1 ) {
uts.protocol = "https";
uts.imageHostname = "images-na.ssl-images-amazon.com";
} 
if (uts.queue.length > 0) {
var script = document.createElement('script');
script.type = "text/javascript";
script.src = uts.imageHostname+uts.queue.shift();
document.getElementsByTagName("head")[0].appendChild(script);
}
}
}
setTimeout("uts.loadFromQueue()", 0);
