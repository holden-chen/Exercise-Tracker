import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreatePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch("/exercises", {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 201) {
            alert("Exercise added");
        } else {
            alert("Failed to add exercise. Please try again.");
        }
        history.push("/");
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Enter name here"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                        </td>
                        <td>
                            <input
                                type="number"
                                value={reps}
                                placeholder="Enter reps here"
                                onChange={e => setReps(e.target.value)} />
                        </td>
                        <td>
                            <input
                                type="number"
                                placeholder="Enter weight here"
                                value={weight}
                                onChange={e => setWeight(e.target.value)} />
                        </td>
                        <td>
                            <input list="unitOptions" value={unit} onChange={e => setUnit(e.target.value)} />
                                <datalist id="unitOptions">
                                    <option value="lb.">lb.</option>
                                    <option value="kg.">kg.</option>
                                </datalist>
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="Enter date here"
                                value={date}
                                onChange={e => setDate(e.target.value)} />
                        </td>
                    </tr>
                </tbody>
                </table>
            <button
                onClick={addExercise}
            >Add</button>
        </>
    );
}

export default CreatePage;
