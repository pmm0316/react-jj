/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 09:00:44
 * @LastEditTime: 2019-09-07 09:13:53
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'

class ListComponent extends Component {
  render () {
    return [
      <li key="a">first li></li>,
      <li key="b">second li></li>,
      <li key="c">third li></li>
    ]
  }
}

export default ListComponent