import mongoose from "mongoose";




const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string, {
            dbName: process.env.MONGODB_DBNAME
        });
        // console.log('MongoDB connected');
        // console.log(`MongoDB connected to ${process.env.MONGODB_DBNAME}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};



export default connectDB;