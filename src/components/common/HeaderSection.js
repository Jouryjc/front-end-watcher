import React , { Component } from 'react'
import { Link } from 'react-router'
import { Layout , Menu } from 'antd';
import MenuItem from './MenuItem'
import 'antd/dist/antd.css'
import PropTypes from 'prop-types'

const { Header } = Layout;

const HeaderSection = ({options}) => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["博客"]}
        style={{ lineHeight: '64px' }}
      >
        {options.map((option) =>
          <Menu.Item key={option}>
            {option}
          </Menu.Item>)
        }
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
