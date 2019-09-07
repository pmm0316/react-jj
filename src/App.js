/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 23:35:21
 * @LastEditTime: 2019-09-07 09:16:24
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
// import PostList from './view/PostList'
import ListComponent from './view/03/ListComponent'
import StringComponent from './view/03/StringComponent'
import './App.css';

function App() {
  return [
    <ul>
      <ListComponent/>
    </ul>,
    <StringComponent/>
  ];
}

export default App;
