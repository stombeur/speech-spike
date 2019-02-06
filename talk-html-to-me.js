
//console.table(voices);
var button = document.getElementById('clickme');
button.disabled = true;


function getVoices() {
    window.speechSynthesis.getVoices();
    button.disabled = false;
};

getVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getVoices();
}

function vindVlaamseEllen(voice) {
    voice.name === "Ellen";
}

button.onclick = function() {
    var txttospeak = document.getElementById('inputtext').value;
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();
    console.log(voices);
    var speak = new SpeechSynthesisUtterance(txttospeak);
    var ellen = window.speechSynthesis.getVoices().find(function(voice){return voice.name === 'Ellen'});
    console.log(ellen);
    speak.voice = ellen;
    synth.speak(speak);
};
