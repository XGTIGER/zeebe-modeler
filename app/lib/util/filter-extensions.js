'use strict';

var map = require('lodash/collection/map');

var EXTENSIONS = {
  all: {
    name: 'All files',
    extensions: ['*']
  },
  supported: {
    name: 'All supported',
    extensions: [ 'bpmn', 'dmn', 'xml' ]
  },
  images: {
    name: 'All images',
    extensions: [ 'png', 'jpeg', 'svg' ]
  },
  bpmn: {
    name: 'BPMN diagram',
    extensions: [ 'bpmn', 'xml' ]
  },
  dmn: {
    name: 'DMN table',
    extensions: [ 'dmn', 'xml' ]
  },
  png: {
    name: 'PNG Image',
    extensions: [ 'png' ]
  },
  jpeg: {
    name: 'JPEG Image',
    extensions: [ 'jpeg' ]
  },
  svg: {
    name: 'SVG Image',
    extensions: ['svg']
  }
};

/**
 * Dialog filters based on file type(s).
 *
 * The passed argument can be a single string or a list of strings
 * for which extension filter objects are being returned.
 *
 * @param {String|Array} types
 *
 * @return {Array<Object>} extension filters
 */
function getFilters(types) {

  if (typeof types === 'string') {
    types = [ types ];
  }

  return map(types, function(fileType) {
    return EXTENSIONS[fileType];
  });
}

module.exports = getFilters;