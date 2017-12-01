//Register babel to transpile our tests before it runs
require('babel-register')();


//Disable webpack feature which Mocha doesnt understand
require.extensions['.css'] = function(){};
