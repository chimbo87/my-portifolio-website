const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navBarLinks = document.getElementsByClassName('navbar-links')[0]

        toggleButton.addEventListener('click',()=>{
            navBarLinks.classList.toggle('active')
        })



                
var typed = new Typed('.selfType', {
    strings: ["Developer.", "Designer."],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });


      
let project_page = document.querySelectorAll('.project_img img');
let popup_image = document.querySelector('.popup-image')
let popup_img = document.querySelector('.popup-image img')
let pop=document.querySelector('.pop')


project_page.forEach(image=>{
  image.addEventListener('click',()=>{
    popup_image.style.display='block'
    popup_img.src= image.getAttribute('src')
  })
});

pop.addEventListener('click',()=>{
  popup_image.style.display='none'
});
