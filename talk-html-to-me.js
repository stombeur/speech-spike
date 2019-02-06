
//console.table(voices);
var button = document.getElementById('clickme');
button.disabled = true;

window.speechSynthesis.onvoiceschanged = function() {
    window.speechSynthesis.getVoices();
    button.disabled = false;
};

if (speechSynthesis.onvoiceschanged === undefined) {
    // firefox hack
    window.speechSynthesis.getVoices();
  button.disabled = false;
}

function vindVlaamseEllen(voice) {
    return voice.voiceURI === "Ellen";
}

button.onclick = function() {
    var txttospeak = document.getElementById('inputtext').value;
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();
    console.table(voices);
    var speak = new SpeechSynthesisUtterance(txttospeak);
    var ellen = voices.find(vindVlaamseEllen);
    //console.log(ellen);
    speak.voice = ellen;
    synth.speak(speak);
};
