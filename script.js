const url = 'https://fictional-book-data-scraper-api.p.rapidapi.com/books/%7mystery%7D'; // Replace with the specific genre
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd7321cad77msh405233d0031c669p18ce7djsnba75e2ed1451',
        'X-RapidAPI-Host': 'fictional-book-data-scraper-api.p.rapidapi.com'
    }
};
console.log(url)

async function fetchAndDisplayData() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.ok) {
            const tableBody = document.querySelector('#bookTable tbody');

            data.forEach(book => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.price}</td>
                    <td>${book.stock}</td>
                    <!-- Add more table data cells as needed -->
                `;
                tableBody.appendChild(row);
            });

            // Show the table when data is available
            document.querySelector('#bookTable').style.display = 'table';
        } else {
            console.error(`API request failed with status ${response.status}`);
        }
    } catch (error) {
        console.error(error);
    }
}

// Add a click event listener to the button
document.querySelector('#fetchButton').addEventListener('click', fetchAndDisplayData);
