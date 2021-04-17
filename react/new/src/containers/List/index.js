import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {List, Typography} from 'antd';
import axios from "axios";


const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]

class PageList extends Component {
  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id;
    axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id)
        .then(res => {
          this.setState({
            data: res.data.data
          })
        })
  }

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    console.log(this.props.match.params.id)
    return (
        <List
            style={{background: '#fff'}}
            bordered
            dataSource={this.state.data}
            renderItem={item => (
                <List.Item>
                  <Link to={`/detail/${item.id}`}>
                    <Typography.Text mark>[ITEM]</Typography.Text>
                    {item.title}
                  </Link>
                </List.Item>
            )}
        />
    )
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    let url = 'http://www.dell-lee.com/react/api/list.json'
    if (id) {
      url = url + '?id' + id
    }
    axios.get(url)
        .then(res => {
          this.setState({
            data: res.data.data
          })
        })
  }


}

export default PageList;
