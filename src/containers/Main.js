import React from 'react'
import 'antd/dist/antd.css'
import PropTypes from 'prop-types'
import HeaderSection from '../components/HeaderSection'
import ContentSection from '../components/ContentSection'
import { Layout } from 'antd';

const { Footer } = Layout;

class Main extends React.Component {
  /*static propTypes = {
    key: PropTypes.string.isRequired,
    options: PropTypes.array
  }*/
  render() {
    // const {key , options} = this.props
    return (
      <Layout style={{height: '100%'}}>
        <HeaderSection options = {['博客' , '社区']}/>
        <ContentSection />

        <Footer style={{ textAlign: 'center' }}>

        </Footer>
      </Layout>
    );
  }
}

export default Main
