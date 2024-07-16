import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema(
    {
        serialNumber: {
            type: Number,
            required: true
        },
        courseCode: {
            type: String,
            required: true

        },
        courseName: {
            type: String,
            required: true
        },
        credits: {
            type: String,
            required: true
        },
        grade: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    }
);

const Subject = new mongoose.model("Subject", SubjectSchema);

export default Subject;