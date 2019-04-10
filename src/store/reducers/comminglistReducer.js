import {ADD_COMMINGLIST} from  '../type'
 export const comminglistReducer = (prevstate=[],action={})=>{
    let {payload,type} =action;
        switch (type){
            case ADD_COMMINGLIST:
                return [...prevstate,...payload];
            default:
                return prevstate
        }
    };
