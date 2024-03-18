const searchButtonIcon = document.querySelector(".search-icon-box");
const searchInput = document.querySelector("#search-input");
const navBarFirstSec = document.querySelector(".nav-bar-one");
const navElementContainer = document.querySelector(".nav-bar-two");
const nav = document.querySelector("nav");
const mainContainer = document.querySelector("main");

function searchData() {
  navBarFirstSec.classList.add("js-nav-bar-one");
  navElementContainer.classList.add("js-nav-bar-two");
}

function hideData() {
  navBarFirstSec.classList.remove("js-nav-bar-one");
  navElementContainer.classList.remove("js-nav-bar-two");
  // seeAllPopUp.style.display="none"
}

searchInput.addEventListener("click", searchData);
mainContainer.addEventListener("click", hideData);

// searchButtonIcon.addEventListener("click", () => {
// searchInput.classList.toggle("js-search-input");

//   // searchInput.style.display="block";
//   // searchInput.style.width = "160vw";
//   // navElementContainer.classList.toggle("js-nav-bar-two");
// });

const seeMoreProfile = document.querySelector(".see-more-less-button");
const profileBottomContent = document.querySelector(".profile-bottom-content");
const profileBottomBox = document.querySelector(".profile-bottom");
const connect_network = document.querySelector(".get-network-box");
const premiumBox = document.querySelector(".get-premium-box");
const userItems = document.querySelector(".get-my-items-box");
let seeMore = true;
seeMoreProfile.addEventListener("click", () => {
  // to change the text of the see more btn to see less;

  profileBottomBox.classList.toggle("js-profile-bottom");
  profileBottomContent.classList.toggle("js-profile-bottom-content");
  if (seeMore) {
    seeMoreProfile.innerHTML = `See less <i class="ri-arrow-up-line"></i>`;

    connect_network.style.display = "flex";
    premiumBox.style.display = "flex";
    userItems.style.display = "flex";
    seeMore = false;
  } else {
    seeMoreProfile.innerHTML = `See more <i class="ri-arrow-down-line"></i>`;
    seeMore = true;
    connect_network.style.display = "none";
    premiumBox.style.display = "none";
    userItems.style.display = "none";
  }
});

// for animated loader
document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading time (3 seconds in this example)
  let time = 2000;
  setTimeout(function () {
    // Hide the loader
    document.querySelector(".loader-wrapper").style.display = "none";
    // Show the content
    document.querySelector("main").style.display = "block";
    document.querySelector("nav").style.display = "flex";
  }, time);
});
