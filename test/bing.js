/* eslint-env mocha */
const expect = require('chai').expect;

import greeting from '../src/bing.js';

describe('bing', () => {
  it('returns bing', () => {
    expect(greeting()).to.equal('bing!');
  });
});
