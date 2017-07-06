# angular-webdav

WebDAV library for Angular. The (WebDAV protocol)[https://en.wikipedia.org/wiki/WebDAV] is an extension of the HTTP protocols with extra methods.

## Consuming the library

```bash
$ yarn add angular-webdav
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { WebDAVModule } from 'angular-webdav';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebDAVModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
import { Component } from '@angular/core';
import {WebDAV, Header} from 'angular-webdav';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular';
    constructor(private webdav: WebDAV){
        const header =  new Headers();
        const url = 'https://your.url'
        header.append('Authorization', 'Basic '  + btoa('username:password'));
        //header.append('Destination', '${url}/newfile_directory');
        //header.append('Depth', '300');
        header.append('Content-Type', 'text/xml');

        const body=`
        <?xml version="1.0"?>
        <d:propertyupdate xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">
          <d:set>
            <d:prop>
                        <d:lastmodified>Fri, 13 Feb 2015 00:00:00 GMT</d:lastmodified>
            </d:prop>
          </d:set>
        </d:propertyupdate>
        `
        // webdav.get(`${url}/Photos/Paris.jpg`, {headers: header})
        // webdav.mkcol(`${url}/newdir`, {headers: header})
        // webdav.move(`${url}/newdir`, {headers: header})
        // webdav.copy(`${url}/newdir`, {headers: header})
        // webdav.delete(`${url}/newdir2`, {headers: header})
        // webdav.propfind(`${url}/`, {headers: header})
        // webdav.put(`${url}/test`, body, {headers: header})
        webdav.proppatch(`${url}/test`, body, {headers: header})
                        .subscribe();
    }
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ git clone https://github.com/esanzgar/angular-webdav.git
$ cd angular-webdav
$ yarn
$ yarn build
```

To lint all `*.ts` files:

```bash
$ yarn lint
```

## License

Apache-2.0 © [Eduardo Sanz García](mailto:eduardo@ebi.ac.uk)
