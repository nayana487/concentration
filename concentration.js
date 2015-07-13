var previousMove;


function hideStart(){
$(".selections").hide();
};

//select box, onclick it should display = move 1
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

//after two clicks, if move 1 === move 2 do nothing. if != hide both selection divs



//select another box it should display = move2
//if contents move1 === move2 both should stay displayed
//if move1 != move 2 both should hide
//when all displayed, alert winnner




hideStart();
