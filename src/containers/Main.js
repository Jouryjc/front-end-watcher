import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Layout, Menu, Icon, message } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import HeaderSection from '../components/HeaderSection'
import { logoutReqRes } from '../actions/user'
const { Content, Sider, Footer } = Layout
const { SubMenu } = Menu

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        dispatch: PropTypes.func,
        user: PropTypes.object,
        logoutReqRes: PropTypes.func
    }

    onClick = (key) => {
        const { user , logoutReqRes } = this.props
        if(key.key === "logout") {
            const result = logoutReqRes(user.userid)
            message.success(result.description)
        }
    }

    render() {
        const { location, children, user } = this.props
        return(
            <Layout style={{height: '100%'}}>
                <HeaderSection userInfo = {user}
                                onClick = {this.onClick} />
                <Content style={{padding: '0 50px'}}>
                      <Layout style={{padding: '24px 0', background: '#fff'}}>
                          <Sider width={200} style={{background: '#fff'}}>
                              <Menu
                                  mode="inline"
                                  defaultSelectedKeys={[location.pathname.replace(/^\// , '')]}
                                  defaultOpenKeys={['sub1']}
                                  style={{height: '100%'}}
                              >
                                  <SubMenu key="sub1" title={<span><Icon type="file-text"/>错误日志</span>}>
                                      <Menu.Item key="error"><Link to="/error">错误列表</Link></Menu.Item>
                                      <Menu.Item key="addError"><Link to="/addError">添加错误</Link></Menu.Item>
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

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ logoutReqRes }  , dispatch)
}

export default connect(mapStateToProps , mapDispatchToProps)(Main)



