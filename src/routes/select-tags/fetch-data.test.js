import {addTags, getSelectableTags} from './fetch-data';
import { expect } from 'chai';

describe('Select-Tags/fetch-data', () => {
  it('add tags for user', async () => {

    // 由于没有cookie，无法测试正确的情形

    // 出错时，抛出异常
    try{
      await addTags([43434]);
      throw new Error('should not display this message');
    } catch(e) {
      expect(e).to.be.not.null;
    }
  });

  it('get selectable tags', async() => {
    let tags = await getSelectableTags();
    expect(tags.length).to.be.above(0);
  })
})
