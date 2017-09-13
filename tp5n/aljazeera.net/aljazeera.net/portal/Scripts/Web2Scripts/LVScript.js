var CurrentSelectedMainThird=0;
var ObjTimerSM;
var arrPromoDataItem = new Array();
var arrPromoDataItems = new Array();
var PromoDataCount=0;
var TimerID = 0;
var ArrMainStoriesThirdImagesFix=new Array;
var ArrMainStoriesThirdImages=new Array;
var TimerLeftServices;
var ChannelXml;
var oItemNodeList;
var TextDefine;
var SelectedItem;
var SelectedX, SelectedY;
var MouseX, MouseY;
var AILArr = new Array();
AILArr[4]='/portal/Images/LightVersionWeb2/LoadingTabs.gif'
AILArr[5]='/portal/Images/LightVersionWeb2/listSquare.jpg'
var PublicCurrentMode;
var MenuFirstRun = 1;

/*  This Function Added By Moayad Al-Saleh 2/4/2009 */
/* Start */
function OnKeyPressHandle(e)
{

	try
	{
		if (window.XMLHttpRequest)
		{
			if (e.keyCode==13)
			{
				var p=e.target;
				if (p.attributes['id'])
				{  
					if (p.attributes['id'].value=="LightVersionSearchtxt")
					{	
						BuildportalSimpleSearchResultURL('LightVersionSearchURL','LightVersionSearchtxt');CountAreaHits('7');
						return false;
					}
				}
			}
		}
		else
		{
			if (window.event.keyCode==13)
			{
				if (window.document.activeElement.id =="LightVersionSearchtxt") 
				{	
					BuildportalSimpleSearchResultURL('LightVersionSearchURL','LightVersionSearchtxt');CountAreaHits('7');
					return false;
				}
				if (window.document.activeElement.id =="")
				{
					return false;
				}	
			}
		}
	}
	catch(err)
	{
			if (window.event.keyCode==13)
			{
				if (window.document.activeElement.id =="LightVersionSearchtxt") 
				{	
					BuildportalSimpleSearchResultURL('LightVersionSearchURL','LightVersionSearchtxt');CountAreaHits('7');
					return false;
				}
				if (window.document.activeElement.id =="")
				{
					return false;
				}
					
			}
	}
}

window.document.onkeypress = OnKeyPressHandle;

/* End */

function newsArea(Switch) 
{
	if (Switch==1)
	{
		

	if (PmSMenu.toLowerCase()=='online')
		{
			GetLatestNews()
			
		}
		else
		{
		if (document.getElementById("img7"))
			{getDisc("img7", document.getElementById("img7").name);}
		}
		document.getElementById('FromSiteNews').style.display = "block";
		document.getElementById('hourlyNewsTab').style.display = "none";
		document.getElementById('tdFromSiteNewsClick').className='newsTabBg';
		document.getElementById('tdLatestNewsClick').className='';
		
		

			
				

	}
	else if (Switch==2)
	{
		document.getElementById('FromSiteNews').style.display = "none";
		document.getElementById('hourlyNewsTab').style.display = "block";
		document.getElementById('tdFromSiteNewsClick').className='';
		document.getElementById('tdLatestNewsClick').className='newsTabBg';
	}
}

function GetVoteCookieValue(sParent, sName, sValue)
{
	var aCookie = document.cookie.split("; ");
	for (var i=0; i < aCookie.length; i++)
	{
		// a name/value pair (a crumb) is separated by an equal sign
		var aCrumb = aCookie[i].split("=");
		if (aCookie[i].lastIndexOf(sName)> -1) 
		{
				var aCrumb = aCookie[i].split("=");
				if (sParent == aCrumb[0])
				{ 
					if (sName == aCrumb[1])
					{
						if (aCrumb[2].search(",") > -1)
						{
							var aCrumb2 = aCrumb[2].split(",");
							for (var l=0; l < aCrumb2.length; l++)
							{
								if (aCrumb2[l] == sValue)
									return aCrumb2[l];
							}
						}
						else
						{
							if (aCrumb[2] == sValue)
								return unescape(aCrumb[2]);
						}
					}
					
				}
			//}
		}

	}
	// a cookie with the requested name does not exist
	return null;
}

function CheckCookie(vid)
{
	var voteId = GetVoteCookieValue("vote","vID",vid);
	if (voteId)
	{
		DisableRadioButtons(document.getElementsByName("voteSelect" + vid))
		
		var votePartLink = document.getElementById("votePart" + vid);
		if (votePartLink)
			votePartLink.removeAttribute("href");
	}
}

function DisableRadioButtons(btn)
{
	for (var x = 0;x < btn.length; x++)
	{
		btn[x].disabled = true;
		btn[x].readOnly = true;
	}
}

function OpenVoteUrl(url, type, vid)
{	
	if (type == 0)
	{
		if ((document.getElementById("yourAnswer"+vid).value > 0) && (document.getElementById("yourVote"+vid).value == vid))
		{
			var voteId = GetVoteCookieValue("vote","vID",vid);
			if (voteId)
			{
				url = url + "&yourAnswer=" + document.getElementById("yourAnswer"+vid).value + "&disablevote=true";
			}
			else
			{
				url = url + "&yourAnswer=" + document.getElementById("yourAnswer"+vid).value;	
			}
			void(url,vid,"height=333,width=590,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes");	
		}
	}
	else
		void(url,vid,"height=333,width=590,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes");	
}

function RemoveChildElement(ParentElement,ChildElement)
{
	document.getElementById(ParentElement).removeChild(document.getElementById(ChildElement));
}
function AddToProgramsPromoDataArr(strDispalyName,strEpisodeName,strProgramDay,strProgramGMTTime,strProgramMaccaTime, strProgramEmail, strProgramType)
{
	arrPromoDataItem[0]=strDispalyName;
	arrPromoDataItem[1]=strEpisodeName;
	arrPromoDataItem[2]=strProgramDay;
	arrPromoDataItem[3]=strProgramGMTTime;
	arrPromoDataItem[4]=strProgramMaccaTime;
	arrPromoDataItem[5]=strProgramEmail;
	arrPromoDataItem[6]=strProgramType;
	arrPromoDataItems[PromoDataCount] = arrPromoDataItem;
	PromoDataCount= arrPromoDataItems.length;
	arrPromoDataItem = new Array();
}
function FillProgramsToolTip(e , IntIndex)
{
	if(TimerID) 
	{
		clearInterval(TimerID);
		clearTimeout(TimerID);
	}
	if(document.getElementById('PromoTip').style.display = 'none')
	{
		document.getElementById('ProgramName').innerHTML = 'اسم البرنامج: ' + arrPromoDataItems[IntIndex - 1][0];
		document.getElementById('EpisodeName').innerHTML = 'عنوان الحلقة : ' + arrPromoDataItems[IntIndex - 1][1];
		document.getElementById('Date_Type').innerHTML = arrPromoDataItems[IntIndex - 1][2]+ '/' + arrPromoDataItems[IntIndex - 1][6];
		document.getElementById('Time').innerHTML = arrPromoDataItems[IntIndex - 1][3] + ' غرينتش  ' + arrPromoDataItems[IntIndex - 1][4] + ' مكة';
		document.getElementById('ProgramMail').innerHTML = '<a href="mailto:' + arrPromoDataItems[IntIndex - 1][5] + '">' + arrPromoDataItems[IntIndex - 1][5] + '</a>';
		document.getElementById('PromoTip').style.display = '';	
		document.getElementById('PromoTip').style.left = eval(eval(getElementLeft(e))) + 'px';
		document.getElementById('PromoTip').style.top = getElementTop(e)+39 + 'px';
		document.getElementById('PromoTip').style.position = "absolute";
	}
}
//**Prog**
function PromoDataDisappear()
{
	if (TimerID)
	{
		clearTimeout(TimerID);
		document.getElementById('PromoTip').style.display = 'none';
	}	
}
//## Hide ToolTip For Promo Programs
function MouseOUT ()
{
	TimerID = setTimeout("PromoDataDisappear();",1000);
}

function CountAreaHits(e , strAreaID , pageUrl)
{
   try
    {   
        var mode1;
        var mode2;
    	
        mode1 = pageURL.search("NRMODE=Unpublished");
        mode2 = pageURL.search("NRMODE=Update");
        	
        if (mode1 != -1 || mode2 != -1)
        {
            if(pageUrl != "")
            {
                e.setAttribute("href" ,  pageUrl);		 
            }
        }
        else
        {
            if(pageUrl == "")
            {
                document.getElementById('googleanalytics').src = getGoogleStatistsPagePath(strAreaID);
            }
            else
            {
                if(strAreaID == "3" || strAreaID == "5" || strAreaID == "11" || strAreaID == "14" || strAreaID == "16" || strAreaID == "18" || strAreaID == "39")
                {
                    document.getElementById('googleanalytics').src = getGoogleStatistsPagePath(strAreaID);
                    if(pageUrl != "")
                    {
                        e.setAttribute("href" ,  pageUrl);
                    }
                }
                else if(strAreaID == "15" || strAreaID == "17")
                {
                    window.location.href = getGoogleStatistsPagePath(strAreaID) + "?PageUrl=" + escape(pageUrl);
                }
                else
                {
                    if(pageUrl.indexOf("?")==-1)
                    {
                        e.setAttribute("href" , pageUrl + "?GoogleStatID=" +  strAreaID);
                    }
                    else
                    {
                        e.setAttribute("href" , pageUrl + "&GoogleStatID=" +  strAreaID);
                    }
                }
            }
        }
    }
    catch(ex)
    {

    }	
}


// this javascript function is put in footer copyright
function getGoogleStatistsPagePath(strAreaID)
{
	   try
	   {	
			var url="/portal/StatisticsPages/";
			switch(strAreaID)
			{
				case "1": //All Headlines Area
					url += "AllHeadlinesArea.aspx";
				break;
				
				case "2": //Articles Point View Area
					url += "ArticlesPVArea.aspx";
				break;
				
				case "3": //Build Your Page Area
					url += "BYPArea.aspx";
				break;
						
				case "4": //Caricature Area.aspx
					url += "CaricatureArea.aspx";
				break;
				
				case "5": //Channel Watch Area 
					url += "ChannelWatchArea.aspx";
				break;
				
				case "6": //Discussion Area 
					url += "DiscussionArea.aspx";
				break;
				
				case "7": //Documentary Area
					url += "DocumentaryArea.aspx";
				break;
				
				case "8": //Lestin Latest News Area
					url += "LestinLatestNewsArea.aspx";
				break;
				
				case "9": //Latest News 12hours Area
					url += "LN12Area.aspx";
				break;
				
				case "10": //Latest News 24hour Area
					url += "LN24Area.aspx";
				break;
				
				case "11": //Membership Area
					url += "MembershipArea.aspx";
				break;
				
				case "12": //Mobile Area
					url += "MobileArea.aspx";
				break;
				
				case "13": //Most Viewed Area
					url += "MostViewedArea.aspx";
				break;
				
				case "14": //Rports Thumbs Area
					url += "RportsThumbsArea.aspx";
				break;
				
				case "15": //Podcast Area
					url += "PodcastArea.aspx";
				break;
				
				case "16": //Reports Area
					url += "Reports.aspx";
				break;
				
				case "17"://RSS Area
					url += "RSSArea.aspx";
				break;
				
				case "18"://Weekly Photos Area
					url += "WeeklyPhotosArea.aspx";
				break;
				
				case "19"://Search Area
				   url += "SearchArea.aspx";
				break;
				
				case "20"://Second Main Stories Area
				   url += "SecondMainStoriesNewsArea.aspx";
				break;
				
				case "21"://Selected News Area
				   url += "SelectedNewsArea.aspx";
				break;
				
				case "22"://Latest Events Area
				    url += "LatestEventsArea.aspx";
				break;
				
				case "23"://Survey Area
				    url += "SurveyArea.aspx";
				break;
				
				case "24"://Third Main Stories Area
				    url += "ThirdMainStoriesArea.aspx";
				break;
				
				case "25"://Voting Area
				    url += "VotingArea.aspx";
				break;   
				
				case "26"://Programs Area
				    url += "ProgramsArea.aspx";
				break; 
				
				case "27"://Programs Area
				    url += "SecondMainStoriesOtherArea.aspx";
				break; 
				
				case "28": //Articles Analysis Area
					url += "ArticlesAnalysisArea.aspx";
				break;
				
				case "29": //Articles Books Area
					url += "ArticlesBooksArea.aspx";
				break;
				
				case "30": //Most sent Area
					url += "MostSentArea.aspx";
				break;
				
				case "31": //Most Commented Area
					url += "MostCommentedArea.aspx";
				break;
				case "32": //Live Broadcast Area
					url += "LiveBroadcastArea.aspx";
				break;
				case "33": //Main Menu Area
					url += "MainMenuArea.aspx";
				break;
				case "34": //Sub Menu Area
					url += "SubMenuArea.aspx";
				break;
				case "35": //Light Version Area
					url += "LightVersionArea.aspx";
				break;
				case "36": //News Ticker Area
					url += "NewsTickerArea.aspx";
				break;
				case "37": //English Site Area
					url += "EnglishSiteArea.aspx";
				break;
				case "38": //Other Sites Area
					url += "OtherSitesArea.aspx";
				break;
				case "39": //UEFA Champions League
				    url += "UEFAChampionsLeague.aspx";
				break;
			}
			
			return url;
	 }
	 catch(e)
	 {
	 
	 }	
}

////////////////////////////////////
function GetXmlHttpSectionsObject()
{
	var xmlHttpSections=null;
	try
	{
		// Firefox, Opera 8.0+, Safari
		xmlHttpSections=new XMLHttpRequest();
		FireFox=true
	}
	catch (e)
	{
	// Internet Explorer
		try
		{
			xmlHttpSections=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttpSections=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttpSections;
}
function callStatisticsPages(url)
{	
	FireFox=false;
	xmlHttpSections=GetXmlHttpSectionsObject();
	if (xmlHttpSections==null)
	{
		alert ("Your browser does not support AJAX!");
		return;
	} 

	xmlHttpSections.onreadystatechange=function (){
		if (xmlHttpSections.readyState==4)
		{ 
			//do nothing , just call the page
		}
	};
	void("GET",url,true);
	xmlHttpSections.send(null);
} 
function pausecomp(millis) 
{
var date = new Date();
var curDate = null;

do { curDate = new Date(); } 
while(curDate-date < millis);
} 

////////////////////////////////////

function getElementTop(Elem)
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
function getElementLeft(Elem) 
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
var SelectedSubMenu
function ShowSubMenu(Obj,StartPositionObj)
{
    if (document.getElementById('SubMenuContent'))
    {
	    if (SelectedSubMenu!=null)
	    {
		    document.getElementById(SelectedSubMenu).className='';
		    document.getElementById(SelectedSubMenu).childNodes[0].childNodes[0].style.color=''
	    }
	    SelectedSubMenu=Obj.id;
	    Obj.className='MenuMainMenuThemes';
	    document.getElementById(SelectedSubMenu).childNodes[0].childNodes[0].style.color='white'
	    var SubMenuWidth;
	    window.clearTimeout(ObjTimerSM);
	    document.getElementById('subMenu').style.display='';
	    document.getElementById('SubMenuContent').innerHTML=GetSubMenuChannel(Obj.getAttribute('ChannelName'));
	    SubMenuWidth=document.getElementById('tblSubMenu').offsetWidth;
	    document.getElementById('subMenu').style.width='1px';
	    document.getElementById('subMenu').className='MenuSubMenuThemes';
	    document.getElementById('subMenu').style.width=SubMenuWidth+'px';
        if(BrowserDetect.browser == 'Explorer' && BrowserDetect.version == '6')
        {
            document.getElementById('subMenu').style.top=(getElementTop(Obj)+document.getElementById('subMenu').offsetHeight-17)+'px';
        } 
        else
        {
            document.getElementById('subMenu').style.top=(getElementTop(Obj)+document.getElementById('subMenu').offsetHeight-12)+'px';
	    }
	    document.getElementById('subMenu').style.left=eval(getElementLeft(StartPositionObj)-document.getElementById('subMenu').offsetWidth+StartPositionObj.offsetWidth)+'px';
	
	    if(MenuFirstRun == 1)
	    {
	        MenuFirstRun = 0;
	        ShowSubMenu(Obj,StartPositionObj);
	    }
    }
}
function HideSubMenu()
{
    
	ObjTimerSM=window.setTimeout(function (){
		try
		{
			document.getElementById('subMenu').style.display='none';
			if (document.getElementById(SelectedSubMenu))
			{
				document.getElementById(SelectedSubMenu).className='';
				document.getElementById(SelectedSubMenu).childNodes[0].childNodes[0].style.color='';
			}
		}
		catch(err)
		{}
	}
	,1000)
}

function SwitchLeftCenterServices(Obj,SelectedNum)
{
	for (I=1;I<=5;I++)
	{
		if (SelectedNum==I)
		{
			if (document.getElementById('tblleftservices'+I).style.display=='' && document.getElementById('imgleftservices'+I).className.toLocaleLowerCase().indexOf(('imgleftservicesSelect'+I).toLocaleLowerCase())!=-1)
			{
				document.getElementById('imgleftservices'+I).className='imgleftservices'+I;
				document.getElementById('tblleftservices'+I).style.display='none';
				HeightLeftDivUp('divLeftCenterServices',document.getElementById('divLeftCenterServices').style.height.replace('px',''),1);
			}
			else
			{
				document.getElementById('imgleftservices'+I).className='imgleftservicesSelect'+I;
				document.getElementById('tblleftservices'+I).style.display='';
				HeightLeftDivServices('divLeftCenterServices',document.getElementById('tblleftservices'+I).offsetHeight);
			}
		}
		else
		{
			document.getElementById('imgleftservices'+I).className='imgleftservices'+I;
			document.getElementById('tblleftservices'+I).style.display='none';
		}
	}
}
function HeightLeftDivServices(Obj,Height)
{
	if (TimerLeftServices!=null)
	window.clearTimeout(TimerLeftServices);

	if (Height>document.getElementById('divLeftCenterServices').style.height.replace('px',''))
	{
		HeightLeftDivDown('divLeftCenterServices',document.getElementById('divLeftCenterServices').style.height.replace('px',''),Height);
	}
	else if(document.getElementById('divLeftCenterServices').style.height.replace('px','')>Height)
	{
		HeightLeftDivUp('divLeftCenterServices',document.getElementById('divLeftCenterServices').style.height.replace('px',''),Height);
	}
}
function HeightLeftDivDown(Obj,StartHeight,EndHeight)
{
	if (document.getElementById(Obj).style.height.replace('px','')<EndHeight)
	{
		if (eval(StartHeight)>eval(EndHeight))
		{
			StartHeight=EndHeight;
		}
		document.getElementById(Obj).style.height=StartHeight+'px';
		TimerLeftServices=window.setTimeout("HeightLeftDivDown('"+Obj+"',"+eval(eval(StartHeight)+30)+","+EndHeight+")",1);
	}
}
function HeightLeftDivUp(Obj,StartHeight,EndHeight)
{
	if (document.getElementById(Obj).style.height.replace('px','')>EndHeight)
	{
		if (eval(StartHeight)<eval(EndHeight))
		{
			StartHeight=EndHeight;
		}
		document.getElementById(Obj).style.height=StartHeight+'px';
		TimerLeftServices=window.setTimeout("HeightLeftDivUp('"+Obj+"',"+eval(StartHeight-30)+","+EndHeight+")",1);
	}
}
// This Function Adde By Moayad Smaller '## 26/12/2007 
//## This function Created To Check Special Characters ##
//# Begin
function parametersChecking(Str,SpecialCheck,ControlId) // Seperate Between Chars With ##
{
	var SpecialCharsCheck =new Array();
	var SpecialCharsCheck=SpecialCheck.split('##');
	var Invalid;
	var InvalidChars;
	Invalid=false;
	InvalidChars='';
	try
	{
		if (Str!='')
		{
			for(var I=0;I<SpecialCharsCheck.length;I++)
			{
				if (SpecialCharsCheck[I]!='')
				{
					if (Str.indexOf(SpecialCharsCheck[I])!=-1)
					{
						Invalid=true;
						InvalidChars = InvalidChars + ' ' + SpecialCharsCheck[I];
					}
				}
			}
			if (Str.indexOf("'")!=-1)
			{
				Invalid=true;
				InvalidChars = InvalidChars + ' ' + "'";
				if (document.getElementById(ControlId))
				{
					document.getElementById(ControlId).focus();
				}
			}
		}
		if (Invalid)
		{
			if (document.getElementById(ControlId))
			{
				document.getElementById(ControlId).focus();
			}
			return InvalidChars;
		}
		else
		{
			return null;
		}
	}
	catch(Err)
	{
		return InvalidChars;
	}
	
}
//# End
function BuildportalSimpleSearchResultURL(hdnSearchResultURL,txtALLSearchContent )
{
	var SearchResultURL;
	var searchtext;
	var SearchWordSpecialChars;
	
	SearchWordSpecialChars=parametersChecking(document.getElementById(txtALLSearchContent).value,';##,##--##<##>',txtALLSearchContent);	
	
	if (SearchWordSpecialChars!='' && SearchWordSpecialChars!=null)
	{
		alert(SearchWordSpecialChars+' الرجاء عدم إدخال الرموز التالية');
		return false;
	}
	

	searchtext = document.getElementById(txtALLSearchContent).value;
	
	if(checkAllValidations(txtALLSearchContent))
	{
		//CountAreaHits('7')
		//Commented By Mosab
		//SearchResultURL = document.getElementById(hdnSearchResultURL).value + ".htm?content=" + searchtext + "&site=" + "" + "&pagno=1&Criteria=" + searchtext + "%2F" + "الجميع";
		SearchResultURL = "/portal/Search.aspx?q=" + searchtext + "&client=default_frontend&proxystylesheet=portal&output=xml_no_dtd&filter=p&lr=lang_ar&requiredfields=searchablePC:searchablePC";
		//alert(SearchResultURL)
		window.location.href=SearchResultURL + "&GoogleStatID=19";
	}
	return false;
}
function checkAllValidations(btnID)
{
	if(window.document.getElementById(btnID).value == '' )
	{
		alert('الرجاء إدخال النص المراد البحث عنه');
			return false;
	}
	else
	{
		return true;
	}
}

try
{
if (document.implementation && document.implementation.createDocument && XMLDocument)
    {
	    TextDefine='textContent';
        XMLDocument.prototype.selectNodes = function(cXPathString, xNode)  
        {     
            if( !xNode ) 
            { 
	            xNode = this; 
            }      
            var oNSResolver = this.createNSResolver(this.documentElement)     ;
            var aItems = this.evaluate(cXPathString, xNode, oNSResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);  
            var aResult = [];     
            for( var i = 0; i < aItems.snapshotLength; i++)     
            {       
	            aResult[i] =  aItems.snapshotItem(i);     
            }    
    		
            return aResult;  
        }  

        Element.prototype.selectNodes = function(cXPathString)  
        {     
            if(this.ownerDocument.selectNodes)    
            {        
	            return this.ownerDocument.selectNodes(cXPathString, this);     
            }     
            else
            {
	            throw "For XML Elements Only";
            }  
        }

        XMLDocument.prototype.selectSingleNode = function(cXPathString, xNode)  
        {     
            if( !xNode ) 
            { 
	            xNode = this; 
            }      
            var xItems = this.selectNodes(cXPathString, xNode);     
            if( xItems.length > 0 )     
            {        
	            return xItems[0];     
            }    
            else    
            {        
	            return null;     
            }  
        }    

        Element.prototype.selectSingleNode = function(cXPathString)  
        {         
            if(this.ownerDocument.selectSingleNode)    
            {        
	            return this.ownerDocument.selectSingleNode(cXPathString, this);     
            }     
            else
            {
	            throw "For XML Elements Only";
            }  
        }    
    }	
    else
    {
        TextDefine='text';
    }
}
catch(e)
{
    TextDefine='text';
}

function LoadChannelXml()
{
	/*if (document.implementation && document.implementation.createDocument)
	{
		ChannelXml = document.implementation.createDocument("","",null);
	}
	else
	{
		ChannelXml=new ActiveXObject("Microsoft.XMLDOM");
	}
	ChannelXml = dnew XMLHttpRequest();
	ChannelXml.async="false";
	ChannelXml.loaddisabled('/portal/Xml/Channels.xml');*/
	
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else // Internet Explorer 5/6
    {
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    void("GET","/portal/Xml/Channels.xml",false);
    xhttp.send("");
    ChannelXml = xhttp.responseXML;
}
LoadChannelXml();

function GetSubMenuChannel(Channel)
{
	XmlNodes=ChannelXml.selectNodes("/root/site[link='"+Channel+"']/channels/channel");
	var Str='';
	Str +='<table border=0 cellspacing=0 cellpadding=0 dir="rtl" id="tblSubMenu">';
	Str +='<tr><td class="tblSubMenuFirst">&nbsp;</td><td class="txt02">&nbsp;&nbsp;</td>';
	for (I=0;I<XmlNodes.length;I++)
	{
		if(ChannelXml.selectNodes("/root/site[link='"+Channel+"']/channels/channel")[I].selectSingleNode("showOnline")[TextDefine].toLowerCase()=='true' || PmSMenu.toLowerCase()!='online')
		{
			Str +='<td nowrap="nowrap" class="txt02">&nbsp;';
			Str +='<a onmouseover="CountAreaHits(this,\'34\',\''+ChannelXml.selectNodes("/root/site[link='"+Channel+"']/channels/channel")[I].selectSingleNode("link")[TextDefine]+'\')" style="color:white;cursor:pointer;">'+ChannelXml.selectNodes("/root/site[link='"+Channel+"']/channels/channel")[I].selectSingleNode("headline")[TextDefine]+'</a>&nbsp;';
			if (I<eval(XmlNodes.length-1)){
				Str +='</td><td class="SubMenuSep">&nbsp;</td>';
			}
			else
			{
			    Str +='</td>';
			}
		}
	}
	Str +='<td class="txt02">&nbsp;&nbsp;</td><td class="tblSubMenuLast">&nbsp;</td></tr>';
	Str +='</table>';
	return Str;
}


function GetXmlHttpObjectLatestReports()
{
	var objXmlAjax=null;
	try
	{
		// Firefox, Opera 8.0+, Safari
		objXmlAjax=new XMLHttpRequest();
	}
	catch (e)
	{
		// Internet Explorer
		try
		{
			objXmlAjax=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			objXmlAjax=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return objXmlAjax;
}

function GetLatestReports(CurrentMode)
{
	PublicCurrentMode=CurrentMode;
	showdeadcenterdiv('ReportDiv');
	var SectionGuid;
	SectionGuid="{F1E4FDA6-D7AC-401E-AEEB-ED0EE018A786}";
	objXmlAjax = GetXmlHttpObjectLatestReports();
	var url="/portal/Aspx/LatestReports.aspx";
        url=url+"?CurrentMode="+CurrentMode+"&SectionGuid="+SectionGuid+"&Rand="+Math.random();	
     if (PmSMenu=='server')
		url+="?Rn="+Math.random();
	objXmlAjax.onreadystatechange = function (){
		if (objXmlAjax.readyState == 4)
		{ 
			if (objXmlAjax.responseText != "")
			{
				//alert(objXmlAjax.responseText)
				document.getElementById("ReportDiv").innerHTML = objXmlAjax.responseText;
				
				TimerID = setTimeout(function (){
					if (document.getElementById('reportTab'))
					{
						var reportTab = new Spry.Widget.TabbedPanels("reportTab");
					}
				},2000);
				FillVideoLink(document.getElementById('hdnInitialVideoURL').value);
				document.getElementById('spnreportVdoTitle').innerHTML=document.getElementById('hdnInitialVideoTitle').value;
				RemoveLastLine()
			}
		}
	};
	void("GET",url,true); 
	objXmlAjax.send(null);
	
}

function RemoveLastLine()
{      
    if (CheckFireFox())
       {
        document.getElementsByName('ReportvdosContent')[0].className="ReportvdosContentNoLine";	
		document.getElementsByName('ReportvdosContent')[3].className="ReportvdosContentNoLine";	
		document.getElementsByName('ReportvdosContent')[6].className="ReportvdosContentNoLine";
		document.getElementsByName('ReportvdosContent')[9].className="ReportvdosContentNoLine";		
       }
       else
       {
        document.getElementsByName('ReportvdosContent')[2].className="ReportvdosContentNoLine";	
		document.getElementsByName('ReportvdosContent')[5].className="ReportvdosContentNoLine";	
		document.getElementsByName('ReportvdosContent')[8].className="ReportvdosContentNoLine";
		document.getElementsByName('ReportvdosContent')[11].className="ReportvdosContentNoLine";	
       }
 
    	

}

function showdeadcenterdiv(divid) 
{
	var o=document.getElementById(divid);
	var r=o.style;
	
	var leftoffset = eval(getElementLeft(document.getElementById('InterActivehourlyNews'))-525+document.getElementById('InterActivehourlyNews').offsetWidth);//((screen.width) / 2) - (525 / 2);
	var topoffset = getElementTop(document.getElementById('InterActivehourlyNews'));//((screen.height) / 2) - (350 / 2);
	
	r.top = (topoffset+21) + 'px';
	r.left = leftoffset + 'px';
	r.display = "";
	
}

//added by Mosab 

function GetXmlHttpObjectLatestNews()
{
	var objXmlAjaxNews=null;
	try
	{
		// Firefox, Opera 8.0+, Safari
		objXmlAjaxNews=new XMLHttpRequest();
	}
	catch (e)
	{
		// Internet Explorer
		try
		{
			objXmlAjaxNews=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			objXmlAjaxNews=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return objXmlAjaxNews;
}

function LatesTNewsStateChanged()
{
	document.getElementById("FromSiteNews").innerHTML = "<table height='100%' width='100%'><tr><td valign='middle' align='center'><img src='/portal/Images/LightVersionWeb2/LoadingTabs.gif' /></td></tr></table>";
	
		if (objXmlAjaxNews.readyState == 4)
		{
		
		 
			if (objXmlAjaxNews.responseText != "")
			{
			document.getElementById("FromSiteNews").innerHTML = objXmlAjaxNews.responseText;
			
			if (document.getElementById("img7"))
			{getDisc("img7", document.getElementById("img7").name);}
				
			}
				
		}
	}

function GetLatestNews()
{
	var url="/portal/Aspx/GetSiteNews.aspx?SummaryPagePath=/portal/DefaultSummaryPage&SectionName=SubStories";
	
	if (PmSMenu=='server')
		url+="&Rn="+Math.random();
	
	
	objXmlAjaxNews=GetXmlHttpObjectLatestNews();
	objXmlAjaxNews.onreadystatechange = LatesTNewsStateChanged;
	void("GET",url,true);	
	objXmlAjaxNews.send(null);
}


//end added by mosab

function hideToolTip()
{
	document.getElementById('bubble_tooltip').style.display = 'none';
}
//Added by yousef

function hideToolTipCorrespondentReports()
{
	document.getElementById('SpanReportersToolTip').style.display = 'none';
}

function showToolTip1DivCorrespondentReports(e , headline , publishdate , body,ScrollerDiv,ChildObj,ItemsCount,InsideDiv,ScrollWidth)
{	
	
    var headline = headline;
	var publishdate = publishdate;
	var body = body;
	var obj = document.getElementById('SpanReportersToolTip');
	obj.style.display='';
	obj.style.width='180px';
	var obj2 = document.getElementById('tdReportersBoldToolTip');
	obj2.innerHTML = headline;
	var obj3 = document.getElementById('tdReportersDateToolTip');
	obj3.innerHTML = publishdate;
	var obj4 = document.getElementById('tdReportersTitleToolTip');
	obj4.innerHTML = body;
	

	var st = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	
	if (CheckFireFox())
	{
	

		if (eval(ItemsCount)<=5)
		{
			obj.style.left = eval(eval(getElementLeft(e)-230-document.getElementById(ScrollerDiv).scrollLeft)) + 'px';
			
			if(/Safari/.test(navigator.userAgent))
            {
                obj.style.left = eval(eval(getElementLeft(e)-500+eval(document.getElementById(InsideDiv).offsetWidth+document.getElementById(ScrollerDiv).scrollLeft-360))) + 'px';

            }
			
		}
		else
		{
		
			obj.style.left = eval(eval(getElementLeft(e)-obj.offsetWidth+35)-document.getElementById(ScrollerDiv).scrollLeft) + 'px';
			
			if(/Safari/.test(navigator.userAgent))
            {
                obj.style.left = eval(eval(getElementLeft(e)-obj.offsetWidth+250)-document.getElementById(ScrollerDiv).scrollLeft) + 'px';

            }
		}

		obj.style.top = eval(getElementTop(e)-obj.offsetHeight-2)  + 'px';
	}
	else
	{


		if (eval(ItemsCount)<=5)
			obj.style.left = eval(eval(getElementLeft(e)-230-document.getElementById(ScrollerDiv).scrollLeft)) + 'px';
		else{
            //Bilal Rtaimat 26 Nov, 2009
            //Bug in IE8 scrollLeft in rtl div is working improperly.
            if(BrowserDetect.browser == 'Explorer' && BrowserDetect.version == '8')
	        {
	            obj.style.left = eval(eval(getElementLeft(e)+eval(document.getElementById(InsideDiv).offsetWidth+document.getElementById(ScrollerDiv).scrollLeft-360))) + 'px';
	        }
	        else
	        {
	            obj.style.left = eval(eval(getElementLeft(e)+eval(document.getElementById(InsideDiv).offsetWidth-document.getElementById(ScrollerDiv).scrollLeft-360))) + 'px';
	        }
		}
			
		obj.style.top = getElementTop(e)-obj.offsetHeight  + 'px';
	}
}   

//end added by yousef

function showToolTip1Programs(e , headline , publishdate , body,ScrollerDiv,ChildObj,ItemsCount,InsideDiv,ScrollWidth)
{	
    var headline = headline;
	var publishdate = publishdate;
	var body = body;
	var obj = document.getElementById('SpanReportersToolTip');
	obj.style.display='';
	obj.style.width='266px';
	var obj2 = document.getElementById('tdReportersBoldToolTip');
	obj2.innerHTML = "موضوع الحلقة القادمة:" + "<br /><br />" + headline;
	obj2.className = "summary";
	var obj3 = document.getElementById('tdReportersDateToolTip');
	obj3.innerHTML = publishdate;
	obj3.className = "summary";
	var obj4 = document.getElementById('tdReportersTitleToolTip');
	obj4.innerHTML = body;
	obj4.className = "summary";
	

	var st = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	
	if (CheckFireFox())
	{
		if (eval(ItemsCount)<=7)
		{
			obj.style.left = eval(eval(getElementLeft(e)-230-document.getElementById(ScrollerDiv).scrollLeft)) + 'px';
			if(/Safari/.test(navigator.userAgent))
            {
            
                obj.style.left = eval(eval(getElementLeft(e)-500+eval(document.getElementById(InsideDiv).offsetWidth+document.getElementById(ScrollerDiv).scrollLeft-360))) + 'px';
            }
		}
		else
		{
			obj.style.left = eval(eval(getElementLeft(e)-obj.offsetWidth+35)-document.getElementById(ScrollerDiv).scrollLeft) + 'px';
			if(/Safari/.test(navigator.userAgent))
            {
             obj.style.left = eval(eval(getElementLeft(e)-((12-ItemsCount)*90)+eval(document.getElementById(InsideDiv).offsetWidth-document.getElementById(ScrollerDiv).scrollLeft-400))) + 'px';
               // obj.style.left = eval(eval(getElementLeft(e)-obj.offsetWidth+310)-document.getElementById(ScrollerDiv).scrollLeft) + 'px';
            }
		}
		obj.style.top = eval(getElementTop(e)-obj.offsetHeight-2)  + 'px';
	}
	else
	{
		if (eval(ItemsCount)<=7)
		{
			obj.style.left = eval(eval(getElementLeft(e)-230-document.getElementById(ScrollerDiv).scrollLeft)) + 'px';
		}
		else
		{
            if(BrowserDetect.browser == 'Explorer' && BrowserDetect.version == '8')
	        {
	            obj.style.left = eval(eval(getElementLeft(e)-138+eval(document.getElementById(InsideDiv).offsetWidth+document.getElementById(ScrollerDiv).scrollLeft-720))) + 'px';
	        }
	        else
	        {
	            obj.style.left = eval(eval(getElementLeft(e)-138+eval(document.getElementById(InsideDiv).offsetWidth-document.getElementById(ScrollerDiv).scrollLeft-720))) + 'px';
	        }
		}
			
		obj.style.top = getElementTop(e)-obj.offsetHeight  + 'px';
	}
}  
function showToolTip1DivScrollingThird(e , headline , publishdate , body,ScrollerDiv,ChildObj)
{

	var headline = headline;
	var publishdate = publishdate;
	var body = body;
	var obj = document.getElementById('bubble_tooltip');
	obj.style.display='';
	var obj2 = document.getElementById('tooltipBoldTxt');
	obj2.innerHTML = headline;
	var obj3 = document.getElementById('tooltipDateTxt');
	obj3.innerHTML = publishdate;
	var obj4 = document.getElementById('tooltipBodyTxt');
	obj4.innerHTML = body;
	var st = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	
	if (ScrollerDiv!=null)
	{
		obj.style.left = eval(eval(getElementLeft(e)-100)) + 'px';
		obj.style.top = getElementTop(e)-obj.offsetHeight - document.getElementById(ScrollerDiv).childNodes[0].scrollTop + 'px';
	}		
	else
	{
		obj.style.left = eval(eval(getElementLeft(e)-20)) + 'px';
		obj.style.top = getElementTop(e)-obj.offsetHeight  + 'px';
	}
}   
function hideArrows(SelectedTapIndex)
{
	if(SelectedTapIndex == 0)
	{
		document.getElementById("tabSep0").style.display='none';
		document.getElementById("tabSep1").style.display='';
		document.getElementById("tabSep2").style.display='';
		document.getElementById("tabSep3").style.display='';
		document.getElementById("tabSep4").style.display='';
		document.getElementById("tabSep5").style.display='';
	}
	else if(SelectedTapIndex == 1)
	{
		document.getElementById("tabSep0").style.display='none';
		document.getElementById("tabSep1").style.display='none';
		document.getElementById("tabSep2").style.display='';
		document.getElementById("tabSep3").style.display='';
		document.getElementById("tabSep4").style.display='';
		document.getElementById("tabSep5").style.display='';
	}
	else if(SelectedTapIndex == 2)
	{
		document.getElementById("tabSep0").style.display='';
		document.getElementById("tabSep1").style.display='none';
		document.getElementById("tabSep2").style.display='none';
		document.getElementById("tabSep3").style.display='';
		document.getElementById("tabSep4").style.display='';
		document.getElementById("tabSep5").style.display='';
	}
	else if(SelectedTapIndex == 3)
	{
		document.getElementById("tabSep0").style.display='';
		document.getElementById("tabSep1").style.display='';
		document.getElementById("tabSep2").style.display='none';
		document.getElementById("tabSep3").style.display='none';
		if (document.getElementById("tdSwitchMainThirdTabSeperate3").style.display=='')
		{
			document.getElementById("tabSep4").style.display='';
		}
		else
		{
			document.getElementById("tabSep4").style.display='none';
		}
		document.getElementById("tabSep5").style.display='';
	}
	else if(SelectedTapIndex == 4)
	{
		document.getElementById("tabSep0").style.display='';
		document.getElementById("tabSep1").style.display='';
		document.getElementById("tabSep2").style.display='';
		document.getElementById("tabSep3").style.display='none';
		document.getElementById("tabSep4").style.display='none';
		document.getElementById("tabSep5").style.display='';
	}
	else if(SelectedTapIndex == 5)
	{
		document.getElementById("tabSep0").style.display='';
		document.getElementById("tabSep1").style.display='';
		document.getElementById("tabSep2").style.display='';
		document.getElementById("tabSep3").style.display='';
		document.getElementById("tabSep4").style.display='none';
		document.getElementById("tabSep5").style.display='none';
	}
	else if(SelectedTapIndex == 6)
	{
		document.getElementById("tabSep0").style.display='';
		document.getElementById("tabSep1").style.display='';
		document.getElementById("tabSep2").style.display='';
		document.getElementById("tabSep3").style.display='';
		document.getElementById("tabSep4").style.display='';
		document.getElementById("tabSep5").style.display='none';
	}
}
function ScrollingMainTap(SelectedTap,TimeOut)
{
	hideArrows(SelectedTap);
	CurrentSelectedMainThird=SelectedTap;
	
	for (IThirdCount=0;IThirdCount<=6;IThirdCount++)
	{
		if (IThirdCount!=SelectedTap)
		{
			if (document.getElementById('tblHeadLinesTap'+IThirdCount))
			{
				if (IThirdCount!=0)
				{
					document.getElementById('tblHeadLinesTap'+IThirdCount).innerHTML='';
					document.getElementById('tdMainThirdSectionHeadLine').className='newsText2';
				}

				document.getElementById('tblHeadLinesTap'+IThirdCount).style.display='none';
			}
			
			if (document.getElementById('tdSwitchMainThirdTab'+IThirdCount))
			{
				document.getElementById('tdSwitchMainThirdTab'+IThirdCount).className='StringTheme';
				document.getElementById('tdSwitchMainThirdTab'+IThirdCount).style.cursor='pointer';
			}
		}
		else
		{
			if (document.getElementById('tdSwitchMainThirdTab'+IThirdCount))
			{
				document.getElementById('tdSwitchMainThirdTab'+IThirdCount).className='newsTabBg';
				document.getElementById('tdSwitchMainThirdTab'+IThirdCount).style.cursor='default';
			}
		}
	}
	
	if (document.getElementById('tblHeadLinesTap'+SelectedTap))
		document.getElementById('tblHeadLinesTap'+SelectedTap).style.display=''
	
	if (SelectedTap!=0)
		document.getElementById('imgLoadingTabs').style.display='';
}

function DoMainStoriesThird()
{
	try
	{
		var HTMLResult='';
		var SwitchTab=0;

		if (SwitchTab!=null)
		{
			ScrollingMainTap(SwitchTab,1000);
		}
		else
		{
			ScrollingMainTap(0,1000);
		}
	}
	catch(err)
	{
	}
}
function GetThirdProductionXml(cookieString,Obj,SelectedTap)
{


	try
	{
		var xmlHttpThirdProduction;
		var InnerHTMLObj;
		if (Obj!=null)
			InnerHTMLObj=Obj;

		var xmlHttpThirdProduction=null;
		
		if (window.XMLHttpRequest)
    {
        xmlHttpThirdProduction=new XMLHttpRequest();
    }
    else // Internet Explorer 5/6
    {
        xmlHttpThirdProduction=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    
    
//		try
//		{
//		//alert('Firefox');
//			// Firefox, Opera 8.0+, Safari
//			xmlHttpThirdProduction=new XMLHttpRequest();
//		}
//		catch (e)
//		{
//		//alert('nonFirefox');
//			// Internet Explorer
//			try
//			{
//				xmlHttpThirdProduction=new ActiveXObject("Msxml2.XMLHTTP");
//			}
//			catch (e)
//			{
//				xmlHttpThirdProduction=new ActiveXObject("Microsoft.XMLHTTP");
//			}
//		}

		if (xmlHttpThirdProduction==null)
		{
			alert ("Your browser does not support AJAX!");
			return;
		} 
		
		var url="/portal/aspx/GetSections.aspx";
		url=url+"?Path="+cookieString+',';
		url=url+"&ThirdSection=true";
		
		if (cookieString.indexOf("programs") != -1 && cookieString.indexOf("news bulletins") != -1)
		{
			url=url+"&tabChannel=true";
		}
		
		if (PmSMenu=='server')
		{
			url=url+"&sid="+Math.random();
		}
		
		xmlHttpThirdProduction.onreadystatechange=function() 
		{
			if (xmlHttpThirdProduction.readyState==4)
			{ 
				if(document.getElementById(InnerHTMLObj))
				{
					document.getElementById('imgLoadingTabs').style.display='none';
					if (CheckFireFox())
					{
						var adiv=document.createElement('div');
						adiv.innerHTML=xmlHttpThirdProduction.responseText;
						document.getElementById(InnerHTMLObj).innerHTML='';
						document.getElementById(InnerHTMLObj).appendChild(adiv);
					}
					else
					{
						document.getElementById(InnerHTMLObj).innerHTML=xmlHttpThirdProduction.responseText;
					}
				}
			}
		};
		void("GET",url,true);
		xmlHttpThirdProduction.send("");
	}
	catch(err)
	{

	}
} 


var LastDiv =null;
var ColTimeOut =null;
var CloseSelf = null;
var CloseSame = null;
var OpenSame = null;
var OpenAnother = null;
var CloseAnother = null;

function getDisc(divID,divName)
{
	var divData = divName.split("#@#");
	var DivNum = Math.floor((divData[2]-1)/3);
	var imgPos = divData[2];
	var DivPos = (DivNum+1)*3;
	var strSummary = divData[3];
	
	if (ColTimeOut)
	{	
	    if (objCheck[LastDiv.id]==1)
	    clearTimeout(ColTimeOut);
	}
	
	if (divData[3].length >= 120)
	{
	    divData[3] = divData[3].substr(0,120);
	    var strLength = divData[3].lastIndexOf(" ");
	    strSummary = divData[3].substr(0,strLength) + "...";
	}
	
	var GetNewsDiv = document.getElementById("FromSiteNewsImgsDisc"+DivPos+"");
	var contentInner = "<a style='cursor:pointer' class='SingleStringThemes' onmouseover='CountAreaHits(this,\"21\", \""+divData[1]+"\")'>"+divData[0]+"</a><br/><span class='SummaryTextContentBold'>"+strSummary+'</span>';
	GetNewsDiv.innerHTML = contentInner;
	
    if (LastDiv)
    {
        if (LastDiv.id == GetNewsDiv.id)
        {
            if (objCheck[LastDiv.id]==0) // if cursor was on a picture on the same row
            {
                clearTimeout(CloseSame);
                clearTimeout(OpenAnother);
                OpenSame = setTimeout('slidedown("'+LastDiv.id+'")',200);
            }
            else //  if cursor was on the div
            {
                clearTimeout(CloseSelf);
                LastDiv.style.display ="block";
            }
            objCheck[LastDiv.id] = 0;
        }
        else // if cursor was on another row
        {
            clearTimeout(OpenSame);
            //CloseAnother = setTimeout('document.getElementById("'+LastDiv.id+'").style.display ="none"',300);
            OpenAnother = 	setTimeout('slidedown("'+GetNewsDiv.id+'")',310);
            objCheck[GetNewsDiv.id]=0;
        }
    }
    else //if first time cursor
    {
        slidedown(GetNewsDiv.id);
        objCheck[GetNewsDiv.id]=0;
    }
	
	LastDiv = GetNewsDiv;

	addEventListenerSubStories( GetNewsDiv, "mouseover", listener1, false ); //add listener
	if(divData[2]%3==1)
	GetNewsDiv.style.backgroundPosition =  "-50px 0px";

	if(divData[2]%3==2)
	GetNewsDiv.style.backgroundPosition = "-132px 0px";

	if(divData[2]%3==0)
	GetNewsDiv.style.backgroundPosition ="-225px 0px";
}

function collapseDiv(divId)
{/*Commented to remove the hide div 

	var DivNum = Math.floor((divId-1)/3);
	DivNum = (DivNum+1)*3;
	var  modId = "FromSiteNewsImgsDisc"+DivNum;
	if (document.getElementById("FromSiteNewsImgsDisc"+DivNum+""))	
	{	
CloseSame= setTimeout('document.getElementById("'+modId+'").style.display ="none"',200);
	}*/
	

	
}
function collapseDivObj(divId) //onmouse out of div
{/*Commented to remove the hide div 

//var SummaryDivID=""
if (divId.id == LastDiv.id)
{
	CloseSelf = setTimeout('document.getElementById("'+divId.id+'").style.display="none"',300);
}
else
{
divId.style.display="none";

	for (i=3;i<10; i+=3)
	{
		 if(document.getElementById("FromSiteNewsImgsDisc"+i+""))
		  document.getElementById("FromSiteNewsImgsDisc"+i+"").style.display="none";

	}

}

*/


}
function addEventListenerSubStories( element, event_name, observer, capturing ) {
	if ( element.addEventListener ) // the DOM2, W3C way
		element.addEventListener( event_name, observer, capturing );
	else if ( element.attachEvent ) // the IE way
		element.attachEvent( "on" + event_name, observer );
}			
function listener1(evt) 
{
    clearTimeout(ColTimeOut);	
	clearTimeout(CloseAnother);
	clearTimeout(CloseSame);
	clearTimeout(CloseSelf);		
	//document.getElementById(LastDiv.id).style.display="block";
	for (i=3;i<10; i+=3)
	{
		 if(document.getElementById("FromSiteNewsImgsDisc"+i+""))
		 {
		     var descId = "FromSiteNewsImgsDisc"+i;
		     if (descId != LastDiv.id)
		     document.getElementById("FromSiteNewsImgsDisc"+i+"").style.display="none";
		 }

	}
	setTimeout('document.getElementById("'+LastDiv.id+'").style.display="block"',200);
	objCheck[LastDiv.id] = 1;
}


function FillVideoLink(URL,ArticleGuid,ImagePath,CurrentMode)
{
    var EmbedVideo
	if (URL.toLowerCase().lastIndexOf(".flv")!=-1)
	{
		EmbedVideo='<iframe id="fraMedia" frameborder="0" width="213" height="172" scrolling="no" src="/Channel/KServices/SupportPages/ShowMedia/ShowOtherExts.aspx?file='+URL+'"></iframe>'
	}
	else
	{
	    //EmbedVideo='<objectdisabled id="ReportsVideo" height="200" width="213" VIEWASTEXT classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6"><param NAME="URL" VALUE="'+URL+'"><param NAME="rate" VALUE="1"><param NAME="balance" VALUE="0"><param NAME="currentPosition" VALUE="0"><param NAME="defaultFrame" VALUE><param NAME="playCount" VALUE="1"><param NAME="autoStart" VALUE="-1"><param NAME="currentMarker" VALUE="-1"><param NAME="invokeURLs" VALUE="-1"><param NAME="baseURL" VALUE><param NAME="volume" VALUE="50"><param NAME="mute" VALUE="0"><param NAME="uiMode" VALUE="full"><param NAME="stretchToFit" VALUE="0"><param NAME="windowlessVideo" VALUE="0"><param NAME="enabled" VALUE="-1"><param NAME="enableContextMenu" VALUE="0"><param NAME="fullScreen" VALUE="0"><param NAME="SAMIStyle" VALUE><param NAME="SAMILang" VALUE><param NAME="SAMIFilename" VALUE><param NAME="captioningID" VALUE><param NAME="enableErrorDialogs" VALUE="0"><param NAME="_cx" VALUE="5636"><param NAME="_cy" VALUE="5292">';
		//EmbedVideo+='<embeddisabled type="application/x-mplayer2" id="ReportsVideo" name="ReportsVideo" width="213"';
		//EmbedVideo +=' height="200" src="'+URL+'" pluginspage="httpdisabled://www.microsoft.com/windows/mediaplayer/downloaddisabled/default.asp"></embed></object>';
		
		EmbedVideo='<embeddisabled type="application/x-mplayer2" enabled="1" fullscreen="1" stretchtofit="1" id="ReportsVideo" name="ReportsVideo"'
		EmbedVideo+='src="'+URL+'"'
		EmbedVideo+='height="200px" width="213px" AudioStream="0" AutoSize="0" AnimationatStart="1" AutoStart="1"'
		EmbedVideo+='DisplaySize="0" ShowControls="1" ShowDisplay="0" ShowStatusBar="1" AllowScan="0" ShowAudioControls="1"'
		EmbedVideo+='SelectionStart="-1" SelectionEnd="-1" ShowPositionControls="0"></embed>'
	}	
	document.getElementById('reportVdoControl').innerHTML=EmbedVideo;
	if (ImagePath != undefined && PublicCurrentMode == 0)
	    {
	      InsUpdateCountsReport(ArticleGuid,ImagePath);
	    }
	    
}

function FillVideoLink_CorrespondentReports(selectedTD, URL,ArticleGuid,ImagePath,CurrentMode, headline, ImgURL)
{
    document.getElementById('td').innerHTML = headline;
    if(selectedTD == null)
    {
        document.getElementById('trImages').cells[0].bgColor = '#ADADAD';
    }
    else
    {
        var imagsRow = selectedTD.parentNode;
        for(var i = 0; i < imagsRow.cells.length; i++)
        {
            imagsRow.cells[i].bgColor = '';
        }
        selectedTD.bgColor = '#ADADAD';
    }
    var EmbedVideo
	if (URL.toLowerCase().lastIndexOf(".flv")!=-1)
	{
		//with start image
		EmbedVideo='<iframe id="fraMedia" frameborder="0" width="258px" height="208px" scrolling="no" src="/Channel/KServices/SupportPages/ShowMedia/ShowOtherExts.aspx?file='+URL+'&ImgURL=' + ImgURL + '&src=portal"></iframe>'
		//old code, without start image
		//EmbedVideo='<iframe id="fraMedia" frameborder="0" width="258px" height="208px" scrolling="no" src="/Channel/KServices/SupportPages/ShowMedia/ShowOtherExts.aspx?file='+URL+'"></iframe>'	
	}
	else
	{
	    //EmbedVideo='<objectdisabled id="ReportsVideo" height="200" width="213" VIEWASTEXT classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6"><param NAME="URL" VALUE="'+URL+'"><param NAME="rate" VALUE="1"><param NAME="balance" VALUE="0"><param NAME="currentPosition" VALUE="0"><param NAME="defaultFrame" VALUE><param NAME="playCount" VALUE="1"><param NAME="autoStart" VALUE="-1"><param NAME="currentMarker" VALUE="-1"><param NAME="invokeURLs" VALUE="-1"><param NAME="baseURL" VALUE><param NAME="volume" VALUE="50"><param NAME="mute" VALUE="0"><param NAME="uiMode" VALUE="full"><param NAME="stretchToFit" VALUE="0"><param NAME="windowlessVideo" VALUE="0"><param NAME="enabled" VALUE="-1"><param NAME="enableContextMenu" VALUE="0"><param NAME="fullScreen" VALUE="0"><param NAME="SAMIStyle" VALUE><param NAME="SAMILang" VALUE><param NAME="SAMIFilename" VALUE><param NAME="captioningID" VALUE><param NAME="enableErrorDialogs" VALUE="0"><param NAME="_cx" VALUE="5636"><param NAME="_cy" VALUE="5292">';
		//EmbedVideo+='<embeddisabled type="application/x-mplayer2" id="ReportsVideo" name="ReportsVideo" width="213"';
		//EmbedVideo +=' height="200" src="'+URL+'" pluginspage="httpdisabled://www.microsoft.com/windows/mediaplayer/downloaddisabled/default.asp"></embed></object>';
		
		EmbedVideo='<embeddisabled type="application/x-mplayer2" enabled="1" fullscreen="1" stretchtofit="1" id="ReportsVideo" name="ReportsVideo"'
		EmbedVideo+='src="'+URL+'"'
		EmbedVideo+='height="208px" width="258px" AudioStream="0" wmode="transparent" AutoSize="0" AnimationatStart="1" AutoStart="1"'
		EmbedVideo+='DisplaySize="0" ShowControls="1" ShowDisplay="0" ShowStatusBar="1" AllowScan="0" ShowAudioControls="1"'
		EmbedVideo+='SelectionStart="-1" SelectionEnd="-1" ShowPositionControls="0"></embed>'
	}	
	document.getElementById('reportVdoControl_CorrespondentReports').innerHTML=EmbedVideo;
	if (ImagePath != undefined && PublicCurrentMode == 0)
	    {
	      InsUpdateCountsReport(ArticleGuid,ImagePath);
	    }
	    
}



function InsUpdateCountsReport(ArticleGuid,ImagePath)
{
	try
	{
		xmlHttp=GetXmlHttpObjectLatestReports()
		if (xmlHttp==null)
		{
			alert ("Browser does not support HTTP Request")
			return
		} 
		ImagePath=ImagePath.split("/mritems/")[1];
	    var url ='/portal/Aspx/InsUpdateCountsReport.aspx';
		url=url+"?ArticleGuid="+ArticleGuid+"&ImagePath="+ImagePath+"&CurrentMode="+PublicCurrentMode+"&Rand="+Math.random();
       //alert(url)
		if (window.ActiveXObject)//IE
		{
			try
			{
			void("GET",url,false)}
			catch(err)
			{}
		}
		else if (window.XMLHttpRequest)//FireFox
		{
			void("GET",url,false)
		}
	    xmlHttp.send(null)
	    //alert(xmlHttp.responseText)
		//return xmlHttp.responseText
				
	}
	catch(err)
	{

	}
		
} 

function ShoHideBuildYourPage(Obj)
{




	DivObj=document.getElementById('CollapsibleBuidYourPage');
	if(CollapsibleBuidYourPage.isOpen())
	{
		CollapsibleBuidYourPage.close();
	}
	else
	{
	
	    if (BrowserDetect.browser == "Safari" || BrowserDetect.browser == "Chrome")
	    {

	  
	    DivObj.style.left=getElementLeft(Obj)+'px';
			DivObj.style.top=getElementTop(Obj)-1+'px';
	
	    }
		else if (CheckFireFox())
		{
		
			DivObj.style.left=eval(getElementLeft(Obj))-128+'px';
			DivObj.style.top=getElementTop(Obj)-17+'px';
		}
		else
		{
		
			DivObj.style.left=getElementLeft(Obj)+'px';
			DivObj.style.top=getElementTop(Obj)-1+'px';
		}
			
			
		DivObj.style.display='';
		void();
	}
}
function ShoHideMembership(Obj)
{




	DivObj=document.getElementById('CollapsibleMembership');
	if(CollapsibleMembership.isOpen())
	{
		CollapsibleMembership.close();
		document.getElementById('serch').style.visibility='visible'
    }
	else
	{
	
	    if (BrowserDetect.browser == "Safari" || BrowserDetect.browser == "Chrome")
	    {

	  
	        DivObj.style.left=getElementLeft(Obj) +'px';
			DivObj.style.top=getElementTop(Obj) +'px';
	
	    }
		else if (CheckFireFox())
		{
		
			DivObj.style.left=eval(getElementLeft(Obj))-128+'px';
			DivObj.style.top=getElementTop(Obj)-17+'px';
		}
		else if(getInternetExplorerVersion()>= 8.0)
		{
		    DivObj.style.left=eval(getElementLeft(Obj))+'px';
			DivObj.style.top=getElementTop(Obj)+'px';
			document.getElementById('serch').style.visibility='hidden'
		}
		else
		{
		
			DivObj.style.left=getElementLeft(Obj)-75 +'px';
			DivObj.style.top=getElementTop(Obj)-1+'px';
		}
			
			
		DivObj.style.display='';
		void();
	}
}

//##  CustomizePersonalizeBoxes

function PersonBoxChecked(Obj)
{
	if (Obj.checked)
		return true;
	else
		return false;
}
function CustomizePersonalizeBoxes()
{
	if (PersonBoxChecked(document.getElementById('PersonalizeNewsBox')))
	{
		if (document.getElementById('secondlist_secondlist1').style.display=='none')
		{
			document.getElementById('secondlist_secondlist1').style.display='';
			GetNewsSectionData();
		}
	}
	else
	{
		document.getElementById('secondlist_secondlist1').style.display='none';
	}
	
	if (PersonBoxChecked(document.getElementById('PersonalizeKnowledgegateBox')))
	{
		if (document.getElementById('secondlist_secondlist2').style.display=='none')
		{
			document.getElementById('secondlist_secondlist2').style.display='';
			GetKnowledgegateSectionData();
		}
	}
	else
	{
		document.getElementById('secondlist_secondlist2').style.display='none';
	}
	
	if (PersonBoxChecked(document.getElementById('PersonalizeStudiesBox')))
	{
		if (document.getElementById('secondlist_secondlist3').style.display=='none')
		{
			document.getElementById('secondlist_secondlist3').style.display='';
			GetStudiesSectionData();
		}
	}
	else
	{
		document.getElementById('secondlist_secondlist3').style.display='none';
	}
	
	if (PersonBoxChecked(document.getElementById('PersonalizeEbusinessBox')))
	{
		if (document.getElementById('firstlist_firstlist1').style.display=='none')
		{
			document.getElementById('firstlist_firstlist1').style.display='';
			GetEbusinessSectionData();
		}
	}
	else
	{
		document.getElementById('firstlist_firstlist1').style.display='none';
	}
	
	if (PersonBoxChecked(document.getElementById('PersonalizeChannelBox')))
	{
		if (document.getElementById('firstlist_firstlist2').style.display=='none')
		{
			document.getElementById('firstlist_firstlist2').style.display='';
			GetChannelSectionData();
		}
	}
	else
	{
		document.getElementById('firstlist_firstlist2').style.display='none';
	}
	
	if (PersonBoxChecked(document.getElementById('PersonalizeHumanRightsBox')))
	{
		if (document.getElementById('firstlist_firstlist3').style.display=='none')
		{
			document.getElementById('firstlist_firstlist3').style.display='';
			GetHumanRightsSectionData();
		}
	}
	else
	{
		document.getElementById('firstlist_firstlist3').style.display='none';
	}
	
	var PersonCheckedBoxes='';
	
	if (document.getElementById('PersonalizeNewsBox').checked)
		PersonCheckedBoxes +='news,';
	if (document.getElementById('PersonalizeKnowledgegateBox').checked)
		PersonCheckedBoxes +='knowledgegate,';
	if (document.getElementById('PersonalizeStudiesBox').checked)
		PersonCheckedBoxes +='studies,';
	if (document.getElementById('PersonalizeEbusinessBox').checked)
		PersonCheckedBoxes +='ebusiness,';
	if (document.getElementById('PersonalizeChannelBox').checked)
		PersonCheckedBoxes +='channel,';
	if (document.getElementById('PersonalizeHumanRightsBox').checked)
		PersonCheckedBoxes +='humanrights,';
		
	if (PersonCheckedBoxes=='')
		PersonCheckedBoxes='hideall'
	
	setCookie("PersonalizBoxes",PersonCheckedBoxes,eval(60 * 60 * 24));
	ShoHideBuildYourPage();
}
function GetPerBoxSection(SectionName)
{
	var CSPBs=getCookie("PersonalizBoxes");
	
	if (CSPBs!=null && CSPBs!='')
	{
		if (CSPBs.indexOf(SectionName)!=-1)
			return true;
		else
			return false;
	}
	else if(CSPBs=='hideall')
	{
		return false;
	}
	else
	{
		return true;
	}
}
function RestorePersonalizeBoxesByCookie()
{
	if (GetPerBoxSection('news'))
	{
		document.getElementById('secondlist_secondlist1').style.display='';
		document.getElementById('PersonalizeNewsBox').checked=true;
	}
	if (GetPerBoxSection('knowledgegate'))
	{
		document.getElementById('secondlist_secondlist2').style.display='';
		document.getElementById('PersonalizeKnowledgegateBox').checked=true;
	}
	if (GetPerBoxSection('studies'))
	{
		document.getElementById('secondlist_secondlist3').style.display='';
		document.getElementById('PersonalizeStudiesBox').checked=true;
	}
	if (GetPerBoxSection('ebusiness'))
	{
		document.getElementById('firstlist_firstlist1').style.display='';
		document.getElementById('PersonalizeEbusinessBox').checked=true;
	}
	if (GetPerBoxSection('channel'))
	{
		document.getElementById('firstlist_firstlist2').style.display='';
		document.getElementById('PersonalizeChannelBox').checked=true;
	}
	if (GetPerBoxSection('humanrights'))
	{
		document.getElementById('firstlist_firstlist3').style.display='';
		document.getElementById('PersonalizeHumanRightsBox').checked=true;
	}
}



///Begin sliding collapse by Mosab




var timerlen = 5;
var slideAniLen = 250;

var timerIDs = new Array();
var startTime = new Array();
var objs = new Array();
var endHeight = new Array();
var moving = new Array();
var dir = new Array();
var objCheck = new Array();

function slidedown(objname){
        if(moving[objname])
                return;

        if(document.getElementById(objname).style.display != "none")
                return; // cannot slide down something that is already visible

        moving[objname] = true;
        dir[objname] = "down";
        startslide(objname);
}

function slideup(objname){
        if(moving[objname])
                return;

        if(document.getElementById(objname).style.display == "none")
                return; // cannot slide up something that is already hidden

        moving[objname] = true;
        dir[objname] = "up";
        startslide(objname);
}

function startslide(objname){
for (i=3;i<10; i+=3)
	{
		 if(document.getElementById("FromSiteNewsImgsDisc"+i+""))
		 {
		 var descId = "FromSiteNewsImgsDisc"+i;
		 if (descId != objname)
		  document.getElementById("FromSiteNewsImgsDisc"+i+"").style.display="none";
		  }

	}
        objs[objname] = document.getElementById(objname);

        endHeight[objname] = parseInt(objs[objname].style.height );
        startTime[objname] = (new Date()).getTime();

        if(dir[objname] == "down"){
                objs[objname].style.height = "1px";
        }

        objs[objname].style.display = "block";

        timerIDs[objname] = setInterval('slidetick(\'' + objname + '\');',timerlen);
}

function slidetick(objname){
        var elapsed = (new Date()).getTime() - startTime[objname];

        if (elapsed > slideAniLen)
                endSlide(objname);
        else {
                var d =Math.round(elapsed / slideAniLen * 83);
                if(dir[objname] == "up")
                        d = 83 - d;

                objs[objname].style.height = d + "px";
        }

        return;
}

function endSlide(objname){


        clearInterval(timerIDs[objname]);

        if(dir[objname] == "up")
                objs[objname].style.display = "none";

        objs[objname].style.height = 83 + "px";

        delete(moving[objname]);
        delete(timerIDs[objname ]);
        delete(startTime[objname]);
        delete(endHeight[objname]);
        delete(objs[objname]);
        delete(dir[objname]);

        return;
}

///End Sliding Collapse by Mosab
function modifySummery(id,strSum)
{

if (strSum.length >= 132)
	{
	strSum = strSum.substr(0,132);
	var strLength = strSum.lastIndexOf(" ");
	strSum = strSum.substr(0,strLength) + "...";
	}

	document.getElementById('spnMainSummarytext'+id).innerHTML=strSum;
}


//## Added By MOayad Al-Saleh (3/3/2009)
//## Start moving Latest Report Div
function DragLatestReport(evt)
{
	var e = (window.event) ? window.event : evt;
	SelectedItem.style.left = eval(SelectedX + eval(e.clientX - MouseX))+'px';
	SelectedItem.style.top = eval(SelectedY + eval(e.clientY - MouseY))+'px';
	return false;
}

function DropLatestReport()
{
	document.onmousemove = null;
	document.onmouseup = null;
}

function MoveLatestReport(ClickedItem,evt)
{
	var e = (window.event) ? window.event : evt;
	
	SelectedItem = ClickedItem;
	SelectedX = (window.event) ? SelectedItem.style.pixelLeft : parseInt(SelectedItem.style.left);
	SelectedY = (window.event) ? SelectedItem.style.pixelTop : parseInt(SelectedItem.style.top);
	MouseX = e.clientX;
	MouseY = e.clientY;
	document.onmousemove = DragLatestReport;
	document.onmouseup = DropLatestReport;
}
//##End
//************************ Ad Commerce ****************************//
function FillCommerceFrames()
{
var pageURL = document.location.href;
var mode1;
var mode2;
var TopleftAD120x90		= "";
var TopRighttAD728x90		= "";
var SponsorAD250x40	= "";
var SponsorAD260x60	= "";
var BottomLeftAD120x60 = "";
var BottomRightAD120x60		= "";
var oBottom263x83 = "";
var SponsorAdCommerce260x140 ="";

mode1 = pageURL.search("NRMODE=Unpublished");
mode2 = pageURL.search("NRMODE=Update");
if (document.title.search("Monitoring")==-1)
{
if ((mode1 == -1) && (mode2 == -1))
{
TopleftAD120x90		= '<IFRAME src="httpdisabled://ajnad.aljazeera.net/banners/default.aspx?BannerType=AJA_Gateway_Button&sThisPage=AJA_Homepage" name="AJAD" scrolling="no" border="0" frameborder="0" marginwidth="1" marginheight="1" height="90" width="120"></IFRAME>';
TopRighttAD728x90	= "<IFRAME src=\"httpdisabled://jazad.aljazeera.net/jazcommerce/default.aspx?sThisPage=_3_Channels_GateWay_&BannerType=TopRightAdCommerce\" frameBorder=\"0\" width=\"728\" scrolling=\"no\" height=\"90\" marginBottom=\"0\" valign=\"top\" marginLeft=\"0\" marginRight=\"0\" marginTop=\"0\"></IFRAME>" ;
SponsorAD250x40		= '<IFRAME src="httpdisabled://ajnad.aljazeera.net/banners/default.aspx?BannerType=AJA_Gateway_Sponsor&sThisPage=AJA_Homepage" name="AJAD" scrolling="no" border="0" frameborder="0" marginwidth="1" marginheight="1" height="140" width="260"> </IFRAME>';
SponsorAD260x60		= "<IFRAME src='http://jazad.aljazeera.net/ads/?ads_260_60' frameBorder=0 width=260 scrolling=no height=60 marginTop='0' marginRight='0' marginLeft='0' valign='top' marginBottom='0'></IFRAME>";
oBottom263x83		= "<IFRAME  src=\"httpdisabled://jazad.aljazeera.net/jazcommerce/default.aspx?sThisPage=&BannerType=260_140_Aside_Gatewa\" frameBorder=\"0\" width=\"260\" scrolling=\"no\" height=\"140\" marginTop=\"0\" marginRight=\"0\" marginLeft=\"0\" valign=\"top\" marginBottom=\"0\"></IFRAME>";
SponsorAdCommerce260x140 ='<IFRAME src="httpdisabled://ajnad.aljazeera.net/banners/default.aspx?BannerType=AJA_Gateway_Aside&sThisPage=AJA_Homepage" name="AJAD" scrolling="no" border="0" frameborder="0" marginwidth="1" marginheight="1" height="140" width="260"></IFRAME>'
}
else
{ 
TopleftAD120x90		= "<IMG src=\"/portal/KServices/images/adImages.bmp\" border=\"0\" width=\"120\" height=\"90\">";
TopRighttAD728x90	= "<IMG src=\"/portal/KServices/images/adImages.bmp\" border=\"0\" width=\"728\" height=\"90\">" ;
SponsorAD250x40		= "<IMG src=\"/portal/KServices/images/adImages.bmp\" border=\"0\" width=\"250\" height=\"160\">";
SponsorAD260x60		= "<IMG src=\"/portal/KServices/images/adImages.bmp\" border=\"0\" width=\"260\" height=\"60\">";
oBottom263x83		= "<IMG src=\"/portal/KServices/images/adImages.bmp\" border=\"0\" width=\"150\" height=\"140\">";
SponsorAdCommerce260x140 ="<IMG src=\"/portal/KServices/images/adImages.bmp\" border=\"0\" width=\"260\" height=\"140\">";
}
}
if (document.getElementById("TopleftADCommerce120x90")) 
document.getElementById("TopleftADCommerce120x90").innerHTML  = TopleftAD120x90;
if (document.getElementById("TopRightADCommerce728x90")) 
document.getElementById("TopRightADCommerce728x90").innerHTML  = TopRighttAD728x90;
if (document.getElementById("SponsorAdCommerce250x40")) 
document.getElementById("SponsorAdCommerce250x40").innerHTML = SponsorAD250x40;
if (document.getElementById("SponsorAdCommerce260x60")) 
document.getElementById("SponsorAdCommerce260x60").innerHTML = SponsorAD260x60;
if (document.getElementById("Bottom263x83")) 
{
document.getElementById("Bottom263x83").innerHTML  = oBottom263x83;
try
{
var pageURL = document.location.href;
if (pageURL.indexOf("/NR/exeres/F06E0D8B-BE98-445A-9752-8E7EA9DAD30F.htm") == -1)
{
document.getElementById("Bottom263x83").style.paddingLeft = 13;
}
else
{
document.getElementById("Bottom263x83").style.paddingRight = 4;
}
}
catch(pageURLEX)
{}
}
if(document.getElementById("SponsorAdCommerce260x140"))
document.getElementById("SponsorAdCommerce260x140").innerHTML  = SponsorAdCommerce260x140;
}
function SwitchBetweenBanLat(ObjControl)
{ 
	ObjControl.style.display='none';
	if (ObjControl.id=='tdBannerCenter')
	{
	    document.getElementById('divContainerCenterSection_Mdl2').style.display='none';
	}
	else if(ObjControl.id=='tdLatestEvents')
	{
	    document.getElementById('divContainerCenterSection_Mdl3').style.display='none';
	}
	document.getElementById('divContainerCenterSection_Mdl1').style.display='none';
	document.getElementById('divContainerCenterSection_Mdl1').style.display='';
}
function get_random()
{
    var ranNum= Math.floor(Math.random()*5);
    return ranNum;
}

//Bilal Rtaimat:
//increment counter:

function InsUpdateCountsReport(ArticleGuid,ImagePath,IsArchived,ArchivedId)
{
	
	try
	{
		var ImagePath=""
		var IsArchived=""
		var ArchivedId=""
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
		{
			alert ("Browser does not support HTTP Request")
			return
		} 
		ImagePath=ImagePath.split("/mritems")[1];
	    var url ='/Channel/Aspx/InsUpdateCountsReport.aspx';
		url=url+"?ArticleGuid="+ArticleGuid+"&ImagePath="+ImagePath+"&IsArchived="+IsArchived+"&ArchivedId="+ArchivedId+"&Rand="+Math.random();
       //alert(url)
		if (window.ActiveXObject)//IE
		{
			try
			{
			void("GET",url,false)}
			catch(err)
			{}
		}
		else if (window.XMLHttpRequest)//FireFox
		{
			void("GET",url,false)
		}
	    xmlHttp.send(null)
	    //alert(xmlHttp.responseText)
		//return xmlHttp.responseText
				
	}
	catch(err)
	{

	}
}

function GetXmlHttpObject()
{ 
	try
	{
		var objXMLHttp=null
		if (window.XMLHttpRequest)
		{
			objXMLHttp=new XMLHttpRequest()
		}
		else if (window.ActiveXObject)
		{
			objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP")
		}
		return objXMLHttp
	}
	catch(err)
	{
		
	}
}

//Added
function LoginProcessWeb2()
{
    if (checkUserLogged())
    {
        var html='<table id="tblLogged" width="260" height="18" border="0" cellpadding="0" cellspacing="0" welcomeMessage>'
        html +='<tr><td style="padding-top:15px; padding-bottom:15px" align="center" valign="bottom" class="welcome" colspan="2" background="/portal/images/loginBG.gif"> أهلا وسهلا <br />'
        html +=GetUserNameCookieValue("userName")+ ' <br /><P Align="left">'
        if (document.getElementById('hdMemberShip')) 
        {
            html +='&nbsp;<a  class="welcome" style="text-decoration: none" href="javascript:logout2();" onclick="CountAreaHits(this,\'11\',\'\');">خروج</a>&nbsp;'
        }
        else
        {
            html +='&nbsp;<a class="welcome" style="text-decoration: none" href="javascript:logout2();" onclick="CountAreaHits(this,\'11\',\'\');">خروج</a>&nbsp;'
        }
        
        html +='<font color="white">|</font>'
        html +='&nbsp;<a class="welcome" style="text-decoration: none" href="javascript:drawUpdateWindow();" onclick="CountAreaHits(this,\'11\',\'\');">تعديل</a>&nbsp;</P>'
        html +='</td>'
        html +='</tr>'
        html +='</table>'
        document.getElementById('divMembershipContent').innerHTML=html
    }
    else
    {   
        var html='';
        html+='<table width="260" border="0" cellspacing="0" cellpadding="0" id="tblMembershipLogin">'
        html+='<tr>'
        html+='<td height="140" valign="top" style="background-image:url(\'/portal/Images/login.jpg\'); background-repeat:no-repeat">'
        html+='<table width="260" border="0" cellspacing="0" cellpadding="0">'
        
//        if(BrowserDetect.browser == 'Firefox')
//        { 
//            html+='<tr>'
//            html+='<td width="154" height="37" valign="bottom">'
//            html+='<input name="txtUserName" onkeypress="LoginAcionOnEnterKey(event)" type="text" class="Logintextfield" id="txtUserName" />'
//            html+='</td>'
//            html+='<td>&nbsp;'
//            html+='<table><tr>&nbsp;<td valign="bottom" align="left" style="display:none;padding-left: 5px" id="RFVUserName"><font style="color:red;font-size:14px">*</font></td></tr></table></td>'
//            html+='</tr>'
//            html+='<tr>'
//            html+='<td width="154" height="40" valign="bottom">'
//            html+='<input name="txtPassword" onkeypress="LoginAcionOnEnterKey(event)" type="password" class="Logintextfield" id="txtPassword" />'
//            html+='</td>'
//            html+='<td>&nbsp;'
//            html+='<table><tr>&nbsp;<td valign="bottom" align="left" style="display:none;padding-left: 5px" id="RFVPassWord"><font style="color:red;font-size:14px">*</font></td></tr></table></td>'
//            html+='</tr>'
//        }
//        else
//        {        
            html+='<tr>'
            html+='<td width="154" height="37" align="left" valign="bottom">'
            html+='<label>'
            html+='<input name="txtUserName" onkeypress="LoginAcionOnEnterKey(event)" type="text" class="Logintextfield" id="txtUserName" />'
            html+='<td width="106" valign="bottom" align="left" style="display:none;padding-left: 5px" id="RFVUserName"><font style="color:red;font-size:14px">*</font></td></label>'
            html+='</td>'
            html+='<td>&nbsp;</td>'
            html+='</tr>'
            html+='<tr>'
            html+='<td width="154" height="40" align="left" valign="bottom">'
            html+='<label>'
            html+='<input name="txtPassword" onkeypress="LoginAcionOnEnterKey(event)" type="password" class="Logintextfield" id="txtPassword" />'
            html+='<td width="106" valign="bottom" align="left" style="display:none;padding-left: 5px" id="RFVPassWord"><font style="color:red;font-size:14px">*</font></td></label>'
            html+='</td>'
            html+='<td>&nbsp;</td>'
            html+='</tr>'
//        }        
        
        html+='<tr>'
        html+='<td width="85" colspan="2" valign="bottom" align="left" style="padding-left:42px;padding-top:5px">'
        html+='<a href="#"><img src="/portal/Images/emptyimage.gif" style="cursor: pointer" width="85" height="25" border="0" align="bottom" onclick="LoginMembershipHomePageLV();CountAreaHits(this,\'11\',\'\');" /></a></td></tr>'
        html+='<tr>'
        html+='<td height="37" colspan="2">'
        html+='<table width="260" border="0" cellspacing="0" cellpadding="0">'
        html+='<tr>'
        html+='<td width="91" align="center" valign="bottom" style="padding-left:3px">'
        html+='<a style="cursor: pointer" onclick="CountAreaHits(this,\'11\',\'mailto: support@aljazeera.net\');"><img src="/portal/Images/emptyimage.gif" width="56" height="16" border="0" /></a></td>'
        html+='<td width="91" valign="bottom" style="padding-right:7px">'
        html+='<a href="javascript:void(0);" onclick="javascript:void(\'/portal/KServices/SupportPages/Registeration/unSubscribe.aspx?type=1\',\'mywindow\',\'location=1,status=1,scrollbars=1,width=590,height=600\');CountAreaHits(this,\'11\',\'\');"><img src="/portal/Images/emptyimage.gif" width="82" height="16" border="0" /></a></td>'
        html+='<td width="91" valign="bottom">'
        html+='<a href="javascript:void(0);" onclick="javascript:void(\'/PORTAL/KServices/SupportPages/Registeration/secondLvlForm.aspx\',\'mywindow\',\'location=1,status=1,scrollbars=1,width=590,height=600\');CountAreaHits(this,\'11\',\'\');"><img src="/portal/Images/emptyimage.gif" width="82" height="16" border="0" /></a></td></tr>'
        html+='</table>'
        html+='</td></tr></table></td></tr></table>'
        document.getElementById('divMembershipContent').innerHTML=html       
    }
}

function checkUserLogged()
{
    var personCookie = GetCookie("jazeera-person");
    if (personCookie)
    {
        var personLevelCookie = GetCookieValue("Level");
        if (personLevelCookie)
        return true;
        else
        return false;
    }
    else
    {
        return false;
    }
    return true;
}
function GetCookie(sName)
{
    // cookies are separated by semicolons
    var aCookie = document.cookie.split("; ");
    for (var i=0; i < aCookie.length; i++)
    {
        // a name/value pair (a crumb) is separated by an equal sign
        var aCrumb = aCookie[i].split("=");
        if (sName == aCrumb[0]) 
        return unescape(aCrumb[0]);
    }
    // a cookie with the requested name does not exist
    return null;
}

function GetCookieValue(sName)
{
    var aCookie = document.cookie.split("; ");
    for (var i=0; i < aCookie.length; i++)
    {
        // a name/value pair (a crumb) is separated by an equal sign
        if (aCookie[i].lastIndexOf(sName)> -1) 
        {
            var aCrumb1 = aCookie[i].split("&");
            for (var k=0; k < aCrumb1.length; k++)
            {
                var aCrumb = aCrumb1[k].split("=");
                if (sName == aCrumb[0]) 
                return unescape(aCrumb[1]);
            }
        }
    }
    // a cookie with the requested name does not exist
    return null;
}
function ReplaceAll(Source,stringToFind,stringToReplace){

  var temp = Source;

    var index = temp.indexOf(stringToFind);

        while(index != -1){

            temp = temp.replace(stringToFind,stringToReplace);

            index = temp.indexOf(stringToFind);

        }

        return temp;
}
function GetUserNameCookieValue(sName)
{
    var aCookie = document.cookie.split("; ");
    for (var i=0; i < aCookie.length; i++)
    {
        // a name/value pair (a crumb) is separated by an equal sign
        if (aCookie[i].lastIndexOf(sName)> -1) 
        {
            var aCrumb1 = aCookie[i].split("&");
            for (var k=0; k < aCrumb1.length; k++)
            {
                var aCrumb = aCrumb1[k].split("=");
                if (sName == aCrumb[1]) 
                {
                    var _userName = aCrumb[2];
                    _userName = ReplaceAll(_userName,"+","%20");
                    return decodeURIComponent(_userName);
                }
            }
        }
    }
    // a cookie with the requested name does not exist
    return null;
}

function logout()
{
    var url="/portal/Aspx/logout.aspx?Rand="+Math.random();
    void(url,"","width=590,status=yes,height=450,scrollbars=no");
}

function logout2()
{
    var url="/portal/Aspx/logout2.aspx?Rand="+Math.random();
    void(url,"","width=590,status=yes,height=450,scrollbars=no, top=2000, left=2000, hieght=1, width=1");
}

function drawUpdateWindow()
{
    var strURL = "/portal/Aspx/updateAction.aspx";
    var strProperties = "width=590,height=450,scrollbars=yes";
    void(strURL,"", strProperties, false);
}
function LoginMembershipHomePageLV()
{
    if (document.getElementById('txtUserName').value!='' && document.getElementById('txtPassword').value!='')
    {
        document.getElementById('RFVUserName').style.display = 'none';
        document.getElementById('RFVPassWord').style.display = 'none';
    
        var userName = document.getElementById("txtUserName").value;
        var Password = document.getElementById("txtPassword").value;
        if(top.document.getElementById("pw") == null)
        {
            var html="<input type=hidden id=pw name=pw value=" + Password + ">"
            document.getElementById('tdMembershipData').innerHTML+=html
        }
        else
            top.document.getElementById("pw").setAttribute("value", Password);
            if(top.document.getElementById("user") == null)
            {
                var html="<input type=hidden id=user name=user value=" + userName + ">"
                document.getElementById('tdMembershipData').innerHTML+=html
            }
            else
                top.document.getElementById("user").setAttribute("value",userName);
                var url="/portal/Aspx/loginAction2.aspx";
                void(url,"","width=1,status=yes,height=1,scrollbars=no,left=2000,top=2000");
    }
    else
    {
        if (document.getElementById('txtUserName').value=='')
        {        
            document.getElementById('txtUserName').focus();
            document.getElementById('RFVUserName').style.display = '';
        }
        else
        {
            document.getElementById('RFVUserName').style.display = 'none';
        }
        if (document.getElementById('txtPassword').value=='')
        {
            document.getElementById('txtPassword').focus();
            document.getElementById('RFVPassWord').style.display = '';
        }
        else
        {
            document.getElementById('RFVPassWord').style.display = 'none';
        }
    }
}
    function WrongLogin()
    {
//        var html='<table id="tblLogged" width="260" height="18" border="0" cellpadding="0" cellspacing="0" welcomeMessage>'
//        html +='<tr><td style="padding-top:15px; padding-bottom:15px" align="center" valign="bottom" class="welcome" colspan="2" background="/portal/images/loginBG.gif"> أهلا وسهلا <br />'
//        
//        html +=GetUserNameCookieValue("userName")+ ' <br /><P Align="left">'
//        if (document.getElementById('hdMemberShip')) 
//        {
//            html +='&nbsp;<a  class="welcome" style="text-decoration: none" href="javascript:logout2();">خروج</a>&nbsp;'
//        }
//        else
//        {
//            html +='&nbsp;<a class="welcome" style="text-decoration: none" href="javascript:logout2();">خروج</a>&nbsp;'
//        }
//        
//        html +='<font color="white">|</font>'
//        html +='&nbsp;<a class="welcome" style="text-decoration: none" href="javascript:drawUpdateWindow();">تعديل</a>&nbsp;</P>'
//        html +='</td>'
//        html +='</tr>'
//        html +='</table>'
//        document.getElementById('divMembershipContent').innerHTML=html

        var html='<table width="260" border="0" cellspacing="0" cellpadding="0">'
            html +='<tr>'
            html +='<td height="140" align="center" valign="middle" background="/portal/images/loginBG.gif" class="welcome" > خطأ في اسم المستخدم او كلمة السر<br /><br />'
            html +='الرجاء ادخال المعلومات الصحيحة<br />'
            
            
            html +='<P Align="left">'
            html +='&nbsp;<a class="welcome" style="text-decoration: none" href="javascript:changeInnerHtmel();">رجوع</a>&nbsp;</P>'
            html +='</td>'
            html +='</tr>'
            html +='</table>'
            document.getElementById('divMembershipContent').innerHTML=html;
}
function changeInnerHtmel()
{
        var html='';
        html+='<table width="260" border="0" cellspacing="0" cellpadding="0" id="tblMembershipLogin">'
        html+='<tr>'
        html+='<td height="140" valign="top" background="/portal/Images/login.jpg">'
        html+='<table width="260" border="0" cellspacing="0" cellpadding="0">'
        
        if(BrowserDetect.browser == 'Firefox')
        { 
            html+='<tr>'
            html+='<td width="154" height="37" valign="bottom">'
            html+='<input name="txtUserName" onkeypress="LoginAcionOnEnterKey(event)" type="text" class="Logintextfield" id="txtUserName" />'
            html+='</td>'
            html+='<td>&nbsp;'
            html+='<table><tr>&nbsp;<td valign="bottom" align="left" style="display:none;padding-left: 5px" id="RFVUserName"><font style="color:red;font-size:14px">*</font></td></tr></table></td>'
            html+='</tr>'
            html+='<tr>'
            html+='<td width="154" height="40" valign="bottom">'
            html+='<input name="txtPassword" onkeypress="LoginAcionOnEnterKey(event)" type="password" class="Logintextfield" id="txtPassword" />'
            html+='</td>'
            html+='<td>&nbsp;'
            html+='<table><tr>&nbsp;<td valign="bottom" align="left" style="display:none;padding-left: 5px" id="RFVPassWord"><font style="color:red;font-size:14px">*</font></td></tr></table></td>'
            html+='</tr>'
        }
        else
        {        
            html+='<tr>'
            html+='<td width="154" height="37" align="left" valign="bottom">'
            html+='<label>'
            html+='<input name="txtUserName" onkeypress="LoginAcionOnEnterKey(event)" type="text" class="Logintextfield" id="txtUserName" />'
            html+='<td width="106" valign="bottom" align="left" style="display:none;padding-left: 5px" id="RFVUserName"><font style="color:red;font-size:14px">*</font></td></label>'
            html+='</td>'
            html+='<td>&nbsp;</td>'
            html+='</tr>'
            html+='<tr>'
            html+='<td width="154" height="40" align="left" valign="bottom">'
            html+='<label>'
            html+='<input name="txtPassword" onkeypress="LoginAcionOnEnterKey(event)" type="password" class="Logintextfield" id="txtPassword" />'
            html+='<td width="106" valign="bottom" align="left" style="display:none;padding-left: 5px" id="RFVPassWord"><font style="color:red;font-size:14px">*</font></td></label>'
            html+='</td>'
            html+='<td>&nbsp;</td>'
            html+='</tr>'
        }        
        
        html+='<tr>'
        html+='<td width="85" colspan="2" valign="bottom" align="left" style="padding-left:42px;padding-top:5px">'
        html+='<a href="#"><img src="/portal/Images/emptyimage.gif" style="cursor: pointer" width="85" height="25" border="0" align="bottom" onclick="LoginMembershipHomePageLV()" /></a></td></tr>'
        html+='<tr>'
        html+='<td height="37" colspan="2">'
        html+='<table width="260" border="0" cellspacing="0" cellpadding="0">'
        html+='<tr>'
        html+='<td width="91" align="center" valign="bottom" style="padding-left:3px">'
        html+='<a href="mailto: support@aljazeera.net"><img src="/portal/Images/emptyimage.gif" width="56" height="16" border="0" /></a></td>'
        html+='<td width="91" valign="bottom" style="padding-right:7px">'
        html+='<a href="javascript:void(0);" onclick="javascript:void(\'/portal/KServices/SupportPages/Registeration/unSubscribe.aspx?type=1\',\'mywindow\',\'location=1,status=1,scrollbars=1,width=590,height=600\')"><img src="/portal/Images/emptyimage.gif" width="82" height="16" border="0" /></a></td>'
        html+='<td width="91" valign="bottom">'
        html+='<a href="javascript:void(0);" onclick="javascript:void(\'/PORTAL/KServices/SupportPages/Registeration/secondLvlForm.aspx\',\'mywindow\',\'location=1,status=1,scrollbars=1,width=590,height=600\')"><img src="/portal/Images/emptyimage.gif" width="82" height="16" border="0" /></a></td></tr>'
        html+='</table>'
        html+='</td></tr></table></td></tr></table>'
        document.getElementById('divMembershipContent').innerHTML=html          
}

function LoginAcionOnEnterKey(ev)
{
    var code = (ev.keyCode)? ev.keyCode: ((ev.charCode)? ev.charCode: ev.which);
    if(code == '13') 
    {
        LoginMembershipHomePageLV();
    }
}

function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

function changeSelectedProgram(selected, count)
{
    for(i=0; i<count; i++)
    {
       if(i==selected)
       {
            document.getElementById('tdSelector'+i).innerHTML="<img src='/portal/images/LVImages/swlected.jpg' width='12' height='7' />";
            document.getElementById('tblSelector'+i).style.display="block";
       }
       else
       {
            document.getElementById('tdSelector'+i).innerHTML="";
            document.getElementById('tblSelector'+i).style.display="none";
       }
    }
}


voidServicesSocial(EncodedURL,strText) 
{ 


var intWinW = 500; 
var intWinH = 375; 
var strProperties = 'resizable=no, ';  
var strURL = "/portal/aspx/sendArticle.aspx?EML=" + EncodedURL+"&urgent="+ strText ;
 
if (strURL != null) 
{ 
var intScreenW = parseInt(screen.width, 10); 
var intScreenH = parseInt(screen.Height, 10); 
var intWinT = (intScreenH - intWinH)/2; 
var intWinL = (intScreenW - intWinW)/2; 
strProperties += 'height=' + intWinH + ', width=' + intWinW + ', top=' + intWinT + ', left=' + intWinL + ', scrollbars=yes,toolbar=yes'; 
var winObject = void(strURL, 'PageServices', strProperties, false); 
winObject.focus(); 
} 
} 
