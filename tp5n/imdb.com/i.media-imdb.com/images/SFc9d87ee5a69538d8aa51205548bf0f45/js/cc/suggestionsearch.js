(function(c,e){function n(){}function H(a){z=[a]}function I(a){p.insertBefore(a,p.firstChild)}function q(a,b,g){return a&&a.apply(b.context||b,g)}function A(a){return/\?/.test(a)?"&":"?"}function t(a){function b(d){!B++&&e(function(){J();h&&(C[j]={s:[d]});K&&(d=K.apply(a,[d]));q(a.success,a,[d,u]);q(f,a,[a,u])},0)}function g(d){!B++&&e(function(){J();h&&d!=D&&(C[j]=d);q(a.error,a,[a,d]);q(f,a,[a,d])},0)}a=c.extend({},L,a);var f=a.complete,K=a.dataFilter,M=a.callbackParameter,k=a.callback,N=a.cache,
h=a.pageCache,U=a.charset,j=a.url,r=a.data,V=a.timeout,O,B=0,J=n;a.abort=function(){!B++&&J()};if(q(a.beforeSend,a,[a])===false||B)return a;j=j||E;r=r?typeof r=="string"?r:c.param(r,a.traditional):E;j+=r?A(j)+r:E;M&&(j+=A(j)+encodeURIComponent(M)+"=?");!N&&!h&&(j+=A(j)+"_"+(new Date).getTime()+"=");j=j.replace(/=\?(&|$)/,"="+k+"$1");h&&(O=C[j])?O.s?b(O.s[0]):g(O):e(function(d,F,R){if(!B){R=V>0&&e(function(){g(D)},V);J=function(){R&&clearTimeout(R);d[l]=d[v]=d[P]=d[G]=null;p[m](d);F&&p[m](F)};window[k]=
H;d=c(o)[0];d.id=w+S++;if(U)d[Q]=U;var W=function(T){(d[v]||n)();T=z;z=undefined;T?b(T[0]):g(s)};if(x.msie){d.event=v;d.htmlFor=d.id;d[l]=function(){d.readyState=="loaded"&&W()}}else{d[G]=d[P]=W;x.opera?((F=c(o)[0]).text="jQuery('#"+d.id+"')[0]."+G+"()"):(d[y]=y)}d.src=j;I(d);F&&I(F)}},0);return a}var y="async",Q="charset",E="",s="error",w="_jqjsp",v="onclick",G="on"+s,P="onload",l="onreadystatechange",m="removeChild",o="<script/>",u="success",D="timeout",x=c.browser,p=c("head")[0]||document.documentElement,
C={},S=0,z,L={callback:w,url:location.href};t.setup=function(a){c.extend(L,a)};c.jsonp=t})(jQuery,setTimeout);var suggestionsearch_enable=function(){$("#navbar-query").searchAutocomplete({maxResults:6,alwaysScrollIntoView:false,resultsDiv:$("#navbar-suggestionsearch"),keyboardControl:true});$("#navbar-query").attr("autocomplete","off");repositionSuggestionSearch()},repositionSuggestionSearch=function(){var c=$("#navbar-query").position(),e=$("#navbar-query").width(),n=$("#navbar-query").height();$("#navbar-suggestionsearch").css({left:c.left+1+"px",top:c.top+n+7+"px",width:e+1+"px"})},suggestionsearch_disable=
function(){$("#navbar-query").stopSearchAutocomplete({resultsDiv:$("#navbar-suggestionsearch")});$("#navbar-query").attr("autocomplete","on")},suggestionsearch_dropdown_choice=function(c){"all"==c.value?suggestionsearch_enable():suggestionsearch_disable()};function trackAndClick(c,e,n){(new Image).src="/rg/"+c+"/"+e+"/images/b.gif";setTimeout(function(){document.location=n.href},0);return false}$(document).ready(function(){var c=$('#nb_search select[name="s"]');if(c.length>0){c=c[0];suggestionsearch_dropdown_choice(c)}});
(function(c){c.fn.searchAutocomplete=function(e){function n(a){H();c(a).addClass("highlighted")}function H(){m.find("a.highlighted").removeClass("highlighted")}function I(){var a=m.find("a.highlighted");a.length>0?a.first().click():c("#navbar-form").submit()}function q(){if(m.find("a").length>0){var a=m.find("a.highlighted");if(a.length>0){a=a.first();var b=a.prev("a");b.length>0&&b.first().addClass("highlighted");a.removeClass("highlighted")}}}function A(){var a=m.find("a");if(a.length>0){var b=
m.find("a.highlighted");if(b.length>0){a=b.first();b=a.next("a");if(b.length>0){b.first().addClass("highlighted");a.removeClass("highlighted")}}else a.first().addClass("highlighted")}}function t(){repositionSuggestionSearch();m.css("display","block")}function y(){m.css("display","none")}function Q(a){if(a){a=a.toLowerCase();if(a.length>20)a=a.substr(0,20);a=a.replace(/^\s*/,"").replace(/[ ]+/g,"_");if(z.test(a))a=a.replace(/[\u00e0\u00c0\u00e1\u00c1\u00e2\u00c2\u00e3\u00c3\u00e4\u00c4\u00e5\u00c5\u00e6\u00c6]/g,
"a").replace(/[\u00e7\u00c7]/g,"c").replace(/[\u00e8\u00c8\u00e9\u00c9\u00ea\u00ca\u00eb\u00cb]/g,"e").replace(/[\u00ec\u00cd\u00ed\u00cd\u00ee\u00ce\u00ef\u00cf]/g,"i").replace(/[\u00f0\u00d0]/g,"d").replace(/[\u00f1\u00d1]/g,"n").replace(/[\u00f2\u00d2\u00f3\u00d3\u00f4\u00d4\u00f5\u00d5\u00f6\u00d6\u00f8\u00d8]/g,"o").replace(/[\u00f9\u00d9\u00fa\u00da\u00fb\u00db\u00fc\u00dc]/g,"u").replace(/[\u00fd\u00dd\u00ff]/g,"y").replace(/[\u00fe\u00de]/g,"t").replace(/[\u00df]/g,"ss");return a=a.replace(/[\W]/g,
"")}return""}function E(){w(l.val())}function s(a,b){if(a&&b&&b.length<=a.length&&a.substr(0,b.length)===b)return true;return false}function w(a){var b=Q(a);if(b.length==0){y();D=u=o=""}else if(b!==o){t();c.jsonp({charset:"UTF-8",dataType:"jsonp",callback:"imdb$"+b,url:"http://sg.media-imdb.com/suggests/"+b.substr(0,1)+"/"+b+".json",error:function(g,f){if(f==="error"&&b.length>1){D=b;s(o,u)?G(b):w(b.substr(0,b.length-1))}},success:function(g){v(g,b);u=b;x=g},pageCache:pageCacheSetting});o=b}}function v(a,
b){if(o===b){b="";for(i in a.d){if(i>=C)break;var g=a.d[i],f="suggests-"+i,K="navbar-search",M="see-all-results",k=g.id,N="film-40x54.png",h;if(s(k,"nm")){h="/name/"+k+"/";N="people-40x54.png"}else if(s(k,"tt"))h="/title/"+k+"/";else if(s(k,"http://"))h=k;if(h){k={url:h,title:g.l,detail:g.s,placeholder:N,tag:"navbar-search",slot:f};if(g.i)k.img={url:g.i[0].replace("._V1_.jpg","._V1._SX40_CR0,0,40,54_.jpg"),width:40,height:54};if(g.y)k.extra="("+g.y+")";b+=P(k,"navbar-search",f)}}if(b.length>0){t();
h=l.val();a=h.replace(S," ");h=c("<div/>").text(h).html();b+='<a class="moreResults"';b+='   href="/find?s=all&q='+a+'"';a="";a+="'"+K+"'";a+=",";a+="'"+M+"'";a+=",";a+="this";b+='   onclick="return trackAndClick('+a+');">';b+='<span class="message">See all results for "<span class="query">'+h+'</span>"</span>&nbsp;<span class="raquo">&raquo;</span>';b+="</a>";m.html(b);m.find("a").hover(function(){n(this)},function(){})}}}function G(a){var b=[],g=[];for(i in x.d){var f=x.d[i];Q(f.l).match(a)?b.push(f):
g.push(f)}v({d:b.concat(g)},a)}function P(a,b,g){var f='<a href="'+a.url+'" class="poster"';f+=" onclick=\"return trackAndClick('"+b+"', '"+g+"', this);\"";f+=">";if(a.img){f+='<img src="'+a.img.url+'"';f+=" style=\"background:url('http://i.media-imdb.com/images/mobile/"+a.placeholder+"')\"";if(a.img.width&&a.img.height)f+=' width="'+a.img.width+'" height="'+a.img.height+'"';f+=">"}else if(a.placeholder)f+='<img src="http://i.media-imdb.com/images/mobile/'+a.placeholder+'">';f+='<div class="suggestionlabel">';
f+='<span class="title">'+a.title+"</span>";if(a.extra)f+=' <span class="extra">'+a.extra+"</span>";if(a.detail)f+='<div class="detail">'+a.detail+"</div>";f+="</div></a>";return f}if(typeof e=="undefined")e={};var l=c(this),m="resultsDiv"in e?e.resultsDiv:c("#autocomplete"),o="",u="",D="",x="",p,C="maxResults"in e?e.maxResults:3,S=/[^\w\u00e0\u00c0\u00e1\u00c1\u00e2\u00c2\u00e3\u00c3\u00e4\u00c4\u00e5\u00c5\u00e6\u00c6\u00e7\u00c7\u00e8\u00c8\u00e9\u00c9\u00ea\u00ca\u00eb\u00cb\u00ec\u00cd\u00ed\u00cd\u00ee\u00ce\u00ef\u00cf\u00f0\u00d0\u00f1\u00d1\u00f2\u00d2\u00f3\u00d3\u00f4\u00d4\u00f5\u00d5\u00f6\u00d6\u00f8\u00d8\u00f9\u00d9\u00fa\u00da\u00fb\u00db\u00fc\u00dc\u00fd\u00dd\u00ff\u00fe\u00de\u00df]/g,
z=/[\u00e0\u00c0\u00e1\u00c1\u00e2\u00c2\u00e3\u00c3\u00e4\u00c4\u00e5\u00c5\u00e6\u00c6\u00e7\u00c7\u00e8\u00c8\u00e9\u00c9\u00ea\u00ca\u00eb\u00cb\u00ec\u00cd\u00ed\u00cd\u00ee\u00ce\u00ef\u00cf\u00f0\u00d0\u00f1\u00d1\u00f2\u00d2\u00f3\u00d3\u00f4\u00d4\u00f5\u00d5\u00f6\u00d6\u00f8\u00d8\u00f9\u00d9\u00fa\u00da\u00fb\u00db\u00fc\u00dc\u00fd\u00dd\u00ff\u00fe\u00de\u00df]/,L="keyboardControl"in e?e.keyboardControl:false;alwaysScrollIntoView="alwaysScrollIntoView"in e?e.alwaysScrollIntoView:true;
pageCacheSetting=c.browser.msie==true?false:true;l.focus(function(){alwaysScrollIntoView&&this.scrollIntoView();if(l.val().length>0){w(l.val());t()}});l.blur(function(){p=setTimeout(y,300)});l.keydown(function(a){if(L)if(a.keyCode==38){l.focus();q();return false}else if(a.keyCode==40){l.focus();A();return false}else if(a.keyCode==13){I();return false}else if(a.keyCode==27){H();y();return false}l.focus();p=setTimeout(E,0)})};c.fn.stopSearchAutocomplete=function(e){if(typeof e=="undefined")e={};var n=
c(this);e="resultsDiv"in e?e.resultsDiv:c("#autocomplete");n.unbind("focus");n.unbind("blur");n.unbind("keydown");e.css("display","none")}})(jQuery);
