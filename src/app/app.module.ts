import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { Ng2SimplePageScrollModule } from 'ng2-simple-page-scroll';

import { NgModule, 
         animate, 
         state, 
         style, 
         transition, 
         trigger } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { TopicDetailPageComponent } from './views/topic-detail-page/topic-detail-page.component';
import { TopicBoxComponent } from './components/topic-box/topic-box.component';
import { SelectedTopicDisplayComponent } from './components/selected-topic-display/selected-topic-display.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopicDetailPageComponent,
    PageNotFoundComponent,
    TopicBoxComponent,
    SelectedTopicDisplayComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SimplePageScrollModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },{
        path: 'topic/:name',
        component: TopicDetailPageComponent
      },{
        path: '**',
        component: PageNotFoundComponent,
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
