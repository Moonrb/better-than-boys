import {ADD_COMMINGLIST} from '../../../store/type'
import axios from 'axios'
var CancelToken = axios.CancelToken;
var source = CancelToken.source();
export const comminlist = ()=>axios.get('/ajax/comingList?ci=197&token=&limit=10',{
    cancelToken: source.token
})
    .then(res=>({
        type:ADD_COMMINGLIST,
        payload:res.data.coming
    }));

export const cancel = ()=>{
    source.cancel();
};
