const targetAbtDiv = document.getElementById("abt-container");
const targetTechDiv = document.getElementById("fav-tech-container");
const abtBtn = document.getElementById("abt-btn");
const scrollAbtDiv = document.getElementById("abt-container").offsetTop;
const targetSideDiv = document.getElementById("side-cards");
const sideBtn = document.getElementById("side-btn");
const scrollSideDiv = document.getElementById("abt-container").offsetTop;

window.onload = targetAbtDiv.style.display = "none";
window.onload = targetTechDiv.style.display = "none";
window.onload = targetSideDiv.style.display = "none";
// side proj var

abtBtn.onclick = function () {
  if (
    targetAbtDiv.style.display !== "none" &&
    targetTechDiv.style.display !== "none"
  ) {
    targetAbtDiv.style.display = "none";
    targetTechDiv.style.display = "none";
  } else {
    targetAbtDiv.style.display = "";
    targetTechDiv.style.display = "";
    targetSideDiv.style.display = "none";

    window.scrollTo({ top: scrollAbtDiv, behavior: "smooth" });
  }
};

sideBtn.onclick = function () {
  if (targetSideDiv.style.display !== "none") {
    targetSideDiv.style.display = "none";
  } else {
    targetSideDiv.style.display = "";
    targetAbtDiv.style.display = "none";
    targetTechDiv.style.display = "none";

    window.scrollTo({ top: scrollSideDiv, behavior: "smooth" });
  }
};
// image slider WTM
$("#img1").on({
  click: function () {
    $("#change-little-image").fadeOut("slow", function () {
      $("#change-little-image").attr(
        "src",
        "personalsite/imgs/card-imgs/little/little1.png"
      );
      $("#change-little-image").fadeIn("slow");
    });
  },
});
$("#img2").on({
  click: function () {
    $("#change-little-image").fadeOut("slow", function () {
      $("#change-little-image").attr(
        "src",
        "personalsite/imgs/card-imgs/little/little2.png"
      );
      $("#change-little-image").fadeIn("slow");
    });
  },
});
$("#img3").on({
  click: function () {
    $("#change-little-image").fadeOut("slow", function () {
      $("#change-little-image").attr(
        "src",

        "personalsite/imgs/card-imgs/little/little3.png"
      );
      $("#change-little-image").fadeIn("slow");
    });
  },
});
