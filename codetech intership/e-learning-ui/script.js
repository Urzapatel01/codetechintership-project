function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user && pass) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Please enter username and password");
  }
}
const slides = [
  {
    courseTitle: "HTML & CSS Basics",
    lessonTitle: "Lesson 1: Introduction",
    video: "https://www.youtube.com/embed/qz0aGYnrluU",
    desc: "In this lesson, you will learn the basics of HTML and CSS to create simple web pages."
  },
  {
    courseTitle: "HTML & CSS Basics",
    lessonTitle: "Lesson 2: HTML Structure",
    video: "https://www.youtube.com/embed/UB1O30fR-EE",
    desc: "Learn about HTML tags, elements, and page structure."
  },
  {
    courseTitle: "HTML & CSS Basics",
    lessonTitle: "Lesson 3: CSS Basics",
    video: "https://www.youtube.com/embed/yfoY53QXEnI",
    desc: "Style your web pages using CSS."
  }
];

let currentSlide = 0;

function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    alert("🎉 Course Completed!");
    return;
  }

  document.getElementById("course-title").innerText =
    slides[currentSlide].courseTitle;

  document.getElementById("lesson-title").innerText =
    slides[currentSlide].lessonTitle;

  document.getElementById("lesson-video").src =
    slides[currentSlide].video;

  document.getElementById("lesson-desc").innerText =
    slides[currentSlide].desc;

  // BONUS: change browser tab title
  document.title = slides[currentSlide].lessonTitle;
}

function completeLesson() {
  alert("Lesson marked as completed ✅");
}


function completeLesson() {
  alert("Lesson marked as completed!");
}


function loadProgress() {
  let progress = localStorage.getItem("progress") || 0;
  let bar = document.getElementById("progressFill");
  bar.style.width = progress + "%";
  bar.innerText = progress + "%";
}
