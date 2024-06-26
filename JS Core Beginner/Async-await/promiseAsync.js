const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function fetchMultipleUrls(urls) {
    try {
        const fetchPromises = urls.map(url => fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }));

        const results = await Promise.all(fetchPromises);

        return results;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchMultipleUrls(urls)
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
