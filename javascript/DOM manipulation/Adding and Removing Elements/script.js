document.getElementById("addItemBtn").addEventListener("click", function (){
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${document.getElementById("list").children.length + 1}`;
    document.getElementById("list").appendChild(newItem);
});

document.getElementById("removeItemBtn").addEventListener("click", function (){
    const list = document.getElementById("list");
    if (list.children.length > 0) {
        list.removeChild(list.lastChild);
    }
});
    