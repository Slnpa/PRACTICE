async function fetchFromMultipleAPIs(apiUrls) {
    try {
        const { default: fetch } = await import('node-fetch');

        const fetchData = async (url) => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
            }
            return await response.json();
        };

        const fetchPromises = apiUrls.map(url => fetchData(url));

        const results = await Promise.all(fetchPromises);

        return results;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        return [];
    }
}

const apiUrls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

fetchFromMultipleAPIs(apiUrls)
    .then(results => {
        console.log('Combined results:');
        console.log(results);
    })
    .catch(error => {
        console.error(`Error: ${error.message}`);
    });
