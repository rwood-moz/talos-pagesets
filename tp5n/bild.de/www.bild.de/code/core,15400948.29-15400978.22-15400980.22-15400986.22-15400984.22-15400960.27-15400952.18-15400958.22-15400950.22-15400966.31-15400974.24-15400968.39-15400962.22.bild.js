
/*jquery-1.4.2.js:15400978.22*/

/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("loaddisabled",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onloaddisabled",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunloaddisabled:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunloaddisabled=d;return false},teardown:function(a,b){if(this.onbeforeunloaddisabled===b)this.onbeforeunloaddisabled=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unloaddisabled"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout loaddisabled resize scroll unloaddisabled click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunloaddisabled",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<objectdisabled|<embeddisabled|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.loaddisabled;c.fn.extend({loaddisabled:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onloaddisabled=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaddisableded"||this.readyState==="complete")){B=true;b();d();C.onloaddisabled=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?void(n,e.url,e.async,e.username,e.password):void(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);
/*jquery.json-2.2.min.js:15400980.22*/

(function($){$.toJSON=function(o)
{if(typeof(JSON)=='object'&&JSON.stringify)
return JSON.stringify(o);var type=typeof(o);if(o===null)
return"null";if(type=="undefined")
return undefined;if(type=="number"||type=="boolean")
return o+"";if(type=="string")
return $.quoteString(o);if(type=='object')
{if(typeof o.toJSON=="function")
return $.toJSON(o.toJSON());if(o.constructor===Date)
{var month=o.getUTCMonth()+1;if(month<10)month='0'+month;var day=o.getUTCDate();if(day<10)day='0'+day;var year=o.getUTCFullYear();var hours=o.getUTCHours();if(hours<10)hours='0'+hours;var minutes=o.getUTCMinutes();if(minutes<10)minutes='0'+minutes;var seconds=o.getUTCSeconds();if(seconds<10)seconds='0'+seconds;var milli=o.getUTCMilliseconds();if(milli<100)milli='0'+milli;if(milli<10)milli='0'+milli;return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
if(o.constructor===Array)
{var ret=[];for(var i=0;i<o.length;i++)
ret.push($.toJSON(o[i])||"null");return"["+ret.join(",")+"]";}
var pairs=[];for(var k in o){var name;var type=typeof k;if(type=="number")
name='"'+k+'"';else if(type=="string")
name=$.quoteString(k);else
continue;if(typeof o[k]=="function")
continue;var val=$.toJSON(o[k]);pairs.push(name+":"+val);}
return"{"+pairs.join(", ")+"}";}};$.evalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);return eval("("+src+")");};$.secureEvalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,'@');filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered))
return eval("("+src+")");else
throw new SyntaxError("Error parsing JSON, source is not valid.");};$.quoteString=function(string)
{if(string.match(_escapeable))
{return'"'+string.replace(_escapeable,function(a)
{var c=_meta[a];if(typeof c==='string')return c;c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};var _escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var _meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};})(jQuery);
/*jquery-draggable.js:15400986.22*/

/*!
 * jQuery UI 1.8.2
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
(function(c){c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.2",plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==
"hidden")return false;b=b&&b=="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,f,g){return c.ui.isOverAxis(a,d,f)&&c.ui.isOverAxis(b,e,g)},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,
NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect",
"none")},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",
1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==undefined)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b=="absolute"||b=="relative"||b=="fixed"){b=parseInt(a.css("zIndex"));if(!isNaN(b)&&b!=0)return b}a=a.parent()}}return 0}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");return(/input|select|textarea|button|object/.test(b)?
!a.disabled:"a"==b||"area"==b?a.href||!isNaN(d):!isNaN(d))&&!c(a)["area"==b?"parents":"closest"](":hidden").length},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.2
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b){var j=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add(this).each(function(){b(this).triggerHandler("remove")});return j.call(b(this),a,c)})};b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend({},c.options);b[e][a].prototype=
b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.substring(0,1)==="_")return h;e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==undefined){h=i;return false}}):this.each(function(){var g=
b.data(this,a);if(g){d&&g.option(d);g._init()}else b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){this.element=b(c).data(this.widgetName,this);this.options=b.extend(true,{},this.options,b.metadata&&b.metadata.get(c)[this.widgetName],a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();
this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(a,c){var d=a,e=this;if(arguments.length===0)return b.extend({},e.options);if(typeof a==="string"){if(c===undefined)return this.options[a];d={};d[a]=c}b.each(d,function(f,
h){e._setOption(f,h)});return e},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=
b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.2
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 * jquery.ui.widget.js
 */
(function(c){c.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)}).bind("click."+this.widgetName,function(b){if(a._preventClickEvent){a._preventClickEvent=false;b.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&
this._mouseUp(a);this._mouseDownEvent=a;var b=this,e=a.which==1,f=typeof this.options.cancel=="string"?c(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){b.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();
return true}}this._mouseMoveDelegate=function(d){return b._mouseMove(d)};this._mouseUpDelegate=function(d){return b._mouseUp(d)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);c.browser.safari||a.preventDefault();return a.originalEvent.mouseHandled=true}},_mouseMove:function(a){if(c.browser.msie&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&
this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=a.target==this._mouseDownEvent.target;this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-
a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Draggable 1.8.2
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 * jquery.ui.core.js
 * jquery.ui.mouse.js
 * jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;return true},_mouseStart:function(a){var b=this.options;this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-
this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();
d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);return true},_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||
this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if(!this.element[0]||!this.element[0].parentNode)return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,
b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone():this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||
0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-
(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment==
"parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&
a.containment.constructor!=Array){var b=d(a.containment)[0];if(b){a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),
10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])e=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+
this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])e=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;e=this.originalPageX+
Math.round((e-this.originalPageX)/b.grid[0])*b.grid[0];e=this.containment?!(e-this.offset.click.left<this.containment[0]||e-this.offset.click.left>this.containment[2])?e:!(e-this.offset.click.left<this.containment[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-
this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=
this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.2"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var g=d.data(this,"sortable");
if(g&&!g.options.disabled){c.sortables.push({instance:g,shouldRevert:g.options.revert});g._refreshItems();g._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;
c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=
1;this.instance.currentItem=d(f).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=
this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","iframeFix",{start:function(){var a=
d(this).data("draggable").options;d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")})},stop:function(){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;
if(a.css("opacity"))b._opacity=a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!=
"HTML"){if(!c.axis||c.axis!="x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-
b.overflowOffset.left<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-
c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,
width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),f=c.options,e=f.snapTolerance,g=b.offset.left,n=g+c.helperProportions.width,m=b.offset.top,o=m+c.helperProportions.height,h=c.snapElements.length-1;h>=0;h--){var i=c.snapElements[h].left,k=i+c.snapElements[h].width,j=c.snapElements[h].top,l=j+c.snapElements[h].height;if(i-e<g&&g<k+e&&j-e<m&&m<l+e||i-e<g&&g<k+e&&j-e<o&&o<l+e||i-e<n&&n<k+e&&j-e<m&&m<l+e||i-e<n&&n<k+e&&j-e<o&&
o<l+e){if(f.snapMode!="inner"){var p=Math.abs(j-o)<=e,q=Math.abs(l-m)<=e,r=Math.abs(i-n)<=e,s=Math.abs(k-g)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:j-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k}).left-c.margins.left}var t=
p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(j-m)<=e;q=Math.abs(l-o)<=e;r=Math.abs(i-g)<=e;s=Math.abs(k-n)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:j,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[h].snapping&&
(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=p||q||r||s||t}else{c.snapElements[h].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),
10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;
/*jquery-cookie:15400984.22*/

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://voidsource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/*com.js:15400960.27*/

/** ACHTUNG! Vorläufige Version.
 * Es handelt sich um Prototypen, Optimierungen und Verbesserungen stehen noch aus */
var de = de || {};
de.bild = de.bild || {};
de.bild.community = de.bild.community || {};
//var community = new Object();
// Standard Timeout für die Abfrage von Usernamen
var usernameTimeout = 500;
// Stndard Timeout bis das Laderädchen angezeigt wird
var requestTimeout = 500;
// default Opacity für die Lightbox - Angaben sind ganzzahlige Werte zwischgen 1 und 9
var opacity = 5;
// Die Geschwindigkeit für den FadeOut-Effekt der Lightbox in ms
var speed = 300;
//allen Links ohne HREF das Springen verbieten
jQuery("a[href=#]").live("click", function(event){
    event.preventDefault();
});
//Der zuletzt ausgeführte Ajax Request
var usernameRequest = null;
var plzRequest = null;
//Angabe, ob bei LB Aufruf die KTGs neu initialisert werden muessen
de.bild.community.reInitID = false;
//check auf IE 6
if (jQuery.browser.msie && jQuery.browser.version.substr(0,1)<7) {
 de.bild.community.ie6 = true;
}
else{
 de.bild.community.ie6 = false;
}
/**
 * Check auf den Username, wenn der eingegebene Name den Vorgaben entspricht und sich der Name 500ms nicht
 * geändert hat, wird ein Ajax Request abgesetzt, welches überprüft, ob der Username noch frei ist.
 * Nach Absprache mit Michael am 27.5. wird die clientseitige Prüfung auf einen korrekten Username entfernt.
 * @param {Object} field Inputfield, in dem der Username steht
 * @param {Object} url URL an die der Request abgesetzt
 */
de.bild.community.checkUsername = function(field, url){
    var username = jQuery(field).val();
    var invalidChars = username.match(/\W/);
    //Wenn ungültige Zeichen im Username stehen, oder der Username zu lang/kurz ist, wird die Fehlermeldung unterhalb
    //des Eingabefelds angezeigt.
    if (username.length < 4 | username.length > 15 | invalidChars != null) {
        jQuery('.reg-success').hide();
        jQuery('.reg-error').hide();
        jQuery('.special-chars').show();
    }
    //Wenn der Username den Vorgaben entspricht
    else {
        //jQuery(field).prev().hide();
        jQuery(field).removeClass('error');
       
        if (jQuery(field).val() == username) {
            //Fehlermeldung ausblenden
            jQuery('.reg-error').hide();
            jQuery('.reg-success').hide();
            //Wenn bereits ein Request abgesetzt wurde, der noch nicht bearbeitet wurde, so wird dieser verworfen.
            if (usernameRequest != null) {
                usernameRequest.abort();
                jQuery('.reg-success').hide();
                jQuery('.reg-error').hide();
            }
            usernameRequest = jQuery.ajax({
                url: url,
                type: "GET",
                dataType: 'json',
                data: "alias=" + username,
                success: function(json){
                    if (json == null || !json.validAlias) {
                        jQuery('.reg-error').show();
                        jQuery('.special-chars').hide();
                    }
                    else {
                        jQuery('.reg-success').show();
                    }
                }
            });
        }
    }
    if (invalidChars == null) {
        jQuery('.special-chars').hide();
    }
};
/**
 * Defau lt-Text für die Textfelder in den Kommentaren lesen und focus/blur steuern
 * @param {Object} idField ID des Textfelds, in dem der default stehen soll
 * @param {Object} defaultValue der Defaulttext
 */
de.bild.community.formFocusListener = function(idField, defaultValue){
    jQuery('.btn-submit').click(function(){
        if (jQuery(idField).val() == defaultValue) {
            jQuery(idField).val('');
        }
    });
   
    var textfield = jQuery(idField);
    var hasFocus = false;
    var isOver = false;
    var closeTimer;
   
    if (textfield.val() == '') {
        textfield.val(defaultValue);
    }
    //Nach einem Reloaddisabled soll der Text in schwarz sein, wenn kein default-Text darin steht
    if (textfield.val() != defaultValue) {
        textfield.css('color', '#000');
    }
   
    textfield.focus(function(){
        hasFocus = true;
        clearTimeout(closeTimer);
       
        var currentValue = textfield.val();
       
        if ((currentValue != '' && currentValue != defaultValue)) {
            return false;
        }
       
        if (textfield.val() == defaultValue) {
            textfield.val('');
        }
       
        textfield.css('color', '#000');
        if (idField == '#comments-message') {
            jQuery('#comments-message').height(100);
            jQuery('#comment-form .netiquette').show();
            jQuery('#comment-form .cbutton').show();
            jQuery('#comment-form .ccheck.pub').show();
        }
    });
   
    textfield.blur(function(){
        hasFocus = false;
        var currentValue = textfield.val();
       
        if (!isOver && idField == '#comments-message' && (currentValue == '' || currentValue == defaultValue)) {
            closeField();
        }
    });
   
    jQuery('#comment-form').hover(function(event){
        isOver = true;
    }, function(){
        isOver = false;
        var currentValue = textfield.val();
       
        if (!hasFocus && idField == '#comments-message' && (currentValue == '' || currentValue == defaultValue)) {
            closeField();
        }
    });
   
    jQuery('.btn-send').click(function(){
        var currentValue = textfield.val();
        var errorEle = jQuery("#comment-form .ctextarea");
       
        if (currentValue == '' || currentValue == defaultValue) {
            if (errorEle.hasClass("error")) {
                return false;
            }
            errorEle.addClass("error");
            jQuery("#comments-message").parent("label").append("<span>Bitte geben Sie einen Kommentar ein.</span>");
            return false;
        }
        jQuery(document).submit();
    });
   
    function closeField(){
        closeTimer = setTimeout(function(){
            jQuery('#comments-message').height(24);
            jQuery('#comment-form .netiquette').hide();
            jQuery('#comment-form .cbutton').hide();
            jQuery('#comment-form .ccheck.pub').hide();
            textfield.css('color', '#b8b8b8');
            textfield.attr('value', defaultValue);
            jQuery("#comment-form .ctextarea").removeClass("error");
            jQuery("#comments-message").next("span").remove();
        }, 500);
    }
};
/**
 * Funktion, die beim Eintragen eines Passworts das Input type=text in ein Feld mit type=password ändert und einen Defaulttext setzt, wenn kein Passwort eingetragen ist
 * @param {Object} id ID des Passwortfelds
 * @param {Object} defaultText der Text der angezeigt wird, wenn kein Password eingtragen ist
 */
de.bild.community.changePwInput = function(id, defaultText){
    var pw = jQuery(id);
    var pw_id = pw.attr('id');
    var pw_name = pw.attr('name');//id.substr(1,id.length);
    jQuery(id).val(defaultText);
    jQuery(id).focus(function(e){
        if (jQuery(id).val() == defaultText) {
            jQuery(id).attr('value', '');
            jQuery(id).replaceWith('<input type="password" name="' + pw_name + '" id="' + pw_id + '"/>');
            jQuery(id).focus();
            // 2. focus ist notwendig um im IE den focus auf das Feld zu kriegen.
            // Das ist die einzige funktionierende Lösung die wir gefunden haben. Verursacht keine Probleme im FF/Chrome/Safari, deswegen
            // erstmal eingebaut.
            jQuery(id).focus();
            jQuery(id).css('color', '#000');
        }
        jQuery(id).blur(function(){
            if (jQuery(id).val() == '') {
                jQuery(id).replaceWith('<input type="text" name="' + pw_name + '" id="' + pw_id + '" />');
                jQuery(id).css('color', '#b8b8b8');
                de.bild.community.changePwInput(id, defaultText);
                jQuery(id).val(defaultText);
            }
        });
    });
   
    jQuery('.btn-submit').click(function(){
        if (jQuery(id).val() == defaultText) {
            jQuery(id).val('');
        }
    });
};
//LIGHTBOX
var windowWidth = jQuery(window).width();
var windowHeight = jQuery(window).height();
var fromTop = null;
// Default für den Background der Lightbox, kann in HTML-Farbwerte geändert werden. Per default erstmal leer
if (jQuery('.lightbox').length == 0) {
    var bg = null;
}
/**
 *
 * @param source Quelle des zu ladenen Snippets
 * @param type GET/POST etc... für die Lightbox ist GET zu verwenden
 * @param params optionale Parameter
 * @param background Farbe des transparenten Hintergrundlayers
 * @param focus Verweis auf das Element/Link (this), welches die Lightbox aufruft, um dieses nach dem Schließen der Lightbox zu fokussieren.
 */
de.bild.community.ShowLightbox = function(source, type, params, background, focus){
    //Aufgrund des IE/PBE Bugs, wird hier das Standardevent bei A-Tags unterbunden   
    if (window.event) {
        var e = window.event;
        e.returnValue = false;
    }
   
    bg = background;
    jQuery.ajax({
        url: source,
        data: params,
        type: type,
        beforeSend: function(){
            //de.bild.community.loaddisablederIcon('.lightbox');
        },
        complete: function(){
            jQuery('#loaddisablederIcon').remove();
        },
        success: function(html){
            de.bild.community.InitiateLightbox(html, focus);
        }
    });
};
/**
 * Funktion initialisiert die LB. Die LB wird in das HTML eingebunden und unsichtbar gemacht.
 * @param {Object} html HTML der Lightbox
 * @param {Object} focus Element, von dem der LB-Aufruf ausgeht
 */
de.bild.community.InitiateLightbox = function(html, focus){
    jQuery('.lightbox').remove();
    //Um die LB wird ein Wrapper gelegt, die LB wird auf display none gesetzt und der Wrapper wird wieder entfernt.
    //Das dient dazu, um das Springen der LB zu verhindern
    html = "<div id='tempLB' style='display:none'>" + html + "</div>";
    jQuery('body').append(html);
    jQuery('.lightbox').hide();
    html = jQuery("#tempLB").html();
    jQuery("#tempLB").remove();
    jQuery('body').append(html);
   
    //Wenn eine KTG in einer LB geladen wird, muss diese initialisiert werden
    //(ID Vergabe, Mauseffekte, mehr Button-Positionierung)
    jQuery(html).find(".shorttextContent").each(function(){
        de.bild.community.reInitID = true;
    });
   
    de.bild.community.ActivateLightbox(focus);
   
};
/**
 * Funktion positioniert die Lighbtbox in der Mitte des Bildschirm und macht diese sichtbar.
 * Events zur Neuberechnung bei Fensterverkleinerung, ESC-Tastendruck und Schließenbutton werden gesetzt
 * @param {Object} focus Element, von dem der LB-Aufruf ausgeht
 */
de.bild.community.ActivateLightbox = function(focus){
    if (bg == null | bg == '') {
        // Falls keine Hintergrundfarbe angegeben ist, wird die transparente Lightbox angezeigt inkl. Rahmen um das Element
        opacity = 0;
  bg = "black";        
    }
 jQuery('.lightbox').addClass('layer');
 
 
    fromTop = jQuery(document).scrollTop();
    var documentHeight = jQuery(document).height();
    var layerHeight = null;
    //globale Variablen setzen
    de.bild.community.calculateScreen();
    if (documentHeight < windowHeight) {
        layerHeight = windowHeight;
    }
    else {
        layerHeight = !de.bild.community.ie6 ?documentHeight : windowHeight;
    }
    jQuery('#layer').remove();
    
 
 if (!de.bild.community.ie6) { 
  jQuery('#outerWrapper').prepend('<div id="layer" ' +
  'style="' +
  'left: 0;' +
  'width:' + windowWidth + 'px;' +
  'height:' + layerHeight + 'px;' +
  'z-index:4999;' +
  'position: fixed;' +
  'opacity: 0.' + opacity + ';' +
  'filter: Alpha(opacity=' + opacity + '0);' +
  'background:' + bg +';"></div>');  
  jQuery('.lightbox').attr('style', 'position:fixed;');
 }
 else {
 jQuery('#body').prepend('<div id="layer" ' +
    'style="' +
    'top:' + fromTop + 'px;' +
    'left:0;' +
    'width:' + windowWidth + 'px;' +
    'height:' + layerHeight + 'px;' +
    'z-index:4999;' +
    'position:absolute;' + 
 'opacity: 0.' + opacity + ';' +   
    'filter:Alpha(opacity=' + opacity + '0);' +
 'background:' + bg + ';"></div>');
    jQuery('body').css('overflow', 'hidden');
    jQuery('html').css('overflow', 'hidden');
    window.scrollTo(0, fromTop);
    jQuery('.lightbox').attr('style', 'position:absolute;');
 }
 
    var headerSize = jQuery('.lightbox > .innerBox > .section').width();
    jQuery('.innerBox > .section > .header').css('width', headerSize);
    //Lightbox an Browserfenster anpassen
    de.bild.community.resizeLightbox();
   
    // esc-Taste gedrückt? Dann schließe die Lightbox
    jQuery('.close').click(function(event){
        event.preventDefault();
        de.bild.community.DeactivateLightbox(focus);
    });
    jQuery(document).keyup(function(e){
        if (e.keyCode == 27) {
            de.bild.community.DeactivateLightbox(focus);
        }
    });
    jQuery(window).resize(function(){
   de.bild.community.resizeLightbox();  
    });
   
    if (de.bild.community.reInitID) {
        de.bild.sfx.init();
        de.bild.community.reInitID = false;
    }
   
    //Am Ende den Focus auf die Lightbox legen
    jQuery('.lightbox').focus();
};
/**
 * richtet die Lightbox und das sie umgebende Layer im aktuellen Fenster mittig aus
 */
de.bild.community.contentWidth = null;
de.bild.community.contentHeight = null;
de.bild.community.theLightBox = null;
de.bild.community.resizeLightbox = function(){
 var  lightbox = jQuery(".lightbox");
    de.bild.community.calculateScreen();
 
 //Workaround für verzögert ladene Flash Elemente
    var tmpVObject = jQuery(".lightbox .videoGallery object");
 if (tmpVObject.length > 0)
    { 
        var tmpHeight = tmpVObject.attr("height");
        // kleiner Videoplayer
        if (tmpHeight == 282) 
        {
            de.bild.community.contentHeight = 419;
        }
        // großer Videoplayer
        else if (tmpHeight == 395) 
        {
            de.bild.community.contentHeight = 659;
        }
        // Audioplayer (Object-Größe: 134)
        else 
        {
            de.bild.community.contentHeight = 207;
        }
    }
    else
    {
        de.bild.community.contentHeight = lightbox.height();
    } 
 
    de.bild.community.contentWidth =  lightbox.width();
     
 if(!de.bild.community.ie6){
  var contentLeft = (windowWidth < de.bild.community.contentWidth) ? 0 : ((windowWidth - de.bild.community.contentWidth) / 2);
     var contentTop = (windowHeight <= de.bild.community.contentHeight) ? 0 : ((windowHeight - de.bild.community.contentHeight) / 2);
  
  lightbox.css({top: contentTop + 'px',left:contentLeft + 'px'});
  
 }
 else{
  var contentLeft = (windowWidth <= de.bild.community.contentWidth) ? 0 : ((windowWidth - de.bild.community.contentWidth) / 2);
     var contentTop = (windowHeight <= de.bild.community.contentHeight) ? fromTop : ((windowHeight - de.bild.community.contentHeight) / 2)+ fromTop;
  lightbox.css({top: contentTop + 'px',left:contentLeft + 'px'});
 }
    
 jQuery("#layer").css({width: windowWidth, height: windowHeight});
};
/**
 * Funktion berechnet die Größe des Bildschirms.
 */
de.bild.community.calculateScreen = function(){
    windowWidth = jQuery(window).width();
    windowHeight = jQuery(window).height();
};
/**
 * Funktion zum Schließen der LB. Zudem wird der Fokus wieder auf das aufrufende Element gelegt
 * @param {Object} focus Element, von dem der LB-Aufruf ausgeht
 */
de.bild.community.DeactivateLightbox = function(focus){
    jQuery('.lightbox').fadeOut(speed, function(){
        jQuery('.lightbox').remove();
    });
    jQuery('#layer').fadeOut(speed, function(){
        jQuery('#layer').remove();
    });
    jQuery(window).unbind('resize');
  
   if (de.bild.community.ie6) {
  jQuery('body').css('overflow', 'auto');
  jQuery('html').css('overflow', 'auto');
  window.scrollTo(0, fromTop);
 }
 
    
    bg = null;
    //Link, der die Lightbox aufgerufen hat nach dem Schließen fokussieren
    if (focus) {
        focus.focus();
    }
    return false;
};
/**
 * ersetzt in angegebenen Element den Inhalt durch ein Laderädchen
 * @param {Object} element Element, in das das Laderädchen geschrieben werden soll
 */
de.bild.community.loaddisablederIcon = function(element){
    var h = jQuery(element).height();
    jQuery(element).html('<div id="loaddisablederIcon" class="loaddisableding cform" style="height:' + h + 'px;" ></div>');
};
//KONTOEINSTELLUNGEN
/**
 * In den Kontoeinstellungen werden die zunächst die Inaktiven Segemente angezeigt.
 * Über den Link können dann die entsprechenden Blöcke zur Bearbeitung eingeblendet werden
 * @param {Object} el Link auf den geklickt wird, um das aktive Segment sichtbar zu machen
 */
de.bild.community.showActiveSegment = function(el){
    var element = jQuery(el).parent();
    element.hide();
    element.next(".segment.active").show();
    element.next().focus();
    return false;
};
/**
 * In den Kontoeinstellungen werden die zunächst die Inaktiven Segemente angezeigt.
 * Über den Link können dann die entsprechenden Blöcke zur Bearbeitung eingeblendet werden
 * @param {Object} el Link auf den geklickt wird, um das passive Segment sichtbar zu machen
 */
de.bild.community.showSegment = function(el){
    var element = jQuery(el).parent();
    element.hide();
    element.prev(".segment").show();
    element.prev().focus();
    return false;
};
/** Formularverarbeitung */
//Funktion wurde verändert, in Absprache mit Stephan Post am 18.5, dass Checkboxvalues nur noch übermittelt werden, falls diese als checked gesetzt sind.
de.bild.community.GetForm = function(form){
    var evaluate = jQuery(form + ' :input');
    var fields = jQuery(evaluate);
    var inputs = new Object();
    fields.each(function(index, value){
        var val = jQuery(this).val();
        var key = jQuery(this).attr('name');
       
        //Prüfung, ob es sich um eine Checkbox handelt
        if (jQuery(value).attr("type") == "checkbox") {
            // wenn diese angeklickt wurde, wird sie dem inputs field hinzugefügt, sonst nicht
            if (jQuery(value).attr("checked")) {
                inputs[key] = val;
            }
        }
        // Es handelt sich um keine Checkbox
        else {
            if (key != '' && jQuery(value).attr("type") != "file") {
                inputs[key] = val;
            }
        }
    });
    var evaluate2 = jQuery(form + ' :radio:checked');
    var fields2 = jQuery(evaluate2);
    fields2.each(function(){
        var val2 = null;
        var key2 = jQuery(this).attr('name');
        var ids = jQuery(this).attr('id');
        var ch = ids.split('-');
        if (ch[1] == 'yes') {
            val2 = 'true';
        }
        if (ch[1] == 'no') {
            val2 = 'false';
        }
        if (ch[1] != 'yes' && ch[1] != 'no') {
            val2 = ids;
        }
        inputs[key2] = val2;
    });
    return inputs;
};
//Funktion um geänderte Daten zu verschicken
/**
 *
 * @param element this
 * @param url URL an die der Aufruf abgesetzt werden soll
 * @param params zu übergeben Parameter (acc-name=Stephan&acc-surname=Post)
 */
de.bild.community.ProcessChanges = function(element, url, params){
    var from = jQuery(element).parents('.section');
    //var lastClass = from.attr('class');
    //if(lastClass == 'cform account-contact'){ from = from.parent(); }
    //var fromPrev = jQuery(element).parent().parent().parent().parent().prev();
    jQuery.ajax({
        url: url,
        type: 'POST',
        data: params,
        success: function(html){
            from.replaceWith(html);
            jQuery('.account > .segment > a').click(function(e){
                var element = jQuery(e.target).parent();
                element.hide();
                element.next().show();
            });
            jQuery('.account > .segment.active > a').click(function(e){
                var element = jQuery(e.target).parent();
                element.hide();
                element.prev().show();
            });
        }
    });
};
/** TAB-FUNKTIONEN
 * Funktion zum Umschalten von Tabinhalten
 * @param clickedTab der geklickte Tab. Dieser bekommt nach dem Klicken die Klasse "active"
 * @param source Quelle für den zu ladenen Inhalt des neuen Tabs
 * @param destination Ziel des geladenen Inhalts. Wenn kein Ziel angegeben wird, wird der Inhalt direkt in den Knoten nach den Tabs geladen
 *
 * Beispiel zur Benutzung findet sich in der Community-Benachrichtigung-JS.html
 */
de.bild.community.SwitchTab = function(clickedTab, source, destination){
    if (!destination) {
        var content = jQuery('.tabs').next();
        destination = jQuery(content);
       
    }
    else {
        var id = '#' + destination;
        destination = jQuery(id);
    }
    var clickedTab = jQuery(clickedTab);
    jQuery.ajax({
        url: source,
        type: 'GET',
        success: function(html){
            destination.replaceWith(html);
            jQuery('.tabs > ul > li').removeClass('active');
            clickedTab.addClass('active');
        }
    });
};
/** ALLGEMEINE AJAX-FUNKTION
 * Funktion, um via Ajax Content nachzuladen
 * @param {Object} source Quelle eines Snippets
 * @param {Object} type GET/POST
 * @param {Object} parameter Parameter, welche der source angehängt werden
 * @param {Object} destination Ziel in die das geladene Snippet ersetzt wird
 */
de.bild.community.AjaxReplace = function(source, type, parameter, destination){
    destination = jQuery(destination);
   
    //Sonderfall für personalisierte Teaserblöcke
    //Wenn in der source _COOKIE_ gefunden wird, wird dieser Teil durch den Inhalt des Cookies "RegionId" ersetzt,
    //wenn das Cookie nicht gesetzt ist, wird null übergeben.
    if (source.indexOf("_COOKIE_") != -1) {
        if (jQuery.cookie(parameter)) {
            source = source.replace("_COOKIE_", jQuery.cookie(parameter));
        }
        else {
            source = source.replace("cteContextId=_COOKIE_", "");
        }
    }
   
    jQuery.ajax({
        url: source,
        type: type,
        data: parameter,
        success: function(html){
            destination.replaceWith(html);
            if (jQuery('#layer').length != 0) {
                de.bild.community.resizeLightbox();
            }
        }
    });
};
/**
 * AJAX Replace mit zusätzlichen Parametern
 * @param {Object} source Quelle eines Snippets
 * @param {Object} type GET/POST
 * @param {Object} queryParamArray zusätzliche Paramter, welche an die source gehangen werden
 * @param {Object} urlParamArray Parameter, welche der source angehängt werden
 * @param {Object} destination destination Ziel in die das geladene Snippet ersetzt wird
 */
de.bild.community.AjaxReplaceNoUrlParams = function(source, type, queryParamArray, urlParamArray, destination){
    var urlParamString = "";
    //Wenn es sich beim urlParamArray um ein Object (Array) handelt, wird es durchiteriert
    if (urlParamArray && typeof urlParamArray != "string") {
        jQuery.each(urlParamArray, function(key, value){
            urlParamString = urlParamString + "," + key + "=" + value;
        });
    }
    //Im Falle eines Strings, wird dieser direkt reingehangen
    if (urlParamArray && typeof urlParamArray == "string") {
        urlParamString = "," + urlParamArray;
    }
    //anderfalls bleibt der UrlParamString leer
    source = source.replace("{0}", urlParamString);
    de.bild.community.AjaxReplace(source, type, queryParamArray, destination);
};
/**
 * Funktion setzt einen Ajaxaufruf an die spezifizierte URL ab, wenn die eigegebene PLZ 5 Zahlen lang ist.
 * Als Rückgabewert wird ein JSON Format erwartet, welches alle möglichen Orte für die Eingabe enthält. Das JSON Format ist unter ./snippets/JSON-PLZ.snip einsehbar.
 * @param field Feld aus dem der Wert ausgelesen wird
 * @param url URL an die der JSON Aufruf abgesetzt wird.
 * @param {Object} field
 * @param {Object} url
 */
de.bild.community.checkPLZ = function(field, url){
    var plz = jQuery(field).val();
    var invalidChars = plz.match(/\D/);
    //Wenn Buchstaben oder ungültige Zeichen im PLZ-Feld stehen, wird kein Request ausgelöst
    if (plz.length != 5 | invalidChars != null) {
        jQuery("#acc-adress-city").parent().parent().replaceWith('<div class="ctext"><label for="acc-adress-city">Ort.<input type="text" class="disabled" disabled="disabled" name="acc-adress-city" id="acc-adress-city"/></label></div>');
    }
    //Wenn der Username den Vorgaben entspricht
    else {
        setTimeout(function(){
            //Wenn sich nach 500ms der Wert in dem Feld nicht verändert hat, wird der Ajax Request aufgerufen
            if (jQuery(field).val() == plz) {
                //Fehlermeldung ausblenden
                //Wenn bereits ein Request abgesetzt wurde, der noch nicht bearbeitet wurde, so wird dieser verworfen.
                if (plzRequest != null) {
                    plzRequest.abort();
                }
                plzRequest = jQuery.ajax({
                    url: url,
                    type: "GET",
                    dataType: 'json',
                    data: "plz=" + plz,
                    success: function(json){
                        if (json == null || !json.ort) {
                            jQuery("#acc-adress-city").parent().parent().replaceWith('<div class="ctext"><label for="acc-adress-city">Ort.<input type="text" class="disabled" disabled="disabled" name="acc-adress-city" id="acc-adress-city"/></label></div>');
                        }
                        else {
                            var postleitzahl = plz;
                            var orte = json.ort.split(",");
                            if (orte.length > 1) {
                                jQuery("#acc-adress-city").parent().parent().replaceWith('<div class="cselect"><label for="acc-adress-city">Ort.<select size="1" name="acc-adress-city" id="acc-adress-city"></select></label></div>');
                                jQuery.each(orte, function(index, value){
                                    jQuery('#acc-adress-city').append(jQuery('<option></option>').val(value).html(value));
                                });
                            }
                            else {
                                jQuery('#acc-adress-city').val(orte[0]);
                            }
                        }
                    }
                });
            }
        }, requestTimeout);
    }
    if (invalidChars == null) {
        jQuery('.special-chars').hide();
    }
};
//KOMMENTARE
var hideall = "";
var showall = "";
/**
 * Funktion um in den Kommentarlisten die Vorschau gegen die Langfassung zu tauschen und zurück.
 * Das Element das geklickt wurde tauscht die Kurzfassung gegen die Langversion und zurück, die Klasse wird auf aktiv gesetzt
 * und nur der Text im p-Tag geändert
 * @param {Object} clicked
 */
de.bild.community.ShowFullComment = function(clicked){
    clicked = jQuery(clicked);
    clicked.parent().eq(0).hide();
    clicked.parent().parent().attr('class', 'commentActive');
    clicked.parent().siblings('p').show();
};
/**
 * Funktion um in den Kommentarlisten die Vorschau gegen die Langfassung zu tauschen und zurück.
 * Das Element das geklickt wurde tauscht die Kurzfassung gegen die Langversion und zurück, die Klasse wird auf aktiv gesetzt
 * und nur der Text im p-Tag geändert
 * @param {Object} clicked
 */
de.bild.community.HideFullComment = function(clicked){
    clicked = jQuery(clicked);
    clicked.parent().eq(0).hide();
    clicked.parent().parent().removeClass('commentActive');
    clicked.parent().siblings('p').show();
};
/**
 * Funktion um alle Kommentare auf und zu zu klappen.
 * @param {Object} displayAll das Element, welches geklickt wurde, ändert nach dem Klicken seinen Text in hidealltext
 * @param {Object} hidealltext defaultText für "alle zuklappen"
 * @param {Object} showalltext defaultText für "alle aufklappen"
 */
de.bild.community.ShowAllComments = function(displayAll, hidealltext, showalltext){
    hideall = hidealltext;
    showall = showalltext;
    displayAll = jQuery(displayAll);
    var commentList = displayAll.parent().parent().parent().siblings('.commentList');
    jQuery(".commentList > .clearfix > li").attr('class', 'commentActive');
    var p = jQuery(".commentList > .clearfix > li > p");
    // Alle Elemente mit ungeradem Index zeigen, d.h. alle Langversionen
    p.filter(':odd').show();
    // Alle Elemente mit geradem Index verstecken, sprich alle Voransichten der Kommentare
    p.filter(':even').hide();
    // Ändere den Linktext von "Alle aufklappen" und die Pfeilgrafik
    displayAll.parent().replaceWith('<div class="hideAll"><a href="#">' + hideall + '</a></div>');
    // Gib dem neuen Link einen onClick zum wieder zu klappen
    jQuery('.hideAll > a').click(function(e){
        var hideAll = jQuery(e.target);
        de.bild.community.HideAllComments(hideAll, hideall, showall);
        return false;
    })
};
/**
 * showAllComments wieder zurück
 * @param {Object} hideAll Element des hideall Buttons
 */
de.bild.community.HideAllComments = function(hideAll){
    displayAll = jQuery(hideAll);
    var commentList = hideAll.parent().parent().parent().siblings('.commentList');
    jQuery(".commentList > .clearfix > li").attr('class', '');
    var p = jQuery(".commentList > .clearfix > li > p");
    p.filter(':odd').hide();
    p.filter(':even').show();
    hideAll.parent().replaceWith('<div class="displayAll"><a href="#">' + showall + '</a></div>');
    jQuery('.displayAll > a').click(function(e){
        var displayAll = jQuery(e.target);
        de.bild.community.ShowAllComments(displayAll, hideall, showall);
        return false;
    })
};
/**
 *
 */
de.bild.community.initCGallery = function(){
    jQuery(".CGallery > .vtWrapper > ul > li ").click(function(e){
        var target = jQuery(e.target).closest("div.CGallery").siblings("div.cMediaGallery");
        var hidden = jQuery(e.target).closest('li').children("div.cMediaGallery").clone().removeClass("hide");
        //Wenn Content verfügbar ist ersetzen
        if (hidden.html() != null) {
            jQuery(e.target).closest('li').siblings('li').removeClass('active');
            jQuery(e.target).closest('li').addClass('active');
            target.replaceWith(hidden);
        }
        return false;
    });
};
//Funktion, die ein Cookie setzt, wenn die Region ausgewŠhlt wurde
de.bild.community.setRegionId = function(type){
    var regionId = jQuery('input[name="' + type + '"]:checked', '#customize-select').attr("id").split("-")[1];
    if (regionId) {
        jQuery.cookie(type, regionId);
    }
};
//Funktion, die anhand des RegionId Cookies die Radiobox in der Regionsauswahl checked
de.bild.community.checkRegionId = function(type){
    if (jQuery.cookie(type) != null) {
        var regionId = jQuery.cookie(type);
        jQuery("#" + type + "-" + jQuery.cookie(type)).attr("checked", "checked");
    }
};
/** Laderädchen-Spaß */
de.bild.community.loaddisablederIcon = function(element){
    //setTimeout(function(){
    var h = jQuery(element).height();
    jQuery(element).html('<div id="loaddisablederIcon" class="loaddisableding cform" style="height:' + h + 'px;" ></div>');//}
    //,requestTimeout)
};
/*adreplace:15400952.18*/

var de=de || {};
de.bild = de.bild || {};
 
de.bild.AdReplace=function(to){
    var adRand=Math.random()*100;
    var adSum=0;
 
    for (var i=1;i<arguments.length;i+=2){
        adSum+=(typeof arguments[i+1]=== 'number')?arguments[i+1]:100;
        if(adRand<adSum)
        {
            document.getElementById(to).className = "show";
            var http=(window.ActiveXObject)?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();
            if(http.overrideMimeType){http.overrideMimeType('text/html');}
            http.onreadystatechange=function()
            {
                if(http.readyState=="complete"||http.readyState==4)
                {
var _text = http.responseText;
if (_text.indexOf('void') != -1) {
return;
}

                    jQuery("#"+to).replaceWith(_text);
                }
            };
            void("GET",arguments[i],true);
            http.send(null);
            return false;
        }
        else
        {
           document.getElementById(to).className = "hide";
        }
    }

};

/*epro:15400958.22*/

if (window.location.href.indexOf("src=epro") >= 0){  var expires = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);  document.cookie = "epro=1; path=/; expires=" + expires.toGMTString() +";";}
/*ateaser:15400950.22*/

var de = de || {};
de.bild = de.bild || {};
de.bild.aTeaser = de.bild.aTeaser || {};
/**
 * Funktion welche ausgeführt werden, sobald die Seite vollständig gerendert ist.
 */
jQuery(document).ready(function() {
    de.bild.aTeaser.initializeATeaser();
});
/**
 * Funktion setzt Clickevents der Listenelemente:
 *  - Listenelement bei Click aktiv setzen
 *  - ausgewählten Content anzeigen
 */
de.bild.aTeaser.initializeATeaser = function() {
    //Belegen der Li Elemente mit Click Events
    jQuery(".ateaser > .section > div > .clearfix > li").click(function(e) {
        jQuery(".ateaser > .section > div > .clearfix > li").removeClass("active");
        jQuery(e.target).closest('li').addClass("active");
        de.bild.aTeaser.showActiveATeaser();
  
  //Zur Anzeigebox scrollen
  var target = jQuery(".ateaser").eq(0); 
  var position = target.position().top;
  jQuery('html, body').animate({scrollTop:position}, 'slow');
    
        return false;
    });
    de.bild.aTeaser.showActiveATeaser();
    //Klickrahmen entfernen bei Listenelementen
    jQuery(".ateaser > .section > div > .clearfix > li > .hentry > a").focus(function () {
        this.blur();
    })
 
 //Klickrahmen entfernen bei Next/Prev Buttons
 jQuery(".ateaser > .figure > div > a").focus(function () {
        this.blur();
    })
    //Klickrahmen entfernen in der Tableiste
    jQuery(".ateaser > .section > .tabs > ul > li > a").focus(function () {
        this.blur();
    })
}
/**
 * Funktion, welche die Funktion des Next Buttons definiert. 
 *  - Verschieben des aktiven Listenelements
 *  - aktiven Content anzeigen
 * @param {Object} object Verweis auf das Objekt
 */
de.bild.aTeaser.aTeaserNext = function(object) {
 //aktuell aktives Listenelement   
    var active = jQuery(".ateaser > .section > div > .clearfix > .active");
    var next = active.next();
    var next_index = next.index();
    //Wenn das letzte Element der Liste ausgewaehlt ist, springe zum ersten Element
    if (next.length == 0) {
        next = jQuery(".ateaser > .section > div > .clearfix").children().first();
    }
    active.removeClass("active");
    next.addClass("active");
    de.bild.aTeaser.showActiveATeaser();
    return false;
}
/**
 * Funktion, welche die Funktion des Prev Buttons definiert. 
 *  - Verschieben des aktiven Listenelements
 *  - aktiven Content anzeigen
 * @param {Object} object Verweis auf das Objekt
 */
de.bild.aTeaser.aTeaserPrev = function(object) {
    //aktuell aktives Listenelement   
    var teaserClass = jQuery(object).parent().parent().parent().attr("class");
    teaserClass = teaserClass.split(" ")[1];
    var active = jQuery(".ateaser > .section > div > .clearfix > .active");
    var prev = active.prev();
    var prev_index = prev.index();
    //Wenn das erste Element der Liste ausgewaehlt ist, springe zum letzten Element
    if (prev.length == 0) {
        prev = jQuery(".ateaser > .section > div > .clearfix").children().last();
    }
    active.removeClass("active");
    prev.addClass("active");
    de.bild.aTeaser.showActiveATeaser();
    return false;
}
/**
 * Funktion, die den versteckten Inhalt unter dem aktiven Listenelement im großen Fenster anzeigt
 */
de.bild.aTeaser.showActiveATeaser = function() {
    var target = jQuery(".ateaser > .figure > .hentry").eq(0);
    var content = jQuery(".ateaser > .section > div > .clearfix > .active > .hentry.hide").clone();
    if (content.length != 0) {
        content.removeClass("hide");        
     target.replaceWith(content);  
        jQuery(".ateaser > .section > div > .clearfix > li > .hentry > a").focus(function () {
            this.blur();
        });
  
    }
}
/**
 * Funktion, die einen Teaser, dessen Link eine bestimmte Contentid besitzt aktiv setzt.
 * @param {Object} contentID ID des zu aktivierenden Listenelements
 */
de.bild.aTeaser.setActive = function(contentID) {
    var content = jQuery(".ateaser > .section > div > .clearfix > li > .hentry.hide");
    jQuery.each(content, function(index, value) {
        var href = jQuery(value).attr("id");
        if (href.indexOf(contentID) != -1) {
            jQuery(".ateaser > .section > div > .clearfix > li").removeClass("active");
            jQuery(value).closest('li').addClass("active");
        }
    });
    de.bild.aTeaser.showActiveATeaser();
}
/**
 * Angepasste und ausgedünnte Paginatorfunktion, welche nach dem Laden des Snippets die ATeaser neu initialisiert
 * @param {Object} was URL von welcher das Snippet angefordert werden soll
 * @param {Object} wohin Ziel, in welches das Snippet geladen werden soll
 * @param {Object} obj Verweis auf den geclickten Tab
 */
de.bild.aTeaser.paginatorATeaser = function(was, wohin, obj) {
    //wenn Tabs aktiviert/deaktiviert werden muessen
    if (typeof obj == "object") {//TabAktivator
        var par = obj.parentNode.parentNode.childNodes;
        if (par) {
            for (var i = 0; i < par.length; i++) {
                if (par[i].className) {
                    //alle Tabs inaktiv
                    par[i].className = par[i].className.replace(/active/, "");
                }
            }
            //das aktuelle Tab wird aktiv
            if (obj.parentNode) {
                obj.parentNode.className += " active";
            }
        }
    }
    //XML-Request mit Browserweiche
    var http = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
    //entfernt XML-Fehlermeldungen im FF
    if (http.overrideMimeType) {
        http.overrideMimeType('text/html');
    }
    //bei Ladestatus-Wechsel
    http.onreadystatechange = function() {
        var ziel = document.getElementById(wohin);
        //wenn Schnipsel komplett geladen
        if (http.readyState == "complete" || http.readyState == 4) {
            //alles andere sofort Schnipsel schreiben
            ziel.innerHTML = http.responseText;
            /////F�r die ATeaser Funktionen spezielle Anforderungen///////
            de.bild.aTeaser.initializeATeaser();
            /////F�r die ATeaser Funktionen spezielle Anforderungen///////
            //Snippet-JavaScript aktivieren
            de.bild.sfx.javascriptGo(http.responseText);
        }
    };
    //oeffnet asynchron XML-Request mit "POST" oder "GET"
    //Schnipsel anfordern
    void("GET", unescape(was), true);
    http.send(null);
    //den "href" im aufrufenden HTML-Tag totlegen
    return false;
}
/*videoRating:15400966.31*/

/**
 *Diese Klasse ermöglicht das Nachladen der Videoratings per Ajax.
 *Zudem werden die Ratingcookies gesetzt und ausgelesen und dementsprechend die Ratinginfo-Texte gesetzt.
 */
var de=de || {};
de.bild = de.bild || {};
de.bild.videoRating = de.bild.videoRating || {};
//Array zum setzen der Sternklassen
var stars = new Array("", " one", " two", " three", " four", " five");
//Texte für die Ratinginformationen
var RATING_NO = "Sie haben bereits bewertet";
var RATING_THX = "Vielen Dank!";
var RATING_YES = "Bewerten";
var RATING_JSON = {};
/** 
 * Funktion welche ein Array mit RatingIDs an die angegebene URL verschickt und mithilfe der Antworten die Sterne setzt.
 * Es wird eine JSON Antwort erwartet
 * @param {Object} idArray Array mit IDs der Votings, welche gesetzt werden sollen
 * @param {Object} url URL an die die Anfrage geschickt wird
 */
de.bild.videoRating.getRating = function(idArray, url){
    if (idArray && idArray.length != 0) {
        jQuery.ajax({
            url: url,
            type: "GET",
            dataType: 'json',
            data: "ratingids=" + idArray,
            success: function(json){
                if (json != null) {
                    RATING_JSON = json;
                    jQuery.each(json, function(key, value){
                        if (value >= 0 && value <= 5) {
                            if (jQuery('[id*="'+key.toString()+'"]').attr("class") && jQuery("[id*=" + key + "]").attr("class").indexOf("rating") != -1) {
                                jQuery("[id*=" + key + "]").addClass(stars[value]);
                            }
                        }
                    });
                }
            }
        });
    }
}
de.bild.videoRating.resetRating = function(){
if (RATING_JSON) {
                    jQuery.each(RATING_JSON, function(key, value){
                        if (value >=  0 && value <= 5) {

                            if (jQuery('[id*="'+key.toString()+'"]').attr("class") && jQuery('[id*="'+key.toString()+'"]').attr("class").indexOf("rating") != -1) {
                                jQuery('[id*="'+key.toString()+'"]').addClass(stars[value]);
                            }
                        }
                    });
}
}
/**
 * Funktion die ein abgegebenes  Voting an einen Server schickt und die Ratinginfo setzt.
 * @param {Object} url URL an die die Ratinginformationen übergeben werden
 * @param {Object} id ID des Votings
 * @param {Object} params Parameter, welche mitübergeben werden (ID, #Sterne,etc)
 * @param {Object} obj Verweis auf das Object
 */
de.bild.videoRating.setRating = function(url, id, params, obj){
 //Zusätzlicher Check, ob diese Voting schon gevotet wurde
    if (jQuery.cookie("vidId") != null && jQuery.cookie("vidId").indexOf(id) != -1) {
        jQuery(obj).parent().parent().siblings(".ratingInfo").text(RATING_NO);
        return false;
    }
    else {
        jQuery.ajax({
            url: url,
            type: "POST",
   data: params,
            success: function(response){
    //füge dem Cookie die VideoID hinzu
                if (jQuery.cookie("vidId")) {
                    jQuery.cookie("vidId", jQuery.cookie("vidId") + "_" + id);
                }
                else {
                    jQuery.cookie("vidId", id);
                }
    //Ratingtext setzten
                jQuery(obj).parent().parent().siblings(".ratingInfo").text(RATING_THX);
    //Klasse setzen, je nachdem, welchen Stern man angeclickt hat    
    jQuery(obj).parent().parent().attr("class","rating "+stars[jQuery(obj).parent().index()+1]);             
                
            }
        });
   
  return false;
    }
}
/** Setzen der Ratingtexte anhand der Cookieinformationen. 
 * Diese Funktion wird bei Rendern des Votings ausgeführt 
 * @param {Object} id ID des Voting
 */
de.bild.videoRating.getCookie = function(id){  
    if (jQuery.cookie("vidId") != null && jQuery.cookie("vidId").indexOf(id) != -1) {
        jQuery("[id*=" + id + "]").siblings(".ratingInfo").text(RATING_NO);
    }
    else {
      jQuery("[id*=" + id + "]").siblings(".ratingInfo").text(RATING_YES);
    }
 return false;    
}
/*webtrekk-knallgrau:15400974.24*/

de.bild.community.getCustomSessionParam1=function(){
 var result = "";
 //Status von KnallGrau lesen
 var loginStatus = unescape(de.bild.community.readCookie('avLoginStatus'));
 if (loginStatus && loginStatus != "false") {
   var loginStatusParams = loginStatus.split("#");
   var nowTime = new Date();
   if (loginStatusParams.length>3)
   {
    var lastStatusCheckTime = loginStatusParams[3];
   }
   else
   {
    //status wird zum Ersten mal hier gelesen deswegen liefern wir ihn für Webtrekk zurück
    result = "logged_in";
    if (loginStatusParams.length<3);
    {
     //FacebookID ist auch nicht gesetzt deswegen ein leeres 3. Param
     loginStatusParams.push("");
    }
    //lastStatusCheckTime an der 4. Position setzen
    loginStatusParams.push(escape(nowTime.toGMTString()));
   }
   if (lastStatusCheckTime && new Date(unescape(lastStatusCheckTime)).getTime() + (1000 * 60 * 20) < nowTime.getTime())
   {
    //da lastStatusCheckTime > 20 minuten ist liefern wir den status für Webtrekk zurück
    result = "logged_in";
    //lastStatusCheckTime ersetzen
    loginStatusParams.splice(3,1,escape(nowTime.toGMTString()))
   }
   var newloginStatus = "";
   for(var i=0;i < loginStatusParams.length;i++)
   {
    newloginStatus = newloginStatus + loginStatusParams[i];
    if(i<loginStatusParams.length-1)
     {
      newloginStatus = newloginStatus + "#";
     }
   }
    de.bild.community.createCookie('avLoginStatus', newloginStatus, null, '/', '.knallgrau.at');
   }
 return result;
};
 de.bild.community.readCookie = function(name) {
   var nameEQ = name + "=";
   var ca = document.cookie.split(';');
   for(var i=0;i < ca.length;i++) {
     var c = ca[i];
     while (c.charAt(0)==' ') c = c.substring(1,c.length);
     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
   }
   return false;
  };
 de.bild.community.createCookie = function(name, value, days, path, ihost) {
   if (days) {
     var date = new Date();
     date.setTime(date.getTime()+(days*24*60*60*1000));
     var expires = "; expires="+date.toGMTString();
   }
   else var expires = "";
   if(path) {
    var ipath ="; path="+path;
   }
   else var ipath = "";
   if(ihost) {
    var idomain ="; domain="+ihost;
   }
   else var idomain = "";
   document.cookie = name+"="+value+expires+ipath+idomain;
  };
/*knallgrau:15400968.39*/

//var baseUrlS3 = 'http://login-relaunch2010.bild-und-partner.de/community/user/';

var baseUrlS3 = 'https://login.bild.de/community/user/'; 
var serviceId = 'bild';
var xdResult = null;
/*
**  jquery.xsajax.js -- jQuery plugin for Cross-Site AJAX-style Javascript loaddisableding
**  Copyright (c) 2007 Ralf S. Engelschall <rse@engelschall.com>
**  Licensed under GPL <http://www.gnu.org/licenses/gpl.txt>
**
**  $LastChangedDate$
**  $LastChangedRevision$
*/
(function(jQuery){
   //if (   jQuery.browser.safari
     //  || navigator.userAgent.match(/Konqueror/i)) {
       jQuery.extend({
           _xsajax$node: [],
           _xsajax$nodes: 0
       });
   //}
   jQuery.extend({
       getScriptXS: function () {
           /* determine arguments */
           var arg = {
               'url':      null,
               'gc':       true,
               'cb':       null,
               'cb_args':  null,
               'data':     null
           };
           if (typeof arguments[0] == "string") {
               /* simple usage */
               arg.url = arguments[0];
               if (typeof arguments[1] == "function")
                   arg.cb = arguments[1];
           }
           else if (typeof arguments[0] == "object") {
               /* flexible usage */
               for (var option in arguments[0])
                   if (typeof arg[option] != "undefined")
                       arg[option] = arguments[0][option];
           }
           /* CUSTOMIZED: add data to request */
           if (arg.data) {
              arg.url += (arg.url.indexOf("?") > -1) ? "&" : "?";
              arg.url += arg.data;
           }
           /* generate <script> node */
           var node = document.createElement('script');
           node.type = 'text/javascript';
           node.src = arg.url;
           /* optionally apply event handler to <script> node for
              garbage collecting <script> node after loaddisableding and/or
              calling a custom callback function */
           var node_helper = null;
           if (arg.gc || arg.cb !== null) {
               var callback = function () {
                   if (arg.cb !== null) {
                       var args = arg.cb_args;
                       if (args === null)
                           args = [];
                       else if (!(   typeof args === "object"
                                  && args instanceof Array   ))
                           args = [ args ];
                       arg.cb.apply(this, args);
                   }
                   if (arg.gc)
                       jQuery(this).remove();
               };
             var callbackTimer = setInterval(function() {
                var call = false;
                try {
                   if (_xsajax$transport_status && xdResult) {
                      call = true;
                   }
                } catch (e) { }
                if (call) {
                   callback.call(this);
                   clearInterval(callbackTimer);
                   _xsajax$transport_status = null;
                   xdResult = null;
                }
             }, 100);
           }
           /* inject <script> node into <head> of document */
           document.getElementsByTagName('head')[0].appendChild(node);
           /* optionally inject helper <script> node into <head>
              (Notice: we have to use a strange indirection via
              setTimeout() to insert this second <script> node here or
              at least Konqueror (and perhaps also Sfaari) for unknown
              reasons will not execute the first <script> node at all) */
           if (node_helper !== null) {
               setTimeout(function () {
                  jQuery('head', document).append(node_helper)
               }, 100);
           }
       }
   });
})(jQuery);
// Author: Jacek Becela
// Website: http://github.com/ncr/at_intervals
// License: cc-by-sa
(function(jQuery) {
  jQuery.fn.at_intervals = function(fn, options) {
    var settings = jQuery.extend({}, jQuery.fn.at_intervals.defaults, options);
    return this.each(function() {
      var e = jQuery(this)
      var name = settings.name
      var delay = settings.delay
      var helper = {
        should_stop: function() { // used to completely remove the interval
          return !this.element_in_dom() || this.user_wants_to_stop()
        },
        should_work: function() { // used to pause/resume the interval
          return this.element_visible() && !this.user_wants_to_pause()
        },
        user_wants_to_stop: function() {
          return e.data(name).should_stop == true
        },
        user_wants_to_pause: function() {
          return e.data(name).should_pause == true
        },
        element_in_dom: function() {
          return e.parents("html").length > 0
        },
        element_visible: function() {
          return e.parents("*").andSelf().not(":visible").length == 0
        },
        stop: function(interval_id) {
          clearInterval(interval_id)
          e.removeData(name)
        }
      }
      if(e.data(name)) { 
        helper.stop(e.data(name).interval_id) // remove previous executer
      }
      e.data(name, { delay: delay }) // initialize data cache
      if(helper.should_work()) {
        fn() // call fn immediately (setInterval applies the delay before calling fn for the first time)
      }
      var interval_id = setInterval(function() {
        if(helper.should_stop()) {
          helper.stop(interval_id)
        } else {
          if(helper.should_work()){
            fn()
          }
        }
      }, delay)
      e.data(name).interval_id = interval_id
    })
  };
  jQuery.fn.at_intervals.defaults = {
    name:  "at_intervals",
    delay: 1000 // one second
  }
})(jQuery);
/* knallgrau userSession class */
var knallgrau = knallgrau || {};
knallgrau.util = function() {
   return {
      getHeaderJSON: function(xhr) {
        var json;
        try { json = xhr.getResponseHeader('X-JSON') }
        catch(e) { return null; }
        if (json) {
          try {
             var data = jQuery.parseJSON('(' + json + ')');
             return data;
          } catch (e) { return null; }
        }
      },
      replaceUmlauts: function(msg) {
         var convertedString = msg.replace(String.fromCharCode(252), "ue", "g");
         convertedString = convertedString.replace(String.fromCharCode(228), "ae", "g");
         convertedString = convertedString.replace(String.fromCharCode(246), "oe", "g");
         convertedString = convertedString.replace(String.fromCharCode(220), "Ue", "g");
         convertedString = convertedString.replace(String.fromCharCode(196), "Ae", "g");
         convertedString = convertedString.replace(String.fromCharCode(214), "Oe", "g");
         convertedString = convertedString.replace(String.fromCharCode(223), "ss", "g");
         return convertedString;
      },
      convertFromEntities: function(msg) {
         var str = msg;
         var rexp = /\&\w{2,4}\;/
         var list = {
           '&qout;':'"',
           '&lt;':'<',
           '&gt;':'>',
           '&amp;':'&',
           '&uuml;':'ü',
           '&ouml;':'ö',
           '&auml;':'ä',
           '&Uuml;':'Ü',
           '&Ouml;':'Ö',
           '&Auml;':'Ä'
         };
         while (rexp.test(str)) {
           str = str.replace(rexp, function(x0) {
             return list[x0] || "";
           });
         }
         return str;
      },
      convertToEntities: function (msg) {
         var str = msg;
         var rexp = /\&\w{2,4}\;/
         var list = {
           '"':'&qout;',
           '<':'&lt;',
           '>':'&gt;',
           '&':'&amp;',
           'ü':'&uuml;',
           'ö':'&ouml;',
           'ä':'&auml;',
           'Ü':'&Uuml;',
           'Ö':'&Ouml;',
           'Ä':'&Auml;'
         };
         while (rexp.test(str)) {
           str = str.replace(rexp, function(x0) {
             return list[x0] || "";
           });
         }
         return str;
      },
      isSslPage: function() {
         return (location + "").indexOf('https://') == 0;
      }
   }
}();
knallgrau.userSession = function() {
   var communityHost = "httpdisabled://www.bild.de/";
   var errorSnip = '<div class="lightbox lb1">\
   <div class="innerBox">\
   <a class="close" href="javascript:knallgrau.userSession.close();"></a>\
    <div class="section">\
      <div class="header"><h2>Es ist ein Fehler aufgetreten!</h2></div>\
       <div class="note">\
          Es ist ein unerwarteter Fehler aufgetreten, bitte ersuchen sie es erneut.\
       </div>\
      </div>\
   </div>\
</div>';
   var userIsLogin = undefined;
   //helper function to get x-json header from prototype style ajax answers
   readCookie = function(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
         var c = ca[i];
         while (c.charAt(0)==' ') c = c.substring(1,c.length);
         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return false;
   };
   function createCookie(name, value, days) {
      if (days) {
         var date = new Date();
         date.setTime(date.getTime()+(days*24*60*60*1000));
         var expires = "; expires="+date.toGMTString();
      }
      else var expires = "";
      document.cookie = name+"="+value+expires+"; path=/";
   };
   function getLoginStatusCookie() {
      var loginStatus = readCookie('avLoginStatus');
      var isSso = readCookie('avPwd');
      if (!loginStatus)
         userIsLogin = false;
      if (loginStatus) {
         var loginDate = loginStatus.split("#")[0];
         if (loginDate && new Date(unescape(loginDate)).getTime() + (1000 * 60 * 20) > new Date().getTime()) {
       // if (loginDate && new Date(unescape(loginDate)).getTime() > new Date().getTime()) {
            userIsLogin = true;
            knallgrau.userSession.renderLoginStatus(userIsLogin);
         } else {
            if (knallgrau.userSession.isCrossDomain(location.href,'ssl')) {
                  jQuery.getScriptXS({url: knallgrau.userSession.getBaseUrl('ssl') + "account/checkLoginStatus?xdResult=true",
                  cb: function(t) {
                     if (xdResult == "true") {
                        userIsLogin = true;
                        knallgrau.userSession.renderLoginStatus(userIsLogin);
                     } else if (xdResult == "false") {
                        userIsLogin = false;
                        knallgrau.userSession.renderLoginStatus(userIsLogin);
                     }
                  }
               });
            } else {
               jQuery.ajax({url: knallgrau.userSession.getBaseUrl() + "account/checkLoginStatus",
                       type: "get",
                       async: false,
                       success: function(t) {
                           if (t == "true") {
                              userIsLogin = true;
                              knallgrau.userSession.renderLoginStatus(userIsLogin);
                           } else if (t == "false") {
                              userIsLogin = false;
                              knallgrau.userSession.renderLoginStatus(userIsLogin);
                           }
                       }
               });
            }
         }
      } else {
         if (!isSso) {
            userIsLogin = false;
            knallgrau.userSession.renderLoginStatus(userIsLogin);
         } else {
            jQuery.getScriptXS({url: knallgrau.userSession.getBaseUrl('ssl') + "account/checkLoginStatus?xdResult=true&forcesso=true",
               cb: function(t) {
                  if (xdResult == "true") {
                     userIsLogin = true;
                     knallgrau.userSession.renderLoginStatus(userIsLogin);
                  } else if (xdResult == "false") {
                     userIsLogin = false;
                     knallgrau.userSession.renderLoginStatus(userIsLogin);
                  }
               }
            });
         }
      }
      return userIsLogin;
   };
   createEventsLogin = function() {
      jQuery('#login-form').submit( function(event) {
         jQuery.ajax({url: jQuery(this).attr('action'),
               type: "post",
               data: jQuery('#login-form').serialize(),
               success: function(data, textStatus, xhr) {
                  if (data == "OK") {
                     de.bild.community.DeactivateLightbox();
                     userIsLogin = true;
                     location.reloaddisabled();
                  } else {
                     de.bild.community.InitiateLightbox(data);
                     createEventsLogin();
                  }
               },
               error: function(t) {
                  de.bild.community.InitiateLightbox(errorSnip);
               }
         });
         event.stopPropagation();
      });
   };
   createEventsXdLogin = function() {
      jQuery('#login-form').submit( function(event) {
         jQuery.getScriptXS({url: jQuery(this).attr('action') + "?xdResult=true",
            data: jQuery('#login-form').serialize(),
            cb: function(t) {
               if (xdResult == "OK") {
                  de.bild.community.DeactivateLightbox();
                  userIsLogin = true;
                  location.reloaddisabled();
               } else {
                  de.bild.community.InitiateLightbox(xdResult);
                  createEventsXdLogin();
               }
            }
         });
         event.stopPropagation();
      });
   };
   createEventsXdPwLost = function() {
      jQuery('#pw-form').submit( function(event) {
         jQuery.getScriptXS({url: jQuery(this).attr('action') + "?xdResult=true",
            data: jQuery('#pw-form').serialize(),
            cb: function(t) {
               if (xdResult == "OK") {
                  //jQuery('pwlostBox').html(t);
                  jQuery('#pw-lost-confirm').removeClass('hide');
                  jQuery('#pw-form').hide();
               } else {
                  de.bild.community.InitiateLightbox(xdResult);
                  createEventsXdPwLost();
               }
            }
         });
         event.stopPropagation();
      });
   }
   createEventsRegister = function() {
      jQuery('#register-form').submit( function(event) {
         jQuery("#reg-adress-city").removeAttr('disabled');
         jQuery.ajax({url: jQuery(this).attr('action'),
            type: "post",
            data: jQuery('#register-form').serialize(),
            success: function(data, textStatus, xhr) {
                  de.bild.community.InitiateLightbox(data);
                  if (jQuery("#reg-usrname")) de.bild.community.formFocusListener('#reg-usrname','Mindestens 4 maximal 15 Zeichen');
                  if (jQuery("#reg-pw")) de.bild.community.changePwInput('#reg-pw','Mindestens 6 Zeichen');
                  createEventsRegister();
            },
            error: function(t) {
               jQuery('#registerBox').html(t);
            }
         });
         event.stopPropagation();
      });
      jQuery("#reg-code").bind('keyup',function() {
         if (jQuery(this).val().length == 5) {
            de.bild.community.checkPLZ(this, knallgrau.userSession.getBaseUrl() + "account/localitiesForPLZ");
         }
      });
   }
   createEventsXdRegister = function() {
      jQuery('#register-form').submit( function(event) {
         jQuery("#reg-adress-city").removeAttr('disabled');
         //var xdResult = null;
         jQuery.getScriptXS({url: jQuery(this).attr('action') + "?xdResult=true",
            data: jQuery('#register-form').serialize(),
            cb: function(t) {
               de.bild.community.InitiateLightbox(xdResult);
               if (jQuery("#reg-usrname")) de.bild.community.formFocusListener('#reg-usrname','Mindestens 4 maximal 15 Zeichen');
               if (jQuery("#reg-pw")) de.bild.community.changePwInput('#reg-pw','Mindestens 6 Zeichen');
               createEventsXdRegister();
            }
         });
         event.stopPropagation();
      });
      jQuery("#reg-code").bind('keyup',function() {
          if (jQuery(this).val().length == 5) {
            de.bild.community.checkPLZ(this, knallgrau.userSession.getBaseUrl() + "account/localitiesForPLZ");
         }
      });
   }
   createEventsFbRegister = function() {
      //display login or register form
      function showLoginOrRegister() {
         var regType = jQuery("input:radio[name=registertype]:checked").val();
         if (regType == "new") {
            jQuery("#register-form").show();
            jQuery("#register-form").find("input").removeAttr('disabled');
            jQuery("#login-form").hide();
            jQuery("#login-form").find("input").attr('disabled', 'disabled');
         } else if (regType == "merge") {
            jQuery("#register-form").hide();
            jQuery("#register-form").find("input").attr('disabled', 'disabled');
            jQuery("#login-form").show();
            jQuery("#login-form").find("input").removeAttr('disabled');
         }
      }
      //default new account if not checked otherwise
      if (jQuery("#fb-old-acc:checked").length == 0)
         jQuery("#fb-new-acc").attr("checked", "checked");
      showLoginOrRegister(); //initially call it for pre-selected values
      jQuery("input[name=registertype]:radio").change(function () {
         showLoginOrRegister();
      });
      //submit the forms
      jQuery("#fbConnect-login").submit( function(e) {
         if (knallgrau.userSession.isCrossDomain(location.href,'ssl')) {
            jQuery.getScriptXS({url: jQuery(this).attr('action') + "?xdResult=true",
               data: jQuery(this).serialize(),
               cb: function() {
                  if (xdResult == "OK") {
                     de.bild.community.DeactivateLightbox();
                     knallgrau.userSession.fbLogin();
                  } else {
                     de.bild.community.InitiateLightbox(xdResult);
                     if (parseInt(jQuery("#fb-acc-mail-is-imported").val()) == 1)
                        jQuery("#email-block").hide();
                     createEventsFbRegister();
                  }
               }
            });
         } else {
            jQuery.ajax({url: jQuery(this).attr('action'),
               type: "post",
               data: jQuery(this).serialize(),
               success: function(data, textStatus, xhr) {
                  if (data == "OK") {
                     de.bild.community.DeactivateLightbox();
                     knallgrau.userSession.fbLogin();
                  } else {
                     de.bild.community.InitiateLightbox(data);
                     if (parseInt(jQuery("#fb-acc-mail-is-imported").val()) == 1)
                        jQuery("#email-block").hide();
                     createEventsFbRegister();
                  }
               },
               error: function(t) {
                  de.bild.community.InitiateLightbox(t);
               }
            });
         }
         return false;
      });
   }
   return {
      getFirstname: function() {
         if (!readCookie('avUsrCr')) return false;
         var fullName = readCookie('avUsrCr').split("#");
         if (fullName.length > 0) return fullName[0];
      },
      getLastname: function() {
         if (!readCookie('avUsrCr')) return false;
         var fullName = readCookie('avUsrCr').split("#");
         if (fullName.length == 2) return fullName[1];
      },
      getFullname: function() {
         if (!readCookie('avUsrCr')) return false;
         return this.getFirstname() + " " + this.getLastname();
      },
      getEmail: function() {
         if (!readCookie('avUsrCr')) return false;
         var cookieValue = readCookie('avUsrCr').split("#");
         if (cookieValue.length > 2) return cookieValue[2];
      },
      hideFacebookFeatures: function() {
         if (typeof(window.getFbCredentials) != 'function') { 
             jQuery('#fb-login-content').addClass('hide');
         }
      },
      featureLoader: function(initParams) {
         if (jQuery("body > #FB_HiddenContainer").length < 1) {
            jQuery("body").append('<div id="FB_HiddenContainer" style="position:absolute; top:-10000px; width:0px; height:0px;" ></div>');
         }
         var initParams = initParams || {};
         if (typeof(window.getFbCredentials) == 'function') {
            try {
               var isSsl = knallgrau.util.isSslPage();
               var head = document.getElementsByTagName("head")[0];
               var done = false;
               script = document.createElement('script');
               script.id = 'fbLoader';
               script.type = 'text/javascript';
               script.src = isSsl ? "httpdisabledsdisabled://www.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php" : "httpdisabled://static.ak.connect.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php";
               head.appendChild(script);
               script.onloaddisabled = script.onreadystatechange = function(){
                  if ( !done && (!this.readyState || this.readyState == "loaddisableded" || this.readyState == "complete") ) {
                     done = true;
                     FB.init(getFbCredentials("api_key"), isSsl ? getFbCredentials("xd_receiver_ssl") : getFbCredentials("xd_receiver"), initParams);
                  }
               };
            } catch(e) {
               var isSsl = knallgrau.util.isSslPage();
               var head = document.getElementsByTagName("head")[0];
               var done = false;
               script = document.createElement('script');
               script.id = 'fbLoader';
               script.type = 'text/javascript';
               script.src = isSsl ? "httpdisabledsdisabled://www.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php" : "httpdisabled://static.ak.connect.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php";
               head.appendChild(script);
               script.onloaddisabled = script.onreadystatechange = function(){
                  if ( !done && (!this.readyState || this.readyState == "loaddisableded" || this.readyState == "complete") ) {
                     done = true;
                     FB.init(getFbCredentials("api_key"), isSsl ? getFbCredentials("xd_receiver_ssl") : getFbCredentials("xd_receiver"), initParams);
                  }
               };
            }
         }
      },
      renderUserBar: function() {
         if (userIsLogin == undefined)
            userIsLogin = getLoginStatusCookie();
         else
            knallgrau.userSession.renderLoginStatus(userIsLogin);
      },
      renderLoginStatus: function(userIsLogin) {
         if (userIsLogin) var userUid = readCookie('avLoginStatus').split("#")[2];
         if (userUid && !isNaN(userUid) && typeof(window.getFbCredentials) == 'function') {
            fbNotLoggedIn();
            if (jQuery("body > #FB_HiddenContainer").length < 1) {
               jQuery("body").append('<div id="FB_HiddenContainer" style="position:absolute; top:-10000px; width:0px; height:0px;" ></div>');
            }
            var fbUser;
            var head = document.getElementsByTagName("head")[0];
            var done = false;
            script = document.createElement('script');
            script.id = 'fbLoader';
            script.type = 'text/javascript';
            script.src = "httpdisabled://static.ak.connect.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php";
            script.onloaddisabled = script.onreadystatechange = function(){
               if ( !done && (!this.readyState || this.readyState == "loaddisableded" || this.readyState == "complete") ) {
                  done = true;
                  FB.init(getFbCredentials("api_key"), getFbCredentials("xd_receiver"));
                  FB.ensureInit(function() {
                     FB_RequireFeatures(["Api","Connect"], function(){
                        FB.Facebook.get_sessionWaitable().waitUntilReady(function (session) {
                              if (session)
                                 fbLoggedIn(userUid);
                              else
                                 fbNotLoggedIn();
                        });
                     });
                  });
               }
            };
            head.appendChild(script);
         } else {
            fbNotLoggedIn();
         }
         function fbLoggedIn(uid) {
            if (FB.Connect.get_loggedInUser() != uid) return;
            var registerBox = jQuery("#comNewUser");
            var loginLogout = jQuery("#comLoginout");
            var userNameBox = jQuery("#comUsername");
            var userUid = readCookie('avLoginStatus').split("#")[2];
            var userName = readCookie('avLoginStatus').split("#")[1];
            var userAlias = knallgrau.util.replaceUmlauts(userName);
            registerBox.next().remove();
            registerBox.remove();
            loginLogout.html("<a href=\"javascript:knallgrau.userSession.logout();\">Logout</a>");
            userNameBox.html("<span>|</span> Eingeloggt als <a href=\""+ knallgrau.userSession.getBaseUrl() + "profiles/"+ userAlias +"\" >"+ userName +"</a> <img src=\"" + communityHost + "CommunityImage/icons/fbconnect-ico.gif\" alt=\"Eingeloggt mit Facebook Connect\" height=\"11\" width=\"11\" />");
            jQuery('.ccheck-waitforfbconnect.pub').removeClass('ccheck-waitforfbconnect').addClass('ccheck');
            if (jQuery('#comments-message:focus').length > 0) {
               jQuery('.ccheck.pub').show();
               jQuery('#publish-facebook').attr('checked', true);
            }
         }
         function fbNotLoggedIn() {
            var registerBox = jQuery("#comNewUser");
            var loginLogout = jQuery("#comLoginout");
            var userNameBox = jQuery("#comUsername");
            jQuery('.ccheck.pub').addClass('hide');
            jQuery('.ccheck.pub').removeClass('ccheck').addClass('ccheck-notconnected');
            if (userIsLogin) {
               var userName = readCookie('avLoginStatus').split("#")[1];
               var userAlias = knallgrau.util.replaceUmlauts(userName);
               userNameBox.html("<span>|</span> Eingeloggt als <a href=\""+ knallgrau.userSession.getBaseUrl() + "profiles/"+ userAlias +"\" >"+ userName +"</a>");
               loginLogout.html("<a href=\"javascript:knallgrau.userSession.logout();\">Logout</a>");
               registerBox.next().remove();
               registerBox.remove();
            } else if (!userIsLogin || userIsLogin == undefined) {
               //if (fbUser) knallgrau.userSession.initiateFbLogin(fbUser);
               registerBox.html("<a href=\"javascript:knallgrau.userSession.register();\">Neu anmelden</a>");
               if (jQuery(".inlineLogin").length == 0) {
                  loginLogout.html("<a href=\"javascript:knallgrau.userSession.login();\">Login</a>");
               } else {
                  loginLogout.html("");
                  loginLogout.next().remove();
               }
            }
         }
     },
     getLoginStatus: function() {
        return (userIsLogin != undefined) ? userIsLogin : getLoginStatusCookie();
     },
     login: function() {
         if (knallgrau.userSession.isCrossDomain(location.href,'ssl')) {
            jQuery.getScriptXS({url: knallgrau.userSession.getBaseUrl('ssl') + "account/login?xdResult=true",
                cb: function(t) {
                  de.bild.community.InitiateLightbox(xdResult);
                  createEventsXdLogin();
                }
            });
         } else {
            jQuery.ajax({url: knallgrau.userSession.getBaseUrl('ssl') + "account/login",
               type: "get",
               success: function(t) {
                  de.bild.community.InitiateLightbox(t);
                  createEventsLogin();
               },
               error: function(t) {
                  de.bild.community.InitiateLightbox(errorSnip);
               }
            });
         }
     },
     logout: function() {
      // check if logged in user is a merged and connected facebook user
      var loginStatusCookie = readCookie('avLoginStatus');
      if (loginStatusCookie) {
         var userName = loginStatusCookie.split("#")[1];
         var uid = loginStatusCookie.split("#")[2];
         if (uid) var fbUser = knallgrau.userSession.isFBLogin();
      }
      if (fbUser && loginStatusCookie) {
         var userUid = loginStatusCookie.split("#")[2];
         if (fbUser.uid == userUid) {
           doFbLogout();
         } else {
           doLogout();
         }
      } else {
        doLogout();
      }
      function doFbLogout() {
         if (typeof(window.getFbCredentials) != 'function') return;
         knallgrau.userSession.featureLoader();
         FB_RequireFeatures(["Api"], function(){
            FB.Connect.logout(doLogout);
         });
      }
      function doLogout() {
         jQuery.getScriptXS({url: knallgrau.userSession.getBaseUrl('ssl') + "account/logout?xdResult=true",
            cb: function(t) {
               if (xdResult == "OK") {
                  userIsLogin = false;
                  createCookie("avLoginStatus", "", -1);
                  if (location.href.indexOf('profiles') != -1 || location.href.indexOf('activate') != -1 ) {
                     location.href = 'http://www.bild.de';
                  } else {
                     location.reloaddisabled();
                  }
               }
            }
         });
      }
     },
     pwlost: function() {
         jQuery.getScriptXS({url: knallgrau.userSession.getBaseUrl('ssl') + "account/sendpwd?xdResult=true",
            cb: function(t) {
               de.bild.community.InitiateLightbox(xdResult);
               createEventsXdPwLost();
            }
         });
     },
     register: function() {
         if (knallgrau.userSession.isCrossDomain(location.href,'ssl')) {
            jQuery.getScriptXS({url: knallgrau.userSession.getBaseUrl('ssl') + "account/register?xdResult=true",
                cb: function(t) {
                  de.bild.community.InitiateLightbox(xdResult);
                  de.bild.community.formFocusListener('#reg-usrname','Mindestens 4 maximal 15 Zeichen');
                  de.bild.community.changePwInput('#reg-pw','Mindestens 6 Zeichen');
                  createEventsXdRegister();
                }
            });
         } else {
            jQuery.ajax({url: knallgrau.userSession.getBaseUrl('ssl') + "account/register",
               type: "get",
               success: function(t) {
                  de.bild.community.InitiateLightbox(t);
                  de.bild.community.formFocusListener('#reg-usrname','Mindestens 4 maximal 15 Zeichen');
                  de.bild.community.changePwInput('#reg-pw','Mindestens 6 Zeichen');
                  createEventsRegister();
               },
               error: function(t) {
                  de.bild.community.InitiateLightbox(errorSnip);
               }
            });
         }
     },
     checkUserName: function(data) {
         var data = data || jQuery("#register-form").serialize();
         if (knallgrau.userSession.isCrossDomain(location.href,'ssl')) {
            jQuery.getScriptXS({url: knallgrau.userSession.getBaseUrl('ssl') + "account/ajaxCheckUserData?xdResult=true",
                data: data,
                cb: function(t) {
                   jQuery('#userNameError').html(xdResult);
                }
            });
         } else {
            jQuery.ajax({url: knallgrau.userSession.getBaseUrl('ssl') + "account/ajaxCheckUserData",
               type: "get",
               data: data,
               success: function(t) {
                  jQuery('#userNameError').html(t);
               }
            });
         }
     },
     getFreeUserName: function(username, field) {
        var field = field || jQuery("#name");
        if (knallgrau.userSession.isCrossDomain(location.href,'ssl')) {
            jQuery.getScriptXS({url: knallgrau.userSession.getBaseUrl('ssl') + "account/ajaxGetFreeUsername?xdResult=true",
                data: "name=" + username.replace(" ","", "g"),
                cb: function(t) {
                   field.val(xdResult);
                }
            });
        } else {
            jQuery.ajax({url: knallgrau.userSession.getBaseUrl() + "account/ajaxGetFreeUsername",
                type: "get",
                data: {name: username.replace(" ","", "g")},
                success: function(t) {
                   field.val(t);
                }
            });
        }
     },
     getBaseUrl: function(ssl) {
        return baseUrlS3;
     },
     isCrossDomain: function(url,ssl) {
        function startsWith(s, pattern) {
           return s.indexOf(pattern) === 0;
        }
        var baseUrl = this.getBaseUrl(ssl);
        baseUrl.match(new RegExp("(https{0,1}:\\/\\/[^\\/]*)\\/*.*"));
        var domain = RegExp.$1;
        if (startsWith(url, domain))
           return false;
        return true;
     },
     fbRegister: function(fbUser) {
         FB.Connect.showPermissionDialog("email", function() {
            // check if FB namespace exists
            if (typeof(window.getFbCredentials) != 'function') return;
            if (knallgrau.userSession.isCrossDomain(location.href,'ssl')) {
               jQuery.getScriptXS({url: knallgrau.userSession.getBaseUrl('ssl') + "account/fbregister?xdResult=true",
                  cb: function() {
                     de.bild.community.InitiateLightbox(xdResult);
                     createEventsFbRegister();
                  }
               });
            } else {
               jQuery.ajax({url: knallgrau.userSession.getBaseUrl() + "account/fbregister",
                   type: "get",
                   success: function(t) {
                     de.bild.community.InitiateLightbox(t);
                     createEventsFbRegister();
                   },
                   error: function(t) {
                     de.bild.community.InitiateLightbox(errorSnip);
                   }
               });
            }
            // get facebook data
            knallgrau.userSession.featureLoader();
            FB.Facebook.get_sessionState().waitUntilReady(function() {
               var uid = FB.Connect.get_loggedInUser();
               var sql = "SELECT name, email, birthday_date, first_name, last_name, sex, pic_big, current_location FROM user WHERE uid = " + uid;
               FB.Facebook.apiClient.fql_query(sql, function(result, ex) {
                  var userName = result[0]['name'];
                  var userName = userName.replace(" ", "", "g").substring(0,15);
                  if (userName) {
                     // get next free username and bind it to user txt field
                     knallgrau.userSession.getFreeUserName(userName, jQuery("#fb-new-acc-usr"));
                  }
                  var userEmail  = result[0]['email'];
                  if (userEmail) {
                     jQuery("#fb-acc-mail").val(userEmail);
                     jQuery("#fb-old-acc-usr").val(userEmail);
                     jQuery("#fb-acc-mail-is-confirmed").val("1");
                     jQuery("#fb-acc-mail-is-imported").val("1");
                     jQuery("#email-block").hide();
                  }
                  jQuery("#fb-new-acc-birthday").val(result[0]['birthday_date']);
                  jQuery("#fb-new-acc-first-name").val(result[0]['first_name']);
                  jQuery("#fb-new-acc-last-name").val(result[0]['last_name']);
                  jQuery("#fb-new-acc-sex").val(result[0]['sex']);
                  jQuery("#fb-new-acc-pic-big").val(result[0]['pic_big']);
                  if (result[0]['current_location']) jQuery("#fb-new-acc-location").val(result[0]['current_location'][0]);
               });
            });
         });
     },
     fbCommit: function(commitParams, redirect) {
        // check if FB namespace exists
        if (typeof(window.getFbCredentials) != 'function') return;
        knallgrau.userSession.featureLoader();
        var attachment = {'caption': '{*actor*} ' + commitParams['verb'],'description': commitParams['noun'], 'media': [{'type':'image','src':commitParams["images"][0]["src"],'href':commitParams["images"][0]["href"]}]};
        var actionLinks = [{ "text": commitParams["actionlabel"], "href": commitParams["actionlink"]}];
        FB.ensureInit( function(){
         if (!redirect) {
            FB.Connect.streamPublish(null,attachment,actionLinks);
         } else {
              FB.Connect.streamPublish(null,attachment,actionLinks,null,null,performRedirect);
         }
      });
      function performRedirect(e) {
         location.href = redirect;
      }
     },
     fbLogin: function() {
        // check if FB namespace exists
        if (typeof(window.getFbCredentials) != 'function') return;
        // perform fb login and get facebook_uid
        var fbUser = knallgrau.userSession.isFBLogin();
        if (fbUser) uid = fbUser.uid;
        if (knallgrau.userSession.isCrossDomain(location.href,'ssl')) {
           jQuery.getScriptXS({url: knallgrau.userSession.getBaseUrl('ssl') + "account/fblogin?xdResult=true",
              cb: function(t) {
                 if (xdResult == 'NOTEXISTS') {
                    knallgrau.userSession.fbRegister(fbUser);
                 } else {
                    location.reloaddisabled();
                 }
              }
           });
        } else {
           // AJAX Request to Server and check if facebook request is valid and facebook user already merged with an bild.de account
           jQuery.ajax({url: knallgrau.userSession.getBaseUrl() + "account/fblogin",
              type: "post",
              success: function(t) {
                 if (t == 'NOTEXISTS') {
                    knallgrau.userSession.fbRegister(fbUser);
                 } else {
                    location.reloaddisabled();
                 }
              }
           });
        }
     },
     renderXFBML: function(element) {
        if (typeof(window.getFbCredentials) == 'function') {
            if (jQuery("body > #FB_HiddenContainer").length < 1) {
               jQuery("body").append('<div id="FB_HiddenContainer" style="position:absolute; top:-10000px; width:0px; height:0px;" ></div>');
            }
            var head = document.getElementsByTagName("head")[0];
            var done = false;
            script = document.createElement('script');
            script.id = 'fbLoader';
            script.type = 'text/javascript';
            script.src = knallgrau.util.isSslPage() ? "httpdisabledsdisabled://www.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php" : "httpdisabled://static.ak.connect.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php";
            script.onloaddisabled = script.onreadystatechange = function(){
               if ( !done && (!this.readyState || this.readyState == "loaddisableded" || this.readyState == "complete") ) {
                  done = true;
                  FB.init(getFbCredentials("api_key"), knallgrau.util.isSslPage() ? getFbCredentials("xd_receiver_ssl") : getFbCredentials("xd_receiver"));
                  FB_RequireFeatures(["XFBML"], function(){
                     if (element) {
                        FB.XFBML.Host.parseDomElement(element);
                     } else {
                        FB.XFBML.Host.parseDomTree();
                     }
                  });
               }
            };
            head.appendChild(script);
         }
     },
     featureLoaderLogin: function() {
        if (typeof(window.getFbCredentials) == 'function') {
            var head = document.getElementsByTagName("head")[0];
            var done = false;
            script = document.createElement('script');
            script.id = 'fbLoader';
            script.type = 'text/javascript';
            script.src = knallgrau.util.isSslPage() ? "httpdisabledsdisabled://www.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php" : "httpdisabled://static.ak.connect.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php";
            script.onloaddisabled = script.onreadystatechange = function(){
               if ( !done && (!this.readyState || this.readyState == "loaddisableded" || this.readyState == "complete") ) {
                  done = true;
                  FB.init(getFbCredentials("api_key"), knallgrau.util.isSslPage() ? getFbcredentials("xd_receiver_ssl") : getFbCredentials("xd_receiver"),{"forceBrowserPopupForLogin":true});
                  FB_RequireFeatures(["Api","Connect"], function(){
                     FB.Connect.requireSession(function(exception){
                        knallgrau.userSession.fbLogin();
                     },false);
                  });
               }
            };
            head.appendChild(script);
         }
     },
     isFBLogin: function() {
        if (typeof(window.getFbCredentials) == 'function') {
            var fbUser;
            var head = document.getElementsByTagName("head")[0];
            var done = false;
            script = document.createElement('script');
            script.id = 'fbLoader';
            script.type = 'text/javascript';
            script.src = knallgrau.util.isSslPage() ? "httpdisabledsdisabled://www.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php" : "httpdisabled://static.ak.connect.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php";
            head.appendChild(script);
            script.onloaddisabled = script.onreadystatechange = function(){
               if ( !done && (!this.readyState || this.readyState == "loaddisableded" || this.readyState == "complete") ) {
                  done = true;
                  FB.init(getFbCredentials("api_key"), knallgrau.util.isSslPage() ? getFbCredentials("xd_receiver_ssl") : getFbCredentials("xd_receiver"),{"forceBrowserPopupForLogin":true});
                  FB_RequireFeatures(["Api","Connect"], function(){
                             var api = FB.Facebook.apiClient;
                             fbUser = api.get_session();
                  });
               }
            };
            head.appendChild(script);
            return fbUser;
         } else {
            return null;
         }
     },
     fbMergeSessionUser: function() {
        if (knallgrau.userSession.isCrossDomain(location.href,'ssl')) {
           jQuery.getScriptXS({url: knallgrau.userSession.getBaseUrl('ssl') + "account/checkfblogin?xdResult=true",
               cb: function() {
                  if (xdResult == 'NOTEXISTS') {
                    jQuery.getScriptXS({url: knallgrau.userSession.getBaseUrl('ssl') + "account/fbregister",
                       data: "xdResult=true&registertype=mergeSessionUser" + getFBData(),
                       cb: function() {
                           de.bild.community.InitiateLightbox(xdResult);
                           jQuery(".fbConnect").remove();
                           knallgrau.userSession.fbLogin();
                       }
                    });
                  } else {
                     de.bild.community.InitiateLightbox(xdResult);
                  }
               }
           });
        } else {
           jQuery.ajax({url: knallgrau.userSession.getBaseUrl('ssl') + "account/checkfblogin",
              type: "get",
              success: function(data) {
                 if (data == 'NOTEXISTS') {
                    jQuery.ajax({url: knallgrau.userSession.getBaseUrl() + "account/fbregister",
                       type: "get",
                       data: "registertype=mergeSessionUser" + getFBData(),
                       success: function(data, textStatus, xhr) {
                           de.bild.community.InitiateLightbox(data);
                           jQuery(".fbConnect").remove();
                           knallgrau.userSession.fbLogin();
                       }
                    });
                 } else {
                    de.bild.community.InitiateLightbox(data);
                 }
              }
           });
        }
        function getFBData() {
           var data = "";
            // get facebook data
            knallgrau.userSession.featureLoader();
            FB.Facebook.get_sessionState().waitUntilReady(function() {
               var uid = FB.Facebook.apiClient.get_session().uid;
               var sql = "SELECT birthday_date, first_name, last_name, sex, pic_big, current_location FROM user WHERE uid = " + uid;
               FB.Facebook.apiClient.fql_query(sql, function(result, ex) {
                  if (result[0]['birthday_date']) data += "&bday=" + result[0]['birthday_date'];
                  if (result[0]['first_name']) data += "&firtsname=" + result[0]['first_name'];
                  if (result[0]['last_name']) data += "&lastname=" + result[0]['last_name'];
                  if (result[0]['sex']) data += "&gender=" + result[0]['sex'].substring(0,1);
               });
            });
           return data;
        }
     },
     reloaddisabledCaptcha: function(container, url) {
        if (knallgrau.userSession.isCrossDomain(location.href,'ssl')) {
           url += (url.indexOf("?") > -1) ? "&xdResult=true" : "?xdResult=true";
           jQuery.getScriptXS({url: url,
               cb: function() {
                  container.html(xdResult);
               }
           });
        } else {
           jQuery.ajax({url: url,
               success: function(data) {
                  container.html(data);
               }
           });
        }
     },
     close: function() {
        de.bild.community.DeactivateLightbox();
     },
     getErrorSnip: function(errorMsg) {
        var errorMsg = errorMsg || "Es ist ein unerwarteter Fehler aufgetreten, bitte ersuchen sie es erneut.";
        var errorSnip = '<div class="lightbox lb1">\
   <div class="innerBox">\
   <a class="close" href="javascript:knallgrau.userSession.close();"></a>\
    <div class="section">\
      <div class="header"><h2>Es ist ein Fehler aufgetreten!</h2></div>\
       <div class="note">' + errorMsg + '</div>\
      </div>\
   </div>\
</div>';
       return errorSnip;
     }
  };
}();
//Loading of ugc element(s)
knallgrau.loaddisabledUgcElement = function(remoteServicesUrl, act) {
   jQuery(document).ready(function() {
      if (act)
         remoteServicesUrl += "&act=" + act;
      jQuery.ajax({ url: remoteServicesUrl,
         beforeSend: function() {
            de.bild.community.loaddisablederIcon("#ugc-content-wrapper");
         },
         complete: function() {
            jQuery("#loaddisablederIcon").remove();
         },
         success: function(data) {
            jQuery('#ugcElement').html(data);
            jQuery('#ugcElement').attr("style", 'display: "inline";');
            jQuery('.ccheck.pub').removeClass('ccheck').addClass('ccheck-waitforfbconnect');
            jQuery('#publish-facebook').attr('checked', false);
         }
      });
   });
};
//plz check, überschreibt die von bild.de gelieferte Funktion
de.bild.community.checkPLZ = function(field, url) {
   var plz = jQuery(field).val();
   var invalidChars = plz.match(/\D/);
   var cityFieldId = jQuery(field).parents("div.ctext").next().children("label").attr("for");
   if (plz.length == 5) {
      if (invalidChars) {
         jQuery(field).siblings('.errorMsg').remove();
         jQuery(field).parent().prepend('<span class="errorMsg">Die Eingabe enthält ungültige Zeichen</span>');
      } else {
         jQuery(field).siblings('.errorMsg').remove();
         if (knallgrau.userSession.isCrossDomain(location.href,'ssl')) {
            jQuery('#' + cityFieldId).replaceWith('<input type="text" class="disabled" disabled="disabled" name="locality" id="' + cityFieldId + '" value="Ort wird gesucht..." />');
            jQuery.getScriptXS({url: url,
               data: "plz=" + plz + "&xdResult=true",
               cb: function() {
                  processLocalities(xdResult, field);
               }
            });
         } else {
            jQuery.ajax({url: url,
               type: "GET",
               data: "plz=" + plz,
               beforeSend: function() {
                  jQuery('#' + cityFieldId).replaceWith('<input type="text" class="disabled" disabled="disabled" name="locality" id="' + cityFieldId + '" value="Ort wird gesucht..." />');
               },
               success: function(data) {12345
                  processLocalities(data, field);
               }
            });
         }
      }
   }
   var processLocalities = function(data, field) {
      var json = jQuery.parseJSON(data);
      var cityFieldId = jQuery(field).parents("div.ctext").next().children("label").attr("for");
      if (json == null || !json.ort) {
         jQuery(field).parent().append('<span class="errorMsg">PLZ ist nicht gültig.</span>');
         jQuery("#" + cityFieldId).val('');
         jQuery("#" + cityFieldId).parents('div.cselect').attr('class','ctext');
      } else {
          var orte = json.ort.split(",");
          if (orte.length > 1) {
              jQuery("#" + cityFieldId).replaceWith('<select size="1" name="locality" id="' + cityFieldId + '"></select>');
              jQuery("#" + cityFieldId).parents('div.ctext').attr('class','cselect');
              jQuery.each(orte, function(index, value){
                  jQuery('#' + cityFieldId).append(jQuery('<option></option>').val(value).html(value));
              });
          }
          else if (orte.length == 1) {
            jQuery('#' + cityFieldId).val(orte[0]);
            jQuery("#" + cityFieldId).parents('div.cselect').attr('class','ctext');
          } else {
            //kein ort aus der liste stimmt mit der angegebenen postleitzahl überein
            jQuery(field).parent().append('<span class="errorMsg">PLZ ist nicht gültig.</span>');
            jQuery("#" + cityFieldId).replaceWith('<input type="text" class="disabled" disabled="disabled" name="locality" id="' + cityFieldId + '" />');
            jQuery("#" + cityFieldId).parents('div.cselect').attr('class','ctext');
          }
      }
   }
};
/*timestamp-replace:15400962.22*/

var de = de || {};
de.bild = de.bild || {};
de.bild.timestampReplace = de.bild.timestampReplace || {};
de.bild.timestampReplace.replaceTimestamp = function(link){ 
 var href = jQuery(link);
    href.attr('href',href.attr('href').replace("[timestamp]", (Math.floor(Math.random() * 100000000000))));
}
/*core:15400948.29*/

var google_adnum=0; 