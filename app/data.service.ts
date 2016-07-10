import { Injectable } from '@angular/core';

import { Book } from './data/book';
import { Student } from './data/student';
import { BookInfo } from './data/bookInfo';
import { BookLending } from './data/bookLending';

import { BOOKS } from './data/mock-books'
import { BOOKLENDINGS } from './data/mock-bookLendings'

@Injectable()
export class DataService {
  getLendings() {
    return Promise.resolve(BOOKLENDINGS);
  }

  getBooks() {
    return Promise.resolve(BOOKS);
  }

}
