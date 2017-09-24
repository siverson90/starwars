
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
roaster3: {
    name: "Blue Bottle",
    hp: "120",
    attack: "20",
    defend: "10",
    powerIncrement: "9",
  },

 roaster4: {
    name: "Sight Glass",
    hp: "90",
    attack: "5",
    defend: "10",
    powerIncrement: "12",
}
}

// for(var i = 0; i < coffeeRoasters)

var userHP=0;
var userAttack=0;
var userDefend=0;
var userPowerIncrement=0;

var defenderHP=0;
var defenderAttack=0;
var defenderDefend=0;

// User player and stats loaded on click
$(".roaster").on("click", function() {
  var userPick = $(this).attr("id");

  var selection = roasterList [ userPick ];

  var userArr = Object.keys(selection).map(function (key) { return selection[key]; });

  userHP = userArr[1];
  userAttack= userArr[2];
  userDefend=userArr[3];
  userPowerIncrement=userArr[4];

  console.log(userHP);
  console.log(userAttack);
  console.log(userDefend);
  console.log(userPowerIncrement);

});


$(".roaster").on("click", function() {
  var userPick = $(this).attr("id");

  var selection = roasterList [ userPick ];

  var defendArr = Object.keys(selection).map(function (key) { return selection[key]; });

  defenderHP = defendArr[1];
  defenderAttack= defendArr[2];
  defenderDefend=defendArr[3];


  console.log(userHP);
  console.log(userAttack);
  console.log(userDefend);
  console.log(userPowerIncrement);

});



