
// Api Give By Mohammad Nayan
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/generate-art', async (req, res) => {

    const prompt = req.query.prompt || 'default art description';
    const headers = {
        'authority': 'ai-api.magicstudio.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryiIPy5zuNdGo1Aem4',
        'origin': 'https://magicstudio.com',
        'referer': 'https://magicstudio.com/ai-art-generator/',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
    };

    const dataString = `------WebKitFormBoundaryiIPy5zuNdGo1Aem4\r\nContent-Disposition: form-data; name="prompt"\r\n\r\n${prompt}\r\n------WebKitFormBoundaryiIPy5zuNdGo1Aem4\r\nContent-Disposition: form-data; name="output_format"\r\n\r\nbytes\r\n------WebKitFormBoundaryiIPy5zuNdGo1Aem4\r\nContent-Disposition: form-data; name="user_profile_id"\r\n\r\nnull\r\n------WebKitFormBoundaryiIPy5zuNdGo1Aem4\r\nContent-Disposition: form-data; name="anonymous_user_id"\r\n\r\n126c01f6-39e6-4eb5-846c-c61af1e52fb1\r\n------WebKitFormBoundaryiIPy5zuNdGo1Aem4\r\nContent-Disposition: form-data; name="request_timestamp"\r\n\r\n1728713958.952\r\n------WebKitFormBoundaryiIPy5zuNdGo1Aem4\r\nContent-Disposition: form-data; name="user_is_subscribed"\r\n\r\nfalse\r\n------WebKitFormBoundaryiIPy5zuNdGo1Aem4\r\nContent-Disposition: form-data; name="client_id"\r\n\r\npSgX7WgjukXCBoYwDM8G8GLnRRkvAoJlqa5eAVvj95o\r\n------WebKitFormBoundaryiIPy5zuNdGo1Aem4--\r\n`;

    try {
        const response = await axios.post('https://ai-api.magicstudio.com/api/ai-art-generator', dataString, {
            headers,
            responseType: 'arraybuffer' 
        });
        res.set('Content-Type', 'image/jpeg');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating art');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
