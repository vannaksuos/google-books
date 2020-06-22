const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const bookModel = require("./models/book");
const axios = require("axios");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

// Define API routes here, ()
app.get("/api/books", (req, res) => {
    bookModel.find().then(savedBooks => {
        res.json(savedBooks)
    })
});

app.post("/api/books", ({ body }, res) => {
    // const book = body;
    // console.log(book)
    console.log(bookModel)
    const book = {
        title:body.bookInfo.volumeInfo.title,
        authors:body.bookInfo.volumeInfo.authors,
        description:body.bookInfo.volumeInfo.description,
        image:body.bookInfo.volumeInfo.imageLinks && body.bookInfo.volumeInfo.imageLinks[0],
        links:body.bookInfo.volumeInfo.previewLInk
    }
    bookModel.create(book, (error, savedBooks) => {
    if (error) {
        console.log(error);
    } else {
        res.send(savedBooks);
    }
    });
});

app.delete("/api/books/:id",  (req, res) => {
    bookModel.remove({_id:req.params.id}, (error, response) => {
        if (error) {
            res.send(error);
        } else {
            res.send(response);
        }
        });
    });
    
app.get("/api/google", (req, res) => {
    console.log(req.query)
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.query.q).then((response) => {
    // console.log(response.data) 
    res.json(response.data)
    })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
