import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log("DB CONNECTED")
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error while connecting to DB:", error.message);
        } else {
            console.log("Unknown error while connecting to DB:", error);
        }
    }
}