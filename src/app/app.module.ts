import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TabsPage} from './tabs/tabs.page';
import {Tab1Page} from './tab1/tab1.page';
import {Tab2Page} from './tab2/tab2.page';
import {Tab3Page} from './tab3/tab3.page';
import {Tab4Page} from './tab4/tab4.page';

@NgModule({
  declarations: [
      AppComponent,
      // TabsPage,
      // Tab1Page,
      // Tab2Page,
      // Tab3Page,
      // Tab4Page

  ],
  entryComponents: [
      // TabsPage,
      // Tab1Page,
      // Tab2Page,
      // Tab3Page,
      // Tab4Page

  ],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
