import { Menu } from './menu';


export class Restaurant {
    id: number;
    name: string;
    description: string;
    menus: Menu[];
    address: string;
    starsNumber: number;
    averagePrice: number;

  // tslint:disable-next-line:ban-types
  constructor(values: Object = {}) {
    // Constructor initialization
    Object.assign(this, values);
  }
}
