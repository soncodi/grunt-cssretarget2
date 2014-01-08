# grunt-cssretarget

> Retarget css image URLs to new destination.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cssretarget --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssretarget');
```

## The "cssretarget" task

### Overview
In your project's Gruntfile, add a section named `cssretarget` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssretarget: {
    prep: {
      options: {
        retarget: 'dist',
        prepend: '/'
      },
      files: {
        src: ['dist/vendor/**/*.css']
      }
    },
  },
});
```

### Options

#### options.retarget
Type: `String`
Default value: `''`

The new directory root relative to which your assets will live. You should concatenate all your css files while maintaining i.e. '/vendor/some_lib/img/image.png' filestructure for images.

#### options.prepend
Type: `String`
Default value: `''`

String prepended to each asset URL.

### Release History
#### 0.1.0 - 0.1.1
  Initial release
