import React, {Component, Fragment} from 'react';
import axios from "axios";

import { Button } from 'antd';

class Login extends Component {

constructor(props) {
  super(props);
  this.state = {
    login:false
  }
}
  render() {
    const {login} = this.state;
    return (
            <div className='login'>
              {
                login ?
                    <Button type="primary">退出</Button> :
                    <Button type="primary">登录</Button>
              }

            </div>

    )
  }
}

export default Login;
