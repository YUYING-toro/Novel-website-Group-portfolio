
function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}

(function ($) {

	$(window).scroll(function () {
		if ($(this).scrollTop() > 70) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});


})(jQuery);
