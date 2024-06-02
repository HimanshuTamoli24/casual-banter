
let itemCounter = 5;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    if (ev.target.classList.contains("drag")) {
        ev.target.appendChild(draggedElement);
    } else if (
        ev.target.classList.contains("drag") ||
        ev.target.closest(".drag")
    ) {
        ev.target.closest(".drag").appendChild(draggedElement);
    }
}

function addItem() {
    itemCounter++;
    const newItem = document.createElement("div");
    newItem.className = "item";
    newItem.id = `item${itemCounter}`;
    newItem.draggable = true;
    newItem.ondragstart = drag;

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = `Item ${itemCounter}`;

    newItem.appendChild(newInput);
    document.getElementById("item-container").appendChild(newItem);
}

function deleteItem() {
    if (itemCounter > 0) {
        const itemContainer = document.getElementById("item-container");
        const lastItem = document.getElementById(`item${itemCounter}`);
        if (lastItem) {
            itemContainer.removeChild(lastItem);
            itemCounter--;
        }
    }
}
