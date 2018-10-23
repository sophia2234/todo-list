let toDoList = [];
let finishedToDoList = [];

$(document).ready(() => {
    $('.to-do-input').bind("keyup", (event) => {
        if (event.keyCode === 13) {
            addItemToList();
        }
    });
});

function addItemToList() {
    const listItem = $('.to-do-input').val();
    if (listItem.length) {
        toDoList.push(listItem);

        const newToDoList = buildToDoList();
        $('.to-do-list-items').html(newToDoList);
    }

    $('.to-do-input').val('');
}

function buildToDoList() {
    return toDoList.map((listItem) => {
        return `<div class="to-do-list-item">
                    <li class="list-item-text">${listItem}</li> 
                    <i class="far fa-circle delete-button" onClick="deleteListItem('${listItem}')"> </i>
                </div>`;
    });
}

function deleteListItem(listItem) {
    const listItemIndex = toDoList.indexOf(listItem);
    toDoList.splice(listItemIndex, 1);

    const modifiedToDoList = buildToDoList();
    $('.to-do-list-items').html(modifiedToDoList);

    finishedToDoList.push(listItem);

    const modifiedFinishedToDoList = buildFinishedToDoList();
    $('.finished-to-do-list-items').html(modifiedFinishedToDoList);
}

function buildFinishedToDoList() {
    return finishedToDoList.map((listItem) => {
        return `<div class="finished-to-do-list-item">
                    <li class="finished-list-item-text">${listItem}</li> 
                    <i class="far fa-check-circle finished-delete-button"> </i>
                </div>`;
    });
}
