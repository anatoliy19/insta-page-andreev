$(document).ready(function(){

	var slideIndex = 0;

	showPhotos();

	function showPhotos(){


		var slides = $('.photo img');

		// цикл для скрытия фото
		for(i = 0; i < slides.length; i++){
			$(slides[i]).hide();
		}
		slideIndex++;

		if (slideIndex > slides.length){
			slideIndex = 1;
		}
		$(slides[slideIndex-1]).show();

		setTimeout(showPhotos, 400);
	}

});