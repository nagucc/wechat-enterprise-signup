import React, { PropTypes } from 'react'
import {Form, FormCell, CellHeader, CellsTitle,
  Label, CellBody, Input, Button, ButtonArea,
  MediaBox, MediaBoxDescription, Toast} from 'react-weui';
import fetch from 'isomorphic-fetch';

class SelectTags extends React.Component {
  render () {
    return (
      <div className="cell">
        <div className="hd">
          <h1 className="page_title">选择</h1>
        </div>
        <div className="bd">
          <CellsTitle>请选择标签：</CellsTitle>
          <label
            className="weui_cell weui_check_label"
            htmlFor="s11">
            <div className="weui_cell_hd">
              <input
                type="checkbox"
                className="weui_check"
                name="checkbox1"
                id="s11"
                defaultChecked="checked" />
              <i className="weui_icon_checked" />
            </div>
            <div className="weui_cell_bd weui_cell_primary">
              <p>
                standard is dealt for u.
              </p>
            </div>
          </label>
          <div>
              <input className="weui_check" type="checkbox"/>
              <i className="weui_icon_checked"></i>
          </div>
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
