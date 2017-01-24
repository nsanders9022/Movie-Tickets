function Tickets(name) {
  this.name = name;

}



$(document).ready(function() {
  $("#movie-tickets").submit(function(event) {
    event.preventDefault();

    var nameInput = $("#name").val();

    var newUser = new Tickets(nameInput)

    $(".name").text(newUser.name);
  })
})
