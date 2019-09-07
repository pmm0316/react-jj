/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 23:32:15
 * @LastEditTime: 2019-09-07 23:44:06
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
export default function withRedBackground (WrappedComponent) {
  return class extends React.Component {
    render () {
      return (
        <div style={{backgroundColor: 'red'}}>
          <WrappedComponent {...this.props}></WrappedComponent>
        </div>
      )
    }
  }
}