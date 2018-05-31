$(document).ready(function() {
	
	$(".musicBox").click(function() {
		var song = $(this).parent().children("input").attr("value");
		var audio = document.getElementById("audio");
		$("#audio").attr("src", song);

		$(".musicBox").removeClass("active");
		$(this).addClass("active");
		
		$(".audio").removeClass("animated infinite pulse no-animated");
		$(this).parent().addClass("animated infinite pulse");

		$('.pauseBox').toggleClass('pause', false);
		audio.play();
	});
		
	$(".pauseBox").click(function() {
		audio = document.getElementById("audio");
		if(audio.currentTime == 0)
		{
			$(".musicBox:first").click().addClass("active");
			$(".audio:first").addClass("animated infinite pulse");
		}
		else if(audio.paused) //играть
		{
			$(".audio.no-animated").addClass("animated infinite pulse");
			$( '.pauseBox' ).toggleClass( 'pause', false);
			audio.play();
		}
		else //пауза
		{
			$(".audio.animated").removeClass("animated infinite pulse").addClass("no-animated");
			$( '.pauseBox' ).toggleClass( 'pause' );
			audio.pause();
		}
	});

	document.getElementById('audio').addEventListener('ended',myHandler,false);
	function myHandler(e) {
	$(".audio").removeClass("animated infinite pulse no-animated");
    }
    
});