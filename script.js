document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LOADER
    ========================== */

    const loader = document.getElementById("loader");
    const text = document.querySelector(".loader-content p");

    if (loader && text) {

        const messages = [
            "📡 Incoming Transmission...",
            "🛰️ Scanning orbit...",
            "👨‍🚀 Crew verified...",
            "🚀 Launch authorization received...",
            "🌙 WELCOME, ASTRONAUT."
        ];

        let i = 0;

        const interval = setInterval(() => {

            i++;

            if (i < messages.length) {
                text.textContent = messages[i];
            }

        }, 700);

        setTimeout(() => {

            clearInterval(interval);

            loader.classList.add("hidden");

        }, 3500);

    }

    /* ==========================
       TRANSMISSION COUNTDOWN
    ========================== */

    const countdown = document.getElementById("countdown");

    if (countdown) {

        const launchDate = new Date("2026-07-31T12:00:00-07:00").getTime();

        const timer = setInterval(() => {

            const now = new Date().getTime();
            const distance = launchDate - now;

            if (distance <= 0) {

    clearInterval(timer);

    const CA = "DhDeXiejye25wzGrQfb7hLFkpfzHro3K4Z9TWi4Gpump";

    countdown.innerHTML = `
        <div class="launch-reveal">

            <h2 style="color:#A855F7;">
                📡 COORDINATES RECEIVED
            </h2>

            <p style="opacity:.8;margin-bottom:20px;">
                Transmission complete.
            </p>

            <div id="caBox" class="ca-box">
                ${CA}
            </div>

            <button id="copyCA">
                📋 Copy Coordinates
            </button>

        </div>
    `;

    document.getElementById("copyCA").addEventListener("click", () => {

        navigator.clipboard.writeText(CA);

        const btn = document.getElementById("copyCA");

        btn.textContent = "✅ Copied";

        setTimeout(() => {
            btn.textContent = "📋 Copy Coordinates";
        },2000);

    });

    const status = document.getElementById("launch-status");

    if(status){

        status.innerHTML = "🛰️ Transmission successful.";

    }

    return;

}

            document.getElementById("days").textContent =
                Math.floor(distance / (1000 * 60 * 60 * 24));

            document.getElementById("hours").textContent =
                Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            document.getElementById("minutes").textContent =
                Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            document.getElementById("seconds").textContent =
                Math.floor((distance % (1000 * 60)) / 1000);

        }, 1000);

    }

});
