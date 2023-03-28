// ==UserScript==
// @name         chat GPT Theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Custom theme for chat GPT
// @author       You
// @match        *://chat.openai.com/*

// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


//Makes elements transparent and applys a background image in addition to some green text
function updateTheme() {
    document.body.style.backgroundImage = "url('https://i.imgur.com/FoYAbtK.gif')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";


      var myDivs = document.getElementsByTagName("div");

      for (var i = 0; i < myDivs.length; i++) {
          myDivs[i].style.backgroundColor = "transparent";
          myDivs[i].style.color = "#61FF33";
      }
  }

  // Create a div element with the loading screen styles
  const loadingDiv = document.createElement('div');
  loadingDiv.style.position = 'fixed';
  loadingDiv.style.top = 0;
  loadingDiv.style.left = 0;
  loadingDiv.style.width = '100%';
  loadingDiv.style.height = '100%';
  loadingDiv.style.zIndex = 9998;
  loadingDiv.style.backgroundImage = 'url("https://i.ibb.co/5rsH7kF/super-earth-schuman-frequency.gif")';
  loadingDiv.style.backgroundSize = "cover";
  loadingDiv.style.backgroundRepeat = "no-repeat";

  const loadingDivText = document.createElement('p');
  loadingDiv.style.position = 'absolute';
  loadingDiv.style.zIndex = 9999;
  loadingDiv.style.top = 0;
  loadingDiv.style.left = 0;
  loadingDiv.style.width = '100%';
  loadingDivText.style.color = "white";
  loadingDivText.style.textAlign = "center";
  loadingDivText.style.fontFamily = "Lucida console";
  loadingDivText.style.fontSize = "7em";
  loadingDivText.style.webkitTextStroke = "4px black";
  loadingDivText.style.webkitTextFillColor = "#42f557";
  loadingDivText.innerText = "Lains GPT";

  //Add text to the loading gif
  loadingDiv.appendChild(loadingDivText);

  // Add the loading div to the document body
  document.body.appendChild(loadingDiv);

  //Initial Theming
  window.addEventListener('load', function () {
      var delayInMilliseconds = 4000; //4 second

      setTimeout(function() {
          //your code to be executed after 4 second
          updateTheme();
          //Loading image is removed
          loadingDiv.remove();
      }, delayInMilliseconds);
  })

  //Reccuring re-theming
  var interval = setInterval(updateTheme, 10000);
