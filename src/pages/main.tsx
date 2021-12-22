import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1>Main</h1>
            <Outlet/>
            <button>
                <Link to='/'>Back</Link>
            </button>
        </div>
    )
}

export default Main;