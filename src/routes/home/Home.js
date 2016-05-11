import React, { PropTypes } from 'react'
import {Form, FormCell, CellHeader,
  Label, CellBody, Input, Button, ButtonArea,
  MediaBox, MediaBoxDescription, Toast} from 'react-weui';
import fetch from 'isomorphic-fetch';

import {title, successUrl} from '../../config';

class Home extends React.Component {
  static contextTypes = {
    setTitle: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {loading: false};
  }
  async signup () {
    let name = this.refs.name.value;
    let mobile = this.refs.mobile.value;
    let body = new FormData();
    body.append('name', name);
    body.append('mobile', mobile);

    this.setState({loading: true});
    const res = await fetch('/api/signup', {
        method: 'PUT',
        body: JSON.stringify({name, mobile}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    if(res.status === 200){
      if(successUrl) window.location = successUrl;
      else {
        alert('注册成功');
        window.close();
      }
    } else {
      let text = await res.text();
      this.setState({loading: false});
      alert('注册失败:' + text);
    }

  }
  componentDidMount() {
    this.context.setTitle(title);
  }
  render () {
    return (
      <div className="form">
        <div className="hd">
          <h1 className="page_title">注册</h1>
        </div>
        <div className="bd">
          <Form>
            <FormCell>
              <CellHeader>
                <Label>姓名</Label>
              </CellHeader>
              <CellBody>
                <input className="weui_input" placeholder="请输入姓名" ref="name"/>
              </CellBody>
            </FormCell>
            <FormCell>
              <CellHeader>
                <Label>手机号</Label>
              </CellHeader>
              <CellBody>
                <input className="weui_input" type="tel" placeholder="请输入手机号码" ref="mobile"/>
              </CellBody>
            </FormCell>
            <ButtonArea>
              <Button type="primary" onClick={this.signup.bind(this)}>确定</Button>
            </ButtonArea>
          </Form>
          <MediaBox>
            <MediaBoxDescription>
              注册成功后，请点击“关注身份验证”，然后使用手机号验证即可。
            </MediaBoxDescription>
          </MediaBox>
        </div>
        <Toast icon="loading" show={this.state.loading}>请稍候</Toast>
      </div>
    )
  }
}

export default Home;
