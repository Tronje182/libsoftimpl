"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var StudentsPipe = (function () {
    function StudentsPipe() {
    }
    StudentsPipe.prototype.transform = function (items, filterBy) {
        // filter items array, items which match and return true will be kept, false will be filtered out
        if (items !== undefined) {
            if (filterBy === undefined) {
                return items;
            }
            else {
                return items.filter(function (item) { return item.id.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.firstname.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.lastname.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1; });
            }
        }
    };
    StudentsPipe = __decorate([
        core_1.Pipe({ name: 'studentsFilter' }), 
        __metadata('design:paramtypes', [])
    ], StudentsPipe);
    return StudentsPipe;
}());
exports.StudentsPipe = StudentsPipe;
var ReservationsPipe = (function () {
    function ReservationsPipe() {
    }
    ReservationsPipe.prototype.transform = function (items, filterBy) {
        // filter items array, items which match and return true will be kept, false will be filtered out
        if (items !== undefined) {
            if (filterBy === undefined) {
                return items;
            }
            else {
                return items.filter(function (item) { return item.book.bookInfo.isbn.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.book.bookInfo.title.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.book.bookInfo.author.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.student.id.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1; });
            }
        }
    };
    ReservationsPipe = __decorate([
        core_1.Pipe({ name: 'reservationsFilter' }), 
        __metadata('design:paramtypes', [])
    ], ReservationsPipe);
    return ReservationsPipe;
}());
exports.ReservationsPipe = ReservationsPipe;
var BooksPipe = (function () {
    function BooksPipe() {
    }
    BooksPipe.prototype.transform = function (items, filterBy) {
        // filter items array, items which match and return true will be kept, false will be filtered out
        if (items !== undefined) {
            if (filterBy === undefined) {
                return items;
            }
            else {
                return items.filter(function (item) { return item.bookInfo.isbn.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.bookInfo.title.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1 || item.bookInfo.author.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1; });
            }
        }
    };
    BooksPipe = __decorate([
        core_1.Pipe({ name: 'booksFilter' }), 
        __metadata('design:paramtypes', [])
    ], BooksPipe);
    return BooksPipe;
}());
exports.BooksPipe = BooksPipe;
//# sourceMappingURL=myfilter.pipe.js.map