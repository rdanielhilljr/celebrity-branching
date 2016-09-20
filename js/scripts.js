$(document).ready(function() {
  $("form#personal").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("input#gender").val();
    var income = parseInt($("input#income").val());
    var fame = $("select#tier").val();

    if (age >= 20 && age <= 30) {
  alert("something");


  }


event.preventDefault();


  });
});
