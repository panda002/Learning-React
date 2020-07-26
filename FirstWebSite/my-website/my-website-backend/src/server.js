import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';


const app = express();
app.use(bodyParser.json());

const withDB = async ( operations, res ) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('my-website');

        await operations(db);

        client.close();
    } catch (error) {
        res.status(500).json({ message : 'Error connecting DB'});
    }
}

// app.get('/hello', (req, res) => res.send('hello there'));
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));

// app.post('/hello', (req, res) => res.send(`hello ${req.body.name}!`))

app.get('/api/articles/:name', async (req, res) => {
        withDB(async (db) => {
            const articleName = req.params.name;

            const articlesInfo = await db.collection('articles').findOne({ name: articleName });
    
            res.status(200).json(articlesInfo);
        }, res);
});

app.post('/api/articles/:name/upvote', async (req, res) => {

    withDB(async (db) => {
        const articleName = req.params.name;

        const articlesInfo = await db.collection('articles').findOne({ name: articleName });

        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                upvotes: articlesInfo.upvotes + 1
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    }, res);
});

app.post('/api/articles/:name/add-comment', async (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDB(async (db) => {
        const articlesInfo = await db.collection('articles').findOne({name: articleName});
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set':{
                comments: articlesInfo.comments.concat({ username, text })
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        
        res.status(200).json(updatedArticleInfo);
    }, res);
});

app.listen(8001, () => console.log("listening on port 8001"));
