const mongoose = require('mongoose');
const { all } = require('../routes_view');
const Schema = mongoose=Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    excercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout; 