import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//Adding the routes
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

//general setup
//setting the body-parser
//setting the size of the images
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); 

//setting cors
app.use(cors());

app.get('/', (req,res) => {
    res.send('Hello to memories API');
});

//Connecting to the routes
app.use('/posts', postRoutes);


//connecting to real database
// https://www.mongodb.com/cloud/atlas

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then (() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', 'false');  