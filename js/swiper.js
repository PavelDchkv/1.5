let swiper;
let isInit = false;
let pag = document.querySelector('.brand-swiper__pagination');

let block = document.querySelector('.brand-swiper__wrapper');
let button = document.querySelector('.button-showmore');
let text = button.querySelector('.button-showmore__text');
let isActiveButton = false;

function swiperMode() {
    let mobile = window.matchMedia('(max-width: 767.5px)');
    if(mobile.matches) {
        if (!isInit) {
            isInit = true;
            swiper = new Swiper('.brand-swiper', {
                loop: true,
                loopedSlides: 3,
                pagination: {
                    el: '.brand-swiper__pagination',
                    clickable: true,
                },
                slidesPerView: "auto",
                speed: 700,
            });
            pag.classList.remove('display-none');
        }
    }
    else {
        if(isInit) {
            swiper.destroy(true, true);
            isInit = false;
            pag.classList.add('display-none');
        }
    }
}

function isOverflowed(el) {
    //el.scrollWidth > el.offsetWidth ||
    return el.scrollHeight > el.clientHeight;
}

function showButton() {
    let brandSwiper = document.querySelector('.brand-swiper');
    if (!isOverflowed(brandSwiper) && (!isActiveButton)) {
        // button.classList.add('display-none');
        button.style.display = 'none';
    } else {
        button.style.display = 'block';
    }
}

window.addEventListener('load', function() {
    swiperMode();
    showButton();
});

window.addEventListener('resize', function() {
    swiperMode();
    if(isActiveButton) {
        button.click();
    }
    showButton();
});

button.addEventListener('click', function () {
    if (!isActiveButton) {
        block.style.maxHeight = '500px';
        // setTimeout( () => text.innerHTML = 'Скрыть', 150);
        text.textContent = 'Скрыть'
        isActiveButton = true;
        button.classList.add('rotate');
    } else {
        block.style.maxHeight = '200px';
        isActiveButton = false;
        // setTimeout(() => text.innerHTML = 'Показать все', 200);
        text.textContent = 'Показать все';
        button.classList.remove('rotate');
    }
});
