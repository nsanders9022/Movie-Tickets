var ticketPrice = 12;

function Tickets(name, age, time) {
  this.myName = name;
  this.age = age;
  this.time = time;
}

Tickets.prototype.outputFormat = function() {
  if (this.age < 17 || this.age >= 65) {
    ticketPrice -= 2;
  };
  if (this.time === 2) {
    ticketPrice += 3;
  };
  if (this.myName === 2) {
    ticketPrice += 2;
  };
  return ticketPrice;
};

Tickets.prototype.reset1 = function() {
  this.myName = "";
  this.age = "";
  this.time = "";
}

$(document).ready(function() {

  $("#movie-tickets").submit(function(event) {
    event.preventDefault();

    var nameInput = parseInt($("input:radio[name=movieName]:checked").val());
    var ageInput = parseInt($("#age").val());
    var timeInput = parseInt($("input:radio[name=movieTime]:checked").val());



    var newUser = new Tickets(nameInput, ageInput, timeInput)

    $(".price").text(newUser.outputFormat());

    $('input[name=movieName]').prop('checked',false);
    $("#age").val("");
    $('input[name=movieTime').prop('checked',false);
    
    ticketPrice = 12;
    // newUser = newUser.reset1();

  })
})
