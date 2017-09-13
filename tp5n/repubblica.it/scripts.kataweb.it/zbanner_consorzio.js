var ne_type = 'feed';
var ne_resultSize = '3';
var ne_imagesOn = '1';
var ne_css = 'http://www.repubblica.it/sharedfiles/css/adsense/mirago-generic.css';
var width = '245';
var height_title = 200 + 25;
var height = ''+height_title;
var ne_clientCode = '4002';
var ne_subClientCode = 'repubblica_spc_home';
var ne_title = '2' ;

if (ne_type) {

    var subClientCall = '';
    var titleCall='';
    if (ne_subClientCode) {
          subClientCall = '&s=' + ne_subClientCode;
    }
    if (ne_title) {
	titleCall = '&hd=' + ne_title;
    }
    else
    {
	titleCall = '&hd=' + '1';
    }

    var fourwnetUrl = 'http://feed.4wnet.com/' + ne_type + '.html.ashx?a='
       + ne_clientCode + subClientCall + titleCall + '&n=' + ne_resultSize + '&i=' + ne_imagesOn
       + '&u=REF' + '&c=' + ne_css       + '&v=' + (Math.floor(Math.random()*1000000));

    void('<iframe src="' + fourwnetUrl + '" frameborder="0" scrolling="no" id="mirago-iframe" style="width: '+(width-2)+'px !important; width /**/: '+width+'px; height:'+(height)+'px; margin:10px 0;"></iframe>');
}
