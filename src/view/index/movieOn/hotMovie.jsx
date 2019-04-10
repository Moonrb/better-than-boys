import React, {Component} from 'react'
import Listfile from '../../../component/listfile/listfile'
import store from '../../../store/store';
import {hotlist, cancel} from './actionCreator'

class Hot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotlist: []
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.hotlist.map(item => (
                            <Listfile {...this.props} key={item.id} id={item.id}>
                                <h1>{item.nm}</h1>
                                <img src={item.img.replace('w.h', '128.180')}/>
                            </Listfile>
                        ))
                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        if (store.getState().hotlistReducer.length === 0) {
            store.dispatch(hotlist())
        } else {
            this.setState({
                hotlist: store.getState().hotlistReducer
            })
        }
        store.subscribe(() => {
            this.setState({
                hotlist: store.getState().hotlistReducer
            })
        })
    }

    componentWillUnmount() {
        cancel();
    }

}

export default Hot
