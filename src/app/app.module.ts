import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/inMemoryDataService/in-memory-data.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessageComponent } from './components/message/message.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { SaveFormComponent } from './components/save-form/save-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { SubjectSearchComponent } from './components/subject-search/subject-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    StartPageComponent,
    MainPageComponent,
    FooterComponent,
    MessageComponent,
    SubjectListComponent,
    ModalComponent,
    SaveFormComponent,
    EditFormComponent,
    SubjectSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
