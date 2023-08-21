var swiper = new Swiper(".myTeam", {
autoplay:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 30
    },
  
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});

var swiper = new Swiper(".myTestimonials", {
  autoplay:true,
 
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        spaceBetween: 30
      },
    
      // when window width is >= 640px
      720: {
        slidesPerView: 2,
        spaceBetween: 30
      },
     
    }
  });


// aos script for scroll animation 
      AOS.init({
        offset:300,
        duration:1000,
      });
      // <!-- preloader section  -->
  var loader=document.getElementById("preloader");
  window.addEventListener("load",function(){
    loader.style.display="none";
  })
      // top button
$("#top-button").click(function () {
  $("html, body").animate({scrollTop: 0}, 500);
});
  // end topbar
        // end topbar
      
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0rem";
          } else {
            document.getElementById("navbar").style.top = "6rem";
            document.getElementById("navbar").style.backgroundColor = "#1e2a55";
            document.getElementById("navbar").style.borderBottom = "0.1rem solid #fff";


          }
        }
    