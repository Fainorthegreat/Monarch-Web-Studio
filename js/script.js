$(document).ready(function(){

  $('#callback').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })

  $('#moreinfo').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })

  $('.info__button').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })

  $('.first__button').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })

  $('.cost__desctop').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })

  $('.phone__info__button').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })

  $('.cost__tablet').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })

  $('.footer__callback').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })



  $('.close').click(function() {
    event.preventDefault(); // !Позволяет отключить обновление страницы при закрытии модального окна
    $('.popup').css('display', 'none')
  })

    $('.animation__selector, .animation__teg,  .animation__slesh, .animation__div2, .animation__div').removeClass('anim--1 anim--2');

    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: ".swiper-pagination",
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

$(function(){
  // $('#fixed-container__header-content').on('click', function(){
  //   if ($('body').hasClass('hidden')) // *HASCLASS - ОЧЕНЬ УДОБНАЯ ФУНКЦИЯ ПРОВЕРКИ КЛАССА, А ТАКЖЕ ВКЛЮЧЕНИЯ И ВЫКЛЮЧЕНИЯ 
  //   {
  //   $('body').removeClass('hidden');}
  //   else {
  //   $('body').addClass('hidden');
  //   }
  // })
  
	$('.header__burger').on('click', function(){
		$('.menu__list').slideToggle(300, function(){
			
			if($(this).css('display') === 'none'){
        $(this).removeAttr('style');   

        
    }
  });
  
   });

});



$('.fixed-container__header-content').click(function(){
  $(this).toggleClass('open');
});




  });
  