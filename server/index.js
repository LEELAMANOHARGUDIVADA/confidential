import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";
import Result from "./models/ResultSchema.js";
import Subject from "./models/SubjectSchema.js";
dotenv.config();


const app = express();

app.use(express.json());
app.use(cors({
    origin: "https://jntugv-results.vercel.app",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}));

app.get('/', (req,res) => {
    res.send("App is working correctly");
});

app.post('/api/result', async(req,res) => {
    const { studentName, hallticketNumber, semester } = req.body;
    const result = new Result({
        studentName,
        hallticketNumber,
        semester
    });
    await result.save();
    return res.status(200).json({ message: "Result Created Successfully", result });
});

app.post('/api/result/subjects/:id', async(req,res) => {
    const { serialNumber, courseCode, courseName, credits, grade, status } = req.body;

    const student = await Result.findById(req.params.id);

    const subject = new Subject({
        serialNumber,
        courseCode,
        courseName,
        credits,
        grade,
        status
    });
    student.subjects.push(subject);
    await subject.save();
    await student.save();

    return res.status(200).json({ message: "Subject added successfully", subject })
});

app.get('/api/student/:id', async(req,res) => {
    try {
    const resultDetails = await Result.findById( req.params.id ).populate("subjects");
    if (!resultDetails) {
        return res.status(404).json({ message: 'Results not found' });
    }
    return res.status(200).json({message: "Fetched Successfully", resultDetails})
    } catch (error) {
        return res.status(500).json({message: "Error while fetching", error})
    }
});

app.get('/api/user/:hallticketNumber', async (req, res) => {
    try {
        const hallticketNumber = req.params.hallticketNumber;
        const result = await Result.findOne({ hallticketNumber });

        if (!result) {
            return res.status(404).json({ message: 'Result not found' });
        }

        res.json({ id: result._id });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected Successfully");
        
    } catch (error) {
        console.log(error);
    }
}

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server Running On PORT", PORT);
    connectDB();
});
