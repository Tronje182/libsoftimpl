import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { LoginComponent } from './login.component';
import { DefaultComponent } from './default.component';

@Component({
  selector: 'my-content',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [LoginComponent, ROUTER_DIRECTIVES]
})
export class ContentComponent {
}
