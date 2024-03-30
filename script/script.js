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
document.addEventListener("DOMContentLoaded", function () {
  const serviceItems = document.querySelectorAll(".service-item");

  serviceItems.forEach((item) => {
    const serviceTitle = item.querySelector("h3");
    const serviceDetails = item.querySelector(".service-details");

    serviceTitle.addEventListener("click", () => {
      if (serviceDetails.style.maxHeight) {
        serviceDetails.style.maxHeight = null;
      } else {
        serviceDetails.style.maxHeight = serviceDetails.scrollHeight + "px";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menu-toggle");
  var navList = document.querySelector(".nav__list");

  menuToggle.addEventListener("change", function () {
    if (this.checked) {
      navList.classList.add("active");
    } else {
      navList.classList.remove("active");
    }
  });
});

function showSidebar() {
  document.querySelector('.sidebar').style.display = 'block';
}

function hideSidebar() {
  document.querySelector('.sidebar').style.display = 'none';
}

// Close sidebar when clicking outside of it
document.addEventListener('click', function(event) {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('.menu');
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickInsideMenuButton = menuButton.contains(event.target);
  
  if (!isClickInsideSidebar && !isClickInsideMenuButton) {
      sidebar.style.display = 'none';
  }
});



// Get all the social icons


document.getElementById('homeButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById('homeSection').scrollIntoView({ behavior: 'smooth' }); // Scroll to the home section
});

document.getElementById('servicesButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById('servicesSection').scrollIntoView({ behavior: 'smooth' }); 
    sidebar.style.display = "none";
   
});

document.getElementById('aboutButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById('aboutSection').scrollIntoView({ behavior: 'smooth' }); // Scroll to the about section
});

document.getElementById('contactButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' }); // Scroll to the contact section
});


document.addEventListener("DOMContentLoaded", function() {
    var section = document.getElementById("hero");
    var sectionPosition = section.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    window.addEventListener("scroll", function() {
        if (sectionPosition < screenPosition) {
            section.classList.add("animated");
        }
    });
});
