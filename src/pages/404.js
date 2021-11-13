/**
 * This component does not work as intended
 * Needs further development
 */

import React from "react";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import HomePage from './home'

const Page404 = () => {
    return (
        <>
        <Routes>
            

            <h1>404 - Something broke</h1>
            <Route path="/" element={<HomePage />}>Home</Route>


            

        </Routes>
            
            

            
        
        </>
    );
}

export default Page404;