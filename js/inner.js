var splide = new Splide("#main-carousel", {
  pagination: false,
});

var thumbnails = document.getElementsByClassName("thumbnail");
var current;

for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splide.go(index);
  });
}

splide.on("mounted move", function () {
  var thumbnail = thumbnails[splide.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splide.mount();



const megaBox = document.querySelector('.mega-box');
const mobileMenuOpen = document.querySelector('.mob-menu-open');
const mobileMenuClose = document.querySelector('.mob-menu-close');
const mobileMenuContent = document.querySelector('.mobile-menu-div');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');
const mobile_how_works = document.querySelector('#mobile-how-works');
const mobile_how_works_links = document.querySelector('.mobile-how-works-links');
const mobile_how_works_dropdown = document.querySelector('#mobile-how-works-dropdown');

$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
    $('.dropdown-submenu .show').removeClass("show");
  });


  return false;
});


mobileMenuOpen.addEventListener('click', () => {
  mobileMenuContent.style.top = '130px';
  mobileMenuOpen.style.display = 'none'
  mobileMenuClose.style.display = 'block'
})


mobileMenuClose.addEventListener('click', () => {
  mobileMenuContent.style.top = '-450px'
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


// Mobile Dropdown

// mobile_how_works.addEventListener('click', () => {
//   mobile_how_works_dropdown.style.display = 'block';
//   mobile_how_works.style.display = 'none';
//   mobile_how_works_links.style.display = 'flex';
//   mobile_how_works_links.style.flexDirection = 'column';
//   mobile_how_works_links.style.padding = '24px 0 0 19px';
//   mobile_how_works_links.style.border = 'none';
//   mobile_how_works_links.style.gap = '5px';
// });

// mobile_how_works_dropdown.addEventListener('click', () => {
//   mobile_how_works_dropdown.style.display = 'none';
//   mobile_how_works.style.display = 'block';
//   mobile_how_works_links.style.display = 'none';
// });

const dropMenu = document.querySelector('.drop-menu');
const how_works = document.querySelector('#how_works_li');
const desktop_arrow = document.querySelector('.desktop-arrow');
how_works.addEventListener('click', () => {
  dropMenu.classList.toggle('dropisOpen');
  desktop_arrow.classList.toggle('desktopArrow')
})

mobileMenuOpen.addEventListener('click' , () =>{
  mobileMenuContent.style.top = '60px';
  mobileMenuOpen.style.display = 'none'
  mobileMenuClose.style.display = 'block'
})


mobileMenuClose.addEventListener('click' , () =>{
  mobileMenuContent.style.top = '-1000px'
  mobileMenuOpen.style.display = 'block'
  mobileMenuClose.style.display = 'none'
})

// BIDDING SECTION

const biddingInput = document.getElementById('bidding-amount')
const biddingButtons = document.querySelectorAll('.bids-btn button')



biddingButtons.forEach((el) => {
  el.addEventListener('click' , () =>{
    const newValue = Number(biddingInput.value) + Number(el.innerHTML)
    biddingInput.value = newValue
  })
})


// timer js
const semicircles = document.querySelectorAll('.semicircle')
const timer = document.querySelector('.timer')


const hr = 23
const min = 59
const sec = 59

const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds;
const startTime = Date.now()
const futureTime = setTime + startTime;

const timerLoop = setInterval(countDownTimer)
countDownTimer()

function countDownTimer(){
    const currentTime = Date.now()
    const remainingTime = futureTime - currentTime;
    const angle = (remainingTime/setTime) * 360;

    // progress Indicator
    if(angle > 180){
        semicircles[2].style.display = 'none'
        semicircles[0].style.transform = 'rotate(180deg)'
        semicircles[1].style.transform = `rotate(${angle}deg)`
    }
    else{
        semicircles[2].style.display = 'block'
        semicircles[0].style.transform = `rotate(${angle}deg)`
        semicircles[1].style.transform = `rotate(${angle}deg)`
    }

    // time
    const hrs = Math.floor((remainingTime/(1000*60*60))%24)
    const min = Math.floor((remainingTime/(1000*60))%60)
    const secs = Math.floor((remainingTime/(1000))%60)

    timer.innerHTML = `
        <div>
          <div>${hrs}</div>
          <div class='colon'>:</div>
          <div>${min}</div>
          <div class='colon'>:</div>
          <div>${secs}</div>
        </div>
        <br>
        <div>
          <span id='total'>99999$</span>
        </div>
    `

    // 5sec condition

    // end
    if(remainingTime<0){
        clearInterval(timerLoop)
        semicircles[2].style.display = 'none'
        semicircles[0].style.display = 'none'
        semicircles[1].style.display = 'none'
    }

}

// history
const historyDiv = document.getElementById('inner-right-cont')
const showHistory = document.getElementById('show-history')

showHistory.addEventListener('click' , () => {
  historyDiv.classList.toggle('history-active')
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