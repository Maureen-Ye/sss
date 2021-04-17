import react from 'react';
import ReactDOM from 'react-dom';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import './style.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppHeader from "./components/Header/";
import Detail from "./containers/Detail";
import List from "./containers/List";

const {Header, Footer, Content} = Layout;


class App extends react.Component {
  render() {
    return (
        <BrowserRouter>
          <Layout style={{minWidth: 1240,
            height: '100%'}}>
            <Header className="header">
              <AppHeader/>
            </Header>
            <Content className="content">
              <Switch>
                <Route path='/detail/:id' component={Detail}/>

                <Route path='/:id?' component={List}/>
              </Switch>
            </Content>
            <Footer className="footer">maureen_Footer</Footer>
          </Layout>
        </BrowserRouter>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
