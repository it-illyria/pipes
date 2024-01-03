import { Routes } from '@angular/router';
import {HeroComponent, PipeNetworkComponent} from './components';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hero', component: HeroComponent, pathMatch: "full" },
  {path: 'pipe-network', component: PipeNetworkComponent},
  {path: 'control-panel', component: PipeNetworkComponent},
  {path: 'elera', component: PipeNetworkComponent},
];

export const appRoutes = routes;
