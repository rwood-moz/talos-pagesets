// JavaScript Document
function list_tab(n){
	for(var i=1;i<=3;i++){
		var curCon=document.getElementById("list_"+i);
		var curBtn=document.getElementById("list_c_"+i);
		if(n==i){
			curBtn.style.display="block";
			curCon.className="switch";
			
		}else{
			curBtn.style.display="none";
			curCon.className="";			
		}
	}
}
function list_tab_bbs(n){
	for(var i=1;i<=2;i++){
		var curCon=document.getElementById("list_bbs_"+i);
		var curBtn=document.getElementById("list_bbs_c_"+i);
		if(n==i){
			curBtn.style.display="block";
			curCon.className="switch";
			
		}else{
			curBtn.style.display="none";
			curCon.className="";			
		}
	}
}
function list_tab_bbs1(n){
	for(var i=1;i<=2;i++){
		var curCon=document.getElementById("list_bbs1_"+i);
		var curBtn=document.getElementById("list_bbs1_c_"+i);
		if(n==i){
			curBtn.style.display="block";
			curCon.className="switch";
			
		}else{
			curBtn.style.display="none";
			curCon.className="";			
		}
	}
}
function list_tab_bbs2(n){
	for(var i=1;i<=2;i++){
		var curCon=document.getElementById("list_bbs2_"+i);
		var curBtn=document.getElementById("list_bbs2_c_"+i);
		if(n==i){
			curBtn.style.display="block";
			curCon.className="switch";
			
		}else{
			curBtn.style.display="none";
			curCon.className="";			
		}
	}
}
function search(n){
	for(var i=1;i<=2;i++){
		var curCon=document.getElementById("search_"+i);
		var curBtn=document.getElementById("search_c_"+i);
		if(n==i){
			curBtn.style.display="inline";
			curCon.className="people_input_search ";
		}else{
			curBtn.style.display="none";
			curCon.className="people_input_search_xuan";
		}
	}
}
function list_tab_new(n){
	for(var i=1;i<=2;i++){
		var curCon=document.getElementById("list_new_"+i);
		var curBtn=document.getElementById("list_new_c_"+i);
		if(n==i){
			curBtn.style.display="block";
			curCon.className="switch";
			
		}else{
			curBtn.style.display="none";
			curCon.className="";			
		}
	}
}