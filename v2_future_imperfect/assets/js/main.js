(function($) {

	// Theme persistence check
	if (localStorage.getItem('fi-site-theme') === 'dark') {
		document.body.classList.add('dark-mode');
	}

	$(function() {
		var $window = $(window),
			$body = $('body');

		// Theme toggle handler
		$('#theme-toggle').on('click', function(e) {
			e.preventDefault();
			$body.toggleClass('dark-mode');
			var isDark = $body.hasClass('dark-mode');
			var $icon = $(this).find('i');

			if (isDark) {
				localStorage.setItem('fi-site-theme', 'dark');
				$icon.removeClass('fa-sun').addClass('fa-moon');
				$(this).attr('title', 'Switch to Light Mode').attr('aria-label', 'Switch to Light Mode');
			} else {
				localStorage.setItem('fi-site-theme', 'light');
				$icon.removeClass('fa-moon').addClass('fa-sun');
				$(this).attr('title', 'Switch to Dark Mode').attr('aria-label', 'Switch to Dark Mode');
			}
		});

		// Visitor counter badge loader
		var $badge = $('#visitor-counter-badge');
		if ($badge.length) {
			$badge.attr('src', 'https://hits.sh/tcff01.github.io/telmafonseca.github.io.svg?color=34393d&label=VISITORS&labelColor=555555');
		}

		// Smooth scrolling for anchor links
		$('a[href^="#"]').on('click', function(event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 80
				}, 600);
			}
		});

	});

})(jQuery);
