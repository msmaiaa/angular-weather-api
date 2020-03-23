import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { GraphicsComponent } from './graphics/graphics.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSearchComponent,
    FooterComponent,
    GraphicsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
