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
  config: any;
  fullpage_api: any;

  constructor() {
    this.config = {

      // fullpage options
      licenseKey: null,
      anchors: ['home', 'about', 'projects', 'contact'],
      menu: '#menu',
      lockAnchors: true,

      // fullpage callbacks
      afterResize: () => {
        // console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        // console.log(origin.index);
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  getState(outlet: { activatedRouteData: { state: any; }; }) {
    return outlet.activatedRouteData.state;
  }
}
