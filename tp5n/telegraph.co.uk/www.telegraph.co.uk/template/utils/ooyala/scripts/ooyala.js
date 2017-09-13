	
	function getFlashMovie(movieName) {  
		var isIE = navigator.appName.indexOf("Microsoft") != -1;  
		return (isIE) ? window[movieName] : document[movieName];  
	} 

/* Controling the player from the bottom of the page
 * Displaying informations
 * Because in the html page no callback function was set for this player the default callback function is used "callbackFunction"
 */
 
	function callbackFunction(playerId, eventName, eventArgs){
		var ciecc,ttc,ecc,vc;

		switch(eventName) {
			case "playheadTimeChanged":
			  onPlayheadTimeChanged(eventArgs);
			  break;
			case "stateChanged":
			  onStateChanged(eventArgs);
			  break;
			case "currentItemEmbedCodeChanged":
			  onCurrentItemEmbedCodeChanged(eventArgs);
			  ciecc=eventArgs;
			  break;
			case "totalTimeChanged":
			  onTotalTimeChanged(eventArgs);
			  ttc=eventArgs;
			  break;
			case "embedCodeChanged":
			  onEmbedCodeChanged(eventArgs);
			  ecc=eventArgs;
			  break;
			case "volumeChanged":
			  onVolumeChanged(eventArgs);
			  break;
			case "apiReady": 
			  //note: apiReady event has no eventArgs (3rd call-back parameter)
			  onCurrentItemEmbedCodeChanged(ciecc);
			  onTotalTimeChanged(ttc);
			  onEmbedCodeChanged(ecc);
			  break;
		  }
	}
	
	function onPlayheadTimeChanged(eventArgs) {
		document.getElementById("playheadTime").innerHTML =
			eventArgs.playheadTime + " == "+getFlashMovie('myPlayer').getPlayheadTime();
	}

	
	function onStateChanged(eventArgs) {
		document.getElementById("state").innerHTML =
			eventArgs.state + " == " + getFlashMovie('myPlayer').getState();
	}
	
	function onVolumeChanged(eventArgs) {
		document.getElementById("volume").innerHTML =  eventArgs.volume + " == "+ getFlashMovie('myPlayer').getVolume();
	}

	function onTotalTimeChanged(eventArgs) {
		document.getElementById("totalTime").innerHTML =  eventArgs.totalTime + " == " + getFlashMovie('myPlayer').getTotalTime();
	}

	function onEmbedCodeChanged(eventArgs) {
		document.getElementById("embedCode").innerHTML = eventArgs.embedCode + " == " + getFlashMovie('myPlayer').getEmbedCode();
		document.getElementById("title").innerHTML = eventArgs.title + " == " + getFlashMovie('myPlayer').getTitle();
		document.getElementById("description").innerHTML = eventArgs.description + " == " + getFlashMovie('myPlayer').getDescription();
	}

	function onCurrentItemEmbedCodeChanged(eventArgs) {
		document.getElementById("currentItemEmbedCode").innerHTML = eventArgs.embedCode +" == " + getFlashMovie('myPlayer').getCurrentItemEmbedCode();
		document.getElementById("currentItemTitle").innerHTML = eventArgs.title +" == " + getFlashMovie('myPlayer').getCurrentItemTitle();
		document.getElementById("currentItemDescription").innerHTML = eventArgs.description +" == " + getFlashMovie('myPlayer').getCurrentItemDescription();
	}



/* Controling the players with carousels from the page
 * For these two players we have a callback function defined (with the same name "receiveTelegraphPlayerEvent") 
 * and this function will be used for controling the events received from the players
 */

var firstTimeRelatedMedia = true;

function receiveTelegraphPlayerEvent(playerId, eventName, eventParams)
{
	// Ooyala player object, call API setters/getters upon this object
	
	//var player = document.getElementById(playerId);
	var player = getFlashMovie(playerId);
	
	switch(eventName){
		
		case "adClicked":
			break;

		case "relatedMediaReady":
			/*
			//<<Removed Related Videos feature until Related Videos is more functional in Backlot
			
			if (player.showCarousel() == true && firstTimeRelatedMedia){
				firstTimeRelatedMedia = false;
				if (player.dynamicChannel() == ""){
					var videos = getRelatedItems(eventParams);
					if (videos.length > 0){
						document.getElementById("larrow_"+playerId).style.display = "block";
						document.getElementById("rarrow_"+playerId).style.display = "block";
					}
					var thumbnailHTML = generateThumbnailHTML(videos, playerId);
					document.getElementById("belt_"+playerId).innerHTML = thumbnailHTML;

					stepcarousel.setup({
					   galleryid: 'thumbnails_'+playerId, //id of carousel DIV
					   beltclass: 'belt', //class of inner "belt" DIV containing all the panel DIVs
					   panelclass: 'panel', //class of panel DIVs each holding content
					   autostep: {enable:false, moveby:0, pause:6000}, //auto scroll options
					   panelbehavior: {speed:500, wraparound:true, persist:false}, //speed, looping, cookies of scrolling
					   contenttype: ['inline'] //do not change
					 });
					 
					//for first video loaddisabled 
					var video = player.getCurrentItemEmbedCode();
					changeHighlight(player,video);
				}
			}
			
			//>>
			*/
			break;
		case "loaddisabledComplete":
		
			break;
			
		case "playComplete":
		
			break;
		case "apiReady": // wait for this event to be dispatched before making any API calls. 
			// loaddisabled thumbnails :)
			if (player.showCarousel() == true){
				if (player.dynamicChannel() != ""){
					var videos = getInfoOfAllChannelItems(player);
					if (videos.length > 0){
						document.getElementById("larrow_"+playerId).style.display = "block";
						document.getElementById("rarrow_"+playerId).style.display = "block";
					}
					var thumbnailHTML = generateThumbnailHTML(videos, playerId);
					document.getElementById("belt_"+playerId).innerHTML = thumbnailHTML;

					stepcarousel.setup({
					   galleryid: 'thumbnails_'+playerId, //id of carousel DIV
					   beltclass: 'belt', //class of inner "belt" DIV containing all the panel DIVs
					   panelclass: 'panel', //class of panel DIVs each holding content
					   autostep: {enable:false, moveby:0, pause:6000}, //auto scroll options
					   panelbehavior: {speed:500, wraparound:true, persist:false}, //speed, looping, cookies of scrolling
					   contenttype: ['inline'] //do not change
					 });
					 
					//for first video loaddisabled 
					var video = player.getCurrentItemEmbedCode();
					changeHighlight(player,video);
				}
			}
		break;
        
        case "currentItemEmbedCodeChanged":
			var stepToIndex=0;
			var videos = getInfoOfAllChannelItems(player);
			
            changeHighlight(player,eventParams.embedCode);

			//move carousel to highlighted video
			for (var i = 0; i < videos.length; i++)
			{
				if(videos[i].embedCode == eventParams.embedCode)
				{
					stepToIndex=i+1;
				}
			}
			if (stepToIndex == 1) //if switching to the first video, bounce back to front
			{
				stepcarousel.stepBy('thumbnails_'+playerId, videos.length);
			}
			else //slide to next video
			{
				stepcarousel.stepTo('thumbnails_'+playerId, stepToIndex);
			}
			
        break;
	}
}
// returns an array of video objects; video objects have two parameters: embedCode, and thumbnailURL
function getInfoOfAllChannelItems(player)
{
  var thumbnailWidth = 78; // Set thumbnail width here
  var thumbnailHeight = 58; // Set thumbnail height here
  var channelItems = player.getLineup();
  
  var urls = [];
  var embedCodes = [];
  var titles = []; 
  var videos = [];

  for (var i = 0; i < channelItems.length; i++)
  {
    urls.push(player.getPromoFor(channelItems[i].embedCode, thumbnailWidth, thumbnailHeight));
	embedCodes.push(channelItems[i].embedCode);
	
	titles.push(channelItems[i].title);
	var video = new Object();
	video.embedCode = embedCodes[i];
	video.thumbnailURL = urls[i];
	video.title = titles[i];
	videos.push(video);
	
  }
  return videos;
}


// returns an array of related video objects; video objects have two parameters: embedCode, and thumbnailURL
function getRelatedItems( eventParams)
{
var thumbnailWidth = 78; // Set thumbnail width here
  var thumbnailHeight = 58; // Set thumbnail height here
  var relatedItems = eventParams.relatedMedia;
  
  var urls = [];
  var embedCodes = [];
  var titles = []; 
  var hostedAtURLs = []; 
  var videos = [];
  
  for (var i = 0; i < relatedItems.length; i++)
  {
    urls.push(relatedItems[i].promo);
	embedCodes.push(relatedItems[i].embedCode);
	hostedAtURLs.push(relatedItems[i].hostedAtURL);
	
	titles.push(relatedItems[i].title);
	var video = new Object();
	video.embedCode = embedCodes[i];
	video.thumbnailURL = urls[i];
	video.title = titles[i];
	video.hostedAtURL = hostedAtURLs[i];
	
	videos.push(video);
	
  }
  return videos;
}


//creates html for thumnail images in form <div1><img1></div1>...<divN><imgN><divN>
function generateThumbnailHTML(videos, playerId)
{
  var html = "";
  var changeVideo = "";
  for (var i = 0; i < videos.length; i++)
  {
    changeembed = 'changeEmbed("' + playerId + '", "' + videos[i].embedCode + '", "' + videos[i].hostedAtURL + '")';
    html += "<a href='#' onclick='" + changeembed + ";return false' class='panel'>";
	html += "<img border='0' width='78px' height='58px' alt='" + videos[i].title + "' title='" + videos[i].title + "' id='" + videos[i].embedCode + "' src='" + videos[i].thumbnailURL + "' /></a>";
  }
  return html;
}

//changes video and also selects/deselects from the thumbnail belt
function changeHighlight(player, embedCode)
{
	// Deselect all currently highlighted thumbnails
	var currentlySelected = jQuery(".highlighted");
    
	if (currentlySelected.length > 0) 
	{
		currentlySelected[0].className="";
    }
    
    highlight(embedCode);
	
}
function changeEmbed(playerId, embedCode, hostedAtURL)
{
    var autoplay = true;
	//var player = document.getElementById(''+playerId);
	var player = getFlashMovie(playerId);
    
	//change video; since 07.01.2010 the parameter hostedAtURL was added and the logic for parsing this parameter is done by the player
	//this change is done for the related media videos which have defined the hostedAtURL parameter.
	//clicking on the thumbnail the hostedAtURL is loaddisableded.
	//to remove this change(tweak) just set the parameter hostedAtURL to an empty string ->  hostedAtURL="" or just uncomment the next line;
	hostedAtURL="";
	autoplay = player.changeCurrentItem(embedCode, hostedAtURL);

    //if autoplay is on, then automatically play video after switch
	//if (autoplay) player.playMovie();
}

//highlights currently playing video thumbnail
function highlight(embedCode){
	var element=document.getElementById(''+embedCode);
	element.className="highlighted";
}

function traceCall(message){
	alert("From flash - > " + message);
}
