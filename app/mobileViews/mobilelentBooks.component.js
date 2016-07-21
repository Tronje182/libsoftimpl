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
var MobileLentBooksComponent = (function () {
    function MobileLentBooksComponent(dataService, _service, router) {
        this.dataService = dataService;
        this._service = _service;
        this.router = router;
    }
    MobileLentBooksComponent.prototype.getLendings = function () {
        var _this = this;
        this.dataService.getLendings(this._service.getId()).then(function (bookLendings) { return _this.bookLendings = bookLendings; });
    };
    MobileLentBooksComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
        this.getLendings();
    };
    MobileLentBooksComponent.prototype.onSelect = function (bookLending) {
        this.router.navigate(['/mobile/lentBooks/details', { studentId: bookLending.student.id, bookId: bookLending.book.id, until: bookLending.until }]);
    };
    MobileLentBooksComponent = __decorate([
        core_1.Component({
            selector: 'my-lent-books',
            templateUrl: 'app/mobileViews/lentbooks.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService],
            pipes: [myfilter_pipe_1.LentBooksPipe]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.Router])
    ], MobileLentBooksComponent);
    return MobileLentBooksComponent;
}());
exports.MobileLentBooksComponent = MobileLentBooksComponent;
//# sourceMappingURL=mobilelentbooks.component.js.map