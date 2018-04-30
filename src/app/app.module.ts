import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import {ImgCardComponent} from './img-card/img-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,

    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
