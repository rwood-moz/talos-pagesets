
/* Copyright (c) 2007 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://voidsource.org/licenses/mit-license.php) 
 * and GPL (http://voidsource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.0.2
 * Requires jQuery 1.1.3+
 * Docs: http://docs.jquery.com/Plugins/livequery
 */
(function($){$.extend($.fn,{livequery:function(type,fn,fn2){var self=this,q;if($.isFunction(type))fn2=fn,fn=type,type=undefined;$.each($.livequery.queries,function(i,query){if(self.selector==query.selector&&self.context==query.context&&type==query.type&&(!fn||fn.$lqguid==query.fn.$lqguid)&&(!fn2||fn2.$lqguid==query.fn2.$lqguid))return(q=query)&&false;});q=q||new $.livequery(this.selector,this.context,type,fn,fn2);q.stopped=false;$.livequery.run(q.id);return this;},expire:function(type,fn,fn2){var self=this;if($.isFunction(type))fn2=fn,fn=type,type=undefined;$.each($.livequery.queries,function(i,query){if(self.selector==query.selector&&self.context==query.context&&(!type||type==query.type)&&(!fn||fn.$lqguid==query.fn.$lqguid)&&(!fn2||fn2.$lqguid==query.fn2.$lqguid)&&!this.stopped)$.livequery.stop(query.id);});return this;}});$.livequery=function(selector,context,type,fn,fn2){this.selector=selector;this.context=context||document;this.type=type;this.fn=fn;this.fn2=fn2;this.elements=[];this.stopped=false;this.id=$.livequery.queries.push(this)-1;fn.$lqguid=fn.$lqguid||$.livequery.guid++;if(fn2)fn2.$lqguid=fn2.$lqguid||$.livequery.guid++;return this;};$.livequery.prototype={stop:function(){var query=this;if(this.type)this.elements.unbind(this.type,this.fn);else if(this.fn2)this.elements.each(function(i,el){query.fn2.apply(el);});this.elements=[];this.stopped=true;},run:function(){if(this.stopped)return;var query=this;var oEls=this.elements,els=$(this.selector,this.context),nEls=els.not(oEls);this.elements=els;if(this.type){nEls.bind(this.type,this.fn);if(oEls.length>0)$.each(oEls,function(i,el){if($.inArray(el,els)<0)$.event.remove(el,query.type,query.fn);});}else{nEls.each(function(){query.fn.apply(this);});if(this.fn2&&oEls.length>0)$.each(oEls,function(i,el){if($.inArray(el,els)<0)query.fn2.apply(el);});}}};$.extend($.livequery,{guid:0,queries:[],queue:[],running:false,timeout:null,checkQueue:function(){if($.livequery.running&&$.livequery.queue.length){var length=$.livequery.queue.length;while(length--)$.livequery.queries[$.livequery.queue.shift()].run();}},pause:function(){$.livequery.running=false;},play:function(){$.livequery.running=true;$.livequery.run();},registerPlugin:function(){$.each(arguments,function(i,n){if(!$.fn[n])return;var old=$.fn[n];$.fn[n]=function(){var r=old.apply(this,arguments);$.livequery.run();return r;}});},run:function(id){if(id!=undefined){if($.inArray(id,$.livequery.queue)<0)$.livequery.queue.push(id);}else
$.each($.livequery.queries,function(id){if($.inArray(id,$.livequery.queue)<0)$.livequery.queue.push(id);});if($.livequery.timeout)clearTimeout($.livequery.timeout);$.livequery.timeout=setTimeout($.livequery.checkQueue,20);},stop:function(id){if(id!=undefined)$.livequery.queries[id].stop();else
$.each($.livequery.queries,function(id){$.livequery.queries[id].stop();});}});$.livequery.registerPlugin('append','prepend','after','before','wrap','attr','removeAttr','addClass','removeClass','toggleClass','empty','remove');$(function(){$.livequery.play();});var init=$.prototype.init;$.prototype.init=function(a,c){var r=init.apply(this,arguments);if(a&&a.selector)r.context=a.context,r.selector=a.selector;if(typeof a=='string')r.context=c||document,r.selector=a;return r;};$.prototype.init.prototype=$.prototype;})(jQuery);
/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}

			fx.elem.style[attr] = "rgb(" + [
				Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
			].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
	
})(jQuery);

/*
 *
 * @package	DT Spinner
 * @version	1.0 <Aug 19, 2009>
 *
 * @uses master_all.css  -  Required CSS style
 *
 * Creates a spinning DomainTools ajax-loaddisableder in a specified location.
 *
 * @param boolean toggle Choose whether to show (true) or hide (false) the spinner.
 *
 * @example
 * $("#div").dtSpinnerToggle();
 *
 */

(function($) {

	$.fn.dtSpinnerToggle = function(toggle) {

		// run for each call
		return this.each(function() {

			this.toggle = (typeof toggle !== "undefined" && toggle != "" && toggle == true) ? "block" : "none";

			var spinner = $(".ajax-loaddisableder");

			if (spinner.length > 0) {

				spinner.css("display",this.toggle);

			} else {

				$(this).append("<div class='ajax-loaddisableder'></div>");
				$(".ajax-loaddisableder").css("display",this.toggle);
			}

		});

	}

})(jQuery);

/*
 * Called like so:
 * wStatusBar.update();
 */

var wStatusBar = {

	update: function ()
	{
	    // Make an ajax call to the constructor to get state
	    jQuery.ajax({
	        url: "?",
	        type: "POST",
	        data: "ajax=wStatusBar&call=getState",
	        async: true,
	        cache: false,
	        dataType: "json",
	        success: function(state)
	        {
	            if(state.isCartVisible)
				{
	                jQuery('#wStatusBar-cart').show();
	                var cart_wording = " Item in Cart";
	                if(state.cartItemCount > 1){
	                	cart_wording = " Items in Cart";
	                }
	                jQuery('#wStatusBar-itemcount').html(state.cartItemCount+cart_wording);
	            } else
	                jQuery('#wStatusBar-cart').hide();

				if (state.isUpgradeVisible)
				{
	                jQuery('#wStatusBar-aliascontainer').show();
	                jQuery('#wStatusBar-upgrade').html(state.upgradeMessage+' |');
	            } else
	                jQuery('#wStatusBar-aliascontainer').hide();

				if (state.isUserAliasVisible)
				{
	                jQuery('#wStatusBar-aliascontainer').show();
	                jQuery('#wStatusBar-useralias').html(state.userAlias);
	            } else
	                jQuery('#wStatusBar-aliascontainer').hide();

				jQuery('#wStatusBar-login').html(state.loginMessage);
	        }
	    });
	}
};
jQuery(function(){
	//set the sub level (2nd level) of the nav
	jQuery('#'+active_page+'-'+active_sub_page+'-page').addClass('level2-active');
});

/**
 * A class to handle functions of the navigation search.
 **/
var NavSearch = {
	/*
	 * Format the search field and set color
	 */
	clearField: function (element) {
		if(jQuery(element).attr('value') == jQuery(element).attr('defaultValue')) {
			jQuery(element).attr('value','');
			jQuery(element).css('color','#000000');
		}
	},

	/*
	 * Restore default value and color to search field
	 */
	restoreField: function (element) {
		if(jQuery(element).attr('value') == "") {
			jQuery(element).attr('value',jQuery(element).attr('defaultValue'));
			jQuery(element).css('color','#999999');
		}
	},

	/*
	 * Perform search with given input and selected location
	 */
	performSearchBoxSearch: function () {
		var searchType = jQuery('#dt-search-input-search-type').val();
		var searchTerm = jQuery('#dt-search-input-search-terms').val();

		if(searchTerm === '' || searchTerm === 'Enter search term...') {
			return false;
		}

		var new_url = searchType + searchTerm;
		setTimeout(function() {
			window.location = new_url;
		}, 0);

		return false;
	}
};
/*
 * Copyright (c) 2010 DomainTools.com
 * http://www.domaintools.com/
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://voidsource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

;(function($) {
	$.flyout = {version: '1.0.0'};
	var $flyout, $flyoutInner, $flyoutBody, $flyoutOuter, $flyoutTitle, $flyoutArrows, $flyoutWait, imgCount;

	$.fn.flyout = function(js, options) {
		if (typeof js == 'object') {
			options = js;
			js = null;
		}
		if (js == 'destroy') {
			return this.removeData('thisInfo').unbind('.flyout');
		}

		return this.each(function(index) {
			var link = this, $this = $(this);

			// support metadata plugin (v1.0 and 2.0)
			var opts = $.extend(true, {}, $.fn.flyout.defaults, options || {}, $.metadata ? $this.metadata() : $.meta ? $this.data() : {});

			// start out with no contents (for ajax activation)
			var flyoutContents = false;
			var cluezIndex = +opts.cluezIndex;
			$this.data('thisInfo', {title: link.title, zIndex: cluezIndex});
			var isActive = false, closeOnDelay = 0;

			// create the flyout divs
			if (!$('#flyout').length) {
					$(['<div id="flyout">',
						'<div id="flyout-outer">',
							'<div id="flyout-top" class="back-right-image">',
								'<div id="flyout-top-fill" class="back-left-image"></div>',
							'</div>',
							'<div id="flyout-body">',
								'<h2 id="flyout-title"></h2>',
								'<div id="flyout-inner"></div>',
							'</div>',
							'<div id="flyout-bottom" class="back-right-image">',
								'<div id="flyout-bottom-fill" class="back-left-image"></div>',
							'</div>',
						'</div>',
						'<div id="flyout-extra"></div>',
						'<div id="flyout-arrows" class="flyout-arrows"></div>',
					'</div>'].join(''))
				[insertionType](insertionElement).hide();

				$flyout = $('#flyout').css({position: 'absolute'});
				$flyoutOuter = $('#flyout-outer').css({position: 'relative', zIndex: cluezIndex});
				$flyoutBody = $('#flyout-body');
				$flyoutInner = $('#flyout-inner');
				$flyoutTitle = $('#flyout-title');
				$flyoutArrows = $('#flyout-arrows');
				$flyoutWait = $('<div id="flyout-waitimage"></div>')
				.css({position: 'absolute'}).insertBefore($flyout).hide();
			}

			var tipAttribute = $this.attr(opts.attribute), ctClass = opts.flyoutClass;
			if (!tipAttribute && !js) {
				return true;
			}
			var tipTitle = (opts.attribute != 'title') ? $this.attr(opts.titleAttribute) : '';

			if(!opts.arrows){
				opts.arrowLeftOffset = 0;
				opts.arrowTopOffset = 0;
			}

			//measurements variables
			var tOffset = parseInt(opts.topOffset, 10),
				arrowTOffset = parseInt(opts.arrowTopOffset, 10),
				lOffset = parseInt(opts.leftOffset, 10),
				arrowLOffset = parseInt(opts.arrowLeftOffset, 10),
				borderWidth = parseInt(opts.borderWidth, 10);
				shadowWidth = parseInt(opts.shadowWidth, 10);

			// vertical measurement variables
			var tipHeight,
				winHeight,
				linkHeight = this.offsetHeight;

			//top measurement variables
			var sTop,
				linkTop = $this.offset().top,
				baselineTop;

			// horizontal measurement variables
			var tipWidth = parseInt(opts.width, 10) || 400,
				winWidth,
				linkWidth = this.offsetWidth;

			//left measurement variables
			var sLeft,
				linkLeft = $this.offset().left,
				baselineLeft;

			var localContent;
			function returnFalse() { return false; }

		/***************************************
		* ACTIVATION
		****************************************/
	    var activate = function(event) {
	    	if (!opts.onActivate($this)) {
				return false;
			}
			isActive = true;
			$flyout.hide().removeClass().css({width: tipWidth});

			/***************************************
			* loaddisabled a string from flyout method's first argument
			***************************************/
			if (js) {
				if (typeof js == 'function') {
					js = js.call(link);
				}
				$flyoutInner.html(js);
				flyoutShow();
			}

			/***************************************
			* loaddisabled external file via ajax
			***************************************/
			else if (!opts.local && tipAttribute.indexOf('#') !== 0) {

				if (flyoutContents && opts.ajaxCache) {
				    $flyoutInner.html(flyoutContents);
				    flyoutShow();
		        } else {
					var optionBeforeSend = opts.ajaxSettings.beforeSend,
						optionError = opts.ajaxSettings.error,
						optionSuccess = opts.ajaxSettings.success,
						optionComplete = opts.ajaxSettings.complete;
					var ajaxSettings = {
						cache: false, // force requested page not to be cached by browser
						url: tipAttribute,
						beforeSend: function(xhr) {
							if (optionBeforeSend) {optionBeforeSend.call(link, xhr, $flyout, $flyoutInner);}
								$flyoutInner.children().empty();
								$flyoutTitle.children().empty();
							if (opts.waitImage) {
								$flyoutWait
								.css({top: (linkTop - 10), left: (linkLeft + linkWidth/2), zIndex: $this.data('thisInfo').zIndex-1})
								.show();
							}
						},
						error: function(xhr, textStatus) {
							if (isActive) {
								if (optionError) {
									optionError.call(link, xhr, textStatus, $flyout, $flyoutInner);
								} else {
									$flyoutInner.html('<i>sorry, the contents could not be loaddisableded</i>');
								}
							}
						},
						success: function(data, textStatus) {
							flyoutContents = opts.ajaxProcess.call(link, data);
							if (isActive) {
								if (optionSuccess) {optionSuccess.call(link, data, textStatus, $flyout, $flyoutInner);}
									$flyoutInner.html(flyoutContents);
							}
						},
						complete: function(xhr, textStatus) {
							if (optionComplete) {optionComplete.call(link, xhr, textStatus, $flyout, $flyoutInner);}
							var imgs = $flyoutInner[0].getElementsByTagName('img');
							imgCount = imgs.length;
							for (var i=0, l = imgs.length; i < l; i++) {
								if (imgs[i].complete) {
									imgCount--;
								}
							}
							if (imgCount && !$.browser.opera) {
								$(imgs).bind('loaddisabled error', function() {
									imgCount--;
									if (imgCount<1) {
										$flyoutWait.hide();
										if (isActive) { flyoutShow(); }
									}
								});
							} else {
								$flyoutWait.hide();
								if (isActive) { flyoutShow(); }
							}
						}
					};
					var ajaxMergedSettings = $.extend(true, {}, opts.ajaxSettings, ajaxSettings);

					$.ajax(ajaxMergedSettings);
		        }
			}

			/***************************************
			* loaddisabled an element from the local/same page
			***************************************/
			else if (opts.local) {
				var $localContent = $(tipAttribute + (/#\S+$/.test(tipAttribute) ? '' : ':eq(' + index + ')')).clone(true).show();
				$flyoutInner.html($localContent);
				flyoutShow();
			}
		};

		/***************************************
		* SHOW FLYOUT
		***************************************/
		// get dimensions and options for flyout and prepare it to be shown
		var flyoutShow = function() {
			$flyout.addClass('flyout-' + ctClass);
			if (opts.truncate) {
				var $truncloaddisableded = $flyoutInner.text().slice(0,opts.truncate) + '...';
				$flyoutInner.html($truncloaddisableded);
			}
			function doNothing() {}; //empty function
			tipTitle ? $flyoutTitle.show().html(tipTitle) : $flyoutTitle.empty().hide();
			if (opts.sticky) {
				var $closeLink = $('<div id="flyout-close"><a href="#"></a></div>');
				$closeLink.prependTo($flyoutTitle);
				$flyoutTitle.show();//must show the close if this is a sticky flyout
				$closeLink.bind('click.flyout', function() {
					flyoutClose();
					return false;
				});
				if (opts.mouseOutClose) {
					$flyout.bind('mouseleave.flyout', function() {
						flyoutClose();
					});
				} else {
					$flyout.unbind('mouseleave.flyout');
				}
			}

			//re-set variable - if there's a page resize
			linkTop = $this.offset().top;
			linkLeft = $this.offset().left;

			//reset the linkWidth and linkHeight - this property is set to 0 if the flyout is run before the page is fully rendered
			if(linkWidth == 0){
				linkWidth = $this.width();
			}
			if(linkHeight == 0){
				linkHeight = $this.height();
			}

			//set variables
			sTop = $(document).scrollTop();
			sLeft = $(document).scrollLeft();
			winHeight = $(window).height();
			winWidth = $(window).width();
			baselineTop = sTop + winHeight;
			baselineLeft = sLeft + winWidth;
			tipHeight = Math.max($flyout.outerHeight(),$flyout.height());

			var direction = '';
			var positionLeft = sLeft + lOffset;
			var positionTop = sTop + tOffset;

			if (opts.positionBy != 'fixed') {

				//determine left, right, top, bottom.....
				var availableRight = ((tipWidth <= (baselineLeft - borderWidth - (linkLeft + linkWidth + lOffset)))  && (linkTop > arrowTOffset)),
					availableLeft = ((tipWidth <= (linkLeft - borderWidth - sLeft - lOffset))  && (linkTop > arrowTOffset)),
					availableBottom = (tipHeight <= (baselineTop - borderWidth - (linkTop + linkHeight))),
					availableTop = ((tipHeight + shadowWidth) <= (linkTop - borderWidth - sTop - tOffset));

				//set direction and positions using availablity
				if(availableRight){
					direction = 'right';
					positionLeft = linkLeft + linkWidth + lOffset;
					positionTop = linkTop - arrowTOffset;
				} else if(availableLeft){
					direction = 'left';
					positionLeft = linkLeft - (lOffset + tipWidth);
					positionTop = linkTop - arrowTOffset;
				} else if(availableBottom){
					direction = 'bottom';
					positionLeft = linkLeft + (linkWidth/2) - (tipWidth/2) + shadowWidth;
					positionTop = linkTop + linkHeight + tOffset;
				} else if(availableTop){
					direction = 'top';
					positionLeft = linkLeft + (linkWidth/2) - (tipWidth/2) + shadowWidth;
					positionTop = linkTop - tOffset - tipHeight + shadowWidth;
				} else {	//default is right positioning
					direction = 'right';
					positionLeft = linkLeft + linkWidth + lOffset;
					positionTop = linkTop - arrowTOffset;
				}
			}

			$flyout.removeClass().addClass('flyout-' + direction + '-' + ctClass).addClass(' flyout-' + ctClass);

			if (opts.arrows) {
 				var arrowWidth = parseInt($flyoutArrows.css('width'),10)||0;
 				var arrowHeight = parseInt($flyoutArrows.css('height'),10)||0;
				var arrowPositionLeft = 0;
				var arrowPositionTop = 0;
				var shiftPosition = 0;
				var maxShiftPosition = 0;
				var shiftDifference = 0;

				switch(direction){
					case 'right':
						positionLeft = positionLeft + arrowWidth;
						positionTop = positionTop + (arrowHeight/4);
						arrowPositionLeft = -1 * arrowWidth;
						arrowPositionTop = arrowTOffset;
						break;
					case 'left':
						positionLeft = positionLeft  - arrowWidth;
						positionTop = positionTop - (arrowHeight/2);
						arrowPositionLeft = tipWidth - shadowWidth;
						arrowPositionTop = arrowTOffset;
						break;
					case 'bottom':
						positionTop = positionTop + arrowHeight;
						arrowPositionLeft = (tipWidth/2)  - (arrowWidth/2) - shadowWidth;
						arrowPositionTop = -1 * arrowHeight;
						break;
					case 'top':
						positionTop = positionTop - arrowHeight;
						arrowPositionLeft = (tipWidth/2) - (arrowWidth/2) + shadowWidth;
						arrowPositionTop = tipHeight - shadowWidth;
						break;
					default:
						//no position set - does not show any arrows
				}

				// Re-position: making sure the flyouts do not go off the page
				if((/right|left/).test(direction)){
					//over the top of the page
					if(positionTop < 0){
						positionTop=0;
						arrowPositionTop = arrowTOffset;
					//over the bottom of the page
					} else if((positionTop + tipHeight) > baselineTop){
						shiftPosition = positionTop + tipHeight - baselineTop;// + borderWidth;
						maxShiftPosition = ((tipHeight - shadowWidth - arrowHeight - (arrowTOffset*2)) > 0 ? (tipHeight - shadowWidth - arrowHeight - (arrowTOffset*2)) : 0);
						positionTop = (shiftPosition < maxShiftPosition ? positionTop - shiftPosition : positionTop - maxShiftPosition);
						arrowPositionTop = (shiftPosition < maxShiftPosition ? arrowPositionTop + shiftPosition : arrowPositionTop + maxShiftPosition);
						//if got shifted back over the top - re-adjust it back down while leaving the border padding at the top
						if(positionTop < sTop && (linkTop-sTop > borderWidth)){
							shiftDifference = sTop - positionTop + borderWidth;
							positionTop = positionTop + shiftDifference;
							arrowPositionTop = arrowPositionTop - shiftDifference;
						}
					}
				} else if((/top|bottom/).test(direction)){
					//over the left of the page
					if(positionLeft < 0){
						positionLeft=0;
						arrowPositionLeft = arrowLOffset;
					//over the right side of the page
					} else if((positionLeft + tipWidth) > baselineLeft){
						shiftPosition = positionLeft + tipWidth - baselineLeft;// + borderWidth;
						maxShiftPosition = (((tipWidth/2) + shadowWidth - (arrowLOffset*2)) > 0 ? ((tipWidth/2) + shadowWidth - (arrowLOffset*2)) : 0);
						positionLeft = (shiftPosition < maxShiftPosition ? positionLeft - shiftPosition : positionLeft - maxShiftPosition);
						arrowPositionLeft = (shiftPosition < maxShiftPosition ? arrowPositionLeft + shiftPosition : arrowPositionLeft + maxShiftPosition);
						//if got shifted back over the left side - re-adjust it back to the right
						if(positionLeft < sLeft){
							shiftDifference = sLeft - positionLeft + borderWidth;
							positionLeft = positionLeft + shiftDifference;
							arrowPositionLeft = arrowPositionLeft - shiftDifference;
						}
					}
				}

				$flyoutArrows.css({
				    left: arrowPositionLeft,
				    top: arrowPositionTop,
				    zIndex: $this.data('thisInfo').zIndex+1
				}).show();

			} else {
				$flyoutArrows.hide();
			}

			$flyout.css({
				left: positionLeft,
				top: positionTop,
				zIndex: $this.data('thisInfo').zIndex
			});

			// (first hide, then) ***SHOW THE flyout***
			$flyout.hide()[opts.void](opts.voidSpeed || 0);
			if ($.fn.bgiframe) { $flyout.bgiframe(); }
			// delayed close (not fully tested)
			if (opts.delayedClose > 0) {
				closeOnDelay = setTimeout(flyoutClose, opts.delayedClose);
			}
			// trigger the optional onShow function
			opts.onShow.call(link, $flyout, $flyoutInner);
    	};

		/***************************************
		* INACTIVATION
		***************************************/
		var inactivate = function(event) {
			isActive = false;
			$flyoutWait.hide();
			if (!opts.sticky || (/click|toggle/).test(opts.activation) ) {
				flyoutClose();
				clearTimeout(closeOnDelay);
			}
		};
		// close flyout and reset some things
		var flyoutClose = function() {
			$flyoutOuter.parent().hide().removeClass();
			opts.onHide.call(link, $flyout, $flyoutInner);
			$this.removeClass('flyout-clicked');
			if (tipTitle) {
				$this.attr(opts.titleAttribute, tipTitle);
			}
			if (opts.arrows) {
				$flyoutArrows.css({top: ''});
			}
		};

		//bind a method to close the flyout
		$(document).bind('hideFlyout', function(e) {
			flyoutClose();
		});

		/***************************************
		* BIND EVENTS
		***************************************/
		// activate by click
		if ( (/click|toggle/).test(opts.activation) ) {
			$this.bind('click.flyout', function(event) {
				if ($flyout.is(':hidden') || !$this.is('.flyout-clicked')) {
					activate(event);
					$('.flyout-clicked').removeClass('flyout-clicked');
					$this.addClass('flyout-clicked');
				} else {
					inactivate(event);
				}
				this.blur();
				if(opts.activateOnce){
					$(this).unbind(event);
				}
				return false;
			});
		// activate by focus; inactivate by blur
		} else if (opts.activation == 'focus') {
			$this.bind('focus.flyout', function(event) {
				activate(event);
			});
			$this.bind('blur.flyout', function(event) {
				inactivate(event);
			});
		// activate by hover
		} else {
			// clicking is returned false if clickThrough option is set to false
			$this[opts.clickThrough ? 'unbind' : 'bind']('click', returnFalse);
			if ($.fn.hoverIntent && opts.hoverIntent) {
				$this.hoverIntent({
					sensitivity: opts.hoverIntent.sensitivity,
					interval: opts.hoverIntent.interval,
					over: function(event) {
						activate(event);
					},
					timeout: opts.hoverIntent.timeout,
					out: function(event) {inactivate(event); $this.unbind('mousemove.flyout');}
				});
			} else {
				$this.bind('mouseenter.flyout', function(event) {
					activate(event);
				})
				.bind('mouseleave.flyout', function(event) {
					inactivate(event);
					$this.unbind('mousemove.flyout');
				});
			}
			$this.bind('mouseover.flyout', function(event) {
				$this.attr('title','');
			}).bind('mouseleave.flyout', function(event) {
				$this.attr('title', $this.data('thisInfo').title);
			});
		}

		//close the flyout on resize of window
		//Cannot use this now because flyouts larger than the window will trigger a scroll bar
		//causing the flyout to flash on the screen and disappear
		/*$(window).bind('resize', function(){
			$(document).trigger('hideFlyout');
		});*/

	});
  	};

/*
 * Options for flyout
 *
 * each one can be explicitly overridden
 * example 1: $.fn.flyout.defaults.width = 200;
 * example 2: $('a.example').flyout({width: 200});
 *
 */

	$.fn.flyout.defaults = {  // set up default options
		width:            400,      // Sets the width of the flyout
		cluezIndex:       5001,     // Sets the z-index style property of the flyout (must appear on top of nav when present @ 5000)
		positionBy:       'auto',   // Sets the type of positioning: 'auto' or 'fixed' (there are NO arrows for fixed positions)
		topOffset:        10,       // Sets number of px to offset flyout from top of invoking element
		leftOffset:       10,       // Sets number of px to offset flyout from left of invoking element
		arrowTopOffset:   20,       // Sets number of px to offset arrow from top of flyout (so that it doesn't appear next to a rounded corner)
		arrowLeftOffset:  20,       // Sets number of px to offset arrow from left of flyout (so that it doesn't appear next to a rounded corner)
		shadowWidth:	  5,		// Sets width of px for shadow (these are part of the background image)
		borderWidth:	  15,		// Sets width of the border around the page that the flyout must appear within (ex. 15px from left or top of browser)
		local:            true,    	// Sets to local content as default, must change to false for ajax
		attribute:        'rel',    // Sets the attribute to be used for fetching the flyout's body content
		titleAttribute:   'title',  // Sets the attribute to be used for fetching the flyout's title
		flyoutClass:     'dt-tip',	// Sets the class added to outermost flyout div in the form of 'flyout-' + flyoutClass. Must be dt-tip for DomainTools styles.
		waitImage:        false,    // Determines whether to show a "loaddisableding" img, which is set in jquery.flyout.css
		arrows:           true,    	// If false, displays the flyout immediately right, left, bottom, top of the invoking element without additional adjustments
		sticky:           true,     // Keep visible until manually closed - requires true to view the close button
		mouseOutClose:    false,    // Closes flyout when moused out
		activation:       'click',  // Set to 'click' to force user to click to show flyout
		                        	// Set to 'focus' to show on focus of a form element and hide on blur
		activateOnce:     false,	// Set to true when you are calling the flyout through an onclick parameter.  If will only allow flyout void once.
		clickThrough:     false,    // If true, and activation is not 'click', then clicking on link will take user to the link's href
		delayedClose:     0,        // Close flyout on a timed delay
		truncate:         0,        // Sets the number of characters to truncate flyout's contents. if 0, no truncation occurs

		// effect and speed voiding flyouts
		fx: {
		void:       'show', // can be 'show' or 'slideDown' or 'fadeIn'
		voidSpeed:  ''
		},

		// settings for when hoverIntent plugin is used
		hoverIntent: {
			sensitivity:  3,
			interval:     50,
			timeout:      0
		},

		// short-circuit function to run just before flyout is shown.
		onActivate:       function(e) {return true;},
		// function to run just after flyout is shown.
		onShow:           function(ct, ci){},
		// function to run just after flyout is hidden.
		onHide:           function(ct, ci){},
		// whether to cache results of ajax request to avoid unnecessary hits to server
		ajaxCache:        true,

		// process data retrieved via xhr before it's displayed
		ajaxProcess:      function(data) {
			data = data.replace(/<(script|style|title)[^<]+<\/(script|style|title)>/gm, '').replace(/<(link|meta)[^>]+>/g,'');
			return data;
		},

		// can pass in standard $.ajax() parameters. Callback functions, such as beforeSend,
		// will be queued first within the default callbacks.
		// The only exception is error, which overrides the default
		ajaxSettings: {
			// error: function(ct, ci) { /* override default error callback */ }
			// beforeSend: function(ct, ci) { /* called first within default beforeSend callback }
			dataType: 'html'
		}
	};


/*
 * Global defaults for flyouts. Apply to all calls to the flyout plugin.
 *
 * @example $.flyout.setup({
 *   insertionType: 'prependTo',
 *   insertionElement: '#container'
 * });
 *
 * @property
 * @name $.flyout.setup
 * @type Map
 * @cat Plugins/tooltip
 * @option String insertionType: Default is 'appendTo'. Determines the method to be used for inserting the flyout into the DOM. Permitted values are 'appendTo', 'prependTo', 'insertBefore', and 'insertAfter'
 * @option String insertionElement: Default is 'body'. Determines which element in the DOM the plugin will reference when inserting the flyout.
 *
 */

	var insertionType = 'appendTo', insertionElement = 'body';

	$.flyout.setup = function(options) {
		if (options && options.insertionType && (options.insertionType).match(/appendTo|prependTo|insertBefore|insertAfter/)) {
			insertionType = options.insertionType;
		}
		if (options && options.insertionElement) {
			insertionElement = options.insertionElement;
		}
	};

})(jQuery);
jQuery(function() {
	//set focus to the whois search input field when the user first arrives at the page
	jQuery('#whois-search-field').focus();

	//set carousel
	if(jQuery('#wcarousel').length > 0) {
		jQuery('#wcarousel').dtCarousel({goToPosition:1});
	}
    
    jQuery('#flyout-verisign-rank').flyout({
        width:325,
        leftOffset: 10,
        activation:'onclick',
        mouseOutClose:false,
        sticky:true,
        arrows:false,
        clickThrough:true
    });
    
    jQuery('#show-verisign-inbound-link-details').click(function(){
        if(jQuery(this).html().match(/^View/)) {
            jQuery(this).html('Hide Sample Listing');
            jQuery('#verisign-inbound-links').show();
        } else {
            jQuery(this).html('View Sample Listing');
            jQuery('#verisign-inbound-links').hide();
        }
    });

});



function switchWhoisTab(tabname) {
	jQuery('.whois-tabbed').each(function() {
		jQuery(this).hide();
		jQuery(this).removeClass('whois-tab-active');
	});
	jQuery('.whoisTabs ul.tab-strip').children().removeClass();
	jQuery('#'+tabname+'-view').addClass('tab-strip-active');
	jQuery('#whois-tab-'+tabname).addClass('whois-tab-active').show();
	switch(tabname) {
		case 'record':
			jQuery('#whois-tab-title').html('Whois Record');
			jQuery('#my-whois-help-container').hide();
			break;
		case 'profile':
			jQuery('#whois-tab-title').html('Site Profile and Search Rank');
			jQuery('#my-whois-help-container').hide();
			break;
		case 'registration':
			jQuery('#whois-tab-title').html('Registration');
			jQuery('#my-whois-help-container').hide();
			break;
		case 'server':
			jQuery('#whois-tab-title').html('Server Data');
			jQuery('#my-whois-help-container').hide();
			break;
		case 'my':
			jQuery('#whois-tab-title').html('My Whois View');
			jQuery('#my-whois-help-container').show();
			break;
	}
	jQuery.get("/track/whois/tab/"+tabname+"-view");
	return false;
}

function buySingleCCTLDs(ccTld) {
	jQuery('#cTldFormDomains').val(ccTld);
	jQuery('#cTldForm').submit();
}

function buyCCTLDs() {
	checkedDomains = '';
	allDomains = '';
	jQuery('#ccTLDs-tab-body input[type=checkbox]').each(function() {
		allDomains += this.value + ':1;';
		if(this.checked)
			checkedDomains += this.value + ':1;';
	});

	if(checkedDomains == '') {
		checkedDomains = allDomains;
	}

	jQuery('#cTldFormDomains').val(checkedDomains);
	jQuery('#cTldForm').submit();
}

/*******************************/
/* ADD CONTENT TO MY WHOIS TAB */
/*******************************/
function loaddisabledMyWhoisJS(item,title,rowIndex) {

	var $clonedRow = jQuery('#'+item).clone();
	$clonedRow.attr({"id":item + "-copy"}).addClass('container-row');
	$clonedRow.children(".add-to-my-whois").remove();
	$clonedRow.children(".form-field").removeClass("wide-80").addClass("wide-70").css('float', 'left');
	var $removeImg = jQuery('<div class="remove-from-my-whois" title="Remove from My Whois" style="display:none;"><span onclick="removeMyWhoisContent(\''+ item +'\',\''+title+'\');"></span></div>');
	var $moveRowImgs = jQuery(
		'<div class="move-my-whois-row" title="Move this row one position up" style="display: none;">' +
		'<span class="button-up" onclick="moveMyWhoisContent(\''+ item +'\',\''+title+'\', \'up\');" ' +
		'onmouseover="jQuery(this).css(\'background\', \'transparent url(/images/stackup_depressed.gif) no-repeat scroll 0 0\'); return false;" ' +
		'onmouseout="jQuery(this).css(\'background\', \'transparent url(/images/stackup.gif) no-repeat scroll 0 0\'); return false;"> ' +
		'</span></div><div class="move-my-whois-row" title="Move this row one position down" style="display: none;">' +
		'<span class="button-down" onclick="moveMyWhoisContent(\''+ item +'\',\''+title+'\', \'down\');" ' +
		'onmouseover="jQuery(this).css(\'background\', \'transparent url(/images/stackdown_depressed.gif) no-repeat scroll 0 0\'); return false;" ' +
		'onmouseout="jQuery(this).css(\'background\', \'transparent url(/images/stackdown.gif) no-repeat scroll 0 0\'); return false;"></span></div>');
	$clonedRow.css({"background":"#FAFAFA"});
	$clonedRow.bind("mouseover",function() {
		jQuery('.container-row').trigger('mouseout'); // Rarely, a row will not get its mouseout event triggered if the mouse moves off an up/down button and out of a row very quickly
		$clonedRow.css({"background":"#E9EFF1"});
		$removeImg.show();
		$moveRowImgs.show();
		jQuery('.move-my-whois-row:first').find('.button-up').css('background', 'transparent url(/images/stackup_depressed.gif) no-repeat scroll 0 0');
		jQuery('.move-my-whois-row:last').find('.button-down').css('background', 'transparent url(/images/stackdown_depressed.gif) no-repeat scroll 0 0');
		return false;
	});
	$clonedRow.bind("mouseout", function(event) {
		if(!jQuery(event.target).html()) {
			// Without this, IE flickers when the mouse leaves the up/down arrow buttons.
			return false;
		}
		$clonedRow.css({"background":""});
		$removeImg.hide();
		$moveRowImgs.hide();
		return false;
	});

	//must update ID's for flyout purposes since this is a copy of the original
	if(item == 'rTab-gtld'){
		$clonedRow.find('.flyout-local').each(function(i,data){
			var $currentID = jQuery(data).attr('id');
			jQuery(data).attr({"id":$currentID + "-copy"});

			//for TLD flyouts of thumbnails
			jQuery(data).flyout({
				width:275,
				activation:'onmouseover',
				mouseOutClose:true,
				sticky:false,
				arrows:false,
				clickThrough:true
			});
		});
	}

	$clonedRow.prepend($removeImg);
	$clonedRow.append($moveRowImgs);

	$clonedRow.appendTo('#myWhoisContainer');
}

function loaddisabledPlaceholderRow(item,title) {

	var $removeImg = jQuery('<div class="remove-from-my-whois" title="Remove from My Whois" style="display:none;"><span onclick="removeMyWhoisContent(\''+ item +'\',\''+title+'\');"></span></div>');
	var $moveRowImg = jQuery(
		'<div class="move-my-whois-row" title="Move this row one position up" style="display: none;">' +
		'<span class="button-up" onclick="moveMyWhoisContent(\''+ item +'\',\''+title+'\', \'up\');" ' +
		'onmouseover="jQuery(this).css(\'background\', \'transparent url(/images/stackup_depressed.gif) no-repeat scroll 0 0\'); return false;" ' +
		'onmouseout="jQuery(this).css(\'background\', \'transparent url(/images/stackup.gif) no-repeat scroll 0 0\'); return false;">' +
		'</span></div><div class="move-my-whois-row" title="Move this row one position down" style="display: none;">' +
		'<span class="button-down" onclick="moveMyWhoisContent(\''+ item +'\',\''+title+'\', \'down\');" ' +
		'onmouseover="jQuery(this).css(\'background\', \'transparent url(/images/stackdown_depressed.gif) no-repeat scroll 0 0\'); return false;" ' +
		'onmouseout="jQuery(this).css(\'background\', \'transparent url(/images/stackdown.gif) no-repeat scroll 0 0\'); return false;"></span></div>');
	var $emptyRow = jQuery('<div id="'+item+'-copy" class="float-row display-input">' +
						'<div class="form-label field-label wide-20"><span>'+title+':</span></div>' +
						'<div class="form-field wide-80 normal">No data found for this domain.</div>' +
					'</div>');

	$emptyRow.css({"background":"#FAFAFA"});
	$emptyRow.bind("mouseover",function() {
		$emptyRow.css({"background":"#E9EFF1"});
		$removeImg.show();
		$moveRowImg.show();
		return false;
	});
	$emptyRow.bind("mouseout",function() {
		$emptyRow.css({"background":""});
		$removeImg.hide();
		$moveRowImg.hide();
		return false;
	});

	$emptyRow.prepend($removeImg);
	$emptyRow.append($moveRowImg);
	$emptyRow.appendTo('#myWhoisContainer');
}

//Function ONLY called on loaddisabled of the my whois tab
function loaddisabledMyWhoisContent() {
	var $loaddisableder = jQuery("<div class='float-row ajax-loaddisableder'>Loading, please wait...</div>");
	$loaddisableder.appendTo('#myWhoisContainer');
	jQuery.getJSON('/?ajax=mWhois&call=getMyWhoisSections',function(data) {
		var rowIndex = 0;
		jQuery.each(data, function(rowID,rowTitle){
			if(jQuery('#'+rowID).length > 0) {
				loaddisabledMyWhoisJS(rowID,rowTitle, rowIndex);
				rowIndex++;
			} else {
				loaddisabledPlaceholderRow(rowID,rowTitle);
			}

			jQuery('#'+rowID+' .add-to-my-whois')
				.addClass('included-on-my-whois')
				.attr({"title":"Already included in My Whois"})
				.children("span").attr({"onclick":""})
				.unbind("click");
		});
		$loaddisableder.remove();
	});
	return false;
}

//Function to add rows of content to the My Whois tab
function addMyWhoisContent(IDToShow,rowTitle) {
	jQuery('#'+IDToShow+' .add-to-my-whois').addClass('adding-to-my-whois');
	jQuery.get('/?ajax=mWhois&call=addMyWhoisSection&args[0]='+IDToShow+'&args[1]='+rowTitle,function(data) {
		if(data) {
			jQuery('#'+IDToShow+' .add-to-my-whois')
				.removeClass('adding-to-my-whois')
				.addClass('included-on-my-whois')
				.attr({"title":"Already included in My Whois"})
				.children("span").attr({"onclick":""})
				.unbind("click");
			loaddisabledMyWhoisJS(IDToShow,rowTitle);
		}
	});
	return false;
}

//Function to remove rows of content from the My Whois tab
function removeMyWhoisContent(IDToHide,title) {
	jQuery.get('/?ajax=mWhois&call=removeMyWhoisSection&args[0]='+IDToHide,function(data) {
		if(data) {
			jQuery('#'+IDToHide+'-copy').remove();
			jQuery('#'+IDToHide+' .add-to-my-whois')
				.removeClass('included-on-my-whois')
				.attr({"title":"Add to My Whois"})
				.children("span").click(function() {
					addMyWhoisContent(IDToHide,title);
				});
		}
	});
}

//Function to move rows of content within the My Whois tab
function moveMyWhoisContent(ID,rowTitle,direction) {
	jQuery.getJSON('/?ajax=mWhois&call=moveMyWhoisSection&args[0]='+rowTitle+'&args[1]='+direction,function(data) {
		if(data && !data['no_move']) {
			jQuery('.ajax-loaddisableder').dtSpinnerToggle(true);
			jQuery('#' + data['element2ID'] + '-copy').fadeOut(function() {
				jQuery('#' + data['element2ID'] + '-copy').swap('#' + data['element1ID'] + '-copy');
				//jQuery('#' + data['element1ID'] + '-copy').trigger('mouseover');
				//jQuery('#' + data['element2ID'] + '-copy').trigger('mouseover');
				jQuery('#' + data['element2ID'] + '-copy').fadeIn();
				jQuery('.button-up').trigger('mouseout');
				jQuery('.button-down').trigger('mouseout');
			});
			setTimeout(function(){ jQuery('.ajax-loaddisableder').dtSpinnerToggle(false); }, 500);
		}
	});
	return false;
}

//Show/hide help link/content due to user preferences
function helpLink() {
	if(jQuery('#mwTab-intro:visible').length > 0) {
		jQuery('#mwTab-intro').hide();
		jQuery('.help_link_show').show();
		jQuery('.help_link_hide').hide();

		//set pref to hidden
		jQuery.get('/?ajax=mWhois&call=setMyWhoisInfoVisible&args[0]=0');
	} else {
		jQuery('#mwTab-intro').show();
		jQuery('.help_link_hide').show();
		jQuery('.help_link_show').hide();

		//set pref to visible
		jQuery.get('/?ajax=mWhois&call=setMyWhoisInfoVisible&args[0]=1');
	}

	return false;
}

jQuery.fn.swap = function(b) {
    b = jQuery(b)[0];
    var a = this[0];

    var t = a.parentNode.insertBefore(document.createTextNode(''), a);
    b.parentNode.insertBefore(a, b);
    t.parentNode.insertBefore(b, t);
    t.parentNode.removeChild(t);

    return this;
};

function addDomainMonitor(domain, server_current_domain) {
	jQuery.ajax({
        async: true,
        url: '/?ajax=mDomainMonitor&call=add_domain_default_portfolio',
        dataType: 'json',
        data: { domains: domain },
        success: function(result) {
            jQuery('#add-domain-monitor').replaceWith('Domain has been added to your <a class="pad-none" href="httpdisabled://www.'+server_current_domain+'/monitor/domain-monitor/">Domain Monitor</a>.');
        }
    });
}


function wrap_visible_url(string, max) {
	if(string.length <= max)
	    return string;
	dashPos = string.indexOf('-');
	if(dashPos > -1 && dashPos <= max)
	    return string;
	slashPos = string.indexOf('/');
	if(slashPos > -1 && slashPos <=max )
	    return string.substr(0,slashPos+1) + '<br>' + string.substr(slashPos+1,60);
	return string.substr(0, max-1) + '<br>' + string.substr(max,70);
}
<!--
var google_adnum = 0;
var global_google_adnum = 0;

function google_ad_request_done(google_ads) {
	var feedback = '';
	var dtAd = '';
	var i;
	var img_ads = [];
	var txt_ads = [];
	var img_i = 0;
	var txt_i = 0;
	var slotCountTop = 0;
	var googleAdsTop = '';
	var googleAdsLeft = '';

	if (google_ads.length == 0)
	{
		return;
	}
	
	feedback = '<a href=\"' + google_info.feedback_url + '\" class="google-ads-feedback">Ads by Google</a>';

	for(i=0; i<google_ads.length; ++i) {
	    if(google_ads[i].type =="image")
	        img_ads[img_i++] = google_ads[i];
	    else if(google_ads[i].type=="text")
	        txt_ads[txt_i++] = google_ads[i];
	}

	slotCountTop=txt_ads.length;

	for(i=0;i<slotCountTop;i++) {
		googleAdsTop +=
		'<div class="google-ads-stacked">' +
		'<a class="google-ads-title" href="' +
		txt_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' +
		txt_ads[i].visible_url + '\';return true;">' +
		txt_ads[i].line1 + '</a><span class="google-ads-descript">' +
		txt_ads[i].line2 + ' ' +
		txt_ads[i].line3 + '</span><a class="google-ads-displayurl" href="' +
		txt_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' +
		txt_ads[i].visible_url + '\';return true">' +
		wrap_visible_url(txt_ads[i].visible_url,36) + '</a></div>';
	}

	if(googleAdsTop != '')
	{
		var addition = '<div class="googleAdsTop"><div class="google-ads-feedback-wide">'+ feedback + '</div>' + googleAdsTop + dtAd +'<div class="clear">&nbsp;</div></div>';

		//i would much rather use jQuery('#whois-ads-wide').html(addition), but thanks to IE6, i can't.  for some inane reason
		//it will not work.
		document.getElementById('whois-ads-wide').innerHTML = addition;

		if(dtAd != ''){
			jQuery('.google-ads-wide1').removeClass('google-ads-wide1').addClass('google-ads-wide2');
		}

	}

	if(google_ads[0].bidtype=="CPC") {/* insert this snippet for each ad call */
	  global_google_adnum = global_google_adnum + google_ads.length;
	}

	//reset the size of the main container when less than 3 ads appear
	/**
	if (google_ads.length < 3 && ads_page_view != "summary"){
		jQuery('.googleAdsTop').css({'width': 550});
	}
	**/

	return;
}
//-->

