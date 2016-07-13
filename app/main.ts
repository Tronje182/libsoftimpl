import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

import {provide, PLATFORM_DIRECTIVES} from '@angular/core';
import { ResponsiveState, ResponsiveConfig, RESPONSIVE_DIRECTIVES } from 'responsive-directives-angular2';


bootstrap(AppComponent);

bootstrap(ContentComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    ResponsiveState,
    provide(PLATFORM_DIRECTIVES, { useValue: [RESPONSIVE_DIRECTIVES], multi: true})
]);