document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".image1");

  function setRandomPosition(element) {
    element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  }

  images.forEach(function (image) {
    setRandomPosition(image);
  });
});

function angry() {
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  var mainImg = document.getElementById("mainImg");

  mainImg.src =
    "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";

  absImg.style.display = "flex";

  images.forEach(function (image) {
    image.src =
      "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  });
}

function happy() {
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  var mainImg = document.getElementById("mainImg");

  absImg.style.display = "flex";
  mainImg.src =
    "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";

  images.forEach(function (image) {
    image.src =
      "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
  });
}

function normal() {
  var absImg = document.getElementById("absImg");
  absImg.style.display = "none";

  var mainImg = document.getElementById("mainImg");
  mainImg.src =
    "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
}

let counter = 0;

  const sadCat = [
    "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
    "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
    "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif?itemid=13931206",
    "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
    "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
    "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
  ];

  const blackmail = [
    "Please",
    "I'm begging you",
    "I'm crying",
    "I'm sad",
    "HUHUHUHU",
    "Please Say Yes",
    "I'm gonna cry",
  ];

function no() {
  counter++;

  let sadMusic = document.getElementById("sadMusic");
  let happyMusic = document.getElementById("happyMusic");
  happyMusic.pause();
  sadMusic.play();

  let model = document.getElementById("model");
  model.style.display = "flex";

  document.getElementById("modelImg").src =
    sadCat[Math.floor(Math.random() * sadCat.length)];
  document.getElementById("modelText").innerText =
    blackmail[Math.floor(Math.random() * blackmail.length)];
}

function yes() {
  let model = document.getElementById("model2");
  let model2 = document.getElementById("model");

  document.getElementById("btns").style.display = "none";
  model2.style.display = "none";

  let sadMusic = document.getElementById("sadMusic");
  sadMusic.pause();

  let happyMusic = document.getElementById("happyMusic");
  happyMusic.play();

  model.style.display = "flex";

  document.getElementById("wedate").innerText =
    "Yayyy🥳, We are each other's valentine now. I love you cutie.❤️😘";
}

/* ✅ ONLY CHANGE HERE */
function ly2() {
  document.getElementById("model2").style.display = "none";
  document.getElementById("redirectBtn").style.display = "inline-block";
}

/* ✅ ONLY NEW FUNCTION */
function goToSite() {
  window.open("https://sourabh-valentines2-day.netlify.app/","_self"); // CHANGE LINK
}

