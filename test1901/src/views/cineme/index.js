import React,{Component} from "react"
import "./index.css"
import axios from "axios"

class Cineme extends Component{
	state={
		list:[],
    animating:true
	}
	componentDidMount(){
		axios.get("/ajax/cinemaList?day=2019-05-24&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1558677556932&cityId=65").then(res=>{
			console.log(res.data);
			this.setState({
				list:res.data.cinemas
			})
		})		
	}
	render(){
		return <div id="cineme">
		     
		      <section className="ci_section">
                 <div className="ci_gray">

                    <div className="ci_city">
                      <span className="ci_name">大连</span>
                      <i className="ci_arrow"></i>
                    </div>
                    <div className="ci_entry">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=" alt=""/>
                      <span>搜影院</span>
                    </div>

                 </div>
		      </section>
              <div className="ci_nav">
                 <div className="ci_tab">
                    <div className="ci_item">
                      全城
                      <span className="ci_drop"></span>
                    </div>
                    <div className="ci_item">
                      品牌
                      <span className="ci_drop"></span>
                    </div>
                    <div className="ci_item">
                      特色
                      <span className="ci_drop"></span>
                    </div>
                 </div>
              </div>
              

              {
              	this.state.list.map(item=>
                    <div className="ci_cinema">
                    
                        <div className="ci_box">
                            <div className="box_1">
                               <div className="box_11">
                                  <span className="sp_1">{item.nm}</span>
                                  <span className="sp_2">
                                     <span>{item.sellPrice}</span>
                                     <span>元起</span>
                                  </span>
                               </div>
                            </div>
                            <div className="box_2">
                               <div className="box2_addr">
                                  {item.addr}
                               </div>
                               <div className="box2_ddd">{item.distance}</div>
                               
                            </div>
                            <div className="box_3">
                                <div className="box31">退</div>
                                <div className="box32">改签</div>
                                <div className="box33">小吃</div>
                                <div className="box34">折扣卡</div>
                                <div className="box35">4K厅</div>
                            </div>
                            <div className="box_4">
                                <div className="box4_1">
                                   <div className="box4_img">
                                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt=""/>
                                   </div>
                                   <div className="box_kk">{item.promotion.cardPromotionTag}</div>
                                </div>
                        </div>
                      </div>
                    </div>

              	)
              }

              <div className="box_0">
                 <img className="box0_img1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACI0lEQVRoQ+2Z4VHDMAxGlQ3KBLABMAFsUDYAJkCdAJgAbQBswAbABLABMAFsYE53Mee2VmLZsZXekT/c0TT2iz8/y24HO351O95/+AdoNYKIuOi67tw5d0xEF77d2Y8AIh4AwDUAnAHAAgAuiehh9gCr1WrpnEMAOA1G+YuIGOjvmtUIBDHhjq91tO/xLRHdzA4gEhNpau0R0c9sAISYSJ1/DCev2RxIiIkEwPZ53/yw2RxQxCQG8EpE4WRuN4mVMZHe/po6q8+BgpjEALbUWQ2gMCbS299S5+QAE8UkWZ2TAEwcE5U6iwAqxUSlziyAyjFRqTMZoFFM1OocBWgcE7U6RQCDmGSpc3AE+rfPpSwv3Ud9WXsotVTp/1tVp9ROci2EiAzjgRiOIfcrAESrzmKA2AN4kvdQHoz/nhRCRavOKgDSQ4MY8u5JAyRWnU0BfGOIyKcH94oREatOKwCO1FsiwGDVaQLAjSKiSwQYrDotAXgbmKLhZHWOrsSJbyzpNkR8AoDlyM0qdbYGYBPxydrQpVJnawBe9J4Heq9WZ2sAXrE/BgDU6mwKMGKiLHVaALwIK3KWOi0ACACuIjHKUqcFAJ82320AZKvTAiBmomx1WgBw2f0dNFykzuYAvYk+gw1QkTqtALyJitVpBeBLimJ1WgH4zU2xOq0AeHODsZ+Jkspa4abkU4mSRvx3+WQj9jNRybObApR0VPruP0CNt6p55i/PKfMxjSGtyAAAAABJRU5ErkJggg==" alt=""/>
                 <span>定位失败，请重新选择</span>
                 <div>
                    <img className="box0_img2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEUElEQVRoQ91aTVbbSBCuEkjbkBMMc4KBE4ScgOQEMzlB8ILWYxWy4qm8sHOCkBMETjDkBHFOEDjBMFt+VHmfX8tPltQ/tuzgpJcgdddX9VV16SszbcgqiuIVEY2Y+coY8ybWLI59cN3PicgVEb3AOar6Ps/z05gzNwnABREdWgDXeZ7/uREARORFmqbfBoPBrc8gEfmHiD5WzzDzy+PjY0TFu1YWARjKzAeqekBEe0S04zj5SlUnRDTJsuyyAjYajXbu7u6umfmZjcKnPM8Ban0Azs7OdpMkecvMOMhlsM8AROWCmT/B20VRnDPz3/aFW2PM87UAgOFbW1vviCjooZABtf+DLt+I6G31N1V9nec5csO5FqaQiOAAVIhlPL4Anumjl8YYlNf+ACxHPzKzd0NVhRenXkuSZC4JVXW3yhFm/isGTZqmz30FICoCMP7+/v5fm5ytc2E0M48fHx+vTk5OrmMMs/kDCh5Viet4740x5ty1ZxCA5ftXB2VuQCffASEwNrJHHiBfjDGobJ3LC8DneVWNKnM+ANb4Q1vFOo0MneMFICKgTdfG3rCGvD4cDnFfoFw6q5iq/k9E4yzLxkvlQFEU4OaoaUzsDekCYSn53QNySss0TS9Ctzf26IyAh/e9PI8D0XUy8+cOAF9UdRyq+y2HdnmicSNOHwlxMUSb6v82r9BK/FHtW5blaWz1CgJwhPjGGLMba2ToOYB4eHjY297ensTQxLdfi0Jd3iei3tQJgVr2/y0AIvJfo+Z76/CyB6/qvTkAjgTbWO+3qpCIjOvdIB4I9SKr8uSy+8xFoP5dajfcaPp0RUDrnljk43pZD/Z9bxaBrvIZ80HR14C+788A2P4Evc9s9W0b+hoX874XABHtG2Nwa27s+r0B/FIUAkdEpFmFgqrAU3OreRPf1r9Pf6kyaiMwE1itZ4OyxqZF4JSZIVjN1qa0EsPhEMIvWvAP9Ra82UpA04QCUV9P3sw1erSJMWa/MrCrnYauM/1asgsDh5dPRZWuDsEYM7O764Om9TH/lC1FxwfWXIPZAtCUueF5VY0eOKwyUiLSonTzbupUJYqiaCUzEX0wxkBB+2lLRJCPAFGtVnvvFLZEpJkL2OSnJbSIYFrTFL5avZkTQFd3at2w9gaviwGuS9UrLTqotNZIFEWBUescVaF+53lep9KMU0F12iGzILGhog1WlRBW8IJiN6fFwvgsyw5c+lEQAAz0gECeDBaVA5ugPVOfmzRN95YSd5uHuEBUl52qntenjqHI2AvqUFVx77RUP3i+LMtXIckxKgKVMZjlgjq+iYqqXiRJMinLEiPTuWkNM++UZXnAzOCzc2gBHTbLsqMY2XEhAABiPYeRz/RnASteN4jIIpRcGEAjGgh/1LDOB7QaZsT+PqK+19IAqk1wX5RliQsHuv90yr7AusREs8+MrTeAurHoXTBGtUnZqtvoqYjoGuPXmN9BxDjiB9YfOU/rFhCmAAAAAElFTkSuQmCC" alt=""/>
                 </div>
              </div>

		</div>
	}
}
export default Cineme