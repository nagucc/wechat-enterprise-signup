import React, { PropTypes } from 'react'
import {Msg} from 'react-weui';

class Message extends React.Component {
  static propTypes = {
    type: React.PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    buttons: PropTypes.array,
  };
  static contextTypes = {
    setTitle: PropTypes.func.isRequired
  };
  static defaultProps = {
    type: 'success',
    description: ''
  };
  componentDidMount() {
    this.context.setTitle('请先登录')
  }
  render () {
    return (
      <Msg type={this.props.type} title={this.props.title}
        description={this.props.description} buttons={this.props.buttons} />
    );
  }
}

export default Message;
