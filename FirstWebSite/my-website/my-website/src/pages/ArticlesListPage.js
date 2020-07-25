import React from "react";
import articleContent from './article-content';
import ArticlesList from '../components/ArticleList';

const ArticlesListPage = () => (
    <>
        <p>
            I hope to learn new things from, the linkedin tutorial.
            Below is a list of all the articles in our site.
        </p>
        <h2>Articles</h2>
        <ArticlesList articles={articleContent} />
    </>

);

export default ArticlesListPage;