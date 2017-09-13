// $Header: /SC/CVS/webdev/www/cnn/element/js/3.0/local.js,v 1.73 2011/04/08 18:08:18 crawls Exp $
/* cnn personalization module js
 ========================================================================= */


var MainLocalObj = (typeof Class == "object") ? Class.create() : {};
MainLocalObj = {

	//declare vars
	data: {
		weatherLoc: {
			locCode: '',
			zip: '',
			name: '',
			city: '',
			state: ''
		},
		sports: {},
		stockSymbols: [],
		prevStockSymbols: [],
		maxSymbols: 3
	},

	//initialize modules
	init: function(disableSymbolLookup) {

		this.old_ie = false;
		var browser = navigator.appName;
        if (browser == "Microsoft Internet Explorer") { // clonePosition has a bug in IE7 and below
	        var ua = navigator.userAgent;
	        var msie = ua.indexOf('MSIE');
	        var ie = msie + 5; // to grab the actual # after "MSIE"
	        var version_string = ua.charAt(ie);
	        var ie_ver_num = parseFloat(version_string);

	        if (ie_ver_num <= 7) {
	                this.old_ie = true;
	        }
        }

		//environment
		this.internationalUser = (location.hostname.indexOf('edition.') > -1) ? true : false;
		this.isProfilePage = (location.pathname.indexOf('profile') > -1) ? true : false;
		this.isUSPage = (location.pathname.indexOf('US') > -1) ? true : false;
		this.isPoliticsPage = (location.pathname.indexOf('/POLITICS') > -1) ? true : false;


		if(this.isUSPage || this.isPoliticsPage) { this.internationalUser = false; }

		this.useAccordions = ($('pmSlidebox')) ? true : false;

		//changing
		
		//cookies
		this.allCookies = allCookies;
		this.defaultExpanded = this.allCookies["pm.defaultExpanded"] || null;
		this.defaultExpandedProfile = this.allCookies["pm.defaultExpandedProfile"] || null;

	
		
		//is void?
		/*
	 	if (!this.internationalUser && this.defaultExpanded === null) {
			if (cnnCurrDay !== 'Sat' && cnnCurrDay !== 'Sun' && cnnCurrHour >= 9 && cnnCurrHour <= 18) {
				this.defaultExpanded = 4;
			}
		} else if (this.defaultExpanded === null || (this.internationalUser && this.defaultExpanded > 3)) {
			this.defaultExpanded = 1;
		}
	 	*/

		if ((this.defaultExpanded == 1 || this.defaultExpanded === null) && this.old_ie) {
			this.defaultExpanded = 2; //force newspulse void
		} else if (this.defaultExpanded === null || (this.internationalUser && this.defaultExpanded > 3)) {
			if (this.isProfilePage) {
				this.defaultExpanded = 2; //force newspulse void
			} else {
				this.defaultExpanded = 1; //force friend activity void
			}
		}
		
		//check if symbol looksup is  via CMS
		if (typeof disableSymbolLookup !== 'undefined') {
			this.disableSymbolLookup = disableSymbolLookup;
		} else {
			this.disableSymbolLookup = false;
		}

		//load last 3 quotes
		if(this.allCookies['last5stocks'] != null)
		{
			var _stocks = {};
			var _lastStocks = this.allCookies['last5stocks'].split("+");

			//grab all removing dups by overwriting
			for(var i = 0; i < _lastStocks.length; i++)
			{
				_stocks[_lastStocks[i]] = _lastStocks[i];
			}

			var _stockCount = 0;
			for(var k in _stocks)
			{
				this.data.stockSymbols.push(_stocks[k]);
				if((++_stockCount) >= this.data.maxSymbols) { break; }
			}
			this.data.stockSymbols.reverse();
		}

		//expiry date and path for saving data
		MainLocalObj.expDate = new Date(1640926800000); //Fri Dec 31 2021 00:00:00 GMT-0500
		this.msUrl = 'http://audience.cnn.com/services/cnn/user.api';

		//instantiate storage manager
		this.StorageManagerInstance = StorageManager.getInstance();
		this.localDataKey = this.allCookies.CNNid + 'localData2010';

		//force CookieStorage for IE by removing IEStorage
		//IEStorage was not working for WS (Nov 09)
		var desiredStores = [];
		var availableStores = this.StorageManagerInstance.availableStores;
		availableStores.each(function(val) {
			if (val.name !== 'IEStorage') {
				desiredStores.push(val);
			}
		});
		this.StorageManagerInstance.availableStores = desiredStores;

		//get storage
		this.StorageManager = this.StorageManagerInstance.getStorage();
		this.StorageManager.load();

		//required for CSI Manager, probably already set higher up in other JS
		if(location.hostname.indexOf('cnn.com')>0) { document.domain = 'cnn.com'; }
		if(location.hostname.indexOf('turner.com')>0) { document.domain = 'turner.com'; }

		//instantiate CSI manager
		this.CSIManager = CSIManager.getInstance();


		

	},

	showIdentity: function(){
		//var cnnUserName = (this.allCookies.firstName || this.allCookies.firstName === 'undefined') ? this.allCookies.displayname : this.allCookies.firstName;

		if(this.defaultExpanded == 1) {
		
			if(Member.isLoggedIn('facebook') && !hasDisconnected) {}
			else { this.defaultExpanded = 2; }
			
		}
		
		if(this.useAccordions) {

			//accordion
			this.accordion = $('pmSlidebox');
			this.options = {
				toggleClass: "accordion-toggle",
				toggleActive: "accordion-toggle-active",
				contentClass: "accordion-content"
			};
			this.contents = this.accordion.select('div.' + this.options.contentClass);
			this.isAnimating = false;
			this.maxHeight = 0;
			this.current = this.defaultExpanded ? this.contents[this.defaultExpanded - 1] : this.contents[0];


			this.toExpand = null;
			this.checkMaxHeight();
			var clickHandler = this.clickHandler.bindAsEventListener(this);
			this.accordion.observe('click', clickHandler);

		}

		if(this.isUSPage || this.isPoliticsPage) { this.current = $('pmWeather'); }
		
		//load data
		this.loadDefaultData();
		
	if(MainLocalObj.isProfilePage || MainLocalObj.isUSPage || MainLocalObj.isPoliticsPage) {
		CNN_updateHeaderOptions();
		return;
	} else {


		allCookies = CNN_getCookies();
		var cnnFirstName = allCookies.firstName;
		var cnnUserName = allCookies.displayname;
		var hasDisconnected = (allCookies["cnnfb.hasDisconnected"] == 1) ? true : false;

		if(Member.isLoggedIn('facebook') && !hasDisconnected) {
			if($('pmFbTitle')) {
				$('pmFbTitle').update('Friends\' Activity');
			}
			if($('pmFacebookTab')) {
				$('pmFacebookTab').update('<fb:activity header="false" height="205" width="280" site="cnn.com" border_color="#ffffff" recommendations="true"></fb:activity>');
			}
		} else {
			if($('pmFbTitle')) {
				$('pmFbTitle').update('Popular on Facebook');
			}
			//make csi request
			if($('pmFacebookTab')) {
				var FB_callObj = {
					url: '/.element/ssi/auto/3.0/sect/MAIN/facebook_rec.wrapper.html',
					args: '',
					domId: 'pmFacebookTab',
					funcObj: false,
					breakCache: false
				};
				MainLocalObj.CSIManager.callObject(FB_callObj);
			}
		}
		FB.XFBML.parse();


		//console.log("Logged in to CNN: " +Member.isLoggedIn('cnn')+"\nLogged into Facebook: "+Member.isLoggedIn('facebook')+"\nConnected with Facebook: "+Member.isConnected());


		if (Member.isLoggedIn('cnn') && Member.isLoggedIn('facebook') && Member.isConnected()) {

			//console.log('case cnn and facebook and connected');
			$('pmLoggedIn').show();
			$('pmLoggedOff').hide();
			if(!hasDisconnected) {
				$('facebookConnected').show();
			} else {
				$('facebookUpsell').show();
			}
			$('pmUserName').update('Hi, ' + CNN_FB_user.accounts[CNN_FB_user.namePref].displayName);

			$('avatarImg').src = 'http://avatar.cnn.com/people/' + CNN_FB_user.accounts.cnn.displayName + '/avatar/35.png';

			$('avatarImg').alt = cnnUserName;
			CNN_updateHeaderOptions();

		}

		else if(Member.isLoggedIn('facebook') && Member.isConnected() && !(Member.isLoggedIn('cnn'))){
			//console.log('logged in and connected with facebook but not cnn');
			if(!hasDisconnected) {
				$('facebookConnected').show();
			} else {
				$('facebookUpsell').show();
			}
			FB.api(
			  {
				method: 'fql.query',
				query: 'SELECT name, pic_square FROM profile WHERE id=' + FB.getSession().uid
			  },
			  function(response) {
				var user = response[0];
				Member.setUserDataFB(user,FB.getSession().uid);
				var userInfo = document.getElementById('user-info');
				$('pmUserName').update('Hi, ' + user.name);
				$('pmFBLoggedIn').hide();
				// we will have to change this to pull from the avatar service once we get that service up
				$('avatarImg').src = user.pic_square;
				//$('pmUserName').innerHTML = 'Hi, ' + user.name;
				//$('facebookUpsell').hide();
				$('pmLoggedOff').hide();
				$('pmLoggedIn').show();
				CNN_updateHeaderOptions();
			  }
			);
		} else if(Member.isLoggedIn('cnn') && (Member.isLoggedIn('facebook'))  && !(Member.isConnected())){
			//console.log('logged in to cnn and facebook, but not connected');
			if(!hasDisconnected) {
				$('facebookConnected').show();
			} else {
				$('facebookUpsell').show();
			}
			$('cnnUseFB').show();
			$('pmLoggedIn').show();
			$('pmLoggedOff').hide();
			$('pmUserName').update('Hi, ' + CNN_FB_user.accounts[CNN_FB_user.namePref].displayName);
			$('avatarImg').src = 'http://avatar.cnn.com/people/' + CNN_FB_user.accounts.cnn.displayName + '/avatar/35.png';

			$('avatarImg').alt = cnnUserName;
			CNN_updateHeaderOptions();

			CNN_updateHeaderOptions();
		} else if(Member.isLoggedIn('cnn') && !(Member.isLoggedIn('facebook'))  && !(Member.isConnected())){
			//console.log('case cnn and not facebook');
			$('facebookUpsell').show();
			$('pmLoggedIn').show();
			$('pmLoggedOff').hide();
			$('pmUserName').update('Hi, ' + CNN_FB_user.accounts[CNN_FB_user.namePref].displayName);
			$('avatarImg').src = 'http://avatar.cnn.com/people/' + CNN_FB_user.accounts.cnn.displayName + '/avatar/35.png';

			$('avatarImg').alt = cnnUserName;
			CNN_updateHeaderOptions();

			CNN_updateHeaderOptions();
		} else if( Member.isLoggedIn('facebook')  && !Member.isConnected() ) {
			//console.log('logged in to facebook, but not connected and not logged into CNN');

			if(!hasDisconnected) {
				$('facebookConnected').show();
			} else {
				$('facebookUpsell').show();
			}
			$('pmLoggedIn').hide();
			$('pmLoggedOff').hide();
			$('pmFBLoggedIn').show();
			CNN_updateHeaderOptions();

		} else if(Member.isLoggedIn('facebook')  && Member.isConnected() ) {
			//console.log('logged in to facebook, is connected but not logged into cnn');
			if(!hasDisconnected) {
				$('facebookConnected').show();
			} else {
				$('facebookUpsell').show();
			}
			$('pmLoggedIn').show();
			$('pmLoggedOff').hide();
			CNN_updateHeaderOptions();

		} else {
			//console.log('no logins');
			$('facebookUpsell').show();
			$('pmLoggedIn').hide();
			$('pmLoggedOff').show();
			CNN_updateHeaderOptions();
		}



	if ((Member.isConnected() && CNN_FB_user.avatar === 'fb') || (Member.isConnected() && !Member.isLoggedIn('cnn'))) {
		if (!$('fbAvatar')) {
			var fbAvatar = new Element('div', { id: 'fbAvatar' });
			$('pmUserPanel').appendChild(fbAvatar);
		}
	}



	}//end profile page conditional
	},


	initMod: function(currentId) {

		//follow on functions
		switch (currentId) {
			case 'pmWeather':
			case 'pmWeatherIntl':
				if (typeof MainLocalObj.Weather.isInitialized === 'undefined') {
					MainLocalObj.Weather.init();
				}
			break;
			case 'pmSports':
				if (typeof MainLocalObj.Sports.isInitialized === 'undefined') {
					MainLocalObj.Sports.init();
				}
			break;
			case 'pmMarkets':
				if (typeof MainLocalObj.Markets.isInitialized === 'undefined') {
					MainLocalObj.Markets.init();
				}
			break;
		}
	},

	setUserSpecificData: function(flag) {
		this.data.userSpecificData = flag;
	},

	setInternationalUser: function(flag) {
		this.internationalUser = flag;
	},

	setLocationZip: function(type, zip) {
		this.data.weatherLoc.zip = zip;
	},

	setLocationName: function(type, name) {
		this.data.weatherLoc.name = name;
	},

	setLocationLocCode: function(type, code) {
		if (type == 'weather') {
			this.data.weatherLoc.locCode = code;
		}
	},

	setLocationCity: function(type, city) {
		this.data.weatherLoc.city = city;
	},

	setLocationState: function(type, state) {
		this.data.weatherLoc.state = state;
	},

	parseMSData: function(obj) {
		//msQueueManager.requestReceived(); // lets iJax know it can process the next request
		if (typeof obj.status !== 'undefined' && obj.status === 'success' && obj.data !== '') {
			this.data = obj.data.evalJSON(true);
			this.data.lastMemberServicesFetch = new Date().getTime();
			this.StorageManager.put(this.localDataKey, this.data, MainLocalObj.expDate);
			this.StorageManager.save();
		} else if (obj.data == '') {
			this.loadDefaultData(true);
		} else {
			this.data = this.storedData;
		}
		this.saveWeatherCookie();

		if(MainLocalObj.useAccordions) { this.initialShowHide(); }

		this.initMod(this.current.id);
	},

	parseWeatherCookie: function() {

		var lwpCookie = this.allCookies["lwp.weather"] || null;
		var lwpLocCode = false;
		var lwpZip = false;

		//parse weather cookie, latest or default value is ours, otherwise used for weather page
		if (lwpCookie) {
			var locationArr = unescape(lwpCookie).split('|');
			var weatherLocParse = locationArr[0];
			if (lwpCookie.indexOf('~') == -1) {
				weatherLocParse = lwpCookie.replace('|', '~');
			}
			var lwpDataArr = locationArr[0].split('~');

			return lwpDataArr;

		} else {
			return [false, false];
		}

	},

	loadDefaultData: function(forceDefaultWeather) {

		if (typeof forceDefaultWeather === 'undefined') {
			forceDefaultWeather = false;
		}

		this.storedData = false;

		//parse weather cookie for latest search
		var weatherCookie = this.parseWeatherCookie();
		var lwpLocCode = weatherCookie[0];
		var lwpZip = weatherCookie[1];

		//user is logged in
		if (ms_isLoggedIn() && !forceDefaultWeather) {

			//any local data?
			if (this.StorageManager.contains(this.localDataKey)) {
				this.storedData = this.StorageManager.get(this.localDataKey);
			}

			//greater than 30 mins since last fetch?
			function compareFetchDates(fetchDate) {
				if (fetchDate === null || typeof fetchDate === 'undefined' || (new Date().getTime() - fetchDate) > 1800000) {
					return true;
				} else {
					return false;
				}
			}

			//if data hasn't been fetched in the last 30 mins then sync-up
			if (compareFetchDates(this.storedData.lastMemberServicesFetch)) {
				/*var queueItem = new ms_QueueItem(this.msUrl, 'get');
				queueItem.addParam('action', 'getData');
				queueItem.addParam('name', 'teams');
				queueItem.addParam('callback', 'MainLocalObj.parseMSData');
				var queueItemObj = queueItem.getQueueItem();
				msQueueManager.addRequest(queueItemObj);*/
				var obj = {
					params: {
						name: 'teams'
					},
					onSuccess: function(response){
						MainLocalObj.parseMSData(response.responseJSON);
					}
				};
				Member.getData(obj);
			} else if (this.storedData) {
				this.data = this.storedData;
				if(MainLocalObj.useAccordions) { this.initialShowHide(); }
				this.initMod(this.current.id);
				//set weather cookie to local storage
				this.saveWeatherCookie();
			}

			this.data.userSpecificData = true;

		} else if (lwpZip) {
			if (this.checkZip(lwpZip)) {
				this.data.userSpecificData = true;
				this.setLocationZip('all', lwpZip);
				this.setLocationLocCode('all', lwpLocCode);
			} else {
				this.Weather.requestInternationalCityLookup(lwpZip, lwpLocCode, 'all');
			}
			if(MainLocalObj.useAccordions) { this.initialShowHide(); }
			this.initMod(this.current.id);
		} else if (!this.internationalUser) {
			var randomCityData = [{
				name: 'Welcome, NC',
				zip: '27374'
			}, {
				name: 'Cool, CA',
				zip: '95614'
			}, {
				name: 'Truth or Consequences, NM',
				zip: '87901'
			}, {
				name: 'Okay, OK',
				zip: '74446'
			}, {
				name: 'Ideal, GA',
				zip: '31041'
			}, {
				name: 'Success, MO',
				zip: '65570'
			}, {
				name: 'North, SC',
				zip: '29112'
			}, {
				name: 'Earth, TX',
				zip: '79031'
			}, {
				name: 'Odd, WV',
				zip: '25902'
			}];

			var randNum = Math.floor(Math.random() * randomCityData.length);
			var randomObj = randomCityData[randNum];
			this.setLocationZip('all', randomObj.zip);
			this.setLocationName('all', randomObj.name);
			if(MainLocalObj.useAccordions) { this.initialShowHide(); }
			this.initMod(this.current.id);
		} else if (this.internationalUser) {
			this.setLocationZip('all', '336736767676');
			this.setLocationName('all', 'London, England');
			if(MainLocalObj.useAccordions) { this.initialShowHide(); }
			this.initMod(this.current.id);
		} else {
			if(MainLocalObj.useAccordions) { this.initialShowHide(); }
			this.initMod(this.current.id);
		}

	},

	saveWeatherCookie: function() {

		var lwpCookie = this.allCookies["lwp.weather"] || null;
		var newVal = '';
		if (this.data) {
			newVal = this.data.weatherLoc.locCode + '~' + this.data.weatherLoc.zip;
		}
		var cookieValue;
		var weatherCookie = '';

		//saves last lookups in cookie for weather page
		if (lwpCookie) {
			var locationArr = unescape(lwpCookie).split('|');
			locationArr.unshift(newVal);
			for (var i = 0; i < locationArr.length; i++) {
				if (locationArr[i] !== newVal && (weatherCookie.indexOf(locationArr[i]) === -1) || i === 0) {
					weatherCookie += locationArr[i];
					if (i < (locationArr.length - 1)) {
						weatherCookie += "|";
					}
				}
			}
		} else {
			weatherCookie = newVal;
		}

		CNN_setCookie('lwp.weather', weatherCookie, 24 * 30 * 12, '/', document.domain);

	},

	saveData: function(suppressWeather) {

		var queueItem;
		var queueItemObj;

		if (typeof suppressWeather === 'undefined') {
			suppressWeather = false;
		}

		//cookie used in other parts of the site
		this.saveWeatherCookie();

		//used in footer
		if (typeof cnnWeather === "object" && suppressWeather !== true) {
			cnnWeather.init();
		}

		if (ms_isLoggedIn()) {

			//save data to local storage
			this.StorageManager.put(this.localDataKey, this.data, MainLocalObj.expDate);
			this.StorageManager.save();

			//sync up with member services
			/*queueItem = new ms_QueueItem(this.msUrl, 'get');
			queueItem.addParam('action', 'setData');
			queueItem.addParam('name', 'teams');
			queueItem.addParam('data', Object.toJSON(this.data));
			queueItem.addParam('callback', 'MainLocalObj.monitorMSSave');
			queueItemObj = queueItem.getQueueItem();
			msQueueManager.addRequest(queueItemObj);*/
			var sportsObj = {
				params: {
					'action':'setData',
					'name':'teams',
					'data': Object.toJSON(this.data)
				},
				onSuccess:function(response) {
					//MainLocalObj.monitorMSSave();
				}
			}
			Member.setData(sportsObj);

		}
	},

	monitorMSSave: function(obj) {
		if (typeof obj.status !== 'undefined' && obj.status === 'success') {
			msQueueManager.requestReceived();
		}
	},

	trimWS: function(str) {
		str = str.replace(/,/g, ' ');
		str = str.replace(/^\s*(\S+)*\s*$/, "$1");
		str = str.replace(/(\s{1})\s*/g, "$1");
		return str;
	},

	urlEncode: function(str) {
		str = this.trimWS(str);
		str = str.replace(/st\./i, 'saint');
		str = str.replace(/mt\./i, 'mount');
		str = escape(str);
		return str;
	},

	ucwords: function(str) {
		return (str + '').replace(/^(.)|\s(.)/g, function($1) {
			return $1.toUpperCase();
		});
	},

	truncateString: function(str, len) {
		if (str.length >= len) {
			str = str.substring(0, len);
    		//str = str.replace(/\w+$/, '');
    		str = str.replace(/\s+$/, '');
			str = str + '&hellip;';
		}
		return str;
	},

	daysInMonth: function(month, year) {
		var dd = new Date(year, month, 0);
		return dd.getDate();
	},

	urlDecode: function(str) {
		return unescape(str);
	},

	checkZip: function(str) {
		str = this.trimWS(str.toString());
		var bool = ((str.match(/^\d{5}$/) !== null || str.match(/^\d{12}$/) !== null) && str != '00000' ? true : false);
		return bool;
	},

	expand: function(el) {
		this.toExpand = el.next('div.' + this.options.contentClass);
		if (this.isProfilePage || (this.current != this.toExpand)) {
			this.toExpand.show();
			this.animate();
			this.callOmniture(el.id);
		}
	},

	callOmniture: function(elid){
		var s=s_gi(s_account);
		s.linkTrackVars='none';
		s.linkTrackEvents='none';
		s.pageName='';
		s.tl(this,'o',elid)
	},

	checkMaxHeight: function() {
		for (var i = 0; i < this.contents.length; i++) {
			if (this.contents[i].getHeight() > this.maxHeight) {
				this.maxHeight = this.contents[i].getHeight();
			}
		}
	},

	clickHandler: function(e) {
		var el = e.element();
		if (el.hasClassName('accTitle')) {
			el = e.element().up();
		} // account for clicking on the text
		if (el.hasClassName('accArrow')) {
			el = e.element().up();
		} // account for clicking on the text
		if (el.hasClassName(this.options.toggleClass) && !this.isAnimating) {
			this.expand(el);
		}

		//set cookie for stickyness on homepage
		if (!this.isProfilePage) {
			for (var i = 0; i < this.contents.length; i++) {
				if (this.contents[i].id === el.id.replace('Toggle', '')) {
					CNN_setCookie('pm.defaultExpanded', (i + 1), 24 * 30 * 12, '/', document.domain);
				}
			}
		}

	},

	initialShowHide: function() {
		for (var i = 0; i < this.contents.length; i++) {

			//either on the profile page with cookie, or on homepage as normal
			if ((!this.isProfilePage && this.contents[i] === this.current) || (this.isProfilePage && this.defaultExpandedProfile === null && this.contents[i] === this.current) || (this.isProfilePage && this.defaultExpandedProfile !== null && this.defaultExpandedProfile.indexOf(i + 1) > -1)) {
				this.contents[i].show();
				voidSliderHeight = "194px";
				if(this.contents[i].id == "pmFacebook") {
				voidSliderHeight = "220px";
				}
				this.contents[i].setStyle({
					height:voidSliderHeight
				});

				//on the profile page and has cookie.
				if (this.isProfilePage && this.defaultExpandedProfile !== null) {
					this.initMod(this.contents[i].id);
				}

				this.contents[i].previous('div.' + this.options.toggleClass).addClassName(this.options.toggleActive);

			} else {
				this.contents[i].hide();
				this.contents[i].setStyle({
					height: '0px'
				});
			}
		}
	},

	animate: function() {
		var effects = [];

		if (this.isProfilePage && this.toExpand.getHeight() > 0) {
			options = {
				sync: true,
				scaleContent: false,
				transition: Effect.Transitions.sinoidal,
				scaleX: false,
				scaleY: true
			};

			effects.push(new Effect.Scale(this.toExpand, 0, options));
		} else {
			var options = {
				sync: true,
				scaleFrom: 0,
				scaleContent: false,
				transition: Effect.Transitions.sinoidal,
				scaleMode: {
					originalHeight: this.maxHeight,
					originalWidth: this.accordion.getWidth()
				},
				scaleX: false,
				scaleY: true
			};

			effects.push(new Effect.Scale(this.toExpand, 100, options));
		}

		//close current item, non-profile
		if (!this.isProfilePage) {
			options = {
				sync: true,
				scaleContent: false,
				transition: Effect.Transitions.sinoidal,
				scaleX: false,
				scaleY: true
			};

			effects.push(new Effect.Scale(this.current, 0, options));
		}

		var myDuration = 0.75;

		new Effect.Parallel(effects, {
			duration: myDuration,
			fps: 35,
			queue: {
				position: 'end',
				scope: 'accordion'
			},
			beforeStart: function() {
				this.isAnimating = true;
				if (this.isProfilePage && this.toExpand.getHeight() > 0) {
					this.toExpand.previous('div.' + this.options.toggleClass).removeClassName(this.options.toggleActive);
				} else {
					this.toExpand.previous('div.' + this.options.toggleClass).addClassName(this.options.toggleActive);
				}
				this.current.previous('div.' + this.options.toggleClass).removeClassName(this.options.toggleActive);
				this.toExpand.setStyle({
					visibility: 'hidden'
				});
			}.bind(this),
			afterFinish: function() {
				var currPanelHeight = (this.toExpand.id == "pmFacebook") ? "220px" : this.maxHeight + "px";
				if (this.current.getHeight() === 0) {
					this.current.hide();
				}
				this.toExpand.setStyle({
					visibility: 'visible'
				});
				if (this.toExpand.getHeight() > 0) {
					this.toExpand.setStyle({
						height: currPanelHeight
					});
				}
				this.current = this.toExpand;
				this.isAnimating = false;
				this.initMod(this.current.id);

				//set pipe-delimited cookie for stickyness on profile page
				if (this.isProfilePage) {
					var defaultExpandedProfileCookie = ''
					for (var i = 0; i < this.contents.length; i++) {
						if (this.contents[i].getHeight() > 0) {
							defaultExpandedProfileCookie += (i + 1) + '|';
						}
					}
					defaultExpandedProfileCookie = defaultExpandedProfileCookie.substr(0, defaultExpandedProfileCookie.length - 1);
					CNN_setCookie('pm.defaultExpandedProfile', defaultExpandedProfileCookie, 24 * 30 * 12, '/', document.domain);
				}

			}.bind(this)
		});
	}
};

MainLocalObj.Weather = {
	omnitureStr: "var s=s_gi(s_account);s.linkTrackVars='events,products';s.linkTrackEvents='event2';s.events='event2';s.products=';OutsideIn:Local;;;event2=1;';void(s.tl(this,'o','OutsideIn Local Clickthrough'));",
	weatherURL: (location.hostname.indexOf('ref')>0)?'http://teg8fref1.cnn.com/weather/getForecast':'http://svcs.cnn.com/weather/getForecast',

	init: function() {

		this.defaultMsg = 'Enter a U.S. Zip or Intl city';

		if (typeof MainLocalObj.Weather.isInitialized === 'undefined') {
			MainLocalObj.Weather.requestLocalAll();
		}
		MainLocalObj.Weather.isInitialized = true;
	},

	inputFocus: function(e) {
		if (e.value === MainLocalObj.Weather.defaultMsg) {
			e.value = ''
		}
		e.removeClassName('pmWeatherHollow');
	},

	inputBlur: function(e) {
		if (e.value === '') {
			e.value = MainLocalObj.Weather.defaultMsg;
			e.addClassName('pmWeatherHollow');
		}
	},

	requestLocalAll: function() {
		var configObj = MainLocalObj.data;
		MainLocalObj.Weather.displayElements();
		MainLocalObj.Weather.requestLocalWeather(configObj);
		//no local news for international users for launch, perhaps post launch
		if (!MainLocalObj.internationalUser) {
			MainLocalObj.Weather.requestLocalNews(configObj);
		}
	},

	localUpdateData: function(name, zip, code, type) {
	// This function is called from profile page's changeLocation.js function requestHandler
		MainLocalObj.setLocationZip(type, zip);
		MainLocalObj.setLocationName(type, name);
		MainLocalObj.setLocationLocCode(type, code);
		MainLocalObj.setUserSpecificData(true);
		MainLocalObj.saveData();
		MainLocalObj.Weather.requestLocalAll();
	},

	requestLocalWeather: function(configObj) {
		var weatherArgs = 'mode=json_html&zipCode=' + configObj.weatherLoc.zip;
		if (configObj.weatherLoc.locCode) {
			weatherArgs += '&locCode=' + configObj.weatherLoc.locCode;
		}
		if (MainLocalObj.internationalUser || MainLocalObj.allCookies["default.temp.units"] == "true") {
			weatherArgs += '&celcius=true';
		}
		var callObj = {
			url: MainLocalObj.Weather.weatherURL,
			args: weatherArgs,
			domId: false,
			funcObj: MainLocalObj.Weather.updateLocalWeather,
			breakCache: true
		};
		MainLocalObj.CSIManager.callObject(callObj, 'requestLocalWeather_');
	},

	requestLocalNews: function(configObj) {
		if (MainLocalObj.checkZip(configObj.weatherLoc.zip)) {

			var newsLimit;
			var numAffiliates;
			if (MainLocalObj.isProfilePage || MainLocalObj.isUSPage) {
				newsLimit = 4;
				numAffiliates = 2;
			} else {
				newsLimit = 3;
				numAffiliates = 1;
			}
			var newsUrl = (!MainLocalObj.isPoliticsPage) ? 'http://local.cnn.com/oi/v1.0/publications/1094/zipcodes/'+configObj.weatherLoc.zip+'/stories.cnnhtml': 'http://local.cnn.com/oi/v1.1/zipcodes/'+configObj.weatherLoc.zip+'/publications/1094/stories.cnnhtml';
			var newsArgs = (!MainLocalObj.isPoliticsPage) ? 'limit=' + newsLimit + '&min=' + newsLimit + '&min_pref=' + numAffiliates + '&max_age=3d&max_pref_age=3d&dev_key=wxctrr8nme2pjzpt2dpf89p5' : 'limit=' + newsLimit +  '&min='+newsLimit+'&max_age=2d&dev_key=wxctrr8nme2pjzpt2dpf89p5&keyword=Democrat&keyword=Republican&keyword=Governor&keyword=Senate&keyword=Congress&keyword=Rep&keyword=Dem&keyword=politics';




			var callObj = {
				url: newsUrl,
				args: newsArgs,
				domId: false,
				funcObj: MainLocalObj.Weather.updateLocalNews,
				breakCache: true
			};
			MainLocalObj.CSIManager.callObject(callObj, 'requestLocalNews');
		}
	},

	displayElements: function(state) {
		if (typeof state === 'undefined') {
			state = false;
		}
		switch (state) {
			case 'changeLoc':

				$('cnnGetLocalBox').show();
				if ($('changeLocLink')) {
					$('changeLocLink').hide();
				}
				$('pmLocResultsContainer').hide();

				if (!MainLocalObj.internationalUser) {
					$('pmWeatherHeadlines').show();
					//show only first two headlines
					$('pmWeatherHeadlines').select('li').each(function(val, index) {
						if (index > 1) {
							val.hide();
						}
					});
				}

				MainLocalObj.Weather.inputBlur($('weatherLoc'));

			break;
			case 'intlChangeLoc':
				$('cnnGetLocalBox').show();
				$('changeLocLink').hide();
				$('pmLocResultsContainer').hide();
				$('pmWeatherTom').hide();
				MainLocalObj.Weather.inputBlur($('weatherLoc'));
			break;
			case 'displayResults':
				$('cnnGetLocalBox').show();
				if (!MainLocalObj.internationalUser && !MainLocalObj.isProfilePage) {
					$('pmWeatherHeadlines').hide();
				}
				$('changeLocLink').hide();
				$('pmLocResultsContainer').show();
			break;
			default:
				if (!MainLocalObj.data.userSpecificData) {
					MainLocalObj.Weather.displayElements('changeLoc');
				} else if (MainLocalObj.data.userSpecificData) {
					$('cnnGetLocalBox').hide();
					$('pmLocResultsContainer').hide();

					if ($('changeLocLink')) {
						$('changeLocLink').show();
					}
					if ($('pmWeatherTom')) {
						$('pmWeatherTom').show();
					}

					//ensure all headlines are showing
					if (!MainLocalObj.internationalUser) {
						$('pmWeatherHeadlines').show();
						$('pmWeatherHeadlines').select('li').each(function(val) {
							val.show();
						});
					} else {
						if ($('curConditionsWeatherDay')) {
							$('curConditionsWeatherDay').show();
						}
					}
				}

			break;
		}
	},

	updateLocalWeather: function(obj) {

		if (!obj[0].invalid) {

			var weatherLink = 'http://weather.cnn.com/weather/';
			if (MainLocalObj.internationalUser) {
				weatherLink = 'http://weather.edition.cnn.com/weather/intl/';
			}
			weatherLink += 'forecast.jsp?zipCode=' + MainLocalObj.data.weatherLoc.zip;

			if (MainLocalObj.data.weatherLoc.locCode) {
				weatherLink += '&locCode=' + MainLocalObj.data.weatherLoc.locCode;
			}
			var locStr = MainLocalObj.data.weatherLoc.name;
			var detailsToday = '';
			var detailsTomorrow = '';

			//set state of change location
			if (MainLocalObj.internationalUser) {
				var state = 'intlChangeLoc';
			} else {
				var state = 'changeLoc';
			}

			var degScale = (MainLocalObj.internationalUser || MainLocalObj.allCookies["default.temp.units"] == "true" ? 'C' : 'F');

			if (obj.length > -1) {
				locStr = obj[0].location.city;
				if (obj[0].location.stateOrCountry) {
					locStr += ', ' + obj[0].location.stateOrCountry;
				}
			}

			for (var counter = 0; counter < obj.length; counter++) {
				if (obj[counter] && obj[counter].forecast && obj[counter].forecast.days) {
					if (obj[counter].forecast.days.length > -1) {

						var today = obj[counter].forecast.days[0];
						var curConditions = obj[counter].currentConditions;
						if(curConditions.valid == false){
							curConditions.temperature = '--';
						}
						var locStr = obj[0].location.city;
						if (obj[0].location.stateOrCountry) {
							locStr += ', ' + obj[0].location.stateOrCountry;
						}

						detailsToday += '<p id="pmSelectedWeather">' +
						'	<span>' +
						locStr +
						'</span><span id="changeLocLink">';

						if (MainLocalObj.data.userSpecificData) {
							detailsToday += ' <span style="color: #999;">&nbsp;(</span><a id="pmEditWeatherLoc" href="javascript:MainLocalObj.Weather.displayElements(\'' +
							state +
							'\')">Edit location</a><span style="color: #999;">)</span>';
						}

						detailsToday += '</span></p>';

						var tempFontAdjust = '';
						if (curConditions.temperature.length > 2) {
							tempFontAdjust = ' style="font-size: 24px;"';
						}

						var feelsLikeFontAdjust = '';
						if (curConditions.feelsLikeTemperature.length > 2) {
							feelsLikeFontAdjust = ' style="font-size: 9px;"';
						}

						var temperatureText = '			<span id="pmCurrTempNum">' + curConditions.temperature + '</span>&deg;';
						if (curConditions.temperature_S == 'N/A') {
							temperatureText = '			<span id="pmCurrTempNum"><span style="font-size: 50%;">N/A</span></span>';
						}

						var feelsLikeText = '			Feels like&nbsp;<span id="pmFeelTemp">' + curConditions.feelsLikeTemperature +	'</span>&deg;';
						if (curConditions.feelsLikeTemperature_S == 'N/A' || curConditions.feelsLikeTemperature_S == '') {
							feelsLikeText = '';
						}


						if (!MainLocalObj.isProfilePage || MainLocalObj.internationalUser) {
							// Account for holes during migration to short description
							var description = (typeof(curConditions.shortDescription) == 'undefined')?curConditions.description:curConditions.shortDescription;
							detailsToday += '<div class="pmWrapper">' +
							'	<p id="curConditionsWeatherDay" class="weatherDay">Current conditions</p>' +
							'	<div id="pmWeatherIcon">' +
							'		<a href="' +
							weatherLink +
							'"><img class="cnn_ie6png" src="http://i.cdn.turner.com/cnn/.element/img/3.0/weather/03/' +
							curConditions.icon + '.png' +
							'" alt="your weather"></a>' +
							'	</div>' +
							'	<div id="pmCurrentWeather">' +
							'		<div id="pmCurrTemp"' +
							tempFontAdjust +
							'>' +
							temperatureText +
							'		</div>' +
							'	</div>' +
							'	<div id="pmWeatherDetails">' +
							'		<p id="pmWeatherDesc">' +
							description +
							'		</p>' +
							'		<p id="pmWeatherHiLo">' +
							'			Hi&nbsp;<span id="pmHiTemp">' +
							today.high +
							'</span>&deg;&nbsp;&nbsp;<span style="color: #999; font-size: 10px;">|</span>&nbsp;&nbsp;Lo&nbsp;<span id="pmLoTemp">' +
							today.low +
							'</span>&deg;' +
							'		</p>' +
							'	</div>' +
							'	<div id="pmMoreWeather">' +
							'		<a id="pm10DayBtn" href="' +
							weatherLink +
							'">&nbsp;</a>' +
							'		<p' +
							feelsLikeFontAdjust +
							'>';
							if(curConditions.valid != false){
								detailsToday += feelsLikeText;
							}
							detailsToday += '		</p>' +
							'	</div>' +
							'</div>';
						}
					}

					if (obj[counter].forecast.days.length > 0 && MainLocalObj.internationalUser && MainLocalObj.data.userSpecificData) {

						var tomorrow = obj[counter].forecast.days[1];

						detailsTomorrow += '<p class="weatherDay">Tomorrow</p>' +
						'<div class="pmWrapper">' +
						'	<div id="pmWeatherIcon">' +
						'		<img class="cnn_ie6png" src="http://i.cdn.turner.com/cnn/.element/img/3.0/weather/03/' +
						tomorrow.icon.replace(/gif/, "png") +
						'" alt="your weather">' +
						'	</div>' +
						'	<div id="pmCurrentWeather">' +
						'	</div>' +
						'	<div id="pmWeatherDetails">' +
						'		<p id="pmWeatherDesc">' +
						tomorrow.description +
						'</p>' +
						'		<p id="pmWeatherHiLo">' +
						'			Hi&nbsp;<span id="pmHiTemp">' +
						tomorrow.high +
						'</span>&deg;&nbsp;&nbsp;<span style="color: #999; font-size: 10px;">|</span>&nbsp;&nbsp;Lo&nbsp;<span id="pmLoTemp">' +
						tomorrow.low +
						'</span>&deg;' +
						'		</p>' +
						'	</div>' +
						'</div>';

						$('pmWeatherTom').update(detailsTomorrow);
						$('pmWeatherTom').show();

					}
				}
			}

			$('pmWeatherTab').update(detailsToday);
			$('pmWeatherTab').show();

		} else {
			MainLocalObj.Weather.displayElements('changeLoc'); //shouldn't happen
		}

		return detailsToday;
	},

	updateLocalNews: function(obj) {

		var ret = '';
		var max = 3;
		var chgStr = '';
		var displayStr = '';
		if (MainLocalObj.data.userSpecificData) {
			if (!MainLocalObj.internationalUser && (MainLocalObj.isProfilePage || MainLocalObj.isUSPage)) {
				max = 4;
			} else if (!MainLocalObj.internationalUser) {
				max = 3;
			}
		}
		for (var counter = 0; counter < obj.length; counter++) {
			var resultSet = obj[counter].ResultSet;
			if (parseInt(resultSet.statusCode) != 200 || resultSet.Result.length < 1) {
				if(MainLocalObj.isPoliticsPage) {
					ret += '<div class="cnn_pollocnotf">We didn\'t find any headlines for the location. Please try widening your search to a larger area for US locations. International cities are currently unavailable.</div>';
				} else {
					ret += '<li><span class="pmWeatherHollow">We didn\'t find any headlines for that location. Please try widening your search to a larger area for US locations. International cities are currently unavailable. <a href="javascript:MainLocalObj.Weather.displayElements(\'changeLoc\')">Edit your location</a> </span></li>';
				}
			} else {
				if (resultSet.country == "United States") {
					displayStr = resultSet.city + ', ' + resultSet.state;
				} else {
					displayStr = resultSet.country;
				}
				var result = resultSet.Result;
				for (var i = 0; i < result.length; i++) {
					if (i < max) {
						ret += '<li>' +
						'<a target="_blank" ';
						if(!MainLocalObj.isProfilePage){ ret += 'rel="nofollow" ';}
						ret += 'href="' + result[i].link + '" ';
						if (!MainLocalObj.internationalUser) {
							ret += 'onclick="' + MainLocalObj.Weather.omnitureStr + '" ';
						}
						ret += ' title="' + result[i].headline + '"><span class="pmHLBullet">&bull;</span>' + MainLocalObj.truncateString(result[i].headline, 81) + '</a>' +
						'<p><a target="_blank" href="' +
						result[i].sourceurl +
						'">' +
						MainLocalObj.truncateString(result[i].source, 46) +
						'</a></p>' +
						'</li>';
					}
				}
			}
		}

		if(MainLocalObj.isUSPage) { var htmlStr = 'More Neighborhood News from<a onclick="' + MainLocalObj.Weather.omnitureStr + '" href="' + resultSet.url + '" id="pmHeadlineSource" target="_blank"><img src="http://i.cdn.turner.com/cnn/.element/img/3.0/1px.gif" width="102" height="18" alt="" border="0"></a>'; }
		else if(MainLocalObj.isPoliticsPage) { var htmlStr = 'More Neighborhood News from<a onclick="' + MainLocalObj.Weather.omnitureStr + '" href="' + resultSet.url + '" id="pmHeadlineSource" target="_blank"><img src="http://i.cdn.turner.com/cnn/.element/img/3.0/1px.gif" width="102" height="18" alt="" border="0"></a>';}
		else { var htmlStr = 'More Neighborhood News from&nbsp;<a onclick="' + MainLocalObj.Weather.omnitureStr + '" href="' + resultSet.url + '" id="pmHeadlineSource" target="_blank">Outside.in</a>'; }


		$('pmWeatherHeadlinesList').update(ret);
		$('pmInfoSource').update(htmlStr);

		$('pmWeatherHeadlines').show();
		MainLocalObj.Weather.displayElements();

		return ret;

	},

	requestInternationalCityLookup: function(zip, loc, type) {
		var weatherArgs = 'mode=json_html&zipCode=' + zip;
		if (loc) {
			weatherArgs += '&locCode=' + loc;
		}
		if (MainLocalObj.internationalUser) {
			weatherArgs += '&celcius=true';
		}
		var callObj = {
			url: MainLocalObj.Weather.weatherURL,
			args: weatherArgs,
			domId: false,
			funcObj: MainLocalObj.Weather.updateInternationalCityData,
			breakCache: true
		};
		MainLocalObj.CSIManager.callObject(callObj, 'requestInternationalCityLookup');
	},

	updateInternationalCityData: function(obj, type) {

		var locCode = '';
		var zip = '';
		var locationName = '';
		if (obj && (obj.length > -1) && obj[0].location && obj[0].location.city) {
			locCode = obj[0].location.locCode;
			locationName = obj[0].location.city;
			if (obj[0].location.stateOrCountry) {
				locationName += ', ' + obj[0].location.stateOrCountry;
			}
			zip = obj[0].location.zip;
		}

		if (zip && locationName) {
			MainLocalObj.setLocationZip(type, zip);
			MainLocalObj.setLocationName(type, locationName);
			MainLocalObj.setLocationLocCode(type, locCode);
			MainLocalObj.setUserSpecificData(true);
			MainLocalObj.Weather.requestLocalAll();
		}

	},

	checkInput: function(inputMode, value) {
		//First remove any html/script tags
		value = value.replace(/<[^>]*?>/g, '');
		var qryArg = value.toUpperCase();

		var validatorUrl = 'http://weather.cnn.com/weather/citySearch';
		var validatorArgs = 'search_term=' + MainLocalObj.urlEncode(qryArg) + '&mode=json_html&filter=true';

		var callObj = {
			url: validatorUrl,
			args: validatorArgs,
			domId: MainLocalObj.urlEncode(inputMode + '|' + value),
			funcObj: MainLocalObj.Weather.updateValidationData,
			breakCache: true
		};
		MainLocalObj.CSIManager.callObject(callObj, 'checkInput');
	},

	updateValidationData: function(obj, idString) {

		var rawData = MainLocalObj.urlDecode(idString).split('|');
		var cleanValue = MainLocalObj.trimWS(rawData[1]);
		//Capitalize, buffer with spaces to match on whole words
		var preparedValue = ' ' + cleanValue.toUpperCase() + ' ';

		var locationObj = '';

		if (obj.length > 1) { // There are multiple matches. Weed out the one we want.
			var done = obj.length;
			var exactMatch = false;
			var noMatch = true;

			var possibleLocations = [];

			if (done > 50) {
				done = 50;
			} // Max cap of 50
			for (var i = 0; i < done; i++) {

				var match = obj[i].city + ', ' + obj[i].stateOrCountry;
				var objZip = obj[i].zip.toString();
				var objLocCode = obj[i].locCode;
				var newLocationObj = {};

				var preparedMatch = ' ' + MainLocalObj.trimWS(match.toUpperCase()) + ' ';

				if ((MainLocalObj.checkZip(cleanValue) && cleanValue == objZip) || (preparedValue == preparedMatch)) {
					newLocationObj.zip = objZip;
					newLocationObj.locCode = objLocCode;
					newLocationObj.name = match;
					possibleLocations.push(newLocationObj);
					noMatch = false;
					exactMatch = newLocationObj;
					i = done;
				} else {
					if (preparedMatch.indexOf(preparedValue) != -1) {
						newLocationObj.zip = objZip;
						newLocationObj.locCode = objLocCode;
						newLocationObj.name = match;
						possibleLocations.push(newLocationObj);
						noMatch = false;
					}
				}
			}//end for loop
			if (noMatch) {
				MainLocalObj.Weather.displayNoMatch(rawData[0], cleanValue);
			} else if (possibleLocations.length == 1 || exactMatch) {
				if (!exactMatch) {
					exactMatch = possibleLocations[0];
				}
				locationObj = {};
				locationObj.name = exactMatch.city + ', ' + exactMatch.stateOrCountry;
				locationObj.zip = exactMatch.zip.toString();
				locationObj.locCode = exactMatch.locCode;

				MainLocalObj.Weather.localUpdateData(locationObj.name, locationObj.zip, locationObj.locCode, rawData[0]);
				MainLocalObj.Weather.displayElements(rawData[0]);
			} else {
				// We have a bunch of possible locations.
				MainLocalObj.Weather.displayMultipleMatches(possibleLocations, MainLocalObj.urlDecode(rawData[1]), rawData[0]);
			}
		} else if ((obj.length == 1) && (obj[0] && obj[0].locCode && obj[0].locCode != '')) {
			var tmpObj = obj[0];
			locationObj = {};
			locationObj.name = tmpObj.city + ', ' + tmpObj.stateOrCountry;
			locationObj.zip = tmpObj.zip.toString();
			locationObj.locCode = tmpObj.locCode;

			MainLocalObj.Weather.localUpdateData(locationObj.name, locationObj.zip, locationObj.locCode, rawData[0]);
			MainLocalObj.Weather.displayElements(rawData[0]);
		} else {
			MainLocalObj.Weather.displayNoMatch(rawData[0], cleanValue);
		}
		return '';
	},

	displayMultipleMatches: function(obj, origVal, type) {

		var matches = [];
		var domesticMatches = [];
		var intlMatches = [];
		obj.each(function(val) {
			if (val.zip.length > 5) {
				intlMatches.push(val);
			} else {
				domesticMatches.push(val);
			}
		});

		matches = intlMatches.concat(domesticMatches);

		var val = $F('weatherLoc');
		var container = 'pmLocResultsContainer';

		var htmlStr = '<p id="pmWeatherResultMeta">We Found ' + matches.length + ' Results for &quot;<span id="resultLoc">' + origVal + '</span>&quot;</p>';
		htmlStr += '<ul id="pmWeatherResult">';

		for (var j = 0; j < matches.length; j++) {
			htmlStr += '<li><a href="javascript:void(0)" onclick="MainLocalObj.Weather.resetSearch(\'' + type + '\');' +
			'MainLocalObj.Weather.localUpdateData(\'' +
			matches[j].name +
			'\',\'' +
			matches[j].zip +
			'\',\'' +
			matches[j].locCode +
			'\',\'' +
			type +
			'\');"><span class="pmHLBullet">&bull;</span>' +
			matches[j].name +
			'</a></li>';
		}
		htmlStr += '</ul>';
		MainLocalObj.Weather.displayElements('displayResults');
		Element.update(container, htmlStr);
	},

	displayNoMatch: function(type, val) {

		var container = 'pmLocResultsContainer';


		var htmlStr = '<p id="pmWeatherResultMeta">We didn\'t find results  for &quot;<span id="resultLoc">' + val + '</span>&quot;</p>' +
			'<ul id="pmWeatherResult">' +
			'	<li><span class="pmHLBullet">&bull;</span><span>Check the spelling of your city name</span></li>' +
			'	<li><span class="pmHLBullet">&bull;</span><span>Make sure the U.S. ZIP code is accurate</span></li>' +
			'	<li><span class="pmHLBullet">&bull;</span><span>Use USPS for U.S. ZIP codes / city name</span></li>' +
			'</ul>';
		MainLocalObj.Weather.displayElements('displayResults');
		Element.update(container, htmlStr);
	},

	resetSearch: function(type) {

		var fieldName = 'weatherLoc';
		var container = 'pmLocResultsContainer';

		Element.update(container, '');
		$(fieldName).value = MainLocalObj.Weather.defaultMsg;
	}
};

MainLocalObj.Sports = {
	init: function() {

		MainLocalObj.Sports.leagues = {
			'NFL': {'sport': 'football', 'acronym': 'nfl', 'startMonth': 8, 'endMonth': 1},
			'NCAAF': {'sport': 'football', 'acronym': 'ncaa', 'startMonth': 8, 'endMonth': 1},
			'NCAAB': {'sport': 'basketball', 'acronym': 'ncaa', 'startMonth': 11, 'endMonth': 4},
			'MLB': {'sport': 'baseball', 'acronym': 'mlb', 'startMonth': 3, 'endMonth': 11},
			'NHL': {'sport': 'hockey', 'acronym': 'nhl', 'startMonth': 9, 'endMonth': 4},
			'NBA': {'sport': 'basketball', 'acronym': 'nba', 'startMonth': 10, 'endMonth': 5}
		};

		MainLocalObj.Sports.teamOverlayAreas = $('choseTeamsOverlayBox').select('.pmTeamInfo');

		//clear out if it's a refresh
		$('sportBtns').update('');
		$('pmScores').update('');
		$('pmNoGamesHeadlines').update('');

		//only add eventHandler once
		if (typeof MainLocalObj.Sports.isInitialized === 'undefined') {
			MainLocalObj.Sports.loadData();
		}

		MainLocalObj.Sports.maxGames = 2;
		MainLocalObj.Sports.isInitialized = true;

	},

	loadData: function() {

		var lastLeagueCookie = MainLocalObj.allCookies["pm.sports.lastLeague"] || null;
		var leaguesInSeason = [];

		//create array of leagues in season
		for (var i in MainLocalObj.Sports.leagues) {

			if (typeof MainLocalObj.Sports.leagues[i] === 'object') {

				var league = MainLocalObj.Sports.leagues[i];
				var curMonth = cnnCurrTime.getMonth()+1;
				var endYear;
				var startYear;

				if (league.endMonth < league.startMonth && league.startMonth > curMonth) {
					startYear = (cnnCurrTime.getFullYear() - 1);
				} else {
					startYear = cnnCurrTime.getFullYear();
				}

				if (league.endMonth < league.startMonth && curMonth >= league.startMonth && curMonth > league.endMonth) {
					endYear = (cnnCurrTime.getFullYear() + 1);
				} else {
					endYear = cnnCurrTime.getFullYear();
				}

				var startDate = new Date(league.startMonth + '/01/' + startYear);
				var endDate = new Date(league.endMonth + '/' + MainLocalObj.daysInMonth(league.endMonth, endYear) + '/' + endYear);

				if (cnnCurrTime >= startDate && cnnCurrTime <= endDate) {
					leaguesInSeason.push(i);
				}

			}
		}

		var y = 0;
		var leagueTabStyle = '';
		if (leaguesInSeason.length === 6) {
			leagueTabStyle = 'margin-right: 1px';
		}
		leaguesInSeason.each(function(league) {

			//check in season
			//add button with obj
			var a = new Element('a', {
				'id': league + 'btn',
				'style': leagueTabStyle,
				href: 'javascript: MainLocalObj.Sports.loadLeague(\'' + league + '\')'
			}).update('<span>' + league + '</span>');
			$('sportBtns').insert({
				bottom: a
			});

			//load the first leage in season
			if (y === 0 && lastLeagueCookie === null) {
				MainLocalObj.Sports.loadLeague(league);
			}

			y++;
		});

		if (lastLeagueCookie !== null) {
			MainLocalObj.Sports.loadLeague(lastLeagueCookie);
		}

	},

	loadLeague: function(link) {

		//adding stickyness
		CNN_setCookie('pm.sports.lastLeague', link, 24 * 30 * 12, '/', document.domain);

		//clear out HTML
		$('pmScores').update('');

		//setup click listener for overlay trigger
		$('pmSportsChooseBtn').stopObserving('click');
		$('pmSportsChooseBtn').observe('click', function() {
			MainLocalObj.Sports.toggleSportsOverlay(link);
		});

		var obj = MainLocalObj.Sports.leagues[link];
		MainLocalObj.Sports.displayElements(false, link);
		var callObj = {
			url: '/.element/ssi/auto/3.0/sect/MAIN/sports/' + obj.sport + '/' + obj.acronym + '/scoreboards/games.html',
			args: 'domains=cnn.com|turner.com',
			domId: false,
			funcObj: function(obj) {
				MainLocalObj.Sports.loadGames(obj, link);
			},
			breakCache: false
		};
		MainLocalObj.CSIManager.callObject(callObj, 'requestLeague' + obj.acronym);

	},

	loadGames: function(obj, link, team1, team2) {

		var league = MainLocalObj.Sports.leagues[obj[0].sport];
		var callObj;
		var team1 = false;
		var team2 = false;
		var linkLower = link.toLowerCase();
		var userGames = [];
		var team1Games = [];
		var team2Games = [];
		var nonUserGames = [];
		var x = 0;
		var y = 0;
		var z = 0;

		//update text strings and links
		$('moreLeagueLink').href = 'http://sportsillustrated.cnn.com/' + league.sport + '/' + league.acronym + '?xid=cnnwidget';
		$('moreLeagueLink').update('<span>More ' + obj[0].sport + '</span>');
		$('pmSlidebox').select('.leagueChoose').each(function(val) {
			val.update(obj[0].sport);
		});

		//clear out
		$('pmScores').update('');
		$('pmNoGamesHeadlines').update('');

		//get any saved teams
		if (typeof MainLocalObj.data.sports[linkLower] !== 'undefined') {
			if (typeof MainLocalObj.data.sports[linkLower].team1 !== 'undefined' && MainLocalObj.data.sports[linkLower].team1 !== '') {
				team1 = MainLocalObj.data.sports[linkLower].team1;
			}
			if (typeof MainLocalObj.data.sports[linkLower].team2 !== 'undefined' && MainLocalObj.data.sports[linkLower].team2 !== '') {
				team2 = MainLocalObj.data.sports[linkLower].team2;
			}
		}

		//set choose / edits
		var chooseEdits = $('pmContainer').select('.pmOverlayChooseEdit');
		if (team1 || team2) {
			chooseEdits.each(function(val) {
				val.update('Edit');
			});
		} else {
			chooseEdits.each(function(val) {
				val.update('Choose');
			});
		}

		if (obj[0].games.length || team1 || team2) {

			$('pmScores').show();
			$('pmNoGames').hide();

			//first check for games by our saved teams
			for (var i in obj[0].games) {
				val = obj[0].games[i];
				if (typeof val !== 'object') {
					continue;
				}
				if ((team1 && (val.home.short_name == team1 || val.visitor.short_name == team1)) || (team2 && (val.home.short_name == team2 || val.visitor.short_name == team2))) {
					if (team1 && (val.home.short_name == team1 || val.visitor.short_name == team1)) {
						team1Games[x] = val;
						x++;
					} else if (team2 && (val.home.short_name == team2 || val.visitor.short_name == team2)) {
						team2Games[y] = val;
						y++;
					}
				} else {
					nonUserGames[z] = val;
					z++;
				}
			}

			//concat teams arrays
			userGames = team1Games.concat(team2Games);

			//check if individual teams have games, if not pop empty team in array
			for (var i = 1; i <= MainLocalObj.Sports.maxGames; i++) {
				if (typeof MainLocalObj.data.sports[linkLower] !== 'undefined' && MainLocalObj.data.sports[linkLower]['team' + i] !== '') {
					if (eval('team' + i + 'Games').length === 0) {
						userGames.push([{
							sport: {
								type: link,
								game: {
									state: false,
									home: {
										three_letter_abrv: false,
										four_letter_abrv: false,
										short_name: MainLocalObj.data.sports[linkLower]['team' + i],
										full_name: MainLocalObj.data.sports[linkLower]['team' + i + 'Name'],
										score: ''
									},
									visitor: {
										three_letter_abrv: false,
										four_letter_abrv: false,
										short_name: false,
										full_name: false,
										rank: false,
										score: ''
									}
								}
							}
						}]);
					}
				}
			}

			//concat, trim up array
			displayGames = userGames.concat(nonUserGames);
			displayGames.splice(MainLocalObj.Sports.maxGames, displayGames.length - MainLocalObj.Sports.maxGames);

			//left this is loop as I originally wrote it, in case we add more spaces for games later.
			displayGames.each(function(val, index) {
				//testing for val[0] only exists in the 'nogames' version
				if (typeof val[0] != 'undefined') {
					MainLocalObj.Sports.populateScoreBoard(val);
				} else {
					var splitUrl = val.url.split('/').reverse();

					//workaround for NCAAB, if happens more than once I'll work into config above
					if (league.sport === 'basketball' && league.acronym === 'ncaa') {
						var acronym = league.acronym + '/men';
					} else {
						var acronym = league.acronym;
					}

					callObj = {
						url: '/.element/ssi/auto/3.0/sect/MAIN/sports/' + league.sport + '/' + acronym + '/' + splitUrl[3] + '/' + splitUrl[2] + '/' + splitUrl[1] + '/' + val.id + '.html',
						args: 'domains=cnn.com|turner.com',
						domId: false,
						funcObj: function(obj) {
							MainLocalObj.Sports.populateScoreBoard(obj, val.home.short_name, val.visitor.short_name, splitUrl);
						},
						breakCache: true
					};
					MainLocalObj.CSIManager.callObject(callObj, 'requestGame' + val.id);
				}
			});
		} else {
			$('pmScores').hide();
			$('pmNoGames').show();
			callObj = {
				url: '/.element/ssi/auto/3.0/sect/MAIN/sports/headlines/' + obj[0].sport.toLowerCase() + '_csi.html',
				args: 'domains=cnn.com|turner.com',
				domId: 'pmNoGamesHeadlines',
				funcObj: false,
				breakCache: true
			};
			MainLocalObj.CSIManager.callObject(callObj, 'requestHeadlines' + league.acronym);
		}
	},

	populateScoreBoard: function(obj, homeShortName, visitorShortName, splitUrl) {

		if (typeof homeShortName === 'undefined') {
			homeShortName = obj[0].sport.game.home.short_name;
		}
		if (typeof visitorShortName === 'undefined') {
			visitorShortName = obj[0].sport.game.visitor.short_name;
		}
		if (typeof splitUrl === 'undefined') {
			splitUrl = null;
		}

		function formatTruncated(str, state, league) {
			str = MainLocalObj.trimWS(str);
			if ((typeof state !== 'boolean' && str.length > 8) || (typeof state !== 'boolean' && league == 'NCAAF')) {
				str = str.substr(0, 8) + '...';
			} else {
				var words = str.split(' ');
				if (words[1].length < 4 && typeof words[2] != 'undefined' && words[2].length < 4 && words.length > 3) {
					str = words[0] + ' ' + words[1] + ' ' + MainLocalObj.trimWS(words[2]) + '...';
				} else if ((words[1].length >= 4 || typeof words[2] != 'undefined' && words[2].length >= 4) && words.length > 2) {
					str = words[0] + ' ' + MainLocalObj.trimWS(words[1]) + '...';
				}
			}
			return str;
		}

		function createLink(game, type, splitUrl) {

			var hrefPRE;
			var hrefIP;
			var type;
			var str;
			var hrefTemplate = false;
			var href = false;
			var link = '';
			var gameDat;

			//choose link format
			switch (type) {
				case 'NFL':
					hrefPRE = '/football/nfl/gameflash/#{yyyy}/#{mm}/#{dd}/#{gameId}_preview.html';
					hrefIP = '/football/nfl/gameflash/#{yyyy}/#{mm}/#{dd}/#{gameId}_boxscore.html';
				break;
				case 'NCAAF':
					hrefPRE = '/football/ncaa/gameflash/#{yyyy}/#{mm}/#{dd}/#{gameId}_preview.html';
					hrefIP = '/football/ncaa/gameflash/#{yyyy}/#{mm}/#{dd}/#{gameId}_boxscore.html';
				break;
				case 'MLB':
					hrefPRE = '/baseball/mlb/gameflash/#{yyyy}/#{mm}/#{dd}/#{gameId}_preview.html';
					hrefIP = '/baseball/mlb/gameflash/#{yyyy}/#{mm}/#{dd}/#{gameId}_boxscore.html';
				break;
				case 'NHL':
					hrefPRE = '/hockey/nhl/gameflash/#{yyyy}/#{mm}/#{dd}/#{gameId}_preview.html';
					hrefIP = '/hockey/nhl/gameflash/#{yyyy}/#{mm}/#{dd}/#{gameId}_boxscore.html';
				break;
				case 'NBA':
					hrefPRE = '/basketball/nba/gameflash/#{yyyy}/#{mm}/#{dd}/#{gameId}_preview.html';
					hrefIP = '/basketball/nba/gameflash/#{yyyy}/#{mm}/#{dd}/#{gameId}_boxscore.html';
			 	break;
				case 'NCAAB':
					hrefPRE = '/basketball/ncaa/men/gameflash/#{yyyy}/#{mm}/#{dd}/#{gameId}_preview.html';
					hrefIP = '/basketball/ncaa/men/gameflash/#{yyyy}/#{mm}/#{dd}/#{gameId}_boxscore.html';
				break;
			}

			//choose link template
			switch (game.state) {
				case 'PRE':
					str = 'Upcoming<br>' + game.time;
					hrefTemplate = new Template(hrefPRE);
				break;
				case 'IP':
					str = game.status;
					if (str === 'F') {
						str = 'Final';
					}
					hrefTemplate = new Template(hrefIP);
				break;
				default:
					str = 'No scheduled games<br>in next 24 hours';
				break;
			}

			//parse template
			if (hrefTemplate) {
				//setup href data
				if (splitUrl === null) {
					splitUrl = game.url.split('/').reverse();
				}
				var hrefData = {
					yyyy: splitUrl[3],
					mm: splitUrl[2],
					dd: splitUrl[1],
					gameId: game.id
				};
				href = hrefTemplate.evaluate(hrefData);
			}

			if (href) {
				var title = str.replace(/(<([^>]+)>)/ig, ' ');
				link += '<a href="http://sportsillustrated.cnn.com' + href + '?xid=cnnwidget' + '" title="' + title + '">';
			}
			link += str;
			if (href) {
				link += '</a>';
			}

			return link;
		}

		var league = MainLocalObj.Sports.leagues[obj[0].sport.type];

		//workaround for team link NCAAB anomaly
		if (league.acronym === 'ncaa' && league.sport === 'basketball') {
			var leagueAcronym = league.acronym + '/men';
		} else {
			var leagueAcronym = league.acronym;
		}

		var game = obj[0].sport.game;

		var scoreBoard = '' +
		'<li class="top">' +
		'	<div id="pmGame1" class="pmGame">' +
		'		<div class="pmScoreSide">' +
		'			<span class="top">' +
		'				<div id="pmGame1Team1" class="pmGameTeam">' +
		'					<a title="' +
		game.home.full_name +
		'" href="http://sportsillustrated.cnn.com/' +
		league.sport +
		'/' +
		leagueAcronym +
		'/teams/' +
		homeShortName +
		'?xid=cnnwidget">';

		if (typeof game.home.rank != 'undefined' && game.home.rank != '') {
			scoreBoard += '(' + game.home.rank + ')&nbsp;';
		}

		if (typeof game.home.four_letter_abrv !== 'undefined' && game.home.four_letter_abrv) {
			scoreBoard += game.home.four_letter_abrv.toUpperCase();
		} else if (typeof game.home.three_letter_abrv !== 'undefined' && game.home.three_letter_abrv) {
			scoreBoard += game.home.three_letter_abrv.toUpperCase();
		} else {
			scoreBoard += formatTruncated(MainLocalObj.trimWS(game.home.full_name), game.state, obj[0].sport.type);
		}

		scoreBoard += '</a>' +
		'				</div>' +
		'				<div id="pmGame1Score1" class="pmGameScore">' +
		game.home.score +
		'</div>' +
		'			</span>' +
		'			<span>' +
		'				<div id="pmGame1Team2" class="pmGameTeam">' +
		'					<a title="' +
		game.visitor.full_name +
		'" href="http://sportsillustrated.cnn.com/' +
		league.sport +
		'/' +
		leagueAcronym +
		'/teams/' +
		visitorShortName +
		'?xid=cnnwidget">';

		if (typeof game.visitor.rank != 'undefined' && game.visitor.rank != '') {
			scoreBoard += '(' + game.visitor.rank + ')&nbsp;';
		}

		if (typeof game.visitor.four_letter_abrv !== 'undefined' && game.visitor.four_letter_abrv) {
			scoreBoard += game.visitor.four_letter_abrv.toUpperCase();
		} else if (typeof game.visitor.three_letter_abrv !== 'undefined' && game.visitor.three_letter_abrv) {
			scoreBoard += game.visitor.three_letter_abrv.toUpperCase();
		} else if (game.visitor.full_name) {
			scoreBoard += formatTruncated(MainLocalObj.trimWS(game.visitor.full_name), game.state, obj[0].sport.type);
		}

		scoreBoard += '</a>' +
		'				</div>' +
		'				<div id="pmGame1Score2" class="pmGameScore">' +
		game.visitor.score +
		'</div>' +
		'			</span>' +
		'		</div>' +
		'		<div id="pmGame1TimeSide" class="pmTimeSide">' +
		'			<p>';

		scoreBoard += createLink(game, obj[0].sport.type, splitUrl);

		scoreBoard += '			</p>' +
		'		</div>' +
		'	</div>' +
		'</li>';

		$('pmScores').innerHTML += scoreBoard;

	},

	displayElements: function(state, league) {

		if (typeof state === 'undefined') {
			state = false;
		}
		if (typeof league === 'undefined') {
			league = false;
		}

		//sort out buttons and listeners
		$('sportBtns').select('a').each(function(val) {
			//setup highlights
			if (val.id == league + 'btn') {
				val.addClassName('pmOn');
			} else {
				val.removeClassName('pmOn');
			}
		});
	},

	populateTeamOverlay: function(obj, league) {

		var team1 = '';
		var team2 = '';
		var selected = '';
		var selectedTeam = false;
		var hasTeam;

		//two team areas
		MainLocalObj.Sports.teamOverlayAreas.each(function(val, index) {

			var itemNum = (index + 1);
			val.update('');

			if (typeof MainLocalObj.data.sports[league] !== 'undefined') {
				if (MainLocalObj.data.sports[league]['team' + itemNum] !== 'undefined' && MainLocalObj.data.sports[league]['team' + itemNum] !== '') {
					eval('team' + itemNum + ' = MainLocalObj.data.sports[league].team' + itemNum);
					hasTeam = true;
				} else {
					hasTeam = false;
				}
			}

			var teamDataStr = '<form name="chooseTeam' + index + '" class="chooseTeam" action="">' +
			'	<select name="team' +
			index +
			'"class="pmTeamChoose">';

			//allow blank in second option
			teamDataStr += '	<option></option>';

			for (var y in obj) {
				team = obj[y];
				if (typeof team !== 'object') {
					continue;
				}
				if (eval('team' + itemNum + ' == team.TEAM_URL_NM')) {
					selected = ' selected="selected"';
					selectedTeam = team;
				} else {
					selected = '';
				}

				if (itemNum > 1 && team1 === team.TEAM_URL_NM) {
					//skip
				} else {
					teamDataStr += '	<option' + selected + ' value="' + team.TEAM_URL_NM + '">' + team.TEAM_DSPLY_NM + '</option>';
				}
			}
			teamDataStr += '</select>' +
			'</form>' +
			'<div class="pmTeamNameRow">' +
			'	<div class="pmTeamName">';

			if (selectedTeam) {
				teamDataStr += selectedTeam.TEAM_DSPLY_NM;
			}

			teamDataStr += '</div>' +
			'	<div class="pmEditTeam"><a href="javascript: MainLocalObj.Sports.changeSavedTeam(' +
			index +
			')" title="change">change</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="javascript: MainLocalObj.Sports.deleteSavedTeam(\'' +
			league +
			'\', \'' +
			selectedTeam.TEAM_URL_NM +
			'\')" title="delete">delete</a></div>' +
			'</div>';

			//update div
			val.update(teamDataStr);

			//show/hide logic
			if (hasTeam) {
				val.select('form.chooseTeam')[0].hide();
				val.select('div.pmTeamNameRow')[0].show();
			} else {
				val.select('form.chooseTeam')[0].show();
				val.select('div.pmTeamNameRow')[0].hide();
			}

		});

	},

	saveTeams: function(league) {
		var chosenTeam;
		var chosenSelect;
		MainLocalObj.Sports.teamOverlayAreas.each(function(val, index) {
			delete chosenTeam;
			chosenSelect = val.select('select.pmTeamChoose')[0];
			chosenTeam = chosenSelect.options[chosenSelect.selectedIndex].value;
			chosenTeamName = chosenSelect.options[chosenSelect.selectedIndex].text;
			if (typeof MainLocalObj.data.sports[league] === 'undefined') {
				MainLocalObj.data.sports[league] = {};
			}
			MainLocalObj.data.sports[league]['team' + (index + 1)] = chosenTeam;
			MainLocalObj.data.sports[league]['team' + (index + 1) + 'Name'] = chosenTeamName;
		});
		MainLocalObj.saveData();
		MainLocalObj.Sports.toggleSportsOverlay();
		MainLocalObj.Sports.loadLeague(league.toUpperCase());
	},

	changeSavedTeam: function(i) {
		MainLocalObj.Sports.teamOverlayAreas[i].select('form.chooseTeam')[0].show();
		MainLocalObj.Sports.teamOverlayAreas[i].select('div.pmTeamNameRow')[0].hide();
	},

	deleteSavedTeam: function(league, team) {

		if (typeof MainLocalObj.data.sports[league].team1 !== 'undefined' && MainLocalObj.data.sports[league].team1 === team) {
			MainLocalObj.data.sports[league].team1 = '';
		}

		if (typeof MainLocalObj.data.sports[league].team2 !== 'undefined' && MainLocalObj.data.sports[league].team2 === team) {
			MainLocalObj.data.sports[league].team2 = '';
		}

		//save updated data
		MainLocalObj.saveData();

		//reload overlay
		MainLocalObj.Sports.toggleSportsOverlay();
		MainLocalObj.Sports.toggleSportsOverlay(league);

	},

	toggleSportsOverlay: function(league) {

		if (typeof league === 'undefined') {
			league = '';
		}

		//init overlay
		var choseTeamsOverlayBox = $('choseTeamsOverlayBox');
		var is_set = choseTeamsOverlayBox.getStyle('display');
		var doc_height = document.viewport.getHeight() + "px";
		var doc_width = document.viewport.getWidth() + "px";
		var posSource = $('pmContainer');

		if (is_set === "none") {

			if (ms_isLoggedIn() !== true) {
				showOverlay('profile_signin_overlay');
			} else {

				var saveTeamsBtn = choseTeamsOverlayBox.select('.pmSaveBtn')[0];
				saveTeamsBtn.stopObserving('click');
				saveTeamsBtn.href = 'javascript: void(0);';
				saveTeamsBtn.observe('click', function() {
					MainLocalObj.Sports.saveTeams(league.toLowerCase());
				});

				//load team data
				callObj = {
					url: '/.element/ssi/www/sect/3.0/MAIN/sports/teams/' + league.toLowerCase() + '.html',
					args: 'domains=cnn.com|turner.com',
					domId: 'false',
					funcObj: function(obj) {
						MainLocalObj.Sports.populateTeamOverlay(obj, league.toLowerCase());
					},
					breakCache: true
				};
				MainLocalObj.CSIManager.callObject(callObj, 'requestTeamData' + league);

				//continue setting up overlay
				$('choseTeamsOverlay').setStyle({
					display: 'block',
					height: doc_height,
					width: doc_width,
					opacity: 0.5
				});
				choseTeamsOverlayBox.setStyle({
					display: 'block'
				});
				//choseTeamsOverlayBox.absolutize();
				if (MainLocalObj.old_ie == true) {
					choseTeamsOverlayBox.setStyle({
						margin: '0 0 0 -20px',
						top: '1px'
					}); // end of accounting for the IE clone position Bug
				} else {
					choseTeamsOverlayBox.clonePosition(posSource, {
						setHeight: false
					});
					choseTeamsOverlayBox.setStyle({
						margin: '0 0 0 1px',
						top: '1px'
					});
				}
			}
		} else if (is_set == "block") {
			$('choseTeamsOverlay').setStyle({
				display: 'none'
			});
			choseTeamsOverlayBox.setStyle({
				display: 'none'
			});
		} else {
			return false;
		}
	}
};

MainLocalObj.Markets = {
	redirectSymbol: false,
	init: function() {

		var adTag;

		this.defaultMsg = 'Enter Symbol';
		this.errorMsg = 'No match. Please enter a new symbol.';

		if (MainLocalObj.internationalUser) {
			//set adTag
			adTag = '/cnnintl_adspaces/3.0/homepage/spon.88x31_worldbiz.ad';
		} else {
			//set adTag
			adTag = '/cnn_adspaces/3.0/homepage/spon2.126x31.ad';
		}

		//load in ad
		new Ajax.Updater('moneySponsor', adTag, {
			method: 'get',
			evalScripts: true
		});

		//setup buttons
		MainLocalObj.Markets.togBtns = $('pmMarkets').select('a.toggle');
		var lastIndexCookie = MainLocalObj.allCookies["pm.markets.lastIndex"] || null;
		if (lastIndexCookie !== null && $(lastIndexCookie)) {
			if (lastIndexCookie === 'myQuotesBtn' && !ms_isLoggedIn()) {
				var lastIndexCookie = 'defIndexBtn';
			}
			MainLocalObj.Markets.setActiveIndex($(lastIndexCookie), MainLocalObj.Markets.togBtns);
		}
		MainLocalObj.Markets.togBtns.each(function(val) {
			val.observe('click', function() {
				MainLocalObj.Markets.setActiveIndex(val, MainLocalObj.Markets.togBtns);
			});
		});

		if (typeof MainLocalObj.Markets.isInitialized === 'undefined') {
			if (!MainLocalObj.internationalUser) {
				MainLocalObj.Markets.fetchStockQuotes();
			}
		}

		if (!MainLocalObj.internationalUser) {
			var searchQuote = $('searchQuote');
			searchQuote.addClassName('pmWeatherHollow');
			searchQuote.value = 'Enter Symbol';

			//setup symbol lookup
			if (!MainLocalObj.disableSymbolLookup) {
				MainLocalObj.Markets.symbLookup = new AutoComplete('searchQuote', 'http://markets.money.cnn.com/services/cnndotcom/lookup.asp');
			}

		}

		MainLocalObj.Markets.isInitialized = true;
	},

	setActiveIndex: function(val, togBtns) {
		togBtns.each(function(v) {

			var marketDiv;

			//two workarounds to find corresponding div
			if (v.id === 'myQuotesBtn') {
				marketDiv = 'pmMyQuotes';
			} else if (v.id === 'defIndexBtn') {
				marketDiv = 'pmDefaultIndecies';
			} else {
				marketDiv = v.id.replace('Btn', '');
			}

			if (v.id === val.id) {
				v.removeClassName('togOff').addClassName('togOn');
				$(marketDiv).removeClassName('pmOff').addClassName('pmOn');
				CNN_setCookie('pm.markets.lastIndex', val.id, 24 * 30 * 12, '/', document.domain);
			} else {
				v.removeClassName('togOn').addClassName('togOff');
				$(marketDiv).removeClassName('pmOn').addClassName('pmOff');
			}

		});

		//make a backup
		MainLocalObj.data.prevStockSymbols = MainLocalObj.data.stockSymbols.slice();

		if ($('searchQuote')) {
			if ($('searchQuote').hasClassName('errorColor')) {
				$('searchQuote').removeClassName('errorColor');
			}
			$('searchQuote').value = '';
		}

		if (!MainLocalObj.internationalUser) {
			MainLocalObj.Markets.inputBlur($('searchQuote'));
		}
	},

	lookupStockSymbol: function() {
		//grab symbol
		var symbol = $F('searchQuote');

		if (symbol === MainLocalObj.Markets.defaultMsg) {
			MainLocalObj.Markets.inputBlur($('searchQuote'));
		} else if (symbol !== '') {
			this.redirectSymbol = true;
			
			var lookupStockSymbols = [];

			//swap tab
			MainLocalObj.Markets.setActiveIndex($('myQuotesBtn'), MainLocalObj.Markets.togBtns);

			//clean up, convert to upper
			symbol = symbol.replace(/[^a-zA-Z 0-9]+/g,'');
			symbol = symbol.toUpperCase();

			//if exists, remove
			if (MainLocalObj.data.stockSymbols.indexOf(symbol) != '-1') {
				lookupStockSymbols = MainLocalObj.data.stockSymbols.without(symbol);
			} else {
				lookupStockSymbols = MainLocalObj.data.stockSymbols.slice();
			}

			//push symbol onto array
			lookupStockSymbols.push(symbol);
			lookupStockSymbols.reverse();
			lookupStockSymbols = lookupStockSymbols.slice(0,3);
			lookupStockSymbols.reverse();
			MainLocalObj.Markets.fetchStockQuotes(lookupStockSymbols);

		}
	},

	fetchStockQuotes: function(lookupStockSymbols) {

		var stockSymbols;

		//resets
		if (typeof lookupStockSymbols === 'undefined') {
			lookupStockSymbols = false;
		}
		
		//dont blank out when redirecting after a lookup
		if(!MainLocalObj.Markets.redirectSymbol) { $('pmMyQuotes').update(''); }
		
		if ($('searchQuote')) { $('searchQuote').blur(); }

		//choose symbol entered, or saved data
		if (lookupStockSymbols) {
			stockSymbols = lookupStockSymbols.join();
		} else if (typeof MainLocalObj.data.stockSymbols === 'object' && MainLocalObj.data.stockSymbols.length > 0) {
			stockSymbols = MainLocalObj.data.stockSymbols.join();
		} else {
			MainLocalObj.data.stockSymbols = [];
			stockSymbols = '';
		}

		if (stockSymbols.length > 0) {

			var callObj = {
				url: 'http://markets.money.cnn.com/services/cnndotcom/quote.asp',
				args: 'symbols=' + stockSymbols.replace(/,/g,'|') + '&domains=cnn.com|turner.com',
				domId: false,
				funcObj: MainLocalObj.Markets.parseQuotes,
				breakCache: true
			};
			MainLocalObj.CSIManager.callObject(callObj, 'requestMyQuotes');

		} else {
			MainLocalObj.Markets.inputBlur($('searchQuote'));
		}
	},

	parseQuotes: function(obj) {

		var quoteHtml, plusMinQuote;
		var successfulLookups = [];
		var wasError = false;
		var input = $('searchQuote');
		var quotes = obj.quotes.quote;
		if(!MainLocalObj.Markets.redirectSymbol)
		{
			$('pmMyQuotes').update('<ul></ul>');
		}
		var quoteList = $('pmMyQuotes').select('ul')[0];

		var quoteTemplate = new Template(' \
			<li class="market-#{index}"> \
			    <div class="marketInfo-left"> <!-- left side --> \
			        <span class="marketName"><a href="http://money.cnn.com/quote/quote.html?symb=#{symbol}">#{symbol}</a></span>&nbsp;&nbsp; \
			        <span class="marketIndex">#{last}</span> \
			        <a class="removeSymbLookup" href="javascript:MainLocalObj.Markets.removeQuote(#{index})" title="Remove">Remove</a> \
			    </div> \
			    <div class="marketNums-right #{plusMinClass}"> \
			        <div class="percentDiff"> \
			            <span>(<span class="plusMinus">#{plusMin}</span>#{changePct} &#37;)</span> \
			        </div> \
			        <div class="numDiff"> \
			            <span><span class="plusMinus">#{plusMin}</span>#{change}</span> \
			        </div> \
			    </div> \
			</li> \
		');

		function padWithZeros(roundedNum, decimalPlaces) {
			var valueString = roundedNum.toString();
			var decimalLocation = valueString.indexOf(".");
			if (decimalLocation == -1) {
				decimalPartLength = 0;
				valueString += decimalPlaces > 0 ? "." : "";
			} else {
				decimalPartLength = valueString.length - decimalLocation - 1;
			}
			var padTotal = decimalPlaces - decimalPartLength;
			if (padTotal > 0) {
				for (var i = 1; i <= padTotal; i++) {
					valueString += "0";
				}
			}
			return valueString;
		}

		function roundTwoDecimals(num) {
			var roundedNum = Math.round(num*100)/100;
			roundedNum = padWithZeros(roundedNum, 2);
			roundedNum = roundedNum.replace('-','');
			return roundedNum;
		}

		function determinePlusMinQuote(quote) {
			var plusMinQuote = {};
			if (quote.change.indexOf('-') > -1) {
				plusMinQuote.plusMin = '-';
				plusMinQuote.plusMinClass = 'down';
			} else if (parseInt(quote.last)===0) {
				plusMinQuote.plusMin = '';
				plusMinQuote.plusMinClass = '';
			} else {
				plusMinQuote.plusMin = '+';
				plusMinQuote.plusMinClass = 'up';
			}

			return plusMinQuote;
		}

		if(MainLocalObj.Markets.redirectSymbol)
		{		
			if (quotes[quotes.length-1].status !== '-1') 
			{
				location.href = 'http://money.cnn.com/quote/quote.html?symb='+quotes[quotes.length-1].cnnSymbol;
				return;				
			}
		}
		
		for (var key in quotes) {
			if(typeof(quotes[key].change) == 'undefined') continue;
			if (quotes[key].status === '-1' || quotes[key].cnnSymbol === 'undefined') {
				wasError = true;
			} else {
				if(!MainLocalObj.Markets.redirectSymbol)
				{
					//http://www.prototypejs.org/api/template
					plusMinQuote = determinePlusMinQuote(quotes[key]);
					quoteHtml = quoteTemplate.evaluate({
							index: (parseInt(key)+1),
							symbol: quotes[key].cnnSymbol,
							last: roundTwoDecimals(quotes[key].last),
							changePct: roundTwoDecimals(quotes[key].changePct),
							change: roundTwoDecimals(quotes[key].change),
							plusMin: plusMinQuote.plusMin,
							plusMinClass: plusMinQuote.plusMinClass
						});
					quoteList.insert({
						top: quoteHtml
					});
	
					successfulLookups.push(quotes[key].cnnSymbol);		
				}			
			}
		}

		if (wasError) {
			//set error decoration
			input.addClassName('errorColor');
			input.value = MainLocalObj.Markets.errorMsg;
			MainLocalObj.Markets.redirectSymbol = false;
			MainLocalObj.Markets.fetchStockQuotes(MainLocalObj.data.prevStockSymbols);
		} else {
			//MainLocalObj.data.prevStockSymbols = successfulLookups;
			MainLocalObj.data.stockSymbols = successfulLookups;
			MainLocalObj.saveData(true);
		}

		MainLocalObj.Markets.symbLookup.hide();
		MainLocalObj.Markets.symbLookup.stopLookup = true;
		MainLocalObj.Markets.fixBorders();			
	},

	inputFocus: function(e) {
		if (e.value === MainLocalObj.Markets.defaultMsg || e.value === MainLocalObj.Markets.errorMsg) {
			if (e.hasClassName('errorColor')) {
				e.removeClassName('errorColor');
			}
			e.value = ''
		}
		e.removeClassName('pmWeatherHollow');
	},

	inputBlur: function(e) {
		if (e.value === '') {
			e.value = MainLocalObj.Markets.defaultMsg;
			e.addClassName('pmWeatherHollow');
		}
	},

	fixBorders: function() {
		var quotes = $('pmMyQuotes').select('li');
		if (quotes.length) {
			quotes[quotes.length - 1].addClassName('last');
		}
	},

	removeQuote: function(item) {
		var lookup = $('pmMyQuotes').select('li.market-' + item)[0];
		lookup.remove();

		//fix borders
		MainLocalObj.Markets.fixBorders();

		//delete from data
		MainLocalObj.data.stockSymbols = MainLocalObj.data.stockSymbols.without(MainLocalObj.data.stockSymbols[item-1]);
		MainLocalObj.saveData();

	}
};

var AutoComplete = Class.create({
	selector: null,
	input: null,
	_timeout: null,
	visible: false,
	drawn: false,
	_hideTimeout: null,
	options: null,
	stopLookup: false,
	initialize: function(input, action, options) {
		this.action = action;
		this.input = $(input);
		this.input.autocomplete = "off";
		this.options = new AutoComplete.Options(options || {});
		this.selector = document.createElement('select');

		Event.observe(this.input, 'focus', this._onInputFocus.bindAsEventListener(this));
		//Event.observe(this.input, 'keyup', this._onInputKeyUp.bindAsEventListener(this));
		Event.observe(this.input, 'keydown', this._onInputKeyDown.bindAsEventListener(this));
		Event.observe(this.input, 'blur', this._onInputBlur.bindAsEventListener(this));
		Event.observe(this.selector, 'blur', this._onSelectorBlur.bindAsEventListener(this));
		Event.observe(this.selector, 'focus', this._onSelectorFocus.bindAsEventListener(this));
		Event.observe(this.selector, 'change', this._onSelectorChange.bindAsEventListener(this));

		Event.observe(window, 'resize', this._reposition.bind(this));
		Event.observe(window, 'scroll', this._reposition.bind(this));
	},

	_onInputFocus: function(event) {
		this._onSelectorFocus(event);
		MainLocalObj.Markets.inputFocus(this.input);
	},

	_onSelectorBlur: function(event) {
		this._onInputBlur(event);
	},

	_onInputBlur: function(event) {
		this._hideTimeout = setTimeout(this._checkOnBlur.bind(this), 100);
		//MainLocalObj.Markets.inputBlur(this.input);
	},

	_checkOnBlur:function() {
		this._hideTimeout = null
		this.hide();
	},

	_onInputKeyUp: function(event) {
		this._suggest(event)
			&& Event.stop(event);
	},

	_onInputKeyDown: function(event) {
		this._suggest(event)
			&& Event.stop(event);
	},

	_onSelectorFocus: function(event) {
		if(this._hideTimeout) {
			clearTimeout(this._hideTimeout);
			this._hideTimeout = null;
		}
	},

	_onSelectorChange: function(event) {
		this.select();
	},

	draw: function() {
		if(this.drawn) return;
		if (this.options.cssClass) {
			this.selector.className = this.options.cssClass;
		}
		Element.setStyle(this.selector, {
			display: 'none',
			position: 'absolute'
		});
		this.selector.size = this.options.size;
		document.body.appendChild(this.selector);
		this.input.autocomplete = 'off';
		this.drawn = true;
	},

	hide: function() {
		if(!this.drawn || !this.visible) return;
		this.visible = false;
		if(window.Scriptaculous) {
			new Effect.BlindUp(this.selector, {
				duration: this.options.delay,
				queue: 'end',
				afterFinish: function(event){
					Element.setStyle(this.selector,{
						display: 'none'
					});
					this.selector.options.length = 0;
					setTimeout(this._restoreFocus.bind(this),50);
				}.bind(this)
			});
		} else {
			Element.setStyle(this.selector,{
				display: 'none'
			});
			this.selector.options.length = 0;
			// FF hack, wasn't selecting without this small delay for some reason
			setTimeout(this._restoreFocus.bind(this),50);
		}
	},

	_restoreFocus: function() {
		this.input.focus();
	},

	show: function() {
		if(!this.drawn) this.draw();
		var trigger = null;
		if(this.selector.options.length) {
			if(window.Scriptaculous) {
				new Effect.BlindDown(this.selector,{
					duration: this.options.delay,
					queue: 'end'
				});
			} else {
				Element.setStyle(this.selector,{
					display: 'inline'
				});
			}
			this._reposition();
			this.visible = true;
		}
	},

	_cancelTimeout: function() {
		if(this._timeout) {
			clearTimeout(this._timeout);
			this._timeout = null;
		}
	},

	_suggest: function(event) {
		this._cancelTimeout();
		var key = Event.keyPressed(event);
		var ignoreKeys = [
			20, // caps lock
			16, // shift
			17, // ctrl
			91, // Windows key
			121, // F1 - F12
			122,
			123,
			124,
			125,
			126,
			127,
			128,
			129,
			130,
			131,
			132,
			45, // Insert
			36, // Home
			35, // End
			33, // Page Up
			34, // Page Down
			144, // Num Lock
			145, // Scroll Lock
			44, // Print Screen
			19, // Pause
			93, // Mouse menu key
		];
		if (ignoreKeys.indexOf(key) > -1) {
			return false;
		}

		switch(key) {
			case Event.KEY_LEFT:
			case Event.KEY_RIGHT:
				return false;
			break;
			case Event.KEY_TAB:
			case Event.KEY_BACKSPACE:
			case 46: //Delete
				this.cancel();
				return false;
			break;
			case Event.KEY_RETURN:
				if (this.visible && this.selector.selectedIndex != '-1') {
					this.select();
					return true;
				} else {
					return false;
				}
			break;
			case Event.KEY_ESC:
				this.cancel();
				return true;
			break;
			case Event.KEY_UP:
			case Event.KEY_DOWN:
				this._interact(event);
				return true;
			break;
			default:
			break;
		}

		if(this.input.value.length >= this.options.threshold - 1) {
			this._timeout = setTimeout(this._sendRequest.bind(this), 1000 * this.options.delay);
		}
		return false;
	},

	_sendRequest: function() {
		var callObj = {
			url: this.action,
			args: 'symbol=' + this.input.value + '&domains=cnn.com|turner.com',
			domId: false,
			funcObj: this._process.bind(this),
			breakCache: true
		};
		MainLocalObj.CSIManager.callObject(callObj);
	},

	_reposition: function() {
		if(!this.drawn) return;
		var pos = Position.cumulativeOffset(this.input);
		pos.push(pos[0] + this.input.offsetWidth);
		pos.push(pos[1] + this.input.offsetHeight);
		Element.setStyle(this.selector,{
			left: pos[0] + 'px',
			top: pos[3] + 'px'
		});
	},

	_getPadding: function(len) {

		var padding = '';
		var y = 8 - len;

		for (var i = 0; i < y; i++) {
			padding+= '\xa0';
		}

		return padding;

	},

	_process: function(obj) {
	
		//stop symb lookup if quote already requested.
		if (this.stopLookup) {
			this.hide();
			this.cancel();
			this.stopLookup = false;
			return;
		}
		
		this.selector.options.length = 0;
		
		var symbol;
		var optionStr;
		for (var k in obj.data) {
			for (var k2 in obj.data[k]) {
				if (typeof(obj.data[k][k2].s) != 'undefined') {
					symbol = obj.data[k][k2].s;
					optionStr = symbol + this._getPadding(symbol.length) + obj.data[k][k2].n;
					this._addOption(optionStr, symbol);
				}
			}
		}
		
		if (this.selector.options.length > (this.options.size)) {
			this.selector.size = this.options.size;
		}
		else {
			this.selector.size = this.selector.options.length > 1 ? this.selector.options.length : 2;
		}
		if (this.selector.options.length) {
			//none selected by default
			this.selector.selectedIndex = -1;
			this.show();
		}
		else {
			this.cancel();
		}

	},

	_addOption: function(suggestion, value) {
		var opt = new Option(suggestion, value);
		Prototype.Browser.IE ? this.selector.add(opt) : this.selector.add(opt, null);
	},

	cancel: function() {
		this.hide();
	},

	select: function() {
		if(this.selector.options.length) {
			this.input.value = this.selector.options[this.selector.selectedIndex].value;
			MainLocalObj.Markets.lookupStockSymbol();
		}
		this.cancel();
		if(typeof this.options.onSelect == 'function') {
			this.options['onSelect'](this.input);
		}
	},

	_interact: function(event) {
		if(!this.visible) return;

		var key = Event.keyPressed(event);
		if(key != Event.KEY_UP && key != Event.KEY_DOWN) return;
		var mx = this.selector.options.length;

		if(key == Event.KEY_UP) {
			if (this.selector.selectedIndex == 0) {
				this.selector.selectedIndex = this.selector.options.length - 1;
			} else {
				this.selector.selectedIndex--;
			}
		} else {
			if(this.selector.selectedIndex == this.selector.options.length - 1) {
				this.selector.selectedIndex = 0;
			} else {
				this.selector.selectedIndex++;
			}
		}
	}

});

AutoComplete.Options = Class.create({
	size: 3,
	cssClass: 'symbolLookup',
	onSelect: null,
	threshold: 1,
	delay: 0.15,
	requestMethod: 'GET',
	initialize: function(overrides) {
		Object.extend(this, overrides || {});
	}
});

// Various Prototype Event extensions
Object.extend(Event, {
	KEY_BACKSPACE: 8,
	KEY_TAB:       9,
	KEY_RETURN:   13,
	KEY_ESC:      27,
	KEY_LEFT:     37,
	KEY_UP:       38,
	KEY_RIGHT:    39,
	KEY_DOWN:     40,
	KEY_DELETE:   46,
	KEY_SHIFT:    16,
	KEY_CONTROL:  17,
	KEY_CAPSLOCK: 20,
	KEY_SPACE:	  32,
	keyPressed: function(event) {
		return Prototype.Browser.IE ? window.event.keyCode : event.which;
	}
});