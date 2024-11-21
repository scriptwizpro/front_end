document.getElementById("startLightBtn").addEventListener("click", function () {
    const colors = ["red", "yellow", "green"];
    let index = 0;

    setInterval(() => {
        document.getElementById(colors[index]).style.backgroundColor = colors[index];
        if (index > 0) {
            document.getElementById(colors[index - 1]).style.backgroundColor = "gray";
        } else {
            document.getElementById(colors[2]).style.backgroundColor = "gray";
        }
        index = (index + 1) % colors.length;
        }, 1000);
    });