var previousMove;

//start off with selections hidden
function hideStart(){
$(".selections").hide();
};

//
$(".box").on("click", function(){
  //added hidden so user can not select shown selections again
  if($(this).children().is(':hidden')) {
    //tells to show if matched and hide again if non-matched
    $(this).children().show();
     if(previousMove != null) {
       if(previousMove.html() === $(this).html()){
       } else{
          var box =   $(this).children();
          var tempVariable = previousMove;
          //sets delay before hiding non-matching selections
          window.setTimeout(function(){
            box.hide();
            tempVariable.children().hide();
           }, 500);

       }
       previousMove = null;

     } else {
       previousMove = $(this);
     }

  }

});

$("#button").on("click", function(){
hideStart();
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

//fischer-yates for shuffle
function shuffle(array) {
 var currentIndex = array.length, temporaryValue, randomIndex ;
 while (0 !== currentIndex) {

   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex -= 1;
   temporaryValue = array[currentIndex];
   array[currentIndex] = array[randomIndex];
   array[randomIndex] = temporaryValue;
 }

 return array;
}


hideStart();
