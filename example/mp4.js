var fs = require('fs');
var vidl = require('..');

stream = vidl('https://vimeo.com/183482793', {quality: '360p'});

stream.pipe(fs.createWriteStream('./video.mp4'));

stream.on('data', function(chunk) {
  console.log('downloaded', chunk.length);
});

stream.on('end', function() {
  console.log('Finished');
});