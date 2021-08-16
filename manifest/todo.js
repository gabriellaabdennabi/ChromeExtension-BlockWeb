$(function(){
    const tasks = [
        {name:"One", done: false},
        {name:"Two", done: false},
        {name:"Three", done: false},
        {name:"Four", done: false},
        {name:"Five", done: false},
        {name:"Six", done: false},
        {name:"Seven", done: false},
        {name:"Eight", done: false},
        {name:"Nine", done: false},
        {name:"Ten", done: false}
    ]
    let str = "";
    for(const task of tasks){
        str = `${str}<l1>${task.name}</li>`

    }
    $("#tasks").append(str)

    $("#todo").on("click", function() {
        $("#container_todo").fadeToggle();

    })

})