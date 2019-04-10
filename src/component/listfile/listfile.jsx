import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
class Listfile extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <li onClick={this.skipDetail.bind(this,this.props.id)}>
                {this.props.children}
            </li>
        )
    }
    skipDetail(id){
        this.props.history.push(`/detail/${id}`)
    }
}
export default Listfile
