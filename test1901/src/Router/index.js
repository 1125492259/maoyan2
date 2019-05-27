import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom'

import React from 'react'
import App from '../App'
import Cineme from '../views/cineme'
import Film from '../views/film'
import Mine from '../views/mine'
import Nowplaying from '../views/film/nowplaying'
import Comingsoon from '../views/film/comingsoon'
import Search from '../views/film/search'
import Meituan from '../views/mine/meituan'
import Shouji from '../views/mine/shouji'
import Detail from '../views/detail'

const router = <Router>
   <App>
      <Switch>
         <Route path="/film" render={()=>
         	<Film>
         	 <Switch>
                <Route path="/film/nowplaying" component={Nowplaying}/>
                <Route path="/film/comingsoon" component={Comingsoon}/>
                <Route path="/film/search" component={Search}/>
                <Redirect from="/film" to="/film/nowplaying"/>
                </Switch>
         	</Film>
         }/>
         <Route path="/cineme" component={Cineme}/>
         <Route path="/detail/:id" component={Detail}/>
         
         <Route path="/mine" render={()=>
            <Mine>
             <Switch>
               <Route path="/mine/meituan" component={Meituan}/>
               <Route path="/mine/shouji" component={Shouji}/>
               <Redirect from="/mine" to="/mine/meituan"/>
             </Switch>
            </Mine>
         }/>

         <Redirect from="/" to="/film"/>
         </Switch>
   </App>    
</Router>

export default router;