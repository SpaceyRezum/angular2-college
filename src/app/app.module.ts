import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopicBoxComponent } from './topic-box/topic-box.component';
import { SelectedTopicDisplayComponent } from './selected-topic-display/selected-topic-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicBoxComponent,
    SelectedTopicDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
