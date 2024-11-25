document.getElementById("toggleBtn").addEventListener("click", function() {
    const text = document.getElementById("hiddenText");
    text.style.display = (text.style.display === "none") ? "block" : "none";
});