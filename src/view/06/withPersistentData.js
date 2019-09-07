/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 18:09:27
 * @LastEditTime: 2019-09-07 23:07:40
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'
/**
 * 高阶组件是以组件为参数，返回一个新的组件
 * @param {*} WrappedComponent
 */
function withPersistenData (WrappedComponent) {
  return class extends Component {
    componentWillMount () {
      let data = 1
      this.setState({data})
    }
    render () {
      return (
        <WrappedComponent data={this.state.data} {...this.props}></WrappedComponent>
      )
    }
  }
}

export default withPersistenData