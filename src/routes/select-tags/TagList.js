import React, { PropTypes } from 'react'

import {Form, FormCell, CellHeader, CellsTitle, Checkbox,
  Label, CellBody, Input, Button, ButtonArea,
  MediaBox, MediaBoxDescription, Toast} from 'react-weui';

class TagList extends React.Component {
  static propTypes = {
    taglist: React.PropTypes.array.isRequired
  };
  render () {
    return (
      <Form checkbox>
        {
          this.props.taglist.map(tag => (
            <FormCell checkbox key={tag.tagid} htmlFor={`tag_checkbox_${tag.tagid}`}>
                <CellHeader>
                    <Checkbox className="tag-checkbox" id={`tag_checkbox_${tag.tagid}`} value={tag.tagid} />
                </CellHeader>
                {/*此处存在问题：使用外层label无法改变checkbox*/}
                <CellBody>
                  <label htmlFor={`tag_checkbox_${tag.tagid}`} >{tag.tagname}</label>
                </CellBody>
            </FormCell>
          ))
        }
      </Form>
    )

  }
}

export default TagList;
