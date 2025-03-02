import { ApplicationConfig, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { bootstrapMoon, bootstrapSun, bootstrapSearch, bootstrapGithub, bootstrapLinkedin, bootstrapEnvelope } from '@ng-icons/bootstrap-icons';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { provideApollo } from 'apollo-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);

      return {
        link: httpLink.create({
          uri: 'https://us-west-2.cdn.hygraph.com/content/cm7onqy4u02aq06utvea7i68b/master',
        }),
        cache: new InMemoryCache(),
      };
    }),
    provideIcons({ bootstrapMoon, bootstrapSun, bootstrapSearch, bootstrapGithub, bootstrapLinkedin, bootstrapEnvelope })
  ]
};
