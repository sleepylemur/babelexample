/* eslint-env mocha */
import greeting from '../src/bing.js';
const expect = require('chai').expect;

describe('bing', () => {
  it('returns bing', () => {
    expect(greeting()).to.equal('bing');
  });
});
