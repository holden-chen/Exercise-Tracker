import mongoose from 'mongoose';

// Prepare to the database movies_db in the MongoDB server running locally on port 
27017
mongoose.connect(
    "mongodb+srv://hchen:lull1ZE7ERoEPYDr@cs290.jdn0v.mongodb.net/exercises?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
);


// Connect to to the database
const db = mongoose.connection;

// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});


/**
 * Define the schema
 */
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }  // MM-DD-YY format
});


/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const exercise = mongoose.model("Exercise", exerciseSchema);