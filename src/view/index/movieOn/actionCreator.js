import {ADD_HOTLIST} from '../../../store/type';
import axios from 'axios'
var CancelToken = axios.CancelToken;
var source = CancelToken.source();
 export const hotlist =()=>axios.get('/ajax/movieOnInfoList?token=',{
     cancelToken: source.token
 })
     .then(res=>(
    {
        type:ADD_HOTLIST,
        payload:res.data.movieList
    }
));
export const cancel = ()=>{
    source.cancel();
};
