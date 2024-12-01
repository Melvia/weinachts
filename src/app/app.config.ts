import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';

import {routes} from './app.routes';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";

// определение маршрутов
const appRoutes: Routes =[
  { path: "", component: HomeComponent},
  { path: "about", component: AboutComponent},
  // { path: "**", component: NotFoundComponent }
  //  { path: "contact", redirectTo: "/about", pathMatch:"full"},
  { path: "**", redirectTo: "/"}
];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes)]
};

