import mongoose from "mongoose"

export const connectDB = async ()=> {
    await mongoose.connect('mongodb://localhost:27017/Food-Del').then(()=> console.log("DB Connected"));
}



// Given below is the MongoDB Atlas coonection string...
//mongodb+srv://Devansh_Deep:Devanshdeep%235@cluster0.4r1dt.mongodb.net/Food-Del