// const userData = [
//   [
//     "Salman Khan",
//     `<iframe src="https://www.youtube.com/embed/hW0kMcRHwnc?si=QdCiU4rgLc53WOsu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>`,
//     "sallu.webp",
//   ],
//   [
//     "Shah Rukh Khan",
//     `<iframe src="https://www.youtube.com/embed/6GX-1BkXbOk?si=NIX9n93LNFZknkl-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
//     "shahruk.jpg",
//   ],

//   [
//     "Amir Khan",
//     `<iframe src="https://www.youtube.com/embed/z_ZudGJktcw?si=Y8cPngrObBxApd2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
//     "amir.webp",
//   ],
//   [
//     "Akshay Kumar",
//     `<iframe  src="https://www.youtube.com/embed/4sHlCovj-Ik?si=xIjfMH_hQWLh8vYG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
//     "akki.jpg",
//   ],
// ];

// const userData = [
//   {
//     userName: "Salman Khan",
//     followerCount: 67,
//     video: `<iframe src="https://www.youtube.com/embed/hW0kMcRHwnc?si=QdCiU4rgLc53WOsu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>`,
//     profile_img:"sallu.webp",
//     // Add more properties as needed
//   },
//   {
//     userName: "Shah Rukh Khan",
//     followerCount: 45,
//     video: `<iframe src="https://www.youtube.com/embed/6GX-1BkXbOk?si=NIX9n93LNFZknkl-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
//     profile_img:"shahruk.jpg",
//     // Add more properties as needed
//   },
//   {
//     userName: "Amir Khan",
//     followerCount: 567,
//     video: `<iframe src="https://www.youtube.com/embed/z_ZudGJktcw?si=Y8cPngrObBxApd2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
//     profile_img:"amir.webp",
//     // Add more properties as needed
//   },
//   {
//     userName: "Akshay Kumar",
//     followerCount: 567,
//     video: `<iframe  src="https://www.youtube.com/embed/4sHlCovj-Ik?si=xIjfMH_hQWLh8vYG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
//     profile_img:"akki.jpg",
//     // Add more properties as needed
//   },
// ];

const mainContainerEle = document.querySelector(".main-content-container");

for (const data of userData) {
  mainContainerEle.innerHTML += `  <div class="data-show-container">
<div class="top-content">
<div class="profile-img-container"><img src ="${data.profile_img}" width="100%" alt="Profile"></div>
<span class="username">${data.userName}</span>
<div class="follow-user">Follow</div>
</div>

<div class="middle-content">
    <div class="user-contents">
    <p>${data.post}
    </p>
    <div class="users-mores-contents"> 
    <p>

    </p>
    
  
    </div>

    </div>

</div>

<div class="bottom-content">
<div class="like-container"><i class="ri-thumb-up-line"></i>
<p class="show-like-count">0</p>
</div>
</div>
</div>`;


}
  // follow button section
  const followBtns = document.querySelectorAll(".follow-user");
  for (const followbtn of followBtns) {
    let follow = true;
    followbtn.addEventListener("click", () => {
      if (follow) {
        followbtn.innerHTML = "Followed";
        follow = false;
        // for (let i = 0; i < followBtns.length; i++) {
        //   alert(`Followed ${userData[i].userName}`);
        //   break;
        // }
      } else {
        followbtn.innerHTML = "Follow";
        follow = true;
      }
    });
  }
}

// const countBtn = document.querySelectorAll(".like-container");
// const countShowEle = document.querySelectorAll(".show-like-count");
// for (const btns of countBtn) {
//   for (const countEle of countShowEle) {
//     let countNum = 0;
//     btns.addEventListener("click", () => {
//       countNum++;
//       // window.localStorage.setItem("count", countNum);
//       // let StoredCount = window.localStorage.getItem("count");
//      countEle.innerHTML = countNum;
//     });
//   }
// }

// const networkPageBtn=document.querySelector("")

//to prevent right click in website
document.addEventListener("contextmenu", (event) => event.preventDefault());





