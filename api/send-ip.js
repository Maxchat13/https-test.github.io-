import axios from 'axios';

export default async function handler(req, res) {
    // Seul le POST est autorisé
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { ip } = req.body;
    const webhookURL = process.env.DISCORD_WEBHOOK_URL; // Utilise la variable d'environnement pour cacher le webhook

    if (!ip) {
        return res.status(400).json({ message: 'IP address is required' });
    }

    const message = `My public IP address is: ${ip}`;

    try {
        await axios.post(webhookURL, {
            content: message
        });
        res.status(200).json({ message: 'Message sent to Discord' });
    } catch (error) {
        console.error('Error sending message to Discord:', error);
        res.status(500).json({ message: 'Error sending message to Discord' });
    }
}
