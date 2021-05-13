import { RoutesEnum } from '../enums/routes.enum';
import { RoutesModel } from '../models/routes.model';

export class RoutesConstants {
  private routesEnum = RoutesEnum;

  public routes: RoutesModel[] = [
    { id: 1, path: this.routesEnum.home, name: 'Home' },
    { id: 2, path: this.routesEnum.cdkScrolling, name: 'CDK Scrolling' },
    { id: 3, path: this.routesEnum.lazyPage, name: 'Lazy Page' },
    { id: 4, path: this.routesEnum.rxjs, name: 'RXJS' },
    { id: 5, path: this.routesEnum.typescript, name: 'TypeScript' },
  ];
}
