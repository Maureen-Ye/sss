import React, {Component, Fragment} from 'react';

import logo from './logo.png';
import './style.css'
import { Menu } from 'antd';
import {
  MailOutlined
}from '@ant-design/icons';
import Icon from "antd/es/icon";



class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state={
      list:[{
        id:1,
        icon:<MailOutlined/>,
        title:"VOA慢速英语"
      },{
          id:2,
          icon:<MailOutlined/>,
          title:"VOA常速英语"
        },{
          id:3,
          icon:<MailOutlined/>,
          title:"VOA英语教学"
        },{
          id:4,
          icon:<MailOutlined/>,
          title:"VOA慢速英语"
        },{
          id:5,
          icon:<MailOutlined/>,
          title:"VOA慢速英语"
        },{
          id:6,
          icon:<MailOutlined/>,
          title:"VOA慢速英语"
        },
      ]}
  }

  getMenuItems(){
   return this.state.list.map(item=>{
      return(
          <Menu.Item key={item.id}>
           <Icon type={item.icon}/>
            {item.title}
          </Menu.Item>
      )
    })
  }


  render() {
    return (
        <Fragment>
          <img src={logo} className='app-header-logo' alt=''/>
          <Menu
              mode="horizontal"
              className='app-header-menu'
          >
            {this.getMenuItems()}
          </Menu>
        </Fragment>

    )
  }
}

export default AppHeader;
