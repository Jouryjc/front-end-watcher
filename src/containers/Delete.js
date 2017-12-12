import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import { delItem } from '../actions/error'
import { connect } from 'react-redux'
import $ from 'jquery'
const { Column } = Table

class Delete extends Component{
    constructor(props) {
        super(props)
        console.log(this.props)
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
                dispatch(delItem(tar))
            }
        });

    }
    render() {
        const dataSource = this.props.dataSource
        return (
            <Table dataSource={dataSource}>
                <Column
                    title="时间"
                    dataIndex="time"
                    key="time"
                />
                <Column
                    title="状态"
                    dataIndex="status"
                    key="status"
                />
                <Column
                    title="错误信息"
                    dataIndex="errorInfo"
                    key="errorInfo"
                />
                <Column
                    title="操作"
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
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        dataSource: state.dataSource,
        filter: ownProps.location.query.filter
    }
}

export default connect(mapStateToProps)(Delete)