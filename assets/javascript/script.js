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




