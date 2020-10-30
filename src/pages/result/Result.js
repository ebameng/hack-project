import React, { useEffect, useState, createRef } from 'react';
import axios from 'axios';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/radar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import './result.css'

export default (props) => {
  const [dataSource, setDataSource] = useState({
    name: '王二',
    gender: '男',
    age: '28',
    phone: '18565685956',
    position: '前端开发工程师',
    mark: [80, 90, 70, 100, 90, 80],
    average: '89',
    rank: '86'
  })
  const echartRef = createRef()

  useEffect(() => {
    axios.post('/user', {

    })
      .then(function (response) {
        const dataSource = response.data;
        setDataSource(dataSource)

        handleMakeChart(dataSource)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  const handleMakeChart = (dataSource) => {

    const myChart = echarts.init(echartRef.current);
    myChart.setOption({
      title: null,
      tooltip: {},
      legend: {
        data: ['各项得分']
      },
      radar: {
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: 'transparent',
          }
        },
        indicator: [
          { name: '基础信息', max: 100},
          { name: '沟通能力', max: 100},
          { name: '自信', max: 100},
          { name: '专业技能', max: 100},
          { name: '职业背景', max: 100},
          { name: '期望匹配度', max: 100}
        ],
        radius: '50%',
        splitArea : {
          show : true,
          areaStyle : {
            color: ['#222439']
          }
        }
      },
      series: [{
        name: '各项得分',
        type: 'radar',
        data: [
          {
            value: dataSource.mark,
            name: '各项得分'
          }
        ],
        itemStyle: {
          color: '#484c79',
          borderColor: '#484c79'
        },
        lineStyle: {
          color: '#484c79',
        },
        areaStyle: {
          color: 'rgba(59, 64, 121, 0.52)'
        }
      }]
    });
  }

  return(
    <div className='result'>
      <div className='result-header'>
        <div className='result-header-content'>
          <h3>{dataSource.name}</h3>
          <p>{dataSource.gender} {dataSource.age} {dataSource.phone}</p>
          <p>应聘职位: {dataSource.position}</p>
        </div>
        <img src={dataSource.photo || './assets/images/default.png'} alt="" className='result-header-image'/>
      </div>

      <div className='result-body'>
        <h2>综合评分: {dataSource.average}</h2>
        <p>排名: {dataSource.rank}</p>

        <div className='result-echart-box' ref={echartRef}></div>
      </div>
    </div>
  )
}
