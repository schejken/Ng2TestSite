import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './homeComponent/components/home';
import { TodoCmp } from './todo/components/todo-cmp';
import { CustomerComponent } from './customerComponent/components/customer';
import { HeroFormComponent } from './formComponent/components/heroForms';

const routes: RouterConfig = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'todo', component: TodoCmp},
    { path: 'customer', component: CustomerComponent},
    { path: 'forms', component: HeroFormComponent}
]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]