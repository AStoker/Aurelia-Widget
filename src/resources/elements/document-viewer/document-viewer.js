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
        // ShadyCSS.prepareTemplate(this.element, 'etrieve-document-viewer');
    }
    attached() {
        setTimeout(() => {

            debugger;
            let elem = this.element;//this.element.au.controller.view.viewFactory.template;

            let t = document.createElement('template');
            let innerHTML = elem.innerHTML || elem.shadowRoot.innerHTML;
            t.innerHTML = innerHTML;
            ShadyCSS.prepareTemplate(t, 'etrieve-document-viewer');
            console.log(t);
            debugger;
            ShadyCSS.styleElement(elem);
            // debugger;
            // ShadyCSS.styleElement(this.element);

        }, 3000);
    }
    detached() {

    }

    testChanged(newVal, oldVal) {
        // console.log(arguments)
    }
}