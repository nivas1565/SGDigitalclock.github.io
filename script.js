// Live Clock Function
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();

// Alarm Functionality
let alarmTime = null;

function setAlarm() {
    alarmTime = document.getElementById('alarmTime').value;
    document.getElementById('alarmMessage').textContent = `Alarm set for ${alarmTime}`;
}

function checkAlarm() {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    if (alarmTime === currentTime) {
        alert('Alarm ringing!');
        alarmTime = null;  // Reset alarm after it rings
    }
}

// Check the alarm every minute
setInterval(checkAlarm, 60000);

// Timer Functionality
let timer = null;

function startTimer() {
    const seconds = parseInt(document.getElementById('timerInput').value);
    const endTime = Date.now() + seconds * 1000;

    timer = setInterval(() => {
        const remaining = Math.max(0, Math.round((endTime - Date.now()) / 1000));
        document.getElementById('timerDisplay').textContent = `${remaining} seconds left`;
        if (remaining === 0) {
            clearInterval(timer);
            alert('Timer finished!');
        }
    }, 1000);
}

// World Time Zones Functionality
const timeZones = {
    "New York": "America/New_York",
    "London": "Europe/London",
    "Tokyo": "Asia/Tokyo",
    "Sydney": "Australia/Sydney"
};

function updateWorldClocks() {
    const worldClocksDiv = document.getElementById('worldClocks');
    worldClocksDiv.innerHTML = '';
    for (const [city, timeZone] of Object.entries(timeZones)) {
        const time = new Date().toLocaleTimeString('en-US', { timeZone, hour12: false });
        worldClocksDiv.innerHTML += `<p>${city}: ${time}</p>`;
    }
}

// Update the world clocks every second
setInterval(updateWorldClocks, 1000);
updateWorldClocks();
