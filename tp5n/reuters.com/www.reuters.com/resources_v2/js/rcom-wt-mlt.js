
/**
 * Add onclick and impression capabilities to module level tracking
 */
var agt        = navigator.userAgent.toLowerCase();
var is_ie      = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
function setModuleTrackingOnClick()
{
    var modules = new Array;
    if (is_ie)
    {
        var allSpans = document.getElementsByTagName("span");
        if (allSpans)
        {
            for (i=0; i<allSpans.length; i++)
            {
                if (allSpans[i].getAttribute("name") && allSpans[i].getAttribute("name") == "trackingEnabledModule")
                    modules.push(allSpans[i]);
            }
        }
    }
    else
        modules = document.getElementsByName("trackingEnabledModule");

    if (modules.length > 0)
    {
        // get ContentChannel and ContentType
        var metaTags = getMetaTags();
        var contentChannel = metaTags["DCSext.ContentChannel"];
        var contentType    = metaTags["DCSext.ContentType"];
        if (!contentChannel)
            contentChannel = "";
        if (!contentType)
            contentType = "";


        // set onclick method
        for (i=0; i<modules.length; i++)
        {
            var module = modules[i];
            var moduleName = module.getAttribute("moduleName");
            var moduleId = module.getAttribute("moduleId");
            var modId = contentChannel + "|" + contentType + "|";
            if (moduleId)   // CMS modules
                modId += moduleId + "_" + moduleName;
            else            // CMS buddy modules
                modId += moduleName;

            var links = module.getElementsByTagName("a");
            for (j=0; j<links.length; j++) {
                links[j].setAttribute("modId", modId);
                if(links[j].href.indexOf('articlePrint') == -1){
		 							YAHOO.util.Event.addListener(links[j], "click", wtModTracking);
		}
                //links[j].onclick = wtModTracking;
            }
        }
    }
}
Reuters.utils.addLoadEvent(setModuleTrackingOnClick);

var trackingEnabledModuleIds = new Array;
function addImpression(moduleName)
{
    trackingEnabledModuleIds.push(moduleName);
}

function removeImpression()
{
    var lastElement = trackingEnabledModuleIds.pop();
}

function setModuleImpressionTracking()
{
    if (trackingEnabledModuleIds && trackingEnabledModuleIds.length > 0)
    {
        var modIDs = "";
        var metaTags = getMetaTags();
        var contentChannel = metaTags["DCSext.ContentChannel"];
        var contentType    = metaTags["DCSext.ContentType"];
        if (!contentChannel)
            contentChannel = "";
        if (!contentType)
            contentType = "";

        //Removing China Hack
        //if (metaTags["DCSext.rCountry"] == "CN") {

            // modIDs = "ChinaBuddy";
        //}
        //else {

            for (var i=0; i<trackingEnabledModuleIds.length; i++)
            {
                modIDs += contentChannel + "|" + contentType + "|" + escape(trackingEnabledModuleIds[i]);
                if (i != (trackingEnabledModuleIds.length-1))   // not the last one
                    modIDs += ";";
            }
        //}

        // insert tags for impression tracking
        var headRef = document.getElementsByTagName("head").item(0);
        var metaModId = document.createElement("meta");
        metaModId.setAttribute("name", "DCSext.ModID");
        metaModId.setAttribute("content", modIDs);
        headRef.appendChild(metaModId);

        var metaModImp = document.createElement("meta");
        metaModImp.setAttribute("name", "DCSext.ModImp");
        metaModImp.setAttribute("content", "1");
        headRef.appendChild(metaModImp);
    }
}


function wtModTracking()
{
    var modId  = this.getAttribute("modId");
    //var modUrl = this.getAttribute("href");
    var modUrl = this.href;

    // parse the javascript link
    if (modUrl.indexOf('javascript:') != -1)
    {
        var params = modUrl.substring(modUrl.indexOf("'")+1);
        var a = params.split("'");
        modUrl = a[0];
    }

    if (typeof(window.dcsMultiTrack) != 'undefined')
    {
        dcsMultiTrack('DCSext.ModID', modId,
                      'DCSext.ModClickID', modId,
                      'DCSext.ModURL', modUrl,
                      'DCSext.ModClick', '1',
                      'DCSext.ModImp', '0',
                      'WT.dl', '1',
                      'DCSext.AutoRefresh', 'False');
    }
}

function getMetaTags()
{
    var metaTagsArray = new Array;

    var metaTags;
    if (document.all)
        metaTags = document.all.tags("meta");
    else if (document.documentElement)
        metaTags = document.getElementsByTagName("meta");

    for (i=0; i<metaTags.length; i++)
    {
        var metaTagName  = metaTags[i].getAttribute("name");
        var metaTagValue = metaTags[i].getAttribute("content");

        metaTagsArray[metaTagName] = metaTagValue;
    }

    return metaTagsArray;
}


/**
 * populate the ad sizes for RAPT tag
 */
var raptAs = "";
function populateRaptAdSize(adType)
{
    // adType format: type=brandChannel;sz=1x1;
    var a = adType.split(";");

    for(var i=0; i<a.length; i++)
    {
        var iSz = a[i].indexOf("sz=");
        if (iSz != -1)
        {
            raptAs += a[i].substring(iSz+3) + ":";
            break;
        }
    }

    for(var i=0; i<a.length; i++)
    {
        var iType = a[i].indexOf("type=");
        if (iType != -1)
        {
            raptAs += a[i].substring(iSz+5) + ";";
            break;
        }
    }
}

function setDynamicModuleTrackingOnClick(divId) {
	// get ContentChannel and ContentType
	var metaTags = getMetaTags();
	var contentChannel = metaTags["DCSext.ContentChannel"];
	var contentType    = metaTags["DCSext.ContentType"];
	if (!contentChannel) contentChannel = "";
	if (!contentType) contentType = "";
	// set onclick method
	var module = document.getElementById(divId);
	var moduleName = module.getAttribute("moduleName");
	var moduleId = module.getAttribute("moduleId");
	var modId = contentChannel + "|" + contentType + "|";
	if (moduleId)   // CMS modules
		modId += moduleId + "_" + moduleName;
	else if (moduleName) // CMS buddy modules
		modId += moduleName;
	else // other stuff
		modId += "DYN-" + divId;
	var links = module.getElementsByTagName("a");
	for (j=0; j<links.length; j++) {
		links[j].setAttribute("modId", modId);
		YAHOO.util.Event.addListener(links[j], "click", wtModTracking);
	}
}
