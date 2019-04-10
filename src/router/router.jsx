import React from 'react'
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import App from '../App' // 入口页面
import Index from '../view/index/index' // 首页
import Login from '../view/login/login' // 登录页
import Detail from '../view/detail/detail' // 详情页
import Hot from '../view/index/movieOn/hotMovie' // 首页下的热播
import Commin from '../view/index/mostExpected/comminMovie' // 首页下的即将播放
import Cinema from '../view/cinema/cinema' // 电影院
import Center from '../view/center/center' // 个人中心
const isRouter = ()=>true;
const projectRouter = (
    <Router>
        <App>
            <Switch>
                <Route path='/index' component={()=>(
                    <Index>
                        <Switch>
                            <Route path='/index/hot' component={Hot}/>
                            <Route path='/index/commin' component={Commin}/>
                            <Redirect from='/index' to='/index/hot'/>
                        </Switch>
                    </Index>
                )}/>
                <Route path='/login' component={Login}/>
                <Route path='/cinema' component={Cinema}/>
                <Route path='/detail/:id' component={Detail} exact/>

                // 路由守卫
                <Route path='/center' render={()=>
                    isRouter()?
                        <Center/>
                        :
                        <Redirect to='/login'/>


                }/>
                <Redirect from='*' to='/index'/>
            </Switch>
        </App>
    </Router>
);
export default projectRouter
