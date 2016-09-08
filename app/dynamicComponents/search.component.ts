import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange} from '@angular/core';

import { ProfileService } from '../services/profile.service';
import { ResourceService } from '../services/resource.service';

@Component({
    selector: 'search-component',
    template: `
        <div class="container" >
            <div id="advancedSearch" class="row" *ngIf="profile.getProfile().displayProperties.isAdvancedUser">
                <form action="" class="form-inline" style="margin-bottom:5px;">
                    <div class="form-group col-md-6" *ngFor="#field of searchSpace">
                        <div class="input-group">
                            <input #advancedBox type="text" name="field.key" class="form-control" placeholder="{{resources.getLangString(field.title)}}" (keyup)="updateFilterAdvanced(field.key, advancedBox.value)">
                            <span class="input-group-addon glyphicon glyphicon-search" style="top:0;" aria-hidden="true"></span>
                        </div>  
                    </div>
                </form>
            </div>
            <div id="simpleSearch" class="row" [ngClass]="profile.getProfile().displayProperties.searchInputGroupClass" *ngIf="!profile.getProfile().displayProperties.isAdvancedUser" style="margin-bottom:5px;">
                <input #simpleBox type="text" class="form-control" placeholder="{{resources.getLangString('search')}}" (keyup)="updateFilterSimple(simpleBox.value)">
                <span class="input-group-addon glyphicon glyphicon-search" style="top:0;" aria-hidden="true"></span>
            </div>  
        </div>
    	`
})

export class SearchComponent implements OnChanges{
    @Input() searchSpace: Object[] = [];
    public advancedFilter: Object = {};
    @Input() title: string = "";

    @Output() onFilterUpdate = new EventEmitter<Object>();

    constructor(private profile: ProfileService, private resources: ResourceService) {
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        for (let propName in changes) { 
            let changedProp = changes[propName];
        }
    }

    updateFilterSimple(val: string){
        this.onFilterUpdate.emit({'*':val});
    }

    updateFilterAdvanced(key: string, val:string){
        if(val !== "" || val == undefined){
            this.advancedFilter[key] = val;
        }else{
            delete this.advancedFilter[key];
        }
        this.onFilterUpdate.emit(this.advancedFilter);
    }
}