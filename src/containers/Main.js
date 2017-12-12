import React from 'react'
import { Link } from 'react-router'
import { Layout, Menu, Icon } from 'antd'
import HeaderSection from '../components/HeaderSection'
const { Content, Sider, Footer } = Layout
const { SubMenu } = Menu

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { location, children } = this.props
        return(
            <Layout style={{height: '100%'}}>
                <HeaderSection options = {['博客' , '社区']}/>
                <Content style={{padding: '0 50px'}}>
                      <Layout style={{padding: '24px 0', background: '#fff'}}>
                          <Sider width={200} style={{background: '#fff'}}>
                              <Menu
                                  mode="inline"
                                  defaultSelectedKeys={['1']}
                                  defaultOpenKeys={['sub1']}
                                  style={{height: '100%'}}
                              >
                                  <SubMenu key="sub1" title={<span><Icon type="file-text"/>错误日志</span>}>
                                      <Menu.Item key="1"><Link to="/error">错误列表</Link></Menu.Item>
                                      <Menu.Item key="2"><Link to="/addError">添加错误</Link></Menu.Item>
                                  </SubMenu>
                              </Menu>
                          </Sider>
                          <Content style={{padding: '0 24px', minHeight: 280}}>
                              {children}
                          </Content>
                      </Layout>
                  </Content>
                <Footer style={{ textAlign: 'center' }}>

                </Footer>
            </Layout>
        );
    }
}

export default Main


