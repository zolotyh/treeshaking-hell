import {Wheel} from './module.js';
//import {cube} from './lib.js';

class Car {
  constructor() {
    this.wheel = new Wheel();
  }
}

const car = new Car();
car.wheel.pump();

//console.log(cube(10));
