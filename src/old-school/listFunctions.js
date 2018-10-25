let toDoList = [];
let finishedToDoList = [];

$(document).ready(() => {
    $('.new-list-item-input').bind("keyup", (event) => {
        if (event.keyCode === 13) {
            addItemToList();
        }
    });
});

function addItemToList() {
    const listItem = $('.new-list-item-input').val();
    if (listItem.length) {
        toDoList.push(listItem);

        const newToDoList = buildToDoList();
        $('.active-list-items').html(newToDoList);
    }

    $('.new-list-item-input').val('');
}

function buildToDoList() {
    return toDoList.map((listItem) => {
        return `<div class="active-list-item">
                    <li class="active-list-item-text">${listItem}</li> 
                    <i class="far fa-circle active-icon" onClick="deleteListItem('${listItem}')"> </i>
                </div>`;
    });
}

function deleteListItem(listItem) {
    const listItemIndex = toDoList.indexOf(listItem);
    toDoList.splice(listItemIndex, 1);

    const modifiedToDoList = buildToDoList();
    $('.active-list-items').html(modifiedToDoList);

    finishedToDoList.push(listItem);

    const modifiedFinishedToDoList = buildFinishedToDoList();
    $('.finished-list-items').html(modifiedFinishedToDoList);
}

function buildFinishedToDoList() {
    return finishedToDoList.map((listItem) => {
        return `<div class="finished-list-item">
                    <li class="finished-list-item-text">${listItem}</li> 
                    <i class="far fa-check-circle finished-icon"> </i>
                </div>`;
    });
}
