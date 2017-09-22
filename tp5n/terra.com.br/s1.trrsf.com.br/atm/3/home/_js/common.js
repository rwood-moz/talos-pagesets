videoStoreCarousel = function () {		
	 
	var carouselContainer = $('#mod-533-video-store');
	
	if (carouselContainer.size() > 0){
		try {
			modMan.require.files({
			dependencies: ['../../jquery.trrListCarousel.js'],
			success: function (){
				
				var carousel, containerPosition, THUMB_WHIDTH,pagination=0; 
				
				carouselContainer = $('#mod-533-video-store'); 								
				containerPosition = carouselContainer.offset().left;
	
				THUMB_WHIDTH = 66; 
				
				carouselContainer.find("a.next").bind("click", function(){  
					pagination++;
					
					if (pagination <= 3){
						
						var size = 3, item, firstImage = pagination*size;
						
						for (var i=firstImage; i<firstImage+size; i++){
							item = carouselContainer.find('li:eq('+i+') a');
							item.html('<img src="'+item.html()+'"><span class="layer">&nbsp;</span><span class="info">'+item.attr('title')+'</span>');
							item.attr("title", "mais detalhes");
						}
					} 
					
				});
				
				carousel = carouselContainer.find('ul').trrListCarousel({
					scrollAmount: 234,
					effects: true,
					previousButtonSelector: '#mod-533-video-store .previous',
					nextButtonSelector: '#mod-533-video-store .next',
					disabledPrevButtonClassName: 'disabled-prev',
					disabledNextButtonClassName: 'disabled-next'
				});
				
				
				
			}						
		})
		} catch(e){
			e.message = "[Erro na chamada do módulo 529 Carrossel de sedes] » " + e.message;
			TOOLS.log.critical(e);
		}
	}
}


modServices = function () {
	var lastSearch = '', 
	windowObj, servicesContainer, form, feedback, feedbackClose, sugestions, inputLocal, inputService, //JQUERY SELECTORS
	constructor, injectHtml, jquerySelectors, events, createLi, positionSugestions, //FUNCTIONS
	SETTINGS, DEFAULT_TOP = 72; //CONSTANTS
	
	SETTINGS = {url: {
					BR: "httpdisabled://guiadeservicos.terra.com.br/memorygeocode/request?", 
					CL: "httpdisabled://guiadeservicos.terra.com.br/memorygeocodecl/request?"
				}};
	
	servicesContainer	=	$('#mod-214b-services');
	
	if (servicesContainer.size() > 0) {
		try {
			createLi = function (name, uf) {
				return '<li><a href="#"><span class="city">' + name + '</span><span class="state">' + uf + '</span></a></li>';
			};
			
			positionSugestions = function () {
				var liHeight;
				sugestions.css('top', DEFAULT_TOP + 'px');
				if ((sugestions.offset().top + sugestions.height()) > (windowObj.scrollTop() + windowObj.height())) {
					liHeight = sugestions.height() / sugestions.children().length;
					sugestions.css('top', (DEFAULT_TOP - (sugestions.children().length * liHeight) - 20) + 'px');
				}
			};
			
			injectHtml = function () {
				if (modMan.globals.page.lang === 'pt') {
					$('<div id="feedback" class="feedback">Sua busca deve conter no m\u00EDnimo 3 letras.<a href="#" title="Fechar" class="close">Fechar</a></div>').appendTo(servicesContainer);
				} else if (modMan.globals.page.lang === 'es') {
					$('<div id="feedback" class="feedback">La b\u00FAsqueda debe tener m\u00EDnimo 3 letras.<a href="#" title="Cerrar" class="close">Cerrar</a></div>').appendTo(servicesContainer);
				}
				$('<ul id="sugestions"></ul>').appendTo(servicesContainer);
			};
			
			jquerySelectors = function () {
				windowObj 			= 	$(window);
				form				=	servicesContainer.find('form');
				feedback			=	servicesContainer.find('#feedback');
				feedbackClose		=	feedback.find('.close');
				sugestions 			= 	servicesContainer.find('#sugestions');
				inputService 		= 	servicesContainer.find('#service');
				inputLocal 			= 	servicesContainer.find('#local');
				inputLocal.attr('autocomplete', 'off');
			};
			
			events = function () {
				form.submit(function () {
					if (inputService.val().length < 3 || inputService.val() === inputService[0].defaultValue) {
						if (feedback.hasClass('active') === false) {
							feedback.addClass('active');
						}
						return false;
					} else {
						feedback.removeClass('active');
					}
					if (inputLocal.val() === inputLocal[0].defaultValue) {
						inputLocal.val('');
					}
					return true;
				});
				
				feedbackClose.click(function () {
					feedback.removeClass('active');
					return false;
				});
				
				sugestions.click(function (e) {
					if (e.target.nodeName !== 'UL') {
						inputLocal.val($(e.target).parent().find('.city').text() + ', ' + $(e.target).parent().find('.state').text());
						sugestions.removeClass('active');
					}
					return false;
				});
				
				form.find(':input').focusin(function (e) {
					var target = $(e.target);
					if (target.val() === this.defaultValue) {
						target.val('');
						target.addClass('content');
					}
					target.addClass('focus');
				});
				
				form.find(':input').focusout(function (e) {
					var target = $(e.target);
					if (target.val().length === 0) {
						target.val(this.defaultValue);
						target.removeClass('content');
					} else {
						target.addClass('content');
					}
					target.removeClass('focus');
				});
				
				inputService.focusin(function () {
					if (feedback.hasClass('active') === true) {
						feedback.removeClass('active');
					}
				});
				
				inputLocal.keyup(function () {
					if (inputLocal.val().length >= 3 && inputLocal.val() !== lastSearch) {
						sugestions.removeClass('active');
						
						lastSearch = inputLocal.val();
						modMan.tools.jsonP({
							url: SETTINGS.url[modMan.globals.page.country] + 'function=citysugg&v=1&cityState=' + modMan.tools.encodeURIComponent(lastSearch) + '&country=' + modMan.globals.page.country + '&wt=jsonp&call=aptResponse',
							wrapperName: 'aptResponse',
							callback: function (dataOBJ) {
								sugestions.html('');
								
								var cityState;
								for (var i = 0; i < dataOBJ.length; i++) {
									cityState = dataOBJ[i].cityState.split(', ');
									sugestions.append(createLi(cityState[0], cityState[1]));
								}
								
								if (sugestions.children().length > 0) {
									if (sugestions.hasClass('active') === false) {
										sugestions.addClass('active');
									}
									positionSugestions();
									sugestions.find('li').last().attr('class', 'bottom');
								} else if (sugestions.hasClass('active') === true) {
									sugestions.removeClass('active');
								}
							}
						});
					} else if (sugestions.children().length > 0 && inputLocal.val() === lastSearch) {
						sugestions.addClass('active');
					} else {
						sugestions.removeClass('active');
					}
				});
				
				$(document).click(function () {
					if (sugestions.hasClass('active') === true) {
						sugestions.removeClass('active');
					}
				});
			};
			
			constructor = function () {
				injectHtml();
				jquerySelectors();
				events();
			}();
		} catch (e) {
			e.message = "[Erro na chamada do módulo 214b Guia de Servicos] » " + e.message;
			TOOLS.log.critical(e); 
		}
	}
};

modSoccerGuide = function () {
	var teamProfileContainer = $('#mod-064c-soccer-guide'),
		teamProfileTabs = $('#mod-064c-soccer-guide .tabs');
	
	if (teamProfileContainer.size() > 0) {
		var tabs;
		try {
			modMan.require.files({
				dependencies: ['../../Tabs.js'],
				success: function () {
					if (teamProfileTabs.size() > 0) {
						tabs = new Tabs({
							tabsListContainer : '#mod-064c-soccer-guide .tabs',
							tabsContentContainer : '#mod-064c-soccer-guide .teams',  
							considerHash : false
						});
					}
				}
	        });
		} catch (e) {
			e.message = "[Erro na chamada do m\u00F3dulo Team Profile] » " + e.message;
			TOOLS.log.critical(e); 
		}
	}
};
