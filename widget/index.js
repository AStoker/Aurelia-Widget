

let scriptEntrySpecifier = document.querySelector('[data-entry]');
if (!scriptEntrySpecifier) {
    console.error('No entry specifier found');
}


let etrieveEntry = document.createElement('section');
etrieveEntry.setAttribute('etrieve-app', '');
etrieveEntry.style.display = 'none';

// let etrieveShadow = etrieveEntry.attachShadow({mode: 'open'});

// let aureliaContainer = document.createElement('section');
// aureliaContainer.setAttribute('aurelia-app', 'main');

// etrieveEntry.appendChild(aureliaContainer);

let vendorLoader = document.createElement('script');
// vendorLoader.setAttribute('data-main', 'aurelia-bootstrapper');
vendorLoader.src = '/widget/bundle-test.js';
vendorLoader.async = false;
vendorLoader.onload = function() {
    let bootstrapper = document.createElement('script');
    bootstrapper.id = "__etrieve_bootstrapper";
    bootstrapper.text = `
    //(function (require) {
        __etrieve.require(["aurelia-bootstrapper", "main"], function(bootstrapper, main){
            bootstrapper.bootstrap(main.configure);
        });
    //}(__etrieveRequire));
    `;
    scriptEntrySpecifier.parentNode.insertBefore(bootstrapper, scriptEntrySpecifier.nextSibling);
}

// aureliaContainer.appendChild(vendorLoader);



document.head.appendChild(vendorLoader);
