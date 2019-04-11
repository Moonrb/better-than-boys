import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import reduxPromise from 'redux-promise'; //中间件promise
import {comminglistReducer,comminacrosslistReducer} from './reducers/comminglistReducer' // index下的即将播放列表的reducer
import {hotlistReducer} from './reducers/hotlistReducer' // inde下的热播列表reducer
import {detaillistReducer} from './reducers/detaillistReducer' // 详情页的reducer

const reducer = combineReducers({
    comminglistReducer,
    hotlistReducer,
    detaillistReducer,
    comminacrosslistReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxPromise)
));
export default store
