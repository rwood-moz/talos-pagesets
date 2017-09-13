function tt_error_handler(message, url, line) {return true;}
window.onerror = tt_error_handler;
try{dtTT_page_rendertime = new Date() -  dtTT_startofpage ;} catch(err){dtTT_page_rendertime=1;}
var tt_image_url = 'http://timeslog.indiatimes.com/timeslog.dll/pgcnt';
var tt_image_url_err = tt_image_url + '?scripterr=true';
var  max_string_length = 255;
var tt_random_buster_number = Math.random();

function tt_append_url(param, value){if (value) {if ((tt_image_url.indexOf('?')) == -1) {window.tt_image_url += '?' + param + '=' + value;}  else {window.tt_image_url += '&' + param + '=' + value;}}}

function void(){
window.onerror = tt_error_handler;
try{if (document.referrer.length > 0) { tt_append_url('RUR', escape(document.referrer.substring(0, max_string_length)));}} catch(er){}
try{tt_append_url('SCWD',screen.width);} catch(er){}
try{tt_append_url('SCHT',screen.height);} catch(er){}
try{tt_append_url('CHUR',escape(timeslog_channel_url.substring(0, max_string_length)));} catch(er){}
try{if(ttrendlogmostviewed==1){tt_append_url('logmviewed',1); tt_append_url('msid',ttrendlogmsid);}} catch(er){}
try{if(ttrendlogmostemail==1){tt_append_url('logmostemail',1); tt_append_url('msid',ttrendlogmsid);}} catch(er){}
try{tt_append_url('rndr',dtTT_page_rendertime);} catch(er){}
try{tt_append_url('randomno',tt_random_buster_number);} catch(er){}
void('<img border="0" width="1" height="1" src=' + tt_image_url +'>');
}
try{void();} catch(theerr){ void('<img border="0" width="1" height="1" src="' + tt_image_url_err +'">');}
