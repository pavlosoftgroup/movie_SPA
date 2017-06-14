import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TopMenuRoutingModule} from './top-menu-routing.module';
import {TopMenuComponent} from './top-menu.component';
import {MdButtonModule, MdIconModule, MdMenuModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        TopMenuRoutingModule,
        MdMenuModule,
        MdButtonModule,
        MdIconModule,

    ],
    declarations: [TopMenuComponent],
    exports: [TopMenuComponent]
})
export class TopMenuModule {
}
