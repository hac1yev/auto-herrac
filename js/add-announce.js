var progress = document.querySelector('.progress');
var per = 70;
progress.style.width = per + '%';

let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("sortable");
let numOfFiles = document.getElementById("num-of-files");

function preview(){
    imageContainer.innerHTML = "";
    // numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

    for(i of fileInput.files){
        let reader = new FileReader();
        let figure = document.createElement("li");
        figure.classList.add('ui-sortable-handle')
        let aInput = document.createElement('a')
        aInput.setAttribute('href' , 'javascript:void(0)')

        // figure.appendChild(figCap);
        reader.onload=()=>{
            let img = document.createElement("img");
            img.setAttribute("src",reader.result);
            figure.insertBefore(img,null);
            aInput.appendChild(figure)
        }
        imageContainer.appendChild(aInput);
        reader.readAsDataURL(i);
    }
}
const mobileMenuOpen = document.querySelector('.mob-menu-open');
const mobileMenuClose = document.querySelector('.mob-menu-close');
const mobileMenuContent = document.querySelector('.mobile-menu-div');
const how_works = document.querySelector('#how_works_li');
const dropMenu = document.querySelector('.drop-menu');
const desktop_arrow = document.querySelector('.desktop-arrow');

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