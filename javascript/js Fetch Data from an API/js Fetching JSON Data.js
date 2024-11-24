fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log('Title:', data.title))
    .catch(error => console.error('Error:', error));