(function(){
	if(typeof jQuery == 'undefined'){
		return;
	}

	jQuery.noConflict();
	jQuery(document).ready(function(){
		var $ = jQuery;

		var menu = $('#pulldownMenu');

		menu.find(".inner01").hide();
		menu.find(".nav-one01").hover(
			function(){
			$(".inner01:not(:animated)", this).stop(true, true).show();
			},
			function(){
			$(".inner01", this).stop(true, true).hide();
			}
		);

	});

})();