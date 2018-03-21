// Variables
var randomComputerNum = 0;
var wins = 0;
var losses = 0;
var runningTotal = 0;
var crystalValues;

// Random number to match. Stored in the variable randomComputerNum.
function computerChoice() {
    randomComputerNum = Math.floor(Math.random() * 101)  + 19;
    $("#match-num").html(randomComputerNum);
}

// Generates the random values for the crystals. 
function randomCrystalValues() {
    crystalValues = [];
    while(crystalValues.length < 4) {
        var random = Math.floor(Math.random() * 12)  + 1;
        if (crystalValues.indexOf(random) > -1) continue;
        crystalValues.push(random);
    } 
    //console.log("Random value: " + crystalValues);
} 

// 
function crystalAction() {
    $(".doggo img").each(function(index) {
        var crystal = $(this);
        // use jquery .off to remove the click handler. 
        // so that a double click handler value doesn't exist.
        crystal.off('click');
        crystal.on('click', function(event) {
            var c = crystalValues[index];
            runningTotal += c;
            $("#running-score").html(runningTotal);
            totalCheck();
        })
    });
}

function totalCheck() {
    if (runningTotal === randomComputerNum) {
        wins++;
        $("#wins").html(wins);
        alert("You have won!");
        reset();
    } else if (runningTotal > randomComputerNum) {
        losses++;
        $("#losses").html(losses);
        alert("You have lost!");
        reset();
    }
}

function reset() {
    runningTotal = 0;
    $("#running-score").html(runningTotal);
    computerChoice();
    randomCrystalValues();
    crystalAction();
}

$(document).ready(function() {
    reset();
});