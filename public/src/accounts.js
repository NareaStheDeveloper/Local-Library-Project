function findAccountById(accounts, id) {
  let findId = accounts.find((account) => account.id === id);
  return findId;
 }

 function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
   accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
 }

function getTotalNumberOfBorrows(account, books) {
 let totalAcc = 0;
 for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].borrows.length; j++) {
   if (account.id === books[i].borrows[j].id) {
    totalAcc += 1;
   }
  }
 }
 return totalAcc;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  let bookMatch = [];
  books.forEach((item) => {
   const borrowed = item.borrows;
   const book = {
    id: item.id,
    title: item.title,
    genre: item.genre,
    authorId: item.authorId,
    author: {},
    borrows: {}
   };
   const { id, title, genre, authorId, author, borrows } = book;
 
   borrowed.forEach((borrow) => {
    if (borrow.id === account.id && borrow.returned === false) {
     result.push(book);
     bookMatch.push(borrow);
     book.borrows = bookMatch;
     book.author = authors.filter((auth) => auth.id === book.authorId)[0];
    }
   });
  });
  return result;
 }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
