// Funksioni per te hapur detajet e vetures ne nje faqe te re
function openCarDetails(carId) {
    localStorage.setItem('carId', carId);
    window.location.href = 'car-details.html';
}

// i merr te dhanat e vetures kur ngarkohet faqja 
window.onload = function() {
    const carId = localStorage.getItem('carId');
    
    if (carId) {
        const carData = getCarData(carId);
        document.getElementById('car-name').innerText = carData.name;
        document.getElementById('car-description').innerText = carData.description;
        document.getElementById('car-detail-image').src = carData.image;
    }
};

// te dhenat qe i futum per veturen
function getCarData(carId) {
    const cars = {
        car1: {
            name: 'Car Model 1',
            description: 'This is a description of Car Model 1.',
            image: 'car1.jpg'
        },
        car2: {
            name: 'Car Model 2',
            description: 'This is a description of Car Model 2.',
            image: 'car2.jpg'
        },
        car3: {
            name: 'Car Model 3',
            description: 'This is a description of Car Model 3.',
            image: 'car3.jpg'
        },
        
    };
    return cars[carId] || {};
}