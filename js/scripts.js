//business logic
  //constructor
function Tickets(name, age, time) {
  this.myName = name;
  this.age = age;
  this.time = time;
}
  //prototypes
Tickets.prototype.outputFormat = function() {
  var ticketPrice = 12;
  if (this.age < 17 || this.age >= 65) {
    ticketPrice -= 2;
  };
  if (this.time === 2) {
    ticketPrice += 3;
  };
  if (this.myName === 2 || this.myName === 4) {
    ticketPrice += 2;
  };
  return ticketPrice;
};

Tickets.prototype.reset1 = function() {
  $('input[name=movieName]').prop('checked',false);
  $("#age").val("");
  $('input[name=movieTime').prop('checked',false);
};


//user logic
$(document).ready(function() {

  //hides divs containing specific movie times
  $("#lionKing").css('display','none');
  $("#laLaLand").css('display','none');
  $("#goneWind").css('display','none');
  $("#moonlight").css('display','none');


  //function to display time when a certain movie is selected
  $("input:radio[name=movieName]").change(function(){

    var val1 = $('input:radio[name=movieName]:checked').val();

    if (val1 === '1') {
      $("#lionKing").css('display','block');
    } else if (val1 === "2") {
      $("#laLaLand").css('display', 'block')
    } else if (val1 === "3") {
      $("#goneWind").css('display', 'block')
    } else if (val1 === "4") {
      $("#moonlight").css('display', 'block')
    }
  });

  //hides div containing age input field
  $(".age").css('display', 'none');

  //function to display age when a time is selected
  $("input:radio[name=movieTime]").change(function() {
    $(".age").css('display', 'block');
  });


  //submit function
  $("#movie-tickets").submit(function(event) {
    event.preventDefault();

    var nameInput = parseInt($("input:radio[name=movieName]:checked").val());
    var ageInput = parseInt($("#age").val());
    var timeInput = parseInt($("input:radio[name=movieTime]:checked").val());

    var newUser = new Tickets(nameInput, ageInput, timeInput)

    $(".price").text(newUser.outputFormat());

    newUser.reset1();

  });
});
