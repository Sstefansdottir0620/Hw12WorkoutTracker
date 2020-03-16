const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day:
      { 
        type: Date,
        default: Date.now
      },

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


const workout = mongoose.model("workout", WorkoutSchema);

module.exports = workout;