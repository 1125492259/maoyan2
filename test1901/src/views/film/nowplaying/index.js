import React,{Component} from "react"
import "./index.css"
import axios from "axios"
import { PullToRefresh, Button } from 'antd-mobile'


class Nowplaying extends Component{
	state={
		datalist:[],
        list:[111],
        refreshing:false
	}
	componentDidMount(){
		axios.get("/ajax/movieOnInfoList?token=").then(res=>{
			console.log(res.data);
			this.setState({
				datalist:res.data.movieList
			})
		})
	}
    getPath(path){
        return path.replace('w.h','128.180')
    }
	render(){
		return <div>
 
        <PullToRefresh
               damping={60}
               style={{
                 height: 1000,
                 overflow: 'auto',
               }}
               
               direction={ 'up'}
               refreshing={this.state.refreshing}
               onRefresh={() => {
                 this.setState({ refreshing: true });
                 setTimeout(() => {
                   var calldata = ["222","333","444"]
                   this.setState({ refreshing: false,
                       list:[...this.state.list,...calldata]
                    });
                 }, 2000);
               }}
             >
               {this.state.list.map(item => (
                 <div key={item} style={{ textAlign: 'center', padding: 20 }}>
                                 {
                                     this.state.datalist.map(item=>

                                      <div className="nowplaying">
                                    <div className="now_left">
                                       <img src={this.getPath(item.img)} alt={item.nm}/>
                                    </div>

                                    <div className="now_ddd">
                                    <div className="now_center">
                                       <div className="now_firstage">
                                           <div className="dztppp">{item.nm}</div>
                                           <span>span</span>
                                       </div>
                                       <div className="now_twoage">
                                          <span>观众评</span>
                                          <span>{item.sc}</span>
                                       </div>
                                       <div className="now_zy">{item.star}</div>
                                       <div className="now_jt">{item.showInfo}</div>
                                    </div>

                                    <div className="now_right">
                                       <div className="buy_p">
                                          <span>购票</span>
                                       </div>
                                    </div>
                                    </div>
                                 </div>

                                     )
                                 }
                 </div>
               ))}
             </PullToRefresh>



		      

		</div>
	}
}
export default Nowplaying
