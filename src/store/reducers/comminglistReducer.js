import {ADD_COMMINGLIST,ADD_ACROSSCOMMINGLIST} from  '../type'
export const comminglistReducer = (prevstate=[],action={})=>{
    let {payload,type} =action;
    switch (type){
        case ADD_COMMINGLIST:
            return [...prevstate,...payload];
        default:
            return prevstate
    }
};
export const comminacrosslistReducer = (prevstate=[],action={})=>{
    let {payload,type} =action;
    switch (type){
        case ADD_ACROSSCOMMINGLIST:
            return [...prevstate,...payload];
        default:
            return prevstate
    }
};
