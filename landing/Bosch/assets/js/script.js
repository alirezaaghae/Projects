$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
     rtl:true,
     loop:true,
     dots: false,
     nav: false,
     autoplay: true,
     autoplayHoverPause: true,
     singleItem:true,
     item: 1,
     autoplayTimeout: 4000,
     responsive:{
        0:{
            items:1,
            margin: 10
        }
       }
 });
});

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     nav:false,
//     dots:false,
//     rtl:true,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     margin: 20,
//     // navText : ["<img src='assets/images/right_button.svg' width='54px'>","<img src='assets/images/left_button.svg' width='54px'>"],
//     responsive:{
//       0:{
//           items:1,
//           margin: 10
//       },
//       600:{
//           items:3,
//           margin: 10,
//       },
//       1000:{
//           items:3,
//       }
//      }
// });