var isMobile = ('ontouchstart' in document.documentElement);

const headerH1 = document.querySelector("#header-display");
const headerLine = document.querySelector("#header-thin-line");
const headerLogo = document.querySelector("#logo");
const headerMenuButton = document.querySelector("#menu-button");
const headerText = document.querySelectorAll("nav a");
const listAsterisk = document.querySelectorAll("nav img");
const brandThinLine = document.querySelector(".thin-line");

const whiteElements = () =>{
    headerH1.classList.remove('text-black');
    headerH1.classList.add('text-white');
    headerH1.classList.add('fw-bold');

    headerLine.classList.remove('black');
    headerLogo.src = "images/logos/plop_logo_white.png";
    headerMenuButton.classList.remove('black');
    headerText.forEach((text)=>{
        text.classList.remove("link-dark");
        text.classList.add("link-light");
    })
    listAsterisk.forEach((asterisk)=>{
        asterisk.src = "images/asterisk_white.png";
    })
    brandThinLine.classList.remove('black');
}

const blackElements = ()=>{
    headerH1.classList.remove('text-white');
    headerH1.classList.add('text-black');
    headerH1.classList.remove('fw-bold');
    headerLine.classList.add('black');
    headerLogo.src = "images/logos/plop_logo.png";
    headerMenuButton.classList.add('black');
    headerText.forEach((text)=>{
        text.classList.add("link-dark");
        text.classList.remove("link-light");
    })
    listAsterisk.forEach((asterisk)=>{
        asterisk.src = "images/asterisk.png";
    })
    brandThinLine.classList.add('black');
}

const aboutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.location.hash = '#about';
            headerH1.innerHTML="ABOUT";
            headerH1.classList.remove("fst-italic");
            blackElements();
        }
    });
}, {
    threshold: 0.3
});

const landingObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.location.hash = '';
            headerH1.innerHTML="PLOP";
            headerH1.classList.remove("fst-italic");
            whiteElements();
        }
    });
}, {
    threshold: 0.5
});

const plopExclusiveObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.location.hash = '#plop-exclusive';
            if(isMobile){
                headerH1.innerHTML="PLOP EXCLUSIVE";
            }
            else{
                headerH1.innerHTML="PLOP ––– EXCLUSIVE";
            }
            blackElements();
            headerH1.classList.add("fst-italic");
        }
    });
}, {
    threshold: 0.2
});

const shopChooseObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.location.hash = '#shop-choose';
            headerH1.innerHTML="SHOP";

            whiteElements();
        }
    });
}, {
    threshold: 0.2
});

const landingElement = document.getElementById('landing');
const aboutElement = document.getElementById('about');
const plopExclusiveElement = document.getElementById('plop-exclusive');
const shopChooseElement = document.getElementById('shop-choose');

landingObserver.observe(landingElement);
aboutObserver.observe(aboutElement);
plopExclusiveObserver.observe(plopExclusiveElement);
shopChooseObserver.observe(shopChooseElement);