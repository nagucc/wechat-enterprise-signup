import React from 'react';
import SelectTags from './SelectTags';
import fetch from 'isomorphic-fetch';

let getMe = async() => {
  let meRes = await fetch('/api/signup/me', {
    credentials: 'same-origin'
  });
  let result = await meRes.json();
  if(result.ret === 0){
    return Promise.resolve(result.data);
  } else return Promise.reject(await result.msg);
}
export default {

  path: '/select-tags',

  async action() {

    let userId;

    // 检查用户是否已经登录
    try {
      userId = await getMe();
    } catch (e) {
      // 用户还未登录，转到登录页面
      window.location = `/api/signup/signin?redirect_uri=${window.location.href}`;
    }
    const res = await fetch('/api/signup/selectable-tags');
    const taglist = await res.json();

    let props = {};
    if(taglist.ret ===0) props.taglist = taglist.data;
    else props.errMsg = await res.text();



    return <SelectTags {...props}/>;
  },
};
