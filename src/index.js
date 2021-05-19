import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import App from './App'
import { devtools } from 'zzy-javascript-devtools'

// 目前已具有事件
/**
 * pageShare - app分享能力 
 * JSON格式解码后
 * {
 *  shareTitle: 'shareTitle',
 *   shareContent: 'shareContent',
 *   shareUrl: 'shareUrl',
 *   shareImg: 'shareImg',
 *   shareChannels:  ["朋友圈","微信好友","QQ","微博","QQ空间"],
 * }
 * wxClientShare - 小程序分享 参数可以不传 如果传的话同上
 * closePage - 关闭H5页面
 * addVideo - 选择视频 参数配置：{type: Number} 1 -> 海选 其余待定
 * sharePoster - 分享海报  参数为一个对象，内部参数app定义
 */

// JSbridge 初始化
devtools.JSB_init()

// rem 设置
devtools.setDomRem(8)


if (process.env.REACT_APP_ENV === 'production') console.log = function () { }




ReactDOM.render(<App />, document.getElementById('root'))
