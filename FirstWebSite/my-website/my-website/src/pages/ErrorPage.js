import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => (

    <>
    <h1>Oops!! Page for found</h1>
    <p>The page/article you are trying to find is not present or 
        has been moved to a different location</p>
    <p>Go to <Link to="/articles-list">Articles list page </Link> instead.</p>
    </>
);

export default ErrorPage;