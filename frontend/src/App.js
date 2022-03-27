
// import styles
import './App.css';

// import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// import pages
import HomePage from './pages/HomePage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';

// import components
import Navigation from './components/Navigation.js'


function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Excercise Tracker</h1>
          <p>A tool to track exercises</p>
        </header>
        <Navigation />
        <main>
          <Route path="/" exact><HomePage  setExerciseToEdit={setExerciseToEdit} /></Route>
          <Route path="/add-exercise"><CreatePage  /></Route>
          <Route path="/edit-exercise"><EditPage exerciseToEdit={exerciseToEdit}  /></Route>
        </main>
        <footer>
          <p>&copy; 2022 Holden Chen.</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
