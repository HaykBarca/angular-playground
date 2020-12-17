import { Component, OnInit } from '@angular/core';

import { RoutesConstants } from './shared/constants/routes.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public routeConstants = new RoutesConstants().routes;

  ngOnInit(): void {}
}
