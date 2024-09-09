#!/usr/bin/env node

// Getting arguments from command line
const args = process.argv.slice(2);

// Do something with the arguments

switch (args[0]) {
    case "add":
        console.log("Adding task");
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