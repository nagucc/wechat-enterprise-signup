import {expect} from 'chai';
import {addTagForUser, addTagsForUser} from './wxapi';

import { wxentConfig as wxcfg, redis, selectableTags, host} from '../config';
import API from 'wxent-api-redis';

const wxapi = API(wxcfg.corpId, wxcfg.secret, wxcfg.agentId, redis.host, redis.port);

describe('Wechat-enterprise api', function() {
  this.timeout(15000);
  it('use wxapi to add tag for user', async ()=> {

    // 参数正确时，返回的结果正确，也不会抛出异常
    let result = await addTagForUser(2, 'na57', wxapi);
    expect(result.errcode).to.be.eql(0);

    // 参数错误时，抛出异常
    try{
      let result = await addTagForUser(22222, 'undefined', wxapi);
    } catch(e) {
      // code是错误代码，其值可能是40070，40068等
      expect(e.code).to.be.above(40000);
    }
  });

  it('user wxapi to add multi tags', async() => {
    // 参数正确时，返回正确结果，也不会抛出异常
    let results = await addTagsForUser([2,3], 'na57', wxapi);
    expect(results.length).to.be.eql(2);
    expect(results[0].errcode).to.be.eql(0);

    // 只要其中任意一个参数错误时，抛出异常
    try{
      let results = await addTagsForUser([2,3333], 'na57', wxapi);
    } catch(e) {
      // code是错误代码，其值可能是40070，40068等
      expect(e.code).to.be.above(40000);
    }
  });
});
