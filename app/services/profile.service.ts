import {Injectable} from '@angular/core';

import { Profile } from '../helper/profile'
import { DisplayProperties } from '../helper/displayProperties'

@Injectable()
export class ProfileService {

    private profile: Profile;

    constructor(){
      this.profile = new Profile();
      this.profile.setPlatformType('mobile');
      this.profile.setUserProfile('student');
    }

    public getProfile(){
      return this.profile;
    }
}