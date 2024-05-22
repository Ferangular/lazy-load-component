import { isDevMode, Provider } from '@angular/core';

import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from './transloco-loader';

export function provideTranslateTransloco(): Provider {
  return provideTransloco({
    config: {
      availableLangs: ['en', 'es'],
      defaultLang: 'es',
      // Remove this option if your application doesn't support changing language in runtime.
      reRenderOnLangChange: true,
      prodMode: !isDevMode(),
    },
    loader: TranslocoHttpLoader,
  });
}
