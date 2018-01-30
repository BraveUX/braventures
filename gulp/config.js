'use strict';

module.exports = {
    // Just for my own sanity since some Hindi friend can't navigate properly
    productionBase: '/0000/2488',
    productionExtension: '.html',
    // Our main dist folder
    distFolder: './dist',
    // Here you add the paths to the scss files you get with Bower to import and work with.
    scssIncludes: ['./node_modules/'],
    // Stuff for UnCss
    uncssHtml: ['./dist/index.html'],
    uncssIgnore: [''],
    // Here you add the paths to the full-length js files from node_modules
    scriptFiles: [
        './node_modules/svg4everybody/dist/svg4everybody.min.js',
        './src/scripts/modules/_helpers.js', // Helper JS file for global functions
        './src/scripts/**/*.js'
    ],
    // Path to un-worked font files
    fonts: ['./src/fonts/*.otf', './src/fonts/*.ttf'],
    // Asset File Paths
    assets: ['./src/assets/**/*'],
    // Asset File Paths
    favicons: ['./src/favicons/**/*']
};
