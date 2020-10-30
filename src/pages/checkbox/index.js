import React from 'react';
import { List, Checkbox, Flex } from 'antd-mobile';
import './index.css'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class Test extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: null
    }
  }
  onChange = (value) => {
    console.log(value);
    const { field } = this.props
    this.setState({
      value
    })
    this.props.setValue && this.props.setValue(field, value)
    
  }
  render() {
    const { title, list } = this.props
    return (<div className='checkbox'>
      <div className='checkbox-title'>{title}</div>
      <div className='checkbox-content'>
      {
      list.map(i => (
        <CheckboxItem key={i.value} checked={i.value === this.state.value} onChange={() => this.onChange(i.value)}>
          {i.label}
        </CheckboxItem>
      ))}
      </div>  
    </div>);
  }
}

export default Test