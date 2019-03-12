function getQuotes() {
  $.getJSON("https://api.icndb.com/jokes/random", function(a) {
      var joke = a.value["joke"];
        $("#quote").html(joke); 
    console.log(a);
    console.log(a.value.joke);
  });
}
$("document").ready(function() {
  // getQuotes();
    $("#get-quote").on("click", getQuotes);
});