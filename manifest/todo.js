
    let toDoListArray = [];

    function addTodo(text){
        const todo = {
            text,
            checked: false,
            id: Date.now(),
        };
        todoItems.push(todo);
        console.log(todoItems);
    }

    const form = document.querySelector("#button");
    form.addEventListener('submit', event =>{
        event.preventDefault();
        const input = form.querySelector("#form__input");

        const text = input.value.trim();
        if(text !== ''){
            addTodo(text);
            input.value='';
            input.focus();
        }

    });

   






    



    


