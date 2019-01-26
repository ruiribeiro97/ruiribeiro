import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatListModule, MatIconModule, MatInputModule, MatButtonModule, MatCardModule, MatDividerModule } from '@angular/material';
import { EmailComponent } from './components/contact/email/email.component';
import { OthersComponent } from './components/contact/others/others.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BitbucketService } from './services/bitbucket.service';
import { GithubService } from './services/github.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EmailComponent,
    OthersComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [BitbucketService, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
