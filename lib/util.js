var qs       = require('querystring');
var url      = require('url');



/**
 * Choose a format depending on the given options.
 *
 * @param {Array.<Object>} formats
 * @param {Object} options
 * @return {Object|Error}
 */
exports.chooseFormat = function(formats, options) {

  if (typeof options.format === 'object') {
    return options.format;
  }
  
  options.filter = options.filter || 'mp4'

  if (options.filter) {
    formats = formats.filter(function(format) { return format.ext === options.filter; })
    if (formats.length === 0) {
      return new Error('no formats found with custom filter');
    }
  }

  var format;
  var quality = options.quality || 'highest';

  switch (quality) {
    case 'lowest':
      format = formats[0];
      break;
    case 'highest':
      format = formats[formats.length - 1];
      break;
    case 'medium':
      format = formats[Math.ceil(formats.length/2) - 1];
      break;
    default:
      var getFormat = function(itag) {
        for (var i = 0, len = formats.length; i < len; i++) {
          if (formats[i].format_id === 'http-' + itag) {
            return formats[i];
          }
        }
        return null;
      };
      if (Array.isArray(quality)) {
        for (var i = 0, len = quality.length; i < len; i++) {
          format = getFormat(quality[i]);
          if (format) { break; }
        }
      } else {
        format = getFormat(quality);
      }

  }

  if (!format) {
    // Load default loest video
    format = formats[0];
    // return new Error('No such format found: ' + quality);
  } else if (format.rtmp) {
    return new Error('rtmp protocol not supported');
  }
  return format;
};

/**
 * Deep assign object to another.
 *
 * @param {Object} target
 * @param {Object} source
 */
exports.assignDeep = function(target, source) {
  for (var key in source) {
    if (typeof source[key] === 'object' && source[key] != null &&
        target[key]) {
      exports.assignDeep(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
};
