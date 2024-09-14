import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <main className='max-w-screen-lg mx-auto p-2'>
            <Outlet />
        </main>
    );
};

export default Main;