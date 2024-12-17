document.getElementById("calculateButton").addEventListener("click", () => {
    const input = document.getElementById("timeInput").value.toLowerCase();
    const result = document.getElementById("result");

    // Current time
    const currentTime = new Date();
    let onlineTime = new Date(currentTime);

    // Extract hours and minutes from input
    const hoursMatch = input.match(/(\d+)h/); // e.g., "5h"
    const minutesMatch = input.match(/(\d+)m/); // e.g., "45m"

    const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;

    if (hours === 0 && minutes === 0) {
        result.textContent = "Please enter time duration (e.g., 5h, 45m).";
        return;
    }

    // Subtract duration from current time
    onlineTime.setHours(currentTime.getHours() - hours);
    onlineTime.setMinutes(currentTime.getMinutes() - minutes);

    // Format result to show 12-hour time format with AM/PM
    const formattedTime = onlineTime.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true // 12-hour format enabled
    });

    result.innerHTML = `Messenger opened : ${formattedTime} <i class="fas fa-clock clock-icon"></i>`;
});
