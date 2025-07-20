let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // set the test text
    document.getElementById("inputText").value = testText;

    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();
    
    // Change button text and funcitonality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate tiem elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;
    var totalTextLength = userTypedText.length;
    
    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" + 
        "<p>Total length: " + totalTextLength + "</p>" +
        "<p>Words typed: " + typedWords + "</p>" + 
        "<p>Tipe elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words per minute (WPM): " + wpm + "</p>";

    // Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}
