!function (modules) {
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;var module = installedModules[moduleId] = { i: moduleId, l: !1, exports: {} };return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
  }var installedModules = {};__webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
    __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, { configurable: !1, enumerable: !0, get: getter });
  }, __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ? function () {
      return module.default;
    } : function () {
      return module;
    };return __webpack_require__.d(getter, "a", getter), getter;
  }, __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
}([function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  Object.defineProperty(__webpack_exports__, "__esModule", { value: !0 });var __WEBPACK_IMPORTED_MODULE_0__module_js__ = __webpack_require__(1);
  var Car = function Car() {
    babelHelpers.classCallCheck(this, Car);
    this.wheel = new __WEBPACK_IMPORTED_MODULE_0__module_js__.a();
  };

  new Car().wheel.pump();
}, function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  __webpack_require__.d(__webpack_exports__, "a", function () {
    return Wheel;
  });
  var Wheel = function () {
    function Wheel() {
      babelHelpers.classCallCheck(this, Wheel);
    }

    Wheel.prototype.pump = function pump() {
      console.log("puuuuf");
    };

    return Wheel;
  }();
}]);
