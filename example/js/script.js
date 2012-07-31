/*
 * Author: Julian Ceballos [julian@pikhub.com]
 */

$('document').ready(function() {
	$('#keyboardNotice').fadeIn('fast').delay(6000).fadeOut('slow');
	$('#keyboardNotice').on('click', function(evt) {
		$(evt.currentTarget).hide();
	});
	$('.slideshow').slideshow();
	$(window).resize(function() {
		$('.slideshow').slideshow();
	});
});
