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
var search_component_1 = require('../dynamicComponents/search.component');
var myfilter_pipe_1 = require('../helper/myfilter.pipe');
var data_service_1 = require('../services/data.service');
var authentication_service_1 = require('../services/authentication.service');
var profile_service_1 = require('../services/profile.service');
var resource_service_1 = require('../services/resource.service');
var StudentsComponent = (function () {
    function StudentsComponent(dataService, _service, router, profile, _resources) {
        this.dataService = dataService;
        this._service = _service;
        this.router = router;
        this.profile = profile;
        this._resources = _resources;
        this.advancedSearchSpace = [{ key: "id", title: "studentID" },
            { key: "firstname", title: "firstname" },
            { key: "lastname", title: "lastname" }];
    }
    StudentsComponent.prototype.getStudents = function () {
        var _this = this;
        this.dataService.getStudents().then(function (students) { return _this.students = students; });
    };
    StudentsComponent.prototype.ngOnInit = function () {
        this._service.checkStaffPrivileges();
        this.isDisabled = true;
        this.getStudents();
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
    };
    StudentsComponent.prototype.filterUpdated = function (val) {
        this.filterBy = JSON.stringify(val);
    };
    StudentsComponent = __decorate([
        core_1.Component({
            selector: 'students',
            templateUrl: 'app/desktopViews/students.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService],
            pipes: [myfilter_pipe_1.StudentsPipe],
            directives: [common_1.NgClass, search_component_1.SearchComponent]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.Router, profile_service_1.ProfileService, resource_service_1.ResourceService])
    ], StudentsComponent);
    return StudentsComponent;
}());
exports.StudentsComponent = StudentsComponent;
//# sourceMappingURL=students.component.js.map