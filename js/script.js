$(document).ready(function(){

  $('#callback').click(function(){
    $('.popup').fadeIn(300);
    $('.popup').css('display', 'flex');
  })

  $('#moreinfo').click(function(){
    $('.popup').fadeIn(300);
    $('.popup').css('display', 'flex');
  })

  $('.info__button').click(function(){
    $('.popup').fadeIn(300);
    $('.popup').css('display', 'flex');
  })

  $('.first__button').click(function(){
    $('.popup').fadeIn(300);
    $('.popup').css('display', 'flex');
  })

  $('.cost__desctop').click(function(){
    $('.popup').fadeIn(300);
    $('.popup').css('display', 'flex');
  })

  $('.phone__info__button').click(function(){
    $('.popup').fadeIn(300);
    $('.popup').css('display', 'flex');
  })

  $('.cost__tablet').click(function(){
    $('.popup').fadeIn(300);
    $('.popup').css('display', 'flex');
  })

  $('.footer__callback').click(function(){
    $('.popup').fadeIn(300);
    $('.popup').css('display', 'flex');
  })



  $('.popup__close').click(function() {
    event.preventDefault(); // !Позволяет отключить обновление страницы при закрытии модального окна
    $('.popup').fadeOut(300);
  })

  $(".popup").on('click', function (e) {
    if (e.target == this) $(".popup").fadeOut('300');
})



    $('.animation__selector, .animation__teg,  .animation__slesh, .animation__div2, .animation__div').removeClass('anim--1 anim--2');

    var mySwiper = new Swiper ('.works-container', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: '.works-slider__arrow-right',
        prevEl: '.works-slider__arrow-left',
      },
      pagination: {
        el: ".works-pagination",
        type: 'bullets',  
        },
      breakpoints: {
        1920: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 2,
        },
        320: {
        slidesPerView: 1,
        }
      },
    });
    

   $(".header__menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
  });

  $(".footer__menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
});


  
	$('.header__burger').on('click', function(){
		$('.header__menu').slideToggle(300, function(){
			
			if($(this).css('display') === 'none'){
        $(this).removeAttr('style');   

        
    }
  });
  
   });

});

// !Позволяет закрыть модальное окно по по нажатию кнопки

  $(document).keydown(function(event) { 
    if (event.keyCode == 27) { 
      $('#esq').fadeOut(300);
    }
  });
  