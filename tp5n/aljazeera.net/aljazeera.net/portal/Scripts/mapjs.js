
function DL_GetElementTop(eElement) {
    if (!eElement && this) {
        eElement = this;
    }

    var nTopPos = eElement.offsetTop;
    var eParElement = eElement.offsetParent;
    while (eParElement != null) {
        nTopPos += eParElement.offsetTop;
        eParElement = eParElement.offsetParent;
    }
    return nTopPos;
}


function DL_GetElementLeft(eElement) {
    if (!eElement && this) // if argument is invalid
    { // (not specified, is null or is 0)
        eElement = this; // and function is a method
    } // identify the element as the method owner

    var nLeftPos = eElement.offsetLeft; // initialize var to store calculations
    var eParElement = eElement.offsetParent; // identify first offset parent element  
    while (eParElement != null) { // move up through element hierarchy
        nLeftPos += eParElement.offsetLeft; // appending left offset of each parent
        eParElement = eParElement.offsetParent; // until no more offset parents exist
    }
    return nLeftPos; // return the number calculated
}

function showSubMapMenu(x) 
{
    try
    {
        //document.getElementById('subMenuMap').style.display = "block";
	    switch (x) 
	    {
            case "ليبيا":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+10)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+10)+"px";
	        document.getElementById('Maptitle').innerHTML = "ليبيا";
	        document.getElementById('ArrowImg').src = "/portal/images/maparrow.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "30px";
//	        if (document.getElementById("hiddenhref").value == "/NR/exeres/7D8F32E8-464B-4B61-A053-39E79DFC9549.htm") 
//	        {
//	            //document.location.href = document.getElementById("hiddenhref").value;
//	            void (document.getElementById("hiddenhref").value,"ليبيا");
//	        }
//	        document.getElementById("hiddenhref").value = "/NR/exeres/7D8F32E8-464B-4B61-A053-39E79DFC9549.htm";
	        break;
	        
	        case "مصر":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+20)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+120)+"px";
	        document.getElementById('Maptitle').innerHTML = "مصر";
	        document.getElementById('ArrowImg').src = "/portal/images/maparrow.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "30px";
//	        if (document.getElementById("hiddenhref").value == "/NR/exeres/E00AD0DA-BAED-4301-939C-21E23CC46465.htm") {
//	            //document.location.href = document.getElementById("hiddenhref").value;
//	            void (document.getElementById("hiddenhref").value,"مصر");
//	        }
//	        document.getElementById("hiddenhref").value = "/NR/exeres/E00AD0DA-BAED-4301-939C-21E23CC46465.htm";
	        break;
	        
	        case "تونس":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+0)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+255)+"px";
	        document.getElementById('Maptitle').innerHTML = "تونس";
	        document.getElementById('ArrowImg').src = "/portal/images/maparrow2.png";
	        document.getElementById('mapArrow').className = "mapArrow2";
	        document.getElementById('mapArrow').style.top = "30px";
//	        if (document.getElementById("hiddenhref").value == "/NR/exeres/0F910354-5D4B-4F00-B2D2-D607131EB31E.htm") {
//	            //document.location.href = document.getElementById("hiddenhref").value;
//	            void (document.getElementById("hiddenhref").value,"تونس");
//	        }
//	        document.getElementById("hiddenhref").value = "/NR/exeres/0F910354-5D4B-4F00-B2D2-D607131EB31E.htm";
	        break;
	        
	        case "عراق":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+0)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+220)+"px";
	        document.getElementById('Maptitle').innerHTML = "العراق";
	        document.getElementById('ArrowImg').src = "/portal/images/maparrow.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "30px";
//	        if (document.getElementById("hiddenhref").value == "/NR/exeres/6B05AD86-3823-4884-9DBC-806564DFBBAC.htm") {
//	            //document.location.href = document.getElementById("hiddenhref").value;
//	            void (document.getElementById("hiddenhref").value,"العراق");
//	        }
//	        document.getElementById("hiddenhref").value = "/NR/exeres/6B05AD86-3823-4884-9DBC-806564DFBBAC.htm";
	        break;
	        
	        case "بحرين":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+16)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+284)+"px";
	        document.getElementById('Maptitle').innerHTML = "البحرين";
	        document.getElementById('ArrowImg').src = "/portal/images/Right2.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "66px";
//	        if (document.getElementById("hiddenhref").value == "/NR/exeres/987F32EF-2D00-49F4-9761-A59FCBE1FD7D.htm") {
//	            //document.location.href = document.getElementById("hiddenhref").value;
//	            void (document.getElementById("hiddenhref").value,"البحرين");
//	        }
//	        document.getElementById("hiddenhref").value = "/NR/exeres/987F32EF-2D00-49F4-9761-A59FCBE1FD7D.htm";
	        break;
	        
	        case "يمن":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+16)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+240)+"px";
	        document.getElementById('Maptitle').innerHTML = "اليمن";
	        document.getElementById('ArrowImg').src = "/portal/images/Right3.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "160px";
//	        if (document.getElementById("hiddenhref").value == "/NR/exeres/6AFA250B-ADC1-4515-95FC-03E761D5E43C.htm") {
//	            //document.location.href = document.getElementById("hiddenhref").value;
//	            void (document.getElementById("hiddenhref").value,"اليمن");
//	        }
	        document.getElementById("hiddenhref").value = "/NR/exeres/6AFA250B-ADC1-4515-95FC-03E761D5E43C.htm";
	        break;
	        
	        case "سودان":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+16)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+110)+"px";
	        document.getElementById('Maptitle').innerHTML = "السودان";
	        document.getElementById('ArrowImg').src = "/portal/images/Right2.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "120px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
	        case "صومال":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+18)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+250)+"px";
	        document.getElementById('Maptitle').innerHTML = "الصومال";
	        document.getElementById('ArrowImg').src = "/portal/images/Right4.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "200px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
	        case "سعودية":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+18)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+230)+"px";
	        document.getElementById('Maptitle').innerHTML = "السعودية";
	        document.getElementById('ArrowImg').src = "/portal/images/Right2.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "95px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
	        case "أردن":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+18)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+180)+"px";
	        document.getElementById('Maptitle').innerHTML = "الأردن";
	        document.getElementById('ArrowImg').src = "/portal/images/maparrow.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "30px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
		    case "سوريا":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+0)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+180)+"px";
	        document.getElementById('Maptitle').innerHTML = "سوريا";
	        document.getElementById('ArrowImg').src = "/portal/images/maparrow.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "10px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
		    case "فلسطين":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+0)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+165)+"px";
	        document.getElementById('Maptitle').innerHTML = "فلسطين";
	        document.getElementById('ArrowImg').src = "/portal/images/maparrow.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "40px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
			case "لبنان":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+0)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+175)+"px";
	        document.getElementById('Maptitle').innerHTML = "لبنان";
	        document.getElementById('ArrowImg').src = "/portal/images/maparrow.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "20px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
		    case "كويت":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+15)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+255)+"px";
	        document.getElementById('Maptitle').innerHTML = "الكويت";
	        document.getElementById('ArrowImg').src = "/portal/images/maparrow.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "43px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
		    case "قطر":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+15)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+288)+"px";
	        document.getElementById('Maptitle').innerHTML = "قطر";
	        document.getElementById('ArrowImg').src = "/portal/images/Right2.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "75px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
		    case "إمارات عربية متحدة":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+15)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+305)+"px";
	        document.getElementById('Maptitle').innerHTML = "الإمارات";
	        document.getElementById('ArrowImg').src = "/portal/images/Right2.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "92px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
		    case "عُمان":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+15)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+325)+"px";
	        document.getElementById('Maptitle').innerHTML = "عُمان";
	        document.getElementById('ArrowImg').src = "/portal/images/Right3.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "105px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
		    case "جزائر":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+0)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+246)+"px";
	        document.getElementById('Maptitle').innerHTML = "الجزائر";
	        document.getElementById('ArrowImg').src = "/portal/images/Left2.png";
	        document.getElementById('mapArrow').className = "mapArrow2";
	        document.getElementById('mapArrow').style.top = "70px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
		    case "مغرب":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+0)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+150)+"px";
	        document.getElementById('Maptitle').innerHTML = "المغرب";
	        document.getElementById('ArrowImg').src = "/portal/images/maparrow2.png";
	        document.getElementById('mapArrow').className = "mapArrow2";
	        document.getElementById('mapArrow').style.top = "30px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
			case "موريتانيا":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+0)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+130)+"px";
	        document.getElementById('Maptitle').innerHTML = "موريتانيا";
	        document.getElementById('ArrowImg').src = "/portal/images/Left3.png";
	        document.getElementById('mapArrow').className = "mapArrow2";
	        document.getElementById('mapArrow').style.top = "140px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	        
	        case "جيبوتي":
	        var mTop = DL_GetElementTop(document.getElementById('jazMap'));
	        var mLeft = DL_GetElementLeft(document.getElementById('jazMap'));
	        document.getElementById('subMenuMap').style.top = (mTop+15)+"px";
	        document.getElementById('subMenuMap').style.left = (mLeft+230)+"px";
	        document.getElementById('Maptitle').innerHTML = "جيبوتي";
	        document.getElementById('ArrowImg').src = "/portal/images/Right4.png";
	        document.getElementById('mapArrow').className = "mapArrow";
	        document.getElementById('mapArrow').style.top = "190px";
//	        document.getElementById('hiddenhref').value = void(0);
	        break;
	    }
	}
    catch(err)
    {
    }
}
	
function hideSubMapMenu() 
{ 
    try
    {
	    document.getElementById('subMenuMap').style.display = "none";
//	    document.getElementById('hiddenhref').value = void(0);
	}
	catch(err){}
}
