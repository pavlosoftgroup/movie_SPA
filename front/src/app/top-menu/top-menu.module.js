"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var top_menu_routing_module_1 = require("./top-menu-routing.module");
var top_menu_component_1 = require("./top-menu.component");
var material_1 = require("@angular/material");
var TopMenuModule = (function () {
    function TopMenuModule() {
    }
    return TopMenuModule;
}());
TopMenuModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            top_menu_routing_module_1.TopMenuRoutingModule,
            material_1.MdMenuModule,
            material_1.MdButtonModule,
            material_1.MdIconModule,
        ],
        declarations: [top_menu_component_1.TopMenuComponent],
        exports: [top_menu_component_1.TopMenuComponent]
    })
], TopMenuModule);
exports.TopMenuModule = TopMenuModule;
//# sourceMappingURL=top-menu.module.js.map