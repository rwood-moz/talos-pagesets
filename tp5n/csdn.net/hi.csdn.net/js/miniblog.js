var weibo_c = 0;
var g_data;
var tid;
var weibo_last_time = 0;
var interval_time = 4000;
var source_url = ""
var t_template;
var weibo_forever = 0;

function t_additem(item, init) {
/*	
	html = '<dd id="t' + item.id
	+ '"><p class="top"><a class="txt_blue" href="#">'
	+ item.username + '：</a>' + item.text
	+ '</p><p class="btmtime txt_blue"  title="'
	+ item.pub_time + '">' + prettyDate(item.pub_time)
	+ '</p></dd>';
*/	
	html = t_template.replace(/{id}/g,item.id).replace(/{username}/g,item.username)
	.replace(/{text}/g,item.text)
	.replace(/{link}/g,item.link)
	.replace(/{pub_time}/g,item.pub_time)
	.replace(/{profile_image_url}/g,item.profile_image_url)
	.replace(/{pretty_time}/g,prettyDate(item.pub_time))
	;
	if (init == 0) {
		$(html).hide().insertAfter('#divyjs dt')
				.slideDown("slow");
		$('#divyjs dd:last').slideDown("slow");
		$('#divyjs dd:last').remove();
	} else {
		$(html).insertAfter('#divyjs dt');
	}

}

function interval_update() {
	
	if (weibo_c >= g_data.length && weibo_forever==1) {
		$.getJSON(source_url, function(data) {
			g_data = data;
			weibo_c = 0;
			tid = setTimeout('interval_update()', interval_time);
		})
		return false;
	}
	
	var item = g_data[weibo_c];
	if(item!=null)
	{
		if (item.dateline > weibo_last_time || weibo_forever==0) {
			t_additem(item, 0);
			weibo_last_time = item.dateline;
	
		}
	}
	weibo_c++;
	//setInterval(function(){  }, 2000);		
	$("#divyjs .btmtime").prettyDate();
	
	tid = setTimeout('interval_update()', interval_time);

}

function t_update(template,init_count,key,stype,forever) {
	t_template = template;
	
	if(t_template==null)
	{
		t_template = '<dd id="{id}"><p class="top">{username}：</a>{text}</p><p title="{pub_time}" class="btmtime txt_blue">{pretty_time}</p></dd>';
	}
	if(key==null)
	{
		key="云计算";
	}
	if(stype==null)
	{
		stype = '1';
	}
	if(forever==null)
	{
		weibo_forever = 0;
	}else
	{
		weibo_forever=forever;
	}
	source_url = "http://hi.csdn.net/tools/sina_t.php?jsoncallback=?&stype="+ stype +"&o="+ weibo_forever +"&q="+ encodeURI(key);
	$.getJSON(source_url, function(data) {
		g_data = data;
		$.each(data, function(i, item) {

			weibo_c = i;
			if ($('#t' + item.id).length == 0) {
				t_additem(item, 1)
				last_time = item.dateline;
				if (weibo_c >= init_count) {
					weibo_c++;
					tid = setTimeout('interval_update()', interval_time);
					return false;
				}
			}

		})
	})

}