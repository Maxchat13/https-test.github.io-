function sendToBackend(ipAddress) {
    const backendURL = 'https://ip-grabber-n2u0dmo6i-maxchat13s-projects.vercel.app/api/send-ip'; // Assure-toi de pointer vers /api/send-ip

    const xhr = new XMLHttpRequest();
    xhr.open('POST', backendURL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('IP sent to backend successfully:', xhr.responseText);
        } else {
            console.error('Error sending IP to backend:', xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.error('Network error while sending IP to backend.');
    };

    xhr.send(JSON.stringify({ ip: ipAddress }));
}
