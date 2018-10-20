const todoList = [];

function addItemToList() {
    const listItem = $('.to-do-input').val();
    if (listItem.length) {
        todoList.push(listItem);

        const toDoList = buildToDoList();
        $('.to-do-list-items').html(toDoList);
    }

    $('.to-do-input').val('');
}

function buildToDoList() {
    return todoList.map((listItem) => {
        return `<li>${listItem}<i class="fas fa-times-circle delete-button" onclick="deleteListItem('${listItem}')"> </i></li>`;
    });
}

function deleteListItem(listItem) {
    const listItemIndex = todoList.indexOf(listItem);
    todoList.splice(listItemIndex, 1);

    const modifiedToDoList = buildToDoList();

    $('.to-do-list-items').html(modifiedToDoList);
}
