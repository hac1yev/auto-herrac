const mobile_search_filter = document.querySelector('#mobile_search_filter');
const search_filter = document.querySelector('#search_filter');
const all_announce2_left_mobile = document.querySelector('.all-announce2-left-mobile');
const all_announces2_container = document.querySelector('.all-announces2-container');
const filter_close = document.querySelector('#filter_close');

$(".owl-carousel").owlCarousel({
    loop: true,
    autoplay:true,
    rewind: true,
    margin: 10,
    dots: false,
    navs: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      600: {
        items: 2,
        nav: false,
      },

      768: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  });

mobile_search_filter.addEventListener('click', () => {
  search_filter.style.display = 'block';
  search_filter.classList.add('mobile-search-filter');
  all_announces2_container.style.display = 'none';
  all_announce2_left_mobile.style.display = 'none';
}) 

filter_close.addEventListener('click', () => {
  search_filter.style.display = 'none';
  all_announces2_container.style.display = 'block';
  all_announce2_left_mobile.style.display = 'block';
});

// lang dropdown
$(function(){
  $('.archive option:selected').hide(); //initialise
 
  $('.archive').change(function(){
    
    $('.archive option').show(200, function(){
      
        $('.archive option:selected').hide();
      
    });
    
  });
})