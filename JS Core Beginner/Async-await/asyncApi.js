async function fetchData(url) {
    try {
        const fetch = (await import('node-fetch')).default;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

const apiURL = 'https://jsonplaceholder.typicode.com/posts';

fetchData(apiURL)
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
