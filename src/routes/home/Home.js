import React, { PropTypes } from 'react'
import {Form, FormCell, CellHeader,
  Label, CellBody, Input, Button, ButtonArea,
  MediaBox, MediaBoxDescription} from 'react-weui';
import fetch from 'isomorphic-fetch';

const Home = React.createClass({
  async signup () {
    let name = this.refs.name.value;
    let mobile = this.refs.mobile.value;
    let body = new FormData();
    body.append('name', name);
    body.append('mobile', mobile);

    const res = await fetch('/api/signup', {
        method: 'PUT',
        body: JSON.stringify({name, mobile}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    if(res.status === 200){
      alert('注册成功');
    } else {
      let text = await res.text();
      alert('注册失败:' + text);
    }

  },
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
              <Button type="primary" onClick={this.signup}>确定</Button>
            </ButtonArea>
          </Form>
          <MediaBox>
            <MediaBoxDescription>
              注册成功后，请点击“关注身份验证”，然后使用手机号验证即可。
            </MediaBoxDescription>
          </MediaBox>
        </div>
      </div>
    )
  }
})

export default Home
