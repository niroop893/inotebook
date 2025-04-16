const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://admin:Aaddbb%401234@cluster0.psz6mz0.mongodb.net/iNotebook?retryWrites=true&w=majority";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected to mongodb");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
 
    }
}

module.exports = { connectToMongo };
