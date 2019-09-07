/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 23:35:21
 * @LastEditTime: 2019-09-07 23:42:57
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
// import PostList from './view/PostList'
import ListComponent from './view/03/ListComponent'
import StringComponent from './view/03/StringComponent'
import MyComponent from './view/06/MyComponent'
import SimpleControlledComponent from './view/06/SimpleControlledComponent'
import RedBackgroundComponent from './view/06/RedBackgroundComponent'
import './App.css';

function App() {
  return [
    <ul>
      <ListComponent/>
    </ul>,
    <StringComponent/>,
    <MyComponent/>,
    <SimpleControlledComponent/>,
    <RedBackgroundComponent/>
  ];
}

export default App;
