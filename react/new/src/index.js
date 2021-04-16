import react from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './style.css'

import AppHeader from "./components/Header/";

const { Header, Footer, Content } = Layout;
class App extends react.Component{
  render() {
    return(
        <Layout style={{minWidth:1300}}>
          <Header className="header">
            <AppHeader/>
          </Header>
          <Content className="content">Content</Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'))
