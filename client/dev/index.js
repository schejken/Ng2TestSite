"use strict";
var forms_1 = require('@angular/forms');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
// import {TodoCmp} from './todo/components/todo-cmp';
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    app_routes_1.APP_ROUTER_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
]);
