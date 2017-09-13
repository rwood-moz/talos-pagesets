
/*linktracking:15815002.13*/

/**
 * Dieses Skript durchläuft die Links auf der Home nach dem Laden und setzt das Name Attribut je nach Position des Links.
 * Dabei gibt es folgende Benamungslogik:
 *     -alle Links in der Navi erhalten das Attribut "NAVI"
 *     -alle Links im Footer bekommen das Attribut "FOOTER" *     
 *     -im Contentbereich werden Links nach Block, Spalte, Modul und Teaser benannt (z.B: C01S02M00T00). 
 *     Zusätzlich werden spezielle Module (Newsticker, Multiteaser, A-Teaser etc.) gesondert benamt.
 *     -Nach einem Ajax-Load werden die nachgeladenen Elemente ebenfalls benamt. 
 *     
 *     siehe auch  http://bde-confluence/display/prjrel09/Javascript+Dokumentation+-+Linktracking+auf+der+Startseite+linktracking.js
 */
var de = de || {};
de.bild = de.bild || {};
de.bild.linktracking = de.bild.linktracking || {};
de.bild.linktracking.block = 0;
de.bild.linktracking.spalte = 0;
de.bild.linktracking.module = 0;
de.bild.linktracking.teaser = 0;
de.bild.linktracking.ajaxInterval;
jQuery(document).ready(function(){
    de.bild.linktracking.initLinks();
});
de.bild.linktracking.initLinks = function (){
    
    //alle Links in der Navi bekommen das Name-Attribut "NAVI"
    jQuery("#nav").find("a").each(function(){
       jQuery(this).attr("name","NAVI"); 
    });
    
    //Bloecke
    jQuery(".faux.clearfix").each(function(index){
        de.bild.linktracking.block = index;
        de.bild.linktracking.module = 0;
        
        //Spalten
        jQuery(this).find(".content").each(function(index2){
            de.bild.linktracking.spalte = index2;
            de.bild.linktracking.module = 0;
            de.bild.linktracking.teaser = 0;
            
            //Module
            jQuery(this).find(".section").each(function(index3){
            
                ////headerlinks
                jQuery(this).find(".header").each(function(index4){
                    jQuery(this).find("a").each(function(index5, value){
                        jQuery(this).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser) + "_head");
                    });
                });
                
                //Tabs und Paginations für Ajax-Loads vorbereiten
                de.bild.linktracking.configTabAndPag(this);
                
                //Teasereihen
                de.bild.linktracking.findTR(this);
                
                //InOut module                                       
                de.bild.linktracking.nameInOut(this);
                
                //Teaserleisten
                de.bild.linktracking.findTL(this);
                
                
                
                //########################Module########################
                de.bild.linktracking.nameModule(this);
                //########################Module########################
                
                
                //Ranking          
                de.bild.linktracking.findHentry(".ranking", this);
                
                //Serive          
                de.bild.linktracking.findHentry(".service", this);
                
            });
            
            
            //#####Lead-Klasse######   
            jQuery(this).find(".lead").each(function(index3){
                jQuery(this).find("[class*=pos]").each(function(){
                    //Verarbeitung innerhalb der Pos-Klasse                        
                    
                    //Multiteaser finden
                    de.bild.linktracking.nameMT(this);
                    
                    //Newsticker
                    de.bild.linktracking.findNT(this);
                    
                    //TR benamen
                    de.bild.linktracking.findTR(this);
                    
                    //Videocenter
                    de.bild.linktracking.nameVC(this);
                    
                    de.bild.linktracking.nameAtContent(this);
                    
                    //Verarbeitung aller Links innerhalb der Pos-Klasse, die noch keinen Namen haben
                    de.bild.linktracking.nameUnnamed(this);
                    
                    
                    
                    de.bild.linktracking.teaser++;
                });
                de.bild.linktracking.module++;
                
            });
            //#####Lead-Klasse######
        
        });
    });
    
    
    //Alle Elemente im Footer bekommen das Attribut "FOOTER"
        //alle Links in der Navi bekommen das Name-Attribut "NAVI"
    jQuery("#footer").find("a").each(function(){
       jQuery(this).attr("name","FOOTER"); 
    });
    
}
de.bild.linktracking.createName = function(bl, sp, mo, te){
    var b = bl < 10 ? "0" + bl : bl;
    var s = sp < 10 ? "0" + sp : sp;
    var m = mo < 10 ? "0" + mo : mo;
    var t = te < 10 ? "0" + te : te;
    
    var ret = "C" + b + "S" + s + "M" + m + "T" + t;
    return ret;
}
//Funktion sucht Multiteaser und benennt diese
de.bild.linktracking.nameMT = function(elem){
    jQuery(elem).find(".multiteaser").each(function(){
        jQuery(this).find("[class*=item]").each(function(indexMT){
            jQuery(this).siblings("a").eq(indexMT).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser) + "_MT" + indexMT);
            jQuery(this).find("a").each(function(indexMT2){
                jQuery(this).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser) + "_MT" + indexMT);
            });
            
        });
    });
}
//Findet Newstickerelemente und bennent diese
de.bild.linktracking.findNT = function(elem){
    jQuery(elem).find(".nticker").each(function(){
        jQuery(this).find("ul > li > a").each(function(indexNT){
            jQuery(this).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser) + "_NT" + indexNT);
        });
    });
}
//Findet Videocenterelemente und benennt diese
de.bild.linktracking.nameVC = function(elem){
    jQuery(elem).find(".videocenter").each(function(){
        jQuery(this).find(".hentry").each(function(indexPos){
            jQuery(this).find("a").each(function(){
                jQuery(this).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser) + "_VC" + indexPos);
            });
            jQuery(this).parent().find("ul > li > a").eq(indexPos).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser) + "_VC" + indexPos);
        });
    });
}
de.bild.linktracking.findTR = function(elem){
    //Teaserreihen Items suchen
    jQuery(elem).find(".tr").each(function(){
        jQuery(elem).find("[class*=item]").each(function(indexItem){
            jQuery(this).find("a").each(function(){
                jQuery(this).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser) + "_TR" + indexItem);
            });
        });
        //Bildlaufleisten
        jQuery(elem).find(".atWrapper").each(function(){
            jQuery(this).find("a").each(function(index){
                jQuery(this).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser) + "_TR" + index);
            });
        });
    });
}
//fügt allen Elementen einen Namen hinzu, die noch keinen Namen haben
de.bild.linktracking.nameUnnamed = function(elem){
    jQuery(elem).find("a").each(function(){
        if (jQuery(this).attr("name") == "") {
            jQuery(this).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser));
        }
    });
}
//benamt die Ateaser-content Klasse
de.bild.linktracking.nameAtContent = function(elem){
    jQuery(elem).find(".ateaser-content").each(function(atIndex){
        //Element in der Rotation
        jQuery(this).find("a").each(function(){
            jQuery(this).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser) + "_AT" + atIndex);
        });
        //Listeneintrag in der Rotation
        jQuery(this).siblings("ul").find("li > a").eq(atIndex).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser) + "_AT" + atIndex);
    });
}
de.bild.linktracking.nameInOut = function(elem){
    jQuery(elem).find(".inoutModule").each(function(IOIndex){
        jQuery(this).find("a").each(function(){
            jQuery(this).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser) + "_IO");
        });
    });
}
de.bild.linktracking.findTL = function(elem){
    jQuery(elem).find(".tBar").each(function(){
        jQuery(this).find("a").each(function(tBarIndex){
            jQuery(this).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser) + "_TL" + tBarIndex);
            
        });
        de.bild.linktracking.module++;
    });
}
//Sucht nach SearchClass > hentry > a Konstrukten (ranking, service)
de.bild.linktracking.findHentry = function(searchClass, elem){
    jQuery(elem).find(searchClass).each(function(){
        de.bild.linktracking.teaser = 0;
        jQuery(this).find(".hentry").each(function(){
            jQuery(this).find("a").each(function(){
                jQuery(this).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser));
            });
            de.bild.linktracking.teaser++;
        });
    });
}
de.bild.linktracking.nameModule = function(elem){
    jQuery(elem).find(".module").each(function(index6){
        de.bild.linktracking.teaser = 0;
        //find Videocenter
        de.bild.linktracking.nameVC(this);
        
        //Positionen durchgehen
        jQuery(this).find("[class*=pos]").each(function(){
            //Multiteaser finden
            de.bild.linktracking.nameMT(this);
            //Newsticker 
            de.bild.linktracking.findNT(this);
            
            //Verarbeitung aller Links innerhalb der Pos-Klasse die noch keinen Namen haben
            de.bild.linktracking.nameUnnamed(this);
            
            de.bild.linktracking.teaser++;
        });
        de.bild.linktracking.module++;
    });
}
//Funktion versieht Tabs und Paginierungen mit Namen und onclick Events, um bei AjaxAufruf die namen neu zu setzen
de.bild.linktracking.configTabAndPag = function(elem){
    clearInterval(de.bild.linktracking.ajaxInterval);
    jQuery(elem).find(".tabs, .pag, .listing").each(function(){
        jQuery(this).find("a, input[type='radio']").each(function(){
            if(jQuery(this).attr("name")!="sort"){
            jQuery(this).attr("name", de.bild.linktracking.createName(de.bild.linktracking.block, de.bild.linktracking.spalte, de.bild.linktracking.module, de.bild.linktracking.teaser)+"PAG");
            }
            jQuery(this).unbind("click");
            jQuery(this).bind("click", function(){
                var linkname = jQuery(this).attr("name");
                //Wenn es sich um eine Sortierung handelt, muss nach dem Namen in den Tabs gesucht werden
                if(linkname =="sort"){
                    jQuery(this).parents(".section").find(".tabs").each(function(){
                        linkname=jQuery(this).find("ul > li > a").eq(0).attr("name");
                    });
                }
                de.bild.linktracking.block = parseInt(linkname.substring(1, 3));
                de.bild.linktracking.spalte = parseInt(linkname.substring(4, 6));
                de.bild.linktracking.module = parseInt(linkname.substring(7, 9));
                de.bild.linktracking.teaser = parseInt(linkname.substring(10, 12));
                
                //Neuinitialisierung nach Ajax Aufruf
                var section = jQuery(this).parents(".section");                
                de.bild.linktracking.ajaxInterval=setInterval(function(){
                    //Testauf Names
                    var unnamed=false;
                    jQuery(section).find("a").each(function(){                       
                       if((jQuery(this).attr("name")!="" || jQuery(this).attr("name")!=" ")&& jQuery(this).attr("name").indexOf("PAG")==-1){
                           unnamed=true;
                       } 
                    });
                    
                    if (unnamed) {                        
                        de.bild.linktracking.reInit(section);
                        clearInterval(de.bild.linktracking.ajaxInterval);
                    }
                }, 1000);
            });
        });
    });
}
//Module etc, die bei einem Ajax Reloaddisabled neu Initialisiert werden müssen
de.bild.linktracking.reInit = function(section){
                    de.bild.linktracking.configTabAndPag(section);
                    de.bild.linktracking.nameModule(section);     
                    de.bild.linktracking.findHentry(".ranking", section);
                    de.bild.linktracking.findTR(section);
}