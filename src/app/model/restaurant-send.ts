export class RestaurantSend {

  name: string;
  description: string;
  menus: number [];
  address: string;
  starsNumber: number;
  averagePrice: number;

  // tslint:disable-next-line:ban-types
  constructor(values: Object = {}) {
    // Constructor initialization
    Object.assign(this, values);
  }
}
