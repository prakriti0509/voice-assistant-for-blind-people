const mic = document.getElementById('micIcon');
const response = document.getElementById('response');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

mic.addEventListener('click', () => {
  speak("I'm listening. Please say something.");
  recognition.start();
  mic.classList.add('listening');
});

recognition.onresult = function(event) {
  const spoken = event.results[0][0].transcript;
  response.textContent = "You said: " + spoken;
  speak("You said: " + spoken);
  mic.classList.remove('listening');
};

recognition.onend = () => {
  mic.classList.remove('listening');
};

function speak(text) {
  const say = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(say);
}
