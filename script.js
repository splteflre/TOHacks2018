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
    if (e.keyCode == 65) {
        playTrack1();
    }
});

/*document.addEventListener('keydown', function (e) {
    if (e.keyCode == 65) {
        playTrack1();
    }
});
*/