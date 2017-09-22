function getCookie(c_name)
{
	if (document.cookie.length>0)
	{
		c_start=document.cookie.toLowerCase().indexOf(c_name.toLowerCase() + "=");
		
		if (c_start!=0)
			c_start=document.cookie.toLowerCase().indexOf('; '+c_name.toLowerCase() + "=");
		
		if (c_start != -1)
		{ 
			if (c_start!=0)
				c_start = c_start + c_name.length+3; 
			else
				c_start = c_start + c_name.length+1; 
			
			c_end = document.cookie.indexOf(";" , c_start);
			
			if (c_end == -1) 
				c_end = document.cookie.length;
			
			return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return "";
}
function setCookie(c_name,value,expiredays)/*Send Null if You want to be Long Time*/
{
	if (expiredays!=null)
	{
		var exdate = new Date();
		exdate.setDate(exdate.getDate()+expiredays);
		document.cookie = c_name+ "=" +escape(value)+ ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
	}
	else
	{
		document.cookie = c_name+ "=" +escape(value);
	}
}
function CheckFireFox()
{
	if( document.implementation.hasFeature("XPath", "3.0") )
	{
		return true
	}
	else
	{
		return false
	}
}
function getElementTopMainStories(Elem)
{
	try
	{
		yPos = Elem.offsetTop;
		tempEl = Elem.offsetParent;
		while (tempEl != null) 
		{
			yPos += tempEl.offsetTop;
			tempEl = tempEl.offsetParent;
		}
	}
	catch(e)
	{}
	return yPos;
}
function getElementLeftMainStories(Elem) 
{
	try
	{
		xPos = Elem.offsetLeft;
		tempEl = Elem.offsetParent;
		while (tempEl != null) 
		{
			xPos += tempEl.offsetLeft;
			tempEl = tempEl.offsetParent;
		}
	}
	catch(e)
	{}
	return xPos;
}
function ShowTooltip(Obj,ImageURL,TitleArticle,Top,Left)
{
	document.getElementById('imgMainStoryToolTip').src=ImageURL
	document.getElementById('divMainStoryTTTitle').innerHTML=TitleArticle
	ToolTi=document.getElementById('TitleThumb')
	ToolTi.style.display=''
	ToolTi.style.top=eval(getElementTopMainStories(Obj)-eval(ToolTi.offsetHeight)-eval(Top))+'px'
	ToolTi.style.left=eval(getElementLeftMainStories(Obj)-eval(Left))+'px'
	
}
function HideTooltip()
{
	document.getElementById('TitleThumb').style.display='none'
}


function ShowTooltipAllTitles(Obj,Top,Left,Production)
{
	ToolTi=document.getElementById('allTitles')
	ToolTi.style.display=''
	ToolTi.style.top=eval(getElementTopMainStories(Obj)-eval(ToolTi.offsetHeight)-eval(Top))+'px'
	if (Production==null)
	{
		ToolTi.style.left=eval(getElementLeftMainStories(Obj)-eval(Left))+'px'
	}
	else
	{
		if (ToolTi.offsetWidth=='377')
			ToolTi.style.left=eval(getElementLeftMainStories(Obj)-eval(ToolTi.offsetWidth)-eval(Left)+eval(85))+'px'
		else
			ToolTi.style.left=eval(getElementLeftMainStories(Obj)-eval(ToolTi.offsetWidth)-eval(Left))+'px'
	}	
}
function HideTooltipAllTitles()
{
	document.getElementById('allTitles').style.display='none'
}




