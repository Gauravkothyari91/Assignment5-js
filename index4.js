const listOfBooks = [
    {
        title:'wings of fire',
        author:'APJ abdul kalam',
        year:2000,
    },
    {
        title: "A Suitable Boy",
        author: "Vikram Seth",
        year: 1993,
    },
    {
        title: "Midnight's Children",
        author: "Salman Rushdie",
        year: 1981,
    },
    {
        title: "The White Tiger",
        author: "Aravind Adiga",
        year: 2018,
    },
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        year: 2011,
    },
];

const filterOut = listOfBooks.filter((listOfBook) => {
    return listOfBook.year > 2010;
})

const result = filterOut.map((listOfBook) => {
    return{
        ...listOfBook,
        author: listOfBook.author.toUpperCase(),
    }
});

console.log(result);