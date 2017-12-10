import React  from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { Table } from 'antd'
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Column, ColumnGroup } = Table;

const ContentSection = (dataSource , onClick) => {

}

ContentSection.propTypes = {
    onClick: PropTypes.func.isRequired,
    dataSource: PropTypes.array
};

export default ContentSection
