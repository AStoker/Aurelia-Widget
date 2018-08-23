

let polyfillScript = document.createElement('script');
polyfillScript.src = 'widget/libs/webcomponentsjs/webcomponents-loader.js';
polyfillScript.async = false;
document.head.appendChild(polyfillScript);

polyfillScript.onload = function() {
    WebComponents.waitFor(() => {
        // At this point we are guaranteed that all required polyfills have
        // loaded, and can use web components API's.
        // The standard pattern is to load element definitions that call
        // `customElements.define` here.
        // Note: returning the import's promise causes the custom elements
        // polyfill to wait until all definitions are loaded and then upgrade
        // the document in one batch, for better performance.
        return new Promise(resolve => {
            __etrieve.require(['widget/initializer.js'], () => {
                resolve();
            });
        })
    });
};

let cssScopingScript = document.createElement('script');
cssScopingScript.src = 'widget/libs/shadycss/scoping-shim.min.js';
cssScopingScript.async = false;
// cssScopingScript.type = 'module';
document.head.appendChild(cssScopingScript);
/*
{
            "name": "@webcomponents/shadycss",
            "path": "../node_modules/@webcomponents/shadycss",
            "main": "scoping-shim.min"
          },
*/