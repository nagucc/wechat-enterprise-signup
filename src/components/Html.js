/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    css: PropTypes.string,
    body: PropTypes.string.isRequired,
    entry: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  render() {
    return (
<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0" />
    <link rel="stylesheet" href="/public/weui.min.css"/>
    <link rel="stylesheet" href="/public/font-awesome-4.6.1/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="	/public/site.css"/>
    <link rel="stylesheet" href={this.props.css} />
    <title>固定资产系统</title>
  </head>
  <body className="no-skin">
    <div id="app" className="container" dangerouslySetInnerHTML={{ __html: this.props.body }}/>

    <script src={this.props.entry}></script>
  </body>
</html>
    );
  }

}

export default Html;
