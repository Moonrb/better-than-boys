import React,{Component} from 'react'
import style from './detail.module.scss'
import store from '../../store/store'
import {detaillist} from  './actionCreator'
import Catheater from  '../../component/catheader/catheader'
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
                <Catheater tital={this.state.detaillist.nm}>
                </Catheater>
                <h1>{this.state.detaillist.nm}</h1>
                {
                    this.state.detaillist.img?
                        <img src={this.state.detaillist.img.replace('w.h','200.200')} alt=""/>
                        :
                        null
                }


            </div>
        )
    }
    componentDidMount() {
            store.dispatch(detaillist(this.props.match.params.id));
            store.subscribe(()=>{
            this.setState({
                detaillist:store.getState().detaillistReducer
            })

        })
    }

}
export default Detail
