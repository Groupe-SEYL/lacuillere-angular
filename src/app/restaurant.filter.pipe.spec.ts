import { RestaurantFilterPipe } from './restaurantfilter.pipe';

describe('Restaurant.FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new RestaurantFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
