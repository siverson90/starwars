# starwars

Before starting:

1. 4 charaters appear on screen with their name, picture and Health score

Create initialize function
Global variables:
userCurrentHealth-
defenderCurrenthealth-
userAttackPower-
defenderAttack power-
userIncrementer-

Create 1 object with a variable of Characters. There should be 4 nested objects. Each object should contain:
Key of character 1
- nested object
-- key name:
-- key image:
-- key HP
-- key attack power:
-- key defend power:
-- power incrementer: 

each character will be contained within a DIV

2. There is another empty space for the remaining characters to go after selecting your character choice.

3. This is a button labeled Attck.

4. Under attack button is a section labeled Defender.

Starting game:

1. User clicks on character, which moves character under the "Your Character" label and the remaining 3 characters move to under the "Enemies Available to Attack" label and are highlighted RED.

Need to use a jquery animate function

Use an on click listener to pull information from objects and create variables to keep count

 Once in array push to global variables

2. User clicks any and only 1 of the enemies to attack. 

create an on.click function tied to attack button that takes user Character HP - defender attack power AND takes defender HP and subtract user Hit power

Create a logic statement that says:

If character HP is > 0, ADD power incrementer to users's selected character via the selected global variable.

3. After user clicks enemey to fight the character moves down under defender label and is no longer highlighted red.

4. To attack defender, user must click attack button and after doing a messge will be shown below defender image. Message with show:
-You attacked "defender" for X damage
-"Defender" attacked you for x damage.

Use the variables 

5. The damages are substracted from users character and defenders character.

6. Everytime the user selects the attack button their HP (hit power) increases.

6. a- game should remember the users HP if they successfully defeat defender


7. If users character's HP goes below 0 message: "you have been defeated is shown" 