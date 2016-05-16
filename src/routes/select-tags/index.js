import React from 'react';
import SelectTags from './SelectTags';
import fetch from '../../core/fetch';

export default {

  path: '/select-tags',

  async action(req, res2) {
    const res = await fetch(`/api/signup/selectable-tags`);
    const taglist = await res.json();

    let props = {};
    if(taglist.ret ===0) props.taglist = taglist.data;
    else props.errMsg = await res.text();

    return <SelectTags {...props}/>;
  },
};
