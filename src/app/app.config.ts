import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

import { provideTranslateTransloco } from './core/providers/translate.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    provideTranslateTransloco(),
  ],
};
