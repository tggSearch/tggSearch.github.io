const axios = require('axios');

async function postIndexNow(key, url) {
    const requestData = {
        host: "www.example.org",
        key: key,
        keyLocation: `https://tggsearch.gtihub.io/${key}.txt`,
        urlList: urls
    };

    try {
        const response = await axios.post('https://api.indexnow.org/IndexNow', requestData, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Host': 'api.indexnow.org'
            }
        });

        console.log('Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error posting to IndexNow:', error);
        throw error;
    }
}

// Example usage:
const key = "93322823db424d08b5e9a49dfa428112";
const url = [
    "https://tggsearch.gtihub.io/docs/telegram-no-sms-code.html",
    "https://tggsearch.gtihub.io/"
];

postIndexNow(key, url).then();
