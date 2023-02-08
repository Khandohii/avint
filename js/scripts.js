$(function(){
	// Запустить видео
	$('body').on('click', '.video', function(e) {
    	e.preventDefault()

    	$(this).addClass('played')

    	var video = $(this).data('video')

    	$(this).find('iframe').attr("src", video+'?autoplay=1;rel=0;enablejsapi=1&amp')
    })


	// Главный слайдер
	if ($('.first_section .slider.swiper').length) {
		var mainSlier = new Swiper('.first_section .slider.swiper', {
			spaceBetween: 100,
			slidesPerView: 1,
			loop: true,
			speed: 750,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},
		})
	}


	// Партнеры
	if ($('.partners_slider .swiper').length) {
		var mainSlier = new Swiper('.partners_slider .swiper', {
			loop: true,
			speed: 750,
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},
			breakpoints: {
				'320': {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				'480': {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				'768': {
					slidesPerView: 5,
					spaceBetween: 24,
				},
				'1025': {
					slidesPerView: 6,
					spaceBetween: 24,
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.$el).find('.swiper-wrapper').wrap('<div class="swiper-wrap"></div>')
				},
			}
		})
	}


	// Production
	if ($('.block_production .slider').length) {
		new Swiper('.block_production .slider', {
			spaceBetween: 16,
			slidesPerView: 'auto',
			loop: true,
			watchOverflow: true,
			watchSlidesVisibility: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
				init: function (swiper) {
					$(swiper.$el).find('.swiper-wrapper').wrap('<div class="swiper-wrap"></div>')

					$(swiper.$el).find('.swiper-slide-duplicate a').removeAttr('data-fancybox')

					setTimeout(function(){
						observer.observe()
					}, 300)
				},
			}
		})
	}


	// Клиенты
	if ($('.sect_clients .swiper').length) {
		var mainSlier = new Swiper('.sect_clients .swiper', {
			watchSlidesProgress: true,
			loop: true,
			speed: 750,
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},
			breakpoints: {
				'320': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'480': {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				'768': {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				'1025': {
					slidesPerView: 6,
					spaceBetween: 24,
				}
			},
		})
	}


	// Сертификаты
	if ($('.sertificates .swiper').length) {
		var mainSlier = new Swiper('.sertificates .swiper', {
			spaceBetween: 24,
			slidesPerView: 6,
			watchSlidesProgress: true,
			loop: true,
			speed: 750,
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},
			breakpoints: {
				'320': {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				'480': {
					slidesPerView: 4,
					spaceBetween: 15,
				},
				'768': {
					slidesPerView: 5,
					spaceBetween: 24,
				},
				'1025': {
					slidesPerView: 6,
					spaceBetween: 24,
				}
			},
		})
	}


	// Gallery
	if ($('.gallery .slider').length) {
		new Swiper('.gallery .slider', {
			spaceBetween: 24,
			slidesPerView: 1,
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					slidesPerView: 1
				},
				'480': {
					slidesPerView: 2
				},
				'768': {
					slidesPerView: 3
				},
				'1025': {
					slidesPerView: 4
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.$el).find('.swiper-slide-duplicate a').removeAttr('data-fancybox')

					setTimeout(function(){
						observer.observe()
					}, 300)
				},
			}
		})
	}

	$(document).on('click', '.swiper-slide-duplicate a', function(e) {
		e.preventDefault()

		let thisSlideIndes = $(this).closest('.swiper-slide-duplicate').data('swiper-slide-index')

		$(this).closest('.swiper-wrapper').find('.swiper-slide:not(.swiper-slide-duplicate)[data-swiper-slide-index="' + thisSlideIndes + '"] a').trigger('click')
	});
})

$(window).load(function(){
	// Шапка
	headerHeight = $('header').innerHeight()

	$('header').wrap('<div class="header_wrap" style="height: ' + headerHeight + 'px"></div>')

	if( $(window).scrollTop() > 0 ) {
		$('header').addClass('fixed')
	} else{
		$('header').removeClass('fixed')
	}

	$(window).resize(function () {
		setTimeout(function() {
			headerHeight = $('header').innerHeight()

			$('.header_wrap').height(headerHeight)
		}, 300)
	})


	$(window).scroll(function(){
		if( $(window).scrollTop() > 0 ) {
			$('header').addClass('fixed')
		} else{
			$('header').removeClass('fixed')
		}
	})
})