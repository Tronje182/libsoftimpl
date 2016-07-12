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
var router_1 = require('@angular/router');
var data_service_1 = require('./data.service');
var authentication_service_1 = require('./authentication.service');
var SearchBooksComponent = (function () {
    function SearchBooksComponent(dataService, _service, router) {
        this.dataService = dataService;
        this._service = _service;
        this.router = router;
        this.authService = _service;
    }
    SearchBooksComponent.prototype.getLendings = function () {
        var _this = this;
        this.dataService.getBooks().then(function (books) { return _this.books = books; });
    };
    SearchBooksComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
        this.isDisabledIssueBook = true;
        this.getLendings();
    };
    SearchBooksComponent.prototype.onSelect = function (book) {
        if (this.selectedBook == book) {
            this.selectedBook = undefined;
            this.isDisabledIssueBook = true;
        }
        else {
            if (book.status == true) {
                this.isDisabledIssueBook = false;
            }
            else {
                this.isDisabledIssueBook = true;
            }
            this.selectedBook = book;
        }
    };
    SearchBooksComponent.prototype.issueBook = function () {
        this.router.navigate(['/lendingForm', { bookid: this.selectedBook.id }]);
    };
    SearchBooksComponent = __decorate([
        core_1.Component({
            selector: 'my-search-books',
            templateUrl: 'app/searchBooks.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.Router])
    ], SearchBooksComponent);
    return SearchBooksComponent;
}());
exports.SearchBooksComponent = SearchBooksComponent;
//# sourceMappingURL=searchbooks.component.js.map