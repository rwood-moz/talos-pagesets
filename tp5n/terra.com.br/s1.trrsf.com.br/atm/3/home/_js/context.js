/* 20110324-1916 */

if (!window.modMan) {
	throw new Error('TemplatingError » O objeto "modMan" não foi encontrado. Por favor, verifique se o include correspondente foi realizado.');
}

try {
	
	modMan.loaddisabled([
		{
			id:"featuredPhotos",
			selector:'.mod-featuredphotos',
			loaddisabledSkin:false,
			params:{
				dinamicLayers:true
			}
		}
	]);
	
	// poll behavior
	(function (){
	
		modMan.require.components([
			{
				id:'formElements',
				selector:'#frm-poll, #frm-services'
			}
		]);

		var $modPoll = $('.mod-poll');
		$modPoll.each(function () {		
			var $this = $(this);
			$this.find(".btn-vote").click(function () {
				modMan.voidPopup("","popupPoll","264","349",0);
				$this.find("form").get(0).submit();
				return false;
			});
		});
		
	})();	
	
	function tabs() {
		var ctn = $('.ctn-tabs');
		var tabs = ctn.find('.tabs li');
		var contents = ctn.find('.content');
		tabs.bind('click', function () {
			var el = $(this);
			var index = tabs.index(el);
			tabs.removeClass('selected');
			el.addClass('selected');
			contents.addClass('hide').filter(':eq('+ index +')').removeClass('hide');
			return false;
		});
	}
	tabs();
	
	function formValidation() {
		var str="busque por empresas, produtos ou servi";
		if(document.frmServices.txt_nome.value.match(str)) {
			alert('Favor preencher o campo "Do que voce precisa?"');
		} else {
			var txt_separator = ',+';
			if (document.frmServices.txt_local.value == 'cidade' ||
				document.frmServices.txt_local.value == ''){
				document.frmServices.txt_local.value = '';
				txt_separator = '';
			}
			if (document.frmServices.txt_estado.value == '#' ||
				document.frmServices.txt_estado.value == ''){
				document.frmServices.txt_estado.value = '';
				txt_separator = '';
			}
			document.frmServices.txt_cidade.value = document.frmServices.txt_local.value +txt_separator+document.frmServices.txt_estado.value;
			document.frmServices.submit();
		}
	}
	
	$('#frmServices #txt_nome').bind('keyup', function (e){
		if (e.keyCode==13) {
			formValidation();
		}
	});	
	
	videoStoreCarousel();
	modServices();
	modSoccerGuide();
	
} catch(e) {
	
	e.message = 'Erro de script no "contex.js". \n' + e.message;
	if(modMan) modMan.log.critical(e.message);

	throw e;
	
}

$(document).ready(function () {
	//custom droplist
	var settings = {
		customScroll: true,
		height: 90
	}
	jQuery('.droplist-by-select').droplist(settings);
});