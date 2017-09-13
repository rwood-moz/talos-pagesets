
(function(window){
var document = window.document;
var lc = {
	url: '../empty.js',
	id:'',
	img:null,
	json:null,
	debug:false,
	notfound:[],
	opt:{
		post: true
	},
	hash:[],
	domready: function(fun){
		var that = this;
		if (document.attachEvent) {
			(function(){
				try {
					document.documentElement.doScroll("left");
				}
				catch (e) {
					setTimeout(arguments.callee, 0);
					return;
				}
				fun.call(that);
			})();
		}
		// FireFox and Opera
		else if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', function(){return fun.call(that)} ,false);
		}
	},
	extend: function(o1,o2){
		o2 = o2 || {};
		for(var key in o2){
			o1[key] = o2[key];
		}
		return o1;
	},
	bind_event: function(o,t,fn){
		if(o.addEventListener){
			o.addEventListener(t,fn,false);
		}else if(o.attachEvent){
			o.attachEvent("on"+t,fn);
		}else{
			o["on"+t] = fn;
		}
	},
	_make_hash: function(){
		var json = this.json ,i,len,e;
		for(i = 0 ,len = json.length ;i < len ;i += 1){
			e = this._by_depth(json[i].d);
			if(e){
				this.hash.push({
					'obj':json[i],
					'e':e
				});
			}else{
				this.notfound.push(json[i]);
			}
		}
	},
	_get_hash: function(e){
		for(var i = 0,len = this.hash.length ;i < len ;i+=1){
			if(e == this.hash[i].e){
				return this.hash[i];
			}
		}
		return null;
	},
	_get_hash_obj: function(e){
		var obj = null;
		if(!e){
			return null;
		}
		obj = this._get_hash(e);
		if(obj){
			return obj;
		}
		while((e = e.parentNode) && e != document.body){
			obj = this._get_hash(e);
			if(obj){
				return obj;
			}
		}
		return null;
	},
	_by_depth: function(depth){
		var i ,len ,a;
		var e = document;
		var da = depth.split('|');
		for(i = 0 ,len = da.length ;i < len ;i += 1){
			a = da[i].split('^');
			if(a[0].substr(0,1) == '@'){
				e = document.getElementById(a[0].substr(1));
			}else if(a[0].substr(0,1) == '.'){
				e = this._by_class(e,a[0].substr(1),a[1]);
			}else{
				e = this._by_tagname(e,a[0],a[1]);
			}
		}
		return e;
	},
	_by_class: function(e,classname,idx){
		if(!e){
			return null;
		}
		var a = [],i,len,c;
		var reg = new RegExp('\\b'+classname+'\\b','i');
		var children = this._get_children(e);
		for(i = 0,len = children.length ;i < len ;i += 1){
			c = children[i];
			if(reg.test(c.className)){
				a[a.length] = c;
			}
		}
		return a[idx];
	},
	_by_tagname: function(e,tagname,idx){
		if(!e){
			return null;
		}
		var a = [],i,len,c;
		var children = this._get_children(e);
		for(i = 0,len = children.length ;i < len ;i += 1){
			c = children[i];
			if(c.tagName.toLowerCase() == tagname){
				a[a.length] = c;
			}
		}
		return a[idx];
	},
	_get_element: function(e){
		var tag = e.tagName.toLowerCase();
		if(tag == 'a' || tag == 'embed' || tag == 'object'){
			return e;
		}
		if(e == document.body || tag == 'html'){
			return null;
		}
		while((e = e.parentNode) && e != document.body){
			if(e.tagName && e.tagName.toLowerCase() == 'a'){
				return e;
			}
		}
		return null;
	},
	_get_children: function(e){
		var i,len,children = [];
		var childnodes = e.childNodes;
		for(i = 0,len = childnodes.length ;i < len ;i += 1){
			if(childnodes[i].nodeType == 1){
				children[children.length] = childnodes[i];
			}
		}
		return children;
	},
	_md_handler: function(evt){
		var evt = evt || window.event;
		var tgt = evt.target || evt.srcElement;
		var e,hash;
		e = this._get_element(tgt);
		if(e){
			hash = this._get_hash_obj(e);
			if(hash){
				this._send(e,hash);
			}else{
				this._send('body');
			}
		}
	},
	_send: function(e,hash){
		var d,c,u,tag,i,len,param,a = [],head;
		if(typeof e == 'string'){
			if(e == 'body'){
				d = '1';
			}else if(e == 'pv'){
				d = '0';
			}
		}else{
			d = hash.obj.d;
			if(hash.obj.pc == '1'){
				c = hash.e.className.replace(/\s+/g,'');
				d += '%' + c;
			}
			tag = e.tagName.toLowerCase();
			if(tag == 'a'){
				u = e.href;
			}else if(tag == 'object'){
				param = e.getElementsByTagName("param");
				for(i = 0,len = param.length ;i < len ;i += 1){
					if(param[i].getAttribute("name") == "movie"){
						u = param[i].getAttribute("value");
						break;
					}
				}
			}else if(tag == 'embed'){
				u = e.src;
			}
		}
		a.push('id=' + this.id);
		a.push('index=' + d);
		if(u){
			a.push('url=' + encodeURIComponent(u));
		}
		a.push('ts=' + new Date().getTime());
		if(this.opt.post){
			head = document.getElementsByTagName('head')[0];
			head = head || document.body;
			if(this.img){
				head.removeChild(this.img);
			}
			this.img = null;
			this.img = document.createElement('script');
			this.img.src = this.url;
			head.appendChild(this.img);
		}
		if(this.debug){
			this.alert_click(d,hash,a);
		}
	},
	_init: function(){
		var that = this;
		that._send('pv');
		that._make_hash();
		that.bind_event(document.body,'mousedown',function(event){return that._md_handler.call(that,event)});
		if(this.debug){
			this.alert_notfound(that.notfound);
		}
	},
	init: function(id,json,opt){
		var that = this;
		that.id = id;
		that.json = that.json || json || [];
		that.opt = that.extend(that.opt,opt);
		if(that.opt.post){
			that.domready(function(){return that._init.call(that)});
			//that.bind_event(window,'load',function(){return that._init.call(that)});
		}
	},
	alert_click: function(){
		
	},
	alert_notfound: function(){
	
	}
};


window.TRACK_LINKCOLLECTER = lc;

})(window);
