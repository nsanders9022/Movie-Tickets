var ticketPrice = 12;

function Tickets(name, age, time) {
  this.myName = name;
  this.age = age;
  this.time = time;
}

Tickets.prototype.outputFormat = function() {
  if (this.age < 17 || this.age >= 65) {
    ticketPrice -= 2
  }
  return ticketPrice
}



$(document).ready(function() {

  $("#movie-tickets").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input:radio[name=movieName]:checked").val();
    var ageInput = parseInt($("#age").val());
    var timeInput = $("input:radio[name=movieTime]:checked").val();


    var newUser = new Tickets(nameInput, ageInput, timeInput)

    $(".price").text(newUser.outputFormat());
  })
})
