fetch('https://jsonplaceholder.typicode.com/posts/10000')
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error.message));