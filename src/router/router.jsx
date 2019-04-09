import React from 'react'
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import App from '../App' // 入口页面
import Index from '../view/index/index' // 首页
import Login from '../view/login/login' // 登录页
import Detail from '../view/detail/detail' // 详情页

const projectRouter = (
    <Router>
        <App>
            <Switch>
                <Route path='/index' component={()=>(
                    <Index>

                    </Index>
                )}/>
                <Route path='/login' component={Login}/>
                <Route path='/detail/:id' component={Detail} exact/>
                <Redirect from='*' to='/index'/>
            </Switch>
        </App>
    </Router>
)
export default projectRouter
