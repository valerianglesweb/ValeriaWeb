// Show menu

const   navMenu = document.getElementById('nav-menu'), 
        navToggle= document.getElementById('nav-toggle'), 
        navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


//remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ======================= mediaaa

// MIX IT UP  
let mixerLoad = mixitup('.media__container', {
    load: {
        filter: '.begining'
    }
});

let mixerPortfolio = mixitup('.media__container', {
    selectors: {
        target: '.media__card'
    },
    animation: {
        duration: 300
    }
});


const linkMedia = document.querySelectorAll('.media__item')

function activeMedia(){
    linkMedia.forEach(l=> l.classList.remove('active-media'))
    this.classList.add('active-media')
}

linkMedia.forEach(l=> l.addEventListener('click', activeMedia))

//media modal ================+
const modalView = document.querySelectorAll('.media__modal'),
    modalBtns = document.querySelectorAll('.media__button-modal'),
    modalClose = document.querySelectorAll('.media__modal-close')

let modal = function(modalClick){
    modalView[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i)=>{
mb.addEventListener('click', () =>{
    modal(i)
})
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click',()=>{
        modalView.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})


// ActividadesMOdal
const modalViewA = document.querySelector('.actividades__modal'),
    modalBtnsA = document.querySelector('.actividades__button'),
    modalCloseA = document.querySelector('.actividades__modal-close')

    if(modalBtnsA){
            modalBtnsA.addEventListener('click', ()=>{
                modalViewA.classList.add('active-modalA')
            })
        }

    if(modalCloseA){
        modalCloseA.addEventListener('click', ()=>{
            modalViewA.classList.remove('active-modalA')
        })
    }

    

// SWIPER PROJECT

let swiperPubli = new Swiper(".publi__container", {
    loop:true,
    spaceBetween: 24,

    // slidesPerView: 2,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
        // 768: {
        //   slidesPerView: 4,
        //   spaceBetween: 40,
        // }
      },
  });


let swiperTest = new Swiper(".testimonial__container", {
    grabCursor: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



const scrollUp = () => {
    const scrollUP = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUP.classList.add('show-scroll')
                          :scrollUP.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        :header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)