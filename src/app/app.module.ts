import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

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
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChangeCareerContentComponent } from './components/change-career-content/change-career-content.component';
import { CertificatesContentComponent } from './components/change-career-content/certificates-content/certificates-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopicDetailPageComponent,
    PageNotFoundComponent,
    TopicBoxComponent,
    SelectedTopicDisplayComponent,
    HeaderComponent,
    ContactFormComponent,
    FooterComponent,
    ChangeCareerContentComponent,
    CertificatesContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
