function cc() { }
cc.defaults = {};
(function( window, undefined ) {
var jQuery = function( selector, context ) {
		return new jQuery.fn.init( selector, context );
	},
	_jQuery = window.jQuery,
	_$ = window.$,
	document = window.document,
	rootjQuery,
	quickExpr = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
	isSimple = /^.[^:#\[\.,]*$/,
	rnotwhite = /\S/,
	rtrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
	userAgent = navigator.userAgent,
	browserMatch,
	readyBound = false,
	readyList = [],
	DOMContentLoaded,
	toString = Object.prototype.toString,
	hasOwnProperty = Object.prototype.hasOwnProperty,
	push = Array.prototype.push,
	slice = Array.prototype.slice,
	indexOf = Array.prototype.indexOf;
jQuery.fn = jQuery.prototype = {
	init: function( selector, context ) {
		var match, elem, ret, doc;
		if ( !selector ) {
			return this;
		}
		if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}
		if ( selector === "body" && !context ) {
			this.context = document;
			this[0] = document.body;
			this.selector = "body";
			this.length = 1;
			return this;
		}
		if ( typeof selector === "string" ) {
			match = quickExpr.exec( selector );
			if ( match && (match[1] || !context) ) {
				if ( match[1] ) {
					doc = (context ? context.ownerDocument || context : document);
					ret = rsingleTag.exec( selector );
					if ( ret ) {
						if ( jQuery.isPlainObject( context ) ) {
							selector = [ document.createElement( ret[1] ) ];
							jQuery.fn.attr.call( selector, context, true );
						} else {
							selector = [ doc.createElement( ret[1] ) ];
						}
					} else {
						ret = buildFragment( [ match[1] ], [ doc ] );
						selector = (ret.cacheable ? ret.fragment.cloneNode(true) : ret.fragment).childNodes;
					}
					return jQuery.merge( this, selector );
				} else {
					elem = document.getElementById( match[2] );
					if ( elem ) {
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}
						this.length = 1;
						this[0] = elem;
					}
					this.context = document;
					this.selector = selector;
					return this;
				}
			} else if ( !context && /^\w+$/.test( selector ) ) {
				this.selector = selector;
				this.context = document;
				selector = document.getElementsByTagName( selector );
				return jQuery.merge( this, selector );
			} else if ( !context || context.jquery ) {
				return (context || rootjQuery).find( selector );
			} else {
				return jQuery( context ).find( selector );
			}
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}
		if (selector.selector !== undefined) {
			this.selector = selector.selector;
			this.context = selector.context;
		}
		return jQuery.makeArray( selector, this );
	},
	selector: "",
	jquery: "1.4.2",
	length: 0,
	size: function() {
		return this.length;
	},
	toArray: function() {
		return slice.call( this, 0 );
	},
	get: function( num ) {
		return num == null ?
			this.toArray() :
			( num < 0 ? this.slice(num)[ 0 ] : this[ num ] );
	},
	pushStack: function( elems, name, selector ) {
		var ret = jQuery();
		if ( jQuery.isArray( elems ) ) {
			push.apply( ret, elems );
		} else {
			jQuery.merge( ret, elems );
		}
		ret.prevObject = this;
		ret.context = this.context;
		if ( name === "find" ) {
			ret.selector = this.selector + (this.selector ? " " : "") + selector;
		} else if ( name ) {
			ret.selector = this.selector + "." + name + "(" + selector + ")";
		}
		return ret;
	},
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},
	ready: function( fn ) {
		jQuery.bindReady();
		if ( jQuery.isReady ) {
			fn.call( document, jQuery );
		} else if ( readyList ) {
			readyList.push( fn );
		}
		return this;
	},
	eq: function( i ) {
		return i === -1 ?
			this.slice( i ) :
			this.slice( i, +i + 1 );
	},
	first: function() {
		return this.eq( 0 );
	},
	last: function() {
		return this.eq( -1 );
	},
	slice: function() {
		return this.pushStack( slice.apply( this, arguments ),
			"slice", slice.call(arguments).join(",") );
	},
	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},
	end: function() {
		return this.prevObject || jQuery(null);
	},
	push: push,
	sort: [].sort,
	splice: [].splice
};
jQuery.fn.init.prototype = jQuery.fn;
jQuery.extend = jQuery.fn.extend = function() {
	var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options, name, src, copy;
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		i = 2;
	}
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}
	if ( length === i ) {
		target = this;
		--i;
	}
	for ( ; i < length; i++ ) {
		if ( (options = arguments[ i ]) != null ) {
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];
				if ( target === copy ) {
					continue;
				}
				if ( deep && copy && ( jQuery.isPlainObject(copy) || jQuery.isArray(copy) ) ) {
					var clone = src && ( jQuery.isPlainObject(src) || jQuery.isArray(src) ) ? src
						: jQuery.isArray(copy) ? [] : {};
					target[ name ] = jQuery.extend( deep, clone, copy );
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}
	return target;
};
jQuery.extend({
	noConflict: function( deep ) {
		window.$ = _$;
		if ( deep ) {
			window.jQuery = _jQuery;
		}
		return jQuery;
	},
	isReady: false,
	ready: function() {
		if ( !jQuery.isReady ) {
			if ( !document.body ) {
				return setTimeout( jQuery.ready, 13 );
			}
			jQuery.isReady = true;
			if ( readyList ) {
				var fn, i = 0;
				while ( (fn = readyList[ i++ ]) ) {
					fn.call( document, jQuery );
				}
				readyList = null;
			}
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
			}
		}
	},
	bindReady: function() {
		if ( readyBound ) {
			return;
		}
		readyBound = true;
		if ( document.readyState === "complete" ) {
			return jQuery.ready();
		}
		if ( document.addEventListener ) {
			document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
			window.addEventListener( "loaddisabled", jQuery.ready, false );
		} else if ( document.attachEvent ) {
			document.attachEvent("onreadystatechange", DOMContentLoaded);
			window.attachEvent( "onloaddisabled", jQuery.ready );
			var toplevel = false;
			try {
				toplevel = window.frameElement == null;
			} catch(e) {}
			if ( document.documentElement.doScroll && toplevel ) {
				doScrollCheck();
			}
		}
	},
	isFunction: function( obj ) {
		return toString.call(obj) === "[object Function]";
	},
	isArray: function( obj ) {
		return toString.call(obj) === "[object Array]";
	},
	isPlainObject: function( obj ) {
		if ( !obj || toString.call(obj) !== "[object Object]" || obj.nodeType || obj.setInterval ) {
			return false;
		}
		if ( obj.constructor
			&& !hasOwnProperty.call(obj, "constructor")
			&& !hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf") ) {
			return false;
		}
		var key;
		for ( key in obj ) {}
		return key === undefined || hasOwnProperty.call( obj, key );
	},
	isEmptyObject: function( obj ) {
		for ( var name in obj ) {
			return false;
		}
		return true;
	},
	error: function( msg ) {
		throw msg;
	},
	parseJSON: function( data ) {
		if ( typeof data !== "string" || !data ) {
			return null;
		}
		data = jQuery.trim( data );
		if ( /^[\],:{}\s]*$/.test(data.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
			.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
			.replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ) {
			return window.JSON && window.JSON.parse ?
				window.JSON.parse( data ) :
				(new Function("return " + data))();
		} else {
			jQuery.error( "Invalid JSON: " + data );
		}
	},
	noop: function() {},
	globalEval: function( data ) {
		if ( data && rnotwhite.test(data) ) {
			var head = document.getElementsByTagName("head")[0] || document.documentElement,
				script = document.createElement("script");
			script.type = "text/javascript";
			if ( jQuery.support.scriptEval ) {
				script.appendChild( document.createTextNode( data ) );
			} else {
				script.text = data;
			}
			head.insertBefore( script, head.firstChild );
			head.removeChild( script );
		}
	},
	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
	},
	each: function( object, callback, args ) {
		var name, i = 0,
			length = object.length,
			isObj = length === undefined || jQuery.isFunction(object);
		if ( args ) {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.apply( object[ name ], args ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.apply( object[ i++ ], args ) === false ) {
						break;
					}
				}
			}
		} else {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( var value = object[0];
					i < length && callback.call( value, i, value ) !== false; value = object[++i] ) {}
			}
		}
		return object;
	},
	trim: function( text ) {
		return (text || "").replace( rtrim, "" );
	},
	makeArray: function( array, results ) {
		var ret = results || [];
		if ( array != null ) {
			if ( array.length == null || typeof array === "string" || jQuery.isFunction(array) || (typeof array !== "function" && array.setInterval) ) {
				push.call( ret, array );
			} else {
				jQuery.merge( ret, array );
			}
		}
		return ret;
	},
	inArray: function( elem, array ) {
		if ( array.indexOf ) {
			return array.indexOf( elem );
		}
		for ( var i = 0, length = array.length; i < length; i++ ) {
			if ( array[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},
	merge: function( first, second ) {
		var i = first.length, j = 0;
		if ( typeof second.length === "number" ) {
			for ( var l = second.length; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}
		first.length = i;
		return first;
	},
	grep: function( elems, callback, inv ) {
		var ret = [];
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			if ( !inv !== !callback( elems[ i ], i ) ) {
				ret.push( elems[ i ] );
			}
		}
		return ret;
	},
	map: function( elems, callback, arg ) {
		var ret = [], value;
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			value = callback( elems[ i ], i, arg );
			if ( value != null ) {
				ret[ ret.length ] = value;
			}
		}
		return ret.concat.apply( [], ret );
	},
	guid: 1,
	proxy: function( fn, proxy, thisObject ) {
		if ( arguments.length === 2 ) {
			if ( typeof proxy === "string" ) {
				thisObject = fn;
				fn = thisObject[ proxy ];
				proxy = undefined;
			} else if ( proxy && !jQuery.isFunction( proxy ) ) {
				thisObject = proxy;
				proxy = undefined;
			}
		}
		if ( !proxy && fn ) {
			proxy = function() {
				return fn.apply( thisObject || this, arguments );
			};
		}
		if ( fn ) {
			proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;
		}
		return proxy;
	},
	uaMatch: function( ua ) {
		ua = ua.toLowerCase();
		var match = /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
			/(opera)(?:.*version)?[ \/]([\w.]+)/.exec( ua ) ||
			/(msie) ([\w.]+)/.exec( ua ) ||
			!/compatible/.test( ua ) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec( ua ) ||
		  	[];
		return { browser: match[1] || "", version: match[2] || "0" };
	},
	browser: {}
});
browserMatch = jQuery.uaMatch( userAgent );
if ( browserMatch.browser ) {
	jQuery.browser[ browserMatch.browser ] = true;
	jQuery.browser.version = browserMatch.version;
}

if ( jQuery.browser.webkit ) {
	jQuery.browser.safari = true;
}

if ( indexOf ) {
	jQuery.inArray = function( elem, array ) {
		return indexOf.call( array, elem );
	};
}

rootjQuery = jQuery(document);
if ( document.addEventListener ) {
	DOMContentLoaded = function() {
		document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
		jQuery.ready();
	};
} else if ( document.attachEvent ) {
	DOMContentLoaded = function() {
		if ( document.readyState === "complete" ) {
			document.detachEvent( "onreadystatechange", DOMContentLoaded );
			jQuery.ready();
		}
	};
}

function doScrollCheck() {
	if ( jQuery.isReady ) {
		return;
	}
	try {
		document.documentElement.doScroll("left");
	} catch( error ) {
		setTimeout( doScrollCheck, 1 );
		return;
	}
	jQuery.ready();
}

function evalScript( i, elem ) {
	if ( elem.src ) {
		jQuery.ajax({
			url: elem.src,
			async: false,
			dataType: "script"
		});
	} else {
		jQuery.globalEval( elem.text || elem.textContent || elem.innerHTML || "" );
	}
	if ( elem.parentNode ) {
		elem.parentNode.removeChild( elem );
	}
}

function access( elems, key, value, exec, fn, pass ) {
	var length = elems.length;
	if ( typeof key === "object" ) {
		for ( var k in key ) {
			access( elems, k, key[k], exec, fn, value );
		}
		return elems;
	}
	if ( value !== undefined ) {
		exec = !pass && exec && jQuery.isFunction(value);
		for ( var i = 0; i < length; i++ ) {
			fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );
		}
		return elems;
	}
	return length ? fn( elems[0], key ) : undefined;
}

function now() {
	return (new Date).getTime();
}

(function() {
	jQuery.support = {};
	var root = document.documentElement,
		script = document.createElement("script"),
		div = document.createElement("div"),
		id = "script" + now();
	div.style.display = "none";
	div.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
	var all = div.getElementsByTagName("*"),
		a = div.getElementsByTagName("a")[0];
	if ( !all || !all.length || !a ) {
		return;
	}
	jQuery.support = {
		leadingWhitespace: div.firstChild.nodeType === 3,
		tbody: !div.getElementsByTagName("tbody").length,
		htmlSerialize: !!div.getElementsByTagName("link").length,
		style: /red/.test( a.getAttribute("style") ),
		hrefNormalized: a.getAttribute("href") === "/a",
		opacity: /^0.55$/.test( a.style.opacity ),
		cssFloat: !!a.style.cssFloat,
		checkOn: div.getElementsByTagName("input")[0].value === "on",
		optSelected: document.createElement("select").appendChild( document.createElement("option") ).selected,
		parentNode: div.removeChild( div.appendChild( document.createElement("div") ) ).parentNode === null,
		deleteExpando: true,
		checkClone: false,
		scriptEval: false,
		noCloneEvent: true,
		boxModel: null
	};
	script.type = "text/javascript";
	try {
		script.appendChild( document.createTextNode( "window." + id + "=1;" ) );
	} catch(e) {}
	root.insertBefore( script, root.firstChild );
	if ( window[ id ] ) {
		jQuery.support.scriptEval = true;
		delete window[ id ];
	}
	try {
		delete script.test;
	} catch(e) {
		jQuery.support.deleteExpando = false;
	}
	root.removeChild( script );
	if ( div.attachEvent && div.fireEvent ) {
		div.attachEvent("onclick", function click() {
			jQuery.support.noCloneEvent = false;
			div.detachEvent("onclick", click);
		});
		div.cloneNode(true).fireEvent("onclick");
	}
	div = document.createElement("div");
	div.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
	var fragment = document.createDocumentFragment();
	fragment.appendChild( div.firstChild );
	jQuery.support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
	jQuery(function() {
		var div = document.createElement("div");
		div.style.width = div.style.paddingLeft = "1px";
		document.body.appendChild( div );
		jQuery.boxModel = jQuery.support.boxModel = div.offsetWidth === 2;
		document.body.removeChild( div ).style.display = 'none';
		div = null;
	});
	var eventSupported = function( eventName ) {
		var el = document.createElement("div");
		eventName = "on" + eventName;
		var isSupported = (eventName in el);
		if ( !isSupported ) {
			el.setAttribute(eventName, "return;");
			isSupported = typeof el[eventName] === "function";
		}
		el = null;
		return isSupported;
	};
	jQuery.support.submitBubbles = eventSupported("submit");
	jQuery.support.changeBubbles = eventSupported("change");
	root = script = div = all = a = null;
})();
jQuery.props = {
	"for": "htmlFor",
	"class": "className",
	readonly: "readOnly",
	maxlength: "maxLength",
	cellspacing: "cellSpacing",
	rowspan: "rowSpan",
	colspan: "colSpan",
	tabindex: "tabIndex",
	usemap: "useMap",
	frameborder: "frameBorder"
};
var expando = "jQuery" + now(), uuid = 0, windowData = {};
jQuery.extend({
	cache: {},
	expando:expando,
	noData: {
		"embed": true,
		"object": true,
		"applet": true
	},
	data: function( elem, name, data ) {
		if ( elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()] ) {
			return;
		}
		elem = elem == window ?
			windowData :
			elem;
		var id = elem[ expando ], cache = jQuery.cache, thisCache;
		if ( !id && typeof name === "string" && data === undefined ) {
			return null;
		}
		if ( !id ) {
			id = ++uuid;
		}
		if ( typeof name === "object" ) {
			elem[ expando ] = id;
			thisCache = cache[ id ] = jQuery.extend(true, {}, name);
		} else if ( !cache[ id ] ) {
			elem[ expando ] = id;
			cache[ id ] = {};
		}
		thisCache = cache[ id ];
		if ( data !== undefined ) {
			thisCache[ name ] = data;
		}
		return typeof name === "string" ? thisCache[ name ] : thisCache;
	},
	removeData: function( elem, name ) {
		if ( elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()] ) {
			return;
		}
		elem = elem == window ?
			windowData :
			elem;
		var id = elem[ expando ], cache = jQuery.cache, thisCache = cache[ id ];
		if ( name ) {
			if ( thisCache ) {
				delete thisCache[ name ];
				if ( jQuery.isEmptyObject(thisCache) ) {
					jQuery.removeData( elem );
				}
			}
		} else {
			if ( jQuery.support.deleteExpando ) {
				delete elem[ jQuery.expando ];
			} else if ( elem.removeAttribute ) {
				elem.removeAttribute( jQuery.expando );
			}
			delete cache[ id ];
		}
	}
});
jQuery.fn.extend({
	data: function( key, value ) {
		if ( typeof key === "undefined" && this.length ) {
			return jQuery.data( this[0] );
		} else if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}
		var parts = key.split(".");
		parts[1] = parts[1] ? "." + parts[1] : "";
		if ( value === undefined ) {
			var data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);
			if ( data === undefined && this.length ) {
				data = jQuery.data( this[0], key );
			}
			return data === undefined && parts[1] ?
				this.data( parts[0] ) :
				data;
		} else {
			return this.trigger("setData" + parts[1] + "!", [parts[0], value]).each(function() {
				jQuery.data( this, key, value );
			});
		}
	},
	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});
jQuery.extend({
	queue: function( elem, type, data ) {
		if ( !elem ) {
			return;
		}
		type = (type || "fx") + "queue";
		var q = jQuery.data( elem, type );
		if ( !data ) {
			return q || [];
		}
		if ( !q || jQuery.isArray(data) ) {
			q = jQuery.data( elem, type, jQuery.makeArray(data) );
		} else {
			q.push( data );
		}
		return q;
	},
	dequeue: function( elem, type ) {
		type = type || "fx";
		var queue = jQuery.queue( elem, type ), fn = queue.shift();
		if ( fn === "inprogress" ) {
			fn = queue.shift();
		}
		if ( fn ) {
			if ( type === "fx" ) {
				queue.unshift("inprogress");
			}
			fn.call(elem, function() {
				jQuery.dequeue(elem, type);
			});
		}
	}
});
jQuery.fn.extend({
	queue: function( type, data ) {
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
		}
		if ( data === undefined ) {
			return jQuery.queue( this[0], type );
		}
		return this.each(function( i, elem ) {
			var queue = jQuery.queue( this, type, data );
			if ( type === "fx" && queue[0] !== "inprogress" ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";
		return this.queue( type, function() {
			var elem = this;
			setTimeout(function() {
				jQuery.dequeue( elem, type );
			}, time );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	}
});
var rclass = /[\n\t]/g,
	rspace = /\s+/,
	rreturn = /\r/g,
	rspecialurl = /href|src|style/,
	rtype = /(button|input)/i,
	rfocusable = /(button|input|object|select|textarea)/i,
	rclickable = /^(a|area)$/i,
	rradiocheck = /radio|checkbox/;
jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, name, value, true, jQuery.attr );
	},
	removeAttr: function( name, fn ) {
		return this.each(function(){
			jQuery.attr( this, name, "" );
			if ( this.nodeType === 1 ) {
				this.removeAttribute( name );
			}
		});
	},
	addClass: function( value ) {
		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				self.addClass( value.call(this, i, self.attr("class")) );
			});
		}
		if ( value && typeof value === "string" ) {
			var classNames = (value || "").split( rspace );
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var elem = this[i];
				if ( elem.nodeType === 1 ) {
					if ( !elem.className ) {
						elem.className = value;
					} else {
						var className = " " + elem.className + " ", setClass = elem.className;
						for ( var c = 0, cl = classNames.length; c < cl; c++ ) {
							if ( className.indexOf( " " + classNames[c] + " " ) < 0 ) {
								setClass += " " + classNames[c];
							}
						}
						elem.className = jQuery.trim( setClass );
					}
				}
			}
		}
		return this;
	},
	removeClass: function( value ) {
		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				self.removeClass( value.call(this, i, self.attr("class")) );
			});
		}
		if ( (value && typeof value === "string") || value === undefined ) {
			var classNames = (value || "").split(rspace);
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var elem = this[i];
				if ( elem.nodeType === 1 && elem.className ) {
					if ( value ) {
						var className = (" " + elem.className + " ").replace(rclass, " ");
						for ( var c = 0, cl = classNames.length; c < cl; c++ ) {
							className = className.replace(" " + classNames[c] + " ", " ");
						}
						elem.className = jQuery.trim( className );
					} else {
						elem.className = "";
					}
				}
			}
		}
		return this;
	},
	toggleClass: function( value, stateVal ) {
		var type = typeof value, isBool = typeof stateVal === "boolean";
		if ( jQuery.isFunction( value ) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				self.toggleClass( value.call(this, i, self.attr("class"), stateVal), stateVal );
			});
		}
		return this.each(function() {
			if ( type === "string" ) {
				var className, i = 0, self = jQuery(this),
					state = stateVal,
					classNames = value.split( rspace );
				while ( (className = classNames[ i++ ]) ) {
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}
			} else if ( type === "undefined" || type === "boolean" ) {
				if ( this.className ) {
					jQuery.data( this, "__className__", this.className );
				}
				this.className = this.className || value === false ? "" : jQuery.data( this, "__className__" ) || "";
			}
		});
	},
	hasClass: function( selector ) {
		var className = " " + selector + " ";
		for ( var i = 0, l = this.length; i < l; i++ ) {
			if ( (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) > -1 ) {
				return true;
			}
		}
		return false;
	},
	val: function( value ) {
		if ( value === undefined ) {
			var elem = this[0];
			if ( elem ) {
				if ( jQuery.nodeName( elem, "option" ) ) {
					return (elem.attributes.value || {}).specified ? elem.value : elem.text;
				}
				if ( jQuery.nodeName( elem, "select" ) ) {
					var index = elem.selectedIndex,
						values = [],
						options = elem.options,
						one = elem.type === "select-one";
					if ( index < 0 ) {
						return null;
					}
					for ( var i = one ? index : 0, max = one ? index + 1 : options.length; i < max; i++ ) {
						var option = options[ i ];
						if ( option.selected ) {
							value = jQuery(option).val();
							if ( one ) {
								return value;
							}
							values.push( value );
						}
					}
					return values;
				}
				if ( rradiocheck.test( elem.type ) && !jQuery.support.checkOn ) {
					return elem.getAttribute("value") === null ? "on" : elem.value;
				}
				return (elem.value || "").replace(rreturn, "");
			}
			return undefined;
		}
		var isFunction = jQuery.isFunction(value);
		return this.each(function(i) {
			var self = jQuery(this), val = value;
			if ( this.nodeType !== 1 ) {
				return;
			}
			if ( isFunction ) {
				val = value.call(this, i, self.val());
			}
			if ( typeof val === "number" ) {
				val += "";
			}
			if ( jQuery.isArray(val) && rradiocheck.test( this.type ) ) {
				this.checked = jQuery.inArray( self.val(), val ) >= 0;
			} else if ( jQuery.nodeName( this, "select" ) ) {
				var values = jQuery.makeArray(val);
				jQuery( "option", this ).each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});
				if ( !values.length ) {
					this.selectedIndex = -1;
				}
			} else {
				this.value = val;
			}
		});
	}
});
jQuery.extend({
	attrFn: {
		val: true,
		css: true,
		html: true,
		text: true,
		data: true,
		width: true,
		height: true,
		offset: true
	},
	attr: function( elem, name, value, pass ) {
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 ) {
			return undefined;
		}
		if ( pass && name in jQuery.attrFn ) {
			return jQuery(elem)[name](value);
		}
		var notxml = elem.nodeType !== 1 || !jQuery.isXMLDoc( elem ),
			set = value !== undefined;
		name = notxml && jQuery.props[ name ] || name;
		if ( elem.nodeType === 1 ) {
			var special = rspecialurl.test( name );
			if ( name === "selected" && !jQuery.support.optSelected ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
			if ( name in elem && notxml && !special ) {
				if ( set ) {
					if ( name === "type" && rtype.test( elem.nodeName ) && elem.parentNode ) {
						jQuery.error( "type property can't be changed" );
					}
					elem[ name ] = value;
				}
				if ( jQuery.nodeName( elem, "form" ) && elem.getAttributeNode(name) ) {
					return elem.getAttributeNode( name ).nodeValue;
				}
				if ( name === "tabIndex" ) {
					var attributeNode = elem.getAttributeNode( "tabIndex" );
					return attributeNode && attributeNode.specified ?
						attributeNode.value :
						rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							undefined;
				}
				return elem[ name ];
			}
			if ( !jQuery.support.style && notxml && name === "style" ) {
				if ( set ) {
					elem.style.cssText = "" + value;
				}
				return elem.style.cssText;
			}
			if ( set ) {
				elem.setAttribute( name, "" + value );
			}
			var attr = !jQuery.support.hrefNormalized && notxml && special ?
					elem.getAttribute( name, 2 ) :
					elem.getAttribute( name );
			return attr === null ? undefined : attr;
		}
		return jQuery.style( elem, name, value );
	}
});
var rnamespaces = /\.(.*)$/,
	fcleanup = function( nm ) {
		return nm.replace(/[^\w\s\.\|`]/g, function( ch ) {
			return "\\" + ch;
		});
	};
jQuery.event = {
	add: function( elem, types, handler, data ) {
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}
		if ( elem.setInterval && ( elem !== window && !elem.frameElement ) ) {
			elem = window;
		}
		var handleObjIn, handleObj;
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
		}
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}
		var elemData = jQuery.data( elem );
		if ( !elemData ) {
			return;
		}
		var events = elemData.events = elemData.events || {},
			eventHandle = elemData.handle, eventHandle;
		if ( !eventHandle ) {
			elemData.handle = eventHandle = function() {
				return typeof jQuery !== "undefined" && !jQuery.event.triggered ?
					jQuery.event.handle.apply( eventHandle.elem, arguments ) :
					undefined;
			};
		}
		eventHandle.elem = elem;
		types = types.split(" ");
		var type, i = 0, namespaces;
		while ( (type = types[ i++ ]) ) {
			handleObj = handleObjIn ?
				jQuery.extend({}, handleObjIn) :
				{ handler: handler, data: data };
			if ( type.indexOf(".") > -1 ) {
				namespaces = type.split(".");
				type = namespaces.shift();
				handleObj.namespace = namespaces.slice(0).sort().join(".");
			} else {
				namespaces = [];
				handleObj.namespace = "";
			}
			handleObj.type = type;
			handleObj.guid = handler.guid;
			var handlers = events[ type ],
				special = jQuery.event.special[ type ] || {};
			if ( !handlers ) {
				handlers = events[ type ] = [];
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}
			if ( special.add ) {
				special.add.call( elem, handleObj );
				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}
			handlers.push( handleObj );
			jQuery.event.global[ type ] = true;
		}
		elem = null;
	},
	global: {},
	remove: function( elem, types, handler, pos ) {
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}
		var ret, type, fn, i = 0, all, namespaces, namespace, special, eventType, handleObj, origType,
			elemData = jQuery.data( elem ),
			events = elemData && elemData.events;
		if ( !elemData || !events ) {
			return;
		}
		if ( types && types.type ) {
			handler = types.handler;
			types = types.type;
		}
		if ( !types || typeof types === "string" && types.charAt(0) === "." ) {
			types = types || "";
			for ( type in events ) {
				jQuery.event.remove( elem, type + types );
			}
			return;
		}
		types = types.split(" ");
		while ( (type = types[ i++ ]) ) {
			origType = type;
			handleObj = null;
			all = type.indexOf(".") < 0;
			namespaces = [];
			if ( !all ) {
				namespaces = type.split(".");
				type = namespaces.shift();
				namespace = new RegExp("(^|\\.)" +
					jQuery.map( namespaces.slice(0).sort(), fcleanup ).join("\\.(?:.*\\.)?") + "(\\.|$)")
			}
			eventType = events[ type ];
			if ( !eventType ) {
				continue;
			}
			if ( !handler ) {
				for ( var j = 0; j < eventType.length; j++ ) {
					handleObj = eventType[ j ];
					if ( all || namespace.test( handleObj.namespace ) ) {
						jQuery.event.remove( elem, origType, handleObj.handler, j );
						eventType.splice( j--, 1 );
					}
				}
				continue;
			}
			special = jQuery.event.special[ type ] || {};
			for ( var j = pos || 0; j < eventType.length; j++ ) {
				handleObj = eventType[ j ];
				if ( handler.guid === handleObj.guid ) {
					if ( all || namespace.test( handleObj.namespace ) ) {
						if ( pos == null ) {
							eventType.splice( j--, 1 );
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
					if ( pos != null ) {
						break;
					}
				}
			}
			if ( eventType.length === 0 || pos != null && eventType.length === 1 ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces ) === false ) {
					removeEvent( elem, type, elemData.handle );
				}
				ret = null;
				delete events[ type ];
			}
		}
		if ( jQuery.isEmptyObject( events ) ) {
			var handle = elemData.handle;
			if ( handle ) {
				handle.elem = null;
			}
			delete elemData.events;
			delete elemData.handle;
			if ( jQuery.isEmptyObject( elemData ) ) {
				jQuery.removeData( elem );
			}
		}
	},
	trigger: function( event, data, elem  ) {
		var type = event.type || event,
			bubbling = arguments[3];
		if ( !bubbling ) {
			event = typeof event === "object" ?
				event[expando] ? event :
				jQuery.extend( jQuery.Event(type), event ) :
				jQuery.Event(type);
			if ( type.indexOf("!") >= 0 ) {
				event.type = type = type.slice(0, -1);
				event.exclusive = true;
			}
			if ( !elem ) {
				event.stopPropagation();
				if ( jQuery.event.global[ type ] ) {
					jQuery.each( jQuery.cache, function() {
						if ( this.events && this.events[type] ) {
							jQuery.event.trigger( event, data, this.handle.elem );
						}
					});
				}
			}
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 ) {
				return undefined;
			}
			event.result = undefined;
			event.target = elem;
			data = jQuery.makeArray( data );
			data.unshift( event );
		}
		event.currentTarget = elem;
		var handle = jQuery.data( elem, "handle" );
		if ( handle ) {
			handle.apply( elem, data );
		}
		var parent = elem.parentNode || elem.ownerDocument;
		try {
			if ( !(elem && elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()]) ) {
				if ( elem[ "on" + type ] && elem[ "on" + type ].apply( elem, data ) === false ) {
					event.result = false;
				}
			}
		} catch (e) {}
		if ( !event.isPropagationStopped() && parent ) {
			jQuery.event.trigger( event, data, parent, true );
		} else if ( !event.isDefaultPrevented() ) {
			var target = event.target, old,
				isClick = jQuery.nodeName(target, "a") && type === "click",
				special = jQuery.event.special[ type ] || {};
			if ( (!special._default || special._default.call( elem, event ) === false) &&
				!isClick && !(target && target.nodeName && jQuery.noData[target.nodeName.toLowerCase()]) ) {
				try {
					if ( target[ type ] ) {
						old = target[ "on" + type ];
						if ( old ) {
							target[ "on" + type ] = null;
						}
						jQuery.event.triggered = true;
						target[ type ]();
					}
				} catch (e) {}
				if ( old ) {
					target[ "on" + type ] = old;
				}
				jQuery.event.triggered = false;
			}
		}
	},
	handle: function( event ) {
		var all, handlers, namespaces, namespace, events;
		event = arguments[0] = jQuery.event.fix( event || window.event );
		event.currentTarget = this;
		all = event.type.indexOf(".") < 0 && !event.exclusive;
		if ( !all ) {
			namespaces = event.type.split(".");
			event.type = namespaces.shift();
			namespace = new RegExp("(^|\\.)" + namespaces.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)");
		}
		var events = jQuery.data(this, "events"), handlers = events[ event.type ];
		if ( events && handlers ) {
			handlers = handlers.slice(0);
			for ( var j = 0, l = handlers.length; j < l; j++ ) {
				var handleObj = handlers[ j ];
				if ( all || namespace.test( handleObj.namespace ) ) {
					event.handler = handleObj.handler;
					event.data = handleObj.data;
					event.handleObj = handleObj;
					var ret = handleObj.handler.apply( this, arguments );
					if ( ret !== undefined ) {
						event.result = ret;
						if ( ret === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
					if ( event.isImmediatePropagationStopped() ) {
						break;
					}
				}
			}
		}
		return event.result;
	},
	props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
	fix: function( event ) {
		if ( event[ expando ] ) {
			return event;
		}
		var originalEvent = event;
		event = jQuery.Event( originalEvent );
		for ( var i = this.props.length, prop; i; ) {
			prop = this.props[ --i ];
			event[ prop ] = originalEvent[ prop ];
		}
		if ( !event.target ) {
			event.target = event.srcElement || document;
		}
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}
		if ( !event.relatedTarget && event.fromElement ) {
			event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
		}
		if ( event.pageX == null && event.clientX != null ) {
			var doc = document.documentElement, body = document.body;
			event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
			event.pageY = event.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0);
		}
		if ( !event.which && ((event.charCode || event.charCode === 0) ? event.charCode : event.keyCode) ) {
			event.which = event.charCode || event.keyCode;
		}
		if ( !event.metaKey && event.ctrlKey ) {
			event.metaKey = event.ctrlKey;
		}
		if ( !event.which && event.button !== undefined ) {
			event.which = (event.button & 1 ? 1 : ( event.button & 2 ? 3 : ( event.button & 4 ? 2 : 0 ) ));
		}
		return event;
	},
	guid: 1E8,
	proxy: jQuery.proxy,
	special: {
		ready: {
			setup: jQuery.bindReady,
			teardown: jQuery.noop
		},
		live: {
			add: function( handleObj ) {
				jQuery.event.add( this, handleObj.origType, jQuery.extend({}, handleObj, {handler: liveHandler}) );
			},
			remove: function( handleObj ) {
				var remove = true,
					type = handleObj.origType.replace(rnamespaces, "");
				jQuery.each( jQuery.data(this, "events").live || [], function() {
					if ( type === this.origType.replace(rnamespaces, "") ) {
						remove = false;
						return false;
					}
				});
				if ( remove ) {
					jQuery.event.remove( this, handleObj.origType, liveHandler );
				}
			}
		},
		beforeunloaddisabled: {
			setup: function( data, namespaces, eventHandle ) {
				if ( this.setInterval ) {
					this.onbeforeunloaddisabled = eventHandle;
				}
				return false;
			},
			teardown: function( namespaces, eventHandle ) {
				if ( this.onbeforeunloaddisabled === eventHandle ) {
					this.onbeforeunloaddisabled = null;
				}
			}
		}
	}
};
var removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		elem.removeEventListener( type, handle, false );
	} :
	function( elem, type, handle ) {
		elem.detachEvent( "on" + type, handle );
	};
jQuery.Event = function( src ) {
	if ( !this.preventDefault ) {
		return new jQuery.Event( src );
	}
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;
	} else {
		this.type = src;
	}
	this.timeStamp = now();
	this[ expando ] = true;
};
function returnFalse() {
	return false;
}

function returnTrue() {
	return true;
}

jQuery.Event.prototype = {
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;
		var e = this.originalEvent;
		if ( !e ) {
			return;
		}
		if ( e.preventDefault ) {
			e.preventDefault();
		}
		e.returnValue = false;
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;
		var e = this.originalEvent;
		if ( !e ) {
			return;
		}
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};
var withinElement = function( event ) {
	var parent = event.relatedTarget;
	try {
		while ( parent && parent !== this ) {
			parent = parent.parentNode;
		}
		if ( parent !== this ) {
			event.type = event.data;
			jQuery.event.handle.apply( this, arguments );
		}
	} catch(e) { }
},
delegate = function( event ) {
	event.type = event.data;
	jQuery.event.handle.apply( this, arguments );
};
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		setup: function( data ) {
			jQuery.event.add( this, fix, data && data.selector ? delegate : withinElement, orig );
		},
		teardown: function( data ) {
			jQuery.event.remove( this, fix, data && data.selector ? delegate : withinElement );
		}
	};
});
if ( !jQuery.support.submitBubbles ) {
	jQuery.event.special.submit = {
		setup: function( data, namespaces ) {
			if ( this.nodeName.toLowerCase() !== "form" ) {
				jQuery.event.add(this, "click.specialSubmit", function( e ) {
					var elem = e.target, type = elem.type;
					if ( (type === "submit" || type === "image") && jQuery( elem ).closest("form").length ) {
						return trigger( "submit", this, arguments );
					}
				});
				jQuery.event.add(this, "keypress.specialSubmit", function( e ) {
					var elem = e.target, type = elem.type;
					if ( (type === "text" || type === "password") && jQuery( elem ).closest("form").length && e.keyCode === 13 ) {
						return trigger( "submit", this, arguments );
					}
				});
			} else {
				return false;
			}
		},
		teardown: function( namespaces ) {
			jQuery.event.remove( this, ".specialSubmit" );
		}
	};
}

if ( !jQuery.support.changeBubbles ) {
	var formElems = /textarea|input|select/i,
	changeFilters,
	getVal = function( elem ) {
		var type = elem.type, val = elem.value;
		if ( type === "radio" || type === "checkbox" ) {
			val = elem.checked;
		} else if ( type === "select-multiple" ) {
			val = elem.selectedIndex > -1 ?
				jQuery.map( elem.options, function( elem ) {
					return elem.selected;
				}).join("-") :
				"";
		} else if ( elem.nodeName.toLowerCase() === "select" ) {
			val = elem.selectedIndex;
		}
		return val;
	},
	testChange = function testChange( e ) {
		var elem = e.target, data, val;
		if ( !formElems.test( elem.nodeName ) || elem.readOnly ) {
			return;
		}
		data = jQuery.data( elem, "_change_data" );
		val = getVal(elem);
		if ( e.type !== "focusout" || elem.type !== "radio" ) {
			jQuery.data( elem, "_change_data", val );
		}
		if ( data === undefined || val === data ) {
			return;
		}
		if ( data != null || val ) {
			e.type = "change";
			return jQuery.event.trigger( e, arguments[1], elem );
		}
	};
	jQuery.event.special.change = {
		filters: {
			focusout: testChange,
			click: function( e ) {
				var elem = e.target, type = elem.type;
				if ( type === "radio" || type === "checkbox" || elem.nodeName.toLowerCase() === "select" ) {
					return testChange.call( this, e );
				}
			},
			keydown: function( e ) {
				var elem = e.target, type = elem.type;
				if ( (e.keyCode === 13 && elem.nodeName.toLowerCase() !== "textarea") ||
					(e.keyCode === 32 && (type === "checkbox" || type === "radio")) ||
					type === "select-multiple" ) {
					return testChange.call( this, e );
				}
			},
			beforeactivate: function( e ) {
				var elem = e.target;
				jQuery.data( elem, "_change_data", getVal(elem) );
			}
		},
		setup: function( data, namespaces ) {
			if ( this.type === "file" ) {
				return false;
			}
			for ( var type in changeFilters ) {
				jQuery.event.add( this, type + ".specialChange", changeFilters[type] );
			}
			return formElems.test( this.nodeName );
		},
		teardown: function( namespaces ) {
			jQuery.event.remove( this, ".specialChange" );
			return formElems.test( this.nodeName );
		}
	};
	changeFilters = jQuery.event.special.change.filters;
}

function trigger( type, elem, args ) {
	args[0].type = type;
	return jQuery.event.handle.apply( elem, args );
}

if ( document.addEventListener ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {
		jQuery.event.special[ fix ] = {
			setup: function() {
				this.addEventListener( orig, handler, true );
			},
			teardown: function() {
				this.removeEventListener( orig, handler, true );
			}
		};
		function handler( e ) {
			e = jQuery.event.fix( e );
			e.type = fix;
			return jQuery.event.handle.call( this, e );
		}
	});
}

jQuery.each(["bind", "one"], function( i, name ) {
	jQuery.fn[ name ] = function( type, data, fn ) {
		if ( typeof type === "object" ) {
			for ( var key in type ) {
				this[ name ](key, data, type[key], fn);
			}
			return this;
		}
		if ( jQuery.isFunction( data ) ) {
			fn = data;
			data = undefined;
		}
		var handler = name === "one" ? jQuery.proxy( fn, function( event ) {
			jQuery( this ).unbind( event, handler );
			return fn.apply( this, arguments );
		}) : fn;
		if ( type === "unloaddisabled" && name !== "one" ) {
			this.one( type, data, fn );
		} else {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				jQuery.event.add( this[i], type, handler, data );
			}
		}
		return this;
	};
});
jQuery.fn.extend({
	unbind: function( type, fn ) {
		if ( typeof type === "object" && !type.preventDefault ) {
			for ( var key in type ) {
				this.unbind(key, type[key]);
			}
		} else {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				jQuery.event.remove( this[i], type, fn );
			}
		}
		return this;
	},
	delegate: function( selector, types, data, fn ) {
		return this.live( types, data, fn, selector );
	},
	undelegate: function( selector, types, fn ) {
		if ( arguments.length === 0 ) {
				return this.unbind( "live" );
		} else {
			return this.die( types, null, fn, selector );
		}
	},
	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		if ( this[0] ) {
			var event = jQuery.Event( type );
			event.preventDefault();
			event.stopPropagation();
			jQuery.event.trigger( event, data, this[0] );
			return event.result;
		}
	},
	toggle: function( fn ) {
		var args = arguments, i = 1;
		while ( i < args.length ) {
			jQuery.proxy( fn, args[ i++ ] );
		}
		return this.click( jQuery.proxy( fn, function( event ) {
			var lastToggle = ( jQuery.data( this, "lastToggle" + fn.guid ) || 0 ) % i;
			jQuery.data( this, "lastToggle" + fn.guid, lastToggle + 1 );
			event.preventDefault();
			return args[ lastToggle ].apply( this, arguments ) || false;
		}));
	},
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
});
var liveMap = {
	focus: "focusin",
	blur: "focusout",
	mouseenter: "mouseover",
	mouseleave: "mouseout"
};
jQuery.each(["live", "die"], function( i, name ) {
	jQuery.fn[ name ] = function( types, data, fn, origSelector  ) {
		var type, i = 0, match, namespaces, preType,
			selector = origSelector || this.selector,
			context = origSelector ? this : jQuery( this.context );
		if ( jQuery.isFunction( data ) ) {
			fn = data;
			data = undefined;
		}
		types = (types || "").split(" ");
		while ( (type = types[ i++ ]) != null ) {
			match = rnamespaces.exec( type );
			namespaces = "";
			if ( match )  {
				namespaces = match[0];
				type = type.replace( rnamespaces, "" );
			}
			if ( type === "hover" ) {
				types.push( "mouseenter" + namespaces, "mouseleave" + namespaces );
				continue;
			}
			preType = type;
			if ( type === "focus" || type === "blur" ) {
				types.push( liveMap[ type ] + namespaces );
				type = type + namespaces;
			} else {
				type = (liveMap[ type ] || type) + namespaces;
			}
			if ( name === "live" ) {
				context.each(function(){
					jQuery.event.add( this, liveConvert( type, selector ),
						{ data: data, selector: selector, handler: fn, origType: type, origHandler: fn, preType: preType } );
				});
			} else {
				context.unbind( liveConvert( type, selector ), fn );
			}
		}
		return this;
	}
});
function liveHandler( event ) {
	var stop, elems = [], selectors = [], args = arguments,
		related, match, handleObj, elem, j, i, l, data,
		events = jQuery.data( this, "events" );
	if ( event.liveFired === this || !events || !events.live || event.button && event.type === "click" ) {
		return;
	}
	event.liveFired = this;
	var live = events.live.slice(0);
	for ( j = 0; j < live.length; j++ ) {
		handleObj = live[j];
		if ( handleObj.origType.replace( rnamespaces, "" ) === event.type ) {
			selectors.push( handleObj.selector );
		} else {
			live.splice( j--, 1 );
		}
	}
	match = jQuery( event.target ).closest( selectors, event.currentTarget );
	for ( i = 0, l = match.length; i < l; i++ ) {
		for ( j = 0; j < live.length; j++ ) {
			handleObj = live[j];
			if ( match[i].selector === handleObj.selector ) {
				elem = match[i].elem;
				related = null;
				if ( handleObj.preType === "mouseenter" || handleObj.preType === "mouseleave" ) {
					related = jQuery( event.relatedTarget ).closest( handleObj.selector )[0];
				}
				if ( !related || related !== elem ) {
					elems.push({ elem: elem, handleObj: handleObj });
				}
			}
		}
	}
	for ( i = 0, l = elems.length; i < l; i++ ) {
		match = elems[i];
		event.currentTarget = match.elem;
		event.data = match.handleObj.data;
		event.handleObj = match.handleObj;
		if ( match.handleObj.origHandler.apply( match.elem, args ) === false ) {
			stop = false;
			break;
		}
	}
	return stop;
}

function liveConvert( type, selector ) {
	return "live." + (type && type !== "*" ? type + "." : "") + selector.replace(/\./g, "`").replace(/ /g, "&");
}

jQuery.each( ("blur focus focusin focusout loaddisabled resize scroll unloaddisabled click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error").split(" "), function( i, name ) {
	jQuery.fn[ name ] = function( fn ) {
		return fn ? this.bind( name, fn ) : this.trigger( name );
	};
	if ( jQuery.attrFn ) {
		jQuery.attrFn[ name ] = true;
	}
});
if ( window.attachEvent && !window.addEventListener ) {
	window.attachEvent("onunloaddisabled", function() {
		for ( var id in jQuery.cache ) {
			if ( jQuery.cache[ id ].handle ) {
				try {
					jQuery.event.remove( jQuery.cache[ id ].handle.elem );
				} catch(e) {}
			}
		}
	});
}

(function(){
var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true;
[0, 0].sort(function(){
	baseHasDuplicate = false;
	return 0;
});
var Sizzle = function(selector, context, results, seed) {
	results = results || [];
	var origContext = context = context || document;
	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}
	var parts = [], m, set, checkSet, extra, prune = true, contextXML = isXML(context),
		soFar = selector;
	while ( (chunker.exec(""), m = chunker.exec(soFar)) !== null ) {
		soFar = m[3];
		parts.push( m[1] );
		if ( m[2] ) {
			extra = m[3];
			break;
		}
	}
	if ( parts.length > 1 && origPOS.exec( selector ) ) {
		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context );
		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );
			while ( parts.length ) {
				selector = parts.shift();
				if ( Expr.relative[ selector ] ) {
					selector += parts.shift();
				}
				set = posProcess( selector, set );
			}
		}
	} else {
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {
			var ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ? Sizzle.filter( ret.expr, ret.set )[0] : ret.set[0];
		}
		if ( context ) {
			var ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );
			set = ret.expr ? Sizzle.filter( ret.expr, ret.set ) : ret.set;
			if ( parts.length > 0 ) {
				checkSet = makeArray(set);
			} else {
				prune = false;
			}
			while ( parts.length ) {
				var cur = parts.pop(), pop = cur;
				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}
				if ( pop == null ) {
					pop = context;
				}
				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}
		} else {
			checkSet = parts = [];
		}
	}
	if ( !checkSet ) {
		checkSet = set;
	}
	if ( !checkSet ) {
		Sizzle.error( cur || selector );
	}
	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );
		} else if ( context && context.nodeType === 1 ) {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}
		} else {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}
	} else {
		makeArray( checkSet, results );
	}
	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}
	return results;
};
Sizzle.uniqueSort = function(results){
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort(sortOrder);
		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[i-1] ) {
					results.splice(i--, 1);
				}
			}
		}
	}
	return results;
};
Sizzle.matches = function(expr, set){
	return Sizzle(expr, null, null, set);
};
Sizzle.find = function(expr, context, isXML){
	var set, match;
	if ( !expr ) {
		return [];
	}
	for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
		var type = Expr.order[i], match;
		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			var left = match[1];
			match.splice(1,1);
			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace(/\\/g, "");
				set = Expr.find[ type ]( match, context, isXML );
				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}
	if ( !set ) {
		set = context.getElementsByTagName("*");
	}
	return {set: set, expr: expr};
};
Sizzle.filter = function(expr, set, inplace, not){
	var old = expr, result = [], curLoop = set, match, anyFound,
		isXMLFilter = set && set[0] && isXML(set[0]);
	while ( expr && set.length ) {
		for ( var type in Expr.filter ) {
			if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
				var filter = Expr.filter[ type ], found, item, left = match[1];
				anyFound = false;
				match.splice(1,1);
				if ( left.substr( left.length - 1 ) === "\\" ) {
					continue;
				}
				if ( curLoop === result ) {
					result = [];
				}
				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );
					if ( !match ) {
						anyFound = found = true;
					} else if ( match === true ) {
						continue;
					}
				}
				if ( match ) {
					for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							var pass = not ^ !!found;
							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;
								} else {
									curLoop[i] = false;
								}
							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}
				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}
					expr = expr.replace( Expr.match[ type ], "" );
					if ( !anyFound ) {
						return [];
					}
					break;
				}
			}
		}
		if ( expr === old ) {
			if ( anyFound == null ) {
				Sizzle.error( expr );
			} else {
				break;
			}
		}
		old = expr;
	}
	return curLoop;
};
Sizzle.error = function( msg ) {
	throw "Syntax error, unrecognized expression: " + msg;
};
var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],
	match: {
		ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
	},
	leftMatch: {},
	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},
	attrHandle: {
		href: function(elem){
			return elem.getAttribute("href");
		}
	},
	relative: {
		"+": function(checkSet, part){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !/\W/.test(part),
				isPartStrNotTag = isPartStr && !isTag;
			if ( isTag ) {
				part = part.toLowerCase();
			}
			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}
					checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
				}
			}
			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},
		">": function(checkSet, part){
			var isPartStr = typeof part === "string";
			if ( isPartStr && !/\W/.test(part) ) {
				part = part.toLowerCase();
				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
					}
				}
			} else {
				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}
				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},
		"": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;
			if ( typeof part === "string" && !/\W/.test(part) ) {
				var nodeCheck = part = part.toLowerCase();
				checkFn = dirNodeCheck;
			}
			checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
		},
		"~": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;
			if ( typeof part === "string" && !/\W/.test(part) ) {
				var nodeCheck = part = part.toLowerCase();
				checkFn = dirNodeCheck;
			}
			checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
		}
	},
	find: {
		ID: function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? [m] : [];
			}
		},
		NAME: function(match, context){
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [], results = context.getElementsByName(match[1]);
				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}
				return ret.length === 0 ? null : ret;
			}
		},
		TAG: function(match, context){
			return context.getElementsByTagName(match[1]);
		}
	},
	preFilter: {
		CLASS: function(match, curLoop, inplace, result, not, isXML){
			match = " " + match[1].replace(/\\/g, "") + " ";
			if ( isXML ) {
				return match;
			}
			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n]/g, " ").indexOf(match) >= 0) ) {
						if ( !inplace ) {
							result.push( elem );
						}
					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}
			return false;
		},
		ID: function(match){
			return match[1].replace(/\\/g, "");
		},
		TAG: function(match, curLoop){
			return match[1].toLowerCase();
		},
		CHILD: function(match){
			if ( match[1] === "nth" ) {
				var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}
			match[0] = done++;
			return match;
		},
		ATTR: function(match, curLoop, inplace, result, not, isXML){
			var name = match[1].replace(/\\/g, "");
			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}
			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}
			return match;
		},
		PSEUDO: function(match, curLoop, inplace, result, not){
			if ( match[1] === "not" ) {
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);
				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
					if ( !inplace ) {
						result.push.apply( result, ret );
					}
					return false;
				}
			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}
			return match;
		},
		POS: function(match){
			match.unshift( true );
			return match;
		}
	},
	filters: {
		enabled: function(elem){
			return elem.disabled === false && elem.type !== "hidden";
		},
		disabled: function(elem){
			return elem.disabled === true;
		},
		checked: function(elem){
			return elem.checked === true;
		},
		selected: function(elem){
			elem.parentNode.selectedIndex;
			return elem.selected === true;
		},
		parent: function(elem){
			return !!elem.firstChild;
		},
		empty: function(elem){
			return !elem.firstChild;
		},
		has: function(elem, i, match){
			return !!Sizzle( match[3], elem ).length;
		},
		header: function(elem){
			return /h\d/i.test( elem.nodeName );
		},
		text: function(elem){
			return "text" === elem.type;
		},
		radio: function(elem){
			return "radio" === elem.type;
		},
		checkbox: function(elem){
			return "checkbox" === elem.type;
		},
		file: function(elem){
			return "file" === elem.type;
		},
		password: function(elem){
			return "password" === elem.type;
		},
		submit: function(elem){
			return "submit" === elem.type;
		},
		image: function(elem){
			return "image" === elem.type;
		},
		reset: function(elem){
			return "reset" === elem.type;
		},
		button: function(elem){
			return "button" === elem.type || elem.nodeName.toLowerCase() === "button";
		},
		input: function(elem){
			return /input|select|textarea|button/i.test(elem.nodeName);
		}
	},
	setFilters: {
		first: function(elem, i){
			return i === 0;
		},
		last: function(elem, i, match, array){
			return i === array.length - 1;
		},
		even: function(elem, i){
			return i % 2 === 0;
		},
		odd: function(elem, i){
			return i % 2 === 1;
		},
		lt: function(elem, i, match){
			return i < match[3] - 0;
		},
		gt: function(elem, i, match){
			return i > match[3] - 0;
		},
		nth: function(elem, i, match){
			return match[3] - 0 === i;
		},
		eq: function(elem, i, match){
			return match[3] - 0 === i;
		}
	},
	filter: {
		PSEUDO: function(elem, match, i, array){
			var name = match[1], filter = Expr.filters[ name ];
			if ( filter ) {
				return filter( elem, i, match, array );
			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || getText([ elem ]) || "").indexOf(match[3]) >= 0;
			} else if ( name === "not" ) {
				var not = match[3];
				for ( var i = 0, l = not.length; i < l; i++ ) {
					if ( not[i] === elem ) {
						return false;
					}
				}
				return true;
			} else {
				Sizzle.error( "Syntax error, unrecognized expression: " + name );
			}
		},
		CHILD: function(elem, match){
			var type = match[1], node = elem;
			switch (type) {
				case 'only':
				case 'first':
					while ( (node = node.previousSibling) )	 {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}
					if ( type === "first" ) {
						return true;
					}
					node = elem;
				case 'last':
					while ( (node = node.nextSibling) )	 {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}
					return true;
				case 'nth':
					var first = match[2], last = match[3];
					if ( first === 1 && last === 0 ) {
						return true;
					}
					var doneName = match[0],
						parent = elem.parentNode;
					if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
						var count = 0;
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						}
						parent.sizcache = doneName;
					}
					var diff = elem.nodeIndex - last;
					if ( first === 0 ) {
						return diff === 0;
					} else {
						return ( diff % first === 0 && diff / first >= 0 );
					}
			}
		},
		ID: function(elem, match){
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},
		TAG: function(elem, match){
			return (match === "*" && elem.nodeType === 1) || elem.nodeName.toLowerCase() === match;
		},
		CLASS: function(elem, match){
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},
		ATTR: function(elem, match){
			var name = match[1],
				result = Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];
			return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},
		POS: function(elem, match, i, array){
			var name = match[2], filter = Expr.setFilters[ name ];
			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};
var origPOS = Expr.match.POS;
for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + /(?![^\[]*\])(?![^\(]*\))/.source );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, function(all, num){
		return "\\" + (num - 0 + 1);
	}));
}

var makeArray = function(array, results) {
	array = Array.prototype.slice.call( array, 0 );
	if ( results ) {
		results.push.apply( results, array );
		return results;
	}
	return array;
};
try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;
} catch(e){
	makeArray = function(array, results) {
		var ret = results || [];
		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );
		} else {
			if ( typeof array.length === "number" ) {
				for ( var i = 0, l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}
			} else {
				for ( var i = 0; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}
		return ret;
	};
}

var sortOrder;
if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return a.compareDocumentPosition ? -1 : 1;
		}
		var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( "sourceIndex" in document.documentElement ) {
	sortOrder = function( a, b ) {
		if ( !a.sourceIndex || !b.sourceIndex ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return a.sourceIndex ? -1 : 1;
		}
		var ret = a.sourceIndex - b.sourceIndex;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( document.createRange ) {
	sortOrder = function( a, b ) {
		if ( !a.ownerDocument || !b.ownerDocument ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return a.ownerDocument ? -1 : 1;
		}
		var aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange();
		aRange.setStart(a, 0);
		aRange.setEnd(a, 0);
		bRange.setStart(b, 0);
		bRange.setEnd(b, 0);
		var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
}

function getText( elems ) {
	var ret = "", elem;
	for ( var i = 0; elems[i]; i++ ) {
		elem = elems[i];
		if ( elem.nodeType === 3 || elem.nodeType === 4 ) {
			ret += elem.nodeValue;
		} else if ( elem.nodeType !== 8 ) {
			ret += getText( elem.childNodes );
		}
	}
	return ret;
}

(function(){
	var form = document.createElement("div"),
		id = "script" + (new Date).getTime();
	form.innerHTML = "<a name='" + id + "'/>";
	var root = document.documentElement;
	root.insertBefore( form, root.firstChild );
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ? [m] : undefined : [];
			}
		};
		Expr.filter.ID = function(elem, match){
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}
	root.removeChild( form );
	root = form = null;
})();
(function(){
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function(match, context){
			var results = context.getElementsByTagName(match[1]);
			if ( match[1] === "*" ) {
				var tmp = [];
				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}
				results = tmp;
			}
			return results;
		};
	}
	div.innerHTML = "<a href='#'></a>";
	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {
		Expr.attrHandle.href = function(elem){
			return elem.getAttribute("href", 2);
		};
	}
	div = null;
})();
if ( document.querySelectorAll ) {
	(function(){
		var oldSizzle = Sizzle, div = document.createElement("div");
		div.innerHTML = "<p class='TEST'></p>";
		if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
			return;
		}
		Sizzle = function(query, context, extra, seed){
			context = context || document;
			if ( !seed && context.nodeType === 9 && !isXML(context) ) {
				try {
					return makeArray( context.querySelectorAll(query), extra );
				} catch(e){}
			}
			return oldSizzle(query, context, extra, seed);
		};
		for ( var prop in oldSizzle ) {
			Sizzle[ prop ] = oldSizzle[ prop ];
		}
		div = null;
	})();
}

(function(){
	var div = document.createElement("div");
	div.innerHTML = "<div class='test e'></div><div class='test'></div>";
	if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
		return;
	}
	div.lastChild.className = "e";
	if ( div.getElementsByClassName("e").length === 1 ) {
		return;
	}
	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function(match, context, isXML) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};
	div = null;
})();
function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			elem = elem[dir];
			var match = false;
			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}
				if ( elem.nodeType === 1 && !isXML ){
					elem.sizcache = doneName;
					elem.sizset = i;
				}
				if ( elem.nodeName.toLowerCase() === cur ) {
					match = elem;
					break;
				}
				elem = elem[dir];
			}
			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			elem = elem[dir];
			var match = false;
			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}
				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem.sizcache = doneName;
						elem.sizset = i;
					}
					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}
					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}
				elem = elem[dir];
			}
			checkSet[i] = match;
		}
	}
}

var contains = document.compareDocumentPosition ? function(a, b){
	return !!(a.compareDocumentPosition(b) & 16);
} : function(a, b){
	return a !== b && (a.contains ? a.contains(b) : true);
};
var isXML = function(elem){
	var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};
var posProcess = function(selector, context){
	var tmpSet = [], later = "", match,
		root = context.nodeType ? [context] : context;
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}
	selector = Expr.relative[selector] ? selector + "*" : selector;
	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet );
	}
	return Sizzle.filter( later, tmpSet );
};
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.filters;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = getText;
jQuery.isXMLDoc = isXML;
jQuery.contains = contains;
return;
window.Sizzle = Sizzle;
})();
var runtil = /Until$/,
	rparentsprev = /^(?:parents|prevUntil|prevAll)/,
	rmultiselector = /,/,
	slice = Array.prototype.slice;
var winnow = function( elements, qualifier, keep ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) === keep;
		});
	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem, i ) {
			return (elem === qualifier) === keep;
		});
	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});
		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, filtered );
		}
	}
	return jQuery.grep(elements, function( elem, i ) {
		return (jQuery.inArray( elem, qualifier ) >= 0) === keep;
	});
};
jQuery.fn.extend({
	find: function( selector ) {
		var ret = this.pushStack( "", "find", selector ), length = 0;
		for ( var i = 0, l = this.length; i < l; i++ ) {
			length = ret.length;
			jQuery.find( selector, this[i], ret );
			if ( i > 0 ) {
				for ( var n = length; n < ret.length; n++ ) {
					for ( var r = 0; r < length; r++ ) {
						if ( ret[r] === ret[n] ) {
							ret.splice(n--, 1);
							break;
						}
					}
				}
			}
		}
		return ret;
	},
	has: function( target ) {
		var targets = jQuery( target );
		return this.filter(function() {
			for ( var i = 0, l = targets.length; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false), "not", selector);
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true), "filter", selector );
	},
	is: function( selector ) {
		return !!selector && jQuery.filter( selector, this ).length > 0;
	},
	closest: function( selectors, context ) {
		if ( jQuery.isArray( selectors ) ) {
			var ret = [], cur = this[0], match, matches = {}, selector;
			if ( cur && selectors.length ) {
				for ( var i = 0, l = selectors.length; i < l; i++ ) {
					selector = selectors[i];
					if ( !matches[selector] ) {
						matches[selector] = jQuery.expr.match.POS.test( selector ) ?
							jQuery( selector, context || this.context ) :
							selector;
					}
				}
				while ( cur && cur.ownerDocument && cur !== context ) {
					for ( selector in matches ) {
						match = matches[selector];
						if ( match.jquery ? match.index(cur) > -1 : jQuery(cur).is(match) ) {
							ret.push({ selector: selector, elem: cur });
							delete matches[selector];
						}
					}
					cur = cur.parentNode;
				}
			}
			return ret;
		}
		var pos = jQuery.expr.match.POS.test( selectors ) ?
			jQuery( selectors, context || this.context ) : null;
		return this.map(function( i, cur ) {
			while ( cur && cur.ownerDocument && cur !== context ) {
				if ( pos ? pos.index(cur) > -1 : jQuery(cur).is(selectors) ) {
					return cur;
				}
				cur = cur.parentNode;
			}
			return null;
		});
	},
	index: function( elem ) {
		if ( !elem || typeof elem === "string" ) {
			return jQuery.inArray( this[0],
				elem ? jQuery( elem ) : this.parent().children() );
		}
		return jQuery.inArray(
			elem.jquery ? elem[0] : elem, this );
	},
	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context || this.context ) :
				jQuery.makeArray( selector ),
			all = jQuery.merge( this.get(), set );
		return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?
			all :
			jQuery.unique( all ) );
	},
	andSelf: function() {
		return this.add( this.prevObject );
	}
});
function isDisconnected( node ) {
	return !node || !node.parentNode || node.parentNode.nodeType === 11;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return jQuery.nth( elem, 2, "nextSibling" );
	},
	prev: function( elem ) {
		return jQuery.nth( elem, 2, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( elem.parentNode.firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.makeArray( elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );
		if ( !runtil.test( name ) ) {
			selector = until;
		}
		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}
		ret = this.length > 1 ? jQuery.unique( ret ) : ret;
		if ( (this.length > 1 || rmultiselector.test( selector )) && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}
		return this.pushStack( ret, name, slice.call(arguments).join(",") );
	};
});
jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
		return jQuery.find.matches(expr, elems);
	},
	dir: function( elem, dir, until ) {
		var matched = [], cur = elem[dir];
		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},
	nth: function( cur, result, dir, elem ) {
		result = result || 1;
		var num = 0;
		for ( ; cur; cur = cur[dir] ) {
			if ( cur.nodeType === 1 && ++num === result ) {
				break;
			}
		}
		return cur;
	},
	sibling: function( n, elem ) {
		var r = [];
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}
		return r;
	}
});
var rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g,
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /(<([\w:]+)[^>]*?)\/>/g,
	rselfClosing = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnocache = /<script|<objectdisabled|<embeddisabled|<option|<style/i,
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	fcloseTag = function( all, front, tag ) {
		return rselfClosing.test( tag ) ?
			all :
			front + "></" + tag + ">";
	},
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		area: [ 1, "<map>", "</map>" ],
		_default: [ 0, "", "" ]
	};
wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;
if ( !jQuery.support.htmlSerialize ) {
	wrapMap._default = [ 1, "div<div>", "</div>" ];
}

jQuery.fn.extend({
	text: function( text ) {
		if ( jQuery.isFunction(text) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				self.text( text.call(this, i, self.text()) );
			});
		}
		if ( typeof text !== "object" && text !== undefined ) {
			return this.empty().append( (this[0] && this[0].ownerDocument || document).createTextNode( text ) );
		}
		return jQuery.text( this );
	},
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}
		if ( this[0] ) {
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);
			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}
			wrap.map(function() {
				var elem = this;
				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}
				return elem;
			}).append(this);
		}
		return this;
	},
	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}
		return this.each(function() {
			var self = jQuery( this ), contents = self.contents();
			if ( contents.length ) {
				contents.wrapAll( html );
			} else {
				self.append( html );
			}
		});
	},
	wrap: function( html ) {
		return this.each(function() {
			jQuery( this ).wrapAll( html );
		});
	},
	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},
	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.appendChild( elem );
			}
		});
	},
	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},
	before: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this );
			});
		} else if ( arguments.length ) {
			var set = jQuery(arguments[0]);
			set.push.apply( set, this.toArray() );
			return this.pushStack( set, "before", arguments );
		}
	},
	after: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			});
		} else if ( arguments.length ) {
			var set = this.pushStack( this, "after", arguments );
			set.push.apply( set, jQuery(arguments[0]).toArray() );
			return set;
		}
	},
	remove: function( selector, keepData ) {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			if ( !selector || jQuery.filter( selector, [ elem ] ).length ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( elem.getElementsByTagName("*") );
					jQuery.cleanData( [ elem ] );
				}
				if ( elem.parentNode ) {
					 elem.parentNode.removeChild( elem );
				}
			}
		}
		return this;
	},
	empty: function() {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( elem.getElementsByTagName("*") );
			}
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}
		}
		return this;
	},
	clone: function( events ) {
		var ret = this.map(function() {
			if ( !jQuery.support.noCloneEvent && !jQuery.isXMLDoc(this) ) {
				var html = this.outerHTML, ownerDocument = this.ownerDocument;
				if ( !html ) {
					var div = ownerDocument.createElement("div");
					div.appendChild( this.cloneNode(true) );
					html = div.innerHTML;
				}
				return jQuery.clean([html.replace(rinlinejQuery, "")
					.replace(/=([^="'>\s]+\/)>/g, '="$1">')
					.replace(rleadingWhitespace, "")], ownerDocument)[0];
			} else {
				return this.cloneNode(true);
			}
		});
		if ( events === true ) {
			cloneCopyEvent( this, ret );
			cloneCopyEvent( this.find("*"), ret.find("*") );
		}
		return ret;
	},
	html: function( value ) {
		if ( value === undefined ) {
			return this[0] && this[0].nodeType === 1 ?
				this[0].innerHTML.replace(rinlinejQuery, "") :
				null;
		} else if ( typeof value === "string" && !rnocache.test( value ) &&
			(jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value )) &&
			!wrapMap[ (rtagName.exec( value ) || ["", ""])[1].toLowerCase() ] ) {
			value = value.replace(rxhtmlTag, fcloseTag);
			try {
				for ( var i = 0, l = this.length; i < l; i++ ) {
					if ( this[i].nodeType === 1 ) {
						jQuery.cleanData( this[i].getElementsByTagName("*") );
						this[i].innerHTML = value;
					}
				}
			} catch(e) {
				this.empty().append( value );
			}
		} else if ( jQuery.isFunction( value ) ) {
			this.each(function(i){
				var self = jQuery(this), old = self.html();
				self.empty().append(function(){
					return value.call( this, i, old );
				});
			});
		} else {
			this.empty().append( value );
		}
		return this;
	},
	replaceWith: function( value ) {
		if ( this[0] && this[0].parentNode ) {
			if ( jQuery.isFunction( value ) ) {
				return this.each(function(i) {
					var self = jQuery(this), old = self.html();
					self.replaceWith( value.call( this, i, old ) );
				});
			}
			if ( typeof value !== "string" ) {
				value = jQuery(value).detach();
			}
			return this.each(function() {
				var next = this.nextSibling, parent = this.parentNode;
				jQuery(this).remove();
				if ( next ) {
					jQuery(next).before( value );
				} else {
					jQuery(parent).append( value );
				}
			});
		} else {
			return this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value );
		}
	},
	detach: function( selector ) {
		return this.remove( selector, true );
	},
	domManip: function( args, table, callback ) {
		var results, first, value = args[0], scripts = [], fragment, parent;
		if ( !jQuery.support.checkClone && arguments.length === 3 && typeof value === "string" && rchecked.test( value ) ) {
			return this.each(function() {
				jQuery(this).domManip( args, table, callback, true );
			});
		}
		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				args[0] = value.call(this, i, table ? self.html() : undefined);
				self.domManip( args, table, callback );
			});
		}
		if ( this[0] ) {
			parent = value && value.parentNode;
			if ( jQuery.support.parentNode && parent && parent.nodeType === 11 && parent.childNodes.length === this.length ) {
				results = { fragment: parent };
			} else {
				results = buildFragment( args, this, scripts );
			}
			fragment = results.fragment;
			if ( fragment.childNodes.length === 1 ) {
				first = fragment = fragment.firstChild;
			} else {
				first = fragment.firstChild;
			}
			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );
				for ( var i = 0, l = this.length; i < l; i++ ) {
					callback.call(
						table ?
							root(this[i], first) :
							this[i],
						i > 0 || results.cacheable || this.length > 1  ?
							fragment.cloneNode(true) :
							fragment
					);
				}
			}
			if ( scripts.length ) {
				jQuery.each( scripts, evalScript );
			}
		}
		return this;
		function root( elem, cur ) {
			return jQuery.nodeName(elem, "table") ?
				(elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
				elem;
		}
	}
});
function cloneCopyEvent(orig, ret) {
	var i = 0;
	ret.each(function() {
		if ( this.nodeName !== (orig[i] && orig[i].nodeName) ) {
			return;
		}
		var oldData = jQuery.data( orig[i++] ), curData = jQuery.data( this, oldData ), events = oldData && oldData.events;
		if ( events ) {
			delete curData.handle;
			curData.events = {};
			for ( var type in events ) {
				for ( var handler in events[ type ] ) {
					jQuery.event.add( this, type, events[ type ][ handler ], events[ type ][ handler ].data );
				}
			}
		}
	});
}

function buildFragment( args, nodes, scripts ) {
	var fragment, cacheable, cacheresults,
		doc = (nodes && nodes[0] ? nodes[0].ownerDocument || nodes[0] : document);
	if ( args.length === 1 && typeof args[0] === "string" && args[0].length < 512 && doc === document &&
		!rnocache.test( args[0] ) && (jQuery.support.checkClone || !rchecked.test( args[0] )) ) {
		cacheable = true;
		cacheresults = jQuery.fragments[ args[0] ];
		if ( cacheresults ) {
			if ( cacheresults !== 1 ) {
				fragment = cacheresults;
			}
		}
	}
	if ( !fragment ) {
		fragment = doc.createDocumentFragment();
		jQuery.clean( args, doc, fragment, scripts );
	}
	if ( cacheable ) {
		jQuery.fragments[ args[0] ] = cacheresults ? fragment : 1;
	}
	return { fragment: fragment, cacheable: cacheable };
}

jQuery.fragments = {};
jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var ret = [], insert = jQuery( selector ),
			parent = this.length === 1 && this[0].parentNode;
		if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
			insert[ original ]( this[0] );
			return this;
		} else {
			for ( var i = 0, l = insert.length; i < l; i++ ) {
				var elems = (i > 0 ? this.clone(true) : this).get();
				jQuery.fn[ original ].apply( jQuery(insert[i]), elems );
				ret = ret.concat( elems );
			}
			return this.pushStack( ret, name, insert.selector );
		}
	};
});
jQuery.extend({
	clean: function( elems, context, fragment, scripts ) {
		context = context || document;
		if ( typeof context.createElement === "undefined" ) {
			context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
		}
		var ret = [];
		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			if ( typeof elem === "number" ) {
				elem += "";
			}
			if ( !elem ) {
				continue;
			}
			if ( typeof elem === "string" && !rhtml.test( elem ) ) {
				elem = context.createTextNode( elem );
			} else if ( typeof elem === "string" ) {
				elem = elem.replace(rxhtmlTag, fcloseTag);
				var tag = (rtagName.exec( elem ) || ["", ""])[1].toLowerCase(),
					wrap = wrapMap[ tag ] || wrapMap._default,
					depth = wrap[0],
					div = context.createElement("div");
				div.innerHTML = wrap[1] + elem + wrap[2];
				while ( depth-- ) {
					div = div.lastChild;
				}
				if ( !jQuery.support.tbody ) {
					var hasBody = rtbody.test(elem),
						tbody = tag === "table" && !hasBody ?
							div.firstChild && div.firstChild.childNodes :
							wrap[1] === "<table>" && !hasBody ?
								div.childNodes :
								[];
					for ( var j = tbody.length - 1; j >= 0 ; --j ) {
						if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length ) {
							tbody[ j ].parentNode.removeChild( tbody[ j ] );
						}
					}
				}
				if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );
				}
				elem = div.childNodes;
			}
			if ( elem.nodeType ) {
				ret.push( elem );
			} else {
				ret = jQuery.merge( ret, elem );
			}
		}
		if ( fragment ) {
			for ( var i = 0; ret[i]; i++ ) {
				if ( scripts && jQuery.nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
					scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );
				} else {
					if ( ret[i].nodeType === 1 ) {
						ret.splice.apply( ret, [i + 1, 0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))) );
					}
					fragment.appendChild( ret[i] );
				}
			}
		}
		return ret;
	},
	cleanData: function( elems ) {
		var data, id, cache = jQuery.cache,
			special = jQuery.event.special,
			deleteExpando = jQuery.support.deleteExpando;
		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			id = elem[ jQuery.expando ];
			if ( id ) {
				data = cache[ id ];
				if ( data.events ) {
					for ( var type in data.events ) {
						if ( special[ type ] ) {
							jQuery.event.remove( elem, type );
						} else {
							removeEvent( elem, type, data.handle );
						}
					}
				}
				if ( deleteExpando ) {
					delete elem[ jQuery.expando ];
				} else if ( elem.removeAttribute ) {
					elem.removeAttribute( jQuery.expando );
				}
				delete cache[ id ];
			}
		}
	}
});
var rexclude = /z-?index|font-?weight|opacity|zoom|line-?height/i,
	ralpha = /alpha\([^)]*\)/,
	ropacity = /opacity=([^)]*)/,
	rfloat = /float/i,
	rdashAlpha = /-([a-z])/ig,
	rupper = /([A-Z])/g,
	rnumpx = /^-?\d+(?:px)?$/i,
	rnum = /^-?\d/,
	cssShow = { position: "absolute", visibility: "hidden", display:"block" },
	cssWidth = [ "Left", "Right" ],
	cssHeight = [ "Top", "Bottom" ],
	getComputedStyle = document.defaultView && document.defaultView.getComputedStyle,
	styleFloat = jQuery.support.cssFloat ? "cssFloat" : "styleFloat",
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};
jQuery.fn.css = function( name, value ) {
	return access( this, name, value, true, function( elem, name, value ) {
		if ( value === undefined ) {
			return jQuery.curCSS( elem, name );
		}
		if ( typeof value === "number" && !rexclude.test(name) ) {
			value += "px";
		}
		jQuery.style( elem, name, value );
	});
};
jQuery.extend({
	style: function( elem, name, value ) {
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 ) {
			return undefined;
		}
		if ( (name === "width" || name === "height") && parseFloat(value) < 0 ) {
			value = undefined;
		}
		var style = elem.style || elem, set = value !== undefined;
		if ( !jQuery.support.opacity && name === "opacity" ) {
			if ( set ) {
				style.zoom = 1;
				var opacity = parseInt( value, 10 ) + "" === "NaN" ? "" : "alpha(opacity=" + value * 100 + ")";
				var filter = style.filter || jQuery.curCSS( elem, "filter" ) || "";
				style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : opacity;
			}
			return style.filter && style.filter.indexOf("opacity=") >= 0 ?
				(parseFloat( ropacity.exec(style.filter)[1] ) / 100) + "":
				"";
		}
		if ( rfloat.test( name ) ) {
			name = styleFloat;
		}
		name = name.replace(rdashAlpha, fcamelCase);
		if ( set ) {
			style[ name ] = value;
		}
		return style[ name ];
	},
	css: function( elem, name, force, extra ) {
		if ( name === "width" || name === "height" ) {
			var val, props = cssShow, which = name === "width" ? cssWidth : cssHeight;
			function getWH() {
				val = name === "width" ? elem.offsetWidth : elem.offsetHeight;
				if ( extra === "border" ) {
					return;
				}
				jQuery.each( which, function() {
					if ( !extra ) {
						val -= parseFloat(jQuery.curCSS( elem, "padding" + this, true)) || 0;
					}
					if ( extra === "margin" ) {
						val += parseFloat(jQuery.curCSS( elem, "margin" + this, true)) || 0;
					} else {
						val -= parseFloat(jQuery.curCSS( elem, "border" + this + "Width", true)) || 0;
					}
				});
			}
			if ( elem.offsetWidth !== 0 ) {
				getWH();
			} else {
				jQuery.swap( elem, props, getWH );
			}
			return Math.max(0, Math.round(val));
		}
		return jQuery.curCSS( elem, name, force );
	},
	curCSS: function( elem, name, force ) {
		var ret, style = elem.style, filter;
		if ( !jQuery.support.opacity && name === "opacity" && elem.currentStyle ) {
			ret = ropacity.test(elem.currentStyle.filter || "") ?
				(parseFloat(RegExp.$1) / 100) + "" :
				"";
			return ret === "" ?
				"1" :
				ret;
		}
		if ( rfloat.test( name ) ) {
			name = styleFloat;
		}
		if ( !force && style && style[ name ] ) {
			ret = style[ name ];
		} else if ( getComputedStyle ) {
			if ( rfloat.test( name ) ) {
				name = "float";
			}
			name = name.replace( rupper, "-$1" ).toLowerCase();
			var defaultView = elem.ownerDocument.defaultView;
			if ( !defaultView ) {
				return null;
			}
			var computedStyle = defaultView.getComputedStyle( elem, null );
			if ( computedStyle ) {
				ret = computedStyle.getPropertyValue( name );
			}
			if ( name === "opacity" && ret === "" ) {
				ret = "1";
			}
		} else if ( elem.currentStyle ) {
			var camelCase = name.replace(rdashAlpha, fcamelCase);
			ret = elem.currentStyle[ name ] || elem.currentStyle[ camelCase ];
			if ( !rnumpx.test( ret ) && rnum.test( ret ) ) {
				var left = style.left, rsLeft = elem.runtimeStyle.left;
				elem.runtimeStyle.left = elem.currentStyle.left;
				style.left = camelCase === "fontSize" ? "1em" : (ret || 0);
				ret = style.pixelLeft + "px";
				style.left = left;
				elem.runtimeStyle.left = rsLeft;
			}
		}
		return ret;
	},
	swap: function( elem, options, callback ) {
		var old = {};
		for ( var name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
		callback.call( elem );
		for ( var name in options ) {
			elem.style[ name ] = old[ name ];
		}
	}
});
if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		var width = elem.offsetWidth, height = elem.offsetHeight,
			skip = elem.nodeName.toLowerCase() === "tr";
		return width === 0 && height === 0 && !skip ?
			true :
			width > 0 && height > 0 && !skip ?
				false :
				jQuery.curCSS(elem, "display") === "none";
	};
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

var jsc = now(),
	rscript = /<script(.|\s)*?\/script>/gi,
	rselectTextarea = /select|textarea/i,
	rinput = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
	jsre = /=\?(&|$)/,
	rquery = /\?/,
	rts = /(\?|&)_=.*?(&|$)/,
	rurl = /^(\w+:)?\/\/([^\/?#]+)/,
	r20 = /%20/g,
	_loaddisabled = jQuery.fn.loaddisabled;
jQuery.fn.extend({
	loaddisabled: function( url, params, callback ) {
		if ( typeof url !== "string" ) {
			return _loaddisabled.call( this, url );
		} else if ( !this.length ) {
			return this;
		}
		var off = url.indexOf(" ");
		if ( off >= 0 ) {
			var selector = url.slice(off, url.length);
			url = url.slice(0, off);
		}
		var type = "GET";
		if ( params ) {
			if ( jQuery.isFunction( params ) ) {
				callback = params;
				params = null;
			} else if ( typeof params === "object" ) {
				params = jQuery.param( params, jQuery.ajaxSettings.traditional );
				type = "POST";
			}
		}
		var self = this;
		jQuery.ajax({
			url: url,
			type: type,
			dataType: "html",
			data: params,
			complete: function( res, status ) {
				if ( status === "success" || status === "notmodified" ) {
					self.html( selector ?
						jQuery("<div />")
							.append(res.responseText.replace(rscript, ""))
							.find(selector) :
						res.responseText );
				}
				if ( callback ) {
					self.each( callback, [res.responseText, status, res] );
				}
			}
		});
		return this;
	},
	serialize: function() {
		return jQuery.param(this.serializeArray());
	},
	serializeArray: function() {
		return this.map(function() {
			return this.elements ? jQuery.makeArray(this.elements) : this;
		})
		.filter(function() {
			return this.name && !this.disabled &&
				(this.checked || rselectTextarea.test(this.nodeName) ||
					rinput.test(this.type));
		})
		.map(function( i, elem ) {
			var val = jQuery(this).val();
			return val == null ?
				null :
				jQuery.isArray(val) ?
					jQuery.map( val, function( val, i ) {
						return { name: elem.name, value: val };
					}) :
					{ name: elem.name, value: val };
		}).get();
	}
});
jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function( i, o ) {
	jQuery.fn[o] = function( f ) {
		return this.bind(o, f);
	};
});
jQuery.extend({
	get: function( url, data, callback, type ) {
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = null;
		}
		return jQuery.ajax({
			type: "GET",
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	},
	getScript: function( url, callback ) {
		return jQuery.get(url, null, callback, "script");
	},
	getJSON: function( url, data, callback ) {
		return jQuery.get(url, data, callback, "json");
	},
	post: function( url, data, callback, type ) {
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = {};
		}
		return jQuery.ajax({
			type: "POST",
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	},
	ajaxSetup: function( settings ) {
		jQuery.extend( jQuery.ajaxSettings, settings );
	},
	ajaxSettings: {
		url: location.href,
		global: true,
		type: "GET",
		contentType: "application/x-www-form-urlencoded",
		processData: true,
		async: true,
		xhr: window.XMLHttpRequest && (window.location.protocol !== "file:" || !window.ActiveXObject) ?
			function() {
				return new window.XMLHttpRequest();
			} :
			function() {
				try {
					return new window.ActiveXObject("Microsoft.XMLHTTP");
				} catch(e) {}
			},
		accepts: {
			xml: "application/xml, text/xml",
			html: "text/html",
			script: "text/javascript, application/javascript",
			json: "application/json, text/javascript",
			text: "text/plain",
			_default: "*/*"
		}
	},
	lastModified: {},
	etag: {},
	ajax: function( origSettings ) {
		var s = jQuery.extend(true, {}, jQuery.ajaxSettings, origSettings);
		var jsonp, status, data,
			callbackContext = origSettings && origSettings.context || s,
			type = s.type.toUpperCase();
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}
		if ( s.dataType === "jsonp" ) {
			if ( type === "GET" ) {
				if ( !jsre.test( s.url ) ) {
					s.url += (rquery.test( s.url ) ? "&" : "?") + (s.jsonp || "callback") + "=?";
				}
			} else if ( !s.data || !jsre.test(s.data) ) {
				s.data = (s.data ? s.data + "&" : "") + (s.jsonp || "callback") + "=?";
			}
			s.dataType = "json";
		}
		if ( s.dataType === "json" && (s.data && jsre.test(s.data) || jsre.test(s.url)) ) {
			jsonp = s.jsonpCallback || ("jsonp" + jsc++);
			if ( s.data ) {
				s.data = (s.data + "").replace(jsre, "=" + jsonp + "$1");
			}
			s.url = s.url.replace(jsre, "=" + jsonp + "$1");
			s.dataType = "script";
			window[ jsonp ] = window[ jsonp ] || function( tmp ) {
				data = tmp;
				success();
				complete();
				window[ jsonp ] = undefined;
				try {
					delete window[ jsonp ];
				} catch(e) {}
				if ( head ) {
					head.removeChild( script );
				}
			};
		}
		if ( s.dataType === "script" && s.cache === null ) {
			s.cache = false;
		}
		if ( s.cache === false && type === "GET" ) {
			var ts = now();
			var ret = s.url.replace(rts, "$1_=" + ts + "$2");
			s.url = ret + ((ret === s.url) ? (rquery.test(s.url) ? "&" : "?") + "_=" + ts : "");
		}
		if ( s.data && type === "GET" ) {
			s.url += (rquery.test(s.url) ? "&" : "?") + s.data;
		}
		if ( s.global && ! jQuery.active++ ) {
			jQuery.event.trigger( "ajaxStart" );
		}
		var parts = rurl.exec( s.url ),
			remote = parts && (parts[1] && parts[1] !== location.protocol || parts[2] !== location.host);
		if ( s.dataType === "script" && type === "GET" && remote ) {
			var head = document.getElementsByTagName("head")[0] || document.documentElement;
			var script = document.createElement("script");
			script.src = s.url;
			if ( s.scriptCharset ) {
				script.charset = s.scriptCharset;
			}
			if ( !jsonp ) {
				var done = false;
				script.onloaddisabled = script.onreadystatechange = function() {
					if ( !done && (!this.readyState ||
							this.readyState === "loaddisableded" || this.readyState === "complete") ) {
						done = true;
						success();
						complete();
						script.onloaddisabled = script.onreadystatechange = null;
						if ( head && script.parentNode ) {
							head.removeChild( script );
						}
					}
				};
			}
			head.insertBefore( script, head.firstChild );
			return undefined;
		}
		var requestDone = false;
		var xhr = s.xhr();
		if ( !xhr ) {
			return;
		}
		if ( s.username ) {
			void(type, s.url, s.async, s.username, s.password);
		} else {
			void(type, s.url, s.async);
		}
		try {
			if ( s.data || origSettings && origSettings.contentType ) {
				xhr.setRequestHeader("Content-Type", s.contentType);
			}
			if ( s.ifModified ) {
				if ( jQuery.lastModified[s.url] ) {
					xhr.setRequestHeader("If-Modified-Since", jQuery.lastModified[s.url]);
				}
				if ( jQuery.etag[s.url] ) {
					xhr.setRequestHeader("If-None-Match", jQuery.etag[s.url]);
				}
			}
			if ( !remote ) {
				xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			}
			xhr.setRequestHeader("Accept", s.dataType && s.accepts[ s.dataType ] ?
				s.accepts[ s.dataType ] + ", */*" :
				s.accepts._default );
		} catch(e) {}
		if ( s.beforeSend && s.beforeSend.call(callbackContext, xhr, s) === false ) {
			if ( s.global && ! --jQuery.active ) {
				jQuery.event.trigger( "ajaxStop" );
			}
			xhr.abort();
			return false;
		}
		if ( s.global ) {
			trigger("ajaxSend", [xhr, s]);
		}
		var onreadystatechange = xhr.onreadystatechange = function( isTimeout ) {
			if ( !xhr || xhr.readyState === 0 || isTimeout === "abort" ) {
				if ( !requestDone ) {
					complete();
				}
				requestDone = true;
				if ( xhr ) {
					xhr.onreadystatechange = jQuery.noop;
				}
			} else if ( !requestDone && xhr && (xhr.readyState === 4 || isTimeout === "timeout") ) {
				requestDone = true;
				xhr.onreadystatechange = jQuery.noop;
				status = isTimeout === "timeout" ?
					"timeout" :
					!jQuery.httpSuccess( xhr ) ?
						"error" :
						s.ifModified && jQuery.httpNotModified( xhr, s.url ) ?
							"notmodified" :
							"success";
				var errMsg;
				if ( status === "success" ) {
					try {
						data = jQuery.httpData( xhr, s.dataType, s );
					} catch(err) {
						status = "parsererror";
						errMsg = err;
					}
				}
				if ( status === "success" || status === "notmodified" ) {
					if ( !jsonp ) {
						success();
					}
				} else {
					jQuery.handleError(s, xhr, status, errMsg);
				}
				complete();
				if ( isTimeout === "timeout" ) {
					xhr.abort();
				}
				if ( s.async ) {
					xhr = null;
				}
			}
		};
		try {
			var oldAbort = xhr.abort;
			xhr.abort = function() {
				if ( xhr ) {
					oldAbort.call( xhr );
				}
				onreadystatechange( "abort" );
			};
		} catch(e) { }
		if ( s.async && s.timeout > 0 ) {
			setTimeout(function() {
				if ( xhr && !requestDone ) {
					onreadystatechange( "timeout" );
				}
			}, s.timeout);
		}
		try {
			xhr.send( type === "POST" || type === "PUT" || type === "DELETE" ? s.data : null );
		} catch(e) {
			jQuery.handleError(s, xhr, null, e);
			complete();
		}
		if ( !s.async ) {
			onreadystatechange();
		}
		function success() {
			if ( s.success ) {
				s.success.call( callbackContext, data, status, xhr );
			}
			if ( s.global ) {
				trigger( "ajaxSuccess", [xhr, s] );
			}
		}
		function complete() {
			if ( s.complete ) {
				s.complete.call( callbackContext, xhr, status);
			}
			if ( s.global ) {
				trigger( "ajaxComplete", [xhr, s] );
			}
			if ( s.global && ! --jQuery.active ) {
				jQuery.event.trigger( "ajaxStop" );
			}
		}
		function trigger(type, args) {
			(s.context ? jQuery(s.context) : jQuery.event).trigger(type, args);
		}
		return xhr;
	},
	handleError: function( s, xhr, status, e ) {
		if ( s.error ) {
			s.error.call( s.context || s, xhr, status, e );
		}
		if ( s.global ) {
			(s.context ? jQuery(s.context) : jQuery.event).trigger( "ajaxError", [xhr, s, e] );
		}
	},
	active: 0,
	httpSuccess: function( xhr ) {
		try {
			return !xhr.status && location.protocol === "file:" ||
				( xhr.status >= 200 && xhr.status < 300 ) ||
				xhr.status === 304 || xhr.status === 1223 || xhr.status === 0;
		} catch(e) {}
		return false;
	},
	httpNotModified: function( xhr, url ) {
		var lastModified = xhr.getResponseHeader("Last-Modified"),
			etag = xhr.getResponseHeader("Etag");
		if ( lastModified ) {
			jQuery.lastModified[url] = lastModified;
		}
		if ( etag ) {
			jQuery.etag[url] = etag;
		}
		return xhr.status === 304 || xhr.status === 0;
	},
	httpData: function( xhr, type, s ) {
		var ct = xhr.getResponseHeader("content-type") || "",
			xml = type === "xml" || !type && ct.indexOf("xml") >= 0,
			data = xml ? xhr.responseXML : xhr.responseText;
		if ( xml && data.documentElement.nodeName === "parsererror" ) {
			jQuery.error( "parsererror" );
		}
		if ( s && s.dataFilter ) {
			data = s.dataFilter( data, type );
		}
		if ( typeof data === "string" ) {
			if ( type === "json" || !type && ct.indexOf("json") >= 0 ) {
				data = jQuery.parseJSON( data );
			} else if ( type === "script" || !type && ct.indexOf("javascript") >= 0 ) {
				jQuery.globalEval( data );
			}
		}
		return data;
	},
	param: function( a, traditional ) {
		var s = [];
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings.traditional;
		}
		if ( jQuery.isArray(a) || a.jquery ) {
			jQuery.each( a, function() {
				add( this.name, this.value );
			});
		} else {
			for ( var prefix in a ) {
				buildParams( prefix, a[prefix] );
			}
		}
		return s.join("&").replace(r20, "+");
		function buildParams( prefix, obj ) {
			if ( jQuery.isArray(obj) ) {
				jQuery.each( obj, function( i, v ) {
					if ( traditional || /\[\]$/.test( prefix ) ) {
						add( prefix, v );
					} else {
						buildParams( prefix + "[" + ( typeof v === "object" || jQuery.isArray(v) ? i : "" ) + "]", v );
					}
				});
			} else if ( !traditional && obj != null && typeof obj === "object" ) {
				jQuery.each( obj, function( k, v ) {
					buildParams( prefix + "[" + k + "]", v );
				});
			} else {
				add( prefix, obj );
			}
		}
		function add( key, value ) {
			value = jQuery.isFunction(value) ? value() : value;
			s[ s.length ] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
		}
	}
});
var elemdisplay = {},
	rfxtypes = /toggle|show|hide/,
	rfxnum = /^([+-]=)?([\d+-.]+)(.*)$/,
	timerId,
	fxAttrs = [
		[ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],
		[ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],
		[ "opacity" ]
	];
jQuery.fn.extend({
	show: function( speed, callback ) {
		if ( speed || speed === 0) {
			return this.animate( genFx("show", 3), speed, callback);
		} else {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var old = jQuery.data(this[i], "olddisplay");
				this[i].style.display = old || "";
				if ( jQuery.css(this[i], "display") === "none" ) {
					var nodeName = this[i].nodeName, display;
					if ( elemdisplay[ nodeName ] ) {
						display = elemdisplay[ nodeName ];
					} else {
						var elem = jQuery("<" + nodeName + " />").appendTo("body");
						display = elem.css("display");
						if ( display === "none" ) {
							display = "block";
						}
						elem.remove();
						elemdisplay[ nodeName ] = display;
					}
					jQuery.data(this[i], "olddisplay", display);
				}
			}
			for ( var j = 0, k = this.length; j < k; j++ ) {
				this[j].style.display = jQuery.data(this[j], "olddisplay") || "";
			}
			return this;
		}
	},
	hide: function( speed, callback ) {
		if ( speed || speed === 0 ) {
			return this.animate( genFx("hide", 3), speed, callback);
		} else {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var old = jQuery.data(this[i], "olddisplay");
				if ( !old && old !== "none" ) {
					jQuery.data(this[i], "olddisplay", jQuery.css(this[i], "display"));
				}
			}
			for ( var j = 0, k = this.length; j < k; j++ ) {
				this[j].style.display = "none";
			}
			return this;
		}
	},
	_toggle: jQuery.fn.toggle,
	toggle: function( fn, fn2 ) {
		var bool = typeof fn === "boolean";
		if ( jQuery.isFunction(fn) && jQuery.isFunction(fn2) ) {
			this._toggle.apply( this, arguments );
		} else if ( fn == null || bool ) {
			this.each(function() {
				var state = bool ? fn : jQuery(this).is(":hidden");
				jQuery(this)[ state ? "show" : "hide" ]();
			});
		} else {
			this.animate(genFx("toggle", 3), fn, fn2);
		}
		return this;
	},
	fadeTo: function( speed, to, callback ) {
		return this.filter(":hidden").css("opacity", 0).show().end()
					.animate({opacity: to}, speed, callback);
	},
	animate: function( prop, speed, easing, callback ) {
		var optall = jQuery.speed(speed, easing, callback);
		if ( jQuery.isEmptyObject( prop ) ) {
			return this.each( optall.complete );
		}
		return this[ optall.queue === false ? "each" : "queue" ](function() {
			var opt = jQuery.extend({}, optall), p,
				hidden = this.nodeType === 1 && jQuery(this).is(":hidden"),
				self = this;
			for ( p in prop ) {
				var name = p.replace(rdashAlpha, fcamelCase);
				if ( p !== name ) {
					prop[ name ] = prop[ p ];
					delete prop[ p ];
					p = name;
				}
				if ( prop[p] === "hide" && hidden || prop[p] === "show" && !hidden ) {
					return opt.complete.call(this);
				}
				if ( ( p === "height" || p === "width" ) && this.style ) {
					opt.display = jQuery.css(this, "display");
					opt.overflow = this.style.overflow;
				}
				if ( jQuery.isArray( prop[p] ) ) {
					(opt.specialEasing = opt.specialEasing || {})[p] = prop[p][1];
					prop[p] = prop[p][0];
				}
			}
			if ( opt.overflow != null ) {
				this.style.overflow = "hidden";
			}
			opt.curAnim = jQuery.extend({}, prop);
			jQuery.each( prop, function( name, val ) {
				var e = new jQuery.fx( self, opt, name );
				if ( rfxtypes.test(val) ) {
					e[ val === "toggle" ? hidden ? "show" : "hide" : val ]( prop );
				} else {
					var parts = rfxnum.exec(val),
						start = e.cur(true) || 0;
					if ( parts ) {
						var end = parseFloat( parts[2] ),
							unit = parts[3] || "px";
						if ( unit !== "px" ) {
							self.style[ name ] = (end || 1) + unit;
							start = ((end || 1) / e.cur(true)) * start;
							self.style[ name ] = start + unit;
						}
						if ( parts[1] ) {
							end = ((parts[1] === "-=" ? -1 : 1) * end) + start;
						}
						e.custom( start, end, unit );
					} else {
						e.custom( start, val, "" );
					}
				}
			});
			return true;
		});
	},
	stop: function( clearQueue, gotoEnd ) {
		var timers = jQuery.timers;
		if ( clearQueue ) {
			this.queue([]);
		}
		this.each(function() {
			for ( var i = timers.length - 1; i >= 0; i-- ) {
				if ( timers[i].elem === this ) {
					if (gotoEnd) {
						timers[i](true);
					}
					timers.splice(i, 1);
				}
			}
		});
		if ( !gotoEnd ) {
			this.dequeue();
		}
		return this;
	}
});
jQuery.each({
	slideDown: genFx("show", 1),
	slideUp: genFx("hide", 1),
	slideToggle: genFx("toggle", 1),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, callback ) {
		return this.animate( props, speed, callback );
	};
});
jQuery.extend({
	speed: function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? speed : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			jQuery.fx.speeds[opt.duration] || jQuery.fx.speeds._default;
		opt.old = opt.complete;
		opt.complete = function() {
			if ( opt.queue !== false ) {
				jQuery(this).dequeue();
			}
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
		};
		return opt;
	},
	easing: {
		linear: function( p, n, firstNum, diff ) {
			return firstNum + diff * p;
		},
		swing: function( p, n, firstNum, diff ) {
			return ((-Math.cos(p*Math.PI)/2) + 0.5) * diff + firstNum;
		}
	},
	timers: [],
	fx: function( elem, options, prop ) {
		this.options = options;
		this.elem = elem;
		this.prop = prop;
		if ( !options.orig ) {
			options.orig = {};
		}
	}
});
jQuery.fx.prototype = {
	update: function() {
		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}
		(jQuery.fx.step[this.prop] || jQuery.fx.step._default)( this );
		if ( ( this.prop === "height" || this.prop === "width" ) && this.elem.style ) {
			this.elem.style.display = "block";
		}
	},
	cur: function( force ) {
		if ( this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null) ) {
			return this.elem[ this.prop ];
		}
		var r = parseFloat(jQuery.css(this.elem, this.prop, force));
		return r && r > -10000 ? r : parseFloat(jQuery.curCSS(this.elem, this.prop)) || 0;
	},
	custom: function( from, to, unit ) {
		this.startTime = now();
		this.start = from;
		this.end = to;
		this.unit = unit || this.unit || "px";
		this.now = this.start;
		this.pos = this.state = 0;
		var self = this;
		function t( gotoEnd ) {
			return self.step(gotoEnd);
		}
		t.elem = this.elem;
		if ( t() && jQuery.timers.push(t) && !timerId ) {
			timerId = setInterval(jQuery.fx.tick, 13);
		}
	},
	show: function() {
		this.options.orig[this.prop] = jQuery.style( this.elem, this.prop );
		this.options.show = true;
		this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
		jQuery( this.elem ).show();
	},
	hide: function() {
		this.options.orig[this.prop] = jQuery.style( this.elem, this.prop );
		this.options.hide = true;
		this.custom(this.cur(), 0);
	},
	step: function( gotoEnd ) {
		var t = now(), done = true;
		if ( gotoEnd || t >= this.options.duration + this.startTime ) {
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();
			this.options.curAnim[ this.prop ] = true;
			for ( var i in this.options.curAnim ) {
				if ( this.options.curAnim[i] !== true ) {
					done = false;
				}
			}
			if ( done ) {
				if ( this.options.display != null ) {
					this.elem.style.overflow = this.options.overflow;
					var old = jQuery.data(this.elem, "olddisplay");
					this.elem.style.display = old ? old : this.options.display;
					if ( jQuery.css(this.elem, "display") === "none" ) {
						this.elem.style.display = "block";
					}
				}
				if ( this.options.hide ) {
					jQuery(this.elem).hide();
				}
				if ( this.options.hide || this.options.show ) {
					for ( var p in this.options.curAnim ) {
						jQuery.style(this.elem, p, this.options.orig[p]);
					}
				}
				this.options.complete.call( this.elem );
			}
			return false;
		} else {
			var n = t - this.startTime;
			this.state = n / this.options.duration;
			var specialEasing = this.options.specialEasing && this.options.specialEasing[this.prop];
			var defaultEasing = this.options.easing || (jQuery.easing.swing ? "swing" : "linear");
			this.pos = jQuery.easing[specialEasing || defaultEasing](this.state, n, 0, 1, this.options.duration);
			this.now = this.start + ((this.end - this.start) * this.pos);
			this.update();
		}
		return true;
	}
};
jQuery.extend( jQuery.fx, {
	tick: function() {
		var timers = jQuery.timers;
		for ( var i = 0; i < timers.length; i++ ) {
			if ( !timers[i]() ) {
				timers.splice(i--, 1);
			}
		}
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
	},
	stop: function() {
		clearInterval( timerId );
		timerId = null;
	},
	speeds: {
		slow: 600,
 		fast: 200,
 		_default: 400
	},
	step: {
		opacity: function( fx ) {
			jQuery.style(fx.elem, "opacity", fx.now);
		},
		_default: function( fx ) {
			if ( fx.elem.style && fx.elem.style[ fx.prop ] != null ) {
				fx.elem.style[ fx.prop ] = (fx.prop === "width" || fx.prop === "height" ? Math.max(0, fx.now) : fx.now) + fx.unit;
			} else {
				fx.elem[ fx.prop ] = fx.now;
			}
		}
	}
});
if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}

function genFx( type, num ) {
	var obj = {};
	jQuery.each( fxAttrs.concat.apply([], fxAttrs.slice(0,num)), function() {
		obj[ this ] = type;
	});
	return obj;
}

if ( "getBoundingClientRect" in document.documentElement ) {
	jQuery.fn.offset = function( options ) {
		var elem = this[0];
		if ( options ) {
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}
		if ( !elem || !elem.ownerDocument ) {
			return null;
		}
		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}
		var box = elem.getBoundingClientRect(), doc = elem.ownerDocument, body = doc.body, docElem = doc.documentElement,
			clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
			top  = box.top  + (self.pageYOffset || jQuery.support.boxModel && docElem.scrollTop  || body.scrollTop ) - clientTop,
			left = box.left + (self.pageXOffset || jQuery.support.boxModel && docElem.scrollLeft || body.scrollLeft) - clientLeft;
		return { top: top, left: left };
	};
} else {
	jQuery.fn.offset = function( options ) {
		var elem = this[0];
		if ( options ) {
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}
		if ( !elem || !elem.ownerDocument ) {
			return null;
		}
		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}
		jQuery.offset.initialize();
		var offsetParent = elem.offsetParent, prevOffsetParent = elem,
			doc = elem.ownerDocument, computedStyle, docElem = doc.documentElement,
			body = doc.body, defaultView = doc.defaultView,
			prevComputedStyle = defaultView ? defaultView.getComputedStyle( elem, null ) : elem.currentStyle,
			top = elem.offsetTop, left = elem.offsetLeft;
		while ( (elem = elem.parentNode) && elem !== body && elem !== docElem ) {
			if ( jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed" ) {
				break;
			}
			computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
			top  -= elem.scrollTop;
			left -= elem.scrollLeft;
			if ( elem === offsetParent ) {
				top  += elem.offsetTop;
				left += elem.offsetLeft;
				if ( jQuery.offset.doesNotAddBorder && !(jQuery.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(elem.nodeName)) ) {
					top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
					left += parseFloat( computedStyle.borderLeftWidth ) || 0;
				}
				prevOffsetParent = offsetParent, offsetParent = elem.offsetParent;
			}
			if ( jQuery.offset.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" ) {
				top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
				left += parseFloat( computedStyle.borderLeftWidth ) || 0;
			}
			prevComputedStyle = computedStyle;
		}
		if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" ) {
			top  += body.offsetTop;
			left += body.offsetLeft;
		}
		if ( jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed" ) {
			top  += Math.max( docElem.scrollTop, body.scrollTop );
			left += Math.max( docElem.scrollLeft, body.scrollLeft );
		}
		return { top: top, left: left };
	};
}

jQuery.offset = {
	initialize: function() {
		var body = document.body, container = document.createElement("div"), innerDiv, checkDiv, table, td, bodyMarginTop = parseFloat( jQuery.curCSS(body, "marginTop", true) ) || 0,
			html = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
		jQuery.extend( container.style, { position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden" } );
		container.innerHTML = html;
		body.insertBefore( container, body.firstChild );
		innerDiv = container.firstChild;
		checkDiv = innerDiv.firstChild;
		td = innerDiv.nextSibling.firstChild.firstChild;
		this.doesNotAddBorder = (checkDiv.offsetTop !== 5);
		this.doesAddBorderForTableAndCells = (td.offsetTop === 5);
		checkDiv.style.position = "fixed", checkDiv.style.top = "20px";
		this.supportsFixedPosition = (checkDiv.offsetTop === 20 || checkDiv.offsetTop === 15);
		checkDiv.style.position = checkDiv.style.top = "";
		innerDiv.style.overflow = "hidden", innerDiv.style.position = "relative";
		this.subtractsBorderForOverflowNotVisible = (checkDiv.offsetTop === -5);
		this.doesNotIncludeMarginInBodyOffset = (body.offsetTop !== bodyMarginTop);
		body.removeChild( container );
		body = container = innerDiv = checkDiv = table = td = null;
		jQuery.offset.initialize = jQuery.noop;
	},
	bodyOffset: function( body ) {
		var top = body.offsetTop, left = body.offsetLeft;
		jQuery.offset.initialize();
		if ( jQuery.offset.doesNotIncludeMarginInBodyOffset ) {
			top  += parseFloat( jQuery.curCSS(body, "marginTop",  true) ) || 0;
			left += parseFloat( jQuery.curCSS(body, "marginLeft", true) ) || 0;
		}
		return { top: top, left: left };
	},
	setOffset: function( elem, options, i ) {
		if ( /static/.test( jQuery.curCSS( elem, "position" ) ) ) {
			elem.style.position = "relative";
		}
		var curElem   = jQuery( elem ),
			curOffset = curElem.offset(),
			curTop    = parseInt( jQuery.curCSS( elem, "top",  true ), 10 ) || 0,
			curLeft   = parseInt( jQuery.curCSS( elem, "left", true ), 10 ) || 0;
		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}
		var props = {
			top:  (options.top  - curOffset.top)  + curTop,
			left: (options.left - curOffset.left) + curLeft
		};
		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};
jQuery.fn.extend({
	position: function() {
		if ( !this[0] ) {
			return null;
		}
		var elem = this[0],
		offsetParent = this.offsetParent(),
		offset       = this.offset(),
		parentOffset = /^body|html$/i.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();
		offset.top  -= parseFloat( jQuery.curCSS(elem, "marginTop",  true) ) || 0;
		offset.left -= parseFloat( jQuery.curCSS(elem, "marginLeft", true) ) || 0;
		parentOffset.top  += parseFloat( jQuery.curCSS(offsetParent[0], "borderTopWidth",  true) ) || 0;
		parentOffset.left += parseFloat( jQuery.curCSS(offsetParent[0], "borderLeftWidth", true) ) || 0;
		return {
			top:  offset.top  - parentOffset.top,
			left: offset.left - parentOffset.left
		};
	},
	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.body;
			while ( offsetParent && (!/^body|html$/i.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent;
		});
	}
});
jQuery.each( ["Left", "Top"], function( i, name ) {
	var method = "scroll" + name;
	jQuery.fn[ method ] = function(val) {
		var elem = this[0], win;
		if ( !elem ) {
			return null;
		}
		if ( val !== undefined ) {
			return this.each(function() {
				win = getWindow( this );
				if ( win ) {
					win.scrollTo(
						!i ? val : jQuery(win).scrollLeft(),
						 i ? val : jQuery(win).scrollTop()
					);
				} else {
					this[ method ] = val;
				}
			});
		} else {
			win = getWindow( elem );
			return win ? ("pageXOffset" in win) ? win[ i ? "pageYOffset" : "pageXOffset" ] :
				jQuery.support.boxModel && win.document.documentElement[ method ] ||
					win.document.body[ method ] :
				elem[ method ];
		}
	};
});
function getWindow( elem ) {
	return ("scrollTo" in elem && elem.document) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.each([ "Height", "Width" ], function( i, name ) {
	var type = name.toLowerCase();
	jQuery.fn["inner" + name] = function() {
		return this[0] ?
			jQuery.css( this[0], type, false, "padding" ) :
			null;
	};
	jQuery.fn["outer" + name] = function( margin ) {
		return this[0] ?
			jQuery.css( this[0], type, false, margin ? "margin" : "border" ) :
			null;
	};
	jQuery.fn[ type ] = function( size ) {
		var elem = this[0];
		if ( !elem ) {
			return size == null ? null : this;
		}
		if ( jQuery.isFunction( size ) ) {
			return this.each(function( i ) {
				var self = jQuery( this );
				self[ type ]( size.call( this, i, self[ type ]() ) );
			});
		}
		return ("scrollTo" in elem && elem.document) ?
			elem.document.compatMode === "CSS1Compat" && elem.document.documentElement[ "client" + name ] ||
			elem.document.body[ "client" + name ] :
			(elem.nodeType === 9) ?
				Math.max(
					elem.documentElement["client" + name],
					elem.body["scroll" + name], elem.documentElement["scroll" + name],
					elem.body["offset" + name], elem.documentElement["offset" + name]
				) :
				size === undefined ?
					jQuery.css( elem, type ) :
					this.css( type, typeof size === "string" ? size : size + "px" );
	};
});
window.jQuery = window.$ = jQuery;
})(window);
(function($) {
$.ua = {browser: {name: '', version: 0}, os: {name: '', version: ''}};
var ua = navigator.userAgent.toLowerCase(), info = {}, name, version, engine, os, osversion;
ua.replace(/[\(\)]/g, ';').replace(/\s*(\w*?\ ?\w+[\:\s\;]?[^\d\s]*?)[\/\ ]([\d\.]*)/g, function(f, key, value) { info[key]=info[key] || value || true; });
$.each(['msie', 'opera', 'firefox', 'seamonkey', 'arora', 'iron', 'chrome', 'safari'], function() {
    if (!name && info[this]) { name=this; }
});
version = info.version || info[name] || '';
$.each(['trident', 'gecko', 'webkit', 'presto'], function() { if (!engine && info[this]) { engine=this; } });
$.extend($.ua.browser, {name: name, version: parseFloat(version), versionDetail: version.split('.'), engine: { name: engine, version: info[engine] } });
$.each(['windows nt', 'windows', 'intel mac', 'ppc mac', 'linux'], function() {
    if (!os && info[this]) { os=this; }
});
if (os=='windows nt') { osversion=({ '4.0': 'nt', '5.0': '2000', '5.1': 'xp', '5.2': '2003', '6.0': 'vista', '6.1': '7' })[info[os]]; os='windows'; }
else if (os=='intel mac') { os='mac os'; osversion='intel'; }
else if (os=='ppc mac') { os='mac os'; osversion='ppc'; }
$.extend($.ua.os, {name: os, version: osversion, '64bit': /\ (wow64|win64|x64)/.test(ua), ospatchlevel: (/windows\ nt\ 5\.1.*sv1/.test(ua) ? 'sp2' : null)});
if (/msie\ (\d+).*trident[ \/](\d+)/.test(ua)) { $.extend($.ua.browser, {version: RegExp.$2*1+4, renderMode: RegExp.$1*1}); }
$.ua.browser[name] = $.ua.browser.version;
$.ua.browser[engine] = info[engine];
})(jQuery);
Function.prototype.bind = function(object) {
    return $.proxy(this, object);
}

jQuery.fn.appendDom = function(template) {
  return this.each(function() {
    for (element in template) {
      var el = (typeof(template[element].tagName) === 'string') ?
        document.createElement(template[element].tagName): document.createTextNode('');
      delete template[element].tagName;
      for (attrib in template[element]) {
        switch ( typeof(template[element][attrib]) ) {
          case 'string' :
            if ( typeof(el[attrib]) === 'string' ) {
             el[attrib] = template[element][attrib];
            } else {
              el.setAttribute(attrib, template[element][attrib]);
            }
            break;
          case 'function':
            el[attrib] = template[element][attrib];
            break;
          case 'object' :
            if (attrib === 'childNodes')  {$(el).appendDom(template[element][attrib]);}
            break;
        }
      }
      this.appendChild(el);
    }
  });
};
(function($) {
var interval = null;
var checklist = [];
$.elementReady = function(id, fn) {
    checklist.push({id: id, fn: fn});
    if (!interval) {
        interval = setInterval(check, $.elementReady.interval_ms);
    }
    return this;
};
$.elementReady.interval_ms = 23;
function check() {
    var docReady = $.isReady;
    for (var i = checklist.length - 1; 0 <= i; --i) {
        var el = document.getElementById(checklist[i].id);
        if (el) {
            var fn = checklist[i].fn;
            checklist[i] = checklist[checklist.length - 1];
            checklist.pop();
            fn.apply(el, [$]);
        }
    }
    if (docReady) {
        clearInterval(interval);
        interval = null;
    }
};
})(jQuery);
(function($) {
$.cookie = new function() {
    this.parse = function() {
        this.jar = {};
        if (!document.cookie || !document.cookie.length || document.cookie.length == 0) { return; }
        document.cookie.replace(/([^=;\ ]+)=([^;]*)/g, function(c) { return function(full, key, data) {
            c.jar[unescape(key)] = unescape(data);
        }}(this));
    }
    this.parse();
    this.get = function(name, def) { return this.jar[name] || def; }
    this.getInt = function(name, def) {
        var value = parseInt(this.jar[name]);
        return !isNaN(value) ? value : def;
    }
    var timespans = { y: 30758400000, m: 259200000, d: 86400000, h: 3600000, i: 60000, s: 1000 };
    this.set = function(name, value, expires, path, domain, secure) {
        var date = false;
        if (expires) {
            date = (expires instanceof Date ? expires : new Date());
            if ('string' == typeof(expires)) {
                expires.replace(/([\-\d.]+)([ymdhis])/g, function(f, t, m) {
                    if (f) { date.setTime(date.getTime() + parseFloat(t) * timespans[m] || 0); }
                });
            }
        }
        document.cookie = encodeURIComponent(new String(name))+'='+
                          encodeURIComponent(new String(value))+
                          (date   ? '; expires='+date.toGMTString() : '')+
                          (path !== null ? '; path='+(path || '/') : '')+
                          (domain ? '; domain='+domain : '')+
                          (secure ? '; secure' : '');
        this.parse();
    }
    this.inc = function(name, value, def, expires, path, domain, secure) {
        var val = this.getInt(name,def)+(value || 1);
        this.set(name, val, expires, path, domain, secure);
        return val;
    }
    this.del = function(name, path, domain) {
        if (!name || !this.jar[name]) { return false; }
        this.set(name, '', '-1s', path, domain);
        try { delete this.jar[name]; } catch(e) {};
    }
}

})(jQuery);
(function($) {
$.url = function(url) {
    var uriDecode = function(text) {
        return decodeURIComponent(text || '').replace(/\+/g, ' ');
    }
    var urlparser = /^([^:\/\?#\.]*:?)(\/\/([^\/\?#:]*))?:?(\d*)(\.*\/[^?#]*)(\\?[^#]*)?(#.*)?$/;
    var urlkey = ['href','protocol','base','hostname','port','pathname','search','hash'];
    var urlobj = { params: {} };
    var urldata = (url || location.href).match(urlparser);
    var i = urlkey.length;
    while (i--) { urlobj[urlkey[i]] = (urldata[i] || ''); }
    urlobj.host = urlobj.hostname + (urlobj.port != '' ? ':' : '') + urlobj.port;
    if (urlobj.host.match(/^\.\.?$/)) { urlobj.path = urlobj.host + urlobj.path; urlobj.host = ''; }
    urlobj.search.replace(/([^\?&=]+)=?([^&]*)?/g, function(full, key, data) {
        if (key) { urlobj.params[uriDecode(key)] = uriDecode(data); }
    });
    urlobj.toString = function(baseurl) {
        var params = $.param(urlobj.params);
        if (baseurl === false || urlobj.protocol != '' && urlobj.host != '') {
            return urlobj.protocol + (urlobj.host != '' ? '\/\/' : '') + urlobj.host +
                urlobj.pathname + (params ? '?'+params : '') + urlobj.hash;
        }
        var base = $.url((baseurl || location.href));
        var abspath = urlobj.pathname;
        if (!urlobj.pathname.match(/^\//)) {
            abspath = (base.pathname.replace(/[^\/]*$/, '') + urlobj.pathname).replace(/\/\.\//,'/');
            while (abspath.match(/\.\./)) { abspath = abspath.replace(/\/[^\/]*\/\.\.\//g, '/'); }
        }
        return base.protocol + '\/\/' + base.host + abspath + (params ? '?'+params : '') + urlobj.hash;
    }
    return urlobj;
}

$.extend($.url, $.url());
})(jQuery);
(function($) {
$.fn.defaultValue = function(className) {
    var els = $(this);
    els.each(function() {
        var el = this;
        $(this).focus(function() {
            el.focussed = true;
            $.fn.defaultValue.clearValue(this, className);
            $.fn.defaultValue.autoFillCheck(els, className);
            this.autoFillInterval = window.setInterval(function() {
                $.fn.defaultValue.autoFillCheck(els, className);
            }, 100);
        }).blur(function() {
            el.focussed = false;
            $.fn.defaultValue.restoreValue(this, className);
            $.fn.defaultValue.autoFillCheck(els, className);
            window.clearInterval(this.autoFillInterval);
        }).blur();
    });
    var count = 20;
    var int = window.setInterval(function() {
        $.fn.defaultValue.autoFillCheck(els, className);
        if (!--count) { window.clearInterval(int); }
    }, 100);
}

$.fn.defaultValue.clearValue = function(el, className) {
    $(el).filter(function() { return this.value == this.defaultValue; }).val('').removeClass(className || '?');
}

$.fn.defaultValue.restoreValue = function(el, className) {
    $(el).filter(function() { return this.value == ''; }).val(el.defaultValue).addClass(className);
}

$.fn.defaultValue.autoFillCheck = function(els, className) {
    els.each(function() {
        if (this.focussed) { return $(this).removeClass(className); }
        $(this)[this.value==this.defaultValue ? 'addClass' : 'removeClass'](className);
    });
}

})(jQuery);
(function($) {
$.classyFX = function(options) {
    if (!options) { return; }
    var instance = new $.classyFX();
    instance.init(options);
    $.classyFX.instances.push(instance);
    return instance;
}

$.classyFX.instances = [];
$.classyFX.fn = $.classyFX.prototype = new function() {
    this.defaults = {
        options: {animate: {}, parent: 'body', steps: 5, ms: 30},
        fpp: {'*': 0, '%': 2, 'pt': 1, 'em': 2, 'ex': 2, 'opacity': 2, 'line-height': 2}
    };
    this.normalize = {
        opacity: {
            val: ($.support.opacity ? null : (/Trident\ 4/.test(navigator.userAgent) ?
                function(val) { return val.replace(/opacity:\s*(1|0\.?\d*)\s*/, '-ms-filter: Alpha("opacity='+(parseFloat('$1')*100)+'")'); } :
                function(val) { return val.replace(/opacity:\s*(1|0\.?\d*)\s*/, 'filter: Alpha(opacity='+(parseFloat('$1')*100)+')'); })),
            delta: ($.support.opacity ? null: function(val) { return val*100; })
        }
    };
    this.easing = {
        linear: function(start, delta, s) { return start+delta*s; },
        easein: function(start, delta, s) { return start+delta*s*s; },
        easeout: function(start, delta, s) { return start+delta*(s+Math.sqrt(s))/2; },
        easeboth: function(start, delta, s) { return start+(s*delta*Math.sqrt(s)+(1-s)*delta*s*s); },
        halfcos: function(start, delta, s) { return start+delta*(1-Math.cos(Math.PI*s))/2; },
        sinus: function(start, delta, s) { return start+delta*(1+Math.sin(Math.PI*2*s-1/2*Math.PI))/2; }
    };
    this.init = function(options) {
        this.options = $.extend({}, this.defaults.options, options);
        this.options.parent = $((options.parent || options.selector.replace(/\[\-?step\][^,]*/g, '')));
        if (options.animate) { this.createCSS(); }
        return this;
    };
    this.colorToArray = function(color) {
        var c = parseInt(color, 16);
        return [c >> 16, (c >> 8) & 255, c & 255];
    };
    this.colorToString = function(color) {
        return ('#'+($.map(color, function(c) { return (((c&240)>>4).toString(16)+(c&15).toString(16)); }).join('')));
    };
    this.floatToString = function(num, fpp) {
        if (fpp == 0) { return num|0; }
        var m = Math.pow(10, fpp | 0);
        return ((num*m)|0)/m;
    };
    this.getVal = function(valstr) {
        var values = [];
        valstr.replace(/(#([0-9A-Fa-f]+)|((\d+\.?\d*)))/g, function(full, dec, hex) {
            values.push(!hex ? parseFloat(dec) : $.classyFX.fn.colorToArray(hex.length == 3 ? hex.replace(/(.)/g, '$1$1') : hex));
        });
        return values;
    };
    this.getDelta = function(start, end) {
        if (!$.isArray(start)) { return (end - start); }
        var result = [];
        for (var v=0; v < start.length; v++) {
            result.push(this.getDelta(start[v], end[v]));
        }
        return result;
    }
    this.calcVal = function(startvals, delta, s, easing) {
        if (!$.isArray(startvals)) { return ($.isFunction(easing) ? easing : this.easing[easing || 'linear'] || this.easing.linear)(startvals, delta, s, easing); }
        var result = [];
        for (var v=0; v < startvals.length; v++) {
            result.push(this.calcVal(startvals[v], delta[v], s, easing));
        }
        return result;
    }
    this.setVal = function(valstr, values, attr) {
        var c = this;
        return valstr.replace(/(#[0-9A-Fa-f]+|\d+\.?\d*(\w+))/g, function(full, val, unit, fpp) {
            var v=values.pop();
            return (isNaN(v) ? c.colorToString(v) : (c.floatToString(v, (fpp || c.defaults.fpp[attr] || c.defaults.fpp[unit] || c.defaults.fpp['*'])) + unit));
        });
    };
    this.createCSS = function() {
        var cssData = [], steps = this.options.steps;
        for (var a in this.options.animate) {
            if (/[A-Z]/.test(a)) {
                var newkey = a.replace(/[A-Z]/g, function(x) { return '-'+x.toLowerCase(); });
                this.options.animate[newkey] = this.options.animate[a];
                try { delete this.options.animate[a] } catch(e) { this.options.animate[a] = null; }
                a = newkey;
            }
            if (typeof(this.options.animate[a]) == 'string') { continue; }
            if (this.normalize[a]) {
                this.options.animate[a].start = this.normalize[a].val(this.options.animate[a].start);
                if (this.options.animate[a].delta) {
                    this.options.animate[a].delta = this.normalize[a].delta(this.options.animate[a].delta);
                } else if (this.options.animate[a].end) {
                    this.options.animate[a].end = this.normalize[a].val(this.options.animate[a].end);
                }
            }
            this.options.animate[a].startvals = this.getVal(this.options.animate[a].start);
            this.options.animate[a].endvals = this.getVal(this.options.animate[a].end);
            if (!this.options.animate[a].delta) {
                this.options.animate[a].delta = this.getDelta(this.options.animate[a].startvals, this.options.animate[a].endvals, steps);
            } else if (!$.isArray(this.options.animate[a].delta)) {
                this.options.animate[a].delta = this.getVal(this.options.animate[a].delta);
            }
        }
        for (var s=1; s <= steps; s++) {
            cssData[s] = [];
            for (var a in this.options.animate) {
                if (this.options.animate.hasOwnProperty[a]);
                var anim = this.options.animate[a];
                if (typeof(anim) == 'string') {
                    cssData[s].push(a+': '+this.options.animate[a]+'; ');
                    continue;
                }
                cssData[s].push(a+': '+this.setVal(anim.start, this.calcVal(anim.startvals, anim.delta, (s/steps), anim.easing), a, anim.fpp));
            }
            cssData[s] = this.options.selector.replace(/\[\-?step\]/g, function(id) {
                return '.s'+(id == '[-step]' ? (steps+1-s) : s);
            })+' { '+cssData[s].join('; ')+'; }';
        }
        this.css = $('<style type="text/css">'+cssData.join("\n")+'</style>').appendTo('head');
        this.destroy = function() { this.css.remove(); }
    }
    this.run = function() {
        if (!this.options.parent.length) { this.options.parent = $(this.options.parent.selector); }
        this.step = 0;
        if (!this.options.multiple && /\bs\d+\b/.test(this.options.parent.attr('class'))) { return; }
        if ($.isFunction(this.options.before)) { this.options.before(); }
        var anim = this;
        this.stepFunc = function() { return function() {
            if (this.paused) { return; }
            if ($.isFunction(this.options.each)) { this.options.each(); }
            if (this.step++ >= this.options.steps) {
                if (!this.options.repeat) {
                    if ($.isFunction(this.options.after)) { this.options.after(); }
                    this.options.parent.removeClass('s'+(this.step-1));
                    window.clearInterval(this.stepInterval);
                    return;
                } else {
                    this.options.parent.removeClass('s'+(this.step-1))
                    this.step = 1;
                }
            }
            this.options.parent.removeClass('s'+(this.step-1)).addClass('s'+this.step);
        }.apply(anim); }
        this.stepInterval = window.setInterval(this.stepFunc, this.options.ms);
    };
    this.pause = function() { this.paused = true; };
    this.resume = function() {
        if (!this.paused) { this.run(); }
        this.paused = false;
    };
    this.stop = function() {
        window.clearInterval(this.stepInterval);
        this.options.parent.removeClass('s'+(this.step));
        if ($.isFunction(this.options.after)) { this.options.after(); }
    };
}

})(jQuery);
window.ObjectElement = function(type, data, width, height, id) {
  this.type = type || this._lookupMimeType(data);
  this.data = data || "";
  this.width = width || "";
  this.height = height || "";
  this.id = id || "flash-"+((Math.random()*1E5)|0)+"-"+(new Date()*1);
  this.classId = this._lookupClassId(type);
  this.altText = this._lookupAltText(type);
  this.params       = new Object();
  this.embedParams  = new Object();
  this.style        = new Object();
  if (this.width) {
    this.addStyle("width", this.width + ((this._hasUnit(this.width)) ? "" : "px"));
  }
  if (this.height) {
    this.addStyle("height", this.height + ((this._hasUnit(this.height)) ? "" : "px"));
  }
}

ObjectElement.prototype.CLASSID_FLASH = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
ObjectElement.prototype.CLASSID_QUICKTIME = "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";
ObjectElement.prototype.CLASSID_MPLAYER = "clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6";
ObjectElement.prototype.CLASSID_REALPLAYER = "clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA";
ObjectElement.prototype.MIMETYPE_FLASH = "application/x-shockwave-flash";
ObjectElement.prototype.MIMETYPE_QUICKTIME = "video/quicktime";
ObjectElement.prototype.MIMETYPE_MPLAYER = "application/x-mplayer2";
ObjectElement.prototype.MIMETYPE_REALPLAYER_RPM = "audio/x-pn-realaudio-plugin";
ObjectElement.prototype.MIMETYPE_REALPLAYER_RA = "audio/x-pn-realaudio";
ObjectElement.prototype.MIMETYPE_REALPLAYER_RAM = "audio/vnd.rn-realaudio";
ObjectElement.prototype.MIMETYPE_REALPLAYER_RV = "video/vnd.rn-realvideo";
ObjectElement.prototype.ALTTEXT_FLASH = '<p>Sie haben kein Flash installiert. Um diese Seite nutzen zu k&ouml;nnen, laden Sie bitte das kostenlose Flash-Plugin von folgender URL: https://www.macromedia.com/go/getflashplayer</p>';
ObjectElement.prototype.addParam = function(name, value) {
  this.params[name] = value;
}

ObjectElement.prototype.addEmbedParam = function(name, value) {
  this.embedParams[name] = value;
}

ObjectElement.prototype.addStyle = function(name, value) {
  this.style[name] = value;
}

ObjectElement.prototype._lookupAltText = function(type) {
  switch (type) {
    case this.MIMETYPE_FLASH:
      return this.ALTTEXT_FLASH;
  }
  return "";
}

ObjectElement.prototype._lookupClassId = function(type) {
  switch (type) {
    case this.MIMETYPE_FLASH:
      return this.CLASSID_FLASH;
    case this.MIMETYPE_QUICKTIME:
      return this.CLASSID_QUICKTIME;
    case this.MIMETYPE_MPLAYER:
      return this.CLASSID_MPLAYER;
    case this.MIMETYPE_REALPLAYER_RPM:
    case this.MIMETYPE_REALPLAYER_RA:
    case this.MIMETYPE_REALPLAYER_RAM:
    case this.MIMETYPE_REALPLAYER_RV:
      return this.CLASSID_REALPLAYER;
  }
  return "";
}

ObjectElement.prototype._lookupMimeType = function(url) {
  if (url) {
    if (url.search(/(\.swf$|\.swf\?|\.swf\#)/) != -1) {
      return this.MIMETYPE_FLASH;
    }
    else if (url.search(/(\.mov$|\.mov\?|\.mov\#)/) != -1) {
      return this.MIMETYPE_QUICKTIME;
    }
    else if (url.search(/(\.rpm$|\.rpm\?|\.rpm\#)/) != -1) {
      return this.MIMETYPE_REALPLAYER_RPM;
    }
    else if (url.search(/(\.rm$|\.rm\?|\.rm\#)/) != -1) {
      return this.MIMETYPE_REALPLAYER_RM;
    }
    else if (url.search(/(\.ra$|\.ra\?|\.ra\#)/) != -1) {
      return this.MIMETYPE_REALPLAYER_RA;
    }
    else if (url.search(/(\.rv$|\.rv\?|\.rv\#)/) != -1) {
      return this.MIMETYPE_REALPLAYER_RV;
    }
  }
  return "";
}

ObjectElement.prototype._hasUnit = function(str) {
  return isNaN(str);
}

ObjectElement.prototype._getAltTextNode = function() {
  switch (this.type) {
    case this.MIMETYPE_FLASH:
      var paragraphNode = document.createElement("p");
      var preTextNode = document.createTextNode("Sie haben kein Flash installiert.Zur Installation des");
      var postTextNode = document.createTextNode(".")
      var anchorTextNode = document.createTextNode("Flash-Plugin")
      var anchorNode = document.createElement("a");
      anchorNode.setAttribute("href", "httpdisabled://www.macromedia.com/shockwave/downloaddisabled/index.cgi?P1_Prod_Version=ShockwaveFlash");
      anchorNode.setAttribute("target", "_blank");
      anchorNode.appendChild(anchorTextNode);
      paragraphNode.appendChild(preTextnode);
      paragraphNode.appendChild(anchorNode);
      paragraphNode.appendChild(postTextNode);
      return paragraphNode;
  }
  return "";
}

ObjectElement.prototype._hasEmbedTag = function() {
  return (this.type != this.MIMETYPE_FLASH);
}

ObjectElement.prototype._hasClassId = function() {
  return (this.classId && (this.classId != this.CLASSID_FLASH));
}

ObjectElement.prototype._createObjectTagStr = function() {
  var classIdAttr = (this._hasClassId()) ? 'classid="' + this.classId + '" ': '';
  var styleAttr = this._createStyleStr();
  var objectTagStr = "";
  objectTagStr += '<ob' + 'ject ' + classIdAttr + 'data="' + this.data + '"' +
				  (this.width != '' ? ' width="' + this.width + '"' : '') +
				  (this.height != '' ? ' height="' + this.height + '"' : '') +
				  ' type="' + this.type + '" id="' + this.id + '" style="' + styleAttr  + '">';
  for (var name in this.params) {
    objectTagStr += '<param name="' + name + '" value="' + this.params[name] + '" />';
  }
  if (this._hasEmbedTag()) {
    objectTagStr += this._createEmbedTagStr();
  }
  objectTagStr += '</ob' + 'ject>';
  return objectTagStr;
}

ObjectElement.prototype._createEmbedTagStr = function() {
  var styleAttr = this._createStyleStr();
  var embedTagStr = '<embeddisabled type="' + this.type + '" src="' + this.data + '" width="' + this.width + '" height="' + this.height + '" style="' + styleAttr + '"';
  for (var name in this.embedParams) {
    embedTagStr += ' ' + name + '="' + this.embedParams[name] + '"';
  }
  embedTagStr += '></embed>';
  return embedTagStr;
}

ObjectElement.prototype._createStyleStr = function() {
  var styleStr = "";
  for (var name in this.style) {
    styleStr += name + ": " + this.style[name] + "; ";
  }
  return (styleStr.length > 0) ? styleStr.substring(0, styleStr.length-1) : styleStr;
}

ObjectElement.prototype._createObjectTag = function() {
  var objectTag = document.createElement("object");
  var styleAttr = this._createStyleStr();
  if (this._hasClassId()) {
    objectTag.setAttribute("classid", this.classId);
  }
  if (styleAttr) {
    objectTag.setAttribute("style", styleAttr);
  }
  if (this.type) {
    objectTag.setAttribute("type", this.type);
  }
  if (this.data) {
    objectTag.setAttribute("data", this.data);
  }
  for (var name in this.params) {
    var paramTag = this._createParamTag(name, this.params[name]);
    objectTag.appendChild(paramTag);
    objectTag[name] = this.params[name];
  }
  if (this._hasEmbedTag()) {
    var embedTag = this._createEmbedTag();
    objectTag.appendChild(embedTag);
  }
  return objectTag;
}

ObjectElement.prototype._createParamTag = function(name, value) {
  var paramTag = document.createElement("param");
  paramTag.setAttribute("name", name);
  paramTag.setAttribute("value", value);
  return paramTag;
}

ObjectElement.prototype._createEmbedTag = function() {
  var embedTag = document.createElement("embed");
  var styleAttr = this._createStyleAttr();
  if (this.type) {
    embedTag.setAttribute("type", this.type);
  }
  if (this.data) {
    embedTag.setAttribute("src", this.data);
  }
  if (styleAttr) {
    embedTag.setAttributeNode(styleAttr);
  }
  if (this.width) {
    embedTag.setAttribute("width", this.width);
  }
  if (this.height) {
    embedTag.setAttribute("height", this.height);
  }
  for (var name in this.embedParams) {
    embedTag.setAttribute(name, this.embedParams[name]);
  }
  return embedTag;
}

ObjectElement.prototype.getNode = function() {
  return this._createObjectTag();
}

ObjectElement.prototype.getNodeAsString = function() {
  return this._createObjectTagStr();
}

ObjectElement.prototype.render = function() {
  	var tag = this.getNodeAsString();
	void(tag);
}

ObjectElement.prototype.renderReplace = function(id) {
  var objectTag = this._createObjectTag();
  var replaceTag = document.getElementById(id);
  var parentNode = replaceTag.parentNode;
  parentNode.replaceChild(objectTag, replaceTag);
}

function FlashObjectElement(data, width, height, id) {
  this.data = data || "";
  this.width = width || "";
  this.height = height || "";
  this.id = id || "";
  this.style = [];
  if (this.data) {
    this.addParam("movie", this.data);
  }
  if (this.width) {
    this.addStyle("width", this.width + ((this._hasUnit(this.width)) ? "" : "px"));
  }
  if (this.height) {
    this.addStyle("height", this.height + ((this._hasUnit(this.height)) ? "" : "px"));
  }
  this.setWindow();
}

FlashObjectElement.prototype = new ObjectElement('application/x-shockwave-flash');
FlashObjectElement.prototype.setTransparent = function() {
    this.addParam('wmode', 'transparent');
}

FlashObjectElement.prototype.setOpaque = function() {
    this.addParam('wmode', 'opaque');
}

FlashObjectElement.prototype.setWindow = function() {
    this.addParam('wmode', 'window');
}

FlashDetection = new function() {
    this.NOT_INSTALLED = 0;
    this.CHECK_FAILED  = null;
    this.NOT_CHECKED   = false;
    this.version   = this.NOT_CHECKED;
    this.installed = null;
    this.checkVersion = function() {
        this.version   = this._getVersion();
        this.installed = !!this.version;
    }
    this._getVersion = function() {
        try {
            var ua = navigator.userAgent ? navigator.userAgent.toLowerCase() : '';
            if (navigator.plugins && navigator.plugins.length) {
                return this._getVersion_navigator();
            }
            if (document.all && !window.opera) {
                return this._getVersion_ieWin();
            }
            if (++ua.indexOf('webtv/2.6')) { return 4; }
            if (++ua.indexOf('webtv/2.5')) { return 3; }
            if (++ua.indexOf('webtv'))     { return 2; }
        } catch(e) {
            return this.CHECK_FAILED;
        }
        return this.NOT_INSTALLED;
    }
    this._getVersion_navigator = function() {
        var plugin = navigator.plugins['Shockwave Flash 2.0']
                  || navigator.plugins['Shockwave Flash'];
        if (plugin && plugin.description) {
            return parseInt(plugin.description.substring(16));
        } else {
            return this.NOT_INSTALLED;
        }
    }
    this._getVersion_ieWin = function() {
        var temp = window['flashversion'];
        window.execScript('\
            on error resume next\n\
            For vbLoop = 2 to 10\n\
                If Not(IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & vbLoop))) Then\n\
                Else\n\
                    flashversion = vbLoop\n\
                End If\n\
            Next\n\
        ', 'VBScript');
        var version = window.flashversion;
        window.flashversion = temp;
        return version;
    }
	this.checkVersion();
}

function homepageBegin() {
    var baseWidth = $('#buster').length ? 1160 : ($('#megabuster').length ? 1180 : 1240);
    if ($('body.hasSitebar').length) { baseWidth = 9999; }
    window.bodyElement = $('body');
    $(window).resize(function() {
        var sizeClass = $(window).width()>=($('#wrapper').css('border-right-width')=='1px'?1:0)+baseWidth+(window.bodyElement.hasClass('centered')?1:0) ? 'size-big' : 'size-small';
        if (window.sizeClass == sizeClass) { return; }
        window.sizeClass = sizeClass;
        window.bodyElement.removeClass('size-big size-small')
                          .addClass(sizeClass);
        window.emosPageId = 'homepage_' + (sizeClass=='size-small' ? 'small' : 'wide');
        try { frames[frames.length-1].setEmosPageId(); } catch(e) {}
        $('#headerNav li, #searchFav li').removeClass('last');
        $('#headerNav li').filter(function() { return $(this).css('display')!='none'; }).filter(':last').addClass('last');
        $('#searchFav li').filter(function() { return $(this).css('display')!='none'; }).filter(':last').addClass('last');
        window.setTimeout(organiseFooternav, 1);
        resizeSitebar();
    }).resize();
    $.elementReady('content', function() { window.sizeClass=''; $(window).resize(); });
    $(window).loaddisabled(function() { $(window).resize(); });
    if ($.ua.browser.msie<=6 && $('body.hasSitebar').length) {
        $(window).scroll(function() {
            $('#advSpecialMain').css('top', $(window).scrollTop());
        });
        $.elementReady('footer', function() { window.setTimeout(function() {
            var temp = $(window).data('events')['scroll'];
            for (var i in temp) {
                try {
                    if ($.isFunction(temp[i])) { temp[i](); }
                } catch(e) {
                }
            }
        }, 200)});
    }
    window.bodyElement.addClass('jsEnabled');
    var loginboxesAvailable = [ 'freemail', 'club', 'smartdrive', 'maxdome' ];
    voidLoginbox = false;
    for (var i=0; i<loginboxesAvailable.length; i++) {
        if (window.bodyElement.hasClass('login-'+loginboxesAvailable[i])) {voidLoginbox = loginboxesAvailable[i]; }
    }
    if ($.url.params['login']) {
        for (var i=0; i<loginboxesAvailable.length; i++) {
            var name = loginboxesAvailable[i];
            if ($.url.params['login'] == name){
               voidLoginbox = name;
                window.bodyElement.removeClass('login-'+loginboxesAvailable.join(' login-')).addClass('login-'voidLoginbox);
            }
        }
    }
    switch ($.url.params['status']) {
        case '404':
        case 'session-expired':
            window.bodyElement.addClass('message-status status-'+$.url.params['status']);
            break;
        case 'login-failed':
            if (voidLoginbox) {voidLoginbox = 'freemail'; }
            window.bodyElement.addClass('message-status status-'+$.url.params['status']+' login-failed-'voidLoginbox);
            break;
        default:
            if (
                    location.pathname=='/fm'
                ||  location.pathname=='/fm_nossl'
                ||  location.pathname=='/club'
                ||  location.pathname=='/club_nossl'
            ) {
                location.href = '/'+location.search+location.hash
            }
    }
    $(function() {
        $('#loginbox form input.field:not(#inpSearchText)').defaultValue('defaultValue');
        $('#navlayerlogin form input.username').defaultValue('defaultValue');
        $('#navlayerlogin form input.password').defaultValue('defaultValue');
    });
    if voidLoginbox) {
        $(function() {
            window.bodyElement.removeClass('login-freemail login-promail login-topmail');
            if ($('#loginbox-'voidLoginbox).hasClass('active')) { return; }
            $('#loginbox-'voidLoginbox+' h3 a').click();
        });
    }
    $.elementReady('inpSearchText', function() { $('#inpSearchText').defaultValue('defaultValue'); });
    if ($.ua.browser.msie<=6) {
        try { document.execCommand('BackgroundImageCache', false, true); } catch(e) {}
        $.elementReady('loginbox', warnIE);
    }
    Region.register(AdvConfig, AdvConfig.setRegion);
    Region.setRegion(window.targetRegion);
    $('[data-popup-name] a:not([data-popup-disabled]), [data-popup-style] a:not([data-popup-disabled]), a[data-popup-name], a[data-popup-style]').live('click', function() {
        if ($(this).attr('data-popup-disabled') !== undefined) { return; }
        var root = $(this).parents().andSelf().filter('[data-popup-name], [data-popup-style]');
        return portalPopup(addSession(this.href), root.attr('data-popup-name')||'win', root.attr('data-popup-style')||null, false);
    });
    $('.button-wrapper').live('click', function(e) {
        if (e.originalTarget !== this) { return; }
        e.preventDefault();
        e.stopPropagation();
        $('input, a', this).click();
    });
    $('[data-ajax-url] a, a[data-ajax-url]').live('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        loaddisabledAjax($(this).parents('[data-ajax-url]').andSelf().filter('[data-ajax-url]'), e);
    });
}

function resizeSitebar() {
    $('#sitebar .moduleGroup').css('height', '');
    var sitebarHeight = $('#sitebar').outerHeight();
    var diff = sitebarHeight - $('#sitebar .moduleGroup').outerHeight();
    var newSitebarContainerHeight = Math.max($('#content').height(), sitebarHeight, $('.uim').height() ) - diff;
    $('#sitebar .moduleGroup').height(newSitebarContainerHeight);
}

function homepageEnd() {
    $('#headerContent .description').appendTo('#footerInformation');
    window.setTimeout(function() { horoscopeTicker(); }, 500);
    window.setTimeout(function() { searchFavBlinker(); }, 1500);
    $('#searches a').click(function() { directSearch(this); });
    $('#loginbox form fieldset').append('<input type="hidden" name="jsenabled" value="true"/>');
    resizeSitebar();
    organiseFooternav();
    $('#skipNavigation a[href=#top]').click(function(e) {
        e.preventDefault();
        $(document).scrollTop(0);
        return false;
    });
    AdvConfig.outputPos('popup', '', 'popup', '', '', '');
    window.setTimeout(function() { Topper.init(); }, Topper.timeout);
    if (document.getElementById('iframeUim')) {
        document.getElementById('iframeUim').iframeDontFix = true;
    }
    fixIframe('iframe');
    tifCount();
    Econda.run();
}

function uimIframeIsReady(win) {
    var items = ['$', 'AdvConfig', 'runAdproxyCollector', 'adproxyReplacer'];
    for (var i=0; i<items.length; i++) {
        win[items[i]] = window[items[i]];
    }
}

function go(link, url) {
    if ((link.href.indexOf('#')+1) && !(url.indexOf('#')+1)) {
        url += link.href.substr(link.href.indexOf('#'));
    }
    if ((link.target || '_self') != 'self') {
        void(url, link.target);
    } else {
        if ($.ua.browser.firefox && $.isFunction(document.documentElement.onclick)) {
            document.documentElement.onclick({srcElement:{href:url, nodeName:'a', parentNode:{}}});
            window.setTimeout(function() { location.href = url; }, 50);
        } else {
            window.setTimeout(function() { location.href = url; }, 50);
        }
    }
    return false;
}

function portalPopup(url, windowname, windowstyle, returncode) {
    windowname = (''+windowname).replace(/[^a-z0-9_]/gi, '');
    if (!/^[a-z_]/i.test(windowname)) { windowname = 'win'+windowname; }
    var cwin = void(url, windowname, windowstyle);
    if (!cwin || cwin.closed) { return !returncode; }
    if (cwin.focus) { cwin.focus(); }
    return returncode;
}

function addSession(url) {
    return url;
}

function initTabSelector(obj) {
    var tabs  = $('.tabsContainer ol.tabs>li', obj);
    var bcont = $('.contentContainer:first>ol', obj);
    var boxes = bcont.children();
    tabs.each(function(i, el) {
        if (!boxes[i]) {
            boxes[i] = $('li:last', bcont.append($('<li class="boxContent"><div class="boxContentModule"><div class="boxContentModuleContent"></div></div></li>')));
        }
        $(el).data('box', boxes[i]);
        $(el).data('boxes', boxes);
    });
    $('a', tabs).click(function(e) {
        e.preventDefault();
        var tab = $(this).parents('li:first');
        tab.siblings().add(bcont.children()).removeClass('active');
        tab.add(tab.data('box')).addClass('active');
        $(this).blur();
        resizeSitebar();
    });
}

function initMouseoverSelector(obj) {
    var tabs  = $('ol#horoscopeNav li', obj);
    var boxes = $('ol#horoscopeContent li', obj);
    $('a', tabs).mouseover(function(e) {
        var tab = $(this).parents('li:first');
        tab.siblings().add(boxes).removeClass('active');
        tab.add(boxes[tab.parent().children().index(tab)]).addClass('active');
        $(this).blur();
        resizeSitebar();
    });
}

function loaddisabledAjax(obj, e) {
    if (obj.data('ajax-loaddisableded')) { return resizeSitebar(); }
    var loaddisableding = '<div class="ajax-loaddisableding"></div>';
    $('.boxContentModuleContent', $(obj.data('box')).addClass('isLoading')).html(loaddisableding);
    window.setTimeout(function() {
        if (obj.data('ajax-loaddisableded')) { return; }
        $('.ajax-loaddisableding', obj.data('box')).addClass('active');
    }, 150);
    $.ajax({
        url: obj.attr('data-ajax-url'),
        success: function(data) {
            if (obj.attr('data-ajax-callback-loaddisableded')) {
                try { data = eval(obj.attr('data-ajax-callback-loaddisableded')); } catch(e) { }
            }
            $('.boxContentModuleContent', $(obj.data('box')).removeClass('isLoading')).html(data);
            if (obj.data('appendHash')) {
                $('.boxContentModuleContent a', $(obj.data('box'))).each(function() { appendHashToLink(this, obj.data('appendHash')); });
            }
            if (obj.attr('data-ajax-callback-done')) {
                try { eval(obj.attr('data-ajax-callback-done')); } catch(e) { }
            }
            obj.data('ajax-loaddisableded', true);
            resizeSitebar();
        }
    });
}

function topnewsLoadedGames(data, obj) {
    createSlider($('.slider', obj.data('box')), obj);
    if ($.ua.browser.msie && $.ua.browser.msie<=6) {
        window.setTimeout(function() { $('.modulePartGroup', obj.data('box')).css('zoom', '1'); }, 1);
    }
}

function topnewsLoadedVideo(data, obj) {
    createSlider($('.slider', obj.data('box')), obj);
    if ($.ua.browser.msie && $.ua.browser.msie<=6) {
        window.setTimeout(function() { $('.maxdome', obj.data('box')).css('zoom', '1'); }, 1);
    }
    $('input.field', obj.data('box')).defaultValue('defaultValue');
}

function topnewsLoadedTour(data, obj) {
    $('.partGroup1 .part2 li a', obj.data('box')).each(function(i) {
        this.index = i+1;
    }).click(function(e) {
        e.preventDefault();
        $('li', $(this).parents('ul:first')).removeClass('active');
        $(this).parents('li:first').addClass('active');
        $('.partGroup2 .modulePart', obj.data('box')).removeClass('active');
        $('.partGroup2 .modulePart.part'+this.index, obj.data('box')).addClass('active');
        this.blur();
        return false;
    });
}

function topnewsLoadedErotik(data, obj) {}
function initErotik(useTGP) {
    if (useTGP) {
        if (typeof(window.TG_ECMD) == 'undefined') {
            $.getScript('//p.uimserv.net', function(){ window.setTimeout(initErotik, 300); });
            return;
        }
        if (window.TG_ECMD != '7kx') { return; }
    }
    $('#topnews ol .last').removeClass('last');
    var url = 'erotik.html';
    var tab = $('<li class="last" id="topnewsNavErotic" data-ajax-url="'+url+'" data-ajax-callback-done="topnewsLoadedTour(data, obj)"><span><a href="#Erotik">Erotik</a></span></li>').appendTo('#topnews ol.tabs');
    var box = $('<li id="topnewsBoxErotik" class="boxContent last"><div class="boxContentModule"><div class="boxContentModuleContent"></div></div></li>').appendTo('#topnews ol.boxes');
    tab.data('box', box);
    var bcont = box.parent();
    tab.find('a').click(function(e) {
        e.preventDefault();
        var tab = $(this).parents('li:first');
        tab.siblings().add($('#topnews ol.boxes li')).removeClass('active');
        tab.add(tab.data('box')).addClass('active');
        $(this).blur();
    });
}

function heroNewsTicker() {
    var heroNews = $('#heroNews .modulePart');
    if (!heroNews.length) { return; }
    var currentPos = heroNews.index($('#heroNews .active')[0]);
    var nextPos    = (currentPos+1) % heroNews.length;
    $(heroNews[currentPos]).removeClass('active').addClass('inactive');
    $(heroNews[nextPos]).removeClass('inactive').addClass('active');
    $('#heroNews .moduleContent').removeClass('active1 active2 active3').addClass('active'+(nextPos+1));
    heroNewsTicker.timeout = window.setTimeout(heroNewsTicker, nextPos==heroNews.length-1 ? 8000 : 6000);
}

function initHeroNews() {
    if (!$('#heroNews').length) { return; }
    $('#heroNews .modulePart .content').click(function() {
        $('#heroNews .modulePart').addClass('inactive').removeClass('active');
        $(this).parent().removeClass('inactive').addClass('active');
        for (var i=1; i<=3; i++) {
            if ( $(this).parent().hasClass('part'+i) ) {
                $('#heroNews .moduleContent').addClass('active'+i);
            } else {
                $('#heroNews .moduleContent').removeClass('active'+i);
            }
        }
    });
    $('#heroNews .modulePart .content a:not(.more)').click(function(e) {
        if ($(this).closest('div.modulePart').hasClass('inactive')) {
            e.stopPropagation();
            e.preventDefault();
            $(this).closest('div.content').click();
            this.blur();
            return false;
        }
    })
    $('#heroNews .modulePart').mouseenter(function() {
        window.clearTimeout(heroNewsTicker.timeout);
        $('.content:first', this).click();
    }).mouseleave(function() {
        heroNewsTicker.timeout = window.setTimeout(function() { heroNewsTicker(); }, 2000);
    });
    heroNewsTicker.timeout = window.setTimeout(function() { heroNewsTicker(); }, 6000);
}

function organiseFooternav() {
    if (!$('#navigation').length) { return; }
    var start = $('#navigation').offset().left;
    if (!window.footerNavHeight) { calcFooterNavHeight(); }
    $('#navigation .module, #navigation #navSpecial').show().removeClass('start').each(function() {
        var el = $(this);
        if (el.offset().left-start <= 20) {
            el.addClass('start');
        }
        if (el.height() > window.footerNavHeight) {
            window.footerNavHeight = el.height();
        }
    });
    if (($('#navigation #navSpecial').prev('div:last').offset()||{top:0}).top < $('#navigation #navSpecial').offset().top) {
        $('#navigation #navSpecial').addClass('start');
    }
    $('#navigation #navSpecial.start').hide();
}

function calcFooterNavHeight() {
    window.footerNavHeight = 0;
    $('#navigation .module, #navigation #navSpecial').each(function() {
        var el = $(this);
        if (el.height() > window.footerNavHeight) {
            window.footerNavHeight = el.height();
        }
    });
    $('#navigation .module, #navigation #navSpecial').height(window.footerNavHeight);
}

function getCompactCookie(cname) {
    var cookie = $.cookie.get(cname, '');
    var result = [];
    result.get = {};
    if (cookie) {
        cookie = cookie.split(/&/g);
        for (var i=0; i<cookie.length; i++) {
            var parts = cookie[i].split('=', 2);
            result.push(unescape(parts[0]));
            result.get[unescape(parts[0])] = unescape(parts[1]||'');
        }
    }
    return result;
}

function setCompactCookie(cname, name, value) {
    var cookie = getCompactCookie(cname);
    if (name) {
        cookie.get[name] = value;
        if ($.inArray(name, cookie)<0) {
            cookie.push(name);
        }
    }
    var result = [];
    for (var i=0; i<cookie.length; i++) {
        result.push(escape(cookie[i])+'='+escape(cookie.get[cookie[i]]))
    }
    result = result.join('&');
    $.cookie.set(cname, result, '1m', '/');
}

function homepageInitAllContents() {
    new AllContents('#allContents');
    return;
}

function AllContents(rootSel) {
    var STATE_NEW     = undefined;
    var STATE_LOADING = 0;
    var STATE_OPENED  = 1;
    var STATE_CLOSED  = 2;
    var self = this;
    this.rootContainer = $(rootSel+' .content');
    this.efctContainer = $('#allContentsListContainer', $(this.rootContainer).append($('<div id="allContentsListContainer"></div>')));
    this.listContainer = $('#allContentsList .list', $(this.efctContainer).append($('\
        <div id="allContentsList">\
            <div class="content">\
                <div class="close"><span>Schlie&szlig;en</span></div>\
                <span class="email button-wrapper"><a>Zum E-Mail Login</a></span>\
                <div class="list"></div>\
                <div class="close"><span>Schlie&szlig;en</span></div>\
            </div>\
        </div>\
    ')));
    this.ajaxObject = null;
    $(rootSel+' h2').click(function(e) {
        e.preventDefault();
        $('a', this).blur();
        switch (self.state) {
            case STATE_OPENED:  self.close(); break;
            case STATE_CLOSED:  void();  break;
            case STATE_LOADING: self.close(); break;
            case STATE_NEW:     self.loaddisabled();  break;
        }
    });
    $(rootSel+' .content .email').click(function(e) { self.close(); voidLoginbox(); });
    $(rootSel+' .content .close span')
        .click(function(e) { self.close(); })
        .hover(function() { $(this).css('text-decoration', 'underline'); }, function() { $(this).css('text-decoration', 'none'); })
    void = function() {
        var self = this;
        $(this.rootContainer).removeClass('loaddisableding close').addClass(voiding');
        this.fx.options.after = function() { $(self.rootContainer).removeClass(voiding').addClass(void'); };
        this.fx.run();
        this.hideFlash = $('#features object:visible, #features embed:visible').css('visibility', 'hidden');
        this.state = STATE_OPENED;
    }
    this.close = function() {
        var self = this;
        if ($(self.rootContainer).hasClass('loaddisableding')) { return; }
        $(self.rootContainer).removeClass(void loaddisableding').addClass('closing');
        this.fx.options.after = function() { $(self.rootContainer).removeClass('closing').addClass('close'); self.hideFlash.css('visibility', ''); };
        this.fx.run();
        this.state = STATE_CLOSED;
    }
    this.loaddisabled = function() {
        $(this.rootContainer).addClass('loaddisableding');
        this.state = STATE_LOADING;
        var self = this;
        this.ajaxObject = $.get('/all-contents.html', {}, function(result) {
            if (!result.length) { return; }
            self.contents = result;
            self.listContainer.append(result).css({display:'', visibility:''});
            $(self.rootContainer).removeClass('loaddisableding');
            window.setTimeout(function() {
                self.fx = self.fx || $.classyFX({
                    selector: '#allContents[step] voiding #allContentsListContainer, #allContents[-step] .closing #allContentsListContainer',
                    animate: { height: { start: '0px', end: '300px', easing: 'halfcos' } },
                    steps: 5, ms: 30
                });
                if ($.ua.browser.msie < 8) {
                    self.fx.options.each = function() {
                        $('#allContentsList').css('margin-right', '1px');
                        window.setTimeout(function() { $('#allContentsList').css('margin-right', '0px'); }, 0);
                    };
                }
                void();
            }, 15);
        });
    }
    voidLoginbox = function() {
        if ($('#contentNavFreemail.active').length) { return; }
        $('#contentNavFreemail a').click();
        $('#inpFreemailLoginUsername').focus();
    }
}

function createToppromo(tabId, bgImage, url, text, textCss) {
    $('#toppromo').append($(
        '<div class="content"><p>'+text+'</p><a class="more" href="'+url+'"><span>mehr</span></a></div>'
    ));
    $('#toppromo, #toppromo .content').css('background-image', 'url('+bgImage+')');
    $('#toppromo p').css(textCss);
    var tab = $('#'+tabId);
    tab.addClass('has-toppromo');
    tab.prev().addClass('next-has-toppromo');
    tab.append('<div class="toppromo"><a class="more" href="'+url+'"><span>mehr</span></a></div>');
    $('#'+tabId+' .toppromo, #'+tabId+' .toppromo a.more').width(tab.width());
    $('#toppromo').removeClass('empty');
    window.bodyElement.addClass('has-toppromo');
}

function checkToppromo() {
    return;
    if ($('#buster, #megabuster').length) { return; }
    var isKnown = getCompactCookie('base').get['visits'] || 0;
    setCompactCookie('base', 'visits', +isKnown+1);
    if (isKnown) { return; }
    createToppromo(
        'headerNavEMail',
        '//img.ui-portal.de/gmx/hp09/ads/freemail_promo_bg.jpg',
        '//service.gmx.net/de/cgi/g.fcgi/products/mail/overview?mc=fm@hp@nocookie.fm',
        'Ihr E-Mail-Postfach mit viel Speicherplatz, 5 E-Mail-Adressen und h&ouml;chsten Sicherheitsstandards. Ebenso kostenlos: 10 SMS/Monat!',
        {'left':'210px', 'top':'31px', 'width':'420px', 'color':'#114DA1'}
    );
}

function warnIE() {
    if ($('#buster, #megabuster, .message-status').length) { return; }
    var h = (new Date()).getHours();
    var data = ([
        {
            show: function() { return ($.cookie.get('ie6nr') !== '-1'); },
            view: '//wa.ui-portal.de/webde/webde/s?produkte.browserdownloaddisabled.event.showwarn01',
            html: '<p><strong>Sicherheits-Hinweis:</strong> Der von Ihnen verwendete Browser Internet Explorer '+$.ua.browser.version+' weist gef&auml;hrliche Sicherheitsl&uuml;cken auf. Sch&uuml;tzen Sie sich! Laden Sie sich kostenlos die aktuellsten Browserversionen herunter! <a href="//wa.ui-portal.de/webde/webde/s?produkte.browserdownloaddisabled.click.showwarn01&ns_type=clickin&ns_url=http://produkte.web.de/browser?lp=1&mc=webde@home@sichwarn01.produkte@browser@lp1">Zum Downloaddisabled</a></p> <a href="#noreminder" onclick="return ignoreWarnIE();" style="position: absolute; right: 26px; font-size: 10px; margin-top: 6px; font-weight: 400; color: #888888;">Nicht mehr erinnern</a>'
        },
        {
            show: function() {
                if (new Date($.cookie.get('ie6ls', 0)*1)*1+302400000 > new Date()*1) { return false; }
                if (Math.random() > 0.25) { return false; }
                $.cookie.set('ie6ls', new Date()*1, '7d', '/');
                return true;
            },
            view: '//wa.ui-portal.de/webde/webde/s?produkte.browserdownloaddisabled.event.showwarn02',
            html: '<p><strong>Sicherheits-Hinweis:</strong> Der von Ihnen verwendete Browser Internet Explorer '+$.ua.browser.version+' weist gef&auml;hrliche Sicherheitsl&uuml;cken auf. Sch&uuml;tzen Sie sich! Laden Sie sich kostenlos die aktuellsten Browserversionen herunter! <a href="//wa.ui-portal.de/webde/webde/s?produkte.browserdownloaddisabled.click.showwarn02&ns_type=clickin&ns_url=http://produkte.web.de/browser?lp=1&mc=webde@home@sichwarn02.produkte@browser@lp1">Zum Downloaddisabled</a></p>'
        }
    ])[(h >= 7 && h < 20) ? 0 : 1];
    if (!data.show()) { return; }
    (new Image()).src = data.view;
    warnIE.msg = $('<div id="status-ie6" class="module withoutHeader"><div class="status-ie6 featured"><div class="moduleContent"><div class="modulePart">'+data.html+'</div></div></div></div>').prependTo('.area:first');
}

function ignoreWarnIE() {
    $.cookie.set('ie6nr', '-1', '30d', '/');
    warnIE.msg.hide();
    return false;
}

function searchFavMark(mark, unmark) {
    searchFavMark.mark = mark;
    searchFavMark.unmark = unmark;
    searchFavMark.fx.run();
}

searchFavMark.fx = $.classyFX({
    selector: '#search #searchFav[step] .marking, #search #searchFav[-step] .unmarking',
    animate: { color: { start: '#000000', end: '#FFFFFF' }, backgroundColor: { start: '#dce9fb', end: '#114da1' } },
    steps: 5,
    ms: 45,
    before: function() {
        $('#searchFav .mark, #searchFav .marking').removeClass('mark marking');
        $(searchFavMark.mark).addClass('marking');
        $(searchFavMark.unmark).removeClass('mark').addClass('unmarking');
    },
    after: function() {
        $('#searchFav .marking').removeClass('marking').addClass(searchFavMark.mark == null ? '' : 'mark');
        $('#searchFav .unmarking').removeClass('unmarking');
        if (searchFavMark.mark == null) { $('#searchFav .mark').removeClass('mark'); }
    }
});
function searchFavBlinker() {
    if (!(searchFavMark.fx.options.parent || '').length) {
        searchFavMark.fx.options.parent = $('#searchFav');
    }
    var searchFav = $('#searchFav li:visible a');
    var searchFavPos = -1;
    var searchFavInt = window.setInterval(function() {
        if (++searchFavPos >= searchFav.length) {
            searchFavMark(null, $('#searchFav .mark'));
            window.setTimeout(function() { searchFavBlinker(); }, 8000);
            window.clearInterval(searchFavInt);
            return;
        }
        searchFavMark(searchFav[searchFavPos], searchFav[searchFavPos-1]);
    }, 1500);
}

function horoscopeBlend(next, last) {
    horoscopeBlend.next = next;
    horoscopeBlend.last = (last || $(next).prev().get(0));
    horoscopeBlend.fx.run();
}

horoscopeBlend.fx = $.classyFX({
    selector: '.horoscope .moduleContent[step] .modulePart',
    steps: 5,
    ms: 90,
    before: function() {
        $(horoscopeBlend.next).addClass('activate');
        $(horoscopeBlend.last).removeClass('active').addClass('deactivate');
        $('.horoscope .active').removeClass('active');
    },
    after: function() {
        $('.horoscope .activate').removeClass('activate').addClass('active');
        $('.horoscope .deactivate').removeClass('deactivate');
    }
});
function horoscopeTicker() {
    var horoscope = $('.horoscope .modulePart');
    if (!horoscope.length) { return; }
    $('.horoscope .active:gt(0)').removeClass('active');
    var horoscopePos = horoscope.index($('.horoscope .active')[0]);
    var horoscopeLastPos = horoscopePos;
    var horoscopeInt = window.setInterval(function() {
        horoscopePos = (horoscopePos + 1) % horoscope.length;
        horoscopeBlend(horoscope[horoscopePos], horoscope[horoscopeLastPos]);
        horoscopeLastPos = horoscopePos;
    }, 5000);
}

function initLogins() {
    $('#loginbox .switchSSL a').click(switchSSL);
}

function checkMaxdomeLogin() {
    var el = $('#loginbox-maxdome form input.username, #formLoginLayer_maxdome input.username');
    if (el.val().toLowerCase().indexOf('@web.de') < 0) {
        el.val(el.val()+'@web.de');
    }
}

function fixIframe(els) {
    if (!$.ua.browser.firefox && !$.ua.browser.safari) { return; }
    $(els).each(function() {
        if (this.iframeIsFixed || this.iframeDontFix) { return; }
        this.src = this.src;
        this.iframeIsFixed = true;
    });
}

function initBuster() {
    if (!window.advPageBackground) { return; }
    $('#container').css(advPageBackground);
    arrangeBusterBgPos($('#container'));
    $(window).resize(function() { arrangeBusterBgPos($('#container')); });
}

function arrangeBusterBgPos(bgContainer) {
    if (!$('#buster').length || !window.advPageBackground) { return; }
    var bgPos = {
        x: $('#wrapper').outerWidth() + advPageBackground.backgroundXPosition,
        y: advPageBackground.backgroundSkyAttach ? (($('#advSpecialMain .sky').offset()||{top:0}).top-$('#wrapper').offset().top)+advPageBackground.backgroundYPosition : advPageBackground.backgroundYPosition
    }
    bgContainer.css('backgroundPosition', bgPos.x+'px '+bgPos.y+'px');
}

function adjustMegabuster() {
    $('#megabuster #advSpecialMain .topbanner').attr('id', 'megabusterTopbanner').insertBefore('#wrapper');
    advPageBackground.backgroundPosition =
        advPageBackground.backgroundXPosition + (typeof(advPageBackground.backgroundXPosition)==='number' ? 'px' : '')
      + ' '
      + advPageBackground.backgroundYPosition + (typeof(advPageBackground.backgroundYPosition)==='number' ? 'px' : '')
    $('#container').css(advPageBackground);
}

function initSitebar() {
    document.getElementById('wrapper').parentNode.insertBefore(document.getElementById('advSpecialMain'), document.getElementById('wrapper'));
    if (!window.advPageBackground) { return; }
    $(advPageBackground.backgroundSkyAttach ? '#advSpecialMain' : '#container').css(advPageBackground);
    arrangeBusterBgPos($(advPageBackground.backgroundSkyAttach ? '#advSpecialMain' : '#container'));
}

function directSearch(link) {
    if ($('#inpSearchText').hasClass('defaultValue')) { return true; }
    var search = $.url(link.href);
    $.extend(search.params, { su: $('#inpSearchText').val() });
    link.href = search.toString(false);
    return true;
}

function switchSSL(e) {
    e.preventDefault();
    var form = $(this).parents('.modulePart').find('form');
    var formurl = $.url(form.attr('action'));
    var SSL = (/Mit/.test($(this).text()));
    $(this).html(SSL ? 'Ohne SSL' : 'Mit SSL');
    this.href = SSL
              ? this.href.replace('/club', '/club_nossl').replace('/fm', '/fm_nossl')
              : this.href.replace('_nossl', '');
    formurl.protocol = (SSL ? 'https:' : 'http:');
    form.attr('action', formurl.toString());
    $('input[type=hidden]', form).each(function() {
        this.value = this.value.replace(/^https?:/, formurl.protocol);
    });
}

function createSlider(root, tab) {
    var root = $(root);
    var slider = new Slider(root);
    root.data('slider', slider);
    $(tab).click(slider.resetPosition.bind(slider))
}

function Slider(root) {
    this.root = root;
    this.list = $('ul', root);
    this.items = $('li', this.list);
    this.itemWidth = this.items.outerWidth();
    this.list.width(this.itemWidth*this.items.length);
    this.root.prepend('<span class="sliderBack disabled"></span><span class="sliderForw"></span>');
    this.sliding = false;
    this.slideBack = function() {
        if (this.sliding) { return; }
        var newPos = Math.min(0, parseInt(this.list.css('margin-left'))+this.itemWidth);
        this.sliding = true;
        this.list.animate({marginLeft: newPos}, 500, 'swing', function() { this.sliding=false; }.bind(this));
        this.back[newPos==0 ? 'addClass' : 'removeClass']('disabled');
        this.forw.removeClass('disabled');
    };
    this.slideForward = function() {
        if (this.sliding) { return; }
        var maxVal = this.list.parent().width()-this.itemWidth*this.items.length;
        var newPos = Math.max(parseInt(this.list.css('margin-left'))-this.itemWidth, maxVal);
        this.sliding = true;
        this.list.animate({marginLeft: newPos}, 500, 'swing', function() { this.sliding=false; }.bind(this));
        this.forw[newPos==maxVal ? 'addClass' : 'removeClass']('disabled');
        this.back.removeClass('disabled');
    };
    this.resetPosition = function() {
        if (this.rootSize == this.root.width()) { return; }
        this.rootSize = this.root.width();
        var parObj = this.list.parent();
        parObj.css('width', this.root.width()-this.back.outerWidth()-this.forw.outerWidth()-parObj.outerWidth()+parObj.width());
        this.list.css('margin-left', 0);
        this.back.addClass('disabled');
        this.forw.removeClass('disabled');
    };
    this.back = $('.sliderBack', root).click(this.slideBack.bind(this));
    this.forw = $('.sliderForw', root).click(this.slideForward.bind(this));
    this.resetPosition();
    $(window).resize(this.resetPosition.bind(this));
}

function createNavModule(title, link, id, className, redirect) {
    $('#navigation').append($('\
        <div class="module">\
            <div class="navigation">\
                <div class="moduleHeader">\
                    <h3>'+(link?'<a href="'+link+'"'+(redirect?' onclick="return go(this, \''+redirect+'\');"':'')+'><span>'+title+'</span></a>':'<span>'+title+'</span>')+'</h3>\
                </div>\
                <div class="moduleContent">\
                </div>\
            </div>\
        </div>\
    '));
}

function createNavSubModule(list) {
    var part = $('.modulePart:last ul', $('#navigation .module:last .moduleContent').append($('\
        <div class="modulePart"><ul></ul></div>\
    ')));
    part.addClass('part'+($('.modulePart', part.parent().parent()).length));
    for (var i=0; i<list.length; i++) {
        var item = list[i];
        part.append($('\
            <li'+(item[2]?' class="'+item[2]+'"':'')+'><a href="'+item[1]+'"'+(item[3]?' onclick="return go(this, \''+item[3]+'\');"':'')+'><span>'+item[0]+'</span></a></li>\
        '));
    }
}

function createNavSpecial(data) {
    var template = '<li style="background-image: url(${2});">'+
                        '<a target="_blank" rel="nofollow" href="${1}">'+
                            '<span>${0}</span>'+
                        '</a>'+
                    '</li>';
    if (!data || !data.length || !$.isArray(data)) { return false; }
    if ($('#navSpecial').empty().length == 0) {
        $('#navigation').append('<div id="navSpecial"></div>');
    }
    $('#navSpecial').append('<ul>'+$.map(data, function(item) {
        return template.replace(/\$\{(\d)\}/g, function(full, i) { return item[i|0]; });
    }).join('')+'</ul>');
}

function homepageSpeciallinks() {
    if (!($.ua.browser.msie >= 6)) { return; }
    $('#footerSpecialfuncs').append($('<ul></ul>'));
    $('#footerSpecialfuncs ul').append($(
        '<li><a href="javascript:document.body.style.behavior=\'url(#default#homepage)\'; document.body.setHomePage(\'http://web.de/?kid=A1000000\');"><span>WEB.DE als Startseite</span></a></li>'
    ));
    $('#footerSpecialfuncs ul li:first').addClass('first');
    $('#footerSpecialfuncs ul li:last' ).addClass('last');
}

var Region = new function() {
    this.callbacks = [];
    this.region = null;
    this.register = function(obj, method) {
        if (!method) {
            method = obj;
            obj = null;
        }
        if (this.region) { return this.call([obj, method]); }
        this.callbacks.push([obj, method]);
    }
    this.setRegion = function(region) {
        this.region = region;
        for (var i=0; i<this.callbacks.length; i++) {
            this.call(this.callbacks[i]);
        }
    }
    this.call = function(entry) {
        try {
            (entry[0] ? entry[1].bind(entry[0]) : entry[1])(this.region);
        } catch(e) {
        }
    }
}

var Weather = new function() {
    this.defaultId = 47;
    this.data      = null;
    this.shortCityLength = 12;
    this.titles    = [
        '',
        'sonnig',
        'heiter',
        'wolkig',
        'bedeckt',
        'stark bewölkt',
        'Regenschauer',
        'Regen',
        'Gewitter',
        'Schneeschauer',
        'Schneefall',
        'Schneeregen',
        'Nebel',
        'in Wolken',
        'Sprühregen'
    ];
    this.headerClasses = [
        '',
        'weathertype-sun',
        'weathertype-sun',
        'weathertype-clouds',
        'weathertype-clouds',
        'weathertype-manyclouds',
        'weathertype-rain',
        'weathertype-rain',
        'weathertype-rain',
        'weathertype-snow',
        'weathertype-snow',
        'weathertype-snow',
        'weathertype-fog',
        'weathertype-fog',
        'weathertype-rain'
    ];
    this.headerClassesComplete = this.headerClasses.join(' ')+' weathertype';
    this.init = function(targetRegion) {
        this.initialized = true;
        this.targetRegion = targetRegion;
        var parts = (''+targetRegion).split('-');
        this.country = parts[0];
        this.weatherId = parts[1] || this.defaultId;
        if (!this.data && window.weatherData) { this.data = window.weatherData; }
        this.initObjects();
    }
    this.initObjects = function() {
        if (this.weatherInitialized) { return; }
        var self = this;
        this.root = $('#weather');
        this.module = $('.module>div:first', this.root);
        this.currentItem = $('.module', this.root);
        this.currentCity = $('h3 a span', this.currentItem);
        this.currentTemp = $('.currentTemp .temp', this.currentItem);
        this.tomorrowTemp = $('.nextTemp .day2 .temp', this.root);
        this.dayAfterTemp = $('.nextTemp .day3 .temp', this.root);
        this.currentLinks = $('a', this.root);
        this.iconLink = $('.moduleHeader>a.more', this.root);
        this.picker = $('h3', this.root);
        this.currentPicked = $('#doesNotExist');
        this.currentListItem = $('#doesNotExist');
        this.headerRoot = $('#container');
        this.run();
        $(document).click(function() { self.closePicker(); });
    }
    this.setRegion = function(region) {
        this.init(region);
    }
    this.loaddisabledData = function() {
        var self = this;
        $.getScript(
            'http://web.de/jsonwetter.js',
            function() {
                self.loaddisabledCounter = 0;
                self.loaddisabledInt = window.setInterval(function() {
                    if (self.loaddisabledCounter++ > 5) {
                        window.clearInterval(self.loaddisabledInt);
                        return;
                    }
                    if (!window.weatherData) { return; }
                    self.data = window.weatherData;
                    self.run();
                    window.clearInterval(self.loaddisabledInt);
                }, 60);
            }
        );
    }
    this.run = function() {
        if (!this.data || !this.weatherId) { return; }
        var data = this.data[this.weatherId];
        if (!data) { return; }
        var self = this;
        this.module.each(function() {
            this.className = 'weather-' + data[1];
        });
        $('a.more', this.module).each(function() {
            this.title = self.titles[data[1]];
        });
        this.currentItem.attr('title', data[0]+': '+data[2]+' °C, '+this.titles[data[1]]);
        this.currentCity.html(this.normalizeCity(data[0]));
        this.currentTemp.html(data[2]+'<span class="deg">°</span>');
        this.tomorrowTemp.text(data[3]+'°');
        this.dayAfterTemp.text(data[4]+'°');
        this.currentLinks.attr('href', '//webde.wetternet.de/cgi-bin/webde/wetter_stadt.pl?ID='+this.weatherId);
        this.iconLink.attr('href', '//webde.wetternet.de/cgi-bin/webde/wetter_stadt_ist.pl?ID='+this.weatherId);
        if ($.ua.browser.msie!=7) { this.initWeather(); }
        this.currentPicked.html(this.normalizeCity(data[0]));
        if (this.headerRoot.hasClass('plain')) { return; }
        this.headerRoot.removeClass(this.headerClassesComplete).addClass(this.headerClasses[data[1]]);
        $(window).resize();
    }
    this.normalizeCity = function(city) {
        if (city.length > this.shortCityLength+2) {
            city = city.substring(0, this.shortCityLength)
                 + ((city.substring(this.shortCityLength, 1)==' ' || city.substring(this.shortCityLength, 1)=='-') ? city.substring(this.shortCityLength, 1) : '')
                 + '&hellip;';
        }
        return city;
    }
    this.initWeather = function() {
        if (this.weatherInitialized) { return; }
        var self = this;
        if (!this.data) { this.data = window.weatherData; }
        if (!this.data) { return; }
        if (!this.root) { this.initObjects(); }
        if (!this.root) { return window.setTimeout(function() { self.initWeather(); }, 50); }
        var pickerObj = $('\
            <div id="weatherPicker" title="'+($.ua.browser.msie?'':' ')+'">\
                <div class="selected"><span></span></div>\
                <div class="listContainer"><div class="selector"><ul></ul></div></div>\
            </div>\
        ');
        var listRoot = $('ul', pickerObj);
        $('.selected', pickerObj).click(function() { self.closePicker(); });
        $.each(this.data, function(id) {
            if (!this[0]) { return; }
            var item = $('<li><span>'+this[0]+'</span></li>').data('weatherid', id).appendTo(listRoot);
        });
        listRoot.click(function(e) {
            self.currentListItem.removeClass('current');
            self.currentListItem = $(e.target).closest('li');
            self.weatherId = self.currentListItem.addClass('current').data('weatherid');
            self.closePicker();
            self.run();
        });
        $('.moduleHeader', this.root).append(pickerObj);
        this.currentPicked = $('#weatherPicker .selected span', this.root).html(this.data[this.defaultId][0]);
        this.picker.addClass('hasList').click(function(e) { voidPicker(e); });
        this.currentCity.click(function(e) { e.preventDefault(); this.parentNode.blur(); });
        this.weatherInitialized = true;
    }
    voidPicker = function(e) {
        e.stopPropagation();
        if (this.picker.parent().hasClass('pickerOpen')) {
            return this.closePicker();
        }
        if (!this.currentListItem.length) {
            var self = this;
            self.currentListItem = $('#weatherPicker li').filter(function() { return $(this).data('weatherid')==self.weatherId; }).addClass('current');
        }
        this.picker.parent().addClass('pickerOpen');
    }
    this.closePicker = function() {
        this.picker.parent().removeClass('pickerOpen');
    }
    Region.register(this, this.setRegion);
};
function appendHashToLink(link, hash) {
    if (link.href.indexOf('#') >= 0) { return; }
    link.href += hash;
}

$(function() {
    $('#headerNav a'                    ).not('#headerNavDSL a, #headerNavFreeMail a, #headerNavShopping a, #headerNavFreePhone a').each(function() { appendHashToLink(this, '#.A1000105'); });
    $('#topnewsBoxTopic a'              ).each(function() { appendHashToLink(this, '#.A1000107'); });
    $('#channelnews .contentContainer a').each(function() { appendHashToLink(this, '#.A1000109'); });
    $('#sitebar .toparticles a'         ).each(function() { appendHashToLink(this, '#.A1000111'); });
    $('#sitebar .topvideos a'           ).each(function() { appendHashToLink(this, '#.A1000112'); });
    $('#sitebar .topslideshows a'       ).each(function() { appendHashToLink(this, '#.A1000113'); });
    $('#channelnews .tabsContainer li'  ).data('appendHash', '#.A1000109');
    $('#topnews .tabsContainer li:first').data('appendHash', '#.A1000107');
});
function tifCount() {
    Region.register(tifCount.run);
}

tifCount.run = function(region) {
    var cc = region.split('-')[0];
    NSfTIF.tifInit({
        pageidentifier: 'homepage',
        cc:             cc,
        region:         'de'
    });
}

var Econda = new function() {
    this.run = function() {
        if (parent!==self) { return; }
        window.emosPageId = 'webde_hp_'
                          + (parent.$('#buster').length
                            ? (parent.$('#advSpecialMain .advSitebar').length ? 'sb' : 'b')
                            : (parent.$('#megabuster').length ? 'mb' : 's')
                          );
        window.emosGlobalProperties = {countryid: 'de'};
        window.emosSamplingRate = 300;
        $.getScript('/\/js.ui-portal.de/c/econda/emos2.js');
    }
}

AdvConfig = new function() {
    this.adServer = '/\/adclient.uimserv.net/js.ng/';
    this.adProxy  = '/\/creativeproxy.uimserv.net/';
    this.positions = {};
    this.cc = '';
    this.win = window;
    this.init = function(site, section, category, region, params) {
        this.site = site;
        this.section = section;
        this.category = category;
        this.region = region ? region.split('-')[0] : '';
        this.tileid = (parent.AdvConfig && parent.AdvConfig.tileid) ? parent.AdvConfig.tileid : (''+Math.random()+(''+Math.random()).substr(2)).substr(2, 30);
        this.params = params ? params : {};
        this.params['viewwidth'] = 0;
        this.params['viewheight'] = 0;
    }
    this.setRegion = function(cc) {
        this.cc = (''+cc).split('-')[0];
    }
    this.outputPos = function(pos, owner, special, specialtype, sizes, styles, params) {
        this.addPosition(pos, owner, special, specialtype, sizes, styles, params);
        this.output(pos);
    }
    this.addPosition = function(pos, owner, special, specialtype, sizes, styles, params) {
        this.positions[pos] = { 'tagID':'site/'+pos+'/', 'owner':owner, 'special': special, 'specialtype': specialtype, 'sizes': sizes, 'params.styles': styles, 'params': (params || {}) };
    }
    this.options = function(pos) {
        if ($('#advSpecialMain .advSitebar').length) { this.params['sitebar'] = 'true'; }
        var result = '';
        var params = $.extend({}, this.params || {});
        var position = this.positions[pos];
        if (pos != '_') {
            $.extend(params, position.params, { tagID: position.tagID, owner: position.owner, special: position.special, specialtype: position.specialtype, adsize: position.sizes, 'params.styles': position['params.styles'] });
        }
        var self = this;
        $.each(params, function(key, val) {
            $.each($.makeArray(val), function() {
                if (key == 'special') { return; }
                result += '&' + key + '=' + self.escapeValue(this);
            });
        });
        return 'special='+(params['special'] instanceof Array ? $.each(params['special'], function() { return self.escapeValue(this) }).join('&special=') : this.escapeValue(params['special']))
             + '&site='+this.escapeValue(this.site)
             + '&section='+this.escapeValue(this.section)
             + '&category='+this.escapeValue(this.category)
             + '&region='+this.escapeValue(this.region)
             + '&cc='+this.escapeValue(this.cc)
             + result
             + '&tile='+this.tileid
             + '&transactionID='+this.tileid;
    }
    this.drop = function(pos, cond) {
        if (cond) { return; }
        try { delete this.positions[pos] } catch(e) { this.positions[pos] = false; }
    }
    this.mi = function(arr, val) {
        var r = arr.length;
        while (arr[--r] > val) { }
        return r;
    }
    this.output = function(pos, options) {
        if (!this.positions[pos]) { return false; }
        var advURL = this.adServer + this.options(pos);
        if (!options || !options.async) {
            void('<!--[if !IE]> ' + advURL + ' <![endif]-->');
            void('<script type="text/javascript" src="' + advURL + '"><\/script>');
        } else {
            var advFrame = $('<iframe style="display: none;"></iframe>');
            $('body').append(advFrame);
            var advWin = (advFrame.attr('contentWindow') || advFrame.attr('contentDocument') || advFrame.attr('window'));
            var advDom = advWin.document;
            void('<!DOCTYPE><html><head><title>AdvFrame</title></head><body><script type="text/javascript" src="'+advURL+'"></script></body></html>');
            var advObj = { c: 0, l: -1, frame: advFrame, win: advWin, dom: advDom,
                async: $(options.async), timeout: ((options.timeout || 3)*5),
                vars: options.vars, after: options.after };
            advObj.interval = window.setInterval(function(advObj) { return function() {
                if (advObj.c++ > advObj.timeout) { window.clearInterval(advObj.interval); return; }
                var advNodes = $(advObj.dom.body.childNodes).not('script');
                if (advNodes.length == 0 && advNodes.length != advObj.l) { advObj.l = advNodes.length; return; }
                $('script', advObj.dom).remove();
                if (advObj.dom.close) { advObj.dom.close(); }
                $.each((advObj.vars || []), function(_, v) { if (advObj.win[v]) { window[v] = advObj.win[v]; } });
                try { advNodes.each(function() { advObj.async.append((this.outerHTML ? this.outerHTML : this)); }); }
                catch(e) { advObj.async.append(advObj.dom.body.innerHTML); }
                $('img', advObj.async).each(function() { this.src = this.src; });
                advObj.frame.remove();
                if ($.isFunction(advObj.after)) { advObj.after(); }
                window.clearInterval(advObj.interval);
                return;
            }}(advObj), 200);
        }
        return advURL;
    }
    this.outputProxy = function(service, params) {
        var result = '';
        var advURL = this.adProxy
                   + '?LogoutAdProxy.service=' + this.escapeValue(service)
                   + '&site='+this.escapeValue(this.site)
                   + '&section='+this.escapeValue(this.section)
                   + '&category='+this.escapeValue(this.category)
                   + '&region='+this.escapeValue(this.region)
                   + (params ? (params.substr(0, 1)=='&' ? params : '&'+params) : '')
                   + result
                   + '&tile='+this.tileid
                   + '&transactionID='+this.tileid;
        this.win.void('<!--[if !IE]> ' + advURL + ' <![endif]-->');
        this.win.void('<script type="text/javascript" src="' + advURL + '"><\/script>');
    }
    this.escapeValue = function(val) {
        return encodeURIComponent(val).replace(/%2F/gi, '/');
    }
    this.positions['_'] = {};
    this.advSpecialPart = 0;
    this.outputAdvPart = function() {
        void('<div class="modulePart part'+(++this.advSpecialPart)+' '+arguments[0]+'">');
        FlashHelp.createFlash.apply(FlashHelp, $.makeArray(arguments).slice(1, arguments.length));
        void('</div>');
    }
    this.initPushDown = function($) { return function(pushdown) {
        if (!pushdown || $('#buster, #megabuster, #pushdown').length) { return; }
        window.advNoTopper = '0';
        $.elementReady('#iframeUim', function() {
            ($('#iframeUim')[0].contentWindow || $('#iframeUim')[0]).advNoTopper = '0';
        });
        var container = $('<div id="pushdown" style="width: '+Math.max((pushdown.width || 0), $('#wrapper, #header').width())+'px; height: '+(pushdown.startHeight || 0)+'px; margin: 10px 0; text-align: center; position: relative;"></div>');
        parent.FlashHelp.setContainerHeight = FlashHelp.setContainerHeight = function(h) {
            var h=parseInt(h, 10);
            if (h>=0 && h<=300) { container.height(h); }
            if (document.all && !window.XMLHttpRequest) {
                $('#pushdown').css('zoom', '1'); $('#pushdown').css('zoom', '');
            }
        }
        parent.FlashHelp.closePushDown = FlashHelp.closePushDown = function() { container.remove(); }
        if ((FlashDetection.version||-1) < (pushdown.version||0)) {
            container.html(pushdown.fallback.replace(/$\{([^}]+)\}/g, function(_, k) { return pushdown[k] || ''; }));
        } else {
            var flash = new ObjectElement('application/x-shockwave-flash', pushdown.flashURL.replace(/$\{([^}]+)\}/g, function(_, k) { return pushdown[k] || ''; }), pushdown.width, '100%');
            flash.addParam('movie', pushdown.flashURL.replace(/$\{([^}]+)\}/g, function(_, k) { return pushdown[k] || ''; }));
            for (var k in pushdown.flashParams) {
                if (!pushdown.flashParams.hasOwnProperty(k)) { continue; }
                flash.addParam(k, pushdown.flashParams[k].replace(/$\{([^}]+)\}/g, function(_, k) { return pushdown[k] || ''; }));
                flash.addEmbedParam(k, pushdown.flashParams[k].replace(/$\{([^}]+)\}/g, function(_, k) { return pushdown[k] || ''; }));
            }
            container.html(flash.getNodeAsString());
        }
        $('#container').prepend(container);
        if (pushdown.statistikPixel) { (new Image()).src=pushdown.statistikPixel; }
    }}(parent.jQuery);
    this.initBeileger = function($) { return function(beileger) {
        if (!beileger || $('#buster, #megabuster').length) { return; }
        if ($.isArray(beileger.fallback)) {
            var fallbackContent = '', fallback = '<div class="advModuleNav" style="background:'+beileger.background+'"><ul><li class="back inactive"><a href="#zur\xCFck" onclick="return false;">Zur&uuml;ck</a><\/li>';
            for (var i=0; i < beileger.fallback.length; i++) {
                fallback += '<li'+(i===0?' class="active"':'')+'><a href="#'+(i+1)+'" onclick="return false;">'+(i+1)+'</a><\/li>';
                fallbackContent += '<div class="modulePart part'+(i+1)+(i===0?' active':'')+'"><a href="'+beileger.clickUrl+'"><img src="'+beileger.fallback[i]+'" alt=""\/><\/a><\/div>';
            }
            beileger.fallback = fallback + '<li class="forward"><a href="#weiter" onclick="return false;">Weiter</a><\/li><\/ul><\/div>'+fallbackContent;
        } else {
            beileger.fallback = '<a href="'+beileger.clickUrl+'" target="_blank"><img src="'+beileger.fallback+'" alt=""\/><\/a>';
        }
        if (beileger.flash && beileger.flash.url) {
            beileger.flash = $.extend({ quality: 'high', wmode: 'window', width: 620, height: 700 }, beileger.flash);
            if ((beileger.flash.version||6) > (FlashDetection.version||0)) { beileger.flash = false; }
            else {
                var flash='<objectdisabled type="application/x-shockwave-flash" data="'+beileger.flash.url+'?clicktag='+escape(beileger.clickUrl)+'" width="'+beileger.flash.width+'" height="'+beileger.flash.height+'"'+(beileger.flash.style?' style="'+beileger.flash.style+'"':'')+'><param name="movie" value="'+beileger.flash.url+'?clicktag='+escape(beileger.clickUrl)+'"/>';
                for (var k in beileger.flash) {
                    if (!beileger.flash.hasOwnProperty(k)) { continue; }
                    if (/(url|version|width|height|style)/.test(k)) { continue; }
                    flash += '<param name="'+k+'" value="'+beileger.flash[k]+'"/>';
                }
                flash += '</object>';
                beileger.flash = flash;
            }
        }
        $('#topnews ol .last').removeClass('last');
        beileger.tab=$('<li id="topnewsNavBeileger" class="last" style="background-color:'+beileger.background+';"><span style="background-color:'+beileger.background+'"><a href="#mehr..."><img src="'+beileger.logo+'" alt=""/></a></span></li>').appendTo('#topnews .tabs');
        beileger.teaser=$('<div class="teaserContainer"><div class="teaser"><img src="'+beileger.teaserimg+'" alt=""/></div></div>').insertBefore('#topnews .contentContainer').click(function() { beileger.tab.find('a').click(); });
        beileger.tab.find('a').click(function(e) {
            e.preventDefault();
            var tab = $(this).parents('li');
            tab.siblings().add(beileger.content.siblings()).removeClass('active');
            tab.add(tab.data('box')).addClass('active');
            $(this).blur();
        });
        beileger.content=$('<li id="topnewsBoxBeileger" class="boxContent last"><div class="boxContentModule advBeileger"><div class="boxContentModuleContent"><div class="advModuleBeileger">'+(beileger.flash || beileger.fallback)+'</div></div></div></li>').appendTo('#topnews .boxes');
        beileger.tab.data('box', beileger.content);
        beileger.nav = beileger.content.find('.advModuleNav li');
        beileger.currentPos = 1;
        function showTeaser(e) {
            beileger.showTeaser=true;
            if (!beileger.showContent) {
                beileger.teaser.show();
                beileger.tab.addClass('teaseractive');
            }
            if (beileger.hover) {
                (new Image()).src = beileger.hover+'&ts='+(new Date()*1);
                delete beileger.hover;
            }
            return false;
        }
        function hideTeaser(e) {
            beileger.showTeaser=false;
            window.setTimeout(function() {
                if (!beileger.showTeaser) {
                    beileger.teaser.hide();
                    beileger.tab.removeClass('teaseractive');
                }
            } , 90);
            return false;
        }
        function showContent(e) {
            if (beileger.flash && $('#allContents void').length) { $('#allContentsList .close span').click(); }
            beileger.showContent=true;
            beileger.showTeaser=false;
            beileger.teaser.hide();
            beileger.content.show();
            beileger.content.parents('.module').css($.ua.browser.msie===6?'overflow-y':'overflow', 'visible');
            if (void) {
                (new Image()).src = void+'&ts='+(new Date()*1);
                delete void;
            }
            return false;
        }
        hideContent = function (beileger) { return function(e) {
            beileger.showContent=false;
            beileger.content.hide();
            beileger.content.parents('.module').css($.ua.browser.msie===6?'overflow-y':'overflow', 'hidden');
            return false;
        }}(beileger);
        navSelect = function(beileger) { return function(e) {
            var item = $(this);
            if (item.hasClass('inactive')) { return; }
            if (isNaN(item.text())) {
                if (item.hasClass('back')) { beileger.currentPos--; } else { beileger.currentPos++; }
            } else { beileger.currentPos = item.text()*1; }
            beileger.currentPos = (beileger.currentPos < 1 ? 1 : beileger.currentPos);
            beileger.currentPos = (beileger.currentPos >= beileger.nav.length-2 ? beileger.nav.length-2 : beileger.currentPos);
            beileger.nav.eq(0)[beileger.currentPos === 1 ? 'addClass' : 'removeClass']('inactive');
            beileger.nav.eq(beileger.nav.length-1)[beileger.currentPos >= beileger.nav.length-2 ? 'addClass' : 'removeClass']('inactive');
            beileger.nav.removeClass('active').eq(beileger.currentPos).addClass('active');
            beileger.content.find('.modulePart').removeClass('active').eq(beileger.currentPos-1).addClass('active').focus();
        }}(beileger);
        beileger.tab.mouseenter(showTeaser).mouseleave(hideTeaser);
        beileger.teaser.hover(function(){ beileger.showTeaser = true; }, hideTeaser);
        beileger.nav.click(navSelect);
        if ($.ua.browser.msie <= 6) {
            $('<style type="text/css" id="ie6beilegerfix">#content #topnews #topnewsNavBeileger.active { margin-top: 4px; margin-bottom: -6px; background-position: 0 -180px; height: 30px; } #content #topnews #topnewsNavBeileger.active span { background-position: 100% -180px; height: 24px; } #content #topnews #topnewsNavBeileger.active a { height: auto; }</style>').appendTo('head');
        }
    }}(parent.jQuery);
    this.initPushDown = function($) { return function(pushdown) {
        if (!pushdown || $('#buster, #megabuster, #pushdown').length) { return; }
        window.advNoTopper = '0';
        $.elementReady('#iframeUim', function() {
            ($('#iframeUim')[0].contentWindow || $('#iframeUim')[0]).advNoTopper = '0';
        });
        var container = $('<div id="pushdown" style="width: '+Math.max((pushdown.width || 0), $('#wrapper, #header').width())+'px; height: '+(pushdown.startHeight || 0)+'px; padding: 10px 0; text-align: center; position: relative;"></div>');
        parent.FlashHelp.setContainerHeight = FlashHelp.setContainerHeight = function(h) {
            container.lastheight = h;
            if (container[0].stopped) { return; }
            var h=parseInt(h, 10);
            if (h>=0 && h<=300) { container.height(h); }
            if (document.all && !window.XMLHttpRequest) {
                $('#pushdown').css('zoom', '1'); $('#pushdown').css('zoom', '');
            }
        }
        window.onscroll = function(o, container) { return function() {
            if (o) { o(); }
            var movie = container.getElementsByTagName('object')[0];
            if (!movie) { return; }
            var vpos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            var vheight = container.offsetHeight;
            if (vpos > vheight && !container.stopped) {
                container.stopped = true;
                movie.StopPlay();
            } else if (vpos <= vheight && container.stopped) {
                container.stopped = false;
                $(container).height(document.all && !window.opera ? container.lastheight : 90);
                movie.Play();
            }
        }}(window.onscroll, container[0]);
        window.onresize = function(o, container) { return function() {
            if (o) { o(); }
            container.width($('#wrapper').width());
        }}(window.onresize, container);
        parent.FlashHelp.closePushDown = FlashHelp.closePushDown = function() { container.remove(); }
        if ((FlashDetection.version||-1) < (pushdown.version||0)) {
            container.html(pushdown.fallback.replace(/$\{([^}]+)\}/g, function(_, k) { return pushdown[k] || ''; }));
        } else {
            var flash = new ObjectElement('application/x-shockwave-flash', pushdown.flashURL.replace(/$\{([^}]+)\}/g, function(_, k) { return pushdown[k] || ''; }), pushdown.width, '100%', 'pushdownswf');
            flash.addParam('movie', pushdown.flashURL.replace(/$\{([^}]+)\}/g, function(_, k) { return pushdown[k] || ''; }));
            for (var k in pushdown.flashParams) {
                if (!pushdown.flashParams.hasOwnProperty(k)) { continue; }
                flash.addParam(k, pushdown.flashParams[k].replace(/$\{([^}]+)\}/g, function(_, k) { return pushdown[k] || ''; }));
                flash.addEmbedParam(k, pushdown.flashParams[k].replace(/$\{([^}]+)\}/g, function(_, k) { return pushdown[k] || ''; }));
            }
            container.html(flash.getNodeAsString());
        }
        $('#container').prepend(container);
        if (pushdown.statistikPixel) { (new Image()).src=pushdown.statistikPixel; }
    }}(parent.jQuery);
    this.initInterception = function($){ return function(data) {
        if (!data || (FlashDetection.version || 0) < (data.version || 0)) { return; }
        function setInterception() {
            $('a:not(.tabs a)').filter(function() { return !$(this).data('intercepted') && /((magazine|erotik)\.web\.de\/de\/themen\/|web\.de\/magazine\/)(sport|unterhaltung|reise|lifestyle|erotik|digitale\-welt|auto)/.test(this.href || ''); }).bind('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $.track.ev.click(e);
                var link = this.href || e.target.href || $(e.target).closest('a').attr('href');
                window.setTimeout(function(){
                    location.href = data.interceptionUrl+'?'+$.param({go:link, adid:data.AdID, targetid:data.TargetID, flightid: data.FlightID, movie: data.movieUrl, bgimg: data.bgimgUrl});
                }, 60);
                return false;
            }).data('intercepted', true);
        }
        setInterception();
        $(document).ajaxComplete(setInterception);
    }}(parent.jQuery);
}

var Topper = new function() {
    this.timeout = 500;
    this.versions = {
        'ie': {
            'text1': 'Ihr Browser ist nicht aktuell. ',
            'text2': 'Verwenden Sie zu Ihrer Sicherheit immer die aktuellsten Internet-Browser - ',
            'text3': 'Jetzt kostenlos downloaddisableden!',
            'seoUrl': '//produkte.web.de/browser/',
            'redirectUrl': 'http://produkte.web.de/browser/?mc=hp@home@topper@IE_direkt.produkte@browser',
            'popupUrl': 'http://produkte.web.de/browser/?mc=hp@home@topper@IE_hint.produkte@browser'
        },
        'ie9': {
            'text1': 'Ihr Browser ist nicht aktuell. ',
            'text2': 'Verwenden Sie zu Ihrer Sicherheit immer die aktuellsten Internet-Browser - ',
            'text3': 'Jetzt kostenlos downloaddisableden!',
            'seoUrl': '//produkte.web.de/browser/',
            'redirectUrl': 'http://produkte.web.de/browser/ie9?mc=hp@home@topper@IE9_direkt.gmx_produkte@browser',
            'popupUrl': 'http://produkte.web.de/browser/ie9?mc=hp@home@topper@IE9_hint.gmx_produkte@browser'
        }
    };
    this.choice = function() {
        return (/^win/.test($.ua.os.name || '') ?
			($.ua.browser.msie < 9 && ($.ua.os.version == 'vista' || $.ua.os.version == '7') ? 'ie9' :
			($.ua.browser.msie < 8 ? 'ie' :
			(($.ua.browser.opera < 10 ||
				$.ua.browser.safari < 5 ||
				$.ua.browser.firefox < 3.6) ? 'ie' :
			false))) : false);
    };
    this.content = ('<div class="topper-content">'+
        '    <div class="message">'+
        '        <p id="topper-close">' +
        '            <a href="${seoUrl}" onclick="if (this.retain) { return false; }; return go(this, \'${redirectUrl}\');">'+
        '                ${text1}<strong>${text2}<span>${text3}</span></strong>'+
        '               <span id="topperButtons">'+
        '                   <span id="topperClose" title="Benachrichtigung schlie&szlig;en" onclick="this.parentNode.parentNode.retain = true;"></span>'+
        '                   <span id="topperLater" title="Benachrichtigung schlie&szlig;en - Browser-Informationen im Hintergrund &ouml;ffnen" onclick="this.parentNode.parentNode.retain = true; var infowin = void(\'${popupUrl}\',\'info\',\'width='+$(window).width()+',height='+$(window).height()+',dependent=no,location=yes,menubar=yes,resizable=yes,scrollbars=yes,status=yes,toolbar=yes\'); infowin.blur(); window.focus();"></span>'+
        '               </span>'+
        '            </a>'+
        '        </p>'+
        '    </div>'+
        '</div>');
    this.init = function() {
        if (window.advNoTopper || $('#topper').length) { return; }
        if ($('body.hasSitebar').length) { return; }
        var choice = this.choice();
        if (!choice || !this.versions[choice]) { return; }
        var data = this.versions[choice];
        $('body').prepend('<div id="topper">'+this.content.replace(/\$\{([^\}]+)\}/g, function(f,x) { return data[x]; })+'</div>');
        this.topper = $('#topper').find('#topper-close').click(function() { Topper.hide(); });
        this.show();
        if (!$.cookie.get('ns_sample')) {
            $.cookie.set('ns_sample', (Math.random()*100|0), '2y', '/', '.'+$.url.hostname);
        }
        if (/5\d/.test($.cookie.get('ns_sample', ''))) {
            (new Image()).src = ('//wa.ui-portal.de/webde/webde-s/s?produkte.browserdownloaddisabled.event.showtopper&ns__t='+(new Date()*1)+'&ns_type=hidden&b_version='+choice+'&hp_country='+((window.cc||{defaults:{}}).defaults['hp_country'] || ''));
        }
    };
    this.fx = $.classyFX({
        selector: '#topper[step] .topper-show, #topper[-step] .topper-hide',
        steps: 3, ms: 45
    });
    this.show = function() {
        $('.topper-content').removeClass('topper-hide').addClass('topper-show');
        this.fx.options.after = function() {
            $('.topper-content').removeClass('topper-show').addClass('topper-hide');
        }
        this.fx.options.parent = $('#topper');
        this.fx.run();
    };
    this.hide = function() {
        this.fx.options.after = function() {
            $('#topper > div').css({'overflow': 'hidden', 'height': '0px'});
            window.setTimeout(function() { $('#topper').remove(); }, 15);
        }
        this.fx.run();
    };
}

var FlashHelp = new function() {
    this.iframeOverFlash = function() {
        return $.ua.browser.firefox;
    }
    this.transparentIsBlocking = function() {
        return !$.ua.browser.msie;
    }
    this.flashShows = function() {
        if ($('#advBusterLayer').length) {
            $('#advSpecialMain .rectangle').css({overflow:'visible'});
        } else {
            $('#advSpecialMain .rectangle').css({'width':802, 'height':1000});
        }
        this._flashShows();
    }
    this._flashShows = function() { }
    this.flashHides = function() {
        $('#advSpecialMain .rectangle').css({'width':'', 'height':''});
        $('#advBusterLayer').hide();
        this._flashHides();
    }
    this._flashHides = function() { }
    this._getValue = function(list, name, fallback) {
        for (var i=0; i<list.length; i++) {
            if (list[i][name]!==undefined) { return list[i][name]; }
        }
        return fallback;
    }
    this._getUrl = function(baseUrl, list) {
        var self = this;
        return baseUrl.replace(/\{(clickUrl.*?)\}/g, function(all, item) { return escape(self._getValue(list, item)); });
    }
    this.createFlash = function() {
        var list = $.makeArray(arguments);
        list.push({allowScriptAccess:'always'});
        var clickUrl  = this._getValue(list, 'clickUrl');
        var width     = this._getValue(list, 'width');
        var height    = this._getValue(list, 'height');
        var offset    = {x:this._getValue(list, 'offsetX', 0), y:this._getValue(list, 'offsetY',   0)};
        var extendRgt = this._getValue(list, 'extendRight', 0);
        var target    = this._getValue(list, 'target', '_blank');
        var iframeUrl = this._getValue(list, 'iframeUrl');
        if (iframeUrl) {
            void('<iframe src="'+this._getUrl(iframeUrl, list)+'" width="'+width+'" height="'+height+'" border="0" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"><\/iframe>');
            $('iframe:last')[0].iframeDontFix = true;
            return;
        }
        if (extendRgt) {
            offset.x += extendRgt;
            width    += extendRgt;
            $('#advSpecialMain .rectangle').css({overflow: 'visible'});
        }
        var minFlash  = this._getValue(list, 'minFlashVersion');
        var flashUrl  = this._getValue(list, 'flash');
        if (flashUrl && minFlash && FlashDetection.version >= minFlash) {
            var flashId = this._getValue(list, 'flashId');
            var flash   = new FlashObjectElement(this._getUrl(flashUrl, list), width, height, flashId);
            var params  = ['wmode', 'allowScriptAccess', 'allowFullScreen', 'quality', 'flashVars', 'base', 'swLiveConnect', 'play', 'loop', 'menu', 'scale', 'salign', 'bgcolor'];
            for (var i=0; i<params.length; i++) {
                var value = this._getValue(list, params[i]);
                if (value!==undefined) { flash.addParam(params[i], value); }
            }
            if (offset.x || offset.y) {
                if (offset.y < -5) { offset.y = -5; }
                flash.addStyle('margin-right', (-offset.x)+'px');
                flash.addStyle('margin-top', offset.y+'px');
            }
            flash.render();
        } else {
            var fallback = this._getValue(list, 'fallback');
            var alt      = this._getValue(list, 'alt', '');
            if (fallback) {
                void('<a href="'+clickUrl+'" target="'+target+'"><img src="'+fallback+'" alt="'+alt+'" width="'+width+'" height="'+height+'"/></a>');
            }
        }
    }
}

function runAdproxyCollector(win) {
    $('.module-collected', win.document).each(function() {
        var id = this.className.replace('module-collected ', '');
        $('script', this).remove();
        if ($.ua.browser.msie <= 6) {
            $('ad', this).css('display', 'block');
        }
        win.adproxyReplacer($(this).html(), id);
        $(this).removeClass('module-collected');
    });
}

function adproxyReplacer(content, targetId) {
    var target = parent.$('#'+targetId);
    if (!target.length) {
        return parent.$.elementReady(targetId, function() { adproxyReplacer(content, targetId); });
    }
    target.replaceWith(content);
}

popit_checkUrl = function(url) {
    if (url == null) { return true; }
    var isFreeMailer = function() {
        return popit.getNgCount('frm') && !popit.getNgCount('clbmem');
    }
    var usesTabbedBrowsing = function() {
        return popit.getNgCount('tabber');
    }
    if (usesTabbedBrowsing()) { return false; }
    if (url.path=='/club/' || url.path=='/club_nossl/') { return false; }
    if (['games.web.de', 'handyshop.web.de', 'kino.web.de', 'kleinanzeigen.web.de', 'magazine.web.de', 'musik.web.de', 'r.web.de', 'route.web.de', 'tv.web.de', 'web.de', 'wetter.web.de', 'www.web.de'].hasValue(url.host)) { return true; }
    if (url.host == 'login.web.de') { return isFreeMailer(); }
    return false;
}

AdvConfig.init('webde', 'webde/homepage/start/', 'homepage', 'de', {pageview:'homepage'});
$.track=function(e){
    if (e && e.type && $.track.urls[e.type]) {
        var i=0, url, x, opts;
        while (opts = $.track.urls[e.type][i++]) {
            url = opts.url.replace(/([^&?=]+=|)\$\{([^}]+)\}/g, function(_, k, v) {
                x = typeof $.track.par[v] === 'function' ? $.track.par[v](e) : $.track.par[v];
                return x ? (k+escape(x)) : '';
            }).replace(/([?&])&+/g, "$1");
            var ndata = $(e.target).attr(opts.data||'data-wainfo') ||
                $(e.target).parents('a').attr(opts.data||'data-wainfo') || '';
            url = url + (ndata ? (/\?/.test(url)?'&':'?')+ndata : '');
            if (typeof opts.filter === 'function') { url=opts.filter(url); }
            if (!url) { continue; }
            (x=new Image(1,1)).src=url;
            x.onloaddisabled=function() { return; }
        }
    }
}

$.track.ts1=new Date()*1;
$.track.movetimeout=5000;
$.track.textlength=30;
$.track.par={
    'type': function(e) { return e.type; },
    'url': function() { return location.href; },
    'title': function() { return document.title; },
    'referrer': function() { return document.referrer; },
    'charset': function() { return document.characterSet || document.defaultCharset; },
    'duration': function(e) { return (new Date()*1-$.track.ts1); },
    'screen': function() { return (screen.width||0)+'x'+(screen.height||0); },
    'window': function() { return ($(window).width()||'?')+'x'+($(window).height()||'?'); },
    'client': function() { return ($.ua.browser.name+'-'+$.ua.browser.versionDetail.join('.')); },
    'os': function() { return ($.ua.os.name+'-'+$.ua.os.version); },
    'flash': function() { return (FlashDetection||{}).version||'?'; },
    'ts': function(e) { return (new Date()*1); },
    'element': function(e) { var T=e.target; return (T.nodeName||'?')+(T.id?'#'+T.id:T.className?T.className.replace(/(^|\s+)/g,'.'):''); },
    'pos': function(e) {
        if (e.pageX) { return e.pageX+'x'+e.pageY; }
        else { var p=$(e.target).offset(); return p.left+'x'+p.top; } },
    'link': function (e) { return e.target.href||$(e.target).parents('a').attr('href')||''; },
    'action': function (e) { var T=e.target; if (T.form && (/(submit|image)/i.test(T.type)||/button/i.test(T.nodeName))) { return T.form.action; } },
    'text': function (e) { var T=e.target, text=''; while (T && T !== document.body && (text=(T.innerHTML||'').replace(/\s+/g,' ').replace(/<.*?>/g,'').replace(/(^\s*|\s*$)/g, '')).length < 5) { T=T.parentNode; }; return text.substr(0, $.track.textlength); }
};
$.track.ev={
    'init': $.track, 'ready': $.track, 'loaddisabled': $.track, 'unloaddisabled': $.track, 'scroll': $.track, 'resize': $.track,
    'click': function(e) {
        var E={}, k, T=e.target;
        for (k in e) { E[k]=e[k]; };
        E.type = ((isNaN(e.which) || e.which*1 <= 2) &&
            (!/^#/.test(T.href || $(T).parents('a').attr('href') || '#') ||
            (T.form||{}).action && /(image|submit)/i.test(T.type))) ? 'clickout' : 'clickin';
        $.track(e);
        $.track(E);
    },
    'mousemove': function(e) { if ($.track.mmt) { var E={}, k; for (k in e) { E[k]=e[k]; }; window.clearTimeout($.track.mmt); }; $.track.mmt=window.setTimeout(function() { $.track(E); }, $.track.movetimeout); }
};
$.track.ev.clickout = $.track.ev.clickin = function(){return;};
$.track.urls={};
if ($.ua.browser.msie) {
    $(document).keydown(function(e) {
        var T=e.target;
        if (T.form && !/textarea/i.test(T.nodeName) && e.which === 13) {
            var E={}, k;
            for (k in e) { E[k]=e[k]; };
            E.target=$(':button', e.target.form)[0] || e.target;
            E.type='clickout';
            $.track(E);
        }
    });
}

$.track.slice=function(slice) {
    var chance=(slice.chance||100), s=0, cookie=slice.cookie;
    if (cookie && ($.isFunction(chance) || chance<100)) {
        s=parseFloat($.cookie.get(cookie.name))||(Math.random()*100);
        if ($.isFunction(slice.filter)) { s=slice.filter(s); }
        $.cookie.set(cookie.name, s, cookie.expires, cookie.path, cookie.domain, cookie.secure);
    } else { slice=0; }
    return $.isFunction(chance) ? chance(s) : (s < chance);
};
$.track.init=function(options){
    $.track.options = options;
    $.track.options.events = {};
    $.each(options, function(url, data) {
        if (/^(https?:|)\/\//.test(url) && $.track.slice(data.slice || {})) {
            $.each($.track.ev, function(n, c) {
                if (data[n] || (document.all && !window.opera && n==='keydown' && data['click'])) {
                    var evname = n.replace(/click(out|in)/, 'click'), p = [];
                    if (!$.track.options.events[evname]) {
                        $(/(loaddisabled|scroll|resize)/.test(n) ? window : document).bind(evname, $.track.ev[evname]);
                    }
                    $.track.options.events[evname] = true;
                    if (!$.track.urls[n]) { $.track.urls[n] = []; }
                    $.each(data[n], function(k, v) { p.push(v+'=${'+k+'}'); });
                    $.track.urls[n].push({
                        url: (url + p.join('&')),
                        filter: data.filter,
                        data: data.data
                    });
                }
            });
            if (data.init) { $.track({type: 'init', target: document, timeStamp: new Date()*1, data: data}); };
        }
    });
};
$.track.par.ctype = function(e) {
    return (!!e.target.form && 'form' || /img/i.test(e.target.nodeName) && 'pic' || 'text');
};
$.track.par.searchterm = function(e) {
    var su;
    if (e.target.form && (su=$('[name=su]', e.target.form)).length) {
        return su.val() || 'undef';
    }
};
$.track.par.linkend = function(e) { return /(.{1,20})$/.test($.track.par.link(e) || '') && RegExp.$1 || ''; };
$.track.par.hpcontent = function(e) {
    var T=$(e.target);
    if (T.parents('div').filter(function() { return $(this).is('[adid] + div'); }).length) { return 2; }
    if (T.parents('#topnewsNavBeileger, #topnewsBoxBeileger').length) { return 2; }
    if (T.parents('#topnews #channelnews, .topitems, .topgallery').length) { return 1; }
    return '0';
};
$.track.par.cla = function(e) {
    var T=e.target;
    while ((T=T.parentNode||document.body) !== document.body) {
        if ($.track.par.cla.groups.test(T.nodeName.toLowerCase()+(T.id?'#'+T.id:'')+(T.className?'.'+T.className.replace(/(^|\s+)/g,'.'):''))) {
            return $.track.par.cla.group[RegExp.$1];
        }
    }
    return '00';
};
$.track.par.cla.group = {
    'h1':11, '#headerNav':12, '#allContents':13, '#weather':14, '#headerHelplinks':15, '#toppromo':18, '#statusline':19, '#header':10,
    '#contentNavSearch':21, '#contentBoxSearch':21, '#contentNavFreemail':22, '#contentBoxFreemail':22, '#contentNavClub':23, '#contentBoxClub':23, '#loginbox':20,
    '#topnewsNavTopic':31, '#topnewsBoxTopic':31, '#topnewsNavGames':32, '#topnewsBoxGames':32, '#topnewsNavVideo':33, '#topnewsBoxVideo':33, '#topnewsNavTour':34, '#topnewsBoxTour':34, '#topnewsNavErotik':35, '#topnewsBoxErotik':35, '#topnewsNavBeileger':36, '#topnewsBoxBeileger':36, '.advOnsite':39, '#topnews':30,
    '#channelnewsNavNews':41, '#channelnewsBoxNews':41, '#channelnewsNavDigi':42, '#channelnewsBoxDigi':42, '#channelnewsNavEntertainment':43, '#channelnewsBoxEntertainment':43, '#channelnewsNavLifestyle':44, '#channelnewsBoxLifestyle':44, '#channelnews':40,
    '#shoppingbox':51, '#servicebox':52, '#productsbox':53, '.advUimContent':50,
    '#top6box':71, '.horoscope':72, '#wetterHoroskopLottoRouteNavWetter':73, '#wetterHoroskopLottoRouteBoxWetter':73, '#wetterHoroskopLottoRouteNavHoroskop':74, '#wetterHoroskopLottoRouteBoxHoroskop':74, '#wetterHoroskopLottoRouteNavLotto':75, '#wetterHoroskopLottoRouteBoxLotto':75, '#wetterHoroskopLottoRouteNavRoute':76, '#wetterHoroskopLottoRouteBoxRoute':76, '#wetterHoroskopLottoRoute':70,
    '#uimTopPosition':61, '#uimMidPosition':62, '.advChannelShopping':63, '.advChannelTrends':64, '.uim':60,
    '.topsearches':81, '.toparticles':82, '.topvideos':83, '.topslideshows':84, '.topquiz':85, '#sitebar':80,
    '#navigation':91, '#footer':92
};
$.track.par.cla.groups = new RegExp('('+(function() { var r=[];
    for (g in $.track.par.cla.group) { if (g && $.track.par.cla.group.hasOwnProperty(g)) { r.push(g); } }
    return r.join('|'); })()+')');
$.track.par.cmid = function(e) {
    return /(%2[fF]|\/)(\d+)[^\/]*$/.exec($.track.par.link(e) || '') && RegExp.$2;
};
$.track.par.cll = function(e) {
    var T=e.target, P, text='';
    if ((P=$(T).add(T.parentNode).next('div.content').add($(T).parents('div.content')).eq(0).find('h3')).length) { T=P[0]; }
    while (T && T !== document.body && (text=(T.innerHTML||'').replace(/\s+/g,' ').replace(/<.*?>/g,'').replace(/(^\s*|\s*$)/g, '')).length < 5) { T=T.parentNode; }; return text.slice(0, $.track.textlength);
}

$.track.par.hpsize = function() { return $(window).width() > 1240 ? '1280' : '1024'; }
$.track.par.unloaddisabled = 'unloaddisabled';
$.track.par.nshidden = 'hidden';
$.track.par.nsview = 'view';
$.track.par.userlevel = 'none';
$.track.par.click = 'click';
$.track.par.kid = ($.url.params.kid || '').substr(0,30);
$.track.par.adblock = function() {
    var t=$('#uimTopPosition');
    if (!t.length) { return 'undef'; }
    else if (!t.find('div') || t.find('div').height() < 200) { return 1; }
    else { return '0'; }
};
$.track.par.pagemode = function() {
    return document.getElementById('advBusterLayer') && 'overlay' ||
        document.getElementById('buster') && 'buster' ||
        document.getElementById('pushdown') && 'pushdown' ||
        document.getElementById('megabuster') && 'megabuster' ||
        document.getElementById('overlay') && 'overlay' ||
        document.getElementById('topnewsNavBeileger') && 'beileger' ||
        $('#uimTopPosition').height() > 600 && 'halfpage' ||
        'home';
};
$.track.par.clicktrack = function(e) { return (e.pageX && e.pageY ? (e.pageX >> 3)+'x'+(e.pageY >> 3) : false); }
$.track.nextIsHTTPS = false;
$.track.textlength = 40;
$.track.ev.click = function(e) {
    var E={}, k, T=e.target;
    for (k in e) { E[k]=e[k]; };
    E.type = ((isNaN(e.which) || e.which*1 <= 2) &&
        ((!$(T).parents('.tabsContainer').length &&
        !/^#/.test(T.href || $(T).parents('a').attr('href') || '#')) ||
        (T.form||{}).action && /(image|submit)/i.test(T.type))) ? 'clickout' : 'clickin';
    $.track(e);
    $.track(E);
}

$.track.init({
    '//wa.ui-portal.de/webde/webde-s/s?homepage.startseite.pi.${pagemode}&ns__t=${ts}&hp_size=${hpsize}&hp_country=de&hp_lang=de&hp_portal=webde&hp_userlevel=${userlevel}&': {
        slice: {
            cookie: {
                name: 'ns_sample',
                expires: '2y',
                path: '/',
                domain: (/([^.]+\.[^.]+)$/.exec(location.hostname) && ('.'+RegExp.$1))
            },
            chance: function(s) { return /5\d/.test(s); },
            filter: function(s) { return s|0; }
        },
        filter: function(url) { return url.toLowerCase().replace(/%20/g, '+'); },
        ready: {
            nsview: 'ns_type',
            screen: 'hp_s_res',
            window: 'hp_s_view',
            kid: 'kid',
            charset: 'ns_c',
            duration: 'hp_tp',
            adblock: 'hp_ab',
            url: 'ns_jspageurl',
            title: 'ns_ti',
            referrer: 'ns_referrer'
        },
        clickout: {
            nshidden: 'ns_type',
            ctype: 'hp_ctype',
            cll: 'hp_cll',
            cla: 'hp_cla',
            linkend: 'hp_clt',
            searchterm: 'hp_su',
            cmid: 'hp_cid',
            duration: 'hp_tp',
            clicktrack: 'hp_ct_x',
            type: 'hp_ct'
        },
        clickin: {
            nshidden: 'ns_type',
            cla: 'hp_cla',
            clicktrack: 'hp_ct_x',
            duration: 'hp_tp',
            click: 'hp_ct'
        }
    }
});
if ($.ua.browser.firefox) { $(window).bind('beforeunloaddisabled unloaddisabled', function(){return;}); }
$(function(){
    $('form').submit(function(e){
        e.preventDefault();
        var form=e.target;
        window.setTimeout(function(){ form.submit(); }, 100);
        return false;
    });
});
$.getScript('//fips.uimserv.net/ngvar.js', function(){
    $.elementReady('topnews', function(){
        $('#formFreemailLogin fieldset, #formClubLogin fieldset').append('<input name="uinguserid" type="hidden" value="'+(window.UI_nguserid||'')+'"/>');
    });
});
