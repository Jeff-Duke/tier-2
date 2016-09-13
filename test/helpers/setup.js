require('babel-register')({
  presets: ["react", "es2015"]
});
require('babel-polyfill');

global.document = require('jsdom').jsdom(`<head><meta charset="UTF-8"><title>Tier 2 Tests</title></head><body><div id="application"></div></body>`
);
