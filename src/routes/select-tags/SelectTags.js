import React, { PropTypes } from 'react'
import {Form, FormCell, CellHeader, CellsTitle, Checkbox,
  Label, CellBody, Input, Button, ButtonArea,
  MediaBox, MediaBoxDescription, Toast} from 'react-weui';
import fetch from '../../core/fetch';
import TagList from './TagList';
import {selectTagsPage} from '../../config';

let getMe = async() => {
  let meRes = await fetch(`/api/signup/me`, {
    credentials: 'same-origin'
  });
  let result = await meRes.json();
  if(result.ret === 0){
    return Promise.resolve(result.data);
  } else {
    return Promise.reject(await result.msg);
  }
}

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
    taglist: React.PropTypes.array,
    addTags: PropTypes.func.isRequired
  };
  async submit() {

    // 获取被选中的tag的id列表
    let cbs = Array.from(document.getElementsByClassName('tag-checkbox'));
    let selectedTags = cbs.filter(cb => cb.checked).map(cb => cb.value);

    // 为将tag列表指定给当前用户
    try{
      let result = await this.props.addTags(selectedTags);
    } catch(e) {
      alert(`操作失败：${e}`)
    }
  }

  componentDidMount() {
    this.context.setTitle(selectTagsPage.title);
    // 检查用户是否已经登录
    getMe().then(userId => {
      this.setState({userId})
    }).catch(e => {
      // 用户还未登录，转到登录页面
      window.location = `/api/signup/signin?redirect_uri=${window.location.href}`;
    })
  }

  render () {
    let {title, desc, helpText} = selectTagsPage;
    return (
      <div className="cell">
        <div className="hd">
          <h1 className="page_title">{title}</h1>
        </div>
        <div className="bd">
          <CellsTitle>{desc}</CellsTitle>
          {this.props.taglist && <TagList {...this.props} />}
          <ButtonArea>
            <Button type="primary" onClick={this.submit.bind(this)}>确定</Button>
          </ButtonArea>

          <MediaBox>
            <MediaBoxDescription>
              {helpText}
            </MediaBoxDescription>
          </MediaBox>
        </div>
        <Toast icon="loading" show={false}>请稍候</Toast>
      </div>
    )
  }
}

export default SelectTags;
