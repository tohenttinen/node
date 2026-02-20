// 1
const bookArray = [
    { id_book: 1, name: "Harry Potter", author: "J.K. Rowling", isbn: "1111111111111" },
    { id_book: 2, name: "The Hobbit", author: "J.R.R. Tolkien", isbn: "2222222222222" },
    { id_book: 3, name: "1984", author: "George Orwell", isbn: "3333333333333" }
];

// 2
console.log("tyyppi:", typeof bookArray); 

// 3
console.log("koko bookArray:", bookArray);

// 4
console.log("eka rivi:", bookArray[0]);

// 5
console.log("ekan kirjan nimi:", bookArray[0].name);

// 6
console.log("rivien määrä:", bookArray.length);

// 7
console.log("kaikkien kirjojen nimet:");
bookArray.forEach(book => console.log(book.name));