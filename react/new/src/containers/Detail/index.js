import React,{Component} from 'react';
import { Card } from 'antd';
import axios from "axios";
class Detail  extends Component{
  constructor(props) {
    super(props);
    this.state ={
      title:'title',
      content:'content'
    }
  }
  render() {
    return(
            <Card title={this.state.title}>
              <p>{this.state.content}</p>
            </Card>
        )
  }

  componentDidMount() {
    const id =this.props.match.params.id
    axios.get('http://www.dell-lee.com/react/api/detail.json?id'+id)

  }

}

export default Detail;
