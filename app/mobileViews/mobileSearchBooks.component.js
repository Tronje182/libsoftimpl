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
var myfilter_pipe_1 = require('../helper/myfilter.pipe');
var data_service_1 = require('../services/data.service');
var authentication_service_1 = require('../services/authentication.service');
var MobileSearchBooksComponent = (function () {
    function MobileSearchBooksComponent(dataService, _service, router) {
        this.dataService = dataService;
        this._service = _service;
        this.router = router;
        this.authService = _service;
    }
    MobileSearchBooksComponent.prototype.getLendings = function () {
        var _this = this;
        this.dataService.getBooks().then(function (books) { return _this.books = books; }).then(function (b) { return console.log(b); });
    };
    MobileSearchBooksComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
        this.getLendings();
    };
    MobileSearchBooksComponent.prototype.onSelect = function (book) {
        this.router.navigate(['/mobile/searchBooks/details', { bookId: book.id }]);
    };
    MobileSearchBooksComponent = __decorate([
        core_1.Component({
            selector: 'my-search-books',
            templateUrl: 'app/mobileViews/searchBooks.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService],
            pipes: [myfilter_pipe_1.BooksPipe]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.Router])
    ], MobileSearchBooksComponent);
    return MobileSearchBooksComponent;
}());
exports.MobileSearchBooksComponent = MobileSearchBooksComponent;
//# sourceMappingURL=mobileSearchbooks.component.js.map