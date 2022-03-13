import express from 'express';

const app = express();
const PORT = 3000;

// include express.json middlware
app.use(express.json());
// -----------------------------------

// CRUD OPERATIONS:

// -----------------------------------
// CREATE
app.post('/movies', (req, res) => {
    movies.createMovie(req.body.title, req.body.year, req.body.language)
        .then(movie => {
            res.status(201).json(movie);
        })
        .catch(error => {
            console.error(error);
            // In case of an error, send back status code 400 in case of an error.
            // A better approach will be to examine the error and send an
            // error status code corresponding to the error.
            res.status(400).json({ Error: 'Request failed' });
        });
});


// -----------------------------------
// READ


// -----------------------------------
// UPDATE


// -----------------------------------
// DELETE




// -----------------------------------
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
