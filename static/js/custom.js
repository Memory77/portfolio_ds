//navbar 

const burgerMenu = document.querySelector('.burger-menu');
const menuItems = document.querySelector('.menu-items');

burgerMenu.addEventListener('click', () => {
  menuItems.classList.toggle('active');
});


// animate on scroll // wow et animate
$(function(){
  new WOW().init();
})

// comment utiliser les plugin wow et animate:
// rajoutez simplement les class suivantes :
// "wow" si vous voulez que l'élément s'affiche au moment du scroll
// "animated" pour si vous souhaitez une animation : bounceInUp ou fadeInUp ou fadeInDown, zoomOut ou zoomIn, fadeInLeft/Right etc... voir sinon la doc wow.js
// on peut rajouter des attributs comme le delay ou la durée

// exemple d'utilisation avec les deux ensembles : <h1 class="wow animated bounceInRight" data-wow-duration="1s" data-wow-delay="1s">TITRE 1 exemple</h1>


$(function() {
  // scroll on click // easing
  $('a.smooth-scroll').click(function(event) {
      event.preventDefault();
      var section = $(this).attr('href');
      $('html, body').animate(
      {
          scrollTop: $(section).offset().top - 64
      },
      1250,
      "easeInOutExpo"
      );
  });
});


//owl carousel
$(function(){

  $("#hobbies-content").owlCarousel({
      items: 6,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      responsive : {
          // breakpoint from 0 up
        0 : {
            items: 1
        },
          // breakpoint from 480 up
        480 : {
            items: 1
        },
          // breakpoint from 768 up
        890 : {
            items : 2
        },
          // breakpoint from 992 up 
        992 : {
            items: 2
        },
        1300 : {
            items : 3
        }
          
      }
      
  });

});

//mettre la class class="owl-carousel owl-theme" à la div mère, a une flexbox par exemple. 


//musique
document.getElementById('toggleAudio').addEventListener('click', function() {
  var audio = document.getElementById('audioPlayer');
  if (audio.paused) {
      audio.play();
  } else {
      audio.pause();
  }
});