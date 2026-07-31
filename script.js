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

                countdown.innerHTML = `
                    <div style="width:100%;text-align:center;">
                        <h2 style="color:#A855F7;">
                            🟢 MISSION STATUS: LIVE
                        </h2>

                        <p>
                            Contract Address Successfully Transmitted
                        </p>
                    </div>
                `;

                const status = document.getElementById("launch-status");

                if (status) {

                    status.innerHTML = `
                        🚀 Official CA available now in Telegram.
                    `;

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
