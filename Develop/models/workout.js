const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day:
      { 
        type: Date,
        default: Date.now
      },
  
  // totalDuration:
  //     {
  //     type: Number,
  //     trim: true,
  //     },

  exercises:
  [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      distance: {
        type: Number,
        trim: true,
      },

      duration: {
        type: Number,
        trim: true,
      },

      weights: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      }
      

    }
              
    
  ]
});

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exerice) => {
      return total + exerice.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

