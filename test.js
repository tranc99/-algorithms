var assert = require('assert');
var linearSearch = require('./linear_search');

describe('Linear Search', function() {
  describe('search', function() {
    it('should return index of existing target', function() {
      assert.equal(3, linearSearch.search([6, 8, 10, 12, 14, 16, 18], 12));
    });

    it('should return -1 when target is not in list', function() {
      assert.equal(-1, linearSearch.search([2, 4, 6, 8], 5));
    });
  });
});
