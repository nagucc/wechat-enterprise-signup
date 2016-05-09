/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */
/* jscs:disable maximumLineLength */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';

export const analytics = {

  // https://analytics.google.com/
  google: { trackingId: process.env.GOOGLE_TRACKING_ID || 'UA-XXXXX-X' },

};

export const auth = {

  jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || '186244551745631',
    secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc',
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd',
  },

  // https://apps.twitter.com/
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
    secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ',
  },

};


export const wxentConfig = {
  corpId: process.env.WXE_CORPID,
  secret: process.env.WXE_SECRET,
  agentId: process.env.WXE_AGENTID || 0,
  token: process.env.WXE_TOKEN || 'zAGTHr1H6adprX33J',
  encodingAESKey: process.env.WXE_AES_KEY || 'H2GL9I42k1CTFiQVizcxdeotXSIBmaMtpqT5Kz172An',
  departmentId: process.env.NEW_USER_DEPARTMENT_ID || 1
};

export const redis = {
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379
};

export const defaultMessage = process.env.DEFAULT_MESSAGE || '欢迎使用云大小薇，如果您有任何意见或建议，抑或是需要帮助，请拨打信息技术中心服务电话：65031141';
export const welcomeMessage = process.env.WELCOME_MESSAGE || '欢迎使用自助注册。';
export const doneMessage = process.env.DONE_MESSAGE || '您已成功注册!';
export const helpMessage = process.env.HELP_MESSAGE || '如需帮助，请拨打65031141。'
