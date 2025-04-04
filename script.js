let sleepData = [];
let totalHours = 0;

const hoursInput = document.getElementById('hours');
const logSleepButton = document.getElementById('log-sleep');
const totalHoursDisplay = document.getElementById('total-hours');
const statusMessage = document.getElementById('status-message').querySelector('p');

logSleepButton.addEventListener('click', () => {
    const hours = parseInt(hoursInput.value);

    if (isNaN(hours) || hours < 0) {
        alert('Please enter a valid number of hours.');
        return;
    }

    sleepData.push(hours);
    totalHours += hours;
    totalHoursDisplay.textContent = totalHours;
    hoursInput.value = ''; // Clear the input

    updateStatusMessage(hours);
});

function updateStatusMessage(hours) {
    if (hours >= 7 && hours <= 9) {
        statusMessage.textContent = 'Status: Good sleep!';
        statusMessage.className = 'good-sleep';
    } else if (hours < 7) {
        statusMessage.textContent = 'Status: You need more sleep.';
        statusMessage.className = 'bad-sleep';
    } else {
        statusMessage.textContent = 'Status: You slept too much.';
        statusMessage.className = 'bad-sleep';
    }
}