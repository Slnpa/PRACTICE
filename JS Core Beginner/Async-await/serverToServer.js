const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function fetchDataFromServers() {
    try {
        const firstUrl = 'https://jsonplaceholder.typicode.com/posts/1';
        const firstResponse = await fetch(firstUrl);
        
        if (!firstResponse.ok) {
            throw new Error(`HTTP error! status: ${firstResponse.status}`);
        }

        const firstData = await firstResponse.json();
        console.log('First data:', firstData);

        const secondUrl = `https://jsonplaceholder.typicode.com/users/${firstData.userId}`;
        const secondResponse = await fetch(secondUrl);

        if (!secondResponse.ok) {
            throw new Error(`HTTP error! status: ${secondResponse.status}`);
        }

        const secondData = await secondResponse.json();
        console.log('Second data:', secondData);

        return secondData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

fetchDataFromServers()
    .then(data => {
        console.log('Final fetched data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
