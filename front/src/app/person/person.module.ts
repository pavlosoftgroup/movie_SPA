import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonPageComponent } from './person-page/person-page.component';
import {PersonService} from "./person.service";
import {MdCardModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    PersonRoutingModule,
      MdCardModule,
  ],
  declarations: [PersonListComponent, PersonPageComponent],
  providers: [PersonService,],

})
export class PersonModule { }
