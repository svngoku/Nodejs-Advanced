class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title , author, year);
    this.month = month;
  }
}

// Instanciate Mag
const Mag1 = new Magazine('"NodeJs for beginner"', 'Armel', 2017, "December");
console.log(Mag1.getSummary());


