import axios from 'axios'
import { Toast } from 'antd-mobile'
import { devtools } from 'zzy-javascript-devtools'

function request({ u, data = {}, token = null }) {
  Toast.loading('加载中...', 30, () => {
    Toast.hide()
    Toast.fail('加载失败，请重试', 2)
    return
  })
  let url = `${process.env.REACT_APP_BASE_URL}${u}.do?token=${token}&time=&sign=`
  return new Promise((reslove, reject) => {
    axios
      .post(url, data)
      .then(function (res) {
        if (res.data.code === 0) {
          Toast.hide()
          reslove(res.data.body)
        } else {
          Toast.hide()
          Toast.offline(res.data.msg, 5)
          reject(res)
        }
      })
      .catch(function (err) {
        Toast.hide()
        Toast.fail(err.msg || '加载失败，请重试', 5)
        reject(err)
      })
  })
}
export default request
