import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';


bootstrap(AppComponent);

bootstrap(ContentComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);