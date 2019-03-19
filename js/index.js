function getQuotes() {
  $.getJSON("https://api.icndb.com/jokes/random", function(a) {
      var joke = a.value["joke"];
        $("#joke").html(joke); 
  });
}
$("document").ready(function() {
   // getQuotes();
    $("#get-joke").on("click", getQuotes);
});