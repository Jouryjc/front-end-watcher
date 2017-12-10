import React from 'react'
import 'antd/dist/antd.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout, Menu, Icon, Table, Modal, Button } from 'antd'
import { dataSource } from '../model/data'
import HeaderSection from '../components/HeaderSection'
import { delItem } from '../actions/error'
import $ from 'jquery'
const { Column } = Table;
const { Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
      static propTypes = {
          dataSource: PropTypes.array,
          dispatch: PropTypes.func.isRequired
      }
      handleClick = (e) => {
          const dispatch = this.props.dispatch,
                tar = $(e.target).attr('value')
          const confirm = Modal.confirm;
          confirm({
              title: 'Do you Want to delete this item?',
              okText: 'Yes',
              okType: 'danger',
              cancelText: 'No',
              onOk() {
                  console.log('OK');
                  dispatch(delItem(tar))
              },
              onCancel() {
                  console.log('Cancel');
              },
          });

      }
      render() {
        const dataSource = this.props.dataSource
        return (
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
                                  <Menu.Item key="1">Js错误</Menu.Item>
                              </SubMenu>

                          </Menu>
                      </Sider>
                      <Content style={{padding: '0 24px', minHeight: 280}}>
                          <Table dataSource={dataSource}>
                              <Column
                                  title="time"
                                  dataIndex="time"
                                  key="time"
                              />
                              <Column
                                  title="status"
                                  dataIndex="status"
                                  key="status"
                              />
                              <Column
                                  title="errorInfo"
                                  dataIndex="errorInfo"
                                  key="errorInfo"
                              />
                              <Column
                                  title="Action"
                                  key="key"
                                  dataIndex="key"
                                  render={(dataIndex) => (
                                      <span>
                                            <a href="javasript:void(0)" onClick={(e) => this.handleClick(e)}
                                               value={dataIndex}>Delete</a>
                                      </span>
                                  )}
                              />
                          </Table>
                      </Content>
                  </Layout>
              </Content>
            <Footer style={{ textAlign: 'center' }}>

            </Footer>
          </Layout>
        );
      }
    }

const mapStateToProps = state => {
    console.log(state)
    return {dataSource: state}
}


export default connect(mapStateToProps)(Main)
