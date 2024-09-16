let bookTable;
let books;
let randomBook;
let bookCount = 0;
let bookTitle = "null";
let bookAuthor = "null";
let bookIsbn = "null";

function preload(){
  bookTable = loadTable("nyrbBooks.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(books);
  //randomBook = books[3,1];
  books = [];
  let tableRows = bookTable.getRows();
  for (let row of tableRows) {
    bookCount++;
    // Get position, diameter, name,
    bookTitle = row.getString('Book');
    bookAuthor = row.getString('Author');
    bookIsbn = row.getString('ISBN');

    // Put object in array
    books.push(new Book(bookTitle, bookAuthor, bookIsbn));

  }
  print(books);
  randomBook = random(books);
  console.log("The random book is /n" + randomBook.title + " by "+ randomBook.author+"./n This ISBN for this book is "+randomBook.isbn+".");

}

function draw() {
  background(255,0,0);
  textFont('Courier New');
  textSize(40);
  fill(255,255,255)
  noStroke();
  textAlign(CENTER, CENTER);
  text("The random book is \n\"" + randomBook.title + "\"\n by "+ randomBook.author+".\n This ISBN for this book is \n"+randomBook.isbn+".",width/2,height/2);
}

function mouseClicked(){
  randomBook = random(books);
}

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
  getTitle(){
    return this.title;
  }
  getAuthor(){
    return this.author;
  }
  getIsbn(){
    return this.title;
  }
}
