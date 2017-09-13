var mdRates = {
				//variables
				sTitle : '',
								
				//methods
				callback: function () {					
					this.sTitle = this.oJSON.title;
					var displayHTML = '<div class="slimContent">';
					for (var i=0;i< this.oJSON.assets.length;i++) {
						displayHTML += '<div class="quoteUnit">';
						displayHTML += '<div class="data title0 normalCase">' + this.oJSON.assets[i].title + '</div>';
						displayHTML += '<div class="data">' + this.oJSON.assets[i].value + '</div>';
						displayHTML += '</div>';
					}
					displayHTML += '</div>';
					document.getElementById(this.sTargetId).innerHTML = displayHTML;
					 if (typeof(adjustOpener) != 'undefined') {var  adjustTimer = setTimeout("adjustOpener()", 500);}
				}
};