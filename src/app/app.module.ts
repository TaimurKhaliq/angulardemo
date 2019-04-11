import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu.item.component';
import { ContentService } from './content.service';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialIconListComponent } from './components/social-icon-list/social-icon-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    CardComponent,
    MenuItemComponent,
    MenuComponent,
    HeroComponent,
    FooterComponent,
    SocialIconListComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
