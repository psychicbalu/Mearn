const mongoose = require('mongoose');
const connectionstring = process.env.database;
mongoose.connect(connectionstring).then(() => {
console.log("mongodb atlas successfully connected with pfserver");
}).catch((err) => {
    console.log("Error in connecting with mongodb atlas", err);
});