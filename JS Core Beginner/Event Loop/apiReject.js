const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function fetchWithTimeout(url, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { signal });
        

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Fetch aborted due to timeout');
        } else {
            console.error('Fetch error:', error);
        }
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
}

const apiURL = 'https://jsonplaceholder.typicode.com/posts';

fetchWithTimeout(apiURL, 5000)
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
