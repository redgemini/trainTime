// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC4pXO-dUOljmnSeFCAfG2fwZn5fpt0Oxw",
    authDomain: "train-times-22dd5.firebaseapp.com",
    databaseURL: "https://train-times-22dd5.firebaseio.com",
    projectId: "train-times-22dd5",
    storageBucket: "train-times-22dd5.appspot.com",
    messagingSenderId: "1005430180893"
  };
  firebase.initializeApp(config);

  var trainData = firebase.database();

//Button Function
$("#add-train-btn").on("click", function() {

  // Pull in User Input
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain = $("#first-train-input").val().trim();
  var frequency = $("#frequency-input").val().trim();

//Object for trainData
  var newTrain = {
      name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency,
  }

})

// Uploads train data to the database
  trainData.ref().push(newTrain);

// Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTrain);
  console.log(newTrain.frequency);

// Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");

// Determine when the next train arrives.
  return false;

//Create Firebase event to add trains to database
  trainData.ref().on("child_added", function(childSnapshot, prevChildKey) {

      console.log(childSnapshot.val());

// Store info in a variable.
      var tName = childSnapshot.val().name;
      var tDestination = childSnapshot.val().destination;
      var tFrequency = childSnapshot.val().frequency;
      var tFirstTrain = childSnapshot.val().firstTrain;

      var timeArr = tFirstTrain.split(":");
      var trainTime = moment().hours(timeArr[0]).minutes(timeArr[1]);
      var maxMoment = moment.max(moment(), trainTime);
      var tMinutes;
      var tArrival;
      
  //Statement to determine the first train time
      
  });