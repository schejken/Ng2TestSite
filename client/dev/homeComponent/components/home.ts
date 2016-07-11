import { Component, Inject } from '@angular/core';

import { HeroFormComponent } from '../../heroComponent/components/hero';

@Component({
  templateUrl: 'homeComponent/templates/home.html',
  styleUrls: ['homeComponent/styles/home.css'],
  directives: [HeroFormComponent] 
})
export class HomeComponent {
  name: string = `yo, I'm your component :D`;
}
