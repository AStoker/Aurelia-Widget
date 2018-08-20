import { inject, bindable, useShadowDOM } from 'aurelia-framework';
// import '@webcomponents/shadycss';

@useShadowDOM() // Edge support is not there yet, so still code as if ShadowDOM doesn't exist (https://developer.microsoft.com/en-us/microsoft-edge/platform/status/shadowdom)
@inject(Element)
export class EtrieveDocumentViewer {
    @bindable test;

    constructor(element) {
        this.element = element;
    }

    bind() {
        this.testChanged(this.test);
        // debugger;
        // ShadyCSS.prepareTemplate(this.element, 'etrieve-document-viewer');
    }
    attached() {
        // debugger;
        // ShadyCSS.styleElement(this.element);
    }
    detached() {

    }

    testChanged(newVal, oldVal) {
        // console.log(arguments)
    }
}