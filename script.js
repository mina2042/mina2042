$(function () {
  var $wrap = $(".section_group");     
  var $sections = $wrap.find("section");
  var $header = $("#header");

  var secondSectionTop = $sections.eq(1).position().top;

  $wrap.on("scroll", function () {
    var scrollTop = $wrap.scrollTop();

    if (scrollTop >= secondSectionTop) {
      $header.stop(true, true).fadeIn(200);
    } else {
      $header.stop(true, true).fadeOut(200);
    }
  });
});

var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      prevEl: ".swiper-button-left",
      nextEl: ".swiper-button-right",
    },
  });


  var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30, 
    navigation: {
      prevEl: ".arrow-left",
      nextEl: ".arrow-right",
    },
  });



// // 사이드 바
// document.addEventListener('DOMContentLoaded', function() {

//     const loadingBoxLink = document.querySelector('.loading-box .loding');
//     const sideMenuBox = document.querySelector('.side-menu-box');
//     const closeBtn = document.getElementById('sideMenuCloseBtn'); 
//     const dimmedOverlay = document.getElementById('dimmedOverlay'); 
//     loadingBoxLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         sideMenuBox.classList.toggle('active');
//         dimmedOverlay.classList.toggle('active'); // 🌟 [추가] 🌟
//     });
//     closeBtn.addEventListener('click', function() {

//         sideMenuBox.classList.remove('active');
//         dimmedOverlay.classList.remove('active'); // 🌟 [추가] 🌟
//     });
//     dimmedOverlay.addEventListener('click', function() {
//         sideMenuBox.classList.remove('active');
//         dimmedOverlay.classList.remove('active');
//     });
// });





// 마우스 트레일
$(document).ready(function() {
    const $trailElements = $('#mouse-trail-container .mouse-trail-element');
    const elementCount = $trailElements.length;
    let currentIndex = 0; 

    $(document).on('mousemove', function(e) {
        const $nextElement = $trailElements.eq(currentIndex);
        $nextElement.css({
            left: e.clientX,
            top: e.clientY,
            opacity: 1,
            transform: 'scale(1) rotate(0deg)' // 보이면서 정규 크기/각도로 설정
        });
        $nextElement.queue(function(next) {
            setTimeout(function() {
                $nextElement.css({
                    opacity: 0,
                    transform: 'scale(0.5) rotate(90deg)' // 작아지면서 회전하며 사라지는 효과
                });
                next(); 
            }, 70); 
        });
        currentIndex = (currentIndex + 1) % elementCount;
    });
});