/*
使用基于微信企业号的用户注册
*/

import { wxentConfig as wxcfg, redis, selectableTags, host} from '../config';
import { Router } from 'express';
import API from 'wxent-api-redis';
import {v4} from 'uuid';
import wxerr from 'wx-errmsg';
import {signin, getme} from './wxe-auth-express';
import {addTagsForUser} from './wxapi';

const wxapi = API(wxcfg.corpId, wxcfg.secret, wxcfg.agentId, redis.host, redis.port);
const router = new Router();

router.put('/', async (req, res) => {
  let {name, mobile} = req.body;

  wxapi.createUser({
    userid: 'self_registry_' + v4().replace(/-/g, ''),
    department: [JSON.parse(wxcfg.departmentId)],
    name, mobile,
  }, (err, result) => {
    if(err) {
      if(err.code) res.status(500).send(wxerr[err.code.toString()]);
      else res.status(500).send(err);
    }
    else res.send(result);
  });
});

router.get('/selectable-tags', async(req, res) => {
  wxapi.listTags((err, result) => {
    if(err){
      if(err.code) res.status(500).send(wxerr[err.code.toString()]);
      else res.status(500).send(err);
    } else {  // 获取taglist成功
      res.send({
        ret:0,
        data: result.taglist.filter(tag => selectableTags.includes(tag.tagid))
      });
    }
  });
});

router.get('/signin', signin({
  wxapi: wxapi,
  cookieNameForUserId: 'userId',
  callbackUrl: 'http://wx.nagu.cc:3001/api/signup/signin'
}));

router.put('/add-tags', async (req, res) => {
  let {userId} = req.signedCookies;
  let {tags} = req.body;
  if(userId && Array.isArray(tags)) {
    try {
      await addTagsForUser(tags, userId, wxapi);
      res.send({ret:0});
    } catch(e) {
      res.send({ret: -1, msg: errs});
    }
  } else {
    res.send({ret: -1, msg: `You haven't sign in, or 'tags' is invalid.`});
  }
});


// 获取当前登录用户信息
router.get('/me', getme('userId'));

export default router;
