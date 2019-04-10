import {ADD_HOTLIST} from  '../type'
export  const hotlistReducer = (prevstate=[],action={})=>{
    let {payload,type} =action;
    switch (type){
        case ADD_HOTLIST:
            return [...prevstate,...payload];
        default:
            return prevstate
    }
};
