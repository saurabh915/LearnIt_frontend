import mongoose from "mongoose";

// Define a schema for the student data
const StudentDomainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    class: {
        type: String,
        required: true,
    },
    Marks: {
        hindi: {
            type: Number,
            required: true,
        },
        english: {
            type: Number,
            required: true,
        },
        maths: {
            type: Number,
            required: true,
        },
        science: {
            type: Number,
            required: true,
        },
        social: {
            type: Number,
            required: true,
        },
    },
    AverageMarks: {
        type: Number,
        required: true,
    },
});

// model for the student data
const StudentDomain = mongoose.model("studentdomains", StudentDomainSchema);

export default StudentDomain;

