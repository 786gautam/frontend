import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export function getBaseUrl(){
  return "http://localhost:3000/api/"
}
export function getImgUrl(){
  return "http://localhost:3000/"
}
const provider = [
  {
    provide:"baseurl",useFactory:getBaseUrl,desp:[]
  },
  {
    provide:"imageurl",useFactory:getImgUrl,desp:[]
  }
]



platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));
