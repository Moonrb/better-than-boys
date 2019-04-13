import React,{Component} from 'react'
import style from './catheader.module.scss'
class Catheader extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div id={style.catheader}>
                <h1>{this.props.tital}</h1>
                <h2>
                    {this.props.children}
                </h2>
            </div>
        )
    }
}
export default Catheader
