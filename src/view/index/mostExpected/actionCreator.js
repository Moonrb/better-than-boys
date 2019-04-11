import {ADD_COMMINGLIST,ADD_ACROSSCOMMINGLIST} from '../../../store/type'
import axios from 'axios'
export const comminlist = ()=>axios.get('/ajax/comingList?ci=197&token=&limit=10',{
})
    .then(res=>({
        type:ADD_COMMINGLIST,
        payload:res.data.coming
    }));

export const comminacrosslist = ()=>axios.get('/ajax/mostExpected?ci=197&limit=10&offset=0&token=')
    .then(res=>({
        type:ADD_ACROSSCOMMINGLIST,
        payload:res.data.coming
    }));


