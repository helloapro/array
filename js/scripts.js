$(function() {
  $("form#favorites").submit(function(event) {
    event.preventDefault();
    var movie = $("input#movie").val();
    var city = $("input#city").val();
    var season = $("input#season").val();
    var fruit = $("input#fruit").val();

    var array1 = [movie, city, season, fruit];
    alert(array1);
    var array2 = [array1[1], array1[0], array1[2]];
    alert(array2);
    var array3 = array2.concat(array1);
    alert(array3);

    /*var li0 = array3[0].toString();
    var li1 = array3[1].toString();
    var li2 = array3[2].toString();
    var li3 = array3[3].toString();
    var li4 = array3[4].toString();
    var li5 = array3[5].toString();
    var li6 = array3[6].toString();*/

    $("#li0").text(array3[0]);
    $("#li1").text(array3[1]);
    $("#li2").text(array3[2]);
    $("#li3").text(array3[3]);
    $("#li4").text(array3[4]);
    $("#li5").text(array3[5]);
    $("#li6").text(array3[6]);

    $("#favorites-list").show();

    /*var array1 = ["movie", "city", "season", "fruit"];

      favorites.forEach(function(blank) {
      var userInput = $("input." + blank).val();
      $("." + blank).text(userInput).val();
    });*/


  });
});
