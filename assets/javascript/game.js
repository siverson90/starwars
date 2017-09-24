
var roasterList= {
roaster1: {
    name: "Verve",
    hp: "100",
    attack: "10",
    defend: "5",
    powerIncrement: "7"
  },
roaster2: {
    name: "Phillz",
    hp: "150",
    attack: "5",
    defend: "10",
    powerIncrement: "5"
  },
"roaster3": {
    name: "Blue Bottle",
    hp: "120",
    attack: "20",
    defend: "10",
    powerIncrement: "9",
  },

 "roaster4": {
    name: "Sight Glass",
    hp: "90",
    attack: "5",
    defend: "10",
    powerIncrement: "12",
}
};

// Setup
var userHP="";
var userAttack="";
var userDefend="";
var powerIncrementToUser="";
var defenderHP="";
var defenderAttack="";
var defenderDefend="";
var userId="";


// Intergameplay
var hpCounter="";
var defenderCounter="";
var attackIncrementerCounter="";

function initalize(){
  var userHP=0;
  var userAttack=0;
  var userDefend=0;
  var powerIncrementToUser=0;

  var defenderHP=0;
  var defenderAttack=0;
  var defenderDefend=0;

}

// User player and stats loaded on click
$(".roaster").on("click", function() {
  // convert key to Int
  var userPick = ($(this).attr("id"));

  var userId = userPick;

  console.log(userId);
  
  findInObj(userId);

});

function findInObj(keyValue){
  
  var unlock = keyValue;
  console.log(unlock);
  
  console.log(roasterList[keyValue]);
};






// Defender stas
// function unlockDefender(){
// $(".roaster").on("click", function() {
//   var defenderPick = $(this).attr("id");

//   var defenderSelection = roasterList [ defenderPick ];

//   var defendArr = Object.keys(defenderSelection).map(function (key) { return defenderSelection[key];});


//   console.log(defendArr);

//   defenderHP = (defendArr[1]);
//   defenderAttack = (defendArr[2]);
//   defenderDefend = (defendArr[3]);
//   powerIncrementToUser= (defendArr[4]);

//   console.log(defenderHP);
//   console.log(defenderAttack);
//   console.log(defenderDefend);
//   console.log(powerIncrementToUser);
// })
// };

// *******Main content****
// Insert Initialize function, calls userSelect which calls defenderSelect
initalize();

$("#attackBtn").on("click", function(){

  // User Stats
  hpCounter= userHP-defenderDefend
  attackIncrementerCounter = attackIncrementerCounter + powerIncrementToUser


  // Defender stats
  defenderCounter= defenderHP- userAttack

  console.log(hpCounter);
  console.log(attackIncrementerCounter);
  console.log(defenderCounter);
})








