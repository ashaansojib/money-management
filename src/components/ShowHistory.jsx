import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowHistory = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <section>
            show history here
        </section>
    );
};

export default ShowHistory;