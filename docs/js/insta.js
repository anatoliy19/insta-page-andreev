$(document).ready(function(){ 

	var userFeed = new Instafeed({
		get: 'user',
		userId: '1956529567',
		accessToken: '1956529567.1677ed0.faba1319dd7a4e17926d7613aab7399c',
		resolution: 'standard_resolution',
		limit: 33

	});
	userFeed.run();

	setTimeout(function(){
			$('.instafeed').addClass('shadowed');
	},100);

});