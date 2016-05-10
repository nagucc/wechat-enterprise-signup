'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 配置文件
 */

var port = exports.port = process.env.SITE_PORT || 5757;

/**
 * 微信企业号信息
 */
var wxentSignupConfig = exports.wxentSignupConfig = {
  corpId: process.env.WXE_CORPID,
  secret: process.env.WXE_SECRET,
  angetId: process.env.WXE_AGENTID || 1,
  newUserDptId: process.env.NEW_USER_DEPARTMENT_ID || 1,
  token: process.env.WXE_TOKEN
};

var mobileSignupEvent = exports.mobileSignupEvent = process.env.MOBILE_SIGNUP_EVENT || 'mobile_signup';

/**
 * Redis 数据库信息
 */

var redisConfig = exports.redisConfig = {
  host: process.env.HOST_REDIS || 'localhost',
  port: process.env.PORT_REDIS || 6379
};
//# sourceMappingURL=config.js.map