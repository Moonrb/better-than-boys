import React,{Component} from 'react'
import Navber from  '../../component/navber/navber'
class Index extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <Navber/>
                {this.props.children}
            </div>
        )
    }
}
export default Index
