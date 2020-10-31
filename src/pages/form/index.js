import React from 'react';
import './index.css'
import { List, InputItem, WhiteSpace, Checkbox, Flex, Button } from 'antd-mobile';
import { createForm } from 'rc-form'
import CheckboxComponent from '../checkbox'
const CheckboxItem = Checkbox.CheckboxItem;

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      age: null,
      education: null,
      experience: null,
      position: null
    }
  }
  componentDidMount() {}
  submit = () => {
    this.props.form.validateFields((error, value) => {
      const {gender,
        education,
        experience, position} = this.state
      if (!gender || !education || !experience) {
        return alert('有信息未填写完整')
      }
      console.log(error, value);
      const data = {
        gender,
        education,
        experience,
        position,
        ...value
      }
      sessionStorage.setItem('data', JSON.stringify(data))
      this.props.history.push({
        pathname: '/flow'
      })
      console.log(data)
    });
  }
  setValue = (field, value) => {
    this.setState({
      [field]: value
    })
  }

  render() {
    const { getFieldProps } = this.props.form;
    const data = [
      { value: 0, label: '男' },
      { value: 1, label: '女' }
    ];
    return (
      <div className='form-wrap'>
        <h1 className='form-title'>快速认识你～</h1>
        <img className='form-head-img' src='./assets/images/xiaoa.png' />
        <InputItem
          {...getFieldProps('name')}
          clear
          placeholder='请输入'
          ref={el => this.autoFocusInst = el}
        >姓名</InputItem>
        <CheckboxComponent
          title='性别'
          list={
            [
              { value: '男', label: '男' },
              { value: '女', label: '女' }
            ]
          }
          field='gender'
          setValue={this.setValue}
        />
        <InputItem
          {...getFieldProps('age')}
          clear
          placeholder='请输入'
          ref={el => this.autoFocusInst = el}
        >年龄</InputItem>
        <CheckboxComponent
          title='学历'
          list={
            [
              { value: '专科及以下', label: '专科及以下' },
              { value: '本科', label: '本科' },
              { value: '硕士', label: '硕士' },
              { value: '博士及以上', label: '博士及以上' }
            ]
          }
          field='education'
          setValue={this.setValue}
        />
        <InputItem
          {...getFieldProps('school')}
          clear
          placeholder='请输入'
          ref={el => this.autoFocusInst = el}
        >毕业院校</InputItem>
        <CheckboxComponent
          title='工作年限'
          list={
            [
              { value: '0-3年', label: '0-3年' },
              { value: '4-6年', label: '4-6年' },
              { value: '7-10年', label: '7-10年' },
              { value: '10年以上', label: '10年以上' }
            ]
          }
          field='experience'
          setValue={this.setValue}
        />
         <CheckboxComponent
          title='求职岗位'
          list={
            [
              { value: '法务', label: '法务' },
              { value: '合规', label: '合规' }
            ]
          }
          field='position'
          setValue={this.setValue}
        />
        <InputItem
          {...getFieldProps('phone')}
          clear
          placeholder='请输入'
          ref={el => this.autoFocusInst = el}
        >联系电话</InputItem>
        <InputItem
          {...getFieldProps('email')}
          clear
          placeholder='请输入'
          ref={el => this.autoFocusInst = el}
        >联系邮箱</InputItem>
        <Button type='primary' className='home-btn'onClick={this.submit} >提交</Button>
        <WhiteSpace size='lg' />
        <WhiteSpace size='lg' />
        <WhiteSpace size='lg' />
      </div>
    );
  }
}

export default createForm()(App)