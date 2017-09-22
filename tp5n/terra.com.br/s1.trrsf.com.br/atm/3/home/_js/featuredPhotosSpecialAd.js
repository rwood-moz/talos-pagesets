if(!window.jQuery) throw new Error('[TEMPLATING ERROR] » Não foi possível encontrar o objeto "jQuery". Por favor, verifique se o include correspondente foi realizado.');
if(!window.modMan) throw new Error('[TEMPLATING ERROR] » Não foi possível encontrar o objeto "modMan". Por favor, verifique se o include correspondente foi realizado.');
try {

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Featured Photos Special AD
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-

$(document).ready(function(){
	if(!window.featuredPhotosSpecialAd) return modMan.log.checkpoint('Campanha featuredPhotosSpecialAd <strong style="color:red;">INATIVA</strong>.');

	var $featuredPhotos = $('.mod-featuredphotos:first'),
		$advertisingContainer = $('.trr-ctn-advertising:first');
	
	if(!$featuredPhotos.length || !$advertisingContainer.length) throw new Error('[featuredPhotosSpecialAd] » Não foi possível localizar o elemento container do módulo ou das publicidades. Por favor, verifique se os seletores para as variáveis $featuredPhotos e $advertisingContainer foram atribuídos corretamente.');
	else {			
		var $adContainer = null,				
			lazyLoader = new modMan.tools.LazyLoader(),
			log = new modMan.tools.log.CONSTRUCTOR('featuredPhotosSpecialAd'),
			documentDone = modMan.globals.page.ready,
			animationInterval = 12,
			tgmKey = (window.tgmKey === 'undefined' ) ? "br.test2010.home" : window.tgmKey,
			site = (window.site === 'undefined' ) ? "br.teste" : window.site ,
			zone = (window.site === 'undefined' ) ? "home" : window.zone ;
			
		window.featuredPhotosSpecialAd = new function(){
			this.create = function(){
				log.checkpoint('Carregando publicade do módulo Featured Photos. <button onclick="featuredPhotosSpecialAd.destroy()">featuredPhotosSpecialAd.destroy()</button>');
			
				var scrollPosition = (navigator.userAgent.match(/ie/i)) ? (window.pageYOffset || document.documentElement.scrollTop) : 0,
					placeholderBorderLeftWidth = parseInt(($featuredPhotos.css('borderLeftWidth')).replace(/[^\d]+/,'')) || 0,
					topPosition = $featuredPhotos.offset().top,
					leftPosition = !$advertisingContainer.offset().left ? $featuredPhotos.offset().left : 0;
					
					//if(scrollPosition > 0 && !documentDone) topPosition += scrollPosition;
					window.setTimeout(function(){
						 featuredPhotosSpecialAd.destroy();
					}, animationInterval * 1000);

			
				$adContainer = $('<iframe src="httpdisabled://s1.trrsf.com.br/atm/3/core/_tpl/advertising.html?tag='+tgmKey+'&area=featurephotos&site='+site+'&zone='+zone+'" style="display:block; position:absolute; z-index:1001; top:'+topPosition+ 'px; left:'+leftPosition+'px" height="'+$featuredPhotos.height()+'" width="'+$featuredPhotos.width()+'" scrolling="no" frameborder="0" allowTransparency="true"></iframe>').appendTo($advertisingContainer);
				
				return undefined;
			}
			
			this.destroy = function(){
				log.checkpoint('Removendo publicade do módulo Featured Photos');
				
				$adContainer.remove();
				$featuredPhotos.unbind('inview');
				$(window).unbind('scroll');
				
				return featuredPhotosSpecialAd = undefined;
			}
		}
		
		lazyLoader.set($featuredPhotos, function (event, visible) {
			featuredPhotosSpecialAd.create();
		});		
	}
});

} catch(e) {
	e.message = '[Error found in the featuredPhotosSpecialAd code] » ' + e.message;
	throw e;
}