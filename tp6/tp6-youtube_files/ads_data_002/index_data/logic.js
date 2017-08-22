
var creative = {};

var video_1_url = "https://youtu.be/eIy4wSxSEwI";
var video_2_url = "https://youtu.be/12D5iK52D34";
var video_3_url = "https://youtu.be/it8WPSqAm0Q";
var video_4_url = "https://youtu.be/yPQ-mpQ1NJo";

var currentVideoNum;
var video_logo_anim = document.getElementById("logo_anim_video");
var checkVideoLoaded = false;
var show_called_already = false;
var replayCount = 0;
var plug_num_images = 30;
var plug_image_counter = 1;
var plugDrag = false;
var logoAnim_playing = false;
var yt_player_visible = false;
var hover_logo = false;
var plugin_trigger_interval;
var videogallery_interval;
var flicker_plugin_count = 0;

var stopEverything = false;

/**
 * Window onload handler.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

/**
 * Initializes the ad components
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('main-container');
  creative.dom.exit = document.getElementById('exit');
  
  creative.dom.movieGallery = document.getElementById('movie-gallery');
  creative.dom.movieGalleryClose = document.getElementById('movie-gallery-close');
  creative.dom.movieGalleryPrevious = document.getElementById('movie-gallery-previous');
  creative.dom.movieGalleryNext = document.getElementById('movie-gallery-next');
  creative.dom.videoThumbnail1 = document.getElementById('video-thumb1');
  creative.dom.videoThumbnail2 = document.getElementById('video-thumb2');
  creative.dom.videoThumbnail3 = document.getElementById('video-thumb3');
  creative.dom.videoThumbnail4 = document.getElementById('video-thumb4');
  
  creative.dom.logo = document.getElementById('logo');
  creative.dom.introHeadline = document.getElementById('headline1');
  creative.dom.introHeadline_b = document.getElementById('headline1b');
  creative.dom.introHeadline_c = document.getElementById('headline1c');
  
  creative.dom.plugSequence = document.getElementById('plug-sequence');
  creative.dom.logoInteract = document.getElementById('logo-interact');
  creative.dom.videoLogoAnimContainer = document.getElementById('video-container-logo_anim');
}

/**
 * Ad initialisation.
 */
function init() {

  addListeners();

  // Polite loading
  if (Enabler.isVisible()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {
  creative.dom.exit.addEventListener('click', exitClickHandler);
  creative.dom.logo.addEventListener('click', exitClickHandler);
  creative.dom.plugSequence.addEventListener('click', exitClickHandler);
  document.getElementById('movie-gallery-title').addEventListener('click', exitClickHandler);
  document.getElementById('movie-gallery-title').addEventListener('click', exitClickHandler);
  document.getElementsByClassName('headline1')[0].addEventListener('click', exitClickHandler);
  document.getElementById('logo_anim_video').addEventListener('click', exitClickHandler);
  
  
  
  creative.dom.videoThumbnail1.addEventListener('click', function(){videoThumbnailClickHandler(1);},'false');
  creative.dom.videoThumbnail2.addEventListener('click', function(){videoThumbnailClickHandler(2);},'false');
  creative.dom.videoThumbnail3.addEventListener('click', function(){videoThumbnailClickHandler(3);},'false');
  creative.dom.videoThumbnail4.addEventListener('click', function(){videoThumbnailClickHandler(4);},'false');
  
  creative.dom.movieGalleryClose.addEventListener('click', youtubePlayerCloseHandler);
  creative.dom.movieGalleryPrevious.addEventListener('click', function(){showNextVideo(-1);});
  creative.dom.movieGalleryNext.addEventListener('click', function(){showNextVideo(1);});
  
  document.getElementById('plug-drag').addEventListener('click', plug_drag_clickHandler);
  document.getElementById('plug-drag').addEventListener('mouseover', plug_drag_overHandler);
  document.getElementById('plug-drag').addEventListener('mouseout', plug_drag_outHandler);
  
  creative.dom.logoInteract.addEventListener('mouseover', logo_interact_mouseoverHandler);
  creative.dom.logoInteract.addEventListener('mouseout', logo_interact_mouseoutHandler);
  creative.dom.logoInteract.addEventListener('click', logo_interact_clickHandler);
  
  document.getElementById("plug_logo_container").addEventListener("webkitAnimationEnd", cssAnim_floatEndFunction);
  document.getElementById("plug_logo_container").addEventListener("animationend", cssAnim_floatEndFunction);
  document.getElementById("plug_logo_scale_container").addEventListener("webkitAnimationEnd", cssAnim_scaleEndFunction);
  document.getElementById("plug_logo_scale_container").addEventListener("animationend", cssAnim_scaleEndFunction);

}

/**
 *  Shows the ad.
 */
function show() {
  
  console.log("show");
  if(checkVideoLoaded == true)
  {
    creative.dom.exit.style.display = "block";
    creative.dom.logo.style.display = "block";
    creative.dom.videoLogoAnimContainer.style.display = "block";
    fade_in("#headline1",750)
    fade_in_out("#headline1a",750)
    fade_in_out("#headline1b",750)
    
    setTimeout(function(){fade_in("#plug-sequence");document.getElementById('plug-drag').style.display = "block";},1800);
    
    plugin_trigger_interval = setTimeout(flicker_plugin_headline,3000);
  }else
  {
    show_called_already = true;
  }
  
}

function flicker_plugin_headline()
{
  plugin_trigger_interval = setTimeout(flicker_plugin_headline,1500);
  
  
  //auto plug if no interactoin after 10s
  if(flicker_plugin_count == 5)
  {
    clearInterval(plugin_trigger_interval);
    
    Enabler.counter('No plug interaction - autoplay');
    replayCount = 2;
    document.getElementById('plug-drag').style.display = "none";
    document.getElementById('plug-sequence-overlay').style.display = "none";
    movePlugToLogo();
  }else
  {
    fade_in_out("#headline_plugin_1a",0)
    fade_in_out("#headline_plugin_1b",0)
    fade_in_out("#plug-sequence-overlay",0)
    flicker_plugin_count++;
  }

}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
  
  stopEverything = true;
  // *** CHANGE TO ALL PLAYERS **************** /
  if (creative.dom.ytplayer1 != null) {
    creative.dom.ytplayer1.pause();
    // creative.dom.ytplayer0.seek(0);
  }
  if (creative.dom.ytplayer2 != null) {
    creative.dom.ytplayer2.pause();
    // creative.dom.ytplayer0.seek(0);
  }
  if (creative.dom.ytplayer3 != null) {
    creative.dom.ytplayer3.pause();
    // creative.dom.ytplayer0.seek(0);
  }
  if (creative.dom.ytplayer4 != null) {
    creative.dom.ytplayer4.pause();
    // creative.dom.ytplayer0.seek(0);
  }
  
  clearInterval(plugin_trigger_interval);
  video_logo_anim.pause();
  showEndFrame();
  
  Enabler.exit('BackgroundExit');
  interaction_tracking();
}
/**
 * Shows the YT player.
 */

function showYTPlayer1(containerId) {
  
  document.getElementById(containerId).style.display = 'block';
  
  if (!creative.dom.ytplayer1) {
    creative.ytplayer1Ended = false;
    creative.dom.ytplayer1 = document.createElement('gwd-youtube');
    
    var ytp = creative.dom.ytplayer1;
    ytp.setAttribute('id', 'ytp-1');
    ytp.setAttribute('video-url', video_1_url);
    ytp.setAttribute('autoplay', 'standard'); // none, standard, preview, intro.
    //ytp.setAttribute('preview-duration', '10'); // Only for &#39;preview&#39; autoplay mode.
    //ytp.setAttribute('muted', 'true');
    // Adformat parameter for Mastheads.
    ytp.setAttribute('adformat', '1_8');
    ytp.setAttribute('controls', 'autohide'); // none, show, autohide.
    document.getElementById(containerId).appendChild(ytp);

    ytp.addEventListener('playpressed', function() {
      if (ytp.a.isMuted()) {
        ytp.toggleMute();
      }
      if (creative.ytplayer1Ended) {
        creative.ytplayer1Ended = false;
        Enabler.counter('YTP 1 replay', true);
      }
      Enabler.counter('YTP 1 play pressed', true);
    }, false);
    ytp.addEventListener('paused', function() {
      Enabler.counter('YTP 1 paused', true);
    }, false);
    ytp.addEventListener('ended', function() {
      Enabler.counter('YTP 1 ended', true);
      creative.ytplayer1Ended = true;
    }, false);
    ytp.addEventListener('viewed0percent', function() {
      Enabler.counter('YTP 1 viewed 0%');
    }, false);
    ytp.addEventListener('viewed25percent', function() {
      Enabler.counter('YTP 1 viewed 25%');
    }, false);
    ytp.addEventListener('viewed50percent', function() {
      Enabler.counter('YTP 1 viewed 50%');
    }, false);
    ytp.addEventListener('viewed75percent', function() {
      Enabler.counter('YTP 1 viewed 75%');
    }, false);
    ytp.addEventListener('viewed100percent', function() {
      Enabler.counter('YTP 1 viewed 100%');
    }, false);
  }
  else {
    creative.dom.ytplayer1.style.display = 'block';
    //console.log("resume");
    creative.dom.ytplayer1.seek(0);
    creative.dom.ytplayer1.play();
  }
}

function showYTPlayer2(containerId) {
  
  document.getElementById(containerId).style.display = 'block';
  
  if (!creative.dom.ytplayer2) {
    creative.ytplayer2Ended = false;
    creative.dom.ytplayer2 = document.createElement('gwd-youtube');
    
    var ytp = creative.dom.ytplayer2;
    ytp.setAttribute('id', 'ytp-2');
    ytp.setAttribute('video-url', video_2_url);
    ytp.setAttribute('autoplay', 'standard'); // none, standard, preview, intro.
    //ytp.setAttribute('preview-duration', '10'); // Only for &#39;preview&#39; autoplay mode.
    //ytp.setAttribute('muted', 'true');
    // Adformat parameter for Mastheads.
    ytp.setAttribute('adformat', '1_8');
    ytp.setAttribute('controls', 'autohide'); // none, show, autohide.
    document.getElementById(containerId).appendChild(ytp);

    ytp.addEventListener('playpressed', function() {
      if (ytp.a.isMuted()) {
        ytp.toggleMute();
      }
      if (creative.ytplayer2Ended) {
        creative.ytplayer2Ended = false;
        Enabler.counter('YTP 2 replay', true);
      }
      Enabler.counter('YTP 2 play pressed', true);
    }, false);
    ytp.addEventListener('paused', function() {
      Enabler.counter('YTP 2 paused', true);
    }, false);
    ytp.addEventListener('ended', function() {
      Enabler.counter('YTP 2 ended', true);
      creative.ytplayer2Ended = true;
    }, false);
    ytp.addEventListener('viewed0percent', function() {
      Enabler.counter('YTP 2 viewed 0%');
    }, false);
    ytp.addEventListener('viewed25percent', function() {
      Enabler.counter('YTP 2 viewed 25%');
    }, false);
    ytp.addEventListener('viewed50percent', function() {
      Enabler.counter('YTP 2 viewed 50%');
    }, false);
    ytp.addEventListener('viewed75percent', function() {
      Enabler.counter('YTP 2 viewed 75%');
    }, false);
    ytp.addEventListener('viewed100percent', function() {
      Enabler.counter('YTP 2 viewed 100%');
    }, false);
  }
  else {
    creative.dom.ytplayer2.style.display = 'block';
    creative.dom.ytplayer2.seek(0);
    creative.dom.ytplayer2.play();
  }
}

function showYTPlayer3(containerId) {
  
  document.getElementById(containerId).style.display = 'block';
  
  if (!creative.dom.ytplayer3) {
    creative.ytplayer3Ended = false;
    creative.dom.ytplayer3 = document.createElement('gwd-youtube');
    
    var ytp = creative.dom.ytplayer3;
    ytp.setAttribute('id', 'ytp-3');
    ytp.setAttribute('video-url', video_3_url);
    ytp.setAttribute('autoplay', 'standard'); // none, standard, preview, intro.
    //ytp.setAttribute('preview-duration', '10'); // Only for &#39;preview&#39; autoplay mode.
    //ytp.setAttribute('muted', 'true');
    // Adformat parameter for Mastheads.
    ytp.setAttribute('adformat', '1_8');
    ytp.setAttribute('controls', 'autohide'); // none, show, autohide.
    document.getElementById(containerId).appendChild(ytp);

    ytp.addEventListener('playpressed', function() {
      if (ytp.a.isMuted()) {
        ytp.toggleMute();
      }
      if (creative.ytplayer3Ended) {
        creative.ytplayer3Ended = false;
        Enabler.counter('YTP 3 replay', true);
      }
      Enabler.counter('YTP 3 play pressed', true);
    }, false);
    ytp.addEventListener('paused', function() {
      Enabler.counter('YTP 3 paused', true);
    }, false);
    ytp.addEventListener('ended', function() {
      Enabler.counter('YTP 3 ended', true);
      creative.ytplayer3Ended = true;
    }, false);
    ytp.addEventListener('viewed0percent', function() {
      Enabler.counter('YTP 3 viewed 0%');
    }, false);
    ytp.addEventListener('viewed25percent', function() {
      Enabler.counter('YTP 3 viewed 25%');
    }, false);
    ytp.addEventListener('viewed50percent', function() {
      Enabler.counter('YTP 3 viewed 50%');
    }, false);
    ytp.addEventListener('viewed75percent', function() {
      Enabler.counter('YTP 3 viewed 75%');
    }, false);
    ytp.addEventListener('viewed100percent', function() {
      Enabler.counter('YTP 3 viewed 100%');
    }, false);
    
  }
  else {
    creative.dom.ytplayer3.style.display = 'block';
    creative.dom.ytplayer3.seek(0);
    creative.dom.ytplayer3.play();
  }
}

function showYTPlayer4(containerId) {
  
  document.getElementById(containerId).style.display = 'block';
  
  if (!creative.dom.ytplayer4) {
    creative.ytplayer4Ended = false;
    creative.dom.ytplayer4 = document.createElement('gwd-youtube');
    
    var ytp = creative.dom.ytplayer4;
    ytp.setAttribute('id', 'ytp-4');
    ytp.setAttribute('video-url', video_4_url);
    ytp.setAttribute('autoplay', 'standard'); // none, standard, preview, intro.
    //ytp.setAttribute('preview-duration', '10'); // Only for &#39;preview&#39; autoplay mode.
    //ytp.setAttribute('muted', 'true');
    // Adformat parameter for Mastheads.
    ytp.setAttribute('adformat', '1_8');
    ytp.setAttribute('controls', 'autohide'); // none, show, autohide.
    document.getElementById(containerId).appendChild(ytp);

    ytp.addEventListener('playpressed', function() {
      if (ytp.a.isMuted()) {
        ytp.toggleMute();
      }
      if (creative.ytplayer4Ended) {
        creative.ytplayer4Ended = false;
        Enabler.counter('YTP 4 replay', true);
      }
      Enabler.counter('YTP 4 play pressed', true);
    }, false);
    ytp.addEventListener('paused', function() {
      Enabler.counter('YTP 4 paused', true);
    }, false);
    ytp.addEventListener('ended', function() {
      Enabler.counter('YTP 4 ended', true);
      creative.ytplayer4Ended = true;
    }, false);
    ytp.addEventListener('viewed0percent', function() {
      Enabler.counter('YTP 4 viewed 0%');
    }, false);
    ytp.addEventListener('viewed25percent', function() {
      Enabler.counter('YTP 4 viewed 25%');
    }, false);
    ytp.addEventListener('viewed50percent', function() {
      Enabler.counter('YTP 4 viewed 50%');
    }, false);
    ytp.addEventListener('viewed75percent', function() {
      Enabler.counter('YTP 4 viewed 75%');
    }, false);
    ytp.addEventListener('viewed100percent', function() {
      Enabler.counter('YTP 4 viewed 100%');
    }, false);
    
  }
  else {
    creative.dom.ytplayer4.style.display = 'block';
    creative.dom.ytplayer4.seek(0);
    creative.dom.ytplayer4.play();
  }
}

/**
 * Removes the YTPlayer from the DOM.
 */
function hideYTPlayer1(containerId) {
  if (creative.dom.ytplayer1 != null) {
    creative.dom.ytplayer1.pause();
    creative.dom.ytplayer1.style.display = 'none';
  }
  
  document.getElementById(containerId).style.display = 'none';
}

function hideYTPlayer2(containerId) {
  if (creative.dom.ytplayer2 != null) {
    creative.dom.ytplayer2.pause();
    creative.dom.ytplayer2.style.display = 'none';
  }
  
  document.getElementById(containerId).style.display = 'none';
}

function hideYTPlayer3(containerId) {
  if (creative.dom.ytplayer3 != null) {
    creative.dom.ytplayer3.pause();
    creative.dom.ytplayer3.style.display = 'none';
  }
  
  document.getElementById(containerId).style.display = 'none';
}

function hideYTPlayer4(containerId) {
  if (creative.dom.ytplayer4 != null) {
    creative.dom.ytplayer4.pause();
    creative.dom.ytplayer4.style.display = 'none';
  }
  
  document.getElementById(containerId).style.display = 'none';
}

function videoThumbnailClickHandler(_num)
{
  if(logoAnim_playing == true)
     video_logo_anim.pause();
     
  if(yt_player_visible == false)
    showYoutubePlayer();
    
  hideYTPlayer1('video-player1');
  hideYTPlayer2('video-player2');
  hideYTPlayer3('video-player3');
  hideYTPlayer4('video-player4');
  
  document.getElementById('thumbnail1-img').className = "thumbnail-img";
  document.getElementById('thumbnail2-img').className = "thumbnail-img";
  document.getElementById('thumbnail3-img').className = "thumbnail-img";
  document.getElementById('thumbnail4-img').className = "thumbnail-img";
 
  currentVideoNum = _num;
  
  if(_num == 1)
  {
    showYTPlayer1('video-player1');
    document.getElementById('thumbnail1-img').className += " active";
    //document.getElementById('thumbnail1-hover').className = "";
  }
  else if(_num == 2)
  {
    showYTPlayer2('video-player2');
    document.getElementById('thumbnail2-img').className += " active";
  }
  else if(_num == 3)
  {
    showYTPlayer3('video-player3');
    document.getElementById('thumbnail3-img').className += " active";
  }else if(_num == 4)
  {
    showYTPlayer4('video-player4');
    document.getElementById('thumbnail4-img').className += " active";
  }
  
  creative.dom.movieGalleryClose.style.display = 'block';
  creative.dom.movieGalleryPrevious.style.display = 'block';
  creative.dom.movieGalleryNext.style.display = 'block';
  
  interaction_tracking();
}


function showMovieGallery()
{
 
  creative.dom.introHeadline.style.display = "none";
  
  fade_in("#movie-gallery");
  
  creative.dom.movieGalleryClose.style.display = 'none';
  creative.dom.movieGalleryPrevious.style.display = 'none';
  creative.dom.movieGalleryNext.style.display = 'none';
  
}

function showYoutubePlayer()
{
  yt_player_visible = true;
  fade_in("#movie-gallery-close",0);
  fade_in("#movie-gallery-previous",0);
  fade_in("#movie-gallery-next",0);
  
  fade_in("#video-player1",0);
  fade_in("#video-player2",0);
  fade_in("#video-player3",0);
  fade_in("#video-player4",0);
  
  creative.dom.videoLogoAnimContainer.style.visibility = "hidden";
  
}
function youtubePlayerCloseHandler()
{
 
  
  yt_player_visible = false;
  
  fade_out("#video-player1",0);
  fade_out("#video-player2",0);
  fade_out("#video-player3",0);
  fade_out("#video-player4",0);
  
  hideYTPlayer1('video-player1');
  hideYTPlayer2('video-player2');
  hideYTPlayer3('video-player3');
  hideYTPlayer4('video-player4');

  fade_out("#movie-gallery-close",0);
  fade_out("#movie-gallery-previous",0);
  fade_out("#movie-gallery-next",0);
  
  
  document.getElementById('thumbnail1-img').className = "thumbnail-img";
  document.getElementById('thumbnail2-img').className = "thumbnail-img";
  document.getElementById('thumbnail3-img').className = "thumbnail-img";
  document.getElementById('thumbnail4-img').className = "thumbnail-img";
  
  document.getElementById('thumbnail1-hover').className = "thumbnail-img-hover";
  document.getElementById('thumbnail2-hover').className = "thumbnail-img-hover";
  document.getElementById('thumbnail3-hover').className = "thumbnail-img-hover";
  document.getElementById('thumbnail4-hover').className = "thumbnail-img-hover";
  
  creative.dom.videoLogoAnimContainer.style.visibility = "visible";
  replayCount=3;
  video_logo_anim.currentTime = 1.2;
  logoAnim_playing = true;
  setTimeout(function(){video_logo_anim.play();},2);
  
 interaction_tracking(); 
}


function showNextVideo(_counter)
{
  hideYTPlayer1('video-player1');
  hideYTPlayer2('video-player2');
  hideYTPlayer3('video-player3');
  hideYTPlayer4('video-player4');
  
  var newVideoNum = currentVideoNum + _counter;
  if(newVideoNum < 1)
    newVideoNum = 4;
  else if(newVideoNum > 4)
    newVideoNum = 1;
    
  videoThumbnailClickHandler(newVideoNum);
   
}


/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);


/* PLUG LOGIG */
var plug_speed = 0;
function plug_animate()
{
      if(plug_speed % 2 == 0)
      {
        plug_speed++;
        var nextnum = plug_image_counter++;
        
        var nextImage = "frd061_Plug_Premult_v009_"+ pad(nextnum,4) + ".png";
        
        if(nextnum == 18)
              plug_sequence_end();
              
        document.getElementById("plugImageHolder").src  =nextImage;
              
        if(nextnum < plug_num_images)
              requestAnimationFrame(plug_animate);
      }else
      {
        plug_speed++;
        requestAnimationFrame(plug_animate);
      }
      
}

function plug_sequence_end()
{
  if(stopEverything == false)
  {
      video_logo_anim.play();
      logoAnim_playing = true;
      creative.dom.logoInteract.style.visibility = "visible";
  }   
}

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}


function plug_drag_clickHandler()
{
    document.getElementById('plug-sequence-overlay').style.display = "none";
    document.getElementById("plugImageHolder").src = "frd061_Plug_Premult_v009_0001.png";
    
    document.getElementById('plug-drag').style.display = "none";
    setTimeout(movePlugToLogo,50);
    clearInterval(plugin_trigger_interval);
    
    Enabler.counter('plug interaction');
    interaction_tracking();
}

function plug_drag_overHandler()
{
  document.getElementById("plugImageHolder").src = "frd061_Plug_Premult_v009_0001-over.png";
}
function plug_drag_outHandler()
{
  document.getElementById("plugImageHolder").src = "frd061_Plug_Premult_v009_0001.png";
}

video_logo_anim.addEventListener('ended', function(e) {
        if(!e) { e = window.event; }
	    
            
	    //Player finished playing, tracking needed for reporting 
            if(hover_logo == true)
            {
                    video_logo_anim.currentTime = 1.2;
                    setTimeout(function(){video_logo_anim.play();}, 1);
            }
            else
            {
              video_logo_anim.playbackRate = 1;
              replayCount++;
                
              if(replayCount <5)
              {
                    video_logo_anim.currentTime = 1.2;
                    //video_logo_anim.playbackRate = 2;
                    setTimeout(function(){video_logo_anim.play();}, 1);
                    
              }else
                logoAnim_playing = false;
            }
            

            
    }, false);




video_logo_anim.addEventListener('loadeddata', function() {
   // Video is loaded and can be played
   console.log("video loaded");
   checkVideoLoaded = true;
   
   if(show_called_already == true)
      show();
   
}, false);


function logo_interact_mouseoverHandler()
{
  hover_logo = true;
  document.getElementById("plug_logo_container").className += " anim_bob_up_down";
  
  if(logoAnim_playing == false)
  {
    //replayCount = 0;
    video_logo_anim.currentTime = 1.2;
    video_logo_anim.playbackRate = 2;
    //video_logo_anim.play();
    setTimeout(function(){video_logo_anim.play();}, 1);
  }else
  {
    //replayCount = 0;
    console.log("continue playing: " + logoAnim_playing);
    video_logo_anim.playbackRate = 2;
  }
  
  //Enabler.counter('mnemonic hover interaction');
  Enabler.startTimer('mnemonic hover interaction');
  interaction_tracking();
  
}

function logo_interact_mouseoutHandler()
{
	hover_logo = false;
        //video_logo_anim.playbackRate = 1;
        replayCount = 5;
        Enabler.stopTimer('mnemonic hover interaction');
}

function cssAnim_floatEndFunction() {
	
	document.getElementById("plug_logo_container").className -= "anim_bob_up_down";
	
	if(hover_logo==true)		
		setTimeout(logo_interact_mouseoverHandler,5);
	
}


function logo_interact_clickHandler()
{
  Enabler.counter('mnemonic click interaction');
  document.getElementById("plug_logo_scale_container").className += " anim_poke";
  interaction_tracking();
}

function cssAnim_scaleEndFunction() {
	document.getElementById("plug_logo_scale_container").className -= "anim_poke";
}

function interaction_tracking()
{
  var _url = "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/852948382/?value=1.00&currency_code=CAD&label=gXJACNaFrHEQnuvblgM&guid=ON&script=0";
  
  var i = document.createElement('img');
  i.src =  _url;
     
}

function showEndFrame()
{
  clearInterval(videogallery_interval);
  //console.log("show end frame");
  creative.dom.videoLogoAnimContainer.style.visibility = "visible";
  document.getElementById("headline1").style.display = "block";
  document.getElementById("logo-interact").style.display = "none";
  document.getElementById("movie-gallery").style.display = "none";
  document.getElementById('plug-drag').style.display = "none";
  document.getElementById('plug-sequence-overlay').style.display = "none";
  document.getElementById('plug-sequence').style.top = "-25px";
  document.getElementById('plug-sequence').style.left = "-35px";
 
  video_logo_anim.currentTime = 1.2;
  document.getElementById("plugImageHolder").src = "frd061_Plug_Premult_v009_0030.png";
  
}

// ---------------------------------------------------------------------------------
// JQUERY
// ---------------------------------------------------------------------------------

$(function() {
    
    window.fade_in = function(msg,_delay){$(msg).delay(_delay).fadeIn(500);}
    window.fade_out = function(msg,_delay){$(msg).delay(_delay).fadeOut(200);}
    
    window.fade_in_out = function(msg,_delay)
    {
        $(msg).delay(_delay).fadeIn(500,
                      function() {$(msg).fadeOut(200)}
          );
    }
    
    window.movePlugToLogo = function()
    {
        $("#plug-sequence").animate({
          top: "-25px", left:"-35px"
        }, {
          duration: 600,
          easing: "easeInQuad",
          complete: function () {
               if(stopEverything == false)
               {
                plug_animate();
    
                fade_out("#headline1");
                
                //show video gallery
                videogallery_interval = setTimeout(showMovieGallery,2500);
               }
                  
          }
        });
    }
        
});
