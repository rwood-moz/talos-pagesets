if (!window.modMan) {
	throw new Error('TemplatingError » O objeto "modMan" não foi encontrado. Por favor, verifique se o include correspondente foi realizado.');
}

try {

	modMan.start({
		configs: {
			reloaddisabledInterval: 180,
			lazyLoad: false,
			transitionEffects: false
		},
		modules: [
			{
				id: 'modHeaderFooter',
				selector: '#mod-header',
				loaddisabledSkin: false,
				params: {
					idItemMenu: 'home',
					format: 'full',
					selectorFooter: '#mod-footer'
				}
			},
			{
				id: 'modTerraTv',
				selector: '#mod-terratv',
				loaddisabledSkin: false,
				skinName:'thumbs',
				params: {
					request_url: (modMan.globals.page.lang === 'pt') ? 'http://s1.trrsf.com.br/carousel/br/terratv/br_home_terratv.js' : 'http://s1.trrsf.com/carousel/terratv/' + modMan.globals.page.locale.toLowerCase() + '_home.terratv.js',
					autoPlay: true,
					slideShowInterval: 10,
					maxItems:3,
					advertisingPosition: 4
				}

			}
		]
	});

}

catch (e) {
	
	e.message = 'Erro de script no "contex.js". \n' + e.message;
	
	if (modMan) {
		modMan.log.critical(e.message);
	}

	throw e;

}