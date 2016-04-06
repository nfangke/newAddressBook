//business logic
function Ticket(movie, time, age) {
  this.movies = movie;
  this.times = time;
  this.age = age;
}

Ticket.prototype.ticketPrice = function(title, time, age) {
  //if movie is of a certain type, or ticket buyer is of a certain age then do something

}

var cost =
$(".price").text(Ticket())


// var jandj = {movie: "Jules et Jim"};
// var brick = {name: "Brick"};
// var oldboy = {name: "Old Boy"};
//
// var movies = {movie: [jandj, brick, oldboy]};
//
// var morning = {time: "10:00 am"};
// var afternoon = {time: "2:00 pm"};
// var evening = {time: "6:00 pm"};
//
// var times = {time: [morning, afternoon, evening]};
//
// var childrenTicket = {age: "Any age"};
// var adultTicket = {age: "13 and up"};
// var seniorTicket = {age: "17 and up"};
//
// var ratings = {age: [g, pg13, r]}
//
// var low = {cost: "$5"};
// var medium = {cost: "$10"};
// var high = {cost: "$15"};
//
// var cost = {cost: [low, medium, high]};

var ticketCost = 5;

if (movieInput ===)

$(document).ready(function() {
  $("form#ticket").submit(function(event) {
    event.preventDefault();

    var movieInput = $("input:radio[name=movie]:checked").val();
    var timeInput = $("#times").val();
    var ageInput = $("#age").val();


    //as a person who wants to see a movie, i want to:
    // - i need to be able to buy a ticket
    // -know when the movie is showing
    // -know how much the ticket will cost
    // -know when the movie is sold out

    var newTicket = new Ticket (movieInput, timeInput, ageInput);

  var individTicketPrice = newTicket.ticketPrice();


  }
}
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// };
//
// Address.prototype.fullAddress = function(){
//   return this.street + ", " + this.city + ", " + this.state;
// }
//
// //user interface logic
// var resetFields = function() {
// $("input#new-first-name").val("");
// $("input#new-last-name").val("");
// $("input.new-street").val("");
// $("input.new-city").val("");
// $("input.new-state").val("");
// }
//
// $(document).ready(function() {
//   $("").click(function() {
//
//
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//     var newContact = new Contact(inputtedFirstName, inputtedLastName);
//
//     $(".new-address").each(function() {
//       var inputtedStreet = $(this).find("input.new-street").val();
//       var inputtedCity = $(this).find("input.new-city").val();
//       var inputtedState = $(this).find("input.new-state").val();
//       var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
//       newContact.addresses.push(newAddress)
//     });
//
//     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//
//     $(".contact").last().click(function() {
//       $("#show-contact").show();
//       $("#show-contact h2").text(newContact.firstName);
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);
//
//       $("ul#addresses").text("");
//       newContact.addresses.forEach(function(address) {
//         $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
//       });
//     });
//     resetFields();
//   });
// });
