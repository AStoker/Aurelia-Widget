import { ComponentRegistry } from 'aurelia-web-components';
import environment from './environment';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .globalResources('resources/elements/document-viewer/document-viewer');

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }

    if (environment.testing) {
        aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => {
        let registry = aurelia.container.get(ComponentRegistry);

        //The following line takes all global resource custom elements and registers them as web components.
        //Once the element is registered, in-page elements will begin rendering.
        registry.registerAllGlobalElements();
    });
}
