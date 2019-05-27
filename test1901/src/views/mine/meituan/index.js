import React,{Component} from 'react';
import './index.css'

class Meituan extends Component{
  render(){
    return <div id="meituan">
          <ul className="me_ul">
             <li>
                <input type="text" placeholder="账户名/手机号/email"/>
             </li>
             <li>
                <input type="password" placeholder="请输入您的密码"/>
             </li>
          </ul>
          <div className="me_div1">
             <span>登录</span>
          </div>
          <div className="me_div2">
             <span>立即注册</span>
             <span>找回密码</span>
          </div>
          <div className="me_div3">
             <span>@猫眼电影客服电话:</span>
             <span>400-670-5335</span>
          </div>
    </div>
  }
}

export default Meituan;