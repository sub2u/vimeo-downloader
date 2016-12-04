// Load modules

var Code = require('code');
var urlParse = require('url').parse;
var http = require('http');
var vidl = require('..');
var Lab = require('lab');


// Declare internals

var internals = {};


// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;


describe('Proxy', function () {

    it('have qulity', function (done) {

        var stream = vidl('https://vimeo.com/183482793', {
          quality: '360p'
        });
        expect(stream).to.exist();
        done();
    });

});
