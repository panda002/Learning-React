import React, { useState, useEffect } from "react";
import articleContent from './article-content';
import ArticlesList from '../components/ArticleList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection'
import AddCommentForm from '../components/AddCommentForm'
// import {
//     BrowserRouter as Router,
//       Route,
//   } from 'react-router-dom'

import ErrorPage from "./ErrorPage";

const ArticlePage = ({ match }) => {

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`)
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if (!article)
        return <ErrorPage />

    const otherArticles = articleContent.filter(article => article.name !== name);
    return (

        <>
            <h1>{article.title}</h1>
            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
            <p>
                I hope to learn new things from, the linkedin tutorial.
            </p>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <CommentsList comments={articleInfo.comments} />
            <h3>Other Articles related to this</h3>
            <ArticlesList articles={otherArticles} />
        </>

    );
}


export default ArticlePage;