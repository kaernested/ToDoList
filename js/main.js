const newItem = document.querySelector("#new-item");
const btnAdd = document.querySelector("#btn-add");
const divList = document.querySelector("#to-do-list");
const divChange = document.querySelector(".change-item");


// *** New to do item added to the dom ***
const addNewItem = () => {
    if (!newItem.value) {
        alert('Please write a new item.');
    } else {
        divList.innerHTML += `
        <tr class="one-row">
            <td>${newItem.value}</td>
            <td onclick="changeItem('${newItem.value}')"><img id="edit" src="img/edit.svg" alt="Edit item"></td>
            <td onclick="deleteItem(this)"><img id="delete" src="img/delete.svg" alt="Delete item"></td>
        </tr>
            `
        newItem.value = "";
    }
};
btnAdd.onclick = addNewItem;


// *** Item edited ***
const changeItem = (r) => {
    const item = r;
    divChange.innerHTML = `
    <div class="list-input">
        <input type="text" id="edit-item" value="${item}" placeholder="Edit item">
        <button onclick="addEdited()" id="btn-edit">Edit</button>
    </div>
    `
};

const addEdited = () => {
    divChange.innerHTML = '';
}


// *** Item deleted ***
const deleteItem = (d) => {
    const i = d.parentNode.rowIndex;
    divList.deleteRow(i);
};


// *** Enter button works *** 
newItem.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        btnAdd.click();
    }
});