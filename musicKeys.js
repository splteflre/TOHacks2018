// document.getElementById('btn').onclick = function(){
// //Getting button and listning for click
// playAudio();
// //Utilizing the HTML Audio/Video DOM Reference to play audio/video
// }

//to play on the key A do this(using Jquery):
document.addEventListener('keydown', function(e) {
  if(e.keyCode == 65){ //C
  playAudioC();
  }
  else if(e.keyCode == 83){ //D
    playAudioD();
  }
  else if(e.keyCode == 68){ //E
    playAudioE();
  }
  else if(e.keyCode == 70){ //F
    playAudioF();
  }
  else if(e.keyCode == 71){ //G
    playAudioG();
  }
});
