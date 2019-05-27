import React,{Component} from "react"
import "./index.css"
import {NavLink} from "react-router-dom"
import "../../static/font_o/iconfont.css"



class Film extends Component{
	render(){
		return <div id="film_film">
		   <div className="film_div">
		   
		    <ul>
		    <li>
		      <span className="city-name">大连</span>
              <i className="city-entry-arrow"></i>
		    </li>
            <li><NavLink to="/film/nowplaying" activeClassName="active1">正在上映</NavLink></li>
            <li><NavLink to="/film/comingsoon" activeClassName="active1">即将上映</NavLink></li>
            <li>
            <div>
                 <NavLink to="/film/search">搜索</NavLink>
            </div>
            </li>
            </ul> 
		   <div>{this.props.children}</div>
		</div>
		
		      
		      
		</div>

	}
}
export default Film;