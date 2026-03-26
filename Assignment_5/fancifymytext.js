// Message wont pop unitl the user clicks the "Bigger" button.
function showHelloMessage() {
    alert("Hello, world!");
    // change text area font size to 24pt
    document.getElementById("textInput").style.fontSize = "24pt";

}

// Toggle styles depending if Fancy CheckBox or BoringBetty radio button is checked or not
// alerts the user onChange of the radio button
function toggleStyle() {
    alert("You have changed the style!");
    var textArea = document.getElementById("textInput");
    var fancyCheckbox = document.getElementById("fancy");

    if (fancyCheckbox.checked) {
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
        textArea.style.fontWeight = "bold";
    } else {
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
        textArea.style.fontWeight = "normal";
    }
}

// Adds a "-Moo." suffix to each sentence in the text area when the "Moo" button is clicked
function toggleMoo() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value.toUpperCase();

    var sentence = text.split(".");
    textArea.value = sentence.join("-Moo.");
    
}

