async function fetchPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) throw new Error(`HTTP error! status: $response.status)`);
        const data = await response.json();
        console.log('Post:', data);
    } catch (error) {
        console.error('Error', error.message);  
    }
}

fetchPost();