
if(typeof(InSkinLoadedFiles)=='undefined'){InSkinLoadedFiles='inskin_loaddisabled';}
if(typeof(InSkinLoad)=='undefined'){var InSkinLoad={};InSkinLoad['BASE_URL']='http://inskin.vo.llnwd.net/o21/ikit/default';InSkinLoad['VERSION']='2011032901';InSkinLoad['loaddisabled_queue']=new Array();InSkinLoad['init']=function(params){var r=this.getURLParams();for(var k in r){if(k=='BASE_URL'||k=='NO_CACHE')params[k]=r[k];if(k.match(/^(srv|sas|plr|cnt|skn)_/))params[k]=r[k];}
var base_url=(params['BASE_URL']&&params['BASE_URL']!=''?params['BASE_URL']:this.BASE_URL);var required_files=new Array();var required_libraries=new Array();if(params['NO_CACHE']&&params['NO_CACHE']=='true'){this.VERSION=(new Date()).getTime();}
params['BASE_URL']=base_url;params['VERSION']=this.VERSION;var gzip='.gz';var gzip='';var ua=navigator.userAgent;if(-1!=ua.indexOf('Safari')){gzip='';}
var qs_files=this.getQueryStringFiles();for(var i=0;i<qs_files.length;i++){this.loaddisabledFile(base_url+'/js/'+qs_files[i],'');}
this.loaddisabledLibrary(base_url+'/js/3rdparty/jquery-1.3.2.min.js'+gzip,'jQuery');required_libraries[required_libraries.length]='jQuery';this.loaddisabledLibrary(base_url+'/js/3rdparty/swfobject_1x.js'+gzip,'SWFObject1x');required_libraries[required_libraries.length]='SWFObject1x';this.loaddisabledFile(base_url+'/js/inskin_base.min.js'+gzip+'?v='+this.VERSION,'inskin_base');required_files[required_files.length]='inskin_base';if(params['plr_ContentType']&&params['plr_ContentType']!=''){var lc=params['plr_ContentType'].toLowerCase();var url=base_url+'/js/api/'+lc+'.min.js'+gzip+'?v='+this.VERSION;var label='api_'+lc.toUpperCase();this.loaddisabledFile(url,label);required_files[required_files.length]=label;}
if(params['plr_LoadedContentTypes']&&params['plr_LoadedContentTypes']!=''){var arr=params['plr_LoadedContentTypes'].split(/,/);for(var i=0;i<arr.length;i++){var lc=arr[i].toLowerCase();var url=base_url+'/js/api/'+lc+'.min.js'+gzip+'?v='+this.VERSION;var label='api_'+lc.toUpperCase();this.loaddisabledFile(url,label);required_files[required_files.length]=label;}}
var InSkinDebug=parseInt(this.getURLParam('InSkinDebug'));if(!isNaN(InSkinDebug)&&InSkinDebug>0){params['DEBUG']=InSkinDebug;this.loaddisabledLibrary(base_url+'/js/3rdparty/blackbird.min.js'+gzip,'InSkinLog');required_libraries[required_libraries.length]='InSkinLog';this.loaddisabledCSS(base_url+'/css/blackbird.css');}
this.wait(required_files,required_libraries,params);}
InSkinLoad['loaddisabledFile']=function(url,label){if((label!=''&&InSkinLoadedFiles.indexOf(label)!=-1)||this.loaddisabled_queue[url])return;this.loaddisabled_queue[url]=true;this.loaddisabled(url);}
InSkinLoad['loaddisabledLibrary']=function(url,label){if(this.checkLibraryLoaded(label)||this.loaddisabled_queue[url])return;this.loaddisabled_queue[url]=true;this.loaddisabled(url);}
InSkinLoad['loaddisabled']=function(url){try{var s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('src',url);var h=document.getElementsByTagName('head')[0];h.appendChild(s);}
catch(e){void('<script type="text/javascript" src="'+url+'"></script>');}}
InSkinLoad['loaddisabledCSS']=function(url,doc){if(!doc)doc=document;try{var s=doc.createElement('link');s.setAttribute('type','text/css');s.setAttribute('rel','stylesheet');s.setAttribute('href',url);var h=doc.getElementsByTagName('head')[0];h.appendChild(s);}
catch(e){void('<link type="text/css" rel="stylesheet" href="'+url+'"></script>');}}
InSkinLoad['wait']=function(required_files,required_libraries,params){var sw=true;for(var i=0;i<required_files.length&&sw;i++){if(InSkinLoadedFiles.indexOf(required_files[i])==-1){sw=false;}}
for(var i=0;i<required_libraries.length&&sw;i++){sw=this.checkLibraryLoaded(required_libraries[i]);}
if(sw){new InSkinBase(params);}
else{setTimeout(function(){InSkinLoad.wait(required_files,required_libraries,params);},250);}}
InSkinLoad['checkLibraryLoaded']=function(label){switch(label){case'InSkinLog':return(typeof(InSkinLog)!='undefined');case'SWFObject1x':return(typeof(SWFObject)!='undefined');case'SWFObject2x':return(typeof(swfobject)!='undefined');case'jQuery':return(typeof(jQuery)!='undefined');}
return false;}
InSkinLoad['getQueryStringFiles']=function(){var qs_files=new Array();var scripts=document.getElementsByTagName('script');for(var i=0;i<scripts.length;i++){if(!(matches=scripts[i].src.match(/inskin_loaddisabled\.js\?(.*)$/)))continue;qs_files=matches[1].split(',');}
return qs_files;}
InSkinLoad['getURLParams']=function(){try{var r={};var s=window.location.search.substring(1);var a=s.split('&');for(var i=0;i<a.length;i++){var b=a[i].split('=');r[b[0]]=b[1];}
return r;}
catch(e){}
return{};}
InSkinLoad['getURLParam']=function(name){try{var s=window.location.search.substring(1);var a=s.split('&');for(var i=0;i<a.length;i++){var b=a[i].split('=');if(b[0]==name)return b[1];}}
catch(e){}
return null;}}