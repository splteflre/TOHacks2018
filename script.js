// document.getElementById('btn').onclick = function(){
// //Getting button and listning for click
// playAudio();
// //Utilizing the HTML Audio/Video DOM Reference to play audio/video
// }

//to play on the key A do this(using Jquery):
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 32) {
        startConverting();
    }
    if (e.keyCode == 65) { //C
        playAudioA();
    }
    if (e.keyCode == 87) { //D
        playAudioBb();
    }
    if (e.keyCode == 83) { //E
        playAudioB();
    }
    if (e.keyCode == 68) { //F
        playAudioC();
    }
    if (e.keyCode == 82) { //G
        playAudioCs();
    }
    if (e.keyCode == 70) {
        playAudioD();
    }
    if (e.keyCode == 84) {
        playAudioDs();
    }
    if (e.keyCode == 71) {
        playAudioE();
    }
    if (e.keyCode == 72) {
        playAudioF();
    }
    if (e.keyCode == 85) {
        playAudioFs();
    }
    if (e.keyCode == 74) {
        playAudioG();
    }
    if (e.keyCode == 73) {
        playAudioGs();
    }
    if (e.keyCode == 75) {
        playAudioAA();
    }
});

/*document.addEventListener('keydown', function (e) {
    if (e.keyCode == 65) {
        playTrack1();
    }
});
*/