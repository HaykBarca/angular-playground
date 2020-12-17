import { RoutesEnum } from '../enums/routes.enum';
import { RoutesModel } from '../models/routes.model';

export class RoutesConstants {
  private routesEnum = RoutesEnum;

  public routes: RoutesModel[] = [
    { id: 1, path: this.routesEnum.home, name: 'Home' },
    { id: 1, path: this.routesEnum.cdkScrolling, name: 'CDK Scrolling' },
  ];
}
