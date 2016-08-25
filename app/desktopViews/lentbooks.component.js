"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var common_1 = require('@angular/common');
var myfilter_pipe_1 = require('../helper/myfilter.pipe');
var data_service_1 = require('../services/data.service');
var authentication_service_1 = require('../services/authentication.service');
var profile_service_1 = require('../services/profile.service');
var base_component_1 = require('./base.component');
var search_component_1 = require('../dynamicComponents/search.component');
var LentBooksComponent = (function (_super) {
    __extends(LentBooksComponent, _super);
    function LentBooksComponent(dataService, _service, profile) {
        _super.call(this, profile);
        this.dataService = dataService;
        this._service = _service;
        this.profile = profile;
        this.advancedSearchSpace = [{ key: "book.bookInfo.isbn", title: "Book ISBN" },
            { key: "book.bookInfo.title", title: "Book Title" },
            { key: "student.id", title: "Student ID" }];
    }
    LentBooksComponent.prototype.getLendings = function () {
        var _this = this;
        this.dataService.getLendings(this._service.getId()).then(function (bookLendings) { return _this.bookLendings = bookLendings; });
    };
    LentBooksComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
        this.getLendings();
    };
    LentBooksComponent.prototype.onSelect = function (bookLending) {
        if (this.selectedLending === bookLending) {
            this.selectedLending = undefined;
        }
        else {
            this.selectedLending = bookLending;
        }
    };
    LentBooksComponent.prototype.unselectLending = function () {
        this.selectedLending = undefined;
    };
    LentBooksComponent.prototype.filterUpdated = function (val) {
        this.filterBy = JSON.stringify(val);
    };
    LentBooksComponent = __decorate([
        core_1.Component({
            selector: 'lent-books',
            templateUrl: 'app/desktopViews/lentbooks.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService],
            pipes: [myfilter_pipe_1.LentBooksPipe],
            directives: [common_1.NgClass, search_component_1.SearchComponent]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, profile_service_1.ProfileService])
    ], LentBooksComponent);
    return LentBooksComponent;
}(base_component_1.BaseComponent));
exports.LentBooksComponent = LentBooksComponent;
//# sourceMappingURL=lentbooks.component.js.map