import React from 'react';

// import components
import TableHead from '../components/TableHead.js';
import Row from './Row.js';

function Table({ exercises, onDelete, onEdit }) {
    return (
        <table id="exercises">
            <TableHead />
            <tbody>
                {exercises.map((exercise, i) => <Row exercise={exercise}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default Table;
