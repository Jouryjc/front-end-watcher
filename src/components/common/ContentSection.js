import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class ContentSection extends Component{
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return(
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>1</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" title={<span><Icon type="file-text" />错误日志</span>}>
                <Menu.Item key="1">Js错误</Menu.Item>
              </SubMenu>

            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>

          </Content>
        </Layout>
      </Content>
    )
  }
}

export default ContentSection
