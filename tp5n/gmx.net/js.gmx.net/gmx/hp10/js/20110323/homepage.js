(function(){
var
	window = this,
	undefined,
	_jQuery = window.jQuery,
	_$ = window.$,
	jQuery = window.jQuery = window.$ = function( selector, context ) {
		return new jQuery.fn.init( selector, context );
	},
	quickExpr = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,
	isSimple = /^.[^:#\[\.,]*$/;
jQuery.fn = jQuery.prototype = {
	init: function( selector, context ) {
		selector = selector || document;
		if ( selector.nodeType ) {
			this[0] = selector;
			this.length = 1;
			this.context = selector;
			return this;
		}
		if ( typeof selector === "string" ) {
			var match = quickExpr.exec( selector );
			if ( match && (match[1] || !context) ) {
				if ( match[1] )
					selector = jQuery.clean( [ match[1] ], context );
				else {
					var elem = document.getElementById( match[3] );
					if ( elem && elem.id != match[3] )
						return jQuery().find( selector );
					var ret = jQuery( elem || [] );
					ret.context = document;
					ret.selector = selector;
					return ret;
				}
			} else
				return jQuery( context ).find( selector );
		} else if ( jQuery.isFunction( selector ) )
			return jQuery( document ).ready( selector );
		if ( selector.selector && selector.context ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}
		return this.setArray(jQuery.isArray( selector ) ?
			selector :
			jQuery.makeArray(selector));
	},
	selector: "",
	jquery: "1.3.2",
	size: function() {
		return this.length;
	},
	get: function( num ) {
		return num === undefined ?
			Array.prototype.slice.call( this ) :
			this[ num ];
	},
	pushStack: function( elems, name, selector ) {
		var ret = jQuery( elems );
		ret.prevObject = this;
		ret.context = this.context;
		if ( name === "find" )
			ret.selector = this.selector + (this.selector ? " " : "") + selector;
		else if ( name )
			ret.selector = this.selector + "." + name + "(" + selector + ")";
		return ret;
	},
	setArray: function( elems ) {
		this.length = 0;
		Array.prototype.push.apply( this, elems );
		return this;
	},
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},
	index: function( elem ) {
		return jQuery.inArray(
			elem && elem.jquery ? elem[0] : elem
		, this );
	},
	attr: function( name, value, type ) {
		var options = name;
		if ( typeof name === "string" )
			if ( value === undefined )
				return this[0] && jQuery[ type || "attr" ]( this[0], name );
			else {
				options = {};
				options[ name ] = value;
			}
		return this.each(function(i){
			for ( name in options )
				jQuery.attr(
					type ?
						this.style :
						this,
					name, jQuery.prop( this, options[ name ], type, i, name )
				);
		});
	},
	css: function( key, value ) {
		if ( (key == 'width' || key == 'height') && parseFloat(value) < 0 )
			value = undefined;
		return this.attr( key, value, "curCSS" );
	},
	text: function( text ) {
		if ( typeof text !== "object" && text != null )
			return this.empty().append( (this[0] && this[0].ownerDocument || document).createTextNode( text ) );
		var ret = "";
		jQuery.each( text || this, function(){
			jQuery.each( this.childNodes, function(){
				if ( this.nodeType != 8 )
					ret += this.nodeType != 1 ?
						this.nodeValue :
						jQuery.fn.text( [ this ] );
			});
		});
		return ret;
	},
	wrapAll: function( html ) {
		if ( this[0] ) {
			var wrap = jQuery( html, this[0].ownerDocument ).clone();
			if ( this[0].parentNode )
				wrap.insertBefore( this[0] );
			wrap.map(function(){
				var elem = this;
				while ( elem.firstChild )
					elem = elem.firstChild;
				return elem;
			}).append(this);
		}
		return this;
	},
	wrapInner: function( html ) {
		return this.each(function(){
			jQuery( this ).contents().wrapAll( html );
		});
	},
	wrap: function( html ) {
		return this.each(function(){
			jQuery( this ).wrapAll( html );
		});
	},
	append: function() {
		return this.domManip(arguments, true, function(elem){
			if (this.nodeType == 1)
				this.appendChild( elem );
		});
	},
	prepend: function() {
		return this.domManip(arguments, true, function(elem){
			if (this.nodeType == 1)
				this.insertBefore( elem, this.firstChild );
		});
	},
	before: function() {
		return this.domManip(arguments, false, function(elem){
			this.parentNode.insertBefore( elem, this );
		});
	},
	after: function() {
		return this.domManip(arguments, false, function(elem){
			this.parentNode.insertBefore( elem, this.nextSibling );
		});
	},
	end: function() {
		return this.prevObject || jQuery( [] );
	},
	push: [].push,
	sort: [].sort,
	splice: [].splice,
	find: function( selector ) {
		if ( this.length === 1 ) {
			var ret = this.pushStack( [], "find", selector );
			ret.length = 0;
			jQuery.find( selector, this[0], ret );
			return ret;
		} else {
			return this.pushStack( jQuery.unique(jQuery.map(this, function(elem){
				return jQuery.find( selector, elem );
			})), "find", selector );
		}
	},
	clone: function( events ) {
		var ret = this.map(function(){
			if ( !jQuery.support.noCloneEvent && !jQuery.isXMLDoc(this) ) {
				var html = this.outerHTML;
				if ( !html ) {
					var div = this.ownerDocument.createElement("div");
					div.appendChild( this.cloneNode(true) );
					html = div.innerHTML;
				}
				return jQuery.clean([html.replace(/ jQuery\d+="(?:\d+|null)"/g, "").replace(/^\s*/, "")])[0];
			} else
				return this.cloneNode(true);
		});
		if ( events === true ) {
			var orig = this.find("*").andSelf(), i = 0;
			ret.find("*").andSelf().each(function(){
				if ( this.nodeName !== orig[i].nodeName )
					return;
				var events = jQuery.data( orig[i], "events" );
				for ( var type in events ) {
					for ( var handler in events[ type ] ) {
						jQuery.event.add( this, type, events[ type ][ handler ], events[ type ][ handler ].data );
					}
				}
				i++;
			});
		}
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack(
			jQuery.isFunction( selector ) &&
			jQuery.grep(this, function(elem, i){
				return selector.call( elem, i );
			}) ||
			jQuery.multiFilter( selector, jQuery.grep(this, function(elem){
				return elem.nodeType === 1;
			}) ), "filter", selector );
	},
	closest: function( selector ) {
		var pos = jQuery.expr.match.POS.test( selector ) ? jQuery(selector) : null,
			closer = 0;
		return this.map(function(){
			var cur = this;
			while ( cur && cur.ownerDocument ) {
				if ( pos ? pos.index(cur) > -1 : jQuery(cur).is(selector) ) {
					jQuery.data(cur, "closest", closer);
					return cur;
				}
				cur = cur.parentNode;
				closer++;
			}
		});
	},
	not: function( selector ) {
		if ( typeof selector === "string" )
			if ( isSimple.test( selector ) )
				return this.pushStack( jQuery.multiFilter( selector, this, true ), "not", selector );
			else
				selector = jQuery.multiFilter( selector, this );
		var isArrayLike = selector.length && selector[selector.length - 1] !== undefined && !selector.nodeType;
		return this.filter(function() {
			return isArrayLike ? jQuery.inArray( this, selector ) < 0 : this != selector;
		});
	},
	add: function( selector ) {
		return this.pushStack( jQuery.unique( jQuery.merge(
			this.get(),
			typeof selector === "string" ?
				jQuery( selector ) :
				jQuery.makeArray( selector )
		)));
	},
	is: function( selector ) {
		return !!selector && jQuery.multiFilter( selector, this ).length > 0;
	},
	hasClass: function( selector ) {
		return !!selector && this.is( "." + selector );
	},
	val: function( value ) {
		if ( value === undefined ) {
			var elem = this[0];
			if ( elem ) {
				if( jQuery.nodeName( elem, 'option' ) )
					return (elem.attributes.value || {}).specified ? elem.value : elem.text;
				if ( jQuery.nodeName( elem, "select" ) ) {
					var index = elem.selectedIndex,
						values = [],
						options = elem.options,
						one = elem.type == "select-one";
					if ( index < 0 )
						return null;
					for ( var i = one ? index : 0, max = one ? index + 1 : options.length; i < max; i++ ) {
						var option = options[ i ];
						if ( option.selected ) {
							value = jQuery(option).val();
							if ( one )
								return value;
							values.push( value );
						}
					}
					return values;
				}
				return (elem.value || "").replace(/\r/g, "");
			}
			return undefined;
		}
		if ( typeof value === "number" )
			value += '';
		return this.each(function(){
			if ( this.nodeType != 1 )
				return;
			if ( jQuery.isArray(value) && /radio|checkbox/.test( this.type ) )
				this.checked = (jQuery.inArray(this.value, value) >= 0 ||
					jQuery.inArray(this.name, value) >= 0);
			else if ( jQuery.nodeName( this, "select" ) ) {
				var values = jQuery.makeArray(value);
				jQuery( "option", this ).each(function(){
					this.selected = (jQuery.inArray( this.value, values ) >= 0 ||
						jQuery.inArray( this.text, values ) >= 0);
				});
				if ( !values.length )
					this.selectedIndex = -1;
			} else
				this.value = value;
		});
	},
	html: function( value ) {
		return value === undefined ?
			(this[0] ?
				this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g, "") :
				null) :
			this.empty().append( value );
	},
	replaceWith: function( value ) {
		return this.after( value ).remove();
	},
	eq: function( i ) {
		return this.slice( i, +i + 1 );
	},
	slice: function() {
		return this.pushStack( Array.prototype.slice.apply( this, arguments ),
			"slice", Array.prototype.slice.call(arguments).join(",") );
	},
	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function(elem, i){
			return callback.call( elem, i, elem );
		}));
	},
	andSelf: function() {
		return this.add( this.prevObject );
	},
	domManip: function( args, table, callback ) {
		if ( this[0] ) {
			var fragment = (this[0].ownerDocument || this[0]).createDocumentFragment(),
				scripts = jQuery.clean( args, (this[0].ownerDocument || this[0]), fragment ),
				first = fragment.firstChild;
			if ( first )
				for ( var i = 0, l = this.length; i < l; i++ )
					callback.call( root(this[i], first), this.length > 1 || i > 0 ?
							fragment.cloneNode(true) : fragment );
			if ( scripts )
				jQuery.each( scripts, evalScript );
		}
		return this;
		function root( elem, cur ) {
			return table && jQuery.nodeName(elem, "table") && jQuery.nodeName(cur, "tr") ?
				(elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
				elem;
		}
	}
};
jQuery.fn.init.prototype = jQuery.fn;
function evalScript( i, elem ) {
	if ( elem.src )
		jQuery.ajax({
			url: elem.src,
			async: false,
			dataType: "script"
		});
	else
		jQuery.globalEval( elem.text || elem.textContent || elem.innerHTML || "" );
	if ( elem.parentNode )
		elem.parentNode.removeChild( elem );
}

function now(){
	return +new Date;
}

jQuery.extend = jQuery.fn.extend = function() {
	var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options;
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		i = 2;
	}
	if ( typeof target !== "object" && !jQuery.isFunction(target) )
		target = {};
	if ( length == i ) {
		target = this;
		--i;
	}
	for ( ; i < length; i++ )
		if ( (options = arguments[ i ]) != null )
			for ( var name in options ) {
				var src = target[ name ], copy = options[ name ];
				if ( target === copy )
					continue;
				if ( deep && copy && typeof copy === "object" && !copy.nodeType )
					target[ name ] = jQuery.extend( deep,
						src || ( copy.length != null ? [ ] : { } )
					, copy );
				else if ( copy !== undefined )
					target[ name ] = copy;
			}
	return target;
};
var	exclude = /z-?index|font-?weight|opacity|zoom|line-?height/i,
	defaultView = document.defaultView || {},
	toString = Object.prototype.toString;
jQuery.extend({
	noConflict: function( deep ) {
		window.$ = _$;
		if ( deep )
			window.jQuery = _jQuery;
		return jQuery;
	},
	isFunction: function( obj ) {
		return toString.call(obj) === "[object Function]";
	},
	isArray: function( obj ) {
		return toString.call(obj) === "[object Array]";
	},
	isXMLDoc: function( elem ) {
		return elem.nodeType === 9 && elem.documentElement.nodeName !== "HTML" ||
			!!elem.ownerDocument && jQuery.isXMLDoc( elem.ownerDocument );
	},
	globalEval: function( data ) {
		if ( data && /\S/.test(data) ) {
			var head = document.getElementsByTagName("head")[0] || document.documentElement,
				script = document.createElement("script");
			script.type = "text/javascript";
			if ( jQuery.support.scriptEval )
				script.appendChild( document.createTextNode( data ) );
			else
				script.text = data;
			head.insertBefore( script, head.firstChild );
			head.removeChild( script );
		}
	},
	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toUpperCase() == name.toUpperCase();
	},
	each: function( object, callback, args ) {
		var name, i = 0, length = object.length;
		if ( args ) {
			if ( length === undefined ) {
				for ( name in object )
					if ( callback.apply( object[ name ], args ) === false )
						break;
			} else
				for ( ; i < length; )
					if ( callback.apply( object[ i++ ], args ) === false )
						break;
		} else {
			if ( length === undefined ) {
				for ( name in object )
					if ( callback.call( object[ name ], name, object[ name ] ) === false )
						break;
			} else
				for ( var value = object[0];
					i < length && callback.call( value, i, value ) !== false; value = object[++i] ){}
		}
		return object;
	},
	prop: function( elem, value, type, i, name ) {
		if ( jQuery.isFunction( value ) )
			value = value.call( elem, i );
		return typeof value === "number" && type == "curCSS" && !exclude.test( name ) ?
			value + "px" :
			value;
	},
	className: {
		add: function( elem, classNames ) {
			jQuery.each((classNames || "").split(/\s+/), function(i, className){
				if ( elem.nodeType == 1 && !jQuery.className.has( elem.className, className ) )
					elem.className += (elem.className ? " " : "") + className;
			});
		},
		remove: function( elem, classNames ) {
			if (elem.nodeType == 1)
				elem.className = classNames !== undefined ?
					jQuery.grep(elem.className.split(/\s+/), function(className){
						return !jQuery.className.has( classNames, className );
					}).join(" ") :
					"";
		},
		has: function( elem, className ) {
			return elem && jQuery.inArray( className, (elem.className || elem).toString().split(/\s+/) ) > -1;
		}
	},
	swap: function( elem, options, callback ) {
		var old = {};
		for ( var name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
		callback.call( elem );
		for ( var name in options )
			elem.style[ name ] = old[ name ];
	},
	css: function( elem, name, force, extra ) {
		if ( name == "width" || name == "height" ) {
			var val, props = { position: "absolute", visibility: "hidden", display:"block" }, which = name == "width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ];
			function getWH() {
				val = name == "width" ? elem.offsetWidth : elem.offsetHeight;
				if ( extra === "border" )
					return;
				jQuery.each( which, function() {
					if ( !extra )
						val -= parseFloat(jQuery.curCSS( elem, "padding" + this, true)) || 0;
					if ( extra === "margin" )
						val += parseFloat(jQuery.curCSS( elem, "margin" + this, true)) || 0;
					else
						val -= parseFloat(jQuery.curCSS( elem, "border" + this + "Width", true)) || 0;
				});
			}
			if ( elem.offsetWidth !== 0 )
				getWH();
			else
				jQuery.swap( elem, props, getWH );
			return Math.max(0, Math.round(val));
		}
		return jQuery.curCSS( elem, name, force );
	},
	curCSS: function( elem, name, force ) {
		var ret, style = elem.style;
		if ( name == "opacity" && !jQuery.support.opacity ) {
			ret = jQuery.attr( style, "opacity" );
			return ret == "" ?
				"1" :
				ret;
		}
		if ( name.match( /float/i ) )
			name = styleFloat;
		if ( !force && style && style[ name ] )
			ret = style[ name ];
		else if ( defaultView.getComputedStyle ) {
			if ( name.match( /float/i ) )
				name = "float";
			name = name.replace( /([A-Z])/g, "-$1" ).toLowerCase();
			var computedStyle = defaultView.getComputedStyle( elem, null );
			if ( computedStyle )
				ret = computedStyle.getPropertyValue( name );
			if ( name == "opacity" && ret == "" )
				ret = "1";
		} else if ( elem.currentStyle ) {
			var camelCase = name.replace(/\-(\w)/g, function(all, letter){
				return letter.toUpperCase();
			});
			ret = elem.currentStyle[ name ] || elem.currentStyle[ camelCase ];
			if ( !/^\d+(px)?$/i.test( ret ) && /^\d/.test( ret ) ) {
				var left = style.left, rsLeft = elem.runtimeStyle.left;
				elem.runtimeStyle.left = elem.currentStyle.left;
				style.left = ret || 0;
				ret = style.pixelLeft + "px";
				style.left = left;
				elem.runtimeStyle.left = rsLeft;
			}
		}
		return ret;
	},
	clean: function( elems, context, fragment ) {
		context = context || document;
		if ( typeof context.createElement === "undefined" )
			context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
		if ( !fragment && elems.length === 1 && typeof elems[0] === "string" ) {
			var match = /^<(\w+)\s*\/?>$/.exec(elems[0]);
			if ( match )
				return [ context.createElement( match[1] ) ];
		}
		var ret = [], scripts = [], div = context.createElement("div");
		jQuery.each(elems, function(i, elem){
			if ( typeof elem === "number" )
				elem += '';
			if ( !elem )
				return;
			if ( typeof elem === "string" ) {
				elem = elem.replace(/(<(\w+)[^>]*?)\/>/g, function(all, front, tag){
					return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ?
						all :
						front + "></" + tag + ">";
				});
				var tags = elem.replace(/^\s+/, "").substring(0, 10).toLowerCase();
				var wrap =
					!tags.indexOf("<opt") &&
					[ 1, "<select multiple='multiple'>", "</select>" ] ||
					!tags.indexOf("<leg") &&
					[ 1, "<fieldset>", "</fieldset>" ] ||
					tags.match(/^<(thead|tbody|tfoot|colg|cap)/) &&
					[ 1, "<table>", "</table>" ] ||
					!tags.indexOf("<tr") &&
					[ 2, "<table><tbody>", "</tbody></table>" ] ||
					(!tags.indexOf("<td") || !tags.indexOf("<th")) &&
					[ 3, "<table><tbody><tr>", "</tr></tbody></table>" ] ||
					!tags.indexOf("<col") &&
					[ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ] ||
					!jQuery.support.htmlSerialize &&
					[ 1, "div<div>", "</div>" ] ||
					[ 0, "", "" ];
				div.innerHTML = wrap[1] + elem + wrap[2];
				while ( wrap[0]-- )
					div = div.lastChild;
				if ( !jQuery.support.tbody ) {
					var hasBody = /<tbody/i.test(elem),
						tbody = !tags.indexOf("<table") && !hasBody ?
							div.firstChild && div.firstChild.childNodes :
						wrap[1] == "<table>" && !hasBody ?
							div.childNodes :
							[];
					for ( var j = tbody.length - 1; j >= 0 ; --j )
						if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length )
							tbody[ j ].parentNode.removeChild( tbody[ j ] );
					}
				if ( !jQuery.support.leadingWhitespace && /^\s/.test( elem ) )
					div.insertBefore( context.createTextNode( elem.match(/^\s*/)[0] ), div.firstChild );
				elem = jQuery.makeArray( div.childNodes );
			}
			if ( elem.nodeType )
				ret.push( elem );
			else
				ret = jQuery.merge( ret, elem );
		});
		if ( fragment ) {
			for ( var i = 0; ret[i]; i++ ) {
				if ( jQuery.nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
					scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );
				} else {
					if ( ret[i].nodeType === 1 )
						ret.splice.apply( ret, [i + 1, 0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))) );
					fragment.appendChild( ret[i] );
				}
			}
			return scripts;
		}
		return ret;
	},
	attr: function( elem, name, value ) {
		if (!elem || elem.nodeType == 3 || elem.nodeType == 8)
			return undefined;
		var notxml = !jQuery.isXMLDoc( elem ),
			set = value !== undefined;
		name = notxml && jQuery.props[ name ] || name;
		if ( elem.tagName ) {
			var special = /href|src|style/.test( name );
			if ( name == "selected" && elem.parentNode )
				elem.parentNode.selectedIndex;
			if ( name in elem && notxml && !special ) {
				if ( set ){
					if ( name == "type" && jQuery.nodeName( elem, "input" ) && elem.parentNode )
						throw "type property can't be changed";
					elem[ name ] = value;
				}
				if( jQuery.nodeName( elem, "form" ) && elem.getAttributeNode(name) )
					return elem.getAttributeNode( name ).nodeValue;
				if ( name == "tabIndex" ) {
					var attributeNode = elem.getAttributeNode( "tabIndex" );
					return attributeNode && attributeNode.specified
						? attributeNode.value
						: elem.nodeName.match(/(button|input|object|select|textarea)/i)
							? 0
							: elem.nodeName.match(/^(a|area)$/i) && elem.href
								? 0
								: undefined;
				}
				return elem[ name ];
			}
			if ( !jQuery.support.style && notxml &&  name == "style" )
				return jQuery.attr( elem.style, "cssText", value );
			if ( set )
				elem.setAttribute( name, "" + value );
			var attr = !jQuery.support.hrefNormalized && notxml && special
					? elem.getAttribute( name, 2 )
					: elem.getAttribute( name );
			return attr === null ? undefined : attr;
		}
		if ( !jQuery.support.opacity && name == "opacity" ) {
			if ( set ) {
				elem.zoom = 1;
				elem.filter = (elem.filter || "").replace( /alpha\([^)]*\)/, "" ) +
					(parseInt( value ) + '' == "NaN" ? "" : "alpha(opacity=" + value * 100 + ")");
			}
			return elem.filter && elem.filter.indexOf("opacity=") >= 0 ?
				(parseFloat( elem.filter.match(/opacity=([^)]*)/)[1] ) / 100) + '':
				"";
		}
		name = name.replace(/-([a-z])/ig, function(all, letter){
			return letter.toUpperCase();
		});
		if ( set )
			elem[ name ] = value;
		return elem[ name ];
	},
	trim: function( text ) {
		return (text || "").replace( /^\s+|\s+$/g, "" );
	},
	makeArray: function( array ) {
		var ret = [];
		if( array != null ){
			var i = array.length;
			if( i == null || typeof array === "string" || jQuery.isFunction(array) || array.setInterval )
				ret[0] = array;
			else
				while( i )
					ret[--i] = array[i];
		}
		return ret;
	},
	inArray: function( elem, array ) {
		for ( var i = 0, length = array.length; i < length; i++ )
			if ( array[ i ] === elem )
				return i;
		return -1;
	},
	merge: function( first, second ) {
		var i = 0, elem, pos = first.length;
		if ( !jQuery.support.getAll ) {
			while ( (elem = second[ i++ ]) != null )
				if ( elem.nodeType != 8 )
					first[ pos++ ] = elem;
		} else
			while ( (elem = second[ i++ ]) != null )
				first[ pos++ ] = elem;
		return first;
	},
	unique: function( array ) {
		var ret = [], done = {};
		try {
			for ( var i = 0, length = array.length; i < length; i++ ) {
				var id = jQuery.data( array[ i ] );
				if ( !done[ id ] ) {
					done[ id ] = true;
					ret.push( array[ i ] );
				}
			}
		} catch( e ) {
			ret = array;
		}
		return ret;
	},
	grep: function( elems, callback, inv ) {
		var ret = [];
		for ( var i = 0, length = elems.length; i < length; i++ )
			if ( !inv != !callback( elems[ i ], i ) )
				ret.push( elems[ i ] );
		return ret;
	},
	map: function( elems, callback ) {
		var ret = [];
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			var value = callback( elems[ i ], i );
			if ( value != null )
				ret[ ret.length ] = value;
		}
		return ret.concat.apply( [], ret );
	}
});
var userAgent = navigator.userAgent.toLowerCase();
jQuery.browser = {
	version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
	safari: /webkit/.test( userAgent ),
	opera: /opera/.test( userAgent ),
	msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
	mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
};
jQuery.each({
	parent: function(elem){return elem.parentNode;},
	parents: function(elem){return jQuery.dir(elem,"parentNode");},
	next: function(elem){return jQuery.nth(elem,2,"nextSibling");},
	prev: function(elem){return jQuery.nth(elem,2,"previousSibling");},
	nextAll: function(elem){return jQuery.dir(elem,"nextSibling");},
	prevAll: function(elem){return jQuery.dir(elem,"previousSibling");},
	siblings: function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},
	children: function(elem){return jQuery.sibling(elem.firstChild);},
	contents: function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}
}, function(name, fn){
	jQuery.fn[ name ] = function( selector ) {
		var ret = jQuery.map( this, fn );
		if ( selector && typeof selector == "string" )
			ret = jQuery.multiFilter( selector, ret );
		return this.pushStack( jQuery.unique( ret ), name, selector );
	};
});
jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function(name, original){
	jQuery.fn[ name ] = function( selector ) {
		var ret = [], insert = jQuery( selector );
		for ( var i = 0, l = insert.length; i < l; i++ ) {
			var elems = (i > 0 ? this.clone(true) : this).get();
			jQuery.fn[ original ].apply( jQuery(insert[i]), elems );
			ret = ret.concat( elems );
		}
		return this.pushStack( ret, name, selector );
	};
});
jQuery.each({
	removeAttr: function( name ) {
		jQuery.attr( this, name, "" );
		if (this.nodeType == 1)
			this.removeAttribute( name );
	},
	addClass: function( classNames ) {
		jQuery.className.add( this, classNames );
	},
	removeClass: function( classNames ) {
		jQuery.className.remove( this, classNames );
	},
	toggleClass: function( classNames, state ) {
		if( typeof state !== "boolean" )
			state = !jQuery.className.has( this, classNames );
		jQuery.className[ state ? "add" : "remove" ]( this, classNames );
	},
	remove: function( selector ) {
		if ( !selector || jQuery.filter( selector, [ this ] ).length ) {
			jQuery( "*", this ).add([this]).each(function(){
				jQuery.event.remove(this);
				jQuery.removeData(this);
			});
			if (this.parentNode)
				this.parentNode.removeChild( this );
		}
	},
	empty: function() {
		jQuery(this).children().remove();
		while ( this.firstChild )
			this.removeChild( this.firstChild );
	}
}, function(name, fn){
	jQuery.fn[ name ] = function(){
		return this.each( fn, arguments );
	};
});
function num(elem, prop) {
	return elem[0] && parseInt( jQuery.curCSS(elem[0], prop, true), 10 ) || 0;
}

var expando = "jQuery" + now(), uuid = 0, windowData = {};
jQuery.extend({
	cache: {},
	data: function( elem, name, data ) {
		elem = elem == window ?
			windowData :
			elem;
		var id = elem[ expando ];
		if ( !id )
			id = elem[ expando ] = ++uuid;
		if ( name && !jQuery.cache[ id ] )
			jQuery.cache[ id ] = {};
		if ( data !== undefined )
			jQuery.cache[ id ][ name ] = data;
		return name ?
			jQuery.cache[ id ][ name ] :
			id;
	},
	removeData: function( elem, name ) {
		elem = elem == window ?
			windowData :
			elem;
		var id = elem[ expando ];
		if ( name ) {
			if ( jQuery.cache[ id ] ) {
				delete jQuery.cache[ id ][ name ];
				name = "";
				for ( name in jQuery.cache[ id ] )
					break;
				if ( !name )
					jQuery.removeData( elem );
			}
		} else {
			try {
				delete elem[ expando ];
			} catch(e){
				if ( elem.removeAttribute )
					elem.removeAttribute( expando );
			}
			delete jQuery.cache[ id ];
		}
	},
	queue: function( elem, type, data ) {
		if ( elem ){
			type = (type || "fx") + "queue";
			var q = jQuery.data( elem, type );
			if ( !q || jQuery.isArray(data) )
				q = jQuery.data( elem, type, jQuery.makeArray(data) );
			else if( data )
				q.push( data );
		}
		return q;
	},
	dequeue: function( elem, type ){
		var queue = jQuery.queue( elem, type ),
			fn = queue.shift();
		if( !type || type === "fx" )
			fn = queue[0];
		if( fn !== undefined )
			fn.call(elem);
	}
});
jQuery.fn.extend({
	data: function( key, value ){
		var parts = key.split(".");
		parts[1] = parts[1] ? "." + parts[1] : "";
		if ( value === undefined ) {
			var data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);
			if ( data === undefined && this.length )
				data = jQuery.data( this[0], key );
			return data === undefined && parts[1] ?
				this.data( parts[0] ) :
				data;
		} else
			return this.trigger("setData" + parts[1] + "!", [parts[0], value]).each(function(){
				jQuery.data( this, key, value );
			});
	},
	removeData: function( key ){
		return this.each(function(){
			jQuery.removeData( this, key );
		});
	},
	queue: function(type, data){
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
		}
		if ( data === undefined )
			return jQuery.queue( this[0], type );
		return this.each(function(){
			var queue = jQuery.queue( this, type, data );
			 if( type == "fx" && queue.length == 1 )
				queue[0].call(this);
		});
	},
	dequeue: function(type){
		return this.each(function(){
			jQuery.dequeue( this, type );
		});
	}
});
(function(){
var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,
	done = 0,
	toString = Object.prototype.toString;
var Sizzle = function(selector, context, results, seed) {
	results = results || [];
	context = context || document;
	if ( context.nodeType !== 1 && context.nodeType !== 9 )
		return [];
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}
	var parts = [], m, set, checkSet, check, mode, extra, prune = true;
	chunker.lastIndex = 0;
	while ( (m = chunker.exec(selector)) !== null ) {
		parts.push( m[1] );
		if ( m[2] ) {
			extra = RegExp.rightContext;
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
				if ( Expr.relative[ selector ] )
					selector += parts.shift();
				set = posProcess( selector, set );
			}
		}
	} else {
		var ret = seed ?
			{ expr: parts.pop(), set: makeArray(seed) } :
			Sizzle.find( parts.pop(), parts.length === 1 && context.parentNode ? context.parentNode : context, isXML(context) );
		set = Sizzle.filter( ret.expr, ret.set );
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
			Expr.relative[ cur ]( checkSet, pop, isXML(context) );
		}
	}
	if ( !checkSet ) {
		checkSet = set;
	}
	if ( !checkSet ) {
		throw "Syntax error, unrecognized expression: " + (cur || selector);
	}
	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );
		} else if ( context.nodeType === 1 ) {
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
		Sizzle( extra, context, results, seed );
		if ( sortOrder ) {
			hasDuplicate = false;
			results.sort(sortOrder);
			if ( hasDuplicate ) {
				for ( var i = 1; i < results.length; i++ ) {
					if ( results[i] === results[i-1] ) {
						results.splice(i--, 1);
					}
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
		if ( (match = Expr.match[ type ].exec( expr )) ) {
			var left = RegExp.leftContext;
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
			if ( (match = Expr.match[ type ].exec( expr )) != null ) {
				var filter = Expr.filter[ type ], found, item;
				anyFound = false;
				if ( curLoop == result ) {
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
		if ( expr == old ) {
			if ( anyFound == null ) {
				throw "Syntax error, unrecognized expression: " + expr;
			} else {
				break;
			}
		}
		old = expr;
	}
	return curLoop;
};
var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],
	match: {
		ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
	},
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
		"+": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !/\W/.test(part),
				isPartStrNotTag = isPartStr && !isTag;
			if ( isTag && !isXML ) {
				part = part.toUpperCase();
			}
			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}
					checkSet[i] = isPartStrNotTag || elem && elem.nodeName === part ?
						elem || false :
						elem === part;
				}
			}
			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},
		">": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string";
			if ( isPartStr && !/\W/.test(part) ) {
				part = isXML ? part : part.toUpperCase();
				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName === part ? parent : false;
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
			if ( !part.match(/\W/) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
				checkFn = dirNodeCheck;
			}
			checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
		},
		"~": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;
			if ( typeof part === "string" && !part.match(/\W/) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
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
		NAME: function(match, context, isXML){
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
					if ( not ^ (elem.className && (" " + elem.className + " ").indexOf(match) >= 0) ) {
						if ( !inplace )
							result.push( elem );
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
			for ( var i = 0; curLoop[i] === false; i++ ){}
			return curLoop[i] && isXML(curLoop[i]) ? match[1] : match[1].toUpperCase();
		},
		CHILD: function(match){
			if ( match[1] == "nth" ) {
				var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
					match[2] == "even" && "2n" || match[2] == "odd" && "2n+1" ||
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
				if ( match[3].match(chunker).length > 1 || /^\w/.test(match[3]) ) {
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
			return "button" === elem.type || elem.nodeName.toUpperCase() === "BUTTON";
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
			return match[3] - 0 == i;
		},
		eq: function(elem, i, match){
			return match[3] - 0 == i;
		}
	},
	filter: {
		PSEUDO: function(elem, match, i, array){
			var name = match[1], filter = Expr.filters[ name ];
			if ( filter ) {
				return filter( elem, i, match, array );
			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || "").indexOf(match[3]) >= 0;
			} else if ( name === "not" ) {
				var not = match[3];
				for ( var i = 0, l = not.length; i < l; i++ ) {
					if ( not[i] === elem ) {
						return false;
					}
				}
				return true;
			}
		},
		CHILD: function(elem, match){
			var type = match[1], node = elem;
			switch (type) {
				case 'only':
				case 'first':
					while (node = node.previousSibling)  {
						if ( node.nodeType === 1 ) return false;
					}
					if ( type == 'first') return true;
					node = elem;
				case 'last':
					while (node = node.nextSibling)  {
						if ( node.nodeType === 1 ) return false;
					}
					return true;
				case 'nth':
					var first = match[2], last = match[3];
					if ( first == 1 && last == 0 ) {
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
					if ( first == 0 ) {
						return diff == 0;
					} else {
						return ( diff % first == 0 && diff / first >= 0 );
					}
			}
		},
		ID: function(elem, match){
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},
		TAG: function(elem, match){
			return (match === "*" && elem.nodeType === 1) || elem.nodeName === match;
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
				value != check :
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
	Expr.match[ type ] = RegExp( Expr.match[ type ].source + /(?![^\[]*\])(?![^\(]*\))/.source );
}

var makeArray = function(array, results) {
	array = Array.prototype.slice.call( array );
	if ( results ) {
		results.push.apply( results, array );
		return results;
	}
	return array;
};
try {
	Array.prototype.slice.call( document.documentElement.childNodes );
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
		var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( "sourceIndex" in document.documentElement ) {
	sortOrder = function( a, b ) {
		var ret = a.sourceIndex - b.sourceIndex;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( document.createRange ) {
	sortOrder = function( a, b ) {
		var aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange();
		aRange.selectNode(a);
		aRange.collapse(true);
		bRange.selectNode(b);
		bRange.collapse(true);
		var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
}

(function(){
	var form = document.createElement("form"),
		id = "script" + (new Date).getTime();
	form.innerHTML = "<input name='" + id + "'/>";
	var root = document.documentElement;
	root.insertBefore( form, root.firstChild );
	if ( !!document.getElementById( id ) ) {
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
})();
if ( document.querySelectorAll ) (function(){
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
	Sizzle.find = oldSizzle.find;
	Sizzle.filter = oldSizzle.filter;
	Sizzle.selectors = oldSizzle.selectors;
	Sizzle.matches = oldSizzle.matches;
})();
if ( document.getElementsByClassName && document.documentElement.getElementsByClassName ) (function(){
	var div = document.createElement("div");
	div.innerHTML = "<div class='test e'></div><div class='test'></div>";
	if ( div.getElementsByClassName("e").length === 0 )
		return;
	div.lastChild.className = "e";
	if ( div.getElementsByClassName("e").length === 1 )
		return;
	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function(match, context, isXML) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};
})();
function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ){
				elem.sizcache = doneName;
				elem.sizset = i;
			}
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
				if ( elem.nodeName === cur ) {
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
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ) {
				elem.sizcache = doneName;
				elem.sizset = i;
			}
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

var contains = document.compareDocumentPosition ?  function(a, b){
	return a.compareDocumentPosition(b) & 16;
} : function(a, b){
	return a !== b && (a.contains ? a.contains(b) : true);
};
var isXML = function(elem){
	return elem.nodeType === 9 && elem.documentElement.nodeName !== "HTML" ||
		!!elem.ownerDocument && isXML( elem.ownerDocument );
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
jQuery.filter = Sizzle.filter;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.filters;
Sizzle.selectors.filters.hidden = function(elem){
	return elem.offsetWidth === 0 || elem.offsetHeight === 0;
};
Sizzle.selectors.filters.visible = function(elem){
	return elem.offsetWidth > 0 || elem.offsetHeight > 0;
};
Sizzle.selectors.filters.animated = function(elem){
	return jQuery.grep(jQuery.timers, function(fn){
		return elem === fn.elem;
	}).length;
};
jQuery.multiFilter = function( expr, elems, not ) {
	if ( not ) {
		expr = ":not(" + expr + ")";
	}
	return Sizzle.matches(expr, elems);
};
jQuery.dir = function( elem, dir ){
	var matched = [], cur = elem[dir];
	while ( cur && cur != document ) {
		if ( cur.nodeType == 1 )
			matched.push( cur );
		cur = cur[dir];
	}
	return matched;
};
jQuery.nth = function(cur, result, dir, elem){
	result = result || 1;
	var num = 0;
	for ( ; cur; cur = cur[dir] )
		if ( cur.nodeType == 1 && ++num == result )
			break;
	return cur;
};
jQuery.sibling = function(n, elem){
	var r = [];
	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType == 1 && n != elem )
			r.push( n );
	}
	return r;
};
return;
window.Sizzle = Sizzle;
})();
jQuery.event = {
	add: function(elem, types, handler, data) {
		if ( elem.nodeType == 3 || elem.nodeType == 8 )
			return;
		if ( elem.setInterval && elem != window )
			elem = window;
		if ( !handler.guid )
			handler.guid = this.guid++;
		if ( data !== undefined ) {
			var fn = handler;
			handler = this.proxy( fn );
			handler.data = data;
		}
		var events = jQuery.data(elem, "events") || jQuery.data(elem, "events", {}),
			handle = jQuery.data(elem, "handle") || jQuery.data(elem, "handle", function(){
				return typeof jQuery !== "undefined" && !jQuery.event.triggered ?
					jQuery.event.handle.apply(arguments.callee.elem, arguments) :
					undefined;
			});
		handle.elem = elem;
		jQuery.each(types.split(/\s+/), function(index, type) {
			var namespaces = type.split(".");
			type = namespaces.shift();
			handler.type = namespaces.slice().sort().join(".");
			var handlers = events[type];
			if ( jQuery.event.specialAll[type] )
				jQuery.event.specialAll[type].setup.call(elem, data, namespaces);
			if (!handlers) {
				handlers = events[type] = {};
				if ( !jQuery.event.special[type] || jQuery.event.special[type].setup.call(elem, data, namespaces) === false ) {
					if (elem.addEventListener)
						elem.addEventListener(type, handle, false);
					else if (elem.attachEvent)
						elem.attachEvent("on" + type, handle);
				}
			}
			handlers[handler.guid] = handler;
			jQuery.event.global[type] = true;
		});
		elem = null;
	},
	guid: 1,
	global: {},
	remove: function(elem, types, handler) {
		if ( elem.nodeType == 3 || elem.nodeType == 8 )
			return;
		var events = jQuery.data(elem, "events"), ret, index;
		if ( events ) {
			if ( types === undefined || (typeof types === "string" && types.charAt(0) == ".") )
				for ( var type in events )
					this.remove( elem, type + (types || "") );
			else {
				if ( types.type ) {
					handler = types.handler;
					types = types.type;
				}
				jQuery.each(types.split(/\s+/), function(index, type){
					var namespaces = type.split(".");
					type = namespaces.shift();
					var namespace = RegExp("(^|\\.)" + namespaces.slice().sort().join(".*\\.") + "(\\.|$)");
					if ( events[type] ) {
						if ( handler )
							delete events[type][handler.guid];
						else
							for ( var handle in events[type] )
								if ( namespace.test(events[type][handle].type) )
									delete events[type][handle];
						if ( jQuery.event.specialAll[type] )
							jQuery.event.specialAll[type].teardown.call(elem, namespaces);
						for ( ret in events[type] ) break;
						if ( !ret ) {
							if ( !jQuery.event.special[type] || jQuery.event.special[type].teardown.call(elem, namespaces) === false ) {
								if (elem.removeEventListener)
									elem.removeEventListener(type, jQuery.data(elem, "handle"), false);
								else if (elem.detachEvent)
									elem.detachEvent("on" + type, jQuery.data(elem, "handle"));
							}
							ret = null;
							delete events[type];
						}
					}
				});
			}
			for ( ret in events ) break;
			if ( !ret ) {
				var handle = jQuery.data( elem, "handle" );
				if ( handle ) handle.elem = null;
				jQuery.removeData( elem, "events" );
				jQuery.removeData( elem, "handle" );
			}
		}
	},
	trigger: function( event, data, elem, bubbling ) {
		var type = event.type || event;
		if( !bubbling ){
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
				if ( this.global[type] )
					jQuery.each( jQuery.cache, function(){
						if ( this.events && this.events[type] )
							jQuery.event.trigger( event, data, this.handle.elem );
					});
			}
			if ( !elem || elem.nodeType == 3 || elem.nodeType == 8 )
				return undefined;
			event.result = undefined;
			event.target = elem;
			data = jQuery.makeArray(data);
			data.unshift( event );
		}
		event.currentTarget = elem;
		var handle = jQuery.data(elem, "handle");
		if ( handle )
			handle.apply( elem, data );
		if ( (!elem[type] || (jQuery.nodeName(elem, 'a') && type == "click")) && elem["on"+type] && elem["on"+type].apply( elem, data ) === false )
			event.result = false;
		if ( !bubbling && elem[type] && !event.isDefaultPrevented() && !(jQuery.nodeName(elem, 'a') && type == "click") ) {
			this.triggered = true;
			try {
				elem[ type ]();
			} catch (e) {}
		}
		this.triggered = false;
		if ( !event.isPropagationStopped() ) {
			var parent = elem.parentNode || elem.ownerDocument;
			if ( parent )
				jQuery.event.trigger(event, data, parent, true);
		}
	},
	handle: function(event) {
		var all, handlers;
		event = arguments[0] = jQuery.event.fix( event || window.event );
		event.currentTarget = this;
		var namespaces = event.type.split(".");
		event.type = namespaces.shift();
		all = !namespaces.length && !event.exclusive;
		var namespace = RegExp("(^|\\.)" + namespaces.slice().sort().join(".*\\.") + "(\\.|$)");
		handlers = ( jQuery.data(this, "events") || {} )[event.type];
		for ( var j in handlers ) {
			var handler = handlers[j];
			if ( all || namespace.test(handler.type) ) {
				event.handler = handler;
				event.data = handler.data;
				var ret = handler.apply(this, arguments);
				if( ret !== undefined ){
					event.result = ret;
					if ( ret === false ) {
						event.preventDefault();
						event.stopPropagation();
					}
				}
				if( event.isImmediatePropagationStopped() )
					break;
			}
		}
	},
	props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
	fix: function(event) {
		if ( event[expando] )
			return event;
		var originalEvent = event;
		event = jQuery.Event( originalEvent );
		for ( var i = this.props.length, prop; i; ){
			prop = this.props[ --i ];
			event[ prop ] = originalEvent[ prop ];
		}
		if ( !event.target )
			event.target = event.srcElement || document;
		if ( event.target.nodeType == 3 )
			event.target = event.target.parentNode;
		if ( !event.relatedTarget && event.fromElement )
			event.relatedTarget = event.fromElement == event.target ? event.toElement : event.fromElement;
		if ( event.pageX == null && event.clientX != null ) {
			var doc = document.documentElement, body = document.body;
			event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc.clientLeft || 0);
			event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc.clientTop || 0);
		}
		if ( !event.which && ((event.charCode || event.charCode === 0) ? event.charCode : event.keyCode) )
			event.which = event.charCode || event.keyCode;
		if ( !event.metaKey && event.ctrlKey )
			event.metaKey = event.ctrlKey;
		if ( !event.which && event.button )
			event.which = (event.button & 1 ? 1 : ( event.button & 2 ? 3 : ( event.button & 4 ? 2 : 0 ) ));
		return event;
	},
	proxy: function( fn, proxy ){
		proxy = proxy || function(){ return fn.apply(this, arguments); };
		proxy.guid = fn.guid = fn.guid || proxy.guid || this.guid++;
		return proxy;
	},
	special: {
		ready: {
			setup: bindReady,
			teardown: function() {}
		}
	},
	specialAll: {
		live: {
			setup: function( selector, namespaces ){
				jQuery.event.add( this, namespaces[0], liveHandler );
			},
			teardown:  function( namespaces ){
				if ( namespaces.length ) {
					var remove = 0, name = RegExp("(^|\\.)" + namespaces[0] + "(\\.|$)");
					jQuery.each( (jQuery.data(this, "events").live || {}), function(){
						if ( name.test(this.type) )
							remove++;
					});
					if ( remove < 1 )
						jQuery.event.remove( this, namespaces[0], liveHandler );
				}
			}
		}
	}
};
jQuery.Event = function( src ){
	if( !this.preventDefault )
		return new jQuery.Event(src);
	if( src && src.type ){
		this.originalEvent = src;
		this.type = src.type;
	}else
		this.type = src;
	this.timeStamp = now();
	this[expando] = true;
};
function returnFalse(){
	return false;
}

function returnTrue(){
	return true;
}

jQuery.Event.prototype = {
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;
		var e = this.originalEvent;
		if( !e )
			return;
		if (e.preventDefault)
			e.preventDefault();
		e.returnValue = false;
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;
		var e = this.originalEvent;
		if( !e )
			return;
		if (e.stopPropagation)
			e.stopPropagation();
		e.cancelBubble = true;
	},
	stopImmediatePropagation:function(){
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};
var withinElement = function(event) {
	var parent = event.relatedTarget;
	while ( parent && parent != this )
		try { parent = parent.parentNode; }
		catch(e) { parent = this; }
	if( parent != this ){
		event.type = event.data;
		jQuery.event.handle.apply( this, arguments );
	}
};
jQuery.each({
	mouseover: 'mouseenter',
	mouseout: 'mouseleave'
}, function( orig, fix ){
	jQuery.event.special[ fix ] = {
		setup: function(){
			jQuery.event.add( this, orig, withinElement, fix );
		},
		teardown: function(){
			jQuery.event.remove( this, orig, withinElement );
		}
	};
});
jQuery.fn.extend({
	bind: function( type, data, fn ) {
		return type == "unloaddisabled" ? this.one(type, data, fn) : this.each(function(){
			jQuery.event.add( this, type, fn || data, fn && data );
		});
	},
	one: function( type, data, fn ) {
		var one = jQuery.event.proxy( fn || data, function(event) {
			jQuery(this).unbind(event, one);
			return (fn || data).apply( this, arguments );
		});
		return this.each(function(){
			jQuery.event.add( this, type, one, fn && data);
		});
	},
	unbind: function( type, fn ) {
		return this.each(function(){
			jQuery.event.remove( this, type, fn );
		});
	},
	trigger: function( type, data ) {
		return this.each(function(){
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		if( this[0] ){
			var event = jQuery.Event(type);
			event.preventDefault();
			event.stopPropagation();
			jQuery.event.trigger( event, data, this[0] );
			return event.result;
		}
	},
	toggle: function( fn ) {
		var args = arguments, i = 1;
		while( i < args.length )
			jQuery.event.proxy( fn, args[i++] );
		return this.click( jQuery.event.proxy( fn, function(event) {
			this.lastToggle = ( this.lastToggle || 0 ) % i;
			event.preventDefault();
			return args[ this.lastToggle++ ].apply( this, arguments ) || false;
		}));
	},
	hover: function(fnOver, fnOut) {
		return this.mouseenter(fnOver).mouseleave(fnOut);
	},
	ready: function(fn) {
		bindReady();
		if ( jQuery.isReady )
			fn.call( document, jQuery );
		else
			jQuery.readyList.push( fn );
		return this;
	},
	live: function( type, fn ){
		var proxy = jQuery.event.proxy( fn );
		proxy.guid += this.selector + type;
		jQuery(document).bind( liveConvert(type, this.selector), this.selector, proxy );
		return this;
	},
	die: function( type, fn ){
		jQuery(document).unbind( liveConvert(type, this.selector), fn ? { guid: fn.guid + this.selector + type } : null );
		return this;
	}
});
function liveHandler( event ){
	var check = RegExp("(^|\\.)" + event.type + "(\\.|$)"),
		stop = true,
		elems = [];
	jQuery.each(jQuery.data(this, "events").live || [], function(i, fn){
		if ( check.test(fn.type) ) {
			var elem = jQuery(event.target).closest(fn.data)[0];
			if ( elem )
				elems.push({ elem: elem, fn: fn });
		}
	});
	elems.sort(function(a,b) {
		return jQuery.data(a.elem, "closest") - jQuery.data(b.elem, "closest");
	});
	jQuery.each(elems, function(){
		if ( this.fn.call(this.elem, event, this.fn.data) === false )
			return (stop = false);
	});
	return stop;
}

function liveConvert(type, selector){
	return ["live", type, selector.replace(/\./g, "`").replace(/ /g, "|")].join(".");
}

jQuery.extend({
	isReady: false,
	readyList: [],
	ready: function() {
		if ( !jQuery.isReady ) {
			jQuery.isReady = true;
			if ( jQuery.readyList ) {
				jQuery.each( jQuery.readyList, function(){
					this.call( document, jQuery );
				});
				jQuery.readyList = null;
			}
			jQuery(document).triggerHandler("ready");
		}
	}
});
var readyBound = false;
function bindReady(){
	if ( readyBound ) return;
	readyBound = true;
	if ( document.addEventListener ) {
		document.addEventListener( "DOMContentLoaded", function(){
			document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
			jQuery.ready();
		}, false );
	} else if ( document.attachEvent ) {
		document.attachEvent("onreadystatechange", function(){
			if ( document.readyState === "complete" ) {
				document.detachEvent( "onreadystatechange", arguments.callee );
				jQuery.ready();
			}
		});
		if ( document.documentElement.doScroll && window == window.top ) (function(){
			if ( jQuery.isReady ) return;
			try {
				document.documentElement.doScroll("left");
			} catch( error ) {
				setTimeout( arguments.callee, 0 );
				return;
			}
			jQuery.ready();
		})();
	}
	jQuery.event.add( window, "loaddisabled", jQuery.ready );
}

jQuery.each( ("blur,focus,loaddisabled,resize,scroll,unloaddisabled,click,dblclick," +
	"mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave," +
	"change,select,submit,keydown,keypress,keyup,error").split(","), function(i, name){
	jQuery.fn[name] = function(fn){
		return fn ? this.bind(name, fn) : this.trigger(name);
	};
});
jQuery( window ).bind( 'unloaddisabled', function(){
	for ( var id in jQuery.cache )
		if ( id != 1 && jQuery.cache[ id ].handle )
			jQuery.event.remove( jQuery.cache[ id ].handle.elem );
});
(function(){
	jQuery.support = {};
	var root = document.documentElement,
		script = document.createElement("script"),
		div = document.createElement("div"),
		id = "script" + (new Date).getTime();
	div.style.display = "none";
	div.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><objectdisabled><param/></object>';
	var all = div.getElementsByTagName("*"),
		a = div.getElementsByTagName("a")[0];
	if ( !all || !all.length || !a ) {
		return;
	}
	jQuery.support = {
		leadingWhitespace: div.firstChild.nodeType == 3,
		tbody: !div.getElementsByTagName("tbody").length,
		objectAll: !!div.getElementsByTagName("object")[0]
			.getElementsByTagName("*").length,
		htmlSerialize: !!div.getElementsByTagName("link").length,
		style: /red/.test( a.getAttribute("style") ),
		hrefNormalized: a.getAttribute("href") === "/a",
		opacity: a.style.opacity === "0.5",
		cssFloat: !!a.style.cssFloat,
		scriptEval: false,
		noCloneEvent: true,
		boxModel: null
	};
	script.type = "text/javascript";
	try {
		script.appendChild( document.createTextNode( "window." + id + "=1;" ) );
	} catch(e){}
	root.insertBefore( script, root.firstChild );
	if ( window[ id ] ) {
		jQuery.support.scriptEval = true;
		delete window[ id ];
	}
	root.removeChild( script );
	if ( div.attachEvent && div.fireEvent ) {
		div.attachEvent("onclick", function(){
			jQuery.support.noCloneEvent = false;
			div.detachEvent("onclick", arguments.callee);
		});
		div.cloneNode(true).fireEvent("onclick");
	}
	jQuery(function(){
		var div = document.createElement("div");
		div.style.width = div.style.paddingLeft = "1px";
		document.body.appendChild( div );
		jQuery.boxModel = jQuery.support.boxModel = div.offsetWidth === 2;
		document.body.removeChild( div ).style.display = 'none';
	});
})();
var styleFloat = jQuery.support.cssFloat ? "cssFloat" : "styleFloat";
jQuery.props = {
	"for": "htmlFor",
	"class": "className",
	"float": styleFloat,
	cssFloat: styleFloat,
	styleFloat: styleFloat,
	readonly: "readOnly",
	maxlength: "maxLength",
	cellspacing: "cellSpacing",
	rowspan: "rowSpan",
	tabindex: "tabIndex"
};
jQuery.fn.extend({
	_loaddisabled: jQuery.fn.loaddisabled,
	loaddisabled: function( url, params, callback ) {
		if ( typeof url !== "string" )
			return this._loaddisabled( url );
		var off = url.indexOf(" ");
		if ( off >= 0 ) {
			var selector = url.slice(off, url.length);
			url = url.slice(0, off);
		}
		var type = "GET";
		if ( params )
			if ( jQuery.isFunction( params ) ) {
				callback = params;
				params = null;
			} else if( typeof params === "object" ) {
				params = jQuery.param( params );
				type = "POST";
			}
		var self = this;
		jQuery.ajax({
			url: url,
			type: type,
			dataType: "html",
			data: params,
			complete: function(res, status){
				if ( status == "success" || status == "notmodified" )
					self.html( selector ?
						jQuery("<div/>")
							.append(res.responseText.replace(/<script(.|\s)*?\/script>/g, ""))
							.find(selector) :
						res.responseText );
				if( callback )
					self.each( callback, [res.responseText, status, res] );
			}
		});
		return this;
	},
	serialize: function() {
		return jQuery.param(this.serializeArray());
	},
	serializeArray: function() {
		return this.map(function(){
			return this.elements ? jQuery.makeArray(this.elements) : this;
		})
		.filter(function(){
			return this.name && !this.disabled &&
				(this.checked || /select|textarea/i.test(this.nodeName) ||
					/text|hidden|password|search/i.test(this.type));
		})
		.map(function(i, elem){
			var val = jQuery(this).val();
			return val == null ? null :
				jQuery.isArray(val) ?
					jQuery.map( val, function(val, i){
						return {name: elem.name, value: val};
					}) :
					{name: elem.name, value: val};
		}).get();
	}
});
jQuery.each( "ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function(i,o){
	jQuery.fn[o] = function(f){
		return this.bind(o, f);
	};
});
var jsc = now();
jQuery.extend({
	get: function( url, data, callback, type ) {
		if ( jQuery.isFunction( data ) ) {
			callback = data;
			data = null;
		}
		return jQuery.ajax({
			type: "GET",
			url: url,
			data: data,
			success: callback,
			dataType: type,
			cache: true
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
		xhr:function(){
			return window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
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
	ajax: function( s ) {
		s = jQuery.extend(true, s, jQuery.extend(true, {}, jQuery.ajaxSettings, s));
		var jsonp, jsre = /=\?(&|$)/g, status, data,
			type = s.type.toUpperCase();
		if ( s.data && s.processData && typeof s.data !== "string" )
			s.data = jQuery.param(s.data);
		if ( s.dataType == "jsonp" ) {
			if ( type == "GET" ) {
				if ( !s.url.match(jsre) )
					s.url += (s.url.match(/\?/) ? "&" : "?") + (s.jsonp || "callback") + "=?";
			} else if ( !s.data || !s.data.match(jsre) )
				s.data = (s.data ? s.data + "&" : "") + (s.jsonp || "callback") + "=?";
			s.dataType = "json";
		}
		if ( s.dataType == "json" && (s.data && s.data.match(jsre) || s.url.match(jsre)) ) {
			jsonp = "jsonp" + jsc++;
			if ( s.data )
				s.data = (s.data + "").replace(jsre, "=" + jsonp + "$1");
			s.url = s.url.replace(jsre, "=" + jsonp + "$1");
			s.dataType = "script";
			window[ jsonp ] = function(tmp){
				data = tmp;
				success();
				complete();
				window[ jsonp ] = undefined;
				try{ delete window[ jsonp ]; } catch(e){}
				if ( head )
					head.removeChild( script );
			};
		}
		if ( s.dataType == "script" && s.cache == null )
			s.cache = false;
		if ( s.cache === false && type == "GET" ) {
			var ts = now();
			var ret = s.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + ts + "$2");
			s.url = ret + ((ret == s.url) ? (s.url.match(/\?/) ? "&" : "?") + "_=" + ts : "");
		}
		if ( s.data && type == "GET" ) {
			s.url += (s.url.match(/\?/) ? "&" : "?") + s.data;
			s.data = null;
		}
		if ( s.global && ! jQuery.active++ )
			jQuery.event.trigger( "ajaxStart" );
		var parts = /^(\w+:)?\/\/([^\/?#]+)/.exec( s.url );
		if ( s.dataType == "script" && type == "GET" && (jQuery.browser.opera) ||
			(parts && ( parts[1] && parts[1] != location.protocol || parts[2] != location.host ))){
			var head = document.getElementsByTagName("head")[0];
			var script = document.createElement("script");
			script.src = s.url;
			if (s.scriptCharset)
				script.charset = s.scriptCharset;
			if ( !jsonp ) {
				var done = false;
				script.onloaddisabled = script.onreadystatechange = function(){
					if ( !done && (!this.readyState ||
							this.readyState == "loaddisableded" || this.readyState == "complete") ) {
						done = true;
						success();
						complete();
						script.onloaddisabled = script.onreadystatechange = null;
						try { head.removeChild( script ); } catch(e) { }
					}
				};
			}
			head.appendChild(script);
			return undefined;
		}
		var requestDone = false;
		var xhr = s.xhr();
		if( s.username )
			void(type, s.url, s.async, s.username, s.password);
		else
			void(type, s.url, s.async);
		try {
			if ( s.data )
				xhr.setRequestHeader("Content-Type", s.contentType);
			if ( s.ifModified )
				xhr.setRequestHeader("If-Modified-Since",
					jQuery.lastModified[s.url] || "Thu, 01 Jan 1970 00:00:00 GMT" );
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			xhr.setRequestHeader("Accept", s.dataType && s.accepts[ s.dataType ] ?
				s.accepts[ s.dataType ] + ", */*" :
				s.accepts._default );
		} catch(e){}
		if ( s.beforeSend && s.beforeSend(xhr, s) === false ) {
			if ( s.global && ! --jQuery.active )
				jQuery.event.trigger( "ajaxStop" );
			xhr.abort();
			return false;
		}
		if ( s.global )
			jQuery.event.trigger("ajaxSend", [xhr, s]);
		var onreadystatechange = function(isTimeout){
			if (xhr.readyState == 0) {
				if (ival) {
					clearInterval(ival);
					ival = null;
					if ( s.global && ! --jQuery.active )
						jQuery.event.trigger( "ajaxStop" );
				}
			} else if ( !requestDone && xhr && (xhr.readyState == 4 || isTimeout == "timeout") ) {
				requestDone = true;
				if (ival) {
					clearInterval(ival);
					ival = null;
				}
				status = isTimeout == "timeout" ? "timeout" :
					!jQuery.httpSuccess( xhr ) ? "error" :
					s.ifModified && jQuery.httpNotModified( xhr, s.url ) ? "notmodified" :
					"success";
				if ( status == "success" ) {
					try {
						data = jQuery.httpData( xhr, s.dataType, s );
					} catch(e) {
						status = "parsererror";
					}
				}
				if ( status == "success" ) {
					var modRes;
					try {
						modRes = xhr.getResponseHeader("Last-Modified");
					} catch(e) {}
					if ( s.ifModified && modRes )
						jQuery.lastModified[s.url] = modRes;
					if ( !jsonp )
						success();
				} else
					jQuery.handleError(s, xhr, status);
				complete();
				if ( isTimeout )
					xhr.abort();
				if ( s.async )
					xhr = null;
			}
		};
		if ( s.async ) {
			var ival = setInterval(onreadystatechange, 13);
			if ( s.timeout > 0 )
				setTimeout(function(){
					if ( xhr && !requestDone )
						onreadystatechange( "timeout" );
				}, s.timeout);
		}
		try {
			xhr.send(s.data);
		} catch(e) {
			jQuery.handleError(s, xhr, null, e);
		}
		if ( !s.async )
			onreadystatechange();
		function success(){
			if ( s.success )
				s.success( data, status );
			if ( s.global )
				jQuery.event.trigger( "ajaxSuccess", [xhr, s] );
		}
		function complete(){
			if ( s.complete )
				s.complete(xhr, status);
			if ( s.global )
				jQuery.event.trigger( "ajaxComplete", [xhr, s] );
			if ( s.global && ! --jQuery.active )
				jQuery.event.trigger( "ajaxStop" );
		}
		return xhr;
	},
	handleError: function( s, xhr, status, e ) {
		if ( s.error ) s.error( xhr, status, e );
		if ( s.global )
			jQuery.event.trigger( "ajaxError", [xhr, s, e] );
	},
	active: 0,
	httpSuccess: function( xhr ) {
		try {
			return !xhr.status && location.protocol == "file:" ||
				( xhr.status >= 200 && xhr.status < 300 ) || xhr.status == 304 || xhr.status == 1223;
		} catch(e){}
		return false;
	},
	httpNotModified: function( xhr, url ) {
		try {
			var xhrRes = xhr.getResponseHeader("Last-Modified");
			return xhr.status == 304 || xhrRes == jQuery.lastModified[url];
		} catch(e){}
		return false;
	},
	httpData: function( xhr, type, s ) {
		var ct = xhr.getResponseHeader("content-type"),
			xml = type == "xml" || !type && ct && ct.indexOf("xml") >= 0,
			data = xml ? xhr.responseXML : xhr.responseText;
		if ( xml && data.documentElement.tagName == "parsererror" )
			throw "parsererror";
		if( s && s.dataFilter )
			data = s.dataFilter( data, type );
		if( typeof data === "string" ){
			if ( type == "script" )
				jQuery.globalEval( data );
			if ( type == "json" )
				data = window["eval"]("(" + data + ")");
		}
		return data;
	},
	param: function( a ) {
		var s = [ ];
		function add( key, value ){
			s[ s.length ] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
		};
		if ( jQuery.isArray(a) || a.jquery )
			jQuery.each( a, function(){
				add( this.name, this.value );
			});
		else
			for ( var j in a )
				if ( jQuery.isArray(a[j]) )
					jQuery.each( a[j], function(){
						add( j, this );
					});
				else
					add( j, jQuery.isFunction(a[j]) ? a[j]() : a[j] );
		return s.join("&").replace(/%20/g, "+");
	}
});
var elemdisplay = {},
	timerId,
	fxAttrs = [
		[ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],
		[ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],
		[ "opacity" ]
	];
function genFx( type, num ){
	var obj = {};
	jQuery.each( fxAttrs.concat.apply([], fxAttrs.slice(0,num)), function(){
		obj[ this ] = type;
	});
	return obj;
}

jQuery.fn.extend({
	show: function(speed,callback){
		if ( speed ) {
			return this.animate( genFx("show", 3), speed, callback);
		} else {
			for ( var i = 0, l = this.length; i < l; i++ ){
				var old = jQuery.data(this[i], "olddisplay");
				this[i].style.display = old || "";
				if ( jQuery.css(this[i], "display") === "none" ) {
					var tagName = this[i].tagName, display;
					if ( elemdisplay[ tagName ] ) {
						display = elemdisplay[ tagName ];
					} else {
						var elem = jQuery("<" + tagName + " />").appendTo("body");
						display = elem.css("display");
						if ( display === "none" )
							display = "block";
						elem.remove();
						elemdisplay[ tagName ] = display;
					}
					jQuery.data(this[i], "olddisplay", display);
				}
			}
			for ( var i = 0, l = this.length; i < l; i++ ){
				this[i].style.display = jQuery.data(this[i], "olddisplay") || "";
			}
			return this;
		}
	},
	hide: function(speed,callback){
		if ( speed ) {
			return this.animate( genFx("hide", 3), speed, callback);
		} else {
			for ( var i = 0, l = this.length; i < l; i++ ){
				var old = jQuery.data(this[i], "olddisplay");
				if ( !old && old !== "none" )
					jQuery.data(this[i], "olddisplay", jQuery.css(this[i], "display"));
			}
			for ( var i = 0, l = this.length; i < l; i++ ){
				this[i].style.display = "none";
			}
			return this;
		}
	},
	_toggle: jQuery.fn.toggle,
	toggle: function( fn, fn2 ){
		var bool = typeof fn === "boolean";
		return jQuery.isFunction(fn) && jQuery.isFunction(fn2) ?
			this._toggle.apply( this, arguments ) :
			fn == null || bool ?
				this.each(function(){
					var state = bool ? fn : jQuery(this).is(":hidden");
					jQuery(this)[ state ? "show" : "hide" ]();
				}) :
				this.animate(genFx("toggle", 3), fn, fn2);
	},
	fadeTo: function(speed,to,callback){
		return this.animate({opacity: to}, speed, callback);
	},
	animate: function( prop, speed, easing, callback ) {
		var optall = jQuery.speed(speed, easing, callback);
		return this[ optall.queue === false ? "each" : "queue" ](function(){
			var opt = jQuery.extend({}, optall), p,
				hidden = this.nodeType == 1 && jQuery(this).is(":hidden"),
				self = this;
			for ( p in prop ) {
				if ( prop[p] == "hide" && hidden || prop[p] == "show" && !hidden )
					return opt.complete.call(this);
				if ( ( p == "height" || p == "width" ) && this.style ) {
					opt.display = jQuery.css(this, "display");
					opt.overflow = this.style.overflow;
				}
			}
			if ( opt.overflow != null )
				this.style.overflow = "hidden";
			opt.curAnim = jQuery.extend({}, prop);
			jQuery.each( prop, function(name, val){
				var e = new jQuery.fx( self, opt, name );
				if ( /toggle|show|hide/.test(val) )
					e[ val == "toggle" ? hidden ? "show" : "hide" : val ]( prop );
				else {
					var parts = val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),
						start = e.cur(true) || 0;
					if ( parts ) {
						var end = parseFloat(parts[2]),
							unit = parts[3] || "px";
						if ( unit != "px" ) {
							self.style[ name ] = (end || 1) + unit;
							start = ((end || 1) / e.cur(true)) * start;
							self.style[ name ] = start + unit;
						}
						if ( parts[1] )
							end = ((parts[1] == "-=" ? -1 : 1) * end) + start;
						e.custom( start, end, unit );
					} else
						e.custom( start, val, "" );
				}
			});
			return true;
		});
	},
	stop: function(clearQueue, gotoEnd){
		var timers = jQuery.timers;
		if (clearQueue)
			this.queue([]);
		this.each(function(){
			for ( var i = timers.length - 1; i >= 0; i-- )
				if ( timers[i].elem == this ) {
					if (gotoEnd)
						timers[i](true);
					timers.splice(i, 1);
				}
		});
		if (!gotoEnd)
			this.dequeue();
		return this;
	}
});
jQuery.each({
	slideDown: genFx("show", 1),
	slideUp: genFx("hide", 1),
	slideToggle: genFx("toggle", 1),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" }
}, function( name, props ){
	jQuery.fn[ name ] = function( speed, callback ){
		return this.animate( props, speed, callback );
	};
});
jQuery.extend({
	speed: function(speed, easing, fn) {
		var opt = typeof speed === "object" ? speed : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			jQuery.fx.speeds[opt.duration] || jQuery.fx.speeds._default;
		opt.old = opt.complete;
		opt.complete = function(){
			if ( opt.queue !== false )
				jQuery(this).dequeue();
			if ( jQuery.isFunction( opt.old ) )
				opt.old.call( this );
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
	fx: function( elem, options, prop ){
		this.options = options;
		this.elem = elem;
		this.prop = prop;
		if ( !options.orig )
			options.orig = {};
	}
});
jQuery.fx.prototype = {
	update: function(){
		if ( this.options.step )
			this.options.step.call( this.elem, this.now, this );
		(jQuery.fx.step[this.prop] || jQuery.fx.step._default)( this );
		if ( ( this.prop == "height" || this.prop == "width" ) && this.elem.style )
			this.elem.style.display = "block";
	},
	cur: function(force){
		if ( this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null) )
			return this.elem[ this.prop ];
		var r = parseFloat(jQuery.css(this.elem, this.prop, force));
		return r && r > -10000 ? r : parseFloat(jQuery.curCSS(this.elem, this.prop)) || 0;
	},
	custom: function(from, to, unit){
		this.startTime = now();
		this.start = from;
		this.end = to;
		this.unit = unit || this.unit || "px";
		this.now = this.start;
		this.pos = this.state = 0;
		var self = this;
		function t(gotoEnd){
			return self.step(gotoEnd);
		}
		t.elem = this.elem;
		if ( t() && jQuery.timers.push(t) && !timerId ) {
			timerId = setInterval(function(){
				var timers = jQuery.timers;
				for ( var i = 0; i < timers.length; i++ )
					if ( !timers[i]() )
						timers.splice(i--, 1);
				if ( !timers.length ) {
					clearInterval( timerId );
					timerId = undefined;
				}
			}, 13);
		}
	},
	show: function(){
		this.options.orig[this.prop] = jQuery.attr( this.elem.style, this.prop );
		this.options.show = true;
		this.custom(this.prop == "width" || this.prop == "height" ? 1 : 0, this.cur());
		jQuery(this.elem).show();
	},
	hide: function(){
		this.options.orig[this.prop] = jQuery.attr( this.elem.style, this.prop );
		this.options.hide = true;
		this.custom(this.cur(), 0);
	},
	step: function(gotoEnd){
		var t = now();
		if ( gotoEnd || t >= this.options.duration + this.startTime ) {
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();
			this.options.curAnim[ this.prop ] = true;
			var done = true;
			for ( var i in this.options.curAnim )
				if ( this.options.curAnim[i] !== true )
					done = false;
			if ( done ) {
				if ( this.options.display != null ) {
					this.elem.style.overflow = this.options.overflow;
					this.elem.style.display = this.options.display;
					if ( jQuery.css(this.elem, "display") == "none" )
						this.elem.style.display = "block";
				}
				if ( this.options.hide )
					jQuery(this.elem).hide();
				if ( this.options.hide || this.options.show )
					for ( var p in this.options.curAnim )
						jQuery.attr(this.elem.style, p, this.options.orig[p]);
				this.options.complete.call( this.elem );
			}
			return false;
		} else {
			var n = t - this.startTime;
			this.state = n / this.options.duration;
			this.pos = jQuery.easing[this.options.easing || (jQuery.easing.swing ? "swing" : "linear")](this.state, n, 0, 1, this.options.duration);
			this.now = this.start + ((this.end - this.start) * this.pos);
			this.update();
		}
		return true;
	}
};
jQuery.extend( jQuery.fx, {
	speeds:{
		slow: 600,
 		fast: 200,
 		_default: 400
	},
	step: {
		opacity: function(fx){
			jQuery.attr(fx.elem.style, "opacity", fx.now);
		},
		_default: function(fx){
			if ( fx.elem.style && fx.elem.style[ fx.prop ] != null )
				fx.elem.style[ fx.prop ] = fx.now + fx.unit;
			else
				fx.elem[ fx.prop ] = fx.now;
		}
	}
});
if ( document.documentElement["getBoundingClientRect"] )
	jQuery.fn.offset = function() {
		if ( !this[0] ) return { top: 0, left: 0 };
		if ( this[0] === this[0].ownerDocument.body ) return jQuery.offset.bodyOffset( this[0] );
		var box  = this[0].getBoundingClientRect(), doc = this[0].ownerDocument, body = doc.body, docElem = doc.documentElement,
			clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
			top  = box.top  + (self.pageYOffset || jQuery.boxModel && docElem.scrollTop  || body.scrollTop ) - clientTop,
			left = box.left + (self.pageXOffset || jQuery.boxModel && docElem.scrollLeft || body.scrollLeft) - clientLeft;
		return { top: top, left: left };
	};
else
	jQuery.fn.offset = function() {
		if ( !this[0] ) return { top: 0, left: 0 };
		if ( this[0] === this[0].ownerDocument.body ) return jQuery.offset.bodyOffset( this[0] );
		jQuery.offset.initialized || jQuery.offset.initialize();
		var elem = this[0], offsetParent = elem.offsetParent, prevOffsetParent = elem,
			doc = elem.ownerDocument, computedStyle, docElem = doc.documentElement,
			body = doc.body, defaultView = doc.defaultView,
			prevComputedStyle = defaultView.getComputedStyle(elem, null),
			top = elem.offsetTop, left = elem.offsetLeft;
		while ( (elem = elem.parentNode) && elem !== body && elem !== docElem ) {
			computedStyle = defaultView.getComputedStyle(elem, null);
			top -= elem.scrollTop, left -= elem.scrollLeft;
			if ( elem === offsetParent ) {
				top += elem.offsetTop, left += elem.offsetLeft;
				if ( jQuery.offset.doesNotAddBorder && !(jQuery.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(elem.tagName)) )
					top  += parseInt( computedStyle.borderTopWidth,  10) || 0,
					left += parseInt( computedStyle.borderLeftWidth, 10) || 0;
				prevOffsetParent = offsetParent, offsetParent = elem.offsetParent;
			}
			if ( jQuery.offset.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" )
				top  += parseInt( computedStyle.borderTopWidth,  10) || 0,
				left += parseInt( computedStyle.borderLeftWidth, 10) || 0;
			prevComputedStyle = computedStyle;
		}
		if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" )
			top  += body.offsetTop,
			left += body.offsetLeft;
		if ( prevComputedStyle.position === "fixed" )
			top  += Math.max(docElem.scrollTop, body.scrollTop),
			left += Math.max(docElem.scrollLeft, body.scrollLeft);
		return { top: top, left: left };
	};
jQuery.offset = {
	initialize: function() {
		if ( this.initialized ) return;
		var body = document.body, container = document.createElement('div'), innerDiv, checkDiv, table, td, rules, prop, bodyMarginTop = body.style.marginTop,
			html = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
		rules = { position: 'absolute', top: 0, left: 0, margin: 0, border: 0, width: '1px', height: '1px', visibility: 'hidden' };
		for ( prop in rules ) container.style[prop] = rules[prop];
		container.innerHTML = html;
		body.insertBefore(container, body.firstChild);
		innerDiv = container.firstChild, checkDiv = innerDiv.firstChild, td = innerDiv.nextSibling.firstChild.firstChild;
		this.doesNotAddBorder = (checkDiv.offsetTop !== 5);
		this.doesAddBorderForTableAndCells = (td.offsetTop === 5);
		innerDiv.style.overflow = 'hidden', innerDiv.style.position = 'relative';
		this.subtractsBorderForOverflowNotVisible = (checkDiv.offsetTop === -5);
		body.style.marginTop = '1px';
		this.doesNotIncludeMarginInBodyOffset = (body.offsetTop === 0);
		body.style.marginTop = bodyMarginTop;
		body.removeChild(container);
		this.initialized = true;
	},
	bodyOffset: function(body) {
		jQuery.offset.initialized || jQuery.offset.initialize();
		var top = body.offsetTop, left = body.offsetLeft;
		if ( jQuery.offset.doesNotIncludeMarginInBodyOffset )
			top  += parseInt( jQuery.curCSS(body, 'marginTop',  true), 10 ) || 0,
			left += parseInt( jQuery.curCSS(body, 'marginLeft', true), 10 ) || 0;
		return { top: top, left: left };
	}
};
jQuery.fn.extend({
	position: function() {
		var left = 0, top = 0, results;
		if ( this[0] ) {
			var offsetParent = this.offsetParent(),
			offset       = this.offset(),
			parentOffset = /^body|html$/i.test(offsetParent[0].tagName) ? { top: 0, left: 0 } : offsetParent.offset();
			offset.top  -= num( this, 'marginTop'  );
			offset.left -= num( this, 'marginLeft' );
			parentOffset.top  += num( offsetParent, 'borderTopWidth'  );
			parentOffset.left += num( offsetParent, 'borderLeftWidth' );
			results = {
				top:  offset.top  - parentOffset.top,
				left: offset.left - parentOffset.left
			};
		}
		return results;
	},
	offsetParent: function() {
		var offsetParent = this[0].offsetParent || document.body;
		while ( offsetParent && (!/^body|html$/i.test(offsetParent.tagName) && jQuery.css(offsetParent, 'position') == 'static') )
			offsetParent = offsetParent.offsetParent;
		return jQuery(offsetParent);
	}
});
jQuery.each( ['Left', 'Top'], function(i, name) {
	var method = 'scroll' + name;
	jQuery.fn[ method ] = function(val) {
		if (!this[0]) return null;
		return val !== undefined ?
			this.each(function() {
				this == window || this == document ?
					window.scrollTo(
						!i ? val : jQuery(window).scrollLeft(),
						 i ? val : jQuery(window).scrollTop()
					) :
					this[ method ] = val;
			}) :
			this[0] == window || this[0] == document ?
				self[ i ? 'pageYOffset' : 'pageXOffset' ] ||
					jQuery.boxModel && document.documentElement[ method ] ||
					document.body[ method ] :
				this[0][ method ];
	};
});
jQuery.each([ "Height", "Width" ], function(i, name){
	var tl = i ? "Left"  : "Top",
		br = i ? "Right" : "Bottom",
		lower = name.toLowerCase();
	jQuery.fn["inner" + name] = function(){
		return this[0] ?
			jQuery.css( this[0], lower, false, "padding" ) :
			null;
	};
	jQuery.fn["outer" + name] = function(margin) {
		return this[0] ?
			jQuery.css( this[0], lower, false, margin ? "margin" : "border" ) :
			null;
	};
	var type = name.toLowerCase();
	jQuery.fn[ type ] = function( size ) {
		return this[0] == window ?
			document.compatMode == "CSS1Compat" && document.documentElement[ "client" + name ] ||
			document.body[ "client" + name ] :
			this[0] == document ?
				Math.max(
					document.documentElement["client" + name],
					document.body["scroll" + name], document.documentElement["scroll" + name],
					document.body["offset" + name], document.documentElement["offset" + name]
				) :
				size === undefined ?
					(this.length ? jQuery.css( this[0], type ) : null) :
					this.css( type, typeof size === "string" ? size : size + "px" );
	};
});
})();
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
(function($){
$.bind = function(object, method){
    var args = Array.prototype.slice.call(arguments, 2);
    return function() {
        var args2 = (this===window?[]:[this]).concat(args, $.makeArray( arguments ));
        return method.apply(object, args2);
    };
};
})(jQuery);
Function.prototype.bind = function(object) {
    return $.bind(object, this);
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
    $(window).data('begin-ts', new Date()*1);
    var baseWidth = $('#buster').length ? 1160 : ($('#megabuster').length ? 1180 : 1240);
    if ($('body.hasSitebar').length) { baseWidth = 9999; }
    window.bodyElement = $('body');
    $(window).resize(function() {
        var sizeClass = $(window).width()>=1+baseWidth+(window.bodyElement.hasClass('centered')?1:0) ? 'size-big' : 'size-small';
        if (window.sizeClass == sizeClass) { return; }
        window.sizeClass = sizeClass;
        window.bodyElement.removeClass('size-big size-small')
                          .addClass(sizeClass);
        $('#headerNav li, #searchFav li').removeClass('last');
        $('#headerNav li').filter(function() { return $(this).css('display')!='none'; }).filter(':last').addClass('last');
        $('#searchFav li').filter(function() { return $(this).css('display')!='none'; }).filter(':last').addClass('last');
        window.setTimeout(organiseFooternav, 1);
        if ($.ua.browser.msie && $('#buster').length) {
            $('.channels .halfTeaser .modulePart').css({height:'120px'});
            window.setTimeout(function() { $('.channels .halfTeaser .modulePart').css({height:''}); }, 1);
        }
    }).resize();
    $.elementReady('content', function() { window.sizeClass=''; $(window).resize(); });
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
    voidLoginbox = 'freemail';
    if (window.bodyElement.hasClass('login-promail')) {voidLoginbox = 'promail'; }
    if (window.bodyElement.hasClass('login-topmail')) {voidLoginbox = 'topmail'; }
    switch ($.url.params['login']) {
        case 'freemail':
        case 'promail':
        case 'topmail':
           voidLoginbox = $.url.params['login'];
            window.bodyElement.removeClass('login-freemail login-promail login-topmail').addClass('login-'voidLoginbox);
            break;
    }
    switch ($.url.params['status']) {
        case '404':
        case 'hinweis':
            window.bodyElement.addClass('message-status status-'+$.url.params['status']);
            break;
        case 'login-failed':
            window.bodyElement.addClass('message-status status-'+$.url.params['status']+' login-failed-'voidLoginbox);
            break;
    }
    if voidLoginbox) {
        $(function() {
            $('#loginbox form input.field').defaultValue('defaultValue');
            $('#loginbox-'voidLoginbox+' h3 a').click();
        });
    }
    $.elementReady('loginbox-bottom', function() {
        window.bodyElement.removeClass('login-freemail login-promail login-topmail');
        $('#loginbox form fieldset').append('<input type="hidden" name="jsenabled" value="true"/>');
        $('#loginbox .drawer form li.last a').click(switchSSL);
    });
    $.getScript(
        '//fips.uimserv.net/ngvar.js',
        function() { $.elementReady('loginbox-bottom', function() {
            $('#loginbox form fieldset input[name=uinguserid]').remove();
            $('#loginbox form fieldset').append('<input type="hidden" name="uinguserid" value="'+window.UI_nguserid+'"/>');
        })}
    );
    $.elementReady('inpSearchText', function() { $('#inpSearchText').defaultValue('defaultValue'); });
    if ($.ua.browser.msie==6) {
        try { document.execCommand('BackgroundImageCache', false, true); } catch(e) {}
    }
    $.elementReady('loginbox-bottom', function() {
        $('#loginbox form').submit(setLoginCookie);
    });
    Region.register(AdvConfig, AdvConfig.setRegion);
    Region.setRegion(window.targetRegion);
    $('[data-popup-name] a:not([data-popup-disabled]), [data-popup-style] a:not([data-popup-disabled]), a[data-popup-name], a[data-popup-style]').live('click', function() {
        if ($(this).attr('data-popup-disabled') !== undefined) { return; }
        var root = $(this).parents().andSelf().filter('[data-popup-name], [data-popup-style]');
        return portalPopup(addSession(this.href), root.attr('data-popup-name')||'win', root.attr('data-popup-style')||null, false);
    });
}

function homepageEnd() {
    $('#sitebar').height(Math.max($('#content').height(), $('#sitebar').height()));
    $('#headerContent .description').appendTo('#footerInformation');
    window.setTimeout(function() { horoscopeTicker(); }, 500);
    window.setTimeout(function() { searchFavBlinker(); }, 1500);
    $('#searches a').click(function() { directSearch(this); });
    Drawer.init();
    $('#sitebar').height(Math.max($('#content').height(), $('.uim').height(), $('#sitebar').height()));
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
    sitestatInit();
    if (!$('#loginbox .loggedin').length) {
        Econda.run();
    }
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
    if (link.target) {
        void(url, link.target);
    } else {
        if ($.ua.browser.firefox && $.isFunction(document.documentElement.onclick)) {
            document.documentElement.onclick = function(o) { return function(event) {
                if (o) { o(event); }
                location.href = url;
            }}(document.documentElement.onclick);
        } else {
            location.href = url;
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
    if ($('#navigation #navSpecial').prev('div:last').offset().top < $('#navigation #navSpecial').offset().top) {
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
                <div class="email"><span>Zum E-Mail Login</span></div>\
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
        this.hideFlash = $('#features object:visible, #features embed:visible, .channels object:visible, .channels embed:visible').css('visibility', 'hidden');
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
            $('a', self.listContainer).each(function() { appendHashToLink(this, '#.00000001'); });
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
        if ($('#loginbox .modulePart.active').length) { return; }
        $('#loginbox .part1 h3 a').click();
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
    if ($('#buster, #megabuster').length) { return; }
    var isKnown = getCompactCookie('base').get['visits'] || 0;
    setCompactCookie('base', 'visits', +isKnown+1);
    if (isKnown) { return; }
    createToppromo(
        'headerNavEMail',
        '//img.ui-portal.de/gmx/hp09/ads/freemail_promo_2010_bg.jpg',
        '//service.gmx.net/de/cgi/g.fcgi/products/mail/overview?mc=fm@hp@nocookie.fm',
        'Ihr E-Mail-Postfach mit viel Speicherplatz, 5 E-Mail-Adressen und h&ouml;chsten Sicherheitsstandards. Ebenso kostenlos: 10 SMS/Monat!',
        {'left':'210px', 'top':'31px', 'width':'420px', 'color':'#114DA1'}
    );
}

function searchFavMark(mark, unmark) {
    searchFavMark.mark = mark;
    searchFavMark.unmark = unmark;
    searchFavMark.fx.run();
}

searchFavMark.fx = $.classyFX({
    selector: '#searchFav[step] .marking',
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

Drawer = new function() {
    this.fx = $.classyFX({
        selector: 'body[-step]',
        steps: 10,
        ms: 30,
        before: function() {
            Drawer.sliding = true;
            this.box.drawer.active.addClass('activate').find('.drawer').css('display', '');
            this.box.drawer.lastactive.removeClass('active activate').addClass('deactivate');
            this.box.drawer.step = 1;
        }.bind(this),
        after: function() {
            Drawer.sliding = false;
            this.box.drawer.active.removeClass('activate deactivate').addClass('active');
            this.box.drawer.lastactive.removeClass('active activate deactivate')
            if (this.box.drawer.lastactive.get(0) !== document) {
                this.box.drawer.lastactive.find('.drawer').css('display', 'none');
            }
        }.bind(this)
    });
    this.init = function(box) {
        var box = box;
        if (!box) { box = $.unique($('.drawer').parent().parent())[0]; }
        if (!box) { return; }
        box.drawer = this;
        this.box = box;
        this.active = $('.active', box);
        $('h3 a', this.box).each(function() {
            this.box = box;
            this.drawer = $(this).parent().parent();
            this.toggle = this.box.drawer.toggle;
        }).click(function(evt) {
            $(this).blur();
            this.toggle(evt, {data: box});
        });
        $('#loginbox-bottom').click(function() { $('#loginbox-bestprice:not(.active) a').click(); });
    };
    this.toggle = function(evt) {
        evt.preventDefault();
        if (Drawer.sliding) { return; }
        this.box.drawer.lastactive = this.box.drawer.active;
        this.box.drawer.active = (this.drawer[0] == this.box.drawer.active[0] ? $([]) : this.drawer);
        Drawer.fx.options.parent = $(this.box);
        Drawer.fx.run();
    };
}

function setLoginCookie() {
    $.cookie.set('loginTime', new Date().getTime(), null, '/', '.gmx.net');
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
        y: advPageBackground.backgroundSkyAttach ? ($('#advSpecialMain .sky').offset().top-$('#wrapper').offset().top)+advPageBackground.backgroundYPosition : advPageBackground.backgroundYPosition
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
    e.stopPropagation();
    var form = $(this).parents('form');
    var formurl = $.url(form.attr('action'));
    var SSL = (/Mit/.test($(this).text()))
    $(this).text((SSL ? 'Ohne SSL' : 'Mit SSL'));
    formurl.protocol = (SSL ? 'https:' : 'http:');
    form.attr('action', formurl.toString());
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
        '<li><a href="javascript:document.body.style.behavior=\'url(#default#homepage)\'; document.body.setHomePage(\'http://www.gmx.net/?kid=A1000000\');"><span>GMX als Startseite</span></a></li>'
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
    this.titles    = [
        '',
        'sonnig',
        'heiter',
        'wolkig',
        'bedeckt',
        'stark bewlkt',
        'Regenschauer',
        'Regen',
        'Gewitter',
        'Schneeschauer',
        'Schneefall',
        'Schneeregen',
        'Nebel',
        'in Wolken',
        'Spr hregen'
    ];
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
        this.root = $('#weather');
        if (!this.root.length) { return; }
        this.module = $('.module>div:first', this.root);
        this.currentItem = $('ul li.city', this.root);
        this.currentCity = $('.city', this.currentItem);
        this.currentTemp = $('.temp', this.currentItem);
        this.tomorrowTemp = $('ul li.tomorrow .temp', this.root);
        this.dayAfterTemp = $('ul li.dayAfter .temp', this.root);
        this.currentLinks = $('ul li:lt(3) a', this.root).add($('a.more', this.root));
        this.currentPicked = this.picker = $('#doesNotExist');
        this.run();
    }
    this.setRegion = function(region) {
        this.init(region);
    }
    this.loaddisabledData = function() {
        var self = this;
        $.getScript(
            '/jsonwetter.js',
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
        this.currentItem.attr('title', data[0]+': '+data[2]+' C, '+this.titles[data[1]]);
        this.currentCity.html(this.normalizeCity(data[0]));
        this.currentPicked.html(data[0]);
        this.currentTemp.text(data[2]+' C');
        this.tomorrowTemp.text(data[3]+'');
        this.dayAfterTemp.text(data[4]+'');
        this.currentLinks.attr('href', '//gmx.wetternet.de/cgi-bin/gmx/wetter_stadt.pl?ID='+this.weatherId);
        $('a', this.root).each(function() { appendHashToLink(this, '#.00000001'); });
    }
    this.normalizeCity = function(city) {
        if (city.length > 12) {
            city = city.substring(0, 10)
                 + ((city.substring(10, 1)==' ' || city.substring(10, 1)=='-') ? city.substring(10, 1) : '')
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
            self.weatherId = $(e.target).closest('li').data('weatherid');
            self.closePicker();
            self.run();
        });
        this.picker = $('#weatherPicker', $('ul li.city', this.root).append(pickerObj));
        this.currentPicked = $('ul li.city .selected span', this.root).html(this.data[this.defaultId][0]);
        this.weatherInitialized = true;
    }
    voidPicker = function() {
        this.picker.parent().addClass('pickerOpen');
    }
    this.closePicker = function() {
        this.picker.parent().removeClass('pickerOpen');
    }
    Region.register(this, this.setRegion);
};
(function($) {
window.cc = function(link, options) {
    if (!$.cookie.get('ns_sample')) {
        /([^.]+\.[^.]+)$/.exec(location.hostname);
        $.cookie.set('ns_sample', (Math.random()*100|0), '2y', '/', '.'+RegExp.$1);
    }
    if ($.inArray($.cookie.getInt('ns_sample', -1), cc.slices) == -1) { return true; }
    var opts = {
        'hp_cll': cc.cllfilter($(link).parents(cc.cllNoHeader).length ? $(link).text() : $(link).parents(':has(h3):first').find('h3').text()),
        'hp_ctype': ($(link).is('form') ? 'form' : ($(link).filter(':contains(img)').length == 0 ? 'text' : 'bild')),
        'ns__t': (new Date()*1)
    };
    var cla = ($(link).parents(cc.claIDs).attr('id') || 'sonstige').toLowerCase(), pos, cid;
    if (cla === 'sitebar') {
        /(top(searches|articles|videos|slideshows))/.exec($(link).parents('div[class^=top]').attr('class'));
        cla = RegExp.$1;
    }
    if ($(link).parent('h1').parent('#headerContent').length) { cla = opts['hp_cll'] = 'logo'; }
    if ($(link).parents('.channel').length) {
        var ch = $(link).parents('.channel');
        cla = 'channel-'+(ch.find('h2').text() || '').toLowerCase();
        pos = (ch.parent().attr('class') || '').replace(/\D/g, '');
    }
    cid = /(\/|%2F)(\d[0-9a-z]+)(\-|\.html|$)/i.test($(link).attr('href') || '') && parseInt(RegExp.$2, 36);
    var su = $('[name=su]', link).val();
    if (/(channel\-|featurednews|top(articles|videos|slideshows))/.test(cla)) { opts['hp_content'] = 1; }
    if (cla) { opts['hp_cla'] = cla.replace(/\s+/g, ''); }
    if (pos) { opts['hp_pos'] = pos; }
    if (cid) { opts['hp_cid'] = cid; }
    if (su) { opts['hp_su'] = encodeURIComponent(su); }
    var clt = ($(link).is('form') ? $(link).attr('action') : $(link).attr('href'));
    opts['hp_clt'] = clt.substr(Math.max(clt.length - 20, 0), 20);
    var img = (new Image());
    img.src = (cc.base+$.param($.extend({}, cc.defaults, opts, options)).replace(/%0A/g, ''));
    img.onloaddisabled = function() { return; }
    return true;
}

cc.slices = [50,51,52,53,54,55,56,57,58,59];
cc.base = '//wa.ui-portal.de/gmx/gmx-s/s?homepage.startseite.pi.'+($('#buster').length ? 'buster' : ($('#megabuster').length ? 'megabuster' : 'home'))+'&';
cc.claIDs = '#topper, #headerNav, #weather, #search, #allContents, #headerHelplinks, #statusline, #msgBox, #loginbox, #subLogin, #featuredNews, #sitebar, #navigation, #footer';
cc.cllNoHeader = '#headerNav, #headerHelplinks, .topsearches';
cc.defaults = {
    'hp_lang': $('html').attr('lang'),
    'hp_country': $.url($('#headerContent h1 a').attr('href')).hostname.split('.').pop().replace(/^net$/, 'de'),
    'ns_type': 'hidden'
};
cc.cllfilter = function(n) {
    var s = false;
    return $.trim(n).toLowerCase().replace(/./g, function(x) {
        if (/\s/.test(x)) { s = true; return ''; }
        var c = x.charCodeAt(0);
        if (c < 48 || (c > 57 && c < 97) || c > 122) { return ''; }
        if (s) { s = false; return x.toUpperCase(); }
        return x;
    }).substr(0,29);
}

$(function() {
    window.setTimeout(function() {
        $('a').live('click', function() { return cc(this); });
        $('form').live('submit', function() { return cc(this); });
    }, 100);
});
})(jQuery);
function appendHashToLink(link, hash) {
    return;
    if (link.href.indexOf('#') >= 0) { return; }
    link.href += hash;
}

$(function() {
    $('#header a, #allContentsList .list a'                ).not('#search a, #header h1 a').each(function() { appendHashToLink(this, '#.00000001'); });
    $('#featuredNews a, #content .channels .area>.module a')                               .each(function() { appendHashToLink(this, '#.00000002'); });
    $('#navigation a'                                      ).not('#navSpecial a')          .each(function() { appendHashToLink(this, '#.00000003'); });
    $('#sitebar a'                                         )                               .each(function() { appendHashToLink(this, '#.00000004'); });
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
        window.emosPageId = 'gmx_hp_'
                          + (parent.$('#buster').length
                            ? (parent.$('#advSpecialMain .advSitebar').length ? 'sb' : 'b')
                            : (parent.$('#megabuster').length ? 'mb' : 's')
                          );
        if (parent!==self) { window.emosPageId += '_i'; }
        window.emosGlobalProperties = {countryid: 'de'};
        if ($.url.params['econda'] == 'test') {
            window.emosSamplingRate = 1;
        }
        $.getScript('/\/js.ui-portal.de/c/econda/emos2.js');
    }
}

AdvConfig = new function() {
    this.adServer = '/\/adclient.uimserv.net/js.ng/';
    this.adProxy  = '/\/hp.gmx.uimserv.net/';
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
        beileger.nodes=$('#content .channels .module').eq(beileger.channel || 0).addClass('advBeilegerModule').find('.moduleHeader').addClass('advBeileger').prepend((beileger.adtag||'')+'<a href="#_beileger" class="advModuleHeader" style="background:'+
            beileger.background+'; color: '+beileger.color+';"><img src="'+beileger.logo+
            '" alt=""\/>'+beileger.intro+'<\/a><div class="advModuleTeaser" style="background:'+beileger.background+
            ';"><img src="'+beileger.teaserimg+'" alt=""\/><span class="more">mehr<\/span><\/div><div class="advModuleContent">'+(beileger.flash || beileger.fallback)+'<span class="advHideContent close">Schlie&szlig;en<\/span><\/div>').find('.advModuleHeader, .advModuleTeaser, .advModuleContent');
        if (($.ua.browser.renderMode || $.ua.browser.msie) == 7) {
            window.setTimeout(function() { $('.advBeilegerModule').css('z-index', '199'); }, 100);
        }
        beileger.header=beileger.nodes.eq(0);
        beileger.teaser=beileger.nodes.eq(1);
        beileger.content=beileger.nodes.eq(2);
        beileger.nav=beileger.nodes.find('.advModuleNav li');
        beileger.currentPos=1;
        function showTeaser(e) {
            beileger.showTeaser=true;
            if (!beileger.showContent) { beileger.teaser.show(); }
            if (beileger.hover) {
                (new Image()).src = beileger.hover+'&ts='+(new Date()*1);
                delete beileger.hover;
            }
            return false;
        }
        function hideTeaser(e) {
            beileger.showTeaser=false;
            window.setTimeout(function() { if (!beileger.showTeaser) { beileger.teaser.hide(); }} , 90);
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
        beileger.header.add(beileger.teaser).mouseenter(showTeaser).mouseleave(hideTeaser).click(showContent).end();
        beileger.content.find('.close').click(hideContent);
        beileger.nav.click(navSelect);
    }}(parent.jQuery);
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
}

var Topper = new function() {
    this.timeout = 500;
    this.versions = {
        'ie': {
            'text1': 'Ihr Browser ist nicht aktuell. ',
            'text2': 'Verwenden Sie zu Ihrer Sicherheit immer die aktuellsten Internet-Browser - ',
            'text3': 'Jetzt kostenlos downloaddisableden!',
            'seoUrl': '//service.gmx.net/de/cgi/g.fcgi/products/browser',
            'redirectUrl': 'http://service.gmx.net/de/cgi/g.fcgi/products/browser/landing/ie?mc=gmx_hp@home@topper@IE_direkt.gmx_produkte@browser',
            'popupUrl': 'http://service.gmx.net/de/cgi/g.fcgi/products/browser/landing/ie?mc=gmx_hp@home@topper@IE_hint.gmx_produkte@browser'
        },
        'ie9': {
            'text1': 'Ihr Browser ist nicht aktuell. ',
            'text2': 'Verwenden Sie zu Ihrer Sicherheit immer die aktuellsten Internet-Browser - ',
            'text3': 'Jetzt kostenlos downloaddisableden!',
            'seoUrl': '//service.gmx.net/de/cgi/g.fcgi/products/browser',
            'redirectUrl': 'http://service.gmx.net/de/cgi/g.fcgi/products/browser/landing/ie9?mc=gmx_hp@home@topper@IE9_direkt.gmx_produkte@browser',
            'popupUrl': 'http://service.gmx.net/de/cgi/g.fcgi/products/browser/landing/ie9?mc=gmx_hp@home@topper@IE9_hint.gmx_produkte@browser'
        },
        'ff4': {
            'text1': 'Ihr Browser ist nicht aktuell. ',
            'text2': 'Verwenden Sie zu Ihrer Sicherheit immer die aktuellsten Internet-Browser - ',
            'text3': 'Jetzt kostenlos downloaddisableden!',
            'seoUrl': '//service.gmx.net/de/cgi/g.fcgi/products/browser/landing/ff4',
            'redirectUrl': 'http://service.gmx.net/de/cgi/g.fcgi/products/browser/landing/ff4?mc=gmx_hp@home@topper@ff_direkt.gmx_produkte@browser',
            'popupUrl': 'http://service.gmx.net/de/cgi/g.fcgi/products/browser/landing/ff4?mc=gmx_hp@home@topper@ff_hint.gmx_produkte@browser'
        }
    };
    this.choice = function() {
        return (/^win/.test($.ua.os.name || '') ?
            ($.ua.browser.msie < 9 && ($.ua.os.version == 'vista' || $.ua.os.version == '7') ? 'ie9' :
                (($.ua.browser.msie < 8 ||
                    $.ua.browser.opera < 10 ||
                    $.ua.browser.safari < 5) ? 'ie' :
                        ($.ua.browser.firefox < 4 ? 'ff4' : false)
                )) : false);
    };
    this.content = ('<div class="topper-content">'+
        '    <div class="message">'+
        '        <p id="topper-close">' +
        '            <a href="${seoUrl}" onclick="if (this.retain) { return false; }; return go(this, \'${redirectUrl}\');">'+
        '                ${text1}<strong>${text2}<span>${text3}</span></strong>'+
        '               <span id="topperButtons">'+
        '                   <span id="topperClose" title="Benachrichtigung schlie&szlig;en" onclick="this.parentNode.parentNode.retain = true;"></span>'+
        '                   <span id="topperLater" title="Benachrichtigung schlie&szlig;en - Browser-Informationen im Hintergrund &ouml;ffnen" onclick="this.parentNode.parentNode.retain = true; var infowin = void(\'${popupUrl}\',\'info\',\'width='+parent.$(parent.window).width()+',height='+parent.$(parent.window).height()+',dependent=no,location=yes,menubar=yes,resizable=yes,scrollbars=yes,status=yes,toolbar=yes\'); infowin.blur(); window.focus();"></span>'+
        '               </span>'+
        '            </a>'+
        '        </p>'+
        '    </div>'+
        '</div>');
    this.init = function() {
        if (window.advNoTopper || parent.advNoTopper || parent.$('#topper').length) { return; }
        if (parent.$('body.hasSitebar').length) { return; }
        var choice = this.choice();
        if (!choice || !this.versions[choice]) { return; }
        var data = this.versions[choice];
        parent.$('body').prepend('<div id="topper">'+this.content.replace(/\$\{([^\}]+)\}/g, function(f,x) { return data[x]; })+'</div>');
        this.topper = parent.$('#topper').find('#topper-close').click(function() { Topper.hide(); });
        this.show();
        if (!$.cookie.get('ns_sample')) {
            $.cookie.set('ns_sample', (Math.random()*100|0), '2y', '/', '.'+$.url.hostname);
        }
        if (/5\d/.test($.cookie.get('ns_sample', ''))) {
            (new Image()).src = ('//wa.ui-portal.de/gmx/gmx-s/s?produkte.browserdownloaddisabled.event.showtopper&ns__t='+(new Date()*1)+'&ns_type=hidden&b_version='+choice+'&hp_country='+(parent.cc.defaults['hp_country'] || ''));
        }
    };
    this.fx = parent.$.classyFX({
        selector: '#topper[step] .topper-show, #topper[-step] .topper-hide',
        steps: 3, ms: 45
    });
    this.show = function() {
        parent.$('.topper-content').removeClass('topper-hide').addClass('topper-show');
        this.fx.options.after = function() {
            parent.$('.topper-content').removeClass('topper-show').addClass('topper-hide');
        }
        this.fx.options.parent = parent.$('#topper');
        this.fx.run();
    };
    this.hide = function() {
        this.fx.options.after = function() {
            if (!$.ua.browser.opera || $.ua.browser.opera > 9.24) { parent.$('#topper > div').css({'overflow': 'hidden', 'height': '0px'}); }
            window.setTimeout(function() { parent.$('#topper').remove(); }, 15);
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
        $(this).remove();
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
    var path = url.path.split('/');
    if (
            (url.host=='service.gmx.net' && path[1]=='de' && path[2]=='cgi' && path[3]=='login')
        ||  (url.host=='service.gmx.net' && path[1]=='de' && path[2]=='cgi' && path[3]=='g.fcgi' && path[4]=='products' && path[5]=='mail' && path[6]=='overview')
        ||  (url.host=='dslspecial.gmx.de' && path[1]=='Telefon-Internet-Flatrate')
        ||  (url.host=='mobiles-internet.gmx.net' && path[1]=='Handy-Internet-Flatrate')
        ||  (path[1]=='pro_ssl'||path[1]=='pro_nossl'||path[1]=='top_ssl'||path[1]=='top_nossl')
    ) {
        return false;
    }
    return true;
}

AdvConfig.init('gmx', 'gmx/homepage/start/de/', 'homepage', 'de', {pageview:'homepage'});
function sitestatInit() {
    var slices = [50,51,52,53,54,55,56,57,58,59], sample = $.cookie.get('ns_sample'), s;
    if (window.ActiveXObject) {
        try { s=(new ActiveXObject('AgControl.AgControl')).isVersionSupported('1.0'); } catch(e) {};
    } else { s = navigator.plugins["Silverlight Plug-In"]; }
    if (!sample) {
        /([^.]+\.[^.]+)$/.exec(location.hostname);
        $.cookie.set('ns_sample', (Math.random()*100)|0, '2y', '/', '.'+RegExp.$1);
    }
    if ($.inArray(sample*1, slices) === -1) { return; }
    ns_pixelUrl = cc.base + 'ns__t='+(new Date()*1);
    (new Image()).src = ns_pixelUrl
        + '&hp_lang='+cc.defaults.hp_lang
        + '&hp_country='+cc.defaults.hp_country
        + ($.url.params.kid?'&kid='+encodeURIComponent($.url.params.kid):'')
        + '&hp_ap_0='+($('#toppromo.empty').length ? 'none' : 'fm_topper')
        + '&hp_ap_1='+($('#sitebar .topvideos h3 a:contains(Housewife), #sitebar .topvideos h3 a:contains(Housewives)').length ? 'dhw' : 'none')
        + '&hp_sl='+(s ? '1' : '0')
        + '&ns_referrer='+document.referrer;
    $.getScript('//js.gmx.net/c/nedstat/sitestat.js');
}

(function() {
    var stat = function(weekday) {
        (new Image()).src = '//wa.ui-portal.de/gmx/gmx-test/s?c_test.'+weekday+'&ns__t='+(new Date()*1);
        return weekday;
    }
    if ((new Date()*1) < 1264633200000) { return; }
    var cookie = $.cookie.get('c_test');
    if (cookie) {
        if (!/^t=/.test(cookie)) { return; }
        return stat($.cookie.get('c_test').replace(/^t=/, ''));
    }
    // Wenn Cookie-Streuzeitraum ueberschritten, ist hier Schluss
    if ((new Date()*1) > 1265237940000) { return; }
    if (((Math.random()*40)|0) != 21) {
        $.cookie.set('c_test', '0', '120d');
        return;
    }
    var weekdays = ['so', 'mo', 'di', 'mi', 'do', 'fr', 'sa'];
    var weekday = weekdays[(new Date()).getDay()];
    $.cookie.set('c_test', 't='+stat(weekday), '120d');
})();
function setDslCookie(code) {
    if ($.ua.browser.safari) { return; }
    var iframe = $('<iframe src="//om.dsl.1und1.de/postview/?ac='+encodeURIComponent(code)+'" style="position: absolute; width: 1px; height: 1px; top: -100px;"></iframe>').appendTo('body');
    window.setTimeout(function(iframe) { return function() { iframe.remove(); }}(iframe), 5000);
}