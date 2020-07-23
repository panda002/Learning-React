import React from "react";
import articleContent from './article-content';
import { Link } from 'react-router-dom'

const ArticlesList = () => (
    <>
        <h1>Hello, Welcome to my first react ArticlesList page</h1>
        <p>
            I hope to learn new things from, the linkedin tutorial.
            Below is a list of all the articles in our site.
        </p>
        <h2>Articles</h2>
        {articleContent.map((article, key) => (
            <Link className = "article-list-item" key = {key} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
    </>

);

export default ArticlesList;