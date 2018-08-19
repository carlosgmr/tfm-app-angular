// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  app: {
    name: 'TFM App Angular',
    name1: 'App',
    name2: 'Angular',
    version: '1.0.0',
    copyright: 'Carlos Giovanni Molina Ronceros',
    copyrightUrl: 'https://github.com/carlosgmr'
  },
  api: {
    url: 'http://192.168.1.61:8956/'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
