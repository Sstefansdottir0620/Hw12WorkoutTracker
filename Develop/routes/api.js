const db = require("../models");
const mongojs = require("mongojs");


module.exports = function(app) {

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(data => {
        res.json(data);
      }) 
      .catch(err => {
        res.json(err);
      });
  });
  
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then(data => {
      res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });  

 

  app.get("/api/workouts/range", (req, res) => {
    
    db.Workout.find({})
      .limit(7)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  
  
  
  app.put("/api/workouts/:id", (req, res) => {
    // 
    db.Workout.update({_id: mongojs.ObjectId(req.params.id)}, { $push: { exercises: req.body }})

    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });

    

  });

  

};
  


// app.post("/submit", ({ body }, res) => {
//   db.Note.create(body)
//     .then(({ _id }) => db.workout.findOneAndUpdate({params.id}, { $push: { notes: _id } }, { new: true }))
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });