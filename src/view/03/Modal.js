/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 13:51:38
 * @LastEditTime: 2019-08-17 13:59:34
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Modal extends Component {
  constructor (props) {
    super(props)
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
  }
  render () {
    return ReactDOM.createPortal(
      <div>
        <span className="close" onClick={this.props.onClose}>&times;</span>
        <div className="content">
          {this.props.children}
        </div>
      </div>,
      this.container
    )
  }
}

export default Modal