var urlParse = require('url').parse;
var http = require('http');
var vidl = require('..');

var stream = vidl('https://vimeo.com/183482793', {
  quality: '360p'
});

console.log('Starting Download');

stream.on('data', function(chunk) {
  console.log('downloaded', chunk.length);
});

stream.on('end', function() {
  console.log('Finished');
});
