var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 8000;

var app = express();

app.use(logger("dev"));

const databaseUrl = "Workout";
const collections = ["exersizes"];

const mongo = mongojs(databaseUrl, collections);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Import routes and give the server access to them.
require(".routes/api")(app);
require(".routes/view")(app);

mongoose.connect("mongodb://localhost/workout",{
    useNewUrlParser:true,
    useFindAndModify:false

})

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
