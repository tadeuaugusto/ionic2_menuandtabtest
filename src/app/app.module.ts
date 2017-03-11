import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FeedsPage } from '../pages/feeds/feeds';
import { SettingsPage } from '../pages/settings/settings';
import { FeedAudioPage } from '../pages/feed-audio/feed-audio';
import { FeedTextoPage } from '../pages/feed-texto/feed-texto';

@NgModule({
  declarations: [
    MyApp,
    FeedsPage,
    SettingsPage,
    FeedAudioPage,
    FeedTextoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedsPage,
    SettingsPage,
    FeedAudioPage,
    FeedTextoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
