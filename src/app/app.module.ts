import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VowelConsonantComponent } from './components/vowel-consonant/vowel-consonant.component';

@NgModule({
  declarations: [AppComponent, VowelConsonantComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
