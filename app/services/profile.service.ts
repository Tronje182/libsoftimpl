import {Injectable, Input} from '@angular/core';

import { Profile } from '../helper/profile'
import { DisplayProperties } from '../helper/displayProperties'

import { PlatformProfile } from '../helper/platform.profile';
import { UserProfile } from '../helper/user.profile';
import { EnvironmentProfile } from '../helper/environment.profile';

declare var MobileDetect: any;

@Injectable()
export class ProfileService {

  private profile: Profile;
  public md;

  constructor(){
    // check if profile configuration ist already saved in local storage
    if(localStorage.getItem('profile') != null){
      // parse profile configuration string to profile object
      var temp : any;
      temp = JSON.parse(localStorage.getItem('profile'));
      temp.user.__proto__ = UserProfile.prototype;
      temp.environment.__proto__ = EnvironmentProfile.prototype;
      temp.platform.__proto__ = PlatformProfile.prototype;
      temp.displayProperties.__proto__ = DisplayProperties.prototype;
      temp.__proto__ = Profile.prototype;
      this.profile = temp;
    }else{
      // initialize new profile configuration
      this.profile = new Profile();
      this.profile.setUserRole('student');
      
      this.md = new MobileDetect(window.navigator.userAgent);
      if(this.md.mobile() == null){
        this.profile.setPlatformType("desktop")
      }else{
        this.profile.setPlatformType("mobile");
      }

      // save profile configuration string to local storage
      localStorage.setItem('profile', JSON.stringify(this.profile));
    }
  }

  public setBrightnessLevel(v:number){
    this.profile.getEnvironment().setBrightnessLevel(v);
    localStorage.setItem('profile', JSON.stringify(this.profile));
  }

  public setComputerSelfEfficiacy(v: boolean){
    this.profile.getUser().setComputerSelfEfficiacy(v);
    localStorage.setItem('profile', JSON.stringify(this.profile));
  }

  public setWeakVision(v: boolean){
    this.profile.getUser().setWeakVision(v);
    localStorage.setItem('profile', JSON.stringify(this.profile));
  }

  public setPlatformType(v: string){
    this.profile.getPlatform().setPlatformType(v);
    localStorage.setItem('profile', JSON.stringify(this.profile));
  }

  public getProfile(){
    return this.profile;
  }
}