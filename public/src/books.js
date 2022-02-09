function findAuthorById(authors, id) {
  let find = authors.find((author) => author.id === id);
  return find;
 }

 function findBookById(books, id) {
  let findBook = books.find((book) => book.id === id);
  return findBook;
 }
 
 function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) =>
   book.borrows.every((borrow) => borrow.returned === true)
  );

   let booksBorrowed = books.filter((book) =>
   book.borrows.some((borrow) => borrow.returned === false)
  );

  let resultArray = [[...booksBorrowed], [...booksReturned]];
  return resultArray;
 }

 function getBorrowersForBook(book, accounts) {   
   const { borrows } = book;   let filteredAccounts = [];    
   borrows.forEach(borrower => {    
      accounts.forEach(account => 
        borrower.id === account.id ? filteredAccounts
        .push({...account, returned: borrower.returned}) : null);   }); 
           return filteredAccounts.slice(0, 10); }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

