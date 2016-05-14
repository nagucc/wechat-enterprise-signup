import React, { PropTypes } from 'react'
import {Form, FormCell, CellHeader, CellsTitle, Checkbox,
  Label, CellBody, Input, Button, ButtonArea,
  MediaBox, MediaBoxDescription, Toast} from 'react-weui';
import fetch from 'isomorphic-fetch';
import TagList from './TagList';

class SelectTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  static contextTypes = {
    setTitle: PropTypes.func.isRequired
  };
  static propTypes = {
    taglist: React.PropTypes.array
  };
  async submit() {

    // 获取被选中的tag的id列表
    let cbs = Array.from(document.getElementsByClassName('tag-checkbox'));
    let selectedTags = cbs.filter(cb => cb.checked).map(cb => +cb.value);

    // 为将tag列表指定给当前用户
  }

  componentDidMount() {
    this.context.setTitle('选择角色');
  }

  render () {
    return (
      <div className="cell">
        <div className="hd">
          <h1 className="page_title">选择角色</h1>
        </div>
        <div className="bd">
          <CellsTitle>请选择标签：</CellsTitle>
          {this.props.taglist && <TagList {...this.props} />}
          <ButtonArea>
            <Button type="primary" onClick={this.submit.bind(this)}>确定</Button>
          </ButtonArea>

          <MediaBox>
            <MediaBoxDescription>
              注册成功后，请点击“关注身份验证”，然后使用手机号验证即可。
            </MediaBoxDescription>
          </MediaBox>
        </div>
        <Toast icon="loading" show={false}>请稍候</Toast>
      </div>
    )
  }
}

export default SelectTags;
