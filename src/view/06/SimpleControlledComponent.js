/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 23:19:45
 * @LastEditTime: 2019-09-07 23:28:56
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import withControlledState from './withControlledState'

class SimpleControlledComponent extends React.Component {
  render () {
    return (
      <input name="simple" {...this.props.controlledProps}/>
    )
  }
}

export default withControlledState(SimpleControlledComponent)