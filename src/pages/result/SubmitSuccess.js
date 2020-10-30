import React, { useEffect, useState } from 'react';
import './submitSuccess.css';

export default (props) => {
  const { history } = 'props'

  const handleClickFinished = () => {
    history.push('/')
  }

  return(
    <div className='submit-success'>
      <h2 className='submit-success-title'>面试结果审核中</h2>
      <p className='submit-success-desc'>预计等待1~3个工作日，结果将通过短信、邮件通知你，请耐心等待</p>

      <span className='submit-success-finished' onClick={handleClickFinished}>完成</span>
    </div>
  )
}
