const book = {
    title: "Harry Potter",
    author: "J.K Rowlins",
    year: 1990,
    pages: 1239,
    available: false
}

// Print with smart sentence
console.log(`The ${book.title} novel written by ${book.author} is a masterpiece that was released in the year \n${book.year} with over ${book.pages} pages, and is ${book.available? "available and still on sale as of now": "no more available for the time being"}`);
