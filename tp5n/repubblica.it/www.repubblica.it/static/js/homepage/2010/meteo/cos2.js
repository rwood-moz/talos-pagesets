// Dichiarazione variabili
var dir_html = '/ssinclude/meteo/csv_html';
// CAMBIARE QUI -------------------------------------------------
var dominio = 'www.repubblica.it'; // Dominio del secondo js
var subDirJs='static/js/homepage/2010/meteo'; // Directory del secondo js
// IL RESTO DOVREBBE ESSERE CORRETTO

var valco='';
var str = 'a=b';
var strmain='';

var persoLoc=false;
var persoMain=false;



/* --------------------------------------------- */
var DefLoc = new Array('8495', '5913', '1832', 'A0125', 'A0137', 'A0297')


var dir_loca = '/ssinclude/meteo/csv_loca';
var dir_w = '/ssinclude/meteo/csv_weather';
var dominioImg = 'http://www.repubblica.it';

var icons = new Array(
	'',
	'sereno.gif',
	'sereno.gif',
	'poco_nuvoloso.gif',
	'parzialmente_nuvoloso.gif',
	'temporali_isolati.gif',
	'parz_nuv_strati.gif',
	'var_no_prec.gif',
	'var_rovesci_30.gif',
	'var_rovesci_90.gif',
	'var_temporale_lieve.gif',
	'var_temporale.gif',
	'nuvoloso_70.gif',
	'var_neve.gif',
	'velato.gif',
	'velo_spesso.gif',
	'coperto-strati.gif',
	'molto_nuvoloso.gif',
	'pioggia_30.gif',
	'pioviggine_30.gif',
	'pioggia_30.gif',
	'pioggia_30.gif',
	'pioggia_30.gif',
	'pioggia_70.gif',
	'pioggia_90.gif',
	'pioggia_90.gif',
	'pioggia_70.gif',
	'pioggia_90.gif',
	'temporale.gif',
	'temporale.gif',
	'coperto_neve_forte.gif',
	'pioggia_neve.gif',
	'nevischio.gif',
	'neve_debole.gif',
	'neve_debole.gif',
	'neve_moderata.gif',
	'neve_forte.gif',
	'neve_forte.gif',
	'nebbia_banchi.gif',
	'nebbia.gif',
	'nebbia_banchi.gif',
	'nebbia.gif',
	'temporale.gif',
	'parzialmente_nuvoloso.gif',
	'neve_moderata.gif',
	'pioggia_neve.gif',
	'pioggia_neve.gif',
	'sereno.gif',
	'neve_debole.gif'
);

var description_icons = new Array(
'',
'sereno',
'sereno, brina',
'poco nuvoloso',
'variabile',
'temporali isolati',
'variabile',
'nubi sparse',
'rovesci isolati',
'rovesci pioggia',
'temporale',
'temporale',
'nuvoloso',
'variabile, neve',
'poco nuvoloso',
'nuvoloso',
'coperto',
'coperto',
'pioggia gelata',
'pioviggine',
'debole pioggia',
'debole pioggia',
'debole pioggia',
'pioggia moderata',
'pioggia forte',
'pioggia forte',
'rovesci pioggia',
'rovesci pioggia',
'temporali',
'temporali forti',
'neve forte',
'pioggia e neve',
'nevischio',
'neve debole',
'neve debole',
'neve moderata',
'neve forte',
'neve forte',
'foschia',
'foschia',
'nebbia',
'nebbia',
'forti temporali',
'poco nuvoloso',
'sereno, foschia',
'rovesci pioggia',
'nubi sparse',
'neve moderata',
'pioggia e neve',
'neve bagnata',
'sereno ventoso',
'neve bagnata'
);
/* --------------------------------------------- */

/*
	Funzione relativ alla lettura e settaggio dei cookie
*/
function getCookie(c_name)
{
	if (document.cookie.length>0)
	{
		c_start=document.cookie.indexOf(c_name + "=");
		if (c_start!=-1)
		{
			c_start=c_start + c_name.length+1;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) c_end=document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end));
		}
	}
	return "";
}

function setCookie(c_name,value,expiredays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

function checkCookie()
{
	username=getCookie('username');
	if (username!=null && username!="")
	{
		//alert('Welcome again '+username+'!');
		// Presente il cookie
	}
	else
	{
		username=prompt('Please enter your name:',"");
		if (username!=null && username!="")
		{
			setCookie('username',username,365);
		}
	}
}

/*
	Carica i file js e css
*/
function loaddisabledjscssfile(filename, filetype){
	if (filetype=="js"){ //if filename is a external JavaScript file
		var fileref=document.createElement('script')
		fileref.setAttribute("type","text/javascript")
		fileref.setAttribute("src", filename)
	}
	else if (filetype=="css"){ //if filename is an external CSS file
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename)
	}
	if (typeof fileref!="undefined")
		document.getElementsByTagName("head")[0].appendChild(fileref)
}

function jsonp_request(url,funzione) {
	var head = document.getElementsByTagName("head")[0]; 
	var script = document.createElement("SCRIPT"); 
	script.type = "text/javascript"; 
	script.src = url + "&cb="+funzione; 
	head.appendChild(script);
} 

Person=new Array();
for(k=0;k<3;k++)
{
	valco = getCookie('loc_ita['+k+']');
	if(valco)
	{
		if(str)
			str = str+'&loc_ita'+k+'='+escape(valco);
		else
			str = 'loc_ita'+k+'='+escape(valco);
		persoLoc = true;
		Person[k]=valco;
	}
}

mainloc = getCookie('main_loc');
if(mainloc)
{
	strmain='&main_loc='+escape(mainloc);
	persoMain=true;
}

/*
	blocco Localita
	verifico se personalizzazione localita
	oppure se devo dare il blocco di default
*/
function ask_prefe()
{
	if(persoLoc)
	{
		//jsonp_request('http://'+dominio+'/javascript/cos2.php?req=more'+str,'showReceived');	
		create_box();
		setTimeout("call_big()",900);
	}
	else {
		$.ajax({
			url: dir_html+"/prefe.txt",
			dataType: 'html',
			success: callBack
		});
	}
}

function create_box_main()
{
	var box_main = '';
	$.ajax({
		url: dir_w+"/"+mainloc+".txt",
		dataType: 'html',
		success: function (returnData) {
			city = eval(returnData);

			var url = city[0]['url'];
			ahref='<a href="httpdisabled://meteo.repubblica.it'+url+'">'+city[0]['localita']+'</a>';
			var ff = icons[parseInt(city[0]['cod_meteo'])].replace('gif','png');
			setCookie('main_loc',city[0]['id_localita'],365);
			var des = description_icons[parseInt(city[0]['cod_meteo'])];
			box_main = '<div id="autocomplete" class="autocomplete">' + ahref + '</div> <strong class="meteo-ico" id="secondacolonna" style="background-image: url('+dominioImg+'/static/images/homepage/2010/meteo/'+ff+');">'+city[0]['min']+'&deg; '+city[0]['max']+'&deg;</strong><span class="meteo-custom"><a href="javascript:" onclick="$(\'.autocomplete\').dblclick()" />[Scegli]</a></span>';

//			document.getElementById('box-meteo-header').innerHTML=box_main;
		}
	});

}

var PreviLoc=new Array();
function create_box() {
	for(i=0;i<3;i++)
	{
		call_previ(i);
	}
}

function call_previ(i)
{
	try {
		if(Person[i])
		{
			tocall=Person[i];
		}
		else
			tocall=DefLoc[i];
	}
	catch(Err) {
		tocall=DefLoc[i];
	}

        $.ajax({
		url: dir_w+"/"+tocall+".txt",
		dataType: 'html',
		success: function (returnData) {
			var cty = eval(returnData);
			PreviLoc[i]=cty[0];

			if(i==2)
			{
				setTimeout("createBoxHtml()",700);
			}
		}
	});
}

function createBoxHtml()
{
	htmlRet = '<ul class="box meteo"> <li class="title"><dl class="clearfix"><dt><a href="httpdisabled://meteo.repubblica.it/" title="Meteo Repubblica">Meteo</a></dt><dd></dd></dl></li> <li> <table cellspacing="0" class="box-table"> <thead> <tr> <th>Localit&agrave;</th> <th class="meteo-localita meteo-minmax">Min/Max</th> <th class="cell-center meteo-previsioni">Previsioni</th> <th class="cell-center meteo-cambia">&nbsp;</th> </tr> </thead> <tbody>';

	var url;
	var ff;
	var des;

	for(i=0;i<3;i++)
	{

		url = PreviLoc[i]['url'];
		ahref='<a href="httpdisabled://meteo.repubblica.it'+url+'">'+PreviLoc[i]['localita']+'</a>';
		ff = icons[parseInt(PreviLoc[i]['cod_meteo'])].replace('gif','png');
		des = description_icons[parseInt(PreviLoc[i]['cod_meteo'])];


		htmlRet = htmlRet + '<tr> <td class="call-center meteo-1-col"> <div id="autocomplete'+i+'" class="'+i+'autocomplete">'+ahref+'</div> </td> <td class="call-center meteo-2-col" id="terzacolonna'+i+'">'+PreviLoc[i]['min']+' &deg; '+PreviLoc[i]['max']+' &deg; </td> <td class="call-center meteo-3-col" id="secondacolonna'+i+'" style="background-image: url('+dominioImg+'/static/images/homepage/2010/meteo/'+ff+'); background-repeat: no-repeat;">'+des+'</td> <td class="call-center meteo-4-col"> <a href="javascript:" onclick="$(\'.'+i+'autocomplete\').dblclick();" />[Scegli]</a> </td> </tr>';
	}
	htmlRet = htmlRet + ' </tbody> </table> </li> </ul>';

	document.getElementById('box-meteo-sidebar').innerHTML = htmlRet;
}

/*
	blocco Mai
	verifico se personalizzazione localita
	oppure se devo dare il blocco di default
*/
function ask_main_prefe()
{
	if(persoMain)
	{
		create_box_main();
		// jsonp_request('http://'+dominio+'/javascript/cos2.php?req=main'+strmain,'showReceived');	
	}
	else {
		$.ajax({
			url: dir_html+"/prefeMain.txt",
			dataType: 'html',
			success: callBackMain
		});
	}
}

function addLoadEvent(func) {
	var oldonloaddisabled = window.onloaddisabled;
		if (typeof window.onloaddisabled != 'function') {
			window.onloaddisabled = func;
		} else {
			window.onloaddisabled = function() {
			if (oldonloaddisabled) {
				oldonloaddisabled();
			}
			func();
		}
	}
}

addLoadEvent(function() {
	setTimeout("ask_prefe()",1800);
	setTimeout("ask_main_prefe()",1500);
});


function showReceived(iddd,returnData)
{
	try {
		if(iddd=='main')
		{
			document.getElementById('box-meteo-header').innerHTML=returnData;
		}
		else
		{
			document.getElementById('box-meteo-sidebar').innerHTML=returnData;
			setTimeout("call_big()",900);
		}
	}
	catch (hhh) {}
}

function callBackMain(returnData)
{
	try {
		var myHtml = eval(returnData);
		document.getElementById('box-meteo-header').innerHTML=myHtml;
	}
	catch (hh) {}
}

function callBack(returnData)
{
	try {
		var myHtml = eval(returnData);
		document.getElementById('box-meteo-sidebar').innerHTML=myHtml;
	}
	catch (hh) {}

	setTimeout("call_big()",500);
}

function call_big()
{
	loaddisabledjscssfile("httpdisabled://"+dominio+"/"+subDirJs+"/call_big2.js", "js") 
}

/* -------------------------- FUNZIONI --------------------------*/

/*
 * Autocomplete - jQuery plugin 1.0.2
 *
 * Copyright (c) 2007 Dylan Verheul, Dan G. Switzer, Anjesh Tuladhar, JÃ¶rn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://voidsource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.autocomplete.js 5751 2008-06-26 20:12:49Z joern.zaefferer $
 *
 */

;(function($) {
	
$.fn.extend({
	autocomplete: function(urlOrData, options) {
		var isUrl = typeof urlOrData == "string";
		options = $.extend({}, $.Autocompleter.defaults, {
			url: isUrl ? urlOrData : null,
			data: isUrl ? null : urlOrData,
			delay: isUrl ? $.Autocompleter.defaults.delay : 10,
			max: options && !options.scroll ? 10 : 150
		}, options);
		
		// if highlight is set to false, replace it with a do-nothing function
		options.highlight = options.highlight || function(value) { return value; };
		
		// if the formatMatch option is not specified, then use formatItem for backwards compatibility
		options.formatMatch = options.formatMatch || options.formatItem;
		
		return this.each(function() {
			new $.Autocompleter(this, options);
		});
	},
	result: function(handler) {
		return this.bind("result", handler);
	},
	search: function(handler) {
		return this.trigger("search", [handler]);
	},
	flushCache: function() {
		return this.trigger("flushCache");
	},
	setOptions: function(options){
		return this.trigger("setOptions", [options]);
	},
	unautocomplete: function() {
		return this.trigger("unautocomplete");
	}
});

$.Autocompleter = function(input, options) {

	var KEY = {
		UP: 38,
		DOWN: 40,
		DEL: 46,
		TAB: 9,
		RETURN: 13,
		ESC: 27,
		COMMA: 188,
		PAGEUP: 33,
		PAGEDOWN: 34,
		BACKSPACE: 8
	};

	// Create $ object for input element
	var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);

	var timeout;
	var previousValue = "";
	var cache = $.Autocompleter.Cache(options);
	var hasFocus = 0;
	var lastKeyPressCode;
	var config = {
		mouseDownOnSelect: false
	};
	var select = $.Autocompleter.Select(options, input, selectCurrent, config);
	
	var blockSubmit;
	
	// prevent form submit in opera when selecting with return key
	$.browser.opera && $(input.form).bind("submit.autocomplete", function() {
		if (blockSubmit) {
			blockSubmit = false;
			return false;
		}
	});
	
	// only opera doesn't trigger keydown multiple times while pressed, others don't work with keypress at all
	$input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(event) {
		// track last key pressed
		lastKeyPressCode = event.keyCode;
		switch(event.keyCode) {
		
			case KEY.UP:
				event.preventDefault();
				if ( select.visible() ) {
					select.prev();
				} else {
					onChange(0, true);
				}
				break;
				
			case KEY.DOWN:
				event.preventDefault();
				if ( select.visible() ) {
					select.next();
				} else {
					onChange(0, true);
				}
				break;
				
			case KEY.PAGEUP:
				event.preventDefault();
				if ( select.visible() ) {
					select.pageUp();
				} else {
					onChange(0, true);
				}
				break;
				
			case KEY.PAGEDOWN:
				event.preventDefault();
				if ( select.visible() ) {
					select.pageDown();
				} else {
					onChange(0, true);
				}
				break;
			
			// matches also semicolon
			case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
			case KEY.TAB:
			case KEY.RETURN:
				if( selectCurrent() ) {
					// stop default to prevent a form submit, Opera needs special handling
					event.preventDefault();
					blockSubmit = true;
					return false;
				}
				break;
				
			case KEY.ESC:
				select.hide();
				break;
				
			default:
				clearTimeout(timeout);
				timeout = setTimeout(onChange, options.delay);
				break;
		}
	}).focus(function(){
		// track whether the field has focus, we shouldn't process any
		// results if the field no longer has focus
		hasFocus++;
	}).blur(function() {
		hasFocus = 0;
		if (!config.mouseDownOnSelect) {
			hideResults();
		}
	}).click(function() {
		// show select when clicking in a focused field
		if ( hasFocus++ > 1 && !select.visible() ) {
			onChange(0, true);
		}
	}).bind("search", function() {
		// TODO why not just specifying both arguments?
		var fn = (arguments.length > 1) ? arguments[1] : null;
		function findValueCallback(q, data) {
			var result;
			if( data && data.length ) {
				for (var i=0; i < data.length; i++) {
					if( data[i].result.toLowerCase() == q.toLowerCase() ) {
						result = data[i];
						break;
					}
				}
			}
			if( typeof fn == "function" ) fn(result);
			else $input.trigger("result", result && [result.data, result.value]);
		}
		$.each(trimWords($input.val()), function(i, value) {
			request(value, findValueCallback, findValueCallback);
		});
	}).bind("flushCache", function() {
		cache.flush();
	}).bind("setOptions", function() {
		$.extend(options, arguments[1]);
		// if we've updated the data, repopulate
		if ( "data" in arguments[1] )
			cache.populate();
	}).bind("unautocomplete", function() {
		select.unbind();
		$input.unbind();
		$(input.form).unbind(".autocomplete");
	});
	
	
	function selectCurrent() {
		var selected = select.selected();
		if( !selected )
			return false;
		
		var v = selected.result;
		previousValue = v;
		
		if ( options.multiple ) {
			var words = trimWords($input.val());
			if ( words.length > 1 ) {
				v = words.slice(0, words.length - 1).join( options.multipleSeparator ) + options.multipleSeparator + v;
			}
			v += options.multipleSeparator;
		}
		
		$input.val(v);
		hideResultsNow();
		$input.trigger("result", [selected.data, selected.value]);
		return true;
	}
	
	function onChange(crap, skipPrevCheck) {
		if( lastKeyPressCode == KEY.DEL ) {
			select.hide();
			return;
		}
		
		var currentValue = $input.val();
		
		if ( !skipPrevCheck && currentValue == previousValue )
			return;
		
		previousValue = currentValue;
		
		currentValue = lastWord(currentValue);
		if ( currentValue.length >= options.minChars) {
			$input.addClass(options.loaddisabledingClass);
			if (!options.matchCase)
				currentValue = currentValue.toLowerCase();
			request(currentValue, receiveData, hideResultsNow);
		} else {
			stopLoading();
			select.hide();
		}
	};
	
	function trimWords(value) {
		if ( !value ) {
			return [""];
		}
		var words = value.split( options.multipleSeparator );
		var result = [];
		$.each(words, function(i, value) {
			if ( $.trim(value) )
				result[i] = $.trim(value);
		});
		return result;
	}
	
	function lastWord(value) {
		if ( !options.multiple )
			return value;
		var words = trimWords(value);
		return words[words.length - 1];
	}
	
	// fills in the input box w/the first match (assumed to be the best match)
	// q: the term entered
	// sValue: the first matching result
	function autoFill(q, sValue){
		// autofill in the complete box w/the first match as long as the user hasn't entered in more data
		// if the last user key pressed was backspace, don't autofill
		if( options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE ) {
			// fill in the value (keep the case the user has typed)
			$input.val($input.val() + sValue.substring(lastWord(previousValue).length));
			// select the portion of the value not typed by the user (so the next character will erase)
			$.Autocompleter.Selection(input, previousValue.length, previousValue.length + sValue.length);
		}
	};

	function hideResults() {
		clearTimeout(timeout);
		timeout = setTimeout(hideResultsNow, 200);
	};

	function hideResultsNow() {
		var wasVisible = select.visible();
		select.hide();
		clearTimeout(timeout);
		stopLoading();
		if (options.mustMatch) {
			// call search and run callback
			$input.search(
				function (result){
					// if no value found, clear the input box
					if( !result ) {
						if (options.multiple) {
							var words = trimWords($input.val()).slice(0, -1);
							$input.val( words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : "") );
						}
						else
							$input.val( "" );
					}
				}
			);
		}
		if (wasVisible)
			// position cursor at end of input field
			$.Autocompleter.Selection(input, input.value.length, input.value.length);
	};

	function receiveData(q, data) {
		if ( data && data.length && hasFocus ) {
			stopLoading();
			select.display(data, q);
			autoFill(q, data[0].value);
			select.show();
		} else {
			hideResultsNow();
		}
	};

	function request(term, success, failure) {
		if (!options.matchCase)
			term = term.toLowerCase();
		var data = cache.loaddisabled(term);
		// recieve the cached data
		if (data && data.length) {
			success(term, data);
		// if an AJAX url has been supplied, try loaddisableding the data now
		} else if( (typeof options.url == "string") && (options.url.length > 0) ){

			// MAU
			short_term = term.substring(0,2);
			options.url = dir_loca+"/"+short_term.substring(0,2)+".txt"
			// END MAU
			
			var extraParams = {
				timestamp: +new Date()
			};
			$.each(options.extraParams, function(key, param) {
				extraParams[key] = typeof param == "function" ? param() : param;
			});
			
			$.ajax({
				// try to leverage ajaxQueue plugin to abort previous requests
				mode: "abort",
				// limit abortion to this input
				port: "autocomplete" + input.name,
				dataType: options.dataType,
				url: options.url,
				data: $.extend({
					q: lastWord(term),
					limit: options.max
				}, extraParams),
				success: function(data) {
					var parsed = options.parse && options.parse(data) || parse(data,term);
					cache.add(term, parsed);
					success(term, parsed);
				}
			});
		} else {
			// if we have a failure, we need to empty the list -- this prevents the the [TAB] key from selecting the last successful match
			select.emptyList();
			failure(term);
		}
	};
	
	function parse(data,term) {
		var parsed = [];
		// MAU
		var rows = eval(data);
		// END MAU
		//var rows = data.split("\n");
		try
		{
			for (var i=0; i < rows.length; i++) {
				//var row = $.trim(rows[i]);
				var row = rows[i];
				if(row['localita'].toLowerCase().indexOf(term.toLowerCase())>-1)
				{
					if ($.trim(row['localita'])) {
						//row = row.split("|");
						parsed[parsed.length] = {
							data: new Array(row['localita'],row['id_localita']),
							value: row['localita'],
							result: row['id_localita']+"#"+row['localita']
						};
					}
				}
			}
		}
		catch (err) {
			parsed[parsed.length] = {
				data: new Array("NESSUN RISULTATO","0"),
				value: "NESSUN RISULTATO",
				result: "0#NESSUN RISULTATO"
			};
		}

		return parsed;
	};

	function stopLoading() {
		$input.removeClass(options.loaddisabledingClass);
	};

};

$.Autocompleter.defaults = {
	inputClass: "ac_input",
	resultsClass: "ac_results",
	loaddisabledingClass: "ac_loaddisableding",
	minChars: 2,
	delay: 400,
	matchCase: false,
	matchSubset: true,
	matchContains: false,
	cacheLength: 10,
	max: 100,
	mustMatch: false,
	extraParams: {},
	selectFirst: true,
	formatItem: function(row) { return row[0]; },
	formatMatch: null,
	autoFill: false,
	width: 0,
	multiple: false,
	multipleSeparator: ", ",
	highlight: function(value, term) {
		return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
	},
    scroll: true,
    scrollHeight: 180
};

$.Autocompleter.Cache = function(options) {

	var data = {};
	var length = 0;
	
	function matchSubset(s, sub) {
		if (!options.matchCase) 
			s = s.toLowerCase();
		var i = s.indexOf(sub);
		if (i == -1) return false;
		return i == 0 || options.matchContains;
	};
	
	function add(q, value) {
		if (length > options.cacheLength){
			flush();
		}
		if (!data[q]){ 
			length++;
		}
		data[q] = value;
	}
	
	function populate(){
		if( !options.data ) return false;
		// track the matches
		var stMatchSets = {},
			nullData = 0;

		// no url was specified, we need to adjust the cache length to make sure it fits the local data store
		if( !options.url ) options.cacheLength = 1;
		
		// track all options for minChars = 0
		stMatchSets[""] = [];
		
		// loop through the array and create a lookup structure
		for ( var i = 0, ol = options.data.length; i < ol; i++ ) {
			var rawValue = options.data[i];
			// if rawValue is a string, make an array otherwise just reference the array
			rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;
			
			var value = options.formatMatch(rawValue, i+1, options.data.length);
			if ( value === false )
				continue;
				
			var firstChar = value.charAt(0).toLowerCase();
			// if no lookup array for this character exists, look it up now
			if( !stMatchSets[firstChar] ) 
				stMatchSets[firstChar] = [];

			// if the match is a string
			var row = {
				value: value,
				data: rawValue,
				result: options.formatResult && options.formatResult(rawValue) || value
			};
			
			// push the current match into the set list
			stMatchSets[firstChar].push(row);

			// keep track of minChars zero items
			if ( nullData++ < options.max ) {
				stMatchSets[""].push(row);
			}
		};

		// add the data items to the cache
		$.each(stMatchSets, function(i, value) {
			// increase the cache size
			options.cacheLength++;
			// add to the cache
			add(i, value);
		});
	}
	
	// populate any existing data
	setTimeout(populate, 25);
	
	function flush(){
		data = {};
		length = 0;
	}
	
	return {
		flush: flush,
		add: add,
		populate: populate,
		loaddisabled: function(q) {
			if (!options.cacheLength || !length)
				return null;
			/* 
			 * if dealing w/local data and matchContains than we must make sure
			 * to loop through all the data collections looking for matches
			 */
			if( !options.url && options.matchContains ){
				// track all matches
				var csub = [];
				// loop through all the data grids for matches
				for( var k in data ){
					// don't search through the stMatchSets[""] (minChars: 0) cache
					// this prevents duplicates
					if( k.length > 0 ){
						var c = data[k];
						$.each(c, function(i, x) {
							// if we've got a match, add it to the array
							if (matchSubset(x.value, q)) {
								csub.push(x);
							}
						});
					}
				}				
				return csub;
			} else 
			// if the exact item exists, use it
			if (data[q]){
				return data[q];
			} else
			if (options.matchSubset) {
				for (var i = q.length - 1; i >= options.minChars; i--) {
					var c = data[q.substr(0, i)];
					if (c) {
						var csub = [];
						$.each(c, function(i, x) {
							if (matchSubset(x.value, q)) {
								csub[csub.length] = x;
							}
						});
						return csub;
					}
				}
			}
			return null;
		}
	};
};

$.Autocompleter.Select = function (options, input, select, config) {
	var CLASSES = {
		ACTIVE: "ac_over"
	};
	
	var listItems,
		active = -1,
		data,
		term = "",
		needsInit = true,
		element,
		list;
	
	// Create results
	function init() {
		if (!needsInit)
			return;
		element = $("<div/>")
		.hide()
		.addClass(options.resultsClass)
		.css("position", "absolute")
		.appendTo(document.body);
	
		list = $("<ul/>").appendTo(element).mouseover( function(event) {
			if(target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
	            active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
			    $(target(event)).addClass(CLASSES.ACTIVE);            
	        }
		}).click(function(event) {
			$(target(event)).addClass(CLASSES.ACTIVE);
			select();
			// TODO provide option to avoid setting focus again after selection? useful for cleanup-on-focus
			input.focus();
			return false;
		}).mousedown(function() {
			config.mouseDownOnSelect = true;
		}).mouseup(function() {
			config.mouseDownOnSelect = false;
		});
		
		if( options.width > 0 )
			element.css("width", options.width);
			
		needsInit = false;
	} 
	
	function target(event) {
		var element = event.target;
		while(element && element.tagName != "LI")
			element = element.parentNode;
		// more fun with IE, sometimes event.target is empty, just ignore it then
		if(!element)
			return [];
		return element;
	}

	function moveSelect(step) {
		listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
		movePosition(step);
        var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
        if(options.scroll) {
            var offset = 0;
            listItems.slice(0, active).each(function() {
				offset += this.offsetHeight;
			});
            if((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
                list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
            } else if(offset < list.scrollTop()) {
                list.scrollTop(offset);
            }
        }
	};
	
	function movePosition(step) {
		active += step;
		if (active < 0) {
			active = listItems.size() - 1;
		} else if (active >= listItems.size()) {
			active = 0;
		}
	}
	
	function limitNumberOfItems(available) {
		return options.max && options.max < available
			? options.max
			: available;
	}
	
	function fillList() {
		list.empty();
		var max = limitNumberOfItems(data.length);
		for (var i=0; i < max; i++) {
			if (!data[i])
				continue;
			var formatted = options.formatItem(data[i].data, i+1, max, data[i].value, term);
			if ( formatted === false )
				continue;
			var li = $("<li/>").html( options.highlight(formatted, term) ).addClass(i%2 == 0 ? "ac_even" : "ac_odd").appendTo(list)[0];
			$.data(li, "ac_data", data[i]);
		}
		listItems = list.find("li");
		if ( options.selectFirst ) {
			listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
			active = 0;
		}
		// apply bgiframe if available
		if ( $.fn.bgiframe )
			list.bgiframe();
	}
	
	return {
		display: function(d, q) {
			init();
			data = d;
			term = q;
			fillList();
		},
		next: function() {
			moveSelect(1);
		},
		prev: function() {
			moveSelect(-1);
		},
		pageUp: function() {
			if (active != 0 && active - 8 < 0) {
				moveSelect( -active );
			} else {
				moveSelect(-8);
			}
		},
		pageDown: function() {
			if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
				moveSelect( listItems.size() - 1 - active );
			} else {
				moveSelect(8);
			}
		},
		hide: function() {
			element && element.hide();
			listItems && listItems.removeClass(CLASSES.ACTIVE);
			active = -1;
		},
		visible : function() {
			return element && element.is(":visible");
		},
		current: function() {
			return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
		},
		show: function() {
			var offset = $(input).offset();
			element.css({
				width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).width(),
				top: offset.top + input.offsetHeight,
				left: offset.left
			}).show();
            if(options.scroll) {
                list.scrollTop(0);
                list.css({
					maxHeight: options.scrollHeight,
					overflow: 'auto'
				});
				
                if($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
					var listHeight = 0;
					listItems.each(function() {
						listHeight += this.offsetHeight;
					});
					var scrollbarsVisible = listHeight > options.scrollHeight;
                    list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight );
					if (!scrollbarsVisible) {
						// IE doesn't recalculate width when scrollbar disappears
						listItems.width( list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")) );
					}
                }
                
            }
		},
		selected: function() {
			var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
			return selected && selected.length && $.data(selected[0], "ac_data");
		},
		emptyList: function (){
			list && list.empty();
		},
		unbind: function() {
			element && element.remove();
		}
	};
};

$.Autocompleter.Selection = function(field, start, end) {
	if( field.createTextRange ){
		var selRange = field.createTextRange();
		selRange.collapse(true);
		selRange.moveStart("character", start);
		selRange.moveEnd("character", end);
		selRange.select();
	} else if( field.setSelectionRange ){
		field.setSelectionRange(start, end);
	} else {
		if( field.selectionStart ){
			field.selectionStart = start;
			field.selectionEnd = end;
		}
	}
	field.focus();
};

})(jQuery);

/* --------------------------- ALTRA --------------------------*/

/*
 * Jeditable - jQuery in place edit plugin
 *
 * Copyright (c) 2006-2009 Mika Tuupola, Dylan Verheul
 *
 * Licensed under the MIT license:
 *   http://voidsource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/jeditable
 *
 * Based on editable by Dylan Verheul <dylan_at_dyve.net>:
 *    http://www.dyve.net/jquery/?editable
 *
 */

/**
  * Version 1.7.2-dev
  *
  * ** means there is basic unit tests for this parameter. 
  *
  * @name  Jeditable
  * @type  jQuery
  * @param String  target             (POST) URL or function to send edited content to **
  * @param Hash    options            additional options 
  * @param String  options[method]    method to use to send edited content (POST or PUT) **
  * @param Function options[callback] Function to run after submitting edited content **
  * @param String  options[name]      POST parameter name of edited content
  * @param String  options[id]        POST parameter name of edited div id
  * @param Hash    options[submitdata] Extra parameters to send when submitting edited content.
  * @param String  options[type]      text, textarea or select (or any 3rd party input type) **
  * @param Integer options[rows]      number of rows if using textarea ** 
  * @param Integer options[cols]      number of columns if using textarea **
  * @param Mixed   options[height]    'auto', 'none' or height in pixels **
  * @param Mixed   options[width]     'auto', 'none' or width in pixels **
  * @param String  options[loaddisabledurl]   URL to fetch input content before editing **
  * @param String  options[loaddisabledtype]  Request type for loaddisabled url. Should be GET or POST.
  * @param String  options[loaddisabledtext]  Text to display while loaddisableding external content.
  * @param Mixed   options[loaddisableddata]  Extra parameters to pass when fetching content before editing.
  * @param Mixed   options[data]      Or content given as paramameter. String or function.**
  * @param String  options[indicator] indicator html to show when saving
  * @param String  options[tooltip]   optional tooltip text via title attribute **
  * @param String  options[event]     jQuery event such as 'click' of 'dblclick' **
  * @param String  options[submit]    submit button value, empty means no button **
  * @param String  options[cancel]    cancel button value, empty means no button **
  * @param String  options[cssclass]  CSS class to apply to input form. 'inherit' to copy from parent. **
  * @param String  options[style]     Style to apply to input form 'inherit' to copy from parent. **
  * @param String  options[select]    true or false, when true text is highlighted ??
  * @param String  options[placeholder] Placeholder text or html to insert when element is empty. **
  * @param String  options[onblur]    'cancel', 'submit', 'ignore' or function ??
  *             
  * @param Function options[onsubmit] function(settings, original) { ... } called before submit
  * @param Function options[onreset]  function(settings, original) { ... } called before reset
  * @param Function options[onerror]  function(settings, original, xhr) { ... } called on error
  *             
  * @param Hash    options[ajaxoptions]  jQuery Ajax options. See docs.jquery.com.
  *             
  */

(function($) {

    $.fn.editable = function(target, options) {
            
        if ('disable' == target) {
            $(this).data('disabled.editable', true);
            return;
        }
        if ('enable' == target) {
            $(this).data('disabled.editable', false);
            return;
        }
        if ('destroy' == target) {
            $(this)
                .unbind($(this).data('event.editable'))
                .removeData('disabled.editable')
                .removeData('event.editable');
            return;
        }
        
        var settings = $.extend({}, $.fn.editable.defaults, {target:target}, options);
        
        /* setup some functions */
        var plugin   = $.editable.types[settings.type].plugin || function() { };
        var submit   = $.editable.types[settings.type].submit || function() { };
        var buttons  = $.editable.types[settings.type].buttons 
                    || $.editable.types['defaults'].buttons;
        var content  = $.editable.types[settings.type].content 
                    || $.editable.types['defaults'].content;
        var element  = $.editable.types[settings.type].element 
                    || $.editable.types['defaults'].element;
        var reset    = $.editable.types[settings.type].reset 
                    || $.editable.types['defaults'].reset;
        var callback = settings.callback || function() { };
        var onedit   = settings.onedit   || function() { }; 
        var onsubmit = settings.onsubmit || function() { };
        var onreset  = settings.onreset  || function() { };
        var onerror  = settings.onerror  || reset;
          
        /* Show tooltip. */
        if (settings.tooltip) {
            $(this).attr('title', settings.tooltip);
        }
        
        settings.autowidth  = 'auto' == settings.width;
        settings.autoheight = 'auto' == settings.height;
        
        return this.each(function() {
                        
            /* Save this to self because this changes when scope changes. */
            var self = this;  
                   
            /* Inlined block elements lose their width and height after first edit. */
            /* Save them for later use as workaround. */
            var savedwidth  = $(self).width();
            var savedheight = $(self).height();

            /* Save so it can be later used by $.editable('destroy') */
            $(this).data('event.editable', settings.event);
            
            /* If element is empty add something clickable (if requested) */
            if (!$.trim($(this).html())) {
                $(this).html(settings.placeholder);
            }
            
            $(this).bind(settings.event, function(e) {
                
                /* Abort if element is disabled. */
                if (true === $(this).data('disabled.editable')) {
                    return;
                }
                
                /* Prevent throwing an exeption if edit field is clicked again. */
                if (self.editing) {
                    return;
                }
                
                /* Abort if onedit hook returns false. */
                if (false === onedit.apply(this, [settings, self])) {
                   return;
                }
                
                /* Prevent default action and bubbling. */
                e.preventDefault();
                e.stopPropagation();
                
                /* Remove tooltip. */
                if (settings.tooltip) {
                    $(self).removeAttr('title');
                }
                
                /* Figure out how wide and tall we are, saved width and height. */
                /* Workaround for http://dev.jquery.com/ticket/2190 */
                if (0 == $(self).width()) {
                    settings.width  = savedwidth;
                    settings.height = savedheight;
                } else {
                    if (settings.width != 'none') {
                        settings.width = 
                            settings.autowidth ? $(self).width()  : settings.width;
                    }
                    if (settings.height != 'none') {
                        settings.height = 
                            settings.autoheight ? $(self).height() : settings.height;
                    }
                }
                
                /* Remove placeholder text, replace is here because of IE. */
                if ($(this).html().toLowerCase().replace(/(;|"|\/)/g, '') == 
                    settings.placeholder.toLowerCase().replace(/(;|"|\/)/g, '')) {
                        $(this).html('');
                }
                                
                self.editing    = true;
                self.revert     = $(self).html();
                $(self).html('');

                /* Create the form object. */
                var form = $('<form />');
                
                /* Apply css or style or both. */
                if (settings.cssclass) {
                    if ('inherit' == settings.cssclass) {
                        form.attr('class', $(self).attr('class'));
                    } else {
                        form.attr('class', settings.cssclass);
                    }
                }

                if (settings.style) {
                    if ('inherit' == settings.style) {
                        form.attr('style', $(self).attr('style'));
                        /* IE needs the second line or display wont be inherited. */
                        form.css('display', $(self).css('display'));                
                    } else {
                        form.attr('style', settings.style);
                    }
                }

                /* Add main input element to form and store it in input. */
                var input = element.apply(form, [settings, self]);

                /* Set input content via POST, GET, given data or existing value. */
                var input_content;
                
                if (settings.loaddisabledurl) {
                    var t = setTimeout(function() {
                        input.disabled = true;
                        content.apply(form, [settings.loaddisabledtext, settings, self]);
                    }, 100);

                    var loaddisableddata = {};
                    loaddisableddata[settings.id] = self.id;
                    if ($.isFunction(settings.loaddisableddata)) {
                        $.extend(loaddisableddata, settings.loaddisableddata.apply(self, [self.revert, settings]));
                    } else {
                        $.extend(loaddisableddata, settings.loaddisableddata);
                    }
                    $.ajax({
                       type : settings.loaddisabledtype,
                       url  : settings.loaddisabledurl,
                       data : loaddisableddata,
                       async : false,
                       success: function(result) {
                          window.clearTimeout(t);
                          input_content = result;
                          input.disabled = false;
                       }
                    });
                } else if (settings.data) {
                    input_content = settings.data;
                    if ($.isFunction(settings.data)) {
                        input_content = settings.data.apply(self, [self.revert, settings]);
                    }
                } else {
                    input_content = self.revert; 
                }
		input_content = input_content.replace(/<a([^>]+)?>/gi, "");
		input_content = input_content.replace(/<\/a([^>]+)?>.*/gi, "");
		input_content = input_content.replace(/^\s*/gi, "");

                content.apply(form, [input_content, settings, self]);

                input.attr('name', settings.name);
        
                /* Add buttons to the form. */
                buttons.apply(form, [settings, self]);
         
                /* Add created form to self. */
                $(self).append(form);
         
                /* Attach 3rd party plugin if requested. */
                plugin.apply(form, [settings, self]);

                /* Focus to first visible form element. */
                $(':input:visible:enabled:first', form).focus();

                /* Highlight input contents when requested. */
                if (settings.select) {
                    input.select();
                }
        
                /* discard changes if pressing esc */
                input.keydown(function(e) {
                    if (e.keyCode == 27) {
                        e.preventDefault();
                        reset.apply(form, [settings, self]);
                    }
                });

                /* Discard, submit or nothing with changes when clicking outside. */
                /* Do nothing is usable when navigating with tab. */
                var t;
                if ('cancel' == settings.onblur) {
                    input.blur(function(e) {
                        /* Prevent canceling if submit was clicked. */
                        t = setTimeout(function() {
                            reset.apply(form, [settings, self]);
                        }, 500);
                    });
                } else if ('submit' == settings.onblur) {
                    input.blur(function(e) {
                        /* Prevent double submit if submit was clicked. */
                        t = setTimeout(function() {
                            form.submit();
                        }, 200);
                    });
                } else if ($.isFunction(settings.onblur)) {
                    input.blur(function(e) {
                        settings.onblur.apply(self, [input.val(), settings]);
                    });
                } else {
                    input.blur(function(e) {
                      /* TODO: maybe something here */
                    });
                }

                form.submit(function(e) {

                    if (t) { 
                        clearTimeout(t);
                    }

                    /* Do no submit. */
                    e.preventDefault(); 
            
                    /* Call before submit hook. */
                    /* If it returns false abort submitting. */                    
                    if (false !== onsubmit.apply(form, [settings, self])) { 
                        /* Custom inputs call before submit hook. */
                        /* If it returns false abort submitting. */
                        if (false !== submit.apply(form, [settings, self])) { 

                          /* Check if given target is function */
                          if ($.isFunction(settings.target)) {
                              var str = settings.target.apply(self, [input.val(), settings]);
                              $(self).html(str);
                              self.editing = false;
                              callback.apply(self, [self.innerHTML, settings]);
                              /* TODO: this is not dry */                              
                              if (!$.trim($(self).html())) {
                                  $(self).html(settings.placeholder);
                              }
                          } else {
                              /* Add edited content and id of edited element to POST. */
                              var submitdata = {};
                              submitdata[settings.name] = input.val();
                              submitdata[settings.id] = self.id;
                              /* Add extra data to be POST:ed. */
                              if ($.isFunction(settings.submitdata)) {
                                  $.extend(submitdata, settings.submitdata.apply(self, [self.revert, settings]));
                              } else {
                                  $.extend(submitdata, settings.submitdata);
                              }

                              /* Quick and dirty PUT support. */
                              if ('PUT' == settings.method) {
                                  submitdata['_method'] = 'put';
                              }

                              /* Show the saving indicator. */
                              $(self).html(settings.indicator);
                              
                              /* Defaults for ajaxoptions. */
                              var ajaxoptions = {
                                  type    : 'POST',
                                  data    : submitdata,
                                  dataType: 'html',
                                  url     : settings.target,
                                  success : function(result, status) {
                                      if (ajaxoptions.dataType == 'html') {
                                        $(self).html(result);
                                      }
                                      self.editing = false;
                                      callback.apply(self, [result, settings]);
                                      if (!$.trim($(self).html())) {
                                          $(self).html(settings.placeholder);
                                      }
                                  },
                                  error   : function(xhr, status, error) {
                                      onerror.apply(form, [settings, self, xhr]);
                                  }
                              };
                              
                              /* Override with what is given in settings.ajaxoptions. */
                              $.extend(ajaxoptions, settings.ajaxoptions);   
                              $.ajax(ajaxoptions);          
                              
                            }
                        }
                    }
                    
                    /* Show tooltip again. */
                    $(self).attr('title', settings.tooltip);
                    
                    return false;
                });
            });
            
            /* Privileged methods */
            this.reset = function(form) {
                /* Prevent calling reset twice when blurring. */
                if (this.editing) {
                    /* Before reset hook, if it returns false abort reseting. */
                    if (false !== onreset.apply(form, [settings, self])) { 
                        $(self).html(self.revert);
                        self.editing   = false;
                        if (!$.trim($(self).html())) {
                            $(self).html(settings.placeholder);
                        }
                        /* Show tooltip again. */
                        if (settings.tooltip) {
                            $(self).attr('title', settings.tooltip);                
                        }
                    }                    
                }
            };            
        });

    };


    $.editable = {
        types: {
            defaults: {
                element : function(settings, original) {
                    var input = $('<input type="hidden"></input>');                
                    $(this).append(input);
                    return(input);
                },
                content : function(string, settings, original) {
                    $(':input:first', this).val(string);
                },
                reset : function(settings, original) {
                  original.reset(this);
                },
                buttons : function(settings, original) {
                    var form = this;
                    if (settings.submit) {
                        /* If given html string use that. */
                        if (settings.submit.match(/>$/)) {
                            var submit = $(settings.submit).click(function() {
                                if (submit.attr("type") != "submit") {
                                    form.submit();
                                }
                            });
                        /* Otherwise use button with given string as text. */
                        } else {
                            var submit = $('<button type="submit" />');
                            submit.html(settings.submit);                            
                        }
                        $(this).append(submit);
                    }
                    if (settings.cancel) {
                        /* If given html string use that. */
                        if (settings.cancel.match(/>$/)) {
                            var cancel = $(settings.cancel);
                        /* otherwise use button with given string as text */
                        } else {
                            var cancel = $('<button type="cancel" />');
                            cancel.html(settings.cancel);
                        }
                        $(this).append(cancel);

                        $(cancel).click(function(event) {
                            if ($.isFunction($.editable.types[settings.type].reset)) {
                                var reset = $.editable.types[settings.type].reset;                                                                
                            } else {
                                var reset = $.editable.types['defaults'].reset;                                
                            }
                            reset.apply(form, [settings, original]);
                            return false;
                        });
                    }
                }
            },
            text: {
                element : function(settings, original) {
                    var input = $('<input />');
                    if (settings.width  != 'none') { input.width(settings.width);  }
                    if (settings.height != 'none') { input.height(settings.height); }
                    /* https://bugzilla.mozilla.org/show_bug.cgi?id=236791 */
                    //input[0].setAttribute('autocomplete','off');
                    input.attr('autocomplete','off');
                    $(this).append(input);
                    return(input);
                }
            },
            textarea: {
                element : function(settings, original) {
                    var textarea = $('<textarea />');
                    if (settings.rows) {
                        textarea.attr('rows', settings.rows);
                    } else if (settings.height != "none") {
                        textarea.height(settings.height);
                    }
                    if (settings.cols) {
                        textarea.attr('cols', settings.cols);
                    } else if (settings.width != "none") {
                        textarea.width(settings.width);
                    }
                    $(this).append(textarea);
                    return(textarea);
                }
            },
            select: {
               element : function(settings, original) {
                    var select = $('<select />');
                    $(this).append(select);
                    return(select);
                },
                content : function(data, settings, original) {
                    /* If it is string assume it is json. */
                    if (String == data.constructor) {      
                        eval ('var json = ' + data);
                    } else {
                    /* Otherwise assume it is a hash already. */
                        var json = data;
                    }
                    for (var key in json) {
                        if (!json.hasOwnProperty(key)) {
                            continue;
                        }
                        if ('selected' == key) {
                            continue;
                        } 
                        var option = $('<option />').val(key).append(json[key]);
                        $('select', this).append(option);    
                    }                    
                    /* Loop option again to set selected. IE needed this... */ 
                    $('select', this).children().each(function() {
                        if ($(this).val() == json['selected'] || 
                            $(this).text() == $.trim(original.revert)) {
                                $(this).attr('selected', 'selected');
                        }
                    });
                    /* Submit on change if no submit button defined. */
                    if (!settings.submit) {
                        var form = this;
                        $('select', this).change(function() {
                            form.submit();
                        });
                    }
                }
            }
        },

        /* Add new input type */
        addInputType: function(name, input) {
            $.editable.types[name] = input;
        }
    };

    /* Publicly accessible defaults. */
    $.fn.editable.defaults = {
        name       : 'value',
        id         : 'id',
        type       : 'text',
        width      : 'auto',
        height     : 'auto',
        event      : 'dblclick.editable',
        onblur     : 'cancel',
        loaddisabledtype   : 'GET',
        loaddisabledtext   : 'Loading...',
        placeholder: 'Click to edit',
        loaddisableddata   : {},
        submitdata : {},
        ajaxoptions: {}
    };

})(jQuery);

