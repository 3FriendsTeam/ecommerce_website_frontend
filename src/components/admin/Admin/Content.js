// src/components/Content.js
import React from 'react';
import '../Admin/Admin.css';
import { Link } from 'react-router-dom';

function Content() {
    return (
        <main className="content p-4 flex-grow-1">
            <Link to="/" className="btn btn-secondary ms-3">
                Home
            </Link>
        </main>
    );
}

export default Content;
