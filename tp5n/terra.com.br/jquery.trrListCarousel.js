/*
OPTIONS
- scrollAmount
	optional
	default: first element dimension
- previousButtonSelector
- nextButtonSelector
- disabledPreviousButtonClassName
- disabledNextButtonClassName
- effects
- duration
- vertical

PUBLIC METHODS
setScrollAmount (int/px)
goTo (index, callback) - returns anchorPoint value whether index is valid. returns "false" in other case.
scroll (int/px, callback)
item.add (DOM element, callback)
item.remove (index, callback)

TO DO:
- custom events for each action
- change sintax to: elem[((vertical) ? 'outerHeight' : 'outerWidth')](true);
- property "currentSlide"
- event "SLIDE_CHANGE"
- create instance without items
- enable scroll on mouseover/click
- scroll by items, not pixels amount
*/

try {

	(function($) {

		$.fn.extend({

			trrListCarousel: function(options) {

				// validate setup
				if (!this.get(0).tagName.match(/ul|ol/i)) {
					if (window.modMan) {
						modMan.log.critical('O plugin <em>trrListCarousel</em> deve ser aplicados em listas (tags UL e OL). O elemento indicado possui o seguinte seletor: <strong>' + this.get(0).tagName.toLowerCase() + (this.attr('id') ? '#' + this.attr('id') : (this.get(0).className ? '.' + this.get(0).className : '')) + '</strong>');
					}
					return false;
				}

				// merge options to defaults
				options = $.extend({
					scrollAmount: null,
					previousButtonSelector: '.btn-prev',
					nextButtonSelector: '.btn-next',
					disabledPreviousButtonClassName: 'disabled-prev',
					disabledNextButtonClassName: 'disabled-next',
					effects: true,
					vertical: false,
					duration: 'slow',
					handler: 'click',
					height: false //min height for items of a horizontal carousel
				}, options || {});

				// helper
				options.axis = options.vertical ? 'top' : 'left';

				var PUBLIC = {
					anchorPoint: 0,
					buttons: {
						prev: null,
						next: null,
						state: {
							prev: false,
							next: false
						}
					},
					item: {}
				},
					PRIVATE = {
					anchors: []
				},
					recipient = this,
					$interface = {
					wrapper: null, // created dynamically
					listContainer: recipient,
					items: recipient.find('> li'), // so you can use other lists inside your carousel
					referenceItem: recipient.find('> li:first') // so you can use other lists inside your carousel
				},
					DISABLED_LINK_EXP = new RegExp(options.disabledPreviousButtonClassName + '|' + options.disabledNextButtonClassName, '');

				// PUBLIC METHODS

				/*
				define scroll amount
				*/

				PUBLIC.setScrollAmount = function(val) {

					if (val) {
						options.scrollAmount = val;
					} else if (options.vertical) {
						options.scrollAmount = $interface.referenceItem.outerHeight(true);
					} else {
						options.scrollAmount = $interface.referenceItem.outerWidth(true);
					}

				};


				/*
				DEPRECATED - use "scroll" method instead
				*/

				PUBLIC.moveTo = function(anchorPoint, callback) {
					PUBLIC.scroll(anchorPoint, callback);
				};


				/*
				move to certain position
				*/

				PUBLIC.scroll = function(anchorPoint, callback) {

					var callbackHandler, config;

					callbackHandler = function() {

						PRIVATE.defineButtonsStatus();

						if (typeof callback === 'function') {
							callback.call();
						}

					};

					// effects
					if (options.effects) {

						config = (options.vertical) ? { top: anchorPoint } : { left: anchorPoint };
						config.queue = false;

						if (typeof jQuery().clearQueue === 'function') {
							$interface.listContainer.clearQueue();
						}

						$interface.listContainer.animate(config, options.duration, callbackHandler);

						// no effects
					} else {

						$interface.listContainer.css(options.axis, anchorPoint);
						callbackHandler();

					}

					// update properties
					PUBLIC.anchorPoint = anchorPoint;

					return PUBLIC.anchorPoint;

				};


				/*
				move to a certain element in carousel
				*/

				PUBLIC.goTo = function(index, callback) {

					var anchorPoint = PRIVATE.anchors[index],
						dim = 0;

					if (anchorPoint === undefined) {
						return false;
					}

					// do not scroll further than last item
					if (options.vertical) {
						dim = $interface.listContainer.outerHeight() - $interface.wrapper.outerHeight();
					} else {
						dim = $interface.listContainer.outerWidth() - $interface.wrapper.outerWidth();
					}

					while (dim < anchorPoint * -1) {
						--index;
						anchorPoint = PRIVATE.anchors[index];
					}

					// do scroll
					return PUBLIC.scroll(anchorPoint, callback);

				};


				/*
				move back
				*/

				PUBLIC.prev = function(callback) {

					var currentPosition = PUBLIC.anchorPoint,
						anchorPoint;

					// get anchorPoint
					if (currentPosition + options.scrollAmount >= 0) {
						anchorPoint = 0;
					} else {
						anchorPoint = currentPosition + options.scrollAmount;
					}

					PUBLIC.scroll(anchorPoint, callback);

					return PUBLIC;

				};


				/*
				move forward
				*/

				PUBLIC.next = function(callback) {

					var currentPosition = PUBLIC.anchorPoint,
						anchorPoint;

					// vertical
					if (options.vertical && (currentPosition + $interface.listContainer.outerHeight() <= $interface.wrapper.outerHeight() + options.scrollAmount)) {
						anchorPoint = $interface.wrapper.outerHeight() - $interface.listContainer.outerHeight();

						// horizontal
					} else if (!options.vertical && (currentPosition + $interface.listContainer.outerWidth() <= $interface.wrapper.outerWidth() + options.scrollAmount)) {
						anchorPoint = $interface.wrapper.outerWidth() - $interface.listContainer.outerWidth();

					} else {
						anchorPoint = currentPosition - options.scrollAmount;
					}

					PUBLIC.scroll(anchorPoint, callback);

					return PUBLIC;

				};


				/*
				add an item dinamically and refresh dimensions
				*/

				PUBLIC.item.add = function(html, index, callback) {

					var item,
						effects = options.effects;

					// insert the new element at specified position
					if (index === undefined || index >= $interface.items.length) {
						item = $interface.listContainer.append(html);
					} else {
						item = $interface.items.filter(':nth(' + index + ')').before(html);
					}

					// change view only if prev button is disabled
					if (PUBLIC.buttons.state.prev == false && index === 0) {

						// update
						PUBLIC.anchorPoint -= options.vertical ? item.outerHeight(true) : item.outerWidth(true);

						// disable effects
						options.effects = false;

						// scroll
						PUBLIC.scroll(PUBLIC.anchorPoint, function() {

							// restore original state
							options.effects = effects;

						});

					}

					PUBLIC.refresh();

				};


				/*
				remove an element and refresh dimensions
				*/

				PUBLIC.item.remove = function(selector) {

					var el = $interface.items.filter(selector);

					if (el.length > 0) {
						el.remove();
						PUBLIC.refresh();
						return true;
					}

					return false;

				};


				/*
				replace an element and refresh dimensions
				*/

				PUBLIC.item.replace = function(selector, html) {

					var el = $interface.items.filter(selector);

					if (el.length > 0) {
						el.replaceWith(html);
						PUBLIC.refresh();
						return true;
					}

					return false;

				};


				/*
				PRIVATE METHODS
				*/

				/*
				encapsulates the carousel
				*/

				PRIVATE.wrap = function(callback) {

					/*MUS BE REFACTOR */

					var dimensions = PRIVATE.getDimensions(),
						attrs = {};

					attrs.id = $interface.listContainer.attr('id');
					attrs.id = (attrs.id) ? ' id="' + attrs.id + '"' : '';
					if (attrs.id) {
						$interface.listContainer.attr('id', '');
					}

					attrs.iclass = $interface.listContainer.attr('class');
					attrs.iclass = (attrs.iclass) ? ' class="' + attrs.iclass + ' carouselWrapper carousel-wrapper' + '"' : ' class="carouselWrapper carousel-wrapper"';
					$interface.listContainer.attr('class', '');

					attrs.marginTop = (parseInt($interface.listContainer.css('marginTop').replace(/[^\d]*$/, ''), 10) || 0);
					attrs.marginBottom = (parseInt($interface.listContainer.css('marginBottom').replace(/[^\d]*$/, ''), 10) || 0);

					if (options.vertical) {
						attrs.style = ' style="margin-top:' + attrs.marginTop + 'px; margin-bottom:' + attrs.marginBottom + 'px; height:100%; position:relative; overflow:hidden;"';
					} else {
						attrs.style = ' style="margin-top:' + attrs.marginTop + 'px; margin-bottom:' + attrs.marginBottom + 'px; height:' + ((options.height === false) ? dimensions.higher + 'px' : options.height) + '; position:relative; overflow:hidden;"';
					}

					$interface.listContainer.wrap('<div' + attrs.id + attrs.iclass + attrs.style + '></div>');
					$interface.wrapper = $interface.listContainer.parent();

					if (options.vertical) {
						$interface.listContainer.attr('style', 'position:absolute; overflow:hidden; margin:0; top:0; height:' + dimensions.total + 'px;');
					} else {
						$interface.listContainer.attr('style', 'position:absolute; overflow:hidden; margin:0; left:0; width:' + dimensions.total + 'px;');
					}

				};


				/*
				recalculates dimensions after DOM gets modified
				*/

				PUBLIC.refresh = function() {

					var prop;

					// update object
					$interface.items = recipient.find('li');

					// redefine dimension
					prop = options.vertical ? 'height' : 'width';
					$interface.listContainer.css('width', '9999px');
					$interface.listContainer.css(prop, PRIVATE.getDimensions().total + 'px');

					// button status
					PRIVATE.defineButtonsStatus();

				};


				/*
				get total dimensions and higher item
				*/

				PRIVATE.getDimensions = function() {

					var totalDimension = 0,
						higherDimension = 0,
						item = null,
						itemWidth = 0,
						itemHeight = 0,
						style = '',
						itemDimension = 0;

					// reset anchors
					PRIVATE.anchors[0] = 0;

					$interface.items.each(function() {

						style = '';
						item = $(this);

						if (options.vertical === false) {

							itemWidth = item.width();
							itemHeight = item.outerHeight(true);

							style += 'float:left;';

						} else {

							itemWidth = item.width();
							itemHeight = item.height();

						}

						style += 'width:' + itemWidth + 'px;';

						item.attr('style', style);

						itemDimension = options.vertical ? itemWidth : itemHeight;
						if (itemDimension > higherDimension) {
							higherDimension = itemDimension;
						}

						totalDimension += options.vertical ? item.outerHeight(true) : item.outerWidth(true);

						// update anchors
						PRIVATE.anchors.push(totalDimension * -1);

					});

					// remove last anchor
					PRIVATE.anchors.pop();

					return {
						total: totalDimension,
						higher: higherDimension
					};

				};


				/*
				enable or disable the nav buttons
				*/

				PRIVATE.defineButtonsStatus = function() {

					var currentPosition = $interface.listContainer.css(options.axis).replace(/[^\d]*$/, '') * -1;

					PUBLIC.buttons.prev = $(options.previousButtonSelector);
					PUBLIC.buttons.next = $(options.nextButtonSelector);

					// button prev

					if (currentPosition <= 0) {

						PUBLIC.buttons.prev.addClass(options.disabledPreviousButtonClassName);
						PUBLIC.buttons.state.prev = true;

					} else {

						PUBLIC.buttons.prev.removeClass(options.disabledPreviousButtonClassName);
						PUBLIC.buttons.state.prev = false;

					}

					// horizontal
					if (!options.vertical && $interface.listContainer.outerWidth() - $interface.wrapper.outerWidth() - currentPosition <= 0) {

						PUBLIC.buttons.next.addClass(options.disabledNextButtonClassName);
						PUBLIC.buttons.state.next = true;

						// vertical
					} else if (options.vertical && $interface.listContainer.outerHeight() - $interface.wrapper.outerHeight() - currentPosition <= 0) {

						PUBLIC.buttons.next.addClass(options.disabledNextButtonClassName);
						PUBLIC.buttons.state.next = true;

						// disable
					} else {

						PUBLIC.buttons.next.removeClass(options.disabledNextButtonClassName);
						PUBLIC.buttons.state.next = false;

					}

				};

				/*
				add actions to the nav buttons
				*/

				PRIVATE.nav = function() {

					$(options.previousButtonSelector).bind(options.handler, function(evt) {
						PRIVATE.onAction.apply(this, ['prev', evt]);
					});

					$(options.nextButtonSelector).bind(options.handler, function(evt) {
						PRIVATE.onAction.apply(this, ['next', evt]);
					});

				};


				/*
				handle nav buttons actions
				*/

				PRIVATE.onAction = function(action, evt) {

					evt.preventDefault();
					evt.stopPropagation();

					// disabled?
					if (this.className.match(DISABLED_LINK_EXP)) {
						return false;
					}

					PUBLIC[action].call();

				};


				/*
				apply touch scroll to iPad
				*/

				PRIVATE.applyTouchEvents = function() {

					if (window.navigator.userAgent.match(/iPad/i)) {

						var d1, d2, t1, t2, delay;

						$interface.listContainer.bind('touchstart', function(e1) {

							t1 = e1.originalEvent.touches[0];
							d1 = options.vertical ? t1.clientY : t1.clientX;

							$interface.listContainer.bind('touchmove', function(e2) {
								e2.preventDefault();

								window.clearTimeout(delay);
								delay = window.setTimeout(function() {

									t2 = e2.originalEvent.touches[0];
									d2 = options.vertical ? t2.clientY : t2.clientX;

									if (d1 < d2) {
										$(options.previousButtonSelector).trigger('click');
									} else if (d1 > d2) {
										$(options.nextButtonSelector).trigger('click');
									}

								}, 100);

							});

							$interface.listContainer.bind('touchend', function() {
								$interface.listContainer.unbind('touchmove touchend');
							});

						});

					}

				};

				PRIVATE.setup = (function() {

					PUBLIC.setScrollAmount(options.scrollAmount);
					PRIVATE.wrap();
					PRIVATE.defineButtonsStatus();
					PRIVATE.nav();
					PRIVATE.applyTouchEvents();

					PUBLIC.scroll(0);

					// loaded
					$interface.listContainer.addClass('loaded');

				}());

				PUBLIC.$interface = $interface;
				return PUBLIC;

			}

		});

	}(jQuery));

} catch (e) {

	e.message = 'Erro no construtor do plugin "trrListCarousel" -  ' + e.message;
	throw e;

}