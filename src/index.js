alert(1)

var soundboardMediaUrl = "https://soundboard.alexjpaz.com/";

var startAudio = new Audio(soundboardMediaUrl+"chop/john_cena/start");
var endAudio = new Audio(soundboardMediaUrl+"chop/john_cena/end");

(function () {
  soundboard.announceWinner = function(winner) {
    var winAudio = sounds.load('chop/ssb/win1');
    sounds.load('chop/ssb/winner');
    winAudio.volume = config.winnerSoundVolume
    setTimeout(function() {
      soundboard.announce(winner, 'chop/ssb/winner');
    }, 500);
    winAudio.play();
  };

  soundboard.announce = function(text, start, end) {
    var startAudio = null, endAudio = null;

    if(start) {
      startAudio = new Audio(soundboardMediaUrl+start);
      startAudio.load();
      startAudio.volume = config.winnerSoundVolume
    }

    if(end) {
      endAudio = new Audio(soundboardMediaUrl+end);
      endAudio.load();
      endAudio.volume = config.winnerSoundVolume
    }


    if(start) {
      startAudio.play();
      startAudio.addEventListener("ended", function() {
        speak(text, function() {
          if(endAudio) {
            endAudio.play();
          }
        });
      }, false);
    } else {
      speak(text);
    }
  };

});
