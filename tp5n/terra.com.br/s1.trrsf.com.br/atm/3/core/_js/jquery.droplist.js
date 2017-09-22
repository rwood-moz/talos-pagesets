(function ($) {
	
	var DropList = function (element, settings, callback) {
	
		var self = this,
			doc = $(document),
			defaults = {
				direction: 'auto',
				customScroll: false,
				namespaces: {
					droplist: 'droplist',
					clickout: 'droplistClickout'
				}
			},
	
			/*
			PRIVATE METHODS
			==============================================================================
			*/
			
			setText = function (str) {
				self.option.html(str);
			},
			
			customScroll = function () {
				
				var h1 = settings.height || 150,
					h2 = self.dropdown.height();
				
				if (h2 > h1) {
					self.list.css('height', h1 + 'px').jScrollPane({
						showArrows: false
					});
				}
			
			},
			
			layoutController = function () {
				
				// config
				var w = {};
				w.obj = self.obj.width;
				w.option = w.obj - self.drop.outerWidth(true) - 7;
				w.dropdown = w.obj - (self.dropdown.outerWidth(true) - self.dropdown.width());
				
				// set
				self.option.css('width', w.option + 'px');
				self.dropdown.css('width', w.dropdown + 'px');
			
			},
			
			options2list = function (data) {
				
				var output = '<ul>';
				data.each(function () {
					var selected = $(this).attr('selected') ? 'selected' : '';
					output += '<li class="' + selected + '"><a href="' + $(this).val() + '">' + $(this).text() + '</a></li>\t';
				});
				output += '</ul>';
				return output;
			
			},
			
			setInitialTitle = function () {
			
				if (self.obj.title !== '') {
					setText(self.obj.title);
				}
			
			},
			
			setInitialSelected = function () {
				
				var selectedItem = self.list.find('.selected:first');
				if (selectedItem.length === 1) {
					self.set(selectedItem);
				}
				else {
					self.set(self.list.find('li:first'));
				}
			
			};
			
		/*
		SETTINGS
		==============================================================================
		*/
		
		settings = $.extend({}, defaults, settings || {});
		
		/*
		PUBLIC METHODS
		==============================================================================
		*/
		
		void = function () {
		
			var instance = null,
				i = 0;
			
			// close other instances
			for (i; i < window.droplist.instances.length; i += 1) {
				instance = window.droplist.instances[i];
				instance.dropdown.hide();
				instance.wrapper.removeClass('droplist-active');
			}
		
			// just show
			self.dropdown.show();
			self.wrapper.addClass('droplist-active');
			
			// auto direction
			if (settings.direction === 'auto') {
				
				var distanceFromBottom = (self.select.height() + self.wrapper.offset().top - doc.scrollTop() - $(window).height()) * -1,
					objHeight = self.select.height() + self.dropdown.height();
				
				if (distanceFromBottom < objHeight) {
					self.wrapper.addClass('droplist-up');
				}
				else {
					self.wrapper.removeClass('droplist-up');
				}
			
			}
			
			else if (settings.direction === 'up') {
				self.wrapper.addClass('droplist-up');
			}
			
			// focus selected item (auto scroll)
			self.listItems.filter('.selected').focus();
			
			// events (clickout / ESC key / type-ahead)
			self.typedKeys = '';
			
			doc.bind('click.' + settings.namespaces.clickout, function (e) {
				
				// clickout
				if ($(e.target).closest('.droplist').length === 0) {
					self.close();
				}
			
			}).bind('keyup.' + settings.namespaces.clickout, function (e) {
			
				var keycode,
					key,
					focused,
					current,
					next,
					link;
			
				// get keycode
				if (e === null) { // ie
					keycode = event.keyCode;
				}
				else { // mozilla
					keycode = e.which;
				}
				
				// esc
				if (keycode === 27) {
					self.close();
				}
				
				// space
				else if (keycode === 32) {
					
					focused = $('a:focus');
					current = (focused.parent().is('li')) ? focused.parent() : self.listItems.first();
					
					self.set(current);
					self.close();
				
				}
				
				// type-ahead support
				else if (keycode >= 0x30 && keycode <= 0x7a) {
					
					// key char
					key = String.fromCharCode(keycode);
					
					// clear up
					window.clearTimeout(self.typeDelay);
					
					// typing a letter repeatedly
					if (self.typedKeys === key) {
					
						current = self.list.find('.selected:first');
						next = current.next();
						link = next.find('>a');
						
						if (link.text().toUpperCase().indexOf(self.typedKeys) === 0) {
							self.set(next);
						}
						else {
							self.setBySearch(self.typedKeys);
						}
					
					}
					
					// typing a word
					else {
					
						// concatenate
						self.typedKeys += key + '';
						
						// wait user to finish typing
						self.typeDelay = window.setTimeout(function () {
							
							self.setBySearch(self.typedKeys);
							self.typedKeys = '';
						
						}, 300);
					
					}
					
				}
			
			});
			
			self.obj.trigger(void.' + settings.namespaces.droplist, self);
		
		};
		
		self.close = function () {
			
			// hide drop
			self.dropdown.hide();
			self.wrapper.removeClass('droplist-active');
			
			// unbind clickout
			doc.unbind('.' + settings.namespaces.clickout);
			
			// dispatch listener
			self.obj.trigger('close.' + settings.namespaces.droplist, self);
		
		};
		
		self.set = function (el) {
		
			var el = $(el),
				link = el.find('>a'),
				text = link.text();
			
			// style
			self.listItems.removeClass('selected');
			el.addClass('selected');
			
			// text
			setText(text);
		
			// value
			if (self.originalSelect.length > 0) {
				var val = el.find('a').attr('href');
				self.originalSelect.find("option[value$='" + val + "']").attr('selected', 'selected');
			}
			
			// trigger
			self.obj.trigger('change.' + settings.namespaces.droplist, self);
		
		};
		
		self.setBySearch = function (q) {
			
			self.listItems.each(function () {
				var link = $(this).find('>a');
				if (link.text().toUpperCase().indexOf(q) === 0) {
					self.set(this);
					return false;
				}
			});
		
		};
		
		self.get = function () {
			return self.list.find('.selected:first a').attr('href');
		};
		
		
		/*
		HELPERS
		==============================================================================
		*/
		
		self.tabs = function (callback) {
			
			var that = this;
			
			that.list.find('li').bind('click', function (e) {
				e.preventDefault();
			
				that.set(this);
				that.close();
				
				var id = $(this).find('a').attr('href');
				$(id).removeClass('hide').show().siblings().hide();
			
			});
			
			if (typeof callback === 'function') {
				callback.apply(that);
			}
		
		};


		/*
		CONTROLLER
		==============================================================================
		*/
		
		self.obj = $(element);
		self.obj.css('border', 'none');
		
		self.obj.id = self.obj.attr('id');
		self.obj.classname = self.obj.attr('class');
		self.obj.name = self.obj.attr('name');
		self.obj.width = self.obj.width();
		self.obj.title = self.obj.attr('title');
		
		self.isInsideForm = false;
		self.isDisabled = (self.obj.attr('disabled') === true);
		
		// style
		if (self.isDisabled) {
			self.obj.classname += ' droplist-disabled';
		}
		
		// insert wrapper
		var wrapperHtml = '<div id="' + self.obj.id + '" class="' + self.obj.classname + '"><div class="droplist-list"></div></div>';
		
		// get elements
		self.wrapper = self.obj.removeAttr('class').wrap(wrapperHtml).parent().parent();
		self.dropdown = self.wrapper.find('.droplist-list:first');
		self.list = self.dropdown.find('ul:first');
		
		// case it's a SELECT tag, not a UL
		if (self.list.length === 0) {
			
			self.isInsideForm = true;
			
			var html = '',
				select = self.dropdown.find('select:first'),
				optgroups = select.find('optgroup'),
				options;
				
			select.removeAttr('id');
			
			if (optgroups.length > 0) {
				html += '<ul>';
				optgroups.each(function () {
					options = $(this).find('option');
					html += '<li><strong>' + $(this).attr('label') + '</strong>' + options2list(options) + '</li>';
				});
				html += '</ul>';
			}
			else {
				options = self.dropdown.find('select:first option');
				html += options2list(options);
			}
			
			self.dropdown.append(html);
			
			// override list
			self.list = self.dropdown.find('ul:first');
		
		}
		
		// insert HTML into the wrapper
		self.wrapper.prepend('<div class="droplist-value"><a href="javascript:void(0);"></a><div></div></div>');
		
		// GET ELEMENTS
		self.listItems = self.list.find('li');
		self.select = self.wrapper.find('.droplist-value:first');
		self.option = self.select.find('div:first');
		self.drop = self.select.find('a:first');
		self.originalSelect = self.wrapper.find('select:first');
		
		/*
		EVENTS
		==============================================================================
		*/
		
		if (self.isDisabled === false) {
		
			// toggle dropdown
			self.select.bind('click', function () {
				if (self.dropdown.is(':hidden')) {
					void();
				}
				else {
					self.close();
				}
			});
		
			if (self.isInsideForm) {
				
				// clicking on an option inside a form
				self.list.find('a').bind('click', function () {
					var parent = $(this).parent();
					self.set(parent);
					self.close();
					return false;
				});
				
				// label correlation
				if (self.obj.id) {
					self.wrapper.parents('form').find('label[for="' + self.obj.id + '"]').bind('click', function () {
						self.drop.focus();
					});
				}
			
			}
		
		}
		
		// adjust layout
		layoutController();
			
		// custom scroll
		if (settings.customScroll) {
			customScroll();
		}
		
		// initial state
		setInitialSelected();
		setInitialTitle();
		self.close();
		
		// callback
		if (typeof callback === 'function') {
			callback.apply(self);
		}
		
		return self;
	
	};

	
	/*
	INSTANCES MANAGER
	==============================================================================
	*/
	
	$.fn.droplist = function (settings, callback) {
		
		window.droplist = {
			instances: []
		};
	
		return this.each(function () {
			
			var obj = $(this),
				instance = null;
			
			if (obj.data('droplist')) {
				return; // return early if this obj already has a plugin instance
			}
			
			instance = new DropList(this, settings, callback);
			obj.data('droplist', instance);
			
			// save instances in an array
			window.droplist.instances.push(instance);
			
		});
	};

}(jQuery));