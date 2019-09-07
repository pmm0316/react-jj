/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 23:37:13
 * @LastEditTime: 2019-09-07 23:43:42
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import withRedBackground from './withRedBackground'

class RedBackgroundComponent extends React.Component {
  render () {
    return <div>高阶组件 对包裹的组件添加样式</div>
  }
}

export default withRedBackground(RedBackgroundComponent)