require('dotenv').config({path: "././.env"});
const mongoose=require('mongoose');
const uri=process.env.URI;
const clientOptions = {
    serverApi: { version: '1', strict: true, deprecationErrors: true }
};

async function connectDB() {
    try {
        await mongoose.connect(uri, clientOptions);
        console.log("Connected to MongoDB!");
        console.log("Using database:", mongoose.connection.name);
    } catch (error) {
        console.log("Could not connect to MongoDB", error);
        process.exit(1);
    }
}

module.exports = connectDB;