import React,{Component} from 'react'
import store from '../../../store/store'
import {comminlist,cancel} from './actionCreator'
import Listfile from '../../../component/listfile/listfile'
class Commin extends Component{
    constructor(props){
        super(props);
        this.state={
            comminglist:[]
        }
    }

    render() {
        return(
            <div>
                <ul>
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
            store.dispatch(comminlist())
        }else {
            this.setState({
                comminglist:store.getState().comminglistReducer
            })
        }
        store.subscribe(()=>{
            this.setState({
                comminglist:store.getState().comminglistReducer
            })
        })
    }
    componentWillUnmount() {

        cancel();
    }
}
export default Commin
