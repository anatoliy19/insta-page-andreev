$(document).ready(function(){

var audio = $('#audioTrack')[0];
// console.log(audio);

$playBtn = $('#audio-play');
$pauseBtn = $('#audio-pause');
// селектор по атрибутоам - используем квадратные скобки
$audioControl = $('[data-type="audio-control"]');

setTimeout(initAudioPlayer, 800);

function initAudioPlayer(){
	$playBtn.parent().show();
	audio.loop = true;
	audio.play();
	
	$audioControl.click(function(){

		if ( audio.paused){

			audio.play();
			$playBtn.parent().hide();
			$pauseBtn.parent().show();

		} else {
			audio.pause();
			$playBtn.parent().show();
			$pauseBtn.parent().hide();

		}

	}); 
}

// audio.play();


});
