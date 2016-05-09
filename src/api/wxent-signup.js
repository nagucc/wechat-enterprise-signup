/*
使用基于微信企业号的用户认证
*/

import { host, wxentConfig as wxcfg, redis,
  defaultMessage, welcomeMessage, doneMessage, helpMessage } from '../config';
import { Router } from 'express';
import API from 'wxent-api-redis';
import wechat from 'wechat-enterprise';
import {handleEvent, handleText} from 'wechat-message-handlers';
import {v4} from 'uuid';
import wxerr from 'wx-errmsg';

const router = new Router();
const wxapi = API(wxcfg.corpId, wxcfg.secret, wxcfg.agentId, redis.host, redis.port);
let TextHandlers = {

  /*
处理用户输入的姓名
   */
  ready_for_name: (msg, req, res) => {
    req.wxsession.user_name = msg.Content;
    req.wxsession.mobile_signup = 'ready_for_mobile';
    res.reply(`请输入您的手机号码：`);
  },
  ready_for_mobile: (msg, req, res) => {
    let mobile = msg.Content;
    let name = req.wxsession.user_name;
    wxapi.createUser({
      userid: 'self_registry_' + v4().replace(/-/g, ''),
      name, mobile
    }, (err, result) => {
      if(err) res.reply(JSON.stringify(err));
      else res.reply(doneMessage);
    });
  },
  unhandled: (msg, req, res) => {
    if(msg.Content === '#test#') {
      res.reply(JSON.stringify(msg));
      return;
    }
    if(defaultMessage)
      res.reply(defaultMessage);
  }
}
let EventHandlers = {
  /*
    开始进入自主注册的程序
   */
  mobile_signup: (msg, req, res, next) => {
    let str = `${welcomeMessage}\n请输入您的姓名：`
    req.wxsession.mobile_signup = 'ready_for_name';
    res.reply(str);
  },
  signup_help: (msg, req ,res) => {
    res.reply(helpMessage);
  }
}

let getTextHandler = (msg, req) => {
  if(req.wxsession && req.wxsession.mobile_signup) {
    return TextHandlers[req.wxsession.mobile_signup];
  } else {
    return TextHandlers.unhandled;
  }
}
router.use('/', wechat(wxcfg, wechat.text(handleText(getTextHandler))
  .event(handleEvent(EventHandlers))));
export default router;
