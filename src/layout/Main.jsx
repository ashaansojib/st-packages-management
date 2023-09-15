import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../shared/Nav';

const Main = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
};

export default Main;