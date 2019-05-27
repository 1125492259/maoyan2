import React,{Component} from "react"
import "./index.css"
import {NavLink} from "react-router-dom"
class Search extends Component{
	render(){
		return <div id="search">

		      <div className="se_1">
		         <div className="se_2">
		           <img src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" alt=""/>
		           <input type="text" placeholder="搜电影"/>
		         </div>
		         <NavLink className="se_3" to="/film/nowplaying">取消</NavLink>
		      </div>
     
		</div>
	}
}
export default Search