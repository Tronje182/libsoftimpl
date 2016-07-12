import { Injectable } from '@angular/core';

import { Book } from './data/book';
import { Student } from './data/student';
import { BookInfo } from './data/bookInfo';
import { BookLending } from './data/bookLending';

import { BOOKS } from './data/mock-books'
import { BOOKLENDINGS } from './data/mock-bookLendings'
import { BOOKRESERVATIONS } from './data/mock-bookReservations'
import { STUDENTS } from './data/mock-students'

@Injectable()
export class DataService {
  getLendings(id: string) {
    return Promise.resolve(BOOKLENDINGS.filter(l => l.student.id === id));
  }

  getBooks() {
    return Promise.resolve(BOOKS);
  }

  getBookById(id:number){
    return Promise.resolve(BOOKS.find(b => b.id == id));
  }

  getBookReservations(){
    return Promise.resolve(BOOKRESERVATIONS);
  }

  getStudents() {
    return Promise.resolve(STUDENTS);
  }

  getStudentById(id:string){
    return Promise.resolve(STUDENTS.find(s => s.id === id));
  }
}
