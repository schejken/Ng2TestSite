import {
  Component,
  Inject
} from '@angular/core';

@Component({
  templateUrl: 'customerComponent/templates/customer.html',
  styleUrls: ['customerComponent/styles/customer.css']
})
export class CustomerComponent {
  name: string = `yo, I'm your customer component :D`;
}
