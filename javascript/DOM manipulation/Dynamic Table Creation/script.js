document.getElementById("createTableBtn").addEventListener("click", function () {
    const rows = parseInt(document.getElementById("rowsInput").value);
    const cols = parseInt(document.getElementById("colsInput").value);

    const table = document.createElement("table");
    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement("td");
            cell.style.border = "1px solid black";
            cell.textContent = `(${i + 1}, ${j + 1})`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    const container = document.getElementById("tableContainer");
    container.innerHTML = "";
    container.appendChild(table);
});