/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 23:50:55
 * @LastEditTime: 2019-08-16 22:20:58
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import PropTypes from 'prop-types'

function PostItem(props) {
    let {post} = props
    const handleClick = () => {
      console.log('hanleClick')
      props.onVote(post.title)
    }
    return (
      <li>
        <div>
          {post.title}
        </div>
        <div>
          作者：{post.author}
        </div>
        <div>
          日期：{post.date}
        </div>
        <div>
          <button onClick={handleClick}>点赞</button>
          <span>{post.vote}</span>
        </div>
      </li>
    )
}

PostItem.propTypes = {
  post: PropTypes.object,
  onVote: PropTypes.func.isRequired
}

export default PostItem