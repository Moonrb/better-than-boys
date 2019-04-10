import {ADD_DETAILLIST} from '../../store/type'
import axios from 'axios'
export const detaillist = (id)=>axios.get(`/ajax/detailmovie?movieId=${id}`,{
})
    .then(res=>({
        type:ADD_DETAILLIST,
        payload:res.data.detailMovie
    }));

;
