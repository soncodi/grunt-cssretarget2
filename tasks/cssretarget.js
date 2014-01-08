/*
 * grunt-cssretarget
 * https://github.com/ruff/grunt-cssretarget
 *
 * Copyright (c) 2014 Alex Soncodi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var path = require('path');

  grunt.registerMultiTask('cssretarget', 'Retarget css image URLs to new destination.', function() {
    var options = this.options();
    var rgSrc = /(?:src=|url\(\s*)['"]?([^'"\)]+)['"]?\s*\)?/gm;

    this.filesSrc.forEach(function(file) {
      var orig = grunt.file.read(file);

      var retargeted = orig.replace(rgSrc, function(match, src) {
        var key = path.join(path.dirname(file), src);

        if (key.indexOf('data:') !== -1) {
          grunt.log.writeln(match.substr(0, 45) + '..' + ' skipped'.grey + ' ✔'.green);
          return match;
        }

        var retarget = options.prepend + path.relative(options.retarget, key);

        grunt.log.writeln(src + (' retarget =>\n').grey + retarget + ' ✔'.green);

        return match.replace(src, retarget);
      });

      if (orig !== retargeted) {
        grunt.file.write(file, retargeted);
      }
    });
  });
};
