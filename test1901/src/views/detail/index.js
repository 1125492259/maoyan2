import React,{Component} from 'react';
import './index.css'

class Detail extends Component{
  render(){
    return <div id="detail">
          
          <div className="de_top">
             <div className="de_img1">
                 <img className="de_img" src="http://p1.meituan.net/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg@177w_249h.webp" alt=""/>
             </div>
             <div className="de_font">
                <div className="de_font1">
                   <span>哥斯拉2 : 怪兽之王</span>
                </div>
                <div className="de_font2">
                    Godzilla: King of the Monsters
                </div>
                <div className="de_font3">
                    <span>302689</span>
                    <span>人想看</span>
                </div>
                <div className="de_font4">
                    <span>科幻,灾难,动作</span>
                    <span>3DIMAX</span>
                </div>
                <div className="de_font4">
                    <span>美国</span>
                    <span>/</span>
                    <span>132分钟</span>
                </div>
                <div className="de_font4">
                    <span>2019-05-31</span>
                    <span>大陆上映</span>
                </div>
             </div>
          </div>

          <div className="de_center">
             <div className="de_th">
                <span>特惠购票</span>
             </div>
             <div className="de_bh">
                <p>
                  随着《哥斯拉》和《金刚：骷髅岛》在全球范围内的成功，华纳兄弟影片公司和传奇影业联手开启了怪，它们将展开王者争霸，人类的命运岌岌可危
                </p>
             </div>
          </div>

          <div className="de_teshu">
          </div>

          <div className="de_bot">
              <div className="de_bot1">
                 <div className="de_bot2"><span>观影小贴士</span></div>
                 <div className="de_bot3">
                     <span><img src="//p0.meituan.net/mmdb/8f52014d6b15bf93415d10cdcd16cbf52917.png" alt=""/></span>
                     <span>有一个菜单,在片尾曲后出现</span>
                 </div>
              </div>
          </div>

          <div className="de_teshu">
          </div>

          <div className="de_bobo">
             <div>
                 <span>资讯</span>
             </div>
             <div className="bobo">
                 <img src="//p0.meituan.net/movie/5f2fc4e022ea5be988f920b916232bf8232831.jpg@100w_75h_1e_1c.webp" alt=""/>
                 <p>《哥斯拉2：怪兽之王》千场点映，观众：怪兽片的正确打开方式</p>
             </div>
          </div>


    </div>
  }

  componentDidMount(){
  	console.log(this.props.match.params.id)
  }
}

export default Detail;