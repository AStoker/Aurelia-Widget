import gulp from 'gulp';
import rjs from 'requirejs';

export default function widgetCompile(cb) {
    return rjs.optimize({
        baseUrl: "./",
        namespace: "__etrieve",
        optimize: "none",
        // wrap: {
        //   start: "(function() {",
        //   end: "}())"
        // },
        include: [
            "scripts/require-bundle.js",
            "scripts/config-bundle.js",
            "scripts/app-bundle.js"
        ],
        out: "widget/bundle-test.js"
    }, buildResponse => {
        console.log(buildResponse);
        cb();
    }, cb);
}
