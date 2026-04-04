import mongoose from "mongoose"

export const connectDB = async ()=> {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Food-Del'
    await mongoose.connect(mongoUri).then(()=> console.log("DB Connected"));
}