/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 23:44:26
 * @LastEditTime: 2019-08-17 13:58:36
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'
import PostItem from './PostItem'
import MyForm from './form'
import ErrorBoundary from './03/ErrorBoundary'
import Modal from './03/Modal'

class PostList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      username: 'Anny',
      password: '123456',
      user: {
        name: '张三'
      },
      modalShow: true
    }
  }
  componentDidMount () {
    console.log('componentWillMount')
    this.setState({
      posts: [
        {
          title: '131313313',
          author: '张三',
          date: '2019-05-05',
          vote: 0 
        },
        {
          title: '暗示该发生的高发申达股份',
          author: '李四',
          date: '2019-03-05',
          vote: 0
          
        },
        {
          title: '大师法规都是',
          author: '王五',
          date: '2019-02-05',
          vote: 0  
        }
      ]
    })
  }
  handleVote (title) {
    const posts = this.state.posts.map(item => {
      let newItem = item.title === title ? {...item, vote: ++item.vote} : item
      return newItem
    })
    console.log(posts)
    this.setState({
      posts
    })
  }
  onInputChange = (event) => {
    console.log(event.target.value)
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  userUpate = () => {
    this.setState({
      user: null
    })
  }
  ModalClose = () => {
    this.setState({
      modalShow: false
    })
  }
  render () {
    return (
      <div>
        {
          this.state.posts.map(item => 
          <PostItem key={item.title} post={item} onVote={this.handleVote.bind(this)}/>
          )
        }
        <input name="username" value={this.state.username} onChange={this.onInputChange}/>
        <input name="password" value={this.state.password} onChange={this.onInputChange}/>
        <MyForm/>
        <ErrorBoundary>
          <Profile user={this.state.user}/>
        </ErrorBoundary>
        <button onClick={this.userUpate}>用户更新</button>
        {
          this.state.modalShow && <Modal onClose={this.ModalClose}>这是模态框</Modal>
        }
      </div>
    )
  }
}

const Profile = ({user}) => <p> {user.name} </p>

export default PostList