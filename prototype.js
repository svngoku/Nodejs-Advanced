/* PROTOTYPE  */

const bookProtos = {
  getSummary : () => {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge : () => {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} in ${years} old`;
  }
};

// Create object

const book1 = Object.create(bookProtos);
  book1.title = "Book One";
  book1.author = 'Jonh Doe';
  book1.year = 2013;

// Other way

let book2 = Object.create(bookProtos, {
  'title': { 
    value: 'Book Two',
    //writable: true,
    enumerable: true
  },
  'author': { 
    value: 'Jason',
    enumerable : true
  },
  'year': { 
    value: '2019',
    enumerable : true
  }
}); 

console.log(book1);
console.log(book2);
