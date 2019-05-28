const fs = require("fs");

let todoList = [];

const saveDb = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile("db/data.json", data, err => {
        if (err) throw new Error("No se pudo grabar", err);
    });
};

const loadDb = () => {
    try {
        todoList = require("../db/data.json");
    } catch (error) {
        todoList = [];
    }
};

const add = description => {
    loadDb();
    let task = {
        description,
        completed: false
    };
    todoList.push(task);
    saveDb();
    return task;
};

const list = () => {
    loadDb();
    return todoList;
};

const update = (description, completed = true) => {
    loadDb();
    let index = todoList.findIndex(task => task.description === description);
    if (index >= 0) {
        todoList[index].completed = completed;
        saveDb();
        return true;
    }
    return false;
};

const delet3 = description => {
    loadDb();
    let newList = todoList.filter(task => task.description !== description);
    if (newList.length === todoList.length) {
        return false;
    } else {
        todoList = newList;
        saveDb();
        return true;
    }
};

module.exports = { add, list, update, delet3 };