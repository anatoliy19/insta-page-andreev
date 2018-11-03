$(document).ready(function(){

	var slideIndex = 0;

	 showPhotos();  

	function showPhotos(){


		// var slides = $('.photo img'); для урока 2
		// для фото из инстаграма
		var slides = $('#instafeed a');

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