
let polyfillScript = document.createElement('script');
polyfillScript.src = 'https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-loader.js';
// polyfillScript.setAttribute('defer', '');
document.head.appendChild(polyfillScript);

// let startScript = document.createElement('script');
// startScript.type = 'module';
// startScript.appendChild(document.createTextNode(`
// // WebComponents.waitFor(() => {
// //     return new Promise(resolve => {
//         let bundleScript = document.createElement('script');
//         bundleScript.src = 'widget/bundle-test.js';
//         // bundleScript.onload = resolve;
//         document.head.appendChild(bundleScript);
//     // });
// // });
// `));
// document.head.appendChild(startScript);
let bundleScript = document.createElement('script');
        bundleScript.src = 'widget/bundle-test.js';
        // bundleScript.onload = resolve;
        document.head.appendChild(bundleScript);

/*
<!-- Load polyfills; note that "loader" will load these async -->
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js" defer></script>

<!-- Load a custom element definitions in `waitFor` and return a promise -->
<script type="module">
  WebComponents.waitFor(() => {
    // At this point we are guaranteed that all required polyfills have
    // loaded, and can use web components API's.
    // The standard pattern is to load element definitions that call
    // `customElements.define` here.
    // Note: returning the import's promise causes the custom elements
    // polyfill to wait until all definitions are loaded and then upgrade
    // the document in one batch, for better performance.
    return import('my-element.js');
  });
</script>
*/
