var fs = require('fs');
var vidl = require('..');

stream = vidl('https://vimeo.com/1834827932', {quality: '360p'});

stream.pipe(fs.createWriteStream('./video.mp4'));
stream.on('error', function(err) {
  console.error(err);   
  console.info("Steam emit the error") 
});

stream.on('data', function(chunk) {
  console.log('downloaded', chunk.length);
});

stream.on('end', function() {
  console.log('Finished');
});