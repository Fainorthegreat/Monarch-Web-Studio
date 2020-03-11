

$(window).on('beforeunload', function() {
  $('body').hide();
  $(window).scrollTop(0);
}); 


$(document).ready(function(){

$('#form').submit(function () { 
  $.ajax({
    type: "POST",
    url: "send.php",
    data: $(this).serialize()
  }).done(function(){
    alert('Спасибо за заявку! Я свяжусь с Вами в ближайшее время.');
  });
  $('.popup').fadeOut(300);
  return false;
  
});

  $('.fade').click(function(){
    $('.popup').fadeIn(300);
    $('.popup').css('display', 'flex');
    $('body').css('overflow', 'hidden');
  })

  $("#popup__tel").mask("+7 (999) 999-99-99");

  $('.popup__close').click(function() {
    event.preventDefault(); // !Позволяет отключить обновление страницы при закрытии модального окна
    $('.popup').fadeOut(300);
    $('body').css('overflow', 'auto');
  })

  
  $(".popup").on('click', function (e) {
    if (e.target == this) $(".popup").fadeOut('300');
    $('body').css('overflow', 'auto');
})

    $('.anim').removeClass('anim--1 anim--2');

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
        590: {
        slidesPerView: 2,
        },
        320: {
        slidesPerView: 1,
        }
      },
    });
    

   $(".header__menu, .footer__menu").on("click","a", function (event) {
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

    $('.header--menu').css('position', 'fixed');
      
  });
   });
});

// !Позволяет закрыть модальное окно по по нажатию кнопки

  $(document).keydown(function(event) { 
    if (event.keyCode == 27) { 
      $('#esq').fadeOut(300);
    }
  });
  