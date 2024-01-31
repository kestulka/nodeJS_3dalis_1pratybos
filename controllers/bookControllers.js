const Book = require("../models/Book.js")

// @ route POST "/api/books"

const createBook = async (req, res) => {
    if (!req.body.bookAuthor || !req.body.title || !req.body.year || !req.body.pages || !req.body.genre){
        res.status(404).send("Fill in all fields")
    }

    const existingBook = await Book.findOne({title: req.body.title});
    if(existingBook){
        return res.status(409).send("book already exists in database")
    }

    const book = await Book.create({
        bookAuthor: req.body.bookAuthor,
        title: req.body.title,
        year: req.body.year,
        pages: req.body.pages,
        genre: req.body.genre,
    })

    res.status(200).json(book);
}

// @ route GET "/api/books"

const getBooks = async(req, res) => {
    const booksFromDB = await Book.find();
    console.log(booksFromDB)
    if(!booksFromDB){
        res.status(404).send("books not found");
        return;
    }
    res.status(200).json(booksFromDB)
}

const getInfoAboutBook = async(req, res) => {
    const booksFromDB = await Book.find().populate(
        "bookAuthor",
        "firstname lastname about id date"
    );

    if(!booksFromDB){
        res.status(404).send("books not found");
        return;
    }
    res.status(200).json(booksFromDB)
}


module.exports = {
    createBook,
    getBooks,
    getInfoAboutBook
};
