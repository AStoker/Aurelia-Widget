__etrieve.require(["aurelia-bootstrapper", "aurelia-pal", "EtrieveLoader", "main"], function(bootstrapper, aureliaPal, loader, main){
    aureliaPal.PLATFORM.Loader = loader.EtrieveLoader;
    bootstrapper.bootstrap(main.configure);
});