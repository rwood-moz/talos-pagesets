(function(){
	function getCookie(name){
		var cookie=document.cookie
		var s = removeBlanks(cookie)
		var pairs = s.split(";")
		for (var i=0;i<pairs.length ;i++ ){
			var pairSplit = pairs[i].split("=")
			if(pairSplit.length==1){
				return ""
			}
			if (pairSplit[0]==name){
				return pairSplit[1]
			}
		}
		return ""
	}
	function removeBlanks(s){
		var temp="";
		for (var i=0;i<s.length;i++ ){
			var c = s.charAt(i)
			if (c!=" "){
				temp+=c
			}
		}
		return temp
	}
	function setCookie(name,value){
		var d = new Date();
		d.setTime(d.getTime()+360*24*60*60*1000)
		var newCookie = name+"="+value+";"+"path=/;domain=.ifeng.com;expires="+d.toGMTString(); 
		window.document.cookie=newCookie
	}
	function getUserid(){
		var d = new Date();
		var userid = d.getTime()+"_"+Math.round(Math.random()*10000);
		return userid;
	}
	
	var uri = document.location.href.replace(/&/g,'|');
	var ref = document.referrer.replace(/&/g,'|');
	var uid = getCookie("userid");
	var ilocid = getCookie("ilocid");
	var ilocidflag = getCookie("ilocidflag");
	var sid = getCookie("sid");
    if(uid==""){
		uid = getUserid();
		setCookie("userid",uid);
	}
	var d2 = new Date();
	var editor = '';
	if(document.getElementById('editor_name') != null){
		editor = encodeURIComponent(document.getElementById('editor_name').innerHTML);
	}
	var param = "ref="+ref+"&uid="+uid+"&location="+ilocid+"&sid="+sid+"&editor="+editor+"&timestamp="+d2.getTime()
	void("<script type=\"text/javascript\" src=\"httpdisabled://stadig.ifeng.com/page.js?"+param+"\"></script>")

	if(ilocid==""||ilocidflag==""){
		void("<script type=\"text/javascript\" src=\"httpdisabled://stadig.ifeng.com/collect/getilocid.jsp\"></script>");
	}

})();