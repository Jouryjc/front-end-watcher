import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Form, Input, Select, Button } from 'antd';
import { connect } from 'react-redux'
import { add } from '../actions/error'
const FormItem = Form.Item
const Option = Select.Option

class AddForm extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        status: PropTypes.string,
        errorInfo: PropTypes.string,
        dispatch: PropTypes.func.isRequired
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const dispatch = this.props.dispatch
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.state = {...values}
                dispatch(add(values))
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        // const { status , errorInfo } = this.props
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    label="状态"
                >
                    {getFieldDecorator('status', {
                        // initialValue: { status: status },
                        rules: [{
                            required: true, message: '请输入状态信息',
                        }],
                    })(
                        <Select>
                            <Option value="未处理">未处理</Option>
                            <Option value="已处理">已处理</Option>
                            <Option value="已删除">已删除</Option>
                            <Option value="处理中">处理中</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    label="错误信息"
                >
                    {getFieldDecorator('errorInfo', {
                        // initialValue: { errorInfo: errorInfo },
                        rules: [{
                            required: true, message: '请输入错误信息',
                        }],
                    })(
                        <Input onPressEnter={ this.handleSubmit } />
                    )}
                </FormItem>

                <FormItem>
                    <Button type="primary" htmlType="submit">添加</Button>
                </FormItem>
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return { dataSource: state }
}

export default connect(mapStateToProps)(Form.create()(AddForm))
