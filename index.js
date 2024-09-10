#!/usr/bin/env node

// Getting arguments from command line
const args = process.argv.slice(2);

// requires
const fs = require("fs");

const add = (description) => {
    let obj = { table : [] };

    if (fs.existsSync("data.json")) {
        const data = fs.readFileSync("data.json");
        obj = JSON.parse(data);
    } 

    obj.table.push({
        id: obj.table.length + 1,
        description: description,
        status: "todo",
        createdAt: new Date,
        updatedAt: null
    })

    let json = JSON.stringify(obj, null, 2);
    fs.writeFileSync('data.json', json);

    console.log("Task added and saved to data.json file");
}

const deleteItem = (id) => {
    let obj = { table: [] };

    if(fs.existsSync('data.json')) {
        let data = fs.readFileSync('data.json');
        obj = JSON.parse(data); 
    } 

    let findIdIndex = obj.table.findIndex((item) => item.id === id);

    if(findIdIndex === -1) {
        console.log('Task not found');
    } else {        
        obj.table.splice(findIdIndex, 1);
        console.log(`Task ${id} deleted!`);
    }

    let json = JSON.stringify(obj, null, 2); 
    fs.writeFileSync('data.json', json);
};

switch (args[0]) {
    case "add":
        add();
        break;
    case "update":
        console.log("Removing task");
        break;
    case "delete":
        const idToDelete = parseInt(args[1], 10);
        deleteItem(idToDelete);
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


