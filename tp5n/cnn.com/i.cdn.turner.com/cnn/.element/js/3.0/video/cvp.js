// global function for actionscript to call
function cvpSearchTheClient(theObj, thePath)
{
	if(theObj===null)
		theObj = window;
		
	var index = thePath.indexOf(".");
	if(index == -1)
	{
		if (thePath.indexOf("(") != -1 && thePath.indexOf(")") != -1) 
			return eval("theObj." + thePath);
		else
			return theObj[thePath];
	}
	
	var objName = thePath.substring(0, index);
	var subPath = thePath.substring(index+1);
		
	var childObj = theObj[objName];
	if (objName.indexOf("(") != -1 && objName.indexOf(")") != -1) 
		childObj = eval("theObj." + objName);
	
	if(childObj === null)
		return "";
		
	if(subPath.length < 1)
		return childObj.toString();
		
	return cvpSearchTheClient(childObj, subPath);
}

(function() {
	
	var debug = false;
	if (typeof window.CVP != 'undefined') {
		log('Warning - CVP.js has already been instantiated on the page...exiting');
		return;	
	}
	
	var VERSION = 1.4;
	var FLASH_VERSION = "9.0.115.0";
	
	var CVP = window.CVP = function(options) {
		
		this.options = extend({
			id : 'cvp_player',
			width : '320',
			height : '240',
			flashVars : { },
			
			initialize : function() {}
		}, options || {});
		
		this.options.embed = extend({
			containerSwf : '',
			expressInstallSwf : 'http://i.cdn.turner.com/v5cache/turnerplayer/flash/expressInstall.swf',
			flashVersion : FLASH_VERSION
		}, this.options.embed || {});
		
		this.options.embed.options = extend({
			quality : 'high',
            bgcolor : '#000000',
            allowFullScreen : 'true',
            allowScriptAccess : 'always'
		}, this.options.embed.options || {});
		
		if (!this.options.embed.containerSwf || this.options.embed.containerSwf == '') {
			log('Invalid containerSwf...exiting');
			throw "Invalid containerSwf";
			return;
		}
		
		this.options.initialize();
		
		// Set the private vars
		var id = this.options.id,
			width = this.options.width,
			height = this.options.height,
			flashVars = this.options.flashVars,
			embed= this.options.embed
		;
		
		// If this id's been registered and/or the elementId for the flash already exists, return
		if (CVP.findInstance(id) || byId(id)) {
			log(id + ' is already in use...exiting');
			throw id + ' is already in use';
			return;
		}	
		
		// Set the public getters
		this.getId = function() { return id };
		this.getWidth = function() { return width };
		this.getHeight = function() { return height };
		this.getFlashVars = function() { return flashVars };
		this.getEmbed = function() { return embed };
		
		// Create global handler for callbacks for this specific instance of CVP, based on this id
		if (!createCallbackHandler(id)) {
			// If the callback handler couldn't be created, exit
			log('callback handler for id "' + id + '" could not be created...exiting');
			throw 'callback handler for id "' + id + '" could not be created...exiting';
			return;	
		}
		
		// Create a map of the passed in callbacks
		this.callbacks = {};
		delete this.options.initialize;
		for (var p in this.options) {
			if (isFunc(this.options[p])) {
				this.callbacks[p] = this.options[p];	
			}	
		}
		
		// Create internal callback handler for this instance of CVP
		this.handleCallBack = function() {
			var ret = null;
			
			if (arguments.length) {
				var funcName = arguments[0];
				var args = Array.prototype.slice.call(arguments, 1);
				log("handleCallback - " + funcName + " args(" + args.length + ")");
					
				// Check to see if there is an 'internal' callback defined
				if (typeof this[funcName] != 'undefined'
					&& isFunc(this[funcName])) {
					try {
						log("Found internal CB");
						ret = this[funcName].apply(this, args);	
					} catch(e) {
						log("Warning - exception on internal CB " + funcName);	
						log("Exception - " + e.message);
					}
				}
				
				// User-defined callback
				if (this.callbacks[funcName]
					&& isFunc(this.callbacks[funcName])) {	
					try {
						log("Found user CB");
						ret = this.callbacks[funcName].apply(this, args);
					} catch(e) {
						log("Warning - exception on user CB " + funcName);
						log("Exception - " + e.message);	
					}	
				}
			}
			
			// always returning a value because some CB's expect it
			return ret;
		};
		
		// private vars/getters describing the state, for use during the callbacks
		// assigning these to vars from various callbacks for performance reasons, so we don't have to call into flash everytime
		var contentId = this.options.flashVars.contentId || '',
			contentUrl = this.options.flashVars.contentUrl || '',
			playlistId = this.options.flashVars.playlistId || '',
			context = this.options.flashVars.context || '',
			playerInstance = context,
			
			contentType = '',
			contentWidth = 0,
			contentHeight = 0,
			
			duration = 0,
			playhead = 0,
			
			buffering = false,
			bufferProgress = 0,
			
			paused = false
		;
		
		this.getPlayerInstance = function() { return playerInstance };
		this.getContentId = function() { return contentId };
		this.getContentUrl = function() { return contentUrl };
		this.playlistId = function() { return playlistId };
		this.getContext = function() { return context };
		
		//this.getContentType = function() { return contentType };
		this.getContentWidth = function() { return contentWidth };
		this.getContentHeight = function() { return contentHeight };
		
		this.getDuration = function() { return duration };
		this.getPlayhead = function() { return playhead };
		
		this.isBuffering = function() { return buffering };
		this.getBufferProgress = function() { return bufferProgress };
		
		this.isPaused = function() { return paused };
		
		//TODO handle the case where it's a single url or if a playlist has been loaded
		
		// 'Internal callbacks to set the above values for each piece of content
		this.onContentMetadata = function(pContentId, pDuration, pWidth, pHeight) {
			contentId = pContentId;
			playhead = 0;
			duration = pDuration;
			contentWidth = pWidth;
			contentHeight = pHeight;
			
			//TODO set contentType
			//contentType = pContentType;
		};
		
		this.onContentBegin = function(pContentId) {
			contentId = pContentId;
		}
		
		this.onContentBuffering = function(pBuffering, pBufferProgress) {
			buffering = pBuffering;
			bufferProgress = pBufferProgress;	
		};
		
		this.onContentPlayHead = function(pContentId, pPlayhead, pTotalDuration) {
			playhead = pPlayhead;	
		};
		
		this.onContentPause = function(pContentId, pPaused) {
			paused = pPaused;	
		};
		
		this.onPlayerReady = function() {
			playerInstance = this.getPlayer().getPlayerInstance();
		};
		
		// register this instance
		CVP.registerInstance(id, this);
		return this;
	}
	
	CVP.prototype = {
		getPlayer : function() {
			if (navigator.appName.indexOf("Microsoft") != -1) {
				return window[this.getId()];
			} else {
				return document[this.getId()];
			}
		},
		
		embedSWF : function(containerElementId) {
			var flashvars = this.getFlashVars();
			flashvars.domId = this.getId();
			flashvars.w = this.getWidth();
			flashvars.h = this.getHeight();
			
			var embed = this.getEmbed();
			var container = embed.containerSwf;
			var params = embed.options;
			var express = embed.expressInstallSwf;
			var version = validateFlashVersion(embed.flashVersion);
			
			var attributes = {
				id : this.getId(),
				name : this.getId()	
			};
			
			// when no flash player detected, call a call back.
			if(!CVP.swfobject.hasFlashPlayerVersion("1.0.0"))
				this.handleCallBack("onNoFlashDetected");
				
			CVP.swfobject.embedSWF(container, containerElementId, this.getWidth(), this.getHeight(), version, express, flashvars, params, attributes);
			return this;
		},
		
		removeSWF : function() {
			if (CVP.swfobject
				&& CVP.swfobject.removeSWF) {
				CVP.swfobject.removeSWF(this.getId());		
			}
			return this;
		},
		
		play:function(id, options) {
			this.getPlayer().playContent(id, options || {});	
			return this;
		},
		
		playVideoFromUrl:function(url) {
			this.getPlayer().playVideoFromUrl(url);
			return this;
		},
		
		pause:function() {
			this.getPlayer().pause();	
			return this;
		},
		
		resume:function() {
			this.getPlayer().resume();	
			return this;
		},
		
		queue:function(id, options) {
			this.getPlayer().queue(id, options || {});
			return this;
		},
		
		emptyQueue:function() {
			this.getPlayer().emptyQueue();
			return this;
		},
		
		seek:function(time) {
			this.getPlayer().seek(time);
			return this;
		}, 
		
		mute:function() {
			this.getPlayer().mute();
			return this;
		}, 
		
		unmute:function() {
			this.getPlayer().unmute();
			return this;
		}, 
		
		setVolume:function(volume) {
			this.getPlayer().setVolume(volume);
			return this;
		}, 
		
		getVolume:function() {
			return this.getPlayer().getVolume();
		}, 
		
		isMuted:function() {
			return this.getPlayer().isMuted();
		},
		
		showMenu:function() {
			this.getPlayer().showMenu();
			return this;
		}, 
		
		hideMenu:function() {
			this.getPlayer().hideMenu();
			return this;
		},
		
		squeeze:function(secs) {
			this.getPlayer().squeeze(secs);
			return this;
		},
	
		unsqueeze:function(secs) {
			this.getPlayer().unsqueeze(secs);
			return this;
		},
	
		getContentEntry:function(id) {
			return this.getPlayer().getContentEntry(id);
		},
		
		goFullScreen:function() {
			this.getPlayer().goFullScreen();
			return this;
		},
		
		getCompanionAd:function(size) {
			return this.getPlayer().getCompanionAd(size);
		},
		
		getAdId:function() {
			return this.getPlayer().getAdId();
		},
		
		getTileId:function() {
			return this.getPlayer().getTileId();
		},
		
		setContentQuality:function(quality) {
			this.getPlayer().setContentQuality(quality);
			return this;
		},
	
		getContentQuality:function() {
			return this.getPlayer().getContentQuality();
		},
		
		disableToolBar:function() {
			this.getPlayer().disableToolBar();
			return this;
		},
		
		enableToolBar:function() {
			this.getPlayer().enableToolBar();
			return this;
		},
		
		enableNextUpSlate:function() {
			this.getPlayer().enableNextUpSlate();
			return this;
		},
		
		disableNextUpSlate:function() {
			this.getPlayer().disableNextUpSlate();
			return this;
		},
	
		startLogging:function(filters) {
			this.getPlayer().startLogging(filters);	
			return this;
		},
		
		resetAdFrequency:function() {
			this.getPlayer().resetAdFrequency();
			return this;
		},
	
		setAdCurrentContext:function(strContextName, bGlobalFrequency) {
			this.getPlayer().setAdCurrentContext(strContextName, bGlobalFrequency);
			return this;
		},
	
		setAdSection:function(section) {
			this.getPlayer().setAdSection(section);
			return this;
		}, 
		
		setAdKeyValue:function(key, value) {
			this.getPlayer().setAdKeyValue(key, value);
			return this;
		},
		
		getAvailableBitrates:function(filter)
		{
			return this.getPlayer().getAvailableBitrates(filter);
		},
		
		getBitrateLabel:function(bitrateId)
		{
			return this.getPlayer().getBitrateLabel(bitrateId);
		},
		
		getBitrateId:function()
		{
			return this.getPlayer().getBitrateId();
		},
		
		setBitrateId:function(bitrateId)
		{
			return this.getPlayer().setBitrateId(bitrateId);
		},
		
		setTrackingContext:function( value) {
			this.getPlayer().setTrackingContext(value);
			return this;
		},
		
		getTrackingContext:function() {
			return this.getPlayer().getTrackingContext();
		},
		
		pauseNextUpCountdown:function() {
			this.getPlayer().pauseNextUpCountdown(true);
			return this;
		},
		
		resumeNextUpCountdown:function() {
			this.getPlayer().pauseNextUpCountdown(false);
			return this;
		}
	};
	
	// Static vars/functions
	CVP.version = VERSION;
	
	// Error constants
	CVP.VIDEO_NOT_FOUND_ERROR = "video not found";
	CVP.VIDEO_XML_NOT_FOUND_ERROR = "cms error";
	
	CVP.instances = {};
	CVP.registerInstance = function(id, instance) {
		CVP.instances[id] = instance;
	};
	
	CVP.unregisterInstance = function(id) {
		// call destruct on the instance?
		CVP.instances[id] = null;
	};
	
	CVP.findInstance = function(id) {
		return CVP.instances[id];	
	};
	
	CVP.onCallback = function(id, args) {
		var instance = CVP.findInstance(id);
		if (instance) {
			return instance.handleCallBack.apply(instance, args);
		} else {
			log("Error - onCallback - unable to find instance " + id);	
		}
	};
	
	CVP.cleanup = function() {
		for (var inst in CVP.instances) {
			window[inst + '_callback_handler'] = null;
			//inst.destroy();
			CVP.instances[inst] = null;	
		}	
	};
	addBeforeUnLoadEvent(CVP.cleanup);
	
	// Add the global callback handler for a particular instance of CVP
	function createCallbackHandler(id) {
		var funcName = id + '_callback_handler';
		if (typeof window[funcName] != 'undefined')
			return false;
		
		window[funcName] = function() {
			var ret = CVP.onCallback(id, arguments);
			if (typeof ret != 'undefined') {
				return ret;	
			}
		};
		return true;
	}
	
	// Utility functions
	function byId(id) {
		return document.getElementById(id);	
	}
	
	function extend(target, source) {
		for (var p in source) {
			target[p] = source[p];	
		}
		return target;	
	}
	
	function isFunc(f) {
		return typeof f == 'function';	
	}
	
	// Validate the embed flash version against our min version
	function validateFlashVersion(embedVersion)
	{
		if (embedVersion === FLASH_VERSION)
			return embedVersion;
			
		if (typeof embedVersion == "undefined" || embedVersion == null)
			return FLASH_VERSION;
			
		// force conversion to string
		FLASH_VERSION += "";
		embedVersion += "";
		
		var f1 = FLASH_VERSION.split(".");
			f2 = embedVersion.split("."),
			f1V = 0,
			f2V = 0
		;
		
		// assumes our player version will always be major, minor, build, and revision
		for (var i = 0; i < f1.length; i++)
		{
			// force conversion to number
			f1V = f1[i] * 1;
			f2V = f2[i] * 1;
			
			if (isNaN(f2V) ||
				f1V > f2V)
				return FLASH_VERSION;
			else if (f2V > f1V)
				return embedVersion;
		}
		return FLASH_VERSION;
	}
	
	function addBeforeUnLoadEvent(func)
	{
		var oldfunc = window.onbeforeunload;
		if (typeof window.onbeforeunload != 'function')
		{
			window.onbeforeunload = func;
		}
		else
		{
			window.onbeforeunload = function()
			{
				if (oldfunc)
				{
					oldfunc();
				}
				func();
			}
		}
	}
	
	function log(msg) {
		if (typeof window.console != 'undefined'
			&& window.console.log
			&& debug) {
				window.console.log("CVP : " + msg);
		}	
	}
	
	/* 
	 * SWFObject v2.1 <http://code.google.com/p/swfobject/>
	 * Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	 * This software is released under the MIT License <http://voidsource.org/licenses/mit-license.php>
	 * 
	 * Modified with CVP namespace
	 */
	CVP.swfobject = function() {
		
		var UNDEF = "undefined",
			OBJECT = "object",
			SHOCKWAVE_FLASH = "Shockwave Flash",
			SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
			FLASH_MIME_TYPE = "application/x-shockwave-flash",
			EXPRESS_INSTALL_ID = "SWFObjectExprInst",
			
			win = window,
			doc = document,
			nav = navigator,
			
			domLoadFnArr = [],
			regObjArr = [],
			objIdArr = [],
			listenersArr = [],
			script,
			timer = null,
			storedAltContent = null,
			storedAltContentId = null,
			isDomLoaded = false,
			isExpressInstallActive = false;
		
		/* Centralized function for browser feature detection
			- Proprietary feature detection (conditional compiling) is used to detect Internet Explorer's features
			- User agent string detection is only used when no alternative is possible
			- Is executed directly for optimal performance
		*/	
		var ua = function() {
			var w3cdom = typeof doc.getElementById !== UNDEF && typeof doc.getElementsByTagName !== UNDEF && typeof doc.createElement !== UNDEF,
				playerVersion = [0,0,0],
				d = null;
			if (typeof nav.plugins !== UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] === OBJECT) {
				d = nav.plugins[SHOCKWAVE_FLASH].description;
				if (d && !(typeof nav.mimeTypes !== UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) { // navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or  in Safari 3+
					d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
					playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
					playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
					playerVersion[2] = /r/.test(d) ? parseInt(d.replace(/^.*r(.*)$/, "$1"), 10) : 0;
				}
			}
			else if (typeof win.ActiveXObject !== UNDEF) {
				var a = null, fp6Crash = false;
				try {
					a = new ActiveXObject(SHOCKWAVE_FLASH_AX + ".7");
				}
				catch(e) {
					try { 
						a = new ActiveXObject(SHOCKWAVE_FLASH_AX + ".6");
						playerVersion = [6,0,21];
						a.AllowScriptAccess = "always";	 // Introduced in fp6.0.47
					}
					catch(e2) {
						if (playerVersion[0] === 6) {
							fp6Crash = true;
						}
					}
					if (!fp6Crash) {
						try {
							a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
						}
						catch(e3) {}
					}
				}
				if (!fp6Crash && a) { // a will return null when ActiveX is 
					try {
						d = a.GetVariable("$version");	// Will crash fp6.0.21/23/29
						if (d) {
							d = d.split(" ")[1].split(",");
							playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
						}
					}
					catch(e4) {}
				}
			}
			var u = nav.userAgent.toLowerCase(),
				p = nav.platform.toLowerCase(),
				webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, // returns either the webkit version or false if not webkit
				ie = false,
				windows = p ? (/win/).test(p) : (/win/).test(u),
				mac = p ? (/mac/).test(p) : (/mac/).test(u);
			/*@cc_on
				ie = true;
				@if (@_win32)
					windows = true;
				@elif (@_mac)
					mac = true;
				@end
			@*/
			return { w3cdom:w3cdom, pv:playerVersion, webkit:webkit, ie:ie, win:windows, mac:mac };
		}();
	
		/* Cross-browser onDomLoad
			- Based on Dean Edwards' solution: http://dean.edwards.name/weblog/2006/06/again/
			- Will fire an event as soon as the DOM of a page is loaded (supported by Gecko based browsers - like Firefox -, IE, Opera9+, Safari)
		*/ 
		var onDomLoad = function() {
			if (!ua.w3cdom) {
				return;
			}
			addDomLoadEvent(main);
			if (ua.ie && ua.win) {
				try {	 // Avoid a possible Operation Aborted error
					void("<scr" + "ipt id=__ie_ondomload defer=true src=//:></scr" + "ipt>"); // String is split into pieces to avoid Norton AV to add code that can cause errors 
					script = getElementById("__ie_ondomload");
					if (script) {
						addListener(script, "onreadystatechange", checkReadyState);
					}
				}
				catch(e) {}
			}
			if (ua.webkit && typeof doc.readyState !== UNDEF) {
				timer = window.setInterval(function() { if (/loaded|complete/.test(doc.readyState)) { callDomLoadFunctions(); }}, 10);
			}
			if (typeof doc.addEventListener !== UNDEF) {
				doc.addEventListener("DOMContentLoaded", callDomLoadFunctions, null);
			}
			addLoadEvent(callDomLoadFunctions);
		}();
		
		function checkReadyState() {
			if (script.readyState === "complete") {
				script.parentNode.removeChild(script);
				callDomLoadFunctions();
			}
		}
		
		function callDomLoadFunctions() {
			if (isDomLoaded) {
				return;
			}
			if (ua.ie && ua.win) { // Test if we can really add elements to the DOM; we don't want to fire it too early
				var s = createElement("span");
				try { // Avoid a possible Operation Aborted error
					var t = doc.getElementsByTagName("body")[0].appendChild(s);
					t.parentNode.removeChild(t);
				}
				catch (e) {
					return;
				}
			}
			isDomLoaded = true;
			if (timer) {
				window.clearInterval(timer);
				timer = null;
			}
			var dl = domLoadFnArr.length;
			for (var i = 0; i < dl; i++) {
				domLoadFnArr[i]();
			}
		}
		
		function addDomLoadEvent(fn) {
			if (isDomLoaded) {
				fn();
			}
			else { 
				domLoadFnArr[domLoadFnArr.length] = fn; // Array.push() is only available in IE5.5+
			}
		}
		
		/* Cross-browser onload
			- Based on James Edwards' solution: http://brothercake.com/site/resources/scripts/onload/
			- Will fire an event as soon as a web page including all of its assets are loaded 
		 */
		function addLoadEvent(fn) {
			if (typeof win.addEventListener !== UNDEF) {
				win.addEventListener("load", fn, false);
			}
			else if (typeof doc.addEventListener !== UNDEF) {
				doc.addEventListener("load", fn, false);
			}
			else if (typeof win.attachEvent !== UNDEF) {
				addListener(win, "onload", fn);
			}
			else if (typeof win.onload === "function") {
				var fnOld = win.onload;
				win.onload = function() {
					fnOld();
					fn();
				};
			}
			else {
				win.onload = fn;
			}
		}
		
		/* Main function
			- Will preferably execute onDomLoad, otherwise onload (as a fallback)
		*/
		function main() { // Static publishing only
			var rl = regObjArr.length;
			for (var i = 0; i < rl; i++) { // For each registered object element
				var id = regObjArr[i].id;
				if (ua.pv[0] > 0) {
					var obj = getElementById(id);
					if (obj) {
						regObjArr[i].width = obj.getAttribute("width") ? obj.getAttribute("width") : "0";
						regObjArr[i].height = obj.getAttribute("height") ? obj.getAttribute("height") : "0";
						if (hasPlayerVersion(regObjArr[i].swfVersion)) { // Flash plug-in version >= Flash content version: Houston, we have a match!
							if (ua.webkit && ua.webkit < 312) { // Older webkit engines ignore the object element's nested param elements
								fixParams(obj);
							}
							setVisibility(id, true);
						}
						else if (regObjArr[i].expressInstall && !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac)) { // Show the Adobe Express Install dialog if set by the web page author and if supported (fp6.0.65+ on Win/Mac OS only)
							showExpressInstall(regObjArr[i]);
						}
						else { // Flash plug-in and Flash content version mismatch: display alternative content instead of Flash content
							displayAltContent(obj);
						}
					}
				}
				else {	// If no fp is installed, we let the object element do its job (show alternative content)
					setVisibility(id, true);
				}
			}
		}
		
		/* Fix nested param elements, which are ignored by older webkit engines
			- This includes Safari up to and including version 1.2.2 on Mac OS 10.3
			- Fall back to the proprietary embed element
		*/
		function fixParams(obj) {
			var nestedObj = obj.getElementsByTagName(OBJECT)[0];
			if (nestedObj) {
				var e = createElement("embed"), a = nestedObj.attributes;
				if (a) {
					var al = a.length;
					for (var i = 0; i < al; i++) {
						if (a[i].nodeName === "DATA") {
							e.setAttribute("src", a[i].nodeValue);
						}
						else {
							e.setAttribute(a[i].nodeName, a[i].nodeValue);
						}
					}
				}
				var c = nestedObj.childNodes;
				if (c) {
					var cl = c.length;
					for (var j = 0; j < cl; j++) {
						if (c[j].nodeType === 1 && c[j].nodeName === "PARAM") {
							e.setAttribute(c[j].getAttribute("name"), c[j].getAttribute("value"));
						}
					}
				}
				obj.parentNode.replaceChild(e, obj);
			}
		}
		
		/* Show the Adobe Express Install dialog
			- Reference: http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=6a253b75
		*/
		function showExpressInstall(regObj) {
			isExpressInstallActive = true;
			var obj = getElementById(regObj.id);
			if (obj) {
				if (regObj.altContentId) {
					var ac = getElementById(regObj.altContentId);
					if (ac) {
						storedAltContent = ac;
						storedAltContentId = regObj.altContentId;
					}
				}
				else {
					storedAltContent = abstractAltContent(obj);
				}
				if (!(/%$/.test(regObj.width)) && parseInt(regObj.width, 10) < 214) {
					regObj.width = "214";
				}
				if (!(/%$/.test(regObj.height)) && parseInt(regObj.height, 10) < 137) {
					regObj.height = "137";
				}
				doc.title = doc.title.slice(0, 47) + " - Flash Player Installation";
				var pt = ua.ie && ua.win ? "ActiveX" : "PlugIn",
					dt = doc.title,
					fv = "MMredirectURL=" + win.location + "&MMplayerType=" + pt + "&MMdoctitle=" + dt,
					replaceId = regObj.id;
				// For IE when a SWF is loading (AND: not available in cache) wait for the onload event to fire to remove the original object element
				// In IE you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
				if (ua.ie && ua.win && obj.readyState !== 4) {
					var newObj = createElement("div");
					replaceId += "SWFObjectNew";
					newObj.setAttribute("id", replaceId);
					obj.parentNode.insertBefore(newObj, obj); // Insert placeholder div that will be replaced by the object element that loads expressinstall.swf
					obj.style.display = "none";
					var fn = function() {
						obj.parentNode.removeChild(obj);
					};
					addListener(win, "onload", fn);
				}
				createSWF({ data:regObj.expressInstall, id:EXPRESS_INSTALL_ID, width:regObj.width, height:regObj.height }, { flashvars:fv }, replaceId);
			}
		}
		
		/* Functions to abstract and display alternative content
		*/
		function displayAltContent(obj) {
			if (ua.ie && ua.win && obj.readyState !== 4) {
				// For IE when a SWF is loading (AND: not available in cache) wait for the onload event to fire to remove the original object element
				// In IE you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
				var el = createElement("div");
				obj.parentNode.insertBefore(el, obj); // Insert placeholder div that will be replaced by the alternative content
				el.parentNode.replaceChild(abstractAltContent(obj), el);
				obj.style.display = "none";
				var fn = function() {
					obj.parentNode.removeChild(obj);
				};
				addListener(win, "onload", fn);
			}
			else {
				obj.parentNode.replaceChild(abstractAltContent(obj), obj);
			}
		} 
	
		function abstractAltContent(obj) {
			var ac = createElement("div");
			if (ua.win && ua.ie) {
				ac.innerHTML = obj.innerHTML;
			}
			else {
				var nestedObj = obj.getElementsByTagName(OBJECT)[0];
				if (nestedObj) {
					var c = nestedObj.childNodes;
					if (c) {
						var cl = c.length;
						for (var i = 0; i < cl; i++) {
							if (!(c[i].nodeType === 1 && c[i].nodeName === "PARAM") && !(c[i].nodeType === 8)) {
								ac.appendChild(c[i].cloneNode(true));
							}
						}
					}
				}
			}
			return ac;
		}
		
		/* Cross-browser dynamic SWF creation
		*/
		function createSWF(attObj, parObj, id) {
			var r, el = getElementById(id);
			if (el) {
				if (typeof attObj.id === UNDEF) { // if no 'id' is defined for the object element, it will inherit the 'id' from the alternative content
					attObj.id = id;
				}
				if (ua.ie && ua.win) { // IE, the object element and W3C DOM methods do not combine: fall back to outerHTML
					var att = "";
					for (var i in attObj) {
						if (attObj[i] !== Object.prototype[i]) { // Filter out prototype additions from other potential libraries, like Object.prototype.toJSONString = function() {}
							if (i.toLowerCase() === "data") {
								parObj.movie = attObj[i];
							}
							else if (i.toLowerCase() === "styleclass") { // 'class' is an ECMA4 reserved keyword
								att += ' class="' + attObj[i] + '"';
							}
							else if (i.toLowerCase() !== "classid") {
								att += ' ' + i + '="' + attObj[i] + '"';
							}
						}
					}
					var par = "";
					for (var j in parObj) {
						if (parObj[j] !== Object.prototype[j]) { // Filter out prototype additions from other potential libraries
							par += '<param name="' + j + '" value="' + parObj[j] + '" />';
						}
					}
					el.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + att + '>' + par + '</object>';
					objIdArr[objIdArr.length] = attObj.id; // Stored to fix object 'leaks' on unload (dynamic publishing only)
					r = getElementById(attObj.id);	
				}
				else if (ua.webkit && ua.webkit < 312) { // Older webkit engines ignore the object element's nested param elements: fall back to the proprietary embed element
					var e = createElement("embed");
					e.setAttribute("type", FLASH_MIME_TYPE);
					for (var k in attObj) {
						if (attObj[k] !== Object.prototype[k]) { // Filter out prototype additions from other potential libraries
							if (k.toLowerCase() === "data") {
								e.setAttribute("src", attObj[k]);
							}
							else if (k.toLowerCase() === "styleclass") { // 'class' is an ECMA4 reserved keyword
								e.setAttribute("class", attObj[k]);
							}
							else if (k.toLowerCase() !== "classid") { // Filter out IE specific attribute
								e.setAttribute(k, attObj[k]);
							}
						}
					}
					for (var l in parObj) {
						if (parObj[l] !== Object.prototype[l]) { // Filter out prototype additions from other potential libraries
							if (l.toLowerCase() !== "movie") { // Filter out IE specific param element
								e.setAttribute(l, parObj[l]);
							}
						}
					}
					el.parentNode.replaceChild(e, el);
					r = e;
				}
				else { // Well-behaving browsers
					var o = createElement(OBJECT);
					o.setAttribute("type", FLASH_MIME_TYPE);
					for (var m in attObj) {
						if (attObj[m] !== Object.prototype[m]) { // Filter out prototype additions from other potential libraries
							if (m.toLowerCase() === "styleclass") { // 'class' is an ECMA4 reserved keyword
								o.setAttribute("class", attObj[m]);
							}
							else if (m.toLowerCase() !== "classid") { // Filter out IE specific attribute
								o.setAttribute(m, attObj[m]);
							}
						}
					}
					for (var n in parObj) {
						if (parObj[n] !== Object.prototype[n] && n.toLowerCase() !== "movie") { // Filter out prototype additions from other potential libraries and IE specific param element
							createObjParam(o, n, parObj[n]);
						}
					}
					el.parentNode.replaceChild(o, el);
					r = o;
				}
			}
			return r;
		}
		
		function createObjParam(el, pName, pValue) {
			var p = createElement("param");
			p.setAttribute("name", pName);	
			p.setAttribute("value", pValue);
			el.appendChild(p);
		}
		
		/* Cross-browser SWF removal
			- Especially needed to safely and completely remove a SWF in Internet Explorer
		*/
		function removeSWF(id) {
			var obj = getElementById(id);
			if (obj && (obj.nodeName === "OBJECT" || obj.nodeName === "EMBED")) {
				if (ua.ie && ua.win) {
					if (obj.readyState === 4) {
						removeObjectInIE(id);
					}
					else {
						win.attachEvent("onload", function() {
							removeObjectInIE(id);
						});
					}
				}
				else {
					obj.parentNode.removeChild(obj);
				}
			}
		}
		
		function removeObjectInIE(id) {
			var obj = getElementById(id);
			if (obj) {
				for (var i in obj) {
					if (typeof obj[i] === "function") {
						obj[i] = null;
					}
				}
				obj.parentNode.removeChild(obj);
			}
		}
		
		/* Functions to optimize JavaScript compression
		*/
		function getElementById(id) {
			var el = null;
			try {
				el = doc.getElementById(id);
			}
			catch (e) {}
			return el;
		}
		
		function createElement(el) {
			return doc.createElement(el);
		}
		
		/* Updated attachEvent function for Internet Explorer
			- Stores attachEvent information in an Array, so on unload the detachEvent functions can be called to avoid memory leaks
		*/	
		function addListener(target, eventType, fn) {
			target.attachEvent(eventType, fn);
			listenersArr[listenersArr.length] = [target, eventType, fn];
		}
		
		/* Flash Player and SWF content version matching
		*/
		function hasPlayerVersion(rv) {
			var pv = ua.pv, v = rv.split(".");
			v[0] = parseInt(v[0], 10);
			v[1] = parseInt(v[1], 10) || 0; // supports short notation, e.g. "9" instead of "9.0.0"
			v[2] = parseInt(v[2], 10) || 0;
			return (pv[0] > v[0] || (pv[0] === v[0] && pv[1] > v[1]) || (pv[0] === v[0] && pv[1] === v[1] && pv[2] >= v[2])) ? true : false;
		}
		
		/* Cross-browser dynamic CSS creation
			- Based on Bobby van der Sluis' solution: http://www.bobbyvandersluis.com/articles/dynamicCSS.php
		*/	
		function createCSS(sel, decl) {
			if (ua.ie && ua.mac) {
				return;
			}
			var h = doc.getElementsByTagName("head")[0], s = createElement("style");
			s.setAttribute("type", "text/css");
			s.setAttribute("media", "screen");
			if (!(ua.ie && ua.win) && typeof doc.createTextNode !== UNDEF) {
				s.appendChild(doc.createTextNode(sel + " {" + decl + "}"));
			}
			h.appendChild(s);
			if (ua.ie && ua.win && typeof doc.styleSheets !== UNDEF && doc.styleSheets.length > 0) {
				var ls = doc.styleSheets[doc.styleSheets.length - 1];
				if (typeof ls.addRule === OBJECT) {
					ls.addRule(sel, decl);
				}
			}
		}
		
		function setVisibility(id, isVisible) {
			var v = isVisible ? "visible" : "hidden";
			if (isDomLoaded && getElementById(id)) {
				getElementById(id).style.visibility = v;
			}
			else {
				createCSS("#" + id, "visibility:" + v);
			}
		}
	
		/* Filter to avoid XSS attacks 
		*/
		function urlEncodeIfNecessary(s) {
			var regex = /[\\\"<>\.;]/;
			var hasBadChars = regex.exec(s) !== null;
			return hasBadChars ? encodeURIComponent(s) : s;
		}
		
		/* Release memory to avoid memory leaks caused by closures, fix hanging audio/video threads and void sockets/NetConnections to disconnect (Internet Explorer only)
		*/
		var cleanup = function() {
			if (ua.ie && ua.win) {
				window.attachEvent("onunload", function() {
					// remove listeners to avoid memory leaks
					var ll = listenersArr.length;
					for (var i = 0; i < ll; i++) {
						listenersArr[i][0].detachEvent(listenersArr[i][1], listenersArr[i][2]);
					}
					// cleanup dynamically embedded objects to fix audio/video threads and void sockets and NetConnections to disconnect
					var il = objIdArr.length;
					for (var j = 0; j < il; j++) {
						removeSWF(objIdArr[j]);
					}
					// cleanup library's main closures to avoid memory leaks
					//CVP.nullMap(ua);
					ua = null;
					//CVP.nullMap(TURNERPLAYER.swfobject);
					CVP.swfobject = null;
				});
			}
		}();
		
		
		return {
			/* Public API
				- Reference: http://code.google.com/p/swfobject/wiki/SWFObject_2_0_documentation
			*/ 
			registerObject: function(objectIdStr, swfVersionStr, xiSwfUrlStr) {
				if (!ua.w3cdom || !objectIdStr || !swfVersionStr) {
					return;
				}
				var regObj = {};
				regObj.id = objectIdStr;
				regObj.swfVersion = swfVersionStr;
				regObj.expressInstall = xiSwfUrlStr ? xiSwfUrlStr : false;
				regObjArr[regObjArr.length] = regObj;
				setVisibility(objectIdStr, false);
			},
			
			getObjectById: function(objectIdStr) {
				var r = null;
				if (ua.w3cdom) {
					var o = getElementById(objectIdStr);
					if (o) {
						var n = o.getElementsByTagName(OBJECT)[0];
						if (!n || (n && typeof o.SetVariable !== UNDEF)) {
								r = o;
						}
						else if (typeof n.SetVariable !== UNDEF) {
							r = n;
						}
					}
				}
				return r;
			},
			
			embedSWF: function(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, parObj, attObj) {
				if (!ua.w3cdom || !swfUrlStr || !replaceElemIdStr || !widthStr || !heightStr || !swfVersionStr) {
					return;
				}
				widthStr += ""; // Auto-convert to string
				heightStr += "";
				if (hasPlayerVersion(swfVersionStr)) {
					setVisibility(replaceElemIdStr, false);
					var att = {};
					if (attObj && typeof attObj === OBJECT) {
						for (var i in attObj) {
							if (attObj[i] !== Object.prototype[i]) { // Filter out prototype additions from other potential libraries
								att[i] = attObj[i];
							}
						}
					}
					att.data = swfUrlStr;
					att.width = widthStr;
					att.height = heightStr;
					var par = {}; 
					if (parObj && typeof parObj === OBJECT) {
						for (var j in parObj) {
							if (parObj[j] !== Object.prototype[j]) { // Filter out prototype additions from other potential libraries
								par[j] = parObj[j];
							}
						}
					}
					if (flashvarsObj && typeof flashvarsObj === OBJECT) {
						for (var k in flashvarsObj) {
							if (flashvarsObj[k] !== Object.prototype[k]) { // Filter out prototype additions from other potential libraries
								if (typeof par.flashvars !== UNDEF) {
									par.flashvars += "&" + k + "=" + flashvarsObj[k];
								}
								else {
									par.flashvars = k + "=" + flashvarsObj[k];
								}
							}
						}
					}
					addDomLoadEvent(function() {
						createSWF(att, par, replaceElemIdStr);
						if (att.id === replaceElemIdStr) {
							setVisibility(replaceElemIdStr, true);
						}
					});
				}
				else if (xiSwfUrlStr && !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac)) {
					isExpressInstallActive = true; // deferred execution
					setVisibility(replaceElemIdStr, false);
					addDomLoadEvent(function() {
						var regObj = {};
						regObj.id = regObj.altContentId = replaceElemIdStr;
						regObj.width = widthStr;
						regObj.height = heightStr;
						regObj.expressInstall = xiSwfUrlStr;
						showExpressInstall(regObj);
					});
				}
			},
			
			getFlashPlayerVersion: function() {
				return { major:ua.pv[0], minor:ua.pv[1], release:ua.pv[2] };
			},
			
			hasFlashPlayerVersion: hasPlayerVersion,
			
			createSWF: function(attObj, parObj, replaceElemIdStr) {
				if (ua.w3cdom) {
					return createSWF(attObj, parObj, replaceElemIdStr);
				}
				else {
					return undefined;
				}
			},
			
			removeSWF: function(objElemIdStr) {
				if (ua.w3cdom) {
					removeSWF(objElemIdStr);
				}
			},
			
			createCSS: function(sel, decl) {
				if (ua.w3cdom) {
					createCSS(sel, decl);
				}
			},
			
			addDomLoadEvent: addDomLoadEvent,
			
			addLoadEvent: addLoadEvent,
			
			getQueryParamValue: function(param) {
				var q = doc.location.search || doc.location.hash;
				if (param === null) {
					return urlEncodeIfNecessary(q);
				}
				if (q) {
					var pairs = q.substring(1).split("&");
					for (var i = 0; i < pairs.length; i++) {
						if (pairs[i].substring(0, pairs[i].indexOf("=")) === param) {
							return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=") + 1)));
						}
					}
				}
				return "";
			},
			
			// For internal usage only
			expressInstallCallback: function() {
				if (isExpressInstallActive && storedAltContent) {
					var obj = getElementById(EXPRESS_INSTALL_ID);
					if (obj) {
						obj.parentNode.replaceChild(storedAltContent, obj);
						if (storedAltContentId) {
							setVisibility(storedAltContentId, true);
							if (ua.ie && ua.win) {
								storedAltContent.style.display = "block";
							}
						}
						storedAltContent = null;
						storedAltContentId = null;
						isExpressInstallActive = false;
					}
				} 
			}
		};
	}();
	// end swfobject
})();