import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://OmWaghmare:Code%400818@cluster0.kfqbwfr.mongodb.net/?appName=Cluster0').then(() =>{
        console.log('DB Connected');
    })
}