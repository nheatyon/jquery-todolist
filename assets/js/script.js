function purifyHTML(text) {
    // Very basic "purification"
    return text.trim().replace(/<[^>]*>/g, '').replace(/[<>]/g, '');
}

$(document).ready(() => {
    const todoList = $(".todo-list");
    const inputBox = $(".inputItem");

    $(".add-btn").click(() => {
        var purifiedText = purifyHTML(inputBox.val());
        if (!purifiedText) {
            alert("Invalid!");
            return;
        }
        var arrowsHTML = `<button class="up-btn">↑</button><button class="down-btn">↓</button><button class="del-btn">-</button>`;
        todoList.append(`<li class="item">${purifiedText}<div class="controls">${arrowsHTML}</div></li>`);
        inputBox.val(""); // Clear input
    });

    todoList.on("click", ".del-btn", function() {
        $(this).parent().parent().remove()
    });

    todoList.on("click", ".up-btn", function() {
        var parentElement = $(this).parent().parent();
        var previousElement = parentElement.prev();
        if (previousElement.length !== 0) {
            parentElement.insertBefore(previousElement);
        }
    });

    todoList.on("click", ".down-btn", function() {
        var parentElement = $(this).parent().parent();
        var nextElement = parentElement.next();
        if (nextElement.length !== 0) {
            parentElement.insertAfter(nextElement);
        }
    });
});
