import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { DefaultComponent } from './default.component';

@Component({
  selector: 'my-content',

  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class ContentComponent {
}
