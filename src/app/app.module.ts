import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { InputPage } from '../pages/input/input';
import { HomePage } from '../pages/home/home';
import { NotaPage } from '../pages/nota/nota';
import { FrequenciaPage } from '../pages/frequencia/frequencia';

@NgModule({
  declarations: [
    MyApp,
    InputPage,
    HomePage,
    NotaPage,
    FrequenciaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InputPage,
    HomePage,
    NotaPage,
    FrequenciaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HTTP
  ]
})
export class AppModule {}
