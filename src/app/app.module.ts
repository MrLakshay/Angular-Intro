import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserAuthModule} from './user-auth/user-auth.module'
import { AppComponent } from './app.component';
import { ReadyComponent } from './ready/ready.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadyComponent,
  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
