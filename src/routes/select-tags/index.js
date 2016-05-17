import React from 'react';
import SelectTags from './SelectTags';
import fetch from '../../core/fetch';
import {addTags, getSelectableTags} from './fetch-data';

export default {

  path: '/select-tags',

  async action(req, res2) {

    let props = {};
    try {
      let taglist = await getSelectableTags();
      props = {addTags, taglist};
    } catch (e) {
      props.errMsg = await res.text();
    }
    return <SelectTags {...props}/>;
  },
};
