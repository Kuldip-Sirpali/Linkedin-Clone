const userData = [
  {
    userName: "Adam Smith",
    followerCount: 1,
    post: `
    <p></p>
    <img src="manIlustrations.avif" width="100%">
    `,
    profile_img: "profile1.jpg",
  },
  {
    userName: "Tom Holland",
    followerCount: 45,
    post: `
    <p>Hope you would love this video of my friend Tech Burner ❤️❤️. He makes very Interesting videos...</p> <iframe src="https://www.youtube.com/embed/F6hmwkI3n64?si=Vuxu5j4V_MWKtTvU" title="YouTube video player"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   `,
    profile_img: "profile2.jpg",
  },
  {
    userName: "Tech Burner",
    followerCount: 567,
    post: `<iframe src="https://www.youtube.com/embed/z_ZudGJktcw?si=Y8cPngrObBxApd2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
     profile_img: "profile6.jpg",
  },
  {
    userName: "Microsoft",
    followerCount: 567,
    post: `<iframe  src="https://www.youtube.com/embed/4sHlCovj-Ik?si=xIjfMH_hQWLh8vYG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    profile_img: "profile4.jpg",
  },

  {
    userName: "Virat Kohli",
    followerCount: "400m",
    post: `Enjoying the match🏏🏏🏏`,
    profile_img: "profileai.jpg",
  },

  {
    userName: "Techinal Guruji",
    followerCount: "1000",
    post: `
    <p></p>
    <img src="manIlustrations.avif" width="100%">`,
    profile_img: "profile5.jpg",
  },
  {
    userName: "Tony Stark",
    followerCount: "1000",
    post: `
    <p></p>
    <img src="illustration1.avif" width="100%">`,
    profile_img: "profile5.jpg",
  },
];

const users = {
  userName: "Will smith",
  followerCount: 45,
  post: `<iframe src="https://www.youtube.com/embed/6GX-1BkXbOk?si=NIX9n93LNFZknkl-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  profile_img: "profile2.jpg",
};
userData.push(users);

// const datas=structuredClone(userData);
// console.log(datas);

// // taking  input from user

// const addUser=( username,followerNums)=>{
//   const users={
//     userName:username,
//     followerCount:followerNums,
//     video: `<iframe  src="https://www.youtube.com/embed/4sHlCovj-Ik?si=xIjfMH_hQWLh8vYG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
//     profile_img:"rajesh.jpg",
//   }
//   userData.push(users);

// }
// let username=prompt("enter your user name?");
// let followerNums= prompt("follower count?");
// addUser(username,followerNums)

const jobsData = [
  {
    companyName: "Apple",
    position: "Backend Developer",
    type: "Remote",
    companyLogo: "rn.jpg",
  },
  {
    companyName: "Microsoft",
    position: "FullStack Developer",
    type: "Remote",
    companyLogo: "profile1.jpg",
  },
  {
    companyName: "Google",
    position: "Software Developer",
    type: "Remote",
    companyLogo: "aiprofile.jpg",
  },
  {
    companyName: "Dell",
    position: "Graphics Designer",
    type: "Remote",
    companyLogo: "rn.jpg",
  },
];

//for notfications data

const notificationsData = [
  {
    logo: "apple_logo.jpg",
    time: "1h",
    content:
      "Apple launching vision pro all around the world.Visit the online stores and order the product.",
  },
  {
    logo: "stackoverflow.jpg",
    time: "30m",
    content:
      "Google is offering free machine learning courses. Are you excited to learn about the technology?",
  },
  {
    logo: "microsoft_logo.jpg",
    time: "22h",
    content: "Checkout the latest trends of software development..",
  },
  {
    logo: "free_code_camp_logo.jpg",
    time: "3h",
    content: "You AI to do project faster.We have Jarvis for you to help..",
  },
  {
    logo: "tech_burner.jpg",
    time: "5m",
    content:
      "Searching for remote job? Grap the opportunity by applying to google, microfost, amazon, netflix..",
  },
];
