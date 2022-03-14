import mongoose from 'mongoose';

mongoose.connect(
    "mongodb+srv://hchen:lull1ZE7ERoEPYDr@cs290.jdn0v.mongodb.net/exercises?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to to the database
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

// ----------------------------------------------------------

// Define the schema
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }  // MM-DD-YY format
});

const exercise = mongoose.model("Exercise", exerciseSchema);

// ----------------------------------------------------------
// IMPLEMENT CRUD OPERATIONS IN THE MODEL

// CREATE

// READ

// UPDATE

// DELETE

export { exercise, exerciseSchema };
