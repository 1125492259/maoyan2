import React,{Component} from "react"
import "./index.css"
import axios from "axios"
import 'antd/dist/antd.css';
import { Carousel } from 'antd';


class Comingsoon extends Component{
	state={
		list:[],
		setlist:[1,1,1,1]
	}
    componentDidMount(){
    	axios.get("/ajax/comingList?ci=65&token=&limit=10").then(res=>{
    		console.log(res.data);
    		this.setState({
    			list:res.data.coming
    		})
    	}).then(()=>{
    		console.log(111)
    	})
    }
        getPath(path){
        return path.replace('w.h','128.180')
    }
	render(){
		return <div id="coming">
		  
		     
		      <div className="com_swipe">
                   <p>近期最受期待</p>
                 <Carousel autoplay>
     		         <div className="dom_i">
     		          <img src="https://p0.meituan.net/170.330/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg" width="300" height="300" alt=""/>
     		          <span className="com_wish">
                           <span>303084</span>人想看
     		          </span>
     		          <h5>哥斯拉2</h5>
     		          <p>5月31日</p>
     		         </div>
         		         <div className="dom_i">
         		          <img src="https://p0.meituan.net/170.230/movie/47af2656af6cd0110057bc527b862c665484423.jpg" alt=""/>
         		          <span className="com_wish">
                               <span>239645</span>人想看
         		          </span>
         		          <h5>X战警</h5>
         		          <p>6月6日</p>
         		         </div>
         		      <div className="dom_i">
         		          <img src="https://p0.meituan.net/170.230/movie/e11213b2676bcf6f4eac41c482af2bdd327884.jpg" alt=""/>
         		          <span className="com_wish">
                               <span>239645</span>人想看
         		          </span>
         		          <h5>少年的你</h5>
         		          <p>6月27日</p>
         		         </div>
         		         <div className="dom_i">
         		          <img src="https://p1.meituan.net/170.230/moviemachine/ced8d9b1ea941aa333104ce4fa371f05203502.jpg" alt=""/>
         		          <span className="com_wish">
                               <span>239645</span>人想看
         		          </span>
         		          <h5>扫毒2天地</h5>
         		          <p>7月21日</p>
         		         </div>
         		         <div className="dom_i">
         		          <img src="https://p0.meituan.net/170.230/movie/2a275c68da26ab87757cdeb213c98bc73651258.png" alt=""/>
         		          <span className="com_wish">
                               <span>239645</span>人想看
         		          </span>
         		          <h5>黑衣人:</h5>
         		          <p>6月14日</p>
         		         </div>
                   </Carousel>

		         
		         
		      </div>
              <div className="com_center">
              </div>

            
		      <div className="com_bot">
		         <div>
		            <p className="group-date">5月24日 周五</p>
		            {
		            	this.state.list.map(item=>
		            <div className="com_item" key={item} onClick={this.hdclick.bind(this,item)}> 
		              <div className="com_block">
                            <img src={this.getPath(item.img)} alt=""/>
		              </div>

		              <div className="com_longzhu">
		                  <div className="com_1">{item.nm}</div>
		                  <div className="com_2">
                              <span>{item.wish}</span>
                              <span>人想看</span>
		                  </div>
		                  <p className="com_zy">主演：{item.star}</p>
		                  <p className="com_sy">{item.rt}上映</p>
		              </div>

		              <div className="com_yushou">
		                 <span className="com_ys">预售</span>
		              </div>

		            </div>
		            	)
		            }


		         </div>
		      </div>
		</div>
	}

	hdclick(id){
		console.log(this.props);
		this.props.history.push(`/detail/${id}`);
	}
}
export default Comingsoon