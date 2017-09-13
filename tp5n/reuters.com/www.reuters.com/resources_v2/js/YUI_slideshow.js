//settable variables

var intSizeChecker = 0;
var intViewableArea = 0;
var intContentArea = 0;
var intCurrentPosition = 0;
var intNewPosition = 0;
var intScrollInterval = 0;
var intScrollSpeed = 8; // 1=slow, 10=fast
var intAmountToJump = 150;
var slideshowButtons;
var slideshowPlay;
var ssButtons;
var ssSelf;


YAHOO.namespace("reuters");

// thumbnail scroll functions
function scrollRowDown() {
	if ((intViewableArea != 0) && (intContentArea != 0) && (intViewableArea < intContentArea)) {
		var intSpaceRemaining = intContentArea - intViewableArea + intCurrentPosition;
		if (intSpaceRemaining < intAmountToJump) {
		// if (intSpaceRemaining < intViewableArea) { intNewPosition = intCurrentPosition - intSpaceRemaining;
			intNewPosition = intCurrentPosition - intSpaceRemaining;
		} else {
			intNewPosition = intCurrentPosition - intAmountToJump; // intViewableArea;
		}
		scrollToNewPosition();
	}
}
function scrollRowUp() {
	if ((intViewableArea != 0) && (intContentArea != 0) && (intViewableArea < intContentArea)) {
		var intSpaceRemaining = -(intCurrentPosition);
		if (intSpaceRemaining < intAmountToJump) { // intViewableArea) {
			intNewPosition = 0;
		} else {
			intNewPosition = intCurrentPosition + intAmountToJump; // intViewableArea;
		}
		scrollToNewPosition();
	}
}
function scrollUntil() {
	if (intCurrentPosition < intNewPosition) {
		var intScrollSegment = Math.ceil((intNewPosition - intCurrentPosition)/intScrollSpeed);
		intCurrentPosition += intScrollSegment;
		document.getElementById("thumbTab").style.cssText = "margin-left:" + intCurrentPosition + "px";
	} else if (intCurrentPosition > intNewPosition) {
		var intScrollSegment = Math.ceil((intCurrentPosition - intNewPosition)/intScrollSpeed);
		intCurrentPosition -= intScrollSegment;
		document.getElementById("thumbTab").style.cssText = "margin-left:" + intCurrentPosition + "px";
	} else {
		clearInterval(intScrollInterval);
	}
}

function scrollToNewPosition() {
	clearInterval(intScrollInterval);
	intScrollInterval = setInterval(scrollUntil, 50);
}
function scrollToPosition(intPosition) {
	intNewPosition = intPosition;
	scrollToNewPosition();
}
function scrollToPhoto(intPhotoIndex) {
	var centerViewable = intViewableArea/2;
	var centerThumb = document.getElementById("thumb" + intPhotoIndex).offsetWidth/2;
	var intPhotoPosition = document.getElementById("thumb" + intPhotoIndex).offsetLeft;
	var intNewCalculatedPosition = Math.round(intCurrentPosition - intPhotoPosition + centerViewable - centerThumb);
	intNewCalculatedPosition = (intNewCalculatedPosition < 0)? intNewCalculatedPosition: 0 ;
	if (intContentArea > intViewableArea) {
		if ((intNewCalculatedPosition+20) > -(intContentArea - intViewableArea)) {
			scrollToPosition(intNewCalculatedPosition);
		} else {
			scrollToPosition(-(intContentArea - intViewableArea));
		}
	}
}
function scrollHome() {
	scrollToPosition(0);
}
function scrollEnd() {
	scrollToPosition(-(intContentArea - intViewableArea));
}
function buttonMenu() {
	return false;
}

function disableButton(buttonId) {
	document.getElementById(buttonId).className = "hidden";
}
function enableButton(buttonId) {
	document.getElementById(buttonId).className = "";
}
function initButtons() {
	document.getElementById("controlLeft").onclick = scrollRowUp;
	document.getElementById("controlLeft").ondblclick = scrollHome;
	document.getElementById("controlRight").onclick= scrollRowDown;
	document.getElementById("controlRight").ondblclick = scrollEnd;
	document.getElementById("controlLeft").oncontextmenu = buttonMenu; // what if this wasn't here?
	document.getElementById("controlRight").oncontextmenu= buttonMenu;
}

/*querystring manipulation*/
function querySt(ji) {
	hu = window.location.search.substring(1);
	gy = hu.split("&");
	for (i=0;i<gy.length;i++) {
		ft = gy[i].split("=");
		if (ft[0] == ji) {
			return ft[1];
		}
	}
}

//element creators
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

function tag(name, content, attributes) {
  return {name: name, attributes: attributes, content: content};
}
function link(target, text) {
  return tag("a", [text], {href: target});
}
function image(src) {
  return tag("img", [], {src: src});
}
function escapeHTML(text) {
  var replacements = [[/&/g, "&amp;"], [/"/g, "&quot;"], [/</g, "&lt;"], [/>/g, "&gt;"]];
  forEach(replacements, function(replace) {
    text = text.replace(replace[0], replace[1]);
  });
  return text;
}
function renderHTML(element) {
  var pieces = [];

  function renderAttributes(attributes) {
    var result = [];
    if (attributes) {
      for (var name in attributes)
        result.push(" " + name + "=\"" +
                    escapeHTML(attributes[name]) + "\"");
    }
    return result.join("");
  }

  function render(element) {
    // Text node
    if (typeof element == "string") {
      pieces.push(escapeHTML(element));
    }
    // Empty tag
    else if (!element.content || element.content.length == 0) {
      pieces.push("<" + element.name +
                  renderAttributes(element.attributes) + "/>");
    }
    // Tag with content
    else {
      pieces.push("<" + element.name +
                  renderAttributes(element.attributes) + ">");
      forEach(element.content, render);
      pieces.push("</" + element.name + ">");
    }
  }

  render(element);
  return pieces.join("");
}

testMessage = function (message) {
	var testDiv = document.getElementById("testing");
	if ((testDiv != null )&&(testDiv != undefined))
		{
		var newP = document.createElement('p');
		newP.innerHTML = message;
		testDiv.appendChild(newP);
		}
	}


// slideshow takes container id and o, which can include effect and frames. ie: YAHOO.reuters.slideshow("testing", {effect:  YAHOO.reuters.slideshow.effects.fadeOut})
YAHOO.reuters.slideshow = function (container, startNumber, o) {
	this.container = YAHOO.util.Dom.get(container);
	this.effect = YAHOO.reuters.slideshow.effects.fadeOut;
	this.effect2 = YAHOO.reuters.slideshow.effects.fadeIn;
	this.thumbs = false;
	this.title = o.slideshow.title;
	this.id = o.idNum;
	this.interval = (o.interval)? o.interval : 4000;
	this.startNumber = this.getStartNumber(startNumber);

	this.frames = [];
	for (var i=0; i<o.slideshow.slides.length; i++) {this.frames[i] = {type: 'virtual', image: o.slideshow.slides[i].image, thumb: o.slideshow.slides[i].thumbnail, caption: this.fixAttribution(o.slideshow.slides[i].caption, i)};}

	slideshowPlaying = 0; //same thing can be done using this.loop_interval?
	this.loop_interval; //remove
	this.switchViewAll; //later, needs to be stored here?
	this.switchViewShow; //later

	ssSelf = this;

	slideshowButtons = document.getElementById("slideshowButtons");
	slideshowPlay = document.getElementById("slideshowPlay");
	ssButtons = new Array ();
	if (slideshowButtons) ssButtons.push(slideshowButtons);
	if (slideshowPlay) ssButtons.push(slideshowPlay);

	this.initImages();

	if (document.getElementById("thumbSection")) {
		this.thumbs = true;
		this.loaddisabledThumbs();
		this.checkViewableArea();
		initButtons();
		intSizeChecker = setTimeout(this.checkViewableArea, 1000); //possible to remove delay?
		this.loaddisabledThumbActions();
		}
	if (document.getElementById("photoId")) this.photoControls(this.startNumber);

	this.loaddisabledCaptions();

	this.loaddisabledLeftRight();

	if (slideshowButtons || slideshowPlay) this.ssRollovers();
	this.init();

}


YAHOO.reuters.slideshow.prototype = {
	init: function()
		{
			if (! this.effect)
			{
				this.effect= YAHOO.reuters.slideshow.effects.fadeOut;
			}

			this.active_frame = this.get_active_frame();
		},
	get_active_frame: function()
		{
			var current_frame =  YAHOO.util.Dom.getElementsByClassName("yui-sldshw-active", null,  this.container)[0];
			return current_frame;
		},
	get_frame_index: function(frame)
		{
			for(var i=0; i<this.frames.length;i++)
			{
				if (this.frames[i].value==frame)
					return i;
			}
			return -1;
		},
	prev_selector: function(current_index)
		{
			return (current_index-1+this.frames.length)%this.frames.length;
		},
	next_selector: function(current_index)
		{
			return (current_index+1)%this.frames.length;
		},
	highlight_thumb : function (number)
		{
			if (number>=0) {
				var current_index = number;
			}else{
				var current_index = this.get_frame_index(this.get_active_frame());
			}
			var current_thumb = "thumb" + current_index;
			YAHOO.util.Dom.removeClass(YAHOO.util.Dom.getElementsByClassName("active-thumb")[0], "active-thumb"); //remove class from current thumb
			YAHOO.util.Dom.addClass(document.getElementById(current_thumb), "active-thumb");  // add class to active thumb
		},
	choose_next_frame : function(reverse, jumpFrame)
		{
			var reverse = (reverse ==null || reverse ==false) ? false : true ;
			var current_index = this.get_frame_index(this.get_active_frame());
			if (current_index<0) current_index=0;
			if (reverse == true) {
			    var next_index = this.prev_selector(current_index);
			} else if (typeof(jumpFrame) == "number") {
				var next_index = jumpFrame;
			} else {
				var next_index = this.next_selector(current_index);
			}
			var next = this.frames[next_index];
			while (next.value==this.active_frame || next.type=="broken") next = this.frames[this.next_selector(next_index)];
			this.next_frame = next.value;
			YAHOO.util.Dom.replaceClass(this.next_frame, "yui-sldshw-cached", "yui-sldshw-next");
			this.effect2.setup(this.next_frame);
		},
	transition_tracking: function ()
		{
			var active_frame_number = this.get_frame_index(this.active_frame) + 1;
			if (slideshowPlaying == 0) {
				if (typeof(dcsMultiTrack) == "function") {
					if (document.getElementById("slideshowInlineSmall") || document.getElementById("homepageSlideshow")) {
						dcsMultiTrack('DCSext.VirtualEvent', '1','WT.cg_n', 'Event - Inline Slideshow Change','DCSext.ContentType','Event','DCSext.PageTotal',this.frames.length,'DCSext.PageNumber',active_frame_number,'DCSext.ContentHeadline',this.title);
					}
					if (document.getElementById("slideshowSingle")) {
						dcsMultiTrack('WT.cg_n', 'Pictures - Slideshow','DCSext.ContentType','Slideshow','DCSext.PageTotal',this.frames.length,'DCSext.PageNumber',active_frame_number,'DCSext.ContentHeadline',this.title,'DCSext.ContentID',this.id);
					}
				}
			} else if (slideshowPlaying == 1) {
				if (typeof(dcsMultiTrack) == "function") {
					if (document.getElementById("slideshowSingle")) {
				        dcsMultiTrack('WT.cg_n', 'Slideshow - Auto Slide','DCSext.ContentType','Slideshow','DCSext.PageTotal',this.frames.length,'DCSext.PageNumber',active_frame_number,'DCSext.ContentHeadline',this.title,'DCSext.ContentID',this.id,'DCSext.VirtualEvent','1');
					}
				}
			}
			//previous placement of neilsen beacon
			
		},
	clean_up_transition: function()
		{
			YAHOO.util.Dom.replaceClass(this.active_frame, "yui-sldshw-active", "yui-sldshw-cached");
			YAHOO.util.Dom.replaceClass(this.next_frame, "yui-sldshw-next", "yui-sldshw-active");
			this.active_frame = this.next_frame;
			this.transition_tracking();
			this.loaddisabledBackNext();
			nielsenEventBeacon();
		},
	transition: function( o )
		{
		    var o = (o ==null) ? {} : o ;
 			var previous = (o.reverse ==null)?false:o.reverse;
			var toFrame = (o.jumpTo === undefined)? false : o.jumpTo;
			if (previous)
			{
			 	this.choose_next_frame(true,'');
			}
			else if (toFrame>=0)
			{
				this.choose_next_frame(false,toFrame);
			}
			var next_frame_index = this.get_frame_index(this.next_frame);
			if (this.thumbs == true){
				this.highlight_thumb(next_frame_index); //highlight new thumb before beginning transition
				scrollToPhoto(next_frame_index); // scroll to thumb
			}

			this.swapCaption(next_frame_index); // replace photo description
			this.photoControls(next_frame_index+1); // update number
			if (document.getElementById("slideshowSingle")) {document.location.hash = "a=" + (next_frame_index+1); } //update url if freestanding slideshow
            var hide = this.effect.get_animation(this.active_frame);
			var show = this.effect2.get_animation(this.next_frame);
			show.onComplete.subscribe(this.clean_up_transition, this, true);
		    hide.animate();
			show.animate();

		}
	,
	loop: function()
		{
			if (slideshowPlaying == 0) {
				this.loop_interval = setInterval( function(){ ssSelf.transition({'slideshow':true});}, this.interval );
				slideshowPlaying = 1;
				YAHOO.util.Dom.setStyle(ssButtons, 'display', 'none');
				document.getElementById("ssPlay").src = "/resources_v2/images/ssButton-stop.gif";

				var active_frame_number = this.get_frame_index(this.active_frame) + 1;
				dcsMultiTrack('WT.cg_n', 'Slideshow Play','DCSext.ContentType','Slideshow','DCSext.PageTotal',this.frames.length,'DCSext.PageNumber',active_frame_number,'DCSext.ContentHeadline',this.title,'DCSext.ContentID',this.id);
			} else {
				clearInterval(this.loop_interval);
				slideshowPlaying = 0;
				document.getElementById("ssPlay").src = "/resources_v2/images/ssButton-play.gif";
			}
		}
	,
	getStartNumber: function(startNumber)
		{
			var startNum;
			startNum = (startNumber == null) ? 1 : startNumber;
			if (document.location.hash != '') {
				if (document.location.hash.search("a=") != -1) {
					startNum = parseInt(document.location.hash.split("a=")[1]);
					if (isNaN(startNum)) startNum = 1;
				}
			} else if (document.getElementById("slideshowSingle")){
				if(Reuters.utils.getQueryStringParameter(location.href, "slide")) startNum = Reuters.utils.getQueryStringParameter(location.href, "slide");
				document.location.hash = "a=" + (startNum);
			}
			return startNum;
		},
	initImages: function()
		{
			var imageShells = "";
			for (i=0; i<this.frames.length; i++) {
				activeClass = (i == this.startNumber-1)? "yui-sldshw-active yui-sldshw-frame" : "yui-sldshw-cached yui-sldshw-frame";
				imageShells += renderHTML(tag("div",[tag("div",[" "],{"class":"image-container",id:"ic"+i})],{id:"frame_fd1fade","class":activeClass}));
				this.frames[i].type = 'framed';
			}
			c = this.startNumber-1;
			cElement = "image"+c;
			document.getElementById("displayFrame").innerHTML = imageShells;

			var loaddisableded_frames = YAHOO.util.Dom.getElementsByClassName("yui-sldshw-frame", null, this.container);
			if (!(loaddisableded_frames.length > 1)) return false;
			for (var i=0; i<loaddisableded_frames.length; i++) {this.frames[i].value =  loaddisableded_frames[i]}

			this.loaddisabledImages(c, this.prev_selector(c), this.next_selector(c));
			if (document.getElementById("slideshowSingle")) this.showSsButtons(document.getElementById(cElement));

		},
	loaddisabledImages: function()
		{
			var images = arguments;
			for (i=0; i<images.length; i++) this.cacheImage(images[i]);
		},
	loaddisabledBackNext: function ()
		{
			var current_index = this.get_frame_index(this.get_active_frame());
			this.loaddisabledImages(this.prev_selector(current_index),this.next_selector(current_index));
		},
	cacheImage: function(index)
		{
			if (this.frames[index].type == "framed") {
				var slideNumber = index+1;
				if (document.getElementById("slideshowSingle")) { //no link
					document.getElementById("ic"+index).innerHTML = renderHTML(tag("img",[],{alt:"Main Image",src:this.frames[index].image,id:"image"+index}));
				} else {
					if ((this.id.indexOf("USRTR") == 0) || (this.id.indexOf("UKRTR") == 0) || (this.id.indexOf("INRTR") == 0)) {
						document.getElementById("ic"+index).innerHTML = renderHTML(tag("a",[tag("img",[],{alt:"Main Image",src:this.frames[index].image,id:"image"+index})],{href: ("/news/pictures/slideshow?articleId="+this.id+'&slide='+slideNumber), target:"_top"}));
					} else if ((this.id.indexOf("cSlideshow") == 0) && (sjURL)){
						document.getElementById("ic"+index).innerHTML = renderHTML(tag("a",[tag("img",[],{alt:"Main Image",src:this.frames[index].image,id:"image"+index})],{href: ("/news/pictures/cslideshow?sj="+sjURL+'&slide='+slideNumber), target:"_top"}));
					} else {
						document.getElementById("ic"+index).innerHTML = renderHTML(tag("a",[tag("img",[],{alt:"Main Image",src:this.frames[index].image,id:"image"+index})],{href: ("/article/slideshow/id"+this.id+'#a='+slideNumber), target:"_top"}));
					}
				}
				this.frames[index].type = "cached";
				testMessage("loaddisableded image: " + index + " with type: " + this.frames[index].type)
				this.loaddisabledImageActions(index);
			}
		},
	loaddisabledImageActions: function(index)
		{
			c = document.getElementById("image"+index);
			if (document.getElementById("slideshowSingle")){
				YAHOO.util.Event.addListener(c, "mousemove", this.imageMouseover);
				YAHOO.util.Event.addListener(c, "mouseout", this.imageMouseout);
			} else if (document.getElementById("slideshowInlineLarge") && document.getElementById("captionContent")) {
				var ids =  new Array ("displayFrame","captionContent", "photoControls");
				YAHOO.util.Event.on(ids, "mouseover", Reuters.article.showCaption);
				YAHOO.util.Event.on(ids, "mousemove", Reuters.article.showCaption);
				YAHOO.util.Event.on(ids, "mouseout", Reuters.article.hideCaption);
			}
		},
	imageMouseover: function(e)
		{
			var elTargeto = YAHOO.util.Event.getTarget(e);
			ssSelf.showSsButtons(elTargeto);
		},
	showSsButtons: function(elTarget) // simplify? -- slideshow play is always in the same location
		{
			if (slideshowButtons.className == elTarget.id || slideshowPlay.className == elTarget.id) {
				YAHOO.util.Dom.setStyle(ssButtons, 'display', 'block');
			} else {
				var imgTop = 0, imgLeft = 0, imgWidth = 0, imgHeight = 0;
				imgTop = elTarget.offsetTop;
				imgLeft = elTarget.offsetLeft;
				imgWidth = elTarget.offsetWidth;
				imgPaddingRight = parseFloat(YAHOO.util.Dom.getStyle(elTarget, 'padding-right'));
				adjImgWidth = imgWidth - imgPaddingRight; /* padding in the css */
				imgHeight = elTarget.offsetHeight;
				dispWidth = document.getElementById("displayFrame").offsetWidth;
				if (imgWidth == dispWidth) {
				} else {
					if (slideshowButtons) { //place slideshowButtons
						elTarget.parentNode.insertBefore(slideshowButtons, elTarget);
						var ssLeft = imgLeft + adjImgWidth - 88;
						YAHOO.util.Dom.setStyle(slideshowButtons, 'left', (ssLeft+"px"));
						slideshowButtons.className = elTarget.id;
					}
				}
				if (slideshowPlay) { //place slideshowPlay whether or not image is loaddisableded
						elTarget.parentNode.insertBefore(slideshowPlay, elTarget);
						var ssLeft = (dispWidth - 194)/2;
						YAHOO.util.Dom.setStyle(slideshowPlay, 'left', (ssLeft+"px"));
						slideshowPlay.className = elTarget.id;
				}
				YAHOO.util.Dom.setStyle(ssButtons, 'display', 'block');
			}
		},
	imageMouseout: function(e)
		{
			YAHOO.util.Dom.setStyle(ssButtons, 'display', 'none');
		},
	loaddisabledCaptions: function()
		{
			c = this.startNumber-1;
			if (document.getElementById("txtFrame"))  document.getElementById("txtFrame").innerHTML = renderHTML(tag("div",[tag("span",[this.frames[c].caption],{id:"imageCaption"})],{"class":"yui-txt-frame",id:"caption"+c}));
		},
	fixAttribution: function(strRawCaption, frameNumber) //change this so caption does not need to be passed, pick up caption from json
		{
			function truncateString(theString, limit) {
				var bits, i;
				if (!theString.split) return '';
				bits = theString.split('');
				if (bits.length > limit) {
					for (i = bits.length - 1; i > -1; --i) {
						if (i > limit) {
							bits.length = i;
						}
						else if (' ' === bits[i]) {
							bits.length = i;
							break;
						}
					}
				}
				return bits.join('');
			}
			strRawCaption = strRawCaption.replace(/<[^<>]*>/g, ""); //removes all html tags
			var re = new RegExp('(.*)(REUTERS/)(.*)', "g");
			var arrProcessedCaption = re.exec(strRawCaption);
			var slideNumber = frameNumber + 1;
			if (arrProcessedCaption != null) {
				if (document.getElementById("slideshowSingle") ) { //full caption on slideshow page
					//return tag('p',[strRawCaption],{});
					return tag("p", [arrProcessedCaption[1], tag("br"), tag("span", [(arrProcessedCaption[2] + arrProcessedCaption[3])], {"class": "label"})]);
				} else if (arrProcessedCaption[1].length > 200){
					return tag("p", [(truncateString(arrProcessedCaption[1], 200)+" "), tag("a",["More..."],{href: ("/news/pictures/slideshow?articleId="+this.id+"&slide="+slideNumber)}), tag("br"), tag("span", [("Credit: " + arrProcessedCaption[2] + arrProcessedCaption[3])], {"class": "label"})]);
				} else 	{
					return tag("p", [arrProcessedCaption[1], tag("br"), tag("span", ["Credit: " + arrProcessedCaption[2] + arrProcessedCaption[3]], {"class": "label"})]);
				}
			} else {
				return tag('p',[strRawCaption],{});
			}
		},
	swapCaption : function (frameNumber)
		{
			if (document.getElementById("txtFrame")) {
				document.getElementById("txtFrame").innerHTML  = renderHTML(tag("div",[tag("span",[this.frames[frameNumber].caption],{id:"imageCaption"})],{"class":"yui-txt-frame",id:"caption"+frameNumber}));
			}
			else if (document.getElementById("captionContent")) {
				var captionDiv = YAHOO.util.Dom.getElementsByClassName('captionText','div','captionContent')[0];
				if (captionDiv) captionDiv.innerHTML = renderHTML(this.frames[frameNumber].caption);
			}
		},
	photoControls: function(currFrame)
		{
			if (document.getElementById("photoId")){
				var pHTML = " " + currFrame + " / " + this.frames.length + " ";
				document.getElementById("photoId").innerHTML = pHTML;
			}
			if (document.getElementById("fullSizeLink")){ //point to same image in full size slideshow
				var sHref = document.getElementById("fullSizeLink").href;
				sHref = Reuters.utils.replaceQueryStringParam(sHref, "slide", currFrame);
				document.getElementById("fullSizeLink").href = sHref;
			}
		},
	loaddisabledThumbs: function()
		{
			var thumbSection = document.getElementById("thumbSection");
			var thumbImages = [];
			for (i=0; i<this.frames.length; i++) {
					thClass = (i == this.startNumber-1)? "thumbnail active-thumb" : "thumbnail";
					onClickJS = "javascript:" + this.id + ".transition({jumpTo:" + i + "});return false";
					thumbImages.push(tag("td",[tag("div",[tag("img",[],{src:this.frames[i].thumb, alt:"thumbnail", id: "ti"+i,title: "Click to view full image"})],{"class": thClass, id:"thumb"+i,onclick: onClickJS})], {}));
			}
			var thumbnailControls = [];
			thumbnailControls.push(tag("div",[tag("img",[],{id:"controlLeft",src:"/resources_v2/images/thumbStripBack.gif"}),tag("img",[],{src:"/resources_v2/images/thumbBar.gif","class":"thumbBar"})],{"class":"thumbnailControl left"}));
			thumbnailControls.push(tag("div",[tag("img",[],{src:"/resources_v2/images/thumbBar.gif","class":"thumbBar"}),tag("img",[],{id:"controlRight",src:"/resources_v2/images/thumbStripNext.gif"})],{"class":"thumbnailControl right"}));
			thumbSection.innerHTML = renderHTML(tag("div",[tag("div", [tag("div",[tag("table",[tag("tr",thumbImages,{id: "tableContent"})],{id:"thumbTable",cellspacing:"0",cellpadding:"0"})],{id:"thumbTab"}), tag("div",thumbnailControls,{"class":"thumbnailControls"})], {id:"thumbnails"}), tag("div",[],{"class":"linebreak"})],{"class":"sectionContent"}));
			if (this.frames.length == 1) document.getElementById("thumbnails").className = "hidden";
		},
	loaddisabledThumbActions: function()
		{
			var thumb_ids = [];
			for (i=0; i<this.frames.length; i++)  thumb_ids.push("ti"+i);
			YAHOO.util.Event.addListener(thumb_ids, "mouseover", this.thumbMouseover);
		},
	thumbMouseover: function(e)
		{
			var elTarget = YAHOO.util.Event.getTarget(e);
			var t_index = elTarget.id.substr(2);
			ssSelf.cacheImage(t_index);
			YAHOO.util.Event.removeListener(elTarget.id, "mouseover");
		},
	checkViewableArea: function()
		{
			intViewableArea = document.getElementById("thumbnails").offsetWidth;
			intContentArea = document.getElementById("thumbTable").offsetWidth + 95;
			if ((intViewableArea - 30) > (intContentArea )) {
				disableButton("controlLeft");
				disableButton("controlRight");
				var thumbBars = YAHOO.util.Dom.getElementsByClassName('thumbBar', 'img');
				YAHOO.util.Dom.setStyle(thumbBars, 'display', 'none');
				intNewPosition = (intViewableArea - intContentArea)/2;
				document.getElementById("thumbTab").style.cssText = "margin-left:" + intNewPosition + "px";
			} else { //turn on buttons
				enableButton("controlLeft");
				enableButton("controlRight");
				clearInterval(intSizeChecker);
			}
		},
	ssRollovers: function()
		{
			var rolloverIds = new Array ("ssFollow","ssEmbed","ssComments","ssNumComments","ssNumCommentsContainer", "ssPlay");
				YAHOO.util.Event.on(rolloverIds, "mouseover", this.mouseOn);
				YAHOO.util.Event.on(rolloverIds, "mouseout", this.mouseOff);
		},
	loaddisabledLeftRight: function()
		{
			var leftRightIds = new Array("prevButton","nextButton");
				YAHOO.util.Event.on(leftRightIds, "mouseover", this.mouseOn);
				YAHOO.util.Event.on(leftRightIds, "mouseout", this.mouseOff);
		},
	mouseOn: function(e)
		{
			var elTarget = YAHOO.util.Event.getTarget(e);
			switch (elTarget.id) {
				case "prevButton":
					elTarget.src = "/resources_v2/images/photo_left_over.gif";
					break;
				case "nextButton":
					elTarget.src = "/resources_v2/images/photo_right_over.gif";
					break;
				case "ssFollow":
					YAHOO.util.Dom.setStyle(ssButtons, 'display', 'block');
					elTarget.src = "/resources_v2/images/ssButton-follow-glow.png";
					break;
				case "ssEmbed":
					YAHOO.util.Dom.setStyle(ssButtons, 'display', 'block');
					elTarget.src = "/resources_v2/images/ssButton-embed-glow.png";
					break;
				case "ssComments":
					YAHOO.util.Dom.setStyle(ssButtons, 'display', 'block');
					elTarget.src = "/resources_v2/images/ssButton-comments-glow.png";
					break;
				case "ssNumComments":
					YAHOO.util.Dom.setStyle(ssButtons, 'display', 'block');
					document.getElementById("ssComments").src = "/resources_v2/images/ssButton-comments-glow.png";
					break;
				case "ssNumCommentsContainer":
					YAHOO.util.Dom.setStyle(ssButtons, 'display', 'block');
					document.getElementById("ssComments").src = "/resources_v2/images/ssButton-comments-glow.png";
					break;
				case "ssPlay":
					YAHOO.util.Dom.setStyle(ssButtons, 'display', 'block');
			}
		},
	mouseOff: function(e)
		{
			var elTarget = YAHOO.util.Event.getTarget(e);
			switch (elTarget.id) {
				case "prevButton":
					elTarget.src = "/resources_v2/images/photo_left.gif";
					break;
				case "nextButton":
					elTarget.src = "/resources_v2/images/photo_right.gif";
					break;
				case "ssFollow":
					elTarget.src = "/resources_v2/images/ssButton-follow.png";
					break;
				case "ssEmbed":
					elTarget.src = "/resources_v2/images/ssButton-embed.png";
					break;
				case "ssComments":
					elTarget.src = "/resources_v2/images/ssButton-comments.png";
					break;
				case "ssNumComments":
					document.getElementById("ssComments").src = "/resources_v2/images/ssButton-comments.png";
					break;
				case "ssNumCommentsContainer":
					document.getElementById("ssComments").src = "/resources_v2/images/ssButton-comments.png";
					break;
			}
		},
	displayAll: function()
		{
			var thumbSection = document.getElementById("thumbSection");
			var activeDiv = document.getElementById("slideshowSingle");
			var origContents = YAHOO.util.Dom.getElementsByClassName('sectionContent','div',activeDiv)[0];
			if (YAHOO.util.Dom.getElementsByClassName('sectionContent','div',activeDiv).length > 2) {	// switch to slideshow mode
				while (activeDiv.firstChild) activeDiv.removeChild(activeDiv.firstChild);
				activeDiv.appendChild(this.switchViewShow);
				YAHOO.util.Dom.setStyle(thumbSection, 'display', 'block');
				YAHOO.util.Dom.setStyle('slideshowViewShow', 'display', 'none');
				YAHOO.util.Dom.setStyle('slideshowViewAll', 'display', 'block');

			} else { //switch to view all mode
				this.switchViewShow = activeDiv.removeChild(origContents);
				YAHOO.util.Dom.setStyle(thumbSection, 'display', 'none');
				YAHOO.util.Dom.setStyle('slideshowViewAll', 'display', 'none');
				YAHOO.util.Dom.setStyle('slideshowViewShow', 'display', 'block');
				if (this.switchViewAll != null) {
					activeDiv.innerHTML = this.switchViewAll;
				} else {
					this.showAll(activeDiv);
					this.switchViewAll = activeDiv.innerHTML;
					//this.loaddisabledImageActions();
					this.ssRollovers();
				}
			}

		},
	showAll: function(targetDiv)
		{
			if (slideshowButtons) YAHOO.util.Dom.removeClass(slideshowButtons, 'image0');
			function viewAllImage(src,id,caption) {
 				return tag("div", [tag("div", [tag("img",[],{src: src, id: "image"+id})], {"class": "yui-sldshw-frame-all"}),
                     			   tag("div", [caption], {"class":"multimedia-text"})], {"class": "sectionContent"});
			}
			for (i=0; i<this.frames.length; i++) {
				sectionContent = renderHTML(viewAllImage(this.frames[i].image, i, this.frames[i].caption));
				sectionContent += (this.frames.length != (i+1))? renderHTML(tag("div",[" "],{"class":"sldshw-all-break"})): "";
				targetDiv.innerHTML += sectionContent;
			}
		}
 }


YAHOO.reuters.slideshow.effects = {
	fadeOut: {
			setup: function(frame){
					YAHOO.util.Dom.setStyle(frame, 'opacity', '1');
			},
			get_animation: function(frame){
				return new YAHOO.util.Anim(frame, { opacity: { to: 0 }}, .25, YAHOO.util.Easing.easeOut);
			}
		},
	fadeIn: {
			setup: function(frame){
					YAHOO.util.Dom.setStyle(frame, 'opacity', '0');
			},
			get_animation: function(frame){
					var region = YAHOO.util.Dom.getRegion(frame);
					return new YAHOO.util.Anim(frame, { opacity: { to: 1 }}, .25, YAHOO.util.Easing.easeOut);
			}
		}
}
