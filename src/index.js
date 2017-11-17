import {Wheel} from './module.js';

class Car {
  constructor() {
    this.wheel = new Wheel();
  }
}

const car = new Car();
car.wheel.pump();
