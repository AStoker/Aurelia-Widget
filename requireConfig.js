export function configureModuleLoader() {
  requirejs.config({
    'baseUrl': 'src/',
    'paths': {
      'root': 'src',
      'resources': 'resources',
      'elements': 'resources/elements',
      'attributes': 'resources/attributes',
      'valueConverters': 'resources/value-converters',
      'bindingBehaviors': 'resources/binding-behaviors',
      'text': '../node_modules/text/text',
      'aurelia-binding': '../node_modules/aurelia-binding/dist/amd/aurelia-binding',
      'aurelia-bootstrapper': '../node_modules/aurelia-bootstrapper/dist/amd/aurelia-bootstrapper',
      'aurelia-dependency-injection': '../node_modules/aurelia-dependency-injection/dist/amd/aurelia-dependency-injection',
      'aurelia-event-aggregator': '../node_modules/aurelia-event-aggregator/dist/amd/aurelia-event-aggregator',
      'aurelia-framework': '../node_modules/aurelia-framework/dist/amd/aurelia-framework',
      'aurelia-history': '../node_modules/aurelia-history/dist/amd/aurelia-history',
      'aurelia-history-browser': '../node_modules/aurelia-history-browser/dist/amd/aurelia-history-browser',
      'aurelia-loader': '../node_modules/aurelia-loader/dist/amd/aurelia-loader',
      'aurelia-loader-default': '../node_modules/aurelia-loader-default/dist/amd/aurelia-loader-default',
      'aurelia-logging': '../node_modules/aurelia-logging/dist/amd/aurelia-logging',
      'aurelia-logging-console': '../node_modules/aurelia-logging-console/dist/amd/aurelia-logging-console',
      'aurelia-metadata': '../node_modules/aurelia-metadata/dist/amd/aurelia-metadata',
      'aurelia-pal': '../node_modules/aurelia-pal/dist/amd/aurelia-pal',
      'aurelia-pal-browser': '../node_modules/aurelia-pal-browser/dist/amd/aurelia-pal-browser',
      'aurelia-path': '../node_modules/aurelia-path/dist/amd/aurelia-path',
      'aurelia-polyfills': '../node_modules/aurelia-polyfills/dist/amd/aurelia-polyfills',
      'aurelia-route-recognizer': '../node_modules/aurelia-route-recognizer/dist/amd/aurelia-route-recognizer',
      'aurelia-router': '../node_modules/aurelia-router/dist/amd/aurelia-router',
      'aurelia-task-queue': '../node_modules/aurelia-task-queue/dist/amd/aurelia-task-queue',
      'aurelia-templating': '../node_modules/aurelia-templating/dist/amd/aurelia-templating',
      'aurelia-templating-binding': '../node_modules/aurelia-templating-binding/dist/amd/aurelia-templating-binding',
      'app-bundle': '../scripts/app-bundle',
      'aurelia-bundle': '../scripts/aurelia-bundle'
    },
    'packages': [{
      'name': 'aurelia-templating-resources',
      'location': '../node_modules/aurelia-templating-resources/dist/amd',
      'main': 'aurelia-templating-resources'
    }, {
      'name': 'aurelia-templating-router',
      'location': '../node_modules/aurelia-templating-router/dist/amd',
      'main': 'aurelia-templating-router'
    }, {
      'name': 'aurelia-testing',
      'location': '../node_modules/aurelia-testing/dist/amd',
      'main': 'aurelia-testing'
    }],
    'stubModules': ['text'],
    'shim': {},
    'bundles': {
      'aurelia-bundle': ['aurelia-binding', 'aurelia-bootstrapper', 'aurelia-dependency-injection', 'aurelia-event-aggregator', 'aurelia-framework', 'aurelia-history', 'aurelia-history-browser', 'aurelia-loader', 'aurelia-loader-default', 'aurelia-logging', 'aurelia-logging-console', 'aurelia-metadata', 'aurelia-pal', 'aurelia-pal-browser', 'aurelia-path', 'aurelia-polyfills', 'aurelia-route-recognizer', 'aurelia-router', 'aurelia-task-queue', 'aurelia-templating', 'aurelia-templating-binding', 'aurelia-templating-resources', 'aurelia-templating-resources/abstract-repeater', 'aurelia-templating-resources/analyze-view-factory', 'aurelia-templating-resources/array-repeat-strategy', 'aurelia-templating-resources/attr-binding-behavior', 'aurelia-templating-resources/aurelia-hide-style', 'aurelia-templating-resources/binding-mode-behaviors', 'aurelia-templating-resources/binding-signaler', 'aurelia-templating-resources/compose', 'aurelia-templating-resources/css-resource', 'aurelia-templating-resources/debounce-binding-behavior', 'aurelia-templating-resources/dynamic-element', 'aurelia-templating-resources/else', 'aurelia-templating-resources/focus', 'aurelia-templating-resources/hide', 'aurelia-templating-resources/html-resource-plugin', 'aurelia-templating-resources/html-sanitizer', 'aurelia-templating-resources/if', 'aurelia-templating-resources/if-core', 'aurelia-templating-resources/map-repeat-strategy', 'aurelia-templating-resources/null-repeat-strategy', 'aurelia-templating-resources/number-repeat-strategy', 'aurelia-templating-resources/repeat', 'aurelia-templating-resources/repeat-strategy-locator', 'aurelia-templating-resources/repeat-utilities', 'aurelia-templating-resources/replaceable', 'aurelia-templating-resources/sanitize-html', 'aurelia-templating-resources/self-binding-behavior', 'aurelia-templating-resources/set-repeat-strategy', 'aurelia-templating-resources/show', 'aurelia-templating-resources/signal-binding-behavior', 'aurelia-templating-resources/throttle-binding-behavior', 'aurelia-templating-resources/update-trigger-binding-behavior', 'aurelia-templating-resources/with', 'aurelia-templating-router', 'aurelia-templating-router/route-href', 'aurelia-templating-router/route-loader', 'aurelia-templating-router/router-view', 'aurelia-testing', 'aurelia-testing/compile-spy', 'aurelia-testing/component-tester', 'aurelia-testing/view-spy', 'aurelia-testing/wait']
    }
  });
}
