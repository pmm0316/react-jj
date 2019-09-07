/*
 * @Description: In User Settings Edit
 * @Author: pengmingming
 * @Date: 2019-08-17 11:51:48
 * @LastEditTime: 2019-08-23 22:48:06
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'

class MyForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'sdfsdf2',
      num: 0
    }
  }
  onSelectChange = (event) => {
    this.setState({
      value: event.target.value
    })
    this.setState( preState => ({
      num: preState.num + 1
    }))
  }
  render () {
    return (
      <div>
        <select value={this.state.value} onChange={this.onSelectChange}>
          <option value="sdfsdf1">sdfsdf1 </option>
          <option value="sdfsdf2">sdfsdf2 </option>
          <option value="sdfsdf3">sdfsdf3 </option>
        </select>
      </div>
    )
  }
}

export default MyForm