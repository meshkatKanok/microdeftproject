import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import Searching from '../Searching.js/Searching';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
           
            
        </div>
    );
};

export default Home;