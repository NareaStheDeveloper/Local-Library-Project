function getTotalBooksCount(books) {
return books.length;
}

function getTotalAccountsCount(accounts) {
return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksBorrowed = books.filter(
   (book) =>
    book.borrows.filter((record) => record.returned === false).length > 0
  );
  return booksBorrowed.length;
 };



function _reduceByProp(arr,key) {
let newArr =  arr.reduce((acc,prop)=> {
  let keyExist = acc.find((item)=>item.name===prop[key]);
  if(keyExist){
    keyExist.count+=1
  }else{
    let obj = {name:prop[key], count:1}
    acc.push(obj);
  }
  return acc;
},[]);
return newArr;
};

function getMostCommonGenres(books) {
  let countArr = _reduceByProp(books, "genre");
  countArr.sort((keyA,keyB)=> keyB.count-keyA.count);
  return countArr.slice(0,5);
  } ;
  

function getMostPopularBooks(books) {
  return books
      .sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length)
      .slice(0, 5)
      .map((book) => ({ name: book.title, count: book.borrows.length }));
}


function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let anAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
    books.forEach((book) => {
    if (book.authorId === author.id) {
     anAuthor.count += book.borrows.length;
    }
   });

   result.push(anAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
 }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
