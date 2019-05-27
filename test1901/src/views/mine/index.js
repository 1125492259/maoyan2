import React,{Component} from "react"
import "./index.css"
import {NavLink} from 'react-router-dom';

class Mine extends Component{
	render(){
		return <div id="mine">
		     
		      <ul className="mine_ul">
		        <li>
		           <NavLink to="/mine/meituan" activeClassName="active">美团账号登录</NavLink>
		           
		        </li>
		        <li>
                    <NavLink to="/mine/shouji" activeClassName="active">手机验证登录</NavLink>
		        </li>
		      </ul>
		      <div>{this.props.children}</div>
		</div>
	}
}
export default Mine