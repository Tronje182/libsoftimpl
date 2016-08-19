import {Component} from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../helper/profile'

@Component({
    selector: 'noolstestbar',
    template: `
        <div class="row container" >
            <div class="col-sm-3">
                <div class="form-inline form-group">
                    <label for="deviceSelect">Device</label>
                    <select class="form-control" id="deviceSelect" [(ngModel)]="platformType" (ngModelChange)="deviceChanged()">
                        <option value="desktop">desktop</option>
                        <option value="mobile">mobile</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-inline form-group">
                    <label for="visionSelect">Vision?</label>
                    <select class="form-control" id="visionSelect" [(ngModel)]="userWeakVision" (ngModelChange)="visionChanged()">
                        <option value="false">no</option>
                        <option value="true">yes</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-inline form-group">
                    <label for="seSelect">Self-efficiacy?</label>
                    <select class="form-control" id="seSelect" [(ngModel)]="userSelfEfficiacy" (ngModelChange)="selfEfficiacyChanged()">
                        <option value="false">no</option>
                        <option value="true">yes</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-inline form-group">
                    <label for="brightnessLevel">Brightness</label>
                    <input class="form-control" type="range" id="brightnessLevel" min="0" max="100" [(ngModel)]="environmentBrightness" (ngModelChange)="brightnessChanged()"> {{environmentBrightness}}
                </div>
            </div>
        </div>
    	`
})

// class for testing nools by setting context attributes in a ui bar
export class NoolsTestBarComponent {
    private profile: Profile;

    private userWeakVision: boolean;
    private userSelfEfficiacy: boolean;

    private platformType: string;

    private environmentBrightness: number;

    constructor(
        private _profile:ProfileService) {
            this.userWeakVision = _profile.getProfile().getUser().hasWeakVision();
            this.userSelfEfficiacy = _profile.getProfile().getUser().hasHighComputerSelfEfficiacy();

            this.platformType = _profile.getProfile().getPlatform().getPlatformType();

            this.environmentBrightness = _profile.getProfile().getEnvironment().getBrightnessLevel();
        }

    // input for device changed
    deviceChanged(){
        this._profile.getProfile().getPlatform().setPlatformType(this.platformType);
    }

    // input for vision changed
    visionChanged(){
        this._profile.getProfile().getUser().setWeakVision(this.userWeakVision);
    }
    
    // input for self efficiacy changed
    selfEfficiacyChanged(){
        this._profile.getProfile().getUser().setComputerSelfEfficiacy(this.userSelfEfficiacy);
    }
    
    // input for environment brightness changed
    brightnessChanged(){
        this._profile.setBrightnessLevel(this.environmentBrightness);
    }
}