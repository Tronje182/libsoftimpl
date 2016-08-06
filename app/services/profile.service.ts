import {Injectable} from '@angular/core';

import { Profile } from '../helper/profile'
import { DisplayProperties } from '../helper/displayProperties'

declare var MobileDetect: any;

@Injectable()
export class ProfileService {

  private profile: Profile;
  public md;

  constructor(){
    this.profile = new Profile();
    this.profile.setUserProfile('student');
    
    this.md = new MobileDetect(window.navigator.userAgent);
    if(this.md.mobile() == null){
      this.profile.setPlatformType("desktop")
    }else{
      this.profile.setPlatformType("mobile");
    }
  }

  public getProfile(){
    return this.profile;
  }
}