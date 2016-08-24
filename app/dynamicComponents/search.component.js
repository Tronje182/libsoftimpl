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
var profile_service_1 = require('../services/profile.service');
var SearchComponent = (function () {
    function SearchComponent(profile) {
        this.profile = profile;
        this.searchSpace = [];
        this.advancedFilter = {};
        this.title = "";
        this.onFilterUpdate = new core_1.EventEmitter();
    }
    SearchComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var changedProp = changes[propName];
        }
    };
    SearchComponent.prototype.updateFilterSimple = function (val) {
        this.onFilterUpdate.emit({ '*': val });
    };
    SearchComponent.prototype.updateFilterAdvanced = function (key, val) {
        if (val !== "" || val == undefined) {
            this.advancedFilter[key] = val;
        }
        else {
            delete this.advancedFilter[key];
        }
        this.onFilterUpdate.emit(this.advancedFilter);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SearchComponent.prototype, "searchSpace", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SearchComponent.prototype, "title", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "onFilterUpdate", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-component',
            template: "\n        <div class=\"container\" >\n            {{title}}\n            <div id=\"advancedSearch\" class=\"row\" *ngIf=\"profile.getProfile().displayProperties.isAdvancedUser\">\n                <form action=\"\" class=\"form-inline\" style=\"margin-bottom:5px;\">\n                    <div class=\"form-group col-md-6\" *ngFor=\"#field of searchSpace\">\n                        <div class=\"input-group\">\n                            <input #advancedBox type=\"text\" name=\"field.key\" class=\"form-control\" placeholder=\"{{field.title}}\" (keyup)=\"updateFilterAdvanced(field.key, advancedBox.value)\">\n                            <span class=\"input-group-addon glyphicon glyphicon-search\" style=\"top:0;\" aria-hidden=\"true\"></span>\n                        </div>  \n                    </div>\n                </form>\n            </div>\n            <div id=\"simpleSearch\" class=\"row\" [ngClass]=\"profile.getProfile().displayProperties.searchInputGroupClass\" *ngIf=\"!profile.getProfile().displayProperties.isAdvancedUser\" style=\"margin-bottom:5px;\">\n                <input #simpleBox type=\"text\" class=\"form-control\" placeholder=\"Search for...\" (keyup)=\"updateFilterSimple(simpleBox.value)\">\n                <span class=\"input-group-addon glyphicon glyphicon-search\" style=\"top:0;\" aria-hidden=\"true\"></span>\n            </div>  \n        </div>\n    \t"
        }), 
        __metadata('design:paramtypes', [profile_service_1.ProfileService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map