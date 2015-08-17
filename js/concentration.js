var previousMove;

//start off with selections hidden
function hideStart(){
  $("i").hide();
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
          var box = $(this).children();
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

var classArray = ["fa fa-html5",
    "fa fa-behance",
    "fa fa-facebook",
    "fa fa-jsfiddle",
    "fa fa-github-alt",
    "fa fa-slack",
    "fa fa-pinterest-p",
    "fa fa-wordpress",
    "fa fa-youtube-play",
    "fa fa-twitter-square",
    "fa fa-vine",
    "fa fa-reddit",
    "fa fa-dribbble",
    "fa fa-css3",
    "fa fa-foursquare",
    "fa fa-html5",
    "fa fa-behance",
    "fa fa-facebook",
    "fa fa-jsfiddle",
    "fa fa-github-alt",
    "fa fa-slack",
    "fa fa-pinterest-p",
    "fa fa-wordpress",
    "fa fa-youtube-play",
    "fa fa-twitter-square",
    "fa fa-vine",
    "fa fa-reddit",
    "fa fa-dribbble",
    "fa fa-css3",
    "fa fa-foursquare"
];

function randomizeBoxes(){
  var list =  $("i");
//slice creates a new array
  var copyClassArray = classArray.slice();
  for (var i = 0; i < list.length; i++) {
    //picks randomNumber that is length of array
     var randomNumber = Math.floor(Math.random()*copyClassArray.length);
     //set classname of each i to randomnumber item
     list[i].className = copyClassArray[randomNumber];
     copyClassArray.splice( randomNumber, 1 );
  }
}

$("#button").on("click", function(){
  hideStart();
  randomizeBoxes();
});


hideStart();
randomizeBoxes();
