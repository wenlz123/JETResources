requirejs.config({
  paths: {
    'knockout': 'https://static.oracle.com/cdn/jet/v4.1.0/3rdparty/knockout/knockout-3.4.0.debug',
    'jquery': 'https://static.oracle.com/cdn/jet/v4.1.0/3rdparty/jquery/jquery-3.1.1',
    'jqueryui-amd': 'https://static.oracle.com/cdn/jet/v4.1.0/3rdparty/jquery/jqueryui-amd-1.12.0',
    'ojs': 'https://static.oracle.com/cdn/jet/v4.1.0/default/js/debug',
    'ojL10n': 'https://static.oracle.com/cdn/jet/v4.1.0/default/js/ojL10n',
    'ojtranslations': 'https://static.oracle.com/cdn/jet/v4.1.0/default/js/resources',
    'text': 'https://static.oracle.com/cdn/jet/v4.1.0/3rdparty/require/text',
    'promise': 'https://static.oracle.com/cdn/jet/v4.1.0/3rdparty/es6-promise/es6-promise',
    'hammerjs': 'https://static.oracle.com/cdn/jet/v4.1.0/3rdparty/hammer/hammer-2.0.8',
    'signals': 'https://static.oracle.com/cdn/jet/v4.1.0/3rdparty/js-signals/signals',
    'ojdnd': 'https://static.oracle.com/cdn/jet/v4.1.0/3rdparty/dnd-polyfill/dnd-polyfill-1.0.0',
    'css': 'https://static.oracle.com/cdn/jet/v4.1.0/3rdparty/require-css/css',
    'customElements': 'https://static.oracle.com/cdn/jet/v4.1.0/3rdparty/webcomponents/custom-elements.min',
    'proj4js': 'https://static.oracle.com/cdn/jet/v4.1.0/3rdparty/proj4js/dist/proj4'
  },
  shim: {
    'jquery': {
      exports: ['jQuery', '$']
    }
  },
});
