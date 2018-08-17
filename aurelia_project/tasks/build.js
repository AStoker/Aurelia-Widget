import gulp from 'gulp';
import {CLIOptions, build as buildCLI} from 'aurelia-cli';
import transpile from './transpile';
import widgetCompile from './widget-compile';
import processMarkup from './process-markup';
import processCSS from './process-css';
import copyFiles from './copy-files';
import copyLibraries from './copy-libraries';
import watch from './watch';
import project from '../aurelia.json';

let build = gulp.series(
  readProjectConfiguration,
  gulp.parallel(
    transpile,
    processMarkup,
    processCSS,
    copyFiles,
    copyLibraries
  ),
  writeBundles,
  widgetCompile
);

let main;

if (CLIOptions.taskName() === 'build' && CLIOptions.hasFlag('watch')) {
  main = gulp.series(
    build,
    (done) => { watch(); done(); }
  );
} else {
  main = build;
}

function readProjectConfiguration() {
  return buildCLI.src(project);
}

function writeBundles() {
  return buildCLI.dest();
}

export { main as default };
