document.getElementById("submitBtn").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value;
    document.getElementById("greeting").textContent = `Hello, ${name}!`;
});