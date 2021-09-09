(function ($) {

	// book filer
	$("#book-flters li a").click(function () {
		$("#book-flters li a").removeClass('active');
		$(this).addClass('active');

		var selectedFilter = $(this).data("filter");


		$(".book_list").fadeOut();

		setTimeout(function () {
			$(selectedFilter).slideDown();

		}, 200);
	});

	$(".sidenav a").on('click', function (event) {
		var hash = this.hash;
		if (hash) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, function () {
				window.location.hash = hash;
			});
		}

	});

	$(".sidenav a").on('click', function () {
		closeNav();
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 70) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});


})(jQuery);

