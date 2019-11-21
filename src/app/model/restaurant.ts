import { Menu } from './menu';


export class Restaurant {
    id: number;
    name: string;
    description: string;
    menus: Menu[];
    address: string;
    starsNumber: number;
    averagePrice: number;
}
