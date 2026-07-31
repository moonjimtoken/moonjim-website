const loader = document.getElementById("loader");

const messages = [
    "📡 Incoming Transmission...",
    "🛰️ Scanning orbit...",
    "👨‍🚀 Crew verified...",
    "🚀 Launch authorization received...",
    "🌙 WELCOME, ASTRONAUT."
];

const text = document.querySelector(".loader-content p");

let i = 0;

const interval = setInterval(() => {

    i++;

    if(i < messages.length){

        text.textContent = messages[i];

    }

},700);

setTimeout(() => {

    clearInterval(interval);

    loader.classList.add("hidden");

},3500);
