'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _config = require('./config');

var _wxentApiRedis = require('wxent-api-redis');

var _wxentApiRedis2 = _interopRequireDefault(_wxentApiRedis);

var _wechatEnterprise = require('wechat-enterprise');

var _wechatEnterprise2 = _interopRequireDefault(_wechatEnterprise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();
server.use((0, _expressSession2.default)());

var wxapi = (0, _wxentApiRedis2.default)(_config.wxentSignupConfig.corpId, _config.wxentSignupConfig.secret, _config.wxentSignupConfig.agentId, _config.redisConfig.host, _config.redisConfig.port);

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('/wxe', (0, _wechatEnterprise2.default)(_config.wxentSignupConfig).text(function (msg, req, res, next) {
  res.reply(JSON.stringify(msg));
}).event(function (msg, req, res, next) {
  res.reply(JSON.stringify(msg));
}).middleware());

//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(_config.port, function () {
  /* eslint-disable no-console */
  console.log('The server is running at http://localhost:' + _config.port + '/');
});
//# sourceMappingURL=server.js.map