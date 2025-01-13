import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {QuestionsComponent} from "./questions/questions.component";
import {WinComponent} from "./win/win.component";

// определение маршрутов
const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "win", component: WinComponent},
  {path: "questions/:id", component: HomeComponent},
  {path: "questions", component: QuestionsComponent},
  {path: "**", redirectTo: ""}
];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(appRoutes)]
};

