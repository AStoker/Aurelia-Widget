

let scriptEntrySpecifier = document.querySelector('[data-entry]');
if (!scriptEntrySpecifier) {
    console.error('No entry specifier found');
}

let entryId = scriptEntrySpecifier.dataset.entry;
if (!entryId) {
    console.error('No entry id found');
}

let entryElements = document.querySelectorAll(`#${entryId}`);
if (entryElements.length > 1) {
    console.error('More than one entry element found');
}
if (entryElements.length < 1) {
    console.error('No entry element found');
}
let entryElement = entryElements[0];

let aureliaEntry = document.createElement('section');
aureliaEntry.setAttribute('aurelia-app', '');

entryElement.appendChild(aureliaEntry);

let entryScript = document.createElement('script');
entryScript.src = 'widget/initialize.js';
entryScript.type = 'module';

entryElement.appendChild(entryScript);