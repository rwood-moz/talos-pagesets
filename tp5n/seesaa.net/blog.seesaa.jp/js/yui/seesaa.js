/*
   seesaa.js
   YAHOO.seesaa.ShowHide
   YAHOO.seesaa.OLMenu
   YAHOO.seesaa.OLTips
   YAHOO.seesaa.Scroll
   YAHOO.seesaa.PanelWebPage
   YAHOO.seesaa.Pager
   YAHOO.seesaa.PreventSubmit
   YAHOO.seesaa.RemainValue
   YAHOO.seesaa.Supported
*/

YAHOO.namespace("seesaa");
YAHOO.util.Key = new function() {
	// DOM key constants 
	this.DOM_VK_UNDEFINED               = 0x0;
	this.DOM_VK_RIGHT_ALT               = 0x12;
	this.DOM_VK_LEFT_ALT                = 0x12;
	this.DOM_VK_LEFT_CONTROL            = 0x11;
	this.DOM_VK_RIGHT_CONTROL           = 0x11;
	this.DOM_VK_LEFT_SHIFT              = 0x10;
	this.DOM_VK_RIGHT_SHIFT             = 0x10;
	this.DOM_VK_META                    = 0x9D;
	this.DOM_VK_BACK_SPACE              = 0x08;
	this.DOM_VK_CAPS_LOCK               = 0x14;
	this.DOM_VK_DELETE                  = 0x7F;
	this.DOM_VK_END                     = 0x23;
	this.DOM_VK_ENTER                   = 0x0D;
	this.DOM_VK_ESCAPE                  = 0x1B;
	this.DOM_VK_HOME                    = 0x24;
	this.DOM_VK_NUM_LOCK                = 0x90;
	this.DOM_VK_PAUSE                   = 0x13;
	this.DOM_VK_PRINTSCREEN             = 0x9A;
	this.DOM_VK_SCROLL_LOCK             = 0x91;
	this.DOM_VK_SPACE                   = 0x20;
	this.DOM_VK_TAB                     = 0x09;
	this.DOM_VK_LEFT                    = 0x25;
	this.DOM_VK_RIGHT                   = 0x27;
	this.DOM_VK_UP                      = 0x26;
	this.DOM_VK_DOWN                    = 0x28;
	this.DOM_VK_PAGE_DOWN               = 0x22;
	this.DOM_VK_PAGE_UP                 = 0x21;
};
YAHOO.util.Color = function() {
    var hexchars = "0123456789ABCDEF";
    var real2int = function(n) {
        return Math.min(255, Math.round(n*256));
    };
    return {
        real2dec: function(n) {
            return Math.min(255, Math.round(n*256));
        },
        /**
         * HSV to RGB. h[0,360], s[0,1], v[0,1]
         */
        hsv2rgb: function(h,s,v) { 
            var r, g, b, i, f, p, q, t;
            i = Math.floor((h/60)%6);
            f = (h/60)-i;
            p = v*(1-s);
            q = v*(1-f*s);
            t = v*(1-(1-f)*s);
            switch(i) {
                case 0: r=v; g=t; b=p; break;
                case 1: r=q; g=v; b=p; break;
                case 2: r=p; g=v; b=t; break;
                case 3: r=p; g=q; b=v; break;
                case 4: r=t; g=p; b=v; break;
                case 5: r=v; g=p; b=q; break;
            }

            var fn=this.real2dec;

            return [fn(r), fn(g), fn(b)];
        },
        rgb2hsv: function(r,g,b) {
            r=r/255;
            g=g/255;
            b=b/255;

            var min,max,delta,h,s,v;
            min = Math.min(Math.min(r,g),b);
            max = Math.max(Math.max(r,g),b);
            delta = max-min;

            switch (max) {
                case min: h=0; break;
                case r:   h=60*(g-b)/delta; 
                          if (g<b) {
                              h=360;
                          }
                          break;
                case g:   h=(60*(b-r)/delta)+120; break;
                case b:   h=(60*(r-g)/delta)+240; break;
            }
            
            s = (max === 0) ? 0 : 1-(min/max);

            var hsv = [Math.round(h), s, max];

            return hsv;
        },
        rgb2hex: function (r,g,b) {
            return this.int2hex(r) + this.int2hex(g) + this.int2hex(b);
        },
        /**
         * Converts an int [0,255] to hex [00,FF]
         */
        int2hex: function(n) {
            n = n || 0;
            n = parseInt(n, 10);
            if (isNaN(n)) n = 0;
            n = Math.round(Math.min(Math.max(0, n), 255));

            return hexchars.charAt((n - n % 16) / 16) + hexchars.charAt(n % 16);
        },

        hex2dec: function(hexchar) {
            return hexchars.indexOf(hexchar.toUpperCase());
        },
        hex2rgb: function(s) { 
            var rgb = [];
            rgb[0] = (this.hex2dec(s.substr(0, 1)) * 16) + this.hex2dec(s.substr(1, 1));
            rgb[1] = (this.hex2dec(s.substr(2, 1)) * 16) + this.hex2dec(s.substr(3, 1));
            rgb[2] = (this.hex2dec(s.substr(4, 1)) * 16) + this.hex2dec(s.substr(5, 1));
            return rgb;
        },
        isValidRGB: function(a) { 
            if ((!a[0] && a[0] !=0) || isNaN(a[0]) || a[0] < 0 || a[0] > 255) return false;
            if ((!a[1] && a[1] !=0) || isNaN(a[1]) || a[1] < 0 || a[1] > 255) return false;
            if ((!a[2] && a[2] !=0) || isNaN(a[2]) || a[2] < 0 || a[2] > 255) return false;

            return true;
        },
        revCol: function(r,g,b) {
	    return this.int2hex(Math.round(255 - r)) + this.int2hex(Math.round(255 - g)) +  this.int2hex(Math.round(255 - b));
	}
    }
}();
YAHOO.widget.Module.prototype.showHide = function() {
    var visible = this.cfg.getProperty('visible');
    if(visible) {
	this.hide();
    } else {
	this.show();
    }
}
/* 
   YAHOO.seesaa.ShowHide - showhide switch

   var showHideHook = function() {
     showHide = new YAHOO.seesaa.ShowHide('article-hide-show','article-hide-show-switch',{cookieDomain:cookieDomain,cookieId:'article'});
     showHide.genSwitch();

   };
   YAHOO.util.Event.addListener(window,'loaddisabled',showHideHook);

   <span id="article-hide-show-switch"></span>&nbsp;追記</div>
   <div id="article-hide-show">........</div>
*/
YAHOO.seesaa.ShowHideModule = function (targetEl,cfg) {
    if (typeof(targetEl) == 'string') targetEl = YAHOO.util.Dom.get(targetEl);    
    this.cfg = {};
    this.cfg = cfg;
    this.cfg.getProperty = function(key) {
	return this[key];
    }
    this.element = targetEl;
    this.show = function () {
	this.element.style.display = '';
	this.cfg.visible = true;
	if (this.cfg.beforeShow) {
	    this.cfg.beforeShow();
	}
    }
    this.hide = function () {
	this.element.style.display = 'none';
	this.cfg.visible = false;
    }
    this.showHide = function () {
	var visible = this.cfg.visible;
	if(visible) {
	    this.hide();
	} else {
	    this.show();
	}
    }
}
YAHOO.seesaa.ShowHide = function(targetEl,switchEl,cfg) {
    if (!cfg) cfg = {};
    var switchId;
    if (typeof(switchEl) == 'string') {
	switchId = switchEl;
	switchEl = YAHOO.util.Dom.get(switchId) ? YAHOO.util.Dom.get(switchId) : '';
    }

    if (switchEl != '') switchId = switchEl.id;
    if (typeof(targetEl) == 'string') targetEl = YAHOO.util.Dom.get(targetEl);

    cfg.visible        = cfg.visible ? true : false;
    cfg.aTagShowStr    = cfg.aTagShowStr ? cfg.aTagShowStr : '+開く';
    cfg.aTagHideStr    = cfg.aTagHideStr ? cfg.aTagHideStr : '-閉じる';
    cfg.imgTagShowPath = cfg.imgTagShowStr ? cfg.imgTagShowStr : '/img/myblog/void.gif';
    cfg.imgTagHidePath = cfg.imgTagHideStr ? cfg.imgTagHideStr : '/img/myblog/icon_close.gif';
    cfg.cookieName     = cfg.cookieName    ? cfg.cookieName : 'YAHOO.seesaa.ShowHide';

    if (cfg.cookieId) {
	if (!YAHOO.seesaa.ShowHideCookieJar) {
	    YAHOO.seesaa.ShowHideCookieJar = new cookiejar(cfg.cookieName);
	}
	this.cookieJar = YAHOO.seesaa.ShowHideCookieJar;
	this.cookieJar.domain = cfg.cookieDomain ? cfg.cookieDomain : '';
	this.cookieJar.path   = cfg.cookiePath   ? cfg.cookiePath   : '/';
	this.cookieJar.setExpiration(1, 0, 0, 0, 0, 0) ;
	var val = this.cookieJar.getCookie(cfg.cookieId);
	if (cfg.visible == true && val == null) {
	    cfg.visible =  true;
	} else {
	    cfg.visible =  val == '1' ? true : false;
	}
    }
    this.cfg = cfg;

    if (!this.Module) { // init
	this.Module = {};
	//this.Module =  new YAHOO.widget.Module(targetEl.id,this.cfg);
	this.Module =  new YAHOO.seesaa.ShowHideModule(targetEl.id,this.cfg);
	if (this.cfg.visible == true) this.Module.show() ;
	if (!this.cfg.visible == true) this.Module.hide() ;
	this.Module.elementSwitchId = switchId;
	this.Module.elementSwitch = switchEl;
    }
    if (!YAHOO.seesaa.ShowHideModule) {
	YAHOO.seesaa.ShowHideModule = {};
    }
    YAHOO.seesaa.ShowHideModule[targetEl.id] = this;
}
YAHOO.seesaa.ShowHide.prototype.genSwitch = function(){
    this.genImgTagSwitch();
}
YAHOO.seesaa.ShowHide.prototype.genAtagSwitch = function(){
    var Switch = YAHOO.util.Dom.get(this.Module.elementSwitchId);
    var newSwitch = document.createElement('a');
    newSwitch.id   = this.Module.elementSwitchId
    newSwitch.href = "javascript:YAHOO.seesaa.ShowHideModule['" + this.Module.element.id + "'].execute();";
    newSwitch.innerHTML = this.Module.cfg.getProperty('visible') ? this.cfg.aTagHideStr : this.cfg.aTagShowStr;
    Switch.parentNode.replaceChild(newSwitch,Switch);
    this.Module.elementSwitch = newSwitch;
    this.switchMode = 'aTag';
    if (this.cfg.visible == true) this.Module.element.style.display = '';
}
YAHOO.seesaa.ShowHide.prototype.genImgTagSwitch = function(){
    var Switch = YAHOO.util.Dom.get(this.Module.elementSwitchId);
    var newSwitchA = document.createElement('a');
    newSwitchA.href = "javascript:YAHOO.seesaa.ShowHideModule['" + this.Module.element.id + "'].execute();";
    var newSwitch = document.createElement('img');
    newSwitch.id      = this.Module.elementSwitchId
    newSwitch.border  = '0';
    newSwitch.className  = 'toggleButton';
    newSwitch.src     = this.Module.cfg.getProperty('visible') ? this.cfg.imgTagHidePath : this.cfg.imgTagShowPath;
    newSwitchA.appendChild(newSwitch);
    Switch.parentNode.replaceChild(newSwitchA,Switch);
    this.Module.elementSwitch = newSwitch;
    this.switchMode = 'imgTag';
    if (this.cfg.visible == true) this.Module.element.style.display = '';
}
YAHOO.seesaa.ShowHide.prototype.genAsItIsSwitch = function(){
    var Switch = YAHOO.util.Dom.get(this.Module.elementSwitchId);
    var elementId = this.Module.element.id;
    var hook  = function() { YAHOO.seesaa.ShowHideModule[elementId].execute(); };
    Switch.onclick = hook;
    this.Module.elementSwitch = Switch;
    this.switchMode = 'asItIs';
    if (this.cfg.visible == true) this.Module.element.style.display = '';
}
YAHOO.seesaa.ShowHide.prototype.execute = function(switchEl){
    this.Module.showHide();
    if (!switchEl) switchEl = this.Module.elementSwitch;
    if (typeof(switchEl) == 'string') switchEl = YAHOO.util.Dom.get(switchEl);
    var visible = this.Module.cfg.getProperty('visible');
    if(switchEl && visible) {
	if (this.switchMode == 'aTag') {
	    switchEl.innerHTML = this.cfg.aTagHideStr;
	}
	if (this.switchMode == 'imgTag') {
	    switchEl.src = this.cfg.imgTagHidePath;
	}
	if (this.switchMode == 'asItIs') {
	}
    } else {
	if (this.switchMode == 'aTag') {
	    switchEl.innerHTML = this.cfg.aTagShowStr;
	}
	if (this.switchMode == 'imgTag') {
	    switchEl.src = this.cfg.imgTagShowPath;
	}
	if (this.switchMode == 'asItIs') {
	}
    }
    if (this.cookieJar) {
	var val = visible == true ? 1 : 0;
	this.cookieJar.delCookie(this.cfg.cookieId,val);
	this.cookieJar.setCookie(this.cfg.cookieId,val);
	this.void();
    }
}
/* 

 YAHOO.seesaa.OLMenu : menu by overlay

 <div id="area" style="display:none"><div id="switch">switch</div><div id="target">...</div></div>

  YAHOO.seesaa.OLMenu('target','switch','area',{width:"300px",switchEvent:"click"});
  
*/
YAHOO.seesaa.OLMenu = function(targetEl,switchEl,areaEl,cfg) {
    if (!cfg) cfg = {};
    if (typeof(targetEl) == 'string') targetEl = YAHOO.util.Dom.get(targetEl);
    if (typeof(switchEl) == 'string') switchEl = YAHOO.util.Dom.get(switchEl);
    if (typeof(areaEl)   == 'string') areaEl   = YAHOO.util.Dom.get(areaEl);
    cfg.switchEvent = cfg.switchEvent ? cfg.switchEvent : 'mouseover';
    cfg.width  = cfg.width ? cfg.width : '150px';
    var handlerOLMenu = function() {
	if (! YAHOO.seesaa.OLMenuData) {
	    YAHOO.seesaa.OLMenuData = {};
	}
	YAHOO.seesaa.OLMenuData[targetEl.id] = new YAHOO.widget.Overlay(targetEl,{
		width:cfg.width,visible:false,zIndex:100});
	
	var ua = navigator.userAgent.toLowerCase(),
	isSafari = (ua.indexOf('safari') > -1);
	YAHOO.seesaa.OLMenuData[targetEl.id].render();
	if (isSafari) {
	    targetEl.style.display = 'none';
	} 
	
	var handlerShow = cfg.handlerShow ? cfg.handlerShow : function (e) {
	    if (isSafari) targetEl.style.display = '';
	    YAHOO.seesaa.OLMenuData[targetEl.id].cfg.setProperty('context',[switchEl,'tl','tr']);
	    //YAHOO.seesaa.OLMenuData[targetEl.id].align('tl','tr');
	    YAHOO.seesaa.OLMenuData[targetEl.id].show(); 
	};
	var handlerHide = cfg.handlerHide ? cfg.handlerHide : function (e) {
	    var elTarget  = YAHOO.util.Event.getTarget(e);
	    var elRelated = YAHOO.util.Event.getRelatedTarget(e);
	    if (elRelated && 
		(
		 elRelated.innerHTML.length != 0 &&
		 elRelated.id != areaEl.id &&
		 elRelated.parentNode.id != areaEl.id &&
		 elRelated.parentNode.parentNode.id != areaEl.id &&
		 elRelated.id != targetEl.id &&
		 elRelated.parentNode.id != targetEl.id &&
		 elRelated.parentNode.parentNode.id != targetEl.id &&
		 elRelated.parentNode.parentNode.parentNode.id != targetEl.id
		 ) 
		)
		{
		    YAHOO.seesaa.OLMenuData[targetEl.id].hide(); 
		}
	};
	YAHOO.util.Event.addListener(switchEl,cfg.switchEvent,handlerShow);
	YAHOO.util.Event.addListener(areaEl,  'mouseout', handlerHide);
	areaEl.style.display = '';
    };
    YAHOO.util.Event.addListener(window,'loaddisabled',handlerOLMenu);
    return this;
}
/*
   YAHOO.seesaa.OLTips : panel for tips
 
*/

YAHOO.seesaa.OLTips = function(targetEl,switchEl,areaEl,cfg) {
    if (!cfg) cfg = {};
    if (typeof(targetEl) == 'string') targetEl = YAHOO.util.Dom.get(targetEl);
    if (typeof(switchEl) == 'string') switchEl = YAHOO.util.Dom.get(switchEl);
    if (typeof(areaEl)   == 'string') areaEl   = YAHOO.util.Dom.get(areaEl);
    cfg.handlerHide = function(e) {
	YAHOO.seesaa.OLMenuData[targetEl.id].hide(); 
    };
    return YAHOO.seesaa.OLMenu(targetEl,switchEl,areaEl,cfg);
}

/*
   YAHOO.seesaa.Scroll : scroll element


    <input id="photoButtonLeft" type="button" onClick="new YAHOO.seesaa.Scroll('photoArea').scrollToLeft();" value="←">
    <div id="photoArea" style="position:relative; width:500px; height:182px;overflow:hidden;" onMouseMove="new YAHOO.seesaa.Scroll('photoArea',{ event:event }).scroll();" 
      onMouseOut="new YAHOO.seesaa.Scroll('photoArea').stop;">
      <div id="photoAreaTarget" style="position:absolute; width:1500px;" >
        <img src="hoge.jpg">
        <img src="hoge.jpg">
        <img src="hoge.jpg">
      </div>
    </div>
    <input id="photoButtonRight" type="button" onCLick="new YAHOO.seesaa.Scroll('photoArea').scrollToRight();" value="→">
 
*/
YAHOO.seesaa.Scroll = function(el,cfg) {
    if (typeof(el) == 'string') el = YAHOO.util.Dom.get(el);    
    if (!cfg) cfg = {};
    if (!cfg.duration) cfg.duration = 1;
    if (!cfg.toX) cfg.toX = 80;
    if (cfg.toXFull) {
	cfg.durationRight = ((cfg.toXFull - el.scrollLeft) / cfg.toX);
	cfg.durationLeft  = ((el.scrollLeft) / cfg.toX);
    }
    this.el  = el;
    this.cfg = cfg;
    return this;
}
YAHOO.seesaa.Scroll.prototype.getScroll = function(type) {
    var data = YAHOO.seesaa.ScrollData;
    if (! YAHOO.seesaa.ScrollData) YAHOO.seesaa.ScrollData = {};
    var key = this.el.id;
    if (! YAHOO.seesaa.ScrollData.$key)  YAHOO.seesaa.ScrollData.$key = {left:'',right:''};
    return YAHOO.seesaa.ScrollData.$key.$type;
}
YAHOO.seesaa.Scroll.prototype.setScroll = function(type,val) {
    var data = YAHOO.seesaa.ScrollData;
    if (! YAHOO.seesaa.ScrollData) YAHOO.seesaa.ScrollData = {};
    var key = this.el.id;
    if (! YAHOO.seesaa.ScrollData.$key)  YAHOO.seesaa.ScrollData.$key = {left:'',right:''};
    YAHOO.seesaa.ScrollData.$key.$type = val;
}
YAHOO.seesaa.Scroll.prototype.scroll = function() {
    var e  = this.cfg.event;
    var el = this.el;
    var regionEl = YAHOO.util.Region.getRegion(el);
    var regionEv = new YAHOO.util.Point(YAHOO.util.Event.getXY(e));
    if (regionEl.contains(regionEv)) {
	if (regionEv.left < regionEl.left + this.cfg.toX) {
	    return this.scrollToLeft();
	} 
	if (regionEv.right > regionEl.right - this.cfg.toX) {
	    return this.scrollToRight();
	}
	this.scrollStop();
    }
}
YAHOO.seesaa.Scroll.prototype.scrollToRight = function() {
    var el = this.el;
    var finishPos = this.cfg.toXFull ? this.cfg.toXFull : el.scrollLeft + this.cfg.toX;
    var attributes  = { scroll: { to: [finishPos,el.scrollTop] } };
    if (this.getScroll('left') && this.getScroll('left').isAnimated) {
	YAHOO.util.AnimMgr.stop(this.getScroll('left'));
    }
    if (this.getScroll('right') && this.getScroll('right').isAnimated) {
	YAHOO.util.AnimMgr.stop(this.getScroll('right'));
    }
    this.setScroll('right',new YAHOO.util.Scroll(el, attributes,  this.cfg.durationRight , YAHOO.util.Easing.easeOutStrong));
    this.getScroll('right').animate();
}
YAHOO.seesaa.Scroll.prototype.scrollToLeft = function() {
    var el = this.el;
    var finishPos = this.cfg.toXFull ? 0 : el.scrollLeft - this.cfg.toX;
    var attributes  = { scroll: { to: [finishPos,el.scrollTop] } };
    if (this.getScroll('left') && this.getScroll('left').isAnimated) {
	YAHOO.util.AnimMgr.stop(this.getScroll('left'));
    }
    if (this.getScroll('right') && this.getScroll('right').isAnimated) {
	YAHOO.util.AnimMgr.stop(this.getScroll('right'));
    }
    this.setScroll('left', new YAHOO.util.Scroll(el, attributes,  this.cfg.durationLeft , YAHOO.util.Easing.easeOutStrong));
    this.getScroll('left').animate();
}
YAHOO.seesaa.Scroll.prototype.scrollStop = function() {
    YAHOO.util.AnimMgr.stop(this.getScroll('left'));
    YAHOO.util.AnimMgr.stop(this.getScroll('right'));
}
/* 
   YAHOO.seesaa.ColorPicker - picker for hex colors
   <script type="text/javascript">YAHOO.util.Event.on(window, "loaddisabled", YAHOO.seesaa.ColorPicker.init);</script>
   <input type="text"  onClick="YAHOO.seesaa.pickerPanel.showHere(this);">
*/
YAHOO.seesaa.ColorPicker = function() {
    var Slider=YAHOO.widget.Slider;
    var Color=YAHOO.util.Color;
    var Dom=YAHOO.util.Dom;

    var pickerSize=88;
    
    var hue,picker;

    // hue, int[0,359]
    var getH = function() {
        var h = (pickerSize - hue.getValue()) / pickerSize;
        h = Math.round(h*360);
        return (h == 360) ? 0 : h;
    };

    // saturation, int[0,1], left to right
    var getS = function() {
        return picker.getXValue() / pickerSize;
    };

    // value, int[0,1], top to bottom
    var getV = function() {
        return (pickerSize - picker.getYValue()) / pickerSize;
    };

    var swatchUpdate = function() {
        var h=getH(), s=getS(), v=getV();

        Dom.get("hval").value = h;
        Dom.get("sval").value = Math.round(s*100);
        Dom.get("vval").value = Math.round(v*100);

        var rgb = Color.hsv2rgb(h, s, v);

        var styleDef = "rgb(" + rgb.join(",") + ")";
        Dom.setStyle("swatch", "background-color", styleDef);

        Dom.get("rval").value = rgb[0];
        Dom.get("gval").value = rgb[1];
        Dom.get("bval").value = rgb[2];

        //Dom.get("hexval").value = Color.rgb2hex(rgb[0], rgb[1],rgb[2]);
	if (YAHOO.seesaa.pickerPanelTarget) {
	    YAHOO.seesaa.pickerPanelTarget.value = Color.rgb2hex(rgb[0], rgb[1],rgb[2]);
	    YAHOO.seesaa.pickerPanelTarget.style.backgroundColor = '#' + Color.rgb2hex(rgb[0], rgb[1],rgb[2]);
	    YAHOO.seesaa.pickerPanelTarget.style.color = '#' + Color.revCol(rgb[0], rgb[1],rgb[2]);
            //add noguchi
            setColorLink();
	}
    };

    var hueUpdate = function(newOffset) {
        var rgb = Color.hsv2rgb(getH(), 1, 1);
        var styleDef = "rgb(" + rgb.join(",") + ")";
        Dom.setStyle("pickerDiv", "background-color", styleDef);

        swatchUpdate();
    };

    var pickerUpdate = function(newOffset) {
        swatchUpdate();
    };

    return {
        init: function (idList) {
	    var ddPickerStr =
		'<div id="ddPicker" style="visibility:hidden;">' +
		'    <div id="pickerClose" onClick="document.getElementById(' + "'" + 'ddPicker' + "'" + ').style.visibility = '+ "'" + 'hidden' + "'" + ';">x</div>' +
		'    <div id="pickerDiv" tabindex="-1" hidefocus="true">' +
		'      <span id="pickerbg"><img src="/js/yui/img/slider/pickerbg.png" width="100" height="100" alt="" /></span>' +
		'      <div id="selector"><img src="/js/yui/img/slider/select.gif" /></div> ' +
		'    </div>' +
		'    <div id="hueBg" tabindex="-1" hidefocus="true">' +
		'      <div id="hueThumb" style="top:0px;left:-4px;"><img src="/js/yui/img/slider/hline.png" /></div>' +
		'    </div>' +
		'    <div id="valdiv">' +
		'        <form name="rgbform">' +
		'	<div style="display:none">' +
		'        R <input autocomplete="off" name="rval" id="rval" type="text"' +
		'        value="0" size="3" maxlength="3" />' +
		'        H <input autocomplete="off" name="hval" id="hval" type="text"' +
		'        value="0" size="3" maxlength="3" />' +
		'        G <input autocomplete="off" name="gval" id="gval" type="text"' +
		'        value="0" size="3" maxlength="3" />' +
		'        S <input autocomplete="off" name="gsal" id="sval" type="text"' +
		'        value="0" size="3" maxlength="3" />' +
		'        B <input autocomplete="off" name="bval" id="bval" type="text"' +
		'        value="0" size="3" maxlength="3" />' +
		'        V <input autocomplete="off" name="vval" id="vval" type="text"' +
		'        value="0" size="3" maxlength="3" />' +
		'        # <input autocomplete="off" name="hexval" id="hexval" type="text" value="0" size="6" maxlength="6" />' +
		'	</div>' +
		'        </form>' +
		'    </div>' +
		'    <div style="display:none" id="swatch">&nbsp;</div>' +
		'</div>';

	    var cssPickerStr =
		'#ddPicker { position: absolute; background-color: #eeeeee; width: 140px; height: 140px; }\n' +
		'#ddPicker input { font-size: .85em }\n' +
		'#hueThumb { cursor: default; top: -1px; width: 18px; height: 18px; z-index:9; }\n' +
//		'#hueBg { -moz-outline: none; outline: 0px none; position: absolute; top: 18px; left: 109px; height: 100px; width: 9px; background-image: url(/js/yui/img/slider/hue.png); background-repeat: no-repeat; background-position: 0px 9px }\n' +
		'#hueBg { -moz-outline: none; outline: 0px none; position: absolute; top: 18px; left: 115px; height: 100px; width: 9px; background-image: url(/js/yui/img/slider/hue.png); background-repeat: no-repeat; background-position: 0px 9px }\n' +

		'#pickerDiv { -moz-outline: none; outline: 0px none; position: absolute; top: 20px; left: 10px; height: 100px; width: 100px; background-color: #FF0000; }\n' +
		'#pickerbg { position: absolute; top: 0px; left: 0px; } \n' +
		'#selector { cursor: default; position: absolute; top: 0px; left: 0px; width: 11px; height: 11px; z-index: 9; }\n' +
		'#valdiv { text-align: bottom; position: absolute; top: 86px; left: 246px; } \n' +
		'#swatch { position: absolute; left: 260px; top: 30px; height: 60px; width: 60px; border: 2px solid #aaaaaa; }\n';

	    var ua = navigator.userAgent;
            var m = ua.match(/MSIE\s([^;]*)/);
            if (m && m[1]) {
                var ie_ver = parseFloat(m[1]);

		if (!isNaN(ie_ver) && 5.5 <= ie_ver && ie_ver < 7.0) {
		    cssPickerStr +=
			'#pickerbg { filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'/js/yui/img/slider/pickerbg.png\', sizingMethod=\'scale\'); z-index: 1; width: 100px; height: 100px; }\n' +
			'#pickerbg img { display: none; }\n';
                }
            }

	    var ddPicker = document.createElement('div');

//	    var cssPicker = document.createElement('style');
//	    cssPicker.setAttribute('type','text/css');
	    var cssPicker = document.createElement('div');//noguchi


	    ddPicker.innerHTML = ddPickerStr;

	    cssPicker.innerHTML = '<span style="display: none">x</span><style type="text/css">' + cssPickerStr  + '</style>';

	    document.body.appendChild(ddPicker);
	    document.getElementsByTagName("head")[0].appendChild(cssPicker);

	    hue = Slider.getVertSlider("hueBg", "hueThumb", 0,pickerSize);
            hue.subscribe("change", hueUpdate);

            picker = Slider.getSliderRegion("pickerDiv", "selector", 0, pickerSize, 0, pickerSize);
            picker.subscribe("change", pickerUpdate);

            hueUpdate(0);
 
            YAHOO.seesaa.pickerPanel = Dom.get("ddPicker");
            YAHOO.seesaa.pickerPanel.style.visibility = 'hidden';
	    YAHOO.seesaa.pickerPanel.showHere = function (el) {
                var region = Dom.getRegion(el);
                Dom.setXY(this,[region.right,region.top]);
                this.style.visibility = 'visible';
                YAHOO.seesaa.pickerPanelTarget = el;
	    };  
	    if (typeof idList == 'object') {
		for (i=0;i < idList.length;i++) {
		    var pickerEl = document.getElementById(idList[i]);
		    if (pickerEl) YAHOO.util.Dom.setStyle("pickerDiv", "background-color", pickerEl.style.backgroundColor);
		}
	    }
        }
    };
}();

/* 
   YAHOO.seesaa.PanelWebPage - get content from web and panel it.

   <link rel="stylesheet" type="text/css" href="/js/yui/container/assets/container.css" /><!-- css need -->
   <input type="button" onClick="YAHOO.seesaa.PanelWebPage(YAHOO.util.Dom.get('somearea'),'/test.html',{ config:val });" value="SHOW">

*/

YAHOO.seesaa.PanelWebPageCache = {}
YAHOO.seesaa.PanelWebPage = function(targetEl,url,cfg,hooks) {
    if(!hooks) {
	hooks = {}; 
    }

    if (! YAHOO.seesaa.PanelWebPageCache[url]) {
	var width    = YAHOO.util.Dom.getViewportWidth();
	var widthPx  = (width * 0.9) + 'px';
	var height   = YAHOO.util.Dom.getViewportHeight();
	var heightPx = (height * 0.9) + 'px';
	var conf = typeof(cfg) == 'struct' ? cfg : { iframe:false, width:widthPx, height:heightPx,fixedcenter:true, constraintoviewport:true, underlay:"none",close:false, visible:true, draggable:false, modal:true };
	var obj = new YAHOO.widget.Panel('key' + url, conf) ; 
	if (hooks.renderEvent) {
	    obj.renderEvent.subscribe(hooks.renderEvent);
	}
	if (hooks.beforeShowEvent) {
	    obj.beforeShowEvent.subscribe(hooks.beforeShowEvent);
	}
	if (hooks.showEvent) {
	    obj.showEvent.subscribe(hooks.showEvent);
	}
	if (hooks.beforeHideEvent) {
	    obj.beforeHideEvent.subscribe(hooks.beforeHideEvent);
	}
	if (hooks.hideEvent) {
	    obj.hideEvent.subscribe(hooks.hideEvent);
	}
	obj.setBody('<table border="0" width="' + widthPx + '" height="' + heightPx + '"><tr><td><div align="center"><img src="/js/loaddisableding.gif"></div></td></tr></table>');
	obj.render(document.body);
	YAHOO.seesaa.PanelWebPageCache[url] = obj;
	YAHOO.seesaa.PanelWebPageCache[url].show();
	var callback = {
	    success:function (o) {
		if(o.responseText){
		    var responseText = o.responseText + '';
		    YAHOO.seesaa.PanelWebPageCache[url].setBody('<div align="right" valign="top" style="background:#CCCCCC url(/img/sample_css/theme_window_head.gif) repeat scroll 0%;border-color:#FFFFFF rgb(255, 255, 255) rgb(0, 0, 0);border-style:solid;border-width:1px;color:#FFFFFF;font-size:100%;font-weight:bold;line-height:100%;overflow:hidden;padding:4px;"><span style="cursor:pointer;color:#000;background:#fff;text-align:right;" onClick="YAHOO.seesaa.PanelWebPageCache[' + "'" + url + "'" + '].hide();"><img src="/img/sample_css/theme_window_close.gif"></span></div>' + responseText );
		    YAHOO.seesaa.PanelWebPageCache[url].render(document.body);
		}
	    },
	    failure:function (o) {
		alert('fail request');
	    }
	};
	var request = YAHOO.util.Connect.asyncRequest('GET', url + '&nocache=' + new Date().getTime(), callback);
    } else {
	YAHOO.seesaa.PanelWebPageCache[url].show();
    }
}

/* 
   YAHOO.seesaa.Pager - pager for javascript 

   function someElementsManager(pager) {
      var el = YAHOO.util.Dom.get('pageArea');
      //.....
   }
   var pager = YAHOO.seesaa.Pager.gen({list:[],count:10,limit:5,offset:0,page:0,url:'/path/to/endpoint'});
   pager.data.handleBeforeLoad = function (o) {
      // lock
   }
   pager.data.handleFailure = function (o) {
      // unlock
   }
   pager.data.handleSuccess = function(o) {
	var json =  parseJSON(o.responseText);
	var pager = YAHOO.seesaa.Pager.gen(json);
	someElementsManager(pager);
   }
   pager.fetchPage(2); // 2 page fetched

   o page number(s)
   pager.getCurrent();
   pager.getNext();
   pager.getPrev();
   pager.getFirst();
   pager.getLast();

   o check
   pager.hasNext();
   pager.hasPrev();

   o page list
   pager.listElement();    // json.list
   pager.listPages();      // return pageList / [{ number:int,fetchPage:function,now:true },{ number:int,fetchPage:function,now:false }]

   o reloaddisabled 
   pager.fetchCurrent();
   pager.fetchNext();
   pager.fetchPrev();
   pager.fetchFirst();
   pager.fetchLast();
   pager.fetchPage();
   pager.loaddisabled();

   o json format (server <=> client)
   {
   list:[{},{},{}], // array of hash (one page)
   count:10,        // total count for paging
   limit:5,         // count per page
   offset:0,        // 
   page:0,          // current page
   url:''           // url json posted
   }

*/
YAHOO.seesaa.Pager = {};
YAHOO.seesaa.Pager.gen = function(json) {
    var pager = {};
    pager.data = json;
    pager.getCurrent = function() {
	var self = pager;
	return self.data.page;
    }
    pager.getNext = function() {
	var self = pager;
	return self.data.page + 1;
    }
    pager.getPrev = function() {
	var self = pager;
	return self.data.page - 1;
    }
    pager.getFirst = function() {
	var self = pager;
	return 1;
    }
    pager.getLast = function() {
	var self = pager;
	if (self.data.count % self.data.limit == 0) {
	    var n = (self.data.count / self.data.limit);
	    if (n > 0) n = Math.floor(n); else n = Math.ceil(n);
	    return n;
	} else {
	    var n = (self.data.count / self.data.limit) + 1;
	    if (n > 0) n = Math.floor(n); else n = Math.ceil(n);
	    return n;
	}
    }
    pager.hasNext = function() {
	var self = pager;
	var cur = self.getCurrent();
	var last = self.getLast();
	if (cur < last) return true;
	return false;
    }
    pager.hasPrev = function() {
	var self = pager;
	var cur = self.getCurrent();
	if (cur > 1) return true;
	return false;
    }
    pager.listElement = function () {
	var self = pager;
	return self.data.list;
    }
    pager.listPages = function() {
	var self = pager;
	var array = new Array;
	for (var i=0;i<self.getLast();i++) {
	    var num = i + 1;
	    var now = self.getCurrent() == num ? true : false;
	    array[i] = { 
		number:num,
		now: now,
		fetchPage:(function(i_) { return function() { self.fetchPage(i_ + 1) }; })(i)
	    };
	}
	return array;
    }
    pager.fetchCurrent = function() {
	var self = pager;
	self.fetchPage(self.getCurrent());
    }
    pager.fetchNext = function() {
	var self = pager;
	self.fetchPage(self.getNext());
    }
    pager.fetchPrev = function() {
	var self = pager;
	self.fetchPage(self.getPrev());
    }
    pager.fetchFirst = function() {
	var self = pager;
	self.fetchPage(self.getFirst());
    }
    pager.fetchLast = function() {
	var self = pager;
	self.fetchPage(self.getLast());
    }
    pager.fetchPage = function(pageNum) {
	var self = pager;
	self.data.page   = pageNum;
	self.data.offset = (self.data.limit * (pageNum - 1));
	self.loaddisabled();
    }
    pager.loaddisabled = function() {
	var self = pager;
	if (self.data.handleBeforeLoad) {
	    self.data.handleBeforeLoad();
	}
	var sUrl = self.data.url;
	var handleSuccess = self.data.handleSuccess ? self.data.handleSuccess : function(o) {
	    self.data = parseJSON(o.responseText);
	}
	var handleFailure = self.data.handleFailure ? self.data.handleFailure : function (o) {
	    alert('取得に失敗しました:入力エラー');
	}
	var json = self.data;
	json.list = 'ignored';
	var jsonString = toJSONString(json);
	var postData = "is_async_request=1&json_string=" + jsonString;
	YAHOO.util.Connect.asyncRequest('POST', sUrl,{success:handleSuccess,failure:handleFailure},postData);    
    }
    return pager;
}
/* 
   YAHOO.seesaa.PreventSubmit - anti duplicate submit

   YAHOO.seesaa.PreventSubmit();

*/
YAHOO.seesaa.PreventSubmit = function() {
    var onSubmit = function() {
  	var list = this.elements;
  	for (var i=0;i<list.length;i++) {
  	    if (list[i].type == 'submit') {
 		list[i].disabled = true;
  	    }
  	}
    }
    var onClick = function () {
	var button = this;
	if (button.name) {
	    var q = document.createElement('input');
	    q.type = 'hidden';
	    q.name = button.name;
	    q.value = button.value;
	    button.form.appendChild(q);
	}
    }
    var setOnsubmit = function() {
  	for (var i = 0; i < document.forms.length; i++) {
  	    YAHOO.util.Event.addListener(document.forms[i],'submit',onSubmit);
	    var list = document.forms[i].elements;
	    for (var j=0;j<list.length;j++) {
		if (list[j].type == 'submit') {
		    YAHOO.util.Event.addListener(list[j],'click',onClick);
		}
	    }
  	}
    }
    YAHOO.util.Event.addListener(window,'loaddisabled',setOnsubmit);
}
/* 
   YAHOO.seesaa.RemainValue - remain input tags value 

   var cookieDomain = '[% config.blog_host %]';
   var hook = function() { YAHOO.seesaa.RemainValue('id',{cookieDomain:cookieDomain,cookieId:'select-one'});};
   YAHOO.util.Event.addListener(window,'loaddisabled',hook);

   - this version only support select box - 
  
*/

YAHOO.seesaa.RemainValue = function(id,cfg) {
    if (!id) return;
    var el = YAHOO.util.Dom.get(id);
    var id = cfg.cookieId ? cfg.cookieId : ('name-' + id);
    cfg.cookieName     = cfg.cookieName    ? cfg.cookieName : 'YAHOO.seesaa.RemainValue';
    if (!YAHOO.seesaa.RemainValueCookieJar) {
	YAHOO.seesaa.RemainValueCookieJar = new cookiejar(cfg.cookieName);
    }
    YAHOO.seesaa.RemainValueCookieJar.domain = cfg.cookieDomain ? cfg.cookieDomain : '';
    YAHOO.seesaa.RemainValueCookieJar.path   = cfg.cookiePath   ? cfg.cookiePath   : '/';
    YAHOO.seesaa.RemainValueCookieJar.setExpiration(1, 0, 0, 0, 0, 0) ;
    if (el.tagName.match(new RegExp("select","i"))) {
	var val = YAHOO.seesaa.RemainValueCookieJar.getCookie(id); // selected Index
	if (val) {
	    for (i=0; i<el.options.length; i++) {
		if (el.options[i].value == val) {
		    el.options[i].selected = true;
		    el.selectedIndex = i;
		    i = el.options.length; // last
		}
	    }
	}
	var onChange = function(self) {
	    var val = this.value;
	    if (!val && self) val = self.value;
	    YAHOO.seesaa.RemainValueCookieJar.delCookie(id,val);
	    YAHOO.seesaa.RemainValueCookieJar.setCookie(id,val);
	    YAHOO.seesaa.void();
	};
	YAHOO.util.Event.addListener(el,'change',onChange);
    }
    return true;
}
/* 

   YAHOO.seesaa.ResizeElement - resize element vertically

   <textarea id="textarea-id">
   </textarea>
   <img id="textarea-id-resize-up"   src="up.gif">  
   <img id="textarea-id-resize-down" src="down.gif">
   <select id="textarea-id-resize-setting" name="give-somename" style="display:none;">
     <option value="10px" selected>10px
     <option value="20px">20px
     <option value="30px">30px
   </select>

   var hook = function() { 
       var hook = function (el,settingEl,upEl,downEl) {
   	var index = settingEl.selectedIndex;
   	var lastIndex = settingEl.options.length - 1;
   	upEl.src = '/_img/myblog/btn_up.gif'
   	downEl.src = '/_img/myblog/btn_down.gif'
   	if (index == 0) upEl.src = '/_img/myblog/btn_up_on.gif';
   	if (index == lastIndex)downEl.src = '/_img/myblog/btn_down_on.gif';
       };
       YAHOO.seesaa.ResizeElement('[% element_name %]',{cookieDomain:'[% config.blog_host %]',cookieId:'resize-[% element_name %]',hooks:{afterChange:hook}});
   };
   YAHOO.util.Event.addListener(window,'loaddisabled',hook);

  
*/
YAHOO.seesaa.ResizeElement = function(id,cfg) {
    var el        = YAHOO.util.Dom.get(id);
    var upEl      = YAHOO.util.Dom.get(id + '-resize-up');
    var downEl    = YAHOO.util.Dom.get(id + '-resize-down');
    var settingEl = YAHOO.util.Dom.get(id + '-resize-setting');
    if ((! el) || (! upEl) || (! downEl) || (! settingEl)) return false;
    var hooks = cfg.hooks ? cfg.hooks : {};
    YAHOO.seesaa.RemainValue(settingEl.id,{cookieDomain:cfg.cookieDomain,cookieId:cfg.cookieId});
    var resize = function(updown) {
	var index = settingEl.selectedIndex;
	var lastIndex = settingEl.options.length - 1;
	if (updown == 1) {
	    // down
	    if (index == lastIndex) return;
	} else if(updown == -1) {
	    // up
	    if (index == 0) return;
	}
	if (hooks.beforeChange) hooks.beforeChange(el,settingEl,upEl,downEl);
	var indexNew = index + updown;
	settingEl.options[index].selected = false;
	settingEl.selectedIndex = indexNew;
	settingEl.options[indexNew].selected = true;
	el.style.height = settingEl.value;
	
	var list = YAHOO.util.Event.getListeners(settingEl,'change'); // for cookie store
	for (var i=0; i<list.length; i++) {
	    list[i].fn(settingEl);
	}
	if (hooks.afterChange) hooks.afterChange(el,settingEl,upEl,downEl);
    };
    var upElOnclick = function() {
	resize(-1);
    }
    var downElOnclick = function() {
	resize(1);
    }
    YAHOO.util.Event.addListener(upEl,  'click',upElOnclick);
    YAHOO.util.Event.addListener(downEl,'click',downElOnclick);
    resize(0);
    return true;
}
/* 
   YAHOO.seesaa.Supported - define support browser
   http://developer.yahoo.com/yui/docs/YAHOO.env.ua.html
   if (YAHOO.seesaa.Supported()) {
      alert('supported browser!');
   }

*/
YAHOO.seesaa.Supported = function() {
    if ((YAHOO.env.webkit   && YAHOO.env.ua.webkit < 312) ||
	(YAHOO.env.ua.gecko && YAHOO.env.ua.gecko  < 1.7) ||
	(YAHOO.env.ua.opera && YAHOO.env.ua.opera  < 9.0) ||
	(YAHOO.env.ua.ie    && YAHOO.env.ua.ie     < 6.0) ||
	(!YAHOO.env.ua.ie && !YAHOO.env.ua.gecko && !YAHOO.env.ua.webkit && !YAHOO.env.ua.opera)
	) {
	return false;
    } else {
	return true;
    }
}

YAHOO.seesaa.escapeHTML = function(html) {
  if(html){
    html += "";
    return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, '&gt;').replace(/\"/g, "&quot;");
  }
}


/**
 * YAHOO.env is used to keep track of what is known about the YUI library and
 * the browsing environment
 * @class YAHOO.env
 * @static
 */
YAHOO.env = YAHOO.env || {

    /**
     * Keeps the version info for all YUI modules that have reported themselves
     * @property modules
     * @type Object[]
     */
    modules: [],
    
    /**
     * List of functions that should be executed every time a YUI module
     * reports itself.
     * @property listeners
     * @type Function[]
     */
    listeners: []
};

/**
 * Returns the version data for the specified module:
 *      <dl>
 *      <dt>name:</dt>      <dd>The name of the module</dd>
 *      <dt>version:</dt>   <dd>The version in use</dd>
 *      <dt>build:</dt>     <dd>The build number in use</dd>
 *      <dt>versions:</dt>  <dd>All versions that were registered</dd>
 *      <dt>builds:</dt>    <dd>All builds that were registered.</dd>
 *      <dt>mainClass:</dt> <dd>An object that was was stamped with the
 *                 current version and build. If 
 *                 mainClass.VERSION != version or mainClass.BUILD != build,
 *                 multiple versions of pieces of the library have been
 *                 loaddisableded, potentially causing issues.</dd>
 *       </dl>
 *
 * @method getVersion
 * @static
 * @param {String}  name the name of the module (event, slider, etc)
 * @return {Object} The version info
 */
YAHOO.env.getVersion = function(name) {
    return YAHOO.env.modules[name] || null;
};

/**
 * Do not fork for a browser if it can be avoided.  Use feature detection when
 * you can.  Use the user agent as a last resort.  YAHOO.env.ua stores a version
 * number for the browser engine, 0 otherwise.  This value may or may not map
 * to the version number of the browser using the engine.  The value is 
 * presented as a float so that it can easily be used for boolean evaluation 
 * as well as for looking for a particular range of versions.  Because of this, 
 * some of the granularity of the version info may be lost (e.g., Gecko 1.8.0.9 
 * reports 1.8).
 * @class YAHOO.env.ua
 * @static
 */
YAHOO.env.ua = function() {
    var o={

        /**
         * Internet Explorer version number or 0.  Example: 6
         * @property ie
         * @type float
         */
        ie:0,

        /**
         * Opera version number or 0.  Example: 9.2
         * @property opera
         * @type float
         */
        opera:0,

        /**
         * Gecko engine revision number.  Will evaluate to 1 if Gecko 
         * is detected but the revision could not be found. Other browsers
         * will be 0.  Example: 1.8
         * <pre>
         * Firefox 1.0.0.4: 1.7.8   <-- Reports 1.7
         * Firefox 1.5.0.9: 1.8.0.9 <-- Reports 1.8
         * Firefox 2.0.0.3: 1.8.1.3 <-- Reports 1.8
         * Firefox 3 alpha: 1.9a4   <-- Reports 1.9
         * </pre>
         * @property gecko
         * @type float
         */
        gecko:0,

        /**
         * AppleWebKit version.  KHTML browsers that are not WebKit browsers 
         * will evaluate to 1, other browsers 0.  Example: 418.9.1
         * <pre>
         * Safari 1.3.2 (312.6): 312.8.1 <-- Reports 312.8 -- currently the 
         *                                   latest available for Mac OSX 10.3.
         * Safari 2.0.2:         416     <-- hasOwnProperty introduced
         * Safari 2.0.4:         418     <-- preventDefault fixed
         * Safari 2.0.4 (419.3): 418.9.1 <-- One version of Safari may run
         *                                   different versions of webkit
         * Safari 2.0.4 (419.3): 419     <-- Current Safari release
         * Webkit 212 nightly:   522+    <-- Safari 3.0 (with native SVG) should
         *                                   be higher than this
         *                                   
         * </pre>
         * http://developer.apple.com/internet/safari/uamatrix.html
         * @property webkit
         * @type float
         */
        webkit:0,

        /**
         * The mobile property will be set to a string containing any relevant
         * user agent information when a modern mobile browser is detected.
         * Currently limited to Safari on the iPhone/iPod Touch, Nokia N-series
         * devices with the WebKit-based browser, and Opera Mini.  
         * @property mobile 
         * @type string
         */
        mobile: null 
    };

    var ua=navigator.userAgent, m;

    // Modern KHTML browsers should qualify as Safari X-Grade
    if ((/KHTML/).test(ua)) {
        o.webkit=1;
    }
    // Modern WebKit browsers are at least X-Grade
    m=ua.match(/AppleWebKit\/([^\s]*)/);
    if (m&&m[1]) {
        o.webkit=parseFloat(m[1]);

        // Mobile browser check
        if (/ Mobile\//.test(ua)) {
            o.mobile = "Apple"; // iPhone or iPod Touch
        } else {
            m=ua.match(/NokiaN[^\/]*/);
            if (m) {
                o.mobile = m[0]; // Nokia N-series, ex: NokiaN95
            }
        }

    }

    if (!o.webkit) { // not webkit
        // @todo check Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1316; fi; U; ssr)
        m=ua.match(/Opera[\s\/]([^\s]*)/);
        if (m&&m[1]) {
            o.opera=parseFloat(m[1]);
            m=ua.match(/Opera Mini[^;]*/);
            if (m) {
                o.mobile = m[0]; // ex: Opera Mini/2.0.4509/1316
            }
        } else { // not opera or webkit
            m=ua.match(/MSIE\s([^;]*)/);
            if (m&&m[1]) {
                o.ie=parseFloat(m[1]);
            } else { // not opera, webkit, or ie
                m=ua.match(/Gecko\/([^\s]*)/);
                if (m) {
                    o.gecko=1; // Gecko detected, look for revision
                    m=ua.match(/rv:([^\s\)]*)/);
                    if (m&&m[1]) {
                        o.gecko=parseFloat(m[1]);
                    }
                }
            }
        }
    }
    
    return o;
}();

