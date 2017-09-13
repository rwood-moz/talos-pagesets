try{
	if(NovaOptions.compatibleMode == true)
	{
		window.onloaddisabled = window.nova_init_hook_share;
	}
}catch(e){}
window.nova_init_hook_playlist = function (){
	try{
		PlayList.init();
		PlayListIndexCallback();
	}catch(e){}
}
//{{{class define
function item(){this.videoid="";}
function PlayList(){}
PlayList.cacheTag= new Array();
PlayList.imageQls=new Image;
PlayList.imageQls.src="httpdisabled://static.youku.com/v/img/qls.gif";
PlayList.imageQlh=new Image;
PlayList.imageQlh.src="httpdisabled://static.youku.com/v/img/qlh.gif";
PlayList.imageQlsed=new Image;
PlayList.imageQlsed.src="httpdisabled://static.youku.com/v/img/qlsed.gif";
PlayList.setPosition = function(videoid,position,callback){
	position=parseInt(position);
	var items = this.getAll();
	var items_new = new Array();
	var flag=false;
	var added=false;
	if(position>0 && position<items.length+1){
		for(i=0;i<=items.length;i++){
			if(!added){
				if(flag){
					if(i==position){
						var it = new item;
						it.videoid=videoid;
						items_new.push(it);
						added=true;
					}
				}else{
					if(i+1==position){
						var it = new item;
						it.videoid=videoid;
						items_new.push(it);
						added=true;
					}
				}
			}
			try{
				if(videoid != items[i].videoid){
					items_new.push(items[i]);
				}else{
					flag=true;
				}
			}catch(e){}
		}
		this.setAll(items_new);
		if(callback != undefined && callback !=""){
			try{
				callback();
			}catch(e){
			}
		}
	}else{
		alert("你输入的位置超过了范围");
		return false;
	}
}

PlayList.isRemoveOnPlayComplete="";
PlayList.setRemove = function(){
	var isRemoveOnPlayComplete = Nova.Cookie.get("isRemoveOnPlayComplete");
	if(isRemoveOnPlayComplete != "true"){
		isRemoveOnPlayComplete = true;
	}else{
		isRemoveOnPlayComplete = false;
	}
	this.isRemoveOnPlayComplete = isRemoveOnPlayComplete;
	Nova.Cookie.set("isRemoveOnPlayComplete",isRemoveOnPlayComplete,360);

}
//设置为默认删除
PlayList.initRemove = function(){
	var isRemoveOnPlayComplete = Nova.Cookie.get("isRemoveOnPlayComplete");
	if(isRemoveOnPlayComplete != "true" && isRemoveOnPlayComplete!="false"){
		isRemoveOnPlayComplete = true;
		this.isRemoveOnPlayComplete = isRemoveOnPlayComplete;
		Nova.Cookie.set("isRemoveOnPlayComplete",isRemoveOnPlayComplete,360);
	}
}
PlayList.next = function (videoid){}
//增加一个视频到用户点播单
PlayList.add = function(videoid,title,logo){
	var items = this.getAll();
	try{
		var i = new item;
		i.videoid=videoid;
		items.push(i);
	}catch(e){}
	this.setAll(items);
}
PlayList.getAll = function(){
	try{
		var items=JSON.parse(Nova.Cookie.get("PlayList"));
		if (items instanceof Array){
			return items;
		}else{
			throw "false";
		}
	}catch(e){
		return new Array();
	}
}
PlayList.setAll = function(items){
	try{
		Nova.Cookie.set("PlayList",JSON.stringify(items),360);
	}catch(e){}
}
PlayList.check = function(videoid){
	var items = this.getAll();
	for(i=0;i<items.length;i++){
		if(videoid == items[i].videoid){
			return true;
		}
	}
	return false;
}
PlayList.del = function(videoid,callback){
	var items = this.getAll();
	var items_new = new Array();
	for(i=0;i<items.length;i++){
		if(videoid != items[i].videoid){
			items_new.push(items[i]);
		}
	}
	this.setAll(items_new);
	if(callback != undefined && callback !=""){
		try{
			callback();
		}catch(e){}
	}
}
PlayList.clean = function(callback){
	var items_new = new Array();
	this.setAll(items_new);
	if(callback != undefined && callback !=""){
		try{
			callback();
		}catch(e){}
	}
}
PlayList.list = function (start,end){}
//获取用户的点播单数目
PlayList.getNum = function(){}
PlayList.render = function(img,callback){
	if(img.id==undefined){
		//参数是直接的ID，兼容以前模式
		var videoid = img;
	}else{
		var tmp=img.id.split("_");
		if(tmp[1]==undefined || tmp[1]==""){return;}
		var videoid = tmp[1];
	}
	if(!this.check(videoid)){
		this.add(videoid,img.title,img.src);
	}else{
		if(img.nodeName.toLowerCase() == 'img') this.del(videoid);
	}
	PlayList.init();
	if(callback != undefined && callback !=""){
		try{
			callback();
		}catch(e){}
	}
	Nova.addScript("httpdisabled://hz.youku.com/red/click.php?tp=1&cp=4000554&cpp=1000223&"+Math.random());
}

PlayList.flag = "PlayListFlag";
PlayList.init = function(module){
	try{
		if(PlayList.cacheTag.length==0){
			var list=[document.getElementsByTagName('img'),document.getElementsByTagName('span')];
			var f=true;
		}else{
			var list = [PlayList.cacheTag];
			var f=false;
		}
		var items = this.getAll();
		var n = list.length;
		while(n-- > 0) {
			var n2=list[n].length;
			while(n2-->0){
				var inPlayList =false;
				var o= list[n][n2];
				if( o.id == undefined || o.id =="" )continue;
				
				var tmp =o.id.split("_");
				if(tmp[0]!=PlayList.flag || tmp[1]==undefined || tmp[1]=="")continue;
				var videoId= tmp[1];
				if(f)PlayList.cacheTag=PlayList.cacheTag.concat(o);

				for(var i=0;i<items.length;i++){
					if(videoId == items[i].videoid){//在播放列表里
						inPlayList=true;
						break;
					}
				}

				if(o.onclick == undefined || o.onclick == "") {
					o.onclick = function(){
						PlayList.render(this,PlayListIndexCallback);
					}
				}
				if(inPlayList){
					o.title="从点播单移除";
					o.onmouseout=function(){}
					o.onmouseover=function(){}
					if(o.nodeName.toLowerCase()=="img"){
						if(o.src.indexOf("qlus.gif")>-1)continue;
						o.style.display="block";
						o.src=PlayList.imageQlsed.src;
					}else if(o.nodeName.toLowerCase()=="span"){
						o.title = '开始播放';
						o.className = 'ico__listexist';
						try {
							var link = Element.extend(o).up('ul').down('a');
							var vlink = link.href.substr(0, link.href.indexOf('/', 7))+'/v_show/id_'+videoId+'_type_99.html';
							Element.extend(o).replace('<a id="PlayListFlag_'+videoId+'" title="'+o.title+'" target="_blank" class="'+o.className+'" href="'+vlink+'"></a>');
						} catch(e) {}
					}
				}else{
					o.title="添加到点播单";
					if(o.nodeName.toLowerCase()=="img"){
						if(o.src.indexOf("qlus.gif")>-1)continue;
						o.style.display="block";
						o.src=PlayList.imageQls.src;
						o.onmouseout=function(){ this.src=PlayList.imageQls.src;}
						o.onmouseover=function(){ this.src=PlayList.imageQlh.src;}
					}else if(o.nodeName.toLowerCase()=="span"){
						o.className = 'ico__listquick';
						o.onmouseout = function(){this.className = 'ico__listquick';};
						o.onmouseover = function(){this.className = 'ico__listadd';};
					}
				}
			}
		}
	}catch(e){}
	this.initRemove();
}
//}}}

//{{{ hoverVP
PlayList.HoverVP = function(){}
PlayList.HoverVP.vmenuqueue = new Array();//menu added
PlayList.HoverVP.collection = new Array();
PlayList.HoverVP.collection['videos'] = new Array();
//PlayList.HoverVP.collection['shows'] = new Array();
PlayList.HoverVP.init = function(){PlayList.HoverVP.walk();PlayList.HoverVP.bind();}
PlayList.HoverVP.walk = function(){
	var ULs = document.getElementsByTagName("UL");
	for(var i=0; i<ULs.length; i++){
		var UL = ULs[i];
		if(UL.className == 'v' || UL.className.indexOf('v ') != -1){//查找video 
			var LIs = UL.getElementsByTagName('LI');
			var vmenu = null;
			var linker = null;
			for(var j=0; j<LIs.length; j++){
				var LI = LIs[j];
				if(LI.className == 'v_menu'){ 
					vmenu = LI; 
					vmenu.style.display='none'; 
					//点播单
					var videoId = 0;
					var tmp = vmenu.id.split("_");
					if(tmp[0]==PlayList.flag && (tmp[1]!=undefined || tmp[1]!="")) videoId = tmp[1];
					if (PlayList.check(videoId))
					{
						vmenu.style.display='block'; 
						vmenu.innerHTML = '<span class="ico__listexist" title="播放该视频"><a href="httpdisabled://v.youku.com/v_show/id_'+videoId+'.html" target="_blank"></a></span>';
					}else
					{
						vmenu.innerHTML = '<span class="ico__listadd" title="添加到点播单"></span>';
					}
				}
				if(LI.className == 'v_link'){ linker = LI; }
			}
			if(vmenu && linker ){ PlayList.HoverVP.collection.videos.push({'linker': linker, 'vmenu': vmenu}); }
		}
		/*
		if(UL.className == 'p' || UL.className.indexOf('p ') != -1){//查找show
			var LIs = UL.getElementsByTagName('LI');
			var status = null;
			var linker = null;
			for(var j=0; j<LIs.length; j++){
				var LI = LIs[j];
				if(LI.className == 'p_status'){ status = LI; }
				if(LI.className == 'p_link'){ linker = LI; }
			}
			if(status && linker ){ PlayList.HoverVP.collection.shows.push({'linker': linker, 'status': status}); }
		}
		*/
	}
}
PlayList.HoverVP.getvmenu = function(linker){
	var len = PlayList.HoverVP.collection.videos.length;
	for(var i=0; i<len; i++){
		var v = PlayList.HoverVP.collection.videos[i];
		if(v.linker == linker){ return v.vmenu; }
	}
	return null;
}
PlayList.HoverVP.getpstatus = function(linker){
	var len = PlayList.HoverVP.collection.shows.length;
	for(var i=0; i<len; i++){
		var p = PlayList.HoverVP.collection.shows[i];
		if(p.linker == linker){ return p.status; }
	}
	return null;
}
PlayList.HoverVP.getvlinker = function(vmenu){
	var len = PlayList.HoverVP.collection.videos.length;
	for(var i=0; i<len; i++){
		var v = PlayList.HoverVP.collection.videos[i];
		if(v.vmenu == vmenu){ return v.linker; }
	}
	return null;
}
PlayList.HoverVP.bind = function(){
	var len1 = PlayList.HoverVP.collection.videos.length;
	for(var i=0; i<len1; i++){
		var v = PlayList.HoverVP.collection.videos[i];
		v.linker.onmouseover = function(){ PlayList.HoverVP.showvmenu(PlayList.HoverVP.getvmenu(this)); };
		v.linker.onmouseout = function(){ PlayList.HoverVP.hidevmenu(PlayList.HoverVP.getvmenu(this)); };
		v.vmenu.onmouseover = function(){ PlayList.HoverVP.showvmenu(this); };
		v.vmenu.onmouseout = function(){ PlayList.HoverVP.hidevmenu(this); };
		v.vmenu.onclick = function(){PlayList.HoverVP.clickvmenu(this); };
	}
	/*
	var len2 = PlayList.HoverVP.collection.shows.length;
	for(var i=0; i<len2; i++){
		var p = PlayList.HoverVP.collection.shows[i];
		p.linker.onmouseover = function(){ PlayList.HoverVP.showpstatus(PlayList.HoverVP.getpstatus(this)); };
		p.linker.onmouseout = function(){ PlayList.HoverVP.hidepstatus(PlayList.HoverVP.getpstatus(this)); };
	}
	*/
}
PlayList.HoverVP.vemenuisadded = function(vmenu){
	for(var i=0, len=PlayList.HoverVP.vmenuqueue.length; i<len; i++){
		if(vmenu == PlayList.HoverVP.vmenuqueue[i]){
			return true;	
		}
	}
	return false;
}
PlayList.HoverVP.clickvmenu = function(vmenu){
	if(!PlayList.HoverVP.vemenuisadded()){
		PlayList.HoverVP.vmenuqueue.push(vmenu);
		var vSpans = vmenu.getElementsByTagName('span');
		var vLinker = PlayList.HoverVP.getvlinker(vmenu);
		var vLinks = vLinker.getElementsByTagName('a');
		if (vSpans[0].className == 'ico__listadd')
		{
			//TODO playlist
			var videoId = 0, title = '', logo = '';
			var tmp = vmenu.id.split("_");
			if(tmp[0]==PlayList.flag && (tmp[1]!=undefined || tmp[1]!="")) videoId = tmp[1];
			PlayList.add(videoId, title, logo);
			PlayListIndexCallback();				
			vmenu.innerHTML = '<span class="ico__listexist" title="播放该视频"><a href="'+vLinks[0].href+'" target="_blank"></a></span>';
		}
		vmenu.onclick = null;
	}
}
PlayList.HoverVP.showvmenu = function(vmenu){
	if(!vmenu){ return; }
	//点播单
	var videoId = 0;
	var tmp = vmenu.id.split("_");
	if(tmp[0]==PlayList.flag && (tmp[1]!=undefined || tmp[1]!="")) videoId = tmp[1];
	if (PlayList.check(videoId)) return;
		
	if(!PlayList.HoverVP.vemenuisadded(vmenu)){
		vmenu.style.display ='block';
	}
}
PlayList.HoverVP.hidevmenu = function(vmenu){
	if(!vmenu){ return; }
	//点播单
	var videoId = 0;
	var tmp = vmenu.id.split("_");
	if(tmp[0]==PlayList.flag && (tmp[1]!=undefined || tmp[1]!="")) videoId = tmp[1];
	if (PlayList.check(videoId)) return;
	
	if(!PlayList.HoverVP.vemenuisadded(vmenu)){
		vmenu.style.display ='none';
	}	
}
PlayList.HoverVP.showvmenu = function(vmenu){
	if(!vmenu){ return; }
	if(!PlayList.HoverVP.vemenuisadded(vmenu)){
		vmenu.style.display ='block';
	}
}
/*
PlayList.HoverVP.hidepstatus = function(pstatus){
	if(!pstatus){ return; }
	pstatus.style.display ='none';
}
PlayList.HoverVP.showpstatus = function(pstatus){
	if(!pstatus){ return; }
	pstatus.style.display ='block';
}
*/
//}}}

//{{{user interface
function PlayListIndexCallback(){
	if(PlayList.getAll().length==0){	
		document.getElementById("playlist_span").style.display="none";
	}else{
		document.getElementById("playlist_span").style.display="inline";
	}
	document.getElementById("playlist_count").innerHTML= PlayList.getAll().length;
}
function PlayListIndexAdd(item) {
    var g = document.createElement("a");
    g.href="/v/show/id/"+item.videoid;
    g.innerHTML='<img style="margin:2px; padding:2px" src="'+item.logo+'" width="36" height="27" border="0" />';
    document.getElementById("PlayListIndexContenter").appendChild(g);
}
function PlayListSave(){
	if(islogin()){
		PlayListSaveDialog();
	}else{
		login(PlayListSaveDialog);
	}
}
function PlayListSaveDialog(r){
	try{
		Dialog.cancelCallback()
	}catch(e){}
    if(pop!=null)pop.close();
    pop=new Popup({contentType:1,isSupportDraging:false,isReloaddisabledOnClose:false,width:580,height:480});
    pop.setContent("title","");
    pop.setContent("contentUrl", "/v/showPlayListSave");
    pop.build();
    pop.show();
}
//}}}

//{{{记录视频书签
PlayList.tag="PlayListTag";
PlayList.addTag= function(o){
	var t=0;
	if(o && o.ns && o.ns.time && o.ns.alltime && (parseInt(o.ns.time)<parseInt(o.ns.alltime)-5)){
		t=parseInt(o.ns.time);
	}
	var items = new Array();
	try{
		var items_tmp = JSON.parse(Nova.Cookie.get(PlayList.tag));
		if (items_tmp instanceof Array){
			items = items_tmp;
		}
	}catch(e){}
	//{{{check unique
	for(var i=0;i<items.length;i++){
		if(	(items[i].folderid!=undefined && items[i].folderid == o.folderid)|| 
			(items[i].showid!=undefined && items[i].showid== o.showid)|| 
			items[i].videoid == o.videoid
		){
			items.splice(i,1);
			break;
		}
	}
	//}}}
	try{
		var it = new item;
		if(t>0)it.sec= t;
		it.videoid=o.videoid;
		if(o.folderid){ it.folderid = o.folderid }
		if(o.showid){ it.showid= o.showid}
		if(o.vidEncoded){ it.vidEncoded= o.vidEncoded}
		if(o.stage){ it.stage= o.stage}
		if(o.order){ it.order= o.order}
		if(o.pos){ it.pos = o.pos}
		items.unshift(it);
		items = items.slice(0,30);
	}catch(e){}
	Nova.Cookie.set(PlayList.tag,JSON.stringify(items),15);
}
PlayList.delTag= function(o){
	var items = new Array();
	try{
		var items_tmp = JSON.parse(Nova.Cookie.get(PlayList.tag));
		if (items_tmp instanceof Array){
			items = items_tmp;
		}
	}catch(e){}
	for(var i=0;i<items.length;i++){
		if((o.folderid && items[i].folderid== o.folderid) || (o.videoid && items[i].videoid == o.videoid)){
			items.splice(i,1);
			break;
		}
	}
	Nova.Cookie.set(PlayList.tag,JSON.stringify(items),15);
}
PlayList.getTag=function(playmode,args){
	var items = new Array();
	try{
		var items_tmp = JSON.parse(Nova.Cookie.get(PlayList.tag));
		if (items_tmp instanceof Array){
			items = items_tmp;
		}
	}catch(e){}
	if(items.length==0)return;
	switch(parseInt(playmode)){
		case 2://专辑
			if(args && args.folderid!=undefined){
				for(var i=0;i<items.length;i++){
					if(	items[i].folderid==args.folderid ){
						return(items[i]);
						break;
					}
				}
			}
		break;
		case 3://节目
			if(args && args.showid!=undefined){
				for(var i=0;i<items.length;i++){
					if(	items[i].showid==args.showid){
						return items[i];
						break;
					}
				}
			}
		break;
		default://视频
			if(args && args.videoid!=undefined){
				for(var i=0;i<items.length;i++){
					if(	items[i].videoid==args.videoid){
						return items[i];
						break;
					}
				}
			}
	}
}
//}}}