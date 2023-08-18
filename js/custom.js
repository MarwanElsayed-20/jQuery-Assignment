$(document).ready(function () {
  // make side bar hidden
  let linksWidth = $(".links").innerWidth();
  $(".link-group").css("left", `-${linksWidth}px`);

  // handle open and close side bar
  $(".open-links").click(function () {
    $(".link-group").animate({ left: `0` }, 500);
    $(this).addClass("d-none");
    $(".close-links").removeClass("d-none").addClass("d-block");
  });
  $(".close-links").click(function () {
    $(".link-group").animate({ left: `-${linksWidth}px` }, 500);
    $(this).removeClass("d-block").addClass("d-none");
    $(".open-links").removeClass("d-none").addClass("d-block");
  });
  // close side bar with x
  $(".close").click(function () {
    $(".link-group").animate({ left: `-${linksWidth}px` }, 500);
    $(".close-links").removeClass("d-block").addClass("d-none");
    $(".open-links").removeClass("d-none").addClass("d-block");
  });
  // navigate with links
  $("header .links a").click(function () {
    let offset = $($(this).attr("href")).offset().top;
    $("html,body").animate({ scrollTop: offset }, 500);
  });

  // accordion
  $(".singers .slider h3").click(function () {
    if ($(this).next().hasClass("display-none")) {
      $(this).next().slideToggle();
    }
  });
});

// count down
window.onload = function () {
  counterDisplay("2023-10-25 23:59:59");
  maxCharacter(100);
};

let counterBody = document.getElementById("counterBody");

function counterDisplay(selectedDate) {
  let today = new Date();
  let comingDay = new Date(selectedDate);
  let difference = comingDay.getTime() - today.getTime();

  let seconds = Math.floor((difference % 60000) / 1000);
  let minutes = Math.floor(difference / (1000 * 60)) % 24;
  let hours = Math.floor(difference / (1000 * 3600)) % 24;
  let days = Math.floor(difference / (1000 * 3600 * 24));

  let box = "";

  if (difference <= 0) {
    box = `<h2 class="fs-1 text-white">Congratulation!</h2>`;
  } else {
    box = `
    <div class="col-md-3">
    <div class="day">${days} D</div>
  </div>
  <div class="col-md-3">
    <div class="hour">${hours} H</div>
  </div>
  <div class="col-md-3">
    <div class="minutes">${minutes} M</div>
  </div>
  <div class="col-md-3">
    <div class="seconds">${seconds} S</div>
  </div>
    `;
  }

  counterBody.innerHTML = box;

  setInterval(function () {
    counterDisplay(selectedDate);
  }, 1000);
}

// text area character remain
function maxCharacter(maxNum) {
  max = maxNum;
  characterRemain.innerHTML = maxNum;
}

$("#textArea").keydown(function (e) {
  let textAreaLength = e.target.value.length;
  let charDiff = max - textAreaLength;

  if (charDiff < 0) {
    $(this).attr("maxLength", `${max}`);
    $("#charRemainBody").html(
      `No remaining Characters the max char is <span id="characterRemain" class="fs-4">${max}</span>`
    );
  } else {
    $(this).removeAttr("maxLength");
    $("#charRemainBody").html(
      `<span id="characterRemain" class="fs-4">${
        max - textAreaLength
      }</span> Character Remain`
    );
  }
});

// let textArea = document.getElementById("textArea");
// let charRemainBody = document.getElementById("charRemainBody");
// let characterRemain = document.getElementById("characterRemain");
// let max = 0;

// textArea.addEventListener("keydown", function (e) {
//   let textAreaLength = e.target.value.length;
//   let charDiff = max - textAreaLength;

//   if (charDiff < 0) {
//     this.setAttribute("maxLength", `${max}`);
//     charRemainBody.innerHTML = `No remaining Characters the max char is <span id="characterRemain" class="fs-4">${max}</span>`;
//   } else {
//     this.removeAttribute("maxLength");
//     charRemainBody.innerHTML = `<span id="characterRemain" class="fs-4">${
//       max - textAreaLength
//     }</span> Character Remain`;
//   }
// });
