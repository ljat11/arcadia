const fs = require("fs");

// STEP 1: Reading JSON file 
const users = require("./airlines.json");

const data = users.map((users) => ({ id: users.id, name: users.name, icao: users.icao }))

fs.writeFile(
    "airlinesClearTest.json",
    JSON.stringify(data, null, 2),
    err => {
        // Checking for errors 
        if (err) throw err;

        // Success 
        console.log("Done writing");
    });

