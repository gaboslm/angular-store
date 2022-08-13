import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FirstErrorPipe } from './pipes/first-error.pipe';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FundamentosComponent } from './fundamentos/fundamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstErrorPipe,
    LoginComponent,
    FundamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
