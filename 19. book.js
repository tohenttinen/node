const book = {

    bookArray: [
        {
            id_book: 1,
            name: "kirja 1",
            author: "nakki rakki",
            isbn: "1231231231234"
        },
        {
            id_book: 2,
            name: "kirja 2",
            author: "tippi tappi",
            isbn: "1111111111111"
        },
        {
            id_book: 3,
            name: "kirja3",
            author: "rölli",
            isbn: "2222222222222"
        }
    ],

    getAllBooks() {
        console.log(this.bookArray);
    },

    getOneBook(x) {
        console.log(this.bookArray[x]);
    },

    addBook(id_book, name, author, isbn) {
        this.bookArray.push({
            id_book: id_book,
            name: name,
            author: author,
            isbn: isbn
        });
    }
};


console.log("kaikki kirjat: ");
book.getAllBooks();

console.log("yks kirja (indeksi 1):");
book.getOneBook(1);

console.log("lisätään uusi kirja");
book.addBook(4, "hupi hapi", "hatti watti", "4444444444444");

console.log("kaikki kirjat lisäyksen jälkeen: ");
book.getAllBooks();
