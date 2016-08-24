import { Component } from '@angular/core';

import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'base-component',  
  template: ''

})

export class BaseComponent {
 
  constructor(
  private p: ProfileService) {
    p.getProfile().setLocation(this);
  }

}
