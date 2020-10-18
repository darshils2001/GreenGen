const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const url = 'mongodb+srv://karanvsingh:hello123@cluster0.efpso.gcp.mongodb.net/DubHacks2020?retryWrites=true&w=majority';

const uri = process.env.ATLAS_URI || url;
//mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});


//const connection = mongoose.connection;



let mClient;

MongoClient.connect(url, function(err, client) {
    mClient = client;
    console.log("MongoDB database connection established successfully");
    })


app.get("/", (req, res) => {
    let search = req.query.search;
    const db = mClient.db("DubHacks2020")
    // console.log(db.collection('products'))
    let query = { name: { $regex: search, $options: "i"} }
    db.collection("products").find(query).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        res.send({ products: result })
      });
    //.find({name: {$regex : /Carpet/i}}).toArray();

    
});

app.listen(port, () => {
    console.log('Server is running on port: 8080');
});