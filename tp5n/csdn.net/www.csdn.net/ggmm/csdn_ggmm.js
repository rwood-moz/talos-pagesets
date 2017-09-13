function show_ads_zone(zoneid){
   if (!document.phpAds_used) document.phpAds_used = ',';
   phpAds_random = new String (Math.random()); phpAds_random = phpAds_random.substring(2,11);
   
   void ("<" + "script language='JavaScript' type='text/javascript' src='");
   void ("http://z.csdn.net/adjs.php?n=" + phpAds_random);
   void ("&amp;what=zone:"+zoneid);
   void ("&amp;charset=utf-8");
   void ("&amp;exclude=" + document.phpAds_used);
   if (document.referrer)
      void ("&amp;referer=" + escape(document.referrer));
   void ("'><" + "/script>");
}
function phpads_deliverActiveX(content)
{
	void(content);	
}

function show_ads_zone_gb(zoneid){
   if (!document.phpAds_used) document.phpAds_used = ',';
   phpAds_random = new String (Math.random()); phpAds_random = phpAds_random.substring(2,11);
   
   void ("<" + "script language='JavaScript' type='text/javascript' src='");
   void ("http://z.csdn.net/adjs.php?n=" + phpAds_random);
   void ("&amp;what=zone:"+zoneid);
   void ("&amp;exclude=" + document.phpAds_used);
   if (document.referrer)
      void ("&amp;referer=" + escape(document.referrer));
   void ("'><" + "/script>");
}

