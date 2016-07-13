import { Injectable, OnInit } from '@angular/core';

import { Book } from './data/book';
import { Student } from './data/student';
import { BookInfo } from './data/bookInfo';
import { BookLending } from './data/bookLending';
import { BookReservation } from './data/bookReservation';

import { BOOKS } from './data/mock-books'
import { BOOKLENDINGS } from './data/mock-bookLendings'
import { BOOKRESERVATIONS } from './data/mock-bookReservations'
import { STUDENTS } from './data/mock-students'

@Injectable()
export class DataService {

  constructor(){
      if(localStorage.getItem("booklendings") == null){
        localStorage.setItem("booklendings", JSON.stringify(BOOKLENDINGS));
      }
      if(localStorage.getItem("bookreservations") == null){
        localStorage.setItem("bookreservations", JSON.stringify(BOOKRESERVATIONS));
      }
      if(localStorage.getItem("books") == null){
        localStorage.setItem("books", JSON.stringify(BOOKS));
      }
    }

// Get / Set operations

  localGet(key: string){
    return JSON.parse(localStorage.getItem(key));
  }

  localSet(key: string, data){
    return localStorage.setItem(key, JSON.stringify(data));
  }

  getLendings(id: string) {
    return Promise.resolve(this.localGet("booklendings").filter(l => l.student.id === id));
  }

  getBooks() {
    return Promise.resolve(this.localGet("books"));
  }
  
  getBooksSync() {
    return this.localGet("books");
  }

  getBookById(id:number){
    return Promise.resolve(BOOKS.find(b => b.id == id));
  }

  getBookByIdSync(id:number){
    return BOOKS.find(b => b.id == id);
  }

  getBookReservations(){
    return Promise.resolve(this.localGet("bookreservations"));
  }

  getStudents() {
    return Promise.resolve(STUDENTS);
  }

  getStudentById(id:string){
    return Promise.resolve(STUDENTS.find(s => s.id === id));
  }

  getStudentByIdSync(id:string){
    return STUDENTS.find(s => s.id === id);
  }

// Actions

  reserveBook(bookId: number, studentId: string){
    var bookObj: Book;
    var studentObj: Student;
    var br: BookReservation;
    var brs: BookReservation[];

    bookObj = this.getBookByIdSync(bookId);
    studentObj = this.getStudentByIdSync(studentId);

    br = {book:bookObj, student: studentObj};
    brs = this.localGet("bookreservations");
    brs.push(br);
    this.localSet("bookreservations", brs);

    this.updateBookStatus(bookId, false);
  }

  returnBook(id:number){
    var bl: BookLending;
    var br: BookReservation;
    
    bl = this.localGet("booklendings").find(bl => bl.book.id == id);
    if(bl!=null){
      var index2 = this.indexOfLending(this.localGet("booklendings"),bl);
      
      this.localSplice("booklendings", index2);
    }

    br = this.localGet("bookreservations").find(bl => bl.book.id == id);
    if(br!=null){
      var index2 = this.indexOfReservation(this.localGet("bookreservations"),br);
      console.log("index2 " + index2);
      
      this.localSplice("bookreservations", index2);
    }

    this.updateBookStatus(id, true);
  }

  lendBook(bookObj:Book, studentId: string, until: Date){
    var tempArr: BookLending[];
    var student: Student;
    var book: Book;
    var br: BookReservation;

    book = this.getBookByIdSync(bookObj.id);

    if(book.status==true || this.localGet("bookreservations").find(bl => bl.book.id == bookObj.id && bl.student.id === studentId) == null)
    {
      tempArr = this.localGet("booklendings");
      student = this.getStudentByIdSync(studentId);
      tempArr.push(new BookLending(bookObj,student,until));
      this.localSet("booklendings", tempArr);
      
      localStorage.getItem("bookreservations");

      br = this.localGet("bookreservations").find(bl => bl.book.id == bookObj.id && bl.student.id === studentId);
      if(br!=null){
        var index2 = this.indexOfReservation(this.localGet("bookreservations"),br);
        console.log("index2 " + index2);
        
        this.localSplice("bookreservations", index2);
      }

      this.updateBookStatus(bookObj.id, false);
    }
  }

// Helper methods

  updateBookStatus(id:number, status:boolean){
    var books: Book[];
    books = this.getBooksSync();
    books[id-1].status = status;
    this.localSet("books", books);
    console.log(this.localGet("books"));
  }

  localSplice(key:string, index: number){
    if(index > -1){
        var tempArr = this.localGet(key)
        tempArr.splice(index,1);
        this.localSet(key, tempArr);
    }
  }

  indexOfReservation(array, item) {
    for (var i = 0; i < array.length; i++) {
      var tempBook: BookReservation;
      var tempBook2: BookReservation;
      tempBook = array[i];
      tempBook2 = item;
      if (tempBook.book.id == tempBook2.book.id && tempBook.student.id == tempBook2.student.id) return i;
    }
    return -1;
  }

  indexOfLending(array, item) {
    for (var i = 0; i < array.length; i++) {
      var tempBook: BookLending;
      var tempBook2: BookLending;
      tempBook = array[i];
      tempBook2 = item;
      if (tempBook.book.id == tempBook2.book.id) return i;
    }
    return -1;
  }
}
