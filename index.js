#!/usr/bin/env node

// Getting arguments from command line
const args = process.argv.slice(2);

// requires
const fs = require("fs");
const obj = { tables : [] };

const add = (description) => {

    if (fs.existsSync("data.json")) {
        const data = fs.readFileSync("data.json");
        const tasks = JSON.parse(data);
        obj.tables.push(tasks);
    } 

    obj.tables.push({
        id: obj.tables.length + 1,
        description: description,
        status: "todo",
        createdAt: new Date,
        updatedAt: null
    })

    let json = JSON.stringify(obj, null, 2);
    fs.writeFileSync('data.json', json);

    console.log("Task added and saved to data.json file");
}

switch (args[0]) {
    case "add":
        add();
        break;
    case "update":
        console.log("Removing task");
        break;
    case "delete":
        console.log("Deleting task");
        break;
    case "list":
        const listOption = args[1];

        switch (listOption) {
            case "done":
                console.log("Listing done tasks");
                break;
            case "in-progress":
                console.log("Listing in progress tasks");
                break;
            case "todo":
                console.log("Listing todo tasks");
                break;
            default:
                console.log("Listing all tasks");
        }
        break;
    case "mark-in-progress":
        console.log("Marking task in progress");
        break;
    case "mark-done":
        console.log("Marking task done");
        break;
    default:
        console.log("Invalid command");
}


