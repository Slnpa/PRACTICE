async function fetchFromMultipleAPIs(apiUrls) {
    try {
        // Динамический импорт node-fetch
        const { default: fetch } = await import('node-fetch');

        // Функция для извлечения данных из одного API
        const fetchData = async (url) => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
            }
            return await response.json(); // Предполагаем, что данные возвращаются в формате JSON
        };

        // Создание массива Promises для всех API
        const fetchPromises = apiUrls.map(url => fetchData(url));

        // Ожидание выполнения всех Promises параллельно
        const results = await Promise.all(fetchPromises);

        // Возвращаем объединенный результат
        return results;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        return [];
    }
}

// Пример использования
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
