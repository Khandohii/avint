$(function(){
	// Проверка браузера
	if ( !supportsCssVars() ) {
		$('body').addClass('lock')
		$('.supports_error').addClass('show')
	}


	// Ленивая загрузка
	setTimeout(function(){
		observer = lozad('.lozad', {
			rootMargin: '200px 0px',
			threshold: 0,
			loaded: function(el) {
				el.classList.add('loaded')
			}
		})

		observer.observe()
	}, 200)


	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() +'px')


	// Аккордион
	$('body').on('click', '.accordion .item .open_btn', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.item')
		let accordion = $(this).closest('.accordion')

		if( parent.hasClass('active') ) {
			parent.removeClass('active')
			parent.find('.data').slideUp(300)
		} else {
			accordion.find('.item').removeClass('active')
			accordion.find('.data').slideUp(300)

			parent.addClass('active')
			parent.find('.data').slideDown(300)
		}
	})


	// Всплывающие окна
	$('.modal_link').click(function(e){
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : $(this).data('content'),
			type : 'inline',
			opts : {
				touch : false,
				speed : 300,
				backFocus : false,
				trapFocus : false,
				autoFocus : false,
				mobile : {
				    clickSlide: "close"
				}
			}
		})
	})


	// Моб. меню
	$('body').on('click', '.mob_menu_link', function(e) {
    	e.preventDefault()

		if( $(this).hasClass('active') ) {
			$(this).removeClass('active')

			$('header .wrap_menu').removeClass('active')

			$('body').removeClass('lock')
		} else {
			$(this).addClass('active')

			$('header .wrap_menu').addClass('active')

			$('body').addClass('lock')
		}
    })


	// Маска ввода
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')


    // Плавная прокрутка к якорю
	$('body').on('click', '.scroll_link', function(e) {
		e.preventDefault()

		let href = $(this).data('anchor')
		let offsetEl = $(this).css('--offset')

		if (offsetEl) {
			offsetEl = offsetEl
		} else {
			offsetEl = 0
		}

		let padHeight = $('header').innerHeight();

		$('html, body').stop().animate({
		   	scrollTop: $(href).offset().top - offsetEl - padHeight
		}, 1000)


		if ( $(window).width() < 1025 ) {
			$('.mob_menu_link').removeClass('active')
			$('header .wrap_menu').removeClass('active')
			$('body').removeClass('lock')
		}
	})


	// Раскрытие текста
	$('body').on('click', '.read_more button', function(e) {
		e.preventDefault()

		$(this).parent().prev('.hide').removeClass('hide').find('.hidden, .hidden_mob').slideDown(300);

		$(this).parent().hide();
	})


	// Показать еще
	$('body').on('click', '.more_btn button', function(e) {
		e.preventDefault()

		$(this).parent().parent().find('.hidden_tab').addClass('visible');
		$(this).parent().parent().find('.hidden_block').fadeIn(300);

		$(this).parent().hide();
	})


	// Больше вопросов
	$('body').on('click', '.accordion .more_questions button', function(e) {
		e.preventDefault()

		$(this).closest('.accordion').find('.hidden_item').removeClass('hidden_item').slideDown(300);

		$(this).parent().hide();
	})

	// Close PopUp
	$('body').on('click', '.success_wrap [data-modal-close], .close_bg', function(e) {
		e.preventDefault()

        $('.success_wrap').removeClass('visible');
        $('.overlay').fadeOut(300);

        setTimeout(function() {
        	$('body').removeClass('lock');
        }, 300)
	})

	// Next Question
	$('body').on('click', '.sect_quiz .block_form .next_question', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.block_form')

		parent.removeClass('visible');
		parent.next().addClass('visible');
	})

	// Показать дополнительное оборудование
	$('body').on('click', '.sect_complect .further_link a', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.box')

		parent.find('.blocks.hidden').slideDown(500).removeClass('hidden');
		$(this).parent().hide()
	})
})

$(window).load(function(){
	setTimeout(function() {
		// Увеличение картинки
		$('.fancy_img').fancybox({
			loop : true,
			mobile : {
			    clickSlide: "close"
			}
		})

		// Увеличение картинки
		$('.swiper-slide:not(.swiper-slide-duplicate) .fancy_slider').fancybox({
			backFocus : false,
			mobile : {
			    clickSlide: "close"
			}
		})

	}, 300)
})


// Вспомогательные функции
function widthScroll() {
    let div = document.createElement('div')
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.visibility = 'hidden'
    document.body.appendChild(div)

    let scrollWidth = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)

    return scrollWidth
}


var supportsCssVars = function() {
    var s = document.createElement('style'),
        support

    s.innerHTML = ":root { --tmp-var: bold; }"
    document.head.appendChild(s)
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'))
    s.parentNode.removeChild(s)

    return support
}


function setHeight(className){
    let maxheight = 0

    className.each(function() {
    	let elHeight = $(this).outerHeight()

        if( elHeight > maxheight ) {
        	maxheight = elHeight
        }
    })

    className.outerHeight( maxheight )
}