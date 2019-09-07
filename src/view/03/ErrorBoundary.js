/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 12:43:05
 * @LastEditTime: 2019-08-17 12:55:17
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  componentDidCatch (error) {
    this.setState({
      hasError: true
    })
    console.log(error)
  }
  render () {
    if (this.state.hasError) {
      return <div>错误组件</div>
    }
    return this.props.children
  }
}
export default ErrorBoundary