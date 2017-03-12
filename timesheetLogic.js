

// 1. Initialize Firebase
  var config = {
    apiKey: "AIzaSyD_U8w3kwUXqXLOsPx-wZsh6Wa9ic4L1XA",
    authDomain: "train-time-74e9a.firebaseapp.com",
    databaseURL: "https://train-time-74e9a.firebaseio.com",
    storageBucket: "train-time-74e9a.appspot.com",
    messagingSenderId: "709705104167"
  };


firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var trainTime = moment($("#time-input").val().trim(), "HH:mm").format("X");
  var freq = $("#freq-input").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    name: trainName,
    destination: destination,
    arrival: trainTime,
    frequency: freq
  };

  // Uploads train data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.arrival);
  console.log(newTrain.frequency);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#freq-input").val("");

  // Prevents moving to new page
  return false;
});

// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().role;
  var trainTime = childSnapshot.val().start;
  var freq = childSnapshot.val().rate;

  // train Info
  console.log(trainName);
  console.log(destination);
  console.log(trainTime);
  console.log(freq);

  // Prettify the train time
  //var empStartPretty = moment.unix(empStart).format("MM/DD/YY");

  //Calculate train "minutes away"
  //var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  //console.log(empMonths);

  // Calculate train "minutes away"
  //var empBilled = empMonths * empRate;
  //console.log(empBilled);

  // Add each train's data into the table
  //$("#train-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
 // empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
});

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case
