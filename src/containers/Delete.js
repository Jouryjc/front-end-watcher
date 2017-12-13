import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Divider } from 'antd'
import { delItem, edit } from '../actions/error'
import { connect } from 'react-redux'
import ModalComponent from '../components/ModalComponent'
import $ from 'jquery'
const { Column } = Table

class Delete extends Component{
    constructor(props) {
        super(props)
    }
    state = {
        loading: false,
        visible: false,
        errorInfo: '',
        defaultSelect: '',
        id: ''
    }
    static propTypes = {
        dataSource: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
        visible: PropTypes.bool,
        loading: PropTypes.bool,
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

    handleEdit = (e) => {
        const dispatch = this.props.dispatch,
            tar = $(e.target)
        this.setState({
            visible: true,
            errorInfo: tar.attr('data-error'),
            id: tar.attr('value'),
            defaultSelect: tar.attr('data-status')
        })
    }

    handleOk = () => {
        const dispatch = this.props.dispatch
        this.setState({ loading: true });

        const promise = new Promise((resolve , reject) => {
            resolve(dispatch(edit(this.state)))
        })

        promise.then((status)=> {
            if(status == "data-edit-success") {
                this.setState({ loading: false, visible: false });
            }
        })

    }

    handleCancel = () => {
        this.setState({ visible: false })
    }

    onChange = (value) => {
        this.setState({
            errorInfo: value
        })
    }

    onSelectChange = (value) => {
        this.setState({
            status: value
        })
    }

    render() {
        const dataSource = this.props.dataSource
        const { visible , loading , errorInfo , defaultSelect } = this.state
        return (
            <div>
                <ModalComponent  errorInfo = {errorInfo}
                                 defaultSelect = {defaultSelect}
                                 visible = {visible}
                                 loading = {loading}
                                 handleOk = {this.handleOk}
                                 handleCancel={this.handleCancel}
                                 onChange = {this.onChange}
                                 onSelectChange = {this.onSelectChange}
                />
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
                        render={(dataIndex , key) => (
                            <span>
                                <a href="javasript:void(0)" onClick={(e) => this.handleClick(e)}
                                   value={dataIndex}>Delete</a>
                                <Divider type="vertical" />
                                <a href="javasript:void(0)" className="ant-dropdown-link" value={dataIndex} data-error={key.errorInfo} data-status={key.status} onClick={(e) => this.handleEdit(e)}>
                                    Edit
                                </a>
                            </span>
                        )}
                    />
                </Table>
            </div>
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