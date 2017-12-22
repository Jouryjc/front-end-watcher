import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'
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
        user: PropTypes.object,
        dispatch: PropTypes.func
    }

    handleSubmit = (e) => {
        const dispatch = this.props.dispatch
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                dispatch(getUser())
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const userInfo = this.props.user

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem {...formItemLayout}>
                    {getFieldDecorator('userName', {
                        initialValue: userInfo.account,
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout}>
                    {getFieldDecorator('password', {
                        initialValue: userInfo.password,
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
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = ( state ) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(WrappedNormalLoginForm)
