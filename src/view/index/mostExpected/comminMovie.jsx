import React,{Component} from 'react'
import store from '../../../store/store'
import {comminlist,comminacrosslist} from './actionCreator'
import Listfile from '../../../component/listfile/listfile'
import style from  './comminMovie.module.scss'
import Swiper from '../../../component/swiper/swiper'
class Commin extends Component{
    constructor(props){
        super(props);
        this.state={
            comminglist:[],
            comminacrosslist:[] // 开头轮播图的数据
        }
    }

    render() {
        return(
            <div id={style.commin}>
                <Swiper {...this.props} comminacrosslist={this.state.comminacrosslist}/>
                <ul className={style.vertical}>
                    {
                        this.state.comminglist.map(item=>(
                            <Listfile {...this.props} key={item.id} id={item.id}>
                                <h1>{item.nm}</h1>
                                <img src={item.img.replace('w.h','128.180')}/>
                            </Listfile>
                        ))
                    }
                </ul>

            </div>
        )
    }
    componentDidMount() {
        if (store.getState().comminglistReducer.length === 0){
            store.dispatch(comminlist());
            store.dispatch(comminacrosslist())
        }else {
            this.setState({
                comminglist:store.getState().comminglistReducer,
                comminacrosslist:store.getState().comminacrosslistReducer
            })
        }
        store.subscribe(()=>{
            this.setState({
                comminglist:store.getState().comminglistReducer,
                comminacrosslist:store.getState().comminacrosslistReducer

            })
        })
    }

}
export default Commin
