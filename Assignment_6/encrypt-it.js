/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  
  function init() {
    // part 1: testing window load
    console.log("Window loaded!");

    // part 2" testing encrypt button
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncryptClick);

    // part 3: testing reset button
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function handleEncryptClick() {
      console.log("Encrypt button clicked!");
      let inputText = document.getElementById("input-text").value;
      let encryptedText = shiftCipher(inputText);
      document.getElementById("result-area").textContent = encryptedText;
  }

  function handleReset() {
      console.log("Reset button clicked!");
      document.getElementById("input-text").value = "";
      document.getElementById("result-area").textContent = "";
  }

  function shiftCipher(text) {
      text = text.toLowerCase();
      let result = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] < 'a' || text[i] > 'z') {
          result += text[i];
        } else if (text[i] == 'z') {
          result += 'a';
        } else {
          let letter = text.charCodeAt(i);
          let resultLetter = String.fromCharCode(letter + 1);
          result += resultLetter;
        }
      }
      return result;
  }

})();
