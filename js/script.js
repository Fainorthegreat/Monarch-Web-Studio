$(document).ready(function(){
  
    $('.fly-elements__fly-selector, .fly-elements__fly-teg,  .fly-elements__fly-slesh, .fly-elements__fly-div2, .fly-elements__fly-div').removeClass('anim anim2');

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
    
    $(".header__content___left").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
  });

$(function(){
  // $('#nav-icon3').on('click', function(){
  //   if ($('body').hasClass('hidden')) // *HASCLASS - ОЧЕНЬ УДОБНАЯ ФУНКЦИЯ ПРОВЕРКИ КЛАССА, А ТАКЖЕ ВКЛЮЧЕНИЯ И ВЫКЛЮЧЕНИЯ 
  //   {
  //   $('body').removeClass('hidden');}
  //   else {
  //   $('body').addClass('hidden');
  //   }
  // })
  
	$('.nav-icon3').on('click', function(){
		
		$('.header__mob-nav').slideToggle(300, function(){
			
			if($(this).css('display') === 'none'){
        $(this).removeAttr('style');   
    }
  });
  
   });
});



$('.nav-icon3').click(function(){
  $(this).toggleClass('open');
});


  });
  