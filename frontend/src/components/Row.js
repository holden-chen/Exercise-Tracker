import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

function Row({ exercise, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><MdDeleteForever onClick={() => onDelete(exercise._id)}/></td>
            <td>Edit</td>
        </tr>
    );
}

export default Row;
