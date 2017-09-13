
/*tfx:15400934.33*/

/**
* Die tfx.js ist ein veraenderter Multiteaser, der
* nur aus Performance-Gründen separat gehalten wurde und deswegen nicht in der sfx.js integriert ist.
* Die sfx.js muss im Dokument eingebunden sein für Start der Rotation (onloaddisabled-Funktion)
*/
var de=de || {};
de.bild = de.bild || {};
//hier verwendetes Objekt
de.bild.tfx = de.bild.tfx || {};
//Zaehler fuer temporaere ID-Vergabe
de.bild.tfx.zz=1000;
/**
* tfx-Teaser-Onclick
* Die Onclick-Funktion: Schaltflächen aktiv/inaktiv setzen
* @param {object} obj Die angeklickte Schaltflaeche wird uebergeben
*/
de.bild.tfx.click=function (obj){
 var tsA=obj.parentNode.parentNode;
 for(var i=0;i<tsA.li.length;i++){
  if(obj==tsA.li[i]){
   tsA.akt=i;
   tsA.li[i].className="active";
   tsA.div[i].style.visibility="visible";
  }else{
   tsA.li[i].className="";
   tsA.div[i].style.visibility="hidden";
  }
 }
 return false;
};
/**
* Rotations-Funktion
* @param {string} was Die ID des zu rotiuerenden Objekts wird uebergeben
*/
de.bild.tfx.rotation=function(was){
 var tsA=document.getElementById(was);
 //wenn nicht mausover auf dem Teaser und Dokument vollständig geladen
 if(tsA.block==0&&de.bild.sfx.Divs.ls==1){
  for(var i=0;i<tsA.div.length;i++){
   if(i==tsA.akt){
    //die alte Schaltfläche wird inaktiv, falls es eine gibt
    if (tsA.akt <= tsA.li.length - 1) {
     tsA.li[tsA.akt].className = "";
    }
    //der alte Anzeigebereich wird nach hinten verlegt
    tsA.div[tsA.akt].style.zIndex=1001;
   }else{
    //alle anderen Anzeigebereiche bleiben unsichtbar
    tsA.div[i].style.visibility="hidden";
   }
  }
  //der nächste Teaser wird festgelegt
  tsA.akt++;
  if(tsA.akt>=tsA.div.length){tsA.akt=0}
  //nächste Schaltfläche aktiv
  if (tsA.akt <= tsA.li.length-1) {
   tsA.li[tsA.akt].className = "active";
  }
  //nächster Anzeigebereich nach vorne
  tsA.div[tsA.akt].style.zIndex=1002;
  //und sichtbar
  tsA.div[tsA.akt].style.visibility="visible";
  //mit opacity=0 wird dann die Fade-Funktion gestartet
  tsA.div[tsA.akt].opac=0;
  de.bild.tfx.fade(was,tsA.akt);
 }
};
/**
* Die Fade-Funktion: In fünf Schritten zur vollständigen Sichtbarkeit
* @param {string} was Die ID des sichtbar werdenden Teasers
* @param {int}  wohin Die aktuelle Opacity des Teasers
*/
de.bild.tfx.fade=function(was,wohin){
 var tsA=document.getElementById(was);
 tsA.div[wohin].opac+=20;
 //opacity für FireFox
 tsA.div[wohin].style.opacity=tsA.div[wohin].opac/100;
 //opacity für IE
 tsA.div[wohin].style.filter="Alpha(opacity="+tsA.div[wohin].opac+")";
 if(tsA.div[wohin].opac<100){
  setTimeout('de.bild.tfx.fade("'+was+'",'+wohin+')',50)
 }else{
  tsA.div[wohin].style.opacity=1;
  tsA.div[wohin].style.filter="Alpha(opacity=100)";
 }
};
/**
* tfx-Teaser-Init-Funktion
* @param {string} was Die ID des aktuellen Teasers
*/
de.bild.tfx.init=function(was){
 var tsA=document.getElementById(was);
 //Die Anzeigebereiche + Zähler
 tsA.div=new Array();
 tsA.zz=0;
 //Die Schaltbereiche + Zähler
 tsA.li=new Array();
 tsA.zzz=0;
 //Kopplung von Schaltfläche mit Anzeigebereich
 for(var i=0;i<tsA.childNodes.length;i++){
  if(tsA.childNodes[i].nodeName=="DIV"){
   tsA.div[tsA.zz]=tsA.childNodes[i];
   tsA.zz++;
  }
  if(tsA.childNodes[i].nodeName=="UL"){
   for(j=0;j<tsA.childNodes[i].childNodes.length;j++){
    if(tsA.childNodes[i].childNodes[j].nodeName=="LI"){
     tsA.li[tsA.zzz]=tsA.childNodes[i].childNodes[j];
     tsA.zzz++;
    }
   }
  }
 }
 //Zeitdauer der Rotation auslesen
 tsA.rot=tsA.div[0].className.match(/rotation(\d+)/);
 tsA.rot=tsA.rot>0?tsA.rot:5;
 //Blocker und ersten Teaser festlegen
 tsA.block=0;
 tsA.akt=0;
 //Mausover/out-Blocker setzen
 tsA.onmouseover=function(){tsA.block=1;};
 tsA.onmouseout=function(){tsA.block=0;};
 //Onclicks auf die Schaltflächen setzen
 for(var i=0;i<tsA.li.length;i++){
  tsA.li[i].onclick=function(){return de.bild.tfx.click(this)};
 }
 //Start der Rotation
 setInterval('de.bild.tfx.rotation("'+was+'")',tsA.rot*1000);
};
/**
* tfx-Teaser-Erkennung
*/
//alle Div-Tags der Seite
de.bild.tfx.Divs=document.getElementsByTagName('div');
//For alle Divs der Seite wird,
for(var i=0;i<de.bild.tfx.Divs.length;i++){
    //Sonderregel für lead Layout ls8-3
    //wenn ein Div mit Klasse Pos2 gefunden wird, wird geprüft, ob innerhalb ein ateaser Content vorhanden ist und dann die Klasse tfx hinzugefügt
    if (de.bild.tfx.Divs[i].parentNode.className.match(/lead ls8-3/) && de.bild.tfx.Divs[i].className.match(/pos2/)) {
        de.bild.tfx.innerDivs=de.bild.tfx.Divs[i].getElementsByTagName('div');
        for (var j= 0; j < de.bild.tfx.innerDivs.length; j++) {                
            if (de.bild.tfx.innerDivs[j].className.match(/ateaser-content/)){
                //Wenn keine tfx Klasse vorhanden ist, wird eine geschrieben
                if (!de.bild.tfx.Divs[i].className.match(/tfx/)) {
                   de.bild.tfx.Divs[i].className = de.bild.tfx.Divs[i].className + " tfx";
                }
                break;
            }
        }
    }
 //wenn eine Klassenname "tfx" gefunden wird
 if(de.bild.tfx.Divs[i].className.match(/tfx/)){
  de.bild.tfx.zz++;
  de.bild.tfx.Divs[i].id=de.bild.tfx.Divs[i].id?de.bild.tfx.Divs[i].id:"tfx"+de.bild.tfx.zz;
  de.bild.tfx.init(de.bild.tfx.Divs[i].id);
    
 }
}
de.bild.tfx.leipzigBRotate = function(){
 var regioTeaser ="";
 var regioUL ="<ol>";
 var isDoublette = false;
 
 var feedUrl = "rssfeeds/vw-home/vw-home-16725562,short=1,view=rss2.bild.xml";
 var extraFeedUrl="-16725492,feed=schlagzeilen-des-tages.bild.html";
 
 var noAlternate=true;
 jQuery.ajax({
     url: feedUrl,
     dataType:"text",
     success: function (data) {
    if (window.DOMParser)
      {
       parser=new DOMParser();
       data=parser.parseFromString(data,"text/xml");
      }
   else // Internet Explorer
      {
       xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
       xmlDoc.async="false";
       xmlDoc.loaddisabledXML(data);
       data=xmlDoc;
      }
   //wenn Elemente gefunden werden, andernfalls existiert ein Super A, dann müssen
 //die Artikel aus dem Artikel-Feed mit den Artikeln aus dem A-Teaser Feed abgeglichen werden
    if (jQuery(data).find("item").length > 0) {
    jQuery(data).find("item").each(function(index, value){
     if (index < 10) {
      regioTeaserTemp = '<div class="hentry slide-item" style="display:none">';
      jQuery(this).find("link").each(function(){
       var link = jQuery(this).text();
       //Nach Doubletten im Aufmacherblock suchen
       var doublette = jQuery("#RegioLeipzigBRotation").parents(".lead.ls8-3");
       isDoublette = false;
       doublette.find("a").each(function(){
        if (link.indexOf(jQuery(this).attr("href")) != -1) {
         isDoublette = true;
        }
       });
       regioTeaserTemp += !isDoublette ? '<a rel="bookmark" href=' + link + '>' : '';
      });
      var title = "";
      jQuery(this).find("title:first").each(function(){
       title = jQuery(this).text();
      });
      var picFound = false;
      jQuery(this).find("enclosure:last").each(function(){
       picFound = true;
       if (jQuery(this).attr("url").indexOf("/fotos/a-") != -1 && !isDoublette) {
        regioTeaserTemp += '<img alt="' + title + '" src=' + jQuery(this).attr("url") + 'width="294" height="154" class="photo" /></a>';
        regioUL += "<li><a href='#'>" + title + "</a></li>";
        regioTeaserTemp += '</div>';
       }
       else {
        regioTeaserTemp = "";
       }
      });
      if (picFound) {
       regioTeaser += regioTeaserTemp;
      }
     }
    });
   }
   else{
     noAlternate = false;
     jQuery.ajax({
     url: feedUrl.replace(",short=1",""),
     dataType:"text",
     success: function (data) {
     if (window.DOMParser)
       {
         parser=new DOMParser();
         data=parser.parseFromString(data,"text/xml");
       }
     else // Internet Explorer
       {
         xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
         xmlDoc.async="false";
         xmlDoc.loaddisabledXML(data);
         data=xmlDoc;
       }
    var articles = new Array();
  jQuery(data).find("item").each(function(index, value){
   if (index < 7){
    jQuery(this).find("link").each(function(){
           var link = jQuery(this).text();
           //Nach Doubletten im Aufmacherblock suchen
           var doublette = jQuery("#RegioLeipzigBRotation").parents(".lead.ls8-3");
           isDoublette = false;
           doublette.find("a").each(function(){
           if (link.indexOf(jQuery(this).attr("href")) != -1) {
            isDoublette = true;
           }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
          });
          if(!isDoublette){articles.push(link);};
        });
   }
  });
 
  //Nach den A-Teaser Grafiken suchen, die vorher gesammelten Links beinhalten
  jQuery.ajax({
     url: extraFeedUrl,
     dataType:"text",
     success: function (data) {
     if (window.DOMParser)
       {
         parser=new DOMParser();
         data=parser.parseFromString(data,"text/xml");
       }
     else // Internet Explorer
       {
         xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
         xmlDoc.async="false";
         xmlDoc.loaddisabledXML(data);
         data=xmlDoc;
       }
   
  var alternateContent = new Array();
 
    jQuery(data).find("item").each(function(index, value){
   var temp = jQuery(this);
   jQuery(this).find("link").each(function(){
    //prüfen, ob der Link im article-Array vorhanden ist
    if (jQuery.inArray(jQuery(this).text(),articles) != -1) {
     var obj = new Object();
     obj.link = jQuery(this).text();
     obj.order = jQuery.inArray(jQuery(this).text(),articles);
     temp.find("enclosure:last").each(function(){
      if (jQuery(this).attr("url").indexOf("/fotos/a-") != -1) {
       obj.picture = jQuery(this).attr("url");
      }
     });
     obj.title = temp.find("title").text();
     alternateContent.push(obj);
          }
   });
  });
  regioUL="<ol>";
  //Ersatz-Teaser zusammenbauen
  for(var i = 0; i <alternateContent.length;i++){
   var obj = alternateContent[i];
   if (obj.picture) {   
    regioTeaserTemp = '<div class="hentry slide-item" style="display:none">';
    regioTeaserTemp += '<a rel="bookmark" href=' + obj.link + '>';
    regioTeaserTemp += '<img alt="' + obj.title + '" src=' + obj.picture + 'width="294" height="154" class="photo" /></a>';
    regioUL += "<li><a href='#'>" + obj.title + "</a></li>";
    regioTeaserTemp += '</div>';   
    regioTeaser += regioTeaserTemp;
   }
  }
      //hier wird der Teaser gestartet, falls ein Super-A
      regioUL+="</ol>";
   jQuery("#RegioLeipzigBRotation").html(regioUL+regioTeaser+"</div>");
   de.bild.tfx.initRotationTeaser("#RegioLeipzigBRotation");
 
  }
  });
 
  }
  });
   }
  //wenn kein Super A-vorhanden ist, wird hier das Modul aktiviert
  if (noAlternate) {
   regioUL += "</ol>";
   jQuery("#RegioLeipzigBRotation").html(regioUL + regioTeaser + "</div>");
   de.bild.tfx.initRotationTeaser("#RegioLeipzigBRotation");
  }
  }
});
}
de.bild.tfx.initRotationTeaser = function(id){
    if (id) {
        var teaserElement = jQuery(id);
        teaserElement.find(".slide-item:first").show();
        teaserElement.find("ol li:first").addClass("active");
        var interval = setInterval(function(){
            de.bild.tfx.showNextTeaser(teaserElement);
        }, 5000);
        teaserElement.mouseenter(function(){
            clearInterval(interval);
        });
      
        teaserElement.mouseleave(function(){
            clearInterval(interval);
            interval = setInterval(function(){
                de.bild.tfx.showNextTeaser(teaserElement);
            }, 5000);
        });
    }
  
    teaserElement.find("ol li").click(function(){
        if (jQuery(this).attr("class").indexOf("active") == -1) {
            de.bild.tfx.showNextTeaser(teaserElement, jQuery(this).index());
        }
        return false;
    });
  
}
de.bild.tfx.showNextTeaser = function(teaser, clickedTeaser){
    var teaserElement = teaser;
    var currentActiveTeaser = null;
  
    teaserElement.find(".slide-item").each(function(){
        if (jQuery(this).css("display") != "none") {
            currentActiveTeaser = jQuery(this);
        }
    });
    currentActiveTeaser.fadeOut(500, function(){
    });
  
    //nächsten Teaser anzeigen
  
    if (clickedTeaser == null) {
        if (currentActiveTeaser.next(".slide-item").length != 0) {
            currentActiveTeaser.next(".slide-item").fadeIn(500);
            teaserElement.find("ol li").removeClass("active");
            var indexe = currentActiveTeaser.index();
            teaserElement.find("ol li").eq(indexe).addClass("active");
        }
        else {
            teaserElement.find(".slide-item:first").fadeIn(500);
            teaserElement.find("ol li").removeClass("active");
            teaserElement.find("ol li").eq(0).addClass("active");
        }
      
    }
  
    //geclickten Teaser anzeigen
  
    else {
        teaserElement.find("ol li").removeClass("active");
        teaserElement.find("ol li").eq(clickedTeaser).addClass("active");
        teaserElement.find(".slide-item").eq(clickedTeaser).fadeIn(500);
    }
}
/*sfx:15400936.58*/

/** Die sfx.js reagiert auf Tags und Classnames der gesamten Seite und gehoert in den Fuß der Seite.
 *
 * Bei folgenden Events ist spaeter eventuell eine Absprache mit anderen Scripts notwendig:
 * document.onloaddisabled (nicht DOM-onloaddisabled) - fuer Rotationsfunktionen
 * document.onkeydown - fuer die ESC-Taste
 * document.onmousemove fuer Bildvergroeßerung und ToolTip
 */
/**
 * Variablen-Deklaration
 */
//das Hauptobjekt
var de = de || {};
de.bild = de.bild || {};
//hier verwendetes Objekt
de.bild.sfx = de.bild.sfx || {};
//Grafikpfade fuer Bildvergroesserung (aus Konfig-Datei)
de.bild.sfx.SHADOW="httpdisabled://bilder.bild.de/fotos/shadow-popup-15401718/Bild/2.bild.png";
de.bild.sfx.CLOSEGIF="httpdisabled://bilder.bild.de/fotos/btn-schliessen-15401688/Bild/2.bild.gif";
de.bild.sfx.FOTOGALBACK="httpdisabled://bilder.bild.de/fotos/bg-alt-fg1-15401952/Bild/2.bild.gif";

//Texte fuer Bildvergroesserung
de.bild.sfx.BV1 = "Doppelklick zum  Schlie&szlig;en";
de.bild.sfx.BV2 = "Schlie&szlig;en";
//z-Indizes
de.bild.sfx.BACK = 1000;
de.bild.sfx.MIDDLE = 1005;
de.bild.sfx.FRONT = 1010;
de.bild.sfx.AKTION = 99999;
//Zaehler fuer temporaere ID-Vergabe
de.bild.sfx.zz = 1000;
//Blocker fuer KTG-Galerien wegen Flackerns
de.bild.sfx.ktgblock = 0;
//Erkennung einer Newsticker-Seite
de.bild.sfx.ntAside = 0;
//Grosse Schleife und Pagintor Ausgefuehrt
de.bild.sfx.ausgefuehrt = de.bild.sfx.paginatorLaeuft = false;
de.bild.sfx.stgOutDelay = null;
/**
 * Multiteaser-Funktionen------------------------
 * Die Rotationsfunktion wird fuer automatische Rotation benoetigt
 * @param {String} was Id des entsprechenden Multiteasers
 */
de.bild.sfx.mtrotat = function(was){
    //Der gesamte, rotierende Teaser
    de.bild.sfx.mtnow = document.getElementById(was);
    if (de.bild.sfx.mtnow) {
   
        //Wenn kein aktueller Teaser, dann zweiter Teaser aktuell (bei Anfang der Rotation)
        de.bild.sfx.mtnow.akt = (typeof de.bild.sfx.mtnow.akt == "number") ? de.bild.sfx.mtnow.akt : 1;
       
        //initialisiere letzten Teaser (der dann vom aktuellen ueberschrieben wird)
        de.bild.sfx.mtnow.alt = (typeof de.bild.sfx.mtnow.alt == "number") ? de.bild.sfx.mtnow.alt : 0;
       
        //initialisiere Vergleichszaehler
        de.bild.sfx.mtz = 0;
       
        //Rotation nur, Wenn Maus außerhalb des Rotation-Teasers und Dokument geladen
        if (document.getElementById(was).mtblock == 0 && de.bild.sfx.Divs.ls == 1) {
       
            //Fuer alle Kindelemente
            for (var j = 0; j < de.bild.sfx.mtnow.childNodes.length; j++) {
           
                //die ein DIV sind und den Klassennamen "hentry haben", also alle Schaltflaechen
                if (de.bild.sfx.mtnow.childNodes[j].nodeName == "DIV" && de.bild.sfx.mtnow.childNodes[j].className.match(/hentry/)) {
               
                    //alle Schaltflaechen auf "inaktiv"
                    if (de.bild.sfx.mtz != de.bild.sfx.mtnow.akt) {
                        de.bild.sfx.mtnow.childNodes[j].className = de.bild.sfx.mtnow.childNodes[j].className.replace(/ active/g, "");
                       
                        //außer der aktiven
                    }
                    else {
                        de.bild.sfx.mtnow.childNodes[j].className += " active";
                    }
                    de.bild.sfx.mtz++;
                }
               
                //alle Anzeigeflaechen
                if (de.bild.sfx.mtnow.childNodes[j].className == "mtA") {
               
                    //die aktive Anzeigeflaeche
                    if (de.bild.sfx.mtnow.zz == de.bild.sfx.mtnow.akt) {
                        de.bild.sfx.mtnowa = de.bild.sfx.mtnow.childNodes[j];
                        de.bild.sfx.mtnowa.style.zIndex = de.bild.sfx.FRONT;
                        de.bild.sfx.mtnowa.style.display = "block";
                        de.bild.sfx.mtnowa.style.opacity = 0;
                        de.bild.sfx.mtnowa.style.filter = "alpha(opacity=0)";
                        de.bild.sfx.mtnowa.opac = 0;
                        de.bild.sfx.zz++;
                        de.bild.sfx.mtnowa.id = de.bild.sfx.mtnowa.id ? de.bild.sfx.mtnowa.id : "mtfade" + de.bild.sfx.zz;
                       
                        //einfaden der Anzeigeflaeche
                        de.bild.sfx.mtfade(de.bild.sfx.mtnowa.id);
                    }
                    else {
                   
                        //die alte, aktive Anzeigeflaeche
                        if (de.bild.sfx.mtnow.zz == de.bild.sfx.mtnow.alt) {
                            de.bild.sfx.mtnow.childNodes[j].style.zIndex = de.bild.sfx.MIDDLE;
                        }
                        else {
                       
                            //alle inaktiven Schaltflaechen
                            de.bild.sfx.mtnow.childNodes[j].style.zIndex = de.bild.sfx.BACK;
                            de.bild.sfx.mtnow.childNodes[j].style.filter = "Alpha(opacity=0)";
                            de.bild.sfx.mtnow.childNodes[j].style.opacity = 0;
                        }
                    }
                    de.bild.sfx.mtnow.zz++;
                }
            }
            de.bild.sfx.mtnow.zz = 0;
            de.bild.sfx.mtnow.alt = de.bild.sfx.mtnow.akt;
           
            //Rotationsgrenzen
            if (de.bild.sfx.mtnow.akt < de.bild.sfx.mtz - 1) {
                de.bild.sfx.mtnow.akt++;
            }
            else {
                de.bild.sfx.mtnow.akt = 0;
            }
        }
        setTimeout("de.bild.sfx.mtrotat('" + was + "')", de.bild.sfx.mtnow.zeit * 1000);
    }
};
/**
 * Die Fade-Funktion fuer das aktuelle Bild
 * @param {String} was Id des entsprechenden Multiteasers
 */
de.bild.sfx.mtfade = function(was){
    //Das aktuelle Bild
    var mtfadeakt = document.getElementById(was);
   
    //Erhoehe die opacity-Eigenschaft
    mtfadeakt.opac += 20;
   
    //Solange nicht vollstaendig sichtbar,
    if (mtfadeakt.opac < 100) {
   
        //zeige den erhoehten Opacity-Wert (IExplorer)
        mtfadeakt.style.filter = "alpha(opacity=" + mtfadeakt.opac + ")";
       
        //zeige den erhoehten Opacity-Wert (FF)
        mtfadeakt.style.opacity = mtfadeakt.opac / 100;
       
        //wiederhole die Fade-Funktion mit diesem Objekt
        setTimeout("de.bild.sfx.mtfade('" + was + "')", 50);
    }
    else {
   
        //Bild voll sichtbar (IExplorer)
        mtfadeakt.style.filter = "alpha(opacity=100)";
       
        //Bild voll sichtbar (FF)
        mtfadeakt.style.opacity = 1;
    }
};
/**
 *Die Mauswechsel-Funktion auf den Schaltflaechen und den Bildern des Multiteasers
 */
de.bild.sfx.multiteaseraktiv = function(){
    //Blocker auf "1" (das stoppt die Rotationsfunktion)
    this.parentNode.mtblock = 1;
   
    //Zaehler fuer aktuellen Teaser
    this.parentNode.wmt = 0;
    var obj = this.parentNode.childNodes;
   
    //For aller Kindelemente des Multiteasers, alle Schaltflaechen
    for (var j = 0; j < obj.length; j++) {
        if (obj[j].nodeName == "DIV" && obj[j].className.match(/hentry/)) {
       
            //werden inaktiv
            obj[j].className = obj[j].className.replace(/ active/g, "");
            this.parentNode.wmt += 1;
           
            //die aktuelle Schaltflaeche wird vermerkt (Kopplung mit den Bildflaechen)
            if (obj[j] == this) {
                this.now = this.parentNode.wmt - 1;
            }
        }
    }
   
    //aktuelle Schaltflaeche wird aktiv
    this.className += " active";
   
    //alle Bilder
    for (var j = 0; j < obj.length; j++) {
        if (obj[j].className == "mtA") {
       
            //das aktive Bild nach oben
            if (this.zz == this.now) {
                obj[j].style.zIndex = de.bild.sfx.FRONT;
                obj[j].style.display = "block";
                obj[j].style.filter = "Alpha(opacity=100)";
                obj[j].style.opacity = 1;
            }
            else {
           
                //alle anderen nach unten
                obj[j].style.zIndex = de.bild.sfx.BACK;
            }
            this.zz++;
        }
    }
    this.zz = 0;
};
/**
 * Ziehharmonika-Teaser-Funktionen ---------------------
 */
//Die Ziehharmonika-Funktion
de.bild.sfx.accordeon = function(){
    //alle Geschwister
    for (var i = 0; i < this.parentNode.childNodes.length; i++) {
   
        //außer "listing"
        if (this.parentNode.childNodes[i].className == "listing") {
        }
        else {
       
            //werden inaktiv
            this.parentNode.childNodes[i].className = "hentry";
        }
    }
   
    //der aktuellle wird aktiv
    this.className = "hentry active";
};
//Die Ziehharmonika-Funktion fuer Ranking
de.bild.sfx.accordeonRanking = function(){
    //alle Geschwister
    for (var i = 0; i < this.parentNode.childNodes.length; i++) {
        //werden inaktiv
        this.parentNode.childNodes[i].className = "hentry";
    }
   
    //der aktuellle wird aktiv
    this.className = "hentry active";
};
/**
 * JavaScript-im-Snippet-aktivieren-Funktion
 * @param {String} was Inhalt des Snippets
 */
de.bild.sfx.javascriptGo = function(was){
    //das Snippet nach Script-Tags durchsuchen
    var scriptText = was.match(/\<SCRIPT(.|\s)+?\<\/SCRIPT\>/gi);
    if (scriptText) {    
        //fuer alle gefundenen Script-Tags
        for (var i = 0; i < scriptText.length; i++) {          
            //im DOM ein neues Script anlegen
            var newScript = document.createElement('script');          
            //wenn Script-Tag mit "src"
            if (scriptText[i].match(/\<SCRIPT.+?src\=\"(.+?)\"/i)) { 
                      
                //das neue Script bekommt diese src
                newScript.src = RegExp.$1;
                //check, ob das Skript schon eingebunden ist und hängt es dann in den Head der Seite
                var scriptIncluded = false;               
                var scripts = document.getElementsByTagName('head')[0].getElementsByTagName('script');
               
                for (var j= 0; j < scripts.length; j++) {
                    if (scripts[j].src == newScript.src) {
                        scriptIncluded = true;
                        break;
                    }
                }
                if (!scriptIncluded) {
                    //den Type Script-Tags
                    newScript.type = "text/javascript";
                    //das neue Script wird ins DOM gehaengt              
                    document.getElementsByTagName('head')[0].appendChild(newScript);
                }
            }
            else {
                //entferne die Script-Tags selber
                scriptText[i] = scriptText[i].replace(/\<SCRI.+?\>|<\/SCRIPT\>/gi, "");
                //Funktionsaufrufe werde per eval sofort ausgeführt.
                eval(scriptText[i]);
            }
        }
    }
};
/**
 * Snippet-Funktion
 * universeller XML-Request
 * @param {String} was Pfad zum Snippet
 * @param {String}        was   Id des zu wechselnden Bereiches
 * @param {String|Object} wohin Id des entsprechenden Multiteasers | angeklicktes Objekt
 * @param {Object}        obj   optional, angeklicktes Objekt aktiviert die TabLeiste
 */
function paginator(was, wohin, obj){
de.bild.sfx.paginatorLaeuft = true;
    //Aufgrund des IE Bugs, wird hier das Standardevent bei A-Tags unterbunden 
    if (window.event) {
        var e = window.event;
        if (window.event.srcElement.tagName == "A") {
            e.returnValue = false;
        }
    }
   
    //wenn "wohin" keine ID, sondern Objekt (this) übergibt, dann
    if (typeof wohin == 'object') {
   
        //wird aus dem wohin=objekt ein wohin=ID (siehe Funktion)
        wohin = de.bild.sfx.ObjParToId(wohin, wohin.className);
       
        //wenn z.B. Fotogalerie noch am faden ist, dann Abbruch der Funktion
        if (wohin == "fade" || !wohin) {
            return false;
        }
    }
   
    //wenn Tabs aktiviert/deaktiviert werden muessen
    if (typeof obj == "object") {//TabAktivator
        var par = obj.parentNode.parentNode.childNodes;
        if (par) {
            for (var i = 0; i < par.length; i++) {
                if (par[i].className) {
               
                    //alle Tabs inaktiv
                    par[i].className = par[i].className.replace(/active/, "");
                }
            }
           
            //das aktuelle Tab wird aktiv
            if (obj.parentNode) {
                obj.parentNode.className += " active";
            }
        }
    }
   
    //XML-Request mit Browserweiche
    var http = (window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
   
    //entfernt XML-Fehlermeldungen im FF
    if (http.overrideMimeType) {
        http.overrideMimeType('text/html');
    }
   
    //bei Ladestatus-Wechsel
    http.onreadystatechange = function(){
        var ziel = document.getElementById(wohin);
       
        //wenn Schnipsel komplett geladen
        if (http.readyState == "complete" || http.readyState == 4) {
       
            //wenn Fotogalerie
            if (ziel.parentNode.className.match(/photoGallery/)) {
           
                //Start des Galerie-Faders
                de.bild.sfx.fgfadeinit(http.responseText, wohin);
               
            }
            else {
           
                //alles andere sofort Schnipsel schreiben
                ziel.innerHTML = http.responseText;
                if(de.bild.sfx.stgOutDelay){
                    de.bild.sfx.paginatorLaeuft=false;
                    de.bild.sfx.stgout(de.bild.sfx.stgOutDelay);
                    de.bild.sfx.stgOutDelay=null;
                }
                de.bild.sfx.paginatorLaeuft=false;
               
                //Snippet-JavaScript aktivieren
                de.bild.sfx.javascriptGo(http.responseText);
               
                //Blocker für KTG-Galerien wegen Flackern
                de.bild.sfx.ktgblock = 1;
               
                //Mausereignisse neu initialisieren               
                //Wenn es sich nicht um eine KTG handelt init ausführen
                if (ziel.className.indexOf("shorttext") == -1) {
                    de.bild.sfx.init();
                }
               
                if (typeof QGTV != "undefined" && typeof QGTV.initialize == "function") {
                    QGTV.initialize()
                };
               
                //fuer NewsTicker: wenn dritter Parameter eine Zahl
                if (typeof obj == "number") {//welcher NewsTicker
                    //starte den NewsTicker-Wechsel (wichtig beim "Rueckwaertstickern" im NewsTicker, Zeitverzoegerung wegen IE6-Flackern)
                    setTimeout('de.bild.sfx.ntturn(' + obj + ')', 1);
                }
               
                //fuer Ranking, unteres Snippet
                if (ziel.parentNode.className.match(/ranking/)) {
                    for (var i = 0; i < ziel.childNodes.length; i++) {
                        ziel.childNodes[i].onmouseover = de.bild.sfx.accordeonRanking;
                    }
                }
               
if (document.getElementsByTagName('body')[0] && document.getElementsByTagName('body')[0].id === 'video') {
if (de.bild.videoRating) {
de.bild.videoRating.resetRating();
}
  
}
                //fuer Ranking, oberes Snippet
                if (ziel.getElementsByTagName('div')[0]) {
                    if (ziel.getElementsByTagName('div')[0].className.match(/ranking/)) {
                        for (var i = 0; i < ziel.getElementsByTagName('div')[2].childNodes.length; i++) {
                            ziel.getElementsByTagName('div')[2].childNodes[i].onmouseover = de.bild.sfx.accordeonRanking;
                        }
                    }
                }
               
                //wenn in Overlay
                if (wohin == "aktionsbox") {
                    with (ziel) {
                        style.display = "block";
                       
                        //Ausrichtung des Overlayers
                        style.left = document.documentElement.clientWidth / 2 - clientWidth / 2 + "px";
                        style.top = document.documentElement.clientHeight / 2 - clientHeight / 2 + ((document.compatMode && !window.XMLHttpRequest) ? document.documentElement.scrollTop : 0) + "px";
                    }
                   
                    //wenn fuer "send-a-friend", dann URL einfuegen
                    if (document.getElementById('safIM')) {
                        document.getElementById('safIM').value = location;
                    }
                    //und das Message-Feld auf 1500 Zeichen begrenzen
                    if (document.getElementById('safMESSAGE')) {
                        document.getElementById('safMESSAGE').onkeydown = document.getElementById('safMESSAGE').onblur = function(){
                            if (this.value.length > 1500) {
                                this.value = this.value.substr(0, 1500);
                            }
                        };
                    }
                }
               
            }
        }
    };
   
    //oeffnet asynchron XML-Request mit "POST" oder "GET"
    if (obj == "POST") {
        var poststr = "";
       
        if (wohin == 'aktionsbox') {
            poststr = "safIM=" + escape(encodeURI(document.getElementsByName("safIM")[0].value)) +
            "&safFROM=" +
            escape(encodeURI(document.getElementsByName("safFROM")[0].value)) +
            "&safTO=" +
            escape(encodeURI(document.getElementsByName("safTO")[0].value)) +
            "&safMESSAGE=" +
            escape(encodeURI(document.getElementsByName("safMESSAGE")[0].value));
            if (document.getElementsByName("safBack")[0]) {
                poststr += "&safBack=" + escape(encodeURI(document.getElementsByName("safBack")[0].value));
            }
        }
        void('POST', unescape(was), true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.setRequestHeader("Content-length", poststr.length);
        http.setRequestHeader("Connection", "close");
        http.send(poststr);
    }
    else {
        //Schnipsel anfordern
        void("GET", unescape(was), true);
        http.send(null);
       
    }
   
    //den "href" im aufrufenden HTML-Tag totlegen
    de.bild.sfx.paginatorLaeuft=false;
    return false;
}
/**
 * Objekt.Parent-zu-ID-Funktion
 * Umrechner, wenn Paginator nicht mit ID, sondern mit Klick-Objekt aufgerufen wird
 * das gewünschte Elternelement (mit Klassennamen "pagination") bekommt dann eine temporaere ID.
 * (Fuer Fotogalerie die Namen "fgloaddisableder" und "fgbase")
 * @param {Object} wohin aktives Objekt
 */
de.bild.sfx.ObjParToId = function(wohin, classname){
    var par = wohin.parentNode;
   
    //wenn kein Elternelement mehr vorhanden
    if (!par || par.length == 0) {
        return null;
    }
   
    //wenn der Paginierungsbereich gefunden wird
    if (par.className && par.className.match(/pagination/)) {
   
        //ID-Zähler höher
        de.bild.sfx.zz++;
       
        //ID zusammenbauen
        var tempId = par.id ? par.id : "pagination" + de.bild.sfx.zz;
        //    var tempId="pagination"+de.bild.sfx.zz;
       
        //dieses Elternelement bekommt eine temporaere ID
        par.id = tempId;
       
        //und die Funktion gibt diese ID als String zurück zur weiteren Verarbeitung in der Paginator
        return tempId;
    }
   
   
    //fuer Fotogalerien dasselbe für zwei IDs
    if (par.className && par.className.match(/(fgbase|fgloaddisableder)/)) {
        //wenn Fotogalerie nicht am faden ist oder bei AdTag-Aufruf aus IFrame
        if (par.parentNode.used == 0 || !par.parentNode.used || classname == "galAd") {
       
            //welcher Begriff wurde gefunden
            var matched = RegExp.$1;
           
           
            if (!classname) {
                //wenn kein AdTag, ID-Zähler höher
                de.bild.sfx.zz++;
            }
            else {
                //AdTag feststellen
                par.parentNode.galAd = 1;
            }
           
            //ID zusammenbauen
            var tempId = tempId ? tempId : "fg" + de.bild.sfx.zz;
           
            //die erste Div bekommt eine temporaere ID
            par.id = tempId + (matched == "fgbase" ? "base" : "loaddisableder");
           
            //der zweite Div bekommt eine temporaere ID
            for (var i = 0; i < par.parentNode.childNodes.length; i++) {
                var tmp = par.parentNode.childNodes[i];
                if (tmp.className && tmp.className.match(/(fgloaddisableder|fgbase)/)) {
                    if (RegExp.$1 != matched) {
                        tmp.id = tempId + (RegExp.$1 == "fgbase" ? "base" : "loaddisableder");
                    }
                }
            }
           
            //und die Funktion gibt die ID des Loaders als String zurück zur weiteren Verarbeitung in der Paginator
            return tempId + "loaddisableder";
        }
        else {
            return "fade";
        }
    }
   
    //wenn vorher nichts gefunden, ein Elternelement höher berechnen
    return de.bild.sfx.ObjParToId(par, classname);
};
/**
 * Galerie-Fading-Funktion
 * Init-Funktion fuer Fotogalerien mit Fading
 * @param {String} fgneu Id der aktuellen Fotoebene
 * @param {String} wohin Id der aktuellen Galerie
 */
de.bild.sfx.fgfadeinit = function(fgneu, wohin){
    if (!document.getElementById(wohin))
        return false;
    var fgziel = document.getElementById(wohin);
   
    //wenn nicht gerade gefadet wird oder AdTag-Aufruf aus IFrame
    if (fgziel.parentNode.used == 0 || !fgziel.parentNode.used || fgziel.parentNode.galAd == 1) {
   
        //Blocker gegen schnelles Klicken, dadurch immer nur EIN komplettes Fading moeglich
        fgziel.parentNode.used = 1;
       
        //wenn kein AdTag-Aufruf aus IFrame
        if (!fgziel.parentNode.galAd) {
       
            //altes Bild nach hinten
            fgziel.style.zIndex = de.bild.sfx.BACK;
            //wegen IE8-Fehler
            if (fgziel.parentNode.parentNode.parentNode.parentNode.className && fgziel.parentNode.parentNode.parentNode.parentNode.className.match(/lightbox/)) {
                fgziel.parentNode.style.background = "#f5f5f5 url(" + de.bild.sfx.FOTOGALBACK + ") repeat-x 0 -14px";
            }
           
            //Autausch des zu befuellenden Teasers
            fgziel.front = fgziel.front == 0 ? 1 : 0;
            if (fgziel.front == 1) {
                wohin = wohin.replace(/loaddisableder/, "base");
                fgziel = document.getElementById(wohin);
            }
            else {
                var fgbasis = wohin.replace(/loaddisableder/, "base");
                document.getElementById(fgbasis).style.zIndex = de.bild.sfx.BACK;
            }
           
            //neues Bild nach vorn
            fgziel.style.zIndex = de.bild.sfx.FRONT;
        }
       
        //neuen Schnipsel schreiben
        de.bild.sfx.javascriptGo(fgneu); //umbau wg. funktionalitaet der fotogalerie - zu pruefen
        fgziel.innerHTML = fgneu;
       
        //Wert fuer opacity auf 0
        fgziel.opac = 0;
       
        //wegen IE8-Fehler
        if (fgziel.parentNode.parentNode.parentNode.parentNode.className && fgziel.parentNode.parentNode.parentNode.parentNode.className.match(/lightbox/)) {
            fgziel.parentNode.style.background = "#f5f5f5 url(" + de.bild.sfx.FOTOGALBACK + ") repeat-x 0 -14px";
        }
       
        //neues Bild anzeigen und dann faden
        //fgziel.style.display="block";
        fgziel.style.visibility = "visible";
        //Werbung Anzeigefehler korrigieren
        var errTmp = wohin.replace(/loaddisableder/ ,"");
        errTmp = errTmp.replace(/base/, "");
        var tmpLoader = (jQuery("#" + errTmp + "loaddisableder"));
        var tmpBase = (jQuery("#" + errTmp + "base"));
        var tmpIsLoader = (tmpLoader.css("visibility") == "visible");
        var tmpIsBase = (tmpBase.css("visibility") == "visible");
        if (tmpIsLoader && tmpIsBase)
        {
            tmpLoader.css("z-index", de.bild.sfx.FRONT);
            tmpBase.css("z-index", de.bild.sfx.BACK);
        }
        de.bild.sfx.fgfader(wohin);
    }
};
/*
 *Fading-Funktion fuer Fotogalerien
 * @param {String} wohin Id der aktuellen Galerie
 */
de.bild.sfx.fgfader = function(wohin){
    if (!document.getElementById(wohin))
        return false;
    var fgziel = document.getElementById(wohin);
   
    //opacity erhoehen und anzeigen
    fgziel.opac += 20;
    fgziel.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + fgziel.opac + ")";
    fgziel.style.filter = "Alpha(opacity=" + fgziel.opac + ")";
    fgziel.style.opacity = fgziel.opac / 100;
   
    if (fgziel.opac < 100) {
        setTimeout("de.bild.sfx.fgfader('" + wohin + "')", 50);
    }
    else {
   
        fgziel.style.filter = "";
        //Blocker auf unbenutzt
        fgziel.parentNode.used = 0;
       
        //altes Bild erkennen und wegblenden
        if (wohin.match(/loaddisableder/)) {
            var fgalt = wohin.replace(/loaddisableder/, "base");
        }
        else {
            var fgalt = wohin.replace(/base/, "loaddisableder");
        }
        if (fgziel.parentNode.galAd != 1) {
            document.getElementById(fgalt).style.visibility = "hidden";
        }
       
        //AdTag auf unbenutzt
        fgziel.parentNode.galAd = 0;
       
    }
};
/**
 * Aufklapp-Newsticker
 */
//Newsticker aufklappen
de.bild.sfx.displaynt = function(){
    if (this.parentNode.s == 0) {
        this.parentNode.s = 1;
        this.parentNode.className += " nticker-active";
        this.innerHTML = "zuklappen";
        for (var i = 0; i < this.parentNode.getElementsByTagName('ul')[0].getElementsByTagName('li').length; i++) {
            this.parentNode.getElementsByTagName('ul')[0].getElementsByTagName('li')[i].style.display = "block";
            this.parentNode.getElementsByTagName('ul')[0].getElementsByTagName('li')[i].style.height = "15px";
        }
       
    }
    else {
        this.parentNode.s = 0;
        this.parentNode.className = "nticker";
        this.innerHTML = "mehr...";
    }
    return false;
};
//wegen x-facher Mausover/out-Effekte ueber dem Newsticker
//erfolgt in den beiden Funktionen hier drunter ein Zeitvergleich
//und ein Vergleich der Over/out-Events
de.bild.sfx.ntaus = function()
{
    if (this.over == 0) { this.over = 1; } 
    this.out++;
    this.t = new Date().getTime();
    setTimeout('de.bild.sfx.ntmachzu("' + this.id + '")', 1000)
};
de.bild.sfx.ntmachzu = function(was)
{
    var obj = document.getElementById(was);
    obj.f = new Date().getTime();
    if (obj.over == obj.out && obj.f - obj.t >= 990) {
        obj.s = 0;
        obj.className = "nticker";
        obj.getElementsByTagName('a')[0].innerHTML = "mehr...";
    }
};
/*
 * hier wird der (nicht ausgeklappte) Newsticker rotiert
 * @param {String} was des aktuellen NT
 */
de.bild.sfx.ntrotat = function(was){
    var obj = document.getElementById(was);
    if (obj) {
        //wenn nicht Mausover und Seite geladen
        if (obj.over == obj.out && de.bild.sfx.Divs.ls == 1) {
            obj.li = obj.getElementsByTagName('ul')[0].getElementsByTagName('li');
            if (obj.zz >= obj.li.length) {
                obj.zz = 0;
            }
            for (var i = 0; i < obj.li.length; i++) {
           
                //Anzahl der jeweils angezeigten Links (3)
                if (i < obj.zz || i > obj.zz + 2) {
                    obj.li[i].style.display = "none";
                }
                else {
                    obj.li[i].style.display = "block";
                   
                    //letzter Link bekommt mehr Hoehe
                    if (i == obj.li.length - 1) {
                        obj.li[i].style.height = "100px";
                    }
                }
            }
            obj.zz += 3;
        }
        setTimeout('de.bild.sfx.ntrotat("' + was + '")', obj.zeit * 1000);
    }
};
/**
 * Ein- und mehrzeiliger Newsticker
 * @param {Object} obj aktuelles Obekt
 * @param {Int} tar Zaehler
 */
//Newstickerwechsel
de.bild.sfx.ntMore = function(obj, tar){
    //wenn einzeilger Ticker
    if (obj.className.match(/show-news/)) {
        for (var i = 0; i < obj.getElementsByTagName('li').length; i++) {
            //alles ausblenden
            obj.getElementsByTagName('li')[i].style.display = "none";
        }
       
        //aktuelle Nachricht hochzaehlen
        obj.akt += tar;
        //Grenzbehandlung
        obj.akt = obj.akt < 0 ? obj.anz - 1 : obj.akt == obj.anz ? 0 : obj.akt;
        //und einblenden
        obj.getElementsByTagName('li')[obj.akt].style.display = "block";
    }
    //bei Fuenfer-Newsticker
    else {
        //Inhalt leeren
        obj.getElementsByTagName('ul')[0].innerHTML = "";
        //und neu zusammenstellen
        for (var i = 0; i < 5; i++) {
            //aktuelle Nachricht hochzaehlen
            obj.akt += tar;
            //Grenzbehandlung
            obj.akt = obj.akt < 0 ? obj.anz - 1 : obj.akt == obj.anz ? 0 : obj.akt;
            //neuen Inhalt aus Array fuellen
            obj.getElementsByTagName('ul')[0].innerHTML += "<li>" + obj.cont[obj.akt] + "</li>";
        }
    }
};
/**
 * Rotationsfunktion
 * @param {String} was Id des Newsticker
 * @param {Int}    wie Zeitdauer des Intervalls in Sekunden
 */
de.bild.sfx.ntMoreRotate = function(was, wie){
    var obj = document.getElementById(was);
    //wenn nicht mausover
    if (obj.block == 0) {
        //wird die Wechselfunktion aufgerufen
        de.bild.sfx.ntMore(obj, 1);
    }
    setTimeout('de.bild.sfx.ntMoreRotate("' + was + '",' + wie + ')', wie);
};
/**
 * großer NewsTicker
 * wechselt im großen Newsticker die Anzeigeflaechen und die dazugehoerigen Listenpunkte
 * @param {String} was Id des Newsticker
 */
de.bild.sfx.ntturn = function(was){
    //die NewsTicker-Childs, Anzeigeflaechen
    var ntteas = document.getElementById('allteas').childNodes;
   
    //die unteren Listenelemente des NewsTickers
    var ntlist = document.getElementById('nticker-list').getElementsByTagName('li');
   
    //Zaehler fuer ID-Vergabe
    var nttz = 0;
   
    //alle Teaserflaechen
    for (var h = 0; h < ntteas.length; h++) {
        if (ntteas[h].className == "ntteaser") {
       
            //bekommen eine ID (Kopplung Liste-Teaser)
            ntteas[h].id = ntteas[h].id ? ntteas[h].id : "nt" + nttz;
            nttz++;
           
            //und werden nicht mehr angezeigt
            ntteas[h].style.display = "none";
           
           
        }
    }
   
    //alle Listenelemente inaktiv
    for (var j = 0; j < ntlist.length; j++) {
        ntlist[j].className = ntlist[j].className.replace(/active/g, "");
    }
   
    //der gewuenschte Teaser wird angezeigt
    document.getElementById("nt" + was).style.display = "block";
   
    //aktuelles Listenelement aktiv
    ntlist[was].className += " active";
   
    //"href" des aufrufenden Tags wird abgestellt
    return false;
};
//nur, weil der Funktions-Name eventuell schon verbaut ist, in den snippets
function ntturn(was){
    de.bild.sfx.ntturn(was);
    return false;
}
/**
 * Kurztextgalerien
 * @param {Object} obj aktuelles Objekt
 */
//"mehr"-Button dynamisch auf Text legen
de.bild.sfx.stgmehr = function(obj, fromInit){
    if (!obj || !obj.parentNode)
        return;
   
    if (obj.getElementsByTagName('span')[0]) {
   
        var _span = obj.getElementsByTagName('span')[0], fromInit = fromInit || false, _img = obj.getElementsByTagName('img')[0] || null, objvnParent = obj.parentNode.parentNode.parentNode.parentNode, _offsetHeight = obj.parentNode.parentNode.offsetHeight, _w, _l, erstesDiv = obj.getElementsByTagName('div')[1] ? obj.getElementsByTagName('div')[1] : false;
       
        //"mehr"-Button Breite (je nach Browser und KT-Galerie, Überprüfung, ob Hochformat oder Querformat in KTG eingebaut ist)
        if (erstesDiv && erstesDiv.offsetHeight != 50) {
            //KTG rechte Spalte mit Bochformat
            if (erstesDiv.offsetHeight == 89 && obj.OffsetWidth!=389) {
                _w = obj.offsetWidth - 67 + "px";
            }
            else {    
                _w = obj.offsetWidth + "px";
            }
           
        }
        else {
            _w = obj.offsetWidth;
        }
        //"mehr"-Button linksAbstand (je nach Browser und KT-Galerie, Überprüfung, ob Hochformat oder Querformat in KTG eingebaut ist)
        if (erstesDiv && erstesDiv.offsetHeight != 50) {
            _l = 0 + "px";
            if (erstesDiv.offsetHeight == 89 && obj.OffsetWidth!=389) {
                _l = 67 + "px";
            }
            else {    
                _l = 0 + "px";
            }
        }
        else {
            _l = "0px";
        }
        //Hoehe des Textes auslesen (ist hier noch vom CSS festgelegt, nicht vom Inhalt)
        obj.small = obj.offsetHeight;
        _span.style.width = _w;
        _span.style.left = _l;
        _span.style.display = "block";
        //wenn ein Snippet neu eingeladen wurde oder diese Galerie initialisiert wird
        if (de.bild.sfx.ktgblock == 1 || !obj.big) {
       
            //kurzes CSS-Ausklappen der KT-Galerie
            if (objvnParent.className == "element center") {
                //Wenn KT in der Lightbox aufgerufen wird, wird keine Hoehe gesetzt, da sich sonst die LB nicht automatisch anpasst
                if (objvnParent.parentNode.className != "innerBox") {
                    //CSS-Ergaenzung, falls ohne Überschrift - IE 16px
                    objvnParent.style.height = _offsetHeight + (!+"\v1" ? 16 : 13) + "px";
                }
               
                objvnParent.className = "element center stOpen2";
            }
            else {
                if (objvnParent.className == "element floatL" || objvnParent.className == "element floatR") {
               
                    //CSS-Ergaenzung, falls ohne Überschrift
                    objvnParent.style.height = _offsetHeight + 13 + "px";
                   
                    objvnParent.className += " stOpen3";
                }
                else {
               
               
                    if (!fromInit) {                   
                        //CSS-Ergaenzung, falls ohne Überschrift
                        obj.parentNode.parentNode.parentNode.style.height = _offsetHeight + "px";
                       
                    }
                   
                    if (!objvnParent.className.match("element center")) {
                        obj.parentNode.parentNode.parentNode.className = "stWrap stOpen1";
                    }
                   
                    if (_img && _img.offsetHeight == 89) {
                    }
                    else {
                        _span.style.left = "0px";
                        _span.style.width = "255px";
                    }
                }
            } // endif
            obj.big = obj.offsetHeight;
            //CSS-Zuklappen der KT-Galerie
            if (objvnParent.className == "element center stOpen2") {
                objvnParent.className = "element center";
            }
            else {
                if (objvnParent.className == "element floatL stOpen3" || objvnParent.className == "element floatR stOpen3") {
                    objvnParent.className = objvnParent.className.replace(/ stOpen3/, "");
                }
                else {
                    obj.parentNode.parentNode.parentNode.className = "stWrap";
                }
            }
        }
        //Wenn KT-Galerie ausklappen wuerde,
        if (obj.small < obj.big) {
            //dann zeige den "mehr"-Button
            _span.style.backgroundColor = "#F5F5F5";//CSS
            _span.style.textAlign = "right";//CSS
            _span.style.bottom = "-1px";//CSS
            _span.style.fontSize = "11px";//CSS
            //Mehr-Button fuer Regularien
            if (objvnParent.className == "stWrap" || objvnParent.className == "aside content sLast") {
                if (_img && _img.offsetHeight == 89) {
                }
                else {
                    _span.style.left = "0px";
                    _span.style.width = "255px";
                }
            }
           
            _span.style.display = "block";
        } // endif
        else {
            _span.style.display = "none";
        }
       
       
    } // endif
    de.bild.sfx.ktgblock = 0;
};
//Funktion zur oeffnung der Kurztextgalerien
de.bild.sfx.stgauf = function(){
    var obj = this;
    obj.over = 1;
   
    var thisznParent = obj.parentNode.parentNode;
    //jeweils Austausch der Klassennamen
    if (thisznParent.className.match(/element center/)) {
        if (!thisznParent.className.match(/stOpen2/)) {
            thisznParent.className = "element center stOpen2";
        }
    }
    else {
        if (thisznParent.className.match(/element floatL|element floatR/)) {
            if (!thisznParent.className.match(/stOpen3/)) {
                thisznParent.className += " stOpen3";
            }
        }
        else {
            if (!thisznParent.className.match("element center")) {
                //wenn nicht schon offen (unterbindet IE Flackern)
                if(!obj.parentNode.className.match(/stOpen1/)){
                    obj.parentNode.className += " stOpen1";
                }
            }
        }
    }
   
    //"mehr"-Button weg
   obj.getElementsByTagName('span')[0].style.display = "none";
};
//Funktion zur Abgleichung der Flackerwerte (IExplorer)
de.bild.sfx.stgzu = function(){   
    if (!de.bild.sfx.paginatorLaeuft) {
        this.over=0;       
        setTimeout('de.bild.sfx.stgout("' + this.id + '")', 1);
    }
    else{
        de.bild.sfx.stgOutDelay = this.id;
    }
};
/*
 * Funktion zur Schließung der Kurztextgalerien
 * jeweils Austausch der Klassennamen
 * @param {String} was Id der Ktg
 */
de.bild.sfx.stgout = function(was){
    if (document.getElementById(was)) {       
        var obj = document.getElementById(was);       
        if(de.bild.sfx.stgOutDelay){
            obj.over = 0;
        }
       
        if (obj.over == 0) {
            var objznParent = obj.parentNode.parentNode;
            if (objznParent.className == "element center stOpen2") {
                objznParent.className = "element center";
            }
            else {
                //"element floatL" wegen Doppel-Onmouseout
                if (objznParent.className.match(/stOpen3/) || objznParent.className == "element floatL" || objznParent.className == "element center") {
                    objznParent.className = objznParent.className.replace(/ stOpen3/g, "");
                }
                else {
                    obj.parentNode.className = "stWrap";
                }
            }
           
            //fuer nachgeladenes Snippet die "mehr"-Button-Funktion
            for (var i = 0, j = obj.getElementsByTagName('div').length; i < j; i++) {
                var _obj = obj.getElementsByTagName('div')[i];
                if (_obj.className == "shorttextContent") {              
                    de.bild.sfx.stgmehr(_obj);                   
                }
               
            } //endfor
        }
       
       
    }
   
};
/**
 * Bildvergroesserung
 */
de.bild.sfx.drag = de.bild.sfx.drag || {};
de.bild.sfx.drag.ziz = 20000;
de.bild.sfx.drag.aktid = null;
de.bild.sfx.drag.z = 0;
de.bild.sfx.drag.xo = 0;
de.bild.sfx.drag.yo = 0;
de.bild.sfx.drag.zstart = 0;
de.bild.sfx.drag.zstop = 0;
de.bild.sfx.drag.move = 0;
de.bild.sfx.drag.href = 0;
de.bild.sfx.drag.sperre = 0;
de.bild.sfx.drag.isInitialised = 0;
/**
 * fuer jede Bildvergroeßerung wird ein entsprechender Div-Bereich angelegt
 * @param {String} was Id der aktuellen Bv
 */
de.bild.sfx.drag.zoominit = function(was){
    var b = document.getElementsByTagName("div")[was];
    var bu = b.getElementsByTagName("p")[0];
    bu = (bu) ? bu.innerHTML : "";
    var cr = b.getElementsByTagName("div")[5];
    cr = (cr) ? cr.innerHTML : "";
    var im = b.getElementsByTagName("img")[0];
    im = (im) ? im.src : "";
   
    void('<div id=zziel' + was + ' class="imgElPopup Zoomziel" style="cursor:move;" ondblclick=de.bild.sfx.drag.zoomzu(\'zziel' + was + '\') title="' + de.bild.sfx.BV1 + '">' +
    '<div class="popupInner">' +
    '<div class="hentry hmedia">' +
    '<div class="imgElTitle"><a onclick=de.bild.sfx.drag.zoomzu(\'zziel' +
    was +
    '\') style="cursor:hand" title="' +
    de.bild.sfx.BV2 +
    '"><img src="' +
    de.bild.sfx.CLOSEGIF +
    '" width="16" height="15" /></a></div>' +
    '<img src="' +
    im +
    '" class="photo" width="434" height="326" alt="" title="' +
    de.bild.sfx.BV1 +
    '" />' +
    '<p class="entry-content">' +
    bu +
    '</p>' +
    '<div class="credit">' +
    cr +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>');
};
//Aufzoomen des Verschiebe-Layers
de.bild.sfx.drag.zoom = function(e){
    //Mausposition holen
    de.bild.womausimdoc;
   
    de.bild.sfx.drag.href = "";
    var obj = (!this.id) ? this.parentNode.getElementsByTagName('a')[0] : this;
   
    de.bild.sfx.drag.ziz++;
    var tempid = obj.id.replace(/zstart/, "zziel");
    obj.hrefAlt = obj.hrefAlt ? obj.hrefAlt : obj.href;
    obj.href = "javascript:void(0)";
    document.getElementById(tempid).getElementsByTagName('img')[1].src = obj.hrefAlt;
   
    //fuer Hochformat
    if (obj.parentNode.parentNode.getElementsByTagName('img')[0].getAttribute('height') > 142) {
        document.getElementById(tempid).getElementsByTagName('img')[1].style.width = "245px";
    }
    if (!document.getElementById(tempid).opa) {
        document.getElementById(tempid).opa = 0;
    }
    with (document.getElementById(tempid)) {
        with (style) {
            cursor = "move";
            zIndex = de.bild.sfx.drag.ziz;
           
            if (window.event) {
                left = event.clientX + ((window.pageXOffset) ? window.pageXOffset : document.documentElement.scrollLeft) - ((event.offsetX < 200) ? event.offsetX : 5) - 4 + "px";
                top = event.clientY + ((window.pageYOffset) ? window.pageYOffset : document.documentElement.scrollTop) - ((event.offsetY < 50) ? event.offsetY : 9) - 52 + "px";
               
            }
            else {
                left = e.pageX - e.layerX - 4 + "px";
                top = e.pageY - e.layerY - 52 + "px";
            }
            display = "block";
            opacity = 0;
            filter = "Alpha(opacity=0)";
            de.bild.sfx.drag.blenda(tempid);
        }
    }
    //Zählpixel aufrufen
    if (obj.oldOnclick) {
        obj.oldOnclick()
    };
   
    return false;
};
/**
 * Aufblenden des Verschiebe-Layers
 * @param {String} was Id des aktuellen VL
 */
de.bild.sfx.drag.blenda = function(was){
    var obj = document.getElementById(was);
    if (obj) {
        obj.style.background = "none";
        de.bild.sfx.drag.sperre = 1;
        obj.opa += 20;
        obj.style.opacity = obj.opa / 100;
        obj.style.filter = "Alpha(opacity=" + obj.opa + ")";
        obj.style.left = "2px";
        if (obj.opa < 100) {
            setTimeout("de.bild.sfx.drag.blenda('" + was + "')", 50)
        }
        else {
            obj.style.background = "transparent url(" + de.bild.sfx.SHADOW + ")";
            obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + de.bild.sfx.SHADOW + "')";
            obj.opa = 100;
            de.bild.sfx.drag.sperre = 0;
        }
    }
};
/**
 * Abblenden des Verschiebe-Layers
 * @param {String} was Id des aktuellen VL
 */
de.bild.sfx.drag.blendz = function(was){
    if (de.bild.sfx.drag.sperre == 0) {
        var obj = document.getElementById(was);
        obj.style.background = "none";
        obj.opa -= 20;
        obj.style.opacity = obj.opa / 100;
        obj.style.filter = "Alpha(opacity=" + obj.opa + ")";
        if (obj.opa > 0) {
            setTimeout("de.bild.sfx.drag.blendz('" + was + "')", 50)
        }
        else {
            obj.opa = 0;
            obj.style.display = "none";
        }
    }
};
//diese Funktion legt die Mausposition auf dem Verschiebe-Layer fest
de.bild.sfx.drag.zieh = function(e){
    de.bild.sfx.drag.move = 0;
    if (de.bild.sfx.drag.aktid == null) {
        this.tx = parseInt(this.style.left);
        this.ty = parseInt(this.style.top);
        de.bild.sfx.drag.aktid = this;
        de.bild.sfx.drag.ziz++;
        this.style.zIndex = de.bild.sfx.drag.ziz;
       
        //Mausposition auf dem Layer
        de.bild.sfx.drag.xo = ((window.event) ? event.clientX + ((window.pageXOffset) ? window.pageXOffset : document.documentElement.scrollLeft) : e.pageX) - this.tx;
        de.bild.sfx.drag.yo = ((window.event) ? event.clientY + ((window.pageYOffset) ? window.pageYOffset : document.documentElement.scrollTop) : e.pageY) - this.ty;
       
        return false;
    }
};
/**
 * @param {String} was Id des aktuellen VerschiebeLayer
 */
de.bild.sfx.drag.zoomzu = function(was){
    if (!was) {
        for (var i = 0; i < de.bild.sfx.Divs.length; i++) {
            if (de.bild.sfx.Divs[i].id.match(/zziel/)) {
                de.bild.sfx.drag.zoomzu(de.bild.sfx.Divs[i].id);
            }
        }
    }
    else {
        with (document.getElementById(was)) {
            akt = 0;
            style.cursor = "move";
        }
        de.bild.sfx.drag.blendz(was);
    }
};
/**
 * Flash-Player wird auf dem iPad durch video-Tag ersetzt
 */
de.bild.sfx.setHTML5 = function()
{
    if((navigator.userAgent.match(/iphone/i)) || (navigator.userAgent.match(/ipod/i)) || (navigator.userAgent.match(/ipad/i)))
    {
        jQuery("object.player").each(function(index, ele)
        {
         var xmlUrl = jQuery(this).find("param[name='FlashVars']").first().val();
         xmlUrl = xmlUrl.replace(/xmlsrc=/i, "");
        
         jQuery.ajax({
                url: xmlUrl,
                success: function(data)
                {
                    var tmpVid = jQuery(data).find("video").first();
                    var src = tmpVid.attr("src");
                    var poster = tmpVid.attr("img");
                    var height = jQuery(ele).attr("height");
                    var width = jQuery(ele).attr("width");
                    
                    var newVid = jQuery("<video height='" + height + "' width='" + width + "' src='" + src + "' poster='" + poster + "' controls='controls'></video>");
                    newVid.bind("ended", function()
                    {
                        var tmpVid = jQuery(this).clone(true);
                        jQuery(this).replaceWith(tmpVid);
                    });
                    jQuery(ele).replaceWith(newVid);
                }
            }); 
        });
    }
}

/**
 * ARTIKELTOOLS
 */
jQuery("#tools > ul > li").hover(
function()
{
    jQuery(this).addClass("active");
},
function()
{
    jQuery(this).removeClass("active");
}
);
/**
 * Videocenter
 */
de.bild.sfx.VideoCenterMouseOver = function(){
    var was = this.parentNode.parentNode.id;
    var parent = this.parentNode.parentNode;
    for (var i = 0; i < this.parentNode.getElementsByTagName('li').length; i++) {
        if (this == this.parentNode.getElementsByTagName('li')[i]) {
            this.className = "current";
            var divs = parent.getElementsByTagName("div");
            var divCount = -1;
            for (var j = 0; j < divs.length; j++) {
                if (divs[j].className.indexOf("hentry") != -1) {
                    divCount++;
                    if (divCount == i) {
                        divs[j].style.display = "block";
                    }
                }
               
            }
        }
        else {
       
            this.parentNode.getElementsByTagName('li')[i].className = "";
            var divs = parent.getElementsByTagName("div");
            var divCount = -1;
            for (var j = 0; j < divs.length; j++) {
                if (divs[j].className.indexOf("hentry") != -1) {
                    divCount++;
                    if (divCount == i) {
                        divs[j].style.display = "none";
                    }
                }
               
            }
        }
    }
};
de.bild.sfx.VideoCenterInit = function(was){
    var obj = document.getElementById(was);
    obj.zz = 0;
    for (var i = 0; i < obj.getElementsByTagName('div').length; i++) {
        if (obj.getElementsByTagName('div')[i].className.match(/hentry/)) {
            obj.getElementsByTagName('div')[i].id = obj.getElementsByTagName('div')[i].id ? obj.getElementsByTagName('div')[i].id : was + "vidCen" + obj.zz;
            obj.zz++;
        }
    }
    for (var i = 0; i < obj.getElementsByTagName('li').length; i++) {
        obj.getElementsByTagName('li')[i].onmouseover = de.bild.sfx.VideoCenterMouseOver;
    }
};
/**
 * PlayerIcons
 * @param {String} was Id des aktuellen PI
 */
de.bild.sfx.PlayerIcon = function(was){
    var obj = document.getElementById(was);
    if (obj.over == 0) {
        obj.getElementsByTagName('span')[0].style.display = "none";
    }
};
/**
 * ATeaser-Laufleiste
 * @param {String} was Id der aktuellen ATL
 * @param {Int}    way Richtung der aktuellen ATL
 */
//Mausdown-Funktion
de.bild.sfx.atr1 = function(obj, way){
    if (obj.block == 0) {
        obj.block = 1;
       
        //Startzeit
        obj.sz = new Date().getTime();
       
        //Scrolltempo
        obj.t = 8;
       
        de.bild.sfx.atr1Scroll = setInterval(function(){
            de.bild.sfx.atr1Scrollit(obj, way)
        }, 50);
    }
};
//Scrollen der Laufleiste
de.bild.sfx.atr1Scrollit = function(obj, way){
    obj.x += way * obj.t;
    //CSS-Ausgleich
    if (obj.x <= -obj.ATlength - obj.lb.length * 15 + 15) {
        obj.x = 0;
    }
    if (obj.x > 0) {
        obj.x = -obj.ATlength - obj.lb.length * 15 + 15;
    }
    obj.getElementsByTagName('ul')[0].style.left = obj.x + "px";
};
/*
 * bei Mausup je nach Zeit die ScrollEnde-Funktion aufrufen
 * @param {String} was Id der aktuellen ATL
 * @param {Int}    way Richtung der aktuellen ATL
 */
de.bild.sfx.atr1End = function(obj, way){
    if (obj.block == 1) {
        obj.block = 2;
        obj.ez = new Date().getTime();
       
        //Wenn MausKlick länger als 250ms
        if (obj.ez - obj.sz < 250) {
            obj.t = obj.getElementsByTagName('img')[0].offsetHeight == 113 ? 36 : 20;
            setTimeout(function(){
                de.bild.sfx.atr1End1(obj, way)
            }, 150);
        }
        else {
            de.bild.sfx.atr1End1(obj, way);
        }
    }
};
/**
 * scroll-beend initiieren, je nach Richtung
 * @param {String} was Id der aktuellen ATL
 * @param {Int}    way Richtung der aktuellen ATL
 */
de.bild.sfx.atr1End1 = function(obj, way){
    clearInterval(de.bild.sfx.atr1Scroll);
    obj.tmp = obj.s = 0;
    for (var i = 0; i < obj.lb.length; i++) {
        obj.tmp += obj.lb[i];
        if (obj.tmp >= -obj.x - i * 15 && way == -1) {
            if (obj.s == 0) {
                obj.s = 1;
                de.bild.sfx.atr1EndScroll(obj, obj.x, (-obj.tmp - i * 15), way);
            }
        }
        if (obj.tmp >= -obj.x - i * 15 - 3 && way == 1) {
            if (obj.s == 0) {
                obj.s = 1;
                de.bild.sfx.atr1EndScroll(obj, obj.x, (-obj.tmp - i * 15 + 15 + obj.lb[i]), way);
            }
        }
    }
    obj.s = 0;
};
/**
 * scrollen abschliessen
 * @param {String} was Id der aktuellen ATL
 * @param {Int}    xa  Anfangsposition (in px)
 * @param {Int}    xe  Endposition (in px)
 * @param {Int}    way Richtung der aktuellen ATL
 */
de.bild.sfx.atr1EndScroll = function(obj, xa, xe, way){
    xa += way * obj.t;
    obj.t = obj.t > 8 ? obj.t - obj.t / 5 : 8;
    if ((xa < xe && way == 1) || (xa > xe && way == -1)) {
        setTimeout(function(){
            de.bild.sfx.atr1EndScroll(obj, xa, xe, way)
        }, 50);
        obj.x = xa;
    }
    else {
        obj.block = 0;
        obj.x = xe;
    }
    obj.getElementsByTagName('ul')[0].style.left = obj.x + "px";
};
/**
 * INTERAKTIONS-BEREICH
 * fuer Lightbox, Mitteilungslayer, etc wird ein Div-Bereich angelegt
 */
void('<div id="aktionsbox" style=position:absolute;z-Index:' + de.bild.sfx.AKTION + ';display:none;></div>');
/**
 * ESC-Taste
 * Sammelfunktion zum Schließen von diversen Layern
 * bei Benutzung der ESC-Taste
 */
de.bild.sfx.esc = function(){
    //gehen alle Bildvergroeßerungen zu
    de.bild.sfx.drag.zoomzu();
   
    //Aktionsbox zu
    document.getElementById("aktionsbox").style.display = "none";
   
};
//Event auf ESC-Taste
document.onkeydown = function(e){
    ((window.event ? window.event.keyCode : e.keyCode) == 27) ? de.bild.sfx.esc() : '';
};
/**
 * MAUSERKENNUNG
 * diese Funktion trackt die Mausposition und positioniert dann Verschiebe-Layer
 */
de.bild.womausimdoc = function(e){
    de.bild.sfx.drag.move = 1;
   
    //die x/y-Werte der Maus, umgerechnet auf das gesamte Dokument
    de.bild.sfx.mxD = (window.event) ? event.clientX + ((window.pageXOffset) ? window.pageXOffset : document.documentElement.scrollLeft) : e.pageX;
    de.bild.sfx.myD = (window.event) ? event.clientY + ((window.pageYOffset) ? window.pageYOffset : document.documentElement.scrollTop) : e.pageY;
   
    //-----------------------------------------------------------------------------fuer Drag-----
    //dynamische Positionierung des BildvergroeßerungsLayers bei Verschiebung
    if (de.bild.sfx.drag.aktid != null) {
        de.bild.sfx.drag.aktid.style.left = de.bild.sfx.mxD - de.bild.sfx.drag.xo + 'px';
        de.bild.sfx.drag.aktid.style.top = de.bild.sfx.myD - de.bild.sfx.drag.yo + 'px';
    }
    //--------------------------------------------------------------------------fuer Tooltip-----
    //dynamische Positionierung der ToolTips
    if (de.bild.sfx.ttip) {
        de.bild.sfx.ttip.style.left = de.bild.sfx.mxD + 15 + "px";
        de.bild.sfx.ttip.style.top = de.bild.sfx.myD + 15 + "px";
    }
    if (de.bild.sfx.atip) {
        de.bild.sfx.atip.style.left = de.bild.sfx.mxD + 15 + "px";
        de.bild.sfx.atip.style.top = de.bild.sfx.myD + 15 + "px";
    }
};
if (document.getElementById('rectangle') || document.getElementById('rectangle_1') || document.getElementById('rectangle_2')) {
}
else {
    if (document.getElementById('innerWrapper')) {
        document.getElementById('innerWrapper').onmousemove = de.bild.womausimdoc;
    }
}
/**
 * ToolTips
 */
de.bild.sfx.tta = document.getElementsByTagName("a");
de.bild.sfx.ttip = document.getElementById('tooltip');
//Wenn Anzeige geschaltet
if (de.bild.sfx.ttip) {
    for (var i = 0; i < de.bild.sfx.tta.length; i++) {
        //"em"-Abfrage wegen Klassen-Dopplung mit Community
        if ((de.bild.sfx.tta[i].className.match(/tooltip/) && !de.bild.sfx.tta[i].getElementsByTagName('em')[0])) {
       
            //Mausposition ueber Objekt holen
            de.bild.sfx.tta[i].onmousemove = de.bild.womausimdoc;
           
            //ToolTip einblenden
            de.bild.sfx.tta[i].onmouseover = function(){
                de.bild.sfx.ttip.style.display = "block";
            };
           
            //ToolTip ausblenden
            de.bild.sfx.tta[i].onmouseout = function(){
                de.bild.sfx.ttip.style.display = "none";
            };
        }
    }
};
//fuer Tooltip aus Bild (altTip)
void('<div id="altTip"></div>');
de.bild.sfx.atip = document.getElementById('altTip');
for (var i = 0; i < de.bild.sfx.tta.length; i++) {
    if (de.bild.sfx.tta[i].className.match(/(altTip)/)) {
   
        //Mausposition ueber Objekt holen
        de.bild.sfx.tta[i].onmousemove = de.bild.womausimdoc;
       
        //ToolTip einblenden
        de.bild.sfx.tta[i].onmouseover = function(){
            this.altesAlt = this.getElementsByTagName('img')[0].alt;
            de.bild.sfx.atip.innerHTML = this.altesAlt;
           
            //wegen IExplorer wird das alt-Attribut temporaer ausgeblendet
            this.getElementsByTagName('img')[0].alt = "";
           
            de.bild.sfx.atip.style.display = "block";
        };
       
        //ToolTip ausblenden
        de.bild.sfx.tta[i].onmouseout = function(){
            this.getElementsByTagName('img')[0].alt = this.altesAlt;
            de.bild.sfx.atip.style.display = "none";
        };
    }
}
/**
 * MouseEvents-Init
 * Im Init-Bereich werden auf benoetigte Schaltflaechen und Anzeigebereiche automatisch die Maus-Events gesetzt
 */
//alle Div-Tags der Seite
de.bild.sfx.Divs = document.getElementsByTagName('div');
de.bild.sfx.init = function(){
    //For alle Divs der Seite wird,
    for (var i = 0; i < de.bild.sfx.Divs.length; i++) {
   
        //wenn eine Schaltflaeche "hentry" gefunden wird
        if (de.bild.sfx.Divs[i].className.match(/hentry/)) {
       
            //----------------------------------------------------Ziehharmonika----------
            //alle Klassennamen, die sich auf einen "Ziehharmonika-Teaser" beziehen
            if (de.bild.sfx.Divs[i].parentNode.className.match(/service|simVids|topVids|simPhotos|discussed|regComments/)) {
                //Ziehharmonika-Funktion auf diese Schaltflaeche
                de.bild.sfx.Divs[i].onmouseover = de.bild.sfx.accordeon;
            }
            if (de.bild.sfx.Divs[i].parentNode.className.match(/ranking/)) {
           
                //Ziehharmonika-Funktion auf diese Schaltflaeche fuer Modul ohne listing
                de.bild.sfx.Divs[i].onmouseover = de.bild.sfx.accordeonRanking;
            }
            else
                if (de.bild.sfx.Divs[i].parentNode.parentNode.className.match(/ranking/)) {
               
                    //Ziehharmonika-Funktion auf diese Schaltflaeche fuer Modul mit listing
                    de.bild.sfx.Divs[i].onmouseover = de.bild.sfx.accordeonRanking;
                }
           
            //------------------------------------------------------Multiteaser----------
            //gehoert diese Schaltflaeche zu einem Multiteaser?
            if (de.bild.sfx.Divs[i].parentNode.className.match(/multiteaser/)) {
           
                //bei omouseover die Funktion "multiteaseraktiv" aufrufen und
                de.bild.sfx.Divs[i].onmouseover = de.bild.sfx.multiteaseraktiv;
               
                //bei onmouseout den dortigen Blocker auf "0" setzen.
                de.bild.sfx.Divs[i].onmouseout = function(){
                    this.parentNode.mtblock = 0;
                };
               
                //den benoetigten Zaehler initiualisieren
                de.bild.sfx.Divs[i].zz = 0;
            }
           
        }//----Ende hentry-Abfrage-----
        //---------------------------------ID-VERGABE fuer aside-NewsTicker----------
        if (de.bild.sfx.Divs[i].id == 'nt-article') {
            de.bild.sfx.ntAside = 1;
        }
        if (de.bild.sfx.Divs[i].className.match(/aside/) && de.bild.sfx.ntAside == 1) {
            de.bild.sfx.Divs[i].id = "nt-aside";
        }
       
        //-----------------------------Ersatzcontent fuer Rectangle-Werbung Video----------
        //wird keine Rectangle-Werbung innerhalb der Video-Seite ausgeliefert
        if (de.bild.sfx.Divs[i].className == 'rectangle hide' && document.body.id == 'video') {
            de.bild.sfx.rhide = 1;
        }
        if (de.bild.sfx.Divs[i].className == 'rectangle' && document.body.id == 'video') {
            de.bild.sfx.rhide = 2;
        }
        if (de.bild.sfx.Divs[i].className == 'simVids' && de.bild.sfx.rhide == 2) {
        }
        //Modul Aehnliche Videos bekommt Ersatzklasse
        else
            if (de.bild.sfx.Divs[i].className == 'simVids' && de.bild.sfx.rhide == 1) {
                de.bild.sfx.Divs[i].className = "altVids";
                de.bild.sfx.Divs[i].parentNode.getElementsByTagName('div')[2].className = "hentry vt9";
                de.bild.sfx.Divs[i].parentNode.getElementsByTagName('div')[14].className += " last";
            }
        if (de.bild.sfx.Divs[i].className == 'topVids' && de.bild.sfx.rhide == 2) {
            de.bild.sfx.Divs[i].parentNode.parentNode.getElementsByTagName('div')[0].style.position = "relative";
            de.bild.sfx.Divs[i].parentNode.parentNode.getElementsByTagName('div')[0].style.marginTop = "43px";
        }
        //Modul Top-Videos bekommt Ersatzklasse
        else
            if (de.bild.sfx.Divs[i].className == 'topVids' && de.bild.sfx.rhide == 1) {
                de.bild.sfx.Divs[i].className = "tVidsFull";
                de.bild.sfx.Divs[i + 1].className = "hentry vt10";
            }
       
        //-----------------------------Ersatzcontent fuer Rectangle-Werbung Foto----------
        if (de.bild.sfx.Divs[i].className == 'rectangle hide' && document.body.id == 'photo') {
            de.bild.sfx.rhide = 1;
        }
        if (de.bild.sfx.Divs[i].className == 'simPhotos' && de.bild.sfx.rhide == 1) {
            de.bild.sfx.Divs[i].className = "altPhotos";
            de.bild.sfx.Divs[i].parentNode.getElementsByTagName('div')[2].className = "hentry";
            de.bild.sfx.Divs[i].parentNode.getElementsByTagName('div')[14].className += " last";
        }
       
        //------------------------------------------------------Videocenter----------
        if (de.bild.sfx.Divs[i].className.match(/videocenter/)) {
            de.bild.sfx.zz++;
            de.bild.sfx.Divs[i].id = de.bild.sfx.Divs[i].id ? de.bild.sfx.Divs[i].id : "videocenter" + de.bild.sfx.zz;
            de.bild.sfx.VideoCenterInit(de.bild.sfx.Divs[i].id);
        }
       
        //-----------------------------------Videoranking/Heute bei BILD.de----------
        //diese classnames identifizieren die
        if (de.bild.sfx.Divs[i].className.match(/vtr5|vtr3/)) {
            var hbbid = 0, hbbnow = 0;
           
            //Kopplung der Schaltflaechen mit den Anzeigebereichen
            for (var j = 0; j < de.bild.sfx.Divs[i].childNodes.length; j++) {
                if (de.bild.sfx.Divs[i].childNodes[j].className == "hentry vt3") {
                    de.bild.sfx.Divs[i].childNodes[j].id = de.bild.sfx.Divs[i].childNodes[j].id ? de.bild.sfx.Divs[i].childNodes[j].id : "hbb" + hbbid;
                    hbbid++;
                }
            }
           
            //Mausereignisse auf die Schaltflaechen
            for (var j = 0; j < de.bild.sfx.Divs[i].getElementsByTagName('li').length; j++) {
                if (!de.bild.sfx.Divs[i].getElementsByTagName('li')[j].className.match(/disabled/)) {
                    de.bild.sfx.Divs[i].getElementsByTagName('li')[j].onmouseover = de.bild.sfx.Hbbaktiv;
                    hbbnow = j;
                }
            }
            //nur fuer "Heute bei Bild"
            if (de.bild.sfx.Divs[i].className.match(/vtr5/)) {
                de.bild.sfx.Divs[i].getElementsByTagName('li')[hbbnow].className += "active";
                document.getElementById('hbb' + hbbnow).style.display = "block";
                document.getElementById('hbb' + hbbnow).style.zIndex = de.bild.sfx.FRONT;
            }
        }
       
        //-------------------------------------------------Kurztextgalerien----------
        //dieser classname identifiziert Kurztextgalerien
        if (de.bild.sfx.Divs[i].className.match(/shorttextContent/) && de.bild.sfx.Divs[i].parentNode.className != "hidden") {
       
            //Blocker und ID fuer Entflackern-Funktion
            de.bild.sfx.Divs[i].parentNode.parentNode.over = 0;
            de.bild.sfx.zz++;
            de.bild.sfx.Divs[i].parentNode.parentNode.id = de.bild.sfx.Divs[i].parentNode.parentNode.id ? de.bild.sfx.Divs[i].parentNode.parentNode.id : "ktg" + de.bild.sfx.zz;
           
            //auf die gesamte Kurztextgalerie over/out Mausereignisse
            de.bild.sfx.Divs[i].parentNode.parentNode.onmouseover = de.bild.sfx.stgauf;
            de.bild.sfx.Divs[i].parentNode.parentNode.onmouseout = de.bild.sfx.stgzu;
           
            //"mehr"-Button aufklappen
            if (de.bild.sfx.ktgblock == 0) {
                //Grosse Schleife Ausgefuehrt?
                (de.bild.sfx.ausgefuehrt) ? de.bild.sfx.stgmehr(de.bild.sfx.Divs[i], true) : de.bild.sfx.stgmehr(de.bild.sfx.Divs[i]);
            }
            else {
                de.bild.sfx.ktgblock = 0;
            }
        }
       
        //----------------------------------------Rotation fuer Multiteaser----------
        //wenn im classname "mtrotation" gefunden wird
        if (de.bild.sfx.Divs[i].className.match(/mtrotation/)) {
       
            //lege auf alle childNodes
            for (var j = 0; j < de.bild.sfx.Divs[i].childNodes.length; j++) {
           
                //mit Klassennamen "mtA"
                if (de.bild.sfx.Divs[i].childNodes[j].className == "mtA") {
               
                    //bei onmouseover den Blocker auf 1
                    de.bild.sfx.Divs[i].childNodes[j].onmouseover = function(){
                        this.parentNode.parentNode.mtblock = 1;
                    };
                   
                    //bei onmouseout den Blocker auf 0
                    de.bild.sfx.Divs[i].childNodes[j].onmouseout = function(){
                        this.parentNode.parentNode.mtblock = 0
                    };
                }
            }
           
            //Initialisiere den benoetigten Blocker
            de.bild.sfx.Divs[i].mtblock = 0;
           
            //Initialisiere den benoetigten Zaehler
            de.bild.sfx.Divs[i].zz = 0;
           
            //Gibt der jeweiligen Rotation eine ID
            de.bild.sfx.zz++;
            de.bild.sfx.Divs[i].id = de.bild.sfx.Divs[i].id ? de.bild.sfx.Divs[i].id : "rota" + de.bild.sfx.zz;
           
            //Die Sekundenanzahl hinter dem Begriff "mtrotation" finden und
            de.bild.sfx.Divs[i].zeit = de.bild.sfx.Divs[i].className.match(/mtrotation\d+/);
           
            //ausschneiden.
            if (de.bild.sfx.Divs[i].zeit) {
                de.bild.sfx.Divs[i].zeit = de.bild.sfx.Divs[i].zeit[0].replace(/mtrotation/, "");
            }
           
            //Wenn keine Sekunden, dann Sekunden gleich "5"
            de.bild.sfx.Divs[i].zeit = (de.bild.sfx.Divs[i].zeit > 0) ? de.bild.sfx.Divs[i].zeit : 5;  
           
            //Check, ob beim MT ein "init" Wert gesetzt ist. Nur falls nicht wird die Rotation gestartet und das init gesetzt.
            //Dadurch wird sichergestellt, dass die Rotation nur einmal gestartet wird.
            //Start der Rotations-Funktionen per ID-uebergabe der jeweiligen Multiteaser (frühestens nach 3 Sekunden)
            if(!document.getElementById(de.bild.sfx.Divs[i].id).init){
            setTimeout("de.bild.sfx.mtrotat('" + de.bild.sfx.Divs[i].id + "')", 3000);
            document.getElementById(de.bild.sfx.Divs[i].id).init=1;
            }
           
           
        }
       
        //----------------------------------------------Aufklapp-Newsticker----------
        //wenn im classname "ntticker" gefunden wird
        if (de.bild.sfx.Divs[i].className.match(/nticker/)) {
       
            //Gibt der jeweiligen Rotation eine ID.
            de.bild.sfx.zz++;
            de.bild.sfx.Divs[i].id = de.bild.sfx.Divs[i].id ? de.bild.sfx.Divs[i].id : "ntrota" + de.bild.sfx.zz;
           
            //Initialisiere den benoetigten Zaehler
            de.bild.sfx.Divs[i].zz = 0;
           
            //Initialisiere den benoetigten Status
            de.bild.sfx.Divs[i].s = 0;
           
            //Onmouseover-Zaehler (fuer IE6)
            de.bild.sfx.Divs[i].over = 0;
           
            //Onmouseout-Zaehler (fuer IE6)
            de.bild.sfx.Divs[i].out = 0;
           
            //setzt die onmouseout-Funktion
            de.bild.sfx.Divs[i].onmouseout = de.bild.sfx.ntaus;
           
            //hole die onmouseout-zeit und zaehle das Event (fuer IE6))
            de.bild.sfx.Divs[i].onmouseover = function(){
                this.t = new Date().getTime();
                this.over++;
            };
           
            //bei onclick die Anzeigefunktion
            de.bild.sfx.Divs[i].getElementsByTagName('a')[0].onclick = de.bild.sfx.displaynt;
           
            //wenn im Klassennamen "ntrotation"
            if (de.bild.sfx.Divs[i].className.match(/ntrotation/)) {
           
                //Die Sekundenanzahl hinter dem Begriff "ntrotation" finden und
                de.bild.sfx.Divs[i].zeit = de.bild.sfx.Divs[i].className.match(/ntrotation\d+/);
               
                //ausschneiden
                de.bild.sfx.Divs[i].zeit = (de.bild.sfx.Divs[i].zeit) ? de.bild.sfx.Divs[i].zeit[0].replace(/ntrotation/, "") : '';
               
                //Wenn keine Sekunden, dann Sekunden gleich "5"
                de.bild.sfx.Divs[i].zeit = (de.bild.sfx.Divs[i].zeit > 0) ? de.bild.sfx.Divs[i].zeit : 5;
               
                //Start der Rotations-Funktionen per ID-uebergabe der jeweiligen Multiteaser, nicht bei PBE
                if (!de.bild.sfx.Divs[i].id.match(/pbe/)) {
                    de.bild.sfx.ntrotat(de.bild.sfx.Divs[i].id);
                }
            }
        }
       
        //---------------------------------Ein- und mehrzeiliger Newsticker----------
        if (de.bild.sfx.Divs[i].className.match(/show-news|(message-ticker)/)) {
       
            //Anzahl der Inhalte
            de.bild.sfx.Divs[i].anz = 0;
           
            //aktueller Inhalt
            de.bild.sfx.Divs[i].akt = 0;
           
            //Array mit Inhalten bei fuenfzeiligem Ticker
            if (RegExp.$1) {
                de.bild.sfx.Divs[i].cont = new Array();
            }
           
           
           
            for (var j = 0; j < de.bild.sfx.Divs[i].getElementsByTagName('a').length; j++) {
           
                if (de.bild.sfx.Divs[i].getElementsByTagName('a')[j].className == "prev") {
                    //bei onclick die Anzeigefunktion nach oben
                    de.bild.sfx.Divs[i].getElementsByTagName('a')[j].onclick = function(){
                        de.bild.sfx.ntMore(this.parentNode, -1);
                        return false;
                    };
                }
                else
                    if (de.bild.sfx.Divs[i].getElementsByTagName('a')[j].className == "next") {
                        //bei onclick die Anzeigefunktion nach unten
                        de.bild.sfx.Divs[i].getElementsByTagName('a')[j].onclick = function(){
                            de.bild.sfx.ntMore(this.parentNode, 1);
                            return false;
                        };
                    }
                    else {
                        //Inhalte zählen
                        de.bild.sfx.Divs[i].anz++;
                       
                        //fuer fuenfzeiligen Ticker Inhalt in ein Array
                        if (RegExp.$1) {
                            de.bild.sfx.Divs[i].cont.push(de.bild.sfx.Divs[i].getElementsByTagName('li')[j].innerHTML);
                        }
                    }
            }
           
           
            if (de.bild.sfx.Divs[i].className.match(/ntrotation(\d+)/)) {
                //Blocker setzen
                de.bild.sfx.Divs[i].block = 0;
                de.bild.sfx.Divs[i].onmouseover = function(){
                    this.block = 1;
                };
                de.bild.sfx.Divs[i].onmouseout = function(){
                    this.block = 0;
                };
               
                //Gibt der jeweiligen Rotation eine ID.
                de.bild.sfx.zz++;
                de.bild.sfx.Divs[i].id = de.bild.sfx.Divs[i].id ? de.bild.sfx.Divs[i].id : "ntrota" + de.bild.sfx.zz;
               
                //Start der Rotations-Funktionen per ID-uebergabe der jeweiligen Multiteaser
                // Vorgegeben ist 5 Sekunden, wenn RegExp.$1 entweder false oder keine Nummer ist
                var rotadaeur = (typeof RegExp.$1 === 'number' && RegExp.$1 > 0) ? RegExp.$1 : 5;
                de.bild.sfx.Divs[i].rota = rotadaeur * 1000;
               
                setTimeout("de.bild.sfx.ntMoreRotate('" + de.bild.sfx.Divs[i].id + "'," + de.bild.sfx.Divs[i].rota + ")", de.bild.sfx.Divs[i].rota);
            }
        }
       
        //----------------------------------------------ATeaser-Laufleisten----------
        if (de.bild.sfx.Divs[i].className.match("slideshow")) {
            var obj = de.bild.sfx.Divs[i];
            if (!obj.slideInit)
            {
           
                //Hochspringen auf Pfeil verhindern
                for (var j = 0; j < obj.getElementsByTagName('div').length; j++) {
                    if (obj.getElementsByTagName('div')[j].className == "prev" || obj.getElementsByTagName('div')[j].className == "next") {
                        obj.getElementsByTagName('div')[j].getElementsByTagName('a')[0].href = "javascript:void(0)";
                    }
                }
               
                //Startposition
                obj.x = 0;
               
                //Listenbreiten
                obj.lb = [];
               
                //Eventblocker
                obj.block = 0;
               
                //Breite des Inhalts
                obj.ATlength = 0;
               
                for (var j = 0; j < obj.getElementsByTagName('li').length; j++) {
                    obj.ATlength += obj.getElementsByTagName('li')[j].offsetWidth;
                    obj.lb.push(obj.getElementsByTagName('li')[j].offsetWidth);
                }
               
               
                var atrContent = obj.getElementsByTagName('ul')[0].innerHTML;
                var atrCounter = obj.getElementsByTagName('li').length <= 2 ? 4 : obj.getElementsByTagName('li').length <= 5 ? 3 : 2;
               
                //Inhalt vervielfachen
                for (var h = 0; h < atrCounter - 1; h++) {
                    obj.getElementsByTagName('ul')[0].innerHTML += atrContent;
                }
                //Berechnung der Breite der <ul> der Teaser: x* (Breite #Teaser +15(Margin-left))
                obj.getElementsByTagName('ul')[0].style.width = atrCounter * ((obj.ATlength) + (15 * (obj.getElementsByTagName('li').length))) + "px"
                //Maus-Events auf Pfeile
                for (var j = 0; j < obj.getElementsByTagName('div').length; j++) {
                    with (obj.getElementsByTagName('div')[j]) {
                        if (className == "prev") {
                            //bei mausover/click die ATeaserscroll nach rechts
                            onmousedown = function(){
                                de.bild.sfx.atr1(this.parentNode, 1)
                            };
                            onmouseup = onmouseout = function(){
                                de.bild.sfx.atr1End(this.parentNode, 1);
                                return false;
                            };
                           
                        }
                        if (className == "next") {
                            //bei mausover/click die ATeaserscroll nach links
                            onmousedown = function(){
                                de.bild.sfx.atr1(this.parentNode, -1)
                            };
                            onmouseup = onmouseout = function(){
                                de.bild.sfx.atr1End(this.parentNode, -1);
                                return false;
                            };
                        }
                    }
                }
                obj.slideInit = 1;
            }
        }
       
        //-------------------------------------------------Bildvergroeßerung----------
        //wenn im Klassennamen "Zoombild" && Bildvergroesserung wird nur einmal initialisiert
        if (de.bild.sfx.Divs[i].className.match(/Zoombild/) && de.bild.sfx.drag.isInitialised == 0) {
            //Initialisiere Zoomobjekt
            de.bild.sfx.drag.zoominit(i);
            //erkenne die "Vergroeßern"-Flaeche
            for (var j = 0; j < de.bild.sfx.Divs[i].getElementsByTagName('a').length; j++) {
                if (de.bild.sfx.Divs[i].getElementsByTagName('a')[j].parentNode.className == "imgElTitle") {
                    //Gibt der jeweiligen "Vergroeßern"-Flaeche eine ID.
                    de.bild.sfx.Divs[i].getElementsByTagName('a')[j].id = de.bild.sfx.Divs[i].getElementsByTagName('a')[j].id ? de.bild.sfx.Divs[i].getElementsByTagName('a')[j].id : "zstart" + i;
                   
                    //altes Onclick (Zaehlpixel) aufnehmen. Wird dann in der Zoomfunktion aufgerufen.
                    de.bild.sfx.Divs[i].getElementsByTagName('a')[j].oldOnclick = de.bild.sfx.Divs[i].getElementsByTagName('a')[j].onclick;
                   
                    //Gibt der jeweiligen "Vergroeßern"-Flaeche auf Klick die Zoomfunktion.
                    de.bild.sfx.Divs[i].getElementsByTagName('a')[j].onclick = de.bild.sfx.drag.zoom;
                }
            }
        }
        //das jeweilige Zoomobjekt
        if (de.bild.sfx.Divs[i].className.match(/Zoomziel/)) {
       
            //Mausposition ueber Objekt holen
            de.bild.sfx.Divs[i].onmousemove = de.bild.womausimdoc;
           
            //kann verschoben werden
            de.bild.sfx.Divs[i].onmousedown = de.bild.sfx.drag.zieh;
           
            //und ist dananch inaktiv
            de.bild.sfx.Divs[i].onmouseup = function(){
                de.bild.sfx.drag.aktid = null
            };
        }
       
    }
    //Bildvergroesserung wird nur einmal initialisiert
    de.bild.sfx.drag.isInitialised = 1;
   
    //Grosse Schleife Ausgefuehrt
    de.bild.sfx.ausgefuehrt = true;
   
    //Schleife nach dem Paginator Ausgefuehrt
   
    de.bild.sfx.paginatorLaeuft = false;
};
//Aufruf der Init-Sequenz
de.bild.sfx.init();
//Flash-Player durch video-Tag ersetzen
de.bild.sfx.setHTML5();
de.bild.sfx.mediachartsMusic = function(o) {
if (!o) return;
var p=o.parentNode,lis=p.getElementsByTagName('li');for(var i=0,j=lis.length;i<j;i++){if(i==(j-1)){lis[i].className='last';}else{lis[i].className=''}}o.className+=' active';
}
/**
 * ONLOAD
 * Der Funktion addLoadEvent weden die auf onloaddisabled zu startenden Funktionen zugewiesen
 * @param {Function} func Funktion, die uebergeben wird
 */
de.bild.addLoadEvent = function(func){
    var oldonloaddisabled = window.onloaddisabled;
    if (typeof window.onloaddisabled != 'function') {
        window.onloaddisabled = func;
    }
    else {
        window.onloaddisabled = function(){
            oldonloaddisabled();
            func();
        };
    }
};
/**
 * Die Funktion sfxReady setzt lediglich bei onloaddisabled diverse Parameter auf "1", statt z.B. Rotations-Funktionen selber aufzurufen
 * Dadurch spielt die Scriptposition im HTML keine Rolle. Ansonsten muesste die addLoadEvent-Funktion in den Kopf der Seite
 */
de.bild.sfx.sfxReady = function(){
    //fuer Rotationen
    de.bild.sfx.Divs.ls = 1;
};
de.bild.addLoadEvent(de.bild.sfx.sfxReady);
/**
 * verhindert display:none fuer html-tag bei fehler im facebook-button
 */
var htmltags = document.getElementsByTagName('html')[0];
htmltags.style.display = 'block';
/*end:15400938.29*/

/* Dummy Javascript, dass am Ende der Seiten erscheint. */
if (typeof QGTV != "undefined") {
QGTV.initialize();
}
if (typeof de.bild.qgtv != "undefined") {
de.bild.qgtv.zoom.Events();
}