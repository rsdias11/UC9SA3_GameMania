import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { LoginComponent } from './views/login/login.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProdutosComponent,
    LoginComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
