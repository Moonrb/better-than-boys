import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import style from './navber.module.scss'
class Navber extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <ul id={style.nav}>
                <li><NavLink to='/index/hot' activeClassName={style.ico} replace>热播列表</NavLink></li>
                <li><NavLink to='/index/commin' activeClassName={style.ico} replace>即将播放</NavLink></li>
            </ul>
        )
    }
}
export default Navber






