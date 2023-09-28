
function addItem() {
    let myList = document.getElementById("myList");
    let itemInput = document.getElementById("itemInput");
    let btn = document.getElementById('addButton');
    let inputValue = itemInput.value.trim();
    if (inputValue !== "") {
        let newItem = document.createElement("li");
        newItem.textContent = inputValue;
        myList.appendChild(newItem);
        itemInput.value = "";
        newItem.style.color = 'blue';
        newItem.style.fontSize = '32px';
    }
    btn.style.background = 'blue';
    btn.style.color = 'white';
    btn.style.borderRadius = '10px';



}


function removeItem() {
    let myList = document.getElementById("myList");
    let listItems = myList.getElementsByTagName("li");
    let btn =document.getElementById('removeButton');
    let lastItem = listItems[listItems.length - 1];
    if (lastItem) {
        myList.removeChild(lastItem);
    }
    btn.style.background = 'red';
    btn.style.color = 'white';
    btn.style.borderRadius = '10px';
}
