Reuters.namespace('pid');

// 900: Eikon
Reuters.pid.allowedPIDs = ",100,101,200,300,400,500,600,666,700,800,801,900,";


Reuters.pid.initialize = function() {
  this.pidCodeQ = Reuters.utils.getQueryStringParameter(location.href, 'pid');
  trace("pidCodeQ: " + this.pidCodeQ);
  if (Reuters.lang.isEmpty(this.pidCodeQ)) {
    this.pidCodeQ = Reuters.utils.getQueryStringParameter(location.href, 'PID');
  }
  trace("pidCodeQ: " + this.pidCodeQ);
  if (Reuters.lang.isNotEmpty(this.pidCodeQ)) {
    if (Reuters.pid.allowedPIDs.indexOf(","+this.pidCodeQ+",") > -1){
      trace("setting pid cookie to " + this.pidCodeQ);
      YAHOO.util.Cookie.set('pid', this.pidCodeQ, { path: '/' });
    } else {
      trace("removing pid cookie");
      YAHOO.util.Cookie.remove('pid');
    }
  }
  this.pidCode = YAHOO.util.Cookie.get('pid');
  trace("pidCode: " + this.pidCode);
  if (Reuters.lang.isNotEmpty(this.pidCode)) {
    // HIDE TRACK-N-SAVE
    Reuters.NO_TNS = true;
    if (this.pidCode != "801" && this.pidCode != "901") {
      // hide a bunch of stuff
      //Reuters.utils.loaddisabledStylesheet('pidCss', '/resources_v2/css/rcom.pid.css');
      void("<link href=\"/resources_v2/css/rcom-pid.css\" rel=\"stylesheet\" />");
    }

    // HACK for summits white label
    if (this.pidCode == "600") {
    /*
      addLoadEvent(function() {
      var grid = document.getElementById("grid");
      if (grid) {
        var gridDivs = grid.getElementsByTagName("div");
        var breadcrumbsDiv = null;
        for (var i = 0; i < gridDivs.length; i++) {
          if (gridDivs[i].className == "breadcrumbs") {
            breadcrumbsDiv = gridDivs[i];
            break;
          }
        }
        if (breadcrumbsDiv) {
          var breadcrumbsHTML = '<span class="label">You are here:</span><span class="pathing"><a href="/finance/summits">Industry Summits</a>';
          if (document.location.toString().indexOf('/article') >= 0) {
            breadcrumbsHTML += ' > Article';
          }
          breadcrumbsHTML += '</span>';
          breadcrumbsDiv.innerHTML = breadcrumbsHTML;
          breadcrumbsDiv.style.display = 'block';
        }
      }
      });
    */
    }

    if (this.pidCode != "901") {
      hideAllAds = true;
    } else {
      hideGoogleAds = true;
      hideAllAds = false;
    }
  }
}
Reuters.pid.initialize();
