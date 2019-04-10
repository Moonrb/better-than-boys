import React,{Component} from 'react'
import store from '../../store/store'
import {detaillist} from  './actionCreator'
class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            detaillist:{}
        }
    }
    render() {
        return(
            <div>
                <h1>{this.state.detaillist.nm}</h1>
                <img src={(this.state.detaillist.img).replace('/w.h/','/148.180/+')} alt="图片"/>
            </div>
        )
    }
    componentDidMount() {
            store.dispatch(detaillist(this.props.match.params.id))
            store.subscribe(()=>{
            this.setState({
                detaillist:store.getState().detaillistReducer
            })

        })
    }

}
export default Detail
