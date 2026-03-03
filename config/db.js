import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.set('bufferCommands', false);
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`, {
                serverSelectionTimeoutMS: 5000,
            });
            console.log("Database Connected");
        }
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB