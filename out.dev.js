var __wpcc;
if (typeof __wpcc === 'undefined') __wpcc = {};
(function(__wpcc) {
  'use strict';
  var a;
  'undefined' === typeof a && (a = function() {});
  a.p = '';
  a.src = function(e) {
    return a.p + '' + e + '.out.dev.js';
  };
}.call(this, __wpcc));

var __wpcc;
if (typeof __wpcc === 'undefined') __wpcc = {};
(function(__wpcc) {
  'use strict';
  var b = function() {},
    c = function() {},
    d = {};
  b.prototype.pump = function() {
    window.console.log('puuuuf');
  };
  c.prototype.turn = function() {
    window.console.log('turn');
  };
  d.Wheel = b;
  d.Rudder = c;
  new function() {
    this.wheel = new d.Wheel();
  }().wheel.pump();
}.call(this, __wpcc));
