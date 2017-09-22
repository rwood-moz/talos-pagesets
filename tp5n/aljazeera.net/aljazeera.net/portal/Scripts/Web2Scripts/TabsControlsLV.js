var FireFox=false

function ShowHidePanel(Control,Target)
{
if (CheckFireFox())
	Control.parentNode.childNodes[1].className='imgMaxMinMinuse'
else
	Control.parentElement.childNodes[0].className='imgMaxMinMinuse'

if (document.getElementById(Target).style.display=='')
{	
document.getElementById(Target).style.display='none';
}	
else
{
document.getElementById(Target).style.display='';
}		
}
//End News

//## Added By Moayad Al-Saleh

function ShoHideHeadLinesPBox(PersonalBox,ObjImage)
{
if(PersonalBox.isOpen())
	{
		PersonalBox.close();
		ObjImage.className='imgMaxMinSquare'
	}
	else 
	{
		void();
		ObjImage.className='imgMaxMinMinuse'
	}
	ResizeToSmallPersonalBoxes()
}
function clearSelected(CheckBoxesList)
{
	ArrCheckBoxesList=CheckBoxesList.split(",")
	for (var i = 0 ; i < ArrCheckBoxesList.length ; i++)
	{
		//if (document.getElementById(ArrCheckBoxesList[i]))
			document.getElementById(ArrCheckBoxesList[i]).checked = false;
	}
}
function getHeadlineSection(cookies)
{
	var stringToSplit = cookies
	var stringToSplitArray = stringToSplit.split(",");
	
	for (var i = 0 ; i <= stringToSplitArray.length-1 ; i++)
	{
		if(getCookie(stringToSplitArray[i]) != null && getCookie(stringToSplitArray[i]) != "" )
		{
			var count = getCookie(stringToSplitArray[i]);
			var cookieName = stringToSplitArray[i].toLowerCase();
			if (document.getElementById(cookieName + "1") != null)	
			{
				for (var x = 1 ; x <= count ; x++)
				{
					if (document.getElementById(cookieName + x))
						document.getElementById(cookieName + x).style.display='';
				}
				for (z = x ; z <= 5 ; z++)
				{
					try
					{
						if (document.getElementById(cookieName + z))
							document.getElementById(cookieName + z).style.display='none';
					}
					catch(err)
					{
					}
				}
								
				if (count == "1")
				{
					if(document.getElementById(cookieName + "1").style.display=='' && document.getElementById(cookieName + "2").style.display=='none')
					{
						document.getElementById(cookieName +"-MinusBtn").style.cursor='default';
						document.getElementById(cookieName +"-MinusBtn").className='disabledMinus'
					}	
					else if(document.getElementById(cookieName + "1").style.display=='' && document.getElementById(cookieName + "2") == null)
					{
						document.getElementById(cookieName +"-MinusBtn").style.cursor='default';
						document.getElementById(cookieName +"-MinusBtn").className='disabledMinus'
					}
				}
				else if(count == "2")
				{
					if(document.getElementById(cookieName + "2").style.display=='' && document.getElementById(cookieName + "3") == null)
					{
						document.getElementById(cookieName +"-PlusBtn").style.cursor='default';
						document.getElementById(cookieName +"-PlusBtn").className='disabledPlus'
					}
				}
				else if(count == "3")
				{
					if(document.getElementById(cookieName + "3").style.display=='' && document.getElementById(cookieName + "4") == null)
					{
						document.getElementById(cookieName +"-PlusBtn").style.cursor='default';
						document.getElementById(cookieName +"-PlusBtn").className='disabledPlus'
					}
				}
				else if(count == "4")
				{
					if(document.getElementById(cookieName + "4").style.display=='' && document.getElementById(cookieName + "5") == null)
					{
						document.getElementById(cookieName +"-PlusBtn").style.cursor='default';
						document.getElementById(cookieName +"-PlusBtn").className='disabledPlus'
					}
				}
				else if(count == "5")
				{
					document.getElementById(cookieName +"-PlusBtn").style.cursor='default';
					document.getElementById(cookieName +"-PlusBtn").className='disabledPlus'
				}
			}
		}
		else
		{
			var count = 0;
			var cookieName = stringToSplitArray[i].toLowerCase();
			for (counter = 1 ; counter <= 5 ; counter++)
			{
				if (document.getElementById(cookieName + counter))
				{
					count = counter;
				}
			}
			
			if(count == 0)
			{
				if(document.getElementById(cookieName +"-MinusBtn"))
				{
					document.getElementById(cookieName +"-MinusBtn").style.cursor='default';
					document.getElementById(cookieName +"-MinusBtn").className='disabledMinus'
				}
				if(document.getElementById(cookieName +"-PlusBtn"))
				{
					document.getElementById(cookieName +"-PlusBtn").style.cursor='default';
					document.getElementById(cookieName +"-PlusBtn").className='disabledPlus'
				}
			}
			else if (count == 1)
			{
				if(document.getElementById(cookieName +"-MinusBtn"))
				{
					document.getElementById(cookieName +"-MinusBtn").style.cursor='default';
					document.getElementById(cookieName +"-MinusBtn").className='disabledMinus'
				}
				if(document.getElementById(cookieName +"-PlusBtn"))
				{
					document.getElementById(cookieName +"-PlusBtn").style.cursor='default';
					document.getElementById(cookieName +"-PlusBtn").className='disabledPlus'
				}
			}
			else if (count == 2 || count == 3)
			{
				if(document.getElementById(cookieName +"-PlusBtn"))
				{
					document.getElementById(cookieName +"-PlusBtn").style.cursor='default';
					document.getElementById(cookieName +"-PlusBtn").className='disabledPlus'
				}
			}
		}
	}
}
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
function GetSectionsXml(cookieString,SpanSectionHTML,SetCookiesSection)
{	
	FireFox=false;
	xmlHttpSections=GetXmlHttpSectionsObject();
	if (xmlHttpSections==null)
	{
		alert ("Your browser does not support AJAX!");
		return;
	} 

	var url="/portal/aspx/GetSections.aspx";
	url=url+"?Path="+cookieString;
	
	if (PmSMenu=='server')
		url=url+"&sid="+Math.random();
	
	xmlHttpSections.onreadystatechange=function (){
		if (xmlHttpSections.readyState==4)
		{ 
			if (xmlHttpSections.responseText.trim()!='')
			{
				document.getElementById(SpanSectionHTML).style.display=''
				document.getElementById(SpanSectionHTML).innerHTML=xmlHttpSections.responseText;
			}
			else
			{
				document.getElementById(SpanSectionHTML).style.display='none'
			}
			getHeadlineSection(SetCookiesSection);
		}
	};
	void("GET",url,false);
	xmlHttpSections.send(null);
	
	if  (FireFox == true) { 
        i = 0; 
        while((i < 9) && (xmlHttpSections.readyState != 4) ) { 
            i++; 
        } 
        if (xmlHttpSections.readyState == 4) { 
           if  (xmlHttpSections.status == 200){ 
				document.getElementById(SpanSectionHTML).innerHTML=xmlHttpSections.responseText;
				getHeadlineSection(SetCookiesSection);
           } 
        } 
    }
} 
function validateChecked(CheckBoxesList)
{
	ArrCheckBoxesList=CheckBoxesList.split(",")
	for (var i = 0 ; i < ArrCheckBoxesList.length ; i++)
	{
		if (document.getElementById(ArrCheckBoxesList[i]).checked == true)
		{
			return true
		}
	}
	return false;
}
function checkSelected(CheckBoxesList,ChannelSectionsList)
{
	var cookieString = "";
	ArrCheckBoxesList=CheckBoxesList.split(",")
	ArrChannelSectionsList=ChannelSectionsList.split(",")
	for (var i = 0 ; i < ArrCheckBoxesList.length ; i++)
	{
		if (document.getElementById(ArrCheckBoxesList[i]).checked == true)
			cookieString = cookieString + ArrChannelSectionsList[i] + ",";
	}
	
	if(validateChecked(CheckBoxesList) == false)
	{
		cookieString = "none";
	}

	return cookieString;
}
function setSelected(cookieString,CheckBoxesList,ChannelSectionsList)
{
	ArrCheckBoxesList=CheckBoxesList.split(",")
	ArrChannelSectionsList=ChannelSectionsList.split(",")
	for (var i = 0 ; i < ArrCheckBoxesList.length ; i++)
	{
		if (cookieString.toLowerCase().indexOf(ArrChannelSectionsList[i].toLowerCase()) != -1)
			document.getElementById(ArrCheckBoxesList[i]).checked = true ; 
	}
	
}
function checkCookie(SectionArea,CheckBoxesList,SpanSectionHTML,ChannelSectionsList,SetCookiesSection)
{
	SubSectionsArea = getCookie(SectionArea);
	if (SubSectionsArea != null && SubSectionsArea != "")
	{
		if(SubSectionsArea == "none")
		{
			clearSelected(CheckBoxesList)
			GetSectionsXml("",SpanSectionHTML,SetCookiesSection)
		}
		else
		{
			clearSelected(CheckBoxesList)
			setSelected(getCookie(SectionArea),CheckBoxesList,ChannelSectionsList)
			GetSectionsXml(getCookie(SectionArea),SpanSectionHTML,SetCookiesSection)
		}
	}
	else 
	{			
		GetSectionsXml(checkSelected(CheckBoxesList,ChannelSectionsList),SpanSectionHTML,SetCookiesSection)
	}
}
function hidePanel(trPanelSection)
{
	document.getElementById(trPanelSection).style.display='none';
}
function Cancel(GadgetPanel,CheckBoxesList,trPanelSection,ChannelSectionsList,SectionArea,DefaultSelectedSub)
{
	SubSectionsArea = getCookie(SectionArea);
	if (SubSectionsArea != null && SubSectionsArea != "")
	{
		clearSelected(CheckBoxesList)
		setSelected(getCookie(SectionArea),CheckBoxesList,ChannelSectionsList)
	}
	else 
	{
		clearSelected(CheckBoxesList)
		ArrDefaultSelectedSub=DefaultSelectedSub.split(",")
		for (var i = 0 ; i < ArrDefaultSelectedSub.length ; i++)
			document.getElementById(ArrDefaultSelectedSub[i]).checked = true;
	}
	hidePanel(trPanelSection)
	void();
}
function Save(GadgetPanel,SpanSectionHTML,trPanelSection,SectionArea,CheckBoxesList,ChannelSectionsList,SetCookiesSection , SetCookiesSectionChannelsNames)
{
	setCookie(SectionArea , checkSelected(CheckBoxesList,ChannelSectionsList) , '10')
	GetSectionsXml(getCookie(SectionArea),SpanSectionHTML,SetCookiesSectionChannelsNames)
	hidePanel(trPanelSection)
	void();	
}
function increase(Control)
{
	var ID = document.getElementById(Control).id;
	var IDs = ID.split("-");
	var sectionName = IDs[0].toLowerCase();
	var count = 0;

	if (document.getElementById(ID).style.cursor == 'pointer')
	{
		for (var x = 1 ; x <= 5 ; x++)
		{
			if (document.getElementById(sectionName+""+x) != null)
			{
				count = x;
			}
		}

		for (var i = 1 ; i <= count ; i++)
		{
			if (document.getElementById(sectionName+""+i) != "")
			{
				document.getElementById(sectionName+"-MinusBtn").style.cursor='pointer'				
				document.getElementById(sectionName+"-MinusBtn").className='enabledMinus'

				if (document.getElementById(sectionName+""+i).style.display=='none' )
				{
					document.getElementById(sectionName+""+i).style.display='';
					setCookie(sectionName , i , '10')
					break;
				}
			}
		}
		
		if (document.getElementById(sectionName+count).style.display=='')
		{
			document.getElementById(ID).style.cursor='default';
			document.getElementById(ID).className='disabledPlus';
		}
	}	
}
function decrease(Control)
{
	var ID = document.getElementById(Control).id;
	var IDs = ID.split("-");
	var sectionName = IDs[0];
	var count = 5;

	if (document.getElementById(ID).style.cursor == 'pointer')
	{
		for (var x = 1 ; x <= 5 ; x++)
		{
			if (document.getElementById(sectionName+""+x) != null)
			{
				count = x;
			}
		}
		
		for (var i = count ; i >= 2 ; i--)
		{
			if (document.getElementById(sectionName+""+i) != "")
			{
				document.getElementById(sectionName+"-PlusBtn").style.cursor='pointer'
				document.getElementById(sectionName+"-PlusBtn").className='enabledPlus'

				if (document.getElementById(sectionName+""+i).style.display=='' )
				{
					document.getElementById(sectionName+""+i).style.display='none';
					setCookie(sectionName , i-1 , '10')
					break;
				}
			}
		}
		
		try
		{
			if (document.getElementById(sectionName+"1").style.display=='' && document.getElementById(sectionName+"2").style.display=='none')
			{
				document.getElementById(ID).style.cursor='default';
				document.getElementById(ID).className='disabledMinus'
			}	
			else if (document.getElementById(sectionName+"1").style.display=='' && document.getElementById(sectionName+"2") == null)
			{
				document.getElementById(ID).style.cursor='default';
				document.getElementById(ID).className='disabledMinus'
			}	
		}
		catch(err)
		{	
			document.getElementById(ID).style.cursor='default';
			document.getElementById(sectionName+"-MinusBtn").style.cursor='default'
		}
	}
}
function OpenAudioVideoPage(url,ArticleGuid,ImgURL,gaID)
{
//CurrentMode
//ImgURL={img[@Type='MainStory6']}'
//CountAreaHits(gaID);
if (ArticleGuid!="null")
    {
    var url;
    url='/Channel/KServices/SupportPages/ShowMedia/showMedia.aspx?fileURL='+url+'&ImgURL='+ImgURL+'&ArticleGuid='+ArticleGuid+'&CurrentMode='+CurrentPageMode+''
    void(url,'','width=590; height=450; scrollbars=1')
    }
    else
    {
    void('/Channel/KServices/SupportPages/ShowMedia/showMedia.aspx?fileURL=' + url +'&ImgURL=' + ImgURL,'','width=590; height=450; scrollbars=1')
    }
	
	
}
function CountAreaHitsCustomHeadlines(id)
{
	switch(id)
	{
		//--------------News----------------

		case "Arabic":
		CountAreaHits('19');
		break;

		case "health and medicine":
		CountAreaHits('19');
		break;

		case "International":
		CountAreaHits('19');
		break;

		case "miscellaneous":
		CountAreaHits('19');
		break;

		case "Sports":
		CountAreaHits('19');
		break;

		case "reports and analysis":
		CountAreaHits('19');
		break;

		case "arts and culture":
		CountAreaHits('19');
		break;

		case "press Tour":
		CountAreaHits('19');
		break;

		//--------------Knowledgate----------------

		case "Analysis":
		CountAreaHits('21');
		break;

		case "Books":
		CountAreaHits('21');
		break;	

		case "Points of Views":
		CountAreaHits('21');
		break;	

		case "Special coverages 2010":
		CountAreaHits('21');
		break;	

		case "Classified files 2009":
		CountAreaHits('21');
		break;	

		//---------------E-business---------------

		case "Economic":
		CountAreaHits('20');
		break;

		case "EconomicIssues":
		CountAreaHits('20');
		break;	

		case "Business":
		CountAreaHits('20');
		break;	

		case "EconomicCoverage":
		CountAreaHits('20');
		break;	

		case "EconomicReports":
		CountAreaHits('20');
		break;	

		//--------------Channels----------------

		case "News Bulletins":
		CountAreaHits('22');
		break;

		case "Reports":
		CountAreaHits('22');
		break;	

		case "Programs":
		CountAreaHits('22');
		break;	

		//--------------Studies----------------

		case "bibliography":
		CountAreaHits('23');
		break;

		case "Issues":
		CountAreaHits('23');
		break;	

		case "Strategy reports":
		CountAreaHits('23');
		break;

		case "SpecialFiles":
		CountAreaHits('23');
		break;

		case "Dialogues":
		CountAreaHits('23');
		break;	

		case "JazeeraPapers":
		CountAreaHits('23');
		break;	

		case "MiddleForum":
		CountAreaHits('23');
		break;			
		
		case "Seminars":
		CountAreaHits('23');
		break;	
		
		case "Conferences":
		CountAreaHits('23');
		break;
			
		case "Theses and books":
		CountAreaHits('23');
		break;	
	}
}
function GetNewsSectionData()
{
	checkCookie('NewsArea',"chkArabic,chkMedicine,chkInterNational,chkCollection,chkSport,chkReports,chkArts,chkTour","spnNewsArea","/Channels/News/Arabic/Arabic,/Channels/News/health and medicine/health and medicine,/Channels/News/International/International,/Channels/News/miscellaneous/miscellaneous,/Channels/News/Sports/Sports,/Channels/News/reports and analysis/reports and analysis,/Channels/News/arts and culture/arts and culture,/Channels/News/press Tour/press Tour","Arabic,health and medicine,International,miscellaneous,Sports,reports and analysis,arts and culture,press Tour")
}
function GetEbusinessSectionData()
{
	checkCookie('eBusinessArea',"chkEconomic,chkBusiness,chkEconomicReports,chkEconomicCoverage,chkEconomicIssues","spnEbusinessArea","/Channels/eBusiness/Economic/Economic,/Channels/eBusiness/Business/Business,/Channels/eBusiness/EconomicReports/EconomicReports,/Channels/eBusiness/EconomicCoverage/EconomicCoverage,/Channels/eBusiness/EconomicIssues/EconomicIssues","Economic,EconomicIssues,Business,EconomicCoverage,EconomicReports")
}
function GetKnowledgegateSectionData()
{
	checkCookie('KnowledgeGateArea',"chkAnalysis,chkPointsOfViews,chkClassifiedFiles,chkBooks,chkSpecialFiles","spnKnowledgeGateArea","/Channels/KnowledgeGate/Analysis/Analysis,/Channels/KnowledgeGate/Points of Views/Points of Views,/Channels/KnowledgeGate/Classified files 2009,/Channels/KnowledgeGate/Books,/Channels/KnowledgeGate/Special coverages 2010","Analysis,Books,Points of Views,Special coverages 2010,Classified files 2009")
}
function GetChannelSectionData()
{
		checkCookie('ChannelArea',"chkChannelReports,chkPrograms,chkNewsBullets","spnChannelArea","/Channels/Channel/Reports,/Channels/Channel/Programs,/Channels/Channel/News Bulletins","News Bulletins,Reports,Programs")
}
function GetStudiesSectionData()
{
	checkCookie('StudiesArea',"chkAppreciation,chkStudiesSpecialFiles,chkIssues,chkStrategyReports,chkDialogues,chkJazeeraPapers,chkMiddleForum,chkBibliography,chkSeminars,chkConferences,chkTheses","spnStudiesArea","/Channels/Studies/Appreciation/Appreciation,/Channels/Studies/SpecialFiles,/Channels/Studies/Issues/Issues,/Channels/Studies/Strategy reports/Strategy reports,/Channels/Studies/Dialogues/Dialogues,/Channels/Studies/Aljazeera Papers/Aljazeera Papers,/Channels/Studies/MiddleForum/MiddleForum,/Channels/Studies/bibliography/bibliography,/Channels/Studies/Seminars/Seminars,/Channels/Studies/Conferences/Conferences,/Channels/Studies/Theses and books/Theses and books","bibliography,Issues,Strategy reports,SpecialFiles,Dialogues,JazeeraPapers,MiddleForum,Appreciation,Seminars,Conferences,Theses and books")
}
function GetHumanRightsSectionData()
{
	checkCookie('HumanRightsArea',"chkHumanRightsNews,chkHumanRightsReports,chkHumanRightsIssues,chkHumanRightsArticles,chkHumanRightsTerm,chkHumanRightsDocuments,chkHumanRightsData,chkHumanRightsAgreements,chkHumanRightsSurvey,chkHumanRightsCaricature","spnHumanRightsArea","/Channels/Human Rights/HrNews/HrNews,/Channels/Human Rights/HrReports/HrReports,/Channels/Human Rights/Issues/Issues,/Channels/Human Rights/Articles/Articles,/Channels/Human Rights/Term/Term,/Channels/Human Rights/Documents/Documents,/Channels/Human Rights/Data/Data,/Channels/Human Rights/Agreements/Agreements,/Channels/Human Rights/Survey/Survey,/Channels/Human Rights/HrCaricature/HrCaricature","News,HrReports,Issues,Articles,Term,Documents,Data,Agreements,Organizations,Survey,Caricature")
}

