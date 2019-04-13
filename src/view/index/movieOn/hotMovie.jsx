import React, {Component} from 'react'
import Listfile from '../../../component/listfile/listfile'
import store from '../../../store/store';
import {hotlist, cancel} from './actionCreator'
import style from './hotMovie.module.scss'

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
                <ul className={style.w1}>
                    {
                        this.state.hotlist.map(item => (
                            <Listfile {...this.props} key={item.id} id={item.id}>
                                <img src={item.img.replace('w.h', '128.180')}/>
                                <div>
                                    <h3>{item.nm}</h3>
                                    <p>观众评<span className={style.grade}>{item.sc}</span></p>
                                    <p>主演:{item.star}</p>
                                    <p className={style.last}>{item.showInfo}</p>
                                    <div className={style.butt}>购票</div>
                                </div>
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
