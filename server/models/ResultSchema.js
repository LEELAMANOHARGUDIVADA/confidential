import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: true
        },
        hallticketNumber: {
            type: String,
            required: true
        },
        semester: {
            type: String,
            required: true
        },
        subjects: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Subject"
            },
        ],

    },
    {
        timestamps: true
    }
);

const Result = new mongoose.model("Result", ResultSchema);

export default Result;