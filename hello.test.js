'use strict';

var expect = require('chai').expect;
var hi = require('./hello');

describe('run hello.js', function() {
  it('should return "Hello World"', function() {
    expect(hi.hello()).to.equal('Hello World');
  });
  it('should return "Hello Node"', function() {
    expect(hi.node()).to.equal('Hello Node');
  });
});
