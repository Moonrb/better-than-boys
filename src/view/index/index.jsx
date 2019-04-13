import React,{Component} from 'react'
import Navber from  '../../component/navber/navber'
import Head from '../../component/catheader/catheader'
// import style from './index.module.scss'
class Index extends Component{
    constructor(props){
        super(props);
        this.state={

            title:'猫眼电影'
        }
    }
    render() {
        return(
            <div>
                <Head tital={this.state.title}/>
                <Navber/>
                {this.props.children}
            </div>
        )
    }
}
export default Index
