/* jslint node: true */
/* global describe: false, it: false */
'use strict';

var publicalerts = require('../'),
    expect       = require('chai').expect;

// Tests

describe('publicalerts', function() {

  describe('search()', function() {

    it.skip('should get information', function(done) {
      publicalerts.search({location: 'texas'}, function(err, result) {
        if(err) return done(err);

        expect(err).to.be.equal(undefined);
        expect(result).to.be.a('array');
        expect(result).to.have.property('length');

        // There is no guarantee for these part but it is good for observation
        if(result.length > 0) {
          expect(result[0]).to.be.a('array');
          expect(result[0]).to.have.property('length').to.be.equal(29);
          expect(result[0][3]).to.be.a('string');
          expect(result[0][4]).to.be.a('array');
          expect(result[0][5]).to.be.a('string');
          expect(result[0][8]).to.be.a('array');
          expect(result[0][9]).to.be.a('string');
          expect(result[0][11]).to.be.a('array');
          expect(result[0][12]).to.be.a('string');
          expect(result[0][13]).to.be.a('string');
          expect(result[0][14]).to.be.a('string');
          expect(result[0][15]).to.be.a('string');
          expect(result[0][16]).to.be.a('string');
          expect(result[0][17]).to.be.a('string');
          expect(result[0][27]).to.be.a('string');
        }

        done();
      });
    });
  });
});