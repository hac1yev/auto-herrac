const mobileMenuOpen = document.querySelector('.mob-menu-open');
const mobileMenuClose = document.querySelector('.mob-menu-close');
const mobileMenuContent = document.querySelector('.mobile-menu-div');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');
const mobile_how_works = document.querySelector('#mobile-how-works');
const mobile_how_works_links = document.querySelector('.mobile-how-works-links');
const mobile_how_works_dropdown = document.querySelector('#mobile-how-works-dropdown');
const dropMenu = document.querySelector('.drop-menu');
const how_works = document.querySelector('#how_works_li');
const desktop_arrow = document.querySelector('.desktop-arrow');
// const carMarka = document.querySelector('#carMarka');
// const ul = document.getElementById("markaUl");

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
  
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });
  
  
    return false;
  });

  $(".owl-carousel").owlCarousel({
    loop: false,
    rewind: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      768: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });



  mobileMenuOpen.addEventListener('click' , () =>{
    mobileMenuContent.style.top = '60px';
    mobileMenuOpen.style.display = 'none'
    mobileMenuClose.style.display = 'block'
  })

  how_works.addEventListener('click', () => {
    dropMenu.classList.toggle('dropisOpen');
    desktop_arrow.classList.toggle('desktopArrow')
  })

  mobileMenuClose.addEventListener('click' , () =>{
    mobileMenuContent.style.top = '-1000px'
    mobileMenuOpen.style.display = 'block'
    mobileMenuClose.style.display = 'none'
  })


  // Javascript to enable link to tab
var hash = location.hash.replace(/^#/, '');  // ^ means starting, meaning only match the first hash
if (hash) {
    $('.change-tab a[href="#' + hash + '"]').tab('show');
} 

// Change hash for page-reload
$('.change-tab a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
})



// lang dropdown
$(function(){
  $('.archive option:selected').hide(); //initialise
 
  $('.archive').change(function(){
    
    $('.archive option').show(200, function(){
      
        $('.archive option:selected').hide();
      
    });
    
  });
})




const select = document.querySelector(".select");
const caret = document.querySelector(".caret");
const menu = document.querySelector(".menu");
const options = document.querySelectorAll(".menu li");
const selected = document.querySelector(".selected");

select.addEventListener("click", () => {
  select.classList.toggle("select-clicked");
  caret.classList.toggle("caret-rotate");
  menu.classList.toggle("menu-open");
  console.log(select)
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    selected.innerText = option.innerText;
    select.classList.remove("select-clicked");
    caret.classList.remove("caret-rotate");
    menu.classList.remove("menu-open");

    options.forEach((option) => {
      option.classList.remove("activee");
    });

    option.classList.add("activee");
  });
});




// Input Filter 

// carMarka.addEventListener('keyup', () => {
//   var filter, a, i, txtValue;
//   filter = carMarka.value.toUpperCase();
//   const li = ul.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           li[i].style.display = "";
//       } else {
//           li[i].style.display = "none";
//       }
//   }
// });

// carMarka.addEventListener('focus', () => {
//   ul.style.display = 'block';
// });

// carMarka.addEventListener('blur', () => {
//   ul.style.display = 'none';
// });