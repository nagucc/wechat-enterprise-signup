/*
使用基于微信企业号的用户认证
*/

import { host, wxentConfig as wxcfg, redis} from '../config';
import { Router } from 'express';
import API from 'wxent-api-redis';
import {v4} from 'uuid';
import wxerr from 'wx-errmsg';

const router = new Router();

router.put('/', async (req, res) => {
  let {name, mobile} = req.body;

  const wxapi = API(wxcfg.corpId, wxcfg.secret, wxcfg.agentId, redis.host, redis.port);
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

export default router;
