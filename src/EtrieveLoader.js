/*eslint dot-notation:0*/
import {Origin} from 'aurelia-metadata';
import {DefaultLoader} from 'aurelia-loader-default';
import {PLATFORM} from 'aurelia-pal';

function ensureOriginOnExports(executed, name) {
    let target = executed;
    let key;
    let exportedValue;

    if (target.__useDefault) {
        target = target['default'];
    }

    Origin.set(target, new Origin(name, 'default'));

    for (key in target) {
        exportedValue = target[key];

        if (typeof exportedValue === 'function') {
        Origin.set(exportedValue, new Origin(name, key));
        }
    }

    return executed;
}

/**
* An Etrieve implementation of the Loader abstraction which works with SystemJS, RequireJS and Dojo Loader.
*/
export class EtrieveLoader extends DefaultLoader {
  
  constructor() {
    super();
  }
  
}

(function(require, requirejs, define) {
    if (!PLATFORM.global.System || !PLATFORM.global.System.import) {
      if (PLATFORM.global.__etrieve.requirejs && __etrieve.requirejs.s && __etrieve.requirejs.s.contexts && __etrieve.requirejs.s.contexts._ && __etrieve.requirejs.s.contexts._.defined) {
        PLATFORM.eachModule = function(callback) {
          let defined = __etrieve.requirejs.s.contexts._.defined;
          for (let key in defined) {
            try {
              if (callback(key, defined[key])) return;
            } catch (e) {}
          }
        };
      } else {
        PLATFORM.eachModule = function(callback) {};
      }
    
      EtrieveLoader.prototype._import = function(moduleId) {
        return new Promise((resolve, reject) => {
          PLATFORM.global.__etrieve.require([moduleId], resolve, reject);
        });
      };
    
      EtrieveLoader.prototype.loadModule = function(id) {
        let existing = this.moduleRegistry[id];
        if (existing !== undefined) {
          return Promise.resolve(existing);
        }
    
        return new Promise((resolve, reject) => {
          PLATFORM.global.__etrieve.require([id], m => {
            this.moduleRegistry[id] = m;
            resolve(ensureOriginOnExports(m, id));
          }, reject);
        });
      };
    
    
      EtrieveLoader.prototype.addPlugin = function(pluginName, implementation) {
        let nonAnonDefine = __etrieve.define;
        nonAnonDefine(pluginName, [], {
          'load': function(name, req, onload) {
            let result = implementation.fetch(name);
            Promise.resolve(result).then(onload);
          }
        });
      };
    }
}(__etrieve.require, __etrieve.requirejs, __etrieve.define));