/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 18:12:35
 * @LastEditTime: 2019-09-07 18:16:51
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'
import WithPersistentData from './withPersistentData'

class MyComponent extends Component {
  render () {
    return <div>{this.props.data}</div>
  }
}

const MyComponentWithPersistentData = WithPersistentData(MyComponent)

export default MyComponentWithPersistentData