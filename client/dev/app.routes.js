"use strict";
var router_1 = require('@angular/router');
var home_1 = require('./homeComponent/components/home');
var todo_cmp_1 = require('./todo/components/todo-cmp');
var customer_1 = require('./customerComponent/components/customer');
var heroForms_1 = require('./formComponent/components/heroForms');
var routes = [
    { path: '', component: home_1.HomeComponent },
    { path: 'home', component: home_1.HomeComponent },
    { path: 'todo', component: todo_cmp_1.TodoCmp },
    { path: 'customer', component: customer_1.CustomerComponent },
    { path: 'forms', component: heroForms_1.HeroFormComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
