const homePageBtn = document.querySelector(".main-home-page");
const newWorkPageBtn = document.querySelector(".network-btn");
const jobsPageBtn = document.querySelector(".jobs-page-btn");
const messagepPageBtn = document.querySelector(".message-page-btn");
const notificationBtn = document.querySelector(".notification-btn");
const userMeBtn = document.querySelector(".user-box");
const businessBtn = document.querySelector(".business-btn");
const businessPopUp = document.querySelector(".business-container-pop-up");
const businessCrossBtn = document.querySelector(".business-cross-btn");
const userPopUp = document.querySelector(".user-me-pop-up-box");
const postJobBtn = document.querySelector(".post-job-btn");
// const mainContainer = document.querySelector("main");

// let selectedButton; //for only show one popup at a time;

homePageBtn.addEventListener("click", (evt) => {
  window.location.href = "index.html";
});

newWorkPageBtn.addEventListener("click", (evt) => {
  mainContainer.innerHTML = `
  <div class="complete-newtork-hero-container">
  <div class="network-boxes-container">
    <div class="left-container">
      <div class="manage-network-container">
        <div class="title-network">Manage my network</div>
        <div class="connections-title global-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="4vmin"
            height="4vmin"
            focusable="false"
          >
            <path
              d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"
            ></path>
          </svg>
          Connections
        </div>
        <div class="network-main-btns-container">
          <p><i class="ri-user-follow-line"></i>  Following & followers</p>
          <p><i class="ri-group-line"></i>  Groups</p>
          <p><i class="ri-calendar-event-line"></i>  Events</p>
          <p><i class="ri-pages-fill"></i>  Pages</p>
          <p><i class="ri-newspaper-line"></i>  Newsletters</p>
          <p><i class="ri-hashtag"></i>  Hashtags</p>
        </div>
        <div class="network-more-btn global-hover">See more <i class="fa-solid fa-angle-down"></i></div>
      </div>
      <div class="image-container">
        <img src="random.png" width="100%" alt="" />
      </div>
      <div class="network-footer">
        <div class="links-container-side">
          <p>
            <a href="#">About</a>
            <a href="#">Accessibilty</a>
            <a href="#">Help Center</a>
          </p>
          <p>
            <a href="#">Privacy & Terms </a>
            <a href="#">Ad Choices</a>
            <a href="#">Advertising</a>
          </p>
          <p>
            <a href="#">Business Services</a>
            <a href="#">Get the Linked app</a>
            <a href="#">More</a>
          </p>
        </div>
        <div class="copy-right-text">
          <i class="ri-linkedin-box-fill"></i> Kuldip Sirpali &copy; 2024
        </div>
      </div>
    </div>

    <div class="right-main-container">

    </div>

    <div class="more-recommened-popup-container">
    
    <div class="recommended-heading"><span class="recommended-title"></span><span class="close-recom-page"><i class="ri-close-line global-hover"></i></span></div>
    <div class="all-recommended-container">
    </div>
    
    </div>

  </div>
  </div>
</div>
  `;

  const netSeeMoreBtn = document.querySelector(".network-more-btn");
  const networeMoreLinks = document.querySelector(
    ".network-main-btns-container"
  );
  const networkLeftCon = document.querySelector(".left-container");
  let wantMore = true; // to see more
  netSeeMoreBtn.addEventListener("click", () => {
    networeMoreLinks.classList.toggle("js-show-more-network");
    networkLeftCon.classList.toggle("js-left-container");
    if (wantMore) {
      netSeeMoreBtn.innerHTML = `See Less <i class="fa-solid fa-angle-up"></i>`;
      wantMore = false;
    } else {
      netSeeMoreBtn.innerHTML = `See more <i class="fa-solid fa-angle-down"></i>`;
      wantMore = true;
    }
  });

  const rightMainContainer = document.querySelector(".right-main-container");
  for (const suggestion of suggestionPages) {
    rightMainContainer.innerHTML += `<div class="network-main-container">
  <div class="users-type-title">
  <span class="suggestion-title">${suggestion.suggestionTitle}</span>
    <span><button  class="global-hover see-all-btn" data-type=${suggestion["data-type"]}>See all </button></span>
  </div>
  <div class="user-profile-main-container ">

  </div>
</div>`;
  }

  //for showing users using data from backend
  const recommmenedUserbox = document.querySelectorAll(
    ".user-profile-main-container"
  );
  //for tech related people
  for (const peoplesData of techRecommendedData) {
    recommmenedUserbox[0].innerHTML += `<div class="users-container-box">
      <div class="cover-box">
         <img src="${peoplesData["cover-image"]}" width="100%" alt="">
        </div>
         <div class="users-profile-box"><img src="${peoplesData["profile-image"]}" width="100%" alt=""></div>
        <div class="users-info-box">
       <span class="user-name-box">${peoplesData.username}</span>
       <p>${peoplesData.about}</p>
     </div>
    <div class="show-follower-count-box"><span>${peoplesData.followerCount}</span> followers </div>
   <div><button class="follow-btn">Follow</button></div>
    </div>`;
  }

  // for groups
  for (const groupsPeople of groupsData) {
    recommmenedUserbox[1].innerHTML += `<div class="users-container-box">
      <div class="cover-box">
         <img src="${groupsPeople["cover-image"]}" width="100%" alt="">
        </div>
         <div class="users-profile-box"><img src="${groupsPeople["profile-image"]}" width="100%" alt=""></div>
        <div class="users-info-box">
       <span class="user-name-box">${groupsPeople.username}</span>
       <p>${groupsPeople.about}</p>
     </div>
    <div class="show-follower-count-box"><span>${groupsPeople.followerCount}</span> followers </div>
   <div><button class="follow-btn">${groupsPeople.buttonText}</button></div>
    </div>`;
  }

  // for popular peoples
  for (const popularPeople of popularPeoplesData) {
    recommmenedUserbox[2].innerHTML += `<div class="users-container-box">
      <div class="cover-box">
         <img src="${popularPeople["cover-image"]}" width="100%" alt="">
        </div>
         <div class="users-profile-box"><img src="${popularPeople["profile-image"]}" width="100%" alt=""></div>
        <div class="users-info-box">
       <span class="user-name-box">${popularPeople.username}</span>
       <p>${popularPeople.about}</p>
     </div>
    <div class="show-follower-count-box"><span>${popularPeople.followerCount}</span> followers </div>
   <div><button class="follow-btn">Follow</button></div>
    </div>`;
  }

  //for more suggestion
  for (const moreSuggested of morePeopleData) {
    let moreSuggestedHtml = `<div class="users-container-box">
    <div class="cover-box">
       <img src="${moreSuggested["cover-image"]}" width="100%" alt="">
      </div>
       <div class="users-profile-box"><img src="${moreSuggested["profile-image"]}" width="100%" alt=""></div>
      <div class="users-info-box">
     <span class="user-name-box">${moreSuggested.username}</span>
     <p>${moreSuggested.about}</p>
   </div>
  <div class="show-follower-count-box"><span>${moreSuggested.followerCount}</span> followers </div>
 <div><button class="follow-btn">Follow</button></div>
  </div>`;
    recommmenedUserbox[3].innerHTML += moreSuggestedHtml;
  }

  ///for seeing all the as per user choice
  const seeAllBtn = document.querySelectorAll(".see-all-btn");
  const seeAllPopUp = document.querySelector(
    ".more-recommened-popup-container"
  );
  const recommendedContainer = document.querySelector(
    ".all-recommended-container"
  );
  const recommendedTitle = document.querySelector(".recommended-title");
  const closeRecom = document.querySelectorAll(".close-recom-page");
  seeAllBtn.forEach((seeButton) => {
    seeButton.addEventListener("click", updateSeeAll);
    function updateSeeAll() {
      seeAllPopUp.classList.toggle("js-see-all-pop-up");
      recommendedContainer.innerHTML = ""; //to remove previous element and add new elements
      let dataType = seeButton.getAttribute("data-type");
      // console.log(dataType);
      let seeAlldata;
      switch (dataType) {
        case "tech":
          seeAlldata = seeAllTechRecom;
          break;
        case "groups":
          seeAlldata = seeAllGroupsRecom;
          break;
        case "popPeople":
          seeAlldata = popularPeoplesData;
          break;
        case "morePeople":
          seeAlldata = morePeopleData;
          break;
      }
      for (const allDatas of seeAlldata) {
        recommendedTitle.innerHTML = `See more people`; //title for every page
        recommendedContainer.innerHTML += `<div class="users-container-box">
    <div class="cover-box">
     <img src="${allDatas["cover-image"]}" width="100%" alt="">
     </div>
       <div class="users-profile-box"><img src="${allDatas["profile-image"]}" width="100%" alt=""></div>
        <div class="users-info-box">
    <span class="user-name-box">${allDatas.username}</span>
     <p>${allDatas.about}</p>
    </div>
    <div class="show-follower-count-box"><span>${allDatas.followerCount}</span> followers </div>
    <div><button class="follow-btn">Follow</button></div>
   </div>`;
      }
    }
  });

  // to close  all the seemore popup
  for (const closeBtns of closeRecom) {
    closeBtns.addEventListener("click", () => {
      seeAllPopUp.classList.toggle("js-see-all-pop-up");
    });
  }
});

// end of network page

jobsPageBtn.addEventListener("click", (evt) => {
  mainContainer.innerHTML = `<div class="main-job-container">
  

  <div class="jobs-left-container">
  <div  class="top-job-text global-hover">
  <span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
    </svg>
  </span>
  My jobs
  </div>

  <div class="more-jobs-links">
    <div class="global-hover">
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
          <path d="M7 4a2 2 0 11-2-2 2 2 0 012 2zm2-1v2h12V3zm-4 7a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9zm-4 5a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9z"></path>
        </svg>
      
      </span>
    Preference
    </div>


    <div class="global-hover">
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
          <path d="M21 4L10 20l-6-6 1.41-1.41 4.3 4.3L18.57 4z"></path>
        </svg>
      </span>
      Demonstrate skills
    </div>



    <div class="global-hover">
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
          <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
        </svg>
      </span>
      Interview prep
    </div>

  <div class="global-hover">
    <span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
        <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
      </svg>
    </span>
    Resume Builder
  </div>

    <div class="global-hover">  
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
          <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
        </svg>
      </span>
      Job seeker guidence
    </div>

    <div class="global-hover">
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
          <path d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"></path>
        </svg>
      </span>
      Application settings
    </div>
  
  </div class="global-hover">
    <div class="job-post-container"><button>
    <span>Post a job</span>
    </button>
    </div>

  </div class="global-hover">
  
  <div class="jobs-middle-container">

    <div class="jobs-recommended-container">
            <div class="recommded-title-box">
                <p>Recommended for you</p>
                <span>Based on your profile and search history</span>
            </div>
            
        <div class="jobs-container">
           <div class="jobs-data-container"> </div>
           <div class="see-all-jobs global-hover"><a href="#">See all <i class="ri-arrow-right-line"></i></a></div>  
        </div>
  
    </div>



  </div>

  <div class="jobs-right-container">
  
  <div class="jobs-right-top">
  
  <div class="top-title">
  <p><b>Job seeker guidance</b></p>
  <p>Recommended based on your activity</p>
  </div>
  

  <div class="improve-resume global-hover">
      <span>I want to improve resume</span>
      <span class="resume-icon"><img src="profile1.jpg" width="100%"></span>
  </div>

  <div class="guide-discription">
  Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity
  </div>
  <div class="explore-more-guide "><a href="#">See more <i class="ri-arrow-right-line"></i></a></div>
  </div>
  <div class="jobs-right-bottom">
  <div class="network-footer">
  <div class="links-container-side">
    <p>
      <a href="#">About</a>
      <a href="#">Accessibilty</a>
      <a href="#">Help Center</a>
    </p>
    <p>
      <a href="#">Privacy & Terms </a>
      <a href="#">Ad Choices</a>
      <a href="#">Advertising</a>
    </p>
    <p>
      <a href="#">Business Services</a>
      <a href="#">Get the Linked app</a>
      <a href="#">More</a>
    </p>
  </div>
  <div class="copy-right-text">
    <i class="ri-linkedin-box-fill"></i> Kuldip Sirpali &copy; 2024
  </div>
</div>

</div>
  
  
  </div>
  </div> `;
  const jobsContainer = document.querySelector(".jobs-data-container");
  for (const dataJob of jobsData) {
    jobsContainer.innerHTML += `
    <div class="jobs-data">
      <div class="company-logo"><span><img src="${dataJob.companyLogo}" width="100%"></span></div>
      <div class="job-informations">
        <div class="job-content-one">
          <div>${dataJob.position}</div>
          <div class="remove-job"><i class="ri-close-line global-hover cross-job"></i></div>
        </div>
        <div class="company-name-box"><span>${dataJob.companyName}</span></div>
        <div class="job-type"><span>${dataJob.type}</span></div>
        <div class="profile-matching">
          <div class="job-profile">
            <img src="profileai.jpg" width="100%">
          </div>
          <span>Your profile matches this job</span>
        </div>
        <div class="job-validation">Promoted</div>
      </div>
    </div>`;
  }
  const removeJobBtns = document.querySelectorAll(".remove-job");
  removeJobBtns.forEach((removeBtn) => {
    removeBtn.addEventListener("click", () => {
      // Get the index of the job to be removed based on its position in the DOM
      const jobIndex = Array.from(
        removeBtn.closest(".jobs-data").parentNode.children
      ).indexOf(removeBtn.closest(".jobs-data"));

      // Confirm removal with the user
      if (confirm("Do you really want to remove this job?")) {
        // Remove the job from the jobsData array
        jobsData.splice(jobIndex, 1);
        // Remove the job from the UI
        removeBtn.closest(".jobs-data").remove();
      }
    });
  });
});

messagepPageBtn.addEventListener("click", (evt) => {
  mainContainer.innerHTML = `
  <div class="main-message-container">
  
        <div class="left-message-container">
        
        
        
              <div class="mini-message-container">
                  <div class="message-top-heading">
                      <p>Messaage</p>
                
                      <div class="edit-and-manage"><p><i class="fa-solid fa-ellipsis global-hover"></i></p>
                      <p> <i class="fa-solid fa-pen-to-square global-hover create-msg-btn"></i></p>
                      </div>

                  </div>



                <div class="search-message-box"><i class="ri-search-line msg-search-icon"></i><input type="search" placeholder="Search messages" autofocus></div>
                
              </div>
              







            <div class="large-message-container">
            
                  <div class="large-msg-top"><p>New message</div>
                  <div class="msg-search-box"><input type="text" placeholder="Type a name or multiple names"></div>
                  <div class="empty-msg-div"></div>

                  <div class="message-transfer-container">
                      <textarea type="text" class="type-message-container" placeholder="Write a message..." ></textarea>
                      <div class="levelup-msg-area"> <i class="ri-arrow-up-wide-line global-hover increase-area-btn"></i></div>

                  </div>


                  <div class="files-and-send-container">
                         <div class="files-box">
                            <span><input type="file" style="display:none; " id="photos"><label for="photos"><i class="ri-image-fill global-hover"></i></label></span>

                            <span><input type="file" style="display:none; " id="files"><label for="files"><i class="ri-attachment-2 global-hover "></i></label></span>
                            <span><i class="ri-file-gif-line global-hover "></i></span>
                            <span><i class="ri-emoji-sticker-line global-hover"></i></span>
                         </div>


                         <div class="send-msg-box">
                         <button class="send-msg-button">Send</button> <span><i class="fa-solid fa-ellipsis global-hover"></i></span>
                         </div>
                  
                  
                  </div>



            </div>
        
        





            <div class="mini-message-container-pop-up">
                <div class="message-top-heading">
                <span class="msg-user-profile"><img src="profileai.jpg" width="100%"></span>   <p>Messaage</p>
                    <div class="edit-and-manage"><p><i class="fa-solid fa-ellipsis global-hover "></i></p>
                    <p> <i class="fa-solid fa-pen-to-square global-hover create-msg-btn"></i> <i class="ri-arrow-up-wide-line global-hover show-message-pop-up"></i></p>
                    </div>
                </div>
              <div class="search-message-box"><i class="ri-search-line msg-search-icon"></i><input type="search" placeholder="Search messages" autofocus></div>
            </div>  











        
        
        
      
        </div>
        
        <div class="right-message-container">
                <div class="msg-right-top"><img src="msgImage.jpg" width="100%"></div>
                <div class="msg-right-bottom">
                      <div class="links-container-side">
                            <p>
                              <a href="#">About</a>
                              <a href="#">Accessibilty</a>
                              <a href="#">Help Center</a>
                            </p>
                            <p>
                              <a href="#">Privacy & Terms </a>
                              <a href="#">Ad Choices</a>
                              <a href="#">Advertising</a>
                            </p>
                            <p>
                              <a href="#">Business Services</a>
                              <a href="#">Get the Linked app</a>
                              <a href="#">More</a>
                            </p>
                    </div>
                    <div class="copy-right-text">
                    <i class="ri-linkedin-box-fill"></i> Kuldip Sirpali &copy; 2024
                  </div>

                </div>
        
        </div>
       



  </div>`;

  // for showing message popup
  const msgPopUpBtn = document.querySelector(".show-message-pop-up");
  const msgPopUpContainer = document.querySelector(
    ".mini-message-container-pop-up"
  );
  msgPopUpBtn.addEventListener("click", () => {
    msgPopUpContainer.classList.toggle("js-msg-pop-up");
  });

  // for increasing the height of message box

  const increaseBtn = document.querySelector(".increase-area-btn");
  const msgContainer = document.querySelector(".message-transfer-container");
  const loaderEle = document.querySelector(".empty-msg-div");
  increaseBtn.addEventListener("click", () => {
    msgContainer.classList.toggle("js-msg-container");
    loaderEle.classList.toggle("js-hide-empty");
  });
  //for showing border-loader
  const msgBox = document.querySelector(".type-message-container");
  msgBox.addEventListener("focus", () => {
    loaderEle.classList.toggle("js-empty-loader");
  });

  //for sending message
  function processMessage(e) {
    if (msgBox.value != "") {
      let newMessage = document.createElement("div");
      newMessage.classList.add("msg-item");
      newMessage.innerHTML = msgBox.value;
      loaderEle.append(newMessage);
      msgBox.value = "";
    } else {
      alert("No message");
    }
  }
  function sendKeyMsg(e) {
    if (e.key === "Enter") {
      processMessage();
    }
  }

  function sendBtnMsg() {
    processMessage();
  }

  msgBox.addEventListener("keyup", sendKeyMsg);

  const msgSendBtn = document.querySelector(".send-msg-button");
  msgSendBtn.addEventListener("click", sendBtnMsg);

  // for creating new msg
  const createNewMsgBtns = document.querySelectorAll(".create-msg-btn");
  createNewMsgBtns.forEach((createMsg) => {
    createMsg.addEventListener("click", () => {
      const searchMessage = document.querySelector(".msg-search-box input");
      searchMessage.focus();
    });
  });
});

notificationBtn.addEventListener("click", (evt) => {
  mainContainer.innerHTML = ` 
  <div class="hero-container">

        <aside class="left-notification-container">
         <p>Manage your notficiations</p>
        <p><a href="#">View settings</a></p>
        </aside>

      <div class="main-hero-notification-container">

            <div class="filter-notifications-container">
              <div class="filter-buttons">
                  <button class="all-notifi-btn">All</button>
                  <button class="my-posts-btn">My Posts</button>
                  <button class="mentions-btn">Mentions</button>
              </div>
            </div>


            <div class="all-notifications-container">

            
            </div>


      </div>


  
              <aside class="side-footer-notification">
                    <div class="notification-side-footer-two">
                      <img src="random.png" width="100%" alt="" />
                    </div>

                    <div class="side-footer-three">
                      <div class="links-container-side">
                        <p>
                          <a href="#">About</a>
                          <a href="#">Accessibilty</a>
                          <a href="#">Help Center</a>
                        </p>

                        <p>
                          <a href="#">Privacy & Terms </a>
                          <a href="#">Ad Choices</a>
                          <a href="#">Advertising</a>
                        </p>

                        <p>
                          <a href="#">Business Services</a>
                          <a href="#">Get the Linked app</a>
                          <a href="#">More</a>
                        </p>
                      </div>
                      <div class="copy-right-text">
                        <i class="ri-linkedin-box-fill"></i> Kuldip Sirpali &copy; 2024
                      </div>
                    </div>
            </aside>

            
</div>
`;

  const mainNotificationContainer = document.querySelector(
    ".all-notifications-container"
  );

  function showAllNotifications() {
    notificationsData.forEach((notificationContainer) => {
      mainNotificationContainer.innerHTML += `   
      
      <div class="notification-box global-hover">
  
        <div class="page-logo">
            <span><img src="${notificationContainer.logo}" width="100%"><span>
        </div>
  
      <div class="notification-content">
            <div class="texts-contents">
            ${notificationContainer.content}
            </div>
      </div>
  
  
      <div class="time-delete-notification">
          <div class="notific-time">${notificationContainer.time}</div>
          <div class="delete-noti-pop-up"><i class="fa-solid fa-ellipsis global-hover"></i></div>
      </div>
  
  </div>
  

  <div class="delete-pop-up-container">
  <div class="noti-del-btn global-hover" >
       <span><i class="ri-delete-bin-5-fill"></i></span>
       <span>Delete notification</span>
  </div>
</div>
  `;
    });
  }
  showAllNotifications(); //calling function directly

  // for showing my posts and   for showing mentions
  let contents;
  function showDemoContent() {
    mainNotificationContainer.innerHTML = `
    <div class="demo-notifi-contenter">
    <div class="demo-image-container">
    <img src="manIlustrations.avif" width="100%">
    
    </div>
    
    <div class="status-text" >${contents}</div>
    </div>
    `;
  }
  const myPostsBtn = document.querySelector(".my-posts-btn");
  myPostsBtn.addEventListener("click", () => {
    contents = "No new post activities";
    showDemoContent();
    myPostsBtn.style.backgroundColor = "#004C33";
    myPostsBtn.style.color = "#fff";
  });
  const mentionsBtn = document.querySelector(".mentions-btn");
  mentionsBtn.addEventListener("click", () => {
    contents = "No new mentions";
    showDemoContent();
    mentionsBtn.style.backgroundColor = "#004C33";
    mentionsBtn.style.color = "#fff";
  });

  // for showing all notifications
  const allNotificationsBtn = document.querySelector(".all-notifi-btn");
  allNotificationsBtn.addEventListener("click", () => {
    showAllNotifications();
    const demoContainer = document.querySelector(".demo-notifi-contenter");
    demoContainer.style.display = "none";
  });

  // for showind delete popup
  const delPopBtnAll = document.querySelectorAll(".delete-noti-pop-up");
  const delPopUpContainer = document.querySelectorAll(
    ".delete-pop-up-container"
  );

  delPopBtnAll.forEach((delPopBtn) => {
    delPopBtn.addEventListener("click", () => {
      for (const delpopUp of delPopUpContainer) {
        delpopUp.classList.toggle("js-delete-pop-up");
      }
    });
  });
});

userMeBtn.addEventListener("click", (evt) => {
  userPopUp.classList.toggle("js-user-me-pop-up-box");
  businessPopUp.classList.remove("js-business-container-pop-up"); //remove business container
});

const openBusinessBox = (evt) => {
  businessPopUp.classList.toggle("js-business-container-pop-up");
};

businessBtn.addEventListener("click", () => {
  openBusinessBox();
  userPopUp.classList.remove("js-user-me-pop-up-box"); //remove me container
});

const closeBusinessBox = (evt) => {
  businessPopUp.classList.remove("js-business-container-pop-up");
};
businessCrossBtn.addEventListener("click", closeBusinessBox);

postJobBtn.addEventListener("click", () => {
  window.location.href = `https://www.linkedin.com/uas/login-cap?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ftalent%2Fjob-posting-redirect%2F%3Ftrk%3Dnav_spotlight_post_job%26&source_app=tsweb&trk=tsweb_signin`;
});



//again event for main container
mainContainer.addEventListener("click", (evt) => {
  userPopUp.classList.remove("js-user-me-pop-up-box");
  businessPopUp.classList.remove("js-business-container-pop-up");
});
