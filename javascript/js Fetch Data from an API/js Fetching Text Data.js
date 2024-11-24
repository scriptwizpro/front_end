fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));