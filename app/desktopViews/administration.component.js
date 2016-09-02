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
var data_service_1 = require('../services/data.service');
var authentication_service_1 = require('../services/authentication.service');
var AdministrationComponent = (function () {
    function AdministrationComponent(dataService, _service, route) {
        this.dataService = dataService;
        this._service = _service;
        this.route = route;
    }
    AdministrationComponent.prototype.ngOnInit = function () {
        this._service.checkStaffPrivileges();
        this._service.checkAdminPrivileges();
    };
    AdministrationComponent = __decorate([
        core_1.Component({
            selector: 'administration',
            templateUrl: 'app/desktopViews/administration.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.ActivatedRoute])
    ], AdministrationComponent);
    return AdministrationComponent;
}());
exports.AdministrationComponent = AdministrationComponent;
//# sourceMappingURL=administration.component.js.map