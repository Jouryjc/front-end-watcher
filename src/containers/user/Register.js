import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd'
import { connect } from 'react-redux'
import { addUser } from '../../actions/user'
import style from './style.css'
const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 8 },
};

const formTailLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 6, offset: 8},
};


class NormalLoginForm extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        dispatch: PropTypes.func,
        name: PropTypes.string,
        password: PropTypes.string
    }

    handleSubmit = (e) => {
        const dispatch = this.props.dispatch
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let responce = await dispatch(addUser(values))
                console.log(responce)
                if(responce && responce.status == 1) {
                    message.error(responce.description)
                }else {
                    message.success(responce.description)

                }
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem {...formItemLayout} >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem {...formTailLayout}>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


export default connect()(WrappedNormalLoginForm)
