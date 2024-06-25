async function fetchUrls(urls) {
    try {
        const fetch = await import('node-fetch').then(module => module.default);
        const fetchUrl = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error fetching ${url}: ${response.statusText}`);
                }
                return await response.text();
            } catch (error) {
                console.error(`Failed to fetch ${url}: ${error.message}`);
                return null;
            }
        };

        const fetchPromises = urls.map(url => fetchUrl(url));

        const results = await Promise.all(fetchPromises);
        return results;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return [];
    }
}

const urls = [
    'https://example.com',
    'https://example.org',
    'https://example.net'
];

fetchUrls(urls)
    .then(contents => {
        contents.forEach((content, index) => {
            console.log(`Content from ${urls[index]}:`);
            console.log(content); 
        });
    })
    .catch(error => {
        console.error(`Error: ${error.message}`);
    });
