const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String
  },
  workout: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workout"
    }
  ]
});

const Library = mongoose.model("workout", WorkoutSchema);

module.exports = workout;


type, name, weight, sets, reps, and duration