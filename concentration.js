var previousMove;


function hideStart(){
$(".selections").hide();
};

$(".box").on("click", function(){
  if($(this).children().is(':hidden')) {
    $(this).children().show();
     if(previousMove != null) {
       if(previousMove.text() === $(this).text()){
       } else{
          var box =   $(this).children();
          var tempVariable = previousMove;
          window.setTimeout(function(){
            box.hide();
            tempVariable.children().hide();
           }, 500);

       }
       //seeing if the last two moves equal each other and if they don't equal each other hide them both

       previousMove = null;

     } else {
       //odd click
       previousMove = $(this);
     }

  }

});

$("#button").on("click", function(){
var list =  $(".box");
var randomList =shuffle(list.toArray());

for (var i = 0; i < randomList.length; i++) {
   if(i<6){
     $("#row1").append(randomList[i]);
   } else if(i<12) {
   $("#row2").append(randomList[i]);
   } else if(i<18) {
   $("#row3").append(randomList[i]);
   } else if(i<24) {
   $("#row4").append(randomList[i]);
   } else {
   $("#row5").append(randomList[i]);
   }
}
});


hideStart();

function shuffle(array) {
 var currentIndex = array.length, temporaryValue, randomIndex ;

 // While there remain elements to shuffle...
 while (0 !== currentIndex) {

   // Pick a remaining element...
   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex -= 1;

   // And swap it with the current element.
   temporaryValue = array[currentIndex];
   array[currentIndex] = array[randomIndex];
   array[randomIndex] = temporaryValue;
 }

 return array;
}


hideStart();
