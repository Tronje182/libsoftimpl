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
var student_1 = require('../data/student');
var data_service_1 = require('../services/data.service');
var authentication_service_1 = require('../services/authentication.service');
var StudentDetailsComponent = (function () {
    function StudentDetailsComponent(dataService, _service, route) {
        this.dataService = dataService;
        this._service = _service;
        this.route = route;
        this.student = new student_1.Student("", "", "", false);
    }
    StudentDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.studentId = params['studentid'];
            _this.dataService.getStudentById(_this.studentId).then(function (s) { return _this.student = s; });
            _this.dataService.getLendings(_this.studentId).then(function (l) { return _this.bookLendings = l; });
        });
    };
    StudentDetailsComponent = __decorate([
        core_1.Component({
            selector: 'studentdetails',
            templateUrl: 'app/desktopViews/studentDetails.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.ActivatedRoute])
    ], StudentDetailsComponent);
    return StudentDetailsComponent;
}());
exports.StudentDetailsComponent = StudentDetailsComponent;
//# sourceMappingURL=studentdetails.component.js.map