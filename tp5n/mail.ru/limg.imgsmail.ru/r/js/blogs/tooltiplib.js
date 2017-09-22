//<![CDATA[
/* constants */
var LEFT = 1000000;
var RIGHT = 1000001;
var CENTER = 1000002;
var ABOVE = 1000003;
var BELOW = 1000004;

/* this variable can change */
var ttl_divid='tooltipDiv';
var ttl_innerdivid='tooltipDivContent';
var ttl_color="#404040";
var ttl_background="#FFFFF0";
var ttl_rounded=true;
var ttl_showempty=false;
var ttl_opacity=1;
var ttl_fontsize;
var ttl_fontname;
var ttl_textalign;
var ttl_width=200;
var ttl_height=0;
var ttl_offsetx=13;
var ttl_offsety=13;
var ttl_hpos=RIGHT;
var ttl_vpos=BELOW;
var ttl_paddingx='3px';
var ttl_paddingy='1px';
var ttl_ontimeout=500;
var ttl_offtimeout=10;

/* inernal variables */
var ttl_x=0;
var ttl_y=0;
var ttl_customdiv=true;
var ttl_allowmove=true;
var ttl_ontimer=0;
var ttl_offtimer=0;
var ttl_visible=false;
var ttl_div;
var ttl_Op = (navigator.userAgent.toLowerCase().indexOf('opera') > -1 && document.createTextNode);  // Opera 7
var ttl_Ns6 = (document.getElementById) ? true : false;
var ttl_Ie4 = (document.all) ? true : false;
var ttl_Ie5 = false; 
var ttl_Ie55 = false;
var ttl_docRoot = 'document.body';
var ttl_checkmousecapture=true;
var ttl_hoveringswitch=false;

// Microsoft Stupidity Check(tm).
if (ttl_Ie4) {
	var agent = navigator.userAgent;
	if (/MSIE/.test(agent)) {
		var versNum = parseFloat(agent.match(/MSIE[ ](\d\.\d+)\.*/i)[1]);
		if (versNum >= 5){
			ttl_Ie5=true;
			ttl_Ie55=(versNum>=5.5&&!ttl_Op) ? true : false;
			if (ttl_Ns6) ttl_Ns6=false;
		}
	}
	if (ttl_Ns6) ttl_Ie4 = false;
}

// Check for compatability mode.
if (document.compatMode && document.compatMode == 'CSS1Compat') {
	ttl_docRoot= ((ttl_Ie4 && !ttl_Op) ? 'document.documentElement' : ttl_docRoot);
}

// Capture the mouse and chain other scripts.
function ttlMouseCapture(e) {
	capExtent = document;
	var fN, str = '', l, k, f, wMv, sS, mseHandler = ttlMouseMove;
	var re = /function[ ]*(\w*)\(/;
	
	wMv = (!ttl_Ie4 && window.onmousemove);
	if (document.onmousemove || wMv) {
		if (wMv) capExtent = window;
		f = capExtent.onmousemove.toString();
		fN = f.match(re);
		if (fN == null) {
			str = f+'(e); ';
		} else if (fN[1] == 'anonymous' || fN[1] == 'ttlMouseMove' || (wMv && fN[1] == 'onmousemove')) {
			if (!ttl_Op && wMv) {
				l = f.indexOf('{')+1;
				k = f.lastIndexOf('}');
				sS = f.substring(l,k);
				if ((l = sS.indexOf('(')) != -1) {
					sS = sS.substring(0,l).replace(/^\s+/,'').replace(/\s+$/,'');
					if (eval("typeof " + sS + " == 'undefined'")) window.onmousemove = null;
					else str = sS + '(e);';
				}
			}
			if (!str) {
				ttl_checkmousecapture = false;
				return;
			}
		} else {
			if (fN[1]) str = fN[1]+'(e); ';
			else {
				l = f.indexOf('{')+1;
				k = f.lastIndexOf('}');
				str = f.substring(l,k) + '\n';
			}
		}
		str += 'ttlMouseMove(e); ';
		mseHandler = new Function('e', str);
	}
	capExtent.onmousemove = mseHandler;
	var div = ttlGetTooltipDiv();
	if(!div) return;
	div.onmouseover = ttlTooltipOver;
	ttlMouseMove(e);
}

function ttlGetById(id)
{
	return ttl_Ie4?document.all[id]:document.getElementById(id);
}

function ttlCreateTooltipDiv()
{
	var div = document.createElement('DIV');
	div.setAttribute('id',ttl_divid);
	if(ttl_width) 
		if(ttl_width==parseInt(ttl_width,10)) {
			div.style.width=ttl_width+'px';
		} else {
			div.style.width=ttl_width;
		}
	else div.style.width='';
	div.style.overflow='hidden';
	div.style.position='absolute';
	div.style.zIndex=1000;
	div.style.top='0px';
	div.style.left='0px';
	div.style.visibility='hidden';
	document.body.appendChild(div);
	ttl_customdiv=false;
	ttl_div=div;
	return div;
}

function ttlGetTooltipDiv()
{
	var div = ttl_div;
	if(div) return div;
	div = ttlGetById(ttl_divid);
	if(div) return div;
	div=ttlCreateTooltipDiv();
	ttlSetTooltipStyle(div);
	return div;
}

function ttlSetTooltipStyle(div,text,attrs)
{
	if(!div) return false;
	if(!ttl_customdiv) {
		var color=ttl_color;
		var background=ttl_background;
		var width=ttl_width;
		var fontsize=ttl_fontsize;
		var fontname=ttl_fontname;
		var textalign=ttl_textalign;
		var opacity=ttl_opacity;

		if(attrs) {
			if(attrs.color) color=attrs.color;
			if(attrs.background) background=attrs.background;
			if(attrs.width!=undefined) width=attrs.width;
			if(attrs.fontsize) fontsize=attrs.fontsize;
			if(attrs.fontname) fontname=attrs.fontname;
			if(attrs.textalign) textalign=attrs.textalign;
			if(attrs.opacity!=undefined) opacity=attrs.opacity;
		}
		if(width) 
			if(width==parseInt(width,10)) {
				div.style.width=width+'px';
			} else {
				div.style.width=width;
			}
		else div.style.width='';
		var html='';
		if(ttl_rounded) {
			html+='<div style="margin:0px"><div style="margin:0px 1px;height:1px;overflow:hidden;font-size:1px;';
			if(background) html+='background:'+background+';';
			html+='"></div></div>';
		}
		html+='<div id="tooltipDivContent" style="padding:'+ttl_paddingy+' '+ttl_paddingx+';';
		if(background) html+='background:'+background+';';
		if(color) html+='color:'+color+';';
		if(fontsize) html+='font-size:'+fontsize+';';
		if(fontname) html+='font-family:'+fontname+';';
		if(textalign) html+='text-align:'+textalign+';';
		html+='"></div>';
		if(ttl_rounded) {
			html+='<div style="margin:0px"><div style="margin:0px 1px;height:1px;overflow:hidden;font-size:1px;';
			if(background) html+='background:'+background+';';
			html+='"></div></div>';
		}
		div.innerHTML=html;
		if(opacity!=undefined) { 
			div.style.opacity=opacity;
			div.style.filter='alpha(opacity='+(opacity*100)+')';
		}
	}
	var div = ttlGetById(ttl_innerdivid);
	if(!div) return false;
	if(attrs && attrs.copyfrom) {
		var source = ttlGetById(attrs.copyfrom);
		if(source) div.innerHTML=source.innerHTML;
	}
	else {
		if(text!=undefined) div.innerHTML=text;
	}
	return true;
}

function ttlSetTooltipText(text)
{
	return true;
}

function ttlCursorOff(div) {
	if(!div) div=ttlGetTooltipDiv();
	if(!div) return;
	var left = parseInt(div.style.left,10);
	var top = parseInt(div.style.top,10);
	var right = left + (parseInt(div.style.width,10) ? parseInt(div.style.width,10) : div.offsetWidth );
	var bottom = top + (parseInt(div.style.height,10) ? parseInt(div.style.height,10) : div.offsetHeight );
	if (ttl_x < left-1 || ttl_x > right+1 || ttl_y < top-1 || ttl_y > bottom+1) return true;
	return false;
}

function ttlMouseMove(e)
{
	e = e || window.event;
	if(!e) return;
	if (e.pageX) {
		ttl_x = e.pageX;
		ttl_y = e.pageY;
	}
	else if (e.clientX) {
		ttl_x = eval('e.clientX + '+ttl_docRoot+'.scrollLeft');
		ttl_y = eval('e.clientY + '+ttl_docRoot+'.scrollTop');
	}
	if(ttl_visible && ttl_allowmove) ttlPlaceTooltip();
	if (ttl_hoveringswitch && ttlCursorOff()) {
		ttlHideTooltip();
		ttl_hoveringswitch = 0;
	}
}

// get Browser window width
function ttlWindowWidth() {
	var w;
	if (self.innerWidth) w=self.innerWidth;
	else if(eval("typeof "+ttl_docRoot+".clientWidth=='number'")) 
		w=eval(ttl_docRoot+'.clientWidth');
	return w;			
}

function ttlPlaceHorizontal(div,x,winwidth,winoffset,widthfix)
{

	var divwidth = parseInt(div.style.width,10);
	if(!divwidth) divwidth = div.offsetWidth;
	if(ttl_hpos == CENTER) { // Center
		x = x+ttl_offsetx-(divwidth/2);
		if (x < winoffset) x = winoffset;
		if((x+divwidth) > (winoffset+winwidth - widthfix)) {
			x = winwidth+winoffset - divwidth - widthfix;
			if(x<0) x=0;
		}
	}

	if(ttl_hpos == RIGHT) { // Right
		x = x+ttl_offsetx;
		if((x+divwidth) > (winoffset+winwidth - widthfix)) {
			x = winwidth+winoffset - divwidth - widthfix;
			if(x<0) x=0;
		}
	}
	if (ttl_hpos == LEFT) { // Left
		x = x-ttl_offsetx-divwidth;
		if(x<winoffset) x=winoffset;
	}
	return x;
}

function ttlPlaceVertical(div,y,winheight,winoffset)
{
	var divheight=div.style.height;
	if(!divheight) divheight = div.offsetHeight;
	// From mouse
	if (ttl_vpos == ABOVE) {
		y = y - (divheight+ttl_offsety);
		if (y<winoffset) y = winoffset;
	} else {
		// BELOW
		y = y+ttl_offsety;
	} 
	return y;
}

function ttlPlaceTooltip(div)
{
	if(!div) div=ttlGetTooltipDiv();
	if(!div) return false;
	var widthFix=0;
	if (self.innerWidth) widthFix=18; 
	var iwidth = ttlWindowWidth();
	var winoffset=(ttl_Ie4) ? eval('self.'+ttl_docRoot+'.scrollLeft') : self.pageXOffset;
	var iheight;
	if (self.innerHeight) {
		iheight=self.innerHeight;
	} else if (eval("typeof "+ttl_docRoot+".clientHeight=='number'")&&eval(ttl_docRoot+'.clientHeight')) { 
		iheight=eval(ttl_docRoot+'.clientHeight');
	}			

	// Vertical scroll offset
	var scrolloffset=(ttl_Ie4) ? eval(ttl_docRoot+'.scrollTop') : self.pageYOffset;
	var x=ttlPlaceHorizontal(div,ttl_x,iwidth,winoffset,widthFix);
	var y=ttlPlaceVertical(div,ttl_y,iheight,scrolloffset);
	div.style.left=x+'px';
	div.style.top=y+'px';
	return true;
}

function ttlShowTooltip(div)
{
	if(!div) div=ttlGetTooltipDiv();
	if(!div) return;
	ttlPlaceTooltip(div);
	div.style.visibility = 'visible';
	ttl_visible=true;
	if(ttl_offtimer) { clearTimeout(ttl_offtimer); ttl_offtimer=0; }
	if(ttl_ontimer) { clearTimeout(ttl_ontimer); ttl_ontimer=0; }
}

function ttlHideTooltip(div)
{
	if(!div) div=ttlGetTooltipDiv();
	if(!div) return;
	div.style.visibility = 'hidden';
	ttl_visible=false;
	if(ttl_offtimer) { clearTimeout(ttl_offtimer); ttl_offtimer=0; }
	ttl_allowmove=false;
}

function ttlPopupTooltip()
{
	var div=ttlGetTooltipDiv();
	if(!div) return;
	ttlShowTooltip(div);
	ttlPlaceTooltip(div);
}

function ttlTooltipOver()
{
	if(ttl_offtimer) clearTimeout(ttl_offtimer);
	ttl_offtimer=0;
	ttl_hoveringswitch=1;
}

function ttlOver(e,text,attrs)
{
	var div = ttlGetTooltipDiv();
	if(!div) return true;
	if (ttl_checkmousecapture) ttlMouseCapture(e);
	e = e || window.event;
	ttl_allowmove = e.type=='mousemove';
	var delay = e.type=='mouseover';
	if(!ttl_visible && (text!='' || ttl_showempty)) {
		ttlSetTooltipStyle(div,text,attrs);
		if(ttl_offtimer) { clearTimeout(ttl_offtimer); ttl_offtimer=0; }
		if(!delay) ttlShowTooltip(div)
		else {
			if(ttl_visible) ttlHideTooltip(div);
			ttl_visible=true;
			ttl_ontimer=setTimeout("ttlPopupTooltip()",ttl_ontimeout);
		}
	}
	return false;
}

function ttlOut()
{
	var div = ttlGetTooltipDiv();
	if(!div) return false;
	ttl_visible=false;
	if(ttl_ontimer) { clearTimeout(ttl_ontimer); ttl_ontimer=0; }
	ttl_offtimer=setTimeout("ttlHideTooltip()",ttl_offtimeout);
	return false;
}

//]]>
