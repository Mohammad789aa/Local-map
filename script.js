// ====================
// SEARCH ELEMENTS
// ====================

const searchInput = document.querySelector("#text-holder");
const serviceSuggestion = document.querySelectorAll(".service-suggestion");
const searchButton = document.querySelector(".btn");
const resultText = document.querySelector(".p2");
const searchIcon = document.querySelector(".search-icon");
let isVisible = false;


// ====================
// SERVICE & RESULT ELEMENTS
// ====================

const serviceCards = document.querySelectorAll(".service-card");
const resultContainer = document.querySelector(".rslt");


// ====================
// POPUP ELEMENTS
// ====================

const contactPopup = document.querySelector(".contact-popup");
const popupName = document.querySelector(".popup-name");
const popupWork = document.querySelector(".popup-work");
const popupRating = document.querySelector(".popup-rating");

const viewAllButton = document.querySelector(".btn2");
const locationButton = document.querySelector(".location-button");
const directionsButton = document.querySelector(".btn3");


// ====================
// SERVICE SUGGESTIONS
// ====================

serviceSuggestion.forEach((service) => {
  service.addEventListener("click", () => {
    searchInput.value = service.textContent;
    searchInput.focus();
    searchButton.click()
    resultContainer.scrollIntoView()
    searchIcon.style.display = "none";
  });
});


// ====================
// CONTACT POPUP
// ====================

const closePopup = document.querySelector(".close-popup");

closePopup.addEventListener("click", () => {
  contactPopup.style.display = "none";
});

viewAllButton.addEventListener("click", () => {
isVisible = !isVisible
if (isVisible) {

  showProviders(providers);


}

else {

  resultContainer.innerHTML = "";


}
});


// ====================
// LOCATION POPUP
// ====================

const locationPopup = document.querySelector(".location-popup");
const closeLocation = document.querySelector(".close-location");
let isLocationVisible = false
locationButton.addEventListener("click", () => {
isLocationVisible = !isLocationVisible
if (isLocationVisible) {
  locationPopup.style.display = "block";


}
else {

locationPopup.style.display = "none"

}

});

closeLocation.addEventListener("click", () => {
  locationPopup.style.display = "none";
});


// ====================
// DIRECTIONS POPUP
// ====================

const directionsPopup = document.querySelector(".directions-popup");
const closeDirections = document.querySelector(".close-directions");

let directionVisible = false;

directionsButton.addEventListener("click", () => {
    directionVisible = !directionVisible;

    directionsPopup.style.display =
        directionVisible ? "block" : "none";
});

closeDirections.addEventListener("click", () => {
    directionVisible = false;
    directionsPopup.style.display = "none";
});

document.addEventListener("click", (e) => {

    if (
        !directionsPopup.contains(e.target) &&
        !directionsButton.contains(e.target)
    ) {
        directionVisible = false;
        directionsPopup.style.display = "none";
    }

});

window.addEventListener("scroll", () => {
    directionVisible = false;
    directionsPopup.style.display = "none";
});
// ====================
// PROVIDERS DATA
// ====================

// ====================
// PROVIDERS DATA
// ====================

let providers = [
    {
        name: "Rahul Electrician",
        service: "electrician",
        work: "Electrical wiring & repair",
        rating: 4.8,
        available: true
    },
    {
        name: "Aman Electrician",
        service: "electrician",
        work: "Fan & electrical repair",
        rating: 4.6,
        available: true
    },
    {
        name: "Ravi Plumber",
        service: "plumber",
        work: "Pipe & tap repair",
        rating: 4.7,
        available: false
    },
    {
        name: "Imran Plumber",
        service: "plumber",
        work: "Bathroom & pipe repair",
        rating: 4.5,
        available: true
    },
    {
        name: "Arjun Plumber",
        service: "plumber",
        work: "Tap & drainage repair",
        rating: 4.9,
        available: false
    }
];


// ====================
// CONTACT PROVIDER
// ====================

resultContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("contact-btn")) {
    const card = event.target.parentElement;

    const providerName = card.querySelector("h3").textContent;
    const providerWork = card.querySelector("p").textContent;
    const providerRating = card.querySelector(".rating").textContent;

    popupName.textContent = providerName;
    popupWork.textContent = providerWork;
    popupRating.textContent = providerRating;

    contactPopup.style.display = "block";
  }
});


// ====================
// SHOW PROVIDERS
// ====================

function showProviders(providersList) {
  resultContainer.innerHTML = "";

  if (providersList.length === 0) {
    resultText.textContent = "No providers found near you";
  } else {
    resultText.textContent =
      providersList.length + " providers found near you";

    providersList.forEach((provider) => {
      resultContainer.innerHTML += `
                <div class="provider-card">
                    <h3>${provider.name}</h3>
                    <p>${provider.work}</p>
                    <p class= "rating">⭐ ${provider.rating}</p>
                    <p>${provider.available ? "🟢 Available" : "🔴 Not Available"}</p>
                    <button class="contact-btn">Contact Provider</button> 
                </div>
            `;
    });
  }
}


// ====================
// SERVICE CARDS
// ====================

serviceCards.forEach((card) => {
  card.addEventListener("click", () => {
    const serviceName = card.querySelector("h3");
    const service = serviceName.textContent.toLowerCase();

    searchInput.value = service;
    searchIcon.style.display = "none";

    resultText.textContent =
      service + " services available near you";

    const matchingProviders = providers.filter((provider) => {
      return provider.service === service;
    });

    showProviders(matchingProviders);
    resultContainer.scrollIntoView();
  });
});







// ====================
// SEARCH BUTTON
// ====================

searchButton.addEventListener("click", () => {
  const service = searchInput.value.trim().toLowerCase();

  const matchingProviders = providers.filter((provider) => {
    return provider.service === service;
  });

  const displayService =
    service.charAt(0).toUpperCase() + service.slice(1);

  if (service === "") {
    alert("Please enter the service");
  } else if (service.includes("plumber")) {
    showProviders(matchingProviders);
    resultContainer.scrollIntoView();
  } else if (service.includes("electrician")) {
    showProviders(matchingProviders);
    resultContainer.scrollIntoView();

  } else if (service.includes("ac repair")) {
    showProviders(matchingProviders);
    resultContainer.scrollIntoView();

  } else if (service.includes("laptop repair")) {
    showProviders(matchingProviders);
    resultContainer.scrollIntoView();

  } else if (service.includes("cleaning")) {
    showProviders(matchingProviders);
    resultContainer.scrollIntoView();

  } else if (service.includes("carpenter")) {
    showProviders(matchingProviders);
    resultContainer.scrollIntoView();

  } else {
    resultText.textContent = "Service not found";
  }
});

searchInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        searchButton.click();
    }

});



// ====================
// SEARCH ICON
// ====================


searchInput.addEventListener("input", () => {
  if (searchInput.value !== "") {
    searchIcon.style.display = "none";
  } else {
    searchIcon.style.display = "inline";
  }
 });
// // Display providers on page
// showProviders(providers)