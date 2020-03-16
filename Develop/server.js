const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));


// const databaseUrl = "Workout";
// const collections = ["exercises"];

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Import routes and give the server access to them.
require("./routes/api")(app);
require("./routes/view")(app);

//Create connection to mongoDB
mongoose.connect("mongodb://localhost/workout",{
    useNewUrlParser:true,
    useFindAndModify:false

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
console.log(`App running on port ${PORT}!`);
});
