import React from 'react'
import { Modal, Button, Input, Select } from 'antd'
import PropTypes from 'prop-types'
const Option = Select.Option

const ModalComponent = ({visible , loading , errorInfo , defaultSelect , handleOk , handleCancel , onChange , onSelectChange}) => (
    <div>
        <Modal
            visible={visible}
            title="编辑错误"
            onOk={e => handleOk()}
            onCancel={e => handleCancel()}
            footer={[
                <Button key="back" onClick={e => handleCancel()}>取消</Button>,
                <Button key="submit" type="primary" loading={loading} onClick={e => handleOk()}>
                    修改
                </Button>,
            ]}
        >
            <Input placeholder="错误信息" defaultValue={errorInfo} onBlur={(e) => onChange(e.target.value)} />

            <Select defaultValue={ defaultSelect } style={{ width: 120 }} onChange= {(e) => onSelectChange(e)}>
                <Option value="未处理">未处理</Option>
                <Option value="已处理">已处理</Option>
                <Option value="已删除">已删除</Option>
                <Option value="处理中">处理中</Option>
            </Select>
        </Modal>
    </div>
)

ModalComponent.propTypes = {
    visible: PropTypes.bool,
    loading: PropTypes.bool,
    handleOk: PropTypes.func,
    handleCancel: PropTypes.func,
    onSelectChange: PropTypes.func,
    onChange: PropTypes.func,
    errorInfo: PropTypes.string,
    defaultSelect: PropTypes.string
}

export default ModalComponent