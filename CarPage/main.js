let contentHeaderTitle = document.getElementById('content-header-title');
let menuItemCars = document.getElementById('menu-item-cars');
let menuItemFavourite = document.getElementById('menu-item-favourite');
let menuItemCompare = document.getElementById('menu-item-compare');

let welcomePage = document.getElementById('welcome-page');
let carsPage = document.getElementById('cars-page');
let favouritePage = document.getElementById('favourite-page');
let comparePage = document.getElementById('compare-page');

function selectPage(title, menuItemName) {
    menuItemCars.classList.remove('active');
    menuItemFavourite.classList.remove('active');
    menuItemCompare.classList.remove('active');

    welcomePage.classList.add('disp-none');
    carsPage.classList.add('disp-none');
    favouritePage.classList.add('disp-none');
    comparePage.classList.add('disp-none');

    switch(menuItemName) {
        case 'menu-item-cars':
            menuItemCars.classList.add('active');
            carsPage.classList.remove('disp-none');            
            break;
        case 'menu-item-favourite':
            menuItemFavourite.classList.add('active');
            favouritePage.classList.remove('disp-none');
            break;
        case 'menu-item-compare':
            menuItemCompare.classList.add('active');
            comparePage.classList.remove('disp-none');
            break;
            
    }
    contentHeaderTitle.textContent = title;
}
