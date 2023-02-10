var matchNumber; //Match Number
var teamNumber; //Team Number
var actionList = []; //This is the list that populates the log with human friendly text.
var compressedList = []; //This is the list that collects all the IDs for the QR Code.
var powerCellCounter = 1000; //This should match maximum # of game pieces.
var currentTable = 0;
var tables = ["table1", "table2", "table3", "QRCode"]; //Defines tables from left to right
var comments = ""; //Comments Box

/* Function List
--- Direct Button Functions ---
changeMatchNumber: Used to change the match number
changeTeamNumber: Used to change the team number
addAction: Called everytime a button is pushed.
Undo: Pops items off of all the lists.
moveTableLeft: Used to move backwards in the table structure
moveTableRight: Used to move forward in the table structure
updateComments: Add comments
resetButton: Resets all the variables
--- Indirect Functions ---
init: Initialize everything
updateLog: Updates the human list of actions done.
updateAvail: This was created to enable/disable (validation) scoring buttons based on how many game pieces the robot has.
--- Notes ---
The updateReview and updateList using the organizedActionList variable in 2022 code was legacy code that was used to show the scouter the total # they put in. This might be useful to have on a review page.
Combined lowerCounter and raiseCounter functions into the updateAvail function to make it easier.
*/

function init() {
  tables.forEach((x) => document.getElementById(x).style.display = "none");
  document.getElementById(tables[currentTable]).style.display = "block";
}

// ---- DIRECT BUTTON FUNCTIONS ---

function changeMatchNumber(number) {
  matchNumber = Math.max(0,Math.min(number,999))
  console.log(matchNumber)
  document.getElementById("MatchNo1").value = matchNumber
  document.getElementById("MatchNo2").value = matchNumber
  document.getElementById("MatchNo3").value = matchNumber
}

function changeTeamNumber(number) {
  teamNumber = Math.max(0,Math.min(number,99999))
  console.log(teamNumber)
  document.getElementById("teamNo1").value = teamNumber
  document.getElementById("teamNo2").value = teamNumber
  document.getElementById("teamNo3").value = teamNumber
  document.getElementById("teamNo4").value = teamNumber
}

function addAction(action, number) {
  console.log(action); //Log it to the console (dev tools)
  actionList.push(action); //Add it to the actionList (what the scouter sees on the app)
  compressedList.push(number); //Add it to the compressedList (QR Code)//
  updateLog(); //Update what the scouter sees on the app (actionList)
}
function addAnton(action, number) {
    document.getElementById("auton").style.opacity="0";
 document.getElementById("anton").style.opacity="100";  
  console.log(action); //Log it to the console (dev tools)
  actionList.push(action); //Add it to the actionList (what the scouter sees on the app)
  compressedList.push(number); //Add it to the compressedList (QR Code)//
  updateLog(); //Update what the scouter sees on the app (actionList)
                 
}

function Undo() {
  console.log("Undo");
  var lastAction = actionList.pop();
  if (lastAction) {
    compressedList.pop();
    updateLog();
  } else {
    console.log("Nothing to undo");
  }
}

function moveTableLeft() {
  console.log((currentTable - 1) % 2)
  document.getElementById(tables[currentTable]).style.display = "none";
  currentTable = currentTable - 1 < 0 ? tables.length - 1 : currentTable - 1;
  console.log(currentTable)
  document.getElementById(tables[currentTable]).style.display = "block";
}

function moveTableRight() {
  document.getElementById(tables[currentTable]).style.display = "none";
  //console.log(tables.length)
  currentTable = currentTable + 1 > tables.length - 1 ? 0 : currentTable + 1;
  console.log(currentTable)
  document.getElementById(tables[currentTable]).style.display = "block";
  console.log(compressedList)
}

function updateComments() {
  console.log("Comments Recorded");
  comments = document.getElementById("comments").value;
}

function resetButton() {
  var arrayId;
  compressedList = [];
  actionList = [];
  teamNumber = 0;
  matchNumber = 0;
  powerCellCounter = 30; //This should match maximum # of game pieces.
  //updateAvail()
  comments = "";
  arrayId = document.getElementById("MatchNo1");
  arrayId.value = "";
  arrayId = document.getElementById("MatchNo2");
  arrayId.value = "";
  arrayId = document.getElementById("MatchNo3");
  arrayId.value = "";
  arrayId = document.getElementById("teamNo1");
  arrayId.value = "";
  arrayId = document.getElementById("teamNo2");
  arrayId.value = "";
  arrayId = document.getElementById("teamNo3");
  arrayId.value = "";
  arrayId = document.getElementById("comments");
  arrayId.value = "";
  // document.getElementById("counter").innerHTML = '#0';
  // document.getElementById("counter2").innerHTML = '#0';
  // document.getElementById("scoreHigh").disabled = true;
  // document.getElementById("scoreLow").disabled = true;
  // document.getElementById("scoreHigh2").disabled = true;
  // document.getElementById("scoreLow2").disabled = true;
  // document.getElementById("missHigh").disabled = true;
  // document.getElementById("missLow").disabled = true;
  // document.getElementById("missHigh2").disabled = true;
  // document.getElementById("missLow2").disabled = true;
  // document.getElementById("Drop").disabled = true;
  // document.getElementById("Drop2").disabled = true;
  logText = "";
  updateLog()
}

// --- INDIRECT BUTTON FUNCTIONS ---

function updateLog() {
  var logText = actionList.slice().reverse().join('\n');
  document.getElementById("teamLog1").value = logText;
  document.getElementById("teamLog2").value = logText;
  document.getElementById("teamLog3").value = logText;
  document.getElementById("counter").innerHTML = '#' + powerCellCounter;
  // document.getElementById("counter2").innerHTML = '#' + powerCellCounter;
  let foulNumbers = 0;
  actionList.forEach((e) => { if (e == "Foul" || e == "TechFoul") { foulNumbers++ } })
  document.getElementById("foulsCount").innerHTML = foulNumbers;
  //console.log(foulNumbers)
}

//This is a very ugly way of doing this I'm so sorry (it works though) - Ryan Paskach
  //Increase counter if robot gets a game piece
  if (action == "Pickup" | action == "Pickup Far") {
    if (undoStatus == true) {
      powerCellCounter--;
    }
    else {
      powerCellCounter++;
    }
  }
  
  if(powerCellCounter == 10000){
  //   document.getElementById("scoreHigh").disabled = true;
  //   document.getElementById("scoreLow").disabled = true;
  //   document.getElementById("scoreHigh2").disabled = true;
  //   document.getElementById("scoreLow2").disabled = true;
  //   document.getElementById("missHigh").disabled = true;
  //   document.getElementById("missLow").disabled = true;
  //   document.getElementById("missHigh2").disabled = true;
  //   document.getElementById("missLow2").disabled = true;
    
    // document.getElementById("scoreHighFar").disabled = true;
    // document.getElementById("scoreLowFar").disabled = true;
    // document.getElementById("scoreHighFar2").disabled = true;
    // document.getElementById("scoreLowFar2").disabled = true;
    // document.getElementById("missHighFar").disabled = true;
    // document.getElementById("missLowFar").disabled = true;
    // document.getElementById("missHighFar2").disabled = true;
    // document.getElementById("missLowFar2").disabled = true;
    
    // document.getElementById("Drop").disabled = true;
    // document.getElementById("Drop2").disabled = true;
  } else {
    document.getElementById("scoreHigh").disabled = false;
    document.getElementById("scoreLow").disabled = false;
    document.getElementById("scoreHigh2").disabled = false;
    document.getElementById("scoreLow2").disabled = false;
    document.getElementById("missHigh").disabled = false;
    document.getElementById("missLow").disabled = false;
    document.getElementById("missHigh2").disabled = false;
    document.getElementById("missLow2").disabled = false;
    
    // document.getElementById("scoreHighFar").disabled = false;
    // document.getElementById("scoreLowFar").disabled = false;
    // document.getElementById("scoreHighFar2").disabled = false;
    // document.getElementById("scoreLowFar2").disabled = false;
    // document.getElementById("missHighFar").disabled = false;
    // document.getElementById("missLowFar").disabled = false;
    // document.getElementById("missHighFar2").disabled = false;
    // document.getElementById("missLowFar2").disabled = false;
        
// document.getElementById("Drop").disabled = false;
//     document.getElementById("Drop2").disabled = false;
  }
//joke anton thing dont delete
 function secret() {                   document.getElementById("auton").style.opacity="0";
                    document.getElementById("anton").style.opacity="100";
                    
 }
//stuff for setting team number and match number values
 function setboxteam() {                   var teamnum = document.getElementById("teamnum").value;
                     
 }
    function setboxmatch() {                   var matchnum = document.getElementById("matchnum").value;
 }
//the reset button!
    function reset() {
        if (confirm("Do you really, really want to reset?") == true) {
    window.location.href='./index.html';
  }
        
    }