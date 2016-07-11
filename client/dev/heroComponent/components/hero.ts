import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/common';

import { Hero } from '../hero';

@Component({
  selector: 'hero-form',
  templateUrl: 'heroComponent/templates/hero.html',
  styleUrls: ['heroComponent/styles/hero.css']
})
export class HeroFormComponent {
  active: boolean = true;

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }
  
  newHero() {
    this.model = new Hero(42, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
