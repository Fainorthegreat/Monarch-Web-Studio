$(document).ready(function(){

  $('#callback').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })

  $('#moreinfo').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })

  $('.info__other-button').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })

  $('.info__other_desctop').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })

  $('.info__other_tablet').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })

  $('.social__call').click(function(){
    $('.popup').show();
    $('.popup').css('display', 'flex');
  })



  $('.close').click(function() {
    event.preventDefault(); // !Позволяет отключить обновление страницы при закрытии модального окна
    $('.popup').css('display', 'none')
  })

    $('.container-bcg__fly-elements__fly-selector, .container-bcg__fly-elements__fly-teg,  .container-bcg__fly-elements__fly-slesh, .container-bcg__fly-elements__fly-div2, .container-bcg__fly-elements__fly-div').removeClass('anim anim2');

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
    
    $(".fixed-container__header-content__left").on("click","a", function (event) {
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
  
	$('.fixed-container__header-content').on('click', function(){
		$('.fixed-container__header-content__left').slideToggle(300, function(){
			
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
  