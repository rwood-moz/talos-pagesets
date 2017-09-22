/* 103540/common/external-scripts/jquery-libraries/jcarousellite.js */
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,overrideWidth:null,vertical:false,circular:true,visible:3,start:0,scroll:2,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var running=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var div=$(this),ul=$("ul",div),tLi=$("li",ul),tl=tLi.size(),v=o.visible,pause=$(".pause",div.closest('.slideshow')),play=$(".play",div.closest('.slideshow'));if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v;}
var li=$("li",ul),itemLength=li.size(),curr=o.start;div.css("visibility","visible");li.css({overflow:"hidden","float":o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});div.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var liSize=o.vertical?height(li):width(li);var ulSize=liSize*itemLength+500;var divSize=o.overrideWidth?o.overrideWidth:liSize*v;li.css({'padding':'0 10px 0 10px','border-right':'1px solid #aaa','border-bottom-width':'0','width':li.width(),'height':getHighest(li)});ul.css(sizeCss,ulSize+"px").css(animCss,-(curr*liSize)-0);div.css(sizeCss,divSize+"px");div.children('div.hd').css('width',divSize+"px")
if(o.btnPrev)
$(o.btnPrev).click(function(){return go(curr-o.scroll);});if(o.btnNext)
$(o.btnNext).click(function(){return go(curr+o.scroll);});if(o.btnGo)
$.each(o.btnGo,function(i,val){$(val).click(function(){return go(o.circular?o.visible+i:i);});});if(o.mouseWheel&&div.mousewheel)
div.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll);});var autoInterval;function startAuto(){autoInterval=setInterval(function(){go(curr+o.scroll);},o.auto+o.speed);};function stopAuto(){clearInterval(autoInterval);};if(o.auto){if(o.hoverPause){pause.click(function(){stopAuto();pause.hide();play.show();});play.click(function(){startAuto();play.hide();pause.show();});startAuto();}};function vis(){return li.slice(curr).slice(0,v);};function go(to){if(!running){if(o.beforeStart)
o.beforeStart.call(this,vis());if(o.circular){if(to<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*liSize)+"px");curr=to==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll;}else if(to>=itemLength-v+1){ul.css(animCss,-((v)*liSize)+"px");curr=to==itemLength-v+1?v+1:v+o.scroll;}else curr=to;}else{if(to<0){if(curr=0){return;}else{curr=0;}}else if(to>itemLength-v){if(curr==itemLength-v){return;}else{curr=itemLength-v;}}else{curr=to;}}
running=true;ul.animate(animCss=="left"?{left:-(curr*liSize)}:{top:-(curr*liSize)},o.speed,o.easing,function(){if(o.afterEnd)
o.afterEnd.call(this,vis());running=false;});if(!o.circular){if(curr==0){$(o.btnPrev).addClass("disabled");}else{$(o.btnPrev).removeClass("disabled");}
if(curr==itemLength-v){$(o.btnNext).addClass("disabled");}else{$(o.btnNext).removeClass("disabled");}}}
return false;};});};function css(el,prop){return parseInt($.css(el[0],prop))||0;};function width(el){return el[0].offsetWidth+css(el,'marginLeft')+css(el,'marginRight')+21;};function height(el){return el[0].offsetHeight+css(el,'marginTop')+css(el,'marginBottom');};function getHighest(el){var theHighest=0;$.each(el,function(i,val){if(val.offsetHeight>theHighest){theHighest=val.offsetHeight;};});return parseInt(theHighest);};})(jQuery);
/* 103540/common/scripts/convertJSONtoAd.js */
convertJSONtoAd = function (imgTarget, linkText, trailText, sponJSON, title, slot) {
	if (sponJSON && typeof(sponJSON) === 'object') {
		imgTarget.attr('src', sponJSON.ad.image).attr('alt', sponJSON.ad['alt-image-text']).parent().attr('href', sponJSON.ad.link);
		linkText.attr('href', sponJSON.ad.link).text(sponJSON.ad.linkText);
		trailText.text(sponJSON.ad.description);
		if (sponJSON.ad.title) {
			title.text(sponJSON.ad.title);
		}
		jQ('.json-features.' + slot).show();
	}
};
/* 103540/common/scripts/ticker.js */
ensurePackage('guardian.r2');

guardian.r2.newsTicker = function () {
	var speed = 3000; //change every 5 secs; TAKE INTO ACCOUNT THE FADE TIME THOUGH!
	var count = 0;
	var trendCount = 0;
	var paused = false;
	var newsHeadlines = jQ('ul#ticker > li'); //get the headlines
	var trends = jQ('li.trending ul li');
	var trendTimer;
	var tickerStrap = jQ("#newsticker .ticker-heading strong");
	var instance = this;
	
	this.changeStory = function(direction, hover) {
		var currentItem = jQ(newsHeadlines).eq(count);
		var newItem;

		timer = window.clearTimeout(timer);
		switch (direction) {
			
			case 'back' :  //previous
				if(paused) { 
					paused = false; //make sure we unpause when clicking next or previous
				}
				//decrement the count; go to the end if we've reached the first one
				(count === 0) ? count = newsHeadlines.length-1 : count--;
				//get the previous item 
				newItem = newsHeadlines.eq(count);
				if(newItem.hasClass('trending')) {
					changeStrap('Current topics:');
					trends.show();
				} else {
					changeStrap('Breaking news:');
				}
				break;		

			case 'pause' : //next
				if(!paused) {
					paused = true;
					if(currentItem.hasClass('trending')) {
						trendTimer = window.clearTimeout(trendTimer);
						trends.show();
					}
					break;
				} else {
					changeStrap('Breaking news:');
					paused = false;
				}
				

			default : 	//next - or the default
				if(paused) { 
					paused = false;
				}
				//increment the count; set to 0 if we're at the end
				(count === newsHeadlines.length-1) ? count = 0 : count++;
				//get the next one
				newItem = newsHeadlines.eq(count);
				if(direction === "forward") {
					if(newItem.hasClass('trending')) {
						changeStrap('Current topics:');
						trends.show();
					} else {
						changeStrap('Breaking news:');
					}
				}

				break;
		}
		if(!paused) {
			if( newItem.hasClass('trending') && (!direction || direction =="pause") ) {
				currentItem.fadeOut(250, function() {
					trends.hide();
					changeStrap('Current topics:');
					newItem.fadeIn(250);
					trendingTicker();
				});
				
			} else {
				currentItem.fadeOut(250, function() {
					newsHeadlines.hide();
					newItem.fadeIn(250);				
				});
				timer = window.setTimeout(function() {instance.changeStory();}, speed);
			}
		}
	};

	this.hoverPause = function(ev) {
		if(ev=="in") {
			if(trendTimer) {
				trendTimer = window.clearTimeout(trendTimer);
				trends.show();
			} else if(timer) { 
				timer = window.clearTimeout(timer);
			}
		} else {
			timer = window.setTimeout(function() {instance.changeStory('pause');}, 2000);
		}
	};

	function trendingTicker() {
		trends.eq(trendCount).fadeIn(250);
		
		if(trendCount < trends.length) {
			trendCount++;
			trendTimer = window.setTimeout(trendingTicker, speed);
		} else {
			//go back to the main ticker
			trendCount = 0;
			instance.changeStory();
			trends.hide();
			changeStrap('Breaking news:');			
		}
	}
	
	function changeStrap(newText) {
		if(tickerStrap.text() != newText) {
			tickerStrap.hide();
			tickerStrap.text(newText);
			tickerStrap.fadeIn(250);
		}
	}
	
	//set up event handlers
	jQ('p#ticker-controls input').click( function() {		
		var direction = jQ(this).attr('alt');
		instance.changeStory(direction);
	});

	newsHeadlines.hover(function() { 
		instance.hoverPause('in');
	})
	.hover(function() {
		instance.hoverPause('out');
	});
	
	//set the timer running
	var timer = window.setTimeout ( function() {instance.changeStory();}, speed);
};	

jQ(document).ready(function() {
	var myTicker = new guardian.r2.newsTicker();
});

