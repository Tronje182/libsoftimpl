import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'studentsFilter'})
export class StudentsPipe implements PipeTransform {
    transform(items: any[], filterBy: any): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        if(items !== undefined)
        {
            if(filterBy === undefined){
                return items;
            }else {
                filterBy = JSON.parse(filterBy);
                if(filterBy['*'] != undefined){
                    return items.filter(item => item.id.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 || item.firstname.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 || item.lastname.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1);
                }else{
                    var arrayOfKeys = Object.keys(filterBy);
                    if(arrayOfKeys.length >= 1){
                        var tempItems;
                        return items.filter(function(val) {
                            for(var i = 0; i < arrayOfKeys.length; i++){            
                                var explodedString = arrayOfKeys[i].split('.');
                                var v = val;
                                for (var j = 0, l = explodedString.length; j<l; j++){
                                    v = v[explodedString[j]];
                                }
                                console.log(filterBy[arrayOfKeys[i]]);
                                if(v.toLowerCase().indexOf(filterBy[arrayOfKeys[i]].toLowerCase()) !== -1){
                                    return true;
                                }
                            }
                            return false;
                        });
                    }else{
                        return items;
                    }
                }
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
            }else {
                filterBy = JSON.parse(filterBy);
                if(filterBy['*'] != undefined){
                    return items.filter(item => item.book.bookInfo.isbn.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 || item.book.bookInfo.title.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 || item.book.bookInfo.author.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 || item.student.id.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1);
                }else{
                    var arrayOfKeys = Object.keys(filterBy);
                    if(arrayOfKeys.length >= 1){
                        var tempItems;
                        return items.filter(function(val) {
                            for(var i = 0; i < arrayOfKeys.length; i++){            
                                var explodedString = arrayOfKeys[i].split('.');
                                var v = val;
                                for (var j = 0, l = explodedString.length; j<l; j++){
                                    v = v[explodedString[j]];
                                }
                                console.log(filterBy[arrayOfKeys[i]]);
                                if(v.toLowerCase().indexOf(filterBy[arrayOfKeys[i]].toLowerCase()) !== -1){
                                    return true;
                                }
                            }
                            return false;
                        });
                    }else{
                        return items;
                    }
                }
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
            }else {
                filterBy = JSON.parse(filterBy);
                if(filterBy['*'] != undefined){
                    return items.filter(item => item.bookInfo.isbn.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 || item.bookInfo.title.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 || item.bookInfo.author.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1);
                }else{
                    var arrayOfKeys = Object.keys(filterBy);
                    if(arrayOfKeys.length >= 1){
                        var tempItems;
                        return items.filter(function(val) {
                            for(var i = 0; i < arrayOfKeys.length; i++){            
                                var explodedString = arrayOfKeys[i].split('.');
                                var v = val;
                                for (var j = 0, l = explodedString.length; j<l; j++){
                                    v = v[explodedString[j]];
                                }
                                console.log(filterBy[arrayOfKeys[i]]);
                                if(v.toLowerCase().indexOf(filterBy[arrayOfKeys[i]].toLowerCase()) !== -1){
                                    return true;
                                }
                            }
                            return false;
                        });
                    }else{
                        return items;
                    }
                }
            }
        }   
    }
}

@Pipe({name: 'lentBooksFilter'})
export class LentBooksPipe implements PipeTransform  {
    transform(items: any[], filterBy: any): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        if(items !== undefined)
        {
            if(filterBy === undefined){
                return items;
            }else {
                filterBy = JSON.parse(filterBy);
                if(filterBy['*'] != undefined){
                    return items.filter(item => item.book.bookInfo.isbn.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 || item.book.bookInfo.title.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 || item.book.bookInfo.author.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1 || item.student.id.toLowerCase().indexOf(filterBy['*'].toLowerCase()) !== -1);
                }else{
                    var arrayOfKeys = Object.keys(filterBy);
                    if(arrayOfKeys.length >= 1){
                        var tempItems;
                        return items.filter(function(val) {
                            for(var i = 0; i < arrayOfKeys.length; i++){            
                                var explodedString = arrayOfKeys[i].split('.');
                                var v = val;
                                for (var j = 0, l = explodedString.length; j<l; j++){
                                    v = v[explodedString[j]];
                                }
                                console.log(filterBy[arrayOfKeys[i]]);
                                if(v.toLowerCase().indexOf(filterBy[arrayOfKeys[i]].toLowerCase()) !== -1){
                                    return true;
                                }
                            }
                            return false;
                        });
                    }else{
                        return items;
                    }
                }
            }
        }    
    }
}
