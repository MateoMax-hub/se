import mongoose from "mongoose";

const Requests = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    name: {
        type: String,
        require: true,
    },
    count: {
        type: Number,
        default: 0
    }
})

const model = mongoose.model('requests', Requests)
export default model;
