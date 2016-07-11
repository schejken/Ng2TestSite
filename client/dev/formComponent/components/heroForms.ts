import {
  Component,
  Inject
} from '@angular/core';

@Component({
  templateUrl: 'formComponent/templates/heroForms.html',
  styleUrls: ['formComponent/styles/heroForms.css']
})
export class HeroFormComponent {
  name: string = `yo, I'm your component :D`;
}
