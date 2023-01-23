// Display the current day at the top of the calender when a user opens the planner.

let currentTime = moment().format("LL HH:MM");
console.log(currentTime);
let currentDay = moment().format('dddd, MMMM Do YYYY');
console.log(currentDay);

$('#currentDay').append(currentDay);


// Present timeblocks for standard business hours when the user scrolls down.
//create an array with business hours 
let hoursArr = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

function createCalendar(){

for (let i = 0; i < hoursArr.length; i++) {
    const hour = hoursArr[i];

    let $everyHour = $("<p>");
    $everyHour.attr("class", "hour");
    $everyHour.attr("data-time", hour);
    $everyHour.text(hour);
    $('.container').append($everyHour);

    // Color-code each timeblock based on past, present, and future when the timeblock is viewed.
    if(currentTime ) {
        $everyHour.attr("class", "present");
    }else if (currentTime < $everyHour) {
        $everyHour.attr("class", "past");
    }else{
        $everyHour.attr("class", "present");
    }
}



// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page

};

createCalendar();