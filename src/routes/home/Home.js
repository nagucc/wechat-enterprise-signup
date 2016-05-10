import React, { PropTypes } from 'react'
import {Form, FormCell, CellHeader, Label, CellBody, Input, Button, ButtonArea} from 'react-weui';

const Home = React.createClass({
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
                <Input placeholder="请输入姓名" />
              </CellBody>
            </FormCell>
            <FormCell>
              <CellHeader>
                <Label>手机号</Label>
              </CellHeader>
              <CellBody>
                <Input type="tel" placeholder="请输入手机号码"/>
              </CellBody>
            </FormCell>
            <ButtonArea>
              <Button type="primary">确定</Button>
            </ButtonArea>
          </Form>

        </div>
      </div>
    )
  }
})

export default Home
