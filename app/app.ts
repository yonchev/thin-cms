
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { MainComponent } from './components/_main/main.component';
import { NotificationService } from './services/notification.service';

import { appRouterProviders } from './app.routes';

bootstrap(MainComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  [NotificationService],
  disableDeprecatedForms(),
  provideForms()
]);
