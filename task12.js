//Задача на работу с объектами: создайте объект, представляющий собой книгу. 
//Объект должен иметь свойства, такие как: название книги, автор и год издания. 
//Напишите методы для получения и изменения значений свойств книги.


const book = {
    title: "The Little Prince",
    author: "Antoine Saint-Exupery",
    year: 1943,
  
    // Метод для получения названия книги
    getTitle: function() {
      return this.title;
    },
  
    // Метод для получения автора книги
    getAuthor: function() {
      return this.author;
    },
  
    // Метод для получения года издания
    getYear: function() {
      return this.year;
    },
  
    // Метод для изменения названия книги
    setTitle: function(newTitle) {
      this.title = newTitle;
    },
  
    // Метод для изменения автора книги
    setAuthor: function(newAuthor) {
      this.author = newAuthor;
    },
  
    // Метод для изменения года издания
    setYear: function(newYear) {
      this.year = newYear;
    }
  };
  
  // Пример использования методов
  
//   console.log(book.getTitle()); 
//   console.log(book.getAuthor());
//   console.log(book.getYear());   
  
  book.setTitle("The Little");
  book.setAuthor("author");
  book.setYear(2023);
  
//   console.log(book.getTitle()); 
//   console.log(book.getAuthor()); 
//   console.log(book.getYear());   


