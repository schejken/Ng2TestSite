import {Component} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TodoService } from './services/todo-service';

@Component({
    selector: 'my-app',
    template: `
    <img 
        [src]="imgSrc" 
        [style.width]="imgWidth" 
        />
    <h1>{{title}}</h1>
    <nav class="navbar navbar-default">
        <ul class="nav navbar-nav">
            <li><a [routerLink]="['/home']">Home Component</a></li>
            <li><a [routerLink]="['/todo']">ToDo Component</a></li>
            <li><a [routerLink]="['/customer']">Customer</a></li>
            <li><a [routerLink]="['/forms']">Forms</a></li>
        </ul>
    </nav>
    <div>
    <router-outlet></router-outlet>
    </div>
    `,
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        HTTP_PROVIDERS,
        TodoService
    ]
})
export class AppComponent {
    title: string = 'Development App';
    imgSrc: string = 'assets/images/angularIcon.png';
    imgWidth: number = 150;
}