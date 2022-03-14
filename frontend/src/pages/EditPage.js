import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

// import components
import TableHead from '../components/TableHead.js';

export const EditPage = () => {

    return (
        <>
            <h2>Edit Page</h2>
            <p>Edit your exercises here</p>
            <table id="editTable">
                <TableHead></TableHead>
                <tbody>
                </tbody>
            </table>
        </>
    );
}

export default TableHead;
