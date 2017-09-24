
var roasterList= {
roaster1: {
    hp: 100,
    attack: 10,
    defend: 5,
    powerIncrement: 7
  },
roaster2: {
    hp: 150,
    attack: 5,
    defend: 10,
    powerIncrement: 5
  },
roaster3: {
    hp: 120,
    attack: 20,
    defend: 10,
    powerIncrement: 9,
  },

 roaster4: {
    hp: 90,
    attack: 5,
    defend: 10,
    powerIncrement: 12,
}
};

// Setup
var userHP="";
var userAttack="";
var userDefend="";
var defenderHP="";
var defenderAttack="";
var defenderDefend="";
var powerIncrementToUser="";
var userIsUnlocked= false;


// Intergameplay
var hpCounter="";
var defenderCounter="";
var attackIncrementerCounter="";

function initalize(){
  var userHP=0;
  var userAttack=0;
  var userDefend=0;

  var defenderHP=0;
  var defenderAttack=0;
  var defenderDefend=0;
  var powerIncrementToUser=0;

}

// ********** Functions **********
function unlockUser(){
// User player and stats loaded on click
$(".roaster").one("click", function() {
  // convert key to Int
  $(this).removeClass("not-selected");
  var userPick = ($(this).attr("id"));
  // $(this).toggle(".not-selected");

  var userId = userPick;

  console.log(userId);
  
  userFindInObj(userId);

  userIsUnlocked = true;

});
}

function userFindInObj(keyValue){
  
  var unlock = keyValue;
  
  var userCharacterObj=roasterList[keyValue];
  
  var result = Object.values(userCharacterObj);
  // Need to grab values, change to Ints and assign to global variables
  console.log(result);

  userHP= result[0];
  userAttack= result[1];
  userDefend= result[2];

  console.log("User HP" + userHP);
  console.log("user attack" + userAttack);
  console.log("User defend" + userDefend);

 };

// Defender stats
function unlockDefender(){
$(".not-selected").on("click", function() {
  var defenderPick = ($(this).attr("id"));

  var defenderId = defenderPick;

  console.log(defenderId);
  
  defFindInObj(defenderId);

   });
}

function defFindInObj(keyValue){
  
  var unlock = keyValue;
  
  var userCharacterObj=roasterList[keyValue];
  
  var result = Object.values(userCharacterObj);
  // Need to grab values, change to Ints and assign to global variables

  console.log(result);

  defenderHP = result[0];
  defenderAttack = result[1];
  defenderDefend = result[2];
  powerIncrementToUser= result[3];

  console.log("defend HP " + defenderHP);
  console.log("defende attack " +defenderAttack);
  console.log("defende defend " + defenderDefend);
  console.log("amount to increase user " + powerIncrementToUser);

  };
 

// *******Main content******
// Insert Initialize function, calls userSelect which calls defenderSelect
initalize();

if(userIsUnlocked === true)
{
  unlockDefender();
  console.log(userIsUnlocked);
}
else if (userIsUnlocked === false){
  unlockUser();
  console.log(userIsUnlocked);
}


// maybe user a jquery class for locked 
 

$("#attackBtn").on("click", function(){

  // User Stats
  hpCounter= userHP-defenderDefend

  // Defender stats
  defenderCounter= defenderHP- userAttack

  console.log(hpCounter);
  console.log(defenderCounter);
})








