const description = {
    demand: true,
    alias: "d",
    desc: "ToDo task description"
};
const completed = {
    alias: "c",
    default: true,
    desc: "Mark the task as pending or completed"
};

const argv = require("yargs")
    .command("add", "Add a ToDo task", { description })
    .command("update", "Update a ToDo task", { description, completed })
    .command("list", "List all ToDo tasks")
    .command("delete", "Delete a ToDo task", { description })
    .help().argv;

module.exports = { argv };