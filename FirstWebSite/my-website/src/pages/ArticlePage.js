import React from "react";
import articleContent from './article-content';
import ArticlesList from '../components/ArticleList'

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
    if (!article) return <h1>Article doesn't exist.</h1>

    const otherArticles = articleContent.filter(article => article.name !== name);
    return (
    
        <>
            <h1>{article.title}</h1>
            <p>
                I hope to learn new things from, the linkedin tutorial.
            </p>
                {article.content.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))}
                <h3>Other Articles related to this</h3>
                <ArticlesList articles={otherArticles} />
        </>
    
    );
} 


export default ArticlePage;