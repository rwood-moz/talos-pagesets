var twttr=window.twttr||{};(function(){var A=/twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,G="scrollbars=yes,resizable=yes,toolbar=no,location=yes",U=550,Q=420,C=screen.height,P=screen.width;function a(i){i=i||window.event;var h=i.target||i.srcElement,d,g,f;while(h&&h.nodeName.toLowerCase()!=="a"){h=h.parentNode}if(h&&h.nodeName.toLowerCase()==="a"&&h.href){d=h.href.match(A);if(d){g=Math.round((P/2)-(U/2));f=0;if(C>Q){f=Math.round((C/2)-(Q/2))}void(h.href,"intent",G+",width="+U+",height="+Q+",left="+g+",top="+f);i.returnValue=false;i.preventDefault&&i.preventDefault()}}}if(!window.__twitterIntentHandler){if(document.addEventListener){document.addEventListener("click",a,false)}else{if(document.attachEvent){document.attachEvent("onclick",a)}}window.__twitterIntentHandler=true}if(!twttr.widgets){twttr.widgets={}}if(!twttr.widgets.host){twttr.widgets.host="platform{i}.twitter.com"}if(typeof twttr.widgets.ignoreSSL==="undefined"){twttr.widgets.ignoreSSL=false}function Z(e){var g=R(e);var f=twttr.widgets.host;var d=f.replace("{i}",I++);if(I==3){I=0}return g+"://"+d}function R(d){return(window.location.protocol.match(/s\:$/)||d)&&!twttr.widgets.ignoreSSL?"https":"http"}function Y(h){var e;for(var d in h){e=S.apply(this,d.split("."));for(var f=0,g;(g=e[f]);f++){new h[d](g).render()}}}function M(i){var f;var g;var e=function(){if(document.readyState=="complete"){f()}};var d;var h=function(){try{document.documentElement.doScroll("left");f()}catch(j){}};if(window.addEventListener){f=function(){if(!g){g=true;i()}window.removeEventListener("DOMContentLoaded",f,false);window.removeEventListener("load",f,false)};window.addEventListener("DOMContentLoaded",f,false);window.addEventListener("load",f,false)}else{if(window.attachEvent){d=window.setInterval(h,13);f=function(){if(!g){g=true;i()}window.clearInterval(d);window.detachEvent("onreadystatechange",e);window.detachEvent("onload",f)};window.attachEvent("onreadystatechange",e);window.attachEvent("onload",f)}}}function S(d,j){var h,k=[],f,g;try{if(document.querySelectorAll){k=document.querySelectorAll(d+"."+j)}else{if(document.getElementsByClassName){h=document.getElementsByClassName(j);for(f=0;(g=h[f]);f++){if(g.tagName.toLowerCase()==d){k.push(g)}}}else{h=document.getElementsByTagName(d);var m=new RegExp("\\b"+j+"\\b");for(f=0;(g=h[f]);f++){if(g.className.match(m)){k.push(g)}}}}}catch(l){}return k}function X(d){return encodeURIComponent(d).replace(/\+/g,"%2B")}function F(d){return decodeURIComponent(d)}function N(f){var e=[];for(var d in f){if(f[d]!==null&&typeof f[d]!=="undefined"){e.push(X(d)+"="+X(f[d]))}}return e.sort().join("&")}function V(g){var j={},f,h,e,d;if(g){f=g.split("&");for(d=0;(e=f[d]);d++){h=e.split("=");if(h.length==2){j[F(h[0])]=F(h[1])}}}return j}function J(e,f){for(var d in f){e[d]=f[d]}return e}function W(e){var d;if(e.match(/^https?:\/\//)){return e}else{d=location.host;if(location.port.length>0){d+=":"+location.port}return[location.protocol,"//",d,e].join("")}}function B(){var d=document.getElementsByTagName("link");for(var e=0,f;(f=d[e]);e++){if(f.getAttribute("rel")=="canonical"){return W(f.getAttribute("href"))}}return null}function L(f){var g=[];for(var e=0,d=f.length;e<d;e++){g.push(f[e])}return g}function E(){var e=document.getElementsByTagName("a"),l=document.getElementsByTagName("link"),d=/\bme\b/,g=/^https?\:\/\/(www\.)?twitter.com\/(#!\/)?([a-zA-Z0-9_]+)\/?$/,k=L(e).concat(L(l)),j,n,f;for(var h=0,m;(m=k[h]);h++){n=m.getAttribute("rel");f=m.getAttribute("href");if(n&&f&&n.match(d)&&(j=f.match(g))){return j[3]}}}var H=document.title,O=encodeURI(location.href),I=0,b={en:{vertical:[55,62],horizontal:[110,20],none:[55,20]},de:{vertical:[67,62],horizontal:[110,20],none:[67,20]},es:{vertical:[64,62],horizontal:[110,20],none:[64,20]},fr:{vertical:[65,62],horizontal:[110,20],none:[65,20]},it:{vertical:[55,62],horizontal:[110,20],none:[55,20]},ko:{vertical:[55,62],horizontal:[110,20],none:[55,20]},ja:{vertical:[80,62],horizontal:[130,20],none:[80,20]},ru:{vertical:[68,62],horizontal:[110,20],none:[68,20]},tr:{vertical:[66,62],horizontal:[110,20],none:[66,20]},pt:{vertical:[66,62],horizontal:[110,20],none:[66,20]}},K={en:1,de:1,es:1,fr:1,it:1,ko:1,ja:1,ru:1,tr:1,pt:1},D={vertical:1,horizontal:1,none:1},c={en:"Twitter For Websites: Tweet Button",de:"Twitter für Webseiten: Tweet-Schaltfläche",es:"Twi`tter para sitios web: Botón para Twittear",fr:'Twitter pour votre site web : bouton "Tweeter"',it:"Tweeter per i siti web: Bottone Tweet",ja:"WEBサイト向けTwitter: ツイートボタン",ko:"Twitter 웹버전: 트윗 버튼",pt:"Twitter para websites: Botão de Tweet",ru:"Твиттер для веб-сайта: кнопка «Твитнуть»",tr:"Web siteleri için Twitter: Tweetle Butonu"};twttr.TweetButton=function(h){this.originElement=h;var e=h.href.split("?")[1],g=e?V(e):{},d=g.count||h.getAttribute("data-count"),f=g.lang||h.getAttribute("data-lang");this.text=g.text||h.getAttribute("data-text")||H;this.via=g.via||h.getAttribute("data-via")||E();this.url=g.url||h.getAttribute("data-url")||B()||O;this.statusID=g.status_id||h.getAttribute("data-status-id");this.related=g.related||h.getAttribute("data-related");this.counturl=g.counturl||h.getAttribute("data-counturl");this.searchlink=g.searchlink||h.getAttribute("data-searchlink");this.placeid=g.placeid||h.getAttribute("data-placeid");if(!D[d]){d="horizontal"}this.count=d;if(!K[f]){f="en"}this.lang=f};J(twttr.TweetButton.prototype,{parameters:function(){var d;if(this.statusID){d={status_id:this.statusID}}else{d={text:this.text,url:this.url,via:this.via,related:this.related,count:this.count,lang:this.lang,counturl:this.counturl,searchlink:this.searchlink,placeid:this.placeid}}d._=(new Date()).getTime();return N(d)},render:function(){if(!twttr.TweetButton.fragment){twttr.TweetButton.fragment=document.createElement("div");twttr.TweetButton.fragment.innerHTML='<iframe allowtransparency="true" frameborder="0" scrolling="no" tabindex="0" class="twitter-share-button twitter-count-'+this.count+'"></iframe>'}var e=twttr.TweetButton.fragment.firstChild.cloneNode(false);e.src=Z()+"/widgets/tweet_button.html?"+this.parameters();var f=b[this.lang][this.count];e.style.width=f[0]+"px";e.style.height=f[1]+"px";e.title=c[this.lang];var d=this.originElement.parentNode;if(d){d.replaceChild(e,this.originElement)}}});var T={"a.twitter-share-button":twttr.TweetButton};Y(T);M(function(){Y(T)})}());