import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// import components
import Table from '../components/Table.js';

// once CreatePage has been used, then the HomePage() 
// function returns the table component that includes
// icon links to Edit and Delete

function HomePage() {
  
  const [exercises, setExercises] = useState([]);

  // onDelete
  const onDelete = async _id => {
    const response = await fetch(`/exercises/${_id}`, { method: 'DELETE'});
    if (response.status === 204) {
      setExercises(exercises.filter(m => m._id !== _id));
    } else {
      console.error(`Failed to delete exercise with id = ${_id}`)
    }
  }

  // onEditExercise

  // loadExercises
  const loadExercises = async () => {
    const response = await fetch("/exercises");
    const data = await response.json();
    setExercises(data);
  }

  useEffect(() => {
    loadExercises();
  }, []);  

  return (
    <>
      <h2>Exercises</h2>
      <Table exercises={exercises} onDelete={onDelete} />
    </>
  );
}

export default HomePage;