"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var router_1 = require('@angular/router');
var todo_service_1 = require('./services/todo-service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Development App';
        this.imgSrc = 'assets/images/angularIcon.png';
        this.imgWidth = 150;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <img \n        [src]=\"imgSrc\" \n        [style.width]=\"imgWidth\" \n        />\n    <h1>{{title}}</h1>\n    <nav class=\"navbar navbar-default\">\n        <ul class=\"nav navbar-nav\">\n            <li><a [routerLink]=\"['/home']\">Home Component</a></li>\n            <li><a [routerLink]=\"['/todo']\">ToDo Component</a></li>\n            <li><a [routerLink]=\"['/customer']\">Customer</a></li>\n            <li><a [routerLink]=\"['/forms']\">Forms</a></li>\n        </ul>\n    </nav>\n    <div>\n    <router-outlet></router-outlet>\n    </div>\n    ",
            directives: [
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [
                http_1.HTTP_PROVIDERS,
                todo_service_1.TodoService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
