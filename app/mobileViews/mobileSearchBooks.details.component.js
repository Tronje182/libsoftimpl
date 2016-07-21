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
var book_1 = require('../data/book');
var bookInfo_1 = require('../data/bookInfo');
var data_service_1 = require('../services/data.service');
var authentication_service_1 = require('../services/authentication.service');
var MobileSearchBooksDetailsComponent = (function () {
    function MobileSearchBooksDetailsComponent(dataService, _service, route, router) {
        this.dataService = dataService;
        this._service = _service;
        this.route = route;
        this.router = router;
        this.selectedBook = new book_1.Book(-1, false, new bookInfo_1.BookInfo('', '', ''));
        this.authService = _service;
    }
    MobileSearchBooksDetailsComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
        this.updateDetails();
    };
    MobileSearchBooksDetailsComponent.prototype.updateDetails = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.dataService.getBookById(params['bookId']).then(function (b) { return _this.selectedBook = b; });
        });
    };
    MobileSearchBooksDetailsComponent.prototype.issueBook = function () {
        this.router.navigate(['/mobile/lendingForm', { bookid: this.selectedBook.id }]);
        this.updateDetails();
    };
    MobileSearchBooksDetailsComponent.prototype.returnBook = function () {
        this.dataService.returnBook(this.selectedBook.id);
        this.updateDetails();
    };
    MobileSearchBooksDetailsComponent.prototype.reserveBook = function () {
        this.dataService.reserveBook(this.selectedBook.id, this.authService.getId());
        this.updateDetails();
    };
    MobileSearchBooksDetailsComponent = __decorate([
        core_1.Component({
            selector: 'my-search-books',
            templateUrl: 'app/mobileViews/searchBooks.component.details.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.ActivatedRoute, router_1.Router])
    ], MobileSearchBooksDetailsComponent);
    return MobileSearchBooksDetailsComponent;
}());
exports.MobileSearchBooksDetailsComponent = MobileSearchBooksDetailsComponent;
//# sourceMappingURL=mobilesearchbooks.details.component.js.map