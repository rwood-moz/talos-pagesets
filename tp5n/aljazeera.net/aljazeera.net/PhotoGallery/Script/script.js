function StoreOrder(strListItem, ImagesOrderID)
{
	var index = 0;
	var optionsList = document.getElementById(strListItem);
	var strOrder  = new String();
	
	for(index = 0; index < optionsList.options.length; index++)
	{
		strOrder += optionsList.options[index].value + ",";
	}	
	strOrder = strOrder.substring(0, strOrder.length-1);
	
	document.getElementById(ImagesOrderID).value = strOrder;
}

function StorePaths(strListItem, ImagesOrderID)
{
	var index = 0;
	var optionsList = document.getElementById(strListItem);
	var strOrder  = new String();
	
	for(index = 0; index < optionsList.options.length; index++)
	{
		strOrder += optionsList.options[index].text + ",";
	}	
	strOrder = strOrder.substring(0, strOrder.length-1);
	
	return strOrder;
}

function StoreCaptions(strListItem, ImagesOrderID)
{
	var index = 0;
	var optionsList = document.getElementById(strListItem);
	var strOrder  = new String();
	
	for(index = 0; index < optionsList.options.length; index++)
	{
		strOrder += optionsList.options[index].text + "##";
	}	
	strOrder = strOrder.substring(0, strOrder.length-2);
	
	return strOrder;
}

function PreviewGallery(strListItem, ImagesOrderID, albumName , strCaptionItem , hdnPathsID , hdnCaptionsID)
{
	StoreOrder(strListItem, ImagesOrderID);
	document.getElementById(hdnPathsID).value = StorePaths(strListItem, ImagesOrderID);
	document.getElementById(hdnCaptionsID).value = StoreCaptions(strCaptionItem, ImagesOrderID);
	OpenPreview(albumName);
}

function OpenBrowseImage() {	
	
	// currently Gallery is mapped to 127.0.0.1 (Localhost)
	strSearchImageURL = '/PhotoGallery/kEngine/Supportpages/BrowseImages.aspx?wbc_phname=_KtuluBodyplaceHolder&SEARCHMODE=MULTIPLEIMAGES&CreateGalleryMode=true'
	void(strSearchImageURL,'','height=600,width=700,resizable=yes,status=no,scrollbars=yes,toolbar=no,menubar=no,location=no,top=190,left=250')
}	

function getQueryString(strParam)
	{
		var Params
		var i
		i=0 
		Params = unescape (document.location.search).split("&")
		for (i =0; i< Params.length; i++)
		{
			if (Params[i].indexOf(strParam) > -1)
			{
				return Params[i].split("=")[1]
			}
		}
	}
	
function OpenPreview(albumName) 
{
	var strAlbumName;
	strAlbumName = getQueryString("album");
	if (strAlbumName != undefined) 
	{
		void('/PhotoGallery/Aspx/Show.aspx?PreviewMode=true&album=' + strAlbumName ,'','height=400,width=700,resizable=yes,status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=50,left=50')
	} 
	else if(albumName != null)
	{
		void('/PhotoGallery/Aspx/Show.aspx?PreviewMode=true&album=' + albumName ,'','height=400,width=700,resizable=yes,status=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,top=50,left=50')
	}
	else 
	{
		alert("Gallery Not Available at This Stage...\"" + albumName + "\"")
	}
}

/**************************************************************************
* Function    : MoveUp
* Description :	Moves item/group in a list box up.
* Parameters  :	strListItem - the list to be used to select an image.
**************************************************************************/
function MoveUp(strListItem,strListCaption)	
{	
	MoveVertically(strListItem,strListCaption, true); 
}

/**************************************************************************
* Function    :	MoveDown
* Description :	Moves item/group in a list box down.
* Parameters  :	strListItem - the list to be used to select an image.
**************************************************************************/
function MoveDown(strListItem,strListCaption)	
{	
	MoveVertically(strListItem,strListCaption, false);
}

/**************************************************************************
* Function    :	MoveVertically
* Description :	Preview the current selected image.
* Parameters  :	Move images vertically in the list
**************************************************************************/
function MoveVertically(strListItem,strListCaption,blnUP) {

	var intMovedItem ;
	var TempPath , TempCaption, TempID ;
	var intSelIndex = document.getElementById(strListItem).selectedIndex ;
	var intItemsCount = document.getElementById(strListItem).length ;
	if (intSelIndex == -1) return false;
	
	if (blnUP) {
		if (intSelIndex == -1) return false;
		intMovedItem = intSelIndex - 1 ;
	} else {
		if (intSelIndex == (intItemsCount - 1)) return false;
		intMovedItem = intSelIndex + 1 ;
	}
	
	if (intMovedItem == intItemsCount) return false;
	if (intMovedItem < 0) return false;
	
	TempPath = document.getElementById(strListItem).options[intMovedItem].text ;
	TempID = document.getElementById(strListItem).options[intMovedItem].value ;
	TempCaption = document.getElementById(strListCaption).options[intMovedItem].text ;
		
	document.getElementById(strListItem).options[intMovedItem].value = document.getElementById(strListItem).options[intSelIndex].value;
	document.getElementById(strListItem).options[intMovedItem].innerHTML = document.getElementById(strListItem).options[intSelIndex].innerHTML;
	document.getElementById(strListCaption).options[intMovedItem].value = document.getElementById(strListCaption).options[intSelIndex].value;
	document.getElementById(strListCaption).options[intMovedItem].innerHTML = document.getElementById(strListCaption).options[intSelIndex].innerHTML;
	
	document.getElementById(strListItem).options[intSelIndex].value = TempID ;
	document.getElementById(strListItem).options[intSelIndex].text = TempPath;
	document.getElementById(strListItem).options[intSelIndex].innerHTML = TempPath;

	document.getElementById(strListCaption).options[intSelIndex].value = TempCaption;
	document.getElementById(strListCaption).options[intSelIndex].innerHTML = TempCaption;

	// Select the moved Item
	document.getElementById(strListItem).options[intMovedItem].selected = true ;

	// create an XML file that holds the current added images.
	var strListContent
	strListContent = ""
	strListContent += "<?xml version='1.0'?>"
	strListContent += "<root>"
	for (var index = 0;index<document.getElementById(strListItem).length;index++){
	
	strListContent += "<image>"
	strListContent += "<path>"
	strListContent += document.getElementById(strListItem).options[index].value
	strListContent += "</path>"
	strListContent += "<caption>"
	strListContent += document.getElementById(strListCaption).options[index].value
	strListContent += "</caption>"
	strListContent += "</image>"
		
	}
	
	strListContent += "</root>"
	
	document.getElementById("lstItems").value = strListContent;
	
	OrderChanged = true;
}

/**************************************************************************
* Function    :	PreviewImage
* Description :	Preview the current selected image.
* Parameters  :	strListItem - the list to be used to select an image.
**************************************************************************/
function PreviewImage(strListItem){

var intSelIndex ;
var strPath = new String();

/*
if ((document.getElementById("imgPreview").width > 300) || (document.getElementById("imgPreview").width == 0)) {
document.getElementById("imgPreview").width = 300 ;
}

if (document.getElementById("imgPreview").height > 200) {
var intOriginalHeight = document.getElementById("imgPreview").height ;
var intNewHeight = 200 ;
document.getElementById("imgPreview").height = intNewHeight ;
document.getElementById("imgPreview").width = (intNewHeight * 300)/intOriginalHeight ;
}
*/

intSelIndex	= document.getElementById(strListItem).selectedIndex ;

strPath = document.getElementById(strListItem).options[intSelIndex].text;
strPath = strPath.substring(strPath.indexOf("\\mritems\\", 0 ), strPath.length);
document.getElementById("imgPreview").src  = strPath;

var intOriginalWidth = document.getElementById("imgPreview").style.width ;
var intOriginalHeight = document.getElementById("imgPreview").style.height ;

if (intOriginalWidth > intOriginalHeight) {
	var intNewWidth = 300 ;
	document.getElementById("imgPreview").width = intNewWidth ;
	document.getElementById("imgPreview").height = (intNewWidth * intOriginalHeight)/intOriginalWidth ;
}
else {
	var intNewHeight = 200 ;
	document.getElementById("imgPreview").widht = (intNewHeight * intOriginalWidth)/intOriginalHeight ;
	document.getElementById("imgPreview").height = intNewHeight ;
}

document.getElementById("imgPreview").style.display  = 'block' ;
}


function EditIamgeDesc(LstImagePaths,LstImagesDesc, txtImageURL, txtDesc)
{
	//debugger;
	var intSelIndex = document.getElementById(LstImagePaths).selectedIndex ;
	//alert(document.getElementById(LstImagePaths)(intSelIndex).text)
	document.getElementById(txtImageURL).innerText = document.getElementById(LstImagePaths)[intSelIndex].text.substring(document.getElementById(LstImagePaths)[intSelIndex].text.indexOf("\Galleries"));
	document.getElementById(txtDesc).innerText = document.getElementById(LstImagesDesc)[intSelIndex].text;
	//MoveOption(document.getElementById(LstImagePaths), document.getElementById(LstImagesDesc));	
}


function AddImagePath(strImagePaths)
{
	//debugger;
	/*var strImagePath;
	var flag;
	var objTargetElement;
	var Arr = strImagePaths.split(";");
	for (var i=0;i<Arr.length-1;i++)
	{
		strImagePath = Arr[i]; 
		objTargetElement = document.getElementById("CreateGallery1_ModifyGallery1_LstImagePaths");
		flag="false";
		for(var counter=0;counter<objTargetElement.length;counter++)
		{
			if (objTargetElement.options[counter].text == strImagePath)
			{
				flag = "true";
				break;
			}
		}
		if (flag=="false")
		{
			var intTargetLen = objTargetElement.length++;    
			objTargetElement.options[intTargetLen].text = strImagePath; 
			objTargetElement.options[intTargetLen].value = strImagePath; 
		    
			objTargetElement = document.getElementById("CreateGallery1_ModifyGallery1_LstImagesDesc")
			intTargetLen = objTargetElement.length++;    
			objTargetElement.options[intTargetLen].text = ""; 
			objTargetElement.options[intTargetLen].value = ""; 
			
			// create an XML file that holds the current added images.
			var strListContent;
			strListContent = "";
			strListContent += "<?xml version='1.0'?>";
			strListContent += "<root>";
			for (var index = 0;index<document.getElementById("CreateGallery1_ModifyGallery1_LstImagePaths").length;index++){
			
				strListContent += "<image>";
				strListContent += "<path>";
				strListContent += document.getElementById("CreateGallery1_ModifyGallery1_LstImagePaths").options[index].value;
				strListContent += "</path>";
				strListContent += "<caption>";
				strListContent += document.getElementById("CreateGallery1_ModifyGallery1_LstImagesDesc").options[index].value;
				strListContent += "</caption>";
				strListContent += "</image>";
					
			}
			
			strListContent += "</root>";
			//debugger;
			document.getElementById("lstItems").value = strListContent;
			document.getElementById("CreateGallery1_ModifyGallery1_btnDelete").disabled = false;
			document.getElementById("CreateGallery1_ModifyGallery1_btnBuildGallery").disabled = false;
		}
	}*/
	 document.getElementById("CreateGallery1_ModifyGallery1_txtImageURL").innerText = strImagePaths;
}
 function ConvertToArabicNum(Num)
 {
	/* 
	Private properties 
	----------------------------------------------------------------*/
	//Created By : Moayad Al-Saleh
	//Modified By : Ahmad Zeidan
	//List Style Type
	//Three styles: numeric
	this.list_style_type="numeric";

	//Arabic Digits
	this.ar_digits = new Array();
	this.ar_digits[0]="&#1632;";
	this.ar_digits[1]="&#1633;";
	this.ar_digits[2]="&#1634;";
	this.ar_digits[3]="&#1635;";
	this.ar_digits[4]="&#1636;";
	this.ar_digits[5]="&#1637;";
	this.ar_digits[6]="&#1638;";
	this.ar_digits[7]="&#1639;";
	this.ar_digits[8]="&#1640;";
	this.ar_digits[9]="&#1641;";

	Num = Num.toString();
	translated_n = "";
	var Length = Num.length
	if(Num <= 9)
	{
		translated_n=this.ar_digits[Num];	
	}
	else
	{
		for(i=0; i<Length; i++) 
		{	
			translated_n = translated_n + this.ar_digits[Num.charAt(i)]; 
		}
	}
	return translated_n.toString();  
} //end of class

function ChangeNumbersPhotoGalleryTitle(Control)
{
	var ICount ,I,FinalStr,ValueStr
	ICount=Control.length
	ValueStr=new String()
	FinalStr=new String()
	ValueStr=Control
	FinalStr=''
	for (I=0;I<ICount;I++)
	{
		try
		{
			if (ConvertToArabicNum(ValueStr.substring(I,I+1))=='undefined')
			{
				FinalStr = FinalStr.toString() + ValueStr.substring(I,I+1)
			}
			else
			{
				FinalStr = FinalStr.toString() + ConvertToArabicNum(ValueStr.substring(I,I+1))
			}			
		}
		catch(err)
		{
			FinalStr = FinalStr.toString() + ValueStr.substring(I,I+1)
		}
	}
	
	void(FinalStr)
}
function DrowPage()
		{
			//debugger;
			var intPageNo
			if (document.getElementById('gallery1_currentpage'))
				intPageNo = Math.floor((parseInt(document.getElementById('gallery1_currentpage').value)-1)/10);
			else
				intPageNo = 0
			var intPageSize=10;
			var intTotalImages 
			if (document.getElementById('hdnTotalImages'))
				intTotalImages = document.getElementById('hdnTotalImages').value;
			
			
			var counter;
			var intStart = 10*intPageNo;
			var strtest="<table width='30%' border='0' height='20'><tr>";
			
			if (intPageNo>0)
			{
				strtest += "<td class='Gallerypaging' align='center'><a href='javascript:proceed(\"Next\",\"" + (intStart) + "\")'>...</a></td>";
			}
			for (counter = intStart+1; counter<intStart+intPageSize+1;counter++)
			{
				if (counter > intTotalImages)
					break;
				if (counter == parseInt(document.getElementById('gallery1_currentpage').value))
				{
					strtest += "<td class='Gallerypaging' align='center'><a style='COLOR: blue' href='javascript:proceed(\"Next\",\"" + counter + "\")'>" + ConvertToArabicNum(counter) + "</a></td>";
				}
				else
				{
					strtest += "<td class='Gallerypaging' align='center'><a href='javascript:proceed(\"Next\",\"" + counter + "\")'>" + ConvertToArabicNum(counter) + "</a></td>";
				}
			}
			
			if (intStart+intPageSize<intTotalImages)
			{
				strtest += "<td class='Gallerypaging' align='center'><a href='javascript:proceed(\"Next\",\"" + counter + "\")'>...</a></td></tr>";
			}
			if(document.getElementById('trPages'))
				document.getElementById('trPages').innerHTML=strtest + "</tr></table>";
		}
		
		function UpdateQueryString(strURL,strQueryString,strValue)
		{
			if (strURL.indexOf('?')==-1)
			{
				strURL += '?' + strQueryString + '=' + strValue;
				return strURL;
			}
			
			if (strURL.indexOf(strQueryString) ==-1)
			{
				strURL +=  '&' + strQueryString + '=' + strValue;
				return strURL;
			}
			var strQueries;
			var strQuery_Value;
			var strArr;
			var i;
			
			strQueries = strURL.substring(strURL.indexOf('?')+1);
			strArr = strQueries.split('&');
			strURL = strURL.substring(0,strURL.indexOf('?')+1);
			for (i=0;i<strArr.length;i++)
			{
				strQuery_Value = strArr[i];
				if (strQuery_Value.split('=')[0] == strQueryString)
				{
					strURL += strQueryString + '=' + strValue;
				}	
				else
				{
					strURL += strQuery_Value;
				}
				strURL += '&';
			}
			strURL = strURL.substring(0,strURL.length-1);
			return strURL;
		}

		function NewShowGalleryURL(strURL,strCurrentPage,strSlideShow)
		{
			//debugger;
			strURL = UpdateQueryString(strURL,'currentPage',strCurrentPage);
			strURL = UpdateQueryString(strURL,'slidshow',strSlideShow);
			document.location.href = strURL;
		}

function SetFocus (strBtnSearchID,strTextPageSizeId)
			{
				if (event.keyCode == 13)
				{
					document.getElementById(strBtnSearchID).focus();
					document.getElementById(strBtnSearchID).click();
				}
			
				
			}