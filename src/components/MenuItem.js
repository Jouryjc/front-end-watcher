import React , { Component } from 'react'
import { Menu } from 'antd';
import PropTypes from 'prop-types'

const MenuItem = ({ options }) => (
  <div>
    {options.map((option) =>
        <Menu.Item key={option}>
          {option}
        </Menu.Item>)
    }
  </div>
)

MenuItem.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
}

export default MenuItem
