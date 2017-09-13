void("<span id=\"bhafindtop728a\">\n");
var path = location.pathname;
var url = path.replace(/[^\w\/\-\+]/g,'-');
var obj = document.getElementById('bhafindtop728a');
var curtop = 0;
if (obj && obj.offsetParent) {
  do {
    curtop += obj.offsetTop;
  } while (obj == obj.offsetParent);		
}
if (curtop < 678) {
void("<!--728X90 LEADERBOARD AD-->\n");
void("<script type=\"text/javascript\" src=\"httpdisabled://ad.crwdcntrl.net/5/c=434/pe=y/var=ccauds\"><\/script>\n");
void("<script type=\"text/javascript\">\n");
void("  var ccKeywords = \"\";\n");
void("  if (typeof(ccauds) != 'undefined') {  \n");
void("    for (var cci = 0; cci < ccauds.Profile.Audiences.Audience.length; cci++) {    \n");
void("      if (cci > 0) ccKeywords += \"&\";\n");
void("      ccKeywords += ccauds.Profile.Audiences.Audience[cci].abbr;\n");
void("    }   \n");
void("  }\n");
void("  var OAS_url = 'http://oascentral.blogher.org'; // Your OAS cname\n");
void("  var OAS_sitepage = 'blogher.org.food.cakewrecks" + url + "'; // Target site/page\n");
void("  var OAS_pos = 'Middle,Left,Top!Top'; // Target Position\n");
void("  var OAS_query = ccKeywords + \"&optalcohol&optanimal&optprocessedfood&optgluten&optdiet&optcosmeticsurgery&optreproductivehealth&optpharma&optparenting&optformula&optpolitics&optmilitary&opttvfilms&optrrated&optfinance&optoilauto&optdating&optlingerie&optantibreastfeeding&optwalmart&optdisney&optnestle&optdemocrats&optreligious&optrepublicans&optfastfood&url=" + url + "\" // finishing out the bits for the keyword query\n");
void("  var OAS_RN = new String (Math.random());\n");
void("  var OAS_RNS = OAS_RN.substring (2,11); \n");
void("  void('<scr' + 'ipt type=\"text/javascript\" src=\"' + OAS_url +'/RealMedia/ads/adstream_jx.ads/' + OAS_sitepage + '/@' + OAS_pos + '?' + OAS_query + '\"></scr' + 'ipt>'); \n");
void("<\/script>\n");
void("<!--END 728x90 LEADERBOARD AD-->\n");
}
void("</span>\n");
void("<div style=\"display:none\">\n");
//Lotame tracking pixel
LOTCC_loc = '';
if (window != top){var w = window;while (w != top){try{LOTCC_loc=escape(encodeURIComponent(w.document.referrer));}catch(e){w=top;}if(w!=top){w=w.parent;}}}        
LOTCC_rnd = new String(Math.random()).substring(2,11);
LOTCC_placement=2349;
void( '<img src=\"httpdisabled://ad.crwdcntrl.net/5/to=y/dp=y/p=' + LOTCC_placement + '/rand=' + LOTCC_rnd );
if (LOTCC_loc != '')
{  void( '/ref='+LOTCC_loc ); }
void('\">');
void("</div>\n");
