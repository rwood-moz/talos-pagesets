jQuery.noConflict();

jQuery(document).ready(function()
{
	wfb_selectFilterData = new Object();

	group_matchday = '';
	add_rpc_module_folder = '/';
	loaddisabledTableData = function(divcontainer)
	{
		if ( competition_id > 0 && sport_id > 0)
		{
			sp_loaddisabled = sport_id;
 			sp_tag_loaddisabled = sport_tag;
			co_loaddisabled =  competition_id;
 			co_tag_loaddisabled = competition_tag;
		}
		else
		{
			sp_loaddisabled = '1';
			co_loaddisabled =  '12';
		}
		activateButton('div.hsp_button');
		assignChangeRound('#hsp_select_round select.select_round');
	}

	activateButton = function(ident)
	{	
		jQuery(ident).mouseover(function() {
			if(jQuery(this).attr('class') == 'hsp_button')
			{
				jQuery(this).removeClass('hsp_button');
				jQuery(this).addClass('hsp_button_hover');
			}
		});
		jQuery(ident).mouseout(function() {
			if(jQuery(this).attr('class') == 'hsp_button_hover')
			{
				jQuery(this).removeClass('hsp_button_hover');
				jQuery(this).addClass('hsp_button');
			}
		});
		jQuery(ident).click(function()
 		{
			co_tmp = jQuery(this).attr('id');
			co_parts = co_tmp.split('_');

			jQuery('#hsp_button_12').removeClass('hsp_button_active');
			jQuery('#hsp_button_12').addClass('hsp_button');

			jQuery('#hsp_button_19').removeClass('hsp_button_active');
			jQuery('#hsp_button_19').addClass('hsp_button');
			
			jQuery('#hsp_button_33').removeClass('hsp_button_active');
			jQuery('#hsp_button_33').addClass('hsp_button');

			jQuery('#hsp_button_132').removeClass('hsp_button_active');
			jQuery('#hsp_button_132').addClass('hsp_button');

			jQuery(this).removeClass('hsp_button');
			jQuery(this).addClass('hsp_button_active');
			
			if (co_parts[2] == '19')
			{
				link_ergebnisse = 'http://www.bild.de/sportdaten/ergebnisse/sp1/fussball/co19/champions-league/';
			}
			if (co_parts[2] == '33')
			{
				link_ergebnisse = 'http://www.bild.de/sportdaten/ergebnisse/sp1/fussball/co33/dfb-pokal/';
			}
			if (co_parts[2] == '132')
			{
				link_ergebnisse = 'http://www.bild.de/sportdaten/ergebnisse/sp1/fussball/co132/europa-league/';
			}
			if (co_parts[2] == '12')
			{
				link_ergebnisse = 'http://www.bild.de/sportdaten/ergebnisse/sp1/fussball/co12/bundesliga/';
			}
			jQuery('#hsp_regu_g div.content div.wfb-standings-more a').attr('href', link_ergebnisse);

			if (co_parts[2] == '19' || co_parts[2] == '132' || co_parts[2] == '33')
			{	
				jQuery('#bild_liveticker').loaddisabled(add_rpc_module_folder+'rpc_module_widget-gameplan-standing/sp1/co'+co_parts[2]+'/', function(){
					jQuery('#bild_liveticker th.rank').html('Pl.');
					jQuery('#bild_liveticker th.team').html('Verein');
					jQuery('#bild_liveticker th.score_diff').html('Diff.');
					jQuery('#bild_liveticker th.points').html('Pkte.');
					jQuery('#bild_liveticker th.games').html('Sp.');
					if (group_matchday.length > 0 && group_matchday != 'gmd0')
					{
						jQuery('div.module-gamelist table tr').hide();
						jQuery('div.module-gamelist table tr.'+group_matchday).show();
						document.getElementById('bild_liveticker').style.height = '150px';
// 						jQuery('#bild_liveticker').css('height', '');
// 						jQuery('#bild_liveticker').css('height', '150');
					}
					else
					{
						document.getElementById('bild_liveticker').style.height = '170px';
// 						jQuery('#bild_liveticker').css('height', '');
// 						jQuery('#bild_liveticker').css('height', '171');
					}
					if(co_parts[2] == '33')
					{
						jQuery('#bild_liveticker div.module-gamelist table tr.even').show();
						jQuery('#bild_liveticker div.module-gamelist table tr td.home').css('font-weight', 'normal');
						jQuery('#bild_liveticker div.module-gamelist table tr td.away').css('font-weight', 'normal');
						jQuery('#bild_liveticker div.module-gamelist table tr:odd').css('background-color', '#ffffff');
						jQuery('#bild_liveticker div.module-gamelist table tr:odd').css('color', '#666666');
						jQuery('#bild_liveticker div.module-gamelist table tr:even').css('background-color', '#eeeeee');
						jQuery('#bild_liveticker div.module-gamelist table tr:even').css('color', '#666');
						jQuery('#bild_liveticker div.module-gamelist table tr:even td.date').css('background-color', '#eeeeee');
						jQuery('#bild_liveticker div.module-gamelist table tr:even td.date').css('color', '#666');
						jQuery('#bild_liveticker div.module-gamelist table tr:odd td.date').css('background-color', '#ffffff');
						jQuery('#bild_liveticker div.module-gamelist table tr:odd td.date').css('color', '#666666');
						document.getElementById('bild_liveticker').style.height = '170px';
// 						jQuery('#bild_liveticker').css('height', '');	
// 						jQuery('#bild_liveticker').css('height', '171');
					}
					jQuery('#hsp_select_round').loaddisabled(add_rpc_module_folder+'rpc_module_widget-select-round/sp1/co'+co_parts[2]+'/', function(){
						assignGroupButtons ('#hsp_select_round div.buttons div.button', co_parts[2], '');
						assignChangeRound('#hsp_select_round select.select_round');
						if (typeof show_round !='undefined')
						{
							if (co_parts[2] == '19' || co_parts[2] == '132')
							{
								if (round_mode != 'Liga')
								{
									tmp = jQuery('#hsp_select_round select option').first().attr('value');
									
									new_val = tmp.split('/');
									show_round_tmp = new_val[9].substring(2);
									jQuery('#hsp_regu_g div#hsp_select_round div.group_buttons').hide();
									jQuery('#hsp_regu_g div#hsp_select_round div.buttons_name').hide();
									
								}
								wfb_selectFilter("#select_group_matchday", show_round_tmp, co_parts[2]);
								if (group_matchday.substring(3) > 0)
								{
									jQuery('#hsp_select_round select option').attr('selected', '');
									jQuery('#hsp_select_round select option.'+group_matchday).attr('selected', 'selected');
								}
								else
								{
									jQuery('#hsp_select_round select option.'+show_round).attr('selected', 'selected');
								}
							}
							if (co_parts[2] == '19')
							{	
								jQuery('#group_wording').html('GRUPPE');
							}
							wording_val = jQuery('div.seasonname').html();
							wording_val_parts = wording_val.split('/');
							new_wording_val = wording_val_parts[0]+'/'+wording_val_parts[1].substring(2, 4);
							jQuery('div.seasonname').html(new_wording_val);
						}
					});
					if(jQuery('div.module-standing tr.empty td').html() == 'Keine Daten vorhanden.')
					{
						jQuery('div.module-standing tr.empty td').html('');
						jQuery('div.games_with_standing div.divider_line').hide();
					}
				});
			}
			else
			{
 				jQuery('#bild_liveticker').loaddisabled(add_rpc_module_folder+'rpc_module_widget-gameplan/sp1/co'+co_parts[2]+'/', function(){
					jQuery('#hsp_select_round').loaddisabled(add_rpc_module_folder+'rpc_module_widget-select-round/sp1/co'+co_parts[2]+'/', function(){
						assignGroupButtons ('#hsp_select_round div.buttons div.button', co_parts[2], '');
						assignChangeRound('#hsp_select_round select.select_round');
						if (typeof show_round !='undefined')
						{
							if (co_parts[2] == '19' || co_parts[2] == '132')
							{
								wfb_selectFilter("#select_group_matchday", show_round, co_parts[2]);
								if (group_matchday.substring(3) > 0)
								{
									jQuery('#hsp_select_round select option').attr('selected', '');
									jQuery('#hsp_select_round select option.'+group_matchday).attr('selected', 'selected');
								}
								else
								{
									jQuery('#hsp_select_round select option.'+round_id).attr('selected', 'selected');
								}
							}
							wording_val = jQuery('div.seasonname').html();
							wording_val_parts = wording_val.split('/');
							new_wording_val = wording_val_parts[0]+'/'+wording_val_parts[1].substring(2, 4);
							jQuery('div.seasonname').html(new_wording_val);
						}
					});
					document.getElementById('bild_liveticker').style.height = '170px';
// 					jQuery('#bild_liveticker').css('height', '');
// 					jQuery('#bild_liveticker').css('height', '171');
				});
			}
			jQuery(this).removeClass('hsp_button_hover');
			jQuery(this).addClass('hsp_button_active');
		});
		jQuery('#hsp_button_'+competition_id).removeClass('hsp_button_hover');
		jQuery('#hsp_button_'+competition_id).addClass('hsp_button_active');
	}

	assignChangeRound = function(ident)
	{
		jQuery(ident).removeAttr('onchange');
		jQuery(ident).keyup(function()
		{
 			path = jQuery(ident).val();
			parts = path.split('/');
			if( parts[6] == 'co19' || parts[6] == 'co132' || parts[6] == 'co33')
			{
				template = 'rpc_module_widget-gameplan-standing';
				add_group_matchday = parts[10];
				group_matchday = add_group_matchday+'/';
			}
			else
			{
				template = 'rpc_module_widget-gameplan';
				add_group_matchday = '';
			}

			if(parts[10].substring(2) > 0)
			{
				path_for_livetable = add_rpc_module_folder+''+template+'/sp1/'+parts[5]+'/'+parts[9]+'/'+parts[10]+'/';
			}
			else
 			{
				path_for_livetable = add_rpc_module_folder+''+template+'/sp1/'+parts[5]+'/'+parts[9]+'/';
				if (add_group_matchday.length > 0)
				{
					path_for_livetable = path_for_livetable+add_group_matchday+'/';
				}
			}
			jQuery('#bild_liveticker').loaddisabled(path_for_livetable, function(response, status)
			{
				if( parts[5] == 'co19' || parts[5] == 'co132')
				{
					add_group_matchday = parts[10];
					group_matchday = add_group_matchday;
				}
				if ('success'  != status)
				{
					jQuery('#bild_liveticker').html('Noch keine Daten vorhanden.');
				}
				if( template == 'rpc_module_widget-gameplan-standing' )
				{
					if (add_group_matchday.length > 0 && add_group_matchday != 'gmd0')
					{
						jQuery('div.module-gamelist table tr').hide();
						jQuery('div.module-gamelist table tr.'+add_group_matchday).show();
						jQuery('#hsp_regu_g div#hsp_select_round div.group_buttons').show();
						jQuery('#hsp_regu_g div#hsp_select_round div.buttons_name').show();
						document.getElementById('bild_liveticker').style.height = '150px';
// 						jQuery('#bild_liveticker').css('height', '');
// 						jQuery('#bild_liveticker').css('height', '150');
					}
					else
					{
						jQuery('#hsp_regu_g div#hsp_select_round div.group_buttons').hide();
						jQuery('#hsp_regu_g div#hsp_select_round div.buttons_name').hide();
						document.getElementById('bild_liveticker').style.height = '170px';
// 						jQuery('#bild_liveticker').css('height', '');
// 						jQuery('#bild_liveticker').css('height', '171');
					}
					jQuery('#bild_liveticker th.rank').html('Pl.');
					jQuery('#bild_liveticker th.team').html('Verein');
					jQuery('#bild_liveticker th.score_diff').html('Diff.');
					jQuery('#bild_liveticker th.points').html('Pkte.');
					jQuery('#bild_liveticker th.games').html('Sp.');
					if(jQuery('div.module-standing').html() == '')
					{
						jQuery('div.games_with_standing div.divider_line').hide();
					}
					if(parts[6] == 'co33')
					{
						jQuery('#bild_liveticker div.module-gamelist table tr.even').show();
						jQuery('#bild_liveticker div.module-gamelist table tr td.home').css('font-weight', 'normal');
						jQuery('#bild_liveticker div.module-gamelist table tr td.away').css('font-weight', 'normal');
						jQuery('#bild_liveticker div.module-gamelist table tr:odd').css('background-color', '#ffffff');
						jQuery('#bild_liveticker div.module-gamelist table tr:odd').css('color', '#666666');
						jQuery('#bild_liveticker div.module-gamelist table tr:even').css('background-color', '#eeeeee');
						jQuery('#bild_liveticker div.module-gamelist table tr:even').css('color', '#666');
						jQuery('#bild_liveticker div.module-gamelist table tr:even td.date').css('background-color', '#eeeeee');
						jQuery('#bild_liveticker div.module-gamelist table tr:even td.date').css('color', '#666');
						jQuery('#bild_liveticker div.module-gamelist table tr:odd td.date').css('background-color', '#ffffff');
						jQuery('#bild_liveticker div.module-gamelist table tr:odd td.date').css('color', '#666666');
						document.getElementById('bild_liveticker').style.height = '170px';
// 						jQuery('#bild_liveticker').css('height', '');
// 						jQuery('#bild_liveticker').css('height', '171');
					}
				}
			});
		});
		jQuery(ident).change(function()
		{
 			path = jQuery(ident).val();
			parts = path.split('/');
			if( parts[5] == 'co19' || parts[5] == 'co132' || parts[5] == 'co33')
			{
				template = 'rpc_module_widget-gameplan-standing';
				add_group_matchday = parts[10];
				group_matchday = add_group_matchday+'/';
			}
			else
			{
				template = 'rpc_module_widget-gameplan';
				add_group_matchday = '';
			}

			if(parts[10].substring(2) > 0)
			{
				path_for_livetable = add_rpc_module_folder+''+template+'/sp1/'+parts[5]+'/'+parts[9]+'/'+parts[10]+'/';
			}
			else
 			{
				path_for_livetable = add_rpc_module_folder+''+template+'/sp1/'+parts[5]+'/'+parts[9]+'/';
				if (add_group_matchday.length > 0)
				{
					path_for_livetable = path_for_livetable+add_group_matchday+'/';
				}
			}
			jQuery('#bild_liveticker').loaddisabled(path_for_livetable, function(response, status)
			{
				if( parts[5] == 'co19' || parts[5] == 'co132')
				{
					add_group_matchday = parts[10];
					group_matchday = add_group_matchday;
				}
				if ('success'  != status)
				{
					jQuery('#bild_liveticker').html('Noch keine Daten vorhanden.');
				}
				if( template == 'rpc_module_widget-gameplan-standing' )
				{
					if (add_group_matchday.length > 0 && add_group_matchday != 'gmd0')
					{
						jQuery('div.module-gamelist table tr').hide();
						jQuery('div.module-gamelist table tr.'+add_group_matchday).show();
						jQuery('#hsp_regu_g div#hsp_select_round div.group_buttons').show();
						jQuery('#hsp_regu_g div#hsp_select_round div.buttons_name').show();
						document.getElementById('bild_liveticker').style.height = '150px';
// 						jQuery('#bild_liveticker').css('height', '');
// 						jQuery('#bild_liveticker').css('height', '150');
					}
					else
					{
						jQuery('#hsp_regu_g div#hsp_select_round div.group_buttons').hide();
						jQuery('#hsp_regu_g div#hsp_select_round div.buttons_name').hide();
						document.getElementById('bild_liveticker').style.height = '170px';
// 						jQuery('#bild_liveticker').css('height', '');
// 						jQuery('#bild_liveticker').css('height', '171');
					}
					if(jQuery('div.module-standing tr.empty td').html() == 'Keine Daten vorhanden.')
					{
						jQuery('div.module-standing tr.empty td').html('');
						jQuery('div.games_with_standing div.divider_line').hide();
					}
					if(parts[6] == 'co33')
					{
						jQuery('#bild_liveticker div.module-gamelist table tr.even').show();
						jQuery('#bild_liveticker div.module-gamelist table tr td.home').css('font-weight', 'normal');
						jQuery('#bild_liveticker div.module-gamelist table tr td.away').css('font-weight', 'normal');
						jQuery('#bild_liveticker div.module-gamelist table tr:odd').css('background-color', '#ffffff');
						jQuery('#bild_liveticker div.module-gamelist table tr:odd').css('color', '#808080');
						jQuery('#bild_liveticker div.module-gamelist table tr:even').css('background-color', '#eeeeee');
						jQuery('#bild_liveticker div.module-gamelist table tr:even').css('color', '#666');
						jQuery('#bild_liveticker div.module-gamelist table tr:even td.date').css('background-color', '#eeeeee');
						jQuery('#bild_liveticker div.module-gamelist table tr:even td.date').css('color', '#666');
						jQuery('#bild_liveticker div.module-gamelist table tr:odd td.date').css('background-color', '#ffffff');
						jQuery('#bild_liveticker div.module-gamelist table tr:odd td.date').css('color', '#666666');
						document.getElementById('bild_liveticker').style.height = '170px';
// 						jQuery('#bild_liveticker').css('height', '');
// 						jQuery('#bild_liveticker').css('height', '171');
					}
					jQuery('#bild_liveticker th.rank').html('Pl.');
					jQuery('#bild_liveticker th.team').html('Verein');
					jQuery('#bild_liveticker th.score_diff').html('Diff.');
					jQuery('#bild_liveticker th.points').html('Pkte.');
					jQuery('#bild_liveticker th.games').html('Sp.');
				}
			});
		});		
	};

	assignGroupButtons = function(ident, co_id)
	{
		jQuery('#hsp_select_round div.buttons div.button').first().addClass('button_aktiv');
		first_shown = jQuery('#hsp_select_round div.buttons div.button').first().attr('id');
 		jQuery('#hsp_select_round div.buttons div.button').mouseover(function() {
			if(jQuery(this).attr('class') == 'button')
			{
				jQuery(this).removeClass('button');
				jQuery(this).addClass('button_hover');
			}
		});
		jQuery('#hsp_select_round div.buttons div.button').mouseout(function() {
			if(jQuery(this).attr('class') == 'button_hover')
			{
				jQuery(this).removeClass('button_hover');
				jQuery(this).addClass('button');
			}
		});
		jQuery(ident).click(function()
		{
			jQuery('#hsp_select_round div.buttons div.button').removeClass('button_aktiv');
			round_id = jQuery(this).attr('id');
			tmp_group_matchday = group_matchday;
			jQuery('#bild_liveticker').loaddisabled(add_rpc_module_folder+'rpc_module_widget-gameplan-standing/sp1/co'+co_id+'/ro'+round_id+'/'+group_matchday+'/', function()
			{
					jQuery('#bild_liveticker th.rank').html('Pl.');
					jQuery('#bild_liveticker th.team').html('Verein');
					jQuery('#bild_liveticker th.score_diff').html('Diff.');
					jQuery('#bild_liveticker th.points').html('Pkte.');
					jQuery('#bild_liveticker th.games').html('Sp.');
					group_matchday = tmp_group_matchday;
					if (group_matchday.length > 0)
					{
						jQuery('div.module-gamelist table tr').hide();
						jQuery('div.module-gamelist table tr.'+group_matchday).show();
					}
			});
			jQuery('#hsp_select_round div.buttons').children().removeClass('button_aktiv');
			jQuery('#hsp_select_round div.buttons').children().addClass('button');
 			jQuery(this).removeClass('button');
			jQuery(this).addClass('button_aktiv');
		
			jQuery('#'+round_id).removeClass('button_hover');
			jQuery('#'+round_id).addClass('button_aktiv');
			if (co_id == '19' || co_id == '132')
			{
				//wfb_selectFilter("#select_group_matchday", round_id, co_id);
				wfb_selectChangeLinks("#select_group_matchday", round_id);
				if (group_matchday.substring(3) > 0)
				{
					jQuery('#hsp_select_round select option').attr('selected', '');
					jQuery('#hsp_select_round select option.'+group_matchday).attr('selected', 'selected');
				}
				else
				{
					jQuery('#hsp_select_round select option.'+round_id).attr('selected', 'selected');
				}
			}
		});		
	};

	wfb_selectFilter = function(selector, classname, id)
	{
		var list = jQuery(selector);
 		if (!wfb_selectFilterData[id])
 		{
 			wfb_selectFilterData[id] = new Array();
 			jQuery(selector+' option').each(function (i)
 			{
 				wfb_selectFilterData[id][i] = jQuery(this);
 			});
 		}
		else
		{
			jQuery(selector+' option').each(function (i)
			{
				wfb_selectFilterData[id][i] = jQuery(this);
			});
		}
		list.empty();   //remove all elements from the list
		for (var i = 0; i < wfb_selectFilterData[id].length; i++)
		{
			var o = wfb_selectFilterData[id][i];
			if (classname == '' || o.hasClass(classname) || o.hasClass('display'))
			{
				o.appendTo(list);
			}
		}
	};

	wfb_selectChangeLinks = function(selector, round_id)
	{
		jQuery(selector+' option').each(function (i)
		{
			vars_link = jQuery(this).attr('value');
			vars = vars_link.split('/');
			new_value = '';
			if(vars[10].length > 0)
			{
				for (var i = 0; i < vars.length; i++)
				{	
					if ( i == 0 )	
					{
						new_value += vars[i];
					}
					if ( i != 10 && i != 0)	
					{
						new_value += '/'+vars[i];
					}
					if ( i == 10)	
					{
						new_value += '/ro'+round_id;
					}
				}
				jQuery(this).attr('value', new_value);
			}	
		});
	};
	if (typeof container_standing !='undefined')
	{
		loaddisabledTableData(container_standing);
 	}
	if (typeof container_gameplan !='undefined')
	{
		loaddisabledTableData(container_gameplan);
	}

	var arVersion = navigator.appVersion.split("MSIE")
	var version = parseFloat(arVersion[1])
	
	if ((version < 7) && (document.body.filters))
	{
	   for(var i=0; i<document.images.length; i++)
	   {
	      var img = document.images[i]
	      var imgName = img.src.toUpperCase()
	      if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
	      {
	         var imgID = (img.id) ? "id='" + img.id + "' " : ""
	         var imgClass = (img.className) ? "class='" + img.className + "' " : ""
	         var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
	         var imgStyle = "display:inline-block;" + img.style.cssText
	         if (img.align == "left") imgStyle = "float:left;" + imgStyle
	         if (img.align == "right") imgStyle = "float:right;" + imgStyle
	         if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
	         var strNewHTML = "<span " + imgID + imgClass + imgTitle
	         + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
	         + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
	         + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"
	         img.outerHTML = strNewHTML
	         i = i-1
	      }
	   }
	} 

});
