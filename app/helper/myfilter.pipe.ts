import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'studentsFilter'})
export class StudentsPipe implements PipeTransform {
    transform(items: any[], filterBy: any): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        if(items !== undefined)
        {
            if(filterBy === undefined){
                return items;
            }else{
                return items.filter(item => item.id.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.firstname.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.lastname.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1);
            }
        }    
    }
}

@Pipe({name: 'reservationsFilter'})
export class ReservationsPipe implements PipeTransform {
    transform(items: any[], filterBy: any): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        if(items !== undefined)
        {
            if(filterBy === undefined){
                return items;
            }else{
                return items.filter(item => item.book.bookInfo.isbn.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.book.bookInfo.title.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.book.bookInfo.author.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.student.id.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1);
            }
        }    
    }
}

@Pipe({name: 'booksFilter'})
export class BooksPipe implements PipeTransform {
    transform(items: any[], filterBy: any): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        if(items !== undefined)
        {
            if(filterBy === undefined){
                return items;
            }else{
                return items.filter(item => item.bookInfo.isbn.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.bookInfo.title.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.bookInfo.author.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1);
            }
        }    
    }
}

@Pipe({name: 'lentBooksFilter'})
export class LentBooksPipe implements PipeTransform {
    transform(items: any[], filterBy: any): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        if(items !== undefined)
        {
            if(filterBy === undefined){
                return items;
            }else{
                return items.filter(item => item.book.bookInfo.isbn.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.book.bookInfo.title.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.book.bookInfo.author.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.student.id.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1);
            }
        }    
    }
}