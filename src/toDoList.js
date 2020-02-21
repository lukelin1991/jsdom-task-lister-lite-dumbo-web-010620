class ToDoList{

    constructor(){ 
        this.tasks = [];
    }
    
    createNewTask(input){
        const newTask = new Task(input);
        this.tasks.push(newTask);
    }

    renderTasks(){
        return this.tasks.map((task) => task.render()).join("")
    }

    deleteTask(input){
        this.tasks = this.tasks.filter((task) => task.input !== input)
    }

}

// this is like create a class initialization/instances etc. etc.