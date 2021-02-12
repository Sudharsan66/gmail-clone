import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MailComponent } from './mail/mail.component';
import { SidehovermenuComponent } from './sidehovermenu/sidehovermenu.component';
import { LabelComponent } from './label/label.component';
import { RightmenuComponent } from './rightmenu/rightmenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleMailComponent } from './single-mail/single-mail.component';
import { IconHolderComponent } from './icon-holder/icon-holder.component';
import { EmailWrapperComponent } from './email-wrapper/email-wrapper.component';
import { LoaderComponent } from './loader/loader.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidehovermenuComponent,
    MailComponent,
    LabelComponent,
    RightmenuComponent,
    SingleMailComponent,
    IconHolderComponent,
    EmailWrapperComponent,
    LoaderComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
