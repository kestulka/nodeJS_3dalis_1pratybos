const connectingToDB = require("./config/db.js");
const express = require("express")
require("dotenv").config();

connectingToDB();

const app = express()

app.use(express.json())

const {
    createAuthor, getAuthorWithBooks
} = require("./controllers/authorControllers.js")

app.post("/api/authors", createAuthor)
app.get("/api/authors/info", getAuthorWithBooks)


const {
    createBook,
    getBooks,
    getInfoAboutBook,
} = require("./controllers/bookControllers.js")


app.post("/api/books", createBook)
app.get("/api/books", getBooks)
app.get("/api/books/info", getInfoAboutBook)


app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})