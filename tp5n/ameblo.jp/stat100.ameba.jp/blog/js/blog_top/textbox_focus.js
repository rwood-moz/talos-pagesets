/*
 * $Revision: 1.1 $
 */


(function () { 
	
	//携帯はこちらのアンカーを生かすため
	
	var _helpOverFlg = false;
	
	$("#anchorToMobileArea")
	
		.mouseover(function(e){
		
			_helpOverFlg = true;
			
		})
		
		.mouseout(function(e){
		
			_helpOverFlg = false;
			
		});
	

	$("#mailaddress")
	
		.focus(function(e){
		
			//他のhelp消し、自分を出す
			$(".inputDetail").css("display","none");
			
			$(e.target.parentNode).children(".inputDetail").css("display","block");
		
			
			//色
			$(e.target).addClass("textInputFocus");
		
		})
		
			
		.blur(function(e){
		
			//アンカー生かし
			if(_helpOverFlg ==true) return;
			
		
			//消す
			$(e.target.parentNode).children(".inputDetail").css("display","none");
			
			
			//色
			$(e.target).removeClass("textInputFocus");

			
		});


 })()
