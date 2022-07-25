import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {AddFridgeComponent} from "./components/add-fridge/add-fridge.component";
import {FridgesListComponent} from "./components/fridges-list";

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'fridges', component: FridgesListComponent },
  { path: 'fridges/add', component: AddFridgeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
