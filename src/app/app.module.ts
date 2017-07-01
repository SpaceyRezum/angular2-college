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
import { DiplomaDetailPageComponent } from './views/diploma-detail-page/diploma-detail-page.component';
import { TopicBoxComponent } from './components/topic-box/topic-box.component';
import { SelectedTopicDisplayComponent } from './partial-views/selected-topic-display/selected-topic-display.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChangeCareerContentComponent } from './partial-views/change-career-content/change-career-content.component';
import { CertificatesContentComponent } from './partial-views/change-career-content/certificates-content/certificates-content.component';
import { TravelStudyCanadaComponent } from './partial-views/travel-study-canada/travel-study-canada.component';
import { EnglishAsSecondLanguageComponent } from './partial-views/english-as-second-language/english-as-second-language.component';
import { EmployeeTrainingComponent } from './partial-views/employee-training/employee-training.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    DiplomaDetailPageComponent,
    TopicBoxComponent,
    SelectedTopicDisplayComponent,
    HeaderComponent,
    ContactFormComponent,
    FooterComponent,
    ChangeCareerContentComponent,
    CertificatesContentComponent,
    TravelStudyCanadaComponent,
    EnglishAsSecondLanguageComponent,
    EmployeeTrainingComponent
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
        path: 'diploma/:title',
        component: DiplomaDetailPageComponent
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
