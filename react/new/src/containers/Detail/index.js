import React,{Component} from 'react';
import { Card } from 'antd';
import axios from "axios";
class Detail  extends Component{
  constructor(props) {
    super(props);
    this.state ={
      data: {}
    }
  }
  render() {
    return(
            <Card title={this.state.id}>
              <p>{this.state.data.author}</p>
            </Card>
        )
  }

  componentDidMount() {
    const id =this.props.match.params.id
    axios.get('http://localhost:3000/strawberry/1')
        .then(res =>{
          const data = res.data
          console.log(data)
          this.setState({
            data: res.data
          })
        })
  }

}

export default Detail;
