const mytap = ( window.ontouchstart === null ) ? 'touchend' : 'click';
console.log(mytap);

const menuButton = document.getElementById('menu-button');
const menuContainer = document.getElementById('menu-container');
const menuList = document.querySelector('nav ul');
const menuListItems = document.querySelectorAll('nav ul li');
const shopHeader = document.getElementById('shop-header');

menuButton.addEventListener(mytap, () => {
    menuButton.classList.toggle('active');
    menuContainer.classList.toggle('active');
    menuList.classList.toggle("d-none");
    if(!menuButton.classList.contains('active')){
        carousel.classList.add("d-none");
    }
    shopHeader.classList.toggle('opacity-0');
});

const brandDropdown = document.getElementById("brands-dropdown");
const thinLine = document.querySelector(".thin-line");
const brandDropdownList = document.getElementById("brands-list");
const carousel = document.getElementById("brand-images-carousel");

brandDropdown.addEventListener(mytap, () => {
    thinLine.classList.toggle("grow");
    brandDropdownList.classList.toggle("grow");
    carousel.classList.remove("d-none");
});


let currentTarget = null; 
menuListItems.forEach((menuItem) => {
    menuItem.addEventListener(mytap, (e) => {
        if (currentTarget === null) {
            currentTarget = e.currentTarget;
            e.currentTarget.classList.add('active'); 
        }

        if (e.currentTarget.id === "brands-dropdown") {
            thinLine.classList.remove("ungrow");
            thinLine.classList.add("grow");
            brandDropdownList.classList.remove("ungrow");
            brandDropdownList.classList.add("grow");
        } else {
            if (thinLine.classList.contains("grow")) {
                brandDropdownList.classList.remove("grow");
                brandDropdownList.classList.add("ungrow");
                thinLine.classList.remove("grow");
                thinLine.classList.add("ungrow");
                carousel.classList.add("d-none");
            }
        }

        if (currentTarget !== e.currentTarget) {
            currentTarget.classList.remove('active'); 
            e.currentTarget.classList.add('active'); 
            currentTarget = e.currentTarget;
        }
    });
});
