/* 20110331-1533 */
if (!window.jQuery) {
	throw new Error('TemplatingError » O objeto "jQuery" não foi encontrado. Por favor, verifique se o include correspondente foi realizado.');
}

try {
		
window.onerror = function(message, fileUrl, lineNumber){
	if(window.modMan){
		window.modMan.log.critical(
			'SyntaxError (detectado em escopo global)\n'+
			'Message » '+ message +'\n'+
			'File »  '+ fileUrl +'\n'+
			'Line » '+ lineNumber
		);
	}
	return false;
};

	
var modMan = function($){
	//=-=-=-=-=-=-=-=-=-=-
	// Local variables
	//=-=-=-=-=-=-=-=-=-=-
	var details = {
		prdBaseDomain:"httpdisabled://s2.trrsf.com.br/", // replaced, if not BR
		portalDir:"atm/",
		coreVersion:3,
		coreDirPath:'core/',
		lastUpdate:"20110331-1533",
		startupTime:new Date().getTime()
	};
	
	var globals = {}; // Stores section configs and shared observers
	
	
	// Error messages
	var errorMsgs = {
		defaultLNG:"pt",
		pt:{
			otherFrameworkFound:"modMan uses jQuery and cant work with other frameworks."
		},
		en:{
			otherFrameworkFound:"modMan uses jQuery and cant work with other frameworks."
		}
	};
	
	// Controlled Vocabulary
	var controlled = {
		defaultLNG:'pt',
		defaultRGN:'BR',
		LNG:{
			pt:{
				loaddisableding:"carregando"
			},
			en:{
				loaddisableding:"loaddisableding"
			},
			es:{
				loaddisableding:"cargando"
			}
		},
		RGN:{
			BR:{
				portalURL:"httpdisabled://www.terra.com.br/"
			}
		}
	};
	
	var Hosts = [
		{ locationMatchEXP:/^.+\/(portal\/hlg\/atm|webdev_hlg)\/\d\//i, redirect:false, type:"DSV" },
		{ locationMatchEXP:/^.+\/entregas\/[\d-]+\//i, redirect:false, type:"DSV" },
		{ locationMatchEXP:/^.+mainsite.int.[^\.]+.terra.com.br\/portal\//i, redirect:false, type:"DSV" },
		{ locationMatchEXP:/^.+hlg\.trrsf\./i, redirect:'http://hlg.trrsf.com.br/atm/3/', type:"HLG" }
	];
		
	/** 
	@updated 20101017-1045
	Base GMT extracted from: 
	- http://www.timeanddate.com/worldclock/ 
	- http://24timezones.com/
	
	* country codes expressed in ISO 3166-1 Alpha-2
	**/
	var Regions = {
		// Horário de verão suspenso temporariamente
		//AR:{id:1, isoCode:"AR", lang:"es", flag:"ARG", gmt:-180, domainMatchEXP:/\.?ar[\.-]|\.ar\//i, portalURL:"httpdisabled://www.terra.com.ar/", dst:{gmt:-120, startLocalTimeStamp:"20091018-0000", endLocalTimeStamp:"20100315-0000"}},
		AR:{id:1, isoCode:"AR", lang:"es", flag:"ARG", gmt:-180, hostTestEXP:/\.?ar[\.-]|\.ar$/i, portalURL:"httpdisabled://www.terra.com.ar/"},
		BR:{id:2, isoCode:"BR", lang:"pt", flag:"BRA", gmt:-180, hostTestEXP:/\.?br[\.-]|\.br$/i, portalURL:"httpdisabled://www.terra.com.br/", dst:{gmt:-120, startLocalTimeStamp:"20101017-0000", endLocalTimeStamp:"20110220-0000"}},
		CA:{id:19, isoCode:"CA", lang:"en", flag:"CAN", gmt:-480, dst:{gmt:-420, startLocalTimeStamp:"20100314-0200", endLocalTimeStamp:"20101107-0200"}},
		CL:{id:3, isoCode:"CL", lang:"es", flag:"CHI", gmt:-240, hostTestEXP:/\.?cl[\.-]|\.cl$/i, portalURL:"httpdisabled://www.terra.cl/", dst:{gmt:-180, startLocalTimeStamp:"20101010-0000", endLocalTimeStamp:"20110404-0000"}},
		CO:{id:4, isoCode:"CO", lang:"es", flag:"COL", gmt:-300, hostTestEXP:/\.?co[\.-]|\.co$/i, portalURL:"httpdisabled://www.terra.com.co/"},
		CR:{id:10, isoCode:"CR", lang:"es", flag:"COS", gmt:-360, hostTestEXP:/\.?cr[\.-]|\.cr$/i, portalURL:"httpdisabled://www.terra.com/"},
		DO:{id:17, isoCode:"DO", lang:"es", flag:"REP", gmt:-240, hostTestEXP:/\.?do[\.-]|\.do$/i, portalURL:"httpdisabled://www.terra.com/"},
		EC:{id:5, isoCode:"EC", lang:"es", flag:"ECU", gmt:-300, hostTestEXP:/\.?ec[\.-]|\.ec$/i, portalURL:"httpdisabled://www.terra.com.ec/"},
		ES:{id:18, isoCode:"ES", lang:"es", flag:"ESP", gmt:60, hostTestEXP:/\.?es[\.-]terra|\.es$/i, portalURL:"httpdisabled://www.terra.com.es/", dst:{gmt:120, startLocalTimeStamp:"20100328-0200", endLocalTimeStamp:"20101031-0300"}},
		GT:{id:11, isoCode:"GT", lang:"es", flag:"GUA", gmt:-360, hostTestEXP:/\.?gt[\.-]|\.gt$/i, portalURL:"httpdisabled://www.terra.com/"},
		HN:{id:12, isoCode:"HN", lang:"es", flag:"HON", gmt:-360, hostTestEXP:/\.?hn[\.-]|\.hn$/i, portalURL:"httpdisabled://www.terra.com/"},
		MX:{id:7, isoCode:"MX", lang:"es", flag:"MEX", gmt:-360, hostTestEXP:/\.?mx[\.-]|\.mx$/i, portalURL:"httpdisabled://www.terra.com.mx/", dst:{gmt:-300, startLocalTimeStamp:"20100404-0200", endLocalTimeStamp:"20101031-0200"}}, // default for spanish
		NI:{id:13, isoCode:"NI", lang:"es", flag:"NIC", gmt:-360, hostTestEXP:/\.?ni[\.-]|\.ni$/i, portalURL:"httpdisabled://www.terra.com/"},
		PA:{id:14, isoCode:"PA", lang:"es", flag:"PAN", gmt:-300, hostTestEXP:/\.?pa[\.-]|\.pa$/i, portalURL:"httpdisabled://www.terra.com/"},
		PE:{id:8, isoCode:"PE", lang:"es", flag:"PER", gmt:-300, hostTestEXP:/\.?pe[\.-]|\.pe$/i, portalURL:"httpdisabled://www.terra.com.pe/"},
		PR:{id:16, isoCode:"PR", lang:"es", flag:"POR", gmt:-240, hostTestEXP:/\.?pr[\.-]|\.pr$/i, portalURL:"httpdisabled://www.terra.com/"},
		SV:{id:15, isoCode:"SV", lang:"es", flag:"SAL", gmt:-360, hostTestEXP:/\.?sv[\.-]|\.sv$/i, portalURL:"httpdisabled://www.terra.com/"},
		VE:{id:9, isoCode:"VE", lang:"es", flag:"VEN", gmt:-270, hostTestEXP:/\.?ve[\.-]|\.ve$/i, portalURL:"httpdisabled://www.terra.com.ve/"},
		US:{id:6, isoCode:"US", lang:"en", flag:"USA", gmt:-300, hostTestEXP:/(^\w\w[^\.-]|en[\.-])+.*\.com$/i, portalURL:"httpdisabled://www.terra.com/", dst:{gmt:-240, startLocalTimeStamp:"20100314-0200", endLocalTimeStamp:"20101107-0200"}},
		ZA:{id:20, isoCode:"ZA", lang:"en", flag:"ZAF", gmt:120}
	};
	
	var Library = {
		modules:{
			baseDIR:"apps/",
			modConsole:{ priority:1, scriptPath:"_console/_js/modConsole.js", currentVersion:"20090607-1744"},
			contentSharer:{ priority:1, scriptPath:"contentSharer/_js/contentSharer.js", currentVersion:"20100422-1535"},
			clock:{ priority:2, scriptPath:"clock/_js/moduleCore.js", currentVersion:"20100610-1900" },
			sendMail:{ priority:2, scriptPath:"sendMail/_js/moduleCore.js", currentVersion:"20100804-1850" },
			modMenu:{ priority:2, scriptPath:"menu/_js/moduleCore.js", currentVersion:"20100812-1356" },
			sonora: { priority:2, scriptPath: "sonora/_js/modman.sonora.js", currentVersion: "20100812-1356" },
			sonoraRadios: { priority:2, scriptPath: "sonora-radios/_js/modman.sonora-radios.js", currentVersion: "20110331-1530" },
			poll: { priority:2, scriptPath: "poll/_js/modman.poll.js", currentVersion: "20101122-1505" },
			multi: { priority:2, scriptPath: "multi/_js/modman.multi.js", currentVersion: "20101123-1530" },
			countdown: { priority:2, scriptPath: "countdown/_js/modman.countdown.js", currentVersion: "20101130-1530" },
			galleries: { priority:2, scriptPath: "galleries/player/_js/modman.galleries.js", currentVersion: "20110317-1600" }
		},
		extensions:{
			baseDIR:"_js/",
			dateOBJ:{
				description:"Possui métodos para converter datas entre diferentes GTMs.",
				scriptPath:"helper.dateOBJ.js",
				source:function(){				
					/* 20100610-2155 */
					var checkDST = function(startLocalTimeStamp, endLocalTimeStamp, dstGMT){
						var currentUTC = new Date().getTime(),
							referenceOBJ = new Date(this.getTime()),
							
							newDateDigits = startLocalTimeStamp.match(/\d\d/g);
							
							referenceOBJ.setFullYear(newDateDigits[0] + '' + newDateDigits[1],newDateDigits[2] - 1,newDateDigits[3]);
						var DSTstarts = referenceOBJ.setHours(newDateDigits[4]);
								
							newDateDigits = endLocalTimeStamp.match(/\d\d/g);
							
							referenceOBJ.setFullYear(newDateDigits[0] + '' + newDateDigits[1],newDateDigits[2] - 1,newDateDigits[3]);			
						var DSTends = referenceOBJ.setHours(newDateDigits[4]);
						
						
						if(currentUTC >= DSTstarts && currentUTC <= DSTends) {
							this.setTime(currentUTC);
							this.setGMT(dstGMT);
							this.currentGMT = dstGMT;
						}
						
						return this;
					};
					
					Date.prototype.getCountryTimeString = function(outputCountryCode){
						outputCountryCode = outputCountryCode || this.currentCountryCode || modMan.globals.user.country;
						var hours = this.getHours(),
							minutes = this.getMinutes(),
							
							sufix = false,
							sep = "h";
						
						if(outputCountryCode != 'BR') {
							sep = ":";
						}
						
						if (outputCountryCode == 'US'){
							if(hours>12) {
								hours = hours - 12;
								sufix = "pm";
							} else {
								sufix = "am";
							}
						}
						hours = ('0' + hours).match(/\d\d$/);
						minutes = ('0'+ minutes).match(/\d\d$/);
						
						var parsedTime = hours + sep + minutes;
						if(sufix) {
							parsedTime += sufix;
						}
						
						return parsedTime;
					};

					Date.prototype.setCountry = function(desiredCountryCode) {
						
						if(this.currentCountryCode && this.currentCountryCode == desiredCountryCode) {
							return this;
						}
						
						if(!desiredCountryCode.match || !desiredCountryCode.match(/^[A-Z]{2}$/) || !modMan.globals.regions[desiredCountryCode]) {
							modMan.log.critical('Não foi possível detectar o valor do GMT a partir do parâmetro <strong>'+desiredCountryCode+'</strong>. O código de país da página atual foi adotado: <strong>'+modMan.globals.page.country+'</strong>.');
							desiredCountryCode = modMan.globals.page.country;
						}					
						
						var desiredGMT = modMan.globals.regions[desiredCountryCode].gmt,
							referenceGMT = -(this.getTimezoneOffset());

						this.setGMT(desiredGMT);

						var dstDefinitionsOBJ = modMan.globals.regions[desiredCountryCode].dst;
						if(dstDefinitionsOBJ && dstDefinitionsOBJ.startLocalTimeStamp) {
							checkDST.apply(this, [dstDefinitionsOBJ.startLocalTimeStamp, dstDefinitionsOBJ.endLocalTimeStamp, dstDefinitionsOBJ.gmt]);
						}

						this.currentGMT = this.currentGMT || desiredGMT;
						this.currentTimezoneOffset = this.currentGMT / 60;
						this.currentCountryCode = desiredCountryCode;
						
						return this;
					};

					Date.prototype.setGMT = function(desiredGMT, referenceGMT) {

						var currentGMT = -(this.getTimezoneOffset());
							referenceGMT = referenceGMT || currentGMT;

						var diference = (desiredGMT - (referenceGMT - currentGMT) - currentGMT) * 60000,
							desiredUTC = this.getTime() + diference;
						
						this.setTime(desiredUTC);
						
						return this;
					};
					
					Date.prototype.getDateDiff = function (referenceDate, outputPeriods, returnOnlyGraterPeriod) {
						if (arguments.length >= 1 && !(referenceDate instanceof Date) && referenceDate !== null) {
							throw new Error("O método 'getDateDiff' só pode receber uma instância de Date como primeiro parâmetro. Caso queria utilizar o momento atual como referência para o cálculo, omita-o ou declare-o como null.", location.href, 0);
						}	
						
						if (arguments.length >= 2 && outputPeriods !== null && (!(outputPeriods instanceof Array) || !outputPeriods.length)) {
							throw new Error("O método 'getDateDiff' só aceita como segundo parâmetro um array formado por períodos válidos para divisão.", location.href, 0);
						}
						
						if (arguments.length >= 3 && returnOnlyGraterPeriod !== null && typeof returnOnlyGraterPeriod !== 'boolean' && !(returnOnlyGraterPeriod instanceof Boolean)) {
							throw new Error("O método 'getDateDiff' só aceita como terceiro parâmetro um boolen que indica o status do filtro para retornar somente o maior período especificado.", location.href, 0);
						}
						
						referenceDate = referenceDate || new Date();
						outputPeriods = outputPeriods || ['years', 'months', 'days', 'hours', 'minutes'];
						returnOnlyGraterPeriod = !!returnOnlyGraterPeriod;
						
						var validDivisorsTestExp = /^years|months|weeks|days|hours|minutes|seconds/,
							periodDivisors = [
								{ name: "seconds", valueInMs: 1000 },
								{ name: "minutes", valueInMs: 60000 },
								{ name: "hours", valueInMs: 3600000 },
								{ name: "days", valueInMs: 86400000 },
								{ name: "weeks", valueInMs: 604800000 },
								{ name: "months", valueInMs: 2592000000 },
								{ name: "years", valueInMs: 31104000000 }
							];
						

						var timeDiff = this.getTime() - referenceDate.getTime(),
							outputPeriodsTestExp = new RegExp(outputPeriods.join('|'));

						referenceDate.setTime(Math.abs(timeDiff));

						var totalDiff = referenceDate.getTime(),
							dateDiffObject = {};	
						
						var currentDivisor, currentValue, cantConsiderPresent;
						while (periodDivisors.length) {
							currentDivisor = periodDivisors.pop();
							
							if (outputPeriodsTestExp.test(currentDivisor.name)) {
								currentValue = Math.floor(totalDiff / currentDivisor.valueInMs);
								if (!returnOnlyGraterPeriod || (!cantConsiderPresent && (currentValue || outputPeriods.length === 1))) {
									dateDiffObject[currentDivisor.name] = currentValue;
								}
								
								totalDiff -= currentValue * (currentDivisor.valueInMs);
								
								outputPeriods.shift();
								
								if (currentValue) {
									cantConsiderPresent = true;
								}
							}
							
							if (!outputPeriods.length) {
								break;
							}
						}

						if (cantConsiderPresent) {
							if (timeDiff < 0) {
								dateDiffObject.tense = "past";
							}
							else {
								dateDiffObject.tense = "future";
							}
						} 
						else {
							dateDiffObject.tense = 'present';
						}

						dateDiffObject.past = (dateDiffObject.tense === 'past');
						dateDiffObject.present = (dateDiffObject.tense === 'present');
						dateDiffObject.future = (dateDiffObject.tense === 'future');

						return dateDiffObject;
					};
				
				}
			},
			arrayOBJ:{
				description:"Possui métodos para reorganizar arrays.",
				scriptPath:"helper.arrayOBJ.js",
				source:function(){
					// Retorna o próprio objeto array embaralhado
					Array.prototype.shuffle = function(){
						for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x); return this;
					};
				}
			},
			stringOBJ:{
				scriptPath:"helper.stringOBJ.js",
				description:"Possui métodos para tratar strings.",
				source:function(){
				
					/* 20090205-1907 */
					//=-=-=-=-=-=-=-=-
					// Função para eliminar caracteres brancos (espaços, tabulações, etc.)
					// no ínicio e fim de uma determinada string
					//=-=-=-=-=-=-=-=-
					String.prototype.trim = function(){
						return this.replace(/\s{2,}/g,' ').replace(/^\s*|\s*$/g,'');
					};

					//=-=-=-=-=-=-=-=-
					// Função para truncar o texto sem cortar palavras
					// n = número máximo de caracteres
					// c = elemento que indica uma string cortada (opcional - padrão: "...")
					//=-=-=-=-=-=-=-=-
					String.prototype.truncate = function(n,c){
						if (n === 0) {
							return this;
						}
						var str =this.trim();
						c=c || "...";		
						// Ajusta a contagem em caracteres extendidos
						var ext = /&[^;\s]*;/g;
						if (str.match(ext)) {
							for(var no=0; no <str.match(ext).length;no++){
								n = n + (str.match(ext)[no].length -1);
							}
						}	
						//alert(str +'\n' + 'length: '+ str.length + 'limite: '+ n);
						if(str.length<=n){
							return str;
						}
						str=str.substr(0, n + 1);
						var p1=str.lastIndexOf(" ");
						var p2=str.lastIndexOf("\n");
						var p3=str.lastIndexOf("\t");
						var p4=str.lastIndexOf("\s");
						var pos=Math.max(p1, p2, p3, p4);
						if(pos>0){
							str=str.substr(0, pos);
						}
						str=str.trim();
						return str+c;
					};

					//=-=-=-=-=-=-=-=-
					// Função responsável por separar os dígitos de milhar dos dígitos de centena com o ponto
					//=-=-=-=-=-=-=-=-
					String.prototype.milhar = Number.prototype.milhar = function(){
						var str = this + '';
						while (str.match(/^\d{4}/)){
							str = str.replace(/(\d)(\d{3}(\.|$))/, '$1.$2');
						}
						return str;
					};

					//=-=-=-=-=-=-=-=-
					// Função para setar o número de digitos de um número
					//=-=-=-=-=-=-=-=-
					String.prototype.digits = Number.prototype.digits = function(numDigits){
						var str = this.toString();
						while (str.length < numDigits) {
							str = "0"+str;
						}
						return str;
					};
				
					return undefined;
				}
			},
			jprint:{
				scriptPath:"jquery.jprint.js",
				description:"Imprime o conteúdo de uma Layer"
			},
			zoomimagethumb:{
				description:"Cria efeito de layer sobreposta em mouse-over.",
				scriptPath:"jquery.zoomimagethumb.js",
				source:function(){
					/* 20090108-1327 */
					/******************************************************************************
					 * ZoomThumbnail 2.0 - Terra Networks - Equipe Webdev
					 * 2008
					 * Modulo independente
					 *
					 * COMO UTILIZAR
					 *
					 * Usar como base o exemplo abaixo
					 *
					 *	<ul>
					 *		<li>
					 *			<a class="lnk-thumb" href="httpdisabled://www.terra.com.br/"><img src="img/thumb.jpg" alt="" /></a>
					 *			<div class="ctn-zoom">
					 *				Bloco ampliado
					 *			</div>
					 *		</li>
					 *		<li>
					 *			<a class="lnk-thumb" href="httpdisabled://www.terra.com.br/"><img src="img/thumb.jpg" alt="" /></a>
					 *			<div class="ctn-zoom">
					 *				Bloco ampliado
					 *			</div>
					 *		</li>
					 *	</ul>
					 *
					 ******************************************************************************/

						$.fn.extend({

							/*
							 * PARAMETERS
							 * - action (hide = 0 / show = 1)
							 */
							zoomImageThumb: function(action) {

								var configs = ({
									animateDuration: 200 // Milliseconds
								});
							
								obj = $(this);
								objZoom = obj.find(".ctn-zoom");
								containerobjZoom = obj.parent();

								if (action == 1) { // Show
									if (objZoom.css("display") == "none") {
										containerobjZoom.find("li").css("z-index","1");
										containerobjZoom.find(".ctn-zoom").hide();
										obj.css("z-index","10");
										objZoom.fadeIn(configs.animateDuration, function() {
											obj.css("z-index","10");
										});
									}
								} else { // Hide
									objZoom.fadeOut(configs.animateDuration);
									containerobjZoom.find("li").css("z-index","1");
								}

							}
						});
					
					return undefined;
				}
			},
			inputs:{
				scriptPath:"jquery.checkbox.radiobutton.js",
				description:"httpdisabled://www.gmarwaha.com/jquery/jcarousellite/index.php#what",
				source:function(){
					$.extend({

						// Checkbox radiobutton replace
						checkboxRadiobutton: function(e) {								
							/* Radio replace */
							var rdoReplace = typeof(e) == "undefined" ? $("input:radio.chk-rdo-replace:not(.replaced)") : $(e).find("input:radio.chk-rdo-replace:not(.replaced)");

							rdoReplace.each(function() {
								$(this).addClass("replaced");
								$(this).css("opacity","0");
								$(this).css("display","none");
								$(this).before($(this).attr("checked") ? "<span class='rdo-replace rdo-checked"+($(this).attr("disabled") ? "-disabled" : "")+"'>Radio</span>" : "<span class='rdo-replace"+($(this).attr("disabled") ? " rdo-disabled" : "")+"'>Radio</span>");
								$(this).prev().click(function() {
									$(this).next().attr("checked","checked");
									$(this).next().change();
								});

								$(this).change(function() {
									if (!$(this).attr("disabled")) {
										rdoClick($(this).attr("name"));
									}
								});

								// IE Fix
								$(this).click(function() {
									rdoReplace.change();
								});
							});

							function rdoClick(name) {
								$("input:radio.chk-rdo-replace[name='"+name+"']").each(function() {
									if ($(this).attr("checked")) {
										// Check
										$(this).prev().addClass("rdo-checked");
									} else {
										// Uncheck
										$(this).prev().removeClass("rdo-checked").removeClass("rdo-checked-disabled");
										if ($(this).attr("disabled")) {
											$(this).prev().addClass("rdo-disabled");
										}
									}
								});
							}
							/* // Radio replace */


							/* Checkbox replace */
							var chkReplace = typeof(e) == "undefined" ? $("input:checkbox.chk-rdo-replace:not(.replaced)") : $(e).find("input:checkbox.chk-rdo-replace:not(.replaced)");

							chkReplace.css("opacity","0");
							chkReplace.css("display","none");
							chkReplace.each(function() {
								$(this).addClass("replaced");

								$("label[for='"+$(this).attr("id")+"']").removeAttr("for");
								if ($(this).attr("checked")) {
									$(this).before("<span class='chk-replace chk-checked"+($(this).attr("disabled") ? "-disabled" : "")+"'>Checkbox</span>");
								} else {
									$(this).before("<span class='chk-replace"+($(this).attr("disabled") ? " chk-disabled" : "")+"'>Checkbox</span>");
								}
							});

							$(".chk-replace, input:checkbox + label").click(function() {
								// objCheckbox
								var objCheckbox = null;
								if ($(this).is("label")) {
									objCheckbox = $(this).prev();
								} else {
									objCheckbox = $(this).next();
								}
								if (objCheckbox.attr("disabled")) {
									return;
								}

								if (objCheckbox.attr("checked")) {
									objCheckbox.removeAttr("checked");
									objCheckbox.prev().removeClass("chk-checked");
								} else {
									objCheckbox.attr("checked","checked");
									objCheckbox.prev().addClass("chk-checked");
								}
							});
							/* // Checkbox replace */
						}
					});

				}
			},
			jcarousel_lite:{
				scriptPath:"jquery.jcarousel_lite.js",
				description:"httpdisabled://www.gmarwaha.com/jquery/jcarousellite/index.php#what"
			},
			elementposition:{
				scriptPath:"jquery.elementposition.js",
				description:"httpdisabled://www.gmarwaha.com/jquery/jcarousellite/index.php#what"
			},
			clickout:{
				scriptPath:"jquery.clickout.js",
				description:"httpdisabled://www.gmarwaha.com/jquery/jcarousellite/index.php#what"
			},
			combobox:{
				scriptPath:"jquery.combobox.js",
				description:"httpdisabled://www.gmarwaha.com/jquery/jcarousellite/index.php#what"
			},
			jqdnr:{
				scriptPath:"jquery.jqdnr.js",
				description:"httpdisabled://www.gmarwaha.com/jquery/jcarousellite/index.php#what"
			},
			scrolling:{
				scriptPath:"jquery.scrolling.js",
				description:"httpdisabled://www.gmarwaha.com/jquery/jcarousellite/index.php#what"
			},
			tabs:{
				scriptPath:"jquery.tabs.js",
				description:"httpdisabled://www.gmarwaha.com/jquery/jcarousellite/index.php#what"
			},
			wheel:{
				scriptPath:"jquery.wheel.js",
				description:"httpdisabled://www.gmarwaha.com/jquery/jcarousellite/index.php#what"
			},
			thickbox:{
				scriptPath:"jquery.thickbox.js",
				description:"For modal pop ups"
			},
			tmpl:{
				scriptPath:"jquery.tmpl.js",
				description:"Template parser"
			},
			droplist: {
				scriptPath: "jquery.droplist.js",
				description: "Combobox do core 3!"
			},
			jScrollPane: {
				scriptPath: "jquery.jScrollPane.js",
				description: "Barra de scroll personalizada"
			}
		},
		components:{
			combobox:{
				description:"Dropdown atomizado.",
				dependencies:{
					extensions:['jqdnr', 'elementposition', 'wheel', 'scrolling', 'clickout', 'combobox']
				},
				CONSTRUCTOR:function(selectorSTRING, callback, errorHandler){
					var $container = $(selectorSTRING);
					
					if(!$container.length) {
						var errorMsg = 'Não foi pessível encontrar uma tag SELECT com seletor <strong>'+selectorSTRING+'</strong>';
						if(errorHandler) {
							errorHandler(errorMsg);
						}
						return modMan.log.critical(errorMsg);
					}
					
					$container.combobox();
					$container.find('.scrolling').scrolling();
					$container.find('.cmb-value, .clickout').initClickOut();
					
					if(callback) {
						callback();
					}
				}
			},
			scrolling:{
				description:"Barra de scroll atomizada.",
				dependencies:{
					extensions:['jqdnr','elementposition', 'wheel', 'scrolling']
				},
				CONSTRUCTOR:function(selectorSTRING){
					var $container = $(selectorSTRING);
					
					if(!$container.length) {
						var errorMsg = 'Não foi possível encontrar um container com seletor <strong>'+selectorSTRING+'</strong>';
						if(errorHandler) {
							errorHandler(errorMsg);
						}
						return modMan.log.critical(errorMsg);
					}
					
					$container.scrolling();
				}
			},
			formElements:{
				description:"Barra de scroll atomizada.",
				dependencies:{
					extensions:['inputs']
				},
				CONSTRUCTOR:function(formElement, callback, errorHandler){
					var $form = $(formElement);
					if(!$form.length) {
						var errorMsg = 'Não foi possível encontrar uma tag FORM com seletor <strong>'+formElement+'</strong>';
						if(errorHandler) {
							errorHandler(errorMsg);
						}
						return modMan.log.critical(errorMsg);
					}
					
					$form.each(function(){
						(function($form){
							
							var inputs = $form.find('input.chk-rdo-replace');
							if(inputs.length){
								$.checkboxRadiobutton();
							}
							
							var selects = $form.find('select');
							if(selects.length){
								require.components([
									{
										id:'combobox',
										selector:'.combobox',
										success:function(){
											if(callback) {
												callback();
											}
										}
									}
								]);
								
							} else if(callback) {
								callback();
							}
							
							var formName = $form.attr('name') || ('#' + $form.attr('id')) || ('#' + $form.attr('id'));
							modMan.log.checkpoint('Interface redefinida para '+(inputs.length + selects.length)+' elemento(s) do formulário <strong>'+formName+'</strong>.');
						
						})($(this));
					
					});
					
				}
			}
		}
	};
	// Local variables //	
	
	//=-=-=-=-=-=-=-=-=-
	// Section configs
	//=-=-=-=-=-=-=-=-=-
	(function(){

		// Page locale detection >>
		var pageRegionCodes = function() {
			// trying to extract locale from document lang attribute
			var documentLang = document.getElementsByTagName('html')[0].getAttribute('lang');
			
			if(documentLang) {
				var codes = documentLang.match(/\w\w/g);					
				
				if (codes && codes.length == 2) {
					codes[1] = codes[1].toUpperCase();
					return {
						lang:codes[0],
						country:codes[1],
						locale:codes[0] + '-' + codes[1]
					};
				}
			}
			
			// extract region codes from document location
			if (location.host) {
				for (var isoCode in Regions) {
					if (Regions[isoCode].hostTestEXP && Regions[isoCode].hostTestEXP.test(location.host)) {
						return {
							lang:Regions[isoCode].lang,
							country:isoCode,
							locale:Regions[isoCode].lang + '-' + isoCode
						};
					}
				}
			}
			
			// default
			return {
				lang:'pt',
				country:'BR',
				locale:'pt-BR'
			};
		}();
		
		// User locale detection >>
		var userAgentLocaleCodes = (/\w\w/g).exec(navigator.language || navigator.userLanguage || ''),
			// default
			userRegionCodes = {
				lang:'pt',
				country:'BR',
				locale:'pt-BR'
			};
			
		if (userAgentLocaleCodes && userAgentLocaleCodes.length == 2) {
			userRegionCodes.lang = userAgentLocaleCodes[0].toLowerCase();
			userRegionCodes.country  = userAgentLocaleCodes[1].toUpperCase();
			userRegionCodes.locale  = userRegionCodes.lang + '-' + userRegionCodes.country;
		}
		
		var regionDetails = Regions[pageRegionCodes.country] || null;
		
		if (pageRegionCodes.country != "BR" && details.prdBaseDomain && details.prdBaseDomain.replace) {
			details.prdBaseDomain = details.prdBaseDomain.replace(/\.br\/?/,'/');
		}		
		
		// Stage detection >>
		var stageType = "PRD",
			baseURL = function () {
			
			var scripts = document.getElementsByTagName('script'),
				last = scripts[scripts.length - 1],
				referenceLocation = (/^[^\/\.]+trrsf\..*(webdev_\w\w\w|atm)\/\d\/.*core\.modMan/).exec(last.src || '') || location.href;
			
				referenceLocation = location.href;
			
			for (var i = 0, currentHost; currentHost = Hosts[i]; i++) {
				var detected = currentHost.locationMatchEXP.exec(referenceLocation);
				if(detected && currentHost.type) {
					stageType = currentHost.type;					
					return currentHost.redirect || detected[0].replace(/\/$/,'') + '/';
				}
			}
			
			return details.prdBaseDomain + details.portalDir + details.coreVersion + '/';
		}();

		// FlashDetect
		// http://www.featureblend.com/license.txt
		if(!FlashDetect) {
			var FlashDetect=new function(){var self=this;self.installed=false;self.raw="";self.major=-1;self.minor=-1;self.revision=-1;self.revisionStr="";var activeXDetectRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7","version":function(obj){return getActiveXVersion(obj);}},{"name":"ShockwaveFlash.ShockwaveFlash.6","version":function(obj){var version="6,0,21";try{obj.AllowScriptAccess="always";version=getActiveXVersion(obj);}catch(err){}; return version;}},{"name":"ShockwaveFlash.ShockwaveFlash","version":function(obj){return getActiveXVersion(obj);}}];var getActiveXVersion=function(activeXObj){var version=-1;try{version=activeXObj.GetVariable("$version");}catch(err){}; return version;};var getActiveXObject=function(name){var obj=-1;try{obj=new ActiveXObject(name);}catch(err){}; return obj;};var parseActiveXVersion=function(str){var versionArray=str.split(",");return{"raw":str,"major":parseInt(versionArray[0].split(" ")[1],10),"minor":parseInt(versionArray[1],10),"revision":parseInt(versionArray[2],10),"revisionStr":versionArray[2]};};var parseStandardVersion=function(str){var descParts=str.split(/ +/);var majorMinor=descParts[2].split(/\./);var revisionStr=descParts[3];return{"raw":str,"major":parseInt(majorMinor[0],10),"minor":parseInt(majorMinor[1],10),"revisionStr":revisionStr,"revision":parseRevisionStrToInt(revisionStr)};};var parseRevisionStrToInt=function(str){return parseInt(str.replace(/[a-zA-Z]/g,""),10)||self.revision;};self.majorAtLeast=function(version){return self.major>=version;};self.FlashDetect=function(){if(navigator.plugins&&navigator.plugins.length>0){var type='application/x-shockwave-flash';var mimeTypes=navigator.mimeTypes;if(mimeTypes&&mimeTypes[type]&&mimeTypes[type].enabledPlugin&&mimeTypes[type].enabledPlugin.description){var version=mimeTypes[type].enabledPlugin.description;var versionObj=parseStandardVersion(version);self.raw=versionObj.raw;self.major=versionObj.major;self.minor=versionObj.minor;self.revisionStr=versionObj.revisionStr;self.revision=versionObj.revision;self.installed=true;}}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){var version=-1;for(var i=0;i<activeXDetectRules.length&&version==-1;i++){var obj=getActiveXObject(activeXDetectRules[i].name);if(typeof obj=="object"){self.installed=true;version=activeXDetectRules[i].version(obj);if(version!=-1){var versionObj=parseActiveXVersion(version);self.raw=versionObj.raw;self.major=versionObj.major;self.minor=versionObj.minor;self.revision=versionObj.revision;self.revisionStr=versionObj.revisionStr;}}}}}();};FlashDetect.release="1.0.3";
		}
		
		// Set free section configs
		globals = {
			data:{
				log:[],
				feeds:{},
				instances:{}
			},
			stage:{
				isDSV:(stageType == "DSV"),
				type:stageType,
				staticFilesHost:details.prdBaseDomain,
				coreBaseUrl:baseURL + details.coreDirPath,
				debugging:(/debug/).test(document.location)
			},
			page:{
				contextId:(window.trrConstantData && window.trrConstantData.configs) ? window.trrConstantData.configs.contextId : undefined,
				lang:pageRegionCodes.lang,
				country:pageRegionCodes.country,
				locale:pageRegionCodes.locale,
				regionDetails:regionDetails,
				underTerra:false,
				baseURL:baseURL,
				portalURL:regionDetails ? regionDetails.portalURL : null,
				startupTime:details.startupTime,
				ready:false,
				loaddisableded:false,
				transitionEffects:false
			},
			user:{
				lang:userRegionCodes.lang,
				country:userRegionCodes.country,
				locale:userRegionCodes.locale,
				flash:{
					installed:FlashDetect.installed,
					version:FlashDetect.major
				}
			},
			regions:Regions
		};
		
		$(document).ready(function(){
			globals.page.ready = true;
		});
		
		$(window).loaddisabled(function(){
			globals.page.loaddisableded = true;
		});
		
	})(); // Just once
	
	var Log = (function(){
		var stack = globals.data.log = [],
			cache = {},
			foundCriticalErrors = false;
			
		var printError = function(error){
			if (typeof(error) == 'object'){
				var msg = '[NOVA EXCEÇÃO] » ';
				for(var prop in error){
					if(prop != 'stack') msg += prop + ': ' + error[prop] + ' ';
				}
				return msg;
			} else return error;
		};
		
		var insertMsg = function(type, error){
			if(globals.stage.debugging){				
				stack.push({
					instanceCheckpoint:new Date().getTime() - this.instanceStartupTime,
					sessionCheckpoint:new Date().getTime() - globals.page.startupTime,
					profile:this.profileId,
					type:type,
					message:printError(error),
					details:error
				});
				
				if(globals.data.instances.modConsole) {
					globals.data.instances.modConsole[0].report();
				}
			}
		};

		return function Log (profileId) {
			if (!(this instanceof Log)) {
				new Log(profileId);
			}
			var profileId = profileId || "System Message";
			
			if(cache[this.profileId]) {
				return cache[profile];
			}
			
			var SELF = this;
			this.profileId = profileId;
			this.instanceStartupTime = new Date().getTime();
			
			this.checkpoint = function(error) { insertMsg.call(SELF, 'checkpoint', error); };
			this.warning = function(error) { insertMsg.call(SELF, 'warning', error); };
			this.critical = function(error) { insertMsg.call(SELF, 'critical', error); if(window.console && !foundCriticalErrors && globals.stage.debugging){foundCriticalErrors = true; console.log("Erro(s) crítico(s) suprimido(s). Acione o console para verificar mais detalhes."); } };
			
			this.trace = function(error) { insertMsg.call(SELF, 'trace', error); };
			this.help = function(error) { insertMsg.call(SELF, 'help', error); };
		};
	})();
	
	var log = new Log();
	
	var require = (function () {

		this.timeout = 0;

		var headElement = document.getElementsByTagName('head')[0],

			defaultAttributes = {
				link : {
					type : "text/css",
					rel : "stylesheet",
					media : "all"
				},
				script : {
					type : "text/javascript",
					charset : "utf-8"
				}
			},

			activeDependencies = globals.data.dependencies = {
				components : {},
				files : {
					css : {},
					js : {}
				},
				extensions : {},
				externalScripts : {}
			},

			jsonpQueueList = {};

		// Constructor >>
		var Stack = (function () {

			var FaliedFiles = {},
				InProgress = {},
				LoadedFiles = this.LoadedFiles = {},
				LoadedComponents = this.LoadedComponents = {},
				Statements = [];

			var getRequestDetails = function (url) {
				var alternate1 = url.replace(/s1\./, 's2.'),
					alternate2 = url.replace(/s2\./, 's1.'),

					inProgress = (InProgress[alternate1] || InProgress[alternate2]),
					loaddisableded = (LoadedFiles[alternate1] || LoadedFiles[alternate2]),
					failed = (FaliedFiles[alternate1] || FaliedFiles[alternate2]);

				return {
					inProgress : inProgress,
					loaddisableded : loaddisableded,
					failed : failed,
					alreadyRequested : (inProgress || loaddisableded)
				};
			};

			this.loaddisableding = function (url) {
				InProgress[url] = true;
			};

			this.loaddisableded = function (url, type) {
				//if (window.console) console.log('cadastrando carregamento da url ' + url);
				LoadedFiles[url] = true;

				var matchResult = queryLibraryMatch(url);
				if (matchResult) {
					activeDependencies.extensions[matchResult] = true;
				}
				if (!url.match(/(jquery|modMan)\.js$/i)) {
					activeDependencies.externalScripts[url] = true;
				}

				activeDependencies.files[type][url] = true;

				if (getRequestDetails(url).inProgress) {
					delete InProgress[url];
					Stack.update();
				}

			};

			this.failed = function (url) {
				FaliedFiles[url] = true;

				if (getRequestDetails(url).inProgress) {
					delete InProgress[url];
					Stack.update();
				}
			};

			this.register = function (statementOBJ) {
				Statements.push(statementOBJ);

				var allDependenciesArePresent = true,
					totalDependencies = statementOBJ.requires.length,
					i, currentDependency, url;
					
				for (i = 0; i < totalDependencies; i++) {
					currentDependency = statementOBJ.requires[i];
					url = currentDependency.href || currentDependency.src;

					if (currentDependency.src) {
						var matchResult = queryLibraryMatch(url);
						if (matchResult && Library.extensions[matchResult].source && typeof(Library.extensions[matchResult].source) == 'function') {
							Library.extensions[matchResult].source();
							Library.extensions[matchResult].source = true;
							log.checkpoint('Evitando request de ' + matchResult);
							Stack.loaddisableded(url, 'js');

							continue;
						}
					}

					if (!getRequestDetails(url).alreadyRequested || statementOBJ.voidData) {
						allDependenciesArePresent = false;
						createElement(currentDependency, statementOBJ.error);
					}
				}

				if (allDependenciesArePresent) {
					Stack.update();
				}
			};

			this.update = function () {

				var stackedStatements = $.extend(Statements, []),
					queue = [],
					currentStatement = null,
					dependenciesQueue = [],
					criticalErrors = [],
					current, totalDependencies, i;
					
				Statements = [];
				//if (window.console) console.log('UPDATE rolando para: '+stackedStatements.length + ' statements');

				if (stackedStatements.length) {

					while (stackedStatements.length) {
						currentStatement = stackedStatements.shift();

						if (!currentStatement.dependenciesList) {
							currentStatement.dependenciesList = $.extend([], currentStatement.requires);
						}

						totalDependencies = currentStatement.dependenciesList.length;

						// loop to update dependencies status
						if (currentStatement.requires.length) {

							//if (window.console) console.log('Statement aguardando ' + currentStatement.requires.length);
							while (currentStatement.requires.length) {
								var currentDependency = currentStatement.requires.shift(),
									url = currentDependency.src || currentDependency.href;

								//if (window.console) console.log('verificando url ' + url);
								if (getRequestDetails(url).failed) {
									criticalErrors.push(url);
								}

								if (!getRequestDetails(url).loaddisableded) {
									dependenciesQueue.push(currentDependency);
								}
							}
							//if (window.console) console.log('ainda restam ' + dependenciesQueue.length);
							if (dependenciesQueue.length) {
								currentStatement.requires = currentStatement.requires.concat(dependenciesQueue);
							}
						}

						if (!currentStatement.requires.length) {
							//if (window.console) console.log('DISPARANDO CALLBACK');
							if (currentStatement.success) {
								window.setTimeout(currentStatement.success, 100);
								if (currentStatement.voidData) {
									for (i = 0; totalDependencies.length; i++) {
										current = currentStatement.dependenciesList[i];
										LoadedFiles[current.src || current.href] = undefined;
									}
								}
							}
						}
						else if (criticalErrors.length) {
							if (currentStatement.errorHandler) {
								currentStatement.errorHandler();
							}
						}
						else {
							//if (window.console) console.log('adiando statement');
							queue.push(currentStatement);
						}
					}
					if (queue.length) {
						Statements = Statements.concat(queue);
					}
				}

				return undefined;
			};

			return this;
		}.call(Stack));

		var convert2absolutePath = function (includePath) {

			if ((/^(https?:\/\/|file:)/).test(includePath)) {
				return includePath;
			}

			var base = document.location.toString().replace(/[^\/]+$/, ''),
				fileRealPath = includePath.replace(base, '').replace(/\.\.\//g, '');

			if ((/^\//).test(includePath)) {
				return (document.domain) ? location.protocol + "//" + document.domain + includePath : (/.+\//).exec(document.location)[0] + includePath.replace(/^\//, '');
			}

			if ((/^\.\.\//).test(includePath)) {
				var backDirectories = includePath.match(/(\.\.\/)/g).length;
				for (var i = 0; i < backDirectories; i++) {
					base = base.replace(/[^\/]+\/?$/, '');
				}
			}
			return base + fileRealPath;
		};

		var queryLibraryMatch = function (includeUrl) {
			for (var objectIndex in Library.extensions) {
				if (Library.extensions.hasOwnProperty(objectIndex)) {
					var referenceOBJ = Library.extensions[objectIndex];
					if (referenceOBJ.scriptPath && includeUrl.match(referenceOBJ.scriptPath)) {
						return objectIndex;
					}
				}
			}
			return false;
		};

		var checkTemplate = (function () {
			var firstLoad = {},
				tmpOBJ = {};

			var queryElements = function () {
				var elementsArray = document.getElementsByTagName('link'),
					scriptEXP = /javascript/i,
					current, currentHREF, currentSRC, url, i, totalElements;
					
				totalElements = elementsArray.length;

				for (i = 0; i < totalElements; i++) {
					current = elementsArray[i];
					currentHREF = current.href;
					if (currentHREF && current.getAttribute('rel').toLowerCase() == 'stylesheet') {
						url = convert2absolutePath(currentHREF);
						if (!firstLoad[url] && activeDependencies.files.css[url]) {
							log.critical('Include CSS replicado: <strong>' + url + '</strong>');
							continue;
						}
						tmpOBJ[url] = true;
						activeDependencies.files.css[url] = true;
						Stack.loaddisableded(url, 'css');
					}
				}

				elementsArray = document.getElementsByTagName('script');
				totalElements = elementsArray.length;
				
				for (i = 0; i < totalElements;i++) {
					current = elementsArray[i];
					currentSRC = current.src;
					url = convert2absolutePath(currentSRC);

					if (currentSRC && (scriptEXP.test(current.getAttribute('type')) || scriptEXP.test(current.getAttribute('language')))) {
						if (!firstLoad[url] && activeDependencies.files.js[url]) {
							log.critical('Include JS replicado: <strong>' + url + '</strong>.');
							continue;
						}

						tmpOBJ[url] = true;
						activeDependencies.files.js[url] = true;

						Stack.loaddisableded(url, 'js');
					}
				}

				firstLoad = tmpOBJ;
				return undefined;
			};

			// doubleCheck
			queryElements();
			//$(document).ready(function () {
				//queryElements();
				//checkTemplate = undefined; // release
			//});

			return undefined;
		}());

		// Constructor <<

		var autoDetectAttributes = function (url) {
			var typeAttribute, urlAttributeName;

			if ((/\.css$/i).test(url)) {
				typeAttribute = "text/css";
				urlAttributeName = "href";
			}
			else if ((/\.js$/i).test(url)) {
				typeAttribute = "text/javascript";
				urlAttributeName = "src";
			}
			else {
				log.critical('Não foi possível identificar o tipo de tag para url: \n' + url);
				return null;
			}

			var attributesOBJ = {};
			attributesOBJ.type = typeAttribute;
			attributesOBJ[urlAttributeName] = url;

			return attributesOBJ;
		};

		var attachTimeOutHandler = function (tagOBJ, timeout, errorHandler) {
			timeout = timeout || require.timeout;

			var url = tagOBJ.src || tagOBJ.href,
				checkInterval,
				check = function () {
					checkInterval = window.clearInterval(checkInterval);

					if (!Stack.LoadedFiles[url]) {
						Stack.failed(url);
						tagOBJ.onloaddisabled = tagOBJ.onreadystatechange = null;
						headElement.removeChild(tagOBJ);
						//errorHandler();
					}
				};


			if (timeout) {
				checkInterval = window.setInterval(check, timeout);
			}
		};

		var monitorNewCss = function (index, url) {
			var checkInterval,

				check = function () {
					if (document.styleSheets[index]) {
						if (url) {
							var currentURL = url,
								internalAttributes = url.match(/[?&]codeVersion=[^&]+/i);

							if (internalAttributes) {
								currentURL = currentURL.replace(internalAttributes[0], '');
							}

							Stack.loaddisableded(currentURL, 'css');
							//if (window.console) console.log("Novo include CSS:\n" + url);
						}
						checkInterval = window.clearInterval(checkInterval);
					}
				};

			checkInterval = window.setInterval(check, 100);
		};


		var createElement = function (userDefinedOBJ, errorHandler) {
			var tagName, urlAttributeName, customOptions, tagOBJ, url, attributeName;

			if ((/text\/javascript/i).test(userDefinedOBJ.type)) {
				tagName = "script";
				urlAttributeName = "src";
			}
			else if ((/text\/css/i).test(userDefinedOBJ.type)) {
				tagName = "link";
				urlAttributeName = "href";
			}
			else {
				return log.warning('Tag desconhecida para o include: ' + userDefinedOBJ.type);
			}

			// splice custom attributes
			customOptions = {};
			if (userDefinedOBJ.timeout) {
				customOptions.timeout = userDefinedOBJ.timeout;
				delete userDefinedOBJ.timeout;
			}

			// set attributes
			tagOBJ = document.createElement(tagName);

			url = userDefinedOBJ[urlAttributeName];
			Stack.loaddisableding(url);

			// attach callback
			if (tagName == "script") {
				tagOBJ.onloaddisabled = tagOBJ.onreadystatechange = function () {
					if (!this.readyState || this.readyState == "loaddisableded" || this.readyState == "complete") {
						var currentURL = this.src,
							internalAttributes = this.src.match(/[?&]codeVersion=[^&]+/i);

						if (internalAttributes) {
							currentURL = currentURL.replace(internalAttributes[0], '');
						}


						//if (window.console) console.log("Novo include Javascript:\n" + currentURL);

						this.onloaddisabled = this.onreadystatechange = null;
						//objHead.removeChild(this);
						headElement.removeChild(tagOBJ);
						//if (window.console) console.log("agora foi "+!!$.combobox);

						//setTimeout(function () {Stack.loaddisableded(currentURL, 'js')},1000);
						Stack.loaddisableded(currentURL, 'js');
						log.checkpoint("Novo include Javascript:\n" + currentURL);

						return undefined;
					}
				};
			}

			for (attributeName in defaultAttributes[tagName]) {
				if (defaultAttributes[tagName].hasOwnProperty(attributeName)) {
					tagOBJ[attributeName] = defaultAttributes[tagName][attributeName];
				}
			}
			for (attributeName in userDefinedOBJ) {
				if (userDefinedOBJ.hasOwnProperty(attributeName)) {
					tagOBJ[attributeName] = userDefinedOBJ[attributeName];
				}
			}

			if (tagName == "link") {
				monitorNewCss(document.styleSheets.length, url);
			}

			if (errorHandler) {
				attachTimeOutHandler(tagOBJ, customOptions.timeout, errorHandler);
			}

			headElement.appendChild(tagOBJ);
		};

		//=-=-=-=-=-=-=-=-=-
		// Public Commands >>
		//=-=-=-=-=-=-=-=-=-
		this.files = function (statementsObjectsARRAY) {
			if (!statementsObjectsARRAY || !(statementsObjectsARRAY instanceof Object)) {
				return log.critical('Erro ao utilizar o método require.files.');
			}

			// forgiving url expressed as a String
			statementsObjectsARRAY.dependencies = (typeof(statementsObjectsARRAY.dependencies) == "string") ? [statementsObjectsARRAY.dependencies] : statementsObjectsARRAY.dependencies;

			var structErrors = modMan.tools.getStructErrors({
				data : statementsObjectsARRAY,
				model : {
					dependencies : Array
				}
			});
			if (structErrors) {
				return log.critical('Erro ao utilizar a ferramenta requires. \n' + structErrors);
			}

			var finalStack = [],
				foundTypeErrors = false,
				current, url;
			while (statementsObjectsARRAY.dependencies.length) {
				current = statementsObjectsARRAY.dependencies.shift();
				url = current.src || current.href || current;

				url = convert2absolutePath(url.replace(/^\s?|\s?$/, '').replace(/.+s\d.trrsf\.com(\.br)?\//, globals.stage.staticFilesHost)); // trim

				// if not declared, detect file type
				if (typeof(current) == "string") {
					current = autoDetectAttributes(url);
				}
				else if (current.src) {
					current.src = url;
				}
				else if (current.href) {
					current.href = url;
				}

				if (!current) {
					foundTypeErrors = true;
					continue;
				}

				finalStack.push(current);
			}

			if (foundTypeErrors && typeof(statementsObjectsARRAY.error) == 'function') {
				return statementsObjectsARRAY.error(new TypeError('Erros foram encontrados durante a detecção do tipo de include em uma ou mais urls. Verifique mais detalhes no log registrado no console.'));
			}

			Stack.register({
				requires : finalStack,
				voidData : !!statementsObjectsARRAY.voidData,
				success : statementsObjectsARRAY.success,
				error : statementsObjectsARRAY.error
			});

			return undefined;
		};

		this.extensions = function (statementOBJECT) {
			if (!statementOBJECT || !(statementOBJECT instanceof Object)) {
				return log.critical('Erro ao utilizar o método require.extensions.');
			}

			var structErrors = modMan.tools.getStructErrors({
				data : statementOBJECT,
				model : {
					dependencies : Array,
					success : Function
				},
				help : {
					dependencies : "Deve ser um objeto tipo Array, composto por identificadores (strings) das extensões desejadas."
				}
			});
			if (structErrors) {
				return log.critical('Erro ao utilizar o método require.extensions. \n' + structErrors);
			}

			var unknowExtensions = [],
				externalScriptsList = [];
			while (statementOBJECT.dependencies.length) {
				var currentId = statementOBJECT.dependencies.shift();
				if (!Library.extensions[currentId]) {
					unknowExtensions.push(currentId);
					continue;
				}

				if (Library.extensions[currentId].source) {
					if (typeof(Library.extensions[currentId].source) == 'function') {
						Library.extensions[currentId].source();
						Library.extensions[currentId].source = true;
						activeDependencies.extensions[currentId] = true;
					}
					continue;
				}

				if (typeof(Library.extensions[currentId].scriptPath) == 'string') {
					externalScriptsList.push(modMan.globals.stage.coreBaseUrl + Library.extensions.baseDIR + Library.extensions[currentId].scriptPath);
				}

			}
			if (unknowExtensions.length) {
				return log.critical('Referência(s) não encontrada(s) na biblioteca: <strong>' + unknowExtensions.join(', ') + '</strong>.');
			}

			if (externalScriptsList.length) {
				require.files({
					dependencies : externalScriptsList,
					success : statementOBJECT.success,
					error : statementOBJECT.error
				});
			}
			else if (statementOBJECT.success) {
				statementOBJECT.success();
			}
		};

		//this.components = function (componentName, callback) {
		this.components = function (nameSelectorHashObjectsARRAY) {
			if (!nameSelectorHashObjectsARRAY || !(nameSelectorHashObjectsARRAY instanceof Array)) {
				return log.critical('Erro ao utilizar o método require.components.\n');
			}

			var foundTypeErrors = [],
				current, structErrors,
				
				setProcedure = function (current) {
					var component = Library.components[current.id];
				
					require.extensions({
						dependencies : component.dependencies.extensions,
						success : component.CONSTRUCTOR ?
							function () {
								component.CONSTRUCTOR(current.selector, current.success);
							} :
							current.success,
						error : current.error
					});
				};
				
			while (nameSelectorHashObjectsARRAY.length) {
				current = nameSelectorHashObjectsARRAY.shift();
					
				structErrors = modMan.tools.getStructErrors({
					data : current,
					model : {
						id : String,
						selector : String
					}
				});
					
				if (structErrors) {
					foundTypeErrors.push(structErrors);
					continue;
				}

				if (!Library.components[current.id]) {
					foundTypeErrors.push('Referência(s) não encontrada(s) na biblioteca: <strong>' + current.id + '</strong>.');
					continue;
				}

				setProcedure(current);
			}

			if (foundTypeErrors.length) {
				return log.critical('Erros encontrados na chamada ao método require.components:\n' + foundTypeErrors.join('<br/>'));
			}
		};

		// backward compatibility
		$.include = function (pathsARRAY, callback, errorHandler) {
			if (!pathsARRAY || (!pathsARRAY.length && typeof(pathsARRAY) != 'string'))  {
				return log.critical('Erro encontrado na utilização do método $.include.');
			}

			if (typeof(pathsARRAY) == 'string') {
				pathsARRAY = [pathsARRAY];
			}

			var fileList = [];
			while (pathsARRAY.length) {
				var current = pathsARRAY.shift();
				if (!(/^https?:\/\//).test(current)) {
					current = globals.stage.coreBaseUrl + current;
				}
				fileList.push(current);
			}

			require.files({
				dependencies : fileList,
				success : callback,
				error : errorHandler
			});
		};

		this.jsonP = (function (configsOBJ) {

			var userSupportsWebStorage = (document.domain && window.localStorage && window.sessionStorage && window.JSON && window.JSON.parse && window.JSON.stringify),
				STR = {
					contingencyPrefix : "modMan_request_",
					sep : '-',
					dateSplitter : '.',
					hoursSplitter : 'h'
				},
				globalOptions = {
					struct : {
						url : String,
						wrapperName : /^[a-zA-Z][\w-_]+$/,
						cache : Boolean,
						localStorage : Boolean,
						sessionStorage : Boolean,
						callback : Function
					},
					values : {
						wrappername : "jsonp_modMan_globalWrapper",
						cache : true,
						localStorage : false,
						sessionStorage : false
					}
				},

				callbackHandler = (function () {
					var queuedCallbacks = {};

					return {
						set : function (INSTANCE) {
							var OPTIONS = INSTANCE.options,
								wrapperName = OPTIONS.wrapperName;
							if (!queuedCallbacks[wrapperName]) {
								queuedCallbacks[wrapperName] = {};
							}
							if (!queuedCallbacks[wrapperName][OPTIONS.feedStorageKey]) {
								queuedCallbacks[wrapperName][OPTIONS.feedStorageKey] = [];
							}

							queuedCallbacks[wrapperName][OPTIONS.feedStorageKey].push(OPTIONS.callback);

							require.files({
								dependencies : [{type : "text/javascript", src : OPTIONS.url}],
								voidData : true,
								success : function () {

									callbackHandler.trigger(OPTIONS);

								}
							});

						},
						trigger : function (OPTIONS) {
							var data = modMan.globals.data.feeds[OPTIONS.wrapperName],
								newCopy;

							//console.log('recebendo de VERDADE ' + OPTIONS.wrapperName + '\n' + data);
							log.checkpoint('Executando ' + queuedCallbacks[OPTIONS.wrapperName][OPTIONS.feedStorageKey].length + ' callback(s) para o jsonP ' + OPTIONS.url + '<br/>');

							while (queuedCallbacks[OPTIONS.wrapperName][OPTIONS.feedStorageKey].length) {
								var callback = queuedCallbacks[OPTIONS.wrapperName][OPTIONS.feedStorageKey].shift();
								
								if (typeof data == 'object') {
									newCopy = data instanceof Array ? [] : {};
									newCopy = $.extend(newCopy, data);
								} else {
									newCopy = data;
								}

								try {
									callback.call(OPTIONS, newCopy);
								}
								catch (e) {
									e.message = 'Erro em uma função de callback associada ao feed \n' + OPTIONS.url + '<br/><br/>' + e.message;
									log.critical(e);
								}
							}

							/*
							if (!OPTIONS.localStorage && !OPTIONS.sessionStorage) {
								delete modMan.globals.data.feeds[OPTIONS.wrapperName];
							}
							*/
						}
					};
				}());

			return function (userOptions) {
				if (!(this instanceof require.jsonP)) {
					return new require.jsonP(userOptions);
				}

				var INSTANCE = this,
					OPTIONS = INSTANCE.options = $.extend({}, globalOptions.values, userOptions || {}),
					structErrors = tools.getStructErrors({
						data : OPTIONS,
						model : globalOptions.struct
					}); // validation

				if (structErrors) {
					throw new TypeError('Erro encontrado ao validar o parâmetro transmitido ao método "jsonP()" » ' + structErrors);
				}

				var url = OPTIONS.url,
					wrapperName = OPTIONS.wrapperName,
					localStorage = OPTIONS.localStorage,
					sessionStorage = OPTIONS.sessionStorage,
					feedStorageKey = OPTIONS.feedStorageKey = modMan.tools.encodeURIComponent(url.replace(/\s*/, '')),

					dataOnMemmory = INSTANCE.data,
					userDesiresWebStorage = (sessionStorage || localStorage),
					feedAlreadyOnGlobalScope = typeof window[wrapperName] == 'object';

				// READING	>>
				if (OPTIONS.cache) {
					if (dataOnMemmory && userDesiresWebStorage) {
						log.checkpoint('<strong>Carregando dados da memória para o feed </strong><br/>' + OPTIONS.wrapperName);

						OPTIONS.callback.call(OPTIONS, dataOnMemmory);
						return;
					}
					else if (!dataOnMemmory && userDesiresWebStorage && userSupportsWebStorage) {

						if (localStorage && window.localStorage.getItem(feedStorageKey)) {
							log.checkpoint('<strong>Carregando dados do armazenamento local (localStorage) para o feed </strong><br/>' + OPTIONS.feedStorageKey);

							dataOnMemmory = JSON.parse(window.localStorage.getItem(feedStorageKey));

							OPTIONS.callback.call(OPTIONS, dataOnMemmory);
							return;
						}
						else if (sessionStorage && window.sessionStorage.getItem(feedStorageKey)) {
							log.checkpoint('<strong>Carregando dados armazenados para sessão (sessionStorage) para o feed </strong><br/>' + OPTIONS.feedStorageKey);

							dataOnMemmory = JSON.parse(window.sessionStorage.getItem(feedStorageKey));

							OPTIONS.callback.call(OPTIONS, dataOnMemmory);
							return;
						}
					}
				}

				if (feedAlreadyOnGlobalScope) {
					log.checkpoint('<strong>Retornando objeto armazenado em escopo global (' + window[wrapperName] + ') através de um include.</strong>. <br/>A requisição foi evitada.');
					dataOnMemmory = modMan.globals.data.feeds[wrapperName] = window[wrapperName];

					OPTIONS.callback.call(OPTIONS, dataOnMemmory);

					return;
				}
				// READING	<<

				// PREPARING
				if (window[wrapperName] && !(/function|object/).exec(typeof(window[wrapperName]))) {
					log.warning('Uma variável em escopo global possui o nome identificador indicador como "wrapperName". O modMan agregará o prefixo "' + STR.contingencyPrefix + '' + OPTIONS.wrapperName + '" à função responsável por disparar o callback.');
					wrapperName = STR.contingencyPrefix + wrapperName;
				}

				if (!OPTIONS.cache) {
					var currentDate = new Date();
					url += (OPTIONS.url.match(/\?/)) ? '&' : '?';
					url += 'cache=' + currentDate.getFullYear() + STR.dateSplitter + currentDate.getDate() + STR.dateSplitter + currentDate.getMonth() + STR.sep + currentDate.getHours() + STR.hoursSplitter + currentDate.getMinutes();
				}

				if (typeof window[wrapperName] != 'function') {
					window[wrapperName] = function (data) {
						// WRITING
						INSTANCE.data = data;
						if (userDesiresWebStorage && userSupportsWebStorage) {
							if (localStorage) {
								log.checkpoint('<strong>Armazenados localmente (localStorage) para o feed </strong><br/>' + feedStorageKey);
								window.localStorage.setItem(feedStorageKey, JSON.stringify(data));
							} else if (sessionStorage) {
								log.checkpoint('<strong>Armazenados para sessão (sessionStorage) para o feed </strong><br/>' + feedStorageKey);
								window.localStorage.setItem(feedStorageKey, JSON.stringify(data));
							}
						}
						modMan.globals.data.feeds[wrapperName] = data;
					};
				}

				setTimeout(function () {
					callbackHandler.set(INSTANCE);
				}, 0);
			};
		}());

		this.xml = function () {

		};

		this.post = function () {

		};
		// Public Methods <<

		return this;
	}.call(require));
	
	var tools = {
		log:{ CONSTRUCTOR:Log }, // deprecated
		getLogInstance:Log,
		namespaces:(function(){
			var persistentScopes = {},
				
				setExtender = function(name){
					return function(constructor){
						try {					
							getTools(name).log.checkpoint('Extendendo namespace.');
							
							constructor.call(persistentScopes[name], window.jQuery, globals, getTools(name));
							
						} catch (e) {
							e.message = '[Erro detectado ao extender o namespace '+name+'] '+e.message;
							getTools(name).log.critical(e);
						} finally {
							return persistentScopes[name];						
						}
					}
				},
				setDestroyer = function(name){
					return function(){
						delete persistentScopes[name]
						getTools(name).log.warning('Namespace encerrado');
					}
				},
				getTools = function(){
					var cache = {};
					return function(name){
						if(cache[name]) {
							return cache[name];
						}
						cache[name] = $.extend({}, modMan.tools, {log:new Log(name)});
						return cache[name];
					};				
				}();
			
			return {
				create:function(name, constructor){
					try {

						if(persistentScopes[name]) {
							throw new ReferenceError("Namespace Ocupado » Mude o atributo 'name' ou utilize os métodos e 'get' e 'extend' para reaproveitar o escopo.");
						} 					

						getTools(name).log.checkpoint('Novo namespace.');
						
						constructor.name = name;
						persistentScopes[name] = new constructor(window.jQuery, globals, getTools(name));
						persistentScopes[name].extend = setExtender(name);
						persistentScopes[name].destroy = setDestroyer(name);
						

						return persistentScopes[name];
					} catch (e) {
						e.message = '[Erro detectado ao criar o namespace '+name+'] '+e.message;

						getTools(name).log.critical(e);
						return {};
						//throw e;
					}
				},
				get:function(name){
					if(!name || !name.match) {
						throw new ReferenceError('O método "get" deve receber uma string que represente o identificador do namespace desejado. Valor atual: '+ name + "("+typeof name+")");
					}
					
					if(!persistentScopes[name]){
						throw new ReferenceError('Não foi possível localizar um namespace com identificador ""'+ name + '". Verifique se o valro está correto e se o código responsável por criá-lo foi incropordao ao template (provavelmente um arquivo "common.js").');
					}
					
					return persistentScopes[name];					
				},
				list:function(){
					return persistentScopes;
				},
				clear:function(){
					var namespaces = [];
					for(var name in persistentScopes){
						namespaces.push(name);
						delete persistentScopes[name];
					};
					log.checkpoint('Namespaces descartados da memória: ' + namespaces.join(' ,'));
				}
			};
		})(),
		metrics:new function Metrics(){

			var currentMetricsValues = { // default values for mandatory params
				terra_info_service : window.terra_info_service,
				terra_info_channel: window.terra_info_channel,
				terra_info_type: window.terra_info_type,
				terra_info_id: window.terra_info_id,
				terra_info_channeldetail: window.terra_info_channeldetail,
				
				terra_stats_regCLK: window.terra_stats_regCLK,
				terra_stats_idCrtfc: window.terra_stats_idCrtfc,
				terra_stats_uv_c: window.uv_c || window.terra_stats_uv_c
				},
				_self = this,
				trafficRegistered = false;
			
			var hit = function(){

			}
			
			var setValues = this.setValues = function(newMetricValues){
				currentMetricsValues = $.extend(currentMetricsValues, newMetricValues || {});
			}

			this.getCurrentValues = function(){
				return currentMetricsValues;
			}

			this.reg = this.regTraffic = function(newMetricValues){
				var notFoundValues = [];
					
				if(typeof newMetricValues == 'object') setValues(newMetricValues);				
				
				for(var current in currentMetricsValues){					
					if(typeof(currentMetricsValues[current]) != 'undefined') window[current] = currentMetricsValues[current];
					else {
						notFoundValues.push(current);
						delete currentMetricsValues[current];
					}
				}
				
				if(notFoundValues.length) log.critical('Não foi possível encontrar o valor para as seguintes variáveis de métricas: ' + notFoundValues.join(', ') + '. Registrando demais valores encontrados.');
				try {
					terra_stats_regTraffic();
					trafficRegistered = true;
					log.checkpoint('[Tráfego registrado] » terra_info_type: <strong>'+modMan.tools.metrics.getCurrentValues().terra_info_type+'</strong>');
				} catch(e) {
					var countryCode = (modMan.globals.page.country) ? globals.page.country.toLowerCase() : 'br',
						scriptUrl = (!document.domain || (/hlg\./i).exec(document.domain)) ? 'http://s1.trrsf.com.br/metrics/js/'+countryCode+'/content.js' : "/metrics/js/"+countryCode+"/content.js";
					
					log.critical(
						'Erro ao disparar a função que recarrega métricas: <strong>terra_stats_regTraffic</strong>. '+ 
						(!window.terra_stats_regTraffic ? 'Por favor, certifique-se que o template faz include do seguinte script: ' + scriptUrl : '» '+ e.message)
					);
				}
			}
			
			this.regEvent = function(eventId){
				if(!trafficRegistered) return log.critical('O registro do evento "'+eventId+'" foi disparado antes de contabilizar o tráfego da página (métiodo "regTraffic"").');
			
				try {
					terra_stats_regEvent({id:eventId});
					log.checkpoint('[Evento contabilizado] » <strong>'+eventId+'</strong>');
				} catch(e) {
					log.critical('Erro ao disparar a função que recarrega métricas: <strong>terra_stats_regTraffic</strong>. '+ (!window.terra_stats_regTraffic ? 'Por favor, certifique-se que o template faz include do seguinte script: ' + scriptUrl : '» '+ e.message));
				}
			}
		},
		reloaddisabledMetrics:function(metricsValuesOBJ){
			//var PROXY_URL = modMan.globals.page.baseURL + "_tpl/metrics.html?",
			var PROXY_URL = modMan.globals.stage.coreBaseUrl.replace(/s\d\.trrsf/, 'stf.terra') + "_tpl/metrics.html?",
				requiredMetricsVariables = ['terra_info_service', 'terra_info_channel', 'terra_info_channeldetail', 'terra_info_type', 'terra_info_id', 'terra_stats_idCrtfc', 'terra_stats_uv_c'],
				notFoundValues = [],
				$metricsLoaderFrame = $('#metricsLoaderFrame'),
				
				metricsValuesOBJ = $.extend({ // default
					terra_info_service: window.terra_info_service,
					terra_info_channel: window.terra_info_channel,
					terra_info_channeldetail: window.terra_info_channeldetail,
					terra_info_type: window.terra_info_type,
					terra_info_id: window.terra_info_id,
					terra_stats_idCrtfc: window.terra_stats_idCrtfc,
					terra_stats_uv_c: window.uv_c || window.terra_stats_uv_c
				}, metricsValuesOBJ || {});				
				
			for(var i = 0, current; current = requiredMetricsVariables[i]; i++){	
				if(typeof(metricsValuesOBJ[current]) == 'undefined') {
					notFoundValues.push(current);
					requiredMetricsVariables.splice(i,1);
					i--;
				}
			}
			
			if(notFoundValues.length) modMan.log.warning('Não foi possível encontrar o valor para as seguintes variáveis de métricas: ' + notFoundValues.join(', '));
			while(requiredMetricsVariables.length){
				var current = requiredMetricsVariables.shift();
				
				PROXY_URL += current + '=' + metricsValuesOBJ[current];
				if(requiredMetricsVariables.length) PROXY_URL += '&';
			}
			PROXY_URL += "&country="+modMan.globals.page.country;
			
			if($metricsLoaderFrame.length) $metricsLoaderFrame.attr('src', PROXY_URL);
			else $(document.body).append('<iframe id="metricsLoaderFrame" src="'+PROXY_URL+'" width="0" height="0" style="position:absolute;left:-100px;top:-100px;"></iframe>');
		},
		validateGalleryLink:function(evt,url){
			var stop = false;
			
			var specialGallery = modMan.tools.getSpecialGalleryTypeByUrl(url);
			if(!specialGallery) return true;
			
			if(specialGallery == "old") {
				modMan.voidPopup(url,"FeaturedPhoto",800,600,0);
				stop = true;
			} else if (specialGallery == "expandedPics") {
				modMan.voidPopup(url,'expandedPics',parseInt(window.screen.width - 10),parseInt(window.screen.height - 50),'no');
				stop = true;
			}
			
			if (stop){
				if (evt.preventDefault) evt.preventDefault();
				else evt.returnValue = false;
			}
			
		},
		pubMan: new function(){
						
			var _SELF = this,
				PROXY_TPL_PATH = globals.stage.coreBaseUrl + "_tpl/advertising.html",
				ADS_CONTAINER_SELECTOR = '.trr-ctn-advertising:last',
				CURRENT_CONTAINER_SELECTOR = ADS_CONTAINER_SELECTOR + ' > div:last',
				AD_PLACEHOLDER_SELECTOR_PREFIX = "tgm-",
				AD_CONTAINER_SELECTOR_PREFIX = "ctn-tgm-",
				
				autoDetectedTags = [],
				
				$interface = {
					adsContainer:null,
					placeholders:{},
					containers:{},
					framedAds:{}
				},
				
				info = {
					exibitions:{},
					rejected:{}
				};
				
			var createIframeHTML = function(currentTagId){
				var placeholdersHeigth = $interface.placeholders[currentTagId].height(),
					placeholdersWidth = $interface.placeholders[currentTagId].width(),
					HTML = '<iframe allowtransparency="true" height="'+placeholdersHeigth+'" width="'+placeholdersWidth+'" src="'+PROXY_TPL_PATH+'?tag='+(window.tgmKey || "br.test2010.home")+'&amp;area='+currentTagId+'&amp;site='+(window.site || "")+'&amp;zone='+(window.zone || "")+'" frameborder="0" scrolling="no" ><//iframe>';
				
				return HTML;
			}
			
			var placeAd = function(currentTagId){				
				var $container = $interface.containers[currentTagId],
					$placeholder = $interface.placeholders[currentTagId],
					scrollPosition = (navigator.userAgent.match(/ie/i)) ? (window.pageYOffset || document.documentElement.scrollTop) : 0,
					placeholderBorderLeftWidth = parseInt(($placeholder.css('borderLeftWidth')).replace(/[^\d]+/,'')) || 0,
					leftPosition = ($placeholder.offset().left + placeholderBorderLeftWidth) - $interface.adsContainer.offset().left ,
					topPosition = $placeholder.offset().top;
					
					if(scrollPosition > 0 && !globals.page.ready) topPosition += scrollPosition;
					
				$container.attr("style","position:absolute; display:block; top:"+topPosition+"px; left:"+leftPosition+'px;');
				
				if(!info.exibitions[currentTagId]) info.exibitions[currentTagId] = 0;
				info.exibitions[currentTagId]++;
				
				return undefined;
			}
			
			// constructor »
			
			// constructor «
			
			this.getInfo = function(){
				return info;
			}
			
			this.loaddisabled = function(currentTagId, extraInfo, tagId){
			
				tagId = tagId || currentTagId;
				
				if(tagId.match(/default/)) {
					tgm.ShowArea('default');
					return true;
				}
				
				if(!globals.page.ready && !$interface.adsContainer){
					$interface.adsContainer = $(ADS_CONTAINER_SELECTOR);
					if(!$interface.adsContainer.length){
						$interface.adsContainer = null;
						log.critical('Erro ao localizar container reponssável por receber as tags de publicidade. O elemento deve casar com o seguinte seletor: <strong>'+ ADS_CONTAINER_SELECTOR + '</strong>.');
						return false;
					}
				}
				
				if($interface.placeholders[currentTagId]) return _SELF.reloaddisabled([currentTagId]);
				
				$interface.placeholders[currentTagId] = $('#' + AD_PLACEHOLDER_SELECTOR_PREFIX + currentTagId);
				$interface.containers[currentTagId] = $(CURRENT_CONTAINER_SELECTOR).attr('id', AD_CONTAINER_SELECTOR_PREFIX + currentTagId);
				
				if(globals.page.ready && $interface.placeholders[currentTagId].length){
				
					if($interface.framedAds[currentTagId]) return _SELF.reloaddisabled([currentTagId]);
					else {
						var containerElement = document.createElement('div');
							containerElement.id = AD_CONTAINER_SELECTOR_PREFIX + currentTagId;
							containerElement.innerHTML = createIframeHTML(currentTagId);
						
						if(!$interface.adsContainer.length) {
							$('#trr-ctn-general').append('<div class="'+ADS_CONTAINER_SELECTOR.replace(/^\./,'')+'"></div>');
							$interface.adsContainer = $(ADS_CONTAINER_SELECTOR);
						}
						
						$interface.adsContainer.append(containerElement);
						$interface.containers[currentTagId] = $(containerElement);
						placeAd(currentTagId);
						
						if (!info.exibitions[currentTagId]) {
							info.exibitions[currentTagId] = 0;
						}
						info.exibitions[currentTagId]++;
						
						return;
					}
				}
				
				if(!$interface.placeholders[currentTagId].length || !$interface.containers[currentTagId].length) {
				
					var errrorMsg = ''+
					'Erro ao localizar container de origem ou destino para publicidade.\n'+
					'Seletor de origem (placeholder): <strong> '+ '#'+AD_PLACEHOLDER_SELECTOR_PREFIX + currentTagId + '</strong> (elemento '+($interface.placeholders[currentTagId].length ? 'encontrado' : '<strong style="color:red;">não encontrado</strong>')+')\n'+
					'Seletor de destino (tag container): '+CURRENT_CONTAINER_SELECTOR+' (elemento '+($interface.containers[currentTagId].length ? 'encontrado' : '<strong style="color:red;">não encontrado</strong>')+')';

				
					if(!info.rejected[currentTagId]) info.rejected[currentTagId] = errrorMsg;
					
					//log.warning(errrorMsg);
					return false;
				}
				
				try {
					if (extraInfo) {
						tgm.ShowArea(tagId, extraInfo);
					} else {
						tgm.ShowArea(tagId, 'site='+(window.site || ""), 'zone='+(window.zone || ""));
					}
					
					autoDetectedTags.push(currentTagId);
					placeAd(currentTagId);
				} catch (e) {
					e.message = '[Erro na execução do método "tgm.ShowArea()" para tag ' + tagId + ']' + e.message;
					log.critica(e);
				}				
				
				return true;
			}
			
			this.reloaddisabled = function(tagIdsARRAY){
				tagIdsARRAY = tagIdsARRAY || autoDetectedTags;
				
				
				for(var i = 0, currentTagId; currentTagId = tagIdsARRAY[i]; i++){
					
					if(!$interface.placeholders[currentTagId]) {
						$interface.placeholders[currentTagId] = $('#'+ AD_PLACEHOLDER_SELECTOR_PREFIX + currentTagId);
						$interface.containers[currentTagId] = $('#'+ AD_CONTAINER_SELECTOR_PREFIX + currentTagId);
									
						if(!$interface.placeholders[currentTagId].length || !$interface.containers[currentTagId].length) {										
							if(!$interface.placeholders[currentTagId].length) delete $interface.placeholders[currentTagId];
							if(!$interface.containers[currentTagId].length) delete $interface.containers[currentTagId];
							
							if($interface.placeholders[currentTagId] && !$interface.containers[currentTagId]) {
								//log.warning('tag inválida: '+ currentTagId);
								delete $interface.placeholders[currentTagId];
								_SELF.loaddisabled(currentTagId);
							} else {									
								var errrorMsg = 'Erro ao localizar placeholder para publicidade <strong>'+currentTagId+'</strong>.';								
								if(!info.rejected[currentTagId]) info.rejected[currentTagId] = errrorMsg;									
							}
							
							continue;
						}
					}
					
				
					if ($interface.framedAds[currentTagId]) $interface.framedAds[currentTagId].get(0).src += '';
					else {								
						$interface.containers[currentTagId].html(createIframeHTML(currentTagId));
						$interface.framedAds[currentTagId] = $interface.containers[currentTagId].find('iframe:first');
					}

					if(!info.exibitions[currentTagId]) info.exibitions[currentTagId] = 0;
					info.exibitions[currentTagId]++;
					
				}
				
				return undefined;
			}
			
			this.placeAds = function(tagIdsARRAY){
			
				tagIdsARRAY = tagIdsARRAY || autoDetectedTags;
				if(!$interface.adsContainer) $interface.adsContainer = $(ADS_CONTAINER_SELECTOR);
				
				for(var i = 0, currentTagId; currentTagId = tagIdsARRAY[i]; i++){
					var $placeholder = $('#'+AD_PLACEHOLDER_SELECTOR_PREFIX + currentTagId),
						$container = $('#'+AD_CONTAINER_SELECTOR_PREFIX + currentTagId);
						
					if(!$interface.placeholders[currentTagId] && !$placeholder.length) {
						var errrorMsg = ''+
						'Erro ao localizar container de origem ou destino para publicidade.\n'+
						'Seletor de origem (placeholder): <strong> '+ '#'+AD_PLACEHOLDER_SELECTOR_PREFIX + currentTagId + '</strong> (elemento '+($placeholder.length ? 'encontrado' : '<strong style="color:red;">não encontrado</strong>')+')\n'+
						'Seletor de destino (tag container): '+CURRENT_CONTAINER_SELECTOR+' (elemento '+($container.length ? 'encontrado' : '<strong style="color:red;">não encontrado</strong>')+')';
					
						if(!info.rejected[currentTagId]) info.rejected[currentTagId] = errrorMsg;
					
						continue;
					}
					
					if(!$interface.placeholders[currentTagId]) $interface.placeholders[currentTagId] = $placeholder;
					if(!$interface.containers[currentTagId]) $interface.containers[currentTagId] = $container;
					
					placeAd(currentTagId);	

				}				
				
				return undefined;
			
			}
			
			this.destroyAds = function(tagIdsARRAY){
				tagIdsARRAY = tagIdsARRAY || autoDetectedTags;
				
				for(var i = 0, currentTagId; currentTagId = tagIdsARRAY[i]; i++){
					if($interface.containers[currentTagId]){
						log.checkpoint('Removendo publicidade carregada via pubMan: <strong>' + currentTagId + '</strong>.');
						$interface.containers[currentTagId].remove();
						$interface.containers[currentTagId] = undefined;
					} else {
						var $currentAd = $('#ctn-tgm-'+currentTagId);
						if($currentAd.length) {
							log.checkpoint('Removendo publicidade que não foi instanciada pelo modMan: <strong>' + currentTagId + '</strong>.');
							$currentAd.remove();
						}
					}
					
				}
			}
		},
		getStructErrors:(function(){
			var ERROR_referenceType = 'TypeError encontrado na estrutura de um ou mais parâmetros transmitidos ao método "tools.getStructErrors"',
				ERROR_referenceStruct = 'TypeError encontrado na estrutura do objeto. Verifique se ele possui variáveis tipo Object associadas às propriedades "data" e "model" (a propriedade "help" é opcional).',
				ERROR_helpReferenceType = 'TypeError encontrado no tipo da propriedade "help" (transmitidas ao método "tools.getStructErrors"). Deve ser um objecto cujas propriedades representam dicas adicionais para validação dos parâmetros configurados em "model". Somente a mensagem padrão será apresentada em caso de erro.',
				
				NO_HELP_OBJECT = {},
				STR_array = 'array',
				STR_Array = 'Array',
				STR_Object = 'Object',
				STR_object = 'object',
				STR_undefined = 'undefined',
				STR_string = 'string',
				STR_String = 'String',
				STR_number = 'number',
				STR_boolean = 'boolean',
				STR_ERROR_MESSAGES_SPLITTER = '<br/><br/>\n\n',
				EXP_VALID_STRING_MODELS = /^string|boolean|object|array|number$/,
				EXP_REGEXP_MATCHING_TYPES = /string|number/,
				EXP_CAPITALIZE_SPLITTER = /^([a-zA-Z])([\w]*)/,
				EXP_NAME_SPLITTER = /function\s+([^\s\(]*)/,
				TPL_VALUE_MARK = '${value}',
				TPL_TYPE_MARK = '${type}',
				CURRENT_VALUE_MSG_TPL = " Valor atual: <strong>"+TPL_VALUE_MARK+" ["+TPL_TYPE_MARK+"]</strong>.",
				
				capitalizeString = function(str){
					var splittedString = str.match(EXP_CAPITALIZE_SPLITTER);
					return (splittedString[1].toUpperCase() + splittedString[2]);		
				},
				
				extractCapitalizedConstructorName = function(value) {
					if (value.toString) {
						value = value.toString();
					}
					var splittedString = EXP_NAME_SPLITTER.exec(value);
					return splittedString[1];
				},
				
				getTypeName = function(value){
					if(value === undefined) {
						return STR_undefined;
					} else if(value == Array || value == STR_array || value instanceof Array){
						return STR_Array;
					} else if(value == Object){
						return STR_Object;
					} else if (typeof value == STR_string) {
						return STR_String;
					} else if (value instanceof Function) {
						return extractCapitalizedConstructorName(value);
					} else {
						return capitalizeString(typeof value);
					}
				},
				
				printCurrentValueMsg = function(value){
					var type = getTypeName(value);
					return CURRENT_VALUE_MSG_TPL.replace(TPL_VALUE_MARK, value).replace(TPL_TYPE_MARK, type);
				};
			
			return function(ref){
			
				if(typeof(ref) != STR_object || ref.length) { return ERROR_referenceType; }
				
				if(typeof(ref.data) != STR_object || typeof(ref.model) != STR_object)  { return ERROR_referenceStruct; }
				
				if(typeof(ref.help) != STR_object || ref.length) {
					if(ref.help) {
						log.warning(ERROR_helpReferenceType);
					}
					ref.help = NO_HELP_OBJECT;
				}
				
				var errorMsg = "";
				for(var key in ref.model){
					var value = ref.data[key],
						model = ref.model[key],
						
						customError = '';
						
					if(errorMsg) {
						errorMsg += STR_ERROR_MESSAGES_SPLITTER;
					}
					
					// model errors
					if(model === undefined) {
						errorMsg += "O modelo exigido para propriedade "+key+" não foi declarado corretamente. Seu valor atual é 'undefined'.";
						continue;
					}
					
					if(typeof model == STR_string && !EXP_VALID_STRING_MODELS.test(model)) {
						errorMsg += "O modelo exigido para propriedade "+key+" precisa casar com a expressão "+EXP_VALID_STRING_MODELS+" ou ser declarado como uma referênica ao construtor correspondente.";
						continue;
					}
					
					// asserts
					if(typeof model == STR_string) {
						if(model == STR_array) {
							if (value instanceof Array) {
								continue;
							}
						} if(model == STR_object) {
							if (!(value instanceof Array)) {
								continue;
							}
						} else if(model == typeof value) {
							continue;
						}
					} else if (model instanceof Function) {
						 
						if(model === Array){				
							if(value instanceof Array) { // array também pode ser instância de Object
								continue;
							}
						} else if (model === Object) {
							if(!(value instanceof Array)) {
								continue;
							}
						} else if (model === Number) { // numbers are not instances of Number
							if(typeof value == STR_number) {
								continue;
							}
						} else if (model === String) { // strings are not instances of String
							if(typeof value == STR_string) {
								continue;
							}
						} else if (model === Boolean) { // booleans are not instances of Boolean
							if(typeof value == STR_boolean) {
								continue;
							}
						} else if (value instanceof model) {
							continue;
						}
						
					} else if(model instanceof RegExp) {
						if(EXP_REGEXP_MATCHING_TYPES.test(typeof(value)) && model.test(value)) {
							continue;
						} else {
							customError += "O valor de <strong>" + key + "</strong> deve ser do tipo <em>String</em> ou <em>Number</em> e casar com a seguinte expressão: <strong>"+ref.model[key]+"</strong>. ";
						}
					}
					
					if(customError) {
						errorMsg += customError;
					} else {
						errorMsg += "O valor da propriedade <strong>"+key+"</strong> deve ser do tipo <em>"+getTypeName(model)+"</em>.";
					}
					
					// append current value and hint
					errorMsg += printCurrentValueMsg(value);
					if(ref.help[key]) {
						errorMsg += '<br/><strong>DICA: </strong>'+ref.help[key];
					}
				}
				
				if(errorMsg){
					//throw new Error('[TypeError] - '+errorMsg);
					return errorMsg;
				}
				
				return null;
			};
		})(),
		Components:function(callback){
			
			var loaddisableded = {}; // Stores references to already loaddisableded files
			
			var matchLibrary = function(ext, url){
				if (!loaddisableded[ext]) return false;
				else {
					for(var i = 0; i < loaddisableded[ext].length; i++){
						if(loaddisableded[ext][i] == url) return true;
					}					
				}
				return false;
			}
			
			var set =function(componentsOBJ, callback){
				if(typeof(componentsOBJ) != 'object' || (!componentsOBJ['js'] && !componentsOBJ['css'])) {
					if(callback) {
						callback();
					}
					return false;
				}
				var componentsARRAY = [];
				if(componentsOBJ['css']) componentsARRAY = componentsARRAY.concat(componentsOBJ['css']);				
				if(componentsOBJ['js']) componentsARRAY = componentsARRAY.concat(componentsOBJ['js']);
			
				if(!componentsARRAY.length) callback();
				else {
					log.checkpoint('checking components: \n' + componentsARRAY.join('\n'));
					$.include(componentsARRAY, callback);
				}
			}
			
			var confirm = function(ext, url){
				if(!loaddisableded[ext]) loaddisableded[ext] = [];
				loaddisableded[ext].push(url);
			}
			
			return {
				matchLibrary:matchLibrary,
				set:set,
				confirm:confirm
			}
		}(),
		getShortUrl: function (service, longUrl, options, callback) {
		
			var DEFAULT_SERVICE = 'bitLy',
				shortUrl = null;
			
			if (service == 'default') {
				service = DEFAULT_SERVICE;
			}
			
			switch (service) {
				case 'bitLy' :
				
					// default config
					var config = {
						ws: {
							url: 'http://api.bit.ly/shorten'
						},
						params: {
							version: '2.0.1',
							callback: 'bitLyCallback',
							login: 'terra',
							apiKey: 'R_fd7c471fd02e6284b9b2150d4602ee5f',
							longUrl: ((document.domain) ? longUrl : modMan.globals.page.portalURL)
						}
					};
					
					// merge config
					if (typeof options == 'object') {
						config = $.extend(config, options);
					}
					
					// request
					modMan.tools.jsonP({
						cache: true,
						wrapperName: config.params.callback,
						url: function () {
							var url = config.ws.url;
							for (var paramName in config.params) { 
								url += (url.indexOf('?') == -1) ? '?' : '&amp;';
								url += paramName + '=' + config.params[paramName];
							}
							return url;
						}(),
						callback: function (data) {
							if (window[config.params.callback]) {
								window[config.params.callback] = undefined;
							}
							if (data.errorCode == 403) {
								modMan.log.critical('modMan.tools.getShortUrl - Error on jsonP handler - Response: ' + data.errorMessage);
								callback.call(this, longUrl);
								return false;
							}
							if (data.results) {
								for (var index in data.results) {
									if (shortUrl) {
										alert(shortUrl);
										break;
									}
									shortUrl = data.results[index].shortUrl ? modMan.tools.encodeURIComponent(data.results[index].shortUrl) : longUrl;
									callback.call(this, shortUrl);
								};
							}
						}
					});
					
				break;
			
			}
			
		},
		parseTPL:function (variablesOBJ, templateSTR){
			if(!variablesOBJ || !templateSTR) return templateSTR;
			
			var tagPrefix = "({|##)",
				tagSufix = "(}|##)",
				placeholderEXP = new RegExp('{\s?foreach([^{]|{[^\/])+{\/foreach}'+'|'+tagPrefix + '[\\w\\d._[\\]\'\"-]+' + tagSufix, 'gi'),
				tags = templateSTR.match(placeholderEXP);
			
			if(!tags) return templateSTR;
			
			while(tags.length){
				var currentTag = tags.shift(),
					levelsSTR = (currentTag.match(/foreach/gi)) ? currentTag.match(/from=[^}]+/)[0].replace(/from=/, '') : currentTag.replace(/\[['"]?/,'.').replace(/['"]?\]/,''),
					tagMarkersEXP = new RegExp('^' + tagPrefix + '|' + tagSufix + '$', 'gi'),
					levels = levelsSTR.replace(tagMarkersEXP,'').split('.'),
					dataOBJ = variablesOBJ;
					
				while(levels.length){
					var currentLevel = levels.shift(),
						currentData = dataOBJ[currentLevel];

					if(currentData === null) currentData = '';
					if(typeof(currentData) != 'undefined' && !levels.length) {
						if(currentTag.match(/foreach/gi) && typeof(currentData) == 'object') {
							var loopItem = currentTag.replace(/^{foreach[^}]+}|{\/foreach}$/gi,''),
								tmpData = '';

							for(var key in currentData){
								tmpData += loopItem.replace(/{value/gi,'{'+currentLevel+'["'+key+'"]').replace(/{key}/,key);
							}
							tags=tags.concat(tmpData.match(/{[^}]+}/g));
							currentData = tmpData;
						} 
						templateSTR = templateSTR.replace(currentTag, currentData);
					}
					else if(currentData) dataOBJ = currentData;
					else break;
				}
			}			

			return templateSTR;
		},
		base64:new function(){				
			var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

			this.encode = function(input) {
				if(input){
					var output = "";
					var chr1, chr2, chr3;
					var enc1, enc2, enc3, enc4;
					var i = 0;

					do {
						chr1 = input.charCodeAt(i++);
						chr2 = input.charCodeAt(i++);
						chr3 = input.charCodeAt(i++);

						enc1 = chr1 >> 2;
						enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
						enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
						enc4 = chr3 & 63;

						if (isNaN(chr2)) {
							enc3 = enc4 = 64;
						} else if (isNaN(chr3)) {
							enc4 = 64;
						}

						output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + 
						keyStr.charAt(enc3) + keyStr.charAt(enc4);
					} while (i < input.length);	
					
					return output;
				}
			}

			this.decode = function(input) {
			   var output = "";
			   var chr1, chr2, chr3;
			   var enc1, enc2, enc3, enc4;
			   var i = 0;

			   // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
			   input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

			   do {
				  enc1 = keyStr.indexOf(input.charAt(i++));
				  enc2 = keyStr.indexOf(input.charAt(i++));
				  enc3 = keyStr.indexOf(input.charAt(i++));
				  enc4 = keyStr.indexOf(input.charAt(i++));

				  chr1 = (enc1 << 2) | (enc2 >> 4);
				  chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				  chr3 = ((enc3 & 3) << 6) | enc4;

				  output = output + String.fromCharCode(chr1);

				  if (enc3 != 64) {
					 output = output + String.fromCharCode(chr2);
				  }
				  if (enc4 != 64) {
					 output = output + String.fromCharCode(chr3);
				  }
			   } while (i < input.length);

			   return output;
			}
		},
		adjustTime:function(dateOBJ){
			var time = dateOBJ.toLocaleTimeString();
			
			//var hours = time.split(':')[0];
			var hours = dateOBJ.getHours();
			//var minutes = time.split(':')[1];
			var minutes = dateOBJ.getMinutes();
			
			var usa = (modMan.globals.page.country == 'US') ? true : false;
			var sufix = false;
			var sep = "h";
			
			if(modMan.globals.page.country != 'BR') sep = ":";
			if (usa){
				if(hours>12) {
					hours = hours - 12;
					sufix = "pm";
				} else {
					sufix = "am";
				}
			}
			if(hours<10) hours = '0' + hours.toString().match(/\d$/);
			if(minutes<10) minutes = '0'+minutes.toString().match(/\d$/);
			
			var parsedTime = hours + sep + minutes;
			if(sufix) parsedTime += sufix;
			
			return parsedTime;
		},
		/*
		 * PARAMETERS
		 * - url (URL of the popup)
		 * - name (Name of the popup)
		 * - w (Width)
		 * - h (Height)
		 * - scrolling (no = 0 / yes = 1)
		 */
	voidPopup:function(url,name,w,h,scrolling) {
			scrolling = scrolling || 'auto';
			var leftPosition = (screen.width) ? (screen.width-w)/2 : 0,
				topPosition = (screen.height) ? (screen.height-h)/2 : 0,
				settings = "toolbar=no,location=no,directories=no,status=no,menubar=no,height="+h+",width="+w+",top="+topPosition+",left="+leftPosition+",scrollbars="+scrolling+",resizable=0";
			
			return void(url,name,settings);
		},
		isNewGalleryUrl:function(url){ // deprecated
			if(globals.page.country == 'BR' && (/\/galeria(s)?\//).test(url)) return false;		
			return true;
		},
		getSpecialGalleryTypeByUrl:function(){
			var CONS;
			
			return function(url){
				if(!url.match) throw new Error('O método "getGalleryTypeByUrl" deve receber uma url no formato String');
				
				if(!CONS) {
					CONS = {
						oldGalleryMatchEXP:/\/galeria(s)?\//i,
						oldGalleryId:'old',
						expandedPicsMatchEXP:/TGAP/i,
						expandedPicsId:'expandedPics'
					};
				}
				
				if(globals.page.country == 'BR' && CONS.oldGalleryMatchEXP.test(url)) {
					if (!url.match("invertia.terra.com.br")) return CONS.oldGalleryId;
				}
			
				if(CONS.expandedPicsMatchEXP.test(url)) { return CONS.expandedPicsId;}
				
				return null;
			}
		}(),
		cookie:{
			create:function(name,value,hours, path) {
				if (hours) {
					var date = new Date();
					date.setTime(date.getTime()+(hours*60*60*1000));
					var expires = "; expires="+date.toGMTString();
				}
				else var expires = "";
				document.cookie = name+"="+value+expires+"; path="+(path||'/');
				
				return undefined;
			},
			read:function(name) {
				var nameEQ = name + "=";
				var ca = document.cookie.split(';');
				for(var i=0, c; c = ca[i];i++) {
					while (c.charAt(0)==' ') c = c.substring(1,c.length);
					if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
				}
				return null;
			},
			erase:function(name, path) {
				modMan.tools.cookie.create(name,"",-1, path);
				//return undefined;
			}
		},
		getQueryStringVars:(function(locationSTR){
			var CONSTANTS;
			
			return function(locationSTR){
				if (arguments.length && locationSTR !== document.location && typeof(locationSTR) != "string") {
					throw new Error("O método 'getQueryStringVars()' deve receber uma string que represente a url. Valor atual: "+ locationSTR + "(" + typeof(locationSTR) + "). Caso queria extrair variáveis da página em execução, omita esse parâmetro. ");
				}
				
				if (!arguments.length) {
					locationSTR = location.href;
				}
				
				if(!CONSTANTS) {
					CONSTANTS = {
						queryStringEXP:/\?([^#]+)/,
						paramSplitter:"&",
						paramSplitterExtended:"&amp;",
						valueSplitter:'=',
						defaultValue:''
					};
				};
				
				var queryString = CONSTANTS.queryStringEXP.exec(locationSTR);
				if(!queryString || !queryString[1]) { return null; };

				var variables = queryString[1].replace(CONSTANTS.paramSplitterExtended, CONSTANTS.paramSplitter).split(CONSTANTS.paramSplitter),
					valuesOBJ = {};
				
				while(variables.length){
					var values = variables.shift().split(CONSTANTS.valueSplitter);
					valuesOBJ[values[0]] = (values[1]) ? decodeURIComponent(values[1]) : CONSTANTS.defaultValue;
				};

				return valuesOBJ;
			};
		})(),
		mountQueryStringUrl:(function (){
			var CONSTANTS;
			
			return function(baseUrl, params, extendedEntities){
				if (typeof(baseUrl) != "string") {
					throw new Error("O método 'mountQueryStringUrl()' deve receber, como primeiro parâmetro, uma string que represente a url base. Valor atual: "+ params + "(" + typeof(params) + ")");
				}
				if (typeof(params) != "object") {
					throw new Error("O método 'mountQueryStringUrl()' deve receber,  como segundo parâmetro,  um objeto que represente os parâmetros desejados. Valor atual: "+ params + "(" + typeof(params) + ")");
				}
				
				if(!CONSTANTS){
					CONSTANTS = {
						matchGetUrl:/[^\?]*[^&]/g,
						querySplitter:"?",
						paramSplitter:(extendedEntities) ? "&amp;" : "&"
					};
				}
				
				var preDefinedParams = tools.getQueryStringVars(baseUrl);
				if(preDefinedParams) {
					params = $.extend(preDefinedParams, params);
				}
				
				var query = '';
				for (var paramName in params) {
					if (!query) {
						query += CONSTANTS.querySplitter;
					} else {
						query += CONSTANTS.paramSplitter;
					}
					
					query += paramName + '=' + encodeURIComponent(params[paramName]);
				};		
				
				return baseUrl + query;
			};
		})(),
		stripTags: function(str, removeTagContent) {
			removeTagContent = removeTagContent || false;
			if (removeTagContent == true) return str.replace(/<[^>]+>[^<]*<\/[^>]+>/gi, '');
			else return str.replace(/<\/?[^>]+>/gi, '');
		},
		encodeURIComponent: function(str) {
			return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
		},
		LazyLoader:function LazyLoader(){
			// toSingleton
			 if(!modMan.tools.LazyLoader.prototype._instance) {
				 if(this instanceof modMan.tools.LazyLoader) modMan.tools.LazyLoader.prototype._instance = this;
				 else return modMan.tools.LazyLoader.prototype._instance = new modMan.tools.LazyLoader();
			 } else return modMan.tools.LazyLoader.prototype._instance;
			 modMan.tools.LazyLoader.constructor = null;
			
			
			// LazyLoader constructor >> 
				var log = new Log('LazyLoader'),
					$window = $(window),
					activeStack = [],
					vpH = function () {
						var height = window.innerHeight; // Safari, Opera
						var mode = document.compatMode;

						if ( (mode || !$.support.boxModel) ) { // IE, Gecko
							height = (mode == 'CSS1Compat') ?
							document.documentElement.clientHeight : // Standards
							document.body.clientHeight; // Quirks
						}

						return height;
					}(),

					isVisible = function($element, callback){
						var scrolltop = (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop),
							top = $element.offset().top,
							height = $element.height();

						if (scrolltop > (top + height) || scrolltop + vpH < top) {
							return false;
						} else if (scrolltop < (top + height)) {
							return true;
						}
						return false;
					},
					
					checkStack = function(){
						if(activeStack.length){
							for(var i = 0, current; current = activeStack[i]; i++){
								if(isVisible(current.element)) {
									log.checkpoint('Disparando callback para o seletor <strong>'+ current.element.selector + '</strong>.');
									current.callback(current.element, true);
									
									activeStack.splice(i,1);
									i--;
								}
							}
						}
						
						if(!activeStack.length) $window.unbind('scroll');
					};

				$(document).ready(function(){
					checkStack();
					
					$window.bind('scroll', function(){
						checkStack();			
					});
				});
				
			// LazyLoader constructor <<
			
			this.set = function(selector, customCallback){
				var $element = $(selector);
				if($element.length){
					activeStack.push({
						element:$element,
						callback:customCallback
					});
				}
				checkStack();
			};

		},
		Timer:(function () {
			var SELF = this,
				CONSTANTS;

			return function Timer(seconds) {
				if (this === SELF) {
					throw new Error('tools.Timer() é uma classe e, portanto, deve ser instanciada atravês do operador "new".');
				}

				if (!CONSTANTS) {
					CONSTANTS = {
						STR_function: 'function',
						STR_number: 'number',
						MSG: {
							SET_JOB_PARAMS_TYPE_ERROR: '[tools.Timer] » O método são recebe funções como primeiro e único parâmetro.',
							SET_INTERVAL_PARAMS_TYPE_ERROR: '[tools.Timer] » O método setInterval deve receber uma variável tipo Number que represente o tempo desejado, em segundos.',
							SET_SYNC_INTERVAL_PARAMS_TYPE_ERROR: '[tools.Timer] » O método setSyncInterval deve receber uma variável tipo Number que represente o tempo desejado, em minutos.',
							PLAY_MISSING_INSTANCE_ATTRIBUTES: '[tools.Timer] » é preciso definir intervalo e funções para este objeto.',
							STOP_TIMER_ALREADY_STOPPED: '[tools.Timer] » Tentativa de interrupção para uma instância da classe "tools.Timer()" que está inativa.'
						}
					};
				}
				
				var INSTANCE = this,
					interval = (typeof(seconds) == CONSTANTS.STR_number) ? seconds * 1000 : 0,
					jobs = [],
					details = {
						updates: 0,
						startDate: null,
						lastUpdate: null
					},
					activeTimer, postponedSyncInterval;


				var triggerJobs = function () {
					details.updates++;
					details.lastUpdate = new Date();

					for (var i = 0, currentJob; i < jobs.length; i++) {
						try {
							currentJob = jobs[i];
							currentJob.call(INSTANCE, details);
						} catch (error) {
							modMan.log.critical('Erro detectado ao executar o job ' + i + ' associado a uma instância da classe "Timer" » ' + error.message);
						}
					}

				};
						
				this.interval = interval;

				this.setJob = function (jobFUNCTION) {
					if (typeof(jobFUNCTION) != CONSTANTS.STR_function) {
						throw new Error(CONSTANTS.MSG.SET_JOB_PARAMS_TYPE_ERROR);
					}

					jobs.push(jobFUNCTION);

					return this;
				};

				this.unsetJobs = function () {
					jobs = [];
					return this;
				};

				this.setInterval = function (seconds) {
					if (typeof(seconds) != CONSTANTS.STR_number) {
						throw new Error(CONSTANTS.MSG.SET_INTERVAL_PARAMS_TYPE_ERROR);
					}

					if (INSTANCE.interval) {
						modMan.log.warning('Alterando o intervalo de atualização definido para uma instância da classe "tools.Timer()". De ' + ((postponedSyncInterval || INSTANCE.interval) / 1000) + ' para ' + seconds + ' segundos.');
					}
					
					if (postponedSyncInterval) {
						postponedSyncInterval = null;
					}

					INSTANCE.interval = seconds * 1000;

					return this;
				};

				this.changeInterval = this.setInterval; // deprecated

				this.setSyncInterval = function (minutes) {
					if (typeof(minutes) != 'number' && minutes > 0) {
						throw new Error(CONSTANTS.MSG.SET_SYNC_INTERVAL_PARAMS_TYPE_ERROR);
					}

					if (INSTANCE.interval) {
						INSTANCE.stop();
					}

					INSTANCE.interval = postponedSyncInterval = minutes * 60000;

					return this;
				};

				this.play = function (voidFirstInterval) {
					if (!INSTANCE.interval  || !jobs.length) {
						throw new Error(CONSTANTS.MSG.PLAY_MISSING_INSTANCE_ATTRIBUTES);
					}

					if (!details.startDate) {
						details.startDate = new Date();
					}
					
					if (activeTimer) {
						INSTANCE.stop();
					}

					if (postponedSyncInterval) {
						postponedSyncInterval = INSTANCE.interval;
						INSTANCE.interval = (61 - new Date().getSeconds()) * 1000 || 1;
							
						activeTimer = window.setInterval(function () {
							
							triggerJobs();

							if (postponedSyncInterval) {
								INSTANCE.interval = postponedSyncInterval;
								postponedSyncInterval = null;

								activeTimer = window.clearInterval(activeTimer);
								activeTimer = window.setInterval(triggerJobs, INSTANCE.interval);
							}
						}, INSTANCE.interval);
					}
					else {
						activeTimer = window.setInterval(triggerJobs, INSTANCE.interval);
					}

					if (voidFirstInterval) {
						triggerJobs();
					}
					
					return this;
				};

				this.start =  this.play; // deprecated

				this.forceUpdate = function () {
					INSTANCE.play(true);

					return this;
				};

				this.stop = function () {
					if (activeTimer) {
						activeTimer = window.clearInterval(activeTimer);
						modMan.log.warning('Timer interrompido (instância da classe "tools.Timer()" configurada para disparar funções a cada ' + ((postponedSyncInterval || INSTANCE.interval) / 1000) + ' segundos.');
						details.startDate = null;
						postponedSyncInterval = null;
					} else {
						modMan.log.warning(CONSTANTS.MSG.STOP_TIMER_ALREADY_STOPPED);
					}

					return this;
				};

				this.pause = function () {
					postponedSyncInterval = (INSTANCE.inteval * 1000) - (new Date() - details.lastUpdate);
					INSTANCE.stop();

					return this;
				};

				this.getRemainingSeconds = function () {
					return (activeTimer) ? (new Date() - details.startDate) / 1000 : null;
				};

				this.getTotalJobs = function () {
					return jobs.length;
				};

				this.getDetails = function () {
					return details;
				};
			};

		}()),
		pageReloaddisableder:new function(){
			var timer = null,
				cookieName = 'trrScrollPosition',
				previousReloaddisabledInterval = 0;
			
			var reloaddisabledAction = function(){
				var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
				
				tools.cookie.create(cookieName, scrollPosition);
				document.location += '';				
			}
			
			this.on = function(secondsNumber){
				secondsNumber = secondsNumber || previousReloaddisabledInterval;
				
				if(!secondsNumber) return false;
				
				if( (/voidRefresh/i).test(document.location)) {
					log.checkpoint('Auto-refresh configurado para acontecer em ' + secondsNumber + ' segundos, mas IMPEDIDO pelo parâmetro "voidRefresh" contido na url.');
					return false;
				}				
				
				previousReloaddisabledInterval = secondsNumber;				
				
				var currentCookie = tools.cookie.read(cookieName);	
				
				if(currentCookie && parseInt(currentCookie)) {
					if(!globals.page.ready){
						$(document).ready(function(){
							window.scrollTo(0, currentCookie);
						});
					}
					
					tools.cookie.erase(cookieName)
				}
				
				log.checkpoint('Auto-refresh configurado para acontecer em ' + secondsNumber + ' segundos.');
				timer = setInterval(function(){reloaddisabledAction()}, secondsNumber * 1000);
			}			
			
			this.off = function(){
				log.checkpoint('Auto-refresh interrmpido.');
				if(timer) clearInterval(timer), timer = null;
			}
		}
	}
	
	// forgiving old tools structure references
	tools.jsonP = require.jsonP;
	
	// forgiving old tools structure references
	tools.Cron = tools.Timer;
	
	// forgiving old popup method references
	window.abre = function (url,janela,larg,alt,scroll){
		if (!scroll) { scroll='auto' }
		void(url,janela,"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars="+scroll+",resizable=no,copyhistory=no,width="+larg+",height="+alt);
	}
	
	window.validateGalleryLink = tools.validateGalleryLink;
	
	var events = {
		beforeStart:function(){
			// prepare debugging mode >>
			if(globals.stage.debugging){
				document.onkeyup = function(evt){
					var e = window.event || evt,
						keyunicode= e.charCode || e.keyCode;

					var container = $('#mod-console'),
						cookieName = 'console',
						pwd ="dDNyckA=";
						
					if(keyunicode == 113) { // F2
						if(container.length) return container.toggle('normal');
						
						var savedPass = tools.cookie.read(cookieName),
							inputPass =  savedPass || tools.base64.encode(prompt("Por favor, digite a senha."));
						
						if(inputPass && inputPass == pwd){
							tools.cookie.create('console', pwd, 1); // renew current cookie
							
							var container = document.createElement('hr');
							container.id = "consoleContainer";
							document.body.appendChild(container);
							
							loaddisabled.modules([
								{
									id:"modConsole",
									selector:"#consoleContainer",
									loaddisabledSkin:true
								}
							]);
						}
					}
					
					if(container.length && keyunicode == 9) { // tab
						globals.data.instances.modConsole[0].togglePosition();
					}
				}
			}
			
			return undefined;
		}(),
		loaddisabled:null,
		afterEnd:null	
	}
	
	var library = {
		modules:{
			extend:function(moduleFactoryModelOBJECT){
				if(typeof(moduleFactoryModelOBJECT) != 'object' || moduleFactoryModelOBJECT.length) return log.critical('Erros encontrados ao extender o objeto Library.<br/>'+structErrors);;
				
				var structErrors = tools.getStructErrors({
					data:moduleFactoryModelOBJECT,
					model:{
						info:Object,
						CONSTRUCTOR:Function
					}
				});
				if(structErrors) return log.critical('Erros encontrados ao extender o objeto Library.<br/>'+structErrors);
				if(Library.modules[moduleFactoryModelOBJECT.info.id] && Library.modules[moduleFactoryModelOBJECT.info.id].source) {
					log.warning('Sobrescrevendo referência existente para o construtor do módulo <strong>'+moduleFactoryModelOBJECT.info.id+'</strong>.');
				}
				
				Library.modules[moduleFactoryModelOBJECT.info.id] = {
					source:moduleFactoryModelOBJECT
				};
				
				log.checkpoint('Módulo cadastrado na biblioteca local » '+ moduleFactoryModelOBJECT.info.id);
				
			}
		}
	}
	
	var loaddisabled = function(){
		//-+-+-+-+-+-+-+-+
		// Local VARS
		//-+-+-+-+-+-+-+-+
		var firstLoad = true,
			modulesQueue = [],
			modTypeInProgress = [],
			loaddisableded = {},
			log;
		// Local VARS //
	
		var modules = function(modulesOBJ){
			var modByType = {};
			
			// Validation loop
			for(var no = 0; no < modulesOBJ.length; no++){
				var mod = modulesOBJ[no];
					log = new Log(mod.id);
				
				// Valide template
				if(!mod.selector || !$(mod.selector).length) {
					log.critical("Elemento container não localizado. O parâmetro '<strong>selector</strong>' está incorreto ou não foi especificado. Seu valor atual é: <strong>" + mod.selector + "</strong>");
					continue;
				}
				
				// Check if there are permission for this module in the library
				if(!Library.modules[mod.id]) {
					log.critical("Script não encontrado na biblioteca.");
					continue;
				}
								
				if(!modByType[mod.id]) {
					modTypeInProgress.push(mod.id);
					modByType[mod.id] = [];
				}
				modByType[mod.id].push(mod);				
			}
			
			// Execution loop			
			for(var modType in modByType){
				log = new Log(modType);
				
				(function(modType){					
					if(typeof(Library.modules[modType].source) == 'object'){
						log.checkpoint('Carregando módulo direto da biblioteca (sem requisição).');
						
						var modPrefs = modByType[modType].shift(),
							sameTypeQueue = modByType[modType],
							callModPrefs = !!!modTypeInProgress.length;
						
						//alert(modTypeInProgress.length + '\n' + modType + '\n' + callModPrefs);
						
						if (Library.modules[modType].source.dependencies){
							log.checkpoint("Avaliando pré-requisitos para o seletor " + modPrefs.selector);
							components(Library.modules[modType].source, modPrefs, sameTypeQueue);
						} else {
							modulesQueue.push(modPrefs);
						}
						
						return undefined;
					}
									
					log.checkpoint('Requisitando script construtor.');
					var url = globals.stage.coreBaseUrl + Library.modules.baseDIR + Library.modules[modType].scriptPath;
						require.files({
							dependencies:[url],
							success:function(){
							
								//alert(modType+'\n'+!!Library.modules[modType].source)
								var moduleOBJ = Library.modules[modType].source;
								if(!moduleOBJ) {
									modMan.log.critical("Erro de sintaxe no módulo "+modType+".");
									var shift = modTypeInProgress.shift();
									preferences();
									return;
								} else {								
								
									var	modPrefs = modByType[modType].shift(),
										
										sameTypeQueue = modByType[modType],
										callModPrefs = !!!modTypeInProgress.length;
									
									//alert(moduleOBJ.dependencies);
									if (moduleOBJ.dependencies){
										log.checkpoint("Avaliando pré-requisitos para o seletor " + modPrefs.selector);
										components(moduleOBJ, modPrefs, sameTypeQueue);
									} else {
										modulesQueue.push(modPrefs);
									}
								}
							},
							error:function(){
								log.critical('Erro no pedido da url: '+url);
							}
						});
				})(modType);
			}	
			
		}
		
		var components = function(modOBJ, modPrefs, sameTypeQueue){
			
			var loaddisabledSkin = modPrefs.loaddisabledSkin;
			var dependenciesOBJ = modOBJ.dependencies;
			var urlsOBJ = {};
			log = new Log(modPrefs.id);
			//alert('aqui \n' + modOBJ.name);
			
			
			if(dependenciesOBJ.underTerra && !globals.page.underTerra) {
				log.critical('Este módulo só pode ser carregado sob o domínio do Terra');
				if(callModPrefs) preferences();
				return false;
			}
			
			if(dependenciesOBJ.flash && !globals.user.flash.installed) {
				log.warning('Este módulo precisa de flash para ser instanciado');
				if(callModPrefs) preferences();
				contingency(modPrefs);
				return false;
			}
			
			if(dependenciesOBJ && dependenciesOBJ.js){
				urlsOBJ['js'] = [];
				for(var type in dependenciesOBJ.js){
					var item = dependenciesOBJ.js[type],
						tempType = (type.match(/helpers|plugins/)) ? 'extensions' : type,
						//base = globals.page.baseURL + Library[type].baseDIR;
						base = Library[tempType].baseDIR;
					
					if(typeof(item) == 'string') urlsOBJ['js'].push(globals.stage.coreBaseUrl + item);
					else if(typeof(item) == 'object' && item.length){
						for (var i = 0; i < item.length; i++){
							if(!Library[tempType][item[i]]) {
								log.critical(item[i] + ' - não encontrado na biblioteca '+ type);
								return false;
							}
							var url =  base + Library[tempType][item[i]].scriptPath;
							urlsOBJ['js'].push(url);
						}
					}
					/* alert(
						'type : ' + type +'\n'+
						'itemName : ' + itemName +'\n'+
						'baseURL : ' + baseURL +'\n'
					); */
				}
				//alert(urlsOBJ.toSource());
				tools.Components.set(urlsOBJ, function(){
					var shift = modTypeInProgress.shift();
					//log.checkpoint('chamando internalTimer\n' + modPrefs.id);
					modulesQueue.push(modPrefs);
					if(sameTypeQueue.length) {
						for(var i = 0; i < sameTypeQueue.length; i++){
							modulesQueue.push(sameTypeQueue[i]);
						}
					}
					if(!modTypeInProgress.length) {
						//alert('chamando módulos. logo após ' + modPrefs.id);
						preferences();
					}
				});
			} else {
				var shift = modTypeInProgress.shift();
				modulesQueue.push(modPrefs);
				if(sameTypeQueue.length) {
					for(var i = 0; i < sameTypeQueue.length; i++){
						modulesQueue.push(sameTypeQueue[i]);
					}
				}
				
				if(!modTypeInProgress.length) {
					preferences();
				}
			}
		}
		
		var play = function() {
			var now = function(modPrefs){
				//alert("play para " + modPrefs.id);
				try {
					var PARAMS = Interface(modPrefs);
					if (PARAMS) {
						var extraTools = $.extend({}, tools, {
							log: new Log(modPrefs.id)
						});
						
						try{
							extraTools.log.checkpoint("Creating new instance.");
							var instance = new Library.modules[modPrefs.id].source.CONSTRUCTOR(jQuery, PARAMS, extraTools);					
							if(!globals.data.instances[modPrefs.id]) globals.data.instances[modPrefs.id] = [];
								globals.data.instances[modPrefs.id].push(instance);
							
							loaddisableded[modPrefs.id + '_' + modPrefs.selector] = true;
						} catch (errorOBJ){
							var msg = ""+
								"Erro ao instanciar módulo: "+modPrefs.id+" \n"+
								'['+errorOBJ.name+'] -> '+errorOBJ.message + "\n" +
								"Arquivo: " + errorOBJ.fileName +'\n'+
								"Linha: " + errorOBJ.lineNumber;
							
							log.critical(msg);
						}
						
						if(!modulesQueue.length && globals.page.lazyLoad) {
							$(window).unbind('scroll');
						}
					}
					else {
						new contingency(modPrefs);
					}
				} catch (e) {
					log.critical("Erros encontrados nos parâmetros transmitidos ao módulo <strong>" + modPrefs.id + "</strong> " + (globals.data.instances[modPrefs.id] ? " (instância " + (globals.data.instances[modPrefs.id].length + 1) + ")." : "")  + "<br/>" + e.message);
					contingency(modPrefs);
				}
				
			}
			
			var onViewPort = function(modPrefs){
				if($(modPrefs.selector + ":in-viewport").length) {
					play.now(modPrefs); 
				} else {
					log.checkpoint('scrolling');
					
					$(window).scroll(function() { 		
						if(!loaddisableded[modPrefs.id + '_' + modPrefs.selector] && $(modPrefs.selector + ":in-viewport").length) {
							new play.now(modPrefs);
						}
					});
				}
			}

			return {
				now:now,
				onViewPort:onViewPort
			}
			
		}();
		
		var preferences = function(){
			//alert('em preferences: ' + modulesQueue.length + " itens");
				if(firstLoad){		
					//$(document).ready(function(){
						while(modulesQueue.length){
							var modPrefs = modulesQueue.shift();
							if(globals.page.lazyLoad) new play.onViewPort(modPrefs);
							else play.now(modPrefs);
							
							if(!modulesQueue.length) firstLoad = false;
						}
					//});			
				} else {
					while(modulesQueue.length){
						var modPrefs = modulesQueue.shift();
						play.now(modPrefs);					
					}
				}
		}
		
		var Interface = function (modPrefs){
			log = new Log(modPrefs.id);
			log.checkpoint("Analisando interface.");			
			
			var moduleOBJ = Library.modules[modPrefs.id].source;
			var CONTAINER = $(modPrefs.selector);
			
			//-+-+-+-+-+-+-+-+-+-+-+-+-+
			// Double-check for basic dependencies
			//-+-+-+-+-+-+-+-+-+-+-+-+-+
			if(!CONTAINER.length) {
				log.critical('Recipiente (DOM element) não encontrado. Favor, verificar seletor e template.');
				return false;
			}
					
			// Checking for module object
			if(!moduleOBJ) {
				log.critical('Não foi possível localizar o script para este módulo. Confirme a localização do js e o nome do objeto carregado.' )
				return false;
			}
			
			// Checking for constructor
			if (!moduleOBJ.CONSTRUCTOR){
				log.critical('Não foi possível localizar um construtor para este módulo. Verifique se o objeto possui um método chamado "CONSTRUCTOR".' )
				return false;
			}	
			
			// Checking for contingency method
			/* if (!moduleOBJ.CONTINGENCY){
				log.warning(modPrefs.id + ' - Este módulo não possui um método de contingência. Em caso de erros, apenas o procedimento padrão será adotado.' );
			}	 */		
			// Double-check for basic dependencies //
			
			
			var PARAMS = {}; // private object - stores valid params		
		
			//-+-+-+-+-+-+-+-+-+-+-+-+-+
			// Validate specific PARAMS
			//-+-+-+-+-+-+-+-+-+-+-+-+-+
			if (moduleOBJ.params) {
				var params = {};
				if(modPrefs.params) params = $.extend({}, modPrefs.params);
				
				var defaults = moduleOBJ.params.defaults || {};
				
				if(defaults) params = $.extend(defaults, modPrefs.params);				
				
				if(window.trrConstantData && window.trrConstantData && window.trrConstantData[modPrefs.id]) {
					params =  $.extend(params, window.trrConstantData[modPrefs.id]);	
					var msg = '';
					for (var paramName in window.trrConstantData[modPrefs.id]) {
						if(msg) msg += '<br/>';
						msg += '<strong>'+paramName + '</strong>: ' + window.trrConstantData[modPrefs.id][paramName];
					}
					log.checkpoint('Preservando parâmetros definidos como constantes para o módulo <em>'+modPrefs.id+'</em>, neste contexto:<br/>'+msg);
				}
				
				var required = moduleOBJ.params.required || moduleOBJ.params.needed;
				
				var errors = tools.getStructErrors({
					model: required,
					data: params,
					help: moduleOBJ.params.help || {}
				});
				
				if (errors) {
					throw new Error(errors, location.href, 0);
				}
				
				// If everything is alright
				for(var paramName in params){
					PARAMS[paramName] = params[paramName];
				}
				log.checkpoint('Parâmetros OK.');
			}
			// Validate specific PARAMS //
			
			
			//-+-+-+-+-+-+-+-+-+-+-+-+-+
			// Adjust module language and region
			//-+-+-+-+-+-+-+-+-+-+-+-+-+
			PARAMS["LNG"] = {};
			PARAMS["RGN"] = {};
			if (moduleOBJ.locale) {
				// LNG
				if(moduleOBJ.locale.LNG) {
					var primaryLNG = moduleOBJ.locale.LNG[globals.page.lang],
						secondaryLNG = moduleOBJ.locale.LNG[globals.page.locale];
					
					// dealing with exception language definitions (forgiving deprecated ones)
					if(!primaryLNG && globals.page.country == 'BR') primaryLNG = moduleOBJ.locale.LNG['br'];
					else if(!primaryLNG && globals.page.country == 'AR') primaryLNG = moduleOBJ.locale.LNG['ar'];
						
					if(primaryLNG || secondaryLNG) {
						PARAMS["LNG"] = primaryLNG || {};						
						
						if(secondaryLNG) PARAMS["LNG"] = $.extend(primaryLNG, secondaryLNG);
						
						// Check for default specification
						if (!moduleOBJ.locale.defaultLNG) log.warning('A propriedade "defaultLNG" não foi encontrada. Este módulo pode não funcionar corretamente em outros idiomas.');
					} else {
						// Check for default specification
						if (!moduleOBJ.locale.defaultLNG) {
							log.critical('Não existem variáveis de idioma para "'+globals.user.lang+'". A propriedade "defaultLNG" também não foi definida. ');
							return false;
						}
						else {
							PARAMS["LNG"] = moduleOBJ.locale.LNG[moduleOBJ.locale.defaultLNG.toLowerCase()];
							log.warning('Não existem variáveis de idioma para "'+globals.user.lang+'". O padrão foi implementado.')
						}
					}
				} else {
					log.warning("O objeto 'LNG' não foi encontrado. Verifique se ele realmente é desnecessário.");
				}
				
				// RGN
				if(moduleOBJ.locale.RGN) {
					if(moduleOBJ.locale.RGN[globals.page.country.toUpperCase()]) {
						PARAMS["RGN"] = moduleOBJ.locale.RGN[globals.page.country.toUpperCase()];
						// Check for default specification
						if (!moduleOBJ.locale.defaultRGN.toUpperCase()) log.warning('A propriedade "defaultRGN" não foi encontrada. Este módulo pode não funcionar corretamente em outros idiomas.');
					} else {
						// Check for default specification
						if (!moduleOBJ.locale.defaultRGN.toUpperCase()) {
							log.critical('Não existem variáveis de região para "'+globals.page.country+'". A propriedade "defaultRGN" também não foi definida. ');
							return false;
						}
						else {
							PARAMS["RGN"] = moduleOBJ.locale.RGN[moduleOBJ.locale.defaultRGN.toUpperCase()];
							log.warning('Não existem variáveis de região para "'+globals.page.country+'". O padrão foi implementado.')
						}
					}
				} else {
					log.warning("O objeto 'RGN' não foi encontrado. Verifique se ele realmente é desnecessário.");
				}
				
			}
				
			// Extendind locale objects with controlled vocabulary
			/*
			$.extend(PARAMS['LNG'], controlled.LNG);
			$.extend(PARAMS['RGN'], controlled.RGN); 
			*/
			PARAMS['LNG']['controlled'] = controlled.LNG;
			PARAMS['RGN']['controlled'] = controlled.RGN;
			
			log.checkpoint('Configurações de seção (LNG e/ou RGN) foram avaliadas.');			
			// Adjust module language and region //
			
			
			//-+-+-+-+-+-+-+-+-+-+-+-+-+
			// Skin interpretation
			//-+-+-+-+-+-+-+-+-+-+-+-+-+
					
			// Validating skin settings
			if(modPrefs.loaddisabledSkin){
				if(!moduleOBJ.skins) {
					log.critical("O parâmetro 'loaddisabledSkin' foi definido como 'true', mas o módulo não possui a propriedade um objeto 'skins'. Certifique-se \que módulo requer arquivos externos para habilitar esta opção.");
					return false;
				}
				
				var skinsOBJ = moduleOBJ.skins;			
				var skin = {};
				// Checking skin presence
				if(modPrefs.skinName && skinsOBJ.items[modPrefs.skinName]) {
					skin.id = modPrefs.skinName;
					log.checkpoint("Validando skin: " + modPrefs.skinName);
					
				} else if (skinsOBJ.items[skinsOBJ.defaultSkinName]) {				
					skin.id = skinsOBJ.defaultSkinName;
					log.checkpoint("Validando skin padrão.")
				} else if (skinsOBJ.items[skinsOBJ.backupSkinName]){
					skin.id = skinsOBJ.backupSkinName;
					log.critical("Validando skin de backup.");
					return false;
				} else {
					if (!skinsOBJ.items[skinsOBJ.defaultSkinName]) {
						log.critical("O skin padrão não foi localizado. Verifique se o objeto é uma pririedade de 'items' e se o o seu nome tem o sufix 'skn_'.");
						return false;
					}
				}
				
				// Validating skin interface
				var currentSkin = skinsOBJ.items[skin.id]
				if(!currentSkin.tplBody) {
					log.critical("O parâmetro 'tplBody' não foi encontrado.");
					return false;
				} else {
					if(typeof(currentSkin.tplBody) != 'string') {
						log.critical("O parâmetro 'tplBody' deve ser uma string contendo a estrutura HTML para o módulo.");
						return false;
					}
				}
				
				// Parsing template
				if (PARAMS["LNG"] || PARAMS["RGN"]) {
					var lngOBJ = (PARAMS["LNG"]) ? PARAMS["LNG"] : false;
					var rgnOBJ = (PARAMS["RGN"]) ? PARAMS["RGN"] : false;
					
					var TPL = tools.parseTPL({LNG:lngOBJ, RGN:rgnOBJ}, currentSkin.tplBody);
				}
				
				// Including styles
				if(currentSkin.css && currentSkin.css.length) {
					var moduleBaseURL = Library.modules.baseDIR + modPrefs.id.toLowerCase().replace('mod','') + '/';
					
					if(typeof(currentSkin.css) == 'string') {
						tools.Components.set({css:moduleBaseURL + currentSkin.css});
					} else {
						var newCssArray = [];
						for(var i = 0; i < currentSkin.css.length;i++){
							var currentCss = moduleBaseURL + currentSkin.css[i];
							newCssArray.push(currentCss);
						}
						tools.Components.set({css:newCssArray});
					}
				}
				
				if(TPL && modPrefs.loaddisabledSkin) {
					var newElement = $(TPL);
					CONTAINER.replaceWith(newElement);
					CONTAINER = newElement;	
				}
			}
			// Deliver recipient
			PARAMS.preLoadedSkin = !modPrefs.loaddisabledSkin;
			PARAMS.skinName = (skin && skin.id) ? skin.id : modPrefs.skinName;
			PARAMS.recipient = CONTAINER;
			PARAMS.factoryModel = moduleOBJ;
			
			// Applying transition effects
			if(globals.page.transitionEffects) CONTAINER.hide().fadeIn('slow');
			// Skin interpretation//
			
			return PARAMS;
		}
		
		var contingency = function(modOBJ){
			log.checkpoint('Problemas encontratos. Disparando método de contingência.');
			if($(modOBJ.selector).length) {
				var skinsOBJ = Library.modules[modOBJ.id].source.skins;
				var backupSkinName = skinsOBJ.backupSkinName;
				if(backupSkinName && skinsOBJ.items[backupSkinName]){
					log.checkpoint('Incluindo template de backup - ' + skinsOBJ.backupSkinName);
					
					tools.Components.set(skinsOBJ.items[backupSkinName].css, function(){
						$(modOBJ.selector).html(skinsOBJ.items[backupSkinName].tplBody);
					});
					
					
				} else $(modOBJ.selector).html('Um problema foi detectado neste módulo.');
			}
			else log.critical('Não foi possível localizar um elemento HTML para receber o template de backup.');
		}
		
		return {
			modules:modules
		}
	}();
	
	// Public //
	
	var start = function(setupOBJ){
		
		//-+-+-+-+-+-+-+-+-+-+-+-+
		// Parsing configs
		//-+-+-+-+-+-+-+-+-+-+-+-+
		if(setupOBJ.configs) {
			var version = setupOBJ.configs.coreVersion || details.coreVersion;

			var reloaddisabledInterval = (window.contextData && typeof window.contextData.reloaddisabledInterval == 'number') ? window.contextData.reloaddisabledInterval : setupOBJ.configs.reloaddisabledInterval;
			if (reloaddisabledInterval) {
				tools.pageReloaddisableder.on(reloaddisabledInterval);
			}

			if(setupOBJ.configs.locale && typeof(setupOBJ.configs.locale) == 'string') {
				var localeLevels = setupOBJ.configs.locale.match(/\w\w/gi);
				
				// forgiving country definition
				if(localeLevels.length == 1 && Regions[localeLevels[0].toUpperCase()]){
					var correctCountry = Regions[localeLevels[0].toUpperCase()].isoCode;
					localeLevels[1] = correctCountry;
					localeLevels[0] = Regions[correctCountry].lang;
				}
				
				globals.page.lang = localeLevels[0].toLowerCase();
				
				
				if(typeof(localeLevels[1]) == 'string' && localeLevels[1].match(/es/i))  localeLevels[1] = globals.page.country;
				if(localeLevels[1]) globals.page.country = localeLevels[1].toUpperCase();			
			
			} else { // deprecated params
				if(setupOBJ.configs.pageCountry && typeof(setupOBJ.configs.pageCountry) == 'string' && setupOBJ.configs.pageCountry.toLowerCase() != 'auto') globals.page.country = setupOBJ.configs.pageCountry.toUpperCase();
				if(setupOBJ.configs.pageLang && typeof(setupOBJ.configs.pageLang) == 'string' && setupOBJ.configs.pageLang.toLowerCase() != 'auto') {	
					var lngLevels = setupOBJ.configs.pageLang.match(/\w\w/gi);
					globals.page.lang = lngLevels[0].toLowerCase();
					if(lngLevels[1]) {
						globals.page.lang += '-' + lngLevels[1].toUpperCase();
						globals.page.country = lngLevels[1].toUpperCase();
					}
				}
			}
			globals.page.locale = globals.page.lang + '-' + globals.page.country;
			
			if(!globals.stage.type.match(/HLG|DSV/) && setupOBJ.configs.pageCountry && !setupOBJ.configs.baseURL) globals.stage.coreBaseUrl = details.prdBaseDomain + details.portalDir + details.coreVersion + '/'  + details.coreDirPath;
			
			if(setupOBJ.configs.baseURL) {
				globals.page.baseURL = setupOBJ.configs.baseURL.replace(/(\/core)?\/?$/,'') + '/';
				globals.stage.coreBaseUrl = globals.page.baseURL.replace(/\/(atm|portal)\/.*/,'') + '/' + details.portalDir + details.coreVersion + '/' + details.coreDirPath;
			}
			
			if(setupOBJ.configs.lazyLoad) {
				$.include(globals.stage.coreBaseUrl + '/_js/jquery.viewport.js');
				globals.page.lazyLoad = true;
			}
			
			globals.page.transitionEffects = setupOBJ.configs.transitionEffects;
		};
		
		// Set locale objects
		errorMsgs = (errorMsgs[globals.user.lang]) ? errorMsgs[globals.user.lang] : errorMsgs[globals.user.lang];
		controlled.LNG = (controlled.LNG[globals.page.lang]) ? controlled.LNG[globals.page.lang] : controlled.LNG[controlled.defaultLNG.toLowerCase()];
		controlled.RGN = (controlled.RGN[globals.page.country]) ? controlled.RGN[globals.page.country] : controlled.RGN[controlled.defaultRGN.toUpperCase()];
		
		// Habilitando exception locales em CSS (exceto BR)
		if(globals.page.country != 'BR') {
			
			// primary language class
			if(globals.page.lang.match(/ar/i)) $(document.body).addClass('LNG_es' ).addClass('LNG_es-AR' ); // AR extends ES
			else $(document.body).addClass('LNG_' + globals.page.locale.match(/\w\w/g)[0]);
			
			// locale language class - always extends primary language class
			$(document.body).addClass('LNG_'+globals.page.locale);		
			
			// defined country class
			$(document.body).addClass('RGN_' + globals.page.country);
		}		
	
		if(setupOBJ.modules) loaddisabled.modules(setupOBJ.modules);
		
		return modMan.start = loaddisabled.modules;
	}
	
	
	var help = function(){
		if (!log.console.active) tools.console();
		var publicMethods = [];
		for(method in tools){
			if(method != 'help') publicMethods.push(method);
		}
		var msg = ""+
		"Total de métodos transversais: " + (publicMethods.length)+".\n"+
		"São eles: " + publicMethods.join(', ') + ".";
		log.help(msg);
	}
	
	var observer = {
		list:{}, // stores cross-component methods
		set:function(name, method){
			if(!this.list[name]) this.list[name] = [];
			
			this.list[name].push(method);
		},
		play:function(name){
			if (this.list[name]) {
				for(var no = 0; no < this.list[name].length; no++){
					this.list[name][no].call();
				}
			} else log.warning(LNG.couldntFondMethodsFor + ' "' + name + '"');
		}
	};
	return {
		namespaces:tools.namespaces,
		require:require,
		globals:globals,
		library:library,
		start:start,
		loaddisabled:loaddisabled.modules,
		log:log,
		tools:tools,
		help:help
	};
}(jQuery);

} catch (errorOBJ){
	
	errorOBJ.message = ""+
		"Um erro foi encontrado no código da classe 'ModMan'. Detalhes: \n"+
		'['+errorOBJ.name+'] -> '+errorOBJ.message + "\n" +
		"Arquivo: " + (errorOBJ.fileName || errorOBJ.sourceURL || errorOBJ.url || 'core.modMan.js')+'\n'+
		"Linha: " + (errorOBJ.lineNumber || errorOBJ.line || errorOBJ.number);
		
	if(errorOBJ.stack || errorOBJ.stacktrace) errorOBJ.messsage += '\nStack: '+(errorOBJ.stack || errorOBJ.stacktrace);
	
	if(window.modMan) modMan.tool.log.critical(errorOBJ.message);
	else throw new Error(errorOBJ.message);
}
