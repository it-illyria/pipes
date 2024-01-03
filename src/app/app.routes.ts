import { Routes } from '@angular/router';
import {ControlPanelComponent, EleraComponent, HeroComponent, PipeNetworkComponent} from './components';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hero', component: HeroComponent, pathMatch: "full" },
  {path: 'pipe-network/:path', component: PipeNetworkComponent},
  {path: 'control-panel', component: ControlPanelComponent},
  {path: 'elera', component: EleraComponent},
];

export const appRoutes = routes;
