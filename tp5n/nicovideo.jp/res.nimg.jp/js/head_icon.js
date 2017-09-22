
var num = Math.floor( Math.random() * 960 );/* 0-959 */

if		(( num >= 0  ) && ( num < 10 )){ num = "00" + num; }
else if	(( num >= 10 ) && ( num < 100)){ num = "0" + num; }

void('<img src=\"httpdisabled://res.nimg.jp/img/base/head/icon/nico/'+num+'.gif\" alt=\"'+num+'\">');
