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

  let $toDo = $("<textarea class='col-9 description'>");
  $($everyHour).append($toDo);

  let $btn = $(
    "<button class='saveBtn col-1'><i class='fas fa-save'></i></button>"
  );
  $($everyHour).append($btn);

  if (currentTime === hour) {
    $everyHour.addClass("present");
  } else if (currentTime > hour) {
    $everyHour.addClass("past");
  } else {
    $everyHour.addClass("future");
  }
  console.log("$everyHour", $everyHour);
}

let agendaIndex = 0;
let hourIndex = 8;

for (let i = 0; i < hoursArr.length; i++) {
  $(".description").eq(agendaIndex++).val(localStorage.getItem(hourIndex++));
  
}

$(".saveBtn").on("click", function (event) {
  event.preventDefault();

  let appointment = $(this).siblings(".description").val();
  let appointmentTime = $(this).parent().attr("data-time");
  localStorage.setItem(appointmentTime, appointment);
});
