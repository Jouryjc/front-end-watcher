import React , { Component } from 'react'
import { Link } from 'react-router'
import { Layout , Menu, Icon } from 'antd';
import MenuItem from './MenuItem'
import 'antd/dist/antd.css'
import PropTypes from 'prop-types'

const { Header } = Layout;

const HeaderSection = () => (
    <Layout>
        <Header className="header">
            <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="user"><Link to="/login"><Icon type="user" style={{ fontSize: 16, color: '#08c' }} />登录</Link></Menu.Item>
            <Menu.Item key="user-add"><Link to="/register"><Icon type="user-add" style={{ fontSize: 16, color: '#08c' }} />注册</Link></Menu.Item>
        </Menu>
        </Header>
    </Layout>
)

/*HeaderSection.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
}*/


export default HeaderSection;
