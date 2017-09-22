	var n=0;
	function conaus(value){
		try
		{
			with (conau){
	
					for(i=0;i<2;i++)i==value?children[i].style.display="block":children[i].style.display="none"; 
					}
		}
		catch(e)
		{
			var d = document.getElementById("conau").getElementsByTagName("div");
			for(i=0;i<2;i++)i==value?d[i].style.display="block":d[i].style.display="none"; 
		}
	
	}
	function setAuto(){autoStart=setInterval("auto(n)", 7000)}
	function auto(){
		n++;
		if(n>1)n=0;
		conaus(n);
	} 
	setAuto(); 