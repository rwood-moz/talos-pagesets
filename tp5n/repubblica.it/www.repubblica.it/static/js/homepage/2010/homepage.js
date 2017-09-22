/********************************
 * CONFIGURAZIONE - MAPPING ZONE PER TRACCIAMENTO
 ********************************
 */
var blackListUrls = new Array("httpdisabled://espresso.repubblica.it");

var mappingZone = {             
	    "HRHT":"#header ul.network li.links ul li", //links header
	    "HRHN" : "ul.network-ge-all li ul li", //overlay network
	    "HRBX":"ul.repubblica-extra li.repubblica-extra-list ul li",
	    "HRHM1":"#header ul.onelev li", //menu 1 livello
	    "HRHM2":"#header ul.twolev li", //menu 2 livello
	    "HRHL":"#header #search-bar .left", //links edizioni locali
	    "HREA":".apertura, .apertura-grande, .apertura-extra", //apertura                                                                                              
	    "HRER1":".riaperture .riapertura-1, .riaperture-enfasi .riaperture-enfasi-small .riapertura-1", //riapertura                                                                                   
	    "HRER2":".riaperture .riapertura-2, .riaperture-enfasi .riaperture-enfasi-small .riapertura-2", //riapertura2
	    "HRER3": ".riaperture-enfasi .riapertura-large", //riapertura mondiali                                                                                      
	    "HREC1":".cont-AB .col-B .before-multimedia", //centro prima del mutimedia
	    "HRECM":".col-C .type-appello", //community
	    "HREC2":".cont-AB .col-B .after-multimedia", //centro dopo multimedia
	    "HREV" :".cont-AB .col-B ul.multimedia li", //multimedia
	    "HRERO":".col-C #spalla-rotator .box-articles .articles", //spalla rotante
	    "HRESS":".col-C .sottospalla:not(.netwrok) .articles", //sottospalla
	    "HRSN":".col-C .sottospalla.network .articles", //box del network (kw)
	    "HRV" : "ul.from-section li ul", //sections
	    "HRLV" :"ul.from-section-rich li ul li", //vaschette large
        "HRLS" :"ul.from-section-sport li ul li", //vaschetta sport
	    "HRF":".page-foot", //footer
	    "HROO":"ul.blog-opinioni li.opinione", //opinioni
	    "HROR":"ul.blog-opinioni li#rubriche", //rubriche
	    "HROBA":"ul.blog-opinioni li.blog-autori", //blog autori
	    "HROBL":"ul.blog-opinioni li.blog-lettori", //blog lettori
	    "HRBL" : "ul.ilmiolibro li", //box il mio libro
	    "HRBE":".iniziativeeditoriali ul li", //iniziative editoriali
	    "HRBO":"ul.ventiquattroore li ul li ul li", //24 ore agi
	    "HRBA":"#services-rotator ul.tabservices li", //Annunci
	    "HRBS":"ul.seguirepubblica li", //Segui Repubblica
	    "HRPO":"ul.oroscopo li.oroscopo-detail", //Oroscopo
	    "HRPB":"ul.borsa li.test", //Borsa
	    "HRPS":"span.sport_selection",//Personalizzazione Sport
	    "HRPE":"ul#box-locali li", //Personalizzazione box locali
	    "HRPM":"#box-meteo-sidebar", //Personalizzazione box meteo
	    "HROD" :"ul.dossier-speciali li", //box dossier e speciali
	    "HRBP" :".cont-AB .col-A ul.box.oggisupubblico li dl dt," +
	    		".cont-AB .col-A ul.box.oggisupubblico li.lasituazione," +
	    		".cont-AB .col-A ul.box.oggisupubblico li.other," +
				".cont-AB .col-A ul.box.oggisupubblico li.ipoteri ul li" //box pubblico
	};


/********************************
 * CONFIGURAZIONE - MAPPING ZONE PER INTERSTITIAL
 ********************************
 */
var mappingInterstitial = {
	//APERTURA  
	".apertura h1.interstitial a, .apertura a.interstitial ":"httpdisabled://www.repubblica.it/static/includes/common/interstitial.html",
	//APERTURA GRANDE
	".apertura-grande  h1.interstitial a, .apertura-grande  a.interstitial ":"httpdisabled://www.repubblica.it/static/includes/common/interstitial.html",
	//APERTURA  XLARGE
	".apertura-extra h1.interstitial a, .apertura-extra a.interstitial ":"httpdisabled://www.repubblica.it/static/includes/common/interstitial.html",
	//RIAPERTURA
	".riapertura-1 h2.interstitial a, .riapertura-1 h3.interstitial a, .riapertura-1 p a.interstitial":"httpdisabled://www.repubblica.it/static/includes/common/interstitial.html",
	//RIAPERTURA2
	".riapertura-2 h2.interstitial a, .riapertura-2 h3.interstitial a, .riapertura-2 p a.interstitial":"httpdisabled://www.repubblica.it/static/includes/common/interstitial.html",
	//CENTRO
	".cont-AB .col-B .articles h3.interstitial a,.cont-AB .col-B .articles h4.interstitial a, ,.cont-AB .col-B .articles p a.interstitial":"httpdisabled://www.repubblica.it/static/includes/common/interstitial.html",
	//SPALLA
	".col-C #spalla-rotator .box-articles .articles a.interstitial, .col-C #spalla-rotator .box-articles .articles h2.interstitial a":"httpdisabled://www.repubblica.it/static/includes/common/interstitial.html",
	//SOTTOSPALLA
	".col-C .sottospalla .interstitial a":"httpdisabled://www.repubblica.it/static/includes/common/interstitial.html"
	};

/********************************
 * MAIN
 ********************************
 */
$(document).ready(function() {
	
	collapse();
	networkGELE();
	sitesearch();
	
	tab('spalla-rotator',1,null);
	tab('sottospalla-rotator',1,30);
	tab('services-rotator',1,null);

	tablelink(".box-table tr");

	ventiquattroore();
	
	if($(".riaperture .riapertura").size()) {
		equalHeight($(".riaperture .riapertura"));
	}
	
	equalHeight($(".spalla .articles"));
	equalHeight($("ul.network-rep li.equal"));

	borsajson();
	sportjson();
	oroscopo();
	inputform("#mappe-form","#strAddress","#strLocation");
	inputform("#iml-search-form","#searchInput",null);
	
	repubblicatv();

	annunci();
	annuncicycle();

	iniziativeeditoriali();
	
	sottospalla();
	rubrichecollapse();

	smallresolution($(this).width());
    $(window).resize(function() {
        smallresolution($(this).width());
    });

    //ilmiolibro
    ilmiolibro();

}); // /documentready

/*
CSS Browser Selector v0.3.5 (Feb 05, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
mod by f.parrella for ipad
*/
function css_browser_selector(u){var ua = u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1;},g='gecko',w='webkit',s='safari',o='opera',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?'mobile':is('iphone')?'iphone':is('ipad')?'ipad':is('ipod')?'ipod':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win':is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);


/*Yetii - Yet (E)Another Tab Interface Implementation,version 1.6,http://www.kminek.pl/lab/yetii/,Copyright (c) Grzegorz Wojcik,Code licensed under the BSD License: http://www.kminek.pl/bsdlicense.txt*/
function Yetii(){this.defaults={id:null,active:1,interval:null,wait:null,persist:null,tabclass:'tab',activeclass:'active',callback:null,leavecallback:null};this.activebackup=null;for(var n in arguments[0]){this.defaults[n]=arguments[0][n]};this.getTabs=function(){var a=[];var b=document.getElementById(this.defaults.id).getElementsByTagName('*');var c=new RegExp("(^|\\s)"+this.defaults.tabclass.replace(/\-/g,"\\-")+"(\\s|$)");for(var i=0;i<b.length;i++){if(c.test(b[i].className))a.push(b[i])}return a};this.links=document.getElementById(this.defaults.id+'-nav').getElementsByTagName('a');this.listitems=document.getElementById(this.defaults.id+'-nav').getElementsByTagName('li');this.show=function(a){for(var i=0;i<this.tabs.length;i++){this.tabs[i].style.display=((i+1)==a)?'block':'none';if((i+1)==a){this.addClass(this.links[i],this.defaults.activeclass);this.addClass(this.listitems[i],this.defaults.activeclass+'li')}else{this.removeClass(this.links[i],this.defaults.activeclass);this.removeClass(this.listitems[i],this.defaults.activeclass+'li')}}if(this.defaults.leavecallback&&(a!=this.activebackup))this.defaults.leavecallback(this.defaults.active);this.activebackup=a;this.defaults.active=a;if(this.defaults.callback)this.defaults.callback(a)};this.rotate=function(a){this.show(this.defaults.active);this.defaults.active++;if(this.defaults.active>this.tabs.length)this.defaults.active=1;var b=this;if(this.defaults.wait)clearTimeout(this.timer2);this.timer1=setTimeout(function(){b.rotate(a)},a*1000)};this.next=function(){var a=(this.defaults.active+1>this.tabs.length)?1:this.defaults.active+1;this.show(a);this.defaults.active=a};this.previous=function(){var a=((this.defaults.active-1)==0)?this.tabs.length:this.defaults.active-1;this.show(a);this.defaults.active=a};this.previous=function(){this.defaults.active--;if(!this.defaults.active)this.defaults.active=this.tabs.length;this.show(this.defaults.active)};this.gup=function(a){a=a.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var b="[\\?&]"+a+"=([^&#]*)";var c=new RegExp(b);var d=c.exec(window.location.href);if(d==null)return null;else return d[1]};this.parseurl=function(a){var b=this.gup(a);if(b==null)return null;if(parseInt(b))return parseInt(b);if(document.getElementById(b)){for(var i=0;i<this.tabs.length;i++){if(this.tabs[i].id==b)return(i+1)}}return null};this.createCookie=function(a,b,c){if(c){var d=new Date();d.setTime(d.getTime()+(c*24*60*60*1000));var e="; expires="+d.toGMTString()}else var e="";document.cookie=a+"="+b+e+"; path=/"};this.readCookie=function(a){var b=a+"=";var d=document.cookie.split(';');for(var i=0;i<d.length;i++){var c=d[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(b)==0)return c.substring(b.length,c.length)}return null};this.contains=function(a,b,c){return a.indexOf(b,c)!=-1};this.hasClass=function(a,b){return this.contains(a.className,b,' ')};this.addClass=function(a,b){if(!this.hasClass(a,b))a.className=(a.className+' '+b).replace(/\s{2,}/g,' ').replace(/^\s+|\s+$/g,'')};this.removeClass=function(a,b){a.className=a.className.replace(new RegExp('(^|\\s)'+b+'(?:\\s|$)'),'$1');a.className.replace(/\s{2,}/g,' ').replace(/^\s+|\s+$/g,'')};this.tabs=this.getTabs();this.defaults.active=(this.parseurl(this.defaults.id))?this.parseurl(this.defaults.id):this.defaults.active;if(this.defaults.persist&&this.readCookie(this.defaults.id))this.defaults.active=this.readCookie(this.defaults.id);this.activebackup=this.defaults.active;this.show(this.defaults.active);var f=this;for(var i=0;i<this.links.length;i++){this.links[i].customindex=i+1;this.links[i].onclick=function(){if(f.timer1)clearTimeout(f.timer1);if(f.timer2)clearTimeout(f.timer2);f.show(this.customindex);if(f.defaults.persist)f.createCookie(f.defaults.id,this.customindex,0);if(f.defaults.wait)f.timer2=setTimeout(function(){f.rotate(f.defaults.interval)},f.defaults.wait*1000);return false}}if(this.defaults.interval)this.rotate(this.defaults.interval)};

/* jQuery Cycle Plugin Lite - Copyright (c) 2007-2009 M. Alsup - Version: 2.73 (04-NOV-2009)*/
(function(D){var A="Lite-1.0";D.fn.cycle=function(E){return this.each(function(){E=E||{};if(this.cycleTimeout){clearTimeout(this.cycleTimeout)}this.cycleTimeout=0;this.cyclePause=0;var I=D(this);var J=E.slideExpr?D(E.slideExpr,this):I.children();var G=J.get();if(G.length<2){if(window.console&&window.console.log){window.console.log("terminating; too few slides: "+G.length)}return }var H=D.extend({},D.fn.cycle.defaults,E||{},D.metadata?I.metadata():D.meta?I.data():{});H.before=H.before?[H.before]:[];H.after=H.after?[H.after]:[];H.after.unshift(function(){H.busy=0});var F=this.className;H.width=parseInt((F.match(/w:(\d+)/)||[])[1])||H.width;H.height=parseInt((F.match(/h:(\d+)/)||[])[1])||H.height;H.timeout=parseInt((F.match(/t:(\d+)/)||[])[1])||H.timeout;if(I.css("position")=="static"){I.css("position","relative")}if(H.width){I.width(H.width)}if(H.height&&H.height!="auto"){I.height(H.height)}var K=0;J.css({position:"absolute",top:0,left:0}).hide().each(function(M){D(this).css("z-index",G.length-M)});D(G[K]).css("opacity",1).show();if(D.browser.msie){G[K].style.removeAttribute("filter")}if(H.fit&&H.width){J.width(H.width)}if(H.fit&&H.height&&H.height!="auto"){J.height(H.height)}if(H.pause){I.hover(function(){this.cyclePause=1},function(){this.cyclePause=0})}D.fn.cycle.transitions.fade(I,J,H);J.each(function(){var M=D(this);this.cycleH=(H.fit&&H.height)?H.height:M.height();this.cycleW=(H.fit&&H.width)?H.width:M.width()});J.not(":eq("+K+")").css({opacity:0});if(H.cssFirst){D(J[K]).css(H.cssFirst)}if(H.timeout){if(H.speed.constructor==String){H.speed={slow:600,fast:200}[H.speed]||400}if(!H.sync){H.speed=H.speed/2}while((H.timeout-H.speed)<250){H.timeout+=H.speed}}H.speedIn=H.speed;H.speedOut=H.speed;H.slideCount=G.length;H.currSlide=K;H.nextSlide=1;var L=J[K];if(H.before.length){H.before[0].apply(L,[L,L,H,true])}if(H.after.length>1){H.after[1].apply(L,[L,L,H,true])}if(H.click&&!H.next){H.next=H.click}if(H.next){D(H.next).bind("click",function(){return C(G,H,H.rev?-1:1)})}if(H.prev){D(H.prev).bind("click",function(){return C(G,H,H.rev?1:-1)})}if(H.timeout){this.cycleTimeout=setTimeout(function(){B(G,H,0,!H.rev)},H.timeout+(H.delay||0))}})};function B(J,E,I,K){if(E.busy){return }var H=J[0].parentNode,M=J[E.currSlide],L=J[E.nextSlide];if(H.cycleTimeout===0&&!I){return }if(I||!H.cyclePause){if(E.before.length){D.each(E.before,function(N,O){O.apply(L,[M,L,E,K])})}var F=function(){if(D.browser.msie){this.style.removeAttribute("filter")}D.each(E.after,function(N,O){O.apply(L,[M,L,E,K])})};if(E.nextSlide!=E.currSlide){E.busy=1;D.fn.cycle.custom(M,L,E,F)}var G=(E.nextSlide+1)==J.length;E.nextSlide=G?0:E.nextSlide+1;E.currSlide=G?J.length-1:E.nextSlide-1}if(E.timeout){H.cycleTimeout=setTimeout(function(){B(J,E,0,!E.rev)},E.timeout)}}function C(E,F,I){var H=E[0].parentNode,G=H.cycleTimeout;if(G){clearTimeout(G);H.cycleTimeout=0}F.nextSlide=F.currSlide+I;if(F.nextSlide<0){F.nextSlide=E.length-1}else{if(F.nextSlide>=E.length){F.nextSlide=0}}B(E,F,1,I>=0);return false}D.fn.cycle.custom=function(K,H,I,E){var J=D(K),G=D(H);G.css({opacity:0});var F=function(){G.animate({opacity:1},I.speedIn,I.easeIn,E)};J.animate({opacity:0},I.speedOut,I.easeOut,function(){J.css({display:"none"});if(!I.sync){F()}});if(I.sync){F()}};D.fn.cycle.transitions={fade:function(F,G,E){G.not(":eq(0)").css("opacity",0);E.before.push(function(){D(this).show()})}};D.fn.cycle.ver=function(){return A};D.fn.cycle.defaults={timeout:4000,speed:1000,next:null,prev:null,before:null,after:null,height:"auto",sync:1,fit:0,pause:0,delay:0,slideExpr:null}})(jQuery)

/* jquery.cookie.js */
jQuery.cookie=function(a,b,c){if(typeof b!='undefined'){c=c||{};if(b===null){b='';c.expires=-1}var d='';if(c.expires&&(typeof c.expires=='number'||c.expires.toUTCString)){var e;if(typeof c.expires=='number'){e=new Date();e.setTime(e.getTime()+(c.expires*24*60*60*1000))}else{e=c.expires}d='; expires='+e.toUTCString()}var f=c.path?'; path='+(c.path):'';var g=c.domain?'; domain='+(c.domain):'';var h=c.secure?'; secure':'';document.cookie=[a,'=',encodeURIComponent(b),d,f,g,h].join('')}else{var j=null;if(document.cookie&&document.cookie!=''){var k=document.cookie.split(';');for(var i=0;i<k.length;i++){var l=jQuery.trim(k[i]);if(l.substring(0,a.length+1)==(a+'=')){j=decodeURIComponent(l.substring(a.length+1));break}}}return j}};

/* fadetoggle */
jQuery.fn.fadeToggle = function(speed, easing, callback) {
   return this.animate({opacity: 'toggle'}, speed, easing, callback);
};

/* equalHeight */
function equalHeight(group){var tallest=0;group.each(function(){var thisHeight=$(this).height();if(thisHeight>tallest){tallest=thisHeight;}});group.height(tallest);}

/* tablelink */
function tablelink(p1){$(p1).hover(function(){$(this).addClass("tr-over");},function(){$(this).removeClass("tr-over");}).click(function(){window.location=$(this).find("a").attr("href");return false;});}

/* --------- --------- --------- --------- --------- --------- */

function networkGELE() {
	$fixiesitesearchA = $("#site-search");
	$fixiesitesearchB = $("#site-search fieldset input");	
		$(".network-ge-all").hide();
				if($("#network-ge-link").length >= 1) {
						$("#network-ge-link").click(function () {
								networkGELEtoggle();
								if($(".network-ge-all").is(":visible")) {
									equalHeight($(".equal-ge"));
									$fixiesitesearchA.css({"position":"static","z-index":"1"});
									$fixiesitesearchB.css({"position":"static","z-index":"1"});
								}
								return false;
						});
				}
				// tasto chiudi
				$("li.close-network a").click(function () {
						networkGELEtoggle();
								$fixiesitesearchA.css({"position":"relative","z-index":"20"});
								$fixiesitesearchB.css({"position":"relative","z-index":"999"});
				});
				// tasto Esc
				$(document).keydown(function(e){
						if(e.which == 27) {
								if($(".network-ge-all").is(":visible")) {
								networkGELEtoggle();
								$fixiesitesearchA.css({"position":"relative","z-index":"20"});
								$fixiesitesearchB.css({"position":"relative","z-index":"999"});
								}
						}
				});
}
function networkGELEtoggle(){
	$(".network-ge-all").fadeToggle();
	$("#header ul.network li.gele li.network-ge a").toggleClass(void");
}

/* ricerca slide nella testata */
function sitesearch() {
	var option = "ul.site-search-option";
	var searchform = "#site-search";
	var input = "#site-input";
	var inputdefault = $(input).val();
	var radio = "view";
	var msgerr = "Inserite almeno una parola per la ricerca";
	var ref = "?ref=repsearch";
	
	var light = "#dbdbdb";
	var dark = "#222";

	$(input).attr("autocomplete","off");	
	/* opzioni toggle */
	$(input).bind("click keypress", function(){
		if ($(this).val() == inputdefault) {
			$(this).val("");
	}
		$(this).css({"color":dark});
		$(option).slideDown({height:"show",opacity:"show"},"fast");
	});
	
	$(searchform).bind("mouseleave", function(){
		if ($(input).val() == "") {
			$(input).val(inputdefault);
			$(input).css({"color":light});
		}
		$(option).slideUp({opacity:1.0},500).slideUp(375);
	});
	/* submit */
	$(searchform).submit(function() {
		radiochecked = $("input[name="+radio+"]:radio:checked").val();
		inputstatus = $(input).val();
		if(inputstatus == inputdefault || inputstatus == '' ) {
			alert(msgerr);
			return false;
		}
		
		switch (radiochecked) {
			case "web":
				action = "httpdisabled://ricerca.repubblica.it/web?q="+escape(inputstatus);
			break;
			default:
				action = "httpdisabled://ricerca.repubblica.it/repubblica?query="+escape(inputstatus)+"&amp;view="+radiochecked;
		}
		$(searchform).attr("action",action);
	});
} // /sitesearch

function searchform(form,p1,light,dark){
		typeof light == "undefined" ? light = "#dbdbdb" : light;
		typeof dark == "undefined" ? dark = "#222" : dark;

		p2 = $('input'+p1).val();

		// focus
	$('input'+p1).focus(function () {
		if (this.value ==  p2) {
				this.value = '';
				$('input'+p1).css({"color":dark});
		}
	});
	$('input'+p1).blur(function () {
		if (this.value == '') {
				this.value =  p2;
				$('input'+p1).css({"color":light});
		}
	});
	//submit
		$(form).submit(function() {
		if($('input'+p1).val() ==  p2 || $('input'+p1).val() == '' ) {
				alert("Inserire almeno una parola per la ricerca");
				return false;
				}
		})
}

// collapse della pubblicita
function collapse(delay) {
		typeof delay == "undefined" ? delay = 1000 : delay;
		window.setTimeout(function() {
				advminheight = "19";
				$(".adv").each(function () {
						if($(this).height() < advminheight) {
								$(this).hide();
						}
				});
		}, delay );
};
function ventiquattroore() {
				$('.ventiquattroore li.cycle ul:first').cycle({
				timeout: 10000,
				speed: 500,
				prev: '.cycle-nav-prev',
		next: '.cycle-nav-next',
		before: null,
				after: ventiquattroore_after,
				height: "100px",
				sync: 2,
				fit: 3,
				pause: 0,
				delay: 0,
				slideExpr: null
		});

		function ventiquattroore_after(curr, next, opts) {
				var index = $(this).parent().children().index(this);
				$('.cycle-nav-prev')[index == 0 ? 'hide' : 'show']();
				$('.cycle-nav-next')[index == opts.slideCount - 1 ? 'hide' : 'show']();
				$('.cycle-nav-index').text(index+1);
		}
}
/* inputform */
function inputform(form,p1,p2,light,dark){
	typeof light == "undefined" ? light = "#dbdbdb" : light;
	typeof dark == "undefined" ? dark = "#222" : dark;
	$('input'+p1+',input'+p2).css({"color":light});

	var p3 = $('input'+p1).val();
	var p4 = $('input'+p2).val();

// focus
	$('input'+p1).focus(function () {
	if (this.value ==  p3) {
	this.value = '';
	$('input'+p1).css({"color":dark});
	}
	});

	$('input'+p1).blur(function () {
	if (this.value == '') {
	this.value =  p3;
	$('input'+p1).css({"color":light});
	}
	});

	$('input'+p2).focus(function () {
	if (this.value ==  p4) {
	this.value = '';
	$('input'+p2).css({"color":dark});
	}
	});
	$('input'+p2).blur(function () {
	if (this.value == '') {
	this.value =  p4;
	$('input'+p2).css({"color":light});
	}
	});

	//submit
	$(form).submit(function() {
		if($('input'+p1).val() ==  p3 || $('input'+p1).val() == '' ) {
			alert("Inserire almeno una parola per la ricerca");
			return false;
		}
	})
}

function tab(div,tabattivo,intervallo) {
	if(typeof tabattivo == 'undefined') tabattivo = 1;
	if(typeof intervallo == 'undefined') intervallo = null;
	if($("#"+div+"-nav").length == 1) {
		new Yetii({ id: div, active: tabattivo, interval: intervallo});
	} else {
		$("#"+div).hide();
	}
}


/* reptv */
function repubblicatv(){
$(".multimedia li a").each(function(i) {
	$(this).append('<span class="media-icon-video">Video</span>');
  });
}


/* --------- --------- --------- BORSA--------- --------- --------- */
var recuperacookie ="";
var recuperacookieSport ="";
var myJSONObject;
var myJSONObjectSport;




/* start sportjson*/

function showTeamNoCookie(){
	if (myJSONObjectSport !=  null && myJSONObject.length != 0){
		var squadra= myJSONObjectSport[0].squadra;
		var titolo= myJSONObjectSport[0].titolo;
		var sommario= myJSONObjectSport[0].sommario;
		var url= myJSONObjectSport[0].url;
		var categoryUrl = myJSONObjectSport[0].categoryurl;
		$(".fromsport-team a").html("Serie A");
		$(".fromsport-articles a").html(titolo);
		//$(".sport_selection p").html(sommario);
		$(".fromsport-team a").attr("class","fromsport-default");
		$(".fromsport-team a").attr("href",categoryUrl);
		$(".fromsport-articles a").attr("href",url);
		$(".fromsport-articles a").attr("title",titolo.replace('"','&quot;'));
		$(".fromsport .other a").attr("href",categoryUrl);
	}else{
		$('#error-message-sport').html("Ci sono problemi nel caricamento<br />delle squadre;. Riprovate pi&ugrave; tardi.");
		$(".sport_error").show();
	}
	
	
	
}


function showTeamWithCookie(cookievalue){
	if (myJSONObjectSport !=  null && myJSONObject.length != 0){
		var squadra= myJSONObjectSport[cookievalue].squadra;
		var squadraLabel= myJSONObjectSport[cookievalue].squadralabel;
		var titolo= myJSONObjectSport[cookievalue].titolo;
		var sommario= myJSONObjectSport[cookievalue].sommario;
		var url= myJSONObjectSport[cookievalue].url;
		var categoryUrl = myJSONObjectSport[cookievalue].categoryurl;
		$(".fromsport-team a").html(squadraLabel);
		$(".fromsport-articles a").html(titolo);
		//$(".sport_selection p").html(sommario);
		$(".fromsport-team a").attr("class","team-"+squadra);
		$(".fromsport-team a").attr("href",categoryUrl);
		$(".fromsport-articles a").attr("href",url);
		$(".fromsport-articles a").attr("title",titolo.replace('"','&quot;'));
		$(".fromsport .other a").attr("href",categoryUrl);
	}else{
		$('#error-message-sport').html("Ci sono problemi nel caricamento<br />delle squadre;. Riprovate pi&ugrave; tardi.");
		$(".sport_error").show();
	}
}


function fillTeamWithCookie(checkcookie){
	var radioBoxString ="";
	if (myJSONObjectSport !=  null && myJSONObjectSport.length != 0){
		for(var a = 1, b = myJSONObjectSport.length; a < b; a++) {
			var squadra= myJSONObjectSport[a].squadra;
			var titolo= myJSONObjectSport[a].titolo;
			var sommario= myJSONObjectSport[a].sommario;
			var url= myJSONObjectSport[a].url;
			var radioName = "sport-check";
			radioBoxString = radioBoxString + "<input type=\"radio\" name=\""+radioName+"\" value=\""+a; //+"\"> "+squadra+"<br>"

			if (a == checkcookie){
				radioBoxString = radioBoxString + "\" checked />";
			}else{
				radioBoxString = radioBoxString +"\" />";
			}
			radioBoxString = radioBoxString+squadra+"<br>";

 		}
	}
	return radioBoxString;
	
}

function fillTeamNoCookie(){
	var radioBoxString ="";
	if (myJSONObjectSport !=  null && myJSONObjectSport.length != 0){
		for(var a = 1, b = myJSONObjectSport.length; a < b; a++) {
			var squadra= myJSONObjectSport[a].squadra;
			var titolo= myJSONObjectSport[a].titolo;
			var sommario= myJSONObjectSport[a].sommario;
			var url= myJSONObjectSport[a].url;
			var radioName = "sport-check";
			radioBoxString = radioBoxString + "<input type=\"radio\" name=\""+radioName+"\" value=\""+a+"\"> "+squadra+"<br>"

 		}
	}
	return radioBoxString;
	
	
	}

function sportjson(){
	if (typeof jsonStringSport != 'undefined' && jsonStringSport !=  ""){
			myJSONObjectSport = jsonStringSport;
			sportInit();
			sport();
	}else{
			$(".fromsport").hide();
			$(".fromsport1").hide();
			$('.error-message-sport').html("Ci sono problemi nel caricamento<br />dele squadre. Riprovate pi&ugrave; tardi.");
			$(".sport_error").show();
	}
}

function sportInit(){
	$(".fromsport1").hide();
	$(".sport_error").hide();
	var recuperacookieSport="";
	if($.cookie("repubblica_sport_squadra")!=null && $.cookie("repubblica_sport_squadra")!="") {
		recuperacookieSport =  $.cookie("repubblica_sport_squadra");
		showTeamWithCookie(recuperacookieSport);
	}else{
		showTeamNoCookie();
	}
	$(".fromsport").show();
	$("a.personalizza-box-sport").live("click",function () {
		var checkcookie="";
		var checkString;
		if($.cookie("repubblica_sport_squadra")!=null && $.cookie("repubblica_sport_squadra")!="") {
			checkcookie =  $.cookie("repubblica_sport_squadra");
			//alert("fillCheckBoxWithCookie-----PPPPPP");
			checkString = fillTeamWithCookie(checkcookie);
		}else{
			checkString = fillTeamNoCookie();
		}

		if (checkString != ""){
			$('.check-index-sport').html(checkString);
			$(".fromsport").hide();
			$(".fromsport1").show();
		}else{
			$('.error-message-sport').html("Ci sono problemi nel caricamento<br />delle squadre. Riprovate pi&ugrave; tardi.");
			$(".sport_error").show();
		}
	});
	$("a.personalizza-box-close-sport").live("click",function () {
		sportInit();
	});
}

function sport(){
 	$(".sport_error").hide();
 	$("#sport-submit").submit(function() {
				var val = $("input[name='sport-check']:checked").val();
				if (val != null && val!= ""){
					$.cookie('repubblica_sport_squadra', val,{ expires: 365});
				}else{
					$.cookie('repubblica_sport_squadra', null,{ expires: -1});
				}
				sportInit();
				return false;
		});
}



/* end sportjson*/



function fillTableNoCookie(){
 if (myJSONObject !=  null && myJSONObject.length != 0){
		var trString=""
		for(var a = 0, b = myJSONObject.length; a < b; a++) {
			var denominazione = myJSONObject[a].denominazione;
			var url = myJSONObject[a].url;
			var ultimo = myJSONObject[a].ultimo;
			var variazionePerc = myJSONObject[a].variazionePerc;
			var numberPerc = Number(variazionePerc.replace(",","."));
			var icon = "&bull;";
			var classCss = "borsa-stable";
			if (numberPerc > 0){
				icon = "+";
				classCss = "borsa-up";
			}else if(numberPerc < 0){
				icon = "-";
				classCss = "borsa-down";
			}

			trString = trString + '<tr class="'+classCss+'"><td><a href="'+url+'">'+denominazione+'</a></td><td>'+ultimo+'</td><td class="borsa-var">'+variazionePerc+'</td><td class="borsa-icon">'+icon+'</td></tr>\n';
		}
		$('.borsa  tbody').html(trString);
		$(".borsa  tr:gt(3)").hide();
	}else{
		$('#error-message').html("Ci sono problemi nel caricamento<br />degli indici di borsa;. Riprovate pi&ugrave; tardi.");
		$(".borsa_error").show();
	}

}
function fillTableWithCookie(cookieValue){
	var currentTagTokens = cookieValue.split( "," );
	lastValue = currentTagTokens[currentTagTokens.length-1];
	var trString=""
	if  (myJSONObject != null && myJSONObject.length!=0 && lastValue <= myJSONObject.length){
		for (var i=0; i < currentTagTokens.length; i++){
			var indexElement = currentTagTokens[i];
			var denominazione = myJSONObject[indexElement].denominazione;
			var url = myJSONObject[indexElement].url;
			var ultimo = myJSONObject[indexElement].ultimo;
			var variazionePerc = myJSONObject[indexElement].variazionePerc;


			//alert('denominazione:'+ myJSONObject.indici[a].denominazione);
			var numberPerc = Number(variazionePerc.replace(",","."));
			var icon = "&bull;";
			var classCss = "borsa-stable";
			if (numberPerc > 0){
				icon = "+";
				classCss = "borsa-up";
			}else if(numberPerc < 0){
				icon = "-";
				classCss = "borsa-down";
			}

			trString = trString + "<tr class=\""+classCss+"\"><td><a href=\""+url+"\">"+denominazione+"</a></td><td>"+ultimo+"</td><td class=\"borsa-var\">"+variazionePerc+"</td><td class=\"borsa-icon\">"+icon+"</td></tr>\n";

		}
		$('.borsa tbody').html(trString);

	}else{
		$('#error-message').html("Ci sono problemi nel caricamento<br />degli indici di borsa;. Riprovate pi&ugrave; tardi.");
		$(".borsa_error").show();
	}



}
function fillCheckBoxNoCookie(){
	var checkBoxString ="";
	if (myJSONObject !=  null && myJSONObject.length != 0){
		for(var a = 0, b = myJSONObject.length; a < b; a++) {
			var denominazione = myJSONObject[a].denominazione;
			var url = myJSONObject[a].url;
			var ultimo = myJSONObject[a].ultimo;
			var variazionePerc = myJSONObject[a].variazionePerc;

			var numberPerc = Number(variazionePerc.replace(",","."));
			var icon = "&bull;";
			var classCss = "borsa-stable";
			if (numberPerc > 0){
				icon = "+";
				classCss = "borsa-up";
			}else if(numberPerc < 0){
				icon = "-";
				classCss = "borsa-down";
			}

			checkBoxString = checkBoxString + "<input type=\"checkbox\" name=\"borsa-check\" value=\""+a+"\"/>"+denominazione+"<br/>"

 		}
	}
	return checkBoxString;

}
function fillCheckBoxWithCookie(checkcookie){
	var checkBoxString ="";
	var currentTagTokens = checkcookie.split( "," );
	var denominazione;
	var url;
	var ultimo;
	var variazionePerc;
	if  (myJSONObject != null && myJSONObject.length!=0 && lastValue <= myJSONObject.length){
 		for(var a = 0, b = myJSONObject.length; a < b; a++) {
			denominazione = myJSONObject[a].denominazione;
			url = myJSONObject[a].url;
			ultimo = myJSONObject[a].ultimo;
			variazionePerc = myJSONObject[a].variazionePerc;
			checkBoxString = checkBoxString + "<input type=\"checkbox\" name=\"borsa-check\" value=\""+a;
			var isChecked = false;
			for (var i = 0, j = currentTagTokens.length; i < j; i++){
   			if (typeof currentTagTokens[i] != 'undefined' && currentTagTokens[i] !=  "" && currentTagTokens[i] == a){
				isChecked = true;
				break;

				}
			}

			if (isChecked){
				checkBoxString = checkBoxString + "\" checked />";
			}else{
				checkBoxString = checkBoxString +"\" />";
			}
			checkBoxString = checkBoxString+denominazione+"<br/>";
 		}
	}
	return checkBoxString;


}

function borsajson() {
	myJSONObject = jsonString;
	if (typeof jsonString != 'undefined' && jsonString !=  ""){
		myJSONObject = jsonString;
		borsaInit();
		borsa();
	}else{
		$(".borsa").hide();
		$(".borsa1").hide();
		$('.error-message').html("Ci sono problemi nel caricamento<br />degli indici di borsa. Riprovate pi&ugrave; tardi.");
		$(".borsa_error").show();
	}
}
function borsa(){
 	$(".borsa_error").hide();
 	$("#borsa-submit").submit(function() {
				var allVals = [];
				$("input[name='borsa-check']:checked").each(
		function() {
			allVals.push($(this).val());
				}
				);

				if (allVals != null && allVals.length !=0){
		$.cookie('repubblica_borsa', allVals,{ expires: 365});
				} else {
		$.cookie('repubblica_borsa', null,{ expires: -1});
				}
				borsaInit();
				return false;
		});
}

function borsaInit(){
	$(".borsa1").hide();
	$(".borsa_error").hide();
	var recuperacookie="";
	if($.cookie("repubblica_borsa")!=null && $.cookie("repubblica_borsa")!="") {
		recuperacookie =  $.cookie("repubblica_borsa");
		fillTableWithCookie(recuperacookie);
	}else{
		fillTableNoCookie();
	}
	$(".borsa").show();
	$("a.personalizza-box").live("click",function () {
		var checkcookie="";
		var checkString;
		if($.cookie("repubblica_borsa")!=null && $.cookie("repubblica_borsa")!="") {
			checkcookie =  $.cookie("repubblica_borsa");
			//alert("fillCheckBoxWithCookie-----PPPPPP");
			checkString = fillCheckBoxWithCookie(checkcookie);
		}else{
			checkString = fillCheckBoxNoCookie();
		}

		if (checkString != ""){
			$('.check-index').html(checkString);
			$(".borsa").hide();
			$(".borsa1").show();
		}else{
			$('.error-message').html("Ci sono problemi nel caricamento<br />degli indici di borsa. Riprovate pi&ugrave; tardi.");
			$(".borsa_error").show();
		}
	});
	$("a.personalizza-box-close").live("click",function () {
		borsaInit();
	});
}
/* --------- --------- --------- --------- --------- --------- */



function oroscopo(){
  var SegnoRandom = ['ariete','toro','gemelli','cancro','leone','vergine','bilancia','scorpione','sagittario','capricorno','acquario','pesci'];
  var IndiceRandom = Math.floor(Math.random() * SegnoRandom.length);
   
  if($.cookie("repubblica_oroscopo")) {
		cOroscopo = $.cookie("repubblica_oroscopo").split('|')
		oroscopo_data(cOroscopo[0],cOroscopo[1]);
	} else {
		oroscopo_data('oroscopo-'+SegnoRandom[IndiceRandom], IndiceRandom);
	}  

	// click cambia segno
	$(".oroscopo dl dd a").click(function() {
		if($(".oroscopo-detail:visible")) {
			$(this).html("");
			$(".oroscopo-detail").fadeOut(500, function () {
				$(".oroscopo-list").fadeIn(100);
			});
		} else {
			$(".oroscopo-list").fadeOut(500, function () {
				$(".oroscopo-detail").fadeIn(100);
			});			
			}
	});

	// click sul segno
	$(".oroscopo-list a").click(function() {
		segno = $(this).parent().attr("class");
		indice = $(this).parent().index();
		oroscopo_data(segno,indice);
		 $(".oroscopo-list").fadeOut(500, function () {
	   $(".oroscopo-detail").fadeIn(100);
	   $.cookie("repubblica_oroscopo",segno + "|" + indice, { expires: 30});
	  });
	});
}

function oroscopo_data(segno,indice) {
	if(typeof jsonStringOroscopo!='undefined') {
	 	$(".oroscopo-detail h4").attr("class",segno).html(jsonStringOroscopo[indice].nome).css("text-transform","capitalize");
	 	$(".oroscopo-detail p").html(jsonStringOroscopo[indice].descrizione);
	 	$(".oroscopo-detail li.other a").attr("href",jsonStringOroscopo[indice].link);
		$(".oroscopo dl dd a").html("[Cambia segno]");
	}
}

/*-------------TROVACINEMA--------------*/
var defaultSingleCinemaVal = 'oppure inserisci un cinema';

function upMouse(ref, value_img)  { 	
		ref.style.backgroundImage = "url(img/tc/"+value_img+")";
}
function downMouse(ref, value_img) {	
		ref.style.backgroundImage = "url(img/tc/"+value_img+")";
}
function overMouse(ref, value_img) {	
		ref.style.backgroundImage = "url(img/tc/"+value_img+")";		
}
function outMouse(ref, value_img) {
		ref.style.backgroundImage = "url(img/tc/"+value_img+")";		
}





// FORM RICERCA FILM IN HOMEPAGE
//
//
// Rollover bottone principale submit

function overMouse2(ref) {
		ref.style.backgroundImage = "url(img/tc/btn_form_invito_d.gif)";
}
function outMouse2(ref) {
		ref.style.backgroundImage = "url(img/tc/btn_form_invito.gif)"
}
//
// MOUSEOVER E MOUSEOUT voci menu
function menu_onmouseover(aDiv) {
		aDiv.parentNode.childNodes[1].src='img/tc/dot_item_list_h.gif';
}
function menu_onmouseout(aDiv) {
		aDiv.parentNode.childNodes[1].src='img/tc/dot_item_list.gif';
}
//
//


// TEMP VIEW ALL BIOG
function viewAllBiog(){
		var allBioDiv = document.getElementById('allBio');
		var smallBioDiv = document.getElementById('smallBio');
		smallBioDiv.style.display = 'none';
		allBioDiv.style.display = 'block';
}

function viewSmallBiog(){
		var allBioDiv = document.getElementById('allBio');
		var smallBioDiv = document.getElementById('smallBio');
		smallBioDiv.style.display = 'block';
		allBioDiv.style.display = 'none';
}



//
//
//
// ************************************************************************
// FORM Ricerca Film/Cinema
// ************************************************************************
//

		
		
function resetInputField(txt) {
		if(txt == "") {
				document.getElementById('allFilm').value = "true";
				document.getElementById('allCinema').value = "false";
				document.getElementById('singleCinema').value = "oppure inserisci un cinema";   
		}
}   	
function resetSelectMenu(value) {   	
		if (value == "") {
				document.getElementById('allCinema').value = "false";
				document.getElementById('allFilm').value = "true";
				document.getElementById('singleCinema').value = "oppure inserisci un cinema";   				
		}
}
// Esecuzione della ricerca
function dosearch(context_url) {
		
	/* COSTRUISCE LA URL DELLA PAGINA DI RICERCA */
	var dove = "";
	var siglaProv = "";
	var nomeProv = "";
	var tipo = "";
	var filmId = "";
	var titoloFilm = "";
	var cinema = "";
	var baseUrl = context_url;

	//dove
	if (document.getElementById('searchprv_cit').checked == true)
   	dove = "citta";
	else
   	dove = "provincia";

	//siglaProv
	siglaProv = document.getElementById('prv').options[document.getElementById('prv').selectedIndex].value

	//nomeProv
	nomeProv = document.getElementById('prv').options[document.getElementById('prv').selectedIndex].text

	//tipo
	if (document.getElementById('allFilm').value == "true")
   	tipo = "film";
	else
   	tipo = "cinema";

	//film_id e titoloFilm
	if (document.getElementById('film').options[document.getElementById('film').selectedIndex].value != ""){
		tipo = "film";
		filmId = document.getElementById('film').options[document.getElementById('film').selectedIndex].value;
		titoloFilm = document.getElementById('film').options[document.getElementById('film').selectedIndex].text;
	}

	//sostituisce in titoloFilm tutti gli spazi con '-'
	while (titoloFilm.indexOf(' ') != -1){
		titoloFilm = titoloFilm.replace(" ","-");
	}

	//sostituisce in nomeProv tutti gli spazi con '-'
	while (nomeProv.indexOf(' ') != -1){
		nomeProv = nomeProv.replace(" ","-");
	}

	//cinema
	if (document.getElementById('singleCinema').value != defaultSingleCinemaVal)
		cinema = document.getElementById('singleCinema').value;

	//sostituisce in cinema tutti gli spazi con '+'
	while (cinema.indexOf(' ') != -1){
		cinema = cinema.replace(" ","+");
	}

	//test params
	var params = "dove=" + dove + "\n" +
 				"siglaProv=" + siglaProv + "\n" +
 				"nomeProv=" + nomeProv + "\n" +
 				"tipo=" + tipo + "\n" +
 				"filmId=" + filmId + "\n" +
 				"titoloFilm=" + titoloFilm + "\n" +
 				"cinema=" + cinema;
	//alert(params);

	var url = "oggialcinema/" + dove + "/" + nomeProv + "/" + siglaProv + "/" + tipo
	if (tipo == "cinema"){
		if (cinema != "")
			url = url + "/" + cinema
	}

	if (tipo == "film"){
		if (filmId != "")
			url = url + "/" + filmId + "/" + titoloFilm;
	}
	//alert(url);
	//window.location = url;
	url = baseUrl + "/" + url.toLowerCase();
	url = addParametersToUrl(url,"ref=HRBT-1");
	document.location = url;
	return true;
}

function SetCookie (name,value,expires,path,domain,secure) {
	document.cookie = name + "=" + escape (value) +
	((expires) ? "; expires=" + expires.toGMTString() : "") +
	((path) ? "; path=" + path : "") +
	((domain) ? "; domain=" + domain : "") +
	((secure) ? "; secure" : "");
}


function updateCookie(name,value,expires,path,domain,secure) {
	var cookie=getCookie(name);
	if( cookie!=null )
		SetCookie(name,"",-1,path,domain,secure);
	SetCookie(name,value,expires,path,domain,secure);
}


// Logica esclusione bottoni
function click_allFilm() {
	document.getElementById('film').value = "";
	document.getElementById('film').selected = false;
	document.getElementById('singleCinema').value = defaultSingleCinemaVal;
};
function click_allCinema() {
	//alert(document.getElementById('film').options[document.getElementById('film').selectedIndex].text)
	//document.getElementById('film').options[0].selected = true;
	document.getElementById('film').value = "";
	document.getElementById('film').selected = false;
		document.getElementById('singleCinema').value = defaultSingleCinemaVal;
};
function click_singleFilm() {	
	document.getElementById('allFilm').value = "false";
		document.getElementById('allCinema').value = "false";
		document.getElementById('singleCinema').value = defaultSingleCinemaVal;
};
function click_singleCinema(aDiv) {
		aDiv.value='';
		document.getElementById('allFilm').value = "false";
		document.getElementById('allCinema').value = "false";
	document.getElementById('film').value = ""; 
	document.getElementById('film').selected = true;
};

// Validazione Form di ricerca cinema/film in Homepage e setting cookies
function checkMainSearchForm() {
		if(document.getElementById('prv').value == '' ) {
				alert("Devi selezionare una citta' o una provincia");
				return false;
		}

		var sentinella = false;
		if( document.getElementById('allFilm').value == "true" )
				sentinella = true;
		if( document.getElementById('allCinema').value == "true" )
				sentinella = true;
	
	if( document.getElementById('film').options[document.getElementById('film').selectedIndex].value != '' )
				sentinella = true;

		document.getElementById('film_id').value = document.getElementById('film').value;
		if(document.getElementById('singleCinema').value != defaultSingleCinemaVal) document.getElementById('kwcinema').value = document.getElementById('singleCinema').value;

		if(!sentinella && (document.getElementById('singleCinema').value == '' || document.getElementById('singleCinema').value == defaultSingleCinemaVal) ) {
				alert("Devi inserire il nome di un cinema o selezionare un altra opzione");
				return false;
		} else if(document.getElementById('singleCinema').value.length < 3) { 
				alert("Il nome del cinema deve essere composto di almeno 3 caratteri");
				return false;
		}

	var expdate = new Date ();
		var dove = "";
	var prv = "";
		var per = "";
	var film = "";
	var cinema = "";
	expdate.setTime (expdate.getTime() + (30 * 24 * 60 * 60 * 1000));

		if (document.getElementById('searchprv_cit').checked) {
				dove = "0";
		} else if (document.getElementById('searchprv_prov').checked) {
				dove = "1";
		}

	prv = document.getElementById('prv').options[document.getElementById('prv').selectedIndex].value;

	if (document.getElementById('allFilm').value == "true") {
				per = "0";
		} else if  (document.getElementById('allCinema').value == "true") {
				per = "1";
		} else {
				per = "none";
		}
		cinema = document.getElementById('singleCinema').value;
	//sostituisce in cinema tutti gli spazi con '+'
	while (cinema.indexOf(' ') != -1){
		cinema = cinema.replace(" ","+");
	}

	film = document.getElementById('film').options[document.getElementById('film').selectedIndex].value;
	if (film == '') film= -1;
	var valueCookie = dove + "#" + prv + "#" + per + "#" + film + "#" + cinema;
	SetCookie("trovacinema", valueCookie, expdate, "/");
	return true;
}


// Legge i cookies e valorizza i campi della form di ricerca
function readSearchFormCookies() {
	var trovacinemaCookie = getCookie("trovacinema");
		if(trovacinemaCookie != null) {
			var tokens = trovacinemaCookie.split("#");  
				var dove = tokens[0];
				var prv = tokens[1];
				var per = tokens[2];
				var film = tokens[3];
				var cinema = tokens[4];
				while (cinema.indexOf('+') != -1){
						cinema = cinema.replace("+"," ");
				}
		}
				if (!dove) {
						document.getElementById('searchprv_cit').checked = true;
				} else if (dove == 0) {
						document.getElementById('searchprv_cit').checked = true;
				} else if (dove == 1) {
						document.getElementById('searchprv_prov').checked = true;
				} 
		
				if (!prv) {
						document.getElementById('prv').options[0].selected = true;
				} else {
						var prvlist = document.getElementById('prv').options;
						for (var i = 0; i<prvlist.length; i++){
								if (prvlist[i].value == prv){
										document.getElementById('prv').options[i].selected = true;
										break;
								}
						}		
				}
		
				if (!per) {
						document.getElementById('allFilm').value = "true";
						document.getElementById('allCinema').value = "false";
				} else if(per == "none") {
						document.getElementById('allFilm').value = "false";
						document.getElementById('allCinema').value = "false";
				} else if(per == 0) {
						document.getElementById('allFilm').value = "true";
						document.getElementById('allCinema').value = "false";
				} else if(per == 1) {
						document.getElementById('allFilm').value = "false";
						document.getElementById('allCinema').value = "true";
				}
		
				if (!film) {
						document.getElementById('film').options[0].selected = true;
				} else {
						var filmlist = document.getElementById('film').options;
						for (var i = 0; i<filmlist.length; i++){
								if (filmlist[i].value == film){
										document.getElementById('film').options[i].selected = true;
										break;
								}
						}
				}
		
				if (cinema && cinema != defaultSingleCinemaVal){
						document.getElementById('singleCinema').value = cinema;
				}   	
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length,c.length));
	}
	return null;
}

/*
function setCookie (name,value,expires,path,domain,secure) {
		document.cookie = name + "=" + escape (value) +
		((expires) ? "; expires=" + expires.toGMTString() : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
}
*/

function searchOnCity(){
		document.getElementById('searchprv_cit').checked = true;
		document.getElementById('searchprv_prov').checked = false;
		if( checkMainSearchForm() ) document.search_film.submit();
}

function searchOutCity(){
		document.getElementById('searchprv_cit').checked = false;
		document.getElementById('searchprv_prov').checked = true;
		if( checkMainSearchForm() ) document.search_film.submit();
}

/* Invio Form invita un amico */   
function composeMail() {
		var mittente = document.getElementById("invita_mittente").value;
		var destinatario = document.getElementById("invita_destinatario").value;
		var filmIndex = document.getElementById('invita_film').selectedIndex;
		var film = document.getElementById('invita_film')[filmIndex].value;
		var email = document.getElementById("invita_mailDest").value;
		var oggetto = "Hai ricevuto un invito al cinema da "+mittente+" - TrovaCinema.it";  	
		var messaggio = document.getElementById("invita_msg").value;
		if ((mittente == "") || (mittente == "undefined")) {
				alert("Devi inserire il tuo nome"); 	
		} else if ((destinatario == "") || (destinatario == "undefined")) {
				alert("Devi inserire il nome del destinatario");		
		} else if ((email.indexOf("@") == (-1)) || (email == "") || (email == "undefined")) {
				alert("Devi inserire un indirizzo email valido");   
		} else if (film == "") {
				alert("Devi scegliere un film");  							
		} else {
				location.href = "mailto:" + email + "?Subject=" + oggetto + "&Body= " + ""+mittente +" ti ha invitato al cinema a vedere '"+film+"'.   	Vai su  www.trovacinema.it per scoprire in quali cinema della tua citta' viene programmato il film che ti e' stato consigliato.   "+messaggio;
		}
}

// **************************************************
// **************************************************
// Controllo implosione posizioni pubblicitarie
// **************************************************
// **************************************************
//
function old_OAS_VIS(oas) { 	
		
		var position = oas.split(",");
		var positionlenght = position.length;
		var memory_left = new Boolean(false);
		var memory_right = new Boolean(false);
		for (var i=0; i<positionlenght; i++) {  		
				
				var agt = navigator.userAgent.toLowerCase();
				var div = document.getElementById("oas-"+position[i]);
				
				if (agt.indexOf("msie") != -1) {
						h_style = div.offsetHeight;
				} else {
						h_style = document.defaultView.getComputedStyle(div, '').getPropertyValue("height");	
						check = h_style.split('px');
						h_style = check[0];
				}
				if(h_style<11 && position[i] != 'oas-Top' && position[i] != 'oas-Right') {  			
						div.style.display = 'none';
				} else if(h_style<20 && position[i] == 'Top') {
						div.style.display = 'none';
				} else if(h_style<30 && position[i] == 'Right') {   	
						div.style.display = 'none';
				}
		}   			

}
function OAS_VIS_MAIN(divList, promoHome, right) {  							
		for (var a = 0; a < divList.length; a ++) { 											
				heightCurrElem = $("#"+divList[a]).height();
				if(heightCurrElem<11 && divList[a] != 'oas-Top' && divList[a] != 'oas-Right') { 						
 						$("#"+divList[a]).css("display","none");
				} else if(heightCurrElem<20 && divList[a] == 'oas-Top') {
						$("#"+divList[a]).css("display","none");
				} else if(heightCurrElem>100 && divList[a] == 'oas-Middle1') {  
						$("#"+divList[a]).css("height","248px");
						$("#"+divList[a]).after('<div class="h10"></div>');
				}
		}
		if(promoHome == true) {
				OAS_VIS_PROMOHOME();
		}
		if(right == true) {
				OAS_VIS_RIGHT();				
		}
} 
function OAS_VIS_PROMOHOME() {
		boxImagesArray = new Array();
		boxImagesArray = ["oas-Right1","oas-Right2","oas-Left1","oas-Left2"];
		testHeightBoxes = new Boolean();
		testHeightBoxes = false;		
		for(var yy = 0; yy < boxImagesArray.length; yy ++) {			
				if($("#"+boxImagesArray[yy]).height() > 50) {
						//populated
						testHeightBoxes = true;
				} else {
						//empty 				
						$("#"+boxImagesArray[yy]).css("display", "none");
				}   			
		}
		if(testHeightBoxes == false) {
				return false;
		} else if(testHeightBoxes == true) {
				//$("#oas-Left2").after('<div class="h10"></div>');
				
				return true;
		}
}
function OAS_VIS_RIGHT() {
		if($("#oas-Right").height() > 500) {
				//tight
				var test = $.ajax({ 
						type: "POST", 
						url: "components/common/"+pageRight+".jsp?type=tight", 
						timeout: 5000,  
						error: function() {}, 
						success: function(msg){$("#newsOas").html(msg);$("#newsOas").css("margin-right", "8px")}
				});
		} else {
				//large
				$("#oas-Right").css("display","none");
				var test = $.ajax({ 
						type: "POST", 
						url: "components/common/"+pageRight+".jsp?type=large", 
						timeout: 5000, 
						error: function() {}, 
						success: function(msg){$("#newsOas").html(msg)}
				});
		}   									
}

function checkSondaggioForm() { 
		validState = new Boolean();
		validState = false;
		var idQuestions_arr = idQuestions.split(",");
		//alert(idQuestions_arr.length);
		if(idQuestions_arr.length>0) {
				for(var t = 0; t < idQuestions_arr.length; t ++) {
						validState = false;
						//alert($("input[name='answer_id"+idQuestions_arr[t]+"']").length);
						$("input[name='answer_id"+idQuestions_arr[t]+"']").each(function() {
										if($(this).attr("checked") == true) {
												validState = true;
										}
								}  
						);
						
						if(validState == true) {								
						} else {
								alert("Devi selezionare almeno una risposta per domanda");
								return false;   
						}
				}
				if(validState == true) {
						return true;
				} else {
						return false;   
				}
		} else {
				return false;   
		}
}

function checkImageDims() {
		if($("img.fotogal").height() > 600) {   
				rapporto = $("img.fotogal").width()/$("img.fotogal").height();  		
				$("img.fotogal").css("height", "600px");				
				$("img.fotogal").css("width", (600*rapporto)+"px");
				$("img.fotogal").css("visibility", "visible");  		
				//alert(rapporto);
		} else if($("img.fotogal").width() > 670) {
				rapporto = $("img.fotogal").height()/$("img.fotogal").width();  		
				$("img.fotogal").css("height", (670*rapporto)+"px");			
				$("img.fotogal").css("width", "670px");
				$("img.fotogal").css("visibility", "visible");
				//alert(rapporto);
		} else {
				$("img.fotogal").css("visibility", "visible");
		}
}   	



/* blocco annunci
---------------------------*/


// cycle annunci
jQuery.fn.extend({scramble:function(){var i=this.size();if(!i)return this;while(--i){var j=Math.floor(Math.random()*(i+1));var tmp1=this.slice(i,i+1);this.slice(j,j+1).after(tmp1).insertAfter(tmp1);}
return this;}})
function annuncicycle() {
		$('ul.annunci-case li').scramble();
		$('ul.annunci-case').cycle({
		timeout: 6000,
		speed: 500,
		sync: 1,
		pause: 1,
		height: "95px"
	});
}

// dati

var listaregioni = { "italia" : "Scegli la regione","abruzzo" : "Abruzzo","basilicata" : "Basilicata","calabria" : "Calabria",	"campania" : "Campania","emiliaromagna" : "Emilia-Romagna","friuliveneziagiulia" : "Friuli-Venezia Giulia","lazio" : "Lazio","liguria" : "Liguria","lombardia" : "Lombardia","marche" : "Marche","molise" : "Molise","piemonte" : "Piemonte","puglia" : "Puglia","sardegna" : "Sardegna","sicilia" : "Sicilia","toscana" : "Toscana","trentinoaltoadige" : "Trentino-Alto Adige","umbria" : "Umbria","valledaosta" : "Valle d'Aosta","veneto" : "Veneto","estero" : "Estero" }

var listaregionilavoro = { "":"Scegli la regione","italia":"Italia","abruzzo":"Abruzzo","basilicata":"Basilicata","calabria":"Calabria","campania":"Campania","emilia_romagna":"Emilia-Romagna","friuli_venezia_giulia":"Friuli-Venezia Giulia","lazio":"Lazio","liguria":"Liguria","lombardia":"Lombardia","marche":"Marche","molise":"Molise","piemonte":"Piemonte","puglia":"Puglia","sardegna":"Sardegna","sicilia":"Sicilia","toscana":"Toscana","trentino_alto_adige":"Trentino-Alto Adige","umbria":"Umbria","valle_d_aosta":"Valle d'Aosta","veneto":"Veneto","estero":"Estero" }

var listamarcheauto = {	"":"Qualsiasi","alfa_romeo":"Alfa Romeo","aston_martin":"Aston Martin","audi":"Audi","autobianchi":"Autobianchi","bmw":"Bmw","bentley":"Bentley","cadillac":"Cadillac","caterham":"Caterham","chevrolet":"Chevrolet","chrysler":"Chrysler","citroen":"Citroen","corvette":"Corvette","dacia":"Dacia","daewoo":"Daewoo","daihatsu":"Daihatsu","dodge":"Dodge","dr":"Dr Auto","ferrari":"Ferrari","fiat":"Fiat","ford":"Ford","general_motors":"General Motors","gm":"GM","honda":"Honda","hyundai":"Hyundai","hummer":"Hummer","infiniti":"Infiniti","iveco":"Iveco","isuzu":"Isuzu","jaguar":"Jaguar","jeep":"Jeep","kia":"Kia","lada":"Lada","lamborghini":"Lamborghini","lancia":"Lancia","land_rover":"Land Rover","lexus":"Lexus","ligier":"Ligier","lotus":"Lotus","mahindra":"Mahindra","maybach":"Maybach","maserati":"Maserati","mazda":"Mazda","mercedes":"Mercedes","mg":"Mg","mini":"Mini","mitsubishi":"Mitsubishi","nissan":"Nissan","opel":"Opel","peugeot":"Peugeot","porsche":"Porsche","renault":"Renault","rover":"Rover","rolls_royce":"Rolls-Royce","saab":"Saab","seat":"Seat","skoda":"Skoda","smart":"Smart","ssangyong":"Ssangyong","subaru":"Subaru","suzuki":"Suzuki","tata":"Tata","toyota":"Toyota","volkswagen":"Volkswagen","volvo":"Volvo" }

var listamarchemoto = {"":"Qualsiasi","adly":"Adly","algat":"Algat","alkro":"Alkro","ancillotti":"Ancillotti","aprilia":"Aprilia","aspes":"Aspes","atala":"Atala","axy":"Axy","bajaj":"Bajaj","benelli":"Benelli","betamotor":"Betamotor","bimota":"Bimota","bmw":"Bmw","borile":"Borile","buell":"Buell","bultaco":"Bultaco","cagiva":"Cagiva","ccm":"Ccm","custombike":"Custombike","cz":"Cz","daelim":"Daelim","demm":"Demm","derbi":"Derbi","di-blasi":"Di Blasi","dnepr":"Dnepr","ducati":"Ducati","emme":"Emme","epc":"Epc","erad":"Erad","fantic-motor":"Fantic Motor","fpm-puch":"Fpm Puch","garelli":"Garelli","gas-gas":"Gas Gas","general-cycles":"General Cycles","gerosa":"Gerosa","ghezzi-brian":"Ghezzi-Brian","gilera":"Gilera","gitan":"Gitan","gori":"Gori","harley-davidson":"Harley Davidson","honda":"Honda","hrd":"Hrd","husaberg":"Husaberg","husqvarna":"Husqvarna","hyosung":"Hyosung","ialvet":"Ialvet","italjet":"Italjet","jawa":"Jawa","kawasaki":"Kawasaki","keeway":"Keeway","kl":"Kl","kram-it":"Kram It","ktm":"Ktm","kymco":"Kymco","laverda":"Laverda","lem-motor":"Lem Motor","linhai":"Linhai","lml":"Lml","magni":"Magni","maico":"Maico","mako-shark":"Mako Shark","malaguti":"Malaguti","malanca":"Malanca","mbk":"Mbk","mmt":"Mmt","mondial":"Mondial","montesa":"Montesa","morini":"Morini","moto-guzzi":"Moto Guzzi","moto-morini":"Moto Morini","motom":"Motom","motor-union":"Motor Union","motron":"Motron","munch":"Munch","mv-agusta":"Mv Agusta","mz":"Mz","norton":"Norton","ossa":"Ossa","peripoli":"Peripoli","peugeot":"Peugeot","pgo":"Pgo","piaggio":"Piaggio","polar-motor":"Polar Motor","royal-enfield":"Royal Enfield","sachs":"Sachs","sacom":"Sacom","scorpa":"Scorpa","she-lung":"She Lung","sherco":"Sherco","siamoto":"Siamoto","simonini":"Simonini","solex":"Solex","sparta-sachs":"Sparta-Sachs","suzuki":"Suzuki","swm":"Swm","sym":"Sym","tgb":"Tgb","tgm":"Tgm","tm-moto":"Tm Moto","tomos":"Tomos","triumph":"Triumph","ural":"Ural","vectrix":"Vectrix","velocifero":"Velocifero","vertemati":"Vertemati","villa":"Villa","vor":"Vor","voxan":"Voxan","yamaha":"Yamaha","young-rider":"Young Rider","zundapp":"Zundapp","altra_marca":"Altro"}

var listaprovincie_italia = {}
var listaprovincie_abruzzo = 		{ "laquila":"L'Aquila","chieti":"Chieti","pescara":"Pescara","teramo":"Teramo"}
var listaprovincie_basilicata = 	{ "matera":"Matera","potenza":"Potenza" }
var listaprovincie_calabria = 		{"catanzaro":"Catanzaro","cosenza":"Cosenza","crotone":"Crotone","reggiocalabria":"Reggio Calabria","vibovalentia":"Vibo Valentia"}
var listaprovincie_campania = 		{"avellino":"Avellino","benevento":"Benevento","caserta":"Caserta","napoli":"Napoli","salerno":"Salerno"}
var listaprovincie_emiliaromagna = 	{"bologna":"Bologna","ferrara":"Ferrara","forlicesena":"Forli-Cesena","modena":"Modena","parma":"Parma","piacenza":"Piacenza","ravenna":"Ravenna","reggioemilia":"Reggio Emilia","rimini":"Rimini"}
var listaprovincie_friuliveneziagiulia = {"gorizia":"Gorizia","pordenone":"Pordenone","trieste":"Trieste","udine":"Udine"}
var listaprovincie_lazio = 			{"frosinone":"Frosinone","latina":"Latina","rieti":"Rieti","roma":"Roma","viterbo":"Viterbo"}
var listaprovincie_liguria = 		{"genova":"Genova","imperia":"Imperia","laspezia":"La Spezia","savona":"Savona"}
var listaprovincie_lombardia = 		{"bergamo":"Bergamo","brescia":"Brescia","como":"Como","cremona":"Cremona","lecco":"Lecco","lodi":"Lodi","milano":"Milano","mantova":"Mantova","pavia":"Pavia","sondrio":"Sondrio","varese":"Varese"}
var listaprovincie_marche = 		{"ancona":"Ancona","ascolipiceno":"Ascoli Piceno","fermo":"Fermo","macerata":"Macerata","pesarourbino":"Pesaro e Urbino"}
var listaprovincie_molise = 		{"campobasso":"Campobasso","isernia":"Isernia"}
var listaprovincie_piemonte = 		{"alessandria":"Alessandria","asti":"Asti ","biella":"Biella","cuneo":"Cuneo","novara":"Novara","torino":"Torino","verbania":"Verbania","vercelli":"Vercelli"}
var listaprovincie_puglia = 		{"bari":"Bari","barlettaandriatrani":"Barletta-Andria-Trani","brindisi":"Brindisi","foggia":"Foggia","lecce":"Lecce","taranto":"Taranto"}
var listaprovincie_sardegna = 		{"cagliari":"Cagliari","carboniaiglesias":"Carbonia e Iglesias","mediocampidano":"Medio Campidano","nuoro":"Nuoro","ogliastra":"Ogliastra","olbiatempio":"Olbia-Tempio","oristano":"Oristano","sassari":"Sassari"}
var listaprovincie_sicilia = 		{"agrigento":"Agrigento","caltanissetta":"Caltanissetta","catania":"Catania","enna":"Enna","messina":"Messina","palermo":"Palermo","ragusa":"Ragusa","siracusa":"Siracusa","trapani":"Trapani"}
var listaprovincie_toscana = 		{"arezzo":"Arezzo","firenze":"Firenze","grosseto":"Grosseto","livorno":"Livorno","lucca":"Lucca","massacarrara":"Massa Carrara","pisa":"Pisa","pistoia":"Pistoia","prato":"Prato","siena":"Siena"}
var listaprovincie_trentinoaltoadige = {"bolzano":"Bolzano","trento":"Trento"}
var listaprovincie_umbria = 		{"perugia":"Perugia","terni":"Terni"}
var listaprovincie_valledaosta =	{"aosta":"Aosta"}
var listaprovincie_veneto = 		{"belluno":"Belluno","padova":"Padova","rovigo":"Rovigo","treviso":"Treviso","venezia":"Venezia","verona":"Verona","vicenza":"Vicenza"}
var listaprovincie_estero = 		{}

var listaarealavoro = {
	"acquisti":"Acquisti e logistica",
	"coltivazione_allevamento_produzione":"Agricoltura e allevamento",
	"altro.1":"Altro",
	"amministrazione_e_controllo_finanza":"Area amministrazione, controllo, impiegati",
	"legale":"Area legale",
	"assistenza_clienti":"Assistenza clienti, call center, telemarketing",
	"marketing_e_vendite_commerciale":"Commerciale, vendite",
	"varie_e_consulenza":"Consulenza, libera professione e varie",
	"direzione_generale":"Direzione generale, top management",
	"erogazione_del_servizio":"Erogazione di servizi",
	"area_affari_fidi_titoli":"Finanza e credito, banche",
	"gestione_impianti":"Gestione impianti e e organizzazione di cantiere",
	"it_sistemi_informativi":"IT, sistemi informativi",
	"manutenzione":"Manutenzione ed operai",
	"comunicazione_e_pubbliche_relazioni":"Marketing e comunicazione",
	"neolaureati_neodiplomati":"Neolaureati - neodiplomati",
	"produzione":"Produzione",
	"qualita_sicurezza_e_ambiente":"Qualit&agrave; e Sicurezza",
	"regioni_autonomie_locali_ed_enti_pubblici":"Regioni, autonomie locali ed enti pubblici",
	"ricerca_e_sviluppo_area_tecnica":"Ricerca e sviluppo/area tecnica",
	"personale_ed_organizzazione":"Risorse Umane e organizzazione",
	"direzione_medico_sanitaria":"Sanit&agrave;, pers.tecnico, medico, scientifico, operativo",
	"scuola_formazione_e_ricerca":"Scuola, formazione e ricerca",
	"segreteria":"Staff, segreteria, servizi al cliente, servizi generali",
	"turismo_ed_esercizi_pubblici":"Turismo ed esercizi pubblici",
	"vigilanza_e_pubblica_sicurezza":"Vigilanza e pubblica sicurezza"
	}	


function fillOption(lista,modulo) {
	$.each(lista, function(val, text) {
		$(modulo).append($("<option></option>").val(val).html(text));
	});
}

function fillAnnunciSelect(form, firstNode){
	fillOption(listaregioni,form);
}

function fillAnnunciLavoroSelect(form){
	fillOption(listaregionilavoro,form);
}

function fillAutoMarcaSelect(form){
	fillOption(listamarcheauto,form);
}

function fillMotoMarcaSelect(form){
	fillOption(listamarchemoto,form);
}

function fillAnnunciLavoroAreaSelect(form){
	fillOption(listaarealavoro,form);
}

function fillAnnunciProvinciaSelect(form, key) {
	fillOption(window["listaprovincie_"+$("#form-services-case-regione").val()],"#form-services-case-provincia");
}

/* Funzione Annunci */
function annunci() {
	var baseUrl = "httpdisabled://annunci.repubblica.it/";
	var place = "";
	var model = "";
	var type = "";
	var filter = "";
	var url = "";
	traceParameters = "utm_source=hp.repubblica.it&utm_medium=vetrine&utm_campaign=intragruppo";
    fillAnnunciSelect("#form-services-case-regione", true);
	$("#form-services-case-provincia").append($("<option></option>").val("").html(" - "));
	fillAnnunciProvinciaSelect("#form-services-case-provincia", $("#form-services-case-regione").val());
    fillAnnunciSelect("#form-services-motori-regione", true);
	fillAnnunciLavoroSelect("#form-services-lavoro-regione");
	fillAnnunciSelect("#form-services-enti-regione", true);
	fillAutoMarcaSelect("#form-services-motori-marca");

	//province
	$("#form-services-case-regione").change(function() {
		$("#form-services-case-provincia").find('option').remove();
		fillAnnunciProvinciaSelect("#form-services-case-provincia", $("#form-services-case-regione").val());
	});

	$("#submit-button-case").live("click",function () {
		if ($('#form-services-case-provincia').val()) {
			place = $('#form-services-case-provincia').val()+'/';
		}else{
			place = $('#form-services-case-regione').val()+'/';
		}
		filter = $('#tipo_casa:checked').val();
		if(filter == 'vacanza'){
			type = 'immobiliare/affitto-vacanze';
		}else{
			type = 'immobiliare/-/contratto-' + filter;
		}
		url = baseUrl + place + type;
		url = addParametersToUrl(url, traceParameters+"&ref=HRBA-1");
		$(location).attr('href',url);
	});
	
    $("#tipo_motori").live("change",function () {
        filter = $('#tipo_motori:checked').val();
        $("#form-services-motori-marca").find('option').remove();
        if(filter == 'auto'){
            fillAutoMarcaSelect("#form-services-motori-marca");
        }else{
            fillMotoMarcaSelect("#form-services-motori-marca");
        }
    });

	$("#submit-button-motori").live("click",function () {
		place= $('#form-services-motori-regione').val()+'/';
		filter = $('#tipo_motori:checked').val();
		model = $('#form-services-motori-marca').val();
		type = 'motori/' + filter + '/-/marca-' + model;
		url = baseUrl + place + type;
		url = addParametersToUrl(url, traceParameters+"&ref=HRBA-2");
		$(location).attr('href',url);
	});

	$("#form-services-lavoro-regione").change(function() {
		if($('#form-services-lavoro-regione').val()){
			fillAnnunciLavoroAreaSelect("#form-services-lavoro-area");
		}else{
			$("#form-services-lavoro-area").find('option').remove();
		}
		
	});

	$("#submit-button-lavoro").live("click",function () {
		url = "httpdisabled://miojob.repubblica.it/offerte/lavoro/cerca";
		place= $('#form-services-lavoro-regione').val();
		if(place != ''){
			filter = '/regione-' + place;
			type = '/area_name-' + $('#form-services-lavoro-area').val() + filter;
			url = url + type;
		}
		url = addParametersToUrl(url, traceParameters+"&ref=HRBA-3");
		$(location).attr('href',url);

	});

	$("#submit-button-enti").live("click",function () {
		place= 'lista/'+$('#form-services-enti-regione').val()+'/';
		type = 'immobiliare/-/contratto-vendo/stato-astagiudiziaria';
		url = baseUrl + place + type;
		url = addParametersToUrl(url, traceParameters+"&ref=HRBA-4");
		$(location).attr('href',url);
	});
}

function smallresolution(width) {
	width = parseInt(width);
	if (width < 1024) {
		$("body").addClass("fix1024");
	} else {
		$("body").removeClass("fix1024");
	}
}

function addParametersToUrl(url, parameters) {
    terminal = "&";
    if(url.indexOf("?")==-1) {
        terminal = "?";
    }
    if(url.indexOf(parameters)==-1)
      url += terminal+parameters;
    return url; 
}

function iniziativeeditoriali() {
	$('ul.iniziativeeditoriali li.cycle ul:first').cycle({
		timeout: 8000,
		speed: 800,
		before: null,
		sync: 2
	});
}


function sottospalla(delay){
	typeof delay == "undefined" ? delay = 1500 : delay;
	advminheight = "19";
	window.setTimeout(function() {
		 if($(".adv-middle2").height() < advminheight) {
			$(".network").addClass("noadv");
			$(".network .label").hide();
			$(".sottospalla:first .last").attr("class","articles");
		 }
	}, delay );
}

function rubrichecollapse(){ 
			if(failamedia('.adv-middle1', 240, 260) && failamedia('.adv-middle2', 240, 260) ) {
				$('.blog-autori ul:first > li').slice(-6).css('display','none');
				$('.blog-autori ul > li').slice(-6).css('display','none');
				$('.blog-autori.two-column').after('<li class="other"><a href="javascript:void(0)" title="" class="toggle-rubriche">+ Espandi lista blog</a></li>');
				listaaperta = 0;
				$('.toggle-rubriche').bind('click', function(){
					if(listaaperta == 0){
						$('.blog-autori ul:first > li').slice(-6).css('display','block');
						$('.blog-autori ul > li').slice(-6).css('display','block');
						$(this).html('- Riduci lista blog');
						listaaperta = 1;
				}
				else { 
					$('.blog-autori ul:first > li').slice(-6).css('display','none');
					$('.blog-autori ul > li').slice(-6).css('display','none');
					$(this).html('+ Espandi lista blog');
					listaaperta = 0;
      			}
				});
			}	 
			
			if(failamedia('.adv-middle1', 590, 610) ) {
				$('.blog-autori ul').css('display','none');
				$('.blog-autori.two-column').after('<li class="other"><a href="javascript:void(0)" title="" class="toggle-rubriche">+ Espandi lista blog</a></li>');
				$(".toggle-rubriche").toggle(
					function () {
						$(this).html('- Nascondi lista blog')
						$('.blog-autori ul').toggle();
    				},
					function () {
						$(this).html('+ Espandi lista blog')
						$('.blog-autori ul').toggle();
    				});
				}	 
		
		function failamedia (element,min,max) {
			altezza = $(element).height();
			if( altezza >= min && altezza <= max) {return true;}
			else
			{return false;}
		}
}


/*RANDOM PLUGIN*/
(function($){jQuery.fn.random=function(num) {num = parseInt(num);if (num > this.length) return this.pushStack(this);if (! num || num < 1) num = 1;var to_take = new Array();this.each(function(i) { to_take.push(i); });var to_keep = new Array();var invert = num > (this.length / 2);if (invert) num = this.length - num;for (; num > 0; num--) {for (var i = parseInt(Math.random() * to_take.length); i > 0; i--){to_take.push(to_take.shift());}to_keep.push(to_take.shift());}if (invert) to_keep = to_take;return this.filter(function(i) { return $.inArray(i, to_keep) != -1; });};}) (jQuery);
function ilmiolibro() {
	$(".ilmiolibro .noborder").random(1).show();
}