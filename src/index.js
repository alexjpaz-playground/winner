var soundboardMediaUrl = "./sounds/";

var musicAudio = new Audio(soundboardMediaUrl+"FireEmblemTheme.ogg");
musicAudio.load();

const play = () => {
  musicAudio.play();
};

try {
  play();
} catch(e) {
  throw e;

  document.addEventListener("click", function(){
    play();
  });
}

