// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // Create a path to index.html
   
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/workout", function (req, res) {
    // send to workout

    res.sendFile(path.join(__dirname, "../public/workout.html"));
  });

  app.get("/exercise", function (req, res) {
    // send to exercise

    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // send to stats
  app.get("/stats", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

};