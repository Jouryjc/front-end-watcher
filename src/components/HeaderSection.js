import React , { Component } from 'react'
import { Link } from 'react-router'
import { Layout , Menu, Icon, Dropdown } from 'antd';
import 'antd/dist/antd.css'
import PropTypes from 'prop-types'

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

const HeaderSection = ({ userInfo , onClick }) => {
    if(!userInfo.logIn){
        return (
            <Layout>
                <Header className="header">

                        <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="user"><Link to="/login"><Icon type="user" style={{
                            fontSize: 16,
                            color: '#08c'
                            }} />登录</Link></Menu.Item>
                            <Menu.Item key="user-add"><Link to="/register"><Icon type="user-add" style={{
                            fontSize: 16,
                            color: '#08c'
                            }} />注册</Link></Menu.Item>
                        </Menu>
                </Header>
            </Layout>
        )
    }else {
        return (
            <Layout>
                <Header className="header">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{lineHeight: '64px'}}
                        onClick={ (key) => onClick(key) }
                    >
                        <SubMenu  title={<span><Icon type="user" />{userInfo.name}</span>}>
                            <Menu.Item key="individuals"><Icon type="profile" />个人信息</Menu.Item>
                            <Menu.Item key="logout"><Icon type="logout"/>登出</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}

HeaderSection.propTypes = {
    userInfo: PropTypes.object
}


export default HeaderSection;
