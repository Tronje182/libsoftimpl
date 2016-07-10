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
var data_service_1 = require('./data.service');
var LentBooksComponent = (function () {
    function LentBooksComponent(dataService) {
        this.dataService = dataService;
    }
    LentBooksComponent.prototype.getLendings = function () {
        var _this = this;
        this.dataService.getLendings().then(function (bookLendings) { return _this.bookLendings = bookLendings; });
    };
    LentBooksComponent.prototype.ngOnInit = function () {
        this.getLendings();
    };
    LentBooksComponent.prototype.onSelect = function (bookLending) {
        if (this.selectedLending == bookLending) {
            this.selectedLending = undefined;
        }
        else {
            this.selectedLending = bookLending;
        }
    };
    LentBooksComponent = __decorate([
        core_1.Component({
            selector: 'my-lent-books',
            templateUrl: 'app/lentbooks.component.html',
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], LentBooksComponent);
    return LentBooksComponent;
}());
exports.LentBooksComponent = LentBooksComponent;
//# sourceMappingURL=lentbooks.component.js.map