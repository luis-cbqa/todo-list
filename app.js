const colors = require("colors");
const argv = require("./config/yargs").argv;
const todo = require("./todo/todo");

let command = argv._[0]

switch (command) {
    case "add":
        let task = todo.add(argv.description)
        console.log(task);
        break;
    case "list":
        let todoList = todo.list();
        for (let task of todoList) {
            console.log("***********ToDo***********".green);
            console.log(task.description); //colors.green()
            console.log(`Status: ${task.completed}`);
            console.log("**************************".green);
        }
        //console.table(todoList)
        break;
    case "update":
        let updated = todo.update(argv.description, argv.completed);
        console.log(updated);
        break;
    case "delete":
        let deleted = todo.delet3(argv.description);
        console.log(deleted);
        break;
    default:
        console.log("Unrecognized command");
        break;
}