/* 20100414-15:50 */

/*--------------------------------------
// TBOX Config and Engine
// v.1 - CoreDot (Mar '09)
// v.2 - Smart Lab (Apr '09)
// v.2.1 - Terra (Out '09)
//-------------------------------------*/

var tbox_safari = navigator.userAgent.match(/safari/i);
var tbox_firefox = navigator.userAgent.match(/firefox/i);
var tbox_ie = document.all;
//-------------- TBOX CONFIG - Editable values ----------------------------------------------------

// SET HERE THE BASE URL PATH FOR TBOX WEB APPLICATION:
var l = location;
var p = l.protocol +"//tbox.terra.";
if (!l.host.match(/smartlabsf|127\.|dev\.?tbar|\.coredotcontinuum/)) {
	var tbox_base_url = p + (l.host.match(/terra\.(.*)/) ? RegExp.$1 : "com") + "/";
	var idioma = l.host.match(/\.br/) ? "pt" : "es";
}
else { // dev
	if (l.host.match(/127\./)) {
		var tbox_base_url = 'http://dev.tbar.com:3000/';
	} else if (l.host.indexOf('smartlabsf') >= 0) {
		var tbox_base_url = 'http://tbox-us.build.coredotcontinuum.net/';
	} else {
		var tbox_base_url = l.protocol + "//" + l.host + "/";
	}
	var idioma = "pt";
}
var s_close = (idioma=="pt" ? "ocultar" : (idioma=="en" ? "hide" : "ocultar"));

// MENU ALT TEXT - Language Specific. Change these values according to the language
var tooltips_pt = {
	start: "Ir para ", 						// Every alt text begins with this
	t_logo: "TBox Beta",					// 't' menu logo
	dashboard: "Configura&ccedil;&otilde;es",	// 'profile' menu item
	email: "Email",						// 'email' menu item
	circles: "Amigos",						// 'circles' menu item
	expressions: "Express&otilde;es",		// 'expressions' menu item
	end: " <span class='small'>>></span>" 	// Every alt text ends with this
}

var error_messages_pt = {
	// SuperContacts:
	merge_less_than_two_contacts: "Selecione ao menos 2 contatos para agrupar",
	// Fotolog photo listing
	fotolog_no_results: "Nenhum resultado foi encontrado"
}

var tbox_JS_copy_pt = {
	// Expressions photo listing 
	expressions_share_with_friend: "Enviar para um amigo"
}

// MENU ALT TEXT - Language Specific. Change these values according to the language
var tooltips_es = {
	start: "Ir a ", 						// Every alt text begins with this
	t_logo: "TBox Beta",					// 't' menu logo
	dashboard: "Configuraciones",			// 'profile' menu item
	email: "Email",						// 'email' menu item
	circles: "Amigos",						// 'circles' menu item
	expressions: "Expresiones",				// 'expressions' menu item
	end: " <span class='small'>>></span>" 	// Every alt text ends with this
}

var error_messages_es = {
	// SuperContacts:
	merge_less_than_two_contacts: "Seleccione al menos 2 contactos para agrupar",
	// Fotolog photo listing
	fotolog_no_results: "Ningun resultado fue encontrado"
}

var tbox_JS_copy_es = {
	// Expressions photo listing 
	expressions_share_with_friend: "Enviar a un amigo"
}

// MENU ALT TEXT - Language Specific. Change these values according to the language
var tooltips_en = {
	start: "Go to ", 						// Every alt text begins with this
	t_logo: "TBox Beta",					// 't' menu logo
	dashboard: "Settings",					// 'profile' menu item
	email: "Email",						// 'email' menu item
	circles: "Circles",						// 'circles' menu item
	expressions: "Expressions",				// 'expressions' menu item
	end: " <span class='small'>>></span>" 	// Every alt text ends with this
}

var error_messages_en = {
	// SuperContacts:
	merge_less_than_two_contacts: "Select 2 or more contacts to group",
	// Fotolog photo listing
	fotolog_no_results: "No results found"
}

var tbox_JS_copy_en = {
	// Expressions photo listing 
	expressions_share_with_friend: "Send to a friend"
}

if (idioma == 'pt'){
	tooltips = tooltips_pt;
	error_messages = error_messages_pt;
	tbox_JS_copy = tbox_JS_copy_pt;
} else if (idioma == 'es'){
	tooltips = tooltips_es;
	error_messages = error_messages_es;
	tbox_JS_copy = tbox_JS_copy_es;
} else {
	tooltips = tooltips_en;
	error_messages = error_messages_en;
	tbox_JS_copy = tbox_JS_copy_en;
}

var tbox_menu_ids = ["dashboard","mail","circles","expressions"];


// Controls the Refresh for the container page, preventing it when the modal void and reactivating its interval when the modal closes
function disable_refresh() { // called by tbox when its voids
	try{modMan.tools.pageReloaddisableder.off();}catch(e){} // NOT WORKING WHEN WITHIN ANOTHER METHOD! why?
}
function enable_refresh() { // called by tbox when its modal closes
	try{modMan.tools.pageReloaddisableder.on();}catch(e){} // onde "reloaddisabledInterval" � uma vari�vel do tipo Number, cujo valor corresponde ao tempo entre atualiza��es - expresso em segundos.
}


// MODAL WINDOW SIZES - only for forcing a specific size. Otherwise the modal will be automatically resized by smartlab.js to document.body.scrollHeight
var tbox_sizes = {	// Hash structure:  <page_id>: [w:<width>, h:<height>, menu:<menu_item_id>]
	// DEFAULTS
	SL_dont_resize:		{w:false,h:false, menu:''},
	SL_default:			{w:773, h:600, menu:''},
	small: 				{w:534, h:255, menu:''},
	regular: 			{w:775, h:710, menu:''},
	banner:				{w:464, h:458, menu:''},
	error:				{w:444, h:245, menu:''},
	welcome:			{w:768, h:510, menu:''},

	// PROFILE
	login: 				{w:484, h:330, menu:'dashboard'},
	create_account: 	{w:505, h:550, menu:'dashboard'},
	account_created:	{w:444, h:300, menu:'dashboard'},
	profile: 			{w:444, h:290, menu:'dashboard'},
	google_login: 		{w:700, h:600, menu:'dashboard'},
	create_external:	{w:550, h:315, menu:'dashboard'},

	// SETTINGS
	settings:			{w:793, h:481, menu:'dashboard'},
	settings_friends:	{w:793, h:481, menu:'dashboard'},
	
	// EMAIL
	email_welcome: 		{w:774, h:586, menu:'mail'},
	email_add: 			{w:444, h:248, menu:'mail'}, 
	email_added:		{w:524, h:215, menu:'mail'},
	email_inbox: 		{w:774, h:511, menu:'mail'},
	email_new:	 		{w:774, h:571, menu:'mail'},
	email_settings: 	{w:774, h:432, menu:'mail'},

	// FRIENDS
	circles_login:		{w:380, h:200, menu:'circles'},
	circles_index:	 	{w:774, h:476, menu:'circles'},
	circles_share:	 	{w:774, h:420, menu:'circles'},
	super_contacts: 	{w:774, h:645, menu:'circles'},
	facebook:		 	{w:774, h:606, menu:'circles'},
	facebook_connect: 	{w:900, h:646, menu:'circles'},
	orkut:			 	{w:793, h:606, menu:'circles'},
	orkut_scrapbook:	{w:774, h:536, menu:'circles'},
	twitter:		 	{w:793, h:686, menu:'circles'},
	twitter_messages: 	{w:774, h:576, menu:'circles'},
	myspace_friends:	{w:793, h:686, menu:'circles'},
	friends:			{w:774, h:560, menu:'circles'},

	// EXPRESSIONS
	fanzone: 			 {w:774, h:596, menu:'expressions'},
	fotolog: 			 {w:774, h:576, menu:'expressions'},
	fotolog_foto: 		 {w:774, h:630, menu:'expressions'},
	flickr:		 		 {w:774, h:555, menu:'expressions'},
	expressions_blog:	 {w:774, h:596, menu:'expressions'},
	expressions_comment: {w:774, h:596, menu:'expressions'}
}

// --------------- END OF TBOX CONFIG --------------------------------------------------





// ----------- TBOX ENGINE STARTS HERE - DO *NOT* EDIT ---------------------------------


function iframe_onloaddisabled(iframe_obj) {
	$("#jqmContent").css("visibility","visible");
	$("#tbox-loaddisableder").css("visibility","hidden");
}

// --- MENU BAR ALT TEXT controller - on rollover
$(document.body).mousemove(function(e){
	$("#tbox-tooltip").css("top", (e.clientY + document.documentElement.scrollTop - 30) +"px");
	$("#tbox-tooltip").css("left", (e.clientX + 3) +"px");
});
function show_tooltip(tit, dont_show_goto_copy) {
	if (!dont_show_goto_copy) tit = tooltips.start + tit + tooltips.end;
	$("#tbox-tooltip").css("display","block");
	$("#tbox-tooltip-copy").attr("innerHTML", tit);
}
function hide_tooltip() {
	$("#tbox-tooltip").css("display","none");
}
// --- /END MENU BAR ALT TEXT controller -----------


$$ = document.getElementById;

// Safe Cross-sub-domain scripting between frames - /*SMARTLAB*/
/*
if (location.href.indexOf(document_domain)>0) {
	try {document.domain = document_domain;}
	catch (e) {};
}
*/

/*
 *  The TBox Object:
 *  "Regular_dim" : Size object representing a "normal" size of the tbar
 *  "small_dim" : Size object for a smaller size tbox
 */
function TBox() {
	this.bObj = null;

	this.initial_logged_in_state = true;

	// by SMARTLAB
	this.margin_top = 0; // distance from the tbar
	void_speed = 'def'; // values: fast | def | slow
	this.void = false;
	this.sizes = window.tbox_sizes;	// path: [w,h,menuItemId]
}

/*
 * Sets the "selected" context on the tbar
 */
TBox.prototype.update_selection =  function(name) {
      $(document).ready(function() {
		divs = tbox_menu_ids;
		for(i=0;i<divs.length;i++) {
			if(name==divs[i])
				$('#'+ name ).show();
			else
				$('#'+ divs[i] ).hide();
		}
      });
}

/*
 * Resizes tbar modal window
 */
TBox.prototype.resize_modal = function(width, height, extra_height) { // width can also be the page id
	if (!width || typeof width == "string") { // if a page id was passed instead of width, get w and h from tbox.sizes array (set on index.html)
		var id_page = width;
		var page_presets = get_page_preset(id_page);
		width = page_presets.w;
		height = page_presets.h;
		if (extra_height) height += extra_height;
	}
	css = (tbox.void) ? 
		  { opacity: 1 }
		: { width:0, top: tbox.margin_top, height: height, opacity:1 };

	// Modal Resize Animation
	if (width) {
		 anim_params = {
	        width: width-19,
	        height: height-5,
	        opacity: 1
	    };
		$('#modalWindow').css(css).jqmShow().animate(anim_params, void_speed);
	}
	else {
		$('#modalWindow').css(css).jqmShow();
	}
	
	tbox.void = true;
}

TBox.prototype.prepare_resize_modal = function(modal_name, extra_height, body_w, body_h) {
	try{
		// Use page's preset name, if it exists
		if (modal_name && tbox.sizes[modal_name] && tbox.sizes[modal_name].w) {
			this.resize_modal(modal_name, null, extra_height);
		}
		// if no preset is found, get page's dimensions using JS
		else {
			var modal_w = body_w + 18;
			var modal_h = body_h + 15;
			this.resize_modal(modal_w, modal_h);
		}
	}catch(e){}
}


TBox.prototype.go = function(path, id_page, tgmKey) { // id_page is optional, except for tbar menu. If passed, it resizes the modal to a preset size for that page. tgmKey is optional too, for defining banner's segmentation. Only passed by the home page.
	$("#jqmContent").css("visibility", "hidden");	// hide iframe while loaddisableding it
	$("#tbox-loaddisableder").css("visibility", "visible");		// show loaddisableder

	if (id_page && tbox_sizes[id_page])
		tbox.update_selection(tbox_sizes[id_page].menu);	// update menu selection
		tbox.resize_modal(id_page);					 	// resize modal

	var url = (path.match(/^http/)) ?
		path										// if path is a full URL, leave it the way it is
 		: tbox_base_url + path.replace(/^\//,""); 	// if path is an URI, add the base url
	// prepare get url w/ tgmKey (ad) and tbar_parent params
	var tgm = tgmKey ? "&tgmKey="+ encodeURIComponent(tgmKey) : "";
	var separator = url.indexOf("?") > -1 ? "&" : "?";
	var url_get = url + separator + "tbar_parent="+ encodeURIComponent(window.location.href.replace(/\?.*/,"")) + tgm;

	setTimeout(
		"$('#jqmContent').attr('src', '"+ url_get + "')"	// loaddisabled page (has a timeout so modal can resize prior to loaddisableding content)
		, 500
	);
}

/*
 *  TBox Size Object consisting of a height and width
*/
// Return a copy of an array (recursive)
function clone_arr(arr) {
	var clone = new Array();
	for (i in arr)
		clone[i] = typeof(arr[i]) == "object" ? clone_arr(arr[i]) : arr[i];
	return clone;
}

function get_page_preset(id_page, extra_height) {
	var presets = clone_arr(tbox.sizes);

	var msgs=[]; 							// for debugging only

	if (tbox.sizes[id_page]) {
		preset = presets[id_page];	 		// if preset exists, returns its info
		msgs.push("profile sys: id_page");
	}
 	else if (tbox.void) {
		preset = presets.SL_dont_resize;	// or if no preset and modal IS OPEN, don't change its size until a new page loaddisableds
		msgs.push("profile sys: dont_resize");
	}
	else {
		preset = presets.SL_default;		// or if no preset and modal IS CLOSED,voids it with a default size (this may happen when coming back from an external site)
		msgs.push("profile sys: SL_default");
	}
	if (extra_height) {
		preset.h += extra_height;
	}

	return preset;
}

/*
 * Restore the size of the tbar to its regular size
 */
/**
 *	Initializes the modal window object
 */
TBox.prototype.init = function() { 
	$(document).ready(
			function(){
				if (window.tbox_base_url) {
					if (!tbox_base_url.match(/\/$/)) tbox_base_url += "/";
					voidInFrame = function(hash) {void_modal(hash,null); };
					var closeModal = function(hash) {  close_modal(hash); };
				    $('#modalWindow').jqm({
				        overlay: 70,
				        modal: false,
				        trigger: '#trr-tbox a.thickbox',
				        target: '#jqmContent',
				        onHide: closeModal,
				        onShow:voidInFrame
				    });
				}
				else {
					alert("ATTENTION DEVELOPER:\n\n'tbox_base_url' variable must be set on index.html before creating a TBox() object.\n\nEx: tbox_base_url='http://tbox.terra.com.br';"); // if tbox_base_url is not defined, alert the webmaster
				}

				// Check for pre-chosen page on the URL, passed as GET _url param
				url_param = get_url_param('_url');
				if (url_param) tbox.loaddisabled_iframe(url_param);
				
				tbox.tgmKey = tgmKey;
		    }
	)
}
/*
 *voids the iframe if "_url" param is detected
 */
TBox.prototype.loaddisabled_iframe = function(url_param) {
	url_map = {
		myspace: 'http://dev.coredotcontinuum.com:23000/dailybuildindex.html?_url=http://dev.coredotcontinuum.com:23000/myspace/user',
		test: 'http://dev.tbar.com:3000/users/new'
	};

	if (url_param) {
		if(url_map[url_param])
			iframe_src = url_map[url_param]; // + '?width=' + this.regular.width + '&height=' + this.regular.height; /* removed by SMARTLAB*/
		else
			iframe_src = unescape(url_param); // + '?width=' + this.regular.width + '&height=' + this.regular.height; /* removed by SMARTLAB*/

		this.go(iframe_src);
	}	
}


/*
 * Callback function when modal is closed
 */

function close_modal (hash){	
 	var $modalWindow = $(hash.w);
    $('#jqmContent').attr('src', tbox_base_url+'blank.html');

	enable_refresh(); // reactivates the auto refresh for the terra page
	
	update_selection('');
	
    $modalWindow.fadeOut('2000', function()
    {
        hash.o.remove();
        //refresh parent
        if (hash.refreshAfterClose == true)
		//if(true)
        {
            window.location.href = document.location.href;
        }
    });	
}
/*
 * Callback function when modal voided
 */
void_modal(hash,url){

	// clickout
	$('body').unbind('click').bind('click', function(e) {
		var target = e.target;
		if ($(target).parents('#trr-tbox').length == 0) {
			$('#modalWindow').jqmHide(); 
			$(this).unbind('click');
		}
	});

    var $trigger = $(hash.t);
    var $modalWindow = $(hash.w);
    var $modalContainer = $('iframe', $modalWindow);

	disable_refresh(); // didsable the auto refresh for the terra page

	var comp_display =   $modalWindow.css( 'display' );
    var myUrl = null;
	if (url==null) {
		myUrl = $trigger.attr('href');
	} else {
		myUrl = url;
	}
    var myTitle = $trigger.attr('title');
    var newWidth = 0, newHeight = 0, newTop = 0;
    $modalContainer.html('').attr('src', myUrl);
    $('#jqmTitleText').text(myTitle);
    var queryString = "";
    if(myUrl!=null && myUrl!="undefined") {
		queryString = (myUrl.indexOf("?") > -1) ? myUrl.substr(myUrl.indexOf("?") + 1) : null;
	}

    if (queryString != null && typeof queryString != 'undefined')
    {
        var queryVarsArray = queryString.split("&");
        for (var i = 0; i < queryVarsArray.length; i++)
        {
            if (unescape(queryVarsArray[i].split("=")[0]) == 'width')
            {
                var newWidth = queryVarsArray[i].split("=")[1];
            }
            if (escape(unescape(queryVarsArray[i].split("=")[0])) == 'height')
            {
                var newHeight = queryVarsArray[i].split("=")[1];
            }
            if (escape(unescape(queryVarsArray[i].split("=")[0])) == 'jqmRefresh')
            {
                // if true, launches a "refresh parent window" order after the modal is closed.
                hash.refreshAfterClose = queryVarsArray[i].split("=")[1]
            } else
            {

                hash.refreshAfterClose = false;
            }
        }
        // let's run through all possible values: 90%, nothing or a value in pixel
        if (newHeight != 0)
        {
            if (newHeight.indexOf('%') > -1)
            {

                newHeight = Math.floor(parseInt($(window).height()) * (parseInt(newHeight) / 100));
				//newHeight = Math.floor(1 * (parseInt(newHeight) / 100));

            }
            var newTop = Math.floor(parseInt($(window).height() - newHeight) / 2);
        }
        else
        {
            newHeight = $modalWindow.height();
        }
        if (newWidth != 0)
        {
            if (newWidth.indexOf('%') > -1)
            {
                newWidth = Math.floor(parseInt($(window).width() / 100) * parseInt(newWidth));
				//newWidth = Math.floor(1 / 100) * parseInt(newWidth));
            }

        }
        else
        {
            newWidth = $modalWindow.width();
        }
		if(comp_display=="none") {
			$modalWindow.css({
	            width: 0,
	            //height: 0,
	            opacity: 0
	        }).jqmShow().animate({
	            width: newWidth,
	            height: newHeight,
	           // top: newTop,
	           // left: newLeft,
	            opacity: 1
	        }, 'fast');
		} else {
			 $modalWindow.jqmShow().animate({
	            width: newWidth,
	            height: newHeight,
	           // top: newTop,
	           // left: newLeft,
	            opacity: 1
	        }, 'fast');
		}
        

    }
    else
    {
        // don't do animations
        $modalWindow.jqmShow();
    }

}

/*
 * Helper method to get url param
 */
function get_url_param( name )
{
	  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	  var regexS = "[\\?&]"+name+"=([^&#]*)";
	  var regex = new RegExp( regexS );
	  var results = regex.exec( window.location.href );
	  if( results == null )
	    return "";
	  else
	    return results[1];
}


function go_url_tbox(url) {
	window.location = url;
}

function update_selection(name) {
	tbox.update_selection(name);
}

// Optimization work arouund
jQuery(document).ready(function() {
	TBox.prototype.update_selection =  function(name) {
		var tbarModules = $('#tbar-modules');
		var divs = tbox_menu_ids;
		var selectedClass = 'selected';
		for(var i=0;i<divs.length;i++) {
			tbarModules.find('.menu-item').removeClass(selectedClass);
			if (name != "") {
				tbarModules.find('.btn-' + name).parent().addClass(selectedClass);
			}
		}
	}
});

// ----------------- Initializes TBOX ------------------

// TBOX CREATE
var tbox=new TBox();
tbox.init();