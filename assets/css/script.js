
// the date display
setInterval(function() {
    var date = moment().format("dddd, MMM, YY, h:mm a")
    $("#currentDay").text(date)
}, 1000)

// current time / color change based on the time of day
var timeChange = function() {
    var currentHour = moment().hour()

    $(".time-block").each(function() {
        var selectedHour = parseInt($(this)
        .attr("id")
        .split("hour")[1])

        if (currentHour < selectedHour) {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        } else if (currentHour === selectedHour) {
            $(this).removeClass("past")
            $(this).removeClass("future")
            $(this).addClassClass("present")
        } else {
            $(this).removeClass("present")
            $(this).removeClass("future")
            $(this).addClass("past")
        }
    })
}

//  the save button 
$(".saveBtn").on("click", function(){
    var userInput = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, userInput)
})

// local storage retrieval 
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

// runs time check 
timeChange()