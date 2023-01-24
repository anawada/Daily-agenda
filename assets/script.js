// Display the current day at the top of the calender when a user opens the planner.

let currentTime = moment().hour();
let currentDay = moment().format("dddd, MMMM Do YYYY");

$("#currentDay").append(currentDay);

// Present timeblocks for standard business hours when the user scrolls down.
//create an array with business hours
let hoursArr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let i = 0; i < hoursArr.length; i++) {
  const hour = hoursArr[i];

  let $everyHour = $("<div class='row time-block'>");
  $everyHour.attr("data-time", hour);
  $(".container").append($everyHour);

  let $hourTime = $("<div class='hour col-2'>");
  if (hour < 12) {
    $hourTime.text(hour + "am");
  } else if (hour === 12) {
    $hourTime.text(hour + "pm");
  } else {
    $hourTime.text(hour - 12 + "pm");
  }
  $($everyHour).append($hourTime);

  let $toDO = $("<textarea class='col-9 description'>");
  $($everyHour).append($toDO);

  let $btn = $(
    "<button class='saveBtn col-1'><i class='fas fa-save'></i></button>"
  );
  $($everyHour).append($btn);

  // Color-code each timeblock based on past, present, and future when the timeblock is viewed.
  if (currentTime === hour) {
    $everyHour.addClass("present");
  } else if (currentTime > hour) {
    $everyHour.addClass("past");
  } else {
    $everyHour.addClass("future");
  }
}
renderSchedule();
// Allow a user to enter an event when they click a timeblock
// Save the event in local storage when the save button is clicked in that timeblock.
function renderSchedule() {

  let appointment = localStorage.getItem("appointment");
  //save the text inside the description 
  
  

  
$(".saveBtn").on("click", function (event) {
  event.preventDefault();

  let appointment = $(".description").val();

  localStorage.setItem("appointment", appointment);
  renderSchedule();
});
}
