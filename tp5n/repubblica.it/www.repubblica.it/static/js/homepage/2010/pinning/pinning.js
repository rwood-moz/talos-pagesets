//deleteCookie("rep-pinning");//RM

//start check for message on DOM Loaded
window.addEventListener("DOMContentLoaded", function(){ var alertP= new IEPinningAlert();alertP.init();},false);


function IEPinningAlert(){

var myAlert;
var cookieName="rep-pinning";

var ALLERT_DIV_ID = "alertWrapper";
var OAS_DIV_ID = "#wrapper-adv";
var BASE_URL = "/static/images/homepage/2010/pinning/";
var TOP = "0px"; //top px without oas
var LEFT = "33px"; //left px without oas
var ALERT_POSITION = "absolute";
var HIDEALLERT_TIME = "10000";//setTimeout to call hideAlert function

//if is present OAS domination
if($(OAS_DIV_ID).length>0){
	TOP = "0px"; //top px with oas
	LEFT = "50%"; //left px with oas
	ALERT_POSITION = "relative";
}


this.init=function()
{
     try {
	            if (window.external.msIsSiteMode() == false) {
	              this.start();
	            }
	            else {
	               //Already Pinned
	            }
	        }
	        catch (e) {
	            // Pinning not supported
	        }


};

this.start=function(){
            //if cookie hide message
			var IsCookie = readCookie(cookieName);

			if (!IsCookie){

                this.createHtml();
			    this.createStyle();
			    myAlert = document.getElementById(ALLERT_DIV_ID);
			    myAlert.style.top = 0 - myAlert.offsetHeight + 'px';

				showAlert();
			}
};



this.createHtml = function(){
    			function getBrowserLink(str){
					var tmp = str.split(',');
					return tmp[0];
				}

				function getBrowserImg(str){
					var tmp = str.split(',');
					return tmp[1];
				}

				//Div alertWrapper
				var divWrapper = document.createElement('div');
				divWrapper.setAttribute('id', ALLERT_DIV_ID);
				document.getElementsByTagName('body')[0].parentNode.insertBefore(divWrapper,document.getElementsByTagName('body')[0]);
//				document.getElementsByTagName('body')[0].appendChild(divWrapper);

				//Icon
				var pinImage = document.createElement('img');
				pinImage.setAttribute('id', 'pinImage');
				pinImage.setAttribute('class','msPinSite');
				pinImage.setAttribute('src', BASE_URL+'repubblica.png');
				pinImage.setAttribute('alt', 'Nuova funzionalità di IE9!');
				divWrapper.appendChild(pinImage);

				//Message text
                var msg="";

                if (navigator.userAgent.indexOf("Windows NT 6.0") !== -1){
                      msg="Aggiungi Repubblica allo Start Menù";
                  }
               else
                {
                 msg="Trascina l\'icona di Repubblica sulla barra delle applicazioni";
                }

                var p = document.createElement('p');
				p.appendChild(document.createTextNode(msg));
				divWrapper.appendChild(p);


				//add to start menu
				var ul = document.createElement('ul');
				divWrapper.appendChild(ul);

				//ICON items with links and images
				for (var browser in browserArray) {
					var li = document.createElement('li');
					ul.appendChild(li);

					var a = document.createElement('a');
					a.setAttribute('href', getBrowserLink(browserArray[browser]));
					a.appendChild(document.createTextNode("Oppure aggiungi Repubblica allo Start Menu"));
					li.appendChild(a);
				};

				var closeButton = document.createElement('button');
				closeButton.setAttribute('type','button');
				closeButton.onclick = function(){
					this.parentNode.style.display = 'none';
					createCookie(cookieName,'ok',1);
					};
				divWrapper.appendChild(closeButton);

				var spanButton = document.createElement('span');
				spanButton.appendChild(document.createTextNode('Chiudi'));
				closeButton.appendChild(spanButton);
			};

			//create style of alert
			this.createStyle = function(){
				var style = document.createElement('style');
				style.setAttribute("type", "text/css");
				document.getElementsByTagName('head')[0].appendChild(style);

				// css style
				var css = '#'+ALLERT_DIV_ID+'{ position:'+ALERT_POSITION+'; top:0; left:0; background: url('+BASE_URL+'bg.jpg) repeat-x 0 0; height:33px; width:100%; text-align:center;z-index:89}\n';
				css += '#'+ALLERT_DIV_ID+' img#pinImage{ padding:0 0 0 20px; display:inline; float:left;}\n';
				css += '#'+ALLERT_DIV_ID+' p{color:#000; font: bold 11px Arial, Helvetica, sans-serif; line-height:33px; display:inline; margin: 0 10px; float:left;  }\n';
				css += '#'+ALLERT_DIV_ID+' ul{ list-style:none; margin:0; padding:0; float:left;}\n';
				css += '#'+ALLERT_DIV_ID+' ul li { float:left; color:#FFFFFF; margin:0; padding:0;}\n';
				css += '#'+ALLERT_DIV_ID+' ul li a, #'+ALLERT_DIV_ID+' ul li a:visited {outline:none; background-color:#ffdd7f; border:1px #fe9a00 solid; padding:2px 4px; margin-left:20px; color:#000; font: bold 11px Arial, Helvetica, sans-serif; line-height:33px;}\n';
				css += '#'+ALLERT_DIV_ID+' ul li a:hover { background-color:#fff; color:#000}\n';
				css += '#'+ALLERT_DIV_ID+' ul li a img { border:0;margin-top:8px;}\n';
				css += '#'+ALLERT_DIV_ID+' span {width:100px!important; height:21px;position:absolute;right:20px;top:1px;font-size:11px;color:#003399; background:none !important}\n';
				css += '#'+ALLERT_DIV_ID+' button { position:absolute; top:6px; right:5px; width:100px; height:21px; background:transparent url('+BASE_URL+'close.jpg) no-repeat top right; border:0; cursor:pointer;}\n';

				style.styleSheet.cssText = css;
			};

			//show alert with anim
			function showAlert() {

				if(parseInt(myAlert.style.top) < 0){
					//myAlert.style.top = parseInt(myAlert.style.top) + 2 + 'px';
                    //myAlert.style.display="block";
					document.body.style.backgroundPosition= LEFT + " " + myAlert.offsetHeight + "px";
//					document.body.style.backgroundPosition= "50% " + myAlert.offsetHeight + "px";
					myAlert.style.top = '0px';
					setTimeout(showAlert,100); // call showAlert
				}
				else{
                   setTimeout(hideAlert,HIDEALLERT_TIME);// call hideAlert
				}
			};

			//Hide alert with anim
			function hideAlert() {
				document.body.style.backgroundPosition= LEFT+" "+TOP;
//				document.body.style.backgroundPosition= "50% 0px";
				if($(OAS_DIV_ID).length>0){
					myAlert.style.display="none";
				}else{
					$("#"+ALLERT_DIV_ID).fadeOut("slow");
				}
			};

			//icon array -> 'name' : 'url downloaddisabled, url immage'
			var browserArray = {
				'Windows Start Menu' :
					'javascript:window.external.msAddSiteMode(), '+BASE_URL+'add.gif',
			};



};

  //cookies
			function createCookie(name,value,days) {
				if (days) {
					var date = new Date();
					date.setTime(date.getTime()+(days*24*60*60*1000));
					var expires = "; expires="+date.toGMTString();
				}
				else var expires = "";
				document.cookie = name+"="+value+expires+"; path=/";
			};

			function readCookie(name) {
				var nameEQ = name + "=";
				var ca = document.cookie.split(';');
				for(var i=0;i < ca.length;i++) {
					var c = ca[i];
					while (c.charAt(0)==' ') c = c.substring(1,c.length);
					if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
				}
				return null;
			};

			function deleteCookie(name) {
				createCookie(name,"",-1);
			};
