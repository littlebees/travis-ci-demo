'use strict';

var expect = require('chai').expect;
var {hello, node} = require('./hello');

describe('run hello.js', function() {
  it('should return "Hello World"', function() {
    expect(hello()).to.equal('Hello World');
  });
  it('should return "Hello Node"', function() {
    expect(node()).to.equal('Hello Node');
  });
});
