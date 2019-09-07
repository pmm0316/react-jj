/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 23:13:59
 * @LastEditTime: 2019-09-07 23:31:36
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'


/**
 * 把受控组件的状态和处理方法都提升到高阶组件中
 * @param {*} wrappedComponent 
 */
function withControlledState (WrappedComponent) {
  return class extends Component {
    constructor (props) {
      super(props)
      this.state = {
        value: ''
      }
      this.handleValueChange = this.handleValueChange.bind(this)
    }
    handleValueChange (event) {
      this.setState({
        value: event.target.value
      })
    }
    render () {
      let newProps = {
        controlledProps: {
          value: this.state.value,
          onChange: this.handleValueChange
        }
      }
      return (
        <WrappedComponent {...this.props} {...newProps}></WrappedComponent>
      )
    }
  }
}

export default withControlledState