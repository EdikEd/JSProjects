let contentHeaderTitle = document.getElementById('content-header-title');
let menuItemCars = document.getElementById('menu-item-cars');
let menuItemFavourite = document.getElementById('menu-item-favourite');
let menuItemCompare = document.getElementById('menu-item-compare');

let welcomePage = document.getElementById('welcome-page');
let carsPage = document.getElementById('cars-page');
let favouritePage = document.getElementById('favourite-page');
let comparePage = document.getElementById('compare-page');

function generateCarList() {

    let carList = document.getElementById('car-list');
    cars.map((car) => carList.innerHTML += `<div class="car-card">
        <div class="car-card-content">
            <div class="car-placeholder-image">
                <img src="vehicle-placeholder.png" class="car-image" alt="cat-placeholder">
                <p class="text-center mt-1"><strong class="fz-L">${car.brand}</strong></p>
            </div>
            <div class="car-desc">
                <p class="car-desc-item">
                    <span><strong>Model</strong>:</span><span id="car-model">${car.model}</span>
                </p>
                <p class="car-desc-item">
                    <strong>Model year</strong>:<span id="car-model-year">${car.modelYear}</span>
                </p>
                <p class="car-desc-item">
                    <strong>Fuel</strong>:<span id="car-fuel">${car.fuel}</span>
                </p>
                <p class="car-desc-item">
                    <strong>Car body</strong>:<span id="car-body">${car.carBody}</span>
                </p>
                <p class="car-desc-item">
                    <strong>Color</strong>:<span id="car-color">${car.color}</span>
                </p>
                <p class="car-desc-item">
                    <strong>Mileage</strong>:<span id="car-model">${car.mileage}</span>
                </p>            
            </div>
        </div>
        <div class="card-actions mt-1">
            <button class="mr-1 btn btn-info" onclick="addToComparison('${car.id}')">Add to compare</button>
            <button class="btn btn-warning" onclick="addToFavourites('${car.id}')">Add to favourites</button>
        </div>
    </div>`);
}

function generateFavourites() {
    let carList = document.getElementById('favourite-car-list');
    let car = favouriteCars.pop();
    carList.innerHTML += `<div class="car-card">
        <div class="car-card-content">
            <div class="car-placeholder-image">
                <img src="vehicle-placeholder.png" class="car-image" alt="cat-placeholder">
                <p class="text-center mt-1"><strong class="fz-L">${car.brand}</strong></p>
            </div>
            <div class="car-desc">
                <p class="car-desc-item">
                    <span><strong>Model</strong>:</span><span id="car-model">${car.model}</span>
                </p>
                <p class="car-desc-item">
                    <strong>Model year</strong>:<span id="car-model-year">${car.modelYear}</span>
                </p>
                <p class="car-desc-item">
                    <strong>Fuel</strong>:<span id="car-fuel">${car.fuel}</span>
                </p>
                <p class="car-desc-item">
                    <strong>Car body</strong>:<span id="car-body">${car.carBody}</span>
                </p>
                <p class="car-desc-item">
                    <strong>Color</strong>:<span id="car-color">${car.color}</span>
                </p>
                <p class="car-desc-item">
                    <strong>Mileage</strong>:<span id="car-model">${car.mileage}</span>
                </p>            
            </div>
        </div>
        <div class="card-actions mt-1">
            <button class="mr-1 btn btn-info" onclick="addToComparison('${car.id}')">Add to compare</button>            
        </div>
    </div>`;
}

function generateComparisonCars() {
    let compareTable = document.getElementById('compare-table')
    let carToCompare = compareCars.pop();
    compareTable.innerHTML += `
            <tr>
                <td>${carToCompare.model}</td>
                <td>${carToCompare.brand}</td>
                <td>${carToCompare.modelYear}</td>
                <td>${carToCompare.fuel}</td>
                <td>${carToCompare.carBody}</td>
                <td>${carToCompare.color}</td>
                <td>${carToCompare.mileage}</td>
            </tr>        
    `
}

function addToComparison(carId) {
    compareCars.push(getElemByIdFromArr(cars,carId));
    generateComparisonCars();
}

function addToFavourites(carId) {
    favouriteCars.push(getElemByIdFromArr(cars,carId));    
    generateFavourites();
}

function getElemByIdFromArr(arr, elemId) {
    return arr.filter((item) => item.id == elemId)[0];
}

function main() {
    generateCarList();    
}

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


main();