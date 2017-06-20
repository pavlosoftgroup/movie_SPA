import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonPageComponent} from "./person-page/person-page.component";
import {PersonService} from "./person.service";

const routes: Routes = [
  {path: 'persons', component: PersonListComponent },
  {path: 'persons/:id', component: PersonPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
      // PersonListComponent,
      // PersonPageComponent,
  ],
  exports: [RouterModule],
})
export class PersonRoutingModule { }
