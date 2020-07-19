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

    it('have qulity', function () {

        let stream = vidl('https://vimeo.com/183482793', { quality: '360p' });
        
        expect(stream).to.exist();
    });

});

describe('Error handling', function () {

    it('should have HTTP Error 404', function () {

        let stream = vidl('https://vimeo.com/183482793', { quality: '360p', format: 'mp4' });

        stream.on('error', function(err){
            //I should catch the error here!!
            //It seems doesn't work
            console.error(err);    
            expect(error).to.notNull();
        });

        stream.on('finish', function(){
            //Ok here, I launch my finish event.
        });
        // stream.pipe(fs.createWriteStream(filename));
    });

});
