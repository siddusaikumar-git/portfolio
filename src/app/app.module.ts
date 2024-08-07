import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { BackgroundComponent } from './background/background.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './projects/project/project.component';
import { SkillComponent } from './skills/skill/skill.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsComponent,
    BackgroundComponent,
    ContactComponent,
    ProjectComponent,
    SkillComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
