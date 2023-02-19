const ServerImpl = require("../reflectjs/dist/server/server-impl").default;

new ServerImpl({
  port: 3001,
  rootPath: process.cwd() + '/docroot',
  trustProxy: false,
  assumeHttps: false,
  clientJsFilePath: '../reflectjs/dist/client.js',
  pageLimit: {
    windowMs: 5000,
    maxRequests: 50
  }
});
