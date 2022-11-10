var actionList = [];

var compressedList = [];

var organizedActionList = [0, 0, 0, 0, 0, 0, 0, 0];

var teamNumber;

var matchNumber;

var powerCellCounter = 1000;

var currentTable = 0;

var tables = ["table1", "table2", "table3", "QRCode"];

var moved = 0;

var comments = "";

var a;

var darn;
// var finalLowNear;





function init() {

  // updateList();

    // Only do this when you're going to the review section  
  
    // document.getElementById("finalScoreLowNear").value=organizedActionList[0];
  
    // document.getElementById("finalScoreHighNear").value=organizedActionList[1];
  
    // document.getElementById("finalScoreLowFar").value=organizedActionList[2];
  
    // document.getElementById("finalScoreHighFar").value=organizedActionList[3];
  
  

  tables.forEach((x) => document.getElementById(x).style.display = "none");

  document.getElementById(tables[currentTable]).style.display = "block";




}


function resetButton() {
  var arrayId;
  var gamePieces 
  compressedList = [];
  actionList = [];
  organizedActionList = [];
  teamNumber = 0;
  matchNumber = 0;
  powerCellCounter = 1000;
  updateAvail()
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
};

function updateList() {

  organizedActionList[0] = 0;
  organizedActionList[1] = 0;
  organizedActionList[2] = 0;
  organizedActionList[3] = 0;
  organizedActionList[4] = 0;
  organizedActionList[5] = 0;
  organizedActionList[6] = 0;
  organizedActionList[7] = 0;
  for (var i = 0; i < actionList.length; i++) {

    // console.log("test");

    if (actionList[i] == "scoreLow2") {

      organizedActionList[0]++;
      // console.log("weee!!");
    }

    else if (actionList[i] == "scoreHigh2") {

      organizedActionList[1]++;

    }

    else if (actionList[i] == "scoreLowFar2") {

      organizedActionList[2]++;

    }

    else if (actionList[i] == "scoreHighFar2") {

      organizedActionList[3]++;

    }
    if (actionList[i] == "scoreLow") {

      organizedActionList[4]++;
      // console.log("weee!!");
    }

    else if (actionList[i] == "scoreHigh") {

      organizedActionList[5]++;

    }

    else if (actionList[i] == "scoreLowFar") {

      organizedActionList[6]++;

    }

    else if (actionList[i] == "scoreHighFar") {

      organizedActionList[7]++;
  }

}
}




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





function updateLog() {

  var logText = actionList.slice().reverse().join('\n');
  
  document.getElementById("teamLog1").value = logText;

  document.getElementById("teamLog2").value = logText;

  document.getElementById("teamLog3").value = logText;

  document.getElementById("counter").innerHTML = '#' + powerCellCounter;

  // document.getElementById("counter2").innerHTML = '#' + powerCellCounter;

  // document.getElementById("counter2").innerHTML = '#' + powerCellCounter;

  let foulNumbers = 0;
  actionList.forEach((e) => { if (e == "Foul" || e == "TechFoul") { foulNumbers++ } })

  document.getElementById("foulsCount").innerHTML = foulNumbers;
  //console.log(foulNumbers)

}











//function changeTable(tableToShow){

// for(var i=0; i<tables.length;i++){

// 		if(i==tableToShow){

// 					document.getElementById(tables[i]).style.display = "block";

// 					continue;

// 		}

// 		document.getElementById(tables[i]).style.display = "none";

// 	}



// 	tableToShow = tableToShow % tables.length;

// }



function moveTableLeft() {



  console.log((currentTable - 1) % 2)

  document.getElementById(tables[currentTable]).style.display = "none";

  currentTable = currentTable - 1 < 0 ? tables.length - 1 : currentTable - 1;

  console.log(currentTable)

  document.getElementById(tables[currentTable]).style.display = "block";



}

// Generate list for console
        function logList(text)
        {var sums = Array(30).fill(0);  // Change the number in the Array to the max # of item numbers (see the addAction this.value)

            for (const item of compressedList) {
              sums[item]++;
            }}

function moveTableRight() {

  document.getElementById(tables[currentTable]).style.display = "none";

  //console.log(tables.length)

  currentTable = currentTable + 1 > tables.length - 1 ? 0 : currentTable + 1;

  console.log(currentTable)

  document.getElementById(tables[currentTable]).style.display = "block";

 
  updateReview();

  console.log(compressedList)
}


function tech() {
  console.log("Tech Foul");
  techFoul = document.getElementById("techFo").value;
  //updateLog();
}

function foul() {
  console.log("Foul");
  foul = document.getElementById("Foul");
  foulCount++;
  // updateLog();
}




// function finalLN() {
//   document.getElementById("scoreLowNear2").value = finalLowNear

// }


function updateReview() {

    document.getElementById("ScoreLow").value=organizedActionList[0];
    // console.log("oAL[0] = " + organizedActionList[0]);
  
    document.getElementById("finalScoreHigh").value=organizedActionList[1];
  
    document.getElementById("finalScoreLow").value=organizedActionList[2];
  
    document.getElementById("finalScoreHigh").value=organizedActionList[3];

    document.getElementById("autonScoreLow").value=organizedActionList[4];

    document.getElementById("autonScoreHigh").value=organizedActionList[5];

    document.getElementById("autonScoreLow").value=organizedActionList[6];

    document.getElementById("autonScoreHigh").value=organizedActionList[7];

    // console.log("helloworld");

}















// function changeTeamNumber()

// {

//   console.log("Team Number Recorded");

//   teamNumber = document.getElementById("TeamNo").value;



// }

// function changeMatchNumber()

// {

//   console.log("Match Number Recorded");

//   matchNumber = document.getElementById("MatchNo").value;

// }



function updateComments() {

  console.log("Comments Recorded");

  comments = document.getElementById("comments").value;

}



function Undo() {

  console.log("Undo");

  var lastAction = actionList.pop();

  raiseCounter(lastAction, true);

  lowerCounter(lastAction, true);

  updateLog();

  compressedList.pop();
}



function addAction(action, number) {

  console.log(action);

  raiseCounter(action, false);

  lowerCounter(action, false);

  actionList.push(action);

  compressedList.push(number);

  updateLog();

  updateList();

}






// for [] in Array {

// Sum [] ++

// };











//This is a very ugly way of doing this I'm so sorry (it works though)

function raiseCounter(action, undoStatus) {

  if (action == "Pickup" || action == "Pickup Far") {

    if (undoStatus == true) {

      powerCellCounter--;

    }

    else {

      powerCellCounter++;

    }
    updateAvail()

  }

}

function lowerCounter(action, undoStatus) {

  if (action == "scoreHigh" || action == "scoreHighFar" || action == "scoreLow" || action == "scoreLowFar" || action == "missLow" || action == "missLowFar" || action == "missHigh" || action == "missHighFar" || action == "Drop" || action == "scoreHigh2" || action == "scoreHighFar2" || action == "scoreLow2" || action == "scoreLowFar2" || action == "missLow2" || action == "missLowFar2" || action == "missHigh2" || action == "missHighFar2" || action == "Drop2") {

    if (undoStatus == true) {

      powerCellCounter++;

    }

    else {

      powerCellCounter--;

    }
    updateAvail()

  }

}

function updateAvail(){

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

}
