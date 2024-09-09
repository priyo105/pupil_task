
const mongoose = require('mongoose')

const pupilSchema = mongoose.Schema({
    foreName: {
        type: String,
        required: true,
    },

    surName: {
        type: String,
        required: true,

    },

    form: {
        type: String,
        required: true,

    },

    send: {
        type: Boolean
    },
    pic: {
        type: String
    },

    creationDate: {
        type: Date,
        default: Date.now
    }

})


exports.Pupil = mongoose.model('pupil', pupilSchema);
