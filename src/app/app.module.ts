import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { CardComponent } from './components/card/card.component';
import { ContentService } from './content.service';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
