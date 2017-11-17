(function () {
'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var Wheel = function () {
  function Wheel() {
    classCallCheck(this, Wheel);
  }

  Wheel.prototype.pump = function pump() {
    console.log('puuuuf');
  };

  return Wheel;
}();

var Car = function Car() {
  classCallCheck(this, Car);

  this.wheel = new Wheel();
};

var car = new Car();
car.wheel.pump();

}());
