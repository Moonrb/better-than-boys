import {ADD_DETAILLIST} from '../type'
export const detaillistReducer = (prevstate=[],action={})=>{
    let {payload,type} = action;
    switch (type) {
        case ADD_DETAILLIST:
            return payload;
        default:
            return prevstate
    }

};
