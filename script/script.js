// const API_URL = 'https://picsum.photos/1920/1080'; // Lorem Picsum API for random images

// // Fetch random background image from the Lorem Picsum API
// fetch(API_URL)
// .then(response => {
//     const hero = document.getElementById('hero');
//     const heroText = document.getElementById('hero-text');

//     // Set background image
//     hero.style.backgroundImage = `url('${response.url}')`;

//     // Update hero text with placeholder text
//     heroText.textContent = "Empowering businesses with robust web hosting and IT solutions that propel their success in the digital world";
// })
// .catch(error => {
//     console.error('Error fetching background image:', error);
// });
document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        const serviceTitle = item.querySelector('h3');
        const serviceDetails = item.querySelector('.service-details');

        serviceTitle.addEventListener('click', () => {
            if (serviceDetails.style.maxHeight) {
                serviceDetails.style.maxHeight = null;
            } else {
                serviceDetails.style.maxHeight = serviceDetails.scrollHeight + 'px';
            }
        });
    });
});
