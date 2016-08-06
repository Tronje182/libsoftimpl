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
var common_1 = require('@angular/common');
var myfilter_pipe_1 = require('../helper/myfilter.pipe');
var data_service_1 = require('../services/data.service');
var authentication_service_1 = require('../services/authentication.service');
var nools_service_1 = require('../services/nools.service');
var profile_service_1 = require('../services/profile.service');
var StudentsComponent = (function () {
    function StudentsComponent(dataService, _service, router, profile, flow) {
        this.dataService = dataService;
        this._service = _service;
        this.router = router;
        this.profile = profile;
        this.flow = flow;
    }
    StudentsComponent.prototype.getStudents = function () {
        var _this = this;
        this.dataService.getStudents().then(function (students) { return _this.students = students; });
    };
    StudentsComponent.prototype.ngOnInit = function () {
        this._service.checkStaffPrivileges();
        this.isDisabled = true;
        this.getStudents();
        var session = this.flow.getSession();
        session.assert(this.profile.getProfile());
        //now fire the rules
        session.match(function (err) {
            if (err) {
                console.error(err.stack);
            }
            else {
                console.log("done");
            }
        });
    };
    StudentsComponent.prototype.onSelect = function (student) {
        if (this.selectedStudent === student) {
            this.selectedStudent = undefined;
            this.isDisabled = true;
        }
        else {
            this.selectedStudent = student;
            this.isDisabled = false;
        }
        if (this.profile.getProfile().displayProperties.isMobile) {
            this.viewDetails();
        }
    };
    StudentsComponent.prototype.viewDetails = function () {
        this.router.navigate(['/studentDetails', { studentid: this.selectedStudent.id }]);
        console.log('issue book');
    };
    StudentsComponent = __decorate([
        core_1.Component({
            selector: 'students',
            templateUrl: 'app/desktopViews/students.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService],
            pipes: [myfilter_pipe_1.StudentsPipe],
            directives: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.Router, profile_service_1.ProfileService, nools_service_1.NoolsService])
    ], StudentsComponent);
    return StudentsComponent;
}());
exports.StudentsComponent = StudentsComponent;
//# sourceMappingURL=students.component.js.map