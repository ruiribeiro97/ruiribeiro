import { Component } from '@angular/core';
import { routerTransition } from './router.animations';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'Rui Ribeiro';

  getState(outlet: { activatedRouteData: { state: any; }; }) {
    return outlet.activatedRouteData.state;
  }
}
