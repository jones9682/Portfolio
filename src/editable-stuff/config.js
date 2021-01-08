// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Robert",
  middleName: "",
  lastName: "Jones jr.",
  message: " Passionate about designing and developing web applications. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jones9682",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/robertjonesjr82",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/rjonesjr.png"),
  imageSize: 375,
  message:
    "My name is Robert Jones Jr. I grew up in New Jersey. I've always had a passion for technology and I am Self-motivated Entry Level Full Stack Web Developer with a background in Maintenance, Project Management, and life-long dedication to learning. Motivated towards game-design and showing my ability to problem solve. Experience in providing a high level of customer service to clients and customers while keeping a consistent work ethic. Passionate about designing and developing web applications utilizing skills in JavaScript, HTML5, API’s, jQuery as well maintaining the functionality of the website. Excited to leverage my skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web. During My free time I enjoy fishing, camping, playing video games and spending quality time with my family.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jones9682", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Budget-Tracker", "Eat-Da-Burger", "Password-Generator", "Employee-Tracker"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/rjonesjr.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/rjonesjr.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "ORM", value: 60 },
    { name: "SQL", value: 75 },
    { name: "Node.js", value: 70 },
    { name: "JQuery", value: 65 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 80 },
    { name: "REST APIs", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "rjonesjr2891@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
