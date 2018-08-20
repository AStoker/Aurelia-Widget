import { inject, bindable, containerless, inlineView, Loader } from 'aurelia-framework';

@containerless()
@inlineView('<template><style ref="styleTag"></style></template>')
@inject(Element, Loader)
export class StyleInject {

    @bindable from;
    @bindable isolate;

    constructor(element, loader) {
        this.element = element;
        this.loader = loader;

        this._relativeUrl = '';
        this._isolateCSS = false;
    }

    bind() {
        console.log(this.isolate);
        //this.element.au.controller.view.resources.viewUrl; // Current view's url
        //this.element.au.controller.scope.resources.viewUrl // Current parent (scope) view's url
        let containerUrlParts = this.element.au.controller.scope.resources.viewUrl.split('/');
        containerUrlParts.pop();
        this._relativeUrl = containerUrlParts.join('/');

        this.isolateChanged(this.isolate);
        this.fromChanged(this.from);
    }
    
    attached() {
        // console.log(this.element.au)
        // console.log(this.from);
    }

    fromChanged(from, oldLocation) {
        if (from) {
            let url = normalize(`${this._relativeUrl}/${from}`);
            this.loader.loadText(url)
                .then(text => {
                    this.insertStyle(text);
                });
        }
    }
    isolateChanged(isolate) {
        /*

        undefined - false
        null - false
        false - false
        "false" - false

        "" - true
        "true" - true
        true - true
        "anything" - true

        */
        switch (isolate) {
            case undefined:
            case null:
            case false:
            case "false":
                this._isolateCSS = false;
                break;
            case "":
            case true:
            case "true":
            default:
                this._isolateCSS = true;
        }
    }

    insertStyle(contents) {
        if (this._isolateCSS) {
            
        }
        let styleContents = document.createTextNode(contents);
        this.styleTag.appendChild(styleContents);
    }

}

function normalize(href) {
    var link = document.createElement("a");
    link.href = href;
    return link.pathname.replace(/^\//, '');
}