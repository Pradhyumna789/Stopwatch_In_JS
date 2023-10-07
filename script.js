const clock = document.querySelector(".clock");

let second = 0, min = 0, hour = 0, intervalId;

const startStopwatch = () => {
    intervalId = setInterval(() => {
        if(second < 59) {
            second++;
        } else if(min > 59) {
            min = 0;
            hour++;
        } else {
            second = 0;
            min++;
        }

        const seconds = String(second).padStart(2, "0"),
            minutes = String(min).padStart(2, "0"),
            hours = String(hour).padStart(2, "0");

        clock.innerText = `${hours}:${minutes}:${seconds}`;

    }, 1000);
};

const stopStopwatch = () => {
    clearInterval(intervalId);
};