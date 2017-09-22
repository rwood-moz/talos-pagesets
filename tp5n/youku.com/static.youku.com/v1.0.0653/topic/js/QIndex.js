/**
 * 首页专用 js 文件
 */
var IndexEvent = Class.create();
IndexEvent.prototype = {
	initialize: function() {},
	/**
     * 首页登录框鼠标事件
     */
	userInter : function(eventHandle, control, obj){
		if(control == 'user'){
			if(eventHandle == "F"){
				obj.style.color = "#000";
				if(obj.value == "Email或昵称") obj.value = "";
			}else if(eventHandle == "B"){
				if(obj.value == ""){
					obj.value = "Email或昵称";
					obj.style.color = "#909090";				
				}
			}
		}else if(control == 'pwd'){
			if(eventHandle == "F"){
				var pNode = obj.parentNode;
				pNode.removeChild(obj);
				var pwdObj = document.createElement("INPUT");		
				pwdObj.id = 'password';	
				pwdObj.name= 'password';		
				pwdObj.type = "password";
			//	pwdObj.className = "pwd";
				pwdObj.style.color = "#000";
				pwdObj.tabIndex = 2;			
				pwdObj.onblur = function(){
					QIndex.userInter('B','pwd',this)
				}
				pwdObj.onkeypress = function(evt){
				    evt = evt || window.event;
				    if(evt.keyCode == 13) QIndex.logon();
				}
				pNode.appendChild(pwdObj);
				pwdObj.focus();
				
				if(window.ActiveXObject){ //ie
					var rng = pwdObj.createTextRange();			
					rng.select();
					rng.collapse();
				}
			}else if(eventHandle == "B"){
				if(obj.value == ""){
					var pNode = obj.parentNode;
					pNode.removeChild(obj);
					var pwdObj = document.createElement("INPUT");
					pwdObj.id = 'password';		
					pwdObj.name= 'password';						
					pwdObj.type = "text";
					pwdObj.value = "登录密码";
				//	pwdObj.className = "pwd";	
					pwdObj.tabIndex = 2;
					pwdObj.onfocus = function(){
						QIndex.userInter('F','pwd',this);
					}
					pNode.appendChild(pwdObj);			
				}
			}
		}
	},
	/**
	 * 首页登录
	 */
	logon : function(){
		var userName = $('username').value;
		if(userName == '' || userName == 'Email或昵称'){
			alert('请填写用户名.')
			$('username').focus();
			return false;
		}
		var passWord = $('password').value;
		if(passWord == '' || passWord == '登录密码'){
			alert('请填写密码.')
			$('password').focus();
			return false;
		}
		var forever = $('forever').checked ? '1' : '0';
		Nova.QVideo.logon({'username':userName,'password':passWord,'forever':forever}, 
			function (result){
				if(result == false){
					alert('用户名或密码不正确，请重试。');
				}else{
					// 更新页面header
					login_callback();
					// 更新会员区域
					//$('index_login_div').className='box_border1 mod';
					QIndex.indexLoginTask();
				}
			}
		);
	},
	/**
	  天气预报(未登陆状况)
	 */
	setIndexWeather : function(){
		var weather = Nova.Cookie.get('wi');
		if(weather != null) {
			try {
				var obj = eval('(' + decodeURIComponent(weather) + ')');
				var reg = /^[a-z0-9A-Z]{2,3}\.gif$/;
				if(!empty(obj.city) && !empty(obj.temperature) && reg.test(obj.ico_first) && reg.test(obj.ico_secend)){
					var domain = 'http://static.youku.com';
					var imgServer = domain+VERSION+'/weather/img/ico_small/';
					var htmlStr = '\
						<span><a href="/weather" target="_blank" charset="100-001-00-2"><img src="'+imgServer+obj.ico_first+'" title="'+obj.title_first+'" /></a></span> \
						<span><a href="/weather" target="_blank" charset="100-001-00-2"><img src="'+imgServer+obj.ico_secend+'" title="'+obj.title_secend+'" /></a></span> \
						<span class="scene"><a href="/weather" target="_blank" charset="100-001-00-2">'+obj.phenomenon+'</a></span> \
						<span class="temperature"><a href="/weather" target="_blank" charset="100-001-00-2">'+obj.temperature+'</a></span> \
						<span class="location"><a href="/weather" target="_blank" charset="100-001-00-2">'+obj.city+'</a></span>';
					$('weather').update(htmlStr);
					return true;
				}
			} catch(e) {};
		}
		return false;
	},
	/**
	 * 登录成功后的 显示会员信息面板
	 */
	indexLoginTask : function(){
		if(typeof(window.ncCallback) == 'undefined') return false;
		var d = new Date();
		var ncUrl = 'http://'+ncDomain+'/index_nc?&r[]=prodad&e[]=index_login_div&cb=ncCallback&rand='+d.getTime();
		Nova.addScript(ncUrl);
	},
	closeIoginMsg : function(){
		$('weather_prompt').style.display = 'none';
	},

	showVTip : function (evt){
		this.keepVTip();
		evt = evt || window.event;
		var pop = $('pop');
		var evtElm = Element.extend(Event.element(evt)).up('UL');
		var vTip = evtElm.next('.popinfo');
		var pos = Position.cumulativeOffset(evtElm);
		vTip = pop.down('.popmain').update().appendChild(vTip.cloneNode(true));
		pop.hide(); vTip.show();
		pop.style.left = (pos[0]+evtElm.getWidth()+10)+'px';
		pop.style.top = pos[1]+'px';
		this.popTimeout = window.setTimeout('$(\'pop\').show();', 500);
	},
	hideVTip : function (evt){
		this.keepVTip();
		evt = evt || window.event;
		var evtElm = Element.extend(Event.element(evt)).up('UL');
		this.popTimeout = window.setTimeout('$(\'pop\').hide();', 200);
	},
	keepVTip : function () {
		if(!isNaN(this.popTimeout)) {
			window.clearTimeout(this.popTimeout);
			this.popTimeout = null;
		}
	},
	drawerTabberInit: function() {
		var handlers = $A(document.getElementsByTagName('li'));
		this._drawerTabber = this.drawerTabber.bindAsEventListener(this)
		handlers.each(function(o){if(o.getAttribute('tabIdx')) Event.observe(o, 'mouseover', this._drawerTabber)}.bind(this));
		handlers.each(function(o){if(o.getAttribute('tabIdx')) Event.observe(o, 'mouseout', this._drawerTabber)}.bind(this));
		handlers.each(function(o){if(o.getAttribute('tabIdx')) Event.observe(o, 'click', this._drawerTabber)}.bind(this));
	},
	drawerTabber: function(evt) {
		if(this.tabTimeout && !isNaN(this.tabTimeout)) {
			window.clearTimeout(this.tabTimeout);
			this.tabTimeout = null;
		}
		if(evt.type.indexOf('over') <= 0) return false;
		var handler = Event.element(evt);
		while(handler.nodeName != 'LI') handler = handler.parentNode;
		if(handler.className.indexOf('current') >= 0) return false;
		handler = Element.extend(handler);
		var current = handler.previous('li.current');
		if(current == undefined) current = handler.next('li.current');
		this.tabTimeout = window.setTimeout('QIndex.switchTab(\''+handler.getAttribute('tabIdx')+'\', \''+current.getAttribute('tabIdx')+'\')', 100);
	},
	switchTab: function(curr, old) {
		if(isNaN(curr) && isNaN(old)) {
			var elmcurr = $(curr);
			var elmold = $(old);
			$('th'+curr).className = 'current';
			$('th'+old).className = '';
		} else {
			var elmcurr = $('tabber'+curr);
			var elmold = $('tabber'+old);
		}
		imgs = $A(elmcurr.getElementsByTagName('img'));
		imgs.each(function(o){
			Element.extend(o);
			if (!o.readAttribute('src')) {
				o.src = o.readAttribute('_src');
			}
		});
		elmcurr.show();
		elmold.hide();
	},
	cookielistInit: function(id) {
		if(this.con == undefined) this.con = $(id);
		if(this.con.empty() || this.con.down('.crumbs').empty()) { this.con.remove(); return false; }

		var delAlls = $A(this.con.getElementsByTagName('A'));
		this._PlaylistClean = this.PlaylistClean.bindAsEventListener(this);
		delAlls.each(function(o){
			Element.extend(o);
			if(o.readAttribute('rel') == 'delall' && o.readAttribute('observe') != '1') {
				Event.observe(o, 'click', this._PlaylistClean);
				o.setAttribute('observe', '1');
			}
		}.bind(this));
		var delOne = $A(this.con.select('.v_delete'));
		this._PlaylistDel = this.PlaylistDel.bindAsEventListener(this);
		delOne.each(function(o){
			Element.extend(o);
			if(o.readAttribute('observe') != '1') {
				Event.observe(o, 'click', this._PlaylistDel);
				o.setAttribute('observe', '1');
			}
		}.bind(this));
		var tabsws = $A(this.con.down('.crumbs').childNodes);
		this._cookielistSwitch = this.cookielistSwitch.bindAsEventListener(this);
		tabsws.each(function(o){if(o.nodeType == 1 && o.getAttribute('handler')) Event.observe(o, 'click', this._cookielistSwitch)}.bind(this));
	},
	cookielistSwitch: function(evt) {
		var handler = Event.element(evt);
		while(!handler.readAttribute('handler'))
			handler = handler.up();
		if(handler.hasClassName('now')) return false;
		this.showCoolielist(handler.readAttribute('handler'));
		Event.stop(evt);
	},
	showCoolielist: function(id, remove) {
		var tabsws = $A(this.con.down('.crumbs').childNodes);
		tabsws.each(function(o){
			if(o.nodeType != 1) return;
			Element.extend(o);
			if(o.className.indexOf('now') >= 0) {
				if(remove != undefined && remove) {
					$(o.readAttribute('handler')).remove()
					if(o.previous()) o.previous().remove();
					if(o.next()) o.next().remove();
					o.remove();
				} else {
					$(o.readAttribute('handler')).hide()
					o = o.replace('<a handler="'+o.readAttribute('handler')+'">'+o.innerHTML+'</a>');
				}
			} else if(o.readAttribute('handler') == id) {
				$(id).show();
				o.replace('<span handler="'+o.readAttribute('handler')+'" class="now">'+o.innerHTML+'</span>');
			}
		}.bind(this));
		this.cookielistInit();
	},
	PlaylistClean: function(evt) {
		Event.stop(evt);
		var elm = Event.element(evt);
		if(elm.getAttribute('handler') == 'playlist') {
			PlayList.clean(function(o) {
				this.showCoolielist('playtag', true);
			}.bind(this));
		} else if(elm.getAttribute('handler') == 'playtag') {
			Nova.Cookie.set("PlayListTag",'',360);
			this.showCoolielist('playlist', true);
		}
	},
	PlaylistDel: function(evt) {
		Event.stop(evt);
		var elm = Element.extend(Event.element(evt));
		var list = elm.up('.list');
		while(elm.getAttribute('handler') == null) elm = elm.up();
		if(elm.getAttribute('handler') == 'playlist') {
			PlayList.del(elm.getAttribute('videoid'));
			elm.up().remove();
			if(list.empty()) this.showCoolielist('playtag', true);
		} else if(elm.getAttribute('handler') == 'playtag') {
			PlayList.delTag({videoid:elm.getAttribute('videoid')});
			elm.up().remove();
			if(list.empty()) this.showCoolielist('playlist', true);
		}
	},
	skinSet: function(evt) {
		Event.stop(evt);
		var elm = Element.extend(Event.element(evt));
		if(elm.nodeName.toLowerCase() != 'li' || elm.hasClassName('current'))
			return false;
		var siblings = elm.siblings();
		siblings.each(function(o){
			var idx = o.readAttribute('index');
			if(o.hasClassName('current')) {
				if(idx != 0) $('idxtheme'+idx).disabled = true;
				o.removeClassName('current');
			}
		});
		var idx = elm.readAttribute('index');
		elm.addClassName('current'); Nova.Cookie.set('sk', idx, 30);
		if(idx == 0) {Nova.Cookie.set('sk', null, -1); return false;}
		var csslink = $('idxtheme'+elm.readAttribute('index'));
		if(!csslink) {
			csslink = document.createElement('link');
			csslink.id = 'idxtheme'+elm.readAttribute('index');
			csslink.href = skinset[idx-1];
			csslink.rel = 'stylesheet';
			csslink.type = 'text/css';
			$$('head')[0].appendChild(csslink);
		} else {
			csslink.disabled = false;
		}
	},
	hideSkinSet: function(evt) {
		if(!isNaN(this.skinSetTimeout)) {
			window.clearTimeout(this.skinSetTimeout);
			this.skinSetTimeout = null;
		}
		if(evt.type.indexOf('over') >= 0) return false;
		this.skinSetTimeout = window.setTimeout('$(\'skinset\').hide()', 200);
	},
	pager: function(event, dir, con) {
		var pages = con.select('.items');
		var i = pages.length;
		var stat = con.down('.stat');
		var pre = con.down('.turn').down();
		var next = pre.next();
		while(i-- > 0) {
			if(pages[i].style.display != 'none') {
				page = i + 1;
				break;
			}
		}
		if(dir == 'pre' && page > 1) {
			pages[page-2].show();
			pages[page-1].hide();
			stat.innerHTML = (page-1)+' / '+pages.length;
			if(page-1 == 1) {
				pre.update();
				pre.className = 'pre_disabled';
			}
			if(page <= pages.length) {
				next.update('<a href="javascript:void(0);"></a>');
				next.className = 'next';
			}
		} else if(dir == 'next' && page < pages.length) {
			pages[page].show();
			pages[page-1].hide();
			stat.innerHTML = (page+1)+' / '+pages.length;
			if(page >= 1) {
				pre.update('<a href="javascript:void(0);"></a>');
				pre.className = 'pre';
			}
			if(page+1 >= pages.length) {
				next.update();
				next.className = 'next_disabled';
			}
		}
	}
}

var QIndex = new IndexEvent();





// 页面加载完成后初始化页面事件
window.nova_init_hook_event = function(){
	var ncUrl = 'http://'+ncDomain+'/index_nc?';
	var elms = [];
	// 初始化 首页登录/会员信息 区域
	if(islogin()) {
		ncUrl += 'r[]=prodad&e[]=index_login_div';
	}

	var cplstr = Nova.Cookie.get(PlayList.tag);
	if(cplstr != null || cplstr != "") {
		if(ncUrl.indexOf('?') != ncUrl.length-1) ncUrl += '&';
		ncUrl += 'r[]=cookielist&e[]=index_cookielist_div';
	}

	if(!QIndex.setIndexWeather()) {
		if(ncUrl.indexOf('?') != ncUrl.length-1) ncUrl += '&';
		ncUrl += 'r[]=weather&e[]=weather';
	}

	window.ncCallback = function() {
		if(arguments.length < 2) return;
		var content = arguments[0]
		var elm = $(arguments[1]);
		if(elm) {
			elm.innerHTML = content;
			try{
				nova_event_assign(arguments[1]);
			} catch(e) {};
		}
	}

	if(ncUrl.indexOf('?') != ncUrl.length-1) {
		var d = new Date();
		ncUrl += '&cb=ncCallback&rand='+d.getTime();
		Nova.addScript(ncUrl);
	}

	QIndex.drawerTabberInit();

	
	Event.observe(document, "click",  QIndex.hideVTip.bindAsEventListener(QIndex));
	Event.observe(document, "click",  function() {$('skinset').hide()});

	var s = "MSIE", u = navigator.userAgent, i = -1;
	if ((i = u.indexOf(s)) >= 0) {
		var v = parseFloat(u.substr(i + s.length));
		if(v == 6){ try{ document.execCommand("BackgroundImageCache", false, true); } catch(e){} }
	}

	if(typeof(sk) != 'undefined' && sk != null && sk != 0) {
		$$('#skinset li.s'+sk)[0].addClassName('current');
		$$('#skinset li.s0')[0].removeClassName('current');
	}
}
