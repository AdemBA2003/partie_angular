import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
  animations: [
    trigger('Grow', [
      state('inactive', style({
        transform: 'scale(0.1)'
      })),
      state('active', style({
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('800ms ease-in')),
    ])
  ]
})

export class Test2Component {
  showPhrase: boolean = true; // Afficher la phrase dès le chargement
  private stateGrow : string = "inactive"; 
  constructor() { }

  ngOnInit() {
 
}

}


